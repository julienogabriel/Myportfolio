import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import crypto from 'crypto';

/**
 * Endpoint Webhook - Reçoit les notifications de Gabriel Chat
 *
 * Quand quelqu'un parle au chatbot Gabriel, ce endpoint reçoit
 * automatiquement une notification avec les détails du message.
 *
 * Flux :
 *   Utilisateur → Gabriel Chat → POST /api/webhook → Ce fichier
 *
 * Headers reçus :
 *   X-Webhook-Event : "message" | "limit_reached" | "account_updated"
 *   X-Webhook-Signature : HMAC-SHA256 du payload (sécurité)
 */

// Stockage des notifications reçues (en mémoire)
const webhookLogs: {
	event: string;
	data: Record<string, unknown>;
	timestamp: string;
	verified: boolean;
}[] = [];

// Secret partagé avec Gabriel Chat (à remplacer par le vrai secret)
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || '';

/**
 * Vérifie la signature HMAC-SHA256 du webhook
 * Cela garantit que le message vient bien de Gabriel Chat
 */
function verifySignature(payload: string, signature: string, secret: string): boolean {
	if (!secret) return false;
	const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
	return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

/**
 * POST /api/webhook
 * Reçoit les notifications webhook de Gabriel Chat
 */
export const POST: RequestHandler = async ({ request }) => {
	try {
		const event = request.headers.get('X-Webhook-Event') || 'unknown';
		const signature = request.headers.get('X-Webhook-Signature') || '';
		const body = await request.text();

		// Vérifier la signature si un secret est configuré
		let verified = false;
		if (WEBHOOK_SECRET && signature) {
			verified = verifySignature(body, signature, WEBHOOK_SECRET);
			if (!verified) {
				console.warn(`[WEBHOOK] Signature invalide pour event=${event}`);
				return json({ error: 'Signature invalide' }, { status: 401 });
			}
		}

		const payload = JSON.parse(body);

		// Logger la notification
		const log = {
			event,
			data: payload.data || payload,
			timestamp: new Date().toISOString(),
			verified
		};
		webhookLogs.unshift(log); // Ajouter au début

		// Garder les 100 dernières notifications max
		if (webhookLogs.length > 100) {
			webhookLogs.length = 100;
		}

		console.log(`[WEBHOOK] Reçu: event=${event}`, JSON.stringify(payload.data || {}).slice(0, 200));

		// --- Ici tu peux ajouter des actions personnalisées ---
		// Exemples :
		// - Envoyer un email quand limit_reached
		// - Logger dans une base de données
		// - Envoyer une notification Telegram/Discord
		// - Mettre à jour un dashboard

		return json({
			success: true,
			message: `Webhook ${event} reçu et traité`
		});
	} catch (err) {
		console.error('[WEBHOOK] Erreur:', err);
		return json({ success: false, message: 'Erreur serveur' }, { status: 500 });
	}
};

/**
 * GET /api/webhook
 * Voir les dernières notifications reçues (pour debug/dashboard)
 */
export const GET: RequestHandler = async () => {
	return json({
		total: webhookLogs.length,
		logs: webhookLogs.slice(0, 20) // Les 20 dernières
	});
};

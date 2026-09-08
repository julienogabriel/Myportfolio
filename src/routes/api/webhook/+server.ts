import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { timingSafeEqual, createHmac } from 'node:crypto';
import { env } from '$env/dynamic/private';

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

function verifySignature(payload: string, signature: string, secret: string): boolean {
	const expected = createHmac('sha256', secret).update(payload).digest('hex');
	const sigBuf = Buffer.from(signature);
	const expectedBuf = Buffer.from(expected);
	if (sigBuf.length !== expectedBuf.length) return false;
	return timingSafeEqual(sigBuf, expectedBuf);
}

/**
 * POST /api/webhook
 * Reçoit les notifications webhook de Gabriel Chat
 */
export const POST: RequestHandler = async ({ request }) => {
	const secret = env.WEBHOOK_SECRET?.trim();
	if (!secret) {
		console.error('[WEBHOOK] WEBHOOK_SECRET non configuré');
		return json({ error: 'Webhook non configuré' }, { status: 500 });
	}

	const event = request.headers.get('X-Webhook-Event') || 'unknown';
	const signature = request.headers.get('X-Webhook-Signature') || '';
	const body = await request.text();

	if (!signature || !verifySignature(body, signature, secret)) {
		console.warn(`[WEBHOOK] Signature invalide pour event=${event}`);
		return json({ error: 'Signature invalide' }, { status: 401 });
	}

	try {
		const payload = JSON.parse(body);

		const log = {
			event,
			data: payload.data || payload,
			timestamp: new Date().toISOString(),
			verified: true
		};
		webhookLogs.unshift(log);

		if (webhookLogs.length > 100) {
			webhookLogs.length = 100;
		}

		console.log(`[WEBHOOK] Reçu: event=${event}`, JSON.stringify(payload.data || {}).slice(0, 200));

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
 * Réservé à l'admin authentifié.
 */
export const GET: RequestHandler = async ({ locals }) => {
	if (!locals.isAdmin) {
		throw error(401, 'Non autorisé');
	}

	return json({
		total: webhookLogs.length,
		logs: webhookLogs.slice(0, 20)
	});
};

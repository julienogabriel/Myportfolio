import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { validateContactForm, type ContactFormData } from '$lib/validation';

// Stockage temporaire des soumissions
const contactSubmissions: (ContactFormData & { timestamp: string })[] = [];

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = (await request.json()) as ContactFormData;

    // Validation
    const validation = validateContactForm(data);
    if (!validation.valid) {
      return json({ success: false, errors: validation.errors }, { status: 400 });
    }

    // Stocker la soumission
    contactSubmissions.push({
      ...data,
      timestamp: new Date().toISOString()
    });

    // TODO: Ajouter intégration email ici
    console.log('Nouvelle soumission contact:', data);

    return json({
      success: true,
      message: 'Message envoyé avec succès!'
    });
  } catch (err) {
    console.error('Erreur API contact:', err);
    return json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
};

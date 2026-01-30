// Validation des emails
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validation du contenu du message
export function validateMessage(message: string): boolean {
  return message.trim().length >= 10 && message.trim().length <= 5000;
}

// Validation du nom
export function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100;
}

// Validation du sujet
export function validateSubject(subject: string): boolean {
  return subject.trim().length >= 3 && subject.trim().length <= 200;
}

// Validation globale du formulaire contact
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!validateName(data.name)) {
    errors.name = 'Le nom doit contenir entre 2 et 100 caractères';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  if (!validateSubject(data.subject)) {
    errors.subject = 'Le sujet doit contenir entre 3 et 200 caractères';
  }

  if (!validateMessage(data.message)) {
    errors.message = 'Le message doit contenir entre 10 et 5000 caractères';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

// Validation pour feedback
export interface FeedbackData {
  rating: number;
  comment: string;
  email?: string;
}

export function validateFeedback(data: FeedbackData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (data.rating < 1 || data.rating > 5 || !Number.isInteger(data.rating)) {
    errors.rating = 'La note doit être entre 1 et 5';
  }

  if (data.comment.trim().length < 3 || data.comment.trim().length > 1000) {
    errors.comment = 'Le commentaire doit contenir entre 3 et 1000 caractères';
  }

  if (data.email && !validateEmail(data.email)) {
    errors.email = 'Adresse email invalide';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

// Validation pour traductions
export interface TranslationRequest {
  sourceLanguage: string;
  targetLanguage: string;
  content: string;
  type: 'document' | 'website' | 'application' | 'other';
  email: string;
}

export function validateTranslationRequest(data: TranslationRequest): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!['fr', 'en', 'mg'].includes(data.sourceLanguage)) {
    errors.sourceLanguage = 'Langue source invalide';
  }

  if (!['fr', 'en', 'mg'].includes(data.targetLanguage)) {
    errors.targetLanguage = 'Langue cible invalide';
  }

  if (data.sourceLanguage === data.targetLanguage) {
    errors.targetLanguage = 'Les langues source et cible doivent être différentes';
  }

  if (data.content.trim().length < 10) {
    errors.content = 'Le contenu doit contenir au moins 10 caractères';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Adresse email invalide';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

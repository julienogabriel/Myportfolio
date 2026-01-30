/**
 * Constantes du portfolio
 */

export const COLORS = {
  primary: '#3b82f6',      // Blue
  secondary: '#8b5cf6',    // Purple
  accent: '#ec4899',       // Pink
  success: '#10b981',      // Green
  warning: '#f59e0b',      // Amber
  error: '#ef4444',        // Red
  neutral: '#6b7280'       // Gray
};

export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700
};

export const TRANSITION_EASING = {
  linear: 'linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out'
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  SERVICES: '/services',
  CONTACT: '/contact',
  FEEDBACK: '#feedback',
  TRANSLATION: '/services/translation',
  DOCUMENTS: '/documents'
};

export const API_ENDPOINTS = {
  CONTACT: '/contact',
  FEEDBACK: '/feedback',
  TRANSLATION: '/translate',
  SURVEY: '/survey'
};

export const FORM_VALIDATION = {
  NAME_MIN: 2,
  NAME_MAX: 100,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 5000,
  PHONE_PATTERN: /^[+\d\s-()]+$/
};

export const LANGUAGES = {
  FR: 'fr',
  EN: 'en',
  MG: 'mg'
};

export const SERVICE_TYPES = {
  DOCUMENT: 'document',
  WEBSITE: 'website',
  APPLICATION: 'application',
  OTHER: 'other'
};

export const RATING_SCALE = {
  TERRIBLE: 1,
  POOR: 2,
  AVERAGE: 3,
  GOOD: 4,
  EXCELLENT: 5
};

export const FEEDBACK_SOURCES = {
  WEBSITE: 'website',
  SOCIAL: 'social',
  REFERRAL: 'referral',
  OTHER: 'other'
};

export const ERROR_MESSAGES = {
  GENERIC: 'Une erreur s\'est produite. Veuillez réessayer.',
  NETWORK: 'Erreur réseau. Vérifiez votre connexion internet.',
  VALIDATION: 'Veuillez vérifier vos données.',
  NOT_FOUND: 'La ressource n\'a pas été trouvée.',
  FORBIDDEN: 'Accès refusé.',
  SERVER_ERROR: 'Erreur serveur. Veuillez réessayer plus tard.'
};

export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Votre message a été envoyé avec succès!',
  FEEDBACK_RECEIVED: 'Merci pour votre feedback!',
  TRANSLATION_REQUESTED: 'Demande de traduction envoyée!',
  DOCUMENT_DOWNLOADED: 'Document téléchargé!',
  COPIED: 'Copié dans le presse-papiers!'
};

export const PLACEHOLDERS = {
  NAME: 'Votre nom',
  EMAIL: 'votre@email.com',
  SUBJECT: 'Sujet de votre message',
  MESSAGE: 'Décrivez votre message...',
  PHONE: '+261 XX XXX XX XX',
  COMMENT: 'Votre commentaire...'
};

// Cache configuration
export const CACHE_CONFIG = {
  ONE_HOUR: 3600,
  ONE_DAY: 86400,
  ONE_WEEK: 604800,
  ONE_MONTH: 2592000
};

// Regex patterns
export const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^https?:\/\/.+/,
  PHONE: /^[+\d\s-()]+$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  HASHTAG: /#\w+/g,
  MENTION: /@\w+/g
};

// Pagination
export const PAGINATION = {
  DEFAULT_LIMIT: 10,
  DEFAULT_PAGE: 1,
  MAX_LIMIT: 100
};

// Request timeouts (en ms)
export const TIMEOUTS = {
  SHORT: 3000,
  NORMAL: 10000,
  LONG: 30000,
  VERY_LONG: 60000
};

export const DEFAULT_FORM_DATA = {
  name: '',
  email: '',
  subject: '',
  message: '',
  rating: 0,
  comment: '',
  sourceLanguage: 'fr',
  targetLanguage: 'en',
  content: '',
  type: 'document'
};

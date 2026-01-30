import { writable } from 'svelte/store';
import type { Language, Translations } from './types';

// Traductions FR
const fr: Translations = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    projects: 'Projets',
    contact: 'Contact',
    cv: 'CV',
    documentation: 'Documentation'
  },
  home: {
    welcome: 'Bienvenue',
    name: 'Gabriel',
    roles: ['Développeur Full-Stack', 'Expert UI/UX', 'Architecte Cloud', 'Passionné de Tech'],
    description: 'Je crée des expériences digitales exceptionnelles en combinant design moderne, code performant et technologies de pointe.',
    cta_projects: 'Voir mes projets',
    cta_contact: 'Me contacter',
    stats: {
      experience: "Années d'expérience",
      projects: 'Projets réalisés',
      clients: 'Clients satisfaits',
      technologies: 'Technologies maîtrisées'
    }
  },
  services: {
    title: 'Mes Services',
    subtitle: 'Des solutions complètes et personnalisées',
    web: { title: 'Développement Web', description: 'Création de sites et applications web performants' },
    backend: { title: 'Développement Backend', description: 'Conception d\'API sécurisées et performantes' },
    uiux: { title: 'UI/UX Design', description: 'Design d\'interfaces modernes et intuitives' },
    devops: { title: 'DevOps & CI/CD', description: 'Mise en place d\'automatisations pour le déploiement' },
    pm: { title: 'Gestion de projet', description: 'Planification et suivi avec méthodes agiles' },
    consulting: { title: 'Consulting IT', description: 'Conseil en architecture logicielle' },
    translation: { title: 'Services de Traduction', description: 'Traduction professionnelle (FR, EN, MG)' },
    documentation: { title: 'Mise en page & Documentation', description: 'Documents professionnels structurés et mis en page' }
  },
  contact: {
    title: 'Me Contacter',
    subtitle: 'Discutons de votre projet',
    name: 'Nom',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi en cours...',
    success: 'Message envoyé !',
    error: 'Erreur lors de l\'envoi'
  },
  footer: { copyright: '© 2026 Gabriel', followMe: 'Suivez-moi' },
  common: { learnMore: 'En savoir plus', viewMore: 'Voir plus', download: 'Télécharger', back: 'Retour', close: 'Fermer', loading: 'Chargement...' }
};

// Traductions EN
const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'Resume',
    documentation: 'Documentation'
  },
  home: {
    welcome: 'Welcome',
    name: 'Gabriel',
    roles: ['Full-Stack Developer', 'UI/UX Expert', 'Cloud Architect', 'Tech Enthusiast'],
    description: 'I create exceptional digital experiences by combining modern design, performant code and cutting-edge technologies.',
    cta_projects: 'View my projects',
    cta_contact: 'Contact me',
    stats: {
      experience: 'Years of experience',
      projects: 'Projects completed',
      clients: 'Satisfied clients',
      technologies: 'Technologies mastered'
    }
  },
  services: {
    title: 'My Services',
    subtitle: 'Complete and customized solutions',
    web: { title: 'Web Development', description: 'Creation of high-performance websites and applications' },
    backend: { title: 'Backend Development', description: 'Design of secure and high-performance APIs' },
    uiux: { title: 'UI/UX Design', description: 'Modern and intuitive interface design' },
    devops: { title: 'DevOps & CI/CD', description: 'Implementation of deployment automation' },
    pm: { title: 'Project Management', description: 'Planning and tracking with agile methods' },
    consulting: { title: 'IT Consulting', description: 'Software architecture advice' },
    translation: { title: 'Translation Services', description: 'Professional translation (FR, EN, MG)' },
    documentation: { title: 'Document Formatting & Documentation', description: 'Structured and professionally formatted documents' }
  },
  contact: {
    title: 'Contact Me',
    subtitle: 'Let\'s discuss your project',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    success: 'Message sent!',
    error: 'Error sending message'
  },
  footer: { copyright: '© 2026 Gabriel', followMe: 'Follow me' },
  common: { learnMore: 'Learn more', viewMore: 'View more', download: 'Download', back: 'Back', close: 'Close', loading: 'Loading...' }
};

// Traductions MG
const mg: Translations = {
  nav: {
    home: 'Tahiry',
    about: 'Momba ahy',
    services: 'Serivisy',
    projects: 'Asa',
    contact: 'Iombontsoa',
    cv: 'CV',
    documentation: 'Sora-pahantsana'
  },
  home: {
    welcome: 'Tonga soa',
    name: 'Gabriel',
    roles: ['Mpandapatitra Full-Stack', 'Mpahay karazan-javaboina', 'Mpitantana Cloud', 'Fanahy Teknolojia'],
    description: 'Mikaroka aho ny fampiharana nentsiharana fotsiny amin\'ny alalan\'ny fampifangaroana ny endri-javabolana, ny kinina mavesatra ary ny teknolojia amin\'ny sehatr\'anketa.',
    cta_projects: 'Jereo ny asako',
    cta_contact: 'Ifampitsarana ahy',
    stats: {
      experience: 'Taona faritra fanazavana',
      projects: 'Asanombintana',
      clients: 'Clientèle mahakokolkola',
      technologies: 'Teknolojia takatra'
    }
  },
  services: {
    title: 'Ny Serivisy Ahy',
    subtitle: 'Ny vahaolana feno sy tiana',
    web: { title: 'Fampandrosoana Web', description: 'Famoronana saitsika sy fampiharana mahery' },
    backend: { title: 'Fampandrosoana Backend', description: 'Famoronana API azo antoka sy mahery' },
    uiux: { title: 'Endri-javabolana UI/UX', description: 'Famoronana sezam-pahatsoratan-tara' },
    devops: { title: 'DevOps & CI/CD', description: 'Famatsiana ny fiparitahan'otonomia' },
    pm: { title: 'Toeran\'asa Hitatra', description: 'Fanomezana sy fanaraha-maha amin\'ny fomba agile' },
    consulting: { title: 'Konseltasyon IT', description: 'Torohevitra amin\'ny firafitra na rindran\'olona' },
    translation: { title: 'Serivisy Dikan-teny', description: 'Dikan-teny amam-pahaizana (FR, EN, MG)' },
    documentation: { title: 'Fametrofetrana & Sora-pahantsana', description: 'Sora-pahantsana marivato sy amam-pahaizana' }
  },
  contact: {
    title: 'Ifampitsarana ahy',
    subtitle: 'Aoka hisasika ny asa anao',
    name: 'Anarana',
    email: 'Email',
    subject: 'Lohapejy',
    message: 'Hafatantara',
    send: 'Alefa',
    sending: 'Alefana...',
    success: 'Alefa!',
    error: 'Nisy hadisoana'
  },
  footer: { copyright: '© 2026 Gabriel', followMe: 'Araho ahy' },
  common: { learnMore: 'Manatona', viewMore: 'Mahita bebe', download: 'Alefa', back: 'Bujan', close: 'Afa', loading: 'Mipanatona...' }
};

const translations = { fr, en, mg };

function createLanguageStore() {
  // Déterminer la langue initiale
  let initialLang: Language = 'fr';
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'mg') initialLang = saved;
  }

  const { subscribe, set } = writable<Language>(initialLang);

  return {
    subscribe,
    setLanguage: (lang: Language) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
      }
      set(lang);
    },
    getTranslations: (lang: Language) => translations[lang]
  };
}

export const language = createLanguageStore();
export type { Language, Translations };
export { translations };

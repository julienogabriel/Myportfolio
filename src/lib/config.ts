/**
 * Configuration du portfolio
 * Données statiques et paramètres globaux
 */

export const siteConfig = {
  name: 'Gabriel Portfolio',
  description: 'Développeur Full-Stack - UI/UX Designer - Consultant IT',
  url: 'https://myportfolio-pearl-eight-24.vercel.app',
  email: 'julienogabriel@gmail.com',
  phone: '+261 34 01 772 60',
  location: 'FIANARANTSOA, Madagascar',
  
  // Réseaux sociaux
  social: {
    github: 'https://github.com/julienogabriel',
    linkedin: 'https://www.linkedin.com/in/julieno-gabriel-rafanomezantsoa-a17603282',
    twitter: 'https://twitter.com/gabriel_dev',
    whatsapp: 'https://wa.me/261340177260'
  },

  // Informations principales
  stats: {
    experience: '3+',
    projects: '20+',
    clients: '15+',
    technologies: '8'
  },

  // Services offerts
  services: [
    {
      id: 'web-dev',
      title: 'Développement Web',
      icon: '🌐'
    },
    {
      id: 'backend',
      title: 'Développement Backend',
      icon: '⚙️'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: '🎨'
    },
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      icon: '🚀'
    },
    {
      id: 'pm',
      title: 'Gestion de projet',
      icon: '📋'
    },
    {
      id: 'consulting',
      title: 'Consulting IT',
      icon: '💡'
    },
    {
      id: 'translation',
      title: 'Services de Traduction',
      icon: '🌍'
    },
    {
      id: 'documentation',
      title: 'Mise en page & Documentation',
      icon: '📄'
    }
  ],

  // Langues supportées
  languages: [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'mg', name: 'Malagasy', flag: '🇲🇬' }
  ],

  // Technologies
  technologies: [
    { name: 'React', icon: '⚛️' },
    {name:'Angular', icon:'⚛️'},
    { name: 'Svelte', icon: '🔥' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' }
  ],

  // Projets à afficher
  featuredProjects: [
    {
      title: 'Dashboard Analytics',
      category: 'Web',
      featured: true
    },
    {
      title: 'App Mobile E-Commerce',
      category: 'Mobile',
      featured: false
    },
    {
      title: 'Prédiction IA',
      category: 'AI',
      featured: true
    }
  ]
};

// Typages
export interface Service {
  id: string;
  title: string;
  icon: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  featured: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  location: string;
  social: Record<string, string>;
  stats: Record<string, string>;
  services: Service[];
  languages: Language[];
  technologies: Technology[];
  featuredProjects: Project[];
}

/**
 * Data store - Manages projects
 * Uses localStorage for persistence, falls back to defaults
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  featured: boolean;
  github?: string;
  demo?: string;
  year: string;
}

export interface SiteSettings {
  available: boolean;
  heroTitle: string;
  heroSubtitle: string;
}

const STORAGE_KEYS = {
  projects: 'portfolio_projects',
  settings: 'portfolio_settings'
};

export const defaultProjects: Project[] = [
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    category: 'Web',
    description: 'Tableau de bord interactif avec visualisation de donnees en temps reel, gestion multi-utilisateurs et export de rapports. Developpe pour un client dans le secteur logistique.',
    image: '/Dashbord.PNG',
    tags: ['React', 'D3.js', 'API REST'],
    status: 'Projet client',
    featured: true,
    github: '',
    demo: '',
    year: '2025'
  },
  {
    id: 'portfolio',
    title: 'Portfolio personnel',
    category: 'Web',
    description: 'Ce site. Construit avec SvelteKit et Tailwind CSS, deploye sur Vercel.',
    image: '',
    tags: ['SvelteKit', 'Tailwind CSS', 'Vercel'],
    status: 'Projet personnel',
    featured: true,
    github: 'https://github.com/julienogabriel',
    demo: 'https://myportfolio-pearl-eight-24.vercel.app',
    year: '2026'
  },
  {
    id: 'task-manager',
    title: 'Application de gestion de taches',
    category: 'Web',
    description: 'Application web de gestion de taches collaboratives avec notifications, filtres avances et synchronisation temps reel.',
    image: '',
    tags: ['Svelte', 'Node.js', 'PostgreSQL'],
    status: 'Projet client',
    featured: false,
    github: '',
    demo: '',
    year: '2025'
  },
  {
    id: 'restaurant-site',
    title: 'Site vitrine restaurant',
    category: 'Web',
    description: 'Site responsive avec menu dynamique, systeme de reservation en ligne et integration Google Maps.',
    image: '',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
    status: 'Projet client',
    featured: false,
    github: '',
    demo: '',
    year: '2024'
  },
  {
    id: 'api-commerciale',
    title: 'API de gestion commerciale',
    category: 'Backend',
    description: 'API RESTful pour la gestion de stocks, facturation et suivi des commandes. Architecture modulaire avec authentification JWT.',
    image: '',
    tags: ['Node.js', 'Express', 'MongoDB'],
    status: 'Projet client',
    featured: false,
    github: '',
    demo: '',
    year: '2024'
  },
  {
    id: 'traduction-platform',
    title: 'Plateforme de traduction',
    category: 'Web',
    description: 'Outil de gestion des demandes de traduction FR/EN/MG avec suivi de statut et notifications email.',
    image: '',
    tags: ['SvelteKit', 'Firebase', 'Nodemailer'],
    status: 'Projet personnel',
    featured: false,
    github: '',
    demo: '',
    year: '2025'
  }
];

const defaultSettings: SiteSettings = {
  available: true,
  heroTitle: 'Gabriel',
  heroSubtitle: 'Je concois des applications web qui fonctionnent.'
};

function isBrowser() {
  return typeof window !== 'undefined';
}

export const projectStore = {
  getAll(): Project[] {
    if (!isBrowser()) return defaultProjects;
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.projects);
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultProjects;
  },

  save(projects: Project[]) {
    if (!isBrowser()) return;
    localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
  },

  add(project: Project) {
    const all = this.getAll();
    all.push(project);
    this.save(all);
  },

  update(id: string, data: Partial<Project>) {
    const all = this.getAll();
    const idx = all.findIndex(p => p.id === id);
    if (idx !== -1) {
      all[idx] = { ...all[idx], ...data };
      this.save(all);
    }
  },

  remove(id: string) {
    const all = this.getAll().filter(p => p.id !== id);
    this.save(all);
  },

  reset() {
    this.save(defaultProjects);
  }
};

export const settingsStore = {
  get(): SiteSettings {
    if (!isBrowser()) return defaultSettings;
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.settings);
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultSettings;
  },

  save(settings: SiteSettings) {
    if (!isBrowser()) return;
    localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
  },

  update(data: Partial<SiteSettings>) {
    const current = this.get();
    this.save({ ...current, ...data });
  },

  reset() {
    this.save(defaultSettings);
  }
};

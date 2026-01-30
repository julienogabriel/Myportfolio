export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    cv: string;
    documentation: string;
  };
  home: {
    welcome: string;
    name: string;
    roles: string[];
    description: string;
    cta_projects: string;
    cta_contact: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      technologies: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    web: { title: string; description: string };
    backend: { title: string; description: string };
    uiux: { title: string; description: string };
    devops: { title: string; description: string };
    pm: { title: string; description: string };
    consulting: { title: string; description: string };
    translation: { title: string; description: string };
    documentation: { title: string; description: string };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    copyright: string;
    followMe: string;
  };
  common: {
    learnMore: string;
    viewMore: string;
    download: string;
    back: string;
    close: string;
    loading: string;
  };
}

export type Language = 'fr' | 'en' | 'mg';

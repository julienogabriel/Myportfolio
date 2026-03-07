export const articles = [
  {
    slug: 'pourquoi-svelte-en-2026',
    title: 'Pourquoi j\'ai choisi Svelte en 2026',
    excerpt: 'Svelte continue de gagner en popularité. Voici pourquoi c\'est mon framework de prédilection pour les nouveaux projets.',
    date: '2026-03-01',
    readTime: '5 min',
    category: 'Framework',
    tags: ['Svelte', 'JavaScript', 'Frontend'],
    content: `
      <h2>Un framework qui compile, pas qui exécute</h2>
      <p>Contrairement à React ou Vue, Svelte ne livre pas de runtime au navigateur. Votre code est compilé en JavaScript pur lors du build, ce qui donne des applications plus légères et plus rapides.</p>

      <h2>La syntaxe la plus intuitive</h2>
      <p>Avec Svelte, la réactivité est native. Pas besoin de <code>useState</code>, <code>useEffect</code> ou de fonctions spéciales. Une simple variable réassignée met à jour automatiquement le DOM.</p>

      <pre><code>let count = 0;
// C'est tout. La variable est réactive.</code></pre>

      <h2>SvelteKit : le framework full-stack</h2>
      <p>SvelteKit apporte le routing, le SSR, le SSG et les API routes dans un seul package. C'est l'équivalent de Next.js pour React, mais avec la simplicité de Svelte.</p>

      <h2>Performances mesurées</h2>
      <p>Sur les benchmarks, les applications Svelte sont systématiquement parmi les plus rapides. Le bundle initial est 30 à 50% plus petit qu'un équivalent React.</p>

      <h2>Mon verdict</h2>
      <p>Pour les projets où la performance et la maintenabilité comptent, Svelte est un excellent choix. La courbe d'apprentissage est douce et le résultat est toujours satisfaisant.</p>
    `
  },
  {
    slug: 'optimiser-performances-web',
    title: '7 techniques pour optimiser les performances de votre site web',
    excerpt: 'Un site rapide convertit mieux. Voici les techniques que j\'applique sur chaque projet pour garantir des temps de chargement optimaux.',
    date: '2026-02-15',
    readTime: '8 min',
    category: 'Performance',
    tags: ['Performance', 'Web', 'SEO'],
    content: `
      <h2>1. Optimiser les images</h2>
      <p>Les images représentent souvent 60% du poids d'une page. Utilisez le format WebP ou AVIF, et implémentez le lazy loading avec l'attribut <code>loading="lazy"</code>.</p>

      <h2>2. Minifier et compresser</h2>
      <p>Activez la compression Gzip ou Brotli sur votre serveur. La différence est souvent de 70% sur la taille des fichiers texte (HTML, CSS, JS).</p>

      <h2>3. Utiliser un CDN</h2>
      <p>Un CDN distribue vos fichiers statiques depuis des serveurs proches de vos utilisateurs. Vercel et Netlify incluent un CDN par défaut.</p>

      <h2>4. Code splitting</h2>
      <p>Ne chargez que le JavaScript nécessaire pour la page en cours. SvelteKit fait ça automatiquement avec le routing basé sur les fichiers.</p>

      <h2>5. Précharger les ressources critiques</h2>
      <p>Utilisez <code>&lt;link rel="preload"&gt;</code> pour les polices et les ressources CSS critiques afin d'éviter le Flash of Unstyled Content.</p>

      <h2>6. Réduire les requêtes tierces</h2>
      <p>Chaque script externe (analytics, widgets, pubs) ajoute du temps de chargement. Chargez-les de manière asynchrone ou différée.</p>

      <h2>7. Mettre en cache intelligemment</h2>
      <p>Configurez des headers de cache appropriés. Les fichiers avec un hash dans le nom peuvent être mis en cache indéfiniment.</p>
    `
  },
  {
    slug: 'guide-freelance-madagascar',
    title: 'Devenir développeur freelance à Madagascar : mon parcours',
    excerpt: 'Retour d\'expérience sur le freelancing tech depuis Madagascar. Défis, opportunités et conseils pour se lancer.',
    date: '2026-02-01',
    readTime: '6 min',
    category: 'Carrière',
    tags: ['Freelance', 'Carrière', 'Madagascar'],
    content: `
      <h2>Pourquoi le freelance ?</h2>
      <p>Le freelancing offre une flexibilité incomparable et la possibilité de travailler avec des clients internationaux depuis n'importe où. À Madagascar, c'est une opportunité particulièrement intéressante.</p>

      <h2>Les avantages depuis Madagascar</h2>
      <p>Le coût de la vie permet de proposer des tarifs compétitifs tout en maintenant un niveau de vie confortable. Le décalage horaire avec l'Europe (GMT+3) est très gérable pour les réunions.</p>

      <h2>Les défis à surmonter</h2>
      <p>La connectivité internet peut être un défi. J'ai résolu ça en ayant toujours une connexion de backup (4G). Le paiement international nécessite des solutions comme PayPal, Wise ou Western Union.</p>

      <h2>Trouver ses premiers clients</h2>
      <p>J'ai commencé sur des plateformes comme Upwork et Fiverr pour construire ma réputation. Aujourd'hui, la majorité de mes clients viennent du bouche-à-oreille et de mon portfolio.</p>

      <h2>Conseils pour débuter</h2>
      <p>Investissez dans un bon portfolio, soyez réactif dans vos communications, et livrez toujours dans les délais. La confiance se construit projet après projet.</p>
    `
  },
  {
    slug: 'tailwind-css-bonnes-pratiques',
    title: 'Tailwind CSS : les bonnes pratiques que j\'applique au quotidien',
    excerpt: 'Tailwind CSS est puissant mais peut devenir chaotique. Voici comment je structure mes projets pour garder un code propre.',
    date: '2026-01-20',
    readTime: '7 min',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Frontend'],
    content: `
      <h2>Extraire les composants répétitifs</h2>
      <p>Quand une combinaison de classes revient plus de 3 fois, créez un composant Svelte. C'est plus maintenable que les directives <code>@apply</code>.</p>

      <h2>Organiser avec des conventions</h2>
      <p>J'ordonne toujours mes classes dans cet ordre : layout, spacing, sizing, typography, colors, effects. Ça facilite la lecture.</p>

      <h2>Utiliser les variables CSS</h2>
      <p>Tailwind v4 s'intègre nativement avec les custom properties CSS. Définissez vos couleurs et spacing dans <code>:root</code> pour un thème cohérent.</p>

      <h2>Le dark mode bien fait</h2>
      <p>Utilisez la stratégie <code>class</code> pour le dark mode et testez systématiquement les deux modes. Un contraste insuffisant en mode sombre est une erreur fréquente.</p>

      <h2>Responsive mobile-first</h2>
      <p>Commencez toujours par le mobile. Les breakpoints <code>md:</code> et <code>lg:</code> ajoutent de la complexité, pas les styles de base.</p>
    `
  },
  {
    slug: 'api-rest-nodejs-bonnes-pratiques',
    title: 'Créer une API REST robuste avec Node.js',
    excerpt: 'Les fondamentaux pour concevoir des APIs fiables : structure, validation, sécurité et gestion des erreurs.',
    date: '2026-01-10',
    readTime: '10 min',
    category: 'Backend',
    tags: ['Node.js', 'API', 'Backend'],
    content: `
      <h2>Structure du projet</h2>
      <p>Séparez clairement les couches : routes, controllers, services et models. Chaque fichier a une seule responsabilité.</p>

      <h2>Validation des entrées</h2>
      <p>Ne faites jamais confiance aux données entrantes. Utilisez des librairies comme Zod ou Joi pour valider chaque requête avant de la traiter.</p>

      <h2>Gestion des erreurs centralisée</h2>
      <p>Créez un middleware de gestion d'erreurs global. Renvoyez des codes HTTP appropriés (400, 401, 404, 500) avec des messages clairs.</p>

      <h2>Authentification et autorisation</h2>
      <p>Utilisez JWT pour l'authentification stateless. Implémentez des rôles et permissions pour contrôler l'accès aux ressources.</p>

      <h2>Rate limiting</h2>
      <p>Protégez votre API contre les abus avec un rate limiter. 100 requêtes par minute par IP est un bon point de départ.</p>

      <h2>Documentation</h2>
      <p>Une API sans documentation est inutilisable. Utilisez Swagger/OpenAPI pour générer une doc interactive automatiquement.</p>
    `
  }
];

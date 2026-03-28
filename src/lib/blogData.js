export const articles = [
  {
    slug: 'typescript-guide-complet-debutants',
    title: 'TypeScript : le guide complet pour les débutants',
    excerpt: 'Découvrez pourquoi TypeScript est devenu incontournable et comment l\'adopter progressivement dans vos projets JavaScript existants.',
    date: '2026-03-20',
    readTime: '12 min',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Débutant'],
    content: `
      <h2>Pourquoi TypeScript a conquis le monde du développement web</h2>
      <p>TypeScript est un sur-ensemble de JavaScript créé par Microsoft en 2012. Depuis, il est devenu le langage de choix pour la majorité des projets professionnels. Selon le sondage Stack Overflow 2025, TypeScript figure dans le top 5 des langages les plus utilisés et les plus appréciés par les développeurs. Mais qu'est-ce qui le rend si populaire ?</p>
      <p>La réponse tient en un mot : <strong>la sécurité du typage</strong>. En ajoutant un système de types statiques à JavaScript, TypeScript permet de détecter des erreurs avant même d'exécuter le code. Cela signifie moins de bugs en production, un code plus lisible et une meilleure expérience de développement grâce à l'autocomplétion intelligente.</p>

      <h2>Les bases du typage en TypeScript</h2>
      <p>TypeScript introduit plusieurs types de base que tout développeur doit connaître. Les types primitifs incluent <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code> et <code>symbol</code>. Contrairement à JavaScript, vous déclarez explicitement le type de vos variables :</p>
      <pre><code>let nom: string = "Gabriel";
let age: number = 25;
let estActif: boolean = true;
let scores: number[] = [95, 87, 92];
let utilisateur: { nom: string; age: number } = { nom: "Gabriel", age: 25 };</code></pre>
      <p>Cette déclaration explicite peut sembler verbeuse au début, mais TypeScript est suffisamment intelligent pour inférer les types dans la plupart des cas. Vous n'avez pas besoin d'annoter chaque variable : le compilateur comprend que <code>let x = 5</code> est un <code>number</code>.</p>

      <h2>Les interfaces et les types personnalisés</h2>
      <p>L'une des fonctionnalités les plus puissantes de TypeScript est la possibilité de définir vos propres types. Les interfaces décrivent la forme d'un objet, tandis que les alias de type (<code>type</code>) offrent plus de flexibilité :</p>
      <pre><code>interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  role: "admin" | "editeur" | "lecteur";
  dateInscription: Date;
}

type Reponse&lt;T&gt; = {
  succes: boolean;
  donnees: T;
  message?: string; // Le ? rend la propriété optionnelle
};</code></pre>
      <p>Les interfaces peuvent être étendues, ce qui favorise la réutilisation et la composition. Par exemple, une interface <code>Admin</code> peut étendre <code>Utilisateur</code> en ajoutant des permissions spécifiques. Cette approche orientée contrat rend votre code plus prévisible et plus facile à maintenir.</p>

      <h2>Les génériques : écrire du code réutilisable</h2>
      <p>Les génériques permettent de créer des fonctions et des classes qui fonctionnent avec plusieurs types tout en conservant la sécurité du typage. Imaginons une fonction qui récupère des données depuis une API :</p>
      <pre><code>async function fetchData&lt;T&gt;(url: string): Promise&lt;T&gt; {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur réseau");
  return response.json() as T;
}

// Utilisation avec un type spécifique
const utilisateurs = await fetchData&lt;Utilisateur[]&gt;("/api/utilisateurs");
const produit = await fetchData&lt;Produit&gt;("/api/produits/1");</code></pre>
      <p>Sans les génériques, vous seriez obligé de dupliquer cette fonction pour chaque type de donnée ou de recourir au type <code>any</code>, ce qui annule les avantages de TypeScript.</p>

      <h2>Migrer un projet JavaScript existant vers TypeScript</h2>
      <p>La migration vers TypeScript ne doit pas se faire en une seule fois. Voici l'approche progressive que je recommande à mes clients :</p>
      <p><strong>Étape 1 : Configurer le projet.</strong> Ajoutez TypeScript comme dépendance de développement et créez un fichier <code>tsconfig.json</code> avec des options permissives au départ (<code>"strict": false</code>, <code>"allowJs": true</code>). Cela vous permet de mixer des fichiers .js et .ts pendant la transition.</p>
      <p><strong>Étape 2 : Renommer progressivement.</strong> Commencez par renommer vos fichiers <code>.js</code> en <code>.ts</code> un par un, en commençant par les fichiers utilitaires et les modules les plus simples. Corrigez les erreurs de type au fur et à mesure.</p>
      <p><strong>Étape 3 : Activer le mode strict.</strong> Une fois que tous les fichiers sont en TypeScript, activez progressivement les options strictes : <code>strictNullChecks</code>, <code>noImplicitAny</code>, puis finalement <code>"strict": true</code>. Chaque activation révélera de nouveaux problèmes potentiels dans votre code.</p>
      <p><strong>Étape 4 : Typer les dépendances.</strong> Installez les packages <code>@types/*</code> pour vos dépendances tierces. La plupart des bibliothèques populaires ont des définitions de types disponibles sur DefinitelyTyped.</p>

      <h2>Les erreurs courantes des débutants</h2>
      <p>Après avoir accompagné plusieurs développeurs dans leur apprentissage de TypeScript, voici les erreurs que je rencontre le plus souvent :</p>
      <p><strong>Abuser de <code>any</code>.</strong> C'est tentant de mettre <code>any</code> partout pour faire disparaître les erreurs, mais cela revient à désactiver TypeScript. Utilisez plutôt <code>unknown</code> quand vous ne connaissez pas le type, puis affinez-le avec des gardes de type.</p>
      <p><strong>Ignorer les types d'union.</strong> TypeScript gère nativement les valeurs qui peuvent être de plusieurs types. Au lieu de <code>any</code>, utilisez <code>string | number</code> ou des unions discriminées pour modéliser vos données avec précision.</p>
      <p><strong>Ne pas exploiter l'inférence.</strong> TypeScript est excellent pour deviner les types. N'annotez que quand c'est nécessaire : les paramètres de fonction, les retours de fonction complexes, et les variables dont le type n'est pas évident.</p>

      <h2>Conclusion : par où commencer ?</h2>
      <p>Si vous débutez avec TypeScript, commencez par un petit projet personnel. Créez une API REST simple avec Express et TypeScript, ou convertissez un composant Svelte ou React existant. L'investissement en temps est modeste — quelques jours suffisent pour être productif — et les bénéfices sur la qualité de votre code sont considérables. TypeScript n'est pas juste une tendance passagère : c'est devenu le standard de l'industrie, et le maîtriser est un atout majeur pour votre carrière de développeur.</p>
    `
  },
  {
    slug: 'securite-applications-web',
    title: 'Sécurité des applications web : les 10 failles à connaître',
    excerpt: 'De l\'injection SQL au XSS, découvrez les vulnérabilités les plus courantes et comment protéger efficacement vos applications.',
    date: '2026-03-10',
    readTime: '11 min',
    category: 'Sécurité',
    tags: ['Sécurité', 'Web', 'OWASP'],
    content: `
      <h2>Pourquoi la sécurité web est l'affaire de tous les développeurs</h2>
      <p>En 2025, le coût moyen d'une violation de données a atteint 4,88 millions de dollars selon IBM. Pourtant, la majorité des failles exploitées sont connues depuis des années et peuvent être évitées avec de bonnes pratiques de développement. Le problème ? La sécurité est souvent reléguée au second plan, vue comme une responsabilité de l'équipe infra ou du DevOps.</p>
      <p>En réalité, chaque développeur est un maillon de la chaîne de sécurité. Un formulaire mal validé, une requête SQL non paramétrée ou un cookie mal configuré peuvent ouvrir la porte à des attaques dévastatrices. Voici les failles que tout développeur web doit connaître et savoir prévenir.</p>

      <h2>1. Injection SQL : la faille historique toujours d'actualité</h2>
      <p>L'injection SQL reste dans le top 3 de l'OWASP depuis plus de 20 ans. Elle se produit quand des données utilisateur sont insérées directement dans une requête SQL sans validation ni échappement. Un attaquant peut alors modifier la requête pour accéder, modifier ou supprimer des données.</p>
      <pre><code>// DANGEREUX - ne faites jamais ça
const query = "SELECT * FROM users WHERE email = '" + email + "'";

// SÉCURISÉ - utilisez des requêtes paramétrées
const query = "SELECT * FROM users WHERE email = $1";
const result = await db.query(query, [email]);</code></pre>
      <p>La solution est simple : utilisez toujours des requêtes paramétrées ou un ORM comme Prisma, Sequelize ou Drizzle. Ces outils échappent automatiquement les entrées utilisateur et rendent l'injection SQL pratiquement impossible.</p>

      <h2>2. Cross-Site Scripting (XSS) : quand le navigateur devient complice</h2>
      <p>Le XSS permet à un attaquant d'injecter du code JavaScript malveillant dans une page web vue par d'autres utilisateurs. Il existe trois types de XSS : stocké (le script est sauvegardé en base de données), réfléchi (le script est dans l'URL) et DOM-based (le script manipule le DOM côté client).</p>
      <p>Pour vous protéger, échappez systématiquement les sorties HTML. Les frameworks modernes comme Svelte, React et Vue échappent par défaut le contenu rendu. Attention cependant aux directives comme <code>{@html}</code> en Svelte ou <code>dangerouslySetInnerHTML</code> en React qui contournent cette protection.</p>
      <p>Ajoutez également un en-tête <code>Content-Security-Policy</code> (CSP) pour contrôler quels scripts peuvent s'exécuter sur votre page. C'est une couche de défense supplémentaire très efficace.</p>

      <h2>3. Cross-Site Request Forgery (CSRF)</h2>
      <p>Le CSRF exploite la confiance qu'un site accorde au navigateur de l'utilisateur. Si un utilisateur est connecté à votre application, un site malveillant peut forger des requêtes qui seront exécutées avec les cookies de session de l'utilisateur. Pour prévenir le CSRF, utilisez des tokens anti-CSRF dans vos formulaires et vérifiez l'en-tête <code>Origin</code> ou <code>Referer</code> des requêtes.</p>

      <h2>4. Broken Authentication : les failles d'authentification</h2>
      <p>Une authentification mal implémentée est une porte grande ouverte. Les erreurs courantes incluent : stocker les mots de passe en clair ou avec un hash faible (MD5, SHA-1), ne pas implémenter de rate limiting sur les tentatives de connexion, utiliser des tokens JWT sans expiration, et ne pas invalider les sessions après un changement de mot de passe.</p>
      <p>Utilisez <code>bcrypt</code> ou <code>argon2</code> pour hasher les mots de passe. Implémentez l'authentification à deux facteurs (2FA) pour les comptes sensibles. Et stockez les tokens de session de manière sécurisée avec des cookies HttpOnly et Secure.</p>

      <h2>5. Exposition de données sensibles</h2>
      <p>Ne renvoyez jamais plus de données que nécessaire dans vos réponses API. Un endpoint qui retourne l'objet utilisateur complet (avec le hash du mot de passe, les tokens internes, etc.) est une fuite de données en attente. Créez des DTO (Data Transfer Objects) qui ne contiennent que les champs nécessaires pour chaque endpoint.</p>
      <p>Chiffrez les données sensibles au repos et en transit. Utilisez HTTPS partout, sans exception. Et configurez correctement vos en-têtes de sécurité : <code>Strict-Transport-Security</code>, <code>X-Content-Type-Options</code>, <code>X-Frame-Options</code>.</p>

      <h2>6. Contrôle d'accès défaillant</h2>
      <p>Le contrôle d'accès défaillant est la faille numéro 1 du classement OWASP 2021. Elle se produit quand un utilisateur peut accéder à des ressources qui ne lui appartiennent pas, simplement en modifiant un paramètre dans l'URL ou le corps de la requête. Vérifiez toujours que l'utilisateur authentifié a le droit d'accéder à la ressource demandée, côté serveur.</p>

      <h2>7. Mauvaise configuration de sécurité</h2>
      <p>Les configurations par défaut sont rarement sécurisées. Désactivez les messages d'erreur détaillés en production, supprimez les pages de démo et les comptes par défaut, et mettez à jour régulièrement vos dépendances. Utilisez des outils comme <code>npm audit</code> ou <code>snyk</code> pour détecter les vulnérabilités connues dans vos packages.</p>

      <h2>8. Composants avec des vulnérabilités connues</h2>
      <p>Votre application est aussi sécurisée que sa dépendance la plus faible. Surveillez les CVE (Common Vulnerabilities and Exposures) de vos dépendances. Automatisez les mises à jour de sécurité avec Dependabot ou Renovate. Et auditez régulièrement votre <code>package-lock.json</code> pour identifier les packages obsolètes ou vulnérables.</p>

      <h2>9. Journalisation et surveillance insuffisantes</h2>
      <p>Si vous ne loguez pas les tentatives de connexion échouées, les accès non autorisés et les erreurs inhabituelles, vous ne saurez jamais que vous êtes attaqué. Mettez en place une journalisation centralisée avec des outils comme ELK Stack, Datadog ou Sentry, et configurez des alertes pour les événements suspects.</p>

      <h2>10. Server-Side Request Forgery (SSRF)</h2>
      <p>Le SSRF permet à un attaquant de faire exécuter des requêtes HTTP par votre serveur vers des ressources internes. Si votre application accepte des URLs fournies par l'utilisateur (pour charger une image, un webhook, etc.), validez et filtrez ces URLs. Bloquez les adresses IP internes (127.0.0.1, 10.x.x.x, 192.168.x.x) et limitez les protocoles autorisés à HTTP/HTTPS.</p>

      <h2>Conclusion : la sécurité comme culture</h2>
      <p>La sécurité n'est pas une fonctionnalité qu'on ajoute à la fin du projet. C'est une discipline qui doit être intégrée à chaque étape du développement : conception, implémentation, tests et déploiement. Commencez par les bases — validation des entrées, authentification robuste, HTTPS — et progressez vers des pratiques plus avancées comme les tests de pénétration et la modélisation des menaces. Votre futur vous (et vos utilisateurs) vous remercieront.</p>
    `
  },
  {
    slug: 'pourquoi-svelte-en-2026',
    title: 'Pourquoi j\'ai choisi Svelte en 2026',
    excerpt: 'Svelte continue de gagner en popularité. Voici pourquoi c\'est mon framework de prédilection pour les nouveaux projets.',
    date: '2026-03-01',
    readTime: '8 min',
    category: 'Framework',
    tags: ['Svelte', 'JavaScript', 'Frontend'],
    content: `
      <h2>Un framework qui compile, pas qui exécute</h2>
      <p>Contrairement à React ou Vue, Svelte ne livre pas de runtime au navigateur. Votre code est compilé en JavaScript pur lors du build, ce qui donne des applications nettement plus légères et plus rapides. Cette approche fondamentalement différente a des conséquences profondes sur la performance de vos applications.</p>
      <p>Quand un utilisateur charge une application React, le navigateur doit d'abord télécharger et exécuter le runtime de React (environ 40 Ko minifié et gzippé), puis le Virtual DOM doit calculer les différences avant de mettre à jour le DOM réel. Avec Svelte, le compilateur génère directement du code JavaScript impératif qui manipule le DOM de manière chirurgicale. Résultat : moins de JavaScript à télécharger, moins de calculs côté client, et un Time to Interactive (TTI) significativement réduit.</p>
      <p>Dans mes tests sur des projets réels, j'ai constaté que les bundles Svelte sont en moyenne 30 à 50% plus petits qu'un équivalent React, et le temps de premier rendu est réduit de 20 à 40% selon la complexité de l'application. Sur mobile, cette différence est encore plus marquée car les processeurs sont moins puissants.</p>

      <h2>La syntaxe la plus intuitive du marché</h2>
      <p>Avec Svelte, la réactivité est native et naturelle. Pas besoin de <code>useState</code>, <code>useEffect</code> ou de fonctions spéciales. Une simple variable réassignée met à jour automatiquement le DOM. C'est du JavaScript standard augmenté, pas un nouveau langage à apprendre :</p>
      <pre><code>let count = 0;
// C'est tout. La variable est réactive.
// Quand count change, le DOM se met à jour automatiquement.

function increment() {
  count += 1; // Pas de setState, pas de dispatch
}

// Les valeurs dérivées sont tout aussi simples
$: doubled = count * 2;
$: if (count > 10) console.log("Plus de 10 !");</code></pre>
      <p>Cette simplicité n'est pas juste un confort de développeur. Elle réduit la surface de bugs liés à la gestion d'état. Avec React, les hooks ont leurs propres règles (pas de hooks conditionnels, tableau de dépendances de useEffect, closures stales...) qui sont source d'erreurs même pour les développeurs expérimentés. Avec Svelte, ces problèmes n'existent tout simplement pas.</p>
      <p>Svelte 5 a introduit les <strong>runes</strong> — un système de réactivité encore plus explicite avec <code>$state</code>, <code>$derived</code> et <code>$effect</code>. Ces primitives offrent un contrôle plus fin tout en restant plus simples que les hooks de React. Après plusieurs mois d'utilisation, je les trouve plus lisibles et prévisibles.</p>

      <h2>Les composants Svelte : HTML, CSS et JS réunis</h2>
      <p>Un composant Svelte est un fichier <code>.svelte</code> qui contient naturellement le HTML, le CSS et le JavaScript. Le CSS est scopé par défaut au composant, ce qui élimine les conflits de styles sans avoir besoin de CSS Modules, Styled Components ou d'autres solutions tierces.</p>
      <p>Cette architecture encourage des composants petits et focalisés. Pas besoin de fichiers séparés pour les styles, pas de conventions de nommage complexes comme BEM. Chaque composant est un monde autonome, facile à comprendre, à tester et à réutiliser.</p>

      <h2>SvelteKit : le framework full-stack complet</h2>
      <p>SvelteKit est l'équivalent de Next.js pour React, mais avec la simplicité caractéristique de Svelte. Il apporte le routing basé sur les fichiers, le Server-Side Rendering (SSR), la Static Site Generation (SSG) et les API routes dans un seul package cohérent.</p>
      <p>Ce que j'apprécie particulièrement avec SvelteKit, c'est sa flexibilité de déploiement. Grâce aux adaptateurs, vous pouvez déployer la même application sur Vercel, Netlify, Cloudflare Workers, un serveur Node.js classique ou même en tant que site statique. Le même code, plusieurs cibles de déploiement.</p>
      <p>Le système de chargement de données avec les fonctions <code>load</code> est élégant et puissant. Il gère naturellement le chargement parallèle des données, la gestion des erreurs, et le streaming. Les form actions simplifient la gestion des formulaires avec une approche progressive enhancement qui fonctionne même sans JavaScript côté client.</p>

      <h2>L'écosystème Svelte en 2026</h2>
      <p>L'un des arguments historiques contre Svelte était la taille de son écosystème. Ce n'est plus un problème en 2026. Les bibliothèques essentielles sont matures et bien maintenues : Skeleton UI et shadcn-svelte pour les composants UI, svelte-motion pour les animations, Superforms pour la validation de formulaires, et bien d'autres.</p>
      <p>La communauté est active et grandissante. Le Discord officiel de Svelte compte des dizaines de milliers de membres, et le nombre de packages npm liés à Svelte a triplé en deux ans. Des entreprises comme Apple, Spotify, The New York Times et Ikea utilisent Svelte en production.</p>

      <h2>Mon verdict après 3 ans avec Svelte</h2>
      <p>Après avoir utilisé React pendant 2 ans et Svelte pendant 3 ans, mon choix est clair. Pour les projets où la performance, la maintenabilité et la productivité comptent, Svelte est un excellent choix. La courbe d'apprentissage est douce — un développeur JavaScript peut être productif en Svelte en quelques jours — et le résultat est toujours satisfaisant, tant pour le développeur que pour l'utilisateur final.</p>
      <p>Svelte n'est pas parfait pour tous les cas d'usage. Pour les très grosses applications d'entreprise avec des centaines de développeurs, React reste un choix plus sûr en termes de recrutement et de bibliothèques spécialisées. Mais pour les projets de petite à moyenne taille, les portfolios, les sites vitrines, les SaaS et les applications internes, Svelte est devenu mon choix par défaut. Et je n'ai aucun regret.</p>
    `
  },
  {
    slug: 'docker-deploiement-moderne',
    title: 'Docker pour les développeurs web : guide pratique du déploiement moderne',
    excerpt: 'Apprenez à conteneuriser vos applications web avec Docker et à mettre en place un pipeline de déploiement fiable.',
    date: '2026-02-25',
    readTime: '10 min',
    category: 'DevOps',
    tags: ['Docker', 'DevOps', 'Déploiement'],
    content: `
      <h2>Pourquoi Docker a révolutionné le déploiement</h2>
      <p>Combien de fois avez-vous entendu "ça marche sur ma machine" ? Docker élimine ce problème en empaquetant votre application avec toutes ses dépendances dans un conteneur isolé et reproductible. Que vous développiez sur Windows, macOS ou Linux, le conteneur Docker se comportera exactement de la même manière partout.</p>
      <p>Un conteneur Docker est une unité logicielle légère qui contient tout ce dont votre application a besoin pour fonctionner : le code, le runtime, les bibliothèques système et les fichiers de configuration. Contrairement à une machine virtuelle, un conteneur partage le noyau du système hôte, ce qui le rend beaucoup plus léger et rapide à démarrer — en millisecondes plutôt qu'en minutes.</p>

      <h2>Les concepts essentiels de Docker</h2>
      <p>Avant de plonger dans la pratique, clarifions les termes clés. Une <strong>image</strong> Docker est un modèle en lecture seule qui définit votre conteneur. C'est comme une photo instantanée de votre application et de son environnement. Un <strong>conteneur</strong> est une instance en cours d'exécution d'une image. Un <strong>Dockerfile</strong> est le fichier de recette qui décrit comment construire votre image. Et un <strong>registry</strong> (comme Docker Hub ou GitHub Container Registry) est un dépôt où stocker et partager vos images.</p>

      <h2>Conteneuriser une application Node.js / SvelteKit</h2>
      <p>Voici un Dockerfile optimisé pour une application SvelteKit avec l'adaptateur Node :</p>
      <pre><code># Étape 1 : Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["node", "build"]</code></pre>
      <p>Ce Dockerfile utilise le <strong>multi-stage build</strong>, une technique essentielle pour réduire la taille de vos images. L'étape de build inclut toutes les dépendances de développement (TypeScript, Vite, etc.), mais l'image finale ne contient que le code compilé et les dépendances de production. Résultat : une image de 100-150 Mo au lieu de 500+ Mo.</p>
      <p>L'utilisation de <code>node:20-alpine</code> plutôt que <code>node:20</code> réduit encore la taille de base de l'image de 900 Mo à environ 130 Mo. Alpine Linux est une distribution minimaliste conçue pour les conteneurs.</p>

      <h2>Docker Compose : orchestrer plusieurs services</h2>
      <p>Les applications modernes sont rarement monolithiques. Vous avez souvent besoin d'une base de données, d'un cache Redis, peut-être d'un serveur de files d'attente. Docker Compose permet de définir et gérer tous ces services dans un seul fichier <code>docker-compose.yml</code> :</p>
      <pre><code>services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: myapp
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  pgdata:</code></pre>
      <p>Un simple <code>docker compose up</code> démarre tout votre environnement de développement. Chaque membre de l'équipe a exactement le même setup, sans installer PostgreSQL localement ni configurer quoi que ce soit.</p>

      <h2>Les bonnes pratiques pour des images Docker optimisées</h2>
      <p><strong>Ordonnez vos instructions pour maximiser le cache.</strong> Docker met en cache chaque couche (layer) de votre image. Placez les instructions qui changent rarement en premier (installation des dépendances) et celles qui changent souvent en dernier (copie du code source). Ainsi, un changement de code ne force pas la réinstallation de toutes les dépendances.</p>
      <p><strong>Utilisez un fichier .dockerignore.</strong> Comme <code>.gitignore</code>, le <code>.dockerignore</code> empêche les fichiers inutiles d'être copiés dans l'image : <code>node_modules</code>, <code>.git</code>, fichiers de test, documentation. Cela accélère le build et réduit la taille de l'image.</p>
      <p><strong>N'exécutez jamais vos conteneurs en tant que root.</strong> Créez un utilisateur dédié dans votre Dockerfile avec <code>USER node</code> pour limiter les dommages en cas de compromission du conteneur.</p>
      <p><strong>Scannez vos images pour les vulnérabilités.</strong> Des outils comme <code>docker scout</code>, Trivy ou Snyk analysent vos images et signalent les paquets avec des failles de sécurité connues. Intégrez ces scans dans votre pipeline CI/CD.</p>

      <h2>Pipeline CI/CD avec Docker</h2>
      <p>Docker s'intègre naturellement dans un pipeline d'intégration et déploiement continus. Voici un workflow typique avec GitHub Actions : à chaque push sur la branche principale, le pipeline construit l'image Docker, exécute les tests dans un conteneur, pousse l'image sur un registry, puis déclenche le déploiement sur votre serveur de production.</p>
      <p>L'avantage de cette approche est la reproductibilité : l'image testée dans la CI est exactement la même que celle déployée en production. Plus de "ça marchait dans les tests mais pas en prod" causé par des différences d'environnement.</p>

      <h2>Conclusion : Docker est un investissement qui vaut le coup</h2>
      <p>Apprendre Docker demande un effort initial, mais les bénéfices sont considérables : environnements reproductibles, déploiements fiables, isolation des services, et scalabilité facilitée. Que vous travailliez seul ou en équipe, Docker simplifie votre workflow de développement et de déploiement. Commencez par conteneuriser un projet existant, et vous ne reviendrez plus en arrière.</p>
    `
  },
  {
    slug: 'optimiser-performances-web',
    title: '7 techniques pour optimiser les performances de votre site web',
    excerpt: 'Un site rapide convertit mieux. Voici les techniques que j\'applique sur chaque projet pour garantir des temps de chargement optimaux.',
    date: '2026-02-15',
    readTime: '10 min',
    category: 'Performance',
    tags: ['Performance', 'Web', 'SEO'],
    content: `
      <h2>Pourquoi la performance web est un enjeu business</h2>
      <p>La vitesse de votre site web impacte directement vos résultats. Google a montré qu'une seconde de délai supplémentaire sur mobile réduit les conversions de 20%. Amazon estime que chaque 100 ms de latence leur coûte 1% de ventes. Et Google utilise les Core Web Vitals comme facteur de classement SEO depuis 2021. En résumé : un site lent perd des visiteurs, des clients et de la visibilité.</p>
      <p>Voici les 7 techniques que j'applique systématiquement sur mes projets pour garantir des performances optimales. Chacune a un impact mesurable et peut être mise en place relativement facilement.</p>

      <h2>1. Optimiser les images : le gain le plus facile</h2>
      <p>Les images représentent souvent 50 à 70% du poids total d'une page web. C'est donc le premier levier à actionner. Commencez par choisir le bon format : <strong>WebP</strong> offre une compression 25 à 35% supérieure à JPEG pour une qualité équivalente, et <strong>AVIF</strong> fait encore mieux avec 50% de réduction. Tous les navigateurs modernes supportent ces formats.</p>
      <p>Implémentez le lazy loading avec l'attribut natif <code>loading="lazy"</code> sur toutes les images qui ne sont pas visibles au premier écran. Cela retarde le chargement des images hors écran, accélérant significativement le temps de chargement initial.</p>
      <p>Servez des images à la bonne taille grâce à l'attribut <code>srcset</code> et à la balise <code>&lt;picture&gt;</code>. Un écran mobile n'a pas besoin d'une image de 2000 pixels de large. Des outils comme Sharp (Node.js) ou Squoosh permettent d'automatiser le redimensionnement et la conversion.</p>
      <pre><code>&lt;picture&gt;
  &lt;source srcset="hero.avif" type="image/avif"&gt;
  &lt;source srcset="hero.webp" type="image/webp"&gt;
  &lt;img src="hero.jpg" alt="Description" loading="lazy"
       width="800" height="400"&gt;
&lt;/picture&gt;</code></pre>

      <h2>2. Minifier et compresser les ressources</h2>
      <p>La minification supprime les espaces, commentaires et caractères inutiles de vos fichiers CSS, JavaScript et HTML. Les bundlers modernes (Vite, esbuild, Rollup) le font automatiquement en mode production.</p>
      <p>La compression côté serveur va encore plus loin. Activez <strong>Brotli</strong> (compression jusqu'à 20% meilleure que Gzip) sur votre serveur. La différence est massive : un fichier JavaScript de 200 Ko peut être réduit à 50 Ko après minification et compression. Vérifiez que votre hébergeur supporte Brotli — c'est le cas de Vercel, Netlify et Cloudflare par défaut.</p>

      <h2>3. Utiliser un CDN pour rapprocher le contenu</h2>
      <p>Un CDN (Content Delivery Network) distribue vos fichiers statiques depuis des serveurs répartis géographiquement. Un utilisateur à Paris recevra vos fichiers depuis un serveur européen plutôt que depuis un serveur à New York, réduisant la latence de 100-200 ms.</p>
      <p>Les plateformes d'hébergement modernes comme Vercel et Netlify incluent un CDN global par défaut. Si vous hébergez sur un VPS, configurez Cloudflare comme reverse proxy — c'est gratuit et l'impact est immédiat. Pour mon portfolio, le passage à un CDN a réduit le Time to First Byte (TTFB) de 800 ms à 120 ms pour les visiteurs hors de Madagascar.</p>

      <h2>4. Code splitting : ne charger que l'essentiel</h2>
      <p>Le code splitting consiste à diviser votre JavaScript en plusieurs morceaux (chunks) qui sont chargés à la demande. Au lieu de charger un bundle monolithique de 500 Ko, le navigateur ne télécharge que le code nécessaire pour la page en cours — souvent 50 à 100 Ko.</p>
      <p>SvelteKit fait du code splitting automatiquement grâce au routing basé sur les fichiers. Chaque route génère son propre chunk. Vous pouvez aller plus loin en utilisant les imports dynamiques pour les composants lourds qui ne sont pas toujours nécessaires :</p>
      <pre><code>// Le composant n'est chargé que quand il est réellement affiché
{#if showChart}
  {#await import('./HeavyChart.svelte') then module}
    &lt;module.default data={chartData} /&gt;
  {/await}
{/if}</code></pre>

      <h2>5. Précharger les ressources critiques</h2>
      <p>Le navigateur découvre les ressources au fur et à mesure qu'il parse le HTML. Vous pouvez l'aider en indiquant à l'avance quelles ressources sont critiques avec <code>&lt;link rel="preload"&gt;</code> pour les polices et CSS critiques, et <code>&lt;link rel="preconnect"&gt;</code> pour les domaines tiers.</p>
      <p>Pour les polices web en particulier, le preload est crucial car il élimine le Flash of Invisible Text (FOIT). Ajoutez <code>font-display: swap</code> dans vos déclarations @font-face pour que le texte soit visible immédiatement avec une police de fallback, puis remplacé quand la police personnalisée est chargée.</p>

      <h2>6. Réduire l'impact des scripts tiers</h2>
      <p>Chaque script externe — analytics, widgets sociaux, publicités, chatbots — ajoute du poids et du temps de chargement. Un seul widget peut ajouter 200 Ko de JavaScript et des dizaines de requêtes réseau. Auditez vos scripts tiers régulièrement et supprimez ceux qui ne sont plus nécessaires.</p>
      <p>Pour les scripts restants, utilisez les attributs <code>async</code> ou <code>defer</code> pour ne pas bloquer le rendu de la page. L'attribut <code>defer</code> est généralement préférable car il garantit l'exécution dans l'ordre. Pour les scripts non critiques (analytics, publicités), chargez-les après l'événement <code>load</code> de la page.</p>

      <h2>7. Mettre en cache intelligemment</h2>
      <p>Le cache est votre meilleur allié pour les visites répétées. Configurez des en-têtes de cache appropriés : les fichiers avec un hash dans le nom (comme <code>app.a1b2c3.js</code>) peuvent être mis en cache indéfiniment avec <code>Cache-Control: max-age=31536000, immutable</code>. Les fichiers HTML doivent être revalidés à chaque visite avec <code>Cache-Control: no-cache</code> (qui signifie "revalide d'abord", pas "ne cache pas").</p>
      <p>Utilisez aussi le cache côté application. Le Service Worker permet de mettre en cache les pages et les ressources pour un accès hors ligne et des chargements quasi instantanés. SvelteKit offre un support natif des Service Workers qui simplifie leur mise en place.</p>

      <h2>Mesurer et itérer</h2>
      <p>L'optimisation de performance n'est pas un événement ponctuel, c'est un processus continu. Utilisez Lighthouse dans Chrome DevTools pour auditer régulièrement vos pages. Surveillez vos Core Web Vitals (LCP, FID/INP, CLS) dans Google Search Console. Et testez vos pages sur des connexions lentes et des appareils modestes — pas tout le monde navigue avec la fibre et un MacBook Pro.</p>
    `
  },
  {
    slug: 'ux-design-developpeurs',
    title: 'UX Design pour développeurs : les principes qui changent tout',
    excerpt: 'Vous n\'avez pas besoin d\'être designer pour créer des interfaces intuitives. Voici les principes UX essentiels pour les développeurs.',
    date: '2026-02-10',
    readTime: '9 min',
    category: 'Design',
    tags: ['UX', 'Design', 'UI'],
    content: `
      <h2>Pourquoi les développeurs doivent comprendre l'UX</h2>
      <p>En tant que développeur, vous prenez des dizaines de micro-décisions UX chaque jour sans vous en rendre compte. La taille d'un bouton, l'ordre des champs dans un formulaire, le message d'erreur affiché, la vitesse d'une animation — tout cela impacte l'expérience utilisateur. Même si vous travaillez avec un designer, comprendre les principes UX vous permet de faire de meilleurs choix d'implémentation et de proposer des améliorations pertinentes.</p>
      <p>L'UX design n'est pas une question de talent artistique. C'est une discipline basée sur des principes cognitifs et des bonnes pratiques documentées. Voici ceux qui ont le plus d'impact dans mon travail quotidien de développeur full-stack.</p>

      <h2>La loi de Fitts : rendez les cibles cliquables suffisamment grandes</h2>
      <p>La loi de Fitts établit que le temps nécessaire pour atteindre une cible est proportionnel à la distance et inversement proportionnel à la taille de la cible. En pratique, cela signifie que vos boutons et liens doivent être suffisamment grands pour être cliqués facilement, surtout sur mobile.</p>
      <p>Apple recommande une taille minimale de 44x44 pixels pour les cibles tactiles. Google recommande 48x48 pixels. Dans mes projets, j'utilise une taille minimale de <code>min-h-[44px] min-w-[44px]</code> avec Tailwind CSS pour tous les éléments interactifs. C'est un détail qui fait une énorme différence en termes d'utilisabilité.</p>

      <h2>La loi de Hick : réduisez les choix</h2>
      <p>Plus vous offrez de choix, plus la décision prend du temps et génère de la frustration. C'est la loi de Hick-Hyman. Un menu avec 20 options est plus difficile à naviguer qu'un menu avec 5 catégories principales. Un formulaire avec 15 champs est plus intimidant qu'un formulaire en 3 étapes de 5 champs.</p>
      <p>Appliquez ce principe partout : limitez les options de navigation, groupez les fonctionnalités par catégorie, utilisez des valeurs par défaut intelligentes, et masquez les options avancées derrière un bouton "Plus d'options". L'objectif est de guider l'utilisateur vers l'action principale sans le submerger.</p>

      <h2>Le feedback immédiat : confirmez chaque action</h2>
      <p>Les utilisateurs ont besoin de savoir que leurs actions ont été prises en compte. Chaque clic, chaque soumission de formulaire, chaque chargement doit produire un feedback visuel. Sans feedback, l'utilisateur se demande si son clic a fonctionné et risque de cliquer à nouveau.</p>
      <p>Les formes de feedback incluent : un changement d'état du bouton au clic (couleur, texte "Envoi en cours..."), un spinner ou une barre de progression pendant le chargement, un message de confirmation après une action réussie, et une animation subtile pour signaler un changement dans l'interface.</p>
      <pre><code>&lt;button disabled={isSubmitting}&gt;
  {#if isSubmitting}
    Envoi en cours...
  {:else}
    Envoyer
  {/if}
&lt;/button&gt;</code></pre>

      <h2>La hiérarchie visuelle : guidez le regard</h2>
      <p>L'oeil humain est attiré par les éléments qui se démarquent : grande taille, couleur vive, contraste élevé, mouvement. Utilisez cette connaissance pour créer une hiérarchie visuelle claire qui guide le regard de l'utilisateur vers les éléments les plus importants.</p>
      <p>Un titre principal doit être visiblement plus grand que le texte. Le bouton d'action principale (CTA) doit avoir une couleur distinctive. Les informations secondaires doivent être visuellement plus discrètes (gris clair, taille réduite). Cette hiérarchie permet à l'utilisateur de scanner la page rapidement et de trouver ce qu'il cherche.</p>

      <h2>L'accessibilité : concevoir pour tous</h2>
      <p>L'accessibilité n'est pas un bonus optionnel, c'est une responsabilité. Environ 15% de la population mondiale vit avec un handicap. En France, les sites publics et de grandes entreprises doivent se conformer au RGAA (Référentiel Général d'Amélioration de l'Accessibilité). Mais au-delà de la conformité légale, l'accessibilité améliore l'expérience pour tous les utilisateurs.</p>
      <p>Les bonnes pratiques essentielles : utilisez du HTML sémantique (<code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>) plutôt que des <code>&lt;div&gt;</code> partout. Assurez un ratio de contraste minimum de 4.5:1 pour le texte. Ajoutez des attributs <code>alt</code> descriptifs sur toutes les images. Rendez votre interface navigable au clavier. Et testez avec un lecteur d'écran au moins une fois par projet.</p>

      <h2>Les micro-interactions : les détails qui enchantent</h2>
      <p>Les micro-interactions sont ces petites animations et transitions qui rendent une interface vivante et agréable. Un bouton qui pulse légèrement au survol, une liste qui s'anime quand un élément est ajouté, un formulaire qui "secoue" gentiment quand il y a une erreur — ces détails créent une connexion émotionnelle avec l'utilisateur.</p>
      <p>Attention cependant à ne pas en abuser. Les animations doivent être rapides (200-300 ms maximum), subtiles et avoir un but fonctionnel (attirer l'attention, indiquer un changement d'état, fournir un feedback). Une animation gratuite qui ralentit l'interface est pire que pas d'animation du tout.</p>

      <h2>Les formulaires : le champ de bataille de l'UX</h2>
      <p>Les formulaires sont souvent le point de friction le plus important d'un site web. Chaque champ supplémentaire réduit le taux de conversion. Voici mes règles pour des formulaires qui convertissent :</p>
      <p>Demandez uniquement les informations nécessaires. Si vous n'avez pas besoin du numéro de téléphone, ne le demandez pas. Utilisez des labels visibles (pas seulement des placeholders qui disparaissent au clic). Affichez les erreurs de validation en temps réel, pas après la soumission. Et utilisez les bons types d'input HTML (<code>type="email"</code>, <code>type="tel"</code>) pour afficher le bon clavier sur mobile.</p>

      <h2>Conclusion : l'UX est un avantage compétitif</h2>
      <p>Vous n'avez pas besoin de devenir designer pour améliorer significativement l'expérience utilisateur de vos applications. En appliquant ces principes fondamentaux — cibles suffisamment grandes, choix limités, feedback immédiat, hiérarchie visuelle, accessibilité — vous créez des interfaces plus intuitives et plus agréables à utiliser. C'est un investissement qui se traduit directement en satisfaction utilisateur, en conversions et en fidélisation.</p>
    `
  },
  {
    slug: 'guide-freelance-madagascar',
    title: 'Devenir développeur freelance à Madagascar : mon parcours',
    excerpt: 'Retour d\'expérience sur le freelancing tech depuis Madagascar. Défis, opportunités et conseils pour se lancer.',
    date: '2026-02-01',
    readTime: '9 min',
    category: 'Carrière',
    tags: ['Freelance', 'Carrière', 'Madagascar'],
    content: `
      <h2>Pourquoi j'ai choisi le freelance</h2>
      <p>Le freelancing offre une flexibilité incomparable et la possibilité de travailler avec des clients internationaux depuis n'importe où. À Madagascar, c'est une opportunité particulièrement intéressante qui m'a permis de construire une carrière internationale sans quitter mon pays.</p>
      <p>Mon parcours a commencé en 2020, quand j'ai décidé de me former intensivement au développement web. Après un an d'apprentissage autodidacte — HTML, CSS, JavaScript, puis React et Node.js — j'ai décroché mon premier contrat freelance sur Upwork. Le projet n'était pas glamour (un site vitrine pour un restaurant), mais il m'a donné ma première évaluation 5 étoiles et la confiance pour continuer.</p>
      <p>Aujourd'hui, trois ans plus tard, je travaille avec des clients en France, au Canada, en Suisse et aux États-Unis. Mon chiffre d'affaires a été multiplié par cinq depuis ma première année, et je choisis mes projets en fonction de l'intérêt technique plutôt que de la nécessité financière. Ce n'est pas un parcours linéaire — il y a eu des moments difficiles — mais la trajectoire globale est encourageante.</p>

      <h2>Les avantages de travailler depuis Madagascar</h2>
      <p>Le premier avantage est économique. Le coût de la vie à Fianarantsoa est considérablement inférieur à celui des grandes villes européennes ou nord-américaines. Un salaire de freelance qui serait modeste à Paris permet un excellent niveau de vie ici. Cela me permet de proposer des tarifs compétitifs tout en vivant confortablement, ce qui est un argument de vente auprès des clients.</p>
      <p>Le décalage horaire avec l'Europe (GMT+3) est un atout plutôt qu'un inconvénient. Quand mes clients français commencent leur journée à 9h, il est midi chez moi. Nous avons un créneau commun de 6 à 7 heures pour les réunions et la collaboration synchrone, et j'ai le matin pour travailler en deep focus sans interruption. Avec les États-Unis (EST), le décalage de 8 heures est plus prononcé, mais la plupart du travail de développement est asynchrone de toute façon.</p>
      <p>Madagascar offre aussi un cadre de vie agréable. Fianarantsoa est une ville à taille humaine, entourée de nature, avec un rythme de vie qui favorise la concentration et la créativité. Pas de métro bondé, pas de loyer exorbitant, pas de stress urbain constant.</p>

      <h2>Les défis à surmonter</h2>
      <p><strong>La connectivité internet</strong> est le défi numéro un. La fibre optique se développe à Madagascar, mais la couverture est inégale et les coupures ne sont pas rares. Ma solution : deux connexions internet (fibre + 4G en backup) et un onduleur pour les coupures de courant. J'ai aussi configuré mon téléphone comme point d'accès d'urgence. En trois ans, je n'ai jamais manqué une deadline à cause d'un problème de connexion, mais il faut être préparé.</p>
      <p><strong>Le paiement international</strong> nécessite de la créativité. Les virements bancaires classiques vers Madagascar sont lents et coûteux. J'utilise principalement Wise (anciennement TransferWise) pour recevoir des paiements en euros et en dollars avec des frais raisonnables. PayPal fonctionne aussi, bien que les frais soient plus élevés. Certains clients préfèrent payer en crypto (USDC), ce qui est pratique pour les transferts instantanés.</p>
      <p><strong>La confiance des clients</strong> peut être difficile à établir au début. Certains clients hésitent à travailler avec un freelance basé dans un pays qu'ils ne connaissent pas. Pour surmonter cette barrière, j'ai investi dans un portfolio professionnel, des témoignages clients détaillés, et une communication irréprochable. Répondre rapidement aux messages, livrer dans les délais, et être transparent sur l'avancement du projet sont les meilleurs arguments pour construire la confiance.</p>

      <h2>Trouver ses premiers clients</h2>
      <p>J'ai commencé sur les plateformes de freelancing — Upwork et Malt principalement. La concurrence est féroce, surtout au début quand vous n'avez pas d'avis. Ma stratégie a été de me spécialiser dans une niche (applications SvelteKit) plutôt que de me présenter comme un "développeur web généraliste". Cela m'a permis de me démarquer dans les recherches et de justifier des tarifs plus élevés.</p>
      <p>Pour chaque proposition, je personnalisais mon message en montrant que j'avais compris le besoin spécifique du client. Pas de template générique. J'incluais souvent un mini-audit gratuit du site existant du client ou une suggestion d'amélioration technique pour démontrer ma valeur avant même d'être embauché.</p>
      <p>Aujourd'hui, environ 70% de mes clients viennent du bouche-à-oreille et de mon portfolio. Les 30% restants viennent de Malt et de LinkedIn. Je n'utilise presque plus Upwork car mes tarifs ont dépassé ce que la plupart des clients de la plateforme sont prêts à payer.</p>

      <h2>Organiser sa journée de travail</h2>
      <p>Le freelancing offre une liberté totale sur l'organisation de votre temps, ce qui est à la fois un avantage et un piège. Sans structure, il est facile de procrastiner le matin et de travailler jusqu'à minuit pour rattraper le retard.</p>
      <p>Ma routine : je travaille de 7h à 12h en deep focus (pas d'emails, pas de réunions, pas de Slack). C'est pendant ces 5 heures que je produis 80% de mon code. L'après-midi est consacré aux réunions clients, aux emails, à la veille technologique et aux tâches administratives. Je termine rarement après 18h sauf urgence exceptionnelle.</p>

      <h2>Conseils pour débuter le freelance depuis Madagascar</h2>
      <p>Investissez dans un bon portfolio avant de chercher des clients. Créez 3 à 5 projets personnels de qualité si vous n'avez pas encore de projets clients à montrer. Un portfolio qui démontre vos compétences vaut mieux que n'importe quel diplôme.</p>
      <p>Soyez réactif dans vos communications. Répondez aux messages dans les 2 heures pendant vos heures de travail. La réactivité est le premier critère que les clients mentionnent dans leurs évaluations positives de mon travail.</p>
      <p>Livrez toujours dans les délais, quitte à sous-promettre. Il vaut mieux annoncer 2 semaines et livrer en 10 jours que promettre 1 semaine et livrer en 12 jours. La confiance se construit projet après projet, et une seule deadline manquée peut ruiner des mois de travail.</p>
      <p>Et surtout, ne sous-estimez pas vos tarifs. Le coût de la vie à Madagascar est bas, mais votre expertise a une valeur internationale. Commencez modestement pour accumuler des avis, puis augmentez progressivement vos tarifs à mesure que votre réputation grandit.</p>
    `
  },
  {
    slug: 'git-workflow-professionnel',
    title: 'Git workflow professionnel : bien collaborer en équipe',
    excerpt: 'Maîtrisez les workflows Git utilisés en entreprise : branches, conventions de commits, code review et résolution de conflits.',
    date: '2026-01-30',
    readTime: '10 min',
    category: 'Outils',
    tags: ['Git', 'Workflow', 'Collaboration'],
    content: `
      <h2>Pourquoi un workflow Git structuré est essentiel</h2>
      <p>Git est l'outil de versioning le plus utilisé au monde, mais la maîtrise de ses commandes de base ne suffit pas pour travailler efficacement en équipe. Sans conventions partagées, chaque développeur fait à sa manière : des commits cryptiques, des branches nommées n'importe comment, des merges qui génèrent des conflits évitables. Un workflow structuré résout ces problèmes et rend la collaboration fluide.</p>
      <p>Au fil de mes projets freelance et de mes collaborations avec des équipes de 2 à 15 développeurs, j'ai affiné un workflow Git qui fonctionne aussi bien pour les petits projets que pour les plus complexes. Voici les pratiques que j'applique et que je recommande à mes clients.</p>

      <h2>La stratégie de branches : GitHub Flow</h2>
      <p>Il existe plusieurs stratégies de branches populaires : Git Flow, GitHub Flow, GitLab Flow et Trunk-Based Development. Pour la majorité des projets web, je recommande <strong>GitHub Flow</strong> pour sa simplicité. Le principe est le suivant :</p>
      <p>La branche <code>main</code> est toujours déployable en production. Chaque nouvelle fonctionnalité ou correction de bug est développée dans une branche dédiée créée à partir de <code>main</code>. Quand le travail est terminé, une Pull Request (PR) est ouverte pour revue de code. Après approbation et passage des tests, la branche est mergée dans <code>main</code> et déployée.</p>
      <pre><code># Créer une branche pour une nouvelle fonctionnalité
git checkout main
git pull origin main
git checkout -b feat/ajout-filtres-blog

# Travailler, committer, pousser
git add .
git commit -m "feat: ajout des filtres par catégorie sur le blog"
git push -u origin feat/ajout-filtres-blog

# Ouvrir une PR sur GitHub, puis merger après revue</code></pre>

      <h2>Les conventions de nommage des branches</h2>
      <p>Des branches bien nommées facilitent la navigation et la compréhension de l'historique. Voici la convention que j'utilise, inspirée des pratiques courantes en entreprise :</p>
      <p><code>feat/description-courte</code> pour les nouvelles fonctionnalités. <code>fix/description-du-bug</code> pour les corrections de bugs. <code>refactor/description</code> pour les refactorisations. <code>docs/description</code> pour la documentation. <code>chore/description</code> pour les tâches de maintenance (mise à jour de dépendances, configuration, etc.).</p>
      <p>Les noms de branches doivent être en kebab-case, concis et descriptifs. Par exemple : <code>feat/ajout-mode-sombre</code>, <code>fix/formulaire-contact-validation</code>, <code>refactor/migration-svelte-5</code>. Évitez les noms vagues comme <code>fix/bug</code> ou <code>feat/update</code>.</p>

      <h2>Les Conventional Commits : des messages de commit structurés</h2>
      <p>Les Conventional Commits sont une convention de nommage des commits qui rend l'historique lisible et permet l'automatisation (génération de changelog, versioning sémantique). Le format est simple :</p>
      <pre><code>type(scope): description courte

Corps optionnel avec plus de détails.

Footer optionnel (références d'issues, breaking changes).</code></pre>
      <p>Les types principaux sont : <code>feat</code> (nouvelle fonctionnalité), <code>fix</code> (correction de bug), <code>refactor</code> (restructuration sans changement de comportement), <code>docs</code> (documentation), <code>test</code> (ajout ou modification de tests), <code>style</code> (formatage, pas de changement de logique), <code>chore</code> (tâches de maintenance).</p>
      <p>Un bon commit raconte une histoire. Le titre dit quoi a changé, le corps explique pourquoi. Comparez ces deux approches :</p>
      <pre><code># Mauvais
git commit -m "fix stuff"

# Bon
git commit -m "fix(auth): corriger la redirection après déconnexion

L'utilisateur était redirigé vers /dashboard au lieu de /login
après déconnexion, causant une erreur 401.

Closes #42"</code></pre>

      <h2>La Pull Request : plus qu'un simple merge</h2>
      <p>Une Pull Request n'est pas juste un mécanisme pour merger du code. C'est un espace de discussion, de revue et de documentation. Une bonne PR inclut un titre descriptif suivant les Conventional Commits, une description qui explique le contexte et les choix d'implémentation, des captures d'écran pour les changements visuels, et des instructions pour tester.</p>
      <p>Gardez vos PRs petites et focalisées. Une PR de 50 lignes sera revue en 10 minutes avec attention. Une PR de 500 lignes sera survolée en 5 minutes avec lassitude. Si votre fonctionnalité est grande, découpez-la en plusieurs PRs successives.</p>

      <h2>La revue de code : l'art du feedback constructif</h2>
      <p>La revue de code est l'un des meilleurs outils pour maintenir la qualité du code et partager les connaissances dans l'équipe. Mais mal faite, elle peut devenir une source de frustration et de conflits. Voici mes principes pour une revue de code efficace :</p>
      <p><strong>Soyez spécifique.</strong> Au lieu de "ce code est confus", dites "cette fonction fait 3 choses différentes, pourrais-tu la découper en fonctions plus petites ?". Au lieu de "pas bon", expliquez pourquoi et proposez une alternative.</p>
      <p><strong>Distinguez les niveaux d'importance.</strong> Utilisez des préfixes comme "nit:" pour les remarques cosmétiques, "suggestion:" pour les améliorations optionnelles, et "blocker:" pour les problèmes qui doivent être corrigés avant le merge. Cela aide l'auteur à prioriser ses corrections.</p>
      <p><strong>Commentez aussi le positif.</strong> Si vous voyez une solution élégante ou un bon test, dites-le. La revue de code n'est pas qu'un exercice de détection de problèmes.</p>

      <h2>Résoudre les conflits Git proprement</h2>
      <p>Les conflits de merge sont inévitables quand plusieurs personnes travaillent sur le même code. La meilleure stratégie est de les prévenir : faites des PRs petites, mergez fréquemment, et maintenez votre branche à jour avec <code>main</code>. Mais quand un conflit survient, voici comment le gérer :</p>
      <pre><code># Mettre à jour main et rebaser votre branche
git checkout main
git pull origin main
git checkout feat/ma-feature
git rebase main

# Résoudre les conflits marqués par Git
# Puis continuer le rebase
git add .
git rebase --continue</code></pre>
      <p>Je préfère le rebase au merge pour garder un historique linéaire et lisible. Le rebase réécrit l'historique de votre branche comme si elle avait été créée à partir du dernier commit de <code>main</code>, ce qui simplifie la lecture du log.</p>

      <h2>Automatiser avec les hooks Git et la CI</h2>
      <p>Les hooks Git permettent d'exécuter des scripts automatiquement à certaines étapes du workflow. Un hook <code>pre-commit</code> peut lancer le linter et le formateur de code, garantissant que seul du code propre est commité. Un hook <code>commit-msg</code> peut valider que le message de commit respecte les Conventional Commits.</p>
      <p>Utilisez des outils comme Husky et lint-staged pour configurer ces hooks facilement dans vos projets Node.js. Combinés avec une pipeline CI/CD qui exécute les tests automatiquement sur chaque PR, ces automatisations éliminent toute une classe de problèmes avant qu'ils n'atteignent la branche principale.</p>

      <h2>Conclusion</h2>
      <p>Un workflow Git professionnel n'est pas de la bureaucratie — c'est un investissement dans la productivité et la qualité de votre équipe. Des branches bien nommées, des commits clairs, des PRs petites et bien documentées, et des revues de code constructives transforment la collaboration en un processus fluide et agréable. Commencez par adopter les Conventional Commits et le nommage de branches — ces deux pratiques seules amélioreront significativement votre workflow.</p>
    `
  },
  {
    slug: 'tailwind-css-bonnes-pratiques',
    title: 'Tailwind CSS : les bonnes pratiques que j\'applique au quotidien',
    excerpt: 'Tailwind CSS est puissant mais peut devenir chaotique. Voici comment je structure mes projets pour garder un code propre.',
    date: '2026-01-20',
    readTime: '9 min',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Frontend'],
    content: `
      <h2>Pourquoi Tailwind CSS a changé ma façon de travailler</h2>
      <p>Quand j'ai découvert Tailwind CSS il y a trois ans, j'étais sceptique. Écrire des classes utilitaires directement dans le HTML ? Cela ressemblait à un retour en arrière, à l'époque des styles inline. Mais après l'avoir utilisé sur une dizaine de projets, je ne reviendrais plus en arrière. Tailwind a fondamentalement amélioré ma productivité et la maintenabilité de mes projets.</p>
      <p>L'avantage principal de Tailwind n'est pas la vitesse d'écriture — c'est la <strong>cohérence</strong>. Le système de design tokens (espacement, couleurs, typographie) est intégré dans les classes utilitaires. Vous ne choisissez pas entre <code>margin: 14px</code> et <code>margin: 16px</code> — vous utilisez <code>m-4</code> (16px) et votre interface reste cohérente automatiquement.</p>
      <p>Mais Tailwind peut vite devenir chaotique si vous n'adoptez pas de bonnes pratiques. Voici celles que j'applique sur chaque projet pour garder un code propre et maintenable.</p>

      <h2>Extraire les composants plutôt que d'utiliser @apply</h2>
      <p>Quand une combinaison de classes Tailwind revient plus de 2 à 3 fois, la tentation est d'utiliser la directive <code>@apply</code> pour créer une classe CSS personnalisée. Je déconseille cette approche dans la majorité des cas.</p>
      <p><code>@apply</code> perd l'un des principaux avantages de Tailwind : la colocation du style et du markup. Quand vous voyez <code>class="btn-primary"</code>, vous devez aller chercher la définition dans votre fichier CSS pour comprendre le style. Avec <code>class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"</code>, tout est visible immédiatement.</p>
      <p>La meilleure approche est d'extraire un composant Svelte (ou React) réutilisable. Un composant <code>Button.svelte</code> encapsule les classes Tailwind et expose des props pour les variantes :</p>
      <pre><code>&lt;!-- Button.svelte --&gt;
&lt;script&gt;
  let { variant = 'primary', size = 'md', children } = $props();

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
&lt;/script&gt;

&lt;button class="font-semibold rounded-xl transition-colors
  {variants[variant]} {sizes[size]}"&gt;
  {@render children()}
&lt;/button&gt;</code></pre>
      <p>Cette approche est plus maintenable, plus lisible et plus flexible que <code>@apply</code>.</p>

      <h2>Organiser ses classes avec des conventions</h2>
      <p>Un élément avec 15 classes Tailwind peut être difficile à lire. Pour améliorer la lisibilité, j'ordonne toujours mes classes dans un ordre logique et cohérent :</p>
      <p><strong>1. Layout</strong> (display, position, flex/grid) — <strong>2. Spacing</strong> (margin, padding) — <strong>3. Sizing</strong> (width, height) — <strong>4. Typography</strong> (font, text) — <strong>5. Colors</strong> (bg, text color, border color) — <strong>6. Borders &amp; Effects</strong> (rounded, shadow, opacity) — <strong>7. Interactivité</strong> (hover, focus, transition) — <strong>8. Responsive</strong> (md:, lg:).</p>
      <p>Pour automatiser cet ordonnancement, utilisez le plugin <code>prettier-plugin-tailwindcss</code>. Il trie automatiquement vos classes selon l'ordre recommandé par Tailwind à chaque sauvegarde. C'est un gain de temps considérable et cela élimine les débats sur l'ordre des classes en équipe.</p>

      <h2>Exploiter les variables CSS avec Tailwind v4</h2>
      <p>Tailwind v4 s'intègre nativement avec les custom properties CSS, ce qui simplifie la gestion des thèmes. Au lieu de configurer vos couleurs dans <code>tailwind.config.js</code>, vous pouvez les définir directement dans vos variables CSS :</p>
      <pre><code>:root {
  --color-primary: 59 130 246;    /* blue-500 */
  --color-secondary: 139 92 246;  /* violet-500 */
  --color-accent: 14 165 233;     /* sky-500 */
}

/* Le dark mode modifie simplement les variables */
.dark {
  --color-primary: 96 165 250;    /* blue-400 */
  --color-secondary: 167 139 250; /* violet-400 */
  --color-accent: 56 189 248;     /* sky-400 */
}</code></pre>
      <p>Cette approche rend le changement de thème trivial : modifiez les variables, et toute l'interface se met à jour. C'est particulièrement utile pour les projets white-label où chaque client a sa propre palette de couleurs.</p>

      <h2>Le dark mode bien fait</h2>
      <p>Tailwind rend l'implémentation du dark mode straightforward avec le préfixe <code>dark:</code>. Mais un dark mode réussi va au-delà de simplement inverser les couleurs. Voici mes règles :</p>
      <p><strong>Ne pas inverser bêtement.</strong> Un fond blanc ne devient pas noir, il devient gris foncé (<code>gray-900</code> ou <code>gray-950</code>). Le noir pur (#000) est agressif pour les yeux. De même, le texte blanc pur (#fff) sur fond noir crée trop de contraste — préférez <code>gray-100</code> ou <code>gray-200</code>.</p>
      <p><strong>Tester systématiquement les deux modes.</strong> À chaque composant que je développe, je vérifie le rendu en mode clair ET en mode sombre. Un bouton qui ressort bien sur fond blanc peut disparaître sur fond sombre si le contraste est insuffisant.</p>
      <p><strong>Respecter les préférences système.</strong> Initialisez le thème avec <code>prefers-color-scheme</code>, puis permettez à l'utilisateur de le changer manuellement. Stockez la préférence dans <code>localStorage</code> pour la conserver entre les visites.</p>

      <h2>Responsive mobile-first : la bonne approche</h2>
      <p>Tailwind est conçu pour le mobile-first, ce qui signifie que les classes sans préfixe s'appliquent aux mobiles, et les préfixes <code>sm:</code>, <code>md:</code>, <code>lg:</code> ajoutent des styles pour les écrans plus grands.</p>
      <p>Commencez toujours par designer pour mobile. Les classes de base définissent le layout mobile, puis les breakpoints ajoutent de la complexité pour les écrans plus grands. Cette approche est plus naturelle car le mobile est la version la plus contrainte — il est plus facile d'ajouter des éléments sur grand écran que de supprimer des éléments sur petit écran.</p>
      <pre><code>&lt;!-- Mobile: 1 colonne, Tablette: 2 colonnes, Desktop: 3 colonnes --&gt;
&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
  ...
&lt;/div&gt;

&lt;!-- Mobile: caché, Desktop: visible --&gt;
&lt;aside class="hidden lg:block w-64"&gt;
  ...
&lt;/aside&gt;</code></pre>

      <h2>Performances : Tailwind génère uniquement ce que vous utilisez</h2>
      <p>Un mythe persistant sur Tailwind est qu'il génère un fichier CSS énorme. En réalité, le moteur JIT (Just-In-Time) de Tailwind analyse votre code et ne génère que les classes que vous utilisez réellement. Le CSS final d'un projet typique fait entre 10 et 30 Ko (gzippé), ce qui est nettement inférieur à la plupart des frameworks CSS traditionnels.</p>
      <p>Pour maximiser ce bénéfice, assurez-vous que votre configuration <code>content</code> pointe vers tous les fichiers qui contiennent des classes Tailwind. Et évitez de construire des noms de classes dynamiquement avec la concaténation de strings — le scanner ne peut pas détecter <code>\`text-\${color}-500\`</code>. Utilisez plutôt des objets de mapping comme dans l'exemple du composant Button ci-dessus.</p>

      <h2>Conclusion</h2>
      <p>Tailwind CSS est un outil puissant qui récompense les bonnes pratiques. En extrayant des composants, en ordonnant vos classes, en exploitant les variables CSS et en adoptant l'approche mobile-first, vous obtiendrez un code propre, maintenable et performant. L'investissement initial dans ces conventions se rentabilise rapidement, surtout quand l'équipe grandit ou quand vous revenez sur un projet après plusieurs mois.</p>
    `
  },
  {
    slug: 'api-rest-nodejs-bonnes-pratiques',
    title: 'Créer une API REST robuste avec Node.js',
    excerpt: 'Les fondamentaux pour concevoir des APIs fiables : structure, validation, sécurité et gestion des erreurs.',
    date: '2026-01-10',
    readTime: '11 min',
    category: 'Backend',
    tags: ['Node.js', 'API', 'Backend'],
    content: `
      <h2>Pourquoi la conception de l'API est cruciale</h2>
      <p>Une API REST est le contrat entre votre backend et ses consommateurs — applications frontend, apps mobiles, services tiers. Une API mal conçue crée des problèmes en cascade : le frontend doit compenser les incohérences, les erreurs sont difficiles à diagnostiquer, et chaque modification risque de casser les clients existants. À l'inverse, une API bien pensée est un plaisir à utiliser et facilite la maintenance à long terme.</p>
      <p>Après avoir construit des dizaines d'APIs REST avec Node.js et Express, voici les pratiques que j'applique systématiquement. Elles sont le fruit d'erreurs passées et de leçons apprises sur des projets en production.</p>

      <h2>Structure du projet : séparer les responsabilités</h2>
      <p>La structure de votre projet reflète la clarté de votre pensée. Séparez clairement les couches : routes, controllers, services et models. Chaque fichier a une seule responsabilité, ce qui rend le code plus facile à tester, à comprendre et à modifier.</p>
      <pre><code>src/
├── routes/          # Définition des endpoints et middleware
│   ├── users.ts
│   └── products.ts
├── controllers/     # Logique de requête/réponse HTTP
│   ├── users.ts
│   └── products.ts
├── services/        # Logique métier pure
│   ├── users.ts
│   └── products.ts
├── models/          # Schémas de données et accès DB
│   ├── User.ts
│   └── Product.ts
├── middleware/       # Middleware transversal
│   ├── auth.ts
│   ├── errorHandler.ts
│   └── rateLimiter.ts
├── utils/           # Fonctions utilitaires
│   └── validators.ts
└── app.ts           # Configuration de l'application</code></pre>
      <p>Le <strong>controller</strong> reçoit la requête HTTP, extrait les paramètres, appelle le service approprié et formate la réponse. Le <strong>service</strong> contient la logique métier pure — il ne connaît ni Express ni HTTP. Le <strong>model</strong> gère l'accès aux données. Cette séparation permet de tester la logique métier indépendamment du framework HTTP.</p>

      <h2>Validation des entrées : ne faites confiance à personne</h2>
      <p>Chaque donnée qui entre dans votre API — paramètres d'URL, corps de requête, headers — doit être validée avant d'être traitée. Ne faites jamais confiance aux données entrantes, même si elles viennent de votre propre frontend. Un client malveillant peut envoyer n'importe quoi.</p>
      <p>J'utilise <strong>Zod</strong> pour la validation, car il fonctionne à la fois comme validateur et comme générateur de types TypeScript. Définissez un schéma pour chaque endpoint :</p>
      <pre><code>import { z } from 'zod';

const CreateUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(128),
  role: z.enum(['user', 'admin']).default('user'),
});

// Le type TypeScript est généré automatiquement
type CreateUserInput = z.infer&lt;typeof CreateUserSchema&gt;;

// Middleware de validation réutilisable
function validate(schema) {
  return (req, res, next) =&gt; {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation error',
        details: result.error.issues,
      });
    }
    req.validatedBody = result.data;
    next();
  };
}</code></pre>
      <p>Cette approche a deux avantages majeurs : les erreurs de validation sont détectées immédiatement avec des messages clairs, et les types TypeScript sont synchronisés automatiquement avec les schémas de validation.</p>

      <h2>Gestion des erreurs centralisée</h2>
      <p>Chaque endpoint qui gère ses propres erreurs avec des try/catch est un cauchemar de maintenance. Créez un middleware de gestion d'erreurs global qui standardise les réponses d'erreur :</p>
      <pre><code>class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

// Middleware global (à placer en dernier)
function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: { code: err.code, message: err.message }
    });
  }

  // Erreur inattendue - logger et masquer les détails
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' }
  });
}

// Utilisation dans un service
function getUserById(id) {
  const user = await db.users.findById(id);
  if (!user) throw new AppError('User not found', 404, 'USER_NOT_FOUND');
  return user;
}</code></pre>
      <p>Renvoyez des codes HTTP appropriés : 400 pour les erreurs de validation, 401 pour l'authentification manquante, 403 pour les permissions insuffisantes, 404 pour les ressources inexistantes, 409 pour les conflits, et 500 pour les erreurs internes. Les clients (frontend, mobile) peuvent alors gérer chaque cas de manière appropriée.</p>

      <h2>Authentification et autorisation</h2>
      <p>L'authentification (qui êtes-vous ?) et l'autorisation (avez-vous le droit ?) sont deux concepts distincts qui méritent chacun leur middleware.</p>
      <p>Pour l'authentification stateless, utilisez des <strong>JWT</strong> (JSON Web Tokens) avec une durée de vie courte (15-30 minutes) combinés à des refresh tokens stockés de manière sécurisée (cookie HttpOnly). Cela évite les problèmes de sessions côté serveur tout en limitant l'impact d'un token compromis.</p>
      <p>Pour l'autorisation, implémentez un système de rôles et permissions. Un middleware vérifie que l'utilisateur authentifié a le rôle nécessaire pour accéder à la ressource demandée. Gardez la logique d'autorisation simple et centralisée — un objet qui mappe les rôles aux permissions est souvent suffisant pour les applications de taille moyenne.</p>

      <h2>Rate limiting : protéger votre API contre les abus</h2>
      <p>Sans rate limiting, votre API est vulnérable aux attaques par force brute, au scraping excessif et aux dénis de service involontaires. Implémentez un rate limiter avec des limites différentes selon les endpoints :</p>
      <p>Les endpoints publics (listing, recherche) peuvent tolérer 100 requêtes par minute par IP. Les endpoints d'authentification (login, register) doivent être plus restrictifs : 10 tentatives par minute par IP pour prévenir le brute force. Les endpoints protégés (opérations CRUD) peuvent avoir une limite intermédiaire de 60 requêtes par minute par utilisateur.</p>
      <p>Des packages comme <code>express-rate-limit</code> et <code>rate-limiter-flexible</code> rendent l'implémentation triviale. En production avec plusieurs instances, utilisez Redis comme store partagé pour que les limites s'appliquent globalement.</p>

      <h2>Pagination, filtrage et tri</h2>
      <p>Toute API qui retourne des listes doit implémenter la pagination. Sans elle, un endpoint qui retourne 10 000 résultats consomme inutilement de la bande passante et de la mémoire. Utilisez la pagination par curseur plutôt que par offset pour les grands datasets :</p>
      <pre><code>// GET /api/products?limit=20&cursor=abc123&sort=price&order=asc&category=electronics
app.get('/api/products', async (req, res) =&gt; {
  const { limit = 20, cursor, sort = 'createdAt', order = 'desc', category } = req.query;

  const products = await productService.list({
    limit: Math.min(parseInt(limit), 100),
    cursor,
    sort,
    order,
    filters: { category }
  });

  res.json({
    data: products.items,
    pagination: {
      nextCursor: products.nextCursor,
      hasMore: products.hasMore,
      total: products.total
    }
  });
});</code></pre>

      <h2>Documentation avec OpenAPI / Swagger</h2>
      <p>Une API sans documentation est inutilisable pour les développeurs qui ne l'ont pas construite. Utilisez la spécification OpenAPI (anciennement Swagger) pour générer une documentation interactive automatiquement. Des outils comme <code>swagger-jsdoc</code> permettent de documenter vos endpoints directement dans le code avec des commentaires JSDoc.</p>
      <p>L'avantage de la documentation générée est qu'elle reste synchronisée avec le code. Quand vous modifiez un endpoint, la documentation se met à jour automatiquement. Et l'interface Swagger UI permet aux développeurs frontend de tester les endpoints directement depuis le navigateur, sans outils supplémentaires.</p>

      <h2>Conclusion : une API est un produit</h2>
      <p>Traitez votre API comme un produit à part entière, pas comme un simple détail d'implémentation. Une structure claire, une validation rigoureuse, une gestion d'erreurs cohérente, une authentification robuste et une documentation à jour font la différence entre une API que les développeurs redoutent et une API qu'ils apprécient. L'investissement initial est modeste et les bénéfices se multiplient avec le temps, surtout quand votre équipe ou votre base d'utilisateurs grandit.</p>
    `
  }
];

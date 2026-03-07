<script>
  import { Motion } from "svelte-motion";
  import { base } from '$app/paths';
  import AdBanner from '$lib/AdBanner.svelte';

  const services = [
    {
      title: "Développement Web",
      description: "Sites vitrines, applications web et plateformes sur mesure avec React, Svelte ou Angular.",
      features: ["Sites responsive", "Applications SPA/SSR", "Performance optimisée"],
      color: "border-blue-200 dark:border-blue-800",
      accent: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      title: "Développement Backend",
      description: "APIs robustes et architectures serveur avec Node.js, Express ou Laravel.",
      features: ["APIs RESTful", "Bases de données", "Authentification & sécurité"],
      color: "border-purple-200 dark:border-purple-800",
      accent: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      title: "Intégration UI/UX",
      description: "Maquettes fidèlement intégrées avec une attention au détail et à l'accessibilité.",
      features: ["Intégration pixel-perfect", "Design responsive", "Accessibilité WCAG"],
      color: "border-pink-200 dark:border-pink-800",
      accent: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-50 dark:bg-pink-950/30"
    },
    {
      title: "Déploiement & DevOps",
      description: "Mise en production, CI/CD et hébergement cloud de vos applications.",
      features: ["Docker", "CI/CD pipelines", "Hébergement cloud"],
      color: "border-orange-200 dark:border-orange-800",
      accent: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-950/30"
    },
    {
      title: "Traduction",
      description: "Traduction professionnelle de documents et interfaces entre Français, Anglais et Malgache.",
      features: ["Français / Anglais / Malgache", "Relecture & correction", "Livraison rapide"],
      color: "border-teal-200 dark:border-teal-800",
      accent: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-950/30"
    },
    {
      title: "Mise en page & Documentation",
      description: "Rédaction et mise en page professionnelle de CV, rapports et documents techniques.",
      features: ["Documents professionnels", "Mise en page soignée", "Export PDF"],
      color: "border-indigo-200 dark:border-indigo-800",
      accent: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/30"
    },
  ];

  const process = [
    { step: "01", title: "Échange", desc: "Compréhension de vos besoins et objectifs." },
    { step: "02", title: "Proposition", desc: "Devis détaillé avec planning et livrables." },
    { step: "03", title: "Réalisation", desc: "Développement itératif avec points réguliers." },
    { step: "04", title: "Livraison", desc: "Mise en production et accompagnement post-livraison." }
  ];
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto">

    <!-- Header -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mes services
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Des solutions techniques adaptées à vos besoins, de la conception au déploiement.
        </p>
      </div>
    </Motion>

    <!-- Services -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
      {#each services as service, i}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
        >
          <div class="h-full p-6 rounded-2xl border {service.color} hover:shadow-md transition-all duration-200">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <ul class="space-y-1.5">
              {#each service.features as feature}
                <li class="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <svg class="w-4 h-4 mr-2 {service.accent} flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
        </Motion>
      {/each}
    </div>

    <!-- Publicité -->
    <div class="mb-12">
      <AdBanner format="horizontal" slot="3456789012" />
    </div>

    <!-- Processus -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div class="mb-20">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Comment je travaille
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each process as step, i}
            <div class="relative text-center">
              <div class="text-4xl font-bold text-gray-100 dark:text-gray-800 mb-2">{step.step}</div>
              <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
              {#if i < process.length - 1}
                <div class="hidden lg:block absolute top-6 -right-3 w-6 h-px bg-gray-200 dark:bg-gray-700"></div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </Motion>

    <!-- CTA -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div class="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-10 border border-gray-100 dark:border-gray-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Un projet en tête ?
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
          Discutons de vos besoins. Première consultation gratuite, réponse sous 24h.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a href="{base}/contact" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-md transition-all duration-200">
            Me contacter
          </a>
          <a href="{base}/projects" class="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200">
            Voir mes réalisations
          </a>
        </div>
      </div>
    </Motion>

  </div>
</section>

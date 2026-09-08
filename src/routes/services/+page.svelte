<script>
  import { base } from '$app/paths';

  const services = [
    {
      title: "Developpement Web",
      description: "Sites vitrines, applications web et plateformes sur mesure.",
      features: ["Sites responsive", "Applications SPA/SSR", "Performance optimisee"],
      accent: "border-l-blue-500"
    },
    {
      title: "Developpement Backend",
      description: "APIs robustes et architectures serveur.",
      features: ["APIs RESTful", "Bases de donnees", "Authentification & securite"],
      accent: "border-l-violet-500"
    },
    {
      title: "Integration UI/UX",
      description: "Maquettes fidelement integrees avec attention au detail.",
      features: ["Integration pixel-perfect", "Design responsive", "Accessibilite WCAG"],
      accent: "border-l-pink-500"
    },
    {
      title: "Deploiement & DevOps",
      description: "Mise en production, CI/CD et hebergement cloud.",
      features: ["Docker", "CI/CD pipelines", "Hebergement cloud"],
      accent: "border-l-orange-500"
    },
    {
      title: "Traduction",
      description: "Traduction professionnelle FR / EN / MG.",
      features: ["Francais / Anglais / Malgache", "Relecture & correction", "Livraison rapide"],
      accent: "border-l-teal-500"
    },
    {
      title: "Documentation",
      description: "Redaction et mise en page de documents professionnels.",
      features: ["Documents techniques", "Mise en page soignee", "Export PDF"],
      accent: "border-l-indigo-500"
    }
  ];

  const process = [
    { step: "01", title: "Echange", desc: "On discute de vos besoins et objectifs." },
    { step: "02", title: "Proposition", desc: "Devis detaille avec planning et livrables." },
    { step: "03", title: "Realisation", desc: "Developpement iteratif avec points reguliers." },
    { step: "04", title: "Livraison", desc: "Mise en production et accompagnement." }
  ];
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto">

    <!-- Header -->
    <div class="mb-16">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Services
      </h1>
      <p class="text-gray-500 dark:text-gray-400 max-w-xl">
        Des solutions techniques adaptees a vos besoins, de la conception au deploiement.
      </p>
    </div>

    <!-- Services -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
      {#each services as service, i}
        <div class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 border-l-4 {service.accent} hover:shadow-sm transition-shadow duration-200">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {service.title}
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {service.description}
          </p>
          <ul class="space-y-1.5">
            {#each service.features as feature}
              <li class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Processus -->
    <div class="mb-24">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-10">
        Comment ca se passe
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each process as step, i}
          <div class="relative">
            <div class="text-3xl font-bold text-gray-100 dark:text-gray-800 mb-2">{step.step}</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-10 border border-gray-200 dark:border-gray-800 text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Un projet en tete ?
      </h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
        Premiere consultation gratuite. Je reponds sous 24h.
      </p>
      <a href="{base}/contact" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Discutons
      </a>
    </div>

  </div>
</section>

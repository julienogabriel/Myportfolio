<script>
  import { Motion } from "svelte-motion";
  import { base } from '$app/paths';
  import AdBanner from '$lib/AdBanner.svelte';

  const skills = [
    { name: 'Svelte / SvelteKit', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'React / Next.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Angular', level: 85, color: 'from-red-500 to-pink-500' },
    { name: 'Laravel / PHP', level: 88, color: 'from-red-500 to-orange-500' },
    { name: 'Node.js / Express', level: 92, color: 'from-green-600 to-emerald-600' }
  ];

  const experiences = [
    {
      period: "2023 — Présent",
      role: "Développeur Full-Stack Freelance",
      description: "Conception et développement d'applications web sur mesure pour des clients variés. Spécialisation en Svelte, React et Node.js."
    },
    {
      period: "2021 — 2023",
      role: "Développeur Web",
      description: "Développement d'interfaces utilisateur modernes et intégration de systèmes backend avec Laravel et APIs REST."
    },
    {
      period: "2020 — 2021",
      role: "Formation & Projets personnels",
      description: "Apprentissage intensif du développement web moderne. Réalisation de projets personnels et contributions open source."
    }
  ];

  const values = [
    { title: 'Code de qualité', description: 'Architecture propre, tests et documentation pour des projets maintenables.' },
    { title: 'Communication claire', description: 'Suivi transparent de l\'avancement et échanges réguliers avec le client.' },
    { title: 'Livraison fiable', description: 'Respect des délais et des engagements pris en début de projet.' },
    { title: 'Veille technologique', description: 'Formation continue sur les outils et pratiques les plus récents.' }
  ];
</script>

<Motion
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <img
            src="{base}/gaby.jpg"
            alt="Gabriel — Développeur Full-Stack"
            class="w-28 h-28 md:w-36 md:h-36 rounded-2xl shadow-lg object-cover flex-shrink-0"
          />
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center md:text-left">
              À propos de moi
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Je suis <strong class="text-gray-800 dark:text-gray-200">Gabriel</strong>, développeur full-stack
              basé à Fianarantsoa, Madagascar. Je conçois des applications web modernes
              en combinant rigueur technique et attention au design. Mon objectif : livrer
              des solutions fiables qui apportent une vraie valeur à mes clients.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Parcours -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Parcours
          </h2>
          <div class="space-y-0">
            {#each experiences as exp, i}
              <div class="relative pl-8 pb-8 {i < experiences.length - 1 ? 'border-l-2 border-gray-200 dark:border-gray-800' : 'border-l-2 border-transparent'}">
                <div class="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-gray-950"></div>
                <p class="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{exp.period}</p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            {/each}
          </div>
        </div>
      </Motion>

      <!-- Compétences -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Compétences techniques
          </h2>
          <div class="space-y-5">
            {#each skills as skill, i}
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <Motion
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
                  >
                    <div class="h-full bg-gradient-to-r {skill.color} rounded-full"></div>
                  </Motion>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </Motion>

      <!-- Valeurs -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Ma façon de travailler
          </h2>
          <div class="grid md:grid-cols-2 gap-5">
            {#each values as value}
              <div class="p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-200">
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1.5">{value.title}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            {/each}
          </div>
        </div>
      </Motion>

      <!-- Télécharger CV -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div class="mb-16 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50">
          <div class="flex flex-col sm:flex-row items-center gap-5">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="flex-1 text-center sm:text-left">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Télécharger mon CV</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Consultez mon parcours complet au format PDF</p>
            </div>
            <a
              href="{base}/CV_Gabriel.pdf"
              download
              class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-md flex items-center gap-2 flex-shrink-0"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Télécharger
            </a>
          </div>
        </div>
      </Motion>

      <!-- Publicité -->
      <AdBanner format="horizontal" slot="4567890123" />

      <!-- CTA -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <a
            href="{base}/projects"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-md transition-all duration-200"
          >
            Voir mes projets
          </a>
          <a
            href="{base}/contact"
            class="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
          >
            Me contacter
          </a>
        </div>
      </Motion>

    </div>
  </section>
</Motion>

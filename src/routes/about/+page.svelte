<script>
  import { base } from '$app/paths';

  const experiences = [
    {
      period: "2023 — Present",
      role: "Developpeur Full-Stack Freelance",
      description: "Applications web sur mesure pour des clients en France, Canada, Suisse. Specialise en Svelte, React et Node.js."
    },
    {
      period: "2021 — 2023",
      role: "Developpeur Web",
      description: "Interfaces utilisateur modernes et integration backend avec Laravel et APIs REST."
    },
    {
      period: "2020 — 2021",
      role: "Formation & Projets personnels",
      description: "Apprentissage intensif du developpement web. Projets personnels et contributions open source."
    }
  ];

  const skills = {
    "Frontend": ["Svelte / SvelteKit", "React / Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js / Express", "Laravel / PHP", "Python", "APIs REST"],
    "Base de donnees": ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    "Outils": ["Docker", "Git / GitHub", "CI/CD", "Vercel"]
  };

  const values = [
    { title: 'Code propre', description: 'Architecture claire, tests et documentation. Un projet maintenable vaut mieux qu\'un prototype rapide.' },
    { title: 'Communication directe', description: 'Pas de jargon inutile. Suivi transparent, points reguliers, pas de mauvaises surprises.' },
    { title: 'Respect des delais', description: 'Je sous-promets et je sur-livre. Une deadline annoncee est une deadline tenue.' },
    { title: 'Amelioration continue', description: 'Veille technologique permanente. J\'apprends chaque jour pour proposer les meilleures solutions.' }
  ];
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
  <div class="max-w-4xl mx-auto">

    <!-- Header avec photo -->
    <div class="flex flex-col md:flex-row items-start gap-8 mb-20">
      <img
        src="{base}/gaby.jpg"
        alt="Gabriel"
        class="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover flex-shrink-0 shadow-md"
      />
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          A propos
        </h1>
        <div class="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Je suis <strong class="text-gray-900 dark:text-white">Gabriel</strong>, developpeur full-stack base a Fianarantsoa, Madagascar.
          </p>
          <p>
            Depuis 2020, je concois des applications web pour des clients a l'international. Ce qui me motive : resoudre des problemes concrets avec du code bien ecrit, et livrer des produits qui fonctionnent vraiment — pas juste des maquettes qui ont l'air bien.
          </p>
          <p>
            Je travaille principalement avec Svelte, React et Node.js, mais je choisis toujours la techno la plus adaptee au probleme, pas celle qui est a la mode.
          </p>
        </div>
      </div>
    </div>

    <!-- Parcours -->
    <div class="mb-20">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-8">
        Parcours
      </h2>
      <div class="space-y-0">
        {#each experiences as exp, i}
          <div class="relative pl-8 pb-8 {i < experiences.length - 1 ? 'border-l-2 border-gray-200 dark:border-gray-800' : 'border-l-2 border-transparent'}">
            <div class="absolute left-0 top-1.5 w-3 h-3 -translate-x-[7px] rounded-full bg-gray-900 dark:bg-white ring-4 ring-white dark:ring-gray-950"></div>
            <p class="text-sm font-medium text-gray-400 dark:text-gray-500 mb-1">{exp.period}</p>
            <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Competences (sans barres de progression) -->
    <div class="mb-20">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-8">
        Competences
      </h2>
      <div class="grid sm:grid-cols-2 gap-8">
        {#each Object.entries(skills) as [category, items]}
          <div>
            <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">{category}</h3>
            <ul class="space-y-1.5">
              {#each items as skill}
                <li class="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span class="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 flex-shrink-0"></span>
                  {skill}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Valeurs -->
    <div class="mb-20">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-8">
        Comment je travaille
      </h2>
      <div class="grid sm:grid-cols-2 gap-5">
        {#each values as value}
          <div class="p-5 rounded-xl border border-gray-100 dark:border-gray-800">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1.5">{value.title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- CV -->
    <div class="mb-16 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
      <div class="flex flex-col sm:flex-row items-center gap-5">
        <div class="flex-1 text-center sm:text-left">
          <h3 class="font-semibold text-gray-900 dark:text-white">Telecharger mon CV</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">Format PDF</p>
        </div>
        <a
          href="{base}/CV GABRIEL.pdf"
          download
          class="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Telecharger
        </a>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex flex-wrap gap-3">
      <a href="{base}/projects" class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Voir mes projets
      </a>
      <a href="{base}/contact" class="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-500 dark:hover:border-gray-500 transition-colors">
        Me contacter
      </a>
    </div>

  </div>
</section>

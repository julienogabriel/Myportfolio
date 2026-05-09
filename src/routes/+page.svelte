<script>
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  import { base } from '$app/paths';

  let typedText = "";
  let currentRoleIndex = 0;
  let isDeleting = false;
  let typeSpeed = 150;

  const roles = [
    "Développeur Full-Stack",
    "Concepteur UI/UX",
    "Intégrateur Web",
    "Consultant IT"
  ];

  const typeWriter = () => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting) {
      typedText = currentRole.substring(0, typedText.length + 1);
      if (typedText === currentRole) {
        setTimeout(() => isDeleting = true, 2000);
      }
    } else {
      typedText = currentRole.substring(0, typedText.length - 1);
      if (typedText === "") {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeWriter, isDeleting ? 50 : typeSpeed);
  };

  onMount(() => {
    typeWriter();
  });

  const highlights = [
    { number: "3+", label: "Années d'expérience" },
    { number: "20+", label: "Projets livrés" },
    { number: "15+", label: "Clients accompagnés" },
    { number: "8", label: "Technologies maîtrisées" }
  ];

  const technologies = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Svelte", color: "from-orange-400 to-red-500" },
    { name: "Node.js", color: "from-green-400 to-emerald-500" },
    { name: "TypeScript", color: "from-blue-400 to-indigo-500" },
    { name: "Laravel", color: "from-red-400 to-rose-500" },
    { name: "Python", color: "from-yellow-400 to-amber-500" },
    { name: "Angular", color: "from-red-500 to-pink-500" },
    { name: "Docker", color: "from-blue-500 to-cyan-500" }
  ];

  const approche = [
    {
      title: "Analyse des besoins",
      description: "Je commence chaque projet par une compréhension approfondie de vos objectifs business et techniques pour proposer la solution la plus adaptée.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      title: "Développement itératif",
      description: "Des livraisons régulières avec des points d'avancement pour vous permettre de suivre et valider chaque étape du projet.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: "Qualité & performance",
      description: "Code propre, tests rigoureux et optimisation des performances pour des applications fiables et rapides en production.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];
</script>

<section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">

  <!-- Fond subtil -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
  </div>

  <!-- Contenu principal -->
  <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">

    <!-- Badge -->
    <Motion
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/60 backdrop-blur rounded-full mb-10 border border-gray-200/60 dark:border-gray-700/60 text-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="text-gray-600 dark:text-gray-400 font-medium">Disponible pour de nouveaux projets</span>
      </div>
    </Motion>

    <!-- Titre -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-[1.1] tracking-tight">
        <span class="text-gray-900 dark:text-white">Gabriel</span>
        <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          {typedText}<span class="inline-block w-[2px] h-[0.85em] bg-blue-600 dark:bg-blue-400 ml-0.5 align-middle animate-blink"></span>
        </span>
      </h1>
    </Motion>

    <!-- Description -->
    <Motion
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
    >
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Je conçois et développe des applications web modernes,
        en alliant <strong class="text-gray-800 dark:text-gray-200">performance technique</strong> et
        <strong class="text-gray-800 dark:text-gray-200">expérience utilisateur soignée</strong>.
        Basé à Fianarantsoa, Madagascar.
      </p>
    </Motion>

    <!-- CTA -->
    <Motion
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
        <a
          href="{base}/projects"
          class="group px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold text-base flex items-center gap-2"
        >
          <span>Voir mes réalisations</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
        <a
          href="{base}/contact"
          class="px-7 py-3.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-base border border-gray-200 dark:border-gray-700"
        >
          Me contacter
        </a>
      </div>
    </Motion>

    <!-- Chiffres clés -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.65 }}
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
        {#each highlights as stat}
          <div class="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 dark:border-gray-800">
            <div class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.number}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        {/each}
      </div>
    </Motion>

    <!-- Technologies -->
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <div class="mb-8">
        <p class="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-semibold mb-5">
          Stack technique
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          {#each technologies as tech}
            <div class="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700/80 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </Motion>

  </div>
</section>

<!-- Mon approche -->
<section class="py-20 px-6 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Mon approche
      </h2>
      <p class="text-gray-500 dark:text-gray-400">Une méthodologie éprouvée pour des résultats concrets</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each approche as item}
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/80 hover:shadow-md transition-shadow duration-200">
          <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={item.icon}/>
            </svg>
          </div>
          <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA final -->
<section class="py-16 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Un projet en tête ?
    </h2>
    <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
      Discutons de vos besoins. Première consultation gratuite, réponse sous 24h.
    </p>
    <a
      href="{base}/contact"
      class="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
    >
      Me contacter
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
    </a>
  </div>
</section>

<style>
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .animate-blink {
    animation: blink 1s step-end infinite;
  }
</style>

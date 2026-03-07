<script>
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import AdBanner from '$lib/AdBanner.svelte';

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

  const testimonials = [
    {
      name: "Marie L.",
      role: "Directrice, Agence Digitale",
      text: "Gabriel a livré un travail de qualité dans les délais. Son professionnalisme et sa réactivité sont remarquables.",
      rating: 5
    },
    {
      name: "Jean-Pierre R.",
      role: "Fondateur, StartUp Tech",
      text: "Excellente collaboration. Il a su comprendre nos besoins et proposer des solutions adaptées. Je recommande vivement.",
      rating: 5
    },
    {
      name: "Sandra M.",
      role: "Responsable Marketing",
      text: "Un développeur fiable et créatif. Le résultat a dépassé nos attentes, aussi bien sur le design que sur les performances.",
      rating: 5
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

<!-- Bannière publicitaire -->
<div class="max-w-4xl mx-auto px-6">
  <AdBanner format="horizontal" slot="1234567890" />
</div>

<!-- Témoignages -->
<section class="py-20 px-6 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Ce que disent mes clients
      </h2>
      <p class="text-gray-500 dark:text-gray-400">Retours d'expérience de collaborations récentes</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each testimonials as testimonial}
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/80 hover:shadow-md transition-shadow duration-200">
          <!-- Étoiles -->
          <div class="flex gap-0.5 mb-3">
            {#each Array(testimonial.rating) as _}
              <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {/each}
          </div>

          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 italic">
            "{testimonial.text}"
          </p>

          <div class="border-t border-gray-100 dark:border-gray-700 pt-3">
            <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Pub rectangle en bas de page -->
<div class="max-w-4xl mx-auto px-6 py-4">
  <AdBanner format="rectangle" slot="0987654321" />
</div>

<style>
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .animate-blink {
    animation: blink 1s step-end infinite;
  }
</style>

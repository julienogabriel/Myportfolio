<script>
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import { defaultProjects, projectStore } from '$lib/stores/dataStore';

  let projects = $state(defaultProjects.filter(p => p.featured).slice(0, 3));

  onMount(() => {
    projects = projectStore.getAll().filter(p => p.featured).slice(0, 3);
  });

  const skills = [
    { category: "Frontend", items: ["React", "Svelte", "Angular", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Laravel", "Python", "Express"] },
    { category: "Outils", items: ["Docker", "Git", "PostgreSQL", "MongoDB"] }
  ];
</script>

<!-- Hero -->
<section class="relative min-h-[90vh] flex items-center bg-white dark:bg-gray-950">
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 right-[10%] w-72 h-72 bg-blue-50 dark:bg-blue-950/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-[5%] w-60 h-60 bg-indigo-50 dark:bg-indigo-950/15 rounded-full blur-3xl"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-6 w-full">
    <div class="grid lg:grid-cols-5 gap-12 items-center">

      <!-- Texte -->
      <div class="lg:col-span-3 fade-in">
        <div class="flex items-center gap-3 mb-6">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">Disponible pour des missions</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
          Salut, je suis <span class="text-blue-600 dark:text-blue-400">Gabriel</span>
        </h1>

        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-xl">
          Developpeur full-stack a Fianarantsoa, Madagascar.
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-500 leading-relaxed mb-8 max-w-xl">
          Je construis des applications web avec React, Svelte et Node.js.
          J'aime le code propre, les interfaces bien pensees et les projets qui ont du sens.
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="{base}/projects"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Voir mes projets
          </a>
          <a
            href="{base}/contact"
            class="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-gray-500 dark:hover:border-gray-500 transition-colors duration-200"
          >
            Me contacter
          </a>
        </div>
      </div>

      <!-- Photo + Info -->
      <div class="lg:col-span-2 fade-in" style="animation-delay: 0.15s">
        <div class="relative">
          <div class="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl">
            <img
              src="{base}/gaby.jpg"
              alt="Gabriel - Developpeur Full-Stack"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-800">
            <div class="text-sm font-medium text-gray-900 dark:text-white">+3 ans d'experience</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">Full-Stack & UI/UX</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Projets en vedette -->
<section class="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
  <div class="max-w-6xl mx-auto">
    <div class="flex items-end justify-between mb-12">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Projets recents
        </h2>
        <p class="text-gray-500 dark:text-gray-400">Une selection de mes realisations.</p>
      </div>
      <a href="{base}/projects" class="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        Tout voir
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, i}
        <div class="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 hover:shadow-md">
          <div class="h-44 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850 overflow-hidden">
            {#if project.image}
              <img src={project.image} alt={project.title} class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
            {:else}
              <div class="w-full h-full flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                  <span class="text-xs text-gray-400 dark:text-gray-600">{project.category}</span>
                </div>
              </div>
            {/if}
          </div>
          <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{project.year}</span>
              <span class="text-xs text-gray-400 dark:text-gray-500">{project.status}</span>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1.5">{project.title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">{project.description}</p>
            <div class="flex flex-wrap gap-1.5">
              {#each project.tags.slice(0, 3) as tag}
                <span class="text-xs px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded">{tag}</span>
              {/each}
            </div>
            {#if project.github || project.demo}
              <div class="flex gap-3 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                {#if project.github}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    Code
                  </a>
                {/if}
                {#if project.demo}
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" class="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Demo
                  </a>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-8 text-center sm:hidden">
      <a href="{base}/projects" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        Voir tous les projets &rarr;
      </a>
    </div>
  </div>
</section>

<!-- Competences -->
<section class="py-24 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
      Technologies
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each skills as group}
        <div>
          <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">{group.category}</h3>
          <div class="space-y-2">
            {#each group.items as item}
              <div class="px-4 py-2.5 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
                {item}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Un projet en tete ?
    </h2>
    <p class="text-gray-500 dark:text-gray-400 mb-8">
      Premiere consultation gratuite. Je reponds sous 24h.
    </p>
    <a
      href="{base}/contact"
      class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
    >
      Discutons
    </a>
  </div>
</section>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .fade-in {
    animation: fadeIn 0.6s ease-out both;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

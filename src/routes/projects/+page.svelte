<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { defaultProjects, projectStore } from '$lib/stores/dataStore';

  let projects = $state(defaultProjects);
  let activeCategory = $state('All');
  let searchQuery = $state('');

  onMount(() => {
    // Load from localStorage if available (admin edits)
    projects = projectStore.getAll();
  });

  const filteredProjects = $derived(projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }));

  const categories = $derived(() => {
    const cats = [...new Set(projects.map(p => p.category))];
    return [{ name: 'All', label: 'Tous' }, ...cats.map(c => ({ name: c, label: c }))];
  });
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">

    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Projets
      </h1>
      <p class="text-gray-500 dark:text-gray-400 max-w-xl">
        Applications web et backend realises pour des clients ou a titre personnel.
      </p>
    </div>

    <!-- Barre de filtres -->
    <div class="flex flex-col sm:flex-row gap-4 mb-10">
      <div class="relative flex-1 max-w-sm">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Rechercher..."
          class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-sm focus:border-gray-400 dark:focus:border-gray-600 focus:outline-none transition-colors"
        />
      </div>

      <div class="flex flex-wrap gap-2">
        {#each categories() as cat}
          <button
            onclick={() => activeCategory = cat.name}
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {activeCategory === cat.name
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}"
          >
            {cat.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Grille -->
    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProjects as project, i}
          <div
            class="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 hover:shadow-md flex flex-col"
            style="animation: fadeUp 0.4s ease-out {i * 0.05}s both"
          >
            <div class="relative overflow-hidden h-44 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850">
              {#if project.image}
                <img
                  src={project.image.startsWith('/') ? `${base}${project.image}` : project.image}
                  alt={project.title}
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  onerror={(e) => e.target.style.display = 'none'}
                />
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
              {#if project.featured}
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                  Featured
                </div>
              {/if}
            </div>

            <div class="p-5 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{project.category}</span>
                <span class="text-xs text-gray-400 dark:text-gray-500">{project.year}</span>
                <span class="text-xs text-gray-400 dark:text-gray-500">&middot; {project.status}</span>
              </div>

              <h3 class="font-semibold text-gray-900 dark:text-white mb-1.5">{project.title}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 flex-1">{project.description}</p>

              <div class="flex flex-wrap gap-1.5 mb-3">
                {#each project.tags as tag}
                  <span class="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded">{tag}</span>
                {/each}
              </div>

              {#if project.github || project.demo}
                <div class="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                  {#if project.github}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      Code source
                    </a>
                  {/if}
                  {#if project.demo}
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      Voir le site
                    </a>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400">Aucun projet ne correspond a votre recherche.</p>
        <button onclick={() => { searchQuery = ''; activeCategory = 'All'; }} class="mt-3 text-sm text-gray-600 dark:text-gray-400 underline underline-offset-2 hover:text-gray-900 dark:hover:text-white">
          Effacer les filtres
        </button>
      </div>
    {/if}

  </div>
</section>

<style>
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

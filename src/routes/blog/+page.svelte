<script>
  import { base } from '$app/paths';
  import { articles } from '$lib/blogData.js';

  let searchQuery = $state('');
  let activeCategory = $state('Tous');
  const categories = ['Tous', ...new Set(articles.map(a => a.category))];

  const filteredArticles = $derived(
    articles.filter(article => {
      const matchesCategory = activeCategory === 'Tous' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  );

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">

    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Blog
      </h1>
      <p class="text-gray-500 dark:text-gray-400">
        Articles et retours d'experience sur le developpement web.
      </p>
    </div>

    <!-- Recherche + Filtres -->
    <div class="flex flex-col sm:flex-row gap-4 mb-10">
      <div class="relative flex-1">
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
        {#each categories as cat}
          <button
            onclick={() => activeCategory = cat}
            class="px-3 py-2 rounded-lg text-sm font-medium transition-colors {activeCategory === cat
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}"
          >
            {cat}
          </button>
        {/each}
      </div>
    </div>

    <!-- Articles -->
    {#if filteredArticles.length > 0}
      <div class="space-y-4">
        {#each filteredArticles as article}
          <a
            href="{base}/blog/{article.slug}"
            class="block group p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {article.category}
              </span>
              <span class="text-xs text-gray-400 dark:text-gray-500">{article.readTime}</span>
            </div>

            <h2 class="font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {article.title}
            </h2>

            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
              {article.excerpt}
            </p>

            <div class="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
              <span>{formatDate(article.date)}</span>
              <div class="flex gap-1.5">
                {#each article.tags.slice(0, 3) as tag}
                  <span class="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 rounded">{tag}</span>
                {/each}
              </div>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <p class="text-gray-500 dark:text-gray-400">Aucun article trouve.</p>
        <button onclick={() => { searchQuery = ''; activeCategory = 'Tous'; }} class="mt-2 text-sm underline underline-offset-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          Effacer les filtres
        </button>
      </div>
    {/if}

  </div>
</section>

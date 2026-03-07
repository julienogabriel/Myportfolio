<script>
  import { base } from '$app/paths';
  import { articles } from '$lib/blogData.js';
  import AdBanner from '$lib/AdBanner.svelte';

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
  <div class="max-w-4xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Blog
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Articles, tutoriels et retours d'expérience sur le développement web et le freelancing.
      </p>
    </div>

    <!-- Recherche -->
    <div class="max-w-md mx-auto mb-8">
      <div class="relative">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Rechercher un article..."
          class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-sm"
        />
      </div>
    </div>

    <!-- Filtres -->
    <div class="flex flex-wrap justify-center gap-2 mb-10">
      {#each categories as cat}
        <button
          onclick={() => activeCategory = cat}
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {activeCategory === cat
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}"
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- Pub en haut -->
    <AdBanner format="horizontal" slot="8901234567" />

    <!-- Articles -->
    {#if filteredArticles.length > 0}
      <div class="space-y-6">
        {#each filteredArticles as article, i}
          <a
            href="{base}/blog/{article.slug}"
            class="block group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md transition-all duration-200"
          >
            <div class="flex flex-col sm:flex-row sm:items-start gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <span class="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">
                    {article.category}
                  </span>
                  <span class="text-xs text-gray-400 dark:text-gray-500">{article.readTime} de lecture</span>
                </div>

                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {article.excerpt}
                </p>

                <div class="flex items-center gap-4">
                  <span class="text-xs text-gray-400 dark:text-gray-500">{formatDate(article.date)}</span>
                  <div class="flex gap-1.5">
                    {#each article.tags.slice(0, 3) as tag}
                      <span class="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded border border-gray-100 dark:border-gray-700">
                        {tag}
                      </span>
                    {/each}
                  </div>
                </div>
              </div>

              <div class="flex-shrink-0 self-center">
                <svg class="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </a>

          <!-- Pub après le 2e article -->
          {#if i === 1}
            <AdBanner format="horizontal" slot="9012345678" />
          {/if}
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <p class="text-gray-500 dark:text-gray-400">Aucun article trouvé.</p>
      </div>
    {/if}

    <!-- Newsletter CTA -->
    <div class="mt-16 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 text-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Restez informé</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-5">Recevez mes nouveaux articles directement dans votre boîte mail.</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="votre@email.com"
          class="flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl text-sm text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <button type="submit" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors">
          S'abonner
        </button>
      </form>
    </div>

  </div>
</section>

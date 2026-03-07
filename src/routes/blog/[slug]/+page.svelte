<script>
  import { base } from '$app/paths';
  import { page } from '$app/state';
  import { articles } from '$lib/blogData.js';
  import AdBanner from '$lib/AdBanner.svelte';

  const article = $derived(articles.find(a => a.slug === page.params.slug));
  const currentIndex = $derived(articles.findIndex(a => a.slug === page.params.slug));

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }
</script>

{#if article}
  <section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
    <article class="max-w-3xl mx-auto">

      <!-- Retour -->
      <a
        href="{base}/blog"
        class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Retour aux articles
      </a>

      <!-- Header -->
      <header class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">
            {article.category}
          </span>
          <span class="text-sm text-gray-400 dark:text-gray-500">{article.readTime} de lecture</span>
        </div>

        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {article.title}
        </h1>

        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{formatDate(article.date)}</span>
          <div class="flex gap-2">
            {#each article.tags as tag}
              <span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded border border-gray-200 dark:border-gray-700">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </header>

      <!-- Pub avant contenu -->
      <AdBanner format="horizontal" slot="3456789012" />

      <!-- Contenu -->
      <div class="prose prose-lg dark:prose-invert max-w-none
        prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
        prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
        prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline
      ">
        {@html article.content}
      </div>

      <!-- Pub après contenu -->
      <AdBanner format="rectangle" slot="4567890123" />

      <!-- Navigation articles -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex justify-between items-center">
          {#if currentIndex < articles.length - 1}
            <a
              href="{base}/blog/{articles[currentIndex + 1].slug}"
              class="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              <span class="max-w-[200px] truncate">{articles[currentIndex + 1].title}</span>
            </a>
          {:else}
            <div></div>
          {/if}

          {#if currentIndex > 0}
            <a
              href="{base}/blog/{articles[currentIndex - 1].slug}"
              class="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span class="max-w-[200px] truncate">{articles[currentIndex - 1].title}</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          {:else}
            <div></div>
          {/if}
        </div>
      </div>

    </article>
  </section>
{:else}
  <section class="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article introuvable</h1>
      <a href="{base}/blog" class="text-blue-600 hover:text-blue-700 font-medium">
        Retour au blog
      </a>
    </div>
  </section>
{/if}

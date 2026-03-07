<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import AdBanner from '$lib/AdBanner.svelte';

  let projects = [
    {
      id: 1,
      title: 'Dashboard Analytics',
      category: 'Web',
      description: 'Tableau de bord interactif avec visualisation de données en temps réel et gestion multi-utilisateurs.',
      image: `${base}/Dashbord.PNG`,
      tags: ['React', 'D3.js', 'API REST'],
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'App Mobile E-Commerce',
      category: 'Mobile',
      description: 'Application mobile cross-platform avec catalogue produits, panier et paiement intégré.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase'],
      link: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Modèle de Prédiction IA',
      category: 'AI',
      description: 'Système d\'analyse prédictive pour l\'optimisation de processus métier.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
      tags: ['Python', 'TensorFlow', 'API'],
      link: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Créatif',
      category: 'Web',
      description: 'Site portfolio avec animations fluides et optimisation des performances.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Svelte', 'GSAP', 'Tailwind'],
      link: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Task Manager Pro',
      category: 'Mobile',
      description: 'Gestionnaire de tâches collaboratif avec synchronisation cloud en temps réel.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tags: ['Swift', 'CloudKit'],
      link: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Chatbot Intelligent',
      category: 'AI',
      description: 'Assistant conversationnel avec traitement du langage naturel et apprentissage continu.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['NLP', 'Python', 'OpenAI'],
      link: '#',
      featured: false
    },
  ];

  let activeCategory = $state('All');
  let searchQuery = $state('');
  let isVisible = $state(false);

  onMount(() => {
    setTimeout(() => isVisible = true, 100);
  });

  const filteredProjects = $derived(projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }));

  const categories = [
    { name: 'All', label: 'Tous' },
    { name: 'Web', label: 'Web' },
    { name: 'Mobile', label: 'Mobile' },
    { name: 'AI', label: 'IA' }
  ];
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-12 transform transition-all duration-500 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Mes réalisations
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        Une sélection de projets récents en développement web, mobile et intelligence artificielle.
      </p>

      <!-- Recherche -->
      <div class="max-w-md mx-auto mb-8">
        <div class="relative">
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Rechercher un projet..."
            class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-sm"
          />
        </div>
      </div>

      <!-- Filtres -->
      <div class="flex justify-center gap-2">
        {#each categories as cat}
          <button
            onclick={() => activeCategory = cat.name}
            class="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 {activeCategory === cat.name
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}"
          >
            {cat.label}
            {#if cat.name !== 'All'}
              <span class="ml-1 text-xs opacity-60">
                {projects.filter(p => p.category === cat.name).length}
              </span>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <!-- Grille -->
    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProjects as project, i}
          <div
            class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300"
            style="animation: fadeUp 0.5s ease-out {i * 0.08}s both"
          >
            <!-- Image -->
            <div class="relative overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                onerror={(e) => e.target.style.display = 'none'}
              />
              {#if project.featured}
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                  Mis en avant
                </div>
              {/if}
            </div>

            <!-- Contenu -->
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 text-xs font-medium rounded {
                  project.category === 'Web' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300' :
                  project.category === 'Mobile' ? 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300' :
                  'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                }">
                  {project.category}
                </span>
              </div>

              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div class="flex flex-wrap gap-1.5 mb-4">
                {#each project.tags as tag}
                  <span class="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded border border-gray-100 dark:border-gray-700">
                    {tag}
                  </span>
                {/each}
              </div>

              <a
                href={project.link}
                class="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
              >
                Voir le projet
                <svg class="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-20">
        <svg class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Aucun projet trouvé</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Essayez de modifier vos critères de recherche.</p>
      </div>
    {/if}

    <!-- Publicité -->
    <div class="mt-12">
      <AdBanner format="horizontal" slot="2345678901" />
    </div>

    <!-- CTA -->
    <div class="mt-8 text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-10 border border-gray-100 dark:border-gray-800">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Vous avez un projet en tête ?</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
        Discutons de votre idée et voyons comment je peux vous aider à la concrétiser.
      </p>
      <a href="{base}/contact" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl hover:shadow-md transition-all duration-200">
        Me contacter
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

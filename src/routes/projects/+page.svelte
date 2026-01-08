<script>
  import { onMount } from 'svelte';
  
  // Données des projets enrichies
  let projects = [
    { 
      id: 1, 
      title: 'Dashboard Analytics', 
      category: 'Web', 
      description: 'Tableau de bord interactif avec visualisation de données en temps réel',
      image: 'Dashbord.PNG',
      tags: ['React', 'D3.js', 'API'],
      link: '#',
      featured: true
    },
    { 
      id: 2, 
      title: 'App Mobile E-Commerce', 
      category: 'Mobile', 
      description: 'Application mobile cross-platform avec paiement intégré',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase'],
      link: '#',
      featured: false
    },
    { 
      id: 3, 
      title: 'Prédiction IA', 
      category: 'AI', 
      description: 'Modèle de machine learning pour l\'analyse prédictive avancée',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
      tags: ['Python', 'TensorFlow', 'API'],
      link: '#',
      featured: true
    },
    { 
      id: 4, 
      title: 'Portfolio Créatif', 
      category: 'Web', 
      description: 'Site portfolio avec animations 3D et transitions fluides',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Three.js', 'GSAP', 'Svelte'],
      link: '#',
      featured: false
    },
    { 
      id: 5, 
      title: 'Task Manager Pro', 
      category: 'Mobile', 
      description: 'Gestionnaire de tâches collaboratif avec synchronisation cloud',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tags: ['Swift', 'CloudKit'],
      link: '#',
      featured: false
    },
    { 
      id: 6, 
      title: 'Chatbot IA', 
      category: 'AI', 
      description: 'Assistant virtuel intelligent avec traitement du langage naturel',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['NLP', 'Python', 'OpenAI'],
      link: '#',
      featured: false
    },
  ];

  let activeCategory = 'All';
  let isVisible = false;
  let searchQuery = '';

  onMount(() => {
    setTimeout(() => isVisible = true, 100);
  });

  const filterProjects = (category) => {
    activeCategory = category;
  };

  $: filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { name: 'All', label: 'Tous les projets', icon: '🎯' },
    { name: 'Web', label: 'Web', icon: '🌐' },
    { name: 'Mobile', label: 'Mobile', icon: '📱' },
    { name: 'AI', label: 'Intelligence Artificielle', icon: '🤖' }
  ];
</script>

<section class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <!-- En-tête -->
    <div class="text-center mb-12 transform transition-all duration-700 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
        Mes Projets
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Découvrez une sélection de mes réalisations récentes en développement web, mobile et intelligence artificielle
      </p>
      
      <!-- Barre de recherche -->
      <div class="mt-8 max-w-md mx-auto">
        <div class="relative">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Rechercher un projet..."
            class="w-full px-6 py-3 pl-12 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
          <span class="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
        </div>
      </div>
    </div>

    <!-- Statistiques -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Projets réalisés</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div class="text-3xl font-bold text-green-600 dark:text-green-400">{projects.filter(p => p.category === 'Web').length}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Sites Web</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">{projects.filter(p => p.category === 'Mobile').length}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Apps Mobile</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">{projects.filter(p => p.category === 'AI').length}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Projets IA</div>
      </div>
    </div>

    <!-- Filtres de catégories -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      {#each categories as cat}
        <button
          on:click={() => filterProjects(cat.name)}
          class="group px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 {activeCategory === cat.name 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'}"
        >
          <span class="mr-2">{cat.icon}</span>
          {cat.label}
          {#if cat.name !== 'All'}
            <span class="ml-2 px-2 py-0.5 text-xs rounded-full {activeCategory === cat.name ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}">
              {projects.filter(p => p.category === cat.name).length}
            </span>
          {/if}
        </button>
      {/each}
    </div>

    <!-- Grille de projets -->
    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredProjects as project, i}
          <div 
            class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style="animation: fadeInUp 0.6s ease-out {i * 0.1}s both"
          >
            <!-- Image du projet -->
            <div class="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                on:error={(e) => e.target.style.display = 'none'}
              />
              {#if project.featured}
                <div class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ Featured
                </div>
              {/if}
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Contenu -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-3 py-1 text-xs font-semibold rounded-full {
                  project.category === 'Web' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  project.category === 'Mobile' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                  'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                }">
                  {project.category}
                </span>
              </div>

              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tags as tag}
                  <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                    {tag}
                  </span>
                {/each}
              </div>

              <!-- Bouton d'action -->
              <a 
                href={project.link}
                class="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all duration-300 group/link"
              >
                Voir le projet
                <span class="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Aucun projet trouvé</h3>
        <p class="text-gray-600 dark:text-gray-400">Essayez de modifier vos critères de recherche</p>
      </div>
    {/if}

    <!-- Call to action -->
    <div class="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
      <h3 class="text-3xl font-bold text-white mb-4">Vous avez un projet en tête ?</h3>
      <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
        Travaillons ensemble pour donner vie à vos idées. Contactez-moi pour discuter de votre prochain projet.
      </p>
      <button class="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
        Me contacter
      </button>
    </div>
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
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
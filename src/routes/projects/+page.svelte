<script>
  import { onMount } from 'svelte';
  
  // Données des projets avec catégorie et description
  let projects = [
    { id: 1, title: 'Projet 1', category: 'Web', description: 'Développement d\'un site web', link: '#' },
    { id: 2, title: 'Projet 2', category: 'Mobile', description: 'Application mobile Android', link: '#' },
    { id: 3, title: 'Projet 3', category: 'AI', description: 'Modélisation IA pour prédiction', link: '#' },
    { id: 4, title: 'Projet 4', category: 'Web', description: 'Portfolio interactif', link: '#' },
    { id: 5, title: 'Projet 5', category: 'Mobile', description: 'Application iOS de gestion de tâches', link: '#' },
  ];

  let activeCategory = 'All';  // Catégorie active

  // Filtrer les projets en fonction de la catégorie
  const filterProjects = (/** @type {string} */ category) => {
    activeCategory = category;
  };
</script>

<section class="p-10">
  <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Mes Projets</h2>
  
  <!-- Filtrage des projets -->
  <div class="mt-6 flex space-x-4">
    <button on:click={() => filterProjects('All')} class="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg">Tous</button>
    <button on:click={() => filterProjects('Web')} class="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg">Web</button>
    <button on:click={() => filterProjects('Mobile')} class="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg">Mobile</button>
    <button on:click={() => filterProjects('AI')} class="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg">AI</button>
  </div>

  <!-- Affichage des projets -->
  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each projects.filter(project => activeCategory === 'All' || project.category === activeCategory) as project}
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <a href={project.link} class="block p-6">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
          <p class="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
        </a>
      </div>
    {/each}
  </div>
</section>


<button on:click={() => filterProjects('All')} class="px-4 py-2 rounded-lg {activeCategory === 'All' ? 'bg-red-500 text-white' : 'bg-gray-300 dark:bg-gray-700'}">Tous</button>
<img src="Dashbord.PNG" alt="Projet 1" loading="lazy" class="w-full h-auto">

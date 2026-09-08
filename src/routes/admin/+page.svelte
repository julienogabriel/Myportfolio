<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { projectStore, settingsStore } from '$lib/stores/dataStore';

  const ADMIN_PASSWORD = '***REMOVED***';

  let isAuthenticated = $state(false);
  let passwordInput = $state('');
  let authError = $state('');

  // Tabs
  let activeTab = $state('projects');

  // Projects state
  let projects = $state([]);
  let editingProject = $state(null);
  let showProjectForm = $state(false);

  // Project form
  let projectForm = $state({
    id: '', title: '', category: 'Web', description: '', image: '',
    tags: '', status: 'Projet personnel', featured: false,
    github: '', demo: '', year: new Date().getFullYear().toString()
  });

  // Settings state
  let settings = $state({ available: true, heroTitle: '', heroSubtitle: '' });
  let settingsSaved = $state(false);

  onMount(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') isAuthenticated = true;
  });

  function login() {
    if (passwordInput === ADMIN_PASSWORD) {
      isAuthenticated = true;
      sessionStorage.setItem('admin_auth', 'true');
      authError = '';
      loadData();
    } else {
      authError = 'Mot de passe incorrect';
    }
  }

  function logout() {
    isAuthenticated = false;
    sessionStorage.removeItem('admin_auth');
  }

  function loadData() {
    projects = projectStore.getAll();
    settings = settingsStore.get();
  }

  $effect(() => {
    if (isAuthenticated) loadData();
  });

  // Project CRUD
  function resetProjectForm() {
    projectForm = {
      id: '', title: '', category: 'Web', description: '', image: '',
      tags: '', status: 'Projet personnel', featured: false,
      github: '', demo: '', year: new Date().getFullYear().toString()
    };
    editingProject = null;
  }

  function openNewProject() {
    resetProjectForm();
    showProjectForm = true;
  }

  function editProject(project) {
    editingProject = project.id;
    projectForm = {
      ...project,
      tags: project.tags.join(', ')
    };
    showProjectForm = true;
  }

  function saveProject() {
    if (!projectForm.title || !projectForm.description) return;

    const data = {
      ...projectForm,
      id: projectForm.id || projectForm.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      tags: projectForm.tags.split(',').map(t => t.trim()).filter(Boolean)
    };

    if (editingProject) {
      projectStore.update(editingProject, data);
    } else {
      projectStore.add(data);
    }

    projects = projectStore.getAll();
    showProjectForm = false;
    resetProjectForm();
  }

  function deleteProject(id) {
    if (confirm('Supprimer ce projet ?')) {
      projectStore.remove(id);
      projects = projectStore.getAll();
    }
  }

  function toggleFeatured(id) {
    const project = projects.find(p => p.id === id);
    if (project) {
      projectStore.update(id, { featured: !project.featured });
      projects = projectStore.getAll();
    }
  }

  // Settings
  function saveSettings() {
    settingsStore.save(settings);
    settingsSaved = true;
    setTimeout(() => settingsSaved = false, 2000);
  }

  function resetAllData() {
    if (confirm('Reinitialiser toutes les donnees ? Cette action est irreversible.')) {
      projectStore.reset();
      settingsStore.reset();
      loadData();
    }
  }
</script>

<svelte:head>
  <title>Admin | Gabriel Portfolio</title>
  <meta name="robots" content="noindex, nofollow">
</svelte:head>

<section class="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6">
  <div class="max-w-5xl mx-auto">

    {#if !isAuthenticated}
      <!-- Login -->
      <div class="max-w-sm mx-auto mt-20">
        <div class="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h1 class="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Administration</h1>
          <form onsubmit={(e) => { e.preventDefault(); login(); }}>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mot de passe</label>
            <input
              type="password"
              id="password"
              bind:value={passwordInput}
              class="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 mb-4"
              placeholder="Entrez le mot de passe"
              autofocus
            />
            {#if authError}
              <p class="text-sm text-red-600 dark:text-red-400 mb-3">{authError}</p>
            {/if}
            <button type="submit" class="w-full px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Connexion
            </button>
          </form>
        </div>
      </div>

    {:else}
      <!-- Admin Panel -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Administration</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Gerez vos projets et parametres</p>
        </div>
        <div class="flex gap-3">
          <a href="{base}/" class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            Voir le site &rarr;
          </a>
          <button onclick={logout} class="text-sm text-red-500 hover:text-red-700 transition-colors">
            Deconnexion
          </button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1 mb-8 bg-white dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-800 w-fit">
        {#each [
          { id: 'projects', label: 'Projets' },
          { id: 'settings', label: 'Parametres' }
        ] as tab}
          <button
            onclick={() => activeTab = tab.id}
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeTab === tab.id
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}"
          >
            {tab.label}
          </button>
        {/each}
      </div>

      <!-- Projects Tab -->
      {#if activeTab === 'projects'}
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              Projets ({projects.length})
            </h2>
            <button
              onclick={openNewProject}
              class="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Nouveau projet
            </button>
          </div>

          <!-- Project Form Modal -->
          {#if showProjectForm}
            <div class="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">
                {editingProject ? 'Modifier le projet' : 'Nouveau projet'}
              </h3>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Titre *</label>
                  <input bind:value={projectForm.title} class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Categorie</label>
                  <select bind:value={projectForm.category} class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none">
                    <option value="Web">Web</option>
                    <option value="Backend">Backend</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Description *</label>
                  <textarea bind:value={projectForm.description} rows="3" class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none resize-none"></textarea>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Tags (separes par des virgules)</label>
                  <input bind:value={projectForm.tags} placeholder="React, Node.js, MongoDB" class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Annee</label>
                  <input bind:value={projectForm.year} class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Statut</label>
                  <select bind:value={projectForm.status} class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none">
                    <option value="Projet personnel">Projet personnel</option>
                    <option value="Projet client">Projet client</option>
                    <option value="Open source">Open source</option>
                    <option value="En cours">En cours</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">URL image</label>
                  <input bind:value={projectForm.image} placeholder="/image.png ou https://..." class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Lien GitHub</label>
                  <input bind:value={projectForm.github} placeholder="https://github.com/..." class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Lien Demo</label>
                  <input bind:value={projectForm.demo} placeholder="https://..." class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none" />
                </div>
                <div class="flex items-center gap-2">
                  <input type="checkbox" id="featured" bind:checked={projectForm.featured} class="rounded" />
                  <label for="featured" class="text-sm text-gray-600 dark:text-gray-400">Mettre en avant sur la page d'accueil</label>
                </div>
              </div>
              <div class="flex gap-3 mt-6">
                <button onclick={saveProject} class="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  {editingProject ? 'Mettre a jour' : 'Ajouter'}
                </button>
                <button onclick={() => { showProjectForm = false; resetProjectForm(); }} class="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Annuler
                </button>
              </div>
            </div>
          {/if}

          <!-- Project List -->
          <div class="space-y-2">
            {#each projects as project}
              <div class="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 flex items-center gap-4">
                <!-- Thumbnail -->
                <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden flex items-center justify-center">
                  {#if project.image}
                    <img src={project.image.startsWith('/') ? `${base}${project.image}` : project.image} alt="" class="w-full h-full object-cover" />
                  {:else}
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  {/if}
                </div>

                <!-- Info -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm truncate">{project.title}</h4>
                    {#if project.featured}
                      <span class="text-xs px-1.5 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded">Featured</span>
                    {/if}
                  </div>
                  <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{project.category} &middot; {project.year} &middot; {project.tags.join(', ')}</p>
                </div>

                <!-- Actions -->
                <div class="flex gap-1 flex-shrink-0">
                  <button
                    onclick={() => toggleFeatured(project.id)}
                    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title={project.featured ? 'Retirer de la une' : 'Mettre en avant'}
                  >
                    <svg class="w-4 h-4 {project.featured ? 'text-yellow-500' : 'text-gray-400'}" fill={project.featured ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  </button>
                  <button
                    onclick={() => editProject(project)}
                    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title="Modifier"
                  >
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </button>
                  <button
                    onclick={() => deleteProject(project.id)}
                    class="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                    title="Supprimer"
                  >
                    <svg class="w-4 h-4 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </div>
              </div>
            {/each}
          </div>

          {#if projects.length === 0}
            <div class="text-center py-12 text-gray-500 dark:text-gray-400">
              <p>Aucun projet. Cliquez sur "Nouveau projet" pour commencer.</p>
            </div>
          {/if}
        </div>
      {/if}

      <!-- Settings Tab -->
      {#if activeTab === 'settings'}
        <div class="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Parametres du site</h2>

          <div>
            <label class="flex items-center gap-3">
              <input type="checkbox" bind:checked={settings.available} class="rounded" />
              <span class="text-sm text-gray-700 dark:text-gray-300">Afficher "Disponible pour des missions" sur la page d'accueil</span>
            </label>
          </div>

          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Titre du hero</label>
            <input bind:value={settings.heroTitle} class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400" />
          </div>

          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">Sous-titre du hero</label>
            <input bind:value={settings.heroSubtitle} class="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400" />
          </div>

          <div class="flex gap-3 pt-2">
            <button onclick={saveSettings} class="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Sauvegarder
            </button>
            {#if settingsSaved}
              <span class="text-sm text-emerald-600 dark:text-emerald-400 self-center">Sauvegarde !</span>
            {/if}
          </div>

          <hr class="border-gray-200 dark:border-gray-800" />

          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Zone dangereuse</h3>
            <button
              onclick={resetAllData}
              class="px-4 py-2 border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
            >
              Reinitialiser toutes les donnees
            </button>
          </div>
        </div>
      {/if}

    {/if}
  </div>
</section>

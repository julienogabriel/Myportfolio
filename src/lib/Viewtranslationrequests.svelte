<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
  
    interface TranslationRequest {
      id: number;
      email: string;
      sourceLanguage: string;
      targetLanguage: string;
      documentType: string;
      content: string;
      status: string;
      date: string;
      dateFormatted: string;
    }
  
    let requests = $state<TranslationRequest[]>([]);
    let filterStatus = $state<'all' | 'pending' | 'completed'>('all');
  
    const statusOptions = [
      { value: 'all', label: '📋 Toutes', count: 0 },
      { value: 'pending', label: '⏳ En attente', count: 0 },
      { value: 'completed', label: '✅ Terminées', count: 0 }
    ];
  
    const documentTypeIcons: Record<string, string> = {
      document: '📄',
      website: '🌐',
      email: '📧',
      other: '📝'
    };
  
    onMount(() => {
      loadRequests();
    });
  
    function loadRequests() {
      const stored = localStorage.getItem('translationRequests');
      if (stored) {
        requests = JSON.parse(stored).reverse(); // Plus récent en premier
      }
    }
  
    function deleteRequest(id: number) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette demande ?')) {
        requests = requests.filter(r => r.id !== id);
        localStorage.setItem('translationRequests', JSON.stringify(requests.reverse()));
        loadRequests();
      }
    }
  
    function updateStatus(id: number, newStatus: string) {
      const request = requests.find(r => r.id === id);
      if (request) {
        request.status = newStatus;
        localStorage.setItem('translationRequests', JSON.stringify(requests.reverse()));
        loadRequests();
      }
    }
  
    function clearAll() {
      if (confirm('Êtes-vous sûr de vouloir supprimer TOUTES les demandes ?')) {
        localStorage.removeItem('translationRequests');
        requests = [];
      }
    }
  
    function exportRequests() {
      const dataStr = JSON.stringify(requests, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `translation_requests_${new Date().toISOString().split('T')[0]}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
  
    function exportToCSV() {
      const headers = ['ID', 'Email', 'Langue Source', 'Langue Cible', 'Type', 'Statut', 'Date', 'Contenu'];
      const rows = requests.map(r => [
        r.id,
        r.email,
        r.sourceLanguage,
        r.targetLanguage,
        r.documentType,
        r.status,
        r.dateFormatted,
        `"${r.content.replace(/"/g, '""')}"`
      ]);
      
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `translation_requests_${new Date().toISOString().split('T')[0]}.csv`);
      link.click();
    }
  
    $effect(() => {
      statusOptions[0].count = requests.length;
      statusOptions[1].count = requests.filter(r => r.status === 'En attente').length;
      statusOptions[2].count = requests.filter(r => r.status === 'Terminé').length;
    });
  
    const filteredRequests = $derived(
      filterStatus === 'all' 
        ? requests 
        : filterStatus === 'pending'
          ? requests.filter(r => r.status === 'En attente')
          : requests.filter(r => r.status === 'Terminé')
    );
  </script>
  
  <div class="max-w-6xl mx-auto p-6">
    <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 p-8 border border-gray-100 dark:border-gray-700/50">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <span class="text-4xl">🌍</span>
            Demandes de traduction
          </h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            {requests.length} demande{requests.length > 1 ? 's' : ''} au total
          </p>
        </div>
        
        <div class="flex flex-wrap gap-2">
          {#if requests.length > 0}
            <button
              onclick={exportRequests}
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📥 JSON
            </button>
            <button
              onclick={exportToCSV}
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              📊 CSV
            </button>
            <button
              onclick={clearAll}
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              🗑️ Tout supprimer
            </button>
          {/if}
        </div>
      </div>
  
      <!-- Filtres -->
      <div class="flex flex-wrap gap-3 mb-6">
        {#each statusOptions as option}
          <button
            onclick={() => (filterStatus = option.value as any)}
            class={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filterStatus === option.value
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {option.label} ({option.count})
          </button>
        {/each}
      </div>
  
      <!-- Liste des demandes -->
      {#if filteredRequests.length === 0}
        <div class="text-center py-12 text-gray-500 dark:text-gray-400">
          <div class="text-6xl mb-4">📭</div>
          <p class="text-xl mb-2">
            {filterStatus === 'all' 
              ? 'Aucune demande pour le moment' 
              : filterStatus === 'pending'
                ? 'Aucune demande en attente'
                : 'Aucune demande terminée'}
          </p>
          <p class="text-sm">
            Les demandes de traduction apparaîtront ici après soumission
          </p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each filteredRequests as request}
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all">
              <!-- En-tête de la demande -->
              <div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-3 mb-2">
                    <span class="text-3xl">
                      {documentTypeIcons[request.documentType] || '📝'}
                    </span>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                        {request.sourceLanguage} → {request.targetLanguage}
                      </h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {request.dateFormatted}
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap items-center gap-2 mt-2">
                    <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                      {request.documentType}
                    </span>
                    <span class={`px-3 py-1 rounded-full text-xs font-semibold ${
                      request.status === 'Terminé'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                </div>
  
                <div class="flex gap-2">
                  <select
                    value={request.status}
                    onchange={(e) => updateStatus(request.id, (e.target as HTMLSelectElement).value)}
                    class="px-3 py-2 bg-white dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border-2 border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="En attente">⏳ En attente</option>
                    <option value="En cours">🔄 En cours</option>
                    <option value="Terminé">✅ Terminé</option>
                  </select>
                  
                  <button
                    onclick={() => deleteRequest(request.id)}
                    class="px-3 py-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    🗑️
                  </button>
                </div>
              </div>
  
              <!-- Contenu -->
              <div class="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  📝 Contenu à traduire:
                </h4>
                <p class="text-gray-800 dark:text-gray-200 whitespace-pre-wrap text-sm max-h-40 overflow-y-auto">
                  {request.content}
                </p>
                <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {request.content.length} caractères
                </div>
              </div>
  
              <!-- Contact -->
              <div class="flex items-center gap-2 text-sm">
                <span class="text-gray-600 dark:text-gray-400">📧 Contact:</span>
                <a 
                  href="mailto:{request.email}" 
                  class="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  {request.email}
                </a>
              </div>
            </div>
          {/each}
        </div>
      {/if}
  
      <!-- Statistiques -->
      {#if requests.length > 0}
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {requests.length}
            </div>
            <div class="text-sm text-blue-700 dark:text-blue-300 font-semibold">
              Total demandes
            </div>
          </div>
          
          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
            <div class="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {requests.filter(r => r.status === 'En attente').length}
            </div>
            <div class="text-sm text-yellow-700 dark:text-yellow-300 font-semibold">
              En attente
            </div>
          </div>
          
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-200 dark:border-green-800">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400">
              {requests.filter(r => r.status === 'Terminé').length}
            </div>
            <div class="text-sm text-green-700 dark:text-green-300 font-semibold">
              Terminées
            </div>
          </div>
        </div>
      {/if}
  
      <!-- Lien de retour -->
      <div class="mt-6 text-center">
        <a 
          href="{base}/translation" 
          class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
        >
          ← Retour au formulaire de traduction
        </a>
      </div>
    </div>
  </div>
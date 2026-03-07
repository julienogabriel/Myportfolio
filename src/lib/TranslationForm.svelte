<script lang="ts">
  import { base } from '$app/paths';

  let sourceLanguage = $state('fr');
  let targetLanguage = $state('en');
  let content = $state('');
  let type = $state('document');
  let email = $state('');
  let isSubmitting = $state(false);
  let message = $state('');

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'mg', name: 'Malagasy' }
  ];

  const documentTypes = [
    { value: 'document', label: '📄 Document' },
    { value: 'website', label: '🌐 Site Web' },
    { value: 'email', label: '📧 Email' },
    { value: 'other', label: '📝 Autre' }
  ];

  // OPTION 1: Avec Formspree - Décommentez cette fonction pour utiliser Formspree
  /*
  async function submit() {
    if (!email || !content) {
      message = '⚠️ Veuillez remplir tous les champs obligatoires';
      return;
    }

    if (sourceLanguage === targetLanguage) {
      message = '⚠️ Les langues source et cible doivent être différentes';
      return;
    }

    if (content.trim().length < 10) {
      message = '⚠️ Le contenu doit contenir au moins 10 caractères';
      return;
    }

    isSubmitting = true;
    message = '';

    try {
      // Remplacez 'VOTRE_FORM_ID' par votre ID Formspree
      const formData = new FormData();
      formData.append('email', email);
      formData.append('sourceLanguage', sourceLanguage.toUpperCase());
      formData.append('targetLanguage', targetLanguage.toUpperCase());
      formData.append('documentType', type);
      formData.append('content', content);
      formData.append('_subject', `Demande de traduction ${sourceLanguage.toUpperCase()} → ${targetLanguage.toUpperCase()}`);
      
      const response = await fetch('https://formspree.io/f/VOTRE_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        message = '✓ Demande de traduction envoyée avec succès !';
        // Réinitialiser après 2 secondes
        setTimeout(() => {
          sourceLanguage = 'fr';
          targetLanguage = 'en';
          content = '';
          type = 'document';
          email = '';
          message = '';
        }, 2000);
      } else {
        const data = await response.json();
        if (data.errors) {
          message = '✗ Erreur: ' + data.errors.map((e: any) => e.message).join(', ');
        } else {
          message = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
        }
      }
    } catch (e) {
      message = '✗ Erreur de connexion. Vérifiez votre connexion internet.';
      console.error('Translation request error:', e);
    } finally {
      isSubmitting = false;
    }
  }
  */

  // OPTION 2: Stockage local (ACTIVÉ PAR DÉFAUT)
  async function submit() {
    if (!email || !content) {
      message = '⚠️ Veuillez remplir tous les champs obligatoires';
      return;
    }

    if (sourceLanguage === targetLanguage) {
      message = '⚠️ Les langues source et cible doivent être différentes';
      return;
    }

    if (content.trim().length < 10) {
      message = '⚠️ Le contenu doit contenir au moins 10 caractères';
      return;
    }

    isSubmitting = true;
    message = '';

    try {
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Récupérer les demandes existantes
      const existingRequests = localStorage.getItem('translationRequests');
      const requests = existingRequests ? JSON.parse(existingRequests) : [];
      
      // Ajouter la nouvelle demande
      const newRequest = {
        id: Date.now(),
        email,
        sourceLanguage: sourceLanguage.toUpperCase(),
        targetLanguage: targetLanguage.toUpperCase(),
        documentType: type,
        content,
        status: 'En attente',
        date: new Date().toISOString(),
        dateFormatted: new Date().toLocaleString('fr-FR')
      };
      
      requests.push(newRequest);
      localStorage.setItem('translationRequests', JSON.stringify(requests));
      
      console.log('✅ Demande de traduction sauvegardée:', newRequest);
      console.log('📊 Total demandes:', requests.length);
      
      message = '✓ Demande de traduction enregistrée ! (Sauvegardée localement)';
      
      // Réinitialiser après 2 secondes
      setTimeout(() => {
        sourceLanguage = 'fr';
        targetLanguage = 'en';
        content = '';
        type = 'document';
        email = '';
        message = '';
      }, 2000);
    } catch (e) {
      message = '✗ Erreur lors de la sauvegarde.';
      console.error('Local storage error:', e);
    } finally {
      isSubmitting = false;
    }
  }

  function swap() {
    [sourceLanguage, targetLanguage] = [targetLanguage, sourceLanguage];
  }

  function getLanguageName(code: string) {
    return languages.find(l => l.code === code)?.name || code.toUpperCase();
  }
</script>

<div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 p-8 md:p-10 border border-gray-100 dark:border-gray-700/50">
  <div class="flex items-center gap-3 mb-6">
    <span class="text-4xl">🌍</span>
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
      Demander une traduction
    </h2>
  </div>

  <div class="grid md:grid-cols-3 gap-4 mb-8">
    <div>
      <label for="source-language" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Langue source *
      </label>
      <select
        id="source-language"
        bind:value={sourceLanguage}
        class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
      >
        {#each languages as lang}
          <option value={lang.code}>{lang.name}</option>
        {/each}
      </select>
    </div>

    <div class="flex items-end">
      <button 
        type="button"
        onclick={swap} 
        class="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="Inverser les langues"
      >
        <span class="text-2xl">⇄</span>
      </button>
    </div>

    <div>
      <label for="target-language" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Langue cible *
      </label>
      <select
        id="target-language"
        bind:value={targetLanguage}
        class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
      >
        {#each languages as lang}
          <option value={lang.code}>{lang.name}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if sourceLanguage !== targetLanguage}
    <div class="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
      <p class="text-sm text-blue-700 dark:text-blue-300 font-semibold">
        📋 Traduction: {getLanguageName(sourceLanguage)} → {getLanguageName(targetLanguage)}
      </p>
    </div>
  {/if}

  <div class="mb-6">
    <span class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" id="doc-type-label">
      Type de document *
    </span>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3" role="group" aria-labelledby="doc-type-label">
      {#each documentTypes as docType}
        <button
          type="button"
          onclick={() => (type = docType.value)}
          class={`px-4 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            type === docType.value
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {docType.label}
        </button>
      {/each}
    </div>
  </div>

  <div class="mb-6">
    <label for="translation-content" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Contenu à traduire *
    </label>
    <textarea
      id="translation-content"
      bind:value={content}
      placeholder="Saisissez ou collez le texte à traduire ici...

Exemples:
- Pour un document: copiez le texte complet
- Pour un site web: indiquez l'URL et le contenu
- Pour un email: collez le message"
      class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/80 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300 resize-y"
      rows="8"
      required
    ></textarea>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
      {content.length} caractères (minimum 10)
    </p>
  </div>

  <div class="mb-6">
    <label for="translation-email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Votre email *
    </label>
    <input
      id="translation-email"
      type="email"
      bind:value={email}
      placeholder="votre.email@exemple.com"
      class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/80 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
      required
    />
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Pour recevoir votre traduction
    </p>
  </div>

  {#if message}
    <div
      class={`mb-4 p-4 rounded-lg font-semibold animate-in fade-in slide-in-from-top-2 duration-300 ${
        message.includes('✓')
          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-2 border-green-300 dark:border-green-700'
          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-2 border-red-300 dark:border-red-700'
      }`}
    >
      {message}
    </div>
  {/if}

  <button
    type="button"
    onclick={submit}
    disabled={isSubmitting || !email || !content || content.length < 10 || sourceLanguage === targetLanguage}
    class="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-teal-500/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
  >
    {isSubmitting ? '📤 Envoi en cours...' : '🌍 Envoyer la demande de traduction'}
  </button>

  <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
    <h3 class="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
      📌 Informations importantes
    </h3>
    <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
      <li>✓ Toutes les demandes sont traitées sous 24-48h</li>
      <li>✓ Vous recevrez un devis gratuit par email</li>
      <li>✓ Formats acceptés: texte, PDF, Word, PowerPoint</li>
      <li>✓ Confidentialité garantie</li>
    </ul>
  </div>

  <div class="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    <a href="{base}/contact" class="hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors">
      Questions ?
    </a>
    <span>•</span>
    <a href="{base}/services" class="hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors">
      Nos services
    </a>
    <span>•</span>
    <a href="{base}/" class="hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors">
      Accueil
    </a>
  </div>
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in-from-top {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }

  .animate-in {
    animation: fade-in 0.3s ease-out, slide-in-from-top 0.3s ease-out;
  }
</style>
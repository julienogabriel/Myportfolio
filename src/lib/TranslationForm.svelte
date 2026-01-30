<script lang="ts">
  let sourceLanguage = $state('fr');
  let targetLanguage = $state('en');
  let content = $state('');
  let type = $state('document');
  let email = $state('');
  let isSubmitting = $state(false);
  let message = $state('');

  const languages = ['fr', 'en', 'mg'];

  async function submit() {
    if (!email || !content) {
      message = 'Erreur: remplissez tous les champs';
      return;
    }

    if (sourceLanguage === targetLanguage) {
      message = 'Erreur: choisissez des langues différentes';
      return;
    }

    isSubmitting = true;
    message = '';

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Traduction Request',
          email: email,
          subject: `Traduction ${sourceLanguage.toUpperCase()} → ${targetLanguage.toUpperCase()}`,
          message: content
        })
      });

      if (response.ok) {
        message = '✓ Demande envoyée!';
        sourceLanguage = 'fr';
        targetLanguage = 'en';
        content = '';
        type = 'document';
        email = '';
      } else {
        message = '✗ Erreur lors de l\'envoi';
      }
    } catch (e) {
      message = '✗ Erreur réseau';
    } finally {
      isSubmitting = false;
    }
  }

  function swap() {
    [sourceLanguage, targetLanguage] = [targetLanguage, sourceLanguage];
  }
</script>

<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">🌍 Demander une traduction</h2>

  <div class="grid md:grid-cols-3 gap-4 mb-8">
    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Langue source</label>
      <select
        bind:value={sourceLanguage}
        class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
      >
        {#each languages as lang}
          <option value={lang}>{lang.toUpperCase()}</option>
        {/each}
      </select>
    </div>

    <div class="flex items-end">
      <button onclick={swap} class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
        ⇄
      </button>
    </div>

    <div>
      <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Langue cible</label>
      <select
        bind:value={targetLanguage}
        class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
      >
        {#each languages as lang}
          <option value={lang}>{lang.toUpperCase()}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="mb-6">
    <textarea
      bind:value={content}
      placeholder="Contenu à traduire..."
      class="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
      rows="5"
    ></textarea>
  </div>

  <div class="mb-6">
    <input
      type="email"
      bind:value={email}
      placeholder="Email"
      class="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {#if message}
    <div
      class={`mb-4 p-4 rounded-lg font-semibold {message.includes('✓')
        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100'
        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100'}`}
    >
      {message}
    </div>
  {/if}

  <button
    onclick={submit}
    disabled={isSubmitting}
    class="w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg disabled:opacity-50"
  >
    {isSubmitting ? 'Envoi...' : 'Envoyer demande'}
  </button>
</div>

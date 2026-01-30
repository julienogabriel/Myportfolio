<script lang="ts">
  import { language } from '$lib/i18n';
  import type { Language } from '$lib/types';

  let isOpen = false;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'mg', label: 'Malagasy', flag: '🇲🇬' }
  ];

  function setLang(lang: Language) {
    language.setLanguage(lang);
    isOpen = false;
  }
</script>

<div class="relative inline-block">
  <button
    onclick={() => (isOpen = !isOpen)}
    class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
  >
    <span>🌐</span>
    <span class="text-sm font-medium">Langue</span>
    <svg
      class="w-4 h-4 transform transition-transform {isOpen ? 'rotate-180' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>

  {#if isOpen}
    <div
      class="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 min-w-max overflow-hidden"
    >
      {#each languages as lang}
        <button
          onclick={() => setLang(lang.code)}
          class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 text-gray-900 dark:text-white"
        >
          <span>{lang.flag}</span>
          <span class="text-sm">{lang.label}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  button:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
</style>

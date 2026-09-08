<script>
  import { onMount } from 'svelte';

  let visible = $state(false);

  onMount(() => {
    const consent = localStorage.getItem('site-consent');
    if (!consent) {
      setTimeout(() => visible = true, 1500);
    }
  });

  function accept() {
    localStorage.setItem('site-consent', 'accepted');
    visible = false;
  }

  function decline() {
    localStorage.setItem('site-consent', 'declined');
    visible = false;
  }
</script>

{#if visible}
  <div class="fixed bottom-0 left-0 right-0 z-50 p-4" style="animation: slideUp 0.4s ease-out">
    <div class="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <p class="flex-1 text-sm text-gray-600 dark:text-gray-400">
        Ce site utilise des cookies pour ameliorer votre experience.
      </p>
      <div class="flex gap-2 flex-shrink-0">
        <button onclick={decline} class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          Refuser
        </button>
        <button onclick={accept} class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Accepter
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(100%); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

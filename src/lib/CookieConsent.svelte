<script>
  import { onMount } from 'svelte';

  let visible = $state(false);

  onMount(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setTimeout(() => visible = true, 1500);
      }
    }
  });

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    visible = false;
    // Activer Google Analytics / AdSense ici si besoin
    loadAds();
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    visible = false;
  }

  function loadAds() {
    // Charger le script AdSense après consentement
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="adsbygoogle"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }
</script>

{#if visible}
  <div class="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slideUp">
    <div class="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div class="flex-1">
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Ce site utilise des cookies pour améliorer votre expérience et afficher des publicités pertinentes.
          En continuant, vous acceptez notre utilisation des cookies.
        </p>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button
          onclick={decline}
          class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          Refuser
        </button>
        <button
          onclick={accept}
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Accepter
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slideUp {
    animation: slideUp 0.4s ease-out;
  }
</style>

<script>
  /**
   * Composant publicitaire Google AdSense
   *
   * Pour activer les vraies pubs :
   * 1. Créer un compte Google AdSense (https://adsense.google.com)
   * 2. Remplacer "ca-pub-XXXXXXXXXXXXXXXX" par votre ID éditeur
   * 3. Remplacer les data-ad-slot par vos vrais slots
   * 4. Ajouter le script AdSense dans +layout.svelte <svelte:head>
   *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"><\/script>
   */

  let { format = 'horizontal', slot = '1234567890' } = $props();

  const formats = {
    horizontal: { minH: 'min-h-[90px]', label: 'Bannière 728x90' },
    rectangle: { minH: 'min-h-[250px]', label: 'Rectangle 300x250' },
    vertical: { minH: 'min-h-[600px]', label: 'Skyscraper 160x600' },
    responsive: { minH: 'min-h-[100px]', label: 'Responsive' }
  };

  const config = formats[format] || formats.responsive;
</script>

<div class="ad-container my-6">
  <div class="text-center">
    <p class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-1">Publicité</p>
    <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl {config.minH} flex items-center justify-center overflow-hidden">
      <!-- Zone AdSense — remplacer par le vrai code une fois approuvé -->
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format === 'responsive' ? 'auto' : ''}
        data-full-width-responsive={format === 'responsive' ? 'true' : 'false'}
      ></ins>

      <!-- Placeholder affiché en attendant l'approbation AdSense -->
      <div class="placeholder-ad flex flex-col items-center justify-center text-gray-300 dark:text-gray-700 p-4">
        <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
        </svg>
        <span class="text-xs">{config.label}</span>
      </div>
    </div>
  </div>
</div>

<style>
  .placeholder-ad {
    display: flex;
  }
</style>

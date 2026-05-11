<script>
  import { onMount } from 'svelte';

  let { format = 'horizontal', slot = 'auto' } = $props();

  const formats = {
    horizontal: { minH: 'min-h-[90px]', label: 'Banniere' },
    rectangle: { minH: 'min-h-[250px]', label: 'Rectangle' },
    vertical: { minH: 'min-h-[600px]', label: 'Vertical' },
    responsive: { minH: 'min-h-[100px]', label: 'Responsive' }
  };

  const config = formats[format] || formats.responsive;
  let adLoaded = $state(false);

  onMount(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (consent === 'accepted') {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adLoaded = true;
        } catch (e) {
          // AdSense not yet loaded
        }
      }
    }
  });
</script>

<div class="ad-container my-6">
  <div class="text-center">
    <p class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-1">Publicite</p>
    <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl {config.minH} flex items-center justify-center overflow-hidden">
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-5820283522446403"
        data-ad-slot={slot}
        data-ad-format={format === 'responsive' ? 'auto' : ''}
        data-full-width-responsive={format === 'responsive' ? 'true' : 'false'}
      ></ins>
    </div>
  </div>
</div>

<script>
  import TranslationForm from '$lib/TranslationForm.svelte';
  import AdBanner from '$lib/AdBanner.svelte';
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Service de traduction
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Traduction professionnelle entre Français, Anglais et Malgache.
      </p>
    </div>

    <TranslationForm />

    <AdBanner format="horizontal" slot="7890123456" />
  </div>
</section>

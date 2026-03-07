<script>
  import FeedbackForm from '$lib/FeedbackForm.svelte';
  import AdBanner from '$lib/AdBanner.svelte';
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl mx-auto">
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Votre avis compte
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Aidez-moi à améliorer mes services en partageant votre expérience.
      </p>
    </div>

    <FeedbackForm />

    <AdBanner format="horizontal" slot="6789012345" />
  </div>
</section>

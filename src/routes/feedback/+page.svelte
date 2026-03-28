<script>
  import FeedbackForm from '$lib/FeedbackForm.svelte';
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Votre avis compte
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Aidez-moi à améliorer mes services en partageant votre expérience. Chaque retour, positif ou constructif, m'aide à progresser et à mieux répondre à vos attentes.
      </p>
    </div>

    <!-- Pourquoi donner son avis -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Pourquoi votre feedback est important
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50">
          <div class="text-3xl mb-3">📈</div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Amélioration continue</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Vos retours m'aident à identifier les points forts à maintenir et les axes d'amélioration pour offrir un service toujours meilleur.
          </p>
        </div>
        <div class="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50">
          <div class="text-3xl mb-3">🤝</div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Relation de confiance</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Un échange transparent et honnête est la base d'une collaboration réussie. Votre avis m'aide à mieux comprendre vos besoins.
          </p>
        </div>
        <div class="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50">
          <div class="text-3xl mb-3">🌟</div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-2">Aide aux futurs clients</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Votre témoignage aide d'autres personnes à faire un choix éclairé et contribue à bâtir une communauté de confiance.
          </p>
        </div>
      </div>
    </div>

    <!-- Ce que vous pouvez évaluer -->
    <div class="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Sur quoi porte votre feedback ?
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
        N'hésitez pas à commenter l'un ou plusieurs de ces aspects dans votre message :
      </p>
      <div class="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Qualité du code livré
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Respect des délais
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Communication et réactivité
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Rapport qualité-prix
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Compréhension du besoin
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Support après livraison
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Service de traduction
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span class="text-green-500">✓</span> Suggestions d'amélioration
        </div>
      </div>
    </div>

    <!-- Formulaire -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Partagez votre expérience
      </h2>
      <FeedbackForm />
    </div>

    <!-- Engagement -->
    <div class="text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Mon engagement envers vos retours
      </h2>
      <div class="space-y-3 text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-left">
        <p>
          <strong class="text-gray-900 dark:text-white">Lecture attentive :</strong> chaque feedback est lu personnellement et pris en compte dans l'amélioration de mes services.
        </p>
        <p>
          <strong class="text-gray-900 dark:text-white">Réponse garantie :</strong> si vous laissez votre email, je vous répondrai sous 48 heures pour discuter de vos remarques ou suggestions.
        </p>
        <p>
          <strong class="text-gray-900 dark:text-white">Confidentialité :</strong> vos commentaires ne seront jamais publiés ou partagés sans votre consentement explicite.
        </p>
        <p>
          <strong class="text-gray-900 dark:text-white">Action concrète :</strong> les suggestions pertinentes sont intégrées dans ma feuille de route d'amélioration continue.
        </p>
      </div>
    </div>
  </div>
</section>

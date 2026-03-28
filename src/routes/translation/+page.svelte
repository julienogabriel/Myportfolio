<script>
  import TranslationForm from '$lib/TranslationForm.svelte';
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Service de traduction professionnelle
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Traduction professionnelle entre Français, Anglais et Malgache. Un service fiable et rapide pour tous vos besoins de communication multilingue.
      </p>
    </div>

    <!-- Pourquoi choisir ce service -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Pourquoi faire appel à un traducteur professionnel ?
      </h2>
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50">
          <div class="text-3xl mb-3">🎯</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Précision linguistique</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Les outils de traduction automatique manquent souvent les nuances culturelles et le contexte. Une traduction humaine garantit un texte naturel et fidèle au sens original, adapté à votre audience cible.
          </p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50">
          <div class="text-3xl mb-3">🌍</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Expertise trilingue</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Locuteur natif du malgache, courant en français et en anglais, je maîtrise les subtilités de chaque langue. Cette expertise trilingue est particulièrement précieuse pour les entreprises travaillant avec Madagascar.
          </p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50">
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Rapidité et fiabilité</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Délai de traitement de 24 à 48 heures pour la plupart des documents. Chaque traduction est relue et vérifiée avant livraison pour garantir une qualité irréprochable.
          </p>
        </div>
      </div>
    </div>

    <!-- Types de documents -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Types de documents pris en charge
      </h2>
      <div class="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <span class="text-xl">📄</span>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">Documents professionnels</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Contrats, rapports, présentations, correspondance commerciale</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <span class="text-xl">🌐</span>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">Contenu web</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Sites internet, articles de blog, descriptions de produits, newsletters</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <span class="text-xl">📧</span>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">Communications</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Emails, lettres officielles, invitations, annonces</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <span class="text-xl">📝</span>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">Documents personnels</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">CV, lettres de motivation, documents administratifs, certificats</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Processus -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Comment fonctionne le service ?
      </h2>
      <div class="grid md:grid-cols-4 gap-4">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Envoyez votre texte</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Remplissez le formulaire ci-dessous avec le texte à traduire et les langues souhaitées.</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Recevez un devis</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Vous recevrez un devis gratuit par email sous 2 heures avec le délai estimé.</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Traduction et relecture</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Votre texte est traduit avec soin puis relu pour garantir la qualité.</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Livraison</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">La traduction finalisée vous est envoyée par email dans le format souhaité.</p>
        </div>
      </div>
    </div>

    <!-- Langues -->
    <div class="mb-16 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Combinaisons de langues disponibles
      </h2>
      <div class="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
        <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
          <p class="font-bold text-gray-900 dark:text-white">Français</p>
          <p class="text-2xl my-1">⇄</p>
          <p class="font-bold text-gray-900 dark:text-white">Anglais</p>
        </div>
        <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
          <p class="font-bold text-gray-900 dark:text-white">Français</p>
          <p class="text-2xl my-1">⇄</p>
          <p class="font-bold text-gray-900 dark:text-white">Malgache</p>
        </div>
        <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
          <p class="font-bold text-gray-900 dark:text-white">Anglais</p>
          <p class="text-2xl my-1">⇄</p>
          <p class="font-bold text-gray-900 dark:text-white">Malgache</p>
        </div>
      </div>
    </div>

    <!-- Formulaire -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Demander une traduction
      </h2>
      <TranslationForm />
    </div>

    <!-- FAQ -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Questions fréquentes sur la traduction
      </h2>
      <div class="space-y-4 max-w-2xl mx-auto">
        <details class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <summary class="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
            Quel est le délai de livraison ?
            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Pour un document standard (jusqu'à 2 000 mots), comptez 24 à 48 heures. Les documents plus longs ou techniques peuvent nécessiter un délai supplémentaire, qui vous sera communiqué dans le devis. Des traductions urgentes sont possibles sur demande avec un supplément.
          </p>
        </details>
        <details class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <summary class="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
            Comment sont calculés les tarifs ?
            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Les tarifs sont calculés au mot, avec un minimum de facturation. Le prix varie en fonction de la combinaison de langues, de la complexité du texte (technique, juridique, général) et du délai souhaité. Chaque demande reçoit un devis gratuit et personnalisé avant toute facturation.
          </p>
        </details>
        <details class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <summary class="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
            La confidentialité est-elle garantie ?
            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Absolument. Tous les documents reçus sont traités de manière strictement confidentielle. Je ne partage jamais le contenu des traductions avec des tiers. Sur demande, un accord de non-divulgation (NDA) peut être signé avant le début de la mission.
          </p>
        </details>
        <details class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <summary class="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
            Proposez-vous des révisions ?
            <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Oui, chaque traduction inclut une révision gratuite. Si le résultat ne correspond pas à vos attentes, vous pouvez demander des ajustements sans frais supplémentaires dans les 7 jours suivant la livraison. Votre satisfaction est ma priorité.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

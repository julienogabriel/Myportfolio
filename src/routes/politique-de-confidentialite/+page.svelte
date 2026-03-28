<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Politique de confidentialité | Gabriel - Développeur Full-Stack</title>
  <meta name="description" content="Politique de confidentialité du site gabriel-dev.com. Découvrez comment vos données personnelles sont collectées, utilisées et protégées.">
  <meta name="robots" content="noindex, follow">
</svelte:head>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">

    <a
      href="{base}/"
      class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      Retour à l'accueil
    </a>

    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">Politique de confidentialité</h1>

    <div class="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300">

      <p>
        La protection de vos données personnelles est une priorité pour Gabriel.
        Cette politique de confidentialité explique quelles informations sont collectées
        lorsque vous visitez le site <strong>gabriel-dev.com</strong>, comment elles sont utilisées
        et quels sont vos droits.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles est Gabriel, développeur full-stack,
        joignable à l'adresse : <a href="mailto:julienogabriel@gmail.com">julienogabriel@gmail.com</a>.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons les données suivantes dans le cadre de l'utilisation du site :</p>

      <h3>2.1 Données fournies volontairement</h3>
      <ul>
        <li><strong>Formulaire de contact :</strong> nom, adresse email, message</li>
        <li><strong>Formulaire de traduction :</strong> nom, email, documents soumis, langues source et cible</li>
        <li><strong>Formulaire de feedback :</strong> nom, email, commentaires</li>
        <li><strong>Newsletter :</strong> adresse email</li>
      </ul>

      <h3>2.2 Données collectées automatiquement</h3>
      <ul>
        <li><strong>Cookies techniques :</strong> préférences de thème (clair/sombre), consentement cookies</li>
        <li><strong>Données de navigation :</strong> pages visitées, durée de visite, type de navigateur, appareil utilisé</li>
        <li><strong>Adresse IP :</strong> collectée de manière anonymisée pour les statistiques</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <p>Les données personnelles collectées sont utilisées pour :</p>
      <ul>
        <li>Répondre à vos demandes de contact et de devis</li>
        <li>Traiter vos demandes de traduction</li>
        <li>Améliorer l'expérience utilisateur du site</li>
        <li>Envoyer des newsletters (uniquement si vous y avez consenti)</li>
        <li>Analyser le trafic et les performances du site</li>
        <li>Afficher des publicités pertinentes via Google AdSense</li>
      </ul>

      <h2>4. Base légale du traitement</h2>
      <p>Le traitement de vos données repose sur :</p>
      <ul>
        <li><strong>Votre consentement :</strong> pour les cookies non essentiels, la newsletter et les publicités personnalisées</li>
        <li><strong>L'exécution d'un contrat :</strong> pour le traitement des demandes de services (développement, traduction)</li>
        <li><strong>L'intérêt légitime :</strong> pour l'amélioration du site et l'analyse du trafic</li>
      </ul>

      <h2>5. Cookies et technologies similaires</h2>
      <p>Le site utilise différents types de cookies :</p>

      <h3>5.1 Cookies essentiels</h3>
      <p>
        Nécessaires au fonctionnement du site : préférences de thème, session utilisateur.
        Ces cookies ne peuvent pas être désactivés.
      </p>

      <h3>5.2 Cookies analytiques</h3>
      <p>
        Permettent de mesurer l'audience et d'analyser le comportement des visiteurs
        pour améliorer le site. Ces données sont anonymisées.
      </p>

      <h3>5.3 Cookies publicitaires</h3>
      <p>
        Utilisés par Google AdSense pour afficher des publicités pertinentes.
        Ces cookies peuvent suivre votre navigation sur différents sites.
        Vous pouvez gérer vos préférences publicitaires sur
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">les paramètres de publicité Google</a>.
      </p>

      <h2>6. Partage des données</h2>
      <p>Vos données personnelles ne sont jamais vendues. Elles peuvent être partagées avec :</p>
      <ul>
        <li><strong>Google AdSense :</strong> pour l'affichage de publicités (données anonymisées)</li>
        <li><strong>Services d'hébergement :</strong> pour le stockage sécurisé des données</li>
        <li><strong>Services d'email :</strong> pour l'envoi de réponses et de newsletters</li>
      </ul>

      <h2>7. Durée de conservation</h2>
      <ul>
        <li><strong>Données de contact :</strong> conservées pendant 3 ans après le dernier échange</li>
        <li><strong>Données de newsletter :</strong> conservées jusqu'à votre désinscription</li>
        <li><strong>Cookies :</strong> durée maximale de 13 mois</li>
        <li><strong>Données analytiques :</strong> conservées pendant 26 mois</li>
      </ul>

      <h2>8. Vos droits</h2>
      <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
        <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
        <li><strong>Droit de suppression :</strong> demander l'effacement de vos données</li>
        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
        <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
        <li><strong>Droit au retrait du consentement :</strong> retirer votre consentement à tout moment</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à :
        <a href="mailto:julienogabriel@gmail.com">julienogabriel@gmail.com</a>.
        Nous nous engageons à répondre dans un délai de 30 jours.
      </p>

      <h2>9. Sécurité des données</h2>
      <p>
        Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger
        vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
        Le site utilise le protocole HTTPS pour chiffrer les communications entre votre navigateur et notre serveur.
      </p>

      <h2>10. Modifications de cette politique</h2>
      <p>
        Cette politique de confidentialité peut être mise à jour périodiquement pour refléter les changements
        dans nos pratiques ou la réglementation applicable. La date de dernière mise à jour est indiquée ci-dessous.
        Nous vous encourageons à consulter cette page régulièrement.
      </p>

      <p class="text-sm text-gray-400 dark:text-gray-500 mt-12">
        Dernière mise à jour : Mars 2026
      </p>
    </div>
  </div>
</section>

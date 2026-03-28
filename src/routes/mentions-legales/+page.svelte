<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Mentions légales | Gabriel - Développeur Full-Stack</title>
  <meta name="description" content="Mentions légales du site gabriel-dev.com. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.">
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

    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">Mentions légales</h1>

    <div class="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300">

      <h2>1. Éditeur du site</h2>
      <p>
        Le site <strong>gabriel-dev.com</strong> est édité par Gabriel, développeur full-stack et consultant IT,
        exerçant en tant qu'auto-entrepreneur.
      </p>
      <ul>
        <li><strong>Nom :</strong> Gabriel</li>
        <li><strong>Activité :</strong> Développement web, consulting IT, services de traduction</li>
        <li><strong>Adresse :</strong> Fianarantsoa, Madagascar</li>
        <li><strong>Email :</strong> julienogabriel@gmail.com</li>
        <li><strong>Téléphone :</strong> +261 34 01 772 60</li>
      </ul>

      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par des services d'hébergement web modernes assurant
        une disponibilité optimale et une sécurité renforcée des données.
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
        est la propriété exclusive de Gabriel, sauf mention contraire. Toute reproduction, représentation,
        modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen
        ou le procédé utilisé, est interdite sans autorisation écrite préalable.
      </p>
      <p>
        Les marques et logos figurant sur le site sont des marques déposées par leurs propriétaires respectifs.
        Toute reproduction totale ou partielle de ces marques ou logos sans autorisation est prohibée.
      </p>

      <h2>4. Limitation de responsabilité</h2>
      <p>
        Gabriel s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site.
        Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
        disposition sur ce site.
      </p>
      <p>
        En conséquence, Gabriel décline toute responsabilité pour toute imprécision, inexactitude ou omission
        portant sur des informations disponibles sur le site. Gabriel ne pourra être tenu responsable des dommages
        directs et indirects causés au matériel de l'utilisateur lors de l'accès au site.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens hypertextes vers d'autres sites. Gabriel ne dispose d'aucun moyen
        pour contrôler le contenu de ces sites tiers et n'assume aucune responsabilité quant à leur contenu.
        La navigation sur ces sites tiers se fait aux risques et périls de l'utilisateur.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Le site utilise des cookies pour améliorer l'expérience utilisateur, mémoriser les préférences
        (comme le mode sombre) et analyser le trafic. L'utilisateur peut configurer son navigateur pour
        refuser les cookies, sachant que cela peut altérer certaines fonctionnalités du site.
      </p>
      <p>
        Pour plus d'informations sur l'utilisation des cookies et la gestion de vos données personnelles,
        consultez notre <a href="{base}/politique-de-confidentialite">Politique de confidentialité</a>.
      </p>

      <h2>7. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit malgache. En cas de litige,
        les tribunaux compétents de Madagascar seront seuls compétents.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse
        suivante : <a href="mailto:julienogabriel@gmail.com">julienogabriel@gmail.com</a>.
      </p>

      <p class="text-sm text-gray-400 dark:text-gray-500 mt-12">
        Dernière mise à jour : Mars 2026
      </p>
    </div>
  </div>
</section>

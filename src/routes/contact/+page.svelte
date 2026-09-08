<script>
  import { base } from '$app/paths';

  let name = $state('');
  let email = $state('');
  let subject = $state('');
  let message = $state('');
  let formStatus = $state('');
  let isSubmitting = $state(false);
  let statusType = $state('');

  const contactInfo = [
    {
      title: 'Email',
      value: 'julienogabriel4@gmail.com',
      link: 'mailto:julienogabriel4@gmail.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Telephone',
      value: '+261 34 01 772 60',
      link: 'tel:+261340177260',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      title: 'Localisation',
      value: 'Fianarantsoa, Madagascar',
      link: '',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];

  const validateForm = () => {
    if (!name || !email || !message) {
      formStatus = 'Tous les champs marques * sont requis.';
      statusType = 'error';
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      formStatus = 'Veuillez entrer un email valide.';
      statusType = 'error';
      return false;
    }
    if (message.length < 10) {
      formStatus = 'Le message doit contenir au moins 10 caracteres.';
      statusType = 'error';
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    formStatus = '';
    statusType = '';

    if (!validateForm()) return;
    isSubmitting = true;

    try {
      const response = await fetch('https://formspree.io/f/mwkajnpg', {
        method: 'POST',
        body: new FormData(event.target),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formStatus = 'Message envoye. Je vous reponds sous 24h.';
        statusType = 'success';
        name = ''; email = ''; subject = ''; message = '';
      } else {
        formStatus = 'Erreur lors de l\'envoi. Reessayez.';
        statusType = 'error';
      }
    } catch {
      formStatus = 'Erreur de connexion. Verifiez votre internet.';
      statusType = 'error';
    } finally {
      isSubmitting = false;
    }
  };
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
  <div class="max-w-4xl mx-auto">

    <!-- Header -->
    <div class="mb-14">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Contact
      </h1>
      <p class="text-gray-500 dark:text-gray-400 max-w-xl">
        Un projet, une question, une collaboration ? Ecrivez-moi.
      </p>
    </div>

    <!-- Coordonnees -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
      {#each contactInfo as info}
        {#if info.link}
          <a
            href={info.link}
            target={info.link.startsWith('http') ? '_blank' : undefined}
            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            class="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={info.icon}/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">{info.title}</p>
              <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{info.value}</p>
            </div>
          </a>
        {:else}
          <div class="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={info.icon}/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">{info.title}</p>
              <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{info.value}</p>
            </div>
          </div>
        {/if}
      {/each}
    </div>

    <!-- Formulaire -->
    <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Envoyez-moi un message
      </h2>

      <form onsubmit={handleSubmit} class="space-y-5">
        <div class="grid sm:grid-cols-2 gap-5">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Nom *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={name}
              placeholder="Votre nom"
              class="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              placeholder="votre@email.com"
              class="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            bind:value={subject}
            placeholder="De quoi s'agit-il ?"
            class="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            bind:value={message}
            placeholder="Decrivez votre projet ou votre demande..."
            rows="5"
            class="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors resize-none"
            required
          ></textarea>
        </div>

        {#if formStatus}
          <div class="p-3 rounded-lg text-sm {
            statusType === 'success'
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800'
              : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800'
          }">
            {formStatus}
          </div>
        {/if}

        <button
          type="submit"
          disabled={isSubmitting}
          class="px-6 py-3 rounded-lg font-medium text-sm transition-colors {
            isSubmitting
              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }"
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </div>

    <!-- FAQ -->
    <div class="mt-14 grid sm:grid-cols-2 gap-6">
      <div>
        <h3 class="font-medium text-gray-900 dark:text-white mb-1">Quels types de projets ?</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Applications web, sites vitrine, APIs, e-commerce et solutions sur mesure.</p>
      </div>
      <div>
        <h3 class="font-medium text-gray-900 dark:text-white mb-1">Travail a distance ?</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Oui, je collabore avec des clients partout dans le monde. Timezone GMT+3.</p>
      </div>
      <div>
        <h3 class="font-medium text-gray-900 dark:text-white mb-1">Delai de reponse ?</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Je reponds sous 24h en jours ouvrables. Premiere consultation gratuite.</p>
      </div>
      <div>
        <h3 class="font-medium text-gray-900 dark:text-white mb-1">Tarifs ?</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Devis personnalise selon votre projet. Pas de tarif fixe, chaque projet est different.</p>
      </div>
    </div>

  </div>
</section>

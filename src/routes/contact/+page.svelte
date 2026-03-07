<script>
  import { Motion } from 'svelte-motion';
  import { base } from '$app/paths';
  import AdBanner from '$lib/AdBanner.svelte';

  let name = $state('');
  let email = $state('');
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
      title: 'Téléphone',
      value: '+261 34 01 772 60',
      link: 'tel:+261340177260',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      title: 'Localisation',
      value: 'Fianarantsoa, Madagascar',
      link: 'https://www.google.com/maps/place/Fianarantsoa,+Madagascar',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];

  const validateForm = () => {
    if (!name || !email || !message) {
      formStatus = 'Tous les champs sont requis.';
      statusType = 'error';
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      formStatus = 'Veuillez entrer un email valide.';
      statusType = 'error';
      return false;
    }
    if (message.length < 10) {
      formStatus = 'Le message doit contenir au moins 10 caractères.';
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
        formStatus = 'Merci ! Votre message a été envoyé avec succès.';
        statusType = 'success';
        name = '';
        email = '';
        message = '';
      } else {
        formStatus = 'Erreur lors de l\'envoi. Veuillez réessayer.';
        statusType = 'error';
      }
    } catch {
      formStatus = 'Erreur de connexion. Veuillez vérifier votre internet.';
      statusType = 'error';
    } finally {
      isSubmitting = false;
    }
  };
</script>

<section class="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
  <div class="max-w-5xl mx-auto">

    <!-- Header -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div class="text-center mb-14">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Me contacter
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Un projet, une question ou une opportunité de collaboration ? Écrivez-moi, je vous réponds sous 24h.
        </p>
      </div>
    </Motion>

    <!-- Coordonnées -->
    <Motion
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {#each contactInfo as info}
          <a
            href={info.link}
            target={info.link.startsWith('http') ? '_blank' : undefined}
            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            class="flex items-center gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-200"
          >
            <div class="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={info.icon}/>
              </svg>
            </div>
            <div>
              <p class="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">{info.title}</p>
              <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{info.value}</p>
            </div>
          </a>
        {/each}
      </div>
    </Motion>

    <div class="grid lg:grid-cols-5 gap-10">

      <!-- Formulaire -->
      <Motion
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div class="lg:col-span-3">
          <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-7 md:p-8 border border-gray-100 dark:border-gray-800">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h2>

            <form onsubmit={handleSubmit} class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  bind:value={name}
                  placeholder="Jean Dupont"
                  class="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-sm"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  bind:value={email}
                  placeholder="jean@exemple.com"
                  class="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-sm"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  bind:value={message}
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-sm resize-none"
                  required
                ></textarea>
              </div>

              {#if formStatus}
                <div class="p-3.5 rounded-lg text-sm font-medium {
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
                class="w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 {
                  isSubmitting
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
                }"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </Motion>

      <!-- Sidebar -->
      <Motion
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div class="lg:col-span-2 space-y-6">

          <!-- Disponibilité -->
          <div class="bg-blue-600 rounded-2xl p-6 text-white">
            <h3 class="text-lg font-bold mb-3">Disponibilité</h3>
            <p class="text-blue-100 text-sm leading-relaxed mb-4">
              Actuellement disponible pour des projets freelance et des collaborations.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Réponse sous 24h</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Consultation gratuite</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Devis personnalisé</span>
              </li>
            </ul>
          </div>

          <!-- Services additionnels -->
          <div class="rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Services additionnels</h3>
            <div class="space-y-3">
              <a href="{base}/translation" class="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm group">
                <div>
                  <p class="font-medium text-gray-800 dark:text-gray-200">Traduction</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">FR / EN / MG</p>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="{base}/feedback" class="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm group">
                <div>
                  <p class="font-medium text-gray-800 dark:text-gray-200">Votre avis</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Partagez votre feedback</p>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Publicité -->
          <AdBanner format="rectangle" slot="5678901234" />

          <!-- FAQ -->
          <div class="rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Questions fréquentes</h3>
            <div class="space-y-4 text-sm">
              <div>
                <p class="font-medium text-gray-800 dark:text-gray-200 mb-0.5">Quels types de projets acceptez-vous ?</p>
                <p class="text-gray-500 dark:text-gray-400">Applications web, sites vitrine, e-commerce et solutions sur mesure.</p>
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-gray-200 mb-0.5">Travaillez-vous à distance ?</p>
                <p class="text-gray-500 dark:text-gray-400">Oui, je collabore avec des clients partout dans le monde.</p>
              </div>
            </div>
          </div>

        </div>
      </Motion>

    </div>

  </div>
</section>

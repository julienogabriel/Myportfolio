<script>
  import { Motion } from 'svelte-motion';
  import { base } from '$app/paths';  // ← AJOUT IMPORTANT
  
  let name = $state('');
  let email = $state('');
  let message = $state('');
  let formStatus = $state('');
  let isSubmitting = $state(false);
  let statusType = $state(''); // 'success' ou 'error'
  
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'julienogabriel4@gmail.com',
      link: 'mailto:julienogabriel4@gmail.com',  // ← Corrigé: mailto:
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Téléphone',
      value: '+261 34 01 772 60',
      link: 'tel:+261340177260',  // ← Corrigé
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Localisation',
      value: 'FIANARANTSOA, Madagascar',
      link: 'https://www.google.com/maps/place/Fianarantsoa,+Madagascar',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Gabriel Dev',
      link: '#',
      color: 'from-blue-600 to-blue-400'
    }
  ];
  
  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#', color: 'hover:bg-gray-700' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-500' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/261340177260', color: 'hover:bg-green-600' }
  ];
  
  // Validation du formulaire
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
  
  // Envoi du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    formStatus = '';
    statusType = '';
    
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    
    try {
      const response = await fetch('https://formspree.io/f/mwkajnpg', {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        formStatus = '✓ Merci ! Votre message a été envoyé avec succès.';
        statusType = 'success';
        name = '';
        email = '';
        message = '';
      } else {
        formStatus = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
        statusType = 'error';
      }
    } catch (error) {
      formStatus = '✗ Erreur de connexion. Veuillez vérifier votre internet.';
      statusType = 'error';
    } finally {
      isSubmitting = false;
    }
  };
</script>

<Motion
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <section class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <Motion
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Contactez-moi
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Je suis toujours ouvert à de nouvelles opportunités et collaborations.
          </p>
        </div>
      </Motion>

      <!-- Contact Info Cards -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {#each contactInfo as info, i}
            <Motion
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <a 
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 block"
              >
                <div class="text-5xl mb-3">{info.icon}</div>
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  {info.title}
                </h3>
                <p class="text-lg font-bold bg-gradient-to-r {info.color} bg-clip-text text-transparent">
                  {info.value}
                </p>
              </a>
            </Motion>
          {/each}
        </div>
      </Motion>

      <div class="grid lg:grid-cols-2 gap-12">
        
        <!-- Formulaire -->
        <Motion
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h2>
            
            <form onsubmit={handleSubmit} class="space-y-6">
              <!-- Nom -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  bind:value={name}
                  placeholder="Jean Dupont"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  bind:value={email}
                  placeholder="jean.dupont@exemple.com"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  bind:value={message}
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows="5"
                  class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                  required
                ></textarea>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum 10 caractères</p>
              </div>

              <!-- Message de statut -->
              {#if formStatus}
                <Motion
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div class={`p-4 rounded-xl ${
                    statusType === 'success' 
                      ? 'bg-green-50 text-green-700 border-2 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                      : 'bg-red-50 text-red-700 border-2 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                  }`}>
                    <p class="font-semibold">{formStatus}</p>
                  </div>
                </Motion>
              {/if}

              <!-- Bouton Submit -->
              <Motion
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class={`w-full px-6 py-4 rounded-xl font-semibold text-white text-lg shadow-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl'
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </Motion>
            </form>

            <!-- Sections supplémentaires -->
            <div class="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Services additionnels
              </h3>

              <!-- Traduction -->
              <div class="mb-8 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🌍 Demander une Traduction</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Traduction professionnelle entre Français, Anglais et Malgache
                </p>
                <a href="{base}/TraslationForm" class="inline-block px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold">
                  Accédez au formulaire →
                </a>
              </div>

              <!-- Documents -->
              <div class="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📄 Mes Documents</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Téléchargez CV, lettre de motivation et porfolio technique
                </p>
                <a href="#" class="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold">
                  Télécharger les documents →
                </a>
              </div>

              <!-- Feedback -->
              <div class="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">⭐ Votre Feedback</h4>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Partagez votre avis pour nous aider à améliorer nos services
                </p>
                <a href="{base}/FeedbackForm" class="inline-block px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all font-semibold">
                  Donner votre avis →
                </a>
              </div>
            </div>
          </div>
        </Motion>

        <!-- Informations complémentaires -->
        <Motion
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div class="space-y-8">
            
            <!-- Carte disponibilité -->
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
              <div class="flex items-center space-x-3 mb-4">
                <span class="text-4xl">⚡</span>
                <h3 class="text-2xl font-bold">Disponibilité</h3>
              </div>
              <p class="text-lg opacity-90 mb-6">
                Je suis actuellement disponible pour de nouveaux projets freelance et des opportunités de collaboration.
              </p>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">✓</span>
                  <span>Réponse sous 24h</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">✓</span>
                  <span>Consultation gratuite</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">✓</span>
                  <span>Devis personnalisé</span>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Suivez-moi
              </h3>
              <div class="grid grid-cols-2 gap-4">
                {#each socialLinks as social}
                  <Motion
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={`flex items-center space-x-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl ${social.color} transition-all duration-300`}
                    >
                      <span class="text-2xl">{social.icon}</span>
                      <span class="font-semibold text-gray-900 dark:text-white">{social.name}</span>
                    </a>
                  </Motion>
                {/each}
              </div>
            </div>

            <!-- FAQ rapide -->
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Questions fréquentes
              </h3>
              <div class="space-y-4">
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Quels types de projets acceptez-vous ?</p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">Applications web, sites vitrine, e-commerce, et solutions sur mesure.</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Quel est votre délai de réponse ?</p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">Je réponds généralement dans les 24 heures ouvrées.</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Travaillez-vous à distance ?</p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">Oui, je travaille avec des clients du monde entier.</p>
                </div>
              </div>
            </div>

          </div>
        </Motion>

      </div>

    </div>
  </section>
</Motion>

<style>
  section {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
</style>
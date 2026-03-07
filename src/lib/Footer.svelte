<script>
  import { base } from '$app/paths';

  let email = $state('');
  let isSubscribed = $state(false);

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
    { name: 'LinkedIn', url: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Email', url: 'mailto:julienogabriel4@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'WhatsApp', url: 'https://wa.me/261340177260', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ];

  function handleSubscribe(e) {
    e.preventDefault();
    if (email) {
      isSubscribed = true;
      setTimeout(() => {
        isSubscribed = false;
        email = '';
      }, 3000);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-950 text-gray-300">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Contenu principal -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-gray-800">

      <!-- Marque -->
      <div>
        <a href="{base}/" class="flex items-center gap-3 mb-4 group">
          <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">G</span>
          </div>
          <span class="text-lg font-bold text-white">Gabriel</span>
        </a>
        <p class="text-sm text-gray-400 leading-relaxed mb-5">
          Développeur full-stack basé à Madagascar. Je conçois des applications web modernes et performantes.
        </p>
        <div class="flex gap-3">
          {#each socialLinks as social}
            <a
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              class="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              aria-label={social.name}
            >
              <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon}/>
              </svg>
            </a>
          {/each}
        </div>
      </div>

      <!-- Liens -->
      <div>
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
        <ul class="space-y-2.5">
          {#each quickLinks as link}
            <li>
              <a
                href="{base}{link.href}"
                class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li>Développement Web</li>
          <li>Applications Backend</li>
          <li>Intégration UI/UX</li>
          <li>Traduction FR/EN/MG</li>
          <li>Documentation</li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Newsletter</h4>
        <p class="text-sm text-gray-400 mb-4">
          Restez informé de mes dernières réalisations.
        </p>
        <form onsubmit={handleSubscribe} class="space-y-2.5">
          <input
            type="email"
            bind:value={email}
            placeholder="votre@email.com"
            required
            class="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
          <button
            type="submit"
            class="w-full px-3.5 py-2.5 bg-blue-600 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-200"
          >
            S'abonner
          </button>
          {#if isSubscribed}
            <p class="text-emerald-400 text-xs">Merci pour votre inscription !</p>
          {/if}
        </form>
      </div>
    </div>

    <!-- Bottom -->
    <div class="py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
      <p class="text-xs text-gray-500">
        &copy; {currentYear} Gabriel. Tous droits réservés.
      </p>
      <p class="text-xs text-gray-500">
        Conçu et développé à Madagascar
      </p>
    </div>
  </div>

  <!-- Bouton retour en haut -->
  <button
    onclick={scrollToTop}
    class="fixed bottom-20 right-6 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 z-30 border border-gray-700"
    aria-label="Retour en haut"
  >
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
    </svg>
  </button>
</footer>

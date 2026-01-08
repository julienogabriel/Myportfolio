<script>
  import { fade, fly } from 'svelte/transition';
  import '../app.css';
  
  let email = $state('');
  let isSubscribed = $state(false);
  
  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:text-sky-400' },
    { name: 'Email', icon: '📧', url: 'mailto:contact@portfolio.com', color: 'hover:text-red-400' }
  ];
  
  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ];
  
  const services = [
    'Développement Web',
    'Design UI/UX',
    'Applications Mobile',
    'Consulting',
    'Formation',
    'Support'
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

<footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
  <!-- Effet de background décoratif -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section principale -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-700">
      
      <!-- À propos -->
      <div class="space-y-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">MP</span>
          </div>
          <h3 class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mon Portfolio
          </h3>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          Créateur de solutions digitales innovantes. Transformons vos idées en réalité avec passion et expertise.
        </p>
        <div class="flex space-x-3">
          {#each socialLinks as social}
            <a 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              class={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
              aria-label={social.name}
            >
              <span class="text-xl">{social.icon}</span>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Liens rapides -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-white">Liens rapides</h4>
        <ul class="space-y-2">
          {#each quickLinks as link}
            <li>
              <a 
                href={link.href}
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span class="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Services -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-white">Services</h4>
        <ul class="space-y-2">
          {#each services as service}
            <li class="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
              {service}
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Newsletter -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-white">Newsletter</h4>
        <p class="text-gray-400 text-sm mb-4">
          Recevez les dernières actualités et mes nouveaux projets.
        </p>
        <form onsubmit={handleSubscribe} class="space-y-3">
          <input 
            type="email"
            bind:value={email}
            placeholder="Votre email"
            required
            class="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <button 
            type="submit"
            class="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          >
            S'abonner
          </button>
          {#if isSubscribed}
            <p transition:fly={{ y: 10 }} class="text-green-400 text-sm flex items-center">
              <span class="mr-2">✓</span> Merci pour votre inscription !
            </p>
          {/if}
        </form>
      </div>
    </div>
    
    <!-- Section bas -->
    <div class="py-6">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-gray-400 text-sm">
          &copy; {currentYear} Mon Portfolio. Tous droits réservés.
        </p>
        
        <div class="flex items-center space-x-2 text-gray-400 text-sm">
          <span>Fait avec</span>
          <span class="text-red-500 animate-pulse">❤️</span>
          <span>à Madagascar</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Bouton retour en haut -->
  <button
    onclick={scrollToTop}
    class="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
    aria-label="Retour en haut"
  >
    <span class="text-white text-xl group-hover:-translate-y-1 transition-transform duration-300">↑</span>
  </button>
</footer>

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
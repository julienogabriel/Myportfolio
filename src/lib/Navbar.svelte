<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { fade, fly, scale } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';
  
  let isOpen = $state(false);
  let scrolled = $state(false);
  let activeSection = $state('/');
  let isDesktop = $state(false);
  
  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/projects', label: 'Projets' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];
  
  function toggleMenu() {
    isOpen = !isOpen;
  }
  
  function handleScroll() {
    scrolled = window.scrollY > 20;
    updateActiveSection();
  }
  
  function setActive(href) {
    activeSection = href;
    isOpen = false;
    // Scroll doux vers le haut si on est déjà sur la page
    if (window.location.pathname === `${base}${href}`) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  function updateActiveSection() {
    if (typeof window === 'undefined') return;
    
    const sections = navItems.map(item => item.href);
    const scrollPosition = window.scrollY + 100;
    
    // Trouver la section active basée sur la position de défilement
    let current = '/';
    const pageSections = document.querySelectorAll('[data-section]');
    
    pageSections.forEach(section => {
      const sectionId = section.id;
      const element = document.getElementById(sectionId);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const absoluteTop = top + window.scrollY;
        const absoluteBottom = bottom + window.scrollY;
        
        if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
          current = `/#${sectionId}`;
        }
      }
    });
    
    // Pour les pages individuelles
    const currentPath = window.location.pathname.replace(base, '') || '/';
    if (currentPath !== '/') {
      current = currentPath;
    }
    
    activeSection = current;
  }
  
  function handleResize() {
    isDesktop = window.innerWidth >= 768;
    if (isDesktop && isOpen) {
      isOpen = false;
    }
  }
  
  function handleKeydown(e) {
    if (e.key === 'Escape' && isOpen) {
      isOpen = false;
    }
  }
  
  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });
      window.addEventListener('keydown', handleKeydown);
      handleResize();
      handleScroll(); // Initial check
      
      // Détection initiale de la section active
      const path = window.location.pathname.replace(base, '') || '/';
      const hash = window.location.hash;
      activeSection = hash ? `/${hash}` : path;
    }
  });
  
  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeydown);
    }
  });
</script>

<nav 
  class={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl shadow-lg shadow-gray-200/50 dark:shadow-black/30 py-2.5 border-b border-gray-200/50 dark:border-gray-700/50'
      : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4 border-b border-transparent'
  }`}
  aria-label="Navigation principale"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <!-- Logo avec animation améliorée -->
      <a 
        href="{base}/"
        onclick={() => setActive('/')}
        class="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
        aria-label="Accueil - Retour à la page principale"
      >
        <div class="relative">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-sm">
            <span class="text-white font-bold text-lg tracking-tight">G</span>
          </div>
        </div>
        <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block tracking-tight">
          Gabriel
          <span class="block text-[11px] font-medium text-gray-400 dark:text-gray-500 mt-0.5 tracking-wider uppercase">
            Full-Stack Dev
          </span>
        </span>
      </a>
      
      <!-- Menu Desktop avec indicateur actif amélioré -->
      <ul class="hidden md:flex items-center space-x-1" role="menubar">
        {#each navItems as item}
          <li role="none">
            <a 
              href="{base}{item.href}"
              onclick={() => setActive(item.href)}
              class={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeSection === item.href 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              role="menuitem"
              aria-current={activeSection === item.href ? 'page' : undefined}
            >
              <span>{item.label}</span>

              <!-- Indicateur de section active -->
              {#if activeSection === item.href}
                <span
                  class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  transition:scale={{ duration: 300 }}
                ></span>
              {:else}
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-8 transition-all duration-300"></span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
      
      <!-- CTA Desktop -->
      <div class="hidden md:block">
        <a
          href="{base}/contact"
          class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2 text-sm"
        >
          <span>Me contacter</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
      
      <!-- Bouton menu burger amélioré avec animations -->
      <button 
        onclick={toggleMenu} 
        class="md:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 rounded-lg group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
        
        <span 
          class={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        ></span>
        <span 
          class={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`}
        ></span>
        <span 
          class={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>
    </div>
  </div>
  
  <!-- Menu Mobile amélioré avec overlay -->
  {#if isOpen}
    <!-- Overlay -->
    <div 
      onclick={toggleMenu}
      class="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      transition:fade={{ duration: 200 }}
      aria-hidden="true"
    ></div>
    
    <!-- Menu Panel -->
    <div 
      id="mobile-menu"
      transition:fly={{ y: -20, duration: 300, easing: cubicOut }}
      class="md:hidden fixed top-20 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-gray-300/30 dark:shadow-black/40 z-50 border border-gray-200/80 dark:border-gray-700/80 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div class="px-2 py-3 space-y-1">
        {#each navItems as item, i}
          <div 
            transition:fly={{ 
              x: -20, 
              duration: 300, 
              delay: i * 50,
              easing: cubicOut 
            }}
          >
            <a 
              href="{base}{item.href}"
              onclick={() => setActive(item.href)}
              class={`flex items-center space-x-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeSection === item.href
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              aria-current={activeSection === item.href ? 'page' : undefined}
            >
              <span class="flex-1">{item.label}</span>
              {#if activeSection === item.href}
                <span class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></span>
              {/if}
            </a>
          </div>
        {/each}
      </div>
      
      <!-- Séparateur -->
      <div class="px-4 py-3">
        <div class="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
      </div>
      
      <!-- CTA Mobile amélioré -->
      <div class="px-4 pb-4">
        <a 
          href="{base}/contact"
          onclick={() => setActive('/contact')}
          class="flex w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 items-center justify-center space-x-2 group"
        >
          <span>Me contacter</span>
          <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
        <p class="text-center text-xs text-gray-500 dark:text-gray-400 mt-3 px-2">
          Réponse sous 24h
        </p>
      </div>
    </div>
  {/if}
</nav>

<!-- Espace pour le contenu fixé sous la navbar -->
<div class="h-[60px] md:h-[72px]"></div>

<style>
  :global(html) {
    scroll-padding-top: 5rem;
  }

  .animation-delay-150 {
    animation-delay: 150ms;
  }

  .animation-delay-300 {
    animation-delay: 300ms;
  }
</style>

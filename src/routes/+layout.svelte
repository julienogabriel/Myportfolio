<script>
  import { onMount } from 'svelte';
  import { spring, tweened } from 'svelte/motion';
  import { quintOut } from 'svelte/easing';
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  
  let isOpen = false;
  let darkMode = $state(false);
  let systemPrefersDark = false;
  let isLoading = $state(true);
  
  // Animation améliorée pour le menu
  const menuSpring = spring(0, {
    stiffness: 0.3,
    damping: 0.5,
    precision: 0.01
  });
  
  // Animation pour le changement de thème
  const themeTransition = tweened(0, {
    duration: 300,
    easing: quintOut
  });
  
  onMount(async () => {
    // Vérifier la préférence système
    if (typeof window !== 'undefined') {
      systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Priorité: localStorage > préférence système
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        darkMode = true;
      }
      
      // Appliquer le thème
      applyTheme();
      
      // Désactiver le loading après un délai
      setTimeout(() => {
        isLoading = false;
      }, 500);
      
      // Écouter les changements de préférence système
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handleSystemThemeChange);
    }
  });
  
  const applyTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };
  
  const toggleDarkMode = async () => {
    await themeTransition.set(1, { duration: 150 });
    darkMode = !darkMode;
    applyTheme();
    await themeTransition.set(0, { duration: 150 });
  };
  
  const handleSystemThemeChange = (e) => {
    systemPrefersDark = e.matches;
    // Si pas de préférence sauvegardée, suivre le système
    if (!localStorage.getItem('theme')) {
      darkMode = systemPrefersDark;
      applyTheme();
    }
  };
  
  let { children } = $props();
  import "../app.css";
</script>

<svelte:head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content={darkMode ? '#1a1a1a' : '#ffffff'}>
  
  <!-- Meta améliorées pour SEO -->
  <title>Gabriel | Développeur Full-Stack & UI/UX Designer</title>
  <meta name="description" content="Portfolio de Gabriel, développeur full-stack spécialisé en applications modernes, UI/UX et architecture scalable. Découvrez mes projets et solutions innovantes.">
  <meta name="keywords" content="développeur full-stack, UI/UX, Svelte, React, Node.js, développement web, architecture logicielle, performance web">
  <meta name="author" content="Gabriel">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph amélioré -->
  <meta property="og:title" content="Gabriel | Développeur Full-Stack">
  <meta property="og:description" content="Transformez vos idées en solutions digitales performantes. Expertise en développement full-stack et expérience utilisateur.">
  <meta property="og:image" content="/images/og-image-optimized.jpg">
  <meta property="og:url" content="https://www.gabriel-dev.com">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_FR">
  <meta property="og:site_name" content="Portfolio Gabriel">
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Gabriel | Développeur Full-Stack">
  <meta name="twitter:description" content="Développeur passionné créant des expériences digitales exceptionnelles">
  <meta name="twitter:image" content="/images/twitter-card.jpg">
  <meta name="twitter:creator" content="@gabriel_dev">
  
  <!-- Connexions externes (commenté si non utilisé) -->
  <!-- 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  -->
  
  <!-- Favicon moderne (commenté si les fichiers n'existent pas) -->
  <!--
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color={darkMode ? '#1a1a1a' : '#ffffff'}>
  -->
</svelte:head>

<!-- Transition de thème fluide -->
<div 
  class="theme-transition-overlay"
  style="opacity: {$themeTransition}; pointer-events: none;"
  aria-hidden="true"
></div>

<!-- Loading state -->
{#if isLoading}
  <div class="fixed inset-0 bg-white dark:bg-darkBackground flex items-center justify-center z-50 transition-opacity duration-500">
    <div class="text-center">
      <div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-gray-600 dark:text-gray-400 font-medium">Chargement du portfolio...</p>
    </div>
  </div>
{/if}

<Navbar {isOpen} {menuSpring} />

<!-- Bouton thème amélioré -->
<div class="fixed bottom-6 right-6 z-40">
  <button
    onclick={toggleDarkMode}
    class="group relative p-3 bg-white dark:bg-gray-800 shadow-xl rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
    aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
    title={darkMode ? 'Mode clair' : 'Mode sombre'}
  >
    <div class="relative w-6 h-6 overflow-hidden">
      <!-- Soleil -->
      <div class="absolute inset-0 transform transition-transform duration-500 {darkMode ? '-translate-y-6' : 'translate-y-0'}">
        <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4zm9-3a1 1 0 01-1-1v-2a1 1 0 112 0v2a1 1 0 01-1 1zM3 11a1 1 0 01-1 1H0a1 1 0 110-2h2a1 1 0 011 1zm17.657-5.657a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM6.343 17.657a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 111.414-1.414l1.414 1.414a1 1 0 010 1.414zM21 11a1 1 0 010 2h-2a1 1 0 010-2h2"/>
        </svg>
      </div>
      <!-- Lune -->
      <div class="absolute inset-0 transform transition-transform duration-500 {darkMode ? 'translate-y-0' : 'translate-y-6'}">
        <svg class="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.856 13.143c-.238.547-.547 1.059-.92 1.524a8 8 0 11-9.563-12.387 5 5 0 1010.483 10.863z"/>
        </svg>
      </div>
    </div>
    <span class="sr-only">{darkMode ? 'Mode clair' : 'Mode sombre'}</span>
  </button>
</div>

<main 
  class="min-h-screen bg-white dark:bg-darkBackground text-gray-900 dark:text-darkText transition-colors duration-300"
  id="main-content"
  aria-label="Contenu principal"
>
  {@render children()}
</main>

<Footer />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  
  .theme-transition-overlay {
    position: fixed;
    inset: 0;
    background: white;
    z-index: 9999;
    transition: opacity 0.3s ease;
  }
  
  :global(.dark) .theme-transition-overlay {
    background: #1a1a1a;
  }
  
  /* Améliorations responsive */
  @media (max-width: 768px) {
    :global(.fixed.bottom-6) {
      bottom: 1rem;
      right: 1rem;
    }
    
    :global(.fixed.bottom-6 button) {
      padding: 0.75rem;
    }
  }
  
  /* Prévention de flash avec thème sombre */
  :global(html.dark) {
    color-scheme: dark;
  }
  
  :global(html:not(.dark)) {
    color-scheme: light;
  }
</style>
<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import ConsentBanner from '$lib/ConsentBanner.svelte';

  let darkMode = $state(false);

  onMount(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      darkMode = true;
    }

    applyTheme();

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          darkMode = e.matches;
          applyTheme();
        }
      });
  });

  const applyTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    applyTheme();
  };

  let { children } = $props();
  import "../app.css";
</script>

<svelte:head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content={darkMode ? '#030712' : '#ffffff'}>

  <title>Gabriel | Developpeur Full-Stack</title>
  <meta name="description" content="Developpeur full-stack a Madagascar. Applications web modernes avec React, Svelte, Node.js.">
  <meta name="author" content="Gabriel">
  <meta name="robots" content="index, follow">

  <meta property="og:title" content="Gabriel | Developpeur Full-Stack">
  <meta property="og:description" content="Applications web modernes. React, Svelte, Node.js.">
  <meta property="og:url" content="https://myportfolio-pearl-eight-24.vercel.app">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_FR">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />

<!-- Theme toggle -->
<button
  onclick={toggleDarkMode}
  class="fixed bottom-6 left-6 z-40 p-2.5 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm"
  aria-label={darkMode ? 'Mode clair' : 'Mode sombre'}
>
  {#if darkMode}
    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  {:else}
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
    </svg>
  {/if}
</button>

<div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100" id="main-content">
  {@render children()}
</div>

<Footer />
<ConsentBanner />

<style>
  :global(html.dark) {
    color-scheme: dark;
  }
  :global(html:not(.dark)) {
    color-scheme: light;
  }
</style>

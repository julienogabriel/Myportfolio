<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { spring } from "svelte/motion"; // Importation de Svelte Motion
  let isOpen = false;
  const menuSpring = spring(0, { stiffness: 0.5, damping: 0.4 }); // Animation douce

  let darkMode = false;

  // Vérifier l'état du Dark Mode dans localStorage
  if (typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'true') {
    darkMode = true;
    document.documentElement.classList.add('dark');
  }

  // Fonction pour basculer entre le mode sombre et clair
  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  };
  let { children } = $props();
  import "../app.css";
</script>
<svelte:head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio de Kimberley, développeuse full-stack avec un intérêt pour l'UI/UX et l'optimisation backend.">
  <meta name="keywords" content="développeuse, portfolio, full-stack, Svelte, Tailwind CSS, animations, UI/UX, développement web">
  <meta name="author" content="Kimberley">
  
  <link rel="preload" href="/fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/styles/global.css" as="style">

  <title>GABRIEL - Portfolio</title>

  <meta property="og:title" content="Portfolio de GABRIEL">
  <meta property="og:description" content="Découvrez mes projets et compétences en développement full-stack, UI/UX et plus encore.">
  <meta property="og:image" content="/images/og-image.jpg">
  <meta property="og:url" content="https://www.ton-portfolio.com">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Portfolio de Kimberley">
  <meta name="twitter:description" content="Découvrez mes projets et compétences en développement full-stack, UI/UX et plus encore.">
  <meta name="twitter:image" content="/images/og-image.jpg">
</svelte:head>

<Navbar />
<div class="flex justify-end p-4">
  <button
    class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition"
    on:click={toggleDarkMode}
  >
    {#if darkMode}
      <span>Passer en Mode Clair</span>
    {:else}
      <span>Passer en Mode Sombre</span>
    {/if}
  </button>
</div>


<main class="min-h-screen bg-darkBackground dark:bg-darkBackground text-darkText dark:text-darkText">
  {@render children()}
</main>

<Footer />

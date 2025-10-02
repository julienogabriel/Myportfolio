<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import '../app.css';
  let isOpen = false;
  let opacity = tweened(0, { duration: 300, easing: cubicOut });

  function toggleMenu() {
    isOpen = !isOpen;
    opacity.set(isOpen ? 1 : 0);
  }
</script>

<nav class="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
  <h1 class="text-xl font-bold text-gray-800">Mon Portfolio</h1>
  
  <!-- Bouton menu burger -->
  <button on:click={toggleMenu} class="md:hidden text-2xl">
    ☰
  </button>

  <!-- Menu Desktop -->
  <ul class="hidden md:flex space-x-6">
    <li><a href="/" class="hover:text-red-500">Accueil</a></li>
    <li><a href="/about" class="hover:text-red-500">À propos</a></li>
    <li><a href="/projects" class="hover:text-red-500">Projets</a></li>
    <li><a href="/services" class="hover:text-red-500">Services</a></li>
    <li><a href="/contact" class="hover:text-red-500">Contact</a></li>
  </ul>

  <!-- Menu Mobile avec animation -->
  {#if isOpen}
    <ul transition:fade class="absolute top-14 left-0 w-full bg-white shadow-lg p-4 md:hidden">
      <li><a href="/" class="block py-2">Accueil</a></li>
      <li><a href="/about" class="block py-2">À propos</a></li>
      <li><a href="/projects" class="block py-2">Projets</a></li>
      <li><a href="/services" class="block py-2">Services</a></li>
      <li><a href="/contact" class="block py-2">Contact</a></li>
    </ul>
  {/if}
</nav>

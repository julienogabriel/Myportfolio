<script>
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';

  let isOpen = $state(false);
  let scrolled = $state(false);
  let currentPath = $state('/');

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'A propos' },
    { href: '/projects', label: 'Projets' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  function handleScroll() {
    scrolled = window.scrollY > 10;
  }

  function handleResize() {
    if (window.innerWidth >= 768 && isOpen) isOpen = false;
  }

  function navigate(href) {
    currentPath = href;
    isOpen = false;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    currentPath = (window.location.pathname.replace(base, '') || '/');
    handleScroll();
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  });
</script>

<nav
  class="fixed top-0 w-full z-50 transition-all duration-200 {scrolled
    ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60'
    : 'bg-white dark:bg-gray-950 border-b border-transparent'}"
>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center h-14">

      <!-- Logo -->
      <a href="{base}/" onclick={() => navigate('/')} class="flex items-center gap-2.5">
        <div class="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
          <span class="text-white dark:text-gray-900 font-bold text-sm">G</span>
        </div>
        <span class="font-semibold text-gray-900 dark:text-white hidden sm:block">Gabriel</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-1">
        {#each navItems as item}
          <li>
            <a
              href="{base}{item.href}"
              onclick={() => navigate(item.href)}
              class="px-3 py-2 rounded-md text-sm transition-colors {currentPath === item.href
                ? 'text-gray-900 dark:text-white font-medium'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>

      <!-- Mobile toggle -->
      <button
        onclick={() => isOpen = !isOpen}
        class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label={isOpen ? "Fermer" : "Menu"}
      >
        <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isOpen}
    <div class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div class="px-4 py-3 space-y-1">
        {#each navItems as item}
          <a
            href="{base}{item.href}"
            onclick={() => navigate(item.href)}
            class="block px-3 py-2.5 rounded-md text-sm transition-colors {currentPath === item.href
              ? 'text-gray-900 dark:text-white font-medium bg-gray-50 dark:bg-gray-900'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'}"
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<div class="h-14"></div>

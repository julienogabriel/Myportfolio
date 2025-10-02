<script>
  import { Motion } from "svelte-motion";

  let name = "Gabriel";
</script>

<Motion
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  
>
<main class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
  <h1 class="text-4xl font-bold">Bienvenue sur mon portfolio</h1>
  <p class="text-lg mt-4">Je suis <strong>{name}</strong>, développeur full-stack.</p>

  <Motion
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.2 }}
    
  >
  <button class="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600">
    Voir mes projets
  </button>
  </Motion>
</main>
</Motion>

<style lang="postcss">
  main {
    font-family: "Inter", sans-serif;
    text-align: center;
  }
   
  </style>
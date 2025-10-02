<script>
  import { Motion } from "svelte-motion";
</script>

<Motion
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  
>
<section class="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100 text-gray-900">
  <h1 class="text-4xl font-bold text-center">À propos de moi</h1>

  <Motion
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    
  >
  <div class="max-w-3xl text-lg mt-6 text-center bg-white shadow-lg rounded-lg p-8">
    <p>
      Je suis <strong>Gabriel</strong>, développeur full-stack passionnée par la création 
      d’applications modernes et performantes. J’ai une expertise en <strong>Svelte, React, Angular, Laravel, et Node.js</strong>.  
    </p>
    
    <p class="mt-4">
      J’aime concevoir des interfaces intuitives et optimiser les performances backend. Mon objectif est de 
      créer des solutions efficaces et esthétiques.
    </p>
  </div>
  </Motion>

  <Motion
    initial={{ opacity: 0, rotate: -10 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 0.6 }}
    
  >
  <div  >
    <img src="/gaby.jpg" alt="Gabriel" class="mt-6 w-40 h-40 rounded-full shadow-lg" />
  </div>
  </Motion>

  <Motion
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.2 }}
    
  >
    <a href="/projects" class="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600">Voir mes projets</a>
  </Motion>
</section>
</Motion>

<style>
  section {
    font-family: "Inter", sans-serif;
  }
</style>

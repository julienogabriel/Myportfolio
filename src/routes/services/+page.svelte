<script>
  import { Motion } from "svelte-motion";

  const services = [
    {
      title: "Développement Web",
      description: "Création de sites et applications web performants avec React, Svelte, Angular et Laravel.",
      icon: "🌐",
    },
    {
      title: "Développement Backend",
      description: "Conception d'API sécurisées et performantes avec Node.js, NestJS et Laravel.",
      icon: "⚙️",
    },
    {
      title: "UI/UX Design",
      description: "Design d'interfaces modernes et intuitives avec une approche centrée sur l'utilisateur.",
      icon: "🎨",
    },
    {
      title: "DevOps & CI/CD",
      description: "Mise en place d'automatisations pour le déploiement et la gestion des applications.",
      icon: "🚀",
    },
    {
      title: "Gestion de projet",
      description: "Planification et suivi des projets avec des méthodes agiles et outils collaboratifs.",
      icon: "📋",
    },
  ];
</script>

<Motion
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  
>
<section class="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100 text-gray-900">
  <h1 class="text-4xl font-bold text-center">Mes Services</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {#each services as service (service.title)}
      <Motion
        
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
      <div class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
        <span class="text-5xl">{service.icon}</span>
        <h2 class="text-xl font-semibold mt-4">{service.title}</h2>
        <p class="mt-2 text-gray-600">{service.description}</p>
      </div>
      </Motion>
    {/each}
  </div>

  <Motion    
    
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.2 }}
  >
  <a href="/contact" class="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600">
    Me Contacter</a>
   
  </Motion>
</section>
</Motion>

<style>
  section {
    font-family: "Inter", sans-serif;
  }
</style>

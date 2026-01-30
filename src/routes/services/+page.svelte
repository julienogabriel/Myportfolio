<script>
  import { Motion } from "svelte-motion";
  import { onMount } from 'svelte';

  let isVisible = false;
  let activeService = null;

  onMount(() => {
    setTimeout(() => isVisible = true, 100);
  });

  const services = [
    {
      title: "Développement Web",
      description: "Création de sites et applications web performants avec React, Svelte, Angular et Laravel.",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      features: ["Sites responsive", "Applications SPA", "Performance optimisée"],
      stats: "50+ projets"
    },
    {
      title: "Développement Backend",
      description: "Conception d'API sécurisées et performantes avec Node.js, NestJS et Laravel.",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900",
      features: ["APIs RESTful", "Microservices", "Base de données"],
      stats: "100+ APIs"
    },
    {
      title: "UI/UX Design",
      description: "Design d'interfaces modernes et intuitives avec une approche centrée sur l'utilisateur.",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      iconBg: "bg-pink-100 dark:bg-pink-900",
      features: ["Prototypage", "Design systems", "Tests utilisateurs"],
      stats: "30+ designs"
    },
    {
      title: "DevOps & CI/CD",
      description: "Mise en place d'automatisations pour le déploiement et la gestion des applications.",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      iconBg: "bg-orange-100 dark:bg-orange-900",
      features: ["Docker", "CI/CD pipelines", "Cloud deployment"],
      stats: "40+ déploiements"
    },
    {
      title: "Gestion de projet",
      description: "Planification et suivi des projets avec des méthodes agiles et outils collaboratifs.",
      icon: "📋",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900",
      features: ["Méthode Agile", "Scrum/Kanban", "Communication"],
      stats: "20+ projets"
    },
    {
      title: "Consulting IT",
      description: "Conseil en architecture logicielle et choix de technologies pour vos projets.",
      icon: "💡",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      iconBg: "bg-yellow-100 dark:bg-yellow-900",
      features: ["Audit technique", "Architecture", "Stratégie tech"],
      stats: "15+ audits"
    },
    {
      title: "Services de Traduction",
      description: "Traduction professionnelle de documents, sites web et applications. Support multilingue : Français, Anglais, Malgache.",
      icon: "🌍",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      iconBg: "bg-teal-100 dark:bg-teal-900",
      features: ["FR ↔ EN ↔ MG", "Relecture qualité", "Livraison rapide"],
      stats: "200+ traductions"
    },
    {
      title: "Mise en page & Documentation",
      description: "Rédaction, mise en page professionnelle et structuration de documents. CV, lettres de motivation, manuels techniques.",
      icon: "📄",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      features: ["Documents professionnels", "Mise en page moderne", "Export PDF"],
      stats: "150+ documents"
    },
  ];

  const processSteps = [
    { number: "01", title: "Analyse", desc: "Comprendre vos besoins", icon: "🔍" },
    { number: "02", title: "Planification", desc: "Stratégie et roadmap", icon: "📝" },
    { number: "03", title: "Développement", desc: "Création de la solution", icon: "⚡" },
    { number: "04", title: "Livraison", desc: "Déploiement et support", icon: "✅" }
  ];
</script>

<section class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div class="max-w-7xl mx-auto">
    
    <!-- En-tête avec animation -->
    <Motion
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
            💼 Services Professionnels
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
          Mes Services
        </h1>
        
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Des solutions complètes et personnalisées pour transformer vos idées en réalité digitale. 
          <span class="font-semibold text-blue-600 dark:text-blue-400">Excellence technique</span> et 
          <span class="font-semibold text-purple-600 dark:text-purple-400">approche créative</span>.
        </p>

        <!-- Statistiques rapides -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Années d'expérience</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">100+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Projets réalisés</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold text-pink-600 dark:text-pink-400">50+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Clients satisfaits</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Taux de satisfaction</div>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Grille des services -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {#each services as service, i (service.title)}
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
        >
          <div 
            class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 {service.borderColor} cursor-pointer"
            on:mouseenter={() => activeService = i}
            on:mouseleave={() => activeService = null}
          >
            <!-- Gradient de fond animé -->
            <div class="absolute inset-0 bg-gradient-to-br {service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <!-- Badge avec stats -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-md">
              {service.stats}
            </div>

            <div class="relative p-8">
              <!-- Icône avec animation -->
              <div class="flex items-center justify-center w-20 h-20 {service.iconBg} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <span class="text-4xl">{service.icon}</span>
              </div>

              <!-- Titre -->
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r {service.color} transition-all duration-300">
                {service.title}
              </h2>

              <!-- Description -->
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <!-- Liste des fonctionnalités -->
              <div class="space-y-2 mb-6">
                {#each service.features as feature}
                  <div class="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span class="mr-2 text-green-500">✓</span>
                    {feature}
                  </div>
                {/each}
              </div>

              <!-- Bouton d'action -->
              <button class="w-full py-3 bg-gradient-to-r {service.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl">
                En savoir plus →
              </button>
            </div>

            <!-- Effet de brillance -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div class="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </div>
          </div>
        </Motion>
      {/each}
    </div>

    <!-- Processus de travail -->
    <Motion
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl mb-20">
        <h2 class="text-4xl font-bold text-white text-center mb-4">
          Mon Processus de Travail
        </h2>
        <p class="text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Une méthodologie éprouvée pour garantir la réussite de vos projets
        </p>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          {#each processSteps as step, i}
            <Motion
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
              whileHover={{ scale: 1.05 }}
            >
              <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <!-- Numéro -->
                <div class="text-5xl font-bold text-white/30 mb-2">{step.number}</div>
                
                <!-- Icône -->
                <div class="text-4xl mb-3">{step.icon}</div>
                
                <!-- Titre et description -->
                <h3 class="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p class="text-blue-100 text-sm">{step.desc}</p>

                <!-- Ligne de connexion (sauf pour le dernier) -->
                {#if i < processSteps.length - 1}
                  <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30"></div>
                {/if}
              </div>
            </Motion>
          {/each}
        </div>
      </div>
    </Motion>

    <!-- Call to Action -->
    <Motion
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div class="text-center bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
        <div class="text-6xl mb-6">🚀</div>
        <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Prêt à lancer votre projet ?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discutons de vos besoins et créons ensemble une solution sur mesure qui dépassera vos attentes.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/contact" class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center">
              Me Contacter
              <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Motion>
          
          <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button class="px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg">
              Voir mon portfolio
            </button>
          </Motion>
        </div>

        <!-- Garanties -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <span class="text-2xl">⚡</span>
            <span class="font-semibold">Livraison rapide</span>
          </div>
          <div class="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <span class="text-2xl">💎</span>
            <span class="font-semibold">Qualité premium</span>
          </div>
          <div class="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <span class="text-2xl">🤝</span>
            <span class="font-semibold">Support continu</span>
          </div>
        </div>
      </div>
    </Motion>

  </div>
</section>

<style>
  section {
    font-family: "Inter", sans-serif;
  }
</style>
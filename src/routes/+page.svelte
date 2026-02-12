<script>
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  import { base } from '$app/paths';  // ← AJOUT IMPORTANT

  let name = "Gabriel";
  let typedText = "";
  let currentRoleIndex = 0;
  let isDeleting = false;
  let typeSpeed = 150;
  
  const roles = [
    "Développeur Full-Stack",
    "Expert UI/UX",
    "Architecte Cloud",
    "Passionné de Tech"
  ];

  // Effet de machine à écrire
  const typeWriter = () => {
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting) {
      typedText = currentRole.substring(0, typedText.length + 1);
      
      if (typedText === currentRole) {
        setTimeout(() => isDeleting = true, 2000);
      }
    } else {
      typedText = currentRole.substring(0, typedText.length - 1);
      
      if (typedText === "") {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
    }
    
    setTimeout(typeWriter, isDeleting ? 50 : typeSpeed);
  };

  onMount(() => {
    typeWriter();
  });

  // Statistiques
  const stats = [
    { number: "5+", label: "Années d'expérience", icon: "📅" },
    { number: "100+", label: "Projets réalisés", icon: "🚀" },
    { number: "50+", label: "Clients satisfaits", icon: "😊" },
    { number: "10+", label: "Technologies maîtrisées", icon: "💻" }
  ];

  // Technologies
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Svelte", icon: "🔥", color: "from-orange-400 to-red-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-400 to-indigo-500" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-amber-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" }
  ];

  // Scroll vers les projets
  const scrollToProjects = () => {
    window.location.href = `${base}/projects`;
  };
</script>

<main class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 text-gray-900 dark:text-gray-100">
  
  <!-- Particules flottantes en arrière-plan -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    {#each Array(20) as _, i}
      <Motion
        initial={{ opacity: 0, y: Math.random() * 1000 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          y: [Math.random() * 1000, -100],
          x: [Math.random() * 100 - 50, Math.random() * 100 - 50]
        }}
        transition={{ 
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          delay: Math.random() * 5
        }}
      >
        <div 
          class="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-sm"
          style="left: {Math.random() * 100}%; top: {Math.random() * 100}%"
        ></div>
      </Motion>
    {/each}
  </div>

  <!-- Contenu principal -->
  <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
    
    <!-- Badge de bienvenue -->
    <Motion
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span class="text-sm font-medium">Disponible pour de nouveaux projets</span>
      </div>
    </Motion>

    <!-- Titre principal avec animation -->
    <Motion
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
        <span class="block text-gray-900 dark:text-white mb-2">
          Bonjour, je suis
        </span>
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">
          {name}
        </span>
      </h1>
    </Motion>

    <!-- Sous-titre avec effet de machine à écrire -->
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div class="text-2xl md:text-3xl font-semibold mb-8 h-12 flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-300">{typedText}</span>
        <span class="inline-block w-0.5 h-8 bg-blue-600 dark:bg-blue-400 ml-1 animate-blink"></span>
      </div>
    </Motion>

    <!-- Description -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        Je crée des <span class="font-semibold text-blue-600 dark:text-blue-400">expériences digitales exceptionnelles</span> 
        en combinant design moderne, code performant et technologies de pointe. 
        Transformons ensemble vos idées en <span class="font-semibold text-purple-600 dark:text-purple-400">réalité numérique</span>.
      </p>
    </Motion>

    <!-- Boutons d'action -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <Motion
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <button 
            on:click={scrollToProjects}
            class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold text-lg flex items-center gap-2"
          >
            <span>Voir mes projets</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </Motion>

        <Motion
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <a 
            href="{base}/contact"
            class="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg border-2 border-gray-200 dark:border-gray-700"
          >
            Me contacter
          </a>
        </Motion>
      </div>
    </Motion>

    <!-- Statistiques -->
    <Motion
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {#each stats as stat, i}
          <Motion
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div class="text-3xl mb-2">{stat.icon}</div>
              <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-1">
                {stat.number}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          </Motion>
        {/each}
      </div>
    </Motion>

    <!-- Technologies -->
    <Motion
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div class="mb-8">
        <p class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-6">
          Technologies que je maîtrise
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          {#each technologies as tech, i}
            <Motion
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 + (i * 0.1) }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div class="group relative px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">{tech.icon}</span>
                  <span class="font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                </div>
                <!-- Effet de gradient au hover -->
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r {tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </Motion>
          {/each}
        </div>
      </div>
    </Motion>

    <!-- Scroll indicator -->
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div class="mt-16">
        <Motion
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div class="inline-flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <span class="text-sm font-medium">Défiler vers le bas</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </Motion>
      </div>
    </Motion>

  </div>

  <!-- Formes géométriques décoratives -->
  <div class="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
  <div class="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-float-delay"></div>
  <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400/10 rounded-full blur-xl animate-float-slow"></div>

</main>

<style lang="postcss">
  main {
    font-family: "Inter", sans-serif;
  }

  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .animate-blink {
    animation: blink 1s step-end infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }

  @keyframes float-delay {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-30px) translateX(-15px);
    }
  }

  @keyframes float-slow {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-15px) translateX(20px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delay {
    animation: float-delay 8s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
  }
</style>
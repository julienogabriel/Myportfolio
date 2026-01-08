<script>
  import { Motion } from "svelte-motion";
  
  const skills = [
    { name: 'Svelte', level: 95, icon: '⚡', color: 'from-orange-500 to-red-500' },
    { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Angular', level: 85, icon: '🅰️', color: 'from-red-600 to-pink-600' },
    { name: 'Laravel', level: 88, icon: '🔺', color: 'from-red-500 to-orange-500' },
    { name: 'Node.js', level: 92, icon: '🟢', color: 'from-green-600 to-emerald-600' }
  ];
  
  const stats = [
    { number: '50+', label: 'Projets réalisés', icon: '💼' },
    { number: '5+', label: 'Années d\'expérience', icon: '🚀' },
    { number: '30+', label: 'Clients satisfaits', icon: '😊' },
    { number: '100%', label: 'Engagement', icon: '⚡' }
  ];
  
  const values = [
    { title: 'Innovation', description: 'Toujours à la pointe des nouvelles technologies', icon: '💡' },
    { title: 'Qualité', description: 'Code propre et performant', icon: '✨' },
    { title: 'Collaboration', description: 'Travail d\'équipe et communication', icon: '🤝' },
    { title: 'Créativité', description: 'Solutions originales et élégantes', icon: '🎨' }
  ];
</script>

<Motion
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <section class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-6">
    <div class="max-w-7xl mx-auto">
      
      <!-- Hero Section -->
      <Motion
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div class="text-center mb-16">
          <Motion
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/gaby.jpg" 
              alt="Gabriel" 
              class="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl mx-auto mb-6 ring-4 ring-blue-500 ring-offset-4 object-cover"
            />
          </Motion>
          
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Gabriel
          </h1>
          <p class="text-2xl md:text-3xl text-gray-700 font-semibold mb-2">
            Développeur Full-Stack
          </p>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionné par la création d'applications modernes et performantes
          </p>
        </div>
      </Motion>

      <!-- Stats Grid -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {#each stats as stat, i}
            <Motion
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div class="text-4xl mb-2">{stat.icon}</div>
                <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div class="text-sm text-gray-600">{stat.label}</div>
              </div>
            </Motion>
          {/each}
        </div>
      </Motion>

      <!-- About Content -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Je suis <strong class="text-blue-600">Gabriel</strong>, développeur full-stack avec une passion 
              pour la création d'applications web modernes et performantes. Mon expertise couvre un large 
              éventail de technologies, me permettant de concevoir des solutions complètes de A à Z.
            </p>
            <p>
              Avec une maîtrise approfondie de <strong class="text-purple-600">Svelte, React, Angular, 
              Laravel et Node.js</strong>, je transforme des idées complexes en applications intuitives 
              et élégantes. Mon approche combine innovation technique et design centré sur l'utilisateur.
            </p>
            <p>
              Mon objectif est de créer des expériences digitales qui non seulement répondent aux besoins 
              fonctionnels, mais qui inspirent et engagent les utilisateurs. Chaque projet est une opportunité 
              d'apprendre, d'innover et de repousser les limites du possible.
            </p>
          </div>
        </div>
      </Motion>

      <!-- Skills Section -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Mes compétences
          </h2>
          <div class="space-y-6">
            {#each skills as skill, i}
              <Motion
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              >
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <span class="text-3xl">{skill.icon}</span>
                      <span class="text-xl font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span class="text-2xl font-bold bg-gradient-to-r {skill.color} bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <Motion
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                    >
                      <div class="h-full bg-gradient-to-r {skill.color} rounded-full shadow-lg"></div>
                    </Motion>
                  </div>
                </div>
              </Motion>
            {/each}
          </div>
        </div>
      </Motion>

      <!-- Values Section -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Mes valeurs
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            {#each values as value, i}
              <Motion
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              >
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div class="text-5xl mb-4">{value.icon}</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p class="text-gray-600">{value.description}</p>
                </div>
              </Motion>
            {/each}
          </div>
        </div>
      </Motion>

      <!-- CTA Section -->
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div class="text-center">
          <Motion
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/projects" 
              class="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span>Découvrir mes projets</span>
              <span class="text-2xl">→</span>
            </a>
          </Motion>
          <p class="mt-4 text-gray-600">
            Ou <a href="/contact" class="text-blue-600 hover:text-purple-600 font-semibold underline">contactez-moi</a> directement
          </p>
        </div>
      </Motion>

    </div>
  </section>
</Motion>

<style>
  section {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
</style>
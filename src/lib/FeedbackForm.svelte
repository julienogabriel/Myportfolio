<script lang="ts">
  import { base } from '$app/paths';

  export interface FeedbackData {
    rating: number;
    comment: string;
    email?: string;
  }

  export interface SurveyData {
    satisfaction: number;
    features: string[];
    improvements: string;
    email?: string;
  }

  let rating = $state(0);
  let comment = $state('');
  let email = $state('');
  let isSubmitting = $state(false);
  let message = $state('');

  // OPTION 1: Avec Formspree - Décommentez cette fonction si vous utilisez Formspree
  
  async function submitFeedback() {
    if (rating === 0) {
      message = '⚠️ Veuillez sélectionner une note';
      return;
    }
    
    if (comment.trim().length < 3) {
      message = '⚠️ Votre commentaire doit contenir au moins 3 caractères';
      return;
    }

    isSubmitting = true;
    message = '';

    try {
      // Remplacez 'VOTRE_FORM_ID' par votre vrai ID Formspree
      // Exemple: 'mwkajnpg' ou créez un nouveau formulaire sur https://formspree.io
      const formData = new FormData();
      formData.append('rating', `${rating}/5 étoiles`);
      formData.append('comment', comment);
      formData.append('email', email || 'Anonyme');
      formData.append('_subject', `Nouveau feedback - Note: ${rating}/5`);
      
      const response = await fetch('https://formspree.io/f/mnjbpokn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        message = '✓ Merci pour votre feedback !';
        // Réinitialiser le formulaire après 2 secondes
        setTimeout(() => {
          rating = 0;
          comment = '';
          email = '';
          message = '';
        }, 2000);
      } else {
        const data = await response.json();
        if (data.errors) {
          message = '✗ Erreur: ' + data.errors.map((e: any) => e.message).join(', ');
        } else {
          message = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
        }
      }
    } catch (e) {
      message = '✗ Erreur de connexion. Vérifiez votre connexion internet.';
      console.error('Feedback error:', e);
    } finally {
      isSubmitting = false;
    }
  }
  

  
</script>

<div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 p-8 md:p-10 border border-gray-100 dark:border-gray-700/50">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
    Votre Feedback
  </h2>

  <div class="mb-8">
    <span class="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4" id="rating-label">
      Notation *
    </span>
    <div class="flex gap-4 justify-center md:justify-start" role="group" aria-labelledby="rating-label">
      {#each [1, 2, 3, 4, 5] as star}
        <button
          type="button"
          onclick={() => (rating = star)}
          class="text-5xl transform transition-all hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded {rating >= star ? 'text-yellow-400 drop-shadow-lg' : 'text-gray-300 dark:text-gray-600'}"
          aria-label={`Note ${star} sur 5`}
        >
          ★
        </button>
      {/each}
    </div>
    {#if rating > 0}
      <p class="text-center md:text-left mt-2 text-sm text-gray-600 dark:text-gray-400">
        Vous avez sélectionné: {rating}/5 {rating >= 4 ? '😊' : rating >= 3 ? '😐' : '😞'}
      </p>
    {/if}
  </div>

  <div class="mb-6">
    <label for="feedback-comment" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Votre avis *
    </label>
    <textarea
      id="feedback-comment"
      bind:value={comment}
      placeholder="Partagez votre expérience, vos suggestions d'amélioration..."
      class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/80 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
      rows="5"
      required
    ></textarea>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
      {comment.length} caractères (minimum 3)
    </p>
  </div>

  <div class="mb-6">
    <label for="feedback-email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Email (optionnel)
    </label>
    <input
      id="feedback-email"
      type="email"
      bind:value={email}
      placeholder="votre.email@exemple.com"
      class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/80 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
    />
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Si vous souhaitez une réponse à votre feedback
    </p>
  </div>

  {#if message}
    <div
      class={`mb-4 p-4 rounded-lg font-semibold animate-in fade-in slide-in-from-top-2 duration-300 ${message.includes('✓')
        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-2 border-green-300 dark:border-green-700'
        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-2 border-red-300 dark:border-red-700'}`}
    >
      {message}
    </div>
  {/if}

  <button
    type="button"
    onclick={submitFeedback}
    disabled={isSubmitting || rating === 0 || comment.trim().length < 3}
    class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
  >
    {isSubmitting ? '📤 Envoi en cours...' : '📨 Envoyer mon feedback'}
  </button>

  <div class="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    <a href="{base}/contact" class="hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors">
      Besoin d'aide ?
    </a>
    <span>•</span>
    <a href="{base}/" class="hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors">
      Retour à l'accueil
    </a>
  </div>
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in-from-top {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }

  .animate-in {
    animation: fade-in 0.3s ease-out, slide-in-from-top 0.3s ease-out;
  }
</style>
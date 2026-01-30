<script lang="ts">
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

  async function submitFeedback() {
    if (rating === 0 || comment.trim().length < 3) {
      message = 'Erreur: complétez le formulaire';
      return;
    }

    isSubmitting = true;
    message = '';

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Feedback',
          email: email || 'noreply@gabriel.dev',
          subject: `Feedback - ${rating}/5`,
          message: comment
        })
      });

      if (response.ok) {
        message = '✓ Merci pour votre feedback!';
        rating = 0;
        comment = '';
        email = '';
      } else {
        message = '✗ Erreur lors de l\'envoi';
      }
    } catch (e) {
      message = '✗ Erreur réseau';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Votre Feedback</h2>

  <div class="mb-8">
    <label class="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Notation</label>
    <div class="flex gap-4">
      {#each [1, 2, 3, 4, 5] as star}
        <button
          onclick={() => (rating = star)}
          class="text-4xl transform transition-transform hover:scale-125 {rating >= star ? 'text-yellow-400' : 'text-gray-300'}"
        >
          ★
        </button>
      {/each}
    </div>
  </div>

  <div class="mb-6">
    <textarea
      bind:value={comment}
      placeholder="Partagez votre avis..."
      class="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="5"
    ></textarea>
  </div>

  <div class="mb-6">
    <input
      type="email"
      bind:value={email}
      placeholder="Email (optionnel)"
      class="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {#if message}
    <div
      class={`mb-4 p-4 rounded-lg font-semibold {message.includes('✓')
        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100'
        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100'}`}
    >
      {message}
    </div>
  {/if}

  <button
    onclick={submitFeedback}
    disabled={isSubmitting}
    class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
  >
    {isSubmitting ? 'Envoi...' : 'Envoyer'}
  </button>
</div>

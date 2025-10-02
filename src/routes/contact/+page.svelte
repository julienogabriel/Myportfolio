<script>
  import { onMount } from 'svelte';
  let name = '';
  let email = '';
  let message = '';
  let formStatus = ''; // Pour afficher un message après l'envoi

  // Fonction de validation
  const validateForm = () => {
    if (!name || !email || !message) {
      formStatus = 'Tous les champs sont requis.';
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      formStatus = 'Veuillez entrer un email valide.';
      return false;
    }
    return true;
  };

  // Envoi du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    formStatus = ''; // Réinitialise le message de statut

    // Validation du formulaire
    if (!validateForm()) {
      return;
    }

    // Envoi via Formspree
    const response = await fetch('https://formspree.io/f/mwkajnpg', {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      formStatus = 'Merci ! Votre message a été envoyé.';
    } else {
      formStatus = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
    }

    // Réinitialiser le formulaire après l'envoi
    name = '';
    email = '';
    message = '';
  };
</script>

<section class="p-10">
  <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Contactez-moi</h2>
  <form on:submit={handleSubmit} class="mt-6 space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-black">Nom</label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={name}
        class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        required
      />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-black">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={email}
        class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        required
      />
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-black">Message</label>
      <textarea
        id="message"
        name="message"
        bind:value={message}
        class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        rows="4"
        required
      ></textarea>
    </div>

    {#if formStatus}
      <div class="text-sm mt-2 text-gray-600 dark:text-gray-300">{formStatus}</div>
    {/if}

    <button
      type="submit"
      class="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Envoyer
    </button>
  </form>
</section>

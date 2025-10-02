import nodemailer from 'nodemailer';
import type { RequestHandler } from '@sveltejs/kit';

// Crée un transporteur pour Nodemailer (en utilisant un service comme Gmail ou Mailgun)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilise Gmail, ou remplace par un autre service
  auth: {
    user: 'julienogabriel4@gmail.com',
    pass: 'Julieno@22#',
  },
});

export const post: RequestHandler = async ({ request }) => {
  const { name, email, message } = await request.json();

  try {
    const mailOptions = {
      from: email,
      to: 'julienogabriel4@gmail.com', // Ton email de réception
      subject: `Message de ${name} via le portfolio`,
      text: message,
    };

    // Envoie de l'email
    await transporter.sendMail(mailOptions);

    return {
      status: 200,
      body: { message: 'Message envoyé avec succès !' },
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      status: 500,
      body: { message: 'Erreur lors de l\'envoi du message.' },
    };
  }
};

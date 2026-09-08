import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import {
  COOKIE_NAME,
  SESSION_TTL_MS,
  createSessionToken,
  verifyPassword,
  isRateLimited,
  recordFailedAttempt,
  clearAttempts
} from '$lib/server/auth';

export const load: PageServerLoad = async ({ locals }) => {
  return { isAdmin: locals.isAdmin };
};

export const actions: Actions = {
  login: async ({ request, cookies, getClientAddress }) => {
    const passwordHash = env.ADMIN_PASSWORD_HASH?.trim();
    const sessionSecret = env.SESSION_SECRET?.trim();
    if (!passwordHash || !sessionSecret) {
      return fail(500, { error: "Authentification non configurée sur le serveur." });
    }

    const ip = getClientAddress();
    if (isRateLimited(ip)) {
      return fail(429, { error: 'Trop de tentatives. Réessayez plus tard.' });
    }

    const data = await request.formData();
    const password = String(data.get('password') ?? '');

    if (!password || !verifyPassword(password, passwordHash)) {
      recordFailedAttempt(ip);
      return fail(401, { error: 'Mot de passe incorrect' });
    }

    clearAttempts(ip);
    cookies.set(COOKIE_NAME, createSessionToken(sessionSecret), {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: SESSION_TTL_MS / 1000
    });

    return { success: true };
  },

  logout: async ({ cookies }) => {
    cookies.delete(COOKIE_NAME, { path: '/' });
    throw redirect(303, '/admin');
  }
};

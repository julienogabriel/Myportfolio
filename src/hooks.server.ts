import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { COOKIE_NAME, verifySessionToken } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get(COOKIE_NAME);
  const secret = env.SESSION_SECRET?.trim();
  event.locals.isAdmin = Boolean(secret) && verifySessionToken(token, secret!);
  return resolve(event);
};

import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { COOKIE_NAME, verifySessionToken } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get(COOKIE_NAME);
  event.locals.isAdmin = Boolean(env.SESSION_SECRET) && verifySessionToken(token, env.SESSION_SECRET!);
  return resolve(event);
};

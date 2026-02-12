import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/Myportfolio';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',  // Changé de 'index.html' à '404.html'
      precompress: false,
      strict: true
    }),
    paths: {
      base
    },
    prerender: {
      entries: ['*']
    }
  },
  preprocess: sveltePreprocess()
};

export default config;
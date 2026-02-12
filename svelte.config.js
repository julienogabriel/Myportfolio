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
      precompress: false,
      strict: true
    }),
    paths: {
      base
    },
    prerender: {
      entries: ['*']  // ← AJOUTEZ CECI pour pré-rendre toutes les pages
    }
  },
  preprocess: sveltePreprocess()
};

export default config;
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/Myportfolio'; // ⚠️ Remplace NOM_DU_REPO par le nom de ton dépôt GitHub

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    paths: {
      base
    }
  },
  preprocess: vitePreprocess()
};

export default config;

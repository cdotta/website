// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for sitemap, canonical & OG URLs.
  site: 'https://crisislabs.dev',

  adapter: node({
    mode: 'standalone'
  }),

  // /retro is a hidden experiment; keep it out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/retro') })],

  vite: {
    plugins: [tailwindcss()]
  }
});

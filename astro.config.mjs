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

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});

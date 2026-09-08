// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Written by scripts/build-content.mjs on predev/prebuild if it is missing.
import { site } from './content/site.ts';

// https://astro.build/config
export default defineConfig({
  // Used for sitemap, canonical & OG URLs.
  site: site.url,

  adapter: node({
    mode: 'standalone'
  }),

  // /retro is a hidden experiment; keep it out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/retro') })],

  vite: {
    plugins: [tailwindcss()]
  }
});

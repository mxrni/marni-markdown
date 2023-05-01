import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  site: 'https://marni-markdown.netlify.app',
  integrations: [sitemap()]
});
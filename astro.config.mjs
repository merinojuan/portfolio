// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  server: { port: 4322 },
  site: 'https://merinojuan.github.io',
  base: '/portfolio',
});
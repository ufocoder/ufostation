import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import serviceWorker from "astrojs-service-worker";
import { defineConfig } from 'astro/config';
import { SITE_URL, SITE_BASE } from './src/config';
import { remarkReadingTime } from './src/lib/remark-reading-time';

const swIntegrationOptions = {
  workbox: {
    navigateFallback: 'ru/fallback'
  }
};

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  integrations: [mdx(), sitemap(), serviceWorker(swIntegrationOptions), compress()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
});

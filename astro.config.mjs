import { defineConfig } from 'astro/config';
import { siteConfig } from './site.config.mjs';

export default defineConfig({
  site: siteConfig.url,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

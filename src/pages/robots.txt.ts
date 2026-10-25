import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.url}/sitemap.xml\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../../site.config.mjs';
import { slugify } from '../lib/site';
const escapeXml = (s: string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
const dateString = (d: Date) => d.toISOString().slice(0,10);
export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', ({data}) => !data.draft && !data.noindex);
  const urls = new Map<string,string | undefined>();
  for (const path of ['/', '/topics/', '/about/', '/contact/', '/editorial-policy/', '/sources/', '/privacy/', '/terms/', '/disclaimer/', '/affiliate-disclosure/', '/tenancy-rules/us/', '/tenancy-rules/uk/']) urls.set(path,undefined);
  const categoryDates = new Map<string,Date>();
  for (const a of articles) {
    const d = a.data.updatedDate || a.data.pubDate;
    urls.set('/articles/'+a.id+'/',dateString(d));
    const prior = categoryDates.get(a.data.category);
    if (!prior || d > prior) categoryDates.set(a.data.category,d);
  }
  for (const [category,date] of categoryDates) urls.set('/category/'+slugify(category)+'/',dateString(date));
  const body=[...urls.entries()].map(([path,lastmod])=>`  <url><loc>${escapeXml(new URL(path,siteConfig.url).toString())}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
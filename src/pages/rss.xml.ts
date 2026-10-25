import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../../site.config.mjs';
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
export const GET: APIRoute = async () => {
 const articles=(await getCollection('articles',({data})=>!data.draft&&!data.noindex)).sort((a,b)=>b.data.pubDate.valueOf()-a.data.pubDate.valueOf()).slice(0,30);
 const items=articles.map(a=>{const url=new URL('/articles/'+a.id+'/',siteConfig.url).toString();return `<item><title>${esc(a.data.title)}</title><link>${url}</link><guid>${url}</guid><description>${esc(a.data.description)}</description><pubDate>${a.data.pubDate.toUTCString()}</pubDate><category>${esc(a.data.category)}</category></item>`;}).join('\n');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(siteConfig.name)}</title><link>${siteConfig.url}/</link><description>${esc(siteConfig.description)}</description><language>en</language>${items}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
};
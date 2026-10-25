# RentSmart Home

**Purpose:** practical, renter-friendly home upgrades and housing checklists for renters in the US, UK, Canada and Australia. Coverage includes no-drill storage, removable finishes, lighting, small-space organisation, move-in and move-out documentation, and location-aware tenancy guidance.

## Tech stack and hosting
- Astro static site, GitHub source repository, **Cloudflare Pages** deployment (not Workers).
- Node.js 22; build command: `npm run build`; output directory: `dist`; root directory: repository root.
- Articles: `src/content/articles/*.md`.
- Branding/IDs/domain: `site.config.mjs`.
- Canonical is set to the deployed Pages hostname `https://rentsmartideas.pages.dev`.

## Run locally
```powershell
npm install
npm run dev
npm run build
npm run preview
```

## Article standards
The initial library contains 15 renter-specific guides. The project brief aims for around 1,500–2,000 words per substantial article, but word count is not a substitute for original value. Before considering articles final, review every product and legal claim, add real sources close to important claims, and supply original photos/measurements or clearly label where firsthand evidence has not yet been collected.

Each upgrade guide should, where relevant, include:
- a reversibility score from 1 (hard to reverse) to 5 (usually easy to remove);
- clearly labelled cost ranges with currency, location and assumptions;
- a model-specific weight/compatibility chart where needed;
- a copy-and-paste landlord template;
- surface, heat, moisture, lease and safety caveats;
- mistakes to avoid and FAQs;
- a first-hand evidence prompt. Do not describe a test as completed if it has not happened.

Manufacturer ratings are model-specific. Never transfer a hook's weight limit to a shelf or different attachment; never guarantee removable wallpaper, adhesives or floor coverings will leave every surface untouched. Keep US state/local law separate from England guidance. Scotland, Wales and Northern Ireland have different housing rules.

## Included pages and technical SEO
- Homepage, About, Contact, search, topic and category pages, article pages and a custom 404 page.
- Privacy policy, Terms, Disclaimer, Editorial Policy, Sources & Corrections, Affiliate Disclosure.
- Separate US renter rules and England renter rules pages.
- Self-referencing canonical URLs in the shared layout.
- Automatic XML sitemap with `lastmod`, excluding draft/noindex article URLs; linked in `robots.txt`.
- RSS feed, Open Graph/social preview, branded favicon, WebSite, Organization, Person, Article and BreadcrumbList structured data; FAQPage structured data for article frontmatter FAQs.
- Responsive layout and a client-side article search.
- GA4 and AdSense scripts stay disabled while the corresponding IDs remain blank.

## Before publishing / applying for ads

### Domain, Search Console and analytics
- [x] Confirm deployed Pages hostname: `https://rentsmartideas.pages.dev/`.
- [ ] Add the domain to Google Search Console as a **Domain property** and verify by DNS TXT record at the domain's DNS provider. This step requires access to the domain's DNS settings.
- [ ] Create one GA4 property and a single web data stream specifically for RentSmart Home; put its real `G-...` ID into `site.config.mjs`.
- [ ] Link the GA4 property and Search Console property if available for the account, then verify measurements with real visits and the GA realtime report.
- [ ] If using HTML-tag Search Console verification as a backup, add the actual verification token to `googleSiteVerification`; the Domain property still needs DNS verification.
- [ ] Inspect the homepage and the best article URLs in URL Inspection. Review **Pages → Not indexed** weekly after launch.
- [ ] Submit `https://YOUR-CANONICAL-DOMAIN/sitemap.xml` in Search Console; verify the sitemap responds as XML and uses the same canonical host as the site.
- [ ] Recheck canonical URLs, redirect behavior, robots.txt, sitemap `lastmod`, 404, internal links, schema and mobile layout after deployment.

### Trust and privacy
- [ ] Replace/add a monitored contact email in `site.config.mjs`; verify it works before publishing.
- [ ] Verify that the author name and bio are accurate and do not imply qualifications or testing that did not occur.
- [ ] Review every legal/policy page against the real business, hosting provider, analytics, advertising and affiliate arrangements. These pages are a starting point, not legal advice.
- [ ] If serving UK/EEA traffic while using advertising or non-essential measurement, configure a suitable **Google-certified Consent Management Platform (CMP)** and current consent settings before enabling those scripts. A custom banner alone is not a substitute.
- [ ] Review privacy requirements for any connected services, affiliate programmes, cookies, contact forms or email tools added later.

### Monetisation
- [ ] Wait until the site has substantial, useful, original articles and all required trust pages are ready before applying for AdSense. The target is roughly 20–30 strong articles, not a guaranteed approval threshold.
- [ ] Add the domain under the existing AdSense account's Sites section; each site is reviewed individually.
- [ ] Add `ads.txt` only after approval and when Google supplies the correct publisher record.
- [ ] Do **not** use Adsterra popunders or social bars on a site intended for AdSense approval. If a separate site is rejected and Adsterra is used there, prefer less intrusive banner/native formats and recheck current network policy.
- [ ] Apply to Amazon Associates, Impact or ShareASale where relevant, follow their current rules, and disclose active affiliate relationships clearly near links and recommendations.

## Keyword and content process
Before expanding a cluster, validate terms in Google autocomplete, People Also Ask, Search Console once data arrives, and an SEO tool of choice. Prefer queries whose current results have a clear gap that the site can address. Include US/UK/Canada/Australia terminology where the reader's location matters. Do not invent keyword volumes or difficulty scores.

## Cloudflare Pages deployment
1. Create or open a **Pages** project connected to this repository.
2. Build command: `npm run build`.
3. Build output directory: `dist`.
4. Root directory: repository root.
5. Set Node.js to 22 where the build environment exposes that option.
6. Deploy the `main` branch and verify the Pages hostname, homepage, article URL, `/sitemap.xml`, `/robots.txt`, `/rss.xml` and an invalid URL/404.

## Important pre-launch limitations
This repository setup does **not** itself create or verify external Google Search Console, GA4, AdSense, affiliate or CMP accounts and does not edit domain DNS. Those steps need the owner's account access and actual IDs. Article pages currently use abstract CSS card artwork unless an original article image is supplied. Add licensed/owned, descriptive images and genuine firsthand evidence before the site is considered ready for an ads review.


## Adsterra slots (central code files)

Responsive ad slots are wired into the homepage, article template, and category pages. To activate a unit, open the matching file under src/ads/, remove its placeholder comment, and paste the complete Adsterra code. The reusable component places it in the existing templates; you do not need to edit every page or article.

See src/ads/README.md for the size-to-file map and placements. Codes are site/unit-specific, so use the code supplied for RentSmart Home.

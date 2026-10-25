# Adsterra slot code guide

This folder holds the Adsterra publisher code snippets for RentSmart Home. Paste each code into its named file once; the shared AdSlot.astro component places it across the page templates.

## How to activate a slot

1. In the Adsterra publisher dashboard, choose the RentSmart Home domain and add or choose the relevant approved ad unit.
2. Open the matching file below.
3. Delete the PASTE_ADSTERRA_CODE_HERE placeholder comment.
4. Paste the complete code copied from Adsterra. Keep the script and its configuration intact.
5. Commit and push to main. Cloudflare Pages will deploy the updated site.

Do not paste ad code into each article, homepage, or category page. Once it is in the central file, the page placements reuse it automatically.

## Slots and placements

| Format | Paste code into | Where it appears |
|---|---|---|
| Native Banner (4:1 desktop layout) | native-banner.desktop.html | Homepage below hero; article pages below the title. Use native-banner.mobile.html for your mobile-specific native configuration. |
| 468 x 60 | banner-468x60.desktop.html | Category page after the topic intro and before article cards; desktop/tablet only. |
| 300 x 250 | banner-300x250.desktop.html and banner-300x250.mobile.html | Homepage mid-page, article page after content, and category listings after the third card (or after a short list). |
| 160 x 300 | banner-160x300.desktop.html | Category sidebar on desktop; hidden on mobile. |
| 160 x 600 | banner-160x600.desktop.html | Article sidebar on desktop; hidden on mobile. |
| 320 x 50 | banner-320x50.mobile.html | Homepage mobile banner location. |
| 728 x 90 | banner-728x90.desktop.html | Homepage desktop/tablet leaderboard location. |

## Notes

- Adsterra codes are generated for a particular domain and ad unit. Use the code supplied for RentSmart Home; do not assume a code from another website can be reused.
- Fixed-size display banners are not intrinsically responsive. CSS breakpoints show the desktop or mobile variant, following Adsterra's documented approach.
- Desktop and mobile slots should use the suitable code/format for that device. If there is no mobile snippet, that size won't render on mobile.
- Empty placeholders remain hidden; no blank ad boxes appear.
- Keep ad density comfortable and avoid placing ads too close to navigation, links, or interactive controls.
- This starter does not add popunders, social bars, push notifications, or full-screen overlays.
- Test each placement on the deployed website in desktop and mobile browsers. Some units may need domain approval before they serve.
# Adsterra slot code guide

The Adsterra codes supplied for `https://rentsmartideas.pages.dev` are installed in the central slot files in this folder. The reusable `AdSlot.astro` component supplies them in the site templates; do not paste them into individual articles or pages.

## Configured slots and placements

| Format | Code file | Where it appears |
|---|---|---|
| Native Banner | `native-banner.desktop.html` | Responsive unit below the homepage hero and below article headings, on desktop and mobile. Only one native code is loaded for each page view. |
| 468 × 60 | `banner-468x60.desktop.html` | Category page below the topic intro; desktop/tablet only. |
| 300 × 250 | `banner-300x250.desktop.html` | Homepage mid-page, article page after content, and category listings after the third card (or after a short list); same fixed-size code adapts to the desktop/mobile slot width. |
| 160 × 300 | `banner-160x300.desktop.html` | Category sidebar on desktop; hidden on mobile. |
| 160 × 600 | `banner-160x600.desktop.html` | Article sidebar on desktop; hidden on mobile. |
| 320 × 50 | `banner-320x50.mobile.html` | Homepage mobile banner location; mobile only. |
| 728 × 90 | `banner-728x90.desktop.html` | Homepage leaderboard; desktop/tablet only. |

Unused mobile-specific placeholder files are intentionally left blank where a single format code is used responsively. Do not duplicate the same Native or 300 × 250 code into both desktop and mobile files; doing so could create duplicate ad requests.

## Consent and responsive loading

- The code is kept as data in each slot and is not executed immediately by the browser.
- The shared layout waits for CookieYes to report that the visitor has granted the **Advertisement** category before inserting Adsterra scripts.
- For fixed desktop/mobile variants, only the code for the current viewport is inserted. The 468 × 60, 160 × 300, 160 × 600 and 728 × 90 units are desktop/tablet-only; the 320 × 50 unit is mobile-only.
- If advertising consent is not granted, no Adsterra slot script is intentionally inserted. When consent is withdrawn, the visible creative is cleared; this cannot undo third-party requests or cookies already created before withdrawal.
- Confirm in CookieYes that Advertisement is a separate optional category and that the banner uses the consent behavior appropriate to the visitor's region. Test Accept, Reject, and saved preferences in a private browser window.
- Adsterra codes are site/unit-specific. Use only the publisher code supplied for this site, and test each placement on the deployed pages.

This starter does not add popunders, social bars, push notifications, or full-screen overlays.

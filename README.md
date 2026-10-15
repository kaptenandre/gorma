# Gorma

Site for Gorma at https://www.gormaofficial.com. Single, live and album announce for *The Thicket*, Riche Fenix and *Eat The Sky* (TNO053LP).

Astro, fully static, no CMS. Deploys as-is on Netlify (`netlify.toml`) or Vercel (auto-detected).

## Edit content

Everything lives in `src/site.ts`. Links still marked `TBA` render as normal buttons that go nowhere. Swap in the real URL and redeploy:

| Where | Field |
| --- | --- |
| The Thicket pre-save (becomes "Listen" at release) | `single.link` |
| Riche Fenix tickets | `live.tickets` |
| Eat The Sky pre-order LP | `album.preorder` |
| Eat The Sky pre-save | `album.presave` |
| Spotify, Apple Music, Instagram, YouTube | `links` |

Time-based behaviour, no rebuild needed:

- `single.outAt` / `album.outAt`: "Pre-save" flips to "Listen", "Pre-order" to "Buy LP".
- `live.hideAfter`: the gig disappears from the page once it has been played.

## Design

Taken from the LP sleeve (`GORMA_LP_V3.pdf`):

- Type: Doomer TM (`public/fonts/DoomerTM.woff2`) for everything, Helvetica Bold for small meta (system Helvetica on Apple devices, Arial elsewhere).
- Hero: the back cover photo, revealed like a torch beam opening on the graves, logo flickering in.
- The Thicket: the gatefold photo and the chorus as printed inside it.
- Eat The Sky: the front cover and the tracklist set like the back cover, A-side right aligned, B-side left aligned.
- Footer: the back cover credits, column for column, with the Trust No One mark.
- The LP spine (Gorma, Eat The Sky, TNO053LP) runs down the right edge on desktop.
- Heavy animated film grain over everything (`public/grain.png`, `.grain` in `src/styles/global.css`).

Image masters live in `src/assets/`; Astro resizes them to WebP at build time.

## Development

```sh
npm install
npm run dev     # http://localhost:4321
npm run check   # typecheck
npm run build
```

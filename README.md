# Gorma

Site for Gorma at https://www.gormaofficial.com. Single, live and album announce for *The Thicket*, Riche Fenix and *Eat The Sky* (TNO053LP).

Astro, fully static, no CMS. Deploys as-is on Netlify (`netlify.toml`) or Vercel (auto-detected).

## Edit content

Everything lives in `src/site.ts`. Links still marked `TBA` render as normal buttons that go nowhere. Swap in the real URL and redeploy:

| Where | Field |
| --- | --- |
| The Thicket pre-save (becomes "Listen" at release) | `single.link` |
| Eat The Sky pre-order LP | `album.preorder` |
| Eat The Sky pre-save | `album.presave` |
| Spotify, Apple Music, Instagram, YouTube | `links` |

Time-based behaviour, no rebuild needed:

- `single.outAt` / `album.outAt`: "Pre-save" flips to "Listen", "Pre-order" to "Buy LP".
- `live.hideAfter`: the gig disappears from the page once it has been played.

## Design

Taken from the LP sleeve (`GORMA_LP_V3.pdf`):

- Type: Doomer TM (`public/fonts/DoomerTM.woff2`) for everything, Helvetica Bold for small meta (system Helvetica on Apple devices, Arial elsewhere).
- Splash: everything on one screen, footer included. The back cover photo, revealed like a torch beam opening on the graves, the logo flickering in, then The Thicket (pre-save), Eat The Sky (pre-order, pre-save), one quiet line for the gig, the links and the label line with the Trust No One mark.
- Scroll on: the gatefold photo with The Thicket chorus as printed inside it, the front cover with the tracklist set like the back cover (A-side right aligned, B-side left aligned), then the back cover credits column for column.
- The LP spine (Gorma, Eat The Sky, TNO053LP) runs down the right edge on desktop.
- Contrast first: no grey text, photos pushed to deep black and bright white.
- Grain at film speed over everything (`.grain` + `.dust` in `src/styles/global.css`): `public/grain.png` is blended with overlay so it eats into every tone while black stays black, `public/dust.png` adds sparse white specks so the black never goes dead.

Image masters live in `src/assets/`; Astro resizes them to WebP at build time.

## Development

```sh
npm install
npm run dev     # http://localhost:4321
npm run check   # typecheck
npm run build
```

# Brand masters

Vector originals for the Veux lockup. These are the editable sources — the
site itself never loads them.

| File            | What it is                       |
| --------------- | -------------------------------- |
| `VeuxLogo.ai`   | Illustrator master               |
| `VeuxLogo.eps`  | EPS export of the same artwork   |

Keep them here, outside `public/`. Anything under `public/` is copied verbatim
into `dist/` and served from the deployed site, which would ship ~7.6 MB of
design sources to every visitor for no reason.

## What the site actually uses

Raster exports live in `public/logos/` and are referenced by path:

| File                      | Size (px)   | Used by                                        |
| ------------------------- | ----------- | ---------------------------------------------- |
| `veux-primary-color.png`  | 5328 × 3899 | landing hero (`src/routes/Landing.jsx`)        |
| `veux-symbol.png`         | 3600 × 2200 | category header, image placeholder             |
| `veux-primary-light.png`  | 5328 × 3899 | — not currently referenced                     |
| `veux-symbol-gold.png`    | 3088 × 2260 | — not currently referenced                     |
| `icon-192.png`            | 192 × 192   | — not currently referenced                     |
| `icon-512.png`            | 512 × 512   | — not currently referenced                     |

Favicons sit one level up, in `public/`.

## Re-exporting

If the lockup changes, edit the `.ai` here and re-export the PNGs over their
existing filenames in `public/logos/`, keeping the dimensions in the table
above — `Landing.jsx` hardcodes `width`/`height` on the hero `<img>` to
reserve layout space, so a change in aspect ratio needs that markup updated
too. Export on a transparent background; the page supplies its own cream.

# Brand masters

Vector originals for the Veux lockup. These are the editable sources — the
site itself never loads them.

| File            | What it is                       |
| --------------- | -------------------------------- |
| `veux-logo.ai`  | Illustrator master               |
| `veux-logo.eps` | EPS export of the same artwork   |

The `.ai` is PDF-backed and holds thirteen artboards: the full lockup in
several colourways, the clover symbol on its own, and wordmark-only cuts.

Keep them here, outside `public/`. Anything under `public/` is copied verbatim
into `dist/` and served from the deployed site, which would ship ~7.6 MB of
design sources to every visitor for no reason.

## The clover in the app is vector

`src/components/VeuxMark.jsx` is the clover symbol, converted from
**artboard 7** of `veux-logo.ai` — eleven filled paths, no text and no
embedded raster, so it is the real curve data rather than a trace. It takes
its colour from CSS, which is why the same definition serves the gold mark
in the topbar and the pale gold one on the dark cards.

It replaced a 177 KB PNG with about 2.3 KB of path data, and fixed a flaw in
that PNG along the way: the export had clipped the bottom lobe of the clover
off at the edge of its canvas.

If the logo is ever redrawn, that file has to be regenerated from the master
rather than hand-edited.

## What the site actually uses

Raster exports live in `public/logos/` and are referenced by path:

| File                     | Size (px)   | Used by                                     |
| ------------------------ | ----------- | ------------------------------------------- |
| `veux-lockup-720.webp`   | 720 × 527   | the landing hero (`src/routes/Landing.jsx`) |
| `icon-192.png`           | 192 × 192   | `public/manifest.webmanifest`               |
| `icon-512.png`           | 512 × 512   | `public/manifest.webmanifest`               |

`public/og-card.jpg` (1200 × 630) is the WhatsApp and social link preview,
cut from the same lockup on the brand cream. Favicons sit one level up, in
`public/`.

The four logo PNGs that were here before — the two full-size lockups, the
light lockup and the gold symbol — were either replaced by the two files
above or referenced by nothing at all.

## Re-exporting

If the lockup changes, edit the `.ai` here, then re-export:

- **The hero** → `public/logos/veux-lockup-720.webp`, 720px wide, WebP
  quality 80, transparent background. The page supplies its own cream.
  `Landing.jsx` hardcodes `width` and `height` on that `<img>` to reserve
  layout space, so a change in proportions needs those numbers updated too.
- **The social card** → `public/og-card.jpg`, exactly 1200 × 630, the lockup
  centred on `#FAF7F2`. It has to be a JPEG or PNG; WhatsApp will not render
  a WebP preview.
- **The clover** → `src/components/VeuxMark.jsx`, as described above.

Keep every filename lowercase with hyphens — the server is case-sensitive.

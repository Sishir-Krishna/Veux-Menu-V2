import { site } from "../src/data/menu.js";

/**
 * Writes the parts of index.html that have to agree with src/data/menu.js:
 * the no-JavaScript fallback, and the link preview tags.
 *
 * Both need the restaurant's own details, and both live in a static HTML
 * file that cannot read a JavaScript module at runtime. Generating them at
 * build time keeps one source of truth: change the address or the hours in
 * menu.js and they change here too, rather than quietly disagreeing.
 */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Vercel exposes the production domain to the build; site.url wins if set. */
function siteUrl() {
  const fromEnv = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const url = site.url || (fromEnv ? `https://${fromEnv}` : null);
  return url ? url.replace(/\/$/, "") : null;
}

function socialTags() {
  const base = siteUrl();
  const abs = (p) => (base ? base + p : p);
  const title = `${site.name} — ${site.tagline}`;
  const description = `${site.descriptor}. ${site.city}. ${site.hours}.`;

  const tags = [
    ["og:type", "website"],
    ["og:site_name", site.name],
    ["og:title", title],
    ["og:description", description],
    ["og:image", abs("/og-card.jpg")],
    ["og:image:width", "1200"],
    ["og:image:height", "630"],
    ["og:image:alt", `${site.name} — ${site.tagline}`],
  ];
  if (base) tags.push(["og:url", base + "/"]);

  const lines = tags.map(([p, c]) => `    <meta property="${p}" content="${esc(c)}" />`);
  lines.push(`    <meta name="twitter:card" content="summary_large_image" />`);
  lines.push(`    <meta name="twitter:title" content="${esc(title)}" />`);
  lines.push(`    <meta name="twitter:description" content="${esc(description)}" />`);
  lines.push(`    <meta name="twitter:image" content="${esc(abs("/og-card.jpg"))}" />`);
  return lines.join("\n");
}

/* Inline styles only: this has to stand up with no stylesheet, which is
   the same failure the block exists to cover. */
function noscript() {
  const wrap = "margin:0;padding:48px 24px;font:400 16px/1.6 Georgia,'Times New Roman',serif;color:#2c2118;background:#faf7f2;text-align:center";
  const name = "margin:0 0 6px;font:400 34px/1.15 Georgia,'Times New Roman',serif;color:#45111f";
  const rule = "width:48px;height:1px;margin:22px auto;background:#805e27;opacity:.45";
  const line = "margin:0 0 4px";
  const quiet = "margin:22px 0 0;font-size:15px;color:#6b6058";

  const phone = site.phone
    ? `<p style="${line}"><a href="tel:${esc(String(site.phone).replace(/[^+\d]/g, ""))}" style="color:#6b2238">${esc(site.phone)}</a></p>`
    : `<!-- TODO: no phone number in src/data/menu.js yet — see docs/menu-worklist.md -->`;

  return `    <noscript>
      <div style="${wrap}">
        <h1 style="${name}">${esc(site.name)}</h1>
        <p style="${line}"><em>${esc(site.tagline)}</em></p>
        <div style="${rule}"></div>
        <p style="${line}">${esc(site.descriptor)}</p>
        <p style="${line}">${esc(site.city)}</p>
        <p style="${line}">${esc(site.hours)}</p>
        ${phone}
        <p style="${quiet}">This menu needs JavaScript to run. Please ask your
        server for a printed menu — they will bring one straight over.</p>
      </div>
    </noscript>`;
}

export default function indexHead() {
  return {
    name: "veux-index-head",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html
          .replace("<!--@social-->", socialTags())
          .replace("<!--@noscript-->", noscript());
      },
    },
  };
}

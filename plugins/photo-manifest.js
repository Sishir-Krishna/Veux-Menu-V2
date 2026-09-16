import { readdirSync, existsSync } from "node:fs";
import { join, posix } from "node:path";

/**
 * Builds a list of the image files that actually exist in /public/photos and
 * exposes it to the app as the module "virtual:photos".
 *
 * Why: menu.js names a photo path for nearly every dish, but most of those
 * photos have not been shot yet. Discovering that in the browser — by letting
 * an <img> fail — means the layout jumps around after the page has rendered.
 * Knowing up front lets a section decide once whether it has a thumbnail
 * column at all, so dish names line up.
 *
 * It runs automatically on `npm run dev` and `npm run build`. Adding or
 * removing a photo while the dev server is running reloads the page.
 */
const VIRTUAL_ID = "virtual:photos";
const RESOLVED_ID = "\0" + VIRTUAL_ID;
const IMAGE_RE = /\.(webp|jpe?g|png|avif|gif)$/i;

function scan(dir, base = "/photos") {
  if (!existsSync(dir)) return [];

  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const url = posix.join(base, entry.name);
    if (entry.isDirectory()) return scan(join(dir, entry.name), url);
    return IMAGE_RE.test(entry.name) ? [url] : [];
  });
}

export default function photoManifest() {
  let photosDir;

  return {
    name: "veux-photo-manifest",

    configResolved(config) {
      photosDir = join(config.publicDir, "photos");
    },

    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null;
    },

    load(id) {
      if (id !== RESOLVED_ID) return null;
      const files = scan(photosDir);
      return `export default ${JSON.stringify(files)};`;
    },

    configureServer(server) {
      server.watcher.add(photosDir);

      const refresh = (file) => {
        if (!IMAGE_RE.test(file) || !file.includes("photos")) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };

      server.watcher.on("add", refresh);
      server.watcher.on("unlink", refresh);
    },
  };
}

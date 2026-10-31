/* Derived helpers over the menu data.
   Nothing here needs editing to change the menu — edit src/data/menu.js. */

import menu from "../data/menu.js";
import existingPhotos from "virtual:photos";

/* The photo files that are actually on disk, collected at build time by
   plugins/photo-manifest.js. menu.js names a path for nearly every dish,
   but most of those photographs don't exist yet. */
const PHOTOS = new Set(existingPhotos);

/** Is there a real file behind this path? */
export function hasPhoto(path) {
  return Boolean(path) && PHOTOS.has(path);
}

/** "Chef Special Avocado Roll" → "chef-special-avocado-roll" (used in URLs). */
export function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* What makes two listings the same plate: what you get and what you pay.
   `diet` and `tag` are notes about a dish, not the dish itself. */
function orderableIdentity(dish) {
  const photos = dish.photos?.length ? dish.photos : [dish.photo].filter(Boolean);
  return JSON.stringify([dish.price, dish.desc || "", photos]);
}

/**
 * Two dishes in one category that slugify the same share a URL, so one of
 * them is unreachable — the router can only ever find the first. That is
 * invisible until a guest taps the second one, so we check at load instead.
 *
 * A plate deliberately cross-listed under two headings is not that bug: both
 * rows lead to the same plate at the same price, which is what the guest
 * expects. We only refuse the case where the two entries differ, because
 * there the second dish genuinely cannot be reached.
 */
export function assertUniqueSlugs(categories = menu) {
  const unreachable = [];
  const crossListed = [];

  for (const category of categories) {
    const seen = new Map();
    for (const dish of flattenItems(category.items)) {
      const slug = slugify(dish.name);
      const first = seen.get(slug);
      if (!first) {
        seen.set(slug, dish);
      } else if (orderableIdentity(first) === orderableIdentity(dish)) {
        crossListed.push(`${category.id}/${slug} — "${dish.name}" is listed twice`);
      } else {
        unreachable.push(
          `${category.id}/${slug} — "${first.name}" (₹${first.price}) and "${dish.name}" (₹${dish.price})`
        );
      }
    }
  }

  if (crossListed.length && import.meta.env?.DEV) {
    console.warn(
      `The same plate appears twice under one category. Harmless — both rows open the same dish — but worth confirming it is deliberate:\n  ${crossListed.join("\n  ")}`
    );
  }

  if (unreachable.length) {
    const message = `Two different dishes share one URL, so only the first can ever open. Rename one of each pair in src/data/menu.js:\n  ${unreachable.join("\n  ")}`;
    if (import.meta.env?.DEV) throw new Error(message);
    console.error(message);
  }

  return { unreachable, crossListed };
}

assertUniqueSlugs();

export function getCategory(id) {
  return menu.find((c) => c.id === id);
}

/** Flat list of every dish in a category's full menu, grouped or not. */
export function flattenItems(items = []) {
  if (items.length && items[0].dishes) {
    return items.flatMap((g) => g.dishes);
  }
  return items;
}

/** The same list, each dish paired with the group heading it sits under. */
function flattenWithGroups(items = []) {
  if (items.length && items[0].dishes) {
    return items.flatMap((g) => g.dishes.map((dish) => ({ dish, group: g.group })));
  }
  return items.map((dish) => ({ dish, group: null }));
}

export function isGrouped(items = []) {
  return Boolean(items.length && items[0].dishes);
}

/**
 * Normalises the two shapes `featured` can take into one list of strips.
 * - { ordered: [...], tryThis: [...] }  → two strips
 * - [ ... ]                             → one strip
 */
export function featuredStrips(category) {
  const f = category.featured;
  if (!f) return [];
  if (Array.isArray(f)) {
    return f.length ? [{ title: category.featuredTitle || "Featured", dishes: f }] : [];
  }
  const strips = [];
  if (f.ordered?.length) strips.push({ title: "Most Ordered", dishes: f.ordered });
  if (f.tryThis?.length) strips.push({ title: "Must Try", dishes: f.tryThis });
  return strips;
}

/**
 * How many distinct dishes a category offers — shown on the home screen.
 * Counts the full menu plus any featured dish that isn't also in the full
 * menu, so the number matches what a guest can actually order.
 */
export function countDishes(category) {
  const names = new Set(flattenItems(category.items).map((d) => d.name));
  featuredStrips(category).forEach((s) =>
    s.dishes.forEach((d) => names.add(d.name))
  );
  return names.size;
}

/** Every image for a dish that exists on disk (0, 1 or many). */
export function allPhotos(dish) {
  const named = dish.photos?.length ? dish.photos : dish.photo ? [dish.photo] : [];
  return named.filter(hasPhoto);
}

/** The image a card should lead with, or null if the dish has no photo yet. */
export function leadPhoto(dish) {
  return allPhotos(dish)[0] || null;
}

/** Does any dish in this list have a photograph? */
export function sectionHasPhotos(dishes) {
  return dishes.some((d) => leadPhoto(d) !== null);
}

/**
 * Whether a category reserves the thumbnail column at all.
 *
 * Decided once for the whole page rather than per group: Main Course has
 * fourteen groups and only some of them have been photographed, so deciding
 * group by group slid every dish name 68px sideways as the guest scrolled.
 * One left edge down the page is worth an empty slot next to the dishes
 * still waiting on the shoot.
 */
export function categoryHasPhotos(category) {
  return sectionHasPhotos(flattenItems(category.items));
}

/**
 * Finds a dish by its URL slug anywhere in a category.
 *
 * A dish often appears twice — once in a featured strip and once in the full
 * menu — and the two entries rarely carry the same fields. Caramelized Lamb
 * Supreme is the clearest case: the featured entry has the `tag` and the
 * `origin` story, while the full-menu entry is the one holding the `video`.
 * Returning either on its own silently drops half the dish, so we merge them.
 *
 * Featured copy wins any conflict — it is the curated wording — and the full
 * menu fills in whatever the strip left out. Blank fields never overwrite a
 * real one, since `desc: ""` is used in the data to mean "nothing to add".
 */
export function findDish(category, slug) {
  const matches = [];

  for (const strip of featuredStrips(category)) {
    const hit = strip.dishes.find((d) => slugify(d.name) === slug);
    if (hit) matches.push(hit);
  }

  const listed = flattenWithGroups(category.items).find(
    (entry) => slugify(entry.dish.name) === slug
  );
  if (listed) matches.push(listed.dish);

  if (!matches.length) return null;

  // Lowest priority first, so higher-priority entries overwrite as we go.
  const merged = matches.reduceRight((acc, entry) => {
    for (const [key, value] of Object.entries(entry)) {
      if (value !== undefined && value !== null && value !== "") acc[key] = value;
    }
    return acc;
  }, {});

  /* The portion count lives in the group heading — "Nigiri (4 pcs)",
     "Sashimi (3 pcs)" — so a dish opened on its own would otherwise never
     tell the guest how many pieces arrive. Carried as `group`, not merged
     in as data, since it belongs to the listing rather than the dish. */
  if (listed?.group) merged.group = listed.group;
  return merged;
}

/** ₹1,240 — Indian digit grouping. */
export function formatPrice(n) {
  return "₹ " + new Intl.NumberFormat("en-IN").format(n);
}

export { menu };

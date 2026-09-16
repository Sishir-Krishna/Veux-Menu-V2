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

/** Does any dish in this list have a photograph? Decides whether a section
    gets a thumbnail column — a half-filled column looks like a mistake. */
export function sectionHasPhotos(dishes) {
  return dishes.some((d) => leadPhoto(d) !== null);
}

/**
 * Finds a dish by its URL slug anywhere in a category — featured strips
 * first (they carry the richer copy), then the full menu.
 */
export function findDish(category, slug) {
  for (const strip of featuredStrips(category)) {
    const hit = strip.dishes.find((d) => slugify(d.name) === slug);
    if (hit) return hit;
  }
  return flattenItems(category.items).find((d) => slugify(d.name) === slug) || null;
}

/** ₹1,240 — Indian digit grouping. */
export function formatPrice(n) {
  return "₹ " + new Intl.NumberFormat("en-IN").format(n);
}

export { menu };

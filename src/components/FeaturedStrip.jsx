import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";
import { Rule } from "./Ornaments.jsx";
import { AllergenMarks, ALLERGEN_ORDER } from "./Allergens.jsx";
import { slugify, leadPhoto, formatPrice } from "../lib/menu.js";

/**
 * A curated horizontal strip — "Most Ordered", "Must Try".
 * Photo zone and caption zone are separate blocks; type never sits on food.
 * The first card carries the dark treatment so each strip opens with weight.
 */
export default function FeaturedStrip({ title, dishes, categoryId, headingId }) {
  const tagging = tagsWorthShowing(dishes, title);

  return (
    <section className="strip" aria-labelledby={headingId}>
      <Rule label={title} className="strip__rule" as="h2" labelId={headingId} />

      <ul className="strip__track">
        {dishes.map((dish, i) => (
          <li key={dish.name} className="strip__item">
            <FeaturedCard
              dish={dish}
              categoryId={categoryId}
              tag={tagging ? dish.tag : null}
              dark={i === 0}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * A tag only earns its place if it distinguishes one card from its
 * neighbours. Beverages tagged all three cards "Top pick" and Main Course
 * tagged all four "Chef's pick" — a pill on every card says nothing the
 * strip heading has not already said. Desserts, where each card carries a
 * different word, keeps them.
 */
function tagsWorthShowing(dishes, stripTitle) {
  const norm = (s) => (s || "").toLowerCase().replace(/[^a-z]/g, "");
  const tags = dishes.map((d) => norm(d.tag));

  if (tags.every((t) => !t)) return false;
  if (tags.every((t) => t === tags[0])) return false;
  return !tags.every((t) => !t || t === norm(stripTitle));
}

function FeaturedCard({ dish, categoryId, tag, dark }) {
  const photo = leadPhoto(dish);
  const allergens = ALLERGEN_ORDER.filter((k) => dish.allergens?.includes(k));

  return (
    <Link
      className={`fcard ${dark ? "fcard--dark" : ""} ${photo ? "" : "fcard--typeonly"}`}
      to={`/menu/${categoryId}/${slugify(dish.name)}`}
    >
      {/* Two thirds of the menu has not been photographed. Rather than
          reserve the photo zone for a tile that is not coming, a card with
          no picture gives the space to the words and reads as a deliberate
          piece of typography. */}
      {photo && (
        <SmartImage
          src={photo}
          alt={dish.name}
          className="fcard__photo"
          ratio="4 / 3"
        />
      )}

      <span className="fcard__caption">
        {tag && <span className="label fcard__tag">{tag}</span>}
        <span className="fcard__name">{dish.name}</span>
        {dish.desc && <span className="fcard__desc">{dish.desc}</span>}
        {/* Price and marks share one line. The marks come first in the
            markup so a screen reader hears name, allergens, price — the
            same order as a list row — and CSS moves them to the right. */}
        <span className="fcard__foot">
          {allergens.length > 0 && (
            <span className="fcard__allergens">
              <span className="sr-only">, </span>
              <AllergenMarks kinds={allergens} size={13} />
              <span className="sr-only">, </span>
            </span>
          )}
          <span className="fcard__price rupee">{formatPrice(dish.price)}</span>
        </span>
      </span>
    </Link>
  );
}

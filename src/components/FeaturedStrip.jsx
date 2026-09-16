import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";
import { Rule } from "./Ornaments.jsx";
import { slugify, leadPhoto, formatPrice } from "../lib/menu.js";

/**
 * A curated horizontal strip — "Most Ordered", "Must Try".
 * Photo zone and caption zone are separate blocks; type never sits on food.
 * The first card carries the dark treatment so each strip opens with weight.
 */
export default function FeaturedStrip({ title, dishes, categoryId }) {
  return (
    <section className="strip">
      <Rule label={title} className="strip__rule" />

      <ul className="strip__track">
        {dishes.map((dish, i) => (
          <li key={dish.name} className="strip__item">
            <FeaturedCard
              dish={dish}
              categoryId={categoryId}
              stripTitle={title}
              dark={i === 0}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

/* The strip heading already says "Most Ordered" — repeating it on the card
   as a pill is noise. Only show a tag that adds something. */
function tagWorthShowing(tag, stripTitle) {
  if (!tag) return null;
  const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, "");
  return norm(tag) === norm(stripTitle) ? null : tag;
}

function FeaturedCard({ dish, categoryId, stripTitle, dark }) {
  const tag = tagWorthShowing(dish.tag, stripTitle);

  return (
    <Link
      className={`fcard ${dark ? "fcard--dark" : ""}`}
      to={`/menu/${categoryId}/${slugify(dish.name)}`}
    >
      <SmartImage
        src={leadPhoto(dish)}
        alt={dish.name}
        className="fcard__photo"
        ratio="4 / 3"
      />

      <span className="fcard__caption">
        {tag && <span className="label fcard__tag">{tag}</span>}
        <span className="fcard__name">{dish.name}</span>
        <span className="fcard__price rupee">{formatPrice(dish.price)}</span>
      </span>
    </Link>
  );
}

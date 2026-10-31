import { formatPrice } from "../lib/menu.js";

/**
 * The second price a dish can carry — "Chicken ₹ 569" under the veg price.
 *
 * These used to be written into the description, where they read as prose
 * and never lined up. A `supplement` variant is an add-on rather than an
 * alternative, so it renders with a "+" to say so.
 */
export default function Variants({ variants, className = "" }) {
  if (!variants?.length) return null;

  return (
    <span className={`variants rupee ${className}`}>
      {variants.map((v) => (
        <span className="variants__item" key={v.label}>
          <span className="variants__label">{v.label}</span>{" "}
          {v.supplement ? "+ " : ""}
          {formatPrice(v.price)}
        </span>
      ))}
    </span>
  );
}

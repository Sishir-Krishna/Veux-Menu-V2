import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";
import DietMark from "./DietMark.jsx";
import Variants from "./Variants.jsx";
import { AllergenMarks, ALLERGEN_ORDER } from "./Allergens.jsx";
import { slugify, leadPhoto, formatPrice } from "../lib/menu.js";

/**
 * One line of the full menu: thumbnail, name, description, price.
 *
 * `showThumbs` is decided once per category rather than per group, so the
 * names stay on a single left edge from the top of the page to the bottom.
 * A dish with no photograph inside a category that has them leaves the slot
 * empty — quieter than repeating a placeholder down the page.
 */
export default function DishRow({ dish, categoryId, showThumbs }) {
  const photo = leadPhoto(dish);
  const allergens = ALLERGEN_ORDER.filter((k) => dish.allergens?.includes(k));

  return (
    <li className={`row ${showThumbs ? "row--thumbs" : ""} ${allergens.length ? "row--allergens" : ""}`}>
      <Link className="row__link" to={`/menu/${categoryId}/${slugify(dish.name)}`}>
        {showThumbs && (
          <span className="row__slot">
            {photo && (
              <SmartImage src={photo} alt="" className="row__thumb" ratio="1 / 1" />
            )}
          </span>
        )}

        <span className="row__text">
          <span className="row__name">{dish.name}</span>
          {dish.desc && <span className="row__desc">{dish.desc}</span>}
        </span>

        {/* Its own grid column, added only when there is something to show,
            so a dish without allergens lays out exactly as before. Sits after
            the name in the markup so a screen reader hears name, allergens,
            price — the commas keep the three from running together. */}
        {allergens.length > 0 && (
          <span className="row__allergens">
            <span className="sr-only">, </span>
            <AllergenMarks kinds={allergens} size={13} />
            <span className="sr-only">, </span>
          </span>
        )}

        <span className="row__prices">
          <span className="row__price rupee">
            <DietMark diet={dish.diet} />
            {formatPrice(dish.price)}
          </span>
          <Variants variants={dish.variants} className="row__variants" />
        </span>
      </Link>
    </li>
  );
}

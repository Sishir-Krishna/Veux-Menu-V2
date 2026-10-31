import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";
import DietMark from "./DietMark.jsx";
import Variants from "./Variants.jsx";
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

  return (
    <li className={`row ${showThumbs ? "row--thumbs" : ""}`}>
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

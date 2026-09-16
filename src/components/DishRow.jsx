import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";
import { slugify, leadPhoto, formatPrice } from "../lib/menu.js";

/**
 * One line of the full menu: thumbnail, name, description, price.
 *
 * `showThumbs` is decided once per section rather than per dish, so the
 * names stay on a single left edge. A dish with no photograph inside a
 * section that has them leaves the slot empty — quieter than repeating a
 * placeholder down the page.
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

        <span className="row__price rupee">{formatPrice(dish.price)}</span>
      </Link>
    </li>
  );
}

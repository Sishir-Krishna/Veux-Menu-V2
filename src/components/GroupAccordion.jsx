import { useId, useState } from "react";
import DishRow from "./DishRow.jsx";
import { Chevron } from "./Ornaments.jsx";

/**
 * A collapsible sub-group of the full menu (Beverages → Hot Coffees, …).
 *
 * Dishes are mounted only while the group is open. With 99 dishes across 14
 * groups in Main Course, that keeps the first paint cheap and stops the
 * browser fetching thumbnails nobody has scrolled to.
 */
export default function GroupAccordion({ group, categoryId, showThumbs, dishes, forceOpen }) {
  // Every group starts closed, so a category opens as a clean list of
  // headings — the guest chooses where to look rather than landing
  // mid-way down whichever group happens to be first in the data.
  const [open, setOpen] = useState(false);
  const id = useId();
  const list = dishes || group.dishes;
  // While a search is running the group opens itself and shows the matches.
  const isOpen = forceOpen || open;

  return (
    <div className={`group ${isOpen ? "group--open" : ""}`}>
      <h3 className="group__heading">
        <button
          type="button"
          className="group__head"
          aria-expanded={isOpen}
          aria-controls={id}
          /* The count sits hard against the name in the markup, so a screen
             reader ran them together as "Hot Coffees10". Say it properly
             here and hide the visual one. */
          aria-label={`${group.group}, ${list.length} ${
            list.length === 1 ? "item" : "items"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="group__name">{group.group}</span>
          <span className="group__count" aria-hidden="true">
            {list.length}
          </span>
          <Chevron className="group__chev" />
        </button>
      </h3>

      {isOpen && (
        <ul className="group__list" id={id}>
          {list.map((dish) => (
            <DishRow
              key={dish.name}
              dish={dish}
              categoryId={categoryId}
              showThumbs={showThumbs}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

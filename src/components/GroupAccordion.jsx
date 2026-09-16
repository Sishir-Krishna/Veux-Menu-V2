import { useId, useMemo, useState } from "react";
import DishRow from "./DishRow.jsx";
import { Chevron } from "./Ornaments.jsx";
import { sectionHasPhotos } from "../lib/menu.js";

/**
 * A collapsible sub-group of the full menu (Beverages → Hot Coffees, …).
 *
 * Dishes are mounted only while the group is open. With 99 dishes across 14
 * groups in Main Course, that keeps the first paint cheap and stops the
 * browser fetching thumbnails nobody has scrolled to.
 */
export default function GroupAccordion({ group, categoryId }) {
  // Every group starts closed, so a category opens as a clean list of
  // headings — the guest chooses where to look rather than landing
  // mid-way down whichever group happens to be first in the data.
  const [open, setOpen] = useState(false);
  const id = useId();
  const showThumbs = useMemo(() => sectionHasPhotos(group.dishes), [group.dishes]);

  return (
    <div className={`group ${open ? "group--open" : ""}`}>
      <h3 className="group__heading">
        <button
          type="button"
          className="group__head"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="group__name">{group.group}</span>
          <span className="group__count">{group.dishes.length}</span>
          <Chevron className="group__chev" />
        </button>
      </h3>

      {open && (
        <ul className="group__list" id={id}>
          {group.dishes.map((dish) => (
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

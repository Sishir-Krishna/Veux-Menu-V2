import { Link, Navigate, useParams } from "react-router-dom";
import {
  getCategory,
  featuredStrips,
  isGrouped,
  flattenItems,
  sectionHasPhotos,
  findDish,
} from "../lib/menu.js";
import { site } from "../data/menu.js";
import FeaturedStrip from "../components/FeaturedStrip.jsx";
import GroupAccordion from "../components/GroupAccordion.jsx";
import DishRow from "../components/DishRow.jsx";
import DishOverlay from "../components/DishOverlay.jsx";
import { Rule, Chevron, Sparkle } from "../components/Ornaments.jsx";
import "./Category.css";

export default function Category() {
  const { categoryId, dishSlug } = useParams();
  const category = getCategory(categoryId);

  if (!category) return <Navigate to="/" replace />;

  // A dish that no longer exists — a stale link, or a renamed plate — drops
  // the guest onto the category rather than a dead end.
  const dish = dishSlug ? findDish(category, dishSlug) : null;
  if (dishSlug && !dish) return <Navigate to={`/menu/${categoryId}`} replace />;

  const { id, name, tagline, accent, notes, items } = category;
  const strips = featuredStrips(category);
  const grouped = isGrouped(items);
  const flat = grouped ? [] : flattenItems(items);
  const flatHasThumbs = sectionHasPhotos(flat);

  return (
    <>
    {/* While the sheet is open the page beneath it is inert: no tab stops,
        nothing for a screen reader to wander into behind the dialog. */}
    <main className="category" style={{ "--accent": accent }} inert={Boolean(dish)}>
      <div className="topbar">
        <Link className="topbar__back" to="/" aria-label="Back to all categories">
          <Chevron dir="left" />
        </Link>
        <span className="topbar__title">{name}</span>
        <img
          className="topbar__mark"
          src="/logos/veux-symbol.png"
          alt=""
          width="26"
          height="16"
        />
      </div>

      <header className="masthead">
        <h1 className="masthead__name">{name}</h1>
        <p className="masthead__tagline">{tagline}</p>

        {notes?.map((note) => (
          <p className="kitchen-note" key={note.text}>
            <span className="kitchen-note__emoji" aria-hidden="true">
              {note.emoji}
            </span>
            <span className="kitchen-note__text">{note.text}</span>
          </p>
        ))}
      </header>

      {strips.map((strip) => (
        <FeaturedStrip
          key={strip.title}
          title={strip.title}
          dishes={strip.dishes}
          categoryId={id}
        />
      ))}

      <section className="full">
        <Rule label="The Full Menu" className="full__rule" />

        {grouped ? (
          <div className="full__groups">
            {items.map((group) => (
              <GroupAccordion key={group.group} group={group} categoryId={id} />
            ))}
          </div>
        ) : (
          <ul className="full__list">
            {flat.map((dish) => (
              <DishRow
                key={dish.name}
                dish={dish}
                categoryId={id}
                showThumbs={flatHasThumbs}
              />
            ))}
          </ul>
        )}
      </section>

      <footer className="cat-foot">
        <Sparkle size={9} className="cat-foot__mark" />
        <p className="cat-foot__note">{site.priceNote}</p>
      </footer>
    </main>

    {dish && <DishOverlay dish={dish} category={category} />}
    </>
  );
}

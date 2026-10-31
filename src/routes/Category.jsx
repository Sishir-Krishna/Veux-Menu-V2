import { Link, Navigate, useParams } from "react-router-dom";
import {
  getCategory,
  featuredStrips,
  isGrouped,
  flattenItems,
  categoryHasPhotos,
  findDish,
} from "../lib/menu.js";
import { site } from "../data/menu.js";
import FeaturedStrip from "../components/FeaturedStrip.jsx";
import GroupAccordion from "../components/GroupAccordion.jsx";
import DishRow from "../components/DishRow.jsx";
import DishOverlay from "../components/DishOverlay.jsx";
import { Rule, Chevron, Sparkle } from "../components/Ornaments.jsx";
import VeuxMark from "../components/VeuxMark.jsx";
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
  /* One decision for the whole page: every group reserves the thumbnail
     slot if any dish in the category has been photographed. */
  const showThumbs = categoryHasPhotos(category);

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
        <VeuxMark className="topbar__mark" />
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

      {strips.map((strip, i) => (
        <FeaturedStrip
          key={strip.title}
          title={strip.title}
          dishes={strip.dishes}
          categoryId={id}
          headingId={`${id}-strip-${i}`}
        />
      ))}

      {/* h1 masthead → h2 section titles → h3 group headings, with no
          level skipped, so the page can be walked by headings alone. */}
      <section className="full" aria-labelledby={`${id}-full`}>
        <Rule
          label="The Full Menu"
          className="full__rule"
          as="h2"
          labelId={`${id}-full`}
        />

        {grouped ? (
          <div className="full__groups">
            {items.map((group) => (
              <GroupAccordion
                key={group.group}
                group={group}
                categoryId={id}
                showThumbs={showThumbs}
              />
            ))}
          </div>
        ) : (
          <ul className="full__list">
            {flat.map((dish) => (
              <DishRow
                key={dish.name}
                dish={dish}
                categoryId={id}
                showThumbs={showThumbs}
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

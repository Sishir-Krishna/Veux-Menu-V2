import { useEffect, useId, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";
import { Chevron, Rule, Sparkle } from "./Ornaments.jsx";
import { allPhotos, formatPrice } from "../lib/menu.js";
import { site } from "../data/menu.js";
import useScrollLock from "../lib/useScrollLock.js";
import "./DishOverlay.css";

/* The hero matches the 390 × 330 crop the design was drawn against, so a
   photo shot to spec fills it without the browser choosing the crop. */
const HERO_RATIO = "39 / 33";

/**
 * The dish sheet: one plate, full screen, over its category.
 *
 * It is a route rather than a piece of state (see App.jsx) — which means the
 * phone's own back gesture closes it, the URL can be shared, and a QR code
 * could point straight at a single dish. Everything here is driven by the
 * fields described at the top of src/data/menu.js; a dish with nothing but a
 * name and a price still renders correctly, just shorter.
 */
export default function DishOverlay({ dish, category }) {
  const navigate = useNavigate();
  const location = useLocation();
  const titleId = useId();
  const closeRef = useRef(null);

  const photos = allPhotos(dish);
  const chips = [dish.diet].filter(Boolean);

  useScrollLock();

  /* Closing means "go back" when there is something to go back to, so the
     category keeps its scroll position and the history stack stays honest.
     Arriving straight on a dish URL — a shared link, a reload, a QR code —
     has no such entry, so we step up to the category instead of leaving. */
  function close() {
    if (location.key !== "default") navigate(-1);
    else navigate(`/menu/${category.id}`, { replace: true });
  }

  // The sheet owns the screen while it is open: send it the keyboard, and
  // let Escape dismiss it the way the back gesture does.
  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      className="dish"
      style={{ "--accent": category.accent }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="dish__scroll">
        {/* Zero-height sticky row: the button rides along as you scroll
            without reserving space above the photograph. */}
        <div className="dish__bar">
          <button
            type="button"
            ref={closeRef}
            className="dish__close"
            onClick={close}
            aria-label={`Close and return to ${category.name}`}
          >
            <Chevron dir="left" />
          </button>
        </div>

        <div className="dish__hero">
          {photos.length > 1 ? (
            <Gallery photos={photos} alt={dish.name} />
          ) : (
            <SmartImage
              src={photos[0] || null}
              alt={dish.name}
              ratio={HERO_RATIO}
              eager
              sizes="(max-width: 480px) 100vw, 480px"
            />
          )}
        </div>

        <div className="dish__sheet">
          <p className="label dish__eyebrow">
            {category.name}
            {dish.tag && <span className="dish__eyebrow-tag"> · {dish.tag}</span>}
          </p>

          <h1 className="dish__name" id={titleId}>
            {dish.name}
          </h1>

          <p className="dish__pricerow">
            <span className="dish__price rupee">{formatPrice(dish.price)}</span>
            <span className="dish__priceline" />
            <Sparkle size={9} className="dish__pricemark" />
          </p>

          {dish.desc && <p className="dish__desc">{dish.desc}</p>}
          {dish.origin && <p className="dish__origin">{dish.origin}</p>}

          {chips.length > 0 && (
            <ul className="dish__chips">
              {chips.map((chip) => (
                <li className="dish__chip" key={chip}>
                  {chip}
                </li>
              ))}
            </ul>
          )}

          {dish.video && (
            <section className="dish__make">
              <Rule label="Watch it being made" className="dish__make-rule" />
              <video
                className="dish__video"
                src={dish.video}
                poster={photos[0] || undefined}
                controls
                playsInline
                preload="none"
              />
            </section>
          )}

          <footer className="dish__foot">
            <Sparkle size={9} className="dish__foot-mark" />
            <p className="dish__foot-note">{site.priceNote}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

/**
 * The swipeable hero for dishes served several ways — the pastas name one
 * photo per sauce. Plain scroll-snap rather than a carousel library: the
 * gesture is the browser's own, so it stays smooth on a cheap phone.
 */
function Gallery({ photos, alt }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    setCurrent(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className="gallery">
      <div className="gallery__track" ref={trackRef} onScroll={onScroll}>
        {photos.map((photo, i) => (
          <SmartImage
            key={photo}
            src={photo}
            /* One description for the set — a screen reader should not hear
               the same dish name once per slide. */
            alt={i === 0 ? alt : ""}
            className="gallery__slide"
            ratio={HERO_RATIO}
            eager={i === 0}
            sizes="(max-width: 480px) 100vw, 480px"
          />
        ))}
      </div>

      <p className="gallery__dots">
        <span className="sr-only">
          {current + 1} of {photos.length}
        </span>
        {photos.map((photo, i) => (
          <span
            key={photo}
            aria-hidden="true"
            className={`gallery__dot ${i === current ? "is-on" : ""}`}
          />
        ))}
      </p>
    </div>
  );
}

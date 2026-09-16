import { Link } from "react-router-dom";
import { menu, countDishes } from "../lib/menu.js";
import { site } from "../data/menu.js";
import SmartImage from "../components/SmartImage.jsx";
import { Rule, Leaf, Chevron } from "../components/Ornaments.jsx";
import useReveal from "../lib/useReveal.js";
import "./Landing.css";

export default function Landing() {
  const reveal = useReveal();

  return (
    <main className="landing">
      <header className="hero">
        <div className="hero__leaves" aria-hidden="true">
          <Leaf className="hero__leaf hero__leaf--a" size={300} />
          <Leaf className="hero__leaf hero__leaf--b" size={220} />
          <Leaf className="hero__leaf hero__leaf--c" size={170} />
        </div>

        <img
          className="hero__lockup"
          src="/logos/logoprimaryclean.png"
          alt={`${site.name} — ${site.tagline}`}
          width="420"
          height="229"
          fetchPriority="high"
          decoding="async"
        />

        <Rule sparkle className="hero__rule" />

        <p className="hero__descriptor">{site.descriptor}</p>
      </header>

      <section className="index" aria-labelledby="index-heading">
        <Rule label="Explore the Menu" className="index__rule" />
        <h1 id="index-heading" className="sr-only">
          Menu categories
        </h1>

        <ul className="index__list">
          {menu.map((category, i) => (
            <li
              key={category.id}
              ref={reveal}
              className="reveal"
              style={{ transitionDelay: `${Math.min(i, 4) * 60}ms` }}
            >
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </section>

      <footer className="site-foot">
        <Rule sparkle />
        <p className="site-foot__hours label">{site.hours}</p>
        <p className="site-foot__city">{site.city}</p>
      </footer>
    </main>
  );
}

function CategoryCard({ category }) {
  const { id, name, tagline, accent, eyebrow, countNoun, cover } = category;
  const isSignature = Boolean(eyebrow);

  return (
    <Link
      to={`/menu/${id}`}
      className={`cat ${isSignature ? "cat--dark" : ""}`}
      style={{ "--accent": accent }}
    >
      <SmartImage
        src={cover}
        alt=""
        className="cat__tile"
        ratio="1 / 1"
        eager={isSignature}
      />

      <div className="cat__text">
        {eyebrow && <span className="label cat__eyebrow">{eyebrow}</span>}
        <h2 className="cat__name">{name}</h2>
        <p className="cat__tagline">{tagline}</p>
        <span className="cat__count">
          {countDishes(category)} {countNoun}
        </span>
      </div>

      <Chevron className="cat__chev" />
    </Link>
  );
}

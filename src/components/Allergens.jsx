/* Allergen pictograms, drawn in the same line vocabulary as Ornaments.jsx.
   The five categories are the ones printed at the foot of the physical menu
   cards: wheat/rye/barley/oats, nuts, egg, milk, soy.

   <AllergenMark kind="nuts" />            one symbol, 13px, inherits colour
   <AllergenLegend />                      the footer strip, symbol + wording
   ALLERGEN_LABELS.nuts                    "Contains Nuts"
*/

const PATHS = {
  gluten: (
    <>
    <path d="M12 21V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M12 9c0-1.9 1.2-3.4 2.8-4 .3 1.9-.6 3.6-2.1 4.4M12 9c0-1.9-1.2-3.4-2.8-4-.3 1.9.6 3.6 2.1 4.4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M12 13.5c0-1.9 1.2-3.4 2.8-4 .3 1.9-.6 3.6-2.1 4.4M12 13.5c0-1.9-1.2-3.4-2.8-4-.3 1.9.6 3.6 2.1 4.4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M12 18c0-1.9 1.2-3.4 2.8-4 .3 1.9-.6 3.6-2.1 4.4M12 18c0-1.9-1.2-3.4-2.8-4-.3 1.9.6 3.6 2.1 4.4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </>
  ),
  nuts: (
    <>
    <path d="M12 2.6c2.3 0 3.7 1.9 3.3 4-.2 1.1-.1 1.8.4 2.7.9 1.6 1.1 2.7.6 4.2-.4 1.2-.3 1.9.2 2.9.9 1.8.2 4.1-2.2 5-2.6 1-5.4-.6-5.9-3.2-.2-1.1-.1-1.8-.6-2.7-.9-1.6-1-2.8-.4-4.2.5-1.1.5-1.8.1-2.8-.8-2.2.5-4.5 2.9-5.4.5-.3 1-.5 1.6-.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M9.6 7.2c.9.5 2.2.5 3.1 0M9.3 12.4c1 .6 2.4.6 3.4 0M9.8 17.4c.9.5 2.1.5 3-.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </>
  ),
  egg: (
    <>
    <path d="M12 2.8c3.4 0 6.2 5.1 6.2 9.3 0 4.3-2.8 7.1-6.2 7.1s-6.2-2.8-6.2-7.1c0-4.2 2.8-9.3 6.2-9.3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M9.2 13.6c.9-1 1.6-1 2.4 0 .8 1 1.5 1 2.3 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </>
  ),
  milk: (
    <>
    <path d="M9.4 2.8h5.2M10 2.8v2.4L7.9 8.6a3 3 0 0 0-.4 1.5v9.1c0 .8.6 1.4 1.4 1.4h6.2c.8 0 1.4-.6 1.4-1.4V10a3 3 0 0 0-.4-1.5L14 5.2V2.8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M7.6 12.6h8.8" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M10.2 15.6h3.6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </>
  ),
  soy: (
    <>
    <path d="M5.4 18.6C5.4 11.3 11.3 5.4 18.6 5.4 18.6 12.7 12.7 18.6 5.4 18.6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="9.3" cy="14.7" r="1.45" stroke="currentColor" strokeWidth="1.05"/>
    <circle cx="12" cy="12" r="1.45" stroke="currentColor" strokeWidth="1.05"/>
    <circle cx="14.7" cy="9.3" r="1.45" stroke="currentColor" strokeWidth="1.05"/>
    </>
  ),
};

export const ALLERGEN_LABELS = {
  gluten: "Contains Wheat/Rye/Barley/Oats",
  nuts: "Contains Nuts",
  egg: "Contains Egg",
  milk: "Contains Milk",
  soy: "Contains Soy",
};

/** The order they are printed in, so every surface lists them the same way. */
export const ALLERGEN_ORDER = ["gluten","nuts","egg","milk","soy"];

export function AllergenMark({ kind, size = 13, className = "" }) {
  const path = PATHS[kind];
  if (!path) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label={ALLERGEN_LABELS[kind]}
    >
      {path}
    </svg>
  );
}

/** A dish row or sheet: the marks only, named for a screen reader. */
export function AllergenMarks({ kinds = [], size = 13, className = "" }) {
  const present = ALLERGEN_ORDER.filter((k) => kinds.includes(k));
  if (!present.length) return null;
  return (
    <span className={`allergens ${className}`}>
      {present.map((k) => (
        <AllergenMark key={k} kind={k} size={size} />
      ))}
    </span>
  );
}

/** The legend, as printed at the foot of the card. */
export function AllergenLegend({ className = "" }) {
  return (
    <ul className={`allergen-legend ${className}`}>
      {ALLERGEN_ORDER.map((k) => (
        <li key={k}>
          <span aria-hidden="true"><AllergenMark kind={k} size={13} /></span>
          <span>{ALLERGEN_LABELS[k]}</span>
        </li>
      ))}
    </ul>
  );
}

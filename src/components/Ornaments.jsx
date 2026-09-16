/* Small decorative marks drawn from the logo's vocabulary:
   the four-point sparkle that sits either side of the clover.
   Kept as inline SVG so they cost nothing to load. */

export function Sparkle({ size = 10, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 0C12 6.9 17.1 12 24 12C17.1 12 12 17.1 12 24C12 17.1 6.9 12 0 12C6.9 12 12 6.9 12 0Z" />
    </svg>
  );
}

/* A hairline rule. Pass a label for "──── EXPLORE THE MENU ────",
   or sparkle for "──── ✦ ────". */
export function Rule({ label, sparkle = false, className = "" }) {
  return (
    <div className={`rule ${className}`}>
      <span className="rule__line" />
      {label && <span className="label rule__label">{label}</span>}
      {sparkle && <Sparkle size={9} className="rule__sparkle" />}
      <span className="rule__line" />
    </div>
  );
}

/* Oversized leaf outlines that sit behind the hero, barely visible.
   Purely decorative — hidden from assistive tech. */
export function Leaf({ className = "", size = 260 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 98C2 45 45 2 98 2C98 55 55 98 2 98Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export function Chevron({ className = "", dir = "right" }) {
  const d = dir === "left" ? "M15 5L8 12L15 19" : "M9 5L16 12L9 19";
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

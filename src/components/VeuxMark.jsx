/* The Veux clover, converted from the Illustrator master in brand/.
   Pure path data — it takes its colour from CSS, so one definition serves
   the gold mark in the topbar and the light-gold one on the dark cards.

   Defined once as a <symbol> at the root of the app and referenced with
   <use> wherever it appears, so the geometry sits in the document a single
   time however many photo-less tiles are on screen. */

const VIEW_BOX = "0 0 714 530";
const ID = "veux-mark";

/** Rendered once, by App. Invisible — only the definition matters. */
export function VeuxMarkSprite() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute" }}
    >
      <symbol id={ID} viewBox={VIEW_BOX}>
        <path d="m357 362l6 5c13 13 30 20 48 20c19 0 36-7 49-20c13-12 20-30 20-48c0-18-7-35-20-48l-6-6l6-6c13-12 20-30 20-48c0-18-7-35-20-48c-13-13-30-20-49-20c-18 0-35 7-48 20l-6 5l-5-5c-13-13-30-20-49-20c-18 0-35 7-48 20c-13 13-20 30-20 48c0 18 7 36 20 48l6 6l-6 6c-13 13-20 30-20 48c0 18 7 36 20 48c13 13 30 20 48 20c19 0 36-7 49-20zm54 41c-20 0-38-6-54-19c-15 13-34 19-54 19c-22 0-43-8-59-24c-16-16-25-37-25-60c0-20 7-39 20-54c-13-15-20-34-20-54c0-22 9-44 25-60c16-15 37-24 59-24c20 0 39 7 54 19c16-12 34-19 54-19c23 0 44 9 60 24c16 16 25 38 25 60c0 20-7 39-20 54c13 15 20 34 20 54c0 23-9 44-25 60c-16 16-37 24-60 24"/>
        <path d="m229 145c-67 0-121 54-121 120c0 67 54 121 121 121l8 0l0 8c0 66 54 120 120 120c67 0 121-54 121-120l0-8l8 0c66 0 121-54 121-121c0-66-55-120-121-120l-8 0l0-8c0-67-54-121-121-121c-66 0-120 54-120 121l0 8zm128 385c-72 0-132-57-136-129c-72-4-129-63-129-136c0-73 57-132 129-136c4-72 64-129 136-129c73 0 133 57 137 129c71 4 129 63 129 136c0 73-58 132-129 136c-4 72-64 129-137 129"/>
        <path d="m426 267c0 0 0 1-1 1c0 0 0 0 0 0c-4 1-8 1-12 2c-5 0-10 1-15 3c-19 7-33 23-37 44c-1 4-2 8-2 12c-1 2-1 4-1 6c0 1-1 1-1 1c0 0 0 0 0-1c0 0 0 0 0 0c-1-6-2-11-3-17c-3-20-18-39-40-46c-4-1-8-2-12-2c-4-1-9-1-13-2c0 0 0 0 0-1c0 0 0 0 0 0c0 0 1 0 1 0c2-1 3-1 5-1c4-1 7-1 11-2c10-1 19-5 27-11c11-9 18-21 21-35c1-3 1-8 2-12c0-2 0-4 1-7c0 0 0 0 0 0c0 0 1 0 1 0c0 0 0 1 0 1c1 5 2 10 2 16c3 21 19 40 42 47c4 1 7 1 11 2c4 0 8 1 12 2c0 0 1 0 1 0"/>
        <path d="m42 226c0 0 0 0 0 0c0 0 0 0 0 0c0 3 1 5 1 8c0 3 1 6 2 9c4 11 14 20 26 22c3 1 5 1 8 1c1 1 2 1 4 1c0 0 0 0 0 0c0 0 0 1 0 1c0 0-1 0-1 0c-3 0-6 1-10 1c-12 2-23 11-28 25c0 2-1 5-1 7c0 2-1 5-1 7c0 1 0 1 0 1c-1 0-1 0-1-1c0 0 0 0 0 0c0-1 0-2 0-3c-1-2-1-4-1-7c-1-6-4-11-7-16c-6-6-13-11-21-13c-2 0-5 0-7-1c-2 0-3 0-5 0c0 0 0-1 0-1c0 0 0 0 0 0c0 0 0 0 1 0c3-1 6-1 9-2c13-1 25-11 29-25c0-2 1-4 1-6c0-3 1-5 1-8c0 0 0 0 1 0"/>
        <path d="m673 226c0 0 0 0 0 0c0 0 0 0 0 0c1 3 1 5 1 8c1 3 1 6 3 9c4 11 13 20 26 22c2 1 5 1 7 1c1 1 3 1 4 1c0 0 0 0 0 0c0 0 0 1 0 1c0 0 0 0 0 0c-4 0-7 1-10 1c-13 2-24 11-28 25c-1 2-1 5-2 7c0 2 0 5-1 7c0 1 0 1 0 1c0 0 0 0 0-1c0 0 0 0 0 0c-1-1-1-2-1-3c0-2-1-4-1-7c-1-6-3-11-7-16c-5-6-12-11-21-13c-2 0-5 0-7-1c-1 0-3 0-4 0c0 0-1-1-1-1c0 0 1 0 1 0c0 0 0 0 0 0c3-1 6-1 10-2c13-1 24-11 28-25c1-2 1-4 1-6c1-3 1-5 2-8c0 0 0 0 0 0"/>
      </symbol>
    </svg>
  );
}

export default function VeuxMark({ className = "", title }) {
  return (
    <svg
      className={["veuxmark", className].filter(Boolean).join(" ")}
      viewBox={VIEW_BOX}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <use href={"#" + ID} />
    </svg>
  );
}

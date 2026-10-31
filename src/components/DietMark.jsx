/**
 * The veg / non-veg square, in the colours every Indian menu uses.
 *
 * It sits in the list as well as the dish sheet on purpose: a guest who is
 * scanning for something they can eat should not have to open each dish to
 * find out. Dishes whose diet the chef has not confirmed show nothing at
 * all — an absent mark is honest, a guessed one is not.
 */
export default function DietMark({ diet }) {
  if (!diet) return null;

  const veg = diet.toLowerCase().startsWith("veg");

  return (
    <span
      className={`dietmark dietmark--${veg ? "veg" : "nonveg"}`}
      role="img"
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    />
  );
}

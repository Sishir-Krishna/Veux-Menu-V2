import { useId } from "react";

/* Case- and accent-insensitive: a guest typing "jalapeno" or "cafe" on a
   phone keyboard should still find the dish. */
export const fold = (s) =>
  (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Does this dish match? Name first, then description. */
export const dishMatches = (dish, q) =>
  fold(dish.name).includes(q) || fold(dish.desc).includes(q);

/**
 * One field, pinned under the topbar.
 *
 * 212 dishes across as many as fourteen collapsed groups means finding one
 * of them is a guessing game about which heading it lives under. Typing is
 * faster than guessing.
 */
export default function MenuSearch({ value, onChange, matches }) {
  const id = useId();
  const searching = value.trim().length > 0;

  return (
    <div className="search">
      <label className="sr-only" htmlFor={id}>
        Search this menu
      </label>
      <input
        id={id}
        className="search__field"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search this menu"
        autoComplete="off"
        enterKeyHint="search"
      />
      {searching && (
        <p className="search__count" role="status">
          {matches === 0
            ? "Nothing by that name"
            : `${matches} ${matches === 1 ? "dish" : "dishes"}`}
        </p>
      )}
    </div>
  );
}

import { useCallback, useEffect, useRef } from "react";

/**
 * Gentle reveal on scroll.
 *
 * Returns a ref callback — attach it to anything with the `reveal` class and
 * it gains `is-in` once it enters the viewport. One shared observer for the
 * whole page, and elements are unobserved after firing, so this costs
 * essentially nothing on a mid-range phone.
 */
export default function useReveal(rootMargin = "0px 0px -8% 0px") {
  const observer = useRef(null);

  // Built on first use rather than in an effect: ref callbacks run during
  // commit, which is before effects, so the observer has to already exist
  // or the first batch of elements would skip their animation.
  const getObserver = useCallback(() => {
    if (observer.current) return observer.current;
    if (typeof IntersectionObserver === "undefined") return null;

    observer.current = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin, threshold: 0.05 }
    );
    return observer.current;
  }, [rootMargin]);

  useEffect(() => () => observer.current?.disconnect(), []);

  return useCallback(
    (node) => {
      if (!node) return;
      const obs = getObserver();
      // No IntersectionObserver (very old browser): show everything.
      if (!obs) {
        node.classList.add("is-in");
        return;
      }
      obs.observe(node);
    },
    [getObserver]
  );
}

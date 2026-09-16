import { useEffect } from "react";

/**
 * Freezes the page behind a full-screen overlay and puts it back exactly
 * where it was on close.
 *
 * `overflow: hidden` on the body is not enough on iOS Safari — the page
 * still rubber-bands under the overlay. Pinning the body with `position:
 * fixed` does hold, but it also throws the scroll position away, so we
 * carry it in `top` and scroll back to it during cleanup.
 */
export default function useScrollLock(active = true) {
  useEffect(() => {
    if (!active) return;

    const { body } = document;
    const y = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      window.scrollTo(0, y);
    };
  }, [active]);
}

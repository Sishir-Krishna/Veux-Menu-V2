import { useEffect, useRef, useState } from "react";

/**
 * Every food image in the app goes through here.
 *
 * Two thirds of the menu has no photograph yet, so a missing or failed
 * image must look deliberate rather than broken: we fall back to a cream
 * tile carrying the clover mark. Drop the real file in at the path named
 * in src/data/menu.js and it appears with no code change.
 *
 * Images below the fold are lazy-loaded and fade in once decoded.
 */
export default function SmartImage({
  src,
  alt = "",
  className = "",
  ratio = "1 / 1",
  eager = false,
  sizes,
}) {
  const [status, setStatus] = useState(src ? "loading" : "empty");
  const imgRef = useRef(null);

  // Reset when the gallery swipes to a different photo.
  useEffect(() => {
    if (!src) {
      setStatus("empty");
      return;
    }
    setStatus("loading");

    /* A cached image can finish loading before React attaches onLoad, so
       that event never fires and the tile would stay at opacity 0 for good.
       This is the normal path into the dish sheet, not an edge case: the
       category page has already fetched the very same file for its thumbnail,
       so the hero below renders straight from cache. Ask the element what it
       already knows instead of waiting to be told. */
    const img = imgRef.current;
    if (img?.complete) setStatus(img.naturalWidth > 0 ? "ready" : "empty");
  }, [src]);

  return (
    <div
      className={`smartimg smartimg--${status} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src && status !== "empty" && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("empty")}
          className="smartimg__img"
        />
      )}

      {status === "empty" && (
        <span className="smartimg__mark" aria-hidden="true">
          <img src="/logos/veux-symbol.png" alt="" loading="lazy" decoding="async" />
        </span>
      )}
    </div>
  );
}

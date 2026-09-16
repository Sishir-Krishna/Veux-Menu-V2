import { useEffect, useState } from "react";

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

  // Reset when the gallery swipes to a different photo.
  useEffect(() => {
    setStatus(src ? "loading" : "empty");
  }, [src]);

  return (
    <div
      className={`smartimg smartimg--${status} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src && status !== "empty" && (
        <img
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

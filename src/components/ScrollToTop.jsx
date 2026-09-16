import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Moving between screens should start at the top, the way opening a new
   page of a printed menu does.

   The dish overlay is a nested route drawn on top of its category, so the
   last path segment changing is not a new page — it is a sheet opening over
   the one you are already reading. Keying on everything up to the category
   leaves the page underneath where the guest left it; useScrollLock then
   restores that exact position when the sheet closes. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const pageKey = pathname.split("/").slice(0, 3).join("/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);

  return null;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Moving between screens should start at the top, the way opening a new
   page of a printed menu does. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

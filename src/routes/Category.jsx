import { useParams, Navigate } from "react-router-dom";
import { getCategory } from "../lib/menu.js";

/* Placeholder — the full category page is the next milestone. */
export default function Category() {
  const { categoryId } = useParams();
  const category = getCategory(categoryId);

  if (!category) return <Navigate to="/" replace />;

  return (
    <main style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: 34 }}>{category.name}</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 8 }}>{category.tagline}</p>
    </main>
  );
}

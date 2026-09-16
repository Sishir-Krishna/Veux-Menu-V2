import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./routes/Landing.jsx";
import Category from "./routes/Category.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* Each category has its own URL so it can carry its own QR code.
          The nested dish route is a real history entry, which is what makes
          the phone's back button close the dish view instead of going home. */}
      <Route path="/menu/:categoryId" element={<Category />} />
      <Route path="/menu/:categoryId/:dishSlug" element={<Category />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Html, Boshlangich, Orta, Mukammal } from "./components/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/frontend/html" element={<Html />} />
        <Route path="/frontend/boshlangich" element={<Boshlangich />} />
        <Route path="/frontend/orta" element={<Orta />} />
        <Route path="/frontend/mukammal" element={<Mukammal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

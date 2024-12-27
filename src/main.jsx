import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Html,
  Boshlangich,
  Orta,
  Mukammal,
  Css,
  CssBoshlangich,
  CssOrta,
  CssMukammal,
  HtmlPractice,
  CssPractice,
  Temurbek,
  HomeJs,
  BoshlangichJs
} from "./components/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/frontend/html" element={<Html />} />
        <Route path="/frontend/css" element={<Css />} />
        <Route path="/html/boshlangich" element={<Boshlangich />} />
        <Route path="/html/orta" element={<Orta />} />
        <Route path="/html/mukammal" element={<Mukammal />} />
        <Route path="/css/boshlangich" element={<CssBoshlangich />} />
        <Route path="/css/orta" element={<CssBoshlangich />} />
        <Route path="/css/mukammal" element={<CssBoshlangich />} />
        <Route path="/html/practice" element={<HtmlPractice />} />
        <Route path="/css/practice" element={<CssPractice />} />
        <Route path="/html/temurbek" element={<Temurbek/>}/>
        <Route path="/frontend/javascript" element={<HomeJs/>}/>
        <Route path="/javascript/boshlangich"  element={<BoshlangichJs/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

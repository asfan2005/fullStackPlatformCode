import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
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
  BoshlangichJs,
  JsPractice,
  OrtaJs,
  MukammalJs,
  PageTailwandcss,
  TailwandcssBoshlangich,
  PageTailwandcssOrta,
  PageTailwandcssMukammal,
  TailwandCssPractice,
  HomePageReact,
  BoshlangichReact,
  OrtaReact,
  MukammalReact,
  KomputerTuzilishi,
  ReactOperationTizim,
  MatnMuharririWord,
  ReactElektronJadvallar,
  ReactKomputerTaqdimot,
  ReactInternetSavod,
  KomputerXavfsizlikOne,
  BlutliTexnologiyalar,
  Profile
} from "./components/index.js";
import { Routes, Route } from "react-router-dom";
import Setting from "./adminPage/Setting.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
        <Route path="/javascript/practice" element={<JsPractice/>}/>
        <Route path="/javascript/orta" element={<OrtaJs/>}/>
        <Route path="/javascript/mukammal" element={<MukammalJs/>}/>
        <Route path="/frontend/tailwind" element={<PageTailwandcss/>}/>
        <Route path="/tailwindcss/boshlangich" element={<TailwandcssBoshlangich/>}/>
        <Route path="/tailwindcss/orta" element={<PageTailwandcssOrta/>}/>
        <Route path="/tailwindcss/mukammal" element={<PageTailwandcssMukammal/>}/>
        <Route path="/tailwindcss/practice" element={<TailwandCssPractice/>}/>
        <Route path="/frontend/react" element={<HomePageReact/>}/>
        <Route path="/react/boshlangich" element={<BoshlangichReact/>}/>
        <Route path="/react/orta" element={<OrtaReact/>}/>
        <Route path="/react/mukammal" element={<MukammalReact/>}/>
        <Route path="/komputer/tuzilishi" element={<KomputerTuzilishi/>}/>
        <Route path="/komputer/operatsionTizim" element={<ReactOperationTizim/>}/>
        <Route path="/komputer/matnMuharriri" element={<MatnMuharririWord/>}/>
        <Route path="/komputer/elektronJadvallar" element={<ReactElektronJadvallar/>}/>
        <Route path="/komputer/taqdimotlar" element={<ReactKomputerTaqdimot/>}/>
        <Route path="/komputer/internet" element={<ReactInternetSavod/>}/>
        <Route path="/komputer/xavfsizlik" element={<KomputerXavfsizlikOne/>}/>
        <Route path="/komputer/bulutliTexnologiyalar" element={<BlutliTexnologiyalar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Setting/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

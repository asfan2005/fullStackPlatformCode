import React, { useState, useEffect } from "react";
import {
  Type,
  Image,
  Link,
  List,
  Table,
  FileInput,
  Layers,
  Code,
  Menu,
  X,
  Eye,
  EyeOff,
} from "lucide-react";
import "./h.css";

const HtmlElements = () => {
  const [activeTab, setActiveTab] = useState("text");
  const [showPreview, setShowPreview] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const tabs = [
    { id: "text", title: "Matn", icon: Type },
    { id: "media", title: "Media", icon: Image },
    { id: "links", title: "Havolalar", icon: Link },
    { id: "lists", title: "Ro'yxatlar", icon: List },
    { id: "tables", title: "Jadvallar", icon: Table },
    { id: "forms", title: "Formalar", icon: FileInput },
    { id: "semantic", title: "Semantik", icon: Layers },
    { id: "iframe", title: "Iframe", icon: Code },
  ];

  const content = {
    text: {
      title: "Matn elementlari",
      description: "HTML da matnni formatlash uchun turli teglar mavjud:",
      code: `<h1>Eng katta sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>
<h4>To'rtinchi darajali sarlavha</h4>
<h5>Beshinchi darajali sarlavha</h5>
<h6>Oltinchi darajali sarlavha</h6>
<p>Bu oddiy paragraf.</p>
<strong>Bu qalin matn.</strong>
<em>Bu kursiv matn.</em>`,
      explanation:
        "<h1> dan <h6> gacha sarlavhalar. <p> paragraflar uchun. <strong> va <em> matnni ajratib ko'rsatish uchun.",
    },
    media: {
      title: "Media elementlari",
      description: "Rasmlar, video va audio qo'shish uchun elementlar:",
      code: `<img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="Tasvir tavsifi">
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
      <audio src="https://www.w3schools.com/html/horse.mp3" controls></audio>`,
      explanation:
        "<img> rasm uchun, <video> video uchun, <audio> audio uchun. controls atributi media boshqaruv elementlarini ko'rsatadi.",
    },
    links: {
      title: "Havolalar",
      description: "Havolalar qo'shish:",
      code: `<a href="https://www.example.com">Bu havola matni</a>`,
      explanation:
        "<a> tegi havolalar uchun ishlatiladi. href atributi havola manzilini ko'rsatadi.",
    },
    lists: {
      title: "Ro'yxatlar",
      description: "HTML da ikki xil asosiy ro'yxat turi mavjud:",
      code: `<ul>
  <li>Tartibsiz ro'yxat elementi</li>
  <li>Yana bir element</li>
</ul>
<ol>
  <li>Tartibli ro'yxatning birinchi elementi</li>
  <li>Ikkinchi element</li>
</ol>`,
      explanation:
        "<ul> tartibsiz ro'yxat (nuqtalar bilan). <ol> tartibli ro'yxat (raqamlar bilan). Har bir element <li> tegi bilan belgilanadi.",
    },
    tables: {
      title: "Jadvallar",
      description: "HTML da jadvallar quyidagicha yaratiladi:",
      code: `<table border="1">
    <tr>
      <th>Sarlavha 1</th>
      <th>Sarlavha 2</th>
    </tr>
    <tr>
      <td>Qator 1, Ustun 1</td>
      <td>Qator 1, Ustun 2</td>
    </tr>
    <tr>
      <td>Qator 2, Ustun 1</td>
      <td>Qator 2, Ustun 2</td>
    </tr>
  </table>`,
      explanation:
        "<table> jadvalni, <tr> qatorni, <th> sarlavha katakchani, <td> oddiy katakchani belgilaydi. border='1' atributi jadval chegaralarini ko'rsatadi.",
    },
    forms: {
      title: "Formalar",
      description:
        "HTML da formalar turli kiritish elementlarini o'z ichiga oladi:",
      code: `<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Foydalanuvchi nomi"> <br/> <br/>
  <textarea  name="message" placeholder="Xabar"></textarea> <br/> <br/>
  <select name="country">
    <option value="uz">O'zbekiston</option>
    <option value="ru">Rossiya</option>
  </select>
  <input type="submit" value="Yuborish">
</form>`,
      explanation:
        "<form> tegi forma yaratish uchun. <input>, <textarea>, <select> va <option> turli kiritish maydonlari uchun.",
    },
    semantic: {
      title: "Semantik elementlar",
      description: "Semantik teglar sahifa tuzilishini aniqroq ifodalaydi:",
      code: `<header>
  <h1>Sayt sarlavhasi</h1>
  <nav>
    <ul>
      <li><a href="#home">Bosh sahifa</a></li>
      <li><a href="#about">Haqida</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>Maqola sarlavhasi</h2>
    <p>Maqola matni...</p>
  </article>
</main>
<footer>
  <p>&copy; 2023 Mening saytim</p>
</footer>`,
      explanation:
        "<header>, <nav>, <main>, <article>, <footer> kabi teglar sahifaning turli qismlarini aniq belgilaydi.",
    },
    iframe: {
      title: "Iframe elementi",
      description:
        "Iframe boshqa veb-sahifani joriy sahifaga joylash uchun ishlatiladi:",
      code: `<iframe src="https://www.example.com" width="600" height="400"></iframe>`,
      explanation:
        "<iframe> tegi orqali boshqa veb-sahifani o'z sahifangizga joylashtirish mumkin. width va height atributlari o'lchamlarni belgilaydi.",
    },
  };

  useEffect(() => {
    const codePreview = document.getElementById("codePreview");
    if (codePreview && activeCode) {
      codePreview.srcdoc = activeCode;
    }
  }, [activeCode]);

  const togglePreview = (code) => {
    setActiveCode(activeCode === code ? null : code);
  };

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      id="app-containery"
      className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg"
    >
      {/* Mobile Menu Button */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md focus:outline-none"
        >
          {menuOpen ? (
            <X className="mr-2 h-5 w-5" />
          ) : (
            <Menu className="mr-2 h-5 w-5" />
          )}
          {menuOpen ? "Yopish" : "Menyu"}
        </button>
      </div>

      {/* Menu Tabs */}
      <div
        id="app-containera"
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block md:flex md:flex-wrap mb-6 bg-gray-100 rounded-lg p-2 overflow-x-auto`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setMenuOpen(false);
            }}
            className={`flex items-center justify-center px-4 py-2 rounded-md m-1 transition-colors w-full md:w-auto md:flex-grow ${
              activeTab === tab.id
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <tab.icon className="mr-2 h-5 w-5" />
            <span className="whitespace-nowrap">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div
        id="app-containery"
        className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-200px)]"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content[activeTab].title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content[activeTab].description}
        </p>
        <div className="mb-3 md:mb-4 bg-gray-800 text-white p-2 md:p-4 rounded-lg overflow-x-auto">
          <pre className="text-xs md:text-sm whitespace-pre-wrap break-words">
            <code>{content[activeTab].code.trim()}</code>
          </pre>
        </div>
        <p className="mb-3 md:mb-4 text-gray-600 italic text-sm md:text-base">
          {content[activeTab].explanation}
        </p>

        {/* Code Preview */}
        <div className="mt-4 md:mt-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-indigo-600">
              Natija
            </h3>
            <button
              onClick={togglePreview}
              className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm md:text-base focus:outline-none"
            >
              {showPreview ? (
                <EyeOff className="mr-1 h-4 w-4" />
              ) : (
                <Eye className="mr-1 h-4 w-4" />
              )}
              {showPreview ? "Yashirish" : "Ko'rsatish"}
            </button>
          </div>
          {showPreview && (
            <div className="border-2 border-indigo-200 rounded-lg p-2 md:p-4 bg-white overflow-x-auto">
              <iframe
                id="codePreview"
                title="HTML Preview"
                className="w-full min-h-[150px] md:min-h-[200px] border-none"
                sandbox="allow-scripts"
              ></iframe>
            </div>
          )}
        </div>

        {/* User Code Section */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
            Foydalanuvchi Kiritgan Kod
          </h3>
          <textarea
            value={userCode}
            onChange={handleUserCodeChange}
            className="w-full p-2 md:p-4 bg-gray-800 text-white rounded-lg mb-3 md:mb-4"
            rows="10"
            placeholder="Bu yerga HTML kodingizni kiriting..."
          ></textarea>
          <button
            onClick={toggleUserCodePreview}
            className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm md:text-base focus:outline-none"
          >
            {activeCode === userCode ? (
              <EyeOff className="mr-1 h-4 w-4" />
            ) : (
              <Eye className="mr-1 h-4 w-4" />
            )}
            {activeCode === userCode ? "Yashirish" : "Ko'rsatish"}
          </button>
          {activeCode === userCode && (
            <div className="border-2 border-indigo-200 rounded-lg p-2 md:p-4 bg-white overflow-x-auto mt-4">
              <iframe
                id="codePreview"
                title="HTML Preview"
                className="w-full min-h-[150px] md:min-h-[200px] border-none"
                sandbox="allow-scripts"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HtmlElements;
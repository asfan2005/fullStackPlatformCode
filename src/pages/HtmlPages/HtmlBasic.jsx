import React, { useState, useEffect } from "react";
import {
  Code,
  Layout,
  Type,
  Image,
  List,
  Eye,
  EyeOff,
  Menu,
  X,
} from "lucide-react";
import "./h.css"; // Agar sizda qo'shimcha CSS bo'lsa, bu yerga qo'shing

const HtmlBasics = () => {
  const [activeTab, setActiveTab] = useState("structure");
  const [showPreview, setShowPreview] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "structure", title: "Tuzilma", icon: Layout },
    { id: "text", title: "Matn", icon: Type },
    { id: "lists", title: "Ro'yxatlar", icon: List },
    { id: "links", title: "Havolalar", icon: Code },
    { id: "images", title: "Rasmlar", icon: Image },
  ];

  const content = {
    structure: {
      title: "HTML Tuzilmasi",
      description: "HTML hujjatning asosiy tuzilmasi quyidagicha:",
      code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mening birinchi HTML sahifam</title>
</head>
<body>
  <h1>Salom, dunyo!</h1>
  <p>Bu mening birinchi HTML sahifam.</p>
</body>
</html>`,
      explanation:
        "<!DOCTYPE html> HTML5 ekanligini bildiradi. <html> butun hujjatni o'rab turadi. <head> meta-ma'lumotlarni, <body> esa asosiy kontentni o'z ichiga oladi.",
    },
    text: {
      title: "Matn elementlari",
      description: "HTML da matnni formatlash uchun turli teglar mavjud:",
      code: `<h1>Bu eng katta sarlavha</h1>
<h2>Bu ikkinchi darajali sarlavha</h2>
<p>Bu oddiy paragraf.</p>
<strong>Bu qalin matn.</strong>
<em>Bu kursiv matn.</em>
<br>
<hr>`,
      explanation:
        "<h1> dan <h6> gacha sarlavhalar. <p> paragraflar uchun. <strong> va <em> matnni ajratib ko'rsatish uchun. <br> qator tashlash, <hr> gorizontal chiziq.",
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
    links: {
      title: "Havolalar",
      description: "Havolalar <a> tegi yordamida yaratiladi:",
      code: `<a href="https://www.example.com">Bu havola matni</a>
<a href="about.html">Ichki sahifaga havola</a>
<a href="mailto:info@example.com">Elektron pochta havolasi</a>`,
      explanation:
        "href atributi havola manzilini ko'rsatadi. Bu boshqa veb-saytga, ichki sahifaga yoki hatto elektron pochta manziliga havola bo'lishi mumkin.",
    },
    images: {
      title: "Rasmlar",
      description: "Rasmlar <img> tegi yordamida qo'shiladi:",
      code: `<img src="/api/placeholder/300/200" alt="Namuna rasm" width="300" height="200">`,
      explanation:
        "src - rasm fayli joylashuvi. alt - rasm ko'rsatilmasa chiqadigan matn. width va height rasmning o'lchamlarini belgilaydi.",
    },
  };

  useEffect(() => {
    const codePreview = document.getElementById("codePreview");
    if (codePreview && showPreview) {
      codePreview.srcdoc = content[activeTab].code;
    }
  }, [activeTab, showPreview]);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="app-containery" className="w-full md:max-w-4xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg">
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
        } md:block md:flex mb-6 bg-gray-100 rounded-lg p-2 overflow-x-auto`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setMenuOpen(false);
            }}
            className={`flex items-center px-4 py-2 rounded-md mr-2 mb-2 md:mb-0 transition-colors w-full md:w-auto ${
              activeTab === tab.id
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700 hover:bg-indigo-100"
            }`}
          >
            <tab.icon className="mr-2 h-5 w-5" />
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div id="app-containery" className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
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
      </div>
    </div>
  );
};

export default HtmlBasics;
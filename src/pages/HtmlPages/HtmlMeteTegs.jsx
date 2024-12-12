import React, { useState, useEffect } from "react";
import { FileText, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlMeteTegs = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };

  const content = {
    metaTags: {
      title: "HTML Meta Teglari",
      description:
        "HTML meta teglari veb-sahifaning metama'lumotlarini belgilash uchun ishlatiladi.",
      sections: [
        {
          id: "charset",
          title: "Charset",
          code: `<meta charset="UTF-8">`,
          explanation: `<meta charset="UTF-8"> tegi veb-sahifaning belgilar to'plamini belgilash uchun ishlatiladi.`,
        },
        {
          id: "viewport",
          title: "Viewport",
          code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
          explanation: `<meta name="viewport" content="width=device-width, initial-scale=1.0"> tegi veb-sahifaning ko'rinishini va o'lchamini boshqarish uchun ishlatiladi.`,
        },
        {
          id: "description",
          title: "Tavsif",
          code: `<meta name="description" content="Bu veb-sahifaning tavsifi.">`,
          explanation: `<meta name="description" content="Bu veb-sahifaning tavsifi."> tegi veb-sahifaning qisqa tavsifini belgilash uchun ishlatiladi.`,
        },
        {
          id: "keywords",
          title: "Kalit So'zlar",
          code: `<meta name="keywords" content="HTML, CSS, JavaScript">`,
          explanation: `<meta name="keywords" content="HTML, CSS, JavaScript"> tegi veb-sahifa uchun kalit so'zlarni belgilash uchun ishlatiladi.`,
        },
        {
          id: "author",
          title: "Muallif",
          code: `<meta name="author" content="Ism Familiya">`,
          explanation: `<meta name="author" content="Ism Familiya"> tegi veb-sahifaning muallifini belgilash uchun ishlatiladi.`,
        },
        {
          id: "refresh",
          title: "Yangilanish",
          code: `<meta http-equiv="refresh" content="30">`,
          explanation: `<meta http-equiv="refresh" content="30"> tegi veb-sahifani har 30 soniyada yangilash uchun ishlatiladi.`,
        },
        {
          id: "robots",
          title: "Robots",
          code: `<meta name="robots" content="index, follow">`,
          explanation: `<meta name="robots" content="index, follow"> tegi qidiruv tizimlariga veb-sahifani indekslash va havolalarni kuzatish uchun ko'rsatma beradi.`,
        },
        {
          id: "ogTitle",
          title: "Open Graph Title",
          code: `<meta property="og:title" content="Bu veb-sahifaning sarlavhasi">`,
          explanation: `<meta property="og:title" content="Bu veb-sahifaning sarlavhasi"> tegi veb-sahifaning Open Graph sarlavhasini belgilash uchun ishlatiladi.`,
        },
        {
          id: "ogDescription",
          title: "Open Graph Tavsifi",
          code: `<meta property="og:description" content="Bu veb-sahifaning Open Graph tavsifi">`,
          explanation: `<meta property="og:description" content="Bu veb-sahifaning Open Graph tavsifi"> tegi veb-sahifaning Open Graph tavsifini belgilash uchun ishlatiladi.`,
        },
        {
          id: "ogImage",
          title: "Open Graph Rasm",
          code: `<meta property="og:image" content="https://www.example.com/image.jpg">`,
          explanation: `<meta property="og:image" content="https://www.example.com/image.jpg"> tegi veb-sahifaning Open Graph rasm manzilini belgilash uchun ishlatiladi.`,
        },
        {
          id: "ogUrl",
          title: "Open Graph URL",
          code: `<meta property="og:url" content="https://www.example.com">`,
          explanation: `<meta property="og:url" content="https://www.example.com"> tegi veb-sahifaning Open Graph URL manzilini belgilash uchun ishlatiladi.`,
        },
      ],
    },
  };

  useEffect(() => {
    const codePreview = document.getElementById("codePreview");
    if (codePreview && activeCode) {
      codePreview.srcdoc = `<html><head>${activeCode}</head><body><p>Meta teg preview</p></body></html>`;
    }
  }, [activeCode]);

  const togglePreview = (code) => {
    setActiveCode(activeCode === code ? null : code);
  };

  return (
    <div
      id="app-containery"
      className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg"
    >
      {/* Content Section */}
      <div
        id="app-containery"
        className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.metaTags.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.metaTags.description}
        </p>
        {content.metaTags.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
              {section.title}
            </h3>
            <div className="mb-3 md:mb-4 bg-gray-800 text-white p-2 md:p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs md:text-sm whitespace-pre-wrap break-words">
                <code>{section.code.trim()}</code>
              </pre>
            </div>
            <p className="mb-3 md:mb-4 text-gray-600 italic text-sm md:text-base">
              {section.explanation}
            </p>
            <button
              onClick={() => togglePreview(section.code)}
              className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm md:text-base focus:outline-none"
            >
              {activeCode === section.code ? (
                <EyeOff className="mr-1 h-4 w-4" />
              ) : (
                <Eye className="mr-1 h-4 w-4" />
              )}
              {activeCode === section.code ? "Yashirish" : "Ko'rsatish"}
            </button>
            {activeCode === section.code && (
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
        ))}

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

export default HtmlMeteTegs;
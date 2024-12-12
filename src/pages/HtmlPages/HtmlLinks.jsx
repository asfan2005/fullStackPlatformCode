import React, { useState, useEffect } from "react";
import { Link, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlLinks = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const content = {
    links: {
      title: "HTML Havolalari",
      description: "HTML havolalari (links) sahifalar orasida navigatsiya qilish uchun ishlatiladi.",
      sections: [
        {
          id: "basic",
          title: "Oddiy Havola",
          code: `<a href="https://www.example.com">Bu oddiy havola</a>`,
          explanation: `<a> tegi havolalar uchun ishlatiladi. href atributi havola manzilini ko'rsatadi.`,
        },
        {
          id: "target",
          title: "Havolani Yangi Oynada Ochish",
          code: `<a href="https://www.example.com" target="_blank">Yangi oynada ochiladigan havola</a>`,
          explanation: `target="_blank" atributi havolani yangi oynada ochish uchun ishlatiladi.`,
        },
        {
          id: "email",
          title: "Email Havolasi",
          code: `<a href="mailto:someone@example.com">Email yuborish</a>`,
          explanation: `mailto: protokoli email havolasi yaratish uchun ishlatiladi.`,
        },
        {
          id: "phone",
          title: "Telefon Havolasi",
          code: `<a href="tel:+1234567890">Telefon raqamiga qo'ng'iroq qilish</a>`,
          explanation: `tel: protokoli telefon raqamiga qo'ng'iroq qilish uchun ishlatiladi.`,
        },
        {
          id: "anchor",
          title: "Sahifa Ichidagi Havola",
          code: `<a href="#section1">1-bo'limga o'tish</a>
<div id="section1">
  <h2>1-bo'lim</h2>
  <p>Bu 1-bo'limning matni.</p>
</div>`,
          explanation: `href="#id" atributi sahifa ichidagi elementga o'tish uchun ishlatiladi.`,
        },
      ],
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

  return (
    <div id="app-containery" className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg">
      {/* Content Section */}
      <div id="app-containery" className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.links.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.links.description}
        </p>
        {content.links.sections.map((section, index) => (
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

export default HtmlLinks;
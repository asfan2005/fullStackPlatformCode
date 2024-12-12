import React, { useState, useEffect } from "react";
import { FileText, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlSemantics = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const content = {
    semantics: {
      title: "HTML Semantik Elementlar",
      description: "HTML semantik elementlar veb-sahifaning mazmunini aniqroq belgilash uchun ishlatiladi.",
      sections: [
        {
          id: "header",
          title: "Header",
          code: `<header>
  <h1>Bu sarlavha</h1>
  <p>Bu sarlavha ostidagi matn</p>
</header>`,
          explanation: `<header> tegi veb-sahifaning yoki bo'limning sarlavha qismini belgilash uchun ishlatiladi.`,
        },
        {
          id: "nav",
          title: "Navigatsiya",
          code: `<nav>
  <ul>
    <li><a href="#home">Bosh sahifa</a></li>
    <li><a href="#about">Biz haqimizda</a></li>
    <li><a href="#contact">Aloqa</a></li>
  </ul>
</nav>`,
          explanation: `<nav> tegi veb-sahifaning navigatsiya bo'limini belgilash uchun ishlatiladi.`,
        },
        {
          id: "section",
          title: "Bo'lim",
          code: `<section>
  <h2>Bo'lim sarlavhasi</h2>
  <p>Bo'lim matni</p>
</section>`,
          explanation: `<section> tegi veb-sahifaning asosiy bo'limlarini belgilash uchun ishlatiladi.`,
        },
        {
          id: "article",
          title: "Maqola",
          code: `<article>
  <h2>Maqola sarlavhasi</h2>
  <p>Maqola matni</p>
</article>`,
          explanation: `<article> tegi mustaqil mazmunli maqolalarni belgilash uchun ishlatiladi.`,
        },
        {
          id: "aside",
          title: "Chekkadagi Matn",
          code: `<aside>
  <h2>Chekkadagi sarlavha</h2>
  <p>Chekkadagi matn</p>
</aside>`,
          explanation: `<aside> tegi asosiy mazmun bilan bog'liq bo'lgan, lekin asosiy mazmundan alohida bo'lgan matnni belgilash uchun ishlatiladi.`,
        },
        {
          id: "footer",
          title: "Footer",
          code: `<footer>
  <p>Bu footer matni</p>
</footer>`,
          explanation: `<footer> tegi veb-sahifaning yoki bo'limning pastki qismini belgilash uchun ishlatiladi.`,
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
    <div className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg">
      {/* Content Section */}
      <div id="app-containery" className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.semantics.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.semantics.description}
        </p>
        {content.semantics.sections.map((section, index) => (
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

export default HtmlSemantics;
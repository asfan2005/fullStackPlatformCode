import React, { useState, useEffect } from "react";
import { FileText, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlEntities = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };

  const content = {
    entities: {
      title: "HTML Entitilar",
      description:
        "HTML entitilar maxsus belgilarni ko'rsatish uchun ishlatiladi.",
      sections: [
        {
          id: "ampersand",
          title: "Ampersand",
          code: `&amp;`,
          explanation: `&amp; entitisi ampersand (&) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "lessThan",
          title: "Kamroq Belgisi",
          code: `&lt;`,
          explanation: `&lt; entitisi kamroq (<) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "greaterThan",
          title: "Ko'proq Belgisi",
          code: `&gt;`,
          explanation: `&gt; entitisi ko'proq (>) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "quote",
          title: "Iqtibos Belgisi",
          code: `&quot;`,
          explanation: `&quot; entitisi iqtibos (") belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "apostrophe",
          title: "Apostrof Belgisi",
          code: `&apos;`,
          explanation: `&apos; entitisi apostrof (') belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "nonBreakingSpace",
          title: "Bo'shliq",
          code: `&nbsp;`,
          explanation: `&nbsp; entitisi bo'shliq belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "copyright",
          title: "Mualliflik Belgisi",
          code: `&copy;`,
          explanation: `&copy; entitisi mualliflik (©) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "registered",
          title: "Ro'yxatdan O'tgan Belgisi",
          code: `&reg;`,
          explanation: `&reg; entitisi ro'yxatdan o'tgan (®) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "trademark",
          title: "Savdo Belgisi",
          code: `&trade;`,
          explanation: `&trade; entitisi savdo (™) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "euro",
          title: "Yevro Belgisi",
          code: `&euro;`,
          explanation: `&euro; entitisi yevro (€) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "pound",
          title: "Funt Belgisi",
          code: `&pound;`,
          explanation: `&pound; entitisi funt (£) belgisini ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "yen",
          title: "Yen Belgisi",
          code: `&yen;`,
          explanation: `&yen; entitisi yen (¥) belgisini ko'rsatish uchun ishlatiladi.`,
        },
      ],
    },
  };

  useEffect(() => {
    const codePreview = document.getElementById("codePreview");
    if (codePreview && activeCode) {
      codePreview.srcdoc = `<div style="font-size: 24px;">${activeCode}</div>`;
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
          {content.entities.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.entities.description}
        </p>
        {content.entities.sections.map((section, index) => (
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

export default HtmlEntities;

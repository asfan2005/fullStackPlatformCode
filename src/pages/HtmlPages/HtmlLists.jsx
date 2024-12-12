import React, { useState, useEffect } from "react";
import { List, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlLists = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");
  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };
  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };
  const content = {
    lists: {
      title: "HTML Ro'yxatlar",
      description:
        "HTML da ikki xil asosiy ro'yxat turi mavjud: tartibsiz va tartibli ro'yxatlar.",
      sections: [
        {
          id: "unordered",
          title: "Tartibsiz Ro'yxat",
          code: `<ul>
  <li>Tartibsiz ro'yxat elementi</li>
  <li>Yana bir element</li>
  <li>Yana bir element</li>
</ul>`,
          explanation: `<ul> tegi tartibsiz ro'yxatni yaratish uchun ishlatiladi. Har bir element <li> tegi bilan belgilanadi.`,
        },
        {
          id: "ordered",
          title: "Tartibli Ro'yxat",
          code: `<ol>
  <li>Tartibli ro'yxatning birinchi elementi</li>
  <li>Ikkinchi element</li>
  <li>Uchinchi element</li>
</ol>`,
          explanation: `<ol> tegi tartibli ro'yxatni yaratish uchun ishlatiladi. Har bir element <li> tegi bilan belgilanadi.`,
        },
        {
          id: "nested",
          title: "Ichma-ich Ro'yxatlar",
          code: `<ul>
  <li>Bir element
    <ul>
      <li>Ichki element</li>
      <li>Yana bir ichki element</li>
    </ul>
  </li>
  <li>Yana bir element</li>
</ul>`,
          explanation: `Ro'yxatlar ichma-ich bo'lishi mumkin. Ichki ro'yxat <li> elementi ichida joylashadi.`,
        },
        {
          id: "description",
          title: "Tavsif Ro'yxati",
          code: `<dl>
  <dt>Atama 1</dt>
  <dd>Atama 1 tavsifi</dd>
  <dt>Atama 2</dt>
  <dd>Atama 2 tavsifi</dd>
</dl>`,
          explanation: `<dl> tegi tavsif ro'yxatini yaratish uchun ishlatiladi. <dt> atamani, <dd> esa atama tavsifini belgilaydi.`,
        },
        {
          id: "custom",
          title: "Maxsus Ro'yxatlar",
          code: `<ul style="list-style-type: square;">
  <li>Square bullet</li>
  <li>Another item</li>
</ul>
<ol type="A">
  <li>First item</li>
  <li>Second item</li>
</ol>`,
          explanation: `list-style-type atributi yordamida tartibsiz ro'yxatning markerlarini o'zgartirish mumkin. type atributi yordamida tartibli ro'yxatning raqamlarini o'zgartirish mumkin.`,
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

  return (
    <div className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg">
      {/* Content Section */}
      <div
        id="app-containery"
        className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.lists.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.lists.description}
        </p>
        {content.lists.sections.map((section, index) => (
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

export default HtmlLists;

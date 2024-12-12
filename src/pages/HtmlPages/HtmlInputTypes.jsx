import React, { useState, useEffect } from "react";
import { FileInput, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlInputTypes = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };

  const content = {
    inputTypes: {
      title: "HTML Kiritish Maydonlari",
      description:
        "HTML kiritish maydonlari foydalanuvchi ma'lumotlarini kiritish uchun ishlatiladi.",
      sections: [
        {
          id: "text",
          title: "Matn Kiritish Maydoni",
          code: `<form action="/submit" method="post">
  <label for="name">Ism:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="text"> tegi matn kiritish maydonini yaratish uchun ishlatiladi.`,
        },
        {
          id: "email",
          title: "Email Kiritish Maydoni",
          code: `<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="email"> tegi email kiritish maydonini yaratish uchun ishlatiladi.`,
        },
        {
          id: "password",
          title: "Parol Kiritish Maydoni",
          code: `<form action="/submit" method="post">
  <label for="password">Parol:</label>
  <input type="password" id="password" name="password">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="password"> tegi parol kiritish maydonini yaratish uchun ishlatiladi.`,
        },
        {
          id: "number",
          title: "Raqam Kiritish Maydoni",
          code: `<form action="/submit" method="post">
  <label for="age">Yosh:</label>
  <input type="number" id="age" name="age">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="number"> tegi raqam kiritish maydonini yaratish uchun ishlatiladi.`,
        },
        {
          id: "date",
          title: "Sana Kiritish Maydoni",
          code: `<form action="/submit" method="post">
  <label for="birthday">Tug'ilgan kun:</label>
  <input type="date" id="birthday" name="birthday">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="date"> tegi sana kiritish maydonini yaratish uchun ishlatiladi.`,
        },
        {
          id: "color",
          title: "Rang Tanlash Maydoni",
          code: `<form action="/submit" method="post">
  <label for="favcolor">Sevimli rang:</label>
  <input type="color" id="favcolor" name="favcolor">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="color"> tegi rang tanlash maydonini yaratish uchun ishlatiladi.`,
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
          {content.inputTypes.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.inputTypes.description}
        </p>
        {content.inputTypes.sections.map((section, index) => (
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

export default HtmlInputTypes;

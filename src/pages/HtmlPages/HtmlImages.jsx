import React, { useState, useEffect } from "react";
import { Image, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlImages = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");
  const content = {
    images: {
      title: "HTML Tasvirlari",
      description:
        "HTML tasvirlari (images) sahifaga tasvirlarni qo'shish uchun ishlatiladi.",
      sections: [
        {
          id: "basic",
          title: "Oddiy Tasvir",
          code: `<img src="https://via.placeholder.com/150" alt="Tasvir tavsifi">`,
          explanation: `<img> tegi tasvirlarni qo'shish uchun ishlatiladi. src atributi tasvir manzilini, alt atributi esa tasvir tavsifini ko'rsatadi.`,
        },
        {
          id: "size",
          title: "Tasvir O'lchamini Belgilash",
          code: `<img src="https://via.placeholder.com/150" alt="Tasvir tavsifi" width="200" height="200">`,
          explanation: `width va height atributlari tasvirning kengligi va balandligini belgilash uchun ishlatiladi.`,
        },
        {
          id: "responsive",
          title: "Moslashuvchan Tasvir",
          code: `<img src="https://via.placeholder.com/150" alt="Tasvir tavsifi" style="max-width: 100%; height: auto;">`,
          explanation: `style atributi yordamida tasvirni moslashuvchan qilish mumkin. max-width: 100% va height: auto uslublari tasvirni konteynerga moslashtiradi.`,
        },
        {
          id: "link",
          title: "Tasvirni Havola Qilish",
          code: `<a href="https://www.example.com"><img src="https://via.placeholder.com/150" alt="Tasvir tavsifi"></a>`,
          explanation: `<a> tegi yordamida tasvirni havola qilish mumkin.`,
        },
        {
          id: "figure",
          title: "Tasvir va Tavsif",
          code: `<figure>
  <img src="https://via.placeholder.com/150" alt="Tasvir tavsifi">
  <figcaption>Tasvir tavsifi</figcaption>
</figure>`,
          explanation: `<figure> tegi tasvir va tavsifni birgalikda ko'rsatish uchun ishlatiladi. <figcaption> tegi tasvir tavsifini belgilaydi.`,
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
      <div
        id="app-containery"
        className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.images.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.images.description}
        </p>
        {content.images.sections.map((section, index) => (
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

export default HtmlImages;

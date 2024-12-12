import React, { useState, useEffect } from "react";
import { Tag, Info, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlAttributes = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const content = {
    attributes: {
      title: "HTML Atributlari",
      description:
        "HTML atributlari elementlarga qo'shimcha ma'lumotlar qo'shish uchun ishlatiladi.",
      sections: [
        {
          id: "simple",
          title: "Oddiy Atributlar",
          code: `<img src="https://via.placeholder.com/150" alt="Tasvir tavsifi">
<a href="https://www.example.com" title="Misol sayti">Havola matni</a>
<input type="text" id="name" name="name" value="John Doe">`,
          explanation: `Atributlar elementning xususiyatlarini belgilaydi. Masalan, <img> tegi uchun src va alt atributlari, <a> tegi uchun href va title atributlari, <input> tegi uchun type, id, name va value atributlari.`,
        },
        {
          id: "style",
          title: "Stil Atributlari",
          code: `<p style="color: red; font-size: 20px;">Bu qizil rangdagi matn.</p>
<div style="background-color: lightblue; padding: 10px;">Bu fon rangi och ko'k bo'lgan div.</div>`,
          explanation: `style atributi elementning ichki CSS uslublarini belgilash uchun ishlatiladi.`,
        },
        {
          id: "data",
          title: "Ma'lumot Atributlari",
          code: `<div data-user-id="12345" data-role="admin">Foydalanuvchi ma'lumotlari</div>`,
          explanation: `data-* atributlari maxsus ma'lumotlarni saqlash uchun ishlatiladi.`,
        },
        {
          id: "forms",
          title: "Formalar bilan ishlash",
          code: `<form action="https://www.example.com/submit" method="post">
  <label for="username">Foydalanuvchi nomi:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="password">Parol:</label>
  <input type="password" id="password" name="password" required>
  
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<form> tegi forma yaratish uchun. <input> turli kiritish maydonlari uchun. <label> maydon yorlig'i uchun.`,
        },
        {
          id: "complex",
          title: "Murakkab Atributlar",
          code: `<video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
<audio src="https://www.w3schools.com/html/horse.mp3" controls></audio>`,
          explanation: `<video> va <audio> teglarida turli atributlar mavjud, masalan, controls, width, va source.`,
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
          {content.attributes.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.attributes.description}
        </p>
        {content.attributes.sections.map((section, index) => (
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

export default HtmlAttributes;
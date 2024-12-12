import React, { useState, useEffect } from "react";
import { FileInput, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlForms = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };
  const content = {
    forms: {
      title: "HTML Formalar",
      description:
        "HTML formalar foydalanuvchi ma'lumotlarini kiritish va yuborish uchun ishlatiladi.",
      sections: [
        {
          id: "basic",
          title: "Oddiy Forma",
          code: `<form action="/submit" method="post">
  <label for="name">Ism:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<form> tegi forma yaratish uchun ishlatiladi. <label> tegi kiritish maydonining yorlig'ini belgilaydi. <input> tegi kiritish maydonini yaratadi.`,
        },
        {
          id: "inputTypes",
          title: "Turli Kiritish Maydonlari",
          code: `<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <label for="password">Parol:</label>
  <input type="password" id="password" name="password">
  
  <label for="age">Yosh:</label>
  <input type="number" id="age" name="age">
  
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `Turli <input> turlari mavjud: email, password, number va boshqalar.`,
        },
        {
          id: "textarea",
          title: "Matn Maydoni",
          code: `<form action="/submit" method="post">
  <label for="message">Xabar:</label>
  <textarea id="message" name="message"></textarea>
  
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<textarea> tegi ko'p qatorli matn kiritish maydonini yaratish uchun ishlatiladi.`,
        },
        {
          id: "select",
          title: "Tanlash Ro'yxati",
          code: `<form action="/submit" method="post">
  <label for="city">Shahar:</label>
  <select id="city" name="city">
    <option value="tashkent">Toshkent</option>
    <option value="samarkand">Samarqand</option>
    <option value="bukhara">Buxoro</option>
  </select>
  
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<select> tegi tanlash ro'yxatini yaratish uchun ishlatiladi. <option> tegi ro'yxat elementlarini belgilaydi.`,
        },
        {
          id: "radioCheckbox",
          title: "Radio va Checkbox",
          code: `<form action="/submit" method="post">
  <p>Jins:</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Erkak</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Ayol</label>
  
  <p>Qiziqishlar:</p>
  <input type="checkbox" id="sports" name="interest" value="sports">
  <label for="sports">Sport</label>
  <input type="checkbox" id="music" name="interest" value="music">
  <label for="music">Musiqa</label>
  
  <input type="submit" value="Yuborish">
</form>`,
          explanation: `<input type="radio"> tegi radio tugmalarini yaratish uchun ishlatiladi. <input type="checkbox"> tegi esa checkboxlarni yaratish uchun ishlatiladi.`,
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
          {content.forms.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.forms.description}
        </p>
        {content.forms.sections.map((section, index) => (
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

export default HtmlForms;

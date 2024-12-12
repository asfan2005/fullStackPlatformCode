import React, { useState, useEffect } from "react";
import { Table, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlTables = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };
  const content = {
    tables: {
      title: "HTML Jadvallari",
      description:
        "HTML jadvallari ma'lumotlarni jadval shaklida ko'rsatish uchun ishlatiladi.",
      sections: [
        {
          id: "basic",
          title: "Oddiy Jadval",
          code: `<table>
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
    <th>Shahar</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>25</td>
    <td>Toshkent</td>
  </tr>
  <tr>
    <td>Vali</td>
    <td>30</td>
    <td>Samarqand</td>
  </tr>
</table>`,
          explanation: `<table> tegi jadval yaratish uchun ishlatiladi. <tr> tegi jadval qatorini, <th> tegi sarlavha hujayrasini, <td> tegi esa oddiy hujayrani belgilaydi.`,
        },
        {
          id: "bordered",
          title: "Chegarali Jadval",
          code: `<table border="1">
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
    <th>Shahar</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>25</td>
    <td>Toshkent</td>
  </tr>
  <tr>
    <td>Vali</td>
    <td>30</td>
    <td>Samarqand</td>
  </tr>
</table>`,
          explanation: `border atributi yordamida jadval hujayralariga chegara qo'shish mumkin.`,
        },
        {
          id: "styled",
          title: "Stil berilgan Jadval",
          code: `<table style="width:100%; border-collapse: collapse;">
  <tr style="background-color: #f2f2f2;">
    <th style="border: 1px solid #ddd; padding: 8px;">Ism</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Yosh</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Shahar</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Ali</td>
    <td style="border: 1px solid #ddd; padding: 8px;">25</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Toshkent</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Vali</td>
    <td style="border: 1px solid #ddd; padding: 8px;">30</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Samarqand</td>
  </tr>
</table>`,
          explanation: `style atributi yordamida jadvalga CSS uslublarini qo'llash mumkin. border-collapse uslubi hujayralar orasidagi bo'shliqni yo'q qiladi.`,
        },
        {
          id: "merged",
          title: "Birlashtirilgan Hujayralar",
          code: `<table border="1">
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
    <th>Shahar</th>
  </tr>
  <tr>
    <td rowspan="2">Ali</td>
    <td>25</td>
    <td>Toshkent</td>
  </tr>
  <tr>
    <td>30</td>
    <td>Samarqand</td>
  </tr>
</table>`,
          explanation: `rowspan atributi yordamida hujayralarni vertikal bo'yicha birlashtirish mumkin.`,
        },
        {
          id: "complex",
          title: "Murakkab Jadval",
          code: `<table border="1">
  <caption>Talabalar Ro'yxati</caption>
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
      <th>Shahar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>25</td>
      <td>Toshkent</td>
    </tr>
    <tr>
      <td>Vali</td>
      <td>30</td>
      <td>Samarqand</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Jami: 2 ta talabalar</td>
    </tr>
  </tfoot>
</table>`,
          explanation: `<caption> tegi jadval sarlavhasini belgilaydi. <thead>, <tbody>, va <tfoot> teglaridan foydalanib jadvalni bo'limlarga ajratish mumkin.`,
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
          {content.tables.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.tables.description}
        </p>
        {content.tables.sections.map((section, index) => (
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

export default HtmlTables;

import React, { useState, useEffect } from "react";
import { FileText, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlBlogInline = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };
  const content = {
    blogInline: {
      title: "HTML Blog va Inline Elementlar",
      description:
        "HTML blog va inline elementlar veb-sahifaning tuzilishini va mazmunini belgilash uchun ishlatiladi.",
      sections: [
        {
          id: "paragraph",
          title: "Paragraf",
          code: `<p>Bu paragraf matni.</p>`,
          explanation: `<p> tegi paragraf yaratish uchun ishlatiladi.`,
        },
        {
          id: "heading",
          title: "Sarlavha",
          code: `<h1>Bu 1-darajali sarlavha</h1>
<h2>Bu 2-darajali sarlavha</h2>
<h3>Bu 3-darajali sarlavha</h3>
<h4>Bu 4-darajali sarlavha</h4>
<h5>Bu 5-darajali sarlavha</h5>
<h6>Bu 6-darajali sarlavha</h6>`,
          explanation: `<h1> dan <h6> gacha bo'lgan teglari sarlavhalarni yaratish uchun ishlatiladi.`,
        },
        {
          id: "span",
          title: "Span",
          code: `<p>Bu <span style="color: red;">qizil</span> matn.</p>`,
          explanation: `<span> tegi inline elementlarni guruhlash va ularni uslublash uchun ishlatiladi.`,
        },
        {
          id: "bold",
          title: "Qalin Matn",
          code: `<p>Bu <b>qalin</b> matn.</p>`,
          explanation: `<b> tegi matnni qalin qilish uchun ishlatiladi.`,
        },
        {
          id: "italic",
          title: "Kursiv Matn",
          code: `<p>Bu <i>kursiv</i> matn.</p>`,
          explanation: `<i> tegi matnni kursiv qilish uchun ishlatiladi.`,
        },
        {
          id: "underline",
          title: "Tagiga Chizilgan Matn",
          code: `<p>Bu <u>tagiga chizilgan</u> matn.</p>`,
          explanation: `<u> tegi matnni tagiga chizish uchun ishlatiladi.`,
        },
        {
          id: "strikethrough",
          title: "O'chirilgan Matn",
          code: `<p>Bu <s>o'chirilgan</s> matn.</p>`,
          explanation: `<s> tegi matnni o'chirilgan qilib ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "small",
          title: "Kichik Matn",
          code: `<p>Bu <small>kichik</small> matn.</p>`,
          explanation: `<small> tegi matnni kichik qilish uchun ishlatiladi.`,
        },
        {
          id: "mark",
          title: "Belgilangan Matn",
          code: `<p>Bu <mark>belgilangan</mark> matn.</p>`,
          explanation: `<mark> tegi matnni belgilangan qilib ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "subscript",
          title: "Pastki Indeks",
          code: `<p>Bu <sub>pastki indeks</sub> matn.</p>`,
          explanation: `<sub> tegi matnni pastki indeks qilib ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "superscript",
          title: "Yuqori Indeks",
          code: `<p>Bu <sup>yuqori indeks</sup> matn.</p>`,
          explanation: `<sup> tegi matnni yuqori indeks qilib ko'rsatish uchun ishlatiladi.`,
        },
        {
          id: "blockquote",
          title: "Iqtibos",
          code: `<blockquote cite="https://www.example.com">
  Bu iqtibos matni.
</blockquote>`,
          explanation: `<blockquote> tegi iqtibos matnini belgilash uchun ishlatiladi.`,
        },
        {
          id: "code",
          title: "Kod",
          code: `<pre><code>
function helloWorld() {
  console.log("Hello, world!");
}
</code></pre>`,
          explanation: `<code> tegi kod matnini belgilash uchun ishlatiladi. <pre> tegi esa kodni oldindan formatlangan qilib ko'rsatadi.`,
        },
        {
          id: "pre",
          title: "Oldindan Formatlangan Matn",
          code: `<pre>
Bu oldindan formatlangan matn.
</pre>`,
          explanation: `<pre> tegi oldindan formatlangan matnni belgilash uchun ishlatiladi.`,
        },
        {
          id: "link",
          title: "Havola",
          code: `<a href="https://www.example.com">Bu havola</a>`,
          explanation: `<a> tegi havola yaratish uchun ishlatiladi.`,
        },
        {
          id: "image",
          title: "Rasm",
          code: `<img src="image.jpg" alt="Rasm tavsifi">`,
          explanation: `<img> tegi rasm qo'shish uchun ishlatiladi. src atributi rasm manzilini, alt atributi esa rasm tavsifini ko'rsatadi.`,
        },
        {
          id: "table",
          title: "Jadval",
          code: `<table>
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
</table>`,
          explanation: `<table> tegi jadval yaratish uchun ishlatiladi. <thead>, <tbody>, <tr>, <th>, va <td> teglari jadvalning turli qismlarini belgilaydi.`,
        },
        {
          id: "list",
          title: "Ro'yxat",
          code: `<ul>
  <li>Birinchi element</li>
  <li>Ikkinchi element</li>
  <li>Uchinchi element</li>
</ul>`,
          explanation: `<ul> tegi tartibsiz ro'yxat yaratish uchun ishlatiladi. <li> tegi ro'yxat elementlarini belgilaydi.`,
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
          {content.blogInline.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.blogInline.description}
        </p>
        {content.blogInline.sections.map((section, index) => (
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

export default HtmlBlogInline;

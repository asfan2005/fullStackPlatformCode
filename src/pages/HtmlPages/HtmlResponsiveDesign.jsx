import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./h.css";

function HtmlResponsiveDesign() {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };

  const content = {
    title: "HTML Responsiv Dizayn",
    description: "HTML responsiv dizayn veb-sahifalarni turli qurilmalarda yaxshi ko'rinishini ta'minlash uchun ishlatiladi.",
    sections: [
      {
        id: "viewport",
        title: "Viewport Meta Tegi",
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        explanation: `<meta name="viewport" content="width=device-width, initial-scale=1.0"> tegi veb-sahifaning ko'rinishini va o'lchamini boshqarish uchun ishlatiladi.`,
      },
      {
        id: "mediaQueries",
        title: "Media Queries",
        code: `@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`,
        explanation: `@media qoidasi ekran o'lchamiga qarab turli uslublarni qo'llash imkonini beradi.`,
      },
      {
        id: "flexbox",
        title: "Flexbox",
        code: `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}`,
        explanation: `Flexbox layout modeli elementlarni moslashuvchan va samarali joylashtirish imkonini beradi.`,
      },
      {
        id: "grid",
        title: "CSS Grid",
        code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`,
        explanation: `CSS Grid layout modeli elementlarni ikki o'lchamli tarmoqda joylashtirish imkonini beradi.`,
      },
      {
        id: "responsiveImages",
        title: "Responsiv Rasmlar",
        code: `<img src="image.jpg" alt="Rasm tavsifi" style="max-width: 100%; height: auto;">`,
        explanation: `Rasmlarni responsiv qilish uchun ularning kengligini 100% va balandligini avtomatik qilib belgilash mumkin.`,
      },
    ],
    realWorldExamples: [
      {
        id: "example1",
        title: "Oddiy Responsiv Sahifa",
        code: `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .header, .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1em;
    }
    .main {
      padding: 1em;
    }
    @media (max-width: 600px) {
      .header, .footer {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="main">Main content goes here.</div>
  <div class="footer">Footer</div>
</body>
</html>`,
      },
      {
        id: "example2",
        title: "Flexbox Layout",
        code: `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .item {
      flex: 1 1 200px;
      margin: 10px;
      padding: 20px;
      background-color: #f4f4f4;
      text-align: center;
    }
    @media (max-width: 600px) {
      .container {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>`,
      },
      {
        id: "example3",
        title: "CSS Grid Layout",
        code: `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 10px;
    }
    .grid-item {
      background-color: #f4f4f4;
      padding: 20px;
      text-align: center;
    }
    @media (max-width: 600px) {
      .grid-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
  </div>
</body>
</html>`,
      },
      {
        id: "example4",
        title: "Responsiv Navbar",
        code: `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .navbar {
      display: flex;
      background-color: #333;
      overflow: hidden;
    }
    .navbar a {
      flex: 1;
      padding: 14px 20px;
      text-align: center;
      text-decoration: none;
      color: white;
    }
    @media (max-width: 600px) {
      .navbar a {
        flex: 100%;
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <div class="navbar">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </div>
</body>
</html>`,
      },
      {
        id: "example5",
        title: "Responsiv Image Gallery",
        code: `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;
    }
    .gallery img {
      flex: 1 1 calc(33.333% - 20px);
      max-width: 100%;
      height: auto;
    }
    @media (max-width: 600px) {
      .gallery img {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="gallery">
    <img src="https://via.placeholder.com/300" alt="Image 1">
    <img src="https://via.placeholder.com/300" alt="Image 2">
    <img src="https://via.placeholder.com/300" alt="Image 3">
  </div>
</body>
</html>`,
      },
    ],
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
    <div id="app-containery" className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg">
      <div id="app-containery" className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.description}
        </p>
        {content.sections.map((section, index) => (
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
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          Real Veb-sayt Misollari
        </h2>
        {content.realWorldExamples.map((example, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
              {example.title}
            </h3>
            <div className="mb-3 md:mb-4 bg-gray-800 text-white p-2 md:p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs md:text-sm whitespace-pre-wrap break-words">
                <code>{example.code.trim()}</code>
              </pre>
            </div>
            <button
              onClick={() => togglePreview(example.code)}
              className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm md:text-base focus:outline-none"
            >
              {activeCode === example.code ? (
                <EyeOff className="mr-1 h-4 w-4" />
              ) : (
                <Eye className="mr-1 h-4 w-4" />
              )}
              {activeCode === example.code ? "Yashirish" : "Ko'rsatish"}
            </button>
            {activeCode === example.code && (
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
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          Foydalanuvchi Kiritgan Kod
        </h2>
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
  );
}

export default HtmlResponsiveDesign;
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CssSelectors() {
  const [cssCode, setCssCode] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState([]);

  // Topshiriqlar uchun boshlang'ich HTML va CSS kodlari
  const task1HTML = `<div class="container">
  <h1>Asosiy sarlavha</h1>
  <p class="intro">Kirish matni</p>
  <div class="content">
    <h2>Ichki sarlavha</h2>
    <p>Birinchi paragraf</p>
    <p>Ikkinchi paragraf</p>
  </div>
</div>`;

  const task1CSS = `/* CSS kodingizni bu yerga yozing */
h1 {
  /* Sarlavha rangini o'zgartiring */
}

.intro {
  /* Intro klassiga ega paragrafni o'zgartiring */
}

.content p {
  /* Content ichidagi paragraflarni o'zgartiring */
}

.content p:nth-child(2) {
  /* Ikkinchi paragrafni o'zgartiring */
}`;

  // Kodni tekshirish funksiyasi
  const handleCodeCheck = () => {
    try {
      const result = checkCSS(cssCode);
      if (result.success) {
        setResult("Juda ajoyib! Barcha talablar to'g'ri bajarildi! 🎉");
        setErrors([]);
      } else {
        setResult("Xatoliklar topildi. Iltimos, quyidagi xatolarni to'g'rilang:");
        setErrors(result.messages);
      }
    } catch (error) {
      setResult("Xatolik yuz berdi!");
      setErrors([error.message]);
    }
  };

  const checkCSS = (code) => {
    // Test div yaratish
    const testDiv = document.createElement('div');
    testDiv.innerHTML = task1HTML;
    document.body.appendChild(testDiv);

    // Style qo'shish
    const styleElement = document.createElement('style');
    styleElement.textContent = code;
    document.head.appendChild(styleElement);

    const errors = [];
    let allCorrect = true;

    try {
        // h1 tekshirish
        const h1 = testDiv.querySelector('h1');
        const h1Style = window.getComputedStyle(h1);
        if (h1Style.color !== 'rgb(255, 0, 0)') {
            errors.push("h1 elementi qizil rangda bo'lishi kerak");
            allCorrect = false;
        }

        // .intro tekshirish
        const intro = testDiv.querySelector('.intro');
        const introStyle = window.getComputedStyle(intro);
        if (introStyle.fontStyle !== 'italic') {
            errors.push("'.intro' klassi italic bo'lishi kerak");
            allCorrect = false;
        }

        // .content p tekshirish
        const contentPs = testDiv.querySelectorAll('.content p');
        contentPs.forEach(p => {
            const pStyle = window.getComputedStyle(p);
            if (pStyle.color !== 'rgb(0, 0, 255)') {
                errors.push("'.content' ichidagi paragraflar ko'k rangda bo'lishi kerak");
                allCorrect = false;
            }
        });

        // Ikkinchi paragraf tekshirish
        const secondP = testDiv.querySelector('.content p:nth-child(2)');
        const secondPStyle = window.getComputedStyle(secondP);
        if (secondPStyle.fontWeight !== '700' && secondPStyle.fontWeight !== 'bold') {
            errors.push("Ikkinchi paragraf qalin (bold) bo'lishi kerak");
            allCorrect = false;
        }
    } finally {
        // Tozalash
        document.body.removeChild(testDiv);
        document.head.removeChild(styleElement);
    }

    return {
        success: allCorrect,
        messages: [...new Set(errors)] // Dublikat xabarlarni olib tashlash
    };
  };

  // Xatolarni ko'rsatish komponenti
  const ErrorList = () => (
    <div className="mt-4 text-red-600">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-4 px-2 sm:py-6 sm:px-4 overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-8">
        {/* Sarlavha */}
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4">CSS Selektorlari</h1>
          <p className="text-gray-700 text-base sm:text-lg">
            CSS selektorlari yordamida HTML hujjatidagi elementlarni tanlab, ularga turli uslublarni qo'llash mumkin.
            Quyida CSS selektorlarining asosiy turlari va ularning ishlatilishi haqida batafsil ma'lumotlar keltirilgan.
          </p>
        </div>

        {/* Selektorlar ro'yxati */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* 1. Element Selektori */}
          <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 border-b pb-2">1. Element (Tag) selektori</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Muayyan teglarga uslublarni qo'llash uchun ishlatiladi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600 block whitespace-pre">
                p {'{'}
                  color: blue;
                {'}'}
              </code>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Misol uchun:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>{'<p>'} - paragraf</li>
                <li>{'<h1>'} - sarlavha</li>
                <li>{'<div>'} - konteyner</li>
              </ul>
            </div>
          </div>

          {/* 2. Class Selektori */}
          <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 border-b pb-2">2. Class selektori</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Muayyan sinfga ega elementlarni tanlaydi. Nuqta (.) bilan boshlanadi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600 block whitespace-pre">
                .highlight {'{'}
                  background-color: yellow;
                {'}'}
              </code>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Qo'llanilishi:</p>
              <p className="mt-2">{'<div class="highlight">Matn</div>'}</p>
            </div>
          </div>

          {/* 3. ID Selektori */}
          <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 border-b pb-2">3. ID selektori</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Noyob ID qiymatiga ega elementni tanlaydi. # belgisi bilan boshlanadi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600 block whitespace-pre">
                #header {'{'}
                  font-size: 20px;
                {'}'}
              </code>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Qo'llanilishi:</p>
              <p className="mt-2">{'<div id="header">Sarlavha</div>'}</p>
            </div>
          </div>

          {/* 4. Universal Selektor */}
          <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 border-b pb-2">4. Universal selektor</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Barcha elementlarga ta'sir qiladi. * belgisi bilan ifodalanadi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600 block whitespace-pre">
                * {'{'}
                  margin: 0;
                  padding: 0;
                {'}'}
              </code>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Barcha elementlarga qo'llaniladi</p>
            </div>
          </div>

          {/* 5. Attribute Selektori */}
          <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4 border-b pb-2">5. Attribute selektori</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Muayyan atributga ega elementlarni tanlaydi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600 block whitespace-pre">
                input[type="text"] {'{'}
                  border: 1px solid black;
                {'}'}
              </code>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Misol:</p>
              <p className="mt-2">{'<input type="text">'}</p>
            </div>
          </div>

          {/* 6. Descendant Selektor */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">6. Descendant selektor</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Element ichidagi boshqa elementlarni tanlaydi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                div p {'{'}
                <br />
                &nbsp;&nbsp;color: green;
                <br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 7. Child Selektor */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">7. Child selektor</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Bevosita bola elementlarni tanlaydi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                ul `` li {'{'}
                <br />
                &nbsp;&nbsp;list-style-type: none;
                <br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 8. Adjacent Sibling Selektor */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">8. Adjacent sibling selektor</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Elementdan keyin kelgan birinchi elementni tanlaydi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                h1 + p {'{'}
                <br />
                &nbsp;&nbsp;font-style: italic;
                <br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 9. General Sibling Selektor */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">9. General sibling selektor</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Elementdan keyin kelgan barcha elementlarni tanlaydi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                h1 ~ p {'{'}
                <br />
                &nbsp;&nbsp;color: gray;
                <br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 10. Pseudo-class Selektorlar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">10. Pseudo-class selektorlar</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Elementlarning maxsus holatlarini tanlaydi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                a:hover {'{'}
                <br />
                &nbsp;&nbsp;color: red;
                <br />
                {'}'}
                <br />
                li:nth-child(2) {'{'}
                <br />
                &nbsp;&nbsp;font-weight: bold;
                <br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 11. Pseudo-element Selektorlar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">11. Pseudo-element selektorlar</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Elementning maxsus qismlarini uslublash uchun.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                p::before {'{'}
                <br />
                &nbsp;&nbsp;content: "📌 ";
                <br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 12. Group Selektor */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">12. Group selektor</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Bir nechta selektorlarni birlashtirish uchun ishlatiladi.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-sm text-purple-600">
                h1, h2, h3 {'{'}
                <br />
                &nbsp;&nbsp;color: navy;
                <br />
                {'}'}
              </code>
            </div>
          </div>
        </div>

        {/* Amaliy topshiriqlar bo'limi */}
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 sm:mb-6">Amaliy topshiriqlar</h2>

          {/* 1-topshiriq */}
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-purple-500 pl-2 sm:pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3 sm:mb-4">
                1-topshiriq: Selektorlarni qo'llash
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Quyidagi HTML kodga CSS selektorlarini qo'llab, ko'rsatilgan natijaga erishing:
              </p>

              {/* HTML kodi */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">HTML:</h4>
                <Editor
                  height="200px"
                  defaultLanguage="html"
                  value={task1HTML}
                  theme="vs-dark"
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                  }}
                  className="text-sm sm:text-base"
                />
              </div>

              {/* Vazifa */}
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-purple-700 mb-2">Vazifa:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Barcha {'<h1>'} elementlarga qizil rang bering</li>
                  <li>".intro" klassiga ega paragrafni italic qiling</li>
                  <li>".content" ichidagi barcha {'<p>'} elementlarga ko'k rang bering</li>
                  <li>Ikkinchi paragrafni qalin qiling (nth-child yordamida)</li>
                </ul>
              </div>

              {/* CSS yozish maydoni */}
              <div className="relative">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">CSS yozing:</h4>
                <Editor
                  height="300px"
                  defaultLanguage="css"
                  value={task1CSS}
                  theme="vs-dark"
                  onChange={(value) => setCssCode(value)}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    lineNumbers: "on",
                    roundedSelection: false,
                    automaticLayout: true,
                  }}
                />
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={handleCodeCheck}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
                  >
                    Natijani tekshirish
                  </button>
                </div>
              </div>

              {/* Natija */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Natija:</h4>
                <div className={`bg-white rounded-lg p-4 border-2 ${errors.length === 0 ? 'border-green-200' : 'border-red-200'}`}>
                  <p className={errors.length === 0 ? "text-green-600" : "text-red-600"}>
                    {result}
                  </p>
                  <ErrorList />
                </div>
              </div>
            </div>
          </div>

          {/* Real vaqtdagi ko'rinish */}
          <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">
              Real vaqtdagi ko'rinish
            </h3>
            <div 
              id="preview"
              className="bg-white rounded-lg p-6 border-2 border-gray-200"
              style={{ 
                position: 'relative',
                minHeight: '200px'
              }}
            >
              <style>{cssCode}</style>
              <div dangerouslySetInnerHTML={{ __html: task1HTML }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssSelectors;
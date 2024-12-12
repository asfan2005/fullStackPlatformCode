import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CssPseudoElements() {
  // Add new state for challenge editors
  const [htmlCode1, setHtmlCode1] = useState(
    `<div class="custom-card">
  <h2>Hover Me!</h2>
  <p>This card demonstrates pseudo-elements</p>
</div>`
  );

  const [cssCode1, setCssCode1] = useState(
    `.custom-card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.custom-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 8px;
  z-index: -1;
}

.custom-card:hover::before {
  opacity: 1;
}

.custom-card:hover {
  transform: translateY(-5px);
  color: white;
}`
  );

  const [htmlCode2, setHtmlCode2] = useState(
    `<div class="fancy-quote">
  <p>Hayot boshqa rejalar bilan band bo'lganingizda sodir bo'ladigan narsadir.</p>
</div>`
  );

  const [cssCode2, setCssCode2] = useState(
    `.fancy-quote {
  position: relative;
  padding: 20px;
  margin: 20px;
}

.fancy-quote::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 80px;
  color: #4ecdc4;
  font-family: serif;
}

.fancy-quote::after {
  content: "";
  position: absolute;
  bottom: -60px;
  right: -20px;
  font-size: 80px;
  color: #4ecdc4;
  font-family: serif;
}`
  );

  // Function to combine HTML and CSS for preview
  const generatePreviewCode = (html, css) => `
    <style>${css}</style>
    ${html}
  `;

  return (
    <div className="w-full p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto bg-gray-50">
      {/* Main Title */}
            {/* Enhanced Header Section */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          CSS Pseudo-Elements: To'liq qo'llanma
        </h1>
        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6"></div>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-4">
        Ilg'or CSS uslublarini o'zlashtiring
        </h2>
      </div>

      {/* Enhanced Introduction Section */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
        CSS pseudo-elementlari elementning muayyan qismlarini uslublash imkonini beruvchi kuchli vositalardir 
          HTMLni o'zgartirmasdan. Ular maqsadli va ijodiy uslubni yaratishga imkon beruvchi virtual elementlar sifatida ishlaydi 
          bu sizning veb-dizaynlaringizni o'zgartirishi mumkin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-6 md:mb-8">
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">Key Benefits:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Kengaytirilgan uslubning moslashuvchanligi
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Toza va semantik HTML
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dinamik tarkibni kiritish
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Yaxshilangan texnik xizmat
              </li>
            </ul>
          </div>

          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-600 mb-3">Common Use Cases:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                Dekorativ elementlar va piktogrammalar
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                Maxsus ro'yxat belgilari
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                Maslahat va qoplamalar
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                Tipografiyani yaxshilash
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Pro Tip:</strong> Pseudo-elementlar zamonaviy brauzerlarda ikki nuqta (::) bilan belgilanadi, 
            CSS2 psevdo-elementlari bilan orqaga qarab muvofiqligi uchun bitta ikkita nuqta (:) hali ham qo'llab-quvvatlanadi.
          </p>
        </div>
      </div>

      {/* 1. ::before */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 before:content-['1.'] before:mr-2 before:text-blue-500">
          ::before
        </h3>
        
        {/* Theory */}
        <div className="mb-4">
          <ul className="list-disc pl-5 mb-4">
          <li>Kontentni haqiqiy kontentdan <strong>oldin</strong> kiritadi</li>
          <li>Ko'pincha dekorativ maqsadlarda yoki piktogramma qo'shish uchun ishlatiladi</li>
          </ul>
        </div>

        {/* Live Example */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
          <h4 className="font-semibold mb-2">Live Example:</h4>
          <p className="before:content-['🔥'] before:mr-2">
          Bu matn oldida olov emodzi bor
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md">
          <pre className="text-sm">
{`/* CSS */
.custom-before::before {
    content: "🔥";
    margin-right: 0.5rem;
}

/* Tailwind */
<p className="before:content-['🔥'] before:mr-2">
    Your text here
</p>`}
          </pre>
        </div>
      </div>

      {/* 2. ::after */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 before:content-['2.'] before:mr-2 before:text-blue-500">
          ::after
        </h3>
        
        {/* Theory */}
        <div className="mb-4">
          <ul className="list-disc pl-5 mb-4">
          <li>Kontentni haqiqiy kontentdan <strong>keyin</strong> kiritadi</li>
            <li>Ko'rsatkichlar yoki dekorativ elementlarni qo'shish uchun juda mos keladi</li>
          </ul>
        </div>

        {/* Live Example */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
          <h4 className="font-semibold mb-2">Live Example:</h4>
          <p className="after:content-['✔'] after:ml-2 after:text-green-500">
            Task completed
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md">
          <pre className="text-sm">
{`/* CSS */
.task-complete::after {
    content: "✔";
    margin-left: 0.5rem;
    color: #22c55e;
}

/* Tailwind */
<p className="after:content-['✔'] after:ml-2 after:text-green-500">
    Task completed
</p>`}
          </pre>
        </div>
      </div>

      {/* 3. ::first-line */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 before:content-['3.'] before:mr-2 before:text-blue-500">
          ::first-line
        </h3>

        {/* Live Example */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
          <h4 className="font-semibold mb-2">Live Example:</h4>
          <p className="first-line:uppercase first-line:tracking-widest first-line:font-bold">
          Bu maxsus uslubga ega birinchi qator.
          <br />Bu oddiy uslubga ega ikkinchi qator.
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md">
          <pre className="text-sm">
{`/* CSS */
p::first-line {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
}

/* Tailwind */
<p className="first-line:uppercase first-line:tracking-widest first-line:font-bold">
    Your text here
</p>`}
          </pre>
        </div>
      </div>

      {/* 4. ::first-letter */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 before:content-['4.'] before:mr-2 before:text-blue-500">
          ::first-letter
        </h3>

        {/* Live Example */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
          <h4 className="font-semibold mb-2">Live Example:</h4>
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2">
          Saytimizga xush kelibsiz. Ushbu paragraf birinchi harfli psevdo-element uslubini ko'rsatadi.
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md">
          <pre className="text-sm">
{`/* CSS */
p::first-letter {
    font-size: 3rem;
    font-weight: bold;
    color: #2563eb;
    float: left;
    margin-right: 0.5rem;
}

/* Tailwind */
<p className="first-letter:text-5xl first-letter:font-bold 
    first-letter:text-blue-600 first-letter:float-left first-letter:mr-2">
    Your text here
</p>`}
          </pre>
        </div>
      </div>

      {/* 5. ::selection */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 before:content-['5.'] before:mr-2 before:text-blue-500">
          ::selection
        </h3>

        {/* Live Example */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
          <h4 className="font-semibold mb-2">Live Example:</h4>
          <p className="selection:bg-purple-500 selection:text-white">
          Shaxsiy tanlov uslubini ko'rish uchun ushbu matnni tanlab ko'ring!
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md">
          <pre className="text-sm">
{`/* CSS */
p::selection {
    background-color: #a855f7;
    color: white;
}

/* Tailwind */
<p className="selection:bg-purple-500 selection:text-white">
    Your text here
</p>`}
          </pre>
        </div>
      </div>

      {/* 6. ::marker */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 before:content-['6.'] before:mr-2 before:text-blue-500">
          ::marker
        </h3>

        {/* Live Example */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
          <h4 className="font-semibold mb-2">Live Example:</h4>
          <ul className="list-disc pl-5 marker:text-red-500 marker:text-2xl">
          <li>Birinchi element</li>
            <li>Ikkinchi element</li>
            <li>Uchinchi element</li>
          </ul>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md">
          <pre className="text-sm">
{`/* CSS */
li::marker {
    color: #ef4444;
    font-size: 1.5rem;
}

/* Tailwind */
<ul className="list-disc pl-5 marker:text-red-500 marker:text-2xl">
    <li>List item</li>
</ul>`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="w-full bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-md">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Best Practices</h3>
        <ul className="list-disc pl-5 space-y-2">
        <li>Zamonaviy brauzerlar uchun har doim ikki nuqtadan (::) foydalaning</li>
          <li>Yangi psevdoelementlardan foydalanganda brauzer mosligini hisobga oling</li>
          <li>::before va ::after uchun mazmunli kontentdan foydalaning</li>
          <li>Turli brauzerlarda tanlash uslublarini sinab ko'ring</li>
        </ul>
      </div>

      {/* Add Interactive Challenges Section before the closing div */}
      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Interaktiv muammolar
        </h2>

        {/* Challenge 1 */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">
          Qiyinchilik 1: Hover effekti kartasi
          </h3>
          <p className="mb-6 text-gray-600">
          Pseudo-elementlar yordamida hoverda paydo bo'ladigan gradient fonli karta yarating.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            {/* Editors */}
            <div>
              <h4 className="font-semibold mb-2">HTML</h4>
              <Editor
                height="200px"
                defaultLanguage="html"
                value={htmlCode1}
                onChange={setHtmlCode1}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-2">CSS</h4>
              <Editor
                height="200px"
                defaultLanguage="css"
                value={cssCode1}
                onChange={setCssCode1}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Result:</h4>
            <div className="border rounded-lg p-4 bg-gray-50">
              <iframe
                srcDoc={generatePreviewCode(htmlCode1, cssCode1)}
                style={{ width: "100%", height: "200px" }}
                title="Challenge 1 Preview"
                className="border-0"
              />
            </div>
          </div>
        </div>

        {/* Challenge 2 */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">
          Qiyinchilik 2: Chiroyli iqtibos
          </h3>
          <p className="mb-6 text-gray-600">
          Pseudo-elementlar yordamida dekorativ tirnoq belgilari bilan zamonaviy tirnoq yarating.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            {/* Editors */}
            <div>
              <h4 className="font-semibold mb-2">HTML</h4>
              <Editor
                height="200px"
                defaultLanguage="html"
                value={htmlCode2}
                onChange={setHtmlCode2}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-2">CSS</h4>
              <Editor
                height="200px"
                defaultLanguage="css"
                value={cssCode2}
                onChange={setCssCode2}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Result:</h4>
            <div className="border rounded-lg p-4 bg-gray-50">
              <iframe
                srcDoc={generatePreviewCode(htmlCode2, cssCode2)}
                style={{ width: "100%", height: "200px" }}
                title="Challenge 2 Preview"
                className="border-0"
              />
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 shadow-md">
  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
    Foydali Professional Maslahatlar
  </h4>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
    {/* Dizayn Maslahatlar */}
    <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-sm">
      <h5 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
        <span className="mr-2">🎨</span> Dizayn Maslahatlar:
      </h5>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>Gradiyent ranglarni turli kombinatsiyalarda sinab ko'ring (masalan: ko'k-binafsha, yashil-moviy)</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>Elementlar orasidagi masofani (padding, margin) optimal sozlang</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>Shrift o'lchamlari va oilalarini kontentga mos ravishda tanlang</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>Soyalar (box-shadow) bilan ishlashda chuqurlik va tarqalishni e'tiborga oling</span>
        </li>
      </ul>
    </div>

    {/* Animatsiya Maslahatlar */}
    <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-sm">
      <h5 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
        <span className="mr-2">✨</span> Animatsiya Maslahatlar:
      </h5>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="text-purple-500 mr-2">•</span>
          <span>O'tish vaqtlarini (transition) 0.2s dan 0.5s oralig'ida sinab ko'ring</span>
        </li>
        <li className="flex items-start">
          <span className="text-purple-500 mr-2">•</span>
          <span>Transform xususiyatlarini kombinatsiyalarda qo'llang (scale + translate)</span>
        </li>
        <li className="flex items-start">
          <span className="text-purple-500 mr-2">•</span>
          <span>Animatsiya timing funksiyalarini (ease, ease-in-out) kontentga qarab tanlang</span>
        </li>
        <li className="flex items-start">
          <span className="text-purple-500 mr-2">•</span>
          <span>Hover effektlarini asta-sekin va tabiiy ko'rinishda amalga oshiring</span>
        </li>
      </ul>
    </div>

    {/* Pseudo-element Maslahatlar */}
    <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-sm">
      <h5 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
        <span className="mr-2">🔮</span> Pseudo-element Maslahatlar:
      </h5>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>::before va ::after elementlarini ijodiy maqsadlarda ishlatishni o'rganing</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Kontentni dinamik qo'shish uchun content xususiyatidan foydalaning</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Pozitsiyalash (absolute, relative) xususiyatlarini to'g'ri qo'llang</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>z-index qiymatlarini elementlar ketma-ketligiga qarab belgilang</span>
        </li>
      </ul>
    </div>

    {/* Optimizatsiya Maslahatlar */}
    <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-sm">
      <h5 className="text-lg font-semibold text-orange-700 mb-4 flex items-center">
        <span className="mr-2">⚡</span> Optimizatsiya Maslahatlar:
      </h5>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>CSS kodini optimal va qayta ishlatilishi mumkin bo'lgan tarzda yozing</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>Brauzerlar mosligi uchun prefixlarni to'g'ri qo'llang</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>Kodni toza va tartibli saqlash uchun kommentlar qo'shing</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>Perfomans uchun og'ir animatsiyalardan qoching</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Qo'shimcha Eslatma */}
  <div className="mt-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
    <p className="text-blue-800 font-medium">
      <span className="font-bold">Muhim eslatma:</span> Har doim kodingizni turli brauzerlarda sinab ko'ring 
      va foydalanuvchi tajribasini birinchi o'ringa qo'ying. Pseudo-elementlar kuchli vosita, 
      lekin ulardan o'rinli foydalanish muhim.
    </p>
  </div>
</div>
      </div>
    </div>
  );
}

export default CssPseudoElements;
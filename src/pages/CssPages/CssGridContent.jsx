import React, { useState } from "react";
import Editor from "@monaco-editor/react";
function CssGridContent() {
  const [userCode, setUserCode] = useState(`
    /* CSS kodingizni bu yerga yozing */
    .grid-container {
      display: grid;
      /* Sizning kodingiz */
    }
      `);
  const [htmlCode] = useState(`
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
        </div>
          `);
  const [htmlCode1] = useState(`
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  `);
  const [htmlCode2] = useState(`
    <div class="gallery">
      <div class="gallery-item">
        <img src="https://picsum.photos/300/200" alt="Gallery image 1">
        <h3>Rasm 1</h3>
      </div>
      <div class="gallery-item">
        <img src="https://picsum.photos/300/200" alt="Gallery image 2">
        <h3>Rasm 2</h3>
      </div>
      <div class="gallery-item">
        <img src="https://picsum.photos/300/200" alt="Gallery image 3">
        <h3>Rasm 3</h3>
      </div>
      <div class="gallery-item">
        <img src="https://picsum.photos/300/200" alt="Gallery image 4">
        <h3>Rasm 4</h3>
      </div>
    </div>
  `);
  const [userCode1, setUserCode1] = useState(`
  /* Asosiy grid container */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid-item {
    background-color: #e0e7ff;
    padding: 1.5rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .grid-item:hover {
    transform: translateY(-5px);
  }

  /* Mobil qurilmalar uchun (320px-767px) */
  @media screen and (max-width: 767px) {
    .grid-container {
      grid-template-columns: 1fr;
      padding: 0.5rem;
      gap: 15px;
    }
    
    .grid-item {
      padding: 1rem;
    }
  }

  /* Planshetlar uchun (768px-1023px) */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  /* Desktop qurilmalar uchun (1024px va undan yuqori) */
  @media screen and (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
  }
  `);
  const [userCode2, setUserCode2] = useState(`
  /* Asosiy galeriya containeri */
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    padding: 1rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .gallery-item {
    background: white;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
  }

  .gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.75rem;
  }

  .gallery-item h3 {
    margin-top: 0.75rem;
    font-size: 1.2rem;
    color: #333;
    font-weight: 600;
  }

  /* Mobil qurilmalar uchun (320px-767px) */
  @media screen and (max-width: 767px) {
    .gallery {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 0.5rem;
    }

    .gallery-item {
      padding: 0.75rem;
    }

    .gallery-item img {
      height: 180px;
    }

    .gallery-item h3 {
      font-size: 1.1rem;
    }
  }

  /* Planshetlar uchun (768px-1023px) */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  /* Desktop qurilmalar uchun (1024px va undan yuqori) */
  @media screen and (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
  }

  /* Katta ekranlar uchun (1440px va undan yuqori) */
  @media screen and (min-width: 1440px) {
    .gallery {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1600px;
    }
  }
  `);
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
        {/* Introduction */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            CSS Grid Layout - Zamonaviy Web Dizayn Asosi
          </h1>
          <p className="text-gray-600 mb-4">
            CSS Grid - web sahifalarni yaratishda eng kuchli va moslashuvchan
            layout tizimi hisoblanadi. U ikki o'lchovli tizim bo'lib, bir
            vaqtning o'zida ham qatorlar, ham ustunlar bilan ishlash imkonini
            beradi. Bu esa murakkab va responsive dizaynlarni yaratishni yanada
            osonlashtiradi.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              CSS Grid afzalliklari:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ikki o'lchovli layout yaratish imkoniyati</li>
              <li>Murakkab layoutlarni kam kod bilan yaratish</li>
              <li>Responsive dizayn uchun qulay vositalar</li>
              <li>Grid elementlarini aniq joylashtirishni nazorat qilish</li>
              <li>Gap va spacing bilan ishlashning oson usullari</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Qo'llash sohalari:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Web saytlarning asosiy layout tizimi sifatida</li>
              <li>Dashboard va admin panellar uchun</li>
              <li>Galereya va portfolio sahifalari</li>
              <li>Blog post layoutlari</li>
              <li>Mahsulotlar katalogi</li>
            </ul>
          </div>
        </section>
        {/* Grid Container Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Grid Container va Grid Items
          </h2>
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-blue-100 p-4 rounded text-center">
                Grid Item {item}
              </div>
            ))}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="grid-container">
  <div class="grid-item">Grid Item 1</div>
  <div class="grid-item">Grid Item 2</div>
  <div class="grid-item">Grid Item 3</div>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
}

.grid-item {
  background-color: #ebf8ff;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}`}
            </pre>
          </div>
        </section>
        {/* Grid Tracks Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Grid Tracks
          </h2>
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 p-4 bg-gray-50 rounded-lg">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-green-100 p-4 rounded text-center">
                {item === 2 ? "2fr" : "1fr"}
              </div>
            ))}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="grid-tracks">
  <div class="track-item">1fr</div>
  <div class="track-item">2fr</div>
  <div class="track-item">1fr</div>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.grid-tracks {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
}

.track-item {
  background-color: #dcfce7;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}`}
            </pre>
          </div>
        </section>
        {/* Grid Template Areas Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Grid Template Areas
          </h2>
          <div className="grid grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto] gap-4 h-96 bg-gray-50 rounded-lg p-4">
            {["Header", "Sidebar", "Main Content", "Footer"].map(
              (item, index) => (
                <div
                  key={index}
                  className={`bg-purple-100 p-4 rounded ${
                    item === "Header" || item === "Footer" ? "col-span-2" : ""
                  }`}
                >
                  {item} Area
                </div>
              )
            )}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="grid-areas">
  <header class="header">Header Area</header>
  <nav class="sidebar">Sidebar Area</nav>
  <main class="main">Main Content Area</main>
  <footer class="footer">Footer Area</footer>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.grid-areas {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem;
  height: 24rem;
  padding: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

.header, .sidebar, .main, .footer {
  background-color: #f3e8ff;
  padding: 1rem;
  border-radius: 0.25rem;
}`}
            </pre>
          </div>
        </section>
        {/* Auto-Fill & Auto-Fit Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Auto-Fill va Auto-Fit
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 p-4 bg-gray-50 rounded-lg">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-yellow-100 p-4 rounded text-center">
                Item {item}
              </div>
            ))}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="auto-fill-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.auto-fill-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
}

.grid-item {
  background-color: #fef3c7;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}`}
            </pre>
          </div>
        </section>
        {/* Alignment Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Justify va Align
          </h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center items-center h-48 bg-gray-50 rounded-lg p-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-red-100 w-20 h-20 flex items-center justify-center rounded"
              >
                {item}
              </div>
            ))}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="alignment-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.alignment-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 12rem;
  padding: 1rem;
  background-color: #f9fafb;
  justify-items: center;
  align-items: center;
}

.grid-item {
  background-color: #fee2e2;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
}`}
            </pre>
          </div>
        </section>
        {/* Responsive Grid Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Responsive Grid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-indigo-100 p-4 rounded text-center">
                Responsive Item {item}
              </div>
            ))}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="responsive-grid">
  <div class="grid-item">Responsive Item 1</div>
  <div class="grid-item">Responsive Item 2</div>
  <div class="grid-item">Responsive Item 3</div>
  <div class="grid-item">Responsive Item 4</div>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.responsive-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
}

.grid-item {
  background-color: #e0e7ff;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}

/* Responsive breakpoints */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`}
            </pre>
          </div>
        </section>
        {/* Grid Line Positioning Demo */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Grid Line Positioning
          </h2>
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className={`bg-pink-100 p-4 rounded text-center ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                {index === 0 ? "Spans 2 columns" : "Normal column"}
              </div>
            ))}
          </div>

          {/* HTML Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HTML Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`<div class="line-positioning">
  <div class="wide-item">Spans 2 columns</div>
  <div class="normal-item">Normal column</div>
  <div class="normal-item">Normal column</div>
</div>`}
            </pre>
          </div>

          {/* CSS Example */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CSS Kod:
            </h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {`.line-positioning {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
}

.wide-item {
  grid-column: span 2;
  background-color: #fce7f3;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}

.normal-item {
  background-color: #fce7f3;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}`}
            </pre>
          </div>
        </section>

        {/* Amaliy mashqlar bo'limi */}
        <section className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Amaliy Mashqlar
          </h2>

          {/* 1-mashq */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mashq #1: Asosiy Grid Layout
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Vazifa:</strong> 2x2 grid yarating va quyidagi talablarni bajaring:
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-600">
              <li>Grid elementlari orasida 20px masofa bo'lsin</li>
              <li>Har bir ustun teng kenglikda bo'lsin</li>
              <li>Grid elementlari markazga tekislansin</li>
            </ul>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">HTML</h4>
                <Editor
                  height="200px"
                  defaultLanguage="html"
                  value={htmlCode1}
                  theme="vs-dark"
                  options={{ readOnly: true }}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">CSS</h4>
                <Editor
                  height="200px"
                  defaultLanguage="css"
                  value={userCode1}
                  onChange={setUserCode1}
                  theme="vs-dark"
                />
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Natija:</h4>
              <div className="border rounded p-4 bg-gray-50">
                <style>{userCode1}</style>
                <div dangerouslySetInnerHTML={{ __html: htmlCode1 }} />
              </div>
            </div>
          </div>

          {/* 2-mashq */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mashq #2: Responsive Rasm Galereyasi
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Vazifa:</strong> Responsive rasm galereyasi yarating:
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-600">
              <li>Mobile (320px-767px): 1 ustun</li>
              <li>Tablet (768px-1023px): 2 ustun</li>
              <li>Desktop (1024px+): 4 ustun</li>
              <li>Elementlar orasida 24px masofa bo'lsin</li>
            </ul>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">HTML</h4>
                <Editor
                  height="250px"
                  defaultLanguage="html"
                  value={htmlCode2}
                  theme="vs-dark"
                  options={{ readOnly: true }}
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">CSS</h4>
                <Editor
                  height="250px"
                  defaultLanguage="css"
                  value={userCode2}
                  onChange={setUserCode2}
                  theme="vs-dark"
                />
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Natija:</h4>
              <div className="border rounded p-4 bg-gray-50">
                <style>{userCode2}</style>
                <div dangerouslySetInnerHTML={{ __html: htmlCode2 }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CssGridContent;

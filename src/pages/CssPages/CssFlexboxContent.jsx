import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CssFlexboxContent() {
  // State'larni komponentning boshida e'lon qilamiz
  const [task1Code, setTask1Code] = useState(`/* Flexbox topshiriq 1
   * Elementlarni markazda joylashtiring va orasiga 20px masofa qo'shing
   */
.container {
  /* Kodingizni shu yerga yozing */

}

.box {
  width: 100px;
  height: 100px;
  background-color: #3b82f6;
  color: white;
}`);

  const [task2Code, setTask2Code] = useState(`/* Flexbox topshiriq 2
   * Elementlarni ustun shaklida, markazda joylashtirib, 
   * orasiga 15px masofa qo'shing
   */
.column-container {
  /* Kodingizni shu yerga yozing */

}

.column-item {
  width: 200px;
  padding: 20px;
  background-color: #8b5cf6;
  color: white;
}`);

  const [task1Result, setTask1Result] = useState("");
  const [task2Result, setTask2Result] = useState("");

  // Tekshirish funksiyalari
  const checkTask1 = () => {
    const code = task1Code.toLowerCase();
    if (
      code.includes("display: flex") &&
      code.includes("justify-content: center") &&
      code.includes("gap: 20px")
    ) {
      setTask1Result("✅ To'g'ri! Siz flexbox yordamida elementlarni muvaffaqiyatli markazlashtirdingiz.");
    } else {
      setTask1Result("❌ Qayta urinib ko'ring. Elementlar markazda bo'lishi va orasida 20px masofa bo'lishi kerak.");
    }
  };

  const checkTask2 = () => {
    const code = task2Code.toLowerCase();
    if (
      code.includes("display: flex") &&
      code.includes("flex-direction: column") &&
      code.includes("align-items: center") &&
      code.includes("gap: 15px")
    ) {
      setTask2Result("✅ To'g'ri! Siz elementlarni ustun shaklida muvaffaqiyatli joylashtirdingiz.");
    } else {
      setTask2Result("❌ Qayta urinib ko'ring. Elementlar ustun shaklida, markazda va orasida 15px masofa bo'lishi kerak.");
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
        CSS Flexbox Namoyishi
      </h1>

      {/* Asosiy Flex Container */}
      <section className="mb-4 sm:mb-8 md:mb-12 p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
          Asosiy Flex Container
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg min-h-[120px] sm:min-h-[150px]">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-full sm:w-auto sm:flex-1 flex items-center justify-center p-3 sm:p-4 md:p-8 
                       bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg sm:text-xl md:text-2xl 
                       rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 
                       cursor-pointer"
            >
              {num}
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-base sm:text-lg font-medium mb-2">Namuna kod:</h3>

          {/* HTML namunasi */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">HTML:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`}
            </pre>
          </div>

          {/* CSS namunasi */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">CSS:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`.container {
  display: flex;            /* Flexbox ishga tushiriladi */
  justify-content: center;  /* Elementlarni markazga joylashtiradi */
  align-items: center;      /* Vertikal markazlash */
  gap: 10px;               /* Elementlar orasidagi masofa */
  height: 200px;           /* Konteyner balandligi */
  background-color: #f0f0f0;
}

.box {
  width: 50px;             /* Elementning kengligi */
  height: 50px;           /* Elementning balandligi */
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: center; /* Matnni gorizontal markazlash */
  align-items: center;     /* Matnni vertikal markazlash */
}`}
            </pre>  
          </div>
           <p className="mt-3 text-gray-600">
            Bu namunada: - container elementi flex xususiyati bilan yaratilgan -
            justify-content va align-items markazlashtirish uchun ishlatilgan -
            gap elementlar orasidagi masofani belgilaydi - har bir box elementi
            uchun aniq o'lchamlar va markazlashtirish qo'llanilgan
          </p>
        </div>
      </section>

      {/* Markazlashtirilgan Flex uchun yangi namuna */}
      <section className="mb-4 sm:mb-8 md:mb-12 p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
          Markazlashtirilgan Flex
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg min-h-[120px] sm:min-h-[150px]">
          {["A", "B", "C"].map((letter) => (
            <div
              key={letter}
              className="w-full sm:flex-1 flex items-center justify-center p-3 sm:p-4 md:p-8 
                       bg-gradient-to-r from-purple-500 to-purple-600 text-white text-lg sm:text-xl md:text-2xl 
                       rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 
                       cursor-pointer"
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Namuna kod:</h3>
          
          {/* HTML */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">HTML:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`<div class="centered-container">
  <div class="centered-box">A</div>
  <div class="centered-box">B</div>
  <div class="centered-box">C</div>
</div>`}
            </pre>
          </div>

          {/* CSS */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">CSS:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`.centered-container {
  display: flex;
  justify-content: center;  /* Gorizontal markazlashtirish */
  align-items: center;      /* Vertikal markazlashtirish */
  gap: 20px;               /* Elementlar orasidagi masofa */
  min-height: 200px;       /* Minimal balandlik */
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.centered-box {
  flex: 1;                /* Teng kenglikda */
  padding: 30px;
  background: linear-gradient(to right, #9333ea, #a855f7);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.centered-box:hover {
  transform: scale(1.05);
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Column Flex uchun yangi namuna */}
      <section className="mb-4 sm:mb-8 md:mb-12 p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
          Column Flex
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg">
          {["🌟", "⭐", "✨"].map((emoji, index) => (
            <div
              key={index}
              className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 
                       bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg sm:text-xl md:text-2xl 
                       rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 
                       cursor-pointer"
            >
              {emoji}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Namuna kod:</h3>
          
          {/* HTML */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">HTML:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`<div class="column-container">
  <div class="column-box">🌟</div>
  <div class="column-box">⭐</div>
  <div class="column-box">✨</div>
</div>`}
            </pre>
          </div>

          {/* CSS */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">CSS:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`.column-container {
  display: flex;
  flex-direction: column;  /* Vertikal joylashish */
  gap: 15px;              /* Elementlar orasidagi masofa */
  min-height: 300px;      /* Minimal balandlik */
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.column-box {
  flex: 1;               /* Teng balandlikda */
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0d9488, #14b8a6);
  color: white;
  font-size: 28px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.column-box:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Wrap Flex uchun yangi namuna */}
      <section className="mb-4 sm:mb-8 md:mb-12 p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
          Wrap Flex
        </h2>
        <div className="flex flex-wrap gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div
              key={num}
              className="w-full xs:w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] 
                       flex items-center justify-center p-4 sm:p-6 bg-gradient-to-r from-pink-500 to-pink-600 
                       text-white text-lg sm:text-xl rounded-lg shadow-md hover:scale-105 transform 
                       transition-transform duration-300 cursor-pointer"
            >
              {num}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Namuna kod:</h3>
          
          {/* HTML */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">HTML:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`<div class="wrap-container">
  <div class="wrap-box">1</div>
  <div class="wrap-box">2</div>
  <div class="wrap-box">3</div>
  <div class="wrap-box">4</div>
  <div class="wrap-box">5</div>
  <div class="wrap-box">6</div>
  <div class="wrap-box">7</div>
  <div class="wrap-box">8</div>
</div>`}
            </pre>
          </div>

          {/* CSS */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">CSS:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`.wrap-container {
  display: flex;
  flex-wrap: wrap;        /* Ko'p qatorli joylashish */
  gap: 16px;             /* Elementlar orasidagi masofa */
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.wrap-box {
  width: calc(25% - 12px); /* 4 ta ustun */
  aspect-ratio: 1;        /* Kvadrat shakl */
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #ec4899, #f472b6);
  color: white;
  font-size: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Responsive dizayn */
@media (max-width: 768px) {
  .wrap-box {
    width: calc(50% - 8px); /* 2 ta ustun */
  }
}

@media (max-width: 480px) {
  .wrap-box {
    width: 100%;          /* 1 ta ustun */
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interaktiv Flex uchun yangi namuna */}
      <section className="p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
          Interaktiv Flex
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg">
          {[
            {
              title: "Flex Item 1",
              desc: "Interaktiv element namunasi",
              color: "from-green-500 to-green-600"
            },
            {
              title: "Flex Item 2",
              desc: "Hover effektini sinab ko'ring",
              color: "from-yellow-500 to-yellow-600"
            },
            {
              title: "Flex Item 3",
              desc: "Responsive dizayn namunasi",
              color: "from-red-500 to-red-600"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`flex-1 min-w-full sm:min-w-[200px] p-4 sm:p-6 bg-gradient-to-r ${item.color} 
                         rounded-lg shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white text-sm sm:text-base opacity-90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Namuna kod:</h3>
          
          {/* HTML */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">HTML:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`<div class="interactive-container">
  <div class="interactive-box">
    <h3>Flex Item 1</h3>
    <p>Interaktiv element namunasi</p>
  </div>
  <div class="interactive-box">
    <h3>Flex Item 2</h3>
    <p>Hover effektini sinab ko'ring</p>
  </div>
  <div class="interactive-box">
    <h3>Flex Item 3</h3>
    <p>Responsive dizayn namunasi</p>
  </div>
</div>`}
            </pre>
          </div>

          {/* CSS */}
          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">CSS:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`.interactive-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 24px;
  background-color: #f3f4f6;
  border-radius: 12px;
}

.interactive-box {
  flex: 1;
  min-width: 250px;      /* Minimal kenglik */
  padding: 24px;
  background: linear-gradient(to right, #22c55e, #16a34a);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.interactive-box h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.interactive-box p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
}

.interactive-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive dizayn */
@media (max-width: 768px) {
  .interactive-box {
    min-width: 100%;
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Amaliy topshiriqlar */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
          Amaliy Topshiriqlar
        </h2>

        {/* Topshiriq 1 */}
        <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Topshiriq 1: Markazlashtirilgan Flex
          </h3>
          <p className="text-gray-600 mb-6">
            Elementlarni markazda joylashtiring va ular orasiga 20px masofa qo'shing.
            Kerakli CSS xususiyatlarini container klassiga qo'shing.
          </p>
          
          <div className="mb-6">
            <Editor
              height="200px"
              defaultLanguage="css"
              theme="vs-dark"
              value={task1Code}
              onChange={setTask1Code}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          <button
            onClick={checkTask1}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200"
          >
            Tekshirish
          </button>

          {task1Result && (
            <div className={`mt-4 p-4 rounded-lg ${
              task1Result.includes("✅") ? "bg-green-100" : "bg-red-100"
            }`}>
              {task1Result}
            </div>
          )}
        </div>

        {/* Topshiriq 2 */}
        <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Topshiriq 2: Column Flex
          </h3>
          <p className="text-gray-600 mb-6">
            Elementlarni ustun shaklida, markazda joylashtiring va ular orasiga 15px 
            masofa qo'shing. Kerakli CSS xususiyatlarini column-container klassiga qo'shing.
          </p>
          
          <div className="mb-6">
            <Editor
              height="200px"
              defaultLanguage="css"
              theme="vs-dark"
              value={task2Code}
              onChange={setTask2Code}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          <button
            onClick={checkTask2}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                     transition-colors duration-200"
          >
            Tekshirish
          </button>

          {task2Result && (
            <div className={`mt-4 p-4 rounded-lg ${
              task2Result.includes("✅") ? "bg-green-100" : "bg-red-100"
            }`}>
              {task2Result}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CssFlexboxContent;

import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import Editor from "@monaco-editor/react";

function CssColors() {
  const [activeCode, setActiveCode] = useState(null);

  const toggleCode = (sectionId) => {
    setActiveCode(activeCode === sectionId ? null : sectionId);
  };

  const CodeBlock = ({ code }) => (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );

  // Rang namunasi komponenti
  const ColorCard = ({ color, name, code }) => (
    <div className="group relative h-32 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-2 overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-300 group-hover:opacity-90"
        style={{ backgroundColor: color }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
        <span className="text-white font-semibold mb-1">{name}</span>
        <span className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
          {code}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/50 to-transparent">
        <span className="text-white text-sm">{name}</span>
      </div>
    </div>
  );

  // Topshiriqlar uchun state'lar
  const [task1Code, setTask1Code] =
    useState(`/* 1-topshiriq: Gradient tugma yarating */
.gradient-button {
  /* Sizning kodingiz */
}
`);

  const [task2Code, setTask2Code] =
    useState(`/* 2-topshiriq: Rang o'zgaruvchan karta yarating */
.color-changing-card {
  /* Sizning kodingiz */
}
`);

  const [task1Result, setTask1Result] = useState(false);
  const [task2Result, setTask2Result] = useState(false);

  // Natijani tekshirish funksiyalari
  const checkTask1 = (code) => {
    const hasGradient =
      code.includes("linear-gradient") || code.includes("radial-gradient");
    const hasHover = code.includes(":hover");
    const hasTransition = code.includes("transition");

    setTask1Result(hasGradient && hasHover && hasTransition);
  };

  const checkTask2 = (code) => {
    const hasAnimation =
      code.includes("@keyframes") || code.includes("animation");
    const hasBoxShadow = code.includes("box-shadow");
    const hasColorChange =
      code.includes("background-color") || code.includes("backgroundColor");

    setTask2Result(hasAnimation && hasBoxShadow && hasColorChange);
  };

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6 font-sans">
      <div className="relative flex flex-col items-center justify-center py-4 sm:py-8 mb-6 sm:mb-12 overflow-hidden">
        {/* Orqa fon animatsiyasi */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-gradient-xy"></div>

        {/* Asosiy sarlavha */}
        <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-black text-center">
          <span className="inline-block transform hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              CSS Ranglar
            </span>
          </span>
        </h1>

        {/* Ikkinchi qator */}
        <div className="relative mt-2 text-lg sm:text-xl md:text-2xl font-medium">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900/10 backdrop-blur-sm">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Colors
            </span>
          </span>
        </div>

        {/* Dekorativ chiziq */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Dekorativ elementlar */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Rang nomlari */}
      <section className="mb-6 sm:mb-10 p-3 sm:p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            1. Rang Nomlari
          </h2>
          <button
            onClick={() => toggleCode("colors")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaCode /> Kodni ko'rish
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          CSS da 140 dan ortiq oldindan belgilangan rang nomlari mavjud.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          <ColorCard color="red" name="Red" code="red" />
          <ColorCard color="blue" name="Blue" code="blue" />
          <ColorCard color="green" name="Green" code="green" />
          <ColorCard color="purple" name="Purple" code="purple" />
          <ColorCard color="pink" name="Pink" code="pink" />
          <ColorCard color="yellow" name="Yellow" code="yellow" />
          <ColorCard color="orange" name="Orange" code="orange" />
          <ColorCard color="teal" name="Teal" code="teal" />
        </div>

        {activeCode === "colors" && (
          <CodeBlock
            code={`/* CSS da rang nomlari */
.element {
  color: red;
  background-color: blue;
  border-color: green;
}

/* Amaliy misol */
.button {
  background-color: purple;
  color: white;
  border: 2px solid pink;
}`}
          />
        )}
      </section>

      {/* HEX ranglar */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            2. HEX Rang Kodlari
          </h2>
          <button
            onClick={() => toggleCode("hex")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaCode /> Kodni ko'rish
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          HEX kodlari # belgisi bilan boshlanadi va 6 ta raqam yoki harfdan
          iborat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ColorCard color="#FF0000" name="Qizil" code="#FF0000" />
          <ColorCard color="#00FF00" name="Yashil" code="#00FF00" />
          <ColorCard color="#0000FF" name="Ko'k" code="#0000FF" />
          <ColorCard color="#FF00FF" name="Magenta" code="#FF00FF" />
          <ColorCard color="#FFFF00" name="Sariq" code="#FFFF00" />
          <ColorCard color="#00FFFF" name="Cyan" code="#00FFFF" />
          <ColorCard color="#800080" name="To'q binafsha" code="#800080" />
          <ColorCard color="#FFA500" name="Apelsin" code="#FFA500" />
        </div>

        {activeCode === "hex" && (
          <CodeBlock
            code={`/* HEX rang kodlari */
.element {
  color: #FF0000;          /* Qizil */
  background-color: #00FF00;  /* Yashil */
  border-color: #0000FF;     /* Ko'k */
}

/* Qisqartirilgan HEX kodlari */
.shortened {
  color: #F00;            /* #FF0000 ga teng */
  background-color: #0F0;   /* #00FF00 ga teng */
  border-color: #00F;      /* #0000FF ga teng */
}`}
          />
        )}
      </section>

      {/* RGB ranglar */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            3. RGB Rang Formati
          </h2>
          <button
            onClick={() => toggleCode("rgb")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaCode /> Kodni ko'rish
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          RGB (Red, Green, Blue) formatida har bir rang 0-255 oralig'ida
          bo'ladi.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ColorCard
            color="rgb(255, 0, 0)"
            name="RGB Qizil"
            code="rgb(255, 0, 0)"
          />
          <ColorCard
            color="rgb(0, 255, 0)"
            name="RGB Yashil"
            code="rgb(0, 255, 0)"
          />
          <ColorCard
            color="rgb(0, 0, 255)"
            name="RGB Ko'k"
            code="rgb(0, 0, 255)"
          />
          <ColorCard
            color="rgb(128, 128, 128)"
            name="RGB Kulrang"
            code="rgb(128, 128, 128)"
          />
        </div>

        {activeCode === "rgb" && (
          <CodeBlock
            code={`/* RGB rang formati */
.element {
  color: rgb(255, 0, 0);          /* Qizil */
  background-color: rgb(0, 255, 0);  /* Yashil */
  border-color: rgb(0, 0, 255);     /* Ko'k */
}

/* RGB ranglarning turli intensivliklari */
.shades {
  color: rgb(128, 0, 0);          /* To'q qizil */
  background-color: rgb(0, 128, 0);  /* To'q yashil */
  border-color: rgb(0, 0, 128);     /* To'q ko'k */
}`}
          />
        )}
      </section>

      {/* Amaliy misollar */}
      <section className="mb-6 sm:mb-10 p-3 sm:p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
          Amaliy Misollar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Tugmalar */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Tugmalar
            </h3>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Asosiy tugma
              </button>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                Muvaffaqiyat
              </button>
              <button className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                Xato
              </button>
            </div>
          </div>

          {/* Matn stillari */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Matn Stillari
            </h3>
            <div className="space-y-4">
              <p className="text-blue-600">Asosiy rang</p>
              <p className="text-green-600">Muvaffaqiyat xabari</p>
              <p className="text-red-600">Xato xabari</p>
              <p className="text-yellow-600">Ogohlantirish</p>
            </div>
          </div>

          {/* Chegaralar */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Chegaralar
            </h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-blue-500 rounded">
                Ko'k chegara
              </div>
              <div className="p-4 border-2 border-green-500 rounded">
                Yashil chegara
              </div>
              <div className="p-4 border-2 border-red-500 rounded">
                Qizil chegara
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradientlar */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Gradientlar</h2>
          <button
            onClick={() => toggleCode("gradients")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaCode /> Kodni ko'rish
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative h-40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
              <span className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                blue → purple
              </span>
            </div>
          </div>

          <div className="group relative h-40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
              <span className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                green → blue
              </span>
            </div>
          </div>

          <div className="group relative h-40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
              <span className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                pink → yellow
              </span>
            </div>
          </div>
        </div>

        {activeCode === "gradients" && (
          <CodeBlock
            code={`/* CSS Gradientlar */
.gradient-1 {
  background: linear-gradient(to right, #3B82F6, #A855F7);
}

.gradient-2 {
  background: linear-gradient(to right, #4ADE80, #3B82F6);
}

.gradient-3 {
  background: linear-gradient(to right, #EC4899, #EAB308);
}`}
          />
        )}
      </section>

      {/* Qo'shimcha animatsiyali rang namunasi */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Animatsiyali Ranglar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative h-40 rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 animate-gradient-xy bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 transition-all duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Animatsiyali Gradient
              </span>
            </div>
          </div>

          <div className="group relative h-40 rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Pulse Effekti
              </span>
            </div>
          </div>

          <div className="group relative h-40 rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 animate-color-change"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Rang O'zgarishi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Amaliy topshiriqlar */}
      <section className="mb-6 sm:mb-10 p-3 sm:p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
          Amaliy Topshiriqlar
        </h2>

        {/* 1-topshiriq */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            1-topshiriq: Gradient Tugma
          </h3>
          <p className="text-gray-600 mb-4">
            Gradient rangga ega, hover effektida ranglar o'zgaradigan va
            transition effektiga ega tugma yarating.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Editor
                height="200px"
                defaultLanguage="css"
                value={task1Code}
                onChange={(value) => {
                  setTask1Code(value);
                  checkTask1(value);
                }}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Natija:</span>
                {task1Result ? (
                  <span className="text-green-500">To'g'ri! ✅</span>
                ) : (
                  <span className="text-red-500">Davom eting 🔄</span>
                )}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-4">Kutilgan natija:</h4>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white transition-all duration-300">
                  Gradient Tugma
                </button>
                <div className="text-sm text-gray-600">
                  <p>Kerakli xususiyatlar:</p>
                  <ul className="list-disc list-inside">
                    <li>Gradient rang (linear-gradient)</li>
                    <li>Hover effekti</li>
                    <li>Transition effekti</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-topshiriq */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            2-topshiriq: Rang O'zgaruvchan Karta
          </h3>
          <p className="text-gray-600 mb-4">
            Vaqt davomida rangi o'zgarib turadigan va soya effektiga ega karta
            yarating.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Editor
                height="300px"
                defaultLanguage="css"
                value={task2Code}
                onChange={(value) => {
                  setTask2Code(value);
                  checkTask2(value);
                }}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Natija:</span>
                {task2Result ? (
                  <span className="text-green-500">To'g'ri! ✅</span>
                ) : (
                  <span className="text-red-500">Davom eting 🔄</span>
                )}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-4">Kutilgan natija:</h4>
              <div className="space-y-4">
                <div className="w-full h-40 rounded-lg animate-color-change shadow-lg"></div>
                <div className="text-sm text-gray-600">
                  <p>Kerakli xususiyatlar:</p>
                  <ul className="list-disc list-inside">
                    <li>Rang animatsiyasi (@keyframes)</li>
                    <li>Soya effekti (box-shadow)</li>
                    <li>Rang o'zgarishi (background-color)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monaco Editor styles - style tegini to'g'ri ishlatish */}
      <style>
        {`
          .monaco-editor {
            min-height: 200px;
            max-height: 400px;
            width: 100% !important;
          }
          @media (max-width: 640px) {
            .monaco-editor {
              min-height: 150px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CssColors;

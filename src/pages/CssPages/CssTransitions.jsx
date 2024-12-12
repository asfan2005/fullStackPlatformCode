import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ code, language }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

function CssTransitions() {
  const examples = {
    colorSize: `
// HTML
<div class="transition-box"></div>

// CSS
.transition-box {
  width: 100px;
  height: 100px;
  background-color: #3B82F6;
  transition: all 0.5s ease-in-out;
}

.transition-box:hover {
  background-color: #EF4444;
  transform: scale(1.1);
}

// Tailwind CSS
<div class="w-24 h-24 bg-blue-500 hover:bg-red-500 
            hover:scale-110 transition-all duration-500 
            ease-in-out cursor-pointer">
</div>`,

    rotation: `
// HTML
<div class="rotation-box"></div>

// CSS
.rotation-box {
  width: 100px;
  height: 100px;
  background-color: #8B5CF6;
  transition: transform 0.5s ease-in-out;
}

.rotation-box:hover {
  transform: rotate(45deg);
}

// Tailwind CSS
<div class="w-24 h-24 bg-purple-500 hover:rotate-45 
            transition-transform duration-500 
            ease-in-out cursor-pointer">
</div>`,

    shadowBorder: `
// HTML
<div class="shadow-box"></div>

// CSS
.shadow-box {
  width: 100px;
  height: 100px;
  background-color: #10B981;
  transition: all 0.5s ease-in-out;
}

.shadow-box:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

// Tailwind CSS
<div class="w-24 h-24 bg-green-500 hover:shadow-2xl 
            hover:rounded-full transition-all duration-500 
            ease-in-out cursor-pointer">
</div>`,

    opacityTransform: `
// HTML
<div class="opacity-box"></div>

// CSS
.opacity-box {
  width: 100px;
  height: 100px;
  background-color: #F59E0B;
  transition: all 0.5s ease-in-out;
}

.opacity-box:hover {
  opacity: 0.5;
  transform: translateX(16px);
}

// Tailwind CSS
<div class="w-24 h-24 bg-yellow-500 hover:opacity-50 
            hover:translate-x-4 transition-all duration-500 
            ease-in-out cursor-pointer">
</div>`
  };

  const [task3Code, setTask3Code] = useState(`/* CSS kodingizni bu yerga yozing */
.gradient-btn {
  padding: 12px 24px;
  background: linear-gradient(to right, #3B82F6, #8B5CF6);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}`);

  const [task4Code, setTask4Code] = useState(`/* CSS kodingizni bu yerga yozing */
.social-icon {
  width: 50px;
  height: 50px;
  background-color: #2563EB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.social-icon i {
  line-height: 0;
}`);

  const transitionInfo = {
    introduction: {
      title: "CSS Transitions nima?",
      description: `CSS Transitions - bu elementlarning bir holatdan boshqa holatga silliq o'tishini ta'minlaydigan CSS xususiyatidir. 
      U foydalanuvchi interfeysini yanada jozibali va tushunarli qilishga yordam beradi. Transitions yordamida siz hover, click va boshqa 
      hodisalarda elementlarning rangi, o'lchami, joylashuvi va boshqa xususiyatlarini animatsiyali tarzda o'zgartira olasiz.`,
      keyPoints: [
        "Foydalanuvchi tajribasini yaxshilaydi",
        "Interfeysni jonli va zamonaviy qiladi",
        "Yuqori unumdorlik va kam resurs talab qiladi",
        "Barcha zamonaviy brauzerlar tomonidan qo'llab-quvvatlanadi"
      ]
    },
    properties: [
      {
        name: "transition-property",
        description: "Qaysi CSS xususiyatlar uchun o'tish effekti qo'llanilishini belgilaydi",
        examples: ["all", "background-color", "transform", "opacity"]
      },
      {
        name: "transition-duration",
        description: "O'tish effekti qancha vaqt davom etishini belgilaydi",
        examples: ["0.3s", "500ms", "1s", "2s"]
      },
      {
        name: "transition-timing-function",
        description: "O'tish effektining tezlik grafigini belgilaydi",
        examples: ["ease", "linear", "ease-in", "ease-out", "ease-in-out"]
      },
      {
        name: "transition-delay",
        description: "O'tish effekti boshlanishidan oldingi kechikish vaqtini belgilaydi",
        examples: ["0s", "0.5s", "1s"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            CSS Transitions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl">
            Elementlarning bir holatdan boshqa holatga silliq o'tishini ta'minlaydigan CSS xususiyati
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {transitionInfo.introduction.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                {transitionInfo.introduction.description}
              </p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Asosiy afzalliklari:
                </h3>
                <ul className="space-y-2">
                  {transitionInfo.introduction.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            CSS Transition Xususiyatlari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transitionInfo.properties.map((prop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {prop.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {prop.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 mb-2">Misollar:</p>
                  <div className="flex flex-wrap gap-2">
                    {prop.examples.map((example, i) => (
                      <span key={i} className="inline-block px-3 py-1 bg-gray-200 
                                             rounded-full text-sm text-gray-700">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Example 1: Color & Size */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              1. Rang va o'lcham o'zgarishi
            </h3>
            <div className="flex justify-center items-center h-40 bg-gray-50 rounded-xl mb-6">
              <div className="w-24 h-24 bg-blue-500 hover:bg-red-500 hover:scale-110 
                            transition-all duration-500 ease-in-out cursor-pointer 
                            rounded-lg shadow-lg">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <CodeBlock code={examples.colorSize} language="css" />
            </div>
          </div>

          {/* Example 2: Rotation */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              2. Aylanish effekti
            </h3>
            <div className="flex justify-center items-center h-40 bg-gray-50 rounded-xl mb-6">
              <div className="w-24 h-24 bg-purple-500 hover:rotate-45 
                            transition-transform duration-500 ease-in-out cursor-pointer 
                            rounded-lg shadow-lg">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <CodeBlock code={examples.rotation} language="css" />
            </div>
          </div>

          {/* Example 3: Shadow & Border */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              3. Soya va border
            </h3>
            <div className="flex justify-center items-center h-40 bg-gray-50 rounded-xl mb-6">
              <div className="w-24 h-24 bg-green-500 hover:shadow-2xl 
                            hover:rounded-full transition-all duration-500 
                            ease-in-out cursor-pointer shadow-lg">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <CodeBlock code={examples.shadowBorder} language="css" />
            </div>
          </div>

          {/* Example 4: Opacity & Transform */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              4. Opacity va transform
            </h3>
            <div className="flex justify-center items-center h-40 bg-gray-50 rounded-xl mb-6">
              <div className="w-24 h-24 bg-yellow-500 hover:opacity-50 
                            hover:translate-x-4 transition-all duration-500 
                            ease-in-out cursor-pointer rounded-lg shadow-lg">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <CodeBlock code={examples.opacityTransform} language="css" />
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Timing Functions
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'].map((timing) => (
                <div
                  key={timing}
                  className="group relative"
                >
                  <div
                    className="w-full h-16 bg-blue-500 rounded-lg cursor-pointer 
                              group-hover:translate-x-full"
                    style={{ transition: `transform 1.5s ${timing}` }}
                  />
                  <p className="mt-2 text-center text-sm font-medium text-gray-600">
                    {timing}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Tasks */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Amaliy topshiriqlar
          </h2>

          {/* Task 3: Gradient Button */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              3-topshiriq: Gradient Button
            </h3>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p>Quyidagi tugmaga hover bo'lganda:</p>
                <ul>
                  <li>Gradient rangi o'ngdan chapga siljishi</li>
                  <li>Soya kuchliroq bo'lishi</li>
                  <li>O'zgarish 0.5 sekundda sodir bo'lishi</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <Editor
                  height="200px"
                  defaultLanguage="css"
                  theme="vs-dark"
                  value={task3Code}
                  onChange={setTask3Code}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              </div>
              <div className="p-8 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Natija:</h4>
                <div className="flex justify-center">
                  <button className="gradient-btn">
                    Gradient Button
                  </button>
                </div>
              </div>
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white 
                          rounded-lg hover:bg-blue-700 transition-colors 
                          font-semibold text-sm sm:text-base"
                onClick={() => {
                  setTask3Code(task3Solution);
                }}
              >
                Yechimni ko'rish
              </button>
            </div>
          </div>

          {/* Task 4: Social Media Icon */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              4-topshiriq: Social Media Icon
            </h3>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p>Quyidagi ijtimoiy tarmoq ikonkasiga hover bo'lganda:</p>
                <ul>
                  <li>360 daraja aylanishi</li>
                  <li>Rangi o'zgarishi (#2563EB → #7C3AED)</li>
                  <li>Yuqoriga 5px ko'tarilishi</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <Editor
                  height="300px"
                  defaultLanguage="css"
                  theme="vs-dark"
                  value={task4Code}
                  onChange={setTask4Code}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              </div>
              <div className="p-8 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Natija:</h4>
                <div className="flex justify-center">
                  <div className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white 
                          rounded-lg hover:bg-blue-700 transition-colors 
                          font-semibold text-sm sm:text-base"
                onClick={() => {
                  setTask4Code(task4Solution);
                }}
              >
                Yechimni ko'rish
              </button>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Qo'shimcha ma'lumotlar
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Foydali manbalar
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" 
                       className="text-blue-600 hover:text-blue-800 transition-colors"
                       target="_blank" 
                       rel="noopener noreferrer">
                      MDN Web Docs - CSS Transitions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.w3schools.com/css/css3_transitions.asp"
                       className="text-blue-600 hover:text-blue-800 transition-colors"
                       target="_blank"
                       rel="noopener noreferrer">
                      W3Schools - CSS Transitions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Eslatmalar
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transition effektlarini ehtiyotkorlik bilan ishlatish kerak</li>
                  <li>• Animatsiya davomiyligi 300ms dan oshmasligi tavsiya etiladi</li>
                  <li>• Murakkab animatsiyalar uchun @keyframes ishlatish ma'qul</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CssTransitions;
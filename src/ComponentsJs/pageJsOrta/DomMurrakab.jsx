import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'react-hot-toast';

function DomMurrakab() {
  const [activeTab, setActiveTab] = useState(1);
  const demoContainerRef = useRef(null);

  const domTopics = [
    {
      id: 1,
      title: "Element yaratish va o'chirish",
      code: `// Yangi element yaratish
const newDiv = document.createElement("div");
newDiv.className = "custom-class";
newDiv.id = "unique-id";
newDiv.textContent = "Bu yangi div elementidir";
document.body.appendChild(newDiv);

// Elementni o'chirish
const elementToRemove = document.getElementById("unique-id");
elementToRemove.remove();`,
      description: "DOM elementlarini yaratish va o'chirish usullari haqida asosiy ma'lumotlar",
      demo: ({ containerRef }) => {
        const [elements, setElements] = useState([]);
        const [counter, setCounter] = useState(0);

        const addElement = () => {
          setElements(prev => [...prev, {
            id: counter,
            text: `Element ${counter}`
          }]);
          setCounter(c => c + 1);
          toast.success("Element qo'shildi!");
        };

        const removeElement = (id) => {
          setElements(prev => prev.filter(el => el.id !== id));
          toast.success("Element o'chirildi!");
        };

        return (
          <div className="space-y-4">
            <button
              onClick={addElement}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Yangi element qo"shish
            </button>
            <div className="space-y-2">
              {elements.map(el => (
                <div
                  key={el.id}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                >
                  <span>{el.text}</span>
                  <button
                    onClick={() => removeElement(el.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    O"chirish
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      }
    },
    {
      id: 2,
      title: "DOM Navigatsiyasi",
      code: `const parent = document.getElementById("parent");
const children = parent.children;
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const nextSibling = firstChild.nextElementSibling;`,
      description: "DOMda elementlar orasida harakatlanish usullari",
      demo: ({ containerRef }) => {
        const [selectedElement, setSelectedElement] = useState(null);

        const handleElementClick = (element) => {
          setSelectedElement(element);
          toast.success(`${element} tanlandi!`);
        };

        return (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleElementClick("Ota element")}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Ota element
                </button>
                <div className="ml-8 space-y-2">
                  <button
                    onClick={() => handleElementClick("Birinchi bola")}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    Birinchi bola
                  </button>
                  <button
                    onClick={() => handleElementClick("O'rta bola")}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    O"rta bola
                  </button>
                  <button
                    onClick={() => handleElementClick("Oxirgi bola")}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    Oxirgi bola
                  </button>
                </div>
              </div>
            </div>
            {selectedElement && (
              <div className="bg-indigo-100 p-3 rounded-lg">
                <p>Tanlangan: {selectedElement}</p>
              </div>
            )}
          </div>
        );
      }
    },
    {
      id: 3,
      title: "Elementlarni o'zgartirish",
      code: `const element = document.getElementById('example');
element.textContent = 'Yangi matn';
element.innerHTML = '<strong>HTML tarkibi</strong>';
element.style.color = 'red';
element.style.fontSize = '20px';`,
      description: "DOM elementlarining matn, HTML va uslublarini o'zgartirish",
      demo: ({ containerRef }) => {
        const [text, setText] = useState("Boshlang'ich matn");
        const [color, setColor] = useState('#000000');
        const [fontSize, setFontSize] = useState(16);

        const handleTextChange = (e) => {
          setText(e.target.value);
          toast.success("Matn o'zgartirildi!");
        };

        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Matn:
                <input
                  type="text"
                  value={text}
                  onChange={handleTextChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              
              <label className="block text-sm font-medium text-gray-700">
                Rang:
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="mt-1 block"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Shrift o'lchami: {fontSize}px
                <input
                  type="range"
                  min="12"
                  max="40"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="mt-1 block w-full"
                />
              </label>
            </div>

            <div className="p-4 border rounded-lg">
              <p style={{ color, fontSize: `${fontSize}px` }}>{text}</p>
            </div>
          </div>
        );
      }
    },
    {
      id: 4,
      title: "Event Handling",
      code: `// Event Listener qo'shish
element.addEventListener('click', function(event) {
  console.log('Element bosildi!');
});

// Event bubbling
parent.addEventListener('click', function(event) {
  if (event.target.matches('.child')) {
    console.log('Bola element bosildi!');
  }
});

// Event delegation
document.addEventListener('DOMContentLoaded', function() {
  // Sahifa yuklangandan keyin ishga tushadi
});`,
      description: "DOM elementlariga event listener'larni qo'shish va boshqarish usullari",
      demo: ({ containerRef }) => {
        const [clicks, setClicks] = useState([]);

        const handleClick = (area) => {
          setClicks(prev => [...prev, area]);
          toast.success(`${area} bosildi!`);
        };

        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleClick("Asosiy tugma")}
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg"
              >
                Asosiy tugma
              </button>
              <div
                onClick={() => handleClick("Konteyner")}
                className="bg-gray-100 p-4 rounded-lg cursor-pointer"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick("Ichki tugma");
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                >
                  Ichki tugma
                </button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Bosish tarixi:</h4>
              <ul className="list-disc pl-5">
                {clicks.map((click, index) => (
                  <li key={index}>{click}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      }
    },
    {
      id: 5,
      title: "Atributlar bilan ishlash",
      code: `// Atributlarni o'qish
const value = element.getAttribute('data-custom');

// Atributlarni o'zgartirish
element.setAttribute('class', 'new-class');
element.removeAttribute('style');

// Data atributlar bilan ishlash
element.dataset.customValue = 'qiymat';
console.log(element.dataset.customValue);`,
      description: "DOM elementlarining atributlarini boshqarish usullari",
      demo: ({ containerRef }) => {
        const [attributes, setAttributes] = useState({
          class: 'default-class',
          'data-custom': 'custom-value',
          title: 'Misol element'
        });

        const updateAttribute = (name, value) => {
          setAttributes(prev => ({
            ...prev,
            [name]: value
          }));
          toast.success(`${name} atributi yangilandi!`);
        };

        return (
          <div className="space-y-4">
            <div className="grid gap-3">
              {Object.entries(attributes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="font-medium w-24">{key}:</span>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => updateAttribute(key, e.target.value)}
                    className="flex-1 border rounded px-2 py-1"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <div {...attributes} className="p-4 bg-white rounded border">
                Element ko'rinishi
              </div>
              <pre className="mt-2 text-sm">
                {JSON.stringify(attributes, null, 2)}
              </pre>
            </div>
          </div>
        );
      }
    },
    {
      id: 6,
      title: "DOM Animatsiyalar",
      code: `// Element pozitsiyasini o'zgartirish
element.style.transform = 'translateX(100px)';

// Animatsiya qo'shish
element.style.transition = 'all 0.3s ease';

// requestAnimationFrame bilan animatsiya
function animate() {
  element.style.left = \`\${position++}px\`;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`,
      description: "DOM elementlariga animatsiyalar qo'shish usullari",
      demo: ({ containerRef }) => {
        const [position, setPosition] = useState(0);
        const [isAnimating, setIsAnimating] = useState(false);

        const startAnimation = () => {
          setIsAnimating(true);
          toast.success("Animatsiya boshlandi!");
        };

        const stopAnimation = () => {
          setIsAnimating(false);
          toast.success("Animatsiya to'xtatildi!");
        };

        useEffect(() => {
          let animationFrame;
          if (isAnimating) {
            const animate = () => {
              setPosition(prev => (prev + 1) % 360);
              animationFrame = requestAnimationFrame(animate);
            };
            animationFrame = requestAnimationFrame(animate);
          }
          return () => cancelAnimationFrame(animationFrame);
        }, [isAnimating]);

        return (
          <div className="space-y-4">
            <div className="flex gap-4">
              <button
                onClick={startAnimation}
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={isAnimating}
              >
                Boshlash
              </button>
              <button
                onClick={stopAnimation}
                className="bg-red-500 text-white px-4 py-2 rounded"
                disabled={!isAnimating}
              >
                To'xtatish
              </button>
            </div>
            <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
              <div
                className="absolute w-16 h-16 bg-blue-500 rounded-lg"
                style={{
                  transform: `translate(${Math.cos(position * Math.PI / 180) * 100 + 100}px, ${Math.sin(position * Math.PI / 180) * 50 + 50}px)`
                }}
              />
            </div>
          </div>
        );
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-4 sm:mb-6 md:mb-8">
          DOM Murakkab Usullari
        </h1>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center">
          {domTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id)}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200
                ${activeTab === topic.id 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}
            >
              {topic.title}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {domTopics.map((topic) => (
          <div
            key={topic.id}
            className={`transition-all duration-300 ${
              activeTab === topic.id ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-3 sm:p-4 md:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                  {topic.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {topic.description}
                </p>
                <div className="bg-gray-900 rounded-lg p-2 sm:p-4 overflow-x-auto">
                  <SyntaxHighlighter 
                    language="javascript" 
                    style={dracula}
                    className="text-xs sm:text-sm"
                    customStyle={{
                      padding: '1rem',
                      margin: 0,
                      borderRadius: '0.5rem'
                    }}
                  >
                    {topic.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            {/* Interactive demo area */}
            <div className="mt-4 sm:mt-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Amaliy namuna
              </h3>
              <div 
                ref={demoContainerRef}
                className="border-2 border-dashed border-gray-200 rounded-lg p-3 sm:p-4 min-h-[200px]"
              >
                {topic.demo && <topic.demo containerRef={demoContainerRef} />}
              </div>
            </div>
          </div>
        ))}

        {/* Additional information */}
        <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Qo'shimcha ma'lumotlar
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            DOM (Document Object Model) - HTML va XML hujjatlar uchun dasturlash interfeysi hisoblanadi. 
            U veb-sahifaning dinamik o'zgartirilishini ta'minlaydi va JavaScript orqali boshqariladi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DomMurrakab;
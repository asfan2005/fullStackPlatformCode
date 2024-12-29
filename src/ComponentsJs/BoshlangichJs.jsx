import React, { useState } from 'react';
import { FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup, 
         FaHtml5, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes } from 'react-icons/fa';
import { MalumotTurlari, Operator, Ozgaruvchi } from "../components/index";

function BoshlangichJs() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "JavaScript Kirish": <FaBook />,
    "O'zgaruvchilar": <FaCode />,
    "Ma'lumot Turlari": <FaList />,
    "Operatorlar": <FaSync />,
    "Shartli Operatorlar": <FaWrench />,
    "Switch Case": <FaObjectGroup />,
    "For Sikli": <FaSync />,
    "While Sikli": <FaSync />,
    "Funksiyalar": <FaWrench />,
    "Array (Massiv)": <FaObjectGroup />,
    "Array Metodlari": <FaList />,
    "String Metodlari": <FaCode />,
    "Math Obyekti": <FaCode />,
    "Date Obyekti": <FaClock />,
    "DOM bilan ishlash": <FaHtml5 />,
    "Events (Hodisalar)": <FaSync />,
    "Forms bilan ishlash": <FaWrench />,
    "Local Storage": <FaBoxes />,
    "JSON": <FaCode />,
    "Try Catch": <FaWrench />,
    "Async/Await": <FaClock />,
    "Promise": <FaClock />,
    "ES6 Yangiliklari": <FaCode />,
    "Arrow Functions": <FaCode />,
    "Amaliy Mashqlar": <FaProjectDiagram />
  };

  const menu = [
    "JavaScript Kirish",
    "O'zgaruvchilar",
    "Ma'lumot Turlari",
    "Operatorlar",
    "Shartli Operatorlar",
    "Switch Case",
    "For Sikli",
    "While Sikli",
    "Funksiyalar",
    "Array (Massiv)",
    "Array Metodlari",
    "String Metodlari",
    "Math Obyekti",
    "Date Obyekti",
    "DOM bilan ishlash",
    "Events (Hodisalar)",
    "Forms bilan ishlash",
    "Local Storage",
    "JSON",
    "Try Catch",
    "Async/Await",
    "Promise",
    "ES6 Yangiliklari",
    "Arrow Functions",
    "Amaliy Mashqlar"
  ];

  // JavaScript content for each topic
  const topicContent = {
    "JavaScript Kirish": (
      <div className="space-y-6  max-h-[calc(100vh-120px)]">
        {/* Introduction Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">JavaScript nima?</h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            JavaScript — zamonaviy veb-dasturlashning eng muhim tillaridan biri bo'lib, veb-sahifalarga 
            interaktivlik qo'shish uchun ishlatiladi. Bu til 1995-yilda Brendan Eich tomonidan yaratilgan 
            bo'lib, bugungi kunda dunyodagi eng mashhur dasturlash tillaridan biri hisoblanadi.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">JavaScript yordamida quyidagilarni amalga oshirish mumkin:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Veb-sahifalarni dinamik o'zgartirish va yangilash</li>
              <li>Foydalanuvchi harakatlariga javob berish (click, hover va boshqalar)</li>
              <li>Ma'lumotlarni serverdan yuklash va yuborish (AJAX)</li>
              <li>Murakkab animatsiyalar va vizual effektlar yaratish</li>
              <li>Formalarni tekshirish va validatsiya qilish</li>
              <li>Veb-ilovalar va o'yinlar yaratish</li>
              <li>Real vaqt rejimida ishlash (WebSocket orqali)</li>
              <li>Mobil ilovalar yaratish (React Native orqali)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-green-800 mb-2">JavaScript afzalliklari:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>O'rganish uchun qulay va sodda sintaksis</li>
              <li>Keng qamrovli qo'llanilish sohasi (front-end, back-end, mobile)</li>
              <li>Katta hamjamiyat va ko'plab tayyor kutubxonalar</li>
              <li>Yuqori ish faoliyati va tezlik</li>
              <li>Cross-platform imkoniyatlari</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-purple-800 mb-2">JavaScript ekosistemasi:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Front-end frameworks: React, Vue, Angular</li>
              <li>Back-end platformasi: Node.js</li>
              <li>Ma'lumotlar bazasi: MongoDB</li>
              <li>Package manager: npm, yarn</li>
              <li>Build tools: Webpack, Babel</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">JavaScript versiyalari:</h4>
            <p className="text-gray-600 mb-2">
              JavaScript har yili yangilanib boradi. ES6 (ES2015) dan boshlab, til yanada zamonaviy va 
              kuchli xususiyatlarga ega bo'ldi:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Let va const o'zgaruvchilar</li>
              <li>Arrow functions</li>
              <li>Classes va Modules</li>
              <li>Promises va async/await</li>
              <li>Destructuring va spread operator</li>
            </ul>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">JavaScript kodini yozish</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">1. HTML ichida to'g'ridan-to'g'ri (Inline)</h4>
            <div className="bg-gray-800 text-white p-4 rounded-lg">
              <code className="text-sm">
                &lt;button onclick="alert('Salom!')"&gt;Meni bosing&lt;/button&gt;
              </code>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">2. Script tegi orqali (Internal)</h4>
            <div className="bg-gray-800 text-white p-4 rounded-lg">
              <pre className="text-sm">
                <code>{`<script>
  console.log("Salom, JavaScript!");
</script>`}</code>
              </pre>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">3. Tashqi fayl orqali (External)</h4>
            <div className="bg-gray-800 text-white p-4 rounded-lg">
              <code className="text-sm">
                &lt;script src="script.js"&gt;&lt;/script&gt;
              </code>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Amaliy mashq</h3>
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-800 mb-2">Birinchi JavaScript dasturingiz:</h4>
            <div className="bg-gray-800 text-white p-4 rounded-lg">
              <pre className="text-sm">
                <code>{`// O'zgaruvchilar bilan ishlash
let ism = "Ali";
let yosh = 25;

// Konsolga chiqarish
console.log("Ism:", ism);
console.log("Yosh:", yosh);

// Oddiy hisoblash
let natija = yosh + 5;
console.log("5 yildan keyin:", natija);`}</code>
              </pre>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Eslatma:</h4>
            <p className="text-gray-700">
              Kodni sinab ko'rish uchun brauzeringizning Developer Tools (F12) konsolidan foydalaning.
            </p>
          </div>
        </section>
      </div>
    ),
    "O'zgaruvchilar": <Ozgaruvchi />,
    "Ma'lumot Turlari": <MalumotTurlari/>,
    "Operatorlar":<Operator/>,
    // Add other topic contents here
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Mobile Menu Button - Updated positioning */}
      <div className="lg:hidden fixed top-2 left-2 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all shadow-md"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar - Updated for better mobile experience */}
        <div className={`
          fixed lg:sticky lg:top-0
          w-[260px] sm:w-[280px] lg:w-[300px]
          h-screen
          bg-gray-100/95 backdrop-blur-sm
          transition-all duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
          shadow-lg lg:shadow-none
        `}>
          <div className="flex flex-col h-full p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">JavaScript Mavzulari</h2>
            <div className="overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <ul className="space-y-1.5 sm:space-y-2">
                {menu.map((item, index) => (
                  <li 
                    key={index}
                    className={`
                      p-2.5 sm:p-3
                      hover:bg-gray-200/80
                      cursor-pointer
                      rounded-lg
                      transition-all
                      duration-200
                      ${selectedTopic === item ? 'bg-gray-200/90' : ''}
                    `}
                    onClick={() => {
                      setSelectedTopic(item);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="text-gray-600 text-sm sm:text-base">
                        {menuIcons[item]}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content - Updated responsive spacing */}
        <div className="flex-1 lg:pl-0">
          <div className={`
            h-screen
            p-3 sm:p-4 md:p-6 lg:p-8
            mt-14 sm:mt-16 lg:mt-0
            transition-all
            duration-300
            ${isMobileMenuOpen ? 'blur-sm lg:blur-none' : ''}
          `}>
            {selectedTopic ? (
              <div className="h-full overflow-hidden">
                <div className="max-w-5xl mx-auto h-full flex flex-col">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                    {selectedTopic}
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {topicContent[selectedTopic]}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-8 sm:mt-10">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  Mavzuni tanlang
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400">
                  Batafsil ma'lumot olish uchun chap menuda mavzulardan birini tanlang
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Overlay - Updated opacity animation */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default BoshlangichJs;
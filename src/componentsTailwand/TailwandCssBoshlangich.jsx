import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaBook, 
  FaDownload, 
  FaPuzzlePiece, 
  FaPalette, 
  FaFont, 
  FaBorderStyle,
  FaRuler, 
  FaColumns, 
  FaThLarge,
  FaMobileAlt,
  FaBars, 
  FaTimes 
} from 'react-icons/fa';
import {TailwandCssKirish} from "../components/index"
function TailwandCssBoshlangich() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "Tailwind CSS-ga Kirish": <FaBook />,
    "Loyihaga Tailwind-ni O'rnatish": <FaDownload />,
    "Utility Sinflar Asoslari": <FaPuzzlePiece />,
    "Ranglar va Fonlar": <FaPalette />,
    "Matn Usullari": <FaFont />,
    "Chegaralar va Burchaklar": <FaBorderStyle />,
    "Bo'shliqni Tashkil Qilish": <FaRuler />,
    "Flexbox Asoslari": <FaColumns />,
    "Grid Tizimi Asoslari": <FaThLarge />,
    "Responsive Dizayn Kirish": <FaMobileAlt />
  };

  const menu = [
    "Tailwind CSS-ga Kirish",
    "Loyihaga Tailwind-ni O'rnatish",
    "Utility Sinflar Asoslari",
    "Ranglar va Fonlar",
    "Matn Usullari",
    "Chegaralar va Burchaklar",
    "Bo'shliqni Tashkil Qilish",
    "Flexbox Asoslari",
    "Grid Tizimi Asoslari",
    "Responsive Dizayn Kirish"
  ];

  const topicContent = {
    "Tailwind CSS-ga Kirish": (
     <TailwandCssKirish/>
    ),

    "Loyihaga Tailwind-ni O'rnatish": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">O'rnatish yo'llari</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">NPM orqali o'rnatish:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>npm install -D tailwindcss</code>
            </pre>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-green-800 mb-2">CDN orqali ulash:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`<script src="https://cdn.tailwindcss.com"></script>`}</code>
            </pre>
          </div>
        </section>
      </div>
    ),

    "Utility Sinflar Asoslari": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Utility Sinflar</h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Tailwind CSS utility sinflar yordamida stillarni to'g'ridan-to'g'ri HTML elementlariga qo'llash imkonini beradi.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Asosiy utility sinflar:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ranglar (text-color, bg-color)</li>
              <li>O'lchamlar (width, height)</li>
              <li>Margin va padding</li>
              <li>Flexbox va Grid</li>
              <li>Typography</li>
            </ul>
          </div>
        </section>
      </div>
    ),

    "Ranglar va Fonlar": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ranglar va Fonlar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Rang sinflari:</h4>
              <div className="space-y-2">
                <div className="bg-blue-500 text-white p-2 rounded">bg-blue-500</div>
                <div className="bg-green-500 text-white p-2 rounded">bg-green-500</div>
                <div className="bg-red-500 text-white p-2 rounded">bg-red-500</div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Fon turlari:</h4>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-2 rounded">
                  Gradient fon
                </div>
                <div className="bg-opacity-50 bg-blue-500 text-white p-2 rounded">
                  Shaffof fon
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),

    "Matn Usullari": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Matn Usullari</h3>
          
          <div className="space-y-4">
            <div className="text-sm">Text Small</div>
            <div className="text-base">Text Base</div>
            <div className="text-lg">Text Large</div>
            <div className="text-xl">Text XL</div>
            <div className="font-bold">Bold Text</div>
            <div className="italic">Italic Text</div>
            <div className="underline">Underline Text</div>
          </div>
        </section>
      </div>
    ),

    "Chegaralar va Burchaklar": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Chegaralar va Burchaklar</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 p-4 rounded">Border-2</div>
            <div className="border-4 p-4 rounded-lg">Border-4</div>
            <div className="border-dashed border-2 p-4">Dashed</div>
            <div className="border-dotted border-2 p-4">Dotted</div>
          </div>
        </section>
      </div>
    ),

    "Bo'shliqni Tashkil Qilish": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Margin va Padding</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-100 p-4">Padding-4</div>
            <div className="bg-green-100 m-4">Margin-4</div>
            <div className="bg-red-100 px-4 py-2">Padding X/Y</div>
            <div className="bg-yellow-100 mx-4 my-2">Margin X/Y</div>
          </div>
        </section>
      </div>
    ),

    "Flexbox Asoslari": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Flexbox</h3>
          
          <div className="flex space-x-4 mb-4">
            <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
            <div className="bg-blue-500 text-white p-4 rounded">Item 2</div>
            <div className="bg-blue-500 text-white p-4 rounded">Item 3</div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="bg-green-500 text-white p-4 rounded">Column 1</div>
            <div className="bg-green-500 text-white p-4 rounded">Column 2</div>
            <div className="bg-green-500 text-white p-4 rounded">Column 3</div>
          </div>
        </section>
      </div>
    ),

    "Grid Tizimi Asoslari": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Grid Tizimi</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-500 text-white p-4 rounded">Grid 1</div>
            <div className="bg-purple-500 text-white p-4 rounded">Grid 2</div>
            <div className="bg-purple-500 text-white p-4 rounded">Grid 3</div>
            <div className="bg-purple-500 text-white p-4 rounded">Grid 4</div>
            <div className="bg-purple-500 text-white p-4 rounded">Grid 5</div>
            <div className="bg-purple-500 text-white p-4 rounded">Grid 6</div>
          </div>
        </section>
      </div>
    ),

    "Responsive Dizayn Kirish": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Responsive Dizayn</h3>
          
          <div className="space-y-4">
            <div className="bg-indigo-500 text-white p-4 rounded text-center sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500">
              Ekran o'lchamiga qarab rang o'zgaradi
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-indigo-500 text-white p-4 rounded">Item 1</div>
              <div className="bg-indigo-500 text-white p-4 rounded">Item 2</div>
              <div className="bg-indigo-500 text-white p-4 rounded">Item 3</div>
              <div className="bg-indigo-500 text-white p-4 rounded">Item 4</div>
            </div>
          </div>
        </section>
      </div>
    )
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-2 right-2 z-50 w-auto">
        <button 
          onClick={() => navigate("/frontend/css")}
          className="p-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all shadow-md flex items-center gap-2"
        >
          <span>Orqaga</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-2 left-2 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all shadow-md"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
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
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">Tailwind CSS Mavzulari</h2>
            <div className="overflow-y-auto flex-1 pr-2 
              scrollbar-thin 
              scrollbar-thumb-blue-500 
              scrollbar-track-gray-200 
              hover:scrollbar-thumb-blue-700
              scrollbar-thumb-rounded-full
              scrollbar-track-rounded-full">
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

        {/* Main Content */}
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
                  <div className="flex-1 overflow-y-auto pr-2
                    scrollbar-thin 
                    scrollbar-thumb-blue-500 
                    scrollbar-track-gray-200 
                    hover:scrollbar-thumb-blue-700
                    scrollbar-thumb-rounded-full
                    scrollbar-track-rounded-full">
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

        {/* Overlay */}
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

export default TailwandCssBoshlangich;
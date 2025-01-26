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
import {BoshliqniTashkil, ChegaralarBurchaklar, FlexboxAsoslar, GridTizimiAsoslar, LoyihagaOrnatish, MatnUsullari, RanglarFonlar, ResponsiveDizayn, TailwandCssKirish, UtilitySinflar} from "../components/index"
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
      <LoyihagaOrnatish/>
    ),

    "Utility Sinflar Asoslari": (
     <UtilitySinflar/>
    ),

    "Ranglar va Fonlar": (
      <RanglarFonlar/>
    ),

    "Matn Usullari": (
     <MatnUsullari/>
    ),

    "Chegaralar va Burchaklar": (
     <ChegaralarBurchaklar/>
    ),

    "Bo'shliqni Tashkil Qilish": (
    <BoshliqniTashkil/>
    ),

    "Flexbox Asoslari": (
      <FlexboxAsoslar/>
    ),

    "Grid Tizimi Asoslari": (
    <GridTizimiAsoslar/>
    ),

    "Responsive Dizayn Kirish": (
     <ResponsiveDizayn/>
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
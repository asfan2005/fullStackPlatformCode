import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaLayerGroup,
  FaPaintBrush,
  FaCode,
  FaPalette,
  FaBoxOpen,
  FaMagic,
  FaCogs,
  FaTools,
  FaLaptopCode,
  FaProjectDiagram,
  FaBars,
  FaTimes
} from 'react-icons/fa';

import {AmaliyTailwandOrta, InteraktivlikAnimatsiyalar, Komponentlar, LayoutJoylashuv, MaxsusConfogPlugins, RanglarTemalar, ResponsiveDizayn, ResponsiveDizaynTailwind, TailwandCssAsoslarOrta, TailwindCssIntegratsiya} from "../components/index"
import TypographyRuxsatlash from './pagesOrta/TypographyRuxsatlash';

function PageTailwandcssOrta() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "Tailwind CSS Asoslar": <FaCode />,
    "Layout va Joylashuv": <FaLayerGroup />,
    "Typography va Ruxsatlashtirish": <FaPaintBrush />,
    "Ranglar va Temalar": <FaPalette />,
    "Interaktivlik va Animatsiyalar": <FaMagic />,
    "Komponentlar": <FaBoxOpen />,
    "Responsive Dizayn": <FaLaptopCode />,
    "Tailwind CSS Integratsiyasi": <FaTools />,
    "Maxsus Config va Plugins": <FaCogs />,
    "Amaliy Loyihalar": <FaProjectDiagram />
  };

  const menu = [
    "Tailwind CSS Asoslar",
    "Layout va Joylashuv",
    "Typography va Ruxsatlashtirish",
    "Ranglar va Temalar",
    "Interaktivlik va Animatsiyalar",
    "Komponentlar",
    "Responsive Dizayn",
    "Tailwind CSS Integratsiyasi",
    "Maxsus Config va Plugins",
    "Amaliy Loyihalar"
  ];

  // Temporary content for each topic
  const topicContent = {
    "Tailwind CSS Asoslar": (
     <TailwandCssAsoslarOrta/>
    ),
    "Layout va Joylashuv": (
     <LayoutJoylashuv/>
    ),
    "Typography va Ruxsatlashtirish": (
     <TypographyRuxsatlash/>
    ),
    "Ranglar va Temalar": (
     <RanglarTemalar/>
    ),
    "Interaktivlik va Animatsiyalar": (
     <InteraktivlikAnimatsiyalar/>
    ),
    "Komponentlar": (
      <Komponentlar/>
    ),
    "Responsive Dizayn": (
    <ResponsiveDizaynTailwind/>
    ),
    "Tailwind CSS Integratsiyasi": (
     <TailwindCssIntegratsiya/>
    ),
    "Maxsus Config va Plugins": (
     <MaxsusConfogPlugins/>
    ),
    "Amaliy Loyihalar": (
     <AmaliyTailwandOrta/>
    )
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-2 right-2 z-50 w-auto">
        <button 
          onClick={() => navigate("/frontend/tailwind")}
          className="p-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md flex items-center gap-2"
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
          bg-gradient-to-b from-indigo-50 to-white
          transition-all duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
          shadow-lg lg:shadow-none
        `}>
          <div className="flex flex-col h-full p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4 text-indigo-800">
              Tailwind CSS O'rta Daraja
            </h2>
            <div className="overflow-y-auto flex-1 pr-2 
              scrollbar-thin 
              scrollbar-thumb-indigo-500 
              scrollbar-track-gray-200 
              hover:scrollbar-thumb-indigo-700
              scrollbar-thumb-rounded-full
              scrollbar-track-rounded-full">
              <ul className="space-y-1.5 sm:space-y-2">
                {menu.map((item, index) => (
                  <li 
                    key={index}
                    className={`
                      p-2.5 sm:p-3
                      hover:bg-indigo-50
                      cursor-pointer
                      rounded-lg
                      transition-all
                      duration-200
                      ${selectedTopic === item ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700'}
                    `}
                    onClick={() => {
                      setSelectedTopic(item);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className={`${selectedTopic === item ? 'text-indigo-600' : 'text-gray-500'}`}>
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
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-indigo-900">
                    {selectedTopic}
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2
                    scrollbar-thin 
                    scrollbar-thumb-indigo-500 
                    scrollbar-track-gray-200 
                    hover:scrollbar-thumb-indigo-700
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

export default PageTailwandcssOrta;
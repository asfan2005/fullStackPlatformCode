import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCode,
  FaLayerGroup,
  FaMobile,
  FaSpinner,
  FaCss3,
  FaTools,
  FaGlobe,
  FaRocket,
  FaLaptopCode,
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaPalette,
  FaBoxOpen,
  FaWind,
  FaFeather,
  FaCog,
  FaThList,
  FaTable,
  FaImage
} from 'react-icons/fa';


import {TailwindAsoslarPageMukammal,UtilityFirstYondashuv,RanglarGradientlar,LayoutSpacing,FlexboxGrid,Typography,ResponsiveDizaynTailwand, AnimatsiyalarTransitionsMukammal, BordersEffectsTailwand, Customization, PerformanceMukammal, RasmlarMedia, JadvallarMukkammal, DarkModeMukammal, PluginsMukammal, AmaliyMukammal} from "../components/index"
import ComponentsTailwand from './pagesMukammal/ComponentsTailwand';
import BestPracticesMukammal from './pagesMukammal/BestPracticesMukammal';

function PageTailwandcssMukammal() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "Tailwind Asoslari": <FaCode />,
    "Utility-First Yondashuv": <FaBoxOpen />,
    "Ranglar va Gradientlar": <FaPalette />,
    "Layout va Spacing": <FaLayerGroup />,
    "Flexbox va Grid": <FaThList />,
    "Typography": <FaFeather />,
    "Responsive Dizayn": <FaMobile />,
    "Animatsiyalar va Transitions": <FaSpinner />,
    "Borders va Effects": <FaCss3 />,
    "Components": <FaTools />,
    "Customization": <FaCog />,
    "Performance": <FaRocket />,
    "Rasmlar va Media": <FaImage />,
    "Jadvallar": <FaTable />,
    "Dark Mode": <FaMobile />,
    "Plugins": <FaTools />,
    "Best Practices": <FaGlobe />,
    "Amaliy Loyihalar": <FaLaptopCode />,
    "Resurslar": <FaProjectDiagram />
  };

  const menu = Object.keys(menuIcons);

  const topicContent = {
    "Tailwind Asoslari": (
     <TailwindAsoslarPageMukammal/>
    ),
    "Utility-First Yondashuv": (
     <UtilityFirstYondashuv/>
    ),
    "Ranglar va Gradientlar": (
      <RanglarGradientlar/>
    ),
    "Layout va Spacing": (
    <LayoutSpacing/>
    ),
    "Flexbox va Grid": (
    <FlexboxGrid/>  
    ),
    "Typography": (
      <Typography/>
    ),
    "Responsive Dizayn": (
    <ResponsiveDizaynTailwand/>
    ),
    "Animatsiyalar va Transitions": (
     <AnimatsiyalarTransitionsMukammal/>
    ),
    "Borders va Effects": (
    <BordersEffectsTailwand/>
    ),
    "Components": (
     <ComponentsTailwand/>
    ),
    "Customization": (
      <Customization/>
    ),
    "Performance": (
     <PerformanceMukammal/>
    ),
    "Rasmlar va Media": (
     <RasmlarMedia/>
    ),
    "Jadvallar": (
     <JadvallarMukkammal/>
    ),
    "Dark Mode": (
    <DarkModeMukammal/>
    ),
    "Plugins": (
     <PluginsMukammal/>
    ),
    "Best Practices": (
      <BestPracticesMukammal/>
    ),
    "Amaliy Loyihalar": (
     <AmaliyMukammal/>
    ),
    "Resurslar": (
     <AmaliyMukammal/>
    )
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Back Button */}
      <div className="fixed top-2 right-2 z-50 w-auto">
        <button 
          onClick={() => navigate("/frontend/tailwind")}
          className="p-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md flex items-center gap-2"
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
          bg-gradient-to-b from-purple-50 to-white
          transition-all duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
          shadow-lg lg:shadow-none
        `}>
          <div className="flex flex-col h-full p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4 text-purple-800">
              CSS Mukammal Daraja
            </h2>
            <div className="overflow-y-auto flex-1 pr-2 
              scrollbar-thin 
              scrollbar-thumb-purple-500 
              scrollbar-track-gray-200 
              hover:scrollbar-thumb-purple-700
              scrollbar-thumb-rounded-full
              scrollbar-track-rounded-full">
              <ul className="space-y-1.5 sm:space-y-2">
                {menu.map((item, index) => (
                  <li 
                    key={index}
                    className={`
                      p-2.5 sm:p-3
                      hover:bg-purple-50
                      cursor-pointer
                      rounded-lg
                      transition-all
                      duration-200
                      ${selectedTopic === item ? 'bg-purple-100 text-purple-700' : 'text-gray-700'}
                    `}
                    onClick={() => {
                      setSelectedTopic(item);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className={`${selectedTopic === item ? 'text-purple-600' : 'text-gray-500'}`}>
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
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-purple-900">
                    {selectedTopic}
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2
                    scrollbar-thin 
                    scrollbar-thumb-purple-500 
                    scrollbar-track-gray-200 
                    hover:scrollbar-thumb-purple-700
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
                  CSS mukammal darajadagi mavzularni o'rganish uchun chap menuda mavzulardan birini tanlang
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

export default PageTailwandcssMukammal;
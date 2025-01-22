import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaCode, FaLayerGroup, FaBoxes, FaClock, FaDatabase,
    FaProjectDiagram, FaRocket, FaBug, FaBars, FaTimes
} from 'react-icons/fa';
import { AmaliyPracePage, Animatsiyalar, ApiBilanIshlash, ArrayObyektlarPro, AsyncJavaScript, DebugKonsol, DomMurrakab, FunksiyalarPro, Modullar, StorageBrowserApi, TestingDebug,Performance, SecurityPage, DesignPatterns, CleanCode, TypeScriptAsoslar, NpmPackageManagement, WebpackBundling, GitControl } from "../components/index";
import Es6Xususiylatlari from './pageJsOrta/Es6Xususiylatlari';
// Custom scrollbar styles qo'shish uchun CSS
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 20px;
    transition: all 0.3s;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
  }
`;

function OrtaJs() {
    const navigate = useNavigate();
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuIcons = {
        "DOM Murakkab Usullari": <FaCode />,
        "Funksiyalar Pro": <FaLayerGroup />,
        "Array va Obyektlar Pro": <FaBoxes />,
        "Animatsiyalar": <FaClock />,
        "Storage va Browser API": <FaDatabase />,
        "Modullar": <FaProjectDiagram />,
        "Async JavaScript": <FaRocket />,
        "Amaliy Loyihalar": <FaProjectDiagram />,
        "ES6+ Xususiyatlari": <FaCode />,
        "Debug va Konsol": <FaBug />,
        "API bilan Ishlash": <FaProjectDiagram />,
        "Testing va Debug": <FaBug />,
        "Performance": <FaRocket />,
        "Security": <FaDatabase />,
        "Design Patterns": <FaLayerGroup />,
        "Clean Code": <FaCode />,
        "TypeScript Asoslari": <FaCode />,
        "NPM va Package Management": <FaBoxes />,
        "Webpack va Bundling": <FaProjectDiagram />,
        "Git va Version Control": <FaProjectDiagram />
    };

    const menu = [
        "DOM Murakkab Usullari",
        "Funksiyalar Pro",
        "Array va Obyektlar Pro",
        "Animatsiyalar",
        "Storage va Browser API",
        "Modullar",
        "Async JavaScript",
        "Amaliy Loyihalar",
        "ES6+ Xususiyatlari",
        "Debug va Konsol",
        "API bilan Ishlash",
        "Testing va Debug",
        "Performance",
        "Security",
        "Design Patterns",
        "Clean Code",
        "TypeScript Asoslari",
        "NPM va Package Management",
        "Webpack va Bundling",
        "Git va Version Control"
    ];

    // Temporary content for each topic
    const topicContent = {
        "DOM Murakkab Usullari": (
            <div className="space-y-4">
                <DomMurrakab />
            </div>
        ),
        "Funksiyalar Pro": (
            <div className='space-y-4'>
                <FunksiyalarPro />
            </div>
        ),
        "Array va Obyektlar Pro": (
            <ArrayObyektlarPro/>
        ),
        "Animatsiyalar": (
           <Animatsiyalar/>
        ),
        "Storage va Browser API": (
          <StorageBrowserApi/>
        ),
        "Modullar": (
            <Modullar/>
        ),
        "Async JavaScript": (
           <AsyncJavaScript/>
        ),
        "Amaliy Loyihalar": (
           <AmaliyPracePage/>
        ),
        "ES6+ Xususiyatlari": (
           <Es6Xususiylatlari/>
        ),
        "Debug va Konsol": (
          <DebugKonsol/>
        ),
        "API bilan Ishlash": (
           <ApiBilanIshlash/>
        ),
        "Testing va Debug": (
           <TestingDebug/>
        ),
        "Performance": (
           <Performance/>
        ),
        "Security": (
           <SecurityPage/>
        ),
        "Design Patterns": (
            <DesignPatterns/>
        ),
        "Clean Code": (
            <CleanCode/>
        ),
        "TypeScript Asoslari": (
           <TypeScriptAsoslar/>
        ),
        "NPM va Package Management": (
           <NpmPackageManagement/>
        ),
        "Webpack va Bundling": (
           <WebpackBundling/>
        ),
        "Git va Version Control": (
           <GitControl/>
        )
    };

    return (
        <div className="relative min-h-screen bg-white">
            {/* Add custom scrollbar styles */}
            <style>{scrollbarStyles}</style>

            {/* Back Button */}
            <div className="fixed top-2 right-2 z-50 w-auto">
                <button
                    onClick={() => navigate("/frontend/javascript")}
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
                {/* Sidebar with enhanced scrollbar */}
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
                        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">
                            JavaScript O'rta Daraja
                        </h2>
                        <div className="custom-scrollbar overflow-y-auto flex-1 pr-2">
                            <ul className="space-y-1.5 sm:space-y-2">
                                {menu.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`
                      p-2.5 sm:p-3
                      hover:bg-white/70
                      hover:shadow-md
                      cursor-pointer
                      rounded-xl
                      transition-all
                      duration-200
                      border border-transparent
                      hover:border-gray-200
                      ${selectedTopic === item ?
                                                'bg-white shadow-md border-gray-200 transform scale-[1.02]' :
                                                'hover:transform hover:scale-[1.02]'
                                            }
                    `}
                                        onClick={() => {
                                            setSelectedTopic(item);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`
                        text-gray-600 
                        ${selectedTopic === item ? 'text-blue-500' : ''}
                        transition-colors duration-200
                      `}>
                                                {menuIcons[item]}
                                            </span>
                                            <span className={`
                        text-sm md:text-base
                        ${selectedTopic === item ? 'text-blue-500 font-medium' : 'text-gray-700'}
                        transition-colors duration-200
                      `}>
                                                {item}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content with enhanced scrollbar */}
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
                                    <div className="custom-scrollbar flex-1 overflow-y-auto pr-2">
                                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                            {topicContent[selectedTopic]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 mt-8 sm:mt-10">
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                                    Mavzuni tanlang
                                </h3>
                                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400">
                                    O'rta daraja mavzularini o'rganish uchun chap menuda mavzulardan birini tanlang
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

export default OrtaJs;
import React, { useState } from 'react';
import {
  FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup,
  FaReact, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes, FaShieldAlt, FaLayerGroup, FaTools, FaSpinner, FaDatabase,
  FaMobile, FaGlobe, FaRocket, FaPlug
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { ReactAdvancedHooksOrta, ReactAdvancedRouting, ReactComponentLifecycle, ReactContentApiOrta, ReactCustomHooks, ReactCustomHooksOrta, ReactErrorBoundaries, ReactInternationalizationOrta, ReactMobileOrta, ReactOrtaReactOptimization, ReactPerformanceTuning, ReactReactArchitectureOrta, ReactReactFormsOrta, ReactReactPattersOrta, ReactReactPluginsOrta, ReactReactSuspenseOrta, ReactReactTestingOrta, ReactSecurityBestPractices, ReactServerStateOrta, ReactStateManagementOrta } from "../components/index"
import ReactReactAnimationsOrta from './pageOrtaReact/ReactReactAnimationsOrta';

function OrtaReact() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "React Optimization": <FaSync className="text-blue-500" />,
    "Advanced Hooks": <FaWrench className="text-green-500" />,
    "React Patterns": <FaCode className="text-purple-500" />,
    "State Management": <FaBoxes className="text-orange-500" />,
    "Advanced Routing": <FaProjectDiagram className="text-red-500" />,
    "React Testing": <FaList className="text-indigo-500" />,
    "Server State": <FaClock className="text-yellow-500" />,
    "React Architecture": <FaObjectGroup className="text-pink-500" />,
    "Performance Tuning": <FaReact className="text-teal-500" />,
    "Security Best Practices": <FaBook className="text-cyan-500" />,
    "Component Lifecycle": <FaClock className="text-emerald-500" />,
    "Error Boundaries": <FaShieldAlt className="text-red-600" />,
    "React Context API": <FaLayerGroup className="text-violet-500" />,
    "Custom Hooks": <FaTools className="text-amber-500" />,
    "React Suspense": <FaSpinner className="text-fuchsia-500" />,
    "React Animations": <FaRocket className="text-rose-500" />,
    "React Forms": <FaDatabase className="text-lime-500" />,
    "React Mobile": <FaMobile className="text-sky-500" />,
    "Internationalization": <FaGlobe className="text-indigo-600" />,
    "React Plugins": <FaPlug className="text-orange-600" />
  };

  const menu = [
    "React Optimization",
    "Advanced Hooks",
    "React Patterns",
    "State Management",
    "Advanced Routing",
    "React Testing",
    "Server State",
    "React Architecture",
    "Performance Tuning",
    "Security Best Practices",
    "Component Lifecycle",
    "Error Boundaries",
    "React Context API",
    "Custom Hooks",
    "React Suspense",
    "React Animations",
    "React Forms",
    "React Mobile",
    "Internationalization",
    "React Plugins"
  ];

  const topicContent = {
    "React Optimization": (
      <ReactOrtaReactOptimization />
    ),
    "Advanced Hooks": (
      <ReactAdvancedHooksOrta />
    ),
    "React Patterns": (
      <ReactReactPattersOrta />
    ),
    "State Management": (
      <ReactStateManagementOrta />
    ),
    "Advanced Routing": (
      <ReactAdvancedRouting />
    ),
    "React Testing": (
      <ReactReactTestingOrta />
    ),
    "Server State": (
      <ReactServerStateOrta />
    ),
    "React Architecture": (
      <ReactReactArchitectureOrta />
    ),
    "Performance Tuning": (
      <ReactPerformanceTuning />
    ),
    "Security Best Practices": (
      <ReactSecurityBestPractices/>
    ),
    "Component Lifecycle": (
      <ReactComponentLifecycle/>
    ),
    "Error Boundaries": (
     <ReactErrorBoundaries/>
    ),
    "React Context API": (
    <ReactContentApiOrta/>
    ),
    "Custom Hooks": (
      <ReactCustomHooksOrta/>
    ),
    "React Suspense": (
      <ReactReactSuspenseOrta/>
    ),
    "React Animations": (
    <ReactReactAnimationsOrta/>
    ),
    "React Forms": (
     <ReactReactFormsOrta/>
    ),
    "React Mobile": (
     <ReactMobileOrta/>
    ),
    "Internationalization": (
      <ReactInternationalizationOrta/>
    ),
    "React Plugins": (
      <ReactReactPluginsOrta/>
    )
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-2 right-2 z-50 w-auto">
        <button
          onClick={() => navigate("/frontend/react")}
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
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">O'rta Daraja React</h2>
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

export default OrtaReact;
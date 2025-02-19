import React, { useState } from 'react';
import {
  FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup,
  FaReact, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes, FaShieldAlt, FaLayerGroup, FaTools, FaSpinner, FaDatabase,
  FaMobile, FaGlobe, FaRocket, FaPlug, FaCheck, FaServer, FaCogs, FaPuzzlePiece, FaUniversalAccess, FaCloud
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReactAdvancedComponentPatterns from './pageMukammalReact/ReactAdvancedComponentPatterns';
import ReactPerformanceOptimizationPro from './pageMukammalReact/ReactPerformanceOptimizationPro';
import ReactCustomHooksEngineering from './pageMukammalReact/ReactCustomHooksEngineering';
import ReactStateManagementArchi from './pageMukammalReact/ReactStateManagementArchi';

function MukammalReact() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "Advanced Component Patterns": <FaObjectGroup className="text-blue-500" />,
    "Performance Optimization Pro": <FaSync className="text-green-500" />,
    "Custom Hooks Engineering": <FaWrench className="text-purple-500" />,
    "State Management Architecture": <FaBoxes className="text-orange-500" />,
    "Advanced React Patterns": <FaLayerGroup className="text-red-500" />,
    "Testing & Debug Mastery": <FaList className="text-indigo-500" />,
    "React Internals Deep Dive": <FaReact className="text-yellow-500" />,
    "Advanced Data Patterns": <FaDatabase className="text-pink-500" />,
    "Security & Authentication": <FaShieldAlt className="text-teal-500" />,
    "Complex Form Systems": <FaCheck className="text-cyan-500" />,
    "Advanced Routing Patterns": <FaProjectDiagram className="text-emerald-500" />,
    "Code Splitting Strategies": <FaCode className="text-red-600" />,
    "SSR & SSG Mastery": <FaServer className="text-violet-500" />,
    "State Machines & XState": <FaCogs className="text-amber-500" />,
    "Micro-Frontend Architecture": <FaPuzzlePiece className="text-fuchsia-500" />,
    "Enterprise Design Patterns": <FaTools className="text-rose-500" />,
    "Complex Animation Systems": <FaRocket className="text-lime-500" />,
    "Advanced TypeScript with React": <FaCode className="text-sky-500" />,
    "GraphQL & Apollo Mastery": <FaDatabase className="text-indigo-600" />,
    "CI/CD & DevOps for React": <FaCloud className="text-orange-600" />,
    "React Query & Data Fetching": <FaDatabase className="text-purple-600" />,
    "React Native Advanced": <FaMobile className="text-blue-600" />,
    "Redux Toolkit & RTK Query": <FaBoxes className="text-red-600" />,
    "React Testing Library Pro": <FaCheck className="text-green-600" />,
    "Webpack & Bundling": <FaCogs className="text-yellow-600" />,
    "React Architecture Patterns": <FaLayerGroup className="text-indigo-600" />,
    "Error Boundaries & Recovery": <FaShieldAlt className="text-red-500" />,
    "React Performance Metrics": <FaClock className="text-green-600" />,
    "Progressive Web Apps": <FaGlobe className="text-blue-600" />,
    "Accessibility (a11y)": <FaUniversalAccess className="text-purple-600" />,
    "Internationalization (i18n)": <FaGlobe className="text-green-600" />,
    "React Design Systems": <FaPuzzlePiece className="text-pink-600" />,
    "Real-time with WebSockets": <FaPlug className="text-blue-600" />,
    "React Server Components": <FaServer className="text-red-600" />,
    "Concurrent Features": <FaSpinner className="text-indigo-600" />,
    "Memory Management": <FaDatabase className="text-green-600" />,
    "React DevTools Mastery": <FaTools className="text-purple-600" />,
    "SEO Optimization": <FaRocket className="text-blue-600" />,
    "React Animation Libraries": <FaRocket className="text-pink-600" />,
    "Styled-Components Advanced": <FaPuzzlePiece className="text-purple-600" />
  };

  const menu = [
    "Advanced Component Patterns",
    "Performance Optimization Pro",
    "Custom Hooks Engineering",
    "State Management Architecture",
    "Advanced React Patterns",
    "Testing & Debug Mastery",
    "React Internals Deep Dive",
    "Advanced Data Patterns",
    "Security & Authentication",
    "Complex Form Systems",
    "Advanced Routing Patterns",
    "Code Splitting Strategies",
    "SSR & SSG Mastery",
    "State Machines & XState",
    "Micro-Frontend Architecture",
    "Enterprise Design Patterns",
    "Complex Animation Systems",
    "Advanced TypeScript with React",
    "GraphQL & Apollo Mastery",
    "CI/CD & DevOps for React",
    "React Query & Data Fetching",
    "React Native Advanced",
    "Redux Toolkit & RTK Query",
    "React Testing Library Pro",
    "Webpack & Bundling",
    "React Architecture Patterns",
    "Error Boundaries & Recovery",
    "React Performance Metrics",
    "Progressive Web Apps",
    "Accessibility (a11y)",
    "Internationalization (i18n)",
    "React Design Systems",
    "Real-time with WebSockets",
    "React Server Components",
    "Concurrent Features",
    "Memory Management",
    "React DevTools Mastery",
    "SEO Optimization",
    "React Animation Libraries",
    "Styled-Components Advanced"
  ];

  const topicContent = {
    "Advanced Component Patterns": (
     <ReactAdvancedComponentPatterns/>
    ),
    "Performance Optimization Pro": (
     <ReactPerformanceOptimizationPro/>
    ),
    "Custom Hooks Engineering": (
      <ReactCustomHooksEngineering/>
    ),
    "State Management Architecture": (
      <ReactStateManagementArchi/>
    ),
    "Advanced React Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Advanced React Patterns</h3>
        <p>Advanced React pattern techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Testing & Debug Mastery": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Testing & Debug Mastery</h3>
        <p>Advanced testing and debugging techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "React Internals Deep Dive": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Internals Deep Dive</h3>
        <p>Advanced React internals techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Advanced Data Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Advanced Data Patterns</h3>
        <p>Advanced data pattern techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Security & Authentication": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Security & Authentication</h3>
        <p>Advanced security and authentication techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Complex Form Systems": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Complex Form Systems</h3>
        <p>Advanced form management techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Advanced Routing Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Advanced Routing Patterns</h3>
        <p>Advanced routing and navigation techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Code Splitting Strategies": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Code Splitting Strategies</h3>
        <p>Advanced code splitting techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dynamic import</li>
          <li>Route-based splitting</li>
          <li>React.lazy va Suspense</li>
        </ul>
      </div>
    ),
    "SSR & SSG Mastery": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">SSR & SSG Mastery</h3>
        <p>Advanced server-side rendering techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "State Machines & XState": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">State Machines & XState</h3>
        <p>Advanced state machine techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Micro-Frontend Architecture": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Micro-Frontend Architecture</h3>
        <p>Advanced micro-frontend techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Enterprise Design Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Enterprise Design Patterns</h3>
        <p>Advanced design pattern techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Complex Animation Systems": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Complex Animation Systems</h3>
        <p>Advanced animation system techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Advanced TypeScript with React": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Advanced TypeScript with React</h3>
        <p>Advanced TypeScript integration techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "GraphQL & Apollo Mastery": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">GraphQL & Apollo Mastery</h3>
        <p>Advanced GraphQL integration techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "CI/CD & DevOps for React": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">CI/CD & DevOps for React</h3>
        <p>Advanced CI/CD and DevOps techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
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
          w-[350px] sm:w-[380px] lg:w-[400px] xl:w-[420px]
          h-screen
          bg-gray-100/95 backdrop-blur-sm
          transition-all duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
          shadow-lg lg:shadow-none
        `}>
          <div className="flex flex-col h-full p-4 sm:p-5">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 pt-16 lg:pt-4 text-gray-800">
              O'rta Daraja React
            </h2>
            <div className="overflow-y-auto flex-1 pr-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <ul className="space-y-2 sm:space-y-3">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className={`
                      group
                      p-4 sm:p-4.5
                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100
                      cursor-pointer
                      rounded-xl
                      transition-all
                      duration-200
                      border border-transparent
                      hover:border-blue-200
                      ${selectedTopic === item ? 'bg-blue-100 border-blue-300 shadow-md' : ''}
                    `}
                    onClick={() => {
                      setSelectedTopic(item);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`
                        text-xl
                        text-gray-600 
                        transition-all 
                        duration-200 
                        group-hover:scale-110
                        ${selectedTopic === item ? 'text-blue-600 scale-110' : ''}
                      `}>
                        {menuIcons[item]}
                      </span>
                      <span className={`
                        text-base sm:text-lg
                        font-medium 
                        transition-colors
                        duration-200
                        ${selectedTopic === item ? 'text-blue-700' : 'text-gray-700'}
                        group-hover:text-blue-600
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

export default MukammalReact;
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
import ReactAdvancedMukammal from './pageMukammalReact/ReactAdvancedMukammal';
import ReactTestingMukammal from './pageMukammalReact/ReactTestingMukammal';
import ReactInternalsMukammal from './pageMukammalReact/ReactInternalsMukammal';
import ReactAdvancedPatternsMukamma from './pageMukammalReact/ReactAdvancedPatternsMukamma';
import ReactSecurityAuthMukammal from './pageMukammalReact/ReactSecurityAuthMukammal';
import ReactComplexFormMukammal from './pageMukammalReact/ReactComplexFormMukammal';
import ReactAdvancedRoutingMukammal from './pageMukammalReact/ReactAdvancedRoutingMukammal';
import ReactCodeSplittingMukammal from './pageMukammalReact/ReactCodeSplittingMukammal';
import ReactSsrMasteryMukammal from './pageMukammalReact/ReactSsrMasteryMukammal';
import ReactStateMachinesMukammal from './pageMukammalReact/ReactStateMachinesMukammal';
import ReactMicroFrontEndMukammal from './pageMukammalReact/ReactMicroFrontEndMukammal';
import ReactEnterpriseMukammal from './pageMukammalReact/ReactEnterpriseMukammal';
import ReactComplexAnimation from './pageMukammalReact/ReactComplexAnimation';
import ReactAdvancedTypeMukammal from './pageMukammalReact/ReactAdvancedTypeMukammal';
import ReactGraphQlMukammal from './pageMukammalReact/ReactGraphQlMukammal';
import ReactCiCdMukammal from './pageMukammalReact/ReactCiCdMukammal';
import ReactQueryDataMukammal from './pageMukammalReact/ReactQueryDataMukammal';
import ReactReactNativeMukammal from './pageMukammalReact/ReactReactNativeMukammal';
import ReactReduxToolkitMukammal from './pageMukammalReact/ReactReduxToolkitMukammal';

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
      <ReactAdvancedComponentPatterns />
    ),
    "Performance Optimization Pro": (
      <ReactPerformanceOptimizationPro />
    ),
    "Custom Hooks Engineering": (
      <ReactCustomHooksEngineering />
    ),
    "State Management Architecture": (
      <ReactStateManagementArchi />
    ),
    "Advanced React Patterns": (
      <ReactAdvancedMukammal />
    ),
    "Testing & Debug Mastery": (
      <ReactTestingMukammal />
    ),
    "React Internals Deep Dive": (
      <ReactInternalsMukammal />
    ),
    "Advanced Data Patterns": (
      <ReactAdvancedPatternsMukamma />
    ),
    "Security & Authentication": (
      <ReactSecurityAuthMukammal />
    ),
    "Complex Form Systems": (
      <ReactComplexFormMukammal />
    ),
    "Advanced Routing Patterns": (
      <ReactAdvancedRoutingMukammal />
    ),
    "Code Splitting Strategies": (
      <ReactCodeSplittingMukammal />
    ),
    "SSR & SSG Mastery": (
      <ReactSsrMasteryMukammal />
    ),
    "State Machines & XState": (
      <ReactStateMachinesMukammal />
    ),
    "Micro-Frontend Architecture": (
      <ReactMicroFrontEndMukammal />
    ),
    "Enterprise Design Patterns": (
      <ReactEnterpriseMukammal />
    ),
    "Complex Animation Systems": (
      <ReactComplexAnimation />
    ),
    "Advanced TypeScript with React": (
      <ReactAdvancedTypeMukammal />
    ),
    "GraphQL & Apollo Mastery": (
      <ReactGraphQlMukammal />
    ),
    "CI/CD & DevOps for React": (
      <ReactCiCdMukammal />
    ),
    "React Query & Data Fetching": (
    <ReactQueryDataMukammal/>
    ),
    "React Native Advanced": (
    <ReactReactNativeMukammal/>
    ),
    "Redux Toolkit & RTK Query": (
      <ReactReduxToolkitMukammal/>
    ),
    "React Testing Library Pro": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>createSlice API</li>
            <li>RTK Query endpoints</li>
            <li>State management</li>
            <li>Middleware va Thunks</li>
          </ul>
        </div>
      </div>
    ),
    "Webpack & Bundling": (
      <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>createSlice API</li>
          <li>RTK Query endpoints</li>
          <li>State management</li>
          <li>Middleware va Thunks</li>
        </ul>
      </div>
    </div>
    ),
    "React Architecture Patterns": (
      <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>createSlice API</li>
          <li>RTK Query endpoints</li>
          <li>State management</li>
          <li>Middleware va Thunks</li>
        </ul>
      </div>
    </div>
    ),
    "Error Boundaries & Recovery": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>createSlice API</li>
            <li>RTK Query endpoints</li>
            <li>State management</li>
            <li>Middleware va Thunks</li>
          </ul>
        </div>
      </div>
    ),
    "React Performance Metrics": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>createSlice API</li>
            <li>RTK Query endpoints</li>
            <li>State management</li>
            <li>Middleware va Thunks</li>
          </ul>
        </div>
      </div>
    ),
    "Progressive Web Apps": (
      <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>createSlice API</li>
          <li>RTK Query endpoints</li>
          <li>State management</li>
          <li>Middleware va Thunks</li>
        </ul>
      </div>
    </div>
    ),
    "Accessibility (a11y)": (
      <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>createSlice API</li>
          <li>RTK Query endpoints</li>
          <li>State management</li>
          <li>Middleware va Thunks</li>
        </ul>
      </div>
    </div>
    ),
    "Internationalization (i18n)": (
      <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>createSlice API</li>
          <li>RTK Query endpoints</li>
          <li>State management</li>
          <li>Middleware va Thunks</li>
        </ul>
      </div>
    </div>
    ),
    "React Design Systems": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>createSlice API</li>
            <li>RTK Query endpoints</li>
            <li>State management</li>
            <li>Middleware va Thunks</li>
          </ul>
        </div>
      </div>
    ),
    "Real-time with WebSockets": (
      <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Redux Toolkit va RTK Query</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Komponentlar</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>createSlice API</li>
          <li>RTK Query endpoints</li>
          <li>State management</li>
          <li>Middleware va Thunks</li>
        </ul>
      </div>
    </div>
    ),
    "React Server Components": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">React Server Komponentlari</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Asosiy Xususiyatlar</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Server-side rendering</li>
            <li>Client-server integration</li>
            <li>Data fetching patterns</li>
            <li>Performance benefits</li>
          </ul>
        </div>
      </div>
    ),
    "Concurrent Features": (
      <div>
        <h1>salom</h1>
      </div>
    ),
    "Memory Management": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Xotira Boshqaruvi</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Muhim Jihatlar</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Memory leaks oldini olish</li>
            <li>useEffect cleanup</li>
            <li>Component lifecycle</li>
            <li>Performance monitoring</li>
          </ul>
        </div>
      </div>
    ),
    "React DevTools Mastery": (
      <div>
        <h1>salom</h1>
      </div>
    ),
    "SEO Optimization": (
      <div className="space-y-6 p-4">
        <h2 className="text-2xl font-bold text-gray-800">SEO Optimizatsiya</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">SEO Strategiyalari</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Meta tags boshqaruvi</li>
            <li>Server-side rendering</li>
            <li>Semantic HTML</li>
            <li>Performance metrics</li>
          </ul>
        </div>
      </div>
    ),
    "React Animation Libraries": (
      <div>
        <h1>salom</h1>
      </div>
    ),
    "Styled-Components Advanced": (
      <div>
        <h1>salom</h1>
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
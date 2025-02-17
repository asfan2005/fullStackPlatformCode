import React, { useState } from 'react';
import {
  FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup,
  FaReact, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes, FaShieldAlt, FaLayerGroup, FaTools, FaSpinner, FaDatabase,
  FaMobile, FaGlobe, FaRocket, FaPlug, FaCheck
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { ReactAdvancedHooksOrta, ReactAdvancedRouting, ReactComponentLifecycle, ReactContentApiOrta, ReactCustomHooks, ReactCustomHooksOrta, ReactErrorBoundaries, ReactInternationalizationOrta, ReactMobileOrta, ReactOrtaReactOptimization, ReactPerformanceTuning, ReactReactArchitectureOrta, ReactReactFormsOrta, ReactReactPattersOrta, ReactReactPluginsOrta, ReactReactSuspenseOrta, ReactReactTestingOrta, ReactSecurityBestPractices, ReactServerStateOrta, ReactStateManagementOrta } from "../components/index"
import ReactReactAnimationsOrta from './pageOrtaReact/ReactReactAnimationsOrta';

function MukammalReact() {
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
      <div className="space-y-6 p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">React Optimizatsiya</h3>
        
        {/* Introduction */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            React ilovalarni optimallashtirishning zamonaviy usullari va texnikalari bilan tanishing. 
            Bu bo'limda eng muhim optimizatsiya strategiyalari va ularning amaliy qo'llanilishi haqida o'rganamiz.
          </p>
        </div>

        {/* Main Topics */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Performance Optimization */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              <FaRocket className="inline-block mr-2 text-blue-500" />
              Performance Optimization
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>useMemo va useCallback hooks</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>React.memo strategiyalari</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>Virtual DOM optimizatsiyasi</span>
              </li>
            </ul>
          </div>

          {/* Code Splitting */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              <FaCode className="inline-block mr-2 text-purple-500" />
              Code Splitting
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>Dynamic import</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>Route-based splitting</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>React.lazy va Suspense</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Amaliy Misollar</h4>
          
          {/* Example 1 */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h5 className="text-lg font-medium text-gray-700 mb-2">1. useMemo Optimization</h5>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              {`const memoizedValue = useMemo(() => {
                return computeExpensiveValue(a, b);
              }, [a, b]);`}
            </pre>
          </div>

          {/* Example 2 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="text-lg font-medium text-gray-700 mb-2">2. React.memo Usage</h5>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              {`const MemoizedComponent = React.memo(({ data }) => {
                return <ExpensiveRenderer data={data} />;
              }, (prevProps, nextProps) => {
                return prevProps.data === nextProps.data;
              });`}
            </pre>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Muhim Tavsiyalar</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Faqat kerak bo'lganda memoization ishlating</li>
            <li>Performance bottleneck-larni React DevTools bilan aniqlang</li>
            <li>Bundle size monitoring qiling</li>
          </ul>
        </div>
      </div>
    ),
    "Advanced Hooks": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Ilg'or React Hooklar</h3>
        <p>Murakkab va maxsus React hook-lar:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>useReducer bilan murakkab logika
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>TypeScript bilan reducer</li>
              <li>Middleware pattern</li>
              <li>Action creators</li>
            </ul>
          </li>
          <li>useContext optimizatsiyasi
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Context splitting</li>
              <li>Selector pattern</li>
              <li>Performance optimization</li>
            </ul>
          </li>
          <li>Custom hooklarni professional yozish
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Hook composition</li>
              <li>Reusable logic</li>
              <li>Testing strategies</li>
            </ul>
          </li>
          <li>useImperativeHandle va forwardRef
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Complex DOM interactions</li>
              <li>Parent-child communication</li>
              <li>Ref patterns</li>
            </ul>
          </li>
        </ul>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">Amaliy misol:</h4>
          <pre className="text-sm overflow-x-auto">
            {`const useCustomHook = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useContext(MyContext);
  
  useEffect(() => {
    // Complex side effects
  }, [state, contextValue]);

  return {
    state,
    dispatch,
    // Derived values
    computed: useMemo(() => complexComputation(state), [state])
  };
};`}
          </pre>
        </div>
      </div>
    ),
    "React Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Patternlar</h3>
        <p>Eng ko'p ishlatiladigan React patternlar:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compound Components</li>
          <li>Render Props Pattern</li>
          <li>Higher-Order Components (HOC)</li>
          <li>Custom Hooks Pattern</li>
          <li>Provider Pattern</li>
        </ul>
      </div>
    ),
    "State Management": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Advanced Routing": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "React Testing": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Server State": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "React Architecture": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Performance Tuning": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Security Best Practices": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "Component Lifecycle": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "Error Boundaries": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "React Context API": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "Custom Hooks": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "React Suspense": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "React Animations": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "React Forms": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "React Mobile": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Redux - global state management</li>
        <li>Context API - React-ning o'zida mavjud yechim</li>
        <li>Zustand - zamonaviy state management</li>
        <li>Recoil - Facebook tomonidan yaratilgan</li>
      </ul>
    </div>
    ),
    "Internationalization": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
        <p>React ilovalarida holatni boshqarish usullari:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "React Plugins": (
      <div className="space-y-4">
      <h3 className="text-xl font-semibold">Holat Boshqaruvi</h3>
      <p>React ilovalarida holatni boshqarish usullari:</p>
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

export default MukammalReact;
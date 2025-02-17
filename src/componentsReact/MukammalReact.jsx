import React, { useState } from 'react';
import {
  FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup,
  FaReact, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes, FaShieldAlt, FaLayerGroup, FaTools, FaSpinner, FaDatabase,
  FaMobile, FaGlobe, FaRocket, FaPlug, FaCheck, FaServer, FaCogs, FaPuzzlePiece, FaUniversalAccess, FaCloud
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MukammalReact() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "Component Architecture": <FaObjectGroup className="text-blue-500" />,
    "State Management Pro": <FaBoxes className="text-green-500" />,
    "Performance Mastery": <FaSync className="text-purple-500" />,
    "Advanced Hooks Deep Dive": <FaWrench className="text-orange-500" />,
    "Testing Strategies": <FaList className="text-red-500" />,
    "Data Fetching Patterns": <FaDatabase className="text-indigo-500" />,
    "Authentication & Security": <FaShieldAlt className="text-yellow-500" />,
    "Form Management": <FaCheck className="text-pink-500" />,
    "Routing & Navigation": <FaProjectDiagram className="text-teal-500" />,
    "Code Splitting": <FaCode className="text-cyan-500" />,
    "Server-Side Rendering": <FaServer className="text-emerald-500" />,
    "State Machines": <FaCogs className="text-red-600" />,
    "Micro-Frontends": <FaPuzzlePiece className="text-violet-500" />,
    "Design Patterns": <FaLayerGroup className="text-amber-500" />,
    "Animation Systems": <FaRocket className="text-fuchsia-500" />,
    "Accessibility (a11y)": <FaUniversalAccess className="text-rose-500" />,
    "TypeScript Integration": <FaCode className="text-lime-500" />,
    "GraphQL Integration": <FaDatabase className="text-sky-500" />,
    "Deployment Strategies": <FaCloud className="text-indigo-600" />,
    "Developer Tools": <FaTools className="text-orange-600" />
  };

  const menu = [
    "Component Architecture",
    "State Management Pro",
    "Performance Mastery",
    "Advanced Hooks Deep Dive",
    "Testing Strategies",
    "Data Fetching Patterns",
    "Authentication & Security",
    "Form Management",
    "Routing & Navigation",
    "Code Splitting",
    "Server-Side Rendering",
    "State Machines",
    "Micro-Frontends",
    "Design Patterns",
    "Animation Systems",
    "Accessibility (a11y)",
    "TypeScript Integration",
    "GraphQL Integration",
    "Deployment Strategies",
    "Developer Tools"
  ];

  const topicContent = {
    "Component Architecture": (
      <div className="space-y-6 p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Component Architecture</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Zamonaviy React komponentlarini arxitektura qilish usullari va best practice-lar.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              <FaLayerGroup className="inline-block mr-2 text-blue-500" />
              Atomic Design
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>Atoms, Molecules, Organisms</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>Component Composition</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mt-1 mr-2 text-green-500" />
                <span>Reusability Patterns</span>
              </li>
            </ul>
          </div>
          {/* Additional sections can be added here */}
        </div>
      </div>
    ),
    "State Management Pro": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">State Management Pro</h3>
        <p>Advanced state management techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">Example:</h4>
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
    "Performance Mastery": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Performance Mastery</h3>
        <p>Advanced performance optimization techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>useMemo va useCallback hooks</li>
          <li>React.memo strategiyalari</li>
          <li>Virtual DOM optimizatsiyasi</li>
        </ul>
      </div>
    ),
    "Advanced Hooks Deep Dive": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Advanced Hooks Deep Dive</h3>
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
    "Testing Strategies": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Testing Strategies</h3>
        <p>Advanced testing strategies:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Data Fetching Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Data Fetching Patterns</h3>
        <p>Advanced data fetching patterns:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Authentication & Security": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Authentication & Security</h3>
        <p>Advanced authentication and security techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Form Management": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Form Management</h3>
        <p>Advanced form management techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Routing & Navigation": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Routing & Navigation</h3>
        <p>Advanced routing and navigation techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Code Splitting": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Code Splitting</h3>
        <p>Advanced code splitting techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dynamic import</li>
          <li>Route-based splitting</li>
          <li>React.lazy va Suspense</li>
        </ul>
      </div>
    ),
    "Server-Side Rendering": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Server-Side Rendering</h3>
        <p>Advanced server-side rendering techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "State Machines": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">State Machines</h3>
        <p>Advanced state machine techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Micro-Frontends": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Micro-Frontends</h3>
        <p>Advanced micro-frontend techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Design Patterns": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Design Patterns</h3>
        <p>Advanced design pattern techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Animation Systems": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Animation Systems</h3>
        <p>Advanced animation system techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Accessibility (a11y)": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Accessibility (a11y)</h3>
        <p>Advanced accessibility techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "TypeScript Integration": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">TypeScript Integration</h3>
        <p>Advanced TypeScript integration techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "GraphQL Integration": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">GraphQL Integration</h3>
        <p>Advanced GraphQL integration techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Deployment Strategies": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Deployment Strategies</h3>
        <p>Advanced deployment techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux - global state management</li>
          <li>Context API - React-ning o'zida mavjud yechim</li>
          <li>Zustand - zamonaviy state management</li>
          <li>Recoil - Facebook tomonidan yaratilgan</li>
        </ul>
      </div>
    ),
    "Developer Tools": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Developer Tools</h3>
        <p>Advanced developer tool techniques:</p>
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
import React, { useState } from 'react';
import { FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup, 
         FaReact, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {FormsValidatsiya, JsxAsoslarBoshlangich, ReactApiIntegration, ReactBoshlagichKirish, ReactComponentsBosh, ReactContextApi, ReactEvents, ReactHooksAsoslar, ReactPerformanceBosh, ReactPropsState, ReactRouterBoshlangich, ReactTestingBoshlangich, ReduxAsoslariBoshlangich, ReduxToolkitBoshlangich, UseEffectHook} from "../components/index"
import ReactCustomHooks from './pageBoshlangichReact/ReactCustomHooks';
function BoshlangichReact() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "React Kirish": <FaReact className="text-blue-500" />,
    "JSX Asoslari": <FaCode className="text-green-500" />,
    "React Componentlar": <FaBoxes className="text-purple-500" />,
    "Props va State": <FaSync className="text-orange-500" />,
    "Hooks Asoslari": <FaWrench className="text-red-500" />,
    "useEffect Hook": <FaClock className="text-indigo-500" />,
    "Custom Hooks": <FaObjectGroup className="text-yellow-500" />,
    "React Events": <FaProjectDiagram className="text-pink-500" />,
    "Forms va Validatsiya": <FaList className="text-teal-500" />,
    "React Router": <FaProjectDiagram className="text-cyan-500" />,
    "Context API": <FaBoxes className="text-emerald-500" />,
    "Redux Asoslari": <FaSync className="text-rose-500" />,
    "Redux Toolkit": <FaWrench className="text-violet-500" />,
    "API Integration": <FaProjectDiagram className="text-amber-500" />,
    "React Testing": <FaCode className="text-lime-500" />,
    "Performance": <FaClock className="text-sky-500" />,
    "Security": <FaWrench className="text-fuchsia-500" />,
    "Best Practices": <FaBook className="text-blue-600" />,
    "Deployment": <FaBoxes className="text-green-600" />,
    "Amaliy Mashqlar": <FaProjectDiagram className="text-purple-600" />
  };

  const menu = [
    "React Kirish",
    "JSX Asoslari",
    "React Componentlar",
    "Props va State",
    "Hooks Asoslari",
    "useEffect Hook",
    "Custom Hooks",
    "React Events",
    "Forms va Validatsiya",
    "React Router",
    "Context API",
    "Redux Asoslari",
    "Redux Toolkit",
    "API Integration",
    "React Testing",
    "Performance",
    "Security",
    "Best Practices",
    "Deployment",
    "Amaliy Mashqlar"
  ];

  const topicContent = {
    "React Kirish": (
      <ReactBoshlagichKirish/>
    ),

    "JSX Asoslari": (
      <JsxAsoslarBoshlangich/>
    ),

    "React Componentlar": (
    <ReactComponentsBosh/>
    ),

    "Props va State": (
      <ReactPropsState/>
    ),

    "Hooks Asoslari": (
    <ReactHooksAsoslar/>
    ),

    "useEffect Hook": (
      <UseEffectHook/>
    ),

    "Custom Hooks": (
      <ReactCustomHooks/>
    ),

    "React Events": (
    <ReactEvents/>
    ),

    "Forms va Validatsiya": (
      <FormsValidatsiya/>
    ),

    "React Router": (
      <ReactRouterBoshlangich/>
    ),

    "Context API": (
      <ReactContextApi/>
    ),

    "Redux Asoslari": (
      <ReduxAsoslariBoshlangich/>
    ),

    "Redux Toolkit": (
      <ReduxToolkitBoshlangich/>
    ),

    "API Integration": (
     <ReactApiIntegration/>
    ),

    "React Testing": (
      <ReactTestingBoshlangich/>
    ),

    "Performance": (
     <ReactPerformanceBosh/>
    ),

    "Security": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Security</h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Security - React ilovalari ichida security uchun ishlatiladigan xususiyat.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm">
              <code>{`// Security misoli
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      {/* Security ishlatish */}
    </div>
  );
}

export default Welcome;`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Security qoidalari:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Security implementation</li>
              <li>Data protection</li>
              <li>Authentication</li>
            </ul>
          </div>
        </section>
      </div>
    ),

    "Best Practices": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Best Practices</h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Best Practices - React ilovalari ichida ishlash uchun eng mashhur qoidalar.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm">
              <code>{`// Best Practices misoli
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      {/* Best Practices ishlatish */}
    </div>
  );
}

export default Welcome;`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Best Practices qoidalari:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Code readability</li>
              <li>Component reusability</li>
              <li>State management</li>
            </ul>
          </div>
        </section>
      </div>
    ),

    "Deployment": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Deployment</h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Deployment - React ilovalari ichida ilova yuborish uchun ishlatiladigan xususiyat.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm">
              <code>{`// Deployment misoli
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      {/* Deployment ishlatish */}
    </div>
  );
}

export default Welcome;`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Deployment qoidalari:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Deployment process</li>
              <li>Server configuration</li>
              <li>Environment variables</li>
            </ul>
          </div>
        </section>
      </div>
    ),

    "Amaliy Mashqlar": (
      <div className="space-y-6 max-h-[calc(100vh-120px)]">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Amaliy Mashqlar</h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Amaliy Mashqlar - React ilovalari ichida amaliy mashqlar yaratish uchun ishlatiladigan xususiyat.
          </p>

          <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm">
              <code>{`// Amaliy Mashq misoli
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      {/* Amaliy Mashq ishlatish */}
    </div>
  );
}

export default Welcome;`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Amaliy Mashq qoidalari:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mashq yaratish</li>
              <li>Mashq ishlatish</li>
              <li>Mashq natijalarini tekshirish</li>
            </ul>
          </div>
        </section>
      </div>
    ),
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
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">React Mavzulari</h2>
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

export default BoshlangichReact;
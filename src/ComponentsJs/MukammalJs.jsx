import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaCode, FaLayerGroup, FaBoxes, FaClock, FaDatabase,
    FaProjectDiagram, FaRocket, FaBug, FaBars, FaTimes, FaShieldAlt
} from 'react-icons/fa';

import {Asinxronlik, DomManipulatsiya, FunksiyalarScope, JavaScriptAsoslarMukammal, MahalliyMalumotBaza} from "../components/index"
import OopJavaScript from './pagesMukammal/OopJavaScript';
// Custom scrollbar styles
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

function MukammalJs() {
    const navigate = useNavigate();
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuIcons = {
        "JavaScript Asoslari": <FaCode />,
        "Funksiyalar va Scope": <FaLayerGroup />,
        "DOM Manipulyatsiyasi": <FaBoxes />,
        "OOP JavaScript": <FaClock />,
        "Asinxronlik": <FaDatabase />,
        "Mahalliy Ma'lumotlar Bazasi": <FaProjectDiagram />,
        "Modullar va Paketlar": <FaRocket />,
        "Testlash": <FaBug />,
        "Framework Asoslari": <FaProjectDiagram />,
        "API Integratsiyasi": <FaProjectDiagram />,
        "Ma'lumotlar Bilan Ishlash": <FaDatabase />,
        "Xavfsizlik va Optimizatsiya": <FaShieldAlt />
    };

    const menu = [
        "JavaScript Asoslari",
        "Funksiyalar va Scope",
        "DOM Manipulyatsiyasi",
        "OOP JavaScript",
        "Asinxronlik",
        "Mahalliy Ma'lumotlar Bazasi",
        "Modullar va Paketlar",
        "Testlash",
        "Framework Asoslari",
        "API Integratsiyasi",
        "Ma'lumotlar Bilan Ishlash",
        "Xavfsizlik va Optimizatsiya"
    ];

    // Temporary content for each topic
    const topicContent = {
        "JavaScript Asoslari": (
           <JavaScriptAsoslarMukammal/>
        ),
        "Funksiyalar va Scope": (
           <FunksiyalarScope/>
        ),
        "DOM Manipulyatsiyasi": (
          <DomManipulatsiya/>
        ),
        "OOP JavaScript": (
            <OopJavaScript/>
        ),
        "Asinxronlik": (
           <Asinxronlik/>
        ),
        "Mahalliy Ma'lumotlar Bazasi": (
           <MahalliyMalumotBaza/>
        ),
        "Modullar va Paketlar": (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modullar va Paketlar</h3>
                <p>JavaScript modullar tizimi va paketlar bilan ishlash.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>ES Modules</li>
                    <li>CommonJS</li>
                    <li>NPM</li>
                    <li>Package.json</li>
                    <li>Bundlers</li>
                </ul>
            </div>
        ),
        "Testlash": (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Testlash</h3>
                <p>JavaScript kodini testlash usullari.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Unit Testing</li>
                    <li>Integration Testing</li>
                    <li>Jest Framework</li>
                    <li>Mocha & Chai</li>
                    <li>Test Driven Development</li>
                </ul>
            </div>
        ),
        "Framework Asoslari": (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Framework Asoslari</h3>
                <p>Zamonaviy JavaScript frameworklari.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>React asoslari</li>
                    <li>Vue asoslari</li>
                    <li>Angular asoslari</li>
                    <li>State management</li>
                    <li>Routing</li>
                </ul>
            </div>
        ),
        "API Integratsiyasi": (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">API Integratsiyasi</h3>
                <p>RESTful API va GraphQL bilan ishlash usullari.</p>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-medium mb-2">REST API</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>HTTP so'rovlar (GET, POST, PUT, DELETE)</li>
                            <li>Fetch API va Axios</li>
                            <li>API autentifikatsiya (JWT, OAuth)</li>
                            <li>Error handling va retry mexanizmlari</li>
                            <li>Rate limiting va caching</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-medium mb-2">GraphQL</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>GraphQL so'rovlar va mutatsiyalar</li>
                            <li>Apollo Client</li>
                            <li>Schema va Type definitions</li>
                            <li>Real-time updates (Subscriptions)</li>
                            <li>Optimistic UI updates</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-2">Amaliy Misollar</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>REST API bilan ma'lumotlarni olish va yuborish</li>
                            <li>GraphQL so'rovlarini yozish</li>
                            <li>WebSocket va Server-Sent Events</li>
                            <li>API dokumentatsiyasi bilan ishlash</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        "Ma'lumotlar Bilan Ishlash": (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Ma'lumotlar Bilan Ishlash</h3>
                <p>Katta hajmdagi ma'lumotlarni samarali boshqarish.</p>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-medium mb-2">Ma'lumotlarni Qayta Ishlash</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Array metodlari (map, filter, reduce)</li>
                            <li>Ma'lumotlarni filtrlash va saralash</li>
                            <li>Ma'lumotlarni agregatsiya qilish</li>
                            <li>JSON bilan ishlash</li>
                            <li>CSV va Excel fayllarni qayta ishlash</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-2">State Management</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Redux va Redux Toolkit</li>
                            <li>Context API</li>
                            <li>Zustand</li>
                            <li>Ma'lumotlar normalizatsiyasi</li>
                            <li>Cache management</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-2">Real-time Ma'lumotlar</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>WebSocket integratsiyasi</li>
                            <li>Server-Sent Events</li>
                            <li>Real-time ma'lumotlarni vizualizatsiya qilish</li>
                            <li>Ma'lumotlar sinxronizatsiyasi</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        "Xavfsizlik va Optimizatsiya": (
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Xavfsizlik va Optimizatsiya</h3>
                <p>Xavfsiz va yuqori unumli JavaScript ilovalarini yaratish.</p>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-medium mb-2">Xavfsizlik</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>XSS (Cross-Site Scripting) himoyasi</li>
                            <li>CSRF (Cross-Site Request Forgery)</li>
                            <li>Content Security Policy (CSP)</li>
                            <li>Secure Headers</li>
                            <li>Input validatsiya va sanitizatsiya</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-2">Performance Optimizatsiya</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Code splitting va lazy loading</li>
                            <li>Bundle size optimizatsiyasi</li>
                            <li>Memory leak oldini olish</li>
                            <li>Virtual DOM optimizatsiyasi</li>
                            <li>Network requests optimizatsiyasi</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-2">Monitoring va Debugging</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Performance monitoring</li>
                            <li>Error tracking va logging</li>
                            <li>Chrome DevTools bilan ishlash</li>
                            <li>Lighthouse va WebPageTest</li>
                            <li>Analytics va user monitoring</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="relative min-h-screen bg-white">
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
                        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">
                            JavaScript Mukammal Daraja
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
                                    Mukammal daraja mavzularini o'rganish uchun chap menuda mavzulardan birini tanlang
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

export default MukammalJs;
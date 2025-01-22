import React, { useState } from 'react';
import storageBrowserData from '../dataOrta/dataStorageBrowserApi';
import { FaDatabase, FaClock, FaCookieBite, FaBox, FaSave } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function StorageBrowserApi() {
  const [activeExample, setActiveExample] = useState(null);

  const getIcon = (id) => {
    switch (id) {
      case 1: return <FaDatabase className="w-8 h-8" />;
      case 2: return <FaClock className="w-8 h-8" />;
      case 3: return <FaCookieBite className="w-8 h-8" />;
      case 4: return <FaBox className="w-8 h-8" />;
      case 5: return <FaSave className="w-8 h-8" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 border-b pb-4">
          Storage va Browser API
        </h1>

        <div className="space-y-12">
          {storageBrowserData.map((item) => (
            <div key={item.id} 
                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Section sarlavha qismi */}
              <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    {getIcon(item.id)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-white/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Misollar */}
              <div className="p-6 space-y-8">
                {item.examples.map((example, index) => (
                  <div key={index}
                       className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                    
                    {/* Misol nomi */}
                    <h3 className="text-xl font-medium text-gray-800 mb-4 cursor-pointer"
                        onClick={() => setActiveExample(activeExample === `${item.id}-${index}` ? null : `${item.id}-${index}`)}>
                      {example.name}
                    </h3>

                    {activeExample === `${item.id}-${index}` && (
                      <>
                        {/* Kod bloki */}
                        <div className="relative">
                          <div className="absolute top-2 right-2 bg-gray-800 text-xs text-white px-2 py-1 rounded">
                            Code
                          </div>
                          <SyntaxHighlighter 
                            language="javascript" 
                            style={tomorrow}
                            className="rounded-lg text-sm"
                            showLineNumbers={true}
                            customStyle={{
                              padding: '1.5rem',
                              margin: '0',
                              backgroundColor: '#1a1a1a'
                            }}
                          >
                            {example.code}
                          </SyntaxHighlighter>
                        </div>

                        {/* Tushuntirish */}
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                          <p className="text-blue-800">
                            {example.explanation}
                          </p>
                        </div>

                        {/* Natija namoyishi */}
                        <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                          <h4 className="text-sm font-semibold text-gray-500 mb-3">
                            Natija namoyishi:
                          </h4>
                          <div className="bg-white p-4 rounded-lg shadow-inner">
                            {item.id === 1 && (
                              <button 
                                onClick={() => {
                                  localStorage.setItem('test', 'Ma\'lumot saqlandi');
                                  alert('LocalStorage ga ma\'lumot saqlandi!');
                                }}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                              >
                                LocalStorage Test
                              </button>
                            )}
                            {item.id === 2 && (
                              <button 
                                onClick={() => {
                                  sessionStorage.setItem('test', 'Sessiya ma\'lumoti');
                                  alert('SessionStorage ga ma\'lumot saqlandi!');
                                }}
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                              >
                                SessionStorage Test
                              </button>
                            )}
                            {item.id === 3 && (
                              <button 
                                onClick={() => {
                                  document.cookie = "test=Cookie ma'lumoti; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
                                  alert('Cookie yaratildi!');
                                }}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                              >
                                Cookie Test
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer qismi */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Storage va Browser API bo'yicha to'liq ma'lumotlar to'plami
          </p>
        </div>
      </div>
    </div>
  );
}

export default StorageBrowserApi;
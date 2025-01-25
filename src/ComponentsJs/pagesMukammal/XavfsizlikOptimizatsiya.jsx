import React from 'react';
import dataModullar from '../dataMukammal/dataXavfsizlikOptimizatsiya';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function XavfsizlikOptimizatsiya() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Asosiy sarlavha */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 border-b pb-4">
          JavaScript Modullar
        </h1>

        {/* Asosiy kontent */}
        <div className="space-y-12">
          {dataModullar.map((section) => (
            <div 
              key={section.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Section sarlavha qismi */}
              <div className="p-6 bg-gradient-to-r from-green-500 to-teal-600">
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-2 text-white/90">
                  {section.description}
                </p>
              </div>

              {/* Misollar */}
              <div className="p-6 space-y-8">
                {section.examples.map((example, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {/* Misol nomi */}
                    <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                      <span className="mr-2">📦</span> {/* Modul ikonkasi */}
                      {example.name}
                    </h3>

                    {/* Kod bloki */}
                    <div className="relative">
                      <div className="absolute top-2 right-2 bg-gray-800 text-xs text-white px-2 py-1 rounded">
                        JavaScript
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

                    {/* Natija qismi */}
                    {example.result && (
                      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm font-medium">Natija:</span>
                          <span className="text-gray-400 text-xs">Output</span>
                        </div>
                        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                          {example.result}
                        </pre>
                      </div>
                    )}

                    {/* Tushuntirish */}
                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-100">
                      <p className="text-green-800 flex items-center">
                        <span className="mr-2">💡</span> {/* Tushuntirish ikonkasi */}
                        {example.explanation}
                      </p>
                    </div>

                    {/* Interaktiv element */}
                    <div className="mt-6">
                      <button 
                        className="px-4 py-2 bg-green-500 text-white rounded-lg 
                          hover:bg-green-600 hover:scale-105 transform transition-all duration-300
                          flex items-center"
                        onClick={() => {
                          // Kod nusxalash yoki boshqa interaktiv funksiyalar
                          console.log(`${example.name} - kod nusxalandi`);
                        }}
                      >
                        <span className="mr-2">📋</span>
                        Kodni nusxalash
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer qismi */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            JavaScript modullar bo'yicha to'liq ma'lumotlar to'plami
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              📚 MDN Docs
            </a>
            <a 
              href="https://javascript.info/async" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              🔍 JavaScript.info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XavfsizlikOptimizatsiya;
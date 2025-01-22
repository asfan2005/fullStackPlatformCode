import React from 'react';
import animationData from '../dataOrta/dataAnimatsiyalar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Animatsiyalar() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Asosiy sarlavha */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 border-b pb-4">
          Animatsiyalar
        </h1>

        {/* Asosiy kontent */}
        <div className="space-y-12">
          {animationData.map((section) => (
            <div 
              key={section.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Section sarlavha qismi */}
              <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
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
                    <h3 className="text-xl font-medium text-gray-800 mb-4">
                      {example.name}
                    </h3>

                    {/* Kod bloki */}
                    <div className="relative">
                      <div className="absolute top-2 right-2 bg-gray-800 text-xs text-white px-2 py-1 rounded">
                        Code
                      </div>
                      <SyntaxHighlighter 
                        language="css" 
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

                    {/* Jonli namoyish */}
                    <div className="mt-6">
                      {example.name === "Oddiy animatsiya" && (
                        <div className="w-16 h-16 bg-blue-500 rounded-lg animate-bounce"></div>
                      )}
                      
                      {example.name === "Transition effekti" && (
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg 
                          hover:bg-blue-600 hover:scale-105 transform transition-all duration-300">
                          Hover qiling
                        </button>
                      )}
                      
                      {example.name === "Transform turlari" && (
                        <div className="w-16 h-16 bg-purple-500 rounded-lg 
                          hover:rotate-45 hover:scale-110 transform transition-all duration-300">
                        </div>
                      )}
                      
                      {example.name === "3D transformlar" && (
                        <div className="w-16 h-16 bg-green-500 rounded-lg 
                          hover:rotate-[360deg] transform transition-all duration-700 
                          hover:shadow-xl perspective-1000">
                        </div>
                      )}
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
            Animatsiyalar bo'yicha to'liq ma'lumotlar to'plami
          </p>
        </div>
      </div>
    </div>
  );
}

export default Animatsiyalar;
import React, { useState } from 'react'
import dataTailwandCssAsoslar from '../dataOrta/dataTailwandCssAsoslar'

function TailwandCssAsoslar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      {/* Sarlavha */}
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-tight">
        Tailwind CSS Asoslari
      </h1>

      {/* Asosiy kontent */}
      <div className="max-w-7xl mx-auto space-y-8">
        {dataTailwandCssAsoslar.map((section) => (
          <div 
            key={section.id} 
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {section.desc}
            </p>

            <div className="space-y-12">
              {section.items.map((item, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                      {index + 1}
                    </span>
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-lg pl-10">
                    {item.description}
                  </p>

                  {/* Misollar */}
                  {item.examples && (
                    <div className="bg-gray-50 rounded-xl p-6 ml-10">
                      <h4 className="font-medium text-gray-700 mb-4">Misollar:</h4>
                      <div className="flex flex-wrap gap-3">
                        {item.examples.map((example, i) => (
                          <code 
                            key={i} 
                            className="bg-white px-4 py-2 rounded-lg text-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            {example}
                          </code>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Kod misoli */}
                  {item.codeExample && (
                    <div className="mt-6 ml-10">
                      <h4 className="font-medium text-gray-700 mb-3">Kod misoli:</h4>
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto shadow-lg">
                        <code className="text-sm font-mono">{item.codeExample}</code>
                      </pre>
                    </div>
                  )}

                  {/* Qo'shimcha ma'lumotlar */}
                  {item.tips && (
                    <div className="bg-blue-50 p-6 rounded-xl ml-10 border border-blue-100">
                      <h4 className="font-medium text-blue-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Maslahatlar:
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="text-blue-700 hover:text-blue-800">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TailwandCssAsoslar

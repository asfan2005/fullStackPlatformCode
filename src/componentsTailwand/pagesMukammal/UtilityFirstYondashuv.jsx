import React from 'react'
import dataUtilityFirstYondashuv from '../dataMukammal/dataUtilityFirstYondashuv'

function UtilityFirstYondashuv() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 hover:text-blue-600 transition-colors duration-300">
          Utility-First Yondashuv
        </h1>
        
        <div className="space-y-8">
          {dataUtilityFirstYondashuv.map((item) => (
            <div 
              key={item.id}
              className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-t-2xl">
                <h2 className="text-3xl font-bold text-white">
                  {item.title}
                </h2>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Examples Section */}
                <div className="mb-8 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">📌</span>
                    Misollar:
                  </h3>
                  <ul className="space-y-3">
                    {item.examples.map((example, index) => (
                      <li 
                        key={index} 
                        className="flex items-start text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Example */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">💻</span>
                    Kod Misoli:
                  </h3>
                  <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono">
                      {item.codeExample}
                    </code>
                  </pre>
                </div>

                {/* Tips Section */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">💡</span>
                    Maslahatlar:
                  </h3>
                  <ul className="space-y-3">
                    {item.tips.map((tip, index) => (
                      <li 
                        key={index} 
                        className="flex items-start text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UtilityFirstYondashuv

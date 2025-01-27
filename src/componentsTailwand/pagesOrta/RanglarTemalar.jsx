import React from 'react'
import dataRanglarTemalar from '../dataOrta/dataRanglarTemalar'

function RanglarTemalar() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Ranglar va Temalar
        </h1>

        {/* Asosiy bo'limlar */}
        <div className="space-y-16">
          {dataRanglarTemalar.map((section) => (
            <div 
              key={section.id} 
              className="w-full bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {section.desc}
              </p>

              {/* Items */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {section.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="w-full bg-gray-50 rounded-lg p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {item.description}
                    </p>

                    {/* Misollar */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4">Misollar:</h4>
                      <div className="flex flex-wrap gap-3">
                        {item.examples.map((example, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-200 transition-colors duration-200"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Kod misoli */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4">Kod Misoli:</h4>
                      <div className="relative">
                        <pre className="w-full bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
                          <code className="block whitespace-pre-wrap font-mono">
                            {item.codeExample}
                          </code>
                        </pre>
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Maslahatlar */}
                    {item.tips && (
                      <div className="w-full">
                        <h4 className="text-xl font-semibold mb-4">Maslahatlar:</h4>
                        <ul className="space-y-3">
                          {item.tips.map((tip, i) => (
                            <li 
                              key={i} 
                              className="flex items-start space-x-3 text-gray-700"
                            >
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                              <span className="text-lg">{tip}</span>
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
    </div>
  )
}

export default RanglarTemalar
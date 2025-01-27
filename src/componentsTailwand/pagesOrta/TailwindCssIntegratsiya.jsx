import React from 'react'
import dataInteraktivlikAnimatsiya from '../dataOrta/dataTailwandCssIntegrat';

function InteraktivlikAnimatsiyalar() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 hover:text-indigo-600 transition-colors duration-300">
        Interaktivlik va Animatsiyalar
      </h1>

      <div className="space-y-12">
        {dataInteraktivlikAnimatsiya.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600">{section.title}</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{section.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-all duration-300 bg-white hover:bg-indigo-50"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg text-indigo-600">Misollar:</h4>
                    <div className="flex flex-wrap gap-3">
                      {item.examples.map((example, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full hover:bg-indigo-200 transition-colors duration-300"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg text-indigo-600">Kod Misoli:</h4>
                    <pre className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                      <code className="text-sm text-gray-100">{item.codeExample}</code>
                    </pre>
                  </div>

                  {item.tips && (
                    <div>
                      <h4 className="font-semibold mb-3 text-lg text-indigo-600">Maslahatlar:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="hover:text-indigo-600 transition-colors duration-300">
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

export default InteraktivlikAnimatsiyalar
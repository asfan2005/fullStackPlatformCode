import React from 'react'
import dataResponsiveDizayn from '../dataBoshlangich/dataResponsiveDizayn'

function ResponsiveDizayn() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
          Responsive Dizayn
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataResponsiveDizayn.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600">
                {section.title}
              </h2>
              <p className="text-gray-600 mb-6">{section.desc}</p>

              {section.items.map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>

                  {/* Examples */}
                  {item.examples && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Misollar:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((example, i) => (
                          <span key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Code Example */}
                  {item.codeExample && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Kod misoli:</h4>
                      <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <code>{item.codeExample}</code>
                      </pre>
                    </div>
                  )}

                  {/* Values if exists */}
                  {item.values && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">O'lchamlar:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {Object.entries(item.values).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <span className="font-medium text-indigo-600">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tips if exists */}
                  {item.tips && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Maslahatlar:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="text-gray-600">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResponsiveDizayn

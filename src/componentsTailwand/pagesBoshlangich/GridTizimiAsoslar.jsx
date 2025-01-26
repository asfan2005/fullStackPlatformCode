import React from 'react'
import dataGridTizimi from '../dataBoshlangich/dataGridTizimi'

function GridTizimiAsoslar() {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Grid Tizimi Asoslar</h1>
      
      <div className="space-y-12">
        {dataGridTizimi.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-md p-6">
            {/* Section header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              <p className="text-gray-600 mt-2">{section.desc}</p>
            </div>

            {/* Items */}
            <div className="space-y-8">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border-t pt-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  {/* Examples */}
                  {item.examples && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Misollar:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((example, exIndex) => (
                          <code key={exIndex} className="bg-gray-100 px-2 py-1 rounded text-sm">
                            {example}
                          </code>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Values */}
                  {item.values && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Qiymatlar:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {Object.entries(item.values).map(([key, value], valIndex) => (
                          <div key={valIndex} className="bg-gray-100 p-2 rounded">
                            <code className="text-sm">
                              <span className="text-purple-600">{key}</span>: 
                              <span className="text-gray-700"> {value}</span>
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Code Example */}
                  {item.codeExample && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Kod misoli:</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{item.codeExample}</code>
                      </pre>
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

export default GridTizimiAsoslar

import React from 'react'
import dataFlexboxAsoslar from '../dataBoshlangich/dataFlexboxAsoslar'

function FlexboxAsoslar() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Flexbox Asoslar</h1>
      
      <div className="grid gap-8">
        {dataFlexboxAsoslar.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.desc}</p>

            <div className="space-y-6">
              {section.items.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>

                  {/* Kod va Misollar */}
                  <div className="bg-gray-100 rounded p-4 mb-4">
                    <p className="font-mono text-sm mb-2">Kod: {item.code}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Qiymatlar (agar mavjud bo'lsa) */}
                  {item.values && (
                    <div className="grid gap-2">
                      {Object.entries(item.values).map(([key, value], i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-2 rounded">
                          <span className="font-mono text-sm">{key}</span>
                          <span className="text-gray-600 text-sm">{value}</span>
                        </div>
                      ))}
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

export default FlexboxAsoslar

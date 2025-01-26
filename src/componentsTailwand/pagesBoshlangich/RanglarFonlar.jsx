import React from 'react'
import dataRanglarFonlar from '../dataBoshlangich/dataRanglarFonlar'
import { CodeBlock } from 'react-code-blocks' // Kod namunalari uchun

function RanglarFonlar() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ranglar va Fonlar</h1>
      
      <div className="grid gap-8">
        {dataRanglarFonlar.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.desc}</p>

            {/* Asosiy ranglar bo'limi */}
            {section.id === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className={`h-20 rounded-lg mb-3 bg-${item.code}`}></div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.value}</p>
                    <div className="mt-2 space-y-1">
                      {item.examples.map((example, i) => (
                        <code key={i} className="block text-sm bg-gray-100 px-2 py-1 rounded">
                          {example}
                        </code>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Fon ranglar bo'limi */}
            {section.id === 2 && (
              <div className="grid gap-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className={`h-24 rounded-lg mb-3 ${item.code}`}></div>
                    <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <code className="text-sm">{item.example}</code>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Rang intensivligi bo'limi */}
            {section.id === 3 && (
              <div className="grid gap-8">
                {section.items.map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {item.examples.map((example, i) => (
                        <div key={i} className="space-y-2">
                          <div className={`h-16 rounded-lg ${example}`}></div>
                          <code className="text-xs block text-center bg-gray-100 px-2 py-1 rounded">
                            {example}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Maxsus effektlar bo'limi */}
            {section.id === 4 && (
              <div className="grid gap-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: item.example }} />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <code className="text-sm">{item.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Rang kombinatsiyalari bo'limi */}
            {section.id === 5 && (
              <div className="grid gap-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="mb-4" dangerouslySetInnerHTML={{ __html: item.example }} />
                    <div className="bg-gray-100 rounded-lg p-4">
                      <code className="text-sm">{item.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RanglarFonlar
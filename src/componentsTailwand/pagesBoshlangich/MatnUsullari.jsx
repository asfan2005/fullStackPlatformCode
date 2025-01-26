import React from 'react'
import dataMatnUsullari from '../dataBoshlangich/dataMatnUsullari'

function MatnUsullari() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Matn usullari</h1>
      
      {dataMatnUsullari.map((section) => (
        <div key={section.id} className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">{section.title}</h2>
          <p className="text-gray-600 mb-6">{section.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-2 text-gray-700">{item.name}</h3>
                <div className="bg-gray-100 rounded p-2 mb-3">
                  <code className="text-sm text-purple-600">{item.code}</code>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>

                {/* Misollar ko'rsatish */}
                {item.examples && (
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700">Misollar:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, i) => (
                        <span
                          key={i}
                          className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Qiymatlar mavjud bo'lsa ko'rsatish */}
                {item.values && (
                  <div className="mt-3">
                    <p className="font-medium text-gray-700">Qiymatlar:</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {Object.entries(item.values).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <span className="text-gray-600">{key}:</span>{' '}
                          <span className="text-gray-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Example kodi mavjud bo'lsa ko'rsatish */}
                {item.example && (
                  <div className="mt-3">
                    <p className="font-medium text-gray-700">Namuna:</p>
                    <div className="bg-gray-100 rounded p-2 mt-2">
                      <code className="text-sm text-purple-600 break-all">
                        {item.example}
                      </code>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MatnUsullari
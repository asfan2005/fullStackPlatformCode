import React from 'react'
import dataChegaralarBurchaklar from '../dataBoshlangich/dataChegaralarBurchaklar'

function ChegaralarBurchaklar() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Chegaralar va Burchaklar</h1>
      
      {dataChegaralarBurchaklar.map((section) => (
        <div key={section.id} className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-gray-600 mb-6">{section.desc}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {section.items.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-xl font-medium mb-3">{item.name}</h3>
                <p className="text-gray-500 mb-2">{item.description}</p>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">{item.code}</code>

                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {item.examples.map((example, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className={`
                          w-24 h-24 
                          bg-white 
                          ${example}
                          border-blue-500
                          ${example.includes('rounded') ? '' : 'rounded'}
                          flex items-center justify-center
                          transition-all duration-300
                          hover:shadow-lg
                        `}>
                          <span className="text-xs text-gray-600">{example}</span>
                        </div>
                        <code className="mt-2 text-sm text-gray-600">{example}</code>
                        {item.values && item.values[example] && (
                          <span className="text-xs text-gray-500">({item.values[example]})</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChegaralarBurchaklar

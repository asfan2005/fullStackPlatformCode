import React from 'react'
import dataBoshliqniTashkil from '../dataBoshlangich/dataBoshliqniTashkil'

function BoshliqniTashkil() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Boshliqni Tashkil Qilish</h1>
      
      <div className="space-y-8">
        {dataBoshliqniTashkil.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.desc}</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  
                  <div className="bg-gray-50 p-3 rounded-md">
                    <code className="text-sm font-mono text-purple-600">{item.code}</code>
                  </div>

                  {item.examples && (
                    <div className="mt-3">
                      <p className="font-medium text-gray-700 mb-2">Misollar:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((example, i) => (
                          <span key={i} className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.values && (
                    <div className="mt-3">
                      <p className="font-medium text-gray-700 mb-2">Qiymatlar:</p>
                      <div className="grid gap-2">
                        {Object.entries(item.values).map(([key, value], i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <code className="text-purple-600">{key}</code>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
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

export default BoshliqniTashkil

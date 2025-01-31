import React from 'react'
import dataTailwandAsoslar from '../dataMukammal/dataTailwandAsoslar'

function TailwindAsoslar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-800 animate-fade-in">
          Tailwind Asoslari
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataTailwandAsoslar.map((item) => (
            <div 
              key={item.id} 
              className="w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 backdrop-blur-sm backdrop-filter"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-700 hover:text-blue-800 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">📝</span> Misollar
                  </h3>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    {item.examples.map((example, index) => (
                      <li 
                        key={index} 
                        className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">💻</span> Kod Misoli
                  </h3>
                  <pre className="bg-gray-50 p-6 rounded-xl overflow-x-auto border border-gray-200 hover:border-blue-300 transition-colors">
                    <code className="text-sm font-mono text-gray-800">
                      {item.codeExample}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">💡</span> Maslahatlar
                  </h3>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    {item.tips.map((tip, index) => (
                      <li 
                        key={index} 
                        className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                      >
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

export default TailwindAsoslar
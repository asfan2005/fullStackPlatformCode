import React from 'react'
import dataAmaliy from '../dataOrta/dataAmaliy'

function AmaliyTailwandOrta() {
  // Data mavjudligini tekshirish
  if (!dataAmaliy || !Array.isArray(dataAmaliy)) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Ma'lumotlar yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Asosiy proyektlar ro'yxati */}
        <div className="grid gap-8 w-full">
          {dataAmaliy.map((project) => (
            <div key={project.id} className="w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Sarlavha */}
              <h2 className="w-full text-3xl font-bold text-gray-800 mb-4">
                {project.title}
              </h2>
              
              {/* Tavsif */}
              <p className="w-full text-gray-600 text-lg mb-6">
                {project.description}
              </p>
              
              {/* Misollar */}
              {project.examples && (
                <div className="w-full mb-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Misollar:
                  </h3>
                  <ul className="w-full space-y-3">
                    {project.examples.map((example, index) => (
                      <li 
                        key={index} 
                        className="w-full flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <span className="mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Kod misoli */}
              {project.codeExample && (
                <div className="w-full mb-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Kod Misoli:
                  </h3>
                  <div className="w-full bg-gray-900 rounded-xl p-4">
                    <pre className="w-full overflow-x-auto text-gray-100">
                      <code className="text-sm font-mono whitespace-pre-wrap">
                        {project.codeExample}
                      </code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Maslahatlar */}
              {project.tips && (
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Maslahatlar:
                  </h3>
                  <ul className="w-full space-y-3">
                    {project.tips.map((tip, index) => (
                      <li 
                        key={index} 
                        className="w-full flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <span className="mr-2">•</span>
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
    </div>
  )
}

export default AmaliyTailwandOrta
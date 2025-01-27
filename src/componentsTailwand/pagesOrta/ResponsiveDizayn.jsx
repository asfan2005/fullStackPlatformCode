import React from 'react'
import dataInteraktivlikAnimatsiya from '../dataOrta/dataResponsiveDizayn';

function InteraktivlikAnimatsiyalar() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy sarlavha */}
      <h1 className="text-3xl font-bold text-center mb-8">Interaktivlik va Animatsiyalar</h1>

      {/* Data mapping */}
      <div className="space-y-12">
        {dataInteraktivlikAnimatsiya.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
            {/* Section sarlavha */}
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.desc}</p>

            {/* Items mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  {/* Item sarlavha */}
                  <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  {/* Examples */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Misollar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Kod Misoli:</h4>
                    <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm">{item.codeExample}</code>
                    </pre>
                  </div>

                  {/* Tips */}
                  {item.tips && (
                    <div>
                      <h4 className="font-medium mb-2">Maslahatlar:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {item.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
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
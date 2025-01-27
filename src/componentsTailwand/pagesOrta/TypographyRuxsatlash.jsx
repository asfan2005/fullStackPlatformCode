import React from 'react'
import dataTypographyRuxsatlash from '../dataOrta/dataTypographyRuxsatlash'

function TypographyRuxsatlash() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Typography va Ruxsatlashtirish</h1>

      {dataTypographyRuxsatlash.map((section) => (
        <div key={section.id} className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{section.desc}</p>

            {section.items.map((item, index) => (
              <div key={index} className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>

                {/* Examples bo'limi */}
                {item.examples && (
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-3">Misollar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tips bo'limi */}
                {item.tips && (
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-3">Maslahatlar:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="text-gray-700">{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Roles bo'limi */}
                {item.roles && (
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-3">Rollar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.roles.map((role, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Permissions bo'limi */}
                {item.permissions && (
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-3">Ruxsatlar:</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {item.permissions.map((perm, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow">
                          <h5 className="font-semibold text-lg mb-2 capitalize">{perm.role}</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {perm.capabilities.map((cap, j) => (
                              <li key={j} className="text-sm text-gray-600">{cap}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code Example bo'limi */}
                {item.codeExample && (
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-3">Kod Misoli:</h4>
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
  )
}

export default TypographyRuxsatlash
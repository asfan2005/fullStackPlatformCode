import React from 'react'
import tailwindOrnatishMalumotlar from '../dataBoshlangich/dataLoyihagaOrnatish'

function LoyihagaOrnatish() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Loyihaga Tailwind CSS O'rnatish Bo'yicha Qo'llanma
        </h1>

        <div className="space-y-8">
          {tailwindOrnatishMalumotlar.map((item) => (
            item.id !== 7 ? (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-gray-100 overflow-x-auto">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.id} className="bg-blue-50 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  {item.title}
                </h2>
                <ul className="space-y-3">
                  {item.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm mr-3">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoyihagaOrnatish
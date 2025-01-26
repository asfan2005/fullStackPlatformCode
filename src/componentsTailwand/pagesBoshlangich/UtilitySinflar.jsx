import React, { useState } from 'react';
import { tailwindUtilityData } from '../dataBoshlangich/dataUtilitySinflar';

function UtilitySinflar() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Tailwind CSS Utility Sinflari
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Eng ko'p ishlatiladigan utility klasslar va ularning namunalari
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(tailwindUtilityData).map(([key, section]) => (
            <div 
              key={key}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-4 px-6">
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  {section.description}
                </p>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Utility Klasslar:
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {section.examples.map((example, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-2 bg-gray-50 rounded-md px-3 py-2 hover:bg-gray-100 transition"
                      >
                        <code className="text-sm text-blue-600 font-mono">
                          {example}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Example Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Namuna Kod:
                  </h3>
                  <div className="relative">
                    <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-gray-100 font-mono whitespace-pre-wrap">
                        {section.codeExample}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Natija:
                  </h3>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div dangerouslySetInnerHTML={{ __html: section.codeExample }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UtilitySinflar;
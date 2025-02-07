import React from 'react';
import dataReactKirish from '../dataBoshlangichReact/dataReactKirish';

function ReactBoshlagichKirish() {
  // Ma'lumotlar mavjudligini tekshirish
  if (!dataReactKirish || !Array.isArray(dataReactKirish) || dataReactKirish.length === 0) {
    return <div>Ma'lumotlar yuklanmoqda...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">React Kurslari</h1>
      
      {dataReactKirish.map((kurs) => (
        <div key={kurs.id} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Asosiy Ma'lumot */}
          {kurs.image && (
            <div className="relative">
              <img 
                src={kurs.image} 
                alt={kurs.title || 'React kurs'} 
                className="w-full h-64 object-cover"
              />
              {kurs.level && (
                <span className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full">
                  {kurs.level}
                </span>
              )}
            </div>
          )}

          <div className="p-8">
            {/* Sarlavha va Tavsif */}
            {kurs.title && <h2 className="text-3xl font-bold text-gray-800 mb-4">{kurs.title}</h2>}
            {kurs.description && <p className="text-xl text-gray-600 mb-8">{kurs.description}</p>}

            {/* Kirish */}
            {kurs.mainTopics?.introduction && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {kurs.mainTopics.introduction.title}
                </h3>
                {kurs.mainTopics.introduction.points && (
                  <ul className="space-y-3">
                    {kurs.mainTopics.introduction.points.map((point, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Kutubxonalar */}
            {kurs.mainTopics?.libraries && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{kurs.mainTopics.libraries.title}</h3>
                {kurs.mainTopics.libraries.categories?.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-8 bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">{category.name}</h4>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {category.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white p-6 rounded-lg shadow-sm">
                          <h5 className="text-lg font-bold text-blue-600 mb-2">{item.name}</h5>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          
                          <div className="bg-gray-800 text-white p-3 rounded-lg mb-3">
                            <code className="text-sm">{item.command}</code>
                          </div>
                          
                          {item.usage && (
                            <div className="bg-gray-100 p-3 rounded-lg mb-3">
                              <pre className="text-sm overflow-x-auto">
                                <code>{item.usage}</code>
                              </pre>
                            </div>
                          )}
                          
                          {item.features && (
                            <ul className="space-y-2">
                              {item.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-700">
                                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* O'rnatish Bosqichlari */}
            {kurs.mainTopics?.setup && (
              <div className="mb-8 bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {kurs.mainTopics.setup.title}
                </h3>
                <div className="space-y-4">
                  {kurs.mainTopics.setup.steps?.map((step, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">{step.name}</h4>
                      <code className="block bg-gray-800 text-white p-3 rounded-lg text-sm mb-2">
                        {step.command}
                      </code>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kod Namunalari */}
            {kurs.codeExamples && (
              <div className="mb-8 bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Kod Namunalari</h3>
                <div className="space-y-6">
                  {Object.entries(kurs.codeExamples).map(([key, code], index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">{key}</h4>
                      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReactBoshlagichKirish;
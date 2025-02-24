import React from 'react'
import { internetData } from './dataInternetSavod'
import { useNavigate } from 'react-router-dom'

function ReactInternetSavod() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Orqaga
      </button>

      {internetData.map((section) => (
        <div 
          key={section.id} 
          className="mb-8 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">{section.section}</h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">{section.title}</h3>

          {/* Umumiy ma'lumot uchun */}
          {section.description && (
            <p className="mb-4 text-gray-600 leading-relaxed">{section.description}</p>
          )}

          {/* Timeline uchun */}
          {section.timeline && (
            <div className="space-y-3 ml-4">
              {section.timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded">
                  <span className="font-bold text-blue-500 min-w-[60px]">{item.year}:</span>
                  <span className="text-gray-700">{item.event}</span>
                </div>
              ))}
            </div>
          )}

          {/* Komponentlar uchun */}
          {section.components && (
            <ul className="list-disc ml-6 space-y-2">
              {section.components.map((item, index) => (
                <li key={index} className="mb-2 text-gray-700">
                  <span className="font-semibold text-blue-600">{item.component}: </span>
                  <span>{item.details}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Features uchun */}
          {section.features && (
            <ul className="list-disc ml-6 space-y-2">
              {section.features.map((feature, index) => (
                <li key={index} className="mb-2 text-gray-700 hover:text-gray-900">{feature}</li>
              ))}
            </ul>
          )}

          {/* Usage uchun */}
          {section.usage && (
            <div className="space-y-4 ml-4">
              {section.usage.map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">{item.area}</h4>
                  <p className="text-gray-700">{item.examples}</p>
                </div>
              ))}
            </div>
          )}

          {/* Steps uchun */}
          {section.steps && (
            <div className="space-y-4 ml-4">
              {section.steps.map((step) => (
                <div key={step.step} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-blue-600">
                    Qadam {step.step}: {step.action}
                  </h4>
                  <p className="mt-2 text-gray-700">{step.details}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technologies uchun */}
          {section.technologies && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
              {section.technologies.map((tech, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-blue-600">{tech.tech}: </span>
                  <span className="text-gray-700">{tech.description}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tips uchun */}
          {section.tips && (
            <ul className="list-disc ml-6 space-y-2">
              {section.tips.map((tip, index) => (
                <li key={index} className="mb-2 text-gray-700 hover:text-gray-900">{tip}</li>
              ))}
            </ul>
          )}

          {/* Facts uchun */}
          {section.facts && (
            <ul className="list-disc ml-6 space-y-2">
              {section.facts.map((fact, index) => (
                <li key={index} className="mb-2 text-gray-700 hover:text-gray-900">{fact}</li>
              ))}
            </ul>
          )}

          {/* Speeds uchun */}
          {section.speeds && (
            <div className="space-y-4">
              {section.speeds.map((speed, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{speed.type}</h4>
                  <p className="text-lg text-blue-500 mb-2">Tezlik: {speed.speed}</p>
                  <p className="text-gray-700 mb-2">{speed.description}</p>
                  
                  <div className="mt-3">
                    <p className="font-semibold text-gray-700">Afzalliklari:</p>
                    <ul className="list-disc ml-5">
                      {speed.advantages.map((adv, i) => (
                        <li key={i} className="text-gray-600">{adv}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <p className="font-semibold text-gray-700">Kamchiliklari:</p>
                    <ul className="list-disc ml-5">
                      {speed.disadvantages.map((dis, i) => (
                        <li key={i} className="text-gray-600">{dis}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MeasurementUnits uchun */}
          {section.measurementUnits && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">O'lchov birliklari</h4>
              {Object.entries(section.measurementUnits).map(([key, value]) => (
                <div key={key} className="mb-2">
                  <span className="font-semibold text-blue-500">{key}</span>: {value}
                </div>
              ))}
            </div>
          )}

          {/* Details uchun */}
          {section.details && (
            <div className="space-y-4">
              <p className="text-gray-700">{section.details.description}</p>
              
              {section.details.history && (
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Tarix</h4>
                  <p>Ixtiro qilingan: {section.details.history.invented}</p>
                  <p>Ixtirochi: {section.details.history.inventor}</p>
                  <div className="mt-2">
                    <p className="font-semibold">Rivojlanish:</p>
                    <ul className="list-disc ml-5">
                      {section.details.history.evolution.map((ev, i) => (
                        <li key={i}>{ev}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.details.categories && (
                <div className="grid gap-4 mt-4">
                  {section.details.categories.map((cat, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-blue-600">{cat.name}</h5>
                      <p>Tezlik: {cat.speed}</p>
                      <p>Kabel: {cat.cable}</p>
                      <p>Maksimal uzunlik: {cat.maxLength}</p>
                      <p>Ishlatilishi: {cat.usage}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Security uchun */}
          {section.security && (
            <div className="space-y-4">
              {section.security.threats && (
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">Xavflar</h4>
                  {section.security.threats.map((threat, index) => (
                    <div key={index} className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-blue-500">{threat.name}</h5>
                      <p className="text-gray-700">{threat.description}</p>
                      {threat.prevention && (
                        <div className="mt-2">
                          <p className="font-semibold">Oldini olish:</p>
                          <ul className="list-disc ml-5">
                            {threat.prevention.map((prev, i) => (
                              <li key={i} className="text-gray-600">{prev}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Protocols uchun yangi section */}
          {section.protocols && (
            <div className="space-y-4">
              {section.protocols.map((protocol, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-blue-600">{protocol.name}</h4>
                  <p className="text-gray-700 mb-3">{protocol.description}</p>
                  
                  {protocol.details && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-blue-500 mb-2">Tafsilotlar:</h5>
                      {typeof protocol.details.fullName === 'string' ? (
                        <p className="text-gray-600">{protocol.details.fullName}</p>
                      ) : (
                        <div>
                          {protocol.details.fullName?.http && (
                            <p className="text-gray-600">HTTP: {protocol.details.fullName.http}</p>
                          )}
                          {protocol.details.fullName?.https && (
                            <p className="text-gray-600">HTTPS: {protocol.details.fullName.https}</p>
                          )}
                        </div>
                      )}
                      
                      {protocol.details.purpose && (
                        <div className="mt-2">
                          <p className="font-semibold">Maqsadi:</p>
                          <ul className="list-disc ml-5">
                            {protocol.details.purpose.map((item, i) => (
                              <li key={i} className="text-gray-600">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {protocol.details.components && (
                        <div className="mt-3">
                          <p className="font-semibold">Komponentlar:</p>
                          {protocol.details.components.map((comp, i) => (
                            <div key={i} className="ml-4 mt-2">
                              <p className="font-semibold text-blue-500">{comp.name}</p>
                              <p className="text-gray-600">{comp.role}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {protocol.recordTypes && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-blue-500 mb-2">Yozuv turlari:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {protocol.recordTypes.map((record, i) => (
                          <div key={i} className="p-2 bg-white rounded">
                            <p className="font-semibold">{record.type}</p>
                            <p className="text-gray-600">{record.description}</p>
                            <p className="text-gray-500 text-sm">Misol: {record.example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Methods uchun yangi qism */}
                  {protocol.methods && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-blue-500 mb-2">Metodlar:</h5>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {protocol.methods.map((method, i) => (
                          <div key={i} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                              <h6 className="text-lg font-bold text-blue-600">{method.name}</h6>
                              <span className="text-sm text-gray-500">{method.purpose}</span>
                            </div>
                            <p className="text-gray-600 mb-3">{method.description}</p>
                            
                            {method.characteristics && (
                              <div className="mb-3">
                                <p className="font-semibold text-gray-700 mb-1">Xususiyatlari:</p>
                                <ul className="list-disc ml-5 space-y-1">
                                  {method.characteristics.map((char, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm">{char}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {method.examples && (
                              <div className="mb-3">
                                <p className="font-semibold text-gray-700 mb-1">Misollar:</p>
                                <ul className="list-disc ml-5 space-y-1">
                                  {method.examples.map((example, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm">{example}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {method.headers && (
                              <div>
                                <p className="font-semibold text-gray-700 mb-1">Sarlavhalar:</p>
                                <div className="flex flex-wrap gap-2">
                                  {method.headers.map((header, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                                      {header}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {protocol.security && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-blue-500 mb-2">Xavfsizlik:</h5>
                      <div className="space-y-2">
                        {protocol.security.basic && (
                          <p className="text-gray-600">{protocol.security.basic}</p>
                        )}
                        {protocol.security.ftps && (
                          <div className="ml-4">
                            <p className="font-semibold">{protocol.security.ftps.description}</p>
                            <ul className="list-disc ml-5">
                              {protocol.security.ftps.features.map((feature, i) => (
                                <li key={i} className="text-gray-600">{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ReactInternetSavod
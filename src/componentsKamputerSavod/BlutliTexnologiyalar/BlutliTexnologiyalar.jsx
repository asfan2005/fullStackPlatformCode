import React from 'react'
import { bluetoothTechnologies } from './dataBulutliTexnologiyalar'
import { useNavigate } from 'react-router-dom'

function BlutliTexnologiyalar() {
  const navigate = useNavigate()

  const renderTechnicalSpecs = (tech) => {
    if (!tech.technicalSpecs) return null;
    return (
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Texnik xususiyatlar</h3>
        <div className="grid gap-3">
          {Object.entries(tech.technicalSpecs).map(([key, value], idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <span className="font-semibold">{key}: </span>
              {value}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderSecurityFeatures = (tech) => {
    if (!tech.securityFeatures) return null;
    return (
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Xavfsizlik xususiyatlari</h3>
        <div className="grid gap-3">
          {tech.securityFeatures.map((feature, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderProtocols = (tech) => {
    if (!tech.protocols) return null;
    return (
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Protokollar</h3>
        <div className="grid gap-3">
          {tech.protocols.map((protocol, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              {protocol}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-12 tracking-tight">
          Blutli Texnologiyalar
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {bluetoothTechnologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Version and Release Date */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-blue-700">{tech.version}</h2>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {tech.releaseDate}
                </span>
              </div>
              
              {/* Technical Specifications */}
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Maksimal tezlik', value: tech.maxSpeed },
                  { label: 'Masofa', value: tech.range },
                  { label: 'Chastota', value: tech.frequency },
                  { label: 'Modulyatsiya', value: tech.modulation },
                  { label: 'Quvvat sarfi', value: tech.powerConsumption }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <p className="text-gray-800">
                      <span className="font-semibold text-blue-700">{item.label}: </span>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4">
                  {tech.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Asosiy xususiyatlar</h3>
                <ul className="space-y-3">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Qo'llanilishi</h3>
                <div className="grid gap-3">
                  {tech.applications.map((app, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Cheklovlar</h3>
                <div className="space-y-3">
                  {tech.limitations.map((limit, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {limit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Technical Specs */}
              {renderTechnicalSpecs(tech)}
              
              {/* Security Features */}
              {renderSecurityFeatures(tech)}
              
              {/* Protocols */}
              {renderProtocols(tech)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlutliTexnologiyalar
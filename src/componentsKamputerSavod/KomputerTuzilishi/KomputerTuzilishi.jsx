import React, { useState } from 'react'
import computerStructureData from './dataKomputerTuzilishi'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function KomputerTuzilishi() {
  const [activeSection, setActiveSection] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-blue-600 hover:bg-blue-50"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Orqaga</span>
        </motion.button>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
            {computerStructureData.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed hover:text-gray-800 transition-colors duration-300">
            {computerStructureData.description}
          </p>
        </motion.div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {computerStructureData.sections.map((section, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={section.id}
              className="group relative w-full h-full"
            >
              <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-lg 
                            hover:shadow-2xl transition-all duration-500 ease-in-out 
                            border border-gray-200">
                {/* Component Header */}
                <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 
                              p-6 rounded-t-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm 
                                  group-hover:bg-white/30 transition-all duration-300">
                      <i className={`fas fa-${section.icon} text-3xl text-white 
                                  group-hover:rotate-12 transition-transform duration-300`}></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{section.component}</h2>
                      <p className="mt-2 text-white/90 line-clamp-2">{section.shortDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl
                                hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Funksiyasi</h3>
                    <p className="text-gray-700">{section.detailedInfo.function}</p>
                  </div>

                  {/* Interactive Sections */}
                  <div className="space-y-4">
                    {Object.entries(section.detailedInfo).map(([key, value]) => {
                      if (Array.isArray(value) && key !== 'specifications') {
                        return (
                          <motion.div
                            key={key}
                            className="w-full bg-white shadow-md rounded-xl p-5 
                                     hover:bg-gray-50 transition-all duration-300 
                                     border border-gray-100"
                            whileHover={{ scale: 1.01, y: -2 }}
                          >
                            <h3 className="text-lg font-semibold capitalize text-gray-800 mb-3">
                              {key}
                            </h3>
                            <ul className="space-y-2">
                              {value.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span className="flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )
                      }
                      return null
                    })}
                  </div>

                  {/* Specifications Table */}
                  {section.detailedInfo.specifications && (
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4">
                        <h3 className="font-semibold text-gray-800">Texnik xususiyatlari</h3>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {Object.entries(section.detailedInfo.specifications).map(([key, value]) => (
                          <div key={key} 
                               className="flex items-center justify-between p-4 hover:bg-blue-50 transition-all duration-300">
                            <span className="font-medium text-gray-700">{key}</span>
                            <span className="text-gray-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Summary Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed hover:text-gray-900 transition-colors duration-300">
            {computerStructureData.summary}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default KomputerTuzilishi
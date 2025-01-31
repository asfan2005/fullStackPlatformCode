import React, { useState } from 'react'
import dataBordersEffects from '../dataMukammal/dataComponentsTailwand';
import { motion } from 'framer-motion';

function ComponentsTailwand() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-5xl font-bold text-center text-gray-900 mb-12 hover:text-blue-600 transition-colors duration-300"
        >
          Borders va Effects
        </motion.h1>

        <div className="space-y-12">
          {dataBordersEffects.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 p-8 rounded-t-2xl">
                <h2 className="text-3xl font-bold text-white tracking-wide">
                  {item.title}
                </h2>
              </div>

              <div className="p-8">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Examples Section */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="mb-8 bg-gray-50 p-8 rounded-xl border-l-4 border-blue-500"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">📌</span>
                    Misollar
                  </h3>
                  <ul className="space-y-4">
                    {item.examples.map((example, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 10 }}
                        className="flex items-start text-gray-600 text-lg"
                      >
                        <span className="text-blue-500 mr-3 text-xl">•</span>
                        {example}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Code Example Section */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="mb-8 group"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">💻</span>
                    Kod Misoli
                  </h3>
                  <pre className="bg-gray-900 rounded-xl p-8 overflow-x-auto group-hover:shadow-xl transition-all duration-300">
                    <code className="text-lg text-gray-100 font-mono whitespace-pre">
                      {item.codeExample}
                    </code>
                  </pre>
                </motion.div>

                {/* Tips Section */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-400"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3 text-2xl">💡</span>
                    Maslahatlar
                  </h3>
                  <ul className="space-y-4">
                    {item.tips.map((tip, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 10 }}
                        className="flex items-start text-gray-600 text-lg"
                      >
                        <span className="text-blue-500 mr-3">✓</span>
                        {tip}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Interactive Demo Section */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="mt-8 p-8 border-2 border-gray-200 rounded-xl bg-white"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="mr-3 text-2xl">🎮</span>
                    Interaktiv Namoyish
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.examples.map((example, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <code className="text-lg text-blue-600 font-semibold">{example}</code>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ComponentsTailwand;
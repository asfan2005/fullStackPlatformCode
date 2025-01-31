import React, { useState } from 'react'
import dataPerformance from '../dataMukammal/dataPerformance'
import { motion, AnimatePresence } from 'framer-motion';

function PerformanceMukammal() {
  const [selectedItem, setSelectedItem] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-gray-900 mb-12 hover:text-blue-600 transition-colors duration-300"
        >
          Performance Optimization
        </motion.h1>

        <AnimatePresence>
          <div className="space-y-12">
            {dataPerformance.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedItem(item.id)}
              >
                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 p-8 rounded-t-2xl">
                  <h2 className="text-3xl font-bold text-white tracking-wide flex items-center">
                    <span className="mr-3 text-2xl">⚡</span>
                    {item.title}
                  </h2>
                </div>

                <div className="p-8">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="mb-8 group relative"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="mr-3 text-2xl">💻</span>
                      Code Example
                    </h3>
                    <pre className="bg-gray-900 rounded-xl p-8 overflow-x-auto group-hover:shadow-xl transition-all duration-300">
                      <code className="text-lg text-gray-100 font-mono whitespace-pre">
                        {item.codeExample}
                      </code>
                    </pre>
                    <button 
                      className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => navigator.clipboard.writeText(item.codeExample)}
                    >
                      Copy
                    </button>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="mt-8 p-8 border-2 border-gray-200 rounded-xl bg-white"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                      <span className="mr-3 text-2xl">📊</span>
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.metrics?.map((metric, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, rotate: 1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                          <code className="text-lg text-blue-600 font-semibold break-words">
                            {metric}
                          </code>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="mt-8 bg-blue-50 p-8 rounded-xl border-l-4 border-blue-400"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="mr-3 text-2xl">💡</span>
                      Additional Information
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description || "Additional information about this optimization technique will be added soon."}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default PerformanceMukammal
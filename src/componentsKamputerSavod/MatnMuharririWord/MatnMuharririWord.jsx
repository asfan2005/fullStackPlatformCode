import React, { useState } from 'react'
import wordProcessorData from './dataWordMatn'
import wordRibbonData from './dataWordRibbon'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function MatnMuharririWord() {
  const [activeSection, setActiveSection] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-purple-100 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white/95 to-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group relative overflow-hidden border border-blue-100"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <i className="fas fa-chevron-left text-lg group-hover:transform group-hover:-translate-x-1 transition-transform"></i>
              <i className="fas fa-file-word text-xl"></i>
            </div>
            <span className="font-semibold text-lg tracking-wide border-l border-blue-200 pl-3">
              Orqaga
            </span>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
            <i className="fas fa-long-arrow-alt-left text-xl"></i>
          </div>
        </motion.button>

        {/* Header Section with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 relative"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 0.98, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-8 drop-shadow-lg">
              {wordProcessorData.title}
            </h1>
          </motion.div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            {wordProcessorData.description}
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-lg text-gray-600">
            <p className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200">
              Oxirgi yangilanish: {wordProcessorData.lastUpdate}
            </p>
            <p className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200">
              Muallif: {wordProcessorData.author}
            </p>
          </div>
        </motion.div>

        {/* Enhanced Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {wordProcessorData.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.03,
                translateY: -10,
                rotateY: 5
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden"
            >
              {/* Enhanced Section Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 p-8 rounded-t-3xl relative overflow-hidden">
                <motion.div
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.2) 0%, transparent 50%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0"
                />
                <div className="flex items-center gap-6">
                  <div className="bg-white/30 p-5 rounded-2xl backdrop-blur-sm">
                    <i className={`fas fa-${section.icon} text-4xl text-white`}></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.component}</h2>
                    <p className="mt-3 text-white/90 font-light">{section.shortDescription}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Section Content with Glassmorphism */}
              <div className="p-8 space-y-8 relative">
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.02 } : { scale: 1 }}
                  className="bg-blue-50/70 backdrop-blur-md p-6 rounded-2xl border border-blue-100/50 shadow-inner"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Funksiyasi</h3>
                  <p className="text-gray-700 leading-relaxed">{section.detailedInfo.function}</p>
                </motion.div>

                {/* Types List */}
                <div className="space-y-4">
                  {section.detailedInfo.types && (
                    <div className="bg-white shadow-md rounded-xl p-5">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Turlar</h3>
                      <ul className="space-y-2">
                        {section.detailedInfo.types.map((type, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="text-blue-500">•</span>
                            <span>{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Features */}
                  {section.detailedInfo.keyFeatures && (
                    <div className="bg-white shadow-md rounded-xl p-5">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Asosiy Xususiyatlar</h3>
                      <ul className="space-y-2">
                        {section.detailedInfo.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="text-green-500">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Advantages */}
                  {section.detailedInfo.advantages && (
                    <div className="bg-white shadow-md rounded-xl p-5">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Afzalliklari</h3>
                      <ul className="space-y-2">
                        {section.detailedInfo.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="text-blue-500">★</span>
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Word Ribbon Interface Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {wordRibbonData.title}
          </h2>
          
          <p className="text-xl text-gray-700 text-center mb-12">
            {wordRibbonData.description}
          </p>

          {/* Ribbon Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordRibbonData.sections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <i className={`fas fa-${section.icon} text-blue-500`}></i>
                  {section.name}
                </h3>

                <div className="space-y-4">
                  {section.tools && section.tools.map((tool, index) => (
                    <div key={index} className="bg-blue-50/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-800 flex items-center gap-2">
                          {tool.icon && <i className={`fas fa-${tool.icon} text-blue-500`}></i>}
                          {tool.name}
                        </h4>
                        {tool.shortcut && (
                          <span className="text-sm bg-blue-100 px-2 py-1 rounded">
                            {tool.shortcut}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-2">{tool.description}</p>

                      {/* Tool Features */}
                      {tool.features && (
                        <div className="mt-2 space-y-2">
                          {Array.isArray(tool.features) ? (
                            <ul className="space-y-1">
                              {tool.features.map((feature, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                  <span className="text-blue-500">•</span>
                                  {typeof feature === 'string' ? feature : feature.description}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="space-y-2">
                              {Object.entries(tool.features).map(([key, value], i) => (
                                <div key={i} className="bg-white/50 rounded-lg p-2">
                                  <h5 className="font-medium text-sm text-gray-700">{key}</h5>
                                  <p className="text-sm text-gray-600">
                                    {typeof value === 'string' ? value : value.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Additional Tool Information */}
                      {tool.additionalInfo && (
                        <div className="mt-3 pt-3 border-t border-blue-100">
                          {tool.additionalInfo.tips && (
                            <div className="space-y-1">
                              {tool.additionalInfo.tips.map((tip, i) => (
                                <p key={i} className="text-sm text-blue-600 flex items-center gap-2">
                                  <span>💡</span>
                                  {tip}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Keyboard Shortcuts Section */}
          <div className="mt-12 bg-white/70 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Klaviatura Tugmalari</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(wordRibbonData.keyboardShortcuts).map(([category, shortcuts]) => (
                <div key={category} className="bg-blue-50/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3 capitalize">{category}</h4>
                  <ul className="space-y-2">
                    {shortcuts.map((shortcut, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-blue-500">⌘</span>
                        {shortcut}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access Toolbar Section */}
          <div className="mt-12 bg-white/70 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              {wordRibbonData.additionalFeatures.quickAccessToolbar.description}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50/50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Standart Tugmalar</h4>
                <ul className="space-y-2">
                  {wordRibbonData.additionalFeatures.quickAccessToolbar.defaultTools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <i className={`fas fa-${tool.icon} text-blue-500`}></i>
                      <span>{tool.name}</span>
                      {tool.shortcut && (
                        <span className="text-sm bg-blue-100 px-2 py-1 rounded ml-auto">
                          {tool.shortcut}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Styles Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <i className="fas fa-paint-brush text-blue-500"></i>
              Styles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wordRibbonData.sections
                .find(section => section.id === "styles")
                ?.presets.map((style, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-50/50 rounded-lg p-4 border border-blue-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{style.name}</h4>
                      {style.shortcut && (
                        <span className="text-sm bg-blue-100 px-2 py-1 rounded">
                          {style.shortcut}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{style.description}</p>
                    
                    {/* Default Settings */}
                    <div className="space-y-2 bg-white/70 rounded-lg p-3">
                      <h5 className="text-sm font-medium text-gray-700">Default Settings:</h5>
                      <ul className="text-sm space-y-1">
                        {Object.entries(style.defaultSettings).map(([key, value], i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="text-blue-500">•</span>
                            <span className="capitalize">{key}:</span>
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Additional Features */}
            <div className="mt-6 bg-purple-50/50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Additional Features</h4>
              <ul className="space-y-2">
                {Object.entries(wordRibbonData.sections
                  .find(section => section.id === "styles")
                  ?.additionalFeatures || {}).map(([key, value], index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-500">•</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Practical Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {wordRibbonData.practicalExamples.title}
          </h2>
          
          <p className="text-xl text-gray-700 text-center mb-12">
            {wordRibbonData.practicalExamples.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {wordRibbonData.practicalExamples.tasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100"
              >
                {/* Task Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {task.id}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {task.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {task.description}
                    </p>
                  </div>
                </div>

                {/* Task Steps */}
                <div className="bg-blue-50/50 rounded-lg p-6 mb-6">
                  <h4 className="font-medium text-gray-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-list-ol text-blue-500"></i>
                    Bajarish bosqichlari:
                  </h4>
                  <ol className="list-decimal list-inside space-y-3">
                    {task.steps.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-gray-700 pl-2"
                      >
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </div>

                {/* Task Tips */}
                <div className="bg-yellow-50/50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-lightbulb text-yellow-500"></i>
                    Foydali maslahatlar:
                  </h4>
                  <ul className="space-y-3">
                    {task.tips.map((tip, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-yellow-500 mt-1">💡</span>
                        <span>{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Practice Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fas fa-play"></i>
                  Mashqni boshlash
                </motion.button>
              </motion.div>
            ))}
          </div>

          
        </motion.div>

       

        {/* Enhanced Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Qo'shimcha Ma'lumotlar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-100"
            >
              <h3 className="text-2xl font-semibold mb-6">Tezkor Tugmalar</h3>
              <ul className="space-y-3">
                {wordProcessorData.additionalInfo.shortcuts.map((shortcut, i) => (
                  <li key={i} className="text-gray-700 flex items-center gap-2">
                    <span className="text-blue-500">⌘</span>
                    {shortcut}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-indigo-50/50 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100"
            >
              <h3 className="text-2xl font-semibold mb-6">Foydali Maslahatlar</h3>
              <ul className="space-y-3">
                {wordProcessorData.additionalInfo.tips.map((tip, i) => (
                  <li key={i} className="text-gray-700 flex items-center gap-2">
                    <span className="text-indigo-500">💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Summary Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 text-center space-y-8"
        >
          <p className="text-2xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed font-light">
            {wordProcessorData.summary}
          </p>
          <p className="text-xl text-gray-600 mt-6 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl inline-block">
            Versiya: {wordProcessorData.version}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default MatnMuharririWord
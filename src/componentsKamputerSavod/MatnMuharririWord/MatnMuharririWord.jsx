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

          {/* Ribbon Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={wordRibbonData.sections[0].img} 
              alt="Word Ribbon Interface" 
              className="w-full object-cover"
            />
          </div>

          {/* Ribbon Sections */}
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
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                        {tool.icon && <i className={`fas fa-${tool.icon} text-blue-500`}></i>}
                        {tool.name}
                        {tool.shortcut && (
                          <span className="text-sm bg-blue-100 px-2 py-1 rounded ml-auto">
                            {tool.shortcut}
                          </span>
                        )}
                      </h4>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                      
                      {/* Features rendering with type checking */}
                      {Array.isArray(tool.features) && (
                        <ul className="mt-2 space-y-1">
                          {tool.features.map((feature, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="text-blue-500">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Handle features as an object */}
                      {tool.features && typeof tool.features === 'object' && !Array.isArray(tool.features) && (
                        <ul className="mt-2 space-y-1">
                          {Object.entries(tool.features).map(([key, value], i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="text-blue-500">•</span>
                              {value}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                {wordRibbonData.additionalFeatures.quickAccessToolbar.description}
              </h3>
              <ul className="space-y-2">
                {wordRibbonData.additionalFeatures.quickAccessToolbar.defaultTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">✓</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                {wordRibbonData.additionalFeatures.contextualTabs.description}
              </h3>
              <ul className="space-y-2">
                {wordRibbonData.additionalFeatures.contextualTabs.examples.map((tab, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-500">⚡</span>
                    {tab}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Real Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Amaliy Misollar
          </h2>

          {/* Business Documents */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">
              {wordRibbonData?.realExamples?.businessDocuments?.title || "Biznes Hujjatlar"}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {wordRibbonData?.realExamples?.businessDocuments?.examples?.map((example, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-xl font-medium mb-4">{example?.name}</h4>
                  {example?.template && (
                    <div className="space-y-4">
                      <div className="bg-blue-50/50 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Tuzilishi:</h5>
                        <ul className="space-y-2">
                          {example?.template?.structure?.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              <span className="text-blue-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {example?.template?.formatting && (
                        <div className="bg-purple-50/50 rounded-lg p-4">
                          <h5 className="font-medium mb-2">Formatlash:</h5>
                          <ul className="space-y-2">
                            {Object.entries(example.template.formatting).map(([key, value], i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <span className="text-purple-500">•</span>
                                {`${key}: ${value}`}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tutorials Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Qo'llanmalar</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-xl font-medium mb-4">Asosiy Qo'llanmalar</h4>
                <div className="space-y-6">
                  {wordRibbonData.tutorials.basic.map((tutorial, index) => (
                    <div key={index} className="bg-blue-50/50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">{tutorial.title}</h5>
                      <ol className="list-decimal list-inside space-y-2">
                        {tutorial.steps.map((step, i) => (
                          <li key={i} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                      {tutorial.tips && (
                        <div className="mt-2 text-blue-600">
                          <p className="font-medium">Maslahat:</p>
                          <p>{tutorial.tips}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-xl font-medium mb-4">Kengaytirilgan Qo'llanmalar</h4>
                <div className="space-y-6">
                  {wordRibbonData.tutorials.advanced.map((tutorial, index) => (
                    <div key={index} className="bg-purple-50/50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">{tutorial.title}</h5>
                      <ol className="list-decimal list-inside space-y-2">
                        {tutorial.steps.map((step, i) => (
                          <li key={i} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                      {tutorial.tips && (
                        <ul className="mt-2 space-y-1">
                          {tutorial.tips.map((tip, i) => (
                            <li key={i} className="text-purple-600 flex items-center gap-2">
                              <span>💡</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Common Issues Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Ko'p Uchraydigan Muammolar</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-xl font-medium mb-4">Formatlash Muammolari</h4>
                <div className="space-y-4">
                  {wordRibbonData.commonIssues.formatting.map((issue, index) => (
                    <div key={index} className="bg-red-50/50 rounded-lg p-4">
                      <h5 className="font-medium text-red-600 mb-2">{issue.problem}</h5>
                      <div className="space-y-2">
                        <p className="text-green-600">
                          <span className="font-medium">Yechim: </span>
                          {issue.solution}
                        </p>
                        <p className="text-blue-600">
                          <span className="font-medium">Oldini olish: </span>
                          {issue.prevention}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-xl font-medium mb-4">Moslik Muammolari</h4>
                <div className="space-y-4">
                  {wordRibbonData.commonIssues.compatibility.map((issue, index) => (
                    <div key={index} className="bg-yellow-50/50 rounded-lg p-4">
                      <h5 className="font-medium text-yellow-600 mb-2">{issue.problem}</h5>
                      <div className="space-y-2">
                        <p className="text-green-600">
                          <span className="font-medium">Yechim: </span>
                          {issue.solution}
                        </p>
                        <p className="text-blue-600">
                          <span className="font-medium">Oldini olish: </span>
                          {issue.prevention}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
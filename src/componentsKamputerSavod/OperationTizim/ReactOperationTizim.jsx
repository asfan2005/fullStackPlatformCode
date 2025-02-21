import React, { useState } from 'react';
import operationSystemData from './dataOperationTizim';
import { motion } from 'framer-motion';
import { FaTimes, FaWindows, FaLinux, FaApple, FaAndroid, FaServer, 
         FaDesktop, FaTablet, FaMobile, FaCloud, FaShieldAlt, 
         FaNetworkWired, FaDatabase } from 'react-icons/fa';

function ReactOperationTizim() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Ikonkalar obyekti
  const icons = {
    windows: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    server: FaServer,
    desktop: FaDesktop,
    tablet: FaTablet,
    mobile: FaMobile,
    cloud: FaCloud,
    security: FaShieldAlt,
    network: FaNetworkWired,
    database: FaDatabase
  };

  // Modal komponenti
  const Modal = ({ section, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{section.component}</h2>
              <p className="text-gray-600">{section.shortDescription}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-50 rounded-full transition-colors duration-300"
            >
              <FaTimes className="text-red-500 text-xl" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold">Batafsil ma'lumot</h3>
              <p className="text-gray-700">{section.detailedInfo.function}</p>
              
              {section.detailedInfo.types && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Turlari:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.detailedInfo.types.map((type, index) => (
                      <li key={index} className="text-gray-700">{type}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.detailedInfo.examples && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Misollar:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.detailedInfo.examples.map((example, index) => (
                      <li key={index} className="text-gray-700">{example}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.detailedInfo.keyFeatures && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Asosiy xususiyatlari:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.detailedInfo.keyFeatures.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.detailedInfo.advantages && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Afzalliklari:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.detailedInfo.advantages.map((advantage, index) => (
                      <li key={index} className="text-gray-700">{advantage}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.detailedInfo.disadvantages && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Kamchiliklari:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.detailedInfo.disadvantages.map((disadvantage, index) => (
                      <li key={index} className="text-gray-700">{disadvantage}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.detailedInfo.requirements && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Talablar:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {Object.entries(section.detailedInfo.requirements).map(([key, value], index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium">{key}: </span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Filter va qidiruv funksiyalari
  const filteredSections = operationSystemData.sections.filter(section => {
    const matchesSearch = section.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeFilter === 'all') return matchesSearch;
    // Boshqa filterlar uchun logika...
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Asosiy sahifa tugmasi */}
            <div className="absolute top-4 left-4">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Asosiy sahifa
              </a>
            </div>

            <h1 className="text-5xl font-bold mb-6">{operationSystemData.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {operationSystemData.description}
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    {React.createElement(icons[section.icon] || FaDesktop, {
                      className: "text-2xl text-blue-600"
                    })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{section.component}</h2>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">{section.shortDescription}</p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Vazifasi:</h3>
                    <p className="text-gray-600 line-clamp-2">{section.detailedInfo.function}</p>
                  </div>
                  
                  {section.detailedInfo.types && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-700 mb-2">Turlari:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {section.detailedInfo.types.slice(0, 3).map((type, idx) => (
                          <li key={idx} className="text-gray-600">{type}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedSection(section.id)}
                  className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Batafsil</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Qo'shimcha ma'lumotlar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">O'rnatish bosqichlari</h3>
              <ul className="space-y-4">
                {operationSystemData.additionalInfo.installationSteps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 mt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Xavfsizlik maslahatlar</h3>
              <ul className="space-y-4">
                {operationSystemData.additionalInfo.securityTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600 mt-1">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Xulosa</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {operationSystemData.summary}
          </p>
          <div className="inline-flex flex-wrap justify-center gap-8 text-blue-100">
            <p>Versiya: {operationSystemData.version}</p>
            <p>Oxirgi yangilanish: {operationSystemData.lastUpdate}</p>
            <p>Muallif: {operationSystemData.author}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSection && (
        <Modal
          section={operationSystemData.sections.find(s => s.id === selectedSection)}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  );
}

export default ReactOperationTizim;
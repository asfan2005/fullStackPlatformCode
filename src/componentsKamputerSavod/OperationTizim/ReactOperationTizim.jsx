import React, { useState, useEffect } from 'react';
import operationSystemData from './dataOperationTizim';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWindows, FaLinux, FaApple, FaAndroid, FaServer, 
         FaDesktop, FaTablet, FaMobile, FaCloud, FaShieldAlt, 
         FaNetworkWired, FaDatabase, FaMicrochip, FaFolder,
         FaPowerOff, FaCubes, FaTerminal, FaSearch, FaChevronRight,
         FaBookOpen, FaLightbulb, FaCheck, FaInfoCircle, FaDownload,
         FaPrint, FaShareAlt, FaHome } from 'react-icons/fa';

function ReactOperationTizim() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  // Sahifa yuklanganda animatsiyani ishga tushirish
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Kategoriyalarni olish
    const uniqueCategories = ['all'];
    operationSystemData.sections.forEach(section => {
      if (section.category && !uniqueCategories.includes(section.category)) {
        uniqueCategories.push(section.category);
      }
    });
    setCategories(uniqueCategories);
  }, []);

  // Ikonkalar obyekti
  const icons = {
    windows: FaWindows,
    linux: FaLinux,
    apple: FaApple,
    android: FaAndroid,
    server: FaServer,
    desktop: FaDesktop,
    tablet: FaTablet,
    mobile: FaMobile,
    "mobile-alt": FaMobile,
    cloud: FaCloud,
    "shield-alt": FaShieldAlt,
    network: FaNetworkWired,
    database: FaDatabase,
    microchip: FaMicrochip,
    folder: FaFolder,
    "power-off": FaPowerOff,
    cubes: FaCubes,
    terminal: FaTerminal
  };

  // Rasm galereyasi komponenti
  const ImageGallery = ({ images }) => {
    if (!images || images.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <img 
            src={images[selectedImage]} 
            alt="Operatsion tizim" 
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/800x600?text=Rasm+topilmadi';
            }}
          />
          
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedImage === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          {/* O'ngga/chapga tugmalar */}
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300"
                onClick={() => setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev - 1))}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300"
                onClick={() => setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev + 1))}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  // Modal komponenti
  const Modal = ({ section, onClose }) => {
    // Modal ochilganda, tanlangan rasm indeksini resetlash
    useEffect(() => {
      setSelectedImage(0);
    }, [section.id]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => {
          // Faqat overlay bosilganda yopish
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 my-8"
        >
          <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100 px-8 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{section.component}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-50 rounded-full transition-colors duration-300"
              aria-label="Yopish"
            >
              <FaTimes className="text-red-500 text-xl" />
            </button>
          </div>

          <div className="p-8 pt-4">
            <p className="text-gray-600 mb-6">{section.shortDescription}</p>
            
            {/* Rasm galereyasi */}
            <ImageGallery images={section.images} />
            
            {/* Video */}
            {section.videoUrl && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </span>
                  Video ma'lumot
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src={section.videoUrl} 
                    title={`${section.component} video`} 
                    frameBorder="0" 
                    allowFullScreen 
                    className="w-full h-full"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://www.youtube.com/embed/JAFhwfyYEb4';
                    }}
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-2 flex items-center">
                  <FaInfoCircle className="mr-2 text-blue-500" />
                  Internet tezligingiz past bo'lsa, video yuklanishi biroz vaqt olishi mumkin.
                </p>
              </div>
            )}
            
            {/* Asosiy ma'lumotlar */}
            <div className="space-y-6">
              <div className="prose max-w-none">
                <div className="bg-blue-50 p-5 rounded-xl mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
                    <FaLightbulb className="mr-2 text-blue-600" />
                    Batafsil ma'lumot
                  </h3>
                  <p className="text-gray-700">{section.detailedInfo.function}</p>
                </div>
                
                {section.detailedInfo.howItWorks && (
                  <div className="mt-6 bg-gray-50 p-5 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <FaBookOpen className="mr-2 text-gray-600" />
                      Ishlash prinsipi:
                    </h4>
                    <p className="text-gray-700">{section.detailedInfo.howItWorks}</p>
                  </div>
                )}
                
                {section.detailedInfo.types && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Turlari:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.detailedInfo.types.map((type, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">
                            <FaCheck />
                          </span>
                          <span className="text-gray-700">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.detailedInfo.examples && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Misollar:</h4>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <ul className="space-y-3">
                        {section.detailedInfo.examples.map((example, index) => (
                          <li key={index} className="text-gray-700 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {section.detailedInfo.keyFeatures && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Asosiy xususiyatlari:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.detailedInfo.keyFeatures.map((feature, index) => (
                        <div key={index} className="bg-blue-50 p-3 rounded-lg flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {section.detailedInfo.advantages && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-green-700 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Afzalliklari:
                      </h4>
                      <ul className="space-y-2 bg-green-50 p-4 rounded-xl">
                        {section.detailedInfo.advantages.map((advantage, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-green-500 mr-2 mt-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.detailedInfo.disadvantages && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-red-700 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Kamchiliklari:
                      </h4>
                      <ul className="space-y-2 bg-red-50 p-4 rounded-xl">
                        {section.detailedInfo.disadvantages.map((disadvantage, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-red-500 mr-2 mt-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                            {disadvantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {section.detailedInfo.maintenance && (
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Texnik xizmat ko'rsatish:
                    </h4>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <ul className="space-y-2">
                        {section.detailedInfo.maintenance.map((item, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {section.detailedInfo.specifications && (
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      Texnik xususiyatlar:
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(section.detailedInfo.specifications).map(([key, value], index) => (
                          <div key={index} className="flex flex-col">
                            <span className="font-medium text-gray-700 mb-1">{key}:</span>
                            <span className="text-gray-600 bg-white p-2 rounded border border-gray-100">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {section.detailedInfo.additionalInfo && (
                  <div className="mt-8">
                    <div className="bg-purple-50 p-5 rounded-xl">
                      <h4 className="text-lg font-semibold text-purple-700 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Qo'shimcha ma'lumot:
                      </h4>
                      <p className="text-gray-700">{section.detailedInfo.additionalInfo}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Yuklab olish tugmalari */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300"
              >
                <FaDownload />
                <span>PDF yuklab olish</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl flex items-center space-x-2 hover:bg-purple-700 transition-colors duration-300"
              >
                <FaPrint />
                <span>Chop etish</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center space-x-2 hover:bg-green-700 transition-colors duration-300"
              >
                <FaShareAlt />
                <span>Ulashish</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Filter va qidiruv funksiyalari
  const filteredSections = operationSystemData.sections.filter(section => {
    const matchesSearch = section.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    return section.category === activeFilter && matchesSearch;
  });

  // Loading spinner komponenti
  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />
    </div>
  );

  return (
    <>
      {isLoading && <LoadingSpinner />}
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              {/* Asosiy sahifa tugmasi */}
              <div className="absolute top-4 left-4">
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <FaHome className="w-5 h-5 mr-2" />
                  Asosiy sahifa
                </a>
              </div>

              <motion.h1 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {operationSystemData.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {operationSystemData.description}
              </motion.p>
              
              {/* Search Bar */}
              <motion.div 
                className="mt-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Qidirish..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <FaSearch className="w-5 h-5 text-white/70" />
                  </span>
                </div>
              </motion.div>
              
              {/* Kategoriya filterlari */}
              {categories.length > 1 && (
                <motion.div 
                  className="mt-6 flex flex-wrap justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                        activeFilter === category 
                          ? 'bg-white text-blue-600 border-white' 
                          : 'bg-transparent text-white border-white/30 hover:border-white/70'
                      }`}
                    >
                      {category === 'all' ? 'Hammasi' : category}
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {filteredSections.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Hech narsa topilmadi</h3>
              <p className="text-gray-500 mt-2">Qidiruv so'roviga mos ma'lumotlar topilmadi. Boshqa kalit so'z bilan qidirib ko'ring.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="mt-4 px-6 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-300"
              >
                Barcha ma'lumotlarni ko'rsatish
              </button>
            </motion.div>
          ) : (
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
                    
                    {section.images && section.images.length > 0 && (
                      <div className="mb-4 h-40 rounded-xl overflow-hidden">
                        <img 
                          src={section.images[0]} 
                          alt={section.component} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/800x600?text=Rasm+topilmadi';
                          }}
                        />
                      </div>
                    )}
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">{section.shortDescription}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                          <FaLightbulb className="text-blue-500 mr-2" />
                          Vazifasi:
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{section.detailedInfo.function}</p>
                      </div>
                      
                      {section.detailedInfo.types && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <FaBookOpen className="text-green-500 mr-2" />
                            Turlari:
                          </h3>
                          <ul className="list-disc list-inside space-y-1">
                            {section.detailedInfo.types.slice(0, 3).map((type, idx) => (
                              <li key={idx} className="text-gray-600 truncate">{type}</li>
                            ))}
                            {section.detailedInfo.types.length > 3 && (
                              <li className="text-blue-500 italic">va boshqalar...</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedSection(section.id)}
                      className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Batafsil</span>
                      <FaChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Video darslik
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src={operationSystemData.videoTutorial} 
                    title="Operatsion tizim video darslik" 
                    frameBorder="0" 
                    allowFullScreen 
                    className="w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-2 flex items-center">
                  <FaInfoCircle className="mr-2 text-blue-500" />
                  Operatsion tizimlar haqida video ma'lumot
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  Asosiy tushunchalar
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-700">Kernel (yadro)</h4>
                    <p className="text-gray-600">Operatsion tizimning markaziy qismi bo'lib, qurilmalar bilan to'g'ridan-to'g'ri ishlaydi.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-green-700">User Interface (foydalanuvchi interfeysi)</h4>
                    <p className="text-gray-600">Foydalanuvchilar tizim bilan o'zaro muloqot qiladigan muhit - grafik yoki buyruqlar qatori.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-purple-700">Multitasking (ko'p vazifalilik)</h4>
                    <p className="text-gray-600">Bir vaqtning o'zida bir nechta dasturlarni ishga tushirish qobiliyati.</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-yellow-700">File System (fayl tizimi)</h4>
                    <p className="text-gray-600">Ma'lumotlarni kompyuterda saqlash va tartibga solish usuli.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Foydali manbalar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Foydali manbalar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Wikipedia</h4>
                  <p className="text-gray-600 text-sm">Operatsion tizimlar haqida umumiy ma'lumot</p>
                </a>
                <a href="https://www.microsoft.com/windows" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Microsoft</h4>
                  <p className="text-gray-600 text-sm">Windows operatsion tizimi haqida rasmiy ma'lumot</p>
                </a>
                <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Linux.org</h4>
                  <p className="text-gray-600 text-sm">Linux operatsion tizimi haqida to'liq ma'lumot</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section - Yangi qo'shildi */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Ko'p so'raladigan savollar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Operatsion tizim nima?</h3>
                <p className="text-gray-700">Operatsion tizim - bu kompyuter apparat ta'minotini boshqaradigan va foydalanuvchilarga dasturiy ta'minotni ishga tushirish imkonini beradigan asosiy dasturiy ta'minot.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Qanday operatsion tizimlar mavjud?</h3>
                <p className="text-gray-700">Eng mashhur operatsion tizimlar: Windows, macOS, Linux, Android va iOS. Ularning har biri o'zining xususiyatlari va maqsadli qurilmalari bilan farqlanadi.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Operatsion tizimni qanday tanlayman?</h3>
                <p className="text-gray-700">Operatsion tizimni tanlashda qurilma turingiz, kerakli dasturlar, foydalanish qulayligi va budjetingizni hisobga olishingiz kerak.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Operatsion tizimni yangilash kerakmi?</h3>
                <p className="text-gray-700">Ha, operatsion tizimni muntazam yangilab turish tavsiya etiladi. Yangilanishlar xavfsizlik zaifliklarini tuzatadi, yangi xususiyatlarni qo'shadi va tizim barqarorligini oshiradi.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Xulosa</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Operatsion tizimlar kompyuter va foydalanuvchi o'rtasidagi asosiy bog'lovchi bo'lib, hardware resurslarini boshqaradi va dasturiy ta'minotni ishlashi uchun muhit yaratadi. Zamonaviy operatsion tizimlar (Windows, Linux, macOS) foydalanuvchilar ehtiyojlariga qarab tanlanishi mumkin.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-8 text-blue-100">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Oxirgi yangilanish: {operationSystemData.lastUpdate}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Muallif: {operationSystemData.author}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Operatsion Tizimlar</h3>
                <p className="text-gray-400">Kompyuter dasturiy ta'minotining asosiy qismi bo'lgan operatsion tizim va uning ishlash printsiplari haqida ma'lumot.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Foydali havolalar</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Bosh sahifa</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Ta'lim platformasi</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kompyuter qismlari</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Bog'lanish</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Bog'lanish</h3>
                <p className="text-gray-400 mb-2">Savollaringiz yoki takliflaringiz bo'lsa, biz bilan bog'laning.</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">Xabar yuborish</button>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Kompyuter Savod. Barcha huquqlar himoyalangan.</p>
            </div>
          </div>
        </footer>

        {/* Modal */}
        <AnimatePresence>
          {selectedSection && (
            <Modal
              section={operationSystemData.sections.find(s => s.id === selectedSection)}
              onClose={() => setSelectedSection(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ReactOperationTizim;
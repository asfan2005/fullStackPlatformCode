import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import computerStructureData from './dataKomputerTuzilishi';

function KomputerTuzilishi() {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Barcha');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const filteredSections = computerStructureData.sections.filter(section => {
    // Kategoriya filtrlash
    if (activeCategory !== 'Barcha') {
      // Bu yerda kategoriyalarni component field ga ko'ra filtrlash mumkin
      // Hozircha oddiy tekshirish
      if (!section.component.toLowerCase().includes(activeCategory.toLowerCase())) {
        return false;
      }
    }

    // Qidiruv filtri
    if (searchQuery) {
      return (
        section.component.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return true;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
        <p className="ml-4 text-xl font-medium text-blue-600">Ma'lumotlar yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-8 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Navigation Header */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg mb-8 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Bosh sahifaga qaytish</span>
          </motion.button>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Qidirish..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 w-full sm:w-64 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"></i>
            </div>
            <button className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 hidden sm:block">
              <i className="fas fa-info-circle mr-2"></i>Yordam
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl overflow-hidden mb-16 shadow-xl"
        >
          <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>
          <div className="absolute -bottom-6 -right-6">
            <div className="w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
          <div className="relative z-10 p-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            >
              {computerStructureData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              {computerStructureData.description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <button className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300">
                <i className="fas fa-book-open mr-2"></i>Batafsil o'rganish
              </button>
              <a 
                href={computerStructureData.videoTutorial} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500/30 text-white backdrop-blur-sm rounded-xl font-semibold shadow-lg hover:bg-blue-600/50 transition-all duration-300 border border-white/20"
              >
                <i className="fas fa-video mr-2"></i>Video ko'rish
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {['Barcha', 'Protsessor', 'Xotira', 'Video karta', 'Periferial', 'Input', 'Output'].map((category, i) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                    category === activeCategory ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredSections.length > 0 ? (
            filteredSections.map((section, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={section.id}
                className="group relative w-full h-full"
              >
                <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden
                             hover:shadow-2xl transition-all duration-500 ease-in-out 
                             border border-gray-200">
                  {/* Component Header */}
                  <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 
                                p-6 overflow-hidden relative">
                    <div className="absolute -right-6 -top-6">
                      <div className="w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    </div>
                    <div className="absolute -left-6 -bottom-6">
                      <div className="w-16 h-16 bg-indigo-300/20 rounded-full blur-lg"></div>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                      <motion.div 
                        whileHover={{ rotate: 20, scale: 1.1 }}
                        className="bg-white/20 p-4 rounded-xl backdrop-blur-sm 
                                  shadow-inner border border-white/10"
                      >
                        <i className={`fas fa-${section.icon} text-3xl text-white`}></i>
                      </motion.div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{section.component}</h2>
                        <p className="mt-2 text-white/90 line-clamp-2">{section.shortDescription}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image Preview */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={section.images[0]} 
                      alt={section.component} 
                      className="w-full h-full object-cover transition-all duration-700 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-1">
                            {section.images.map((_, imgIndex) => (
                              <span 
                                key={imgIndex} 
                                className={`w-2 h-2 rounded-full ${imgIndex === 0 ? 'bg-white' : 'bg-white/40'}`}
                              ></span>
                            ))}
                          </div>
                          <a 
                            href={section.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white bg-blue-600/80 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
                          >
                            <i className="fas fa-play text-xs"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl
                                  hover:from-blue-100 hover:to-indigo-100 transition-all duration-300
                                  border border-blue-100/50 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-cogs mr-2 text-blue-600"></i>
                        Funksiyasi
                      </h3>
                      <p className="text-gray-700 leading-relaxed line-clamp-4">{section.detailedInfo.function}</p>
                    </div>

                    {/* Key Features */}
                    <div className="w-full bg-white shadow-md rounded-xl p-5 
                                  hover:bg-gray-50 transition-all duration-300 
                                  border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-star mr-2 text-blue-500"></i>
                        Asosiy xususiyatlari
                      </h3>
                      <ul className="space-y-2">
                        {section.detailedInfo.keyFeatures.slice(0, 3).map((feature, i) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={i} 
                            className="flex items-start gap-3 text-gray-700 group"
                          >
                            <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-1">
                              <i className="fas fa-check text-xs"></i>
                            </span>
                            <span className="flex-1">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    <div className="w-full bg-white shadow-md rounded-xl p-5 
                                  border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-list-ul mr-2 text-blue-500"></i>
                        Misollar
                      </h3>
                      <div className="space-y-2">
                        {section.detailedInfo.examples.slice(0, 2).map((example, i) => (
                          <div key={i} className="bg-gray-50 rounded-md p-2 text-sm text-gray-700">{example}</div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleSectionClick(section.id)}
                      className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 
                               text-white rounded-xl font-medium shadow-md hover:shadow-lg 
                               transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Batafsil ma'lumot</span>
                      <i className="fas fa-arrow-right"></i>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-blue-100 p-6 rounded-full mb-6">
                <i className="fas fa-search text-blue-500 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ma'lumotlar topilmadi</h3>
              <p className="text-gray-600 max-w-md">
                Siz izlayotgan ma'lumotlar mavjud emas. Boshqa kalit so'z bilan qidirishni sinab ko'ring.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('Barcha');
                }}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Barcha ma'lumotlarni ko'rsatish
              </button>
            </div>
          )}
        </div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {activeSection !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
              onClick={() => setActiveSection(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {computerStructureData.sections
                  .filter(section => section.id === activeSection)
                  .map(section => (
                    <div key={section.id} className="p-0">
                      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 rounded-t-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>
                        <div className="absolute -bottom-6 -right-6">
                          <div className="w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                          <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm shadow-inner border border-white/10">
                            <i className={`fas fa-${section.icon} text-4xl text-white`}></i>
                          </div>
                          <div className="text-center sm:text-left">
                            <h2 className="text-3xl font-bold text-white mb-2">{section.component}</h2>
                            <p className="text-white/90 text-lg">{section.shortDescription}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Gallery */}
                      <div className="p-8 bg-gray-50">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <i className="fas fa-images mr-2 text-blue-600"></i>
                          {section.component} ko'rinishi
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {section.images.map((img, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-xl shadow-md group h-64">
                              <img 
                                src={img} 
                                alt={`${section.component} - ${idx+1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 p-4">
                                  <h4 className="text-white font-medium text-sm">{section.component}</h4>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Video Integration */}
                        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                          <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%] h-0">
                            <iframe 
                              src={section.videoUrl} 
                              title={`${section.component} Video`}
                              className="absolute top-0 left-0 w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                              loading="lazy"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Fallback video
                                console.log(`Video uchun zaxira URLga o'tildi: ${section.component}`);
                              }}
                            ></iframe>
                          </div>
                          <div className="p-4 border-t border-gray-100 bg-gray-50">
                            <h4 className="font-medium text-gray-800 flex items-center">
                              <i className="fas fa-video text-blue-600 mr-2"></i>
                              {section.component} haqida video ma'lumot
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">Video yuklanmasa, internetga ulanishni tekshiring yoki keyinroq qayta urinib ko'ring.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 space-y-6">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                          <h3 className="text-xl font-semibold text-blue-800 mb-3">Funksiya va vazifasi</h3>
                          <p className="text-gray-700 leading-relaxed">{section.detailedInfo.function}</p>
                        </div>
                        
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                          <h3 className="text-xl font-semibold text-indigo-800 mb-3">Ishlash prinsipi</h3>
                          <p className="text-gray-700 leading-relaxed">{section.detailedInfo.howItWorks}</p>
                        </div>
                        
                        {/* Types */}
                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-layer-group mr-2 text-blue-600"></i>
                            Turlari
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.detailedInfo.types.map((type, i) => (
                              <div key={i} className="bg-gray-50 rounded-lg p-3 text-gray-700 border border-gray-100">
                                {type}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Examples */}
                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-list-ul mr-2 text-blue-600"></i>
                            Misollari
                          </h3>
                          <ul className="space-y-3">
                            {section.detailedInfo.examples.map((example, i) => (
                              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1">
                                  <i className="fas fa-check text-xs"></i>
                                </span>
                                <span className="flex-1">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Key Features */}
                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-star mr-2 text-blue-600"></i>
                            Asosiy xususiyatlari
                          </h3>
                          <ul className="space-y-3">
                            {section.detailedInfo.keyFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1">
                                  <i className="fas fa-star text-xs"></i>
                                </span>
                                <span className="flex-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Advantages & Disadvantages */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Advantages */}
                          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                              <i className="fas fa-thumbs-up mr-2 text-green-600"></i>
                              Afzalliklari
                            </h3>
                            <ul className="space-y-3">
                              {section.detailedInfo.advantages.map((adv, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1">
                                    <i className="fas fa-plus text-xs"></i>
                                  </span>
                                  <span className="flex-1">{adv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Disadvantages */}
                          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                            <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                              <i className="fas fa-thumbs-down mr-2 text-red-600"></i>
                              Kamchiliklari
                            </h3>
                            <ul className="space-y-3">
                              {section.detailedInfo.disadvantages.map((disadv, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-1">
                                    <i className="fas fa-minus text-xs"></i>
                                  </span>
                                  <span className="flex-1">{disadv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* Maintenance */}
                        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                          <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
                            <i className="fas fa-tools mr-2 text-yellow-600"></i>
                            Texnik xizmat ko'rsatish
                          </h3>
                          <ul className="space-y-3">
                            {section.detailedInfo.maintenance.map((maint, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700">
                                <span className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mt-1">
                                  <i className="fas fa-wrench text-xs"></i>
                                </span>
                                <span className="flex-1">{maint}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Specifications Table */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                          <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-4">
                            <h3 className="font-semibold text-gray-800 flex items-center">
                              <i className="fas fa-clipboard-list mr-2 text-blue-600"></i>
                              Texnik xususiyatlari
                            </h3>
                          </div>
                          <div className="divide-y divide-gray-100">
                            {Object.entries(section.detailedInfo.specifications).map(([key, value], i) => (
                              <motion.div 
                                key={key} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 + i * 0.05 }}
                                className="flex items-center justify-between p-4 hover:bg-blue-50 transition-all duration-300"
                              >
                                <span className="font-medium text-gray-700 capitalize">{key}</span>
                                <span className="text-gray-800 bg-gray-100 px-3 py-1 rounded-full">{value}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Additional Information */}
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                          <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                            <i className="fas fa-info-circle mr-2 text-purple-600"></i>
                            Qo'shimcha ma'lumotlar
                          </h3>
                          <div className="text-gray-700 leading-relaxed">
                            <div className="prose prose-blue max-w-none">
                              <p>{section.detailedInfo.additionalInfo}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Related Components */}
                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-project-diagram mr-2 text-blue-600"></i>
                            Bog'liq komponentlar
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {computerStructureData.sections
                              .filter(relSection => relSection.id !== section.id)
                              .slice(0, 3)
                              .map(relSection => (
                                <div key={relSection.id} 
                                     onClick={() => handleSectionClick(relSection.id)}
                                     className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-300 flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <i className={`fas fa-${relSection.icon}`}></i>
                                  </div>
                                  <span className="font-medium text-gray-800">{relSection.component}</span>
                                </div>
                              ))}
                          </div>
                        </div>
                        
                        {/* Download Resources Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-white">
                              <h3 className="text-xl font-bold mb-2">{section.component} haqida ko'proq ma'lumot</h3>
                              <p className="text-blue-100">
                                Ushbu komponent haqida to'liq ma'lumotlarni yuklab olish imkoniyati.
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
                              >
                                <i className="fas fa-file-pdf"></i>
                                <span>PDF formatida yuklash</span>
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-3 bg-blue-500/30 text-white backdrop-blur-sm rounded-lg font-medium shadow-md hover:bg-blue-600/50 transition-all duration-300 border border-white/20 flex items-center gap-2"
                              >
                                <i className="fas fa-print"></i>
                                <span>Chop etish uchun</span>
                              </motion.button>
                            </div>
                          </div>
                        </div>
                        
                        {/* FAQ Section */}
                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-question-circle mr-2 text-blue-600"></i>
                            Ko'p so'raladigan savollar
                          </h3>
                          <div className="space-y-4">
                            {[
                              {
                                question: `${section.component}ni qanday tanlash kerak?`,
                                answer: `${section.component} tanlashda uning xususiyatlari, quvvati va sizning ehtiyojlaringizga mos kelishiga e'tibor qarating. Kompyuterning boshqa qismlari bilan mos kelishi ham muhim.`
                              },
                              {
                                question: `${section.component}ning ishlash muddati qancha?`,
                                answer: `Odatda ${section.component}ning o'rtacha ishlash muddati 5-7 yil, ammo bu uning sifati, ishlatiladigan sharoitlari va texnik xizmat ko'rsatilishiga bog'liq.`
                              },
                              {
                                question: `${section.component} ishlamay qolsa nima qilish kerak?`,
                                answer: `Avval uning ulangan joylari va kabellarini tekshiring. Muammo davom etsa, uni almashtirish yoki professional texnik yordam olish tavsiya etiladi.`
                              }
                            ].map((faq, idx) => (
                              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-4 font-medium text-gray-800">
                                  {faq.question}
                                </div>
                                <div className="p-4 text-gray-700">
                                  {faq.answer}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* User Comments & Feedback */}
                        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i className="fas fa-comments mr-2 text-blue-600"></i>
                            Foydalanuvchilar fikrlari
                          </h3>
                          <div className="space-y-4 mb-6">
                            {[
                              {
                                name: "Ali Valiyev",
                                comment: `Bu ma'lumot menga ${section.component}ni yaxshiroq tushunishga yordam berdi. Juda foydali!`,
                                rating: 5,
                                date: "2023-05-15"
                              },
                              {
                                name: "Malika Rasulova",
                                comment: `${section.component} haqidagi ma'lumotlar aniq va tushunarli. Yanada ko'proq misollar bo'lsa yaxshi bo'lardi.`,
                                rating: 4,
                                date: "2023-06-22"
                              }
                            ].map((feedback, idx) => (
                              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                      {feedback.name.charAt(0)}
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-gray-800">{feedback.name}</h4>
                                      <p className="text-gray-500 text-sm">{feedback.date}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    {Array.from({ length: 5 }, (_, i) => (
                                      <i key={i} className={`fas fa-star text-xs ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                    ))}
                                  </div>
                                </div>
                                <p className="text-gray-700">{feedback.comment}</p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Comment Form */}
                          <div className="border-t border-gray-200 pt-6">
                            <h4 className="font-medium text-gray-800 mb-3">Fikringizni qoldiring</h4>
                            <div className="space-y-3">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input 
                                  type="text" 
                                  placeholder="Ismingiz" 
                                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                                <input 
                                  type="email" 
                                  placeholder="E-mail" 
                                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                              </div>
                              <div>
                                <textarea 
                                  placeholder="Fikringiz..." 
                                  rows="3" 
                                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                ></textarea>
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-gray-700">Baholash:</span>
                                <div className="flex space-x-1">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <button key={i} className="text-gray-300 hover:text-yellow-400 focus:text-yellow-400">
                                      <i className="fas fa-star"></i>
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Yuborish
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer Actions */}
                      <div className="bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                            <i className="fas fa-share-alt"></i>
                            <span>Ulashish</span>
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                            <i className="fas fa-bookmark"></i>
                            <span>Saqlash</span>
                          </button>
                        </div>
                        <button 
                          onClick={() => setActiveSection(null)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <i className="fas fa-times"></i>
                          <span>Yopish</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>
          <div className="absolute -top-6 -right-6">
            <div className="w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
          <div className="absolute -bottom-6 -left-6">
            <div className="w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
          </div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Yangiliklar va o'quv materiallari</h3>
              <p className="text-white/90">
                Kompyuter texnologiyalari haqida eng so'nggi yangiliklar va foydali materiallarni olish uchun obuna bo'ling.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="E-mail manzilingiz"
                  className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-64"
                />
                <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-md">
                  Obuna bo'lish
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">
                * Biz shaxsiy ma'lumotlaringizni hech kimga bermayiz.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="text-gray-600 mb-2">
            © {new Date().getFullYear()} Kompyuter Savodi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Foydalanish shartlari</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Maxfiylik siyosati</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Yordam</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default KomputerTuzilishi;
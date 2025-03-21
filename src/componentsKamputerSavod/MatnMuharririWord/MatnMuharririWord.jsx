import React, { useState, useRef } from 'react'
import wordProcessorData from './dataWordMatn'
import wordRibbonData from './dataWordRibbon'
import wordInsertData from './dataWordInsert'
import wordVideoesData from './dataWordVideoes' // Video darslar import qilindi
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function MatnMuharririWord() {
  const [activeSection, setActiveSection] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeVideoCategory, setActiveVideoCategory] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const videoSectionRef = useRef(null)
  const navigate = useNavigate()

  // Video kategoriyasiga qarab filtrlash
  const getFilteredVideos = () => {
    let filteredVideos = wordVideoesData.videos.filter(
      video => video.categoryId === activeVideoCategory
    )
    
    // Qidiruv so'zi bo'yicha filtrlash
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase()
      filteredVideos = filteredVideos.filter(
        video => 
          video.title.toLowerCase().includes(searchLower) || 
          video.description.toLowerCase().includes(searchLower) ||
          video.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }
    
    return filteredVideos
  }

  // Video bo'limiga o'tish
  const scrollToVideoSection = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Video modalini ochish
  const openVideoModal = (video) => {
    setSelectedVideo(video)
  }

  // Video modalini yopish
  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

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

        {/* Quick Navigation - Video darslar bo'limiga o'tish tugmasi */}
        <div className="flex justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToVideoSection}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <i className="fas fa-play-circle text-xl"></i>
            Video Darslarni Ko'rish
          </motion.button>
        </div>

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

        {/* Video Tutorials Section */}
        <motion.div
          ref={videoSectionRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-4">
              {wordVideoesData.title} - Video Darslar
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              {wordVideoesData.description}
            </p>
          </div>

          {/* Main Video */}
          <div className="mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                className="w-full h-full"
                src={wordVideoesData.mainVideoTutorial}
                title="Main Video Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg text-blue-600 font-medium">
                <i className="fas fa-info-circle mr-2"></i>
                Word dasturining asosiy imkoniyatlari va funksiyalari bilan tanishish
              </p>
              <p className="text-gray-600 mt-2">
                Oxirgi yangilanish: {wordVideoesData.lastUpdate} | Muallif: {wordVideoesData.author}
              </p>
            </div>
          </div>

          {/* Search & Categories Navigation */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Video darsni qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-12 py-4 rounded-xl border border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                />
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 text-lg"></i>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Categories Tabs */}
            <div className="flex flex-wrap gap-4">
              {wordVideoesData.categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveVideoCategory(category.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeVideoCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/70 text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {category.id === 1 && <i className="fas fa-book-open"></i>}
                  {category.id === 2 && <i className="fas fa-font"></i>}
                  {category.id === 3 && <i className="fas fa-table"></i>}
                  {category.id === 4 && <i className="fas fa-image"></i>}
                  {category.id === 5 && <i className="fas fa-code"></i>}
                  {category.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Category Info */}
          <div className="mb-10 bg-blue-50/70 p-6 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
              {wordVideoesData.categories.find(cat => cat.id === activeVideoCategory)?.title}
            </h3>
            <p className="text-gray-700">
              {wordVideoesData.categories.find(cat => cat.id === activeVideoCategory)?.description}
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredVideos().length > 0 ? (
              getFilteredVideos().map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100"
                >
                  {/* Video Thumbnail with Play Button */}
                  <div 
                    className="relative cursor-pointer" 
                    onClick={() => openVideoModal(video)}
                  >
                    <div className="aspect-video bg-gray-100 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                          src={`https://img.youtube.com/vi/${video.videoUrl.split('/').pop()}/hqdefault.jpg`} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/640x360?text=Video+Thumbnail";
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-all duration-300">
                        <div className="bg-white/20 backdrop-blur-md p-5 rounded-full">
                          <i className="fas fa-play text-white text-2xl"></i>
                        </div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
                        {video.duration}
                      </div>
                      {/* Level Badge */}
                      <div className="absolute top-3 left-3 bg-blue-600/90 text-white px-3 py-1 rounded-md text-sm font-medium">
                        {video.level}
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-gray-800 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {video.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {video.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                      {video.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{video.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Watch Button */}
                    <button
                      onClick={() => openVideoModal(video)}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-play-circle"></i>
                      Videoni ko'rish
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              // No results message
              <div className="col-span-full bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center">
                <i className="fas fa-search text-blue-500 text-5xl mb-4"></i>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hech qanday video topilmadi</h3>
                <p className="text-gray-600 mb-6">
                  "{searchTerm}" so'rovi bo'yicha video darslar mavjud emas. Iltimos, boshqa kalit so'zlarni kiriting.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700"
                >
                  Barcha videolarni ko'rsatish
                </button>
              </div>
            )}
          </div>

          {/* Popular Videos Section */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 flex-grow bg-gradient-to-r from-blue-300 to-indigo-300"></div>
              <h3 className="text-2xl font-bold text-gray-800 whitespace-nowrap">Eng mashxur videolar</h3>
              <div className="h-0.5 flex-grow bg-gradient-to-r from-indigo-300 to-blue-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {wordVideoesData.popularVideos.map((videoId) => {
                const video = wordVideoesData.videos.find((v) => v.id === videoId);
                return (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100"
                  >
                    {/* Video Thumbnail */}
                    <div 
                      className="relative cursor-pointer" 
                      onClick={() => openVideoModal(video)}
                    >
                      <div className="aspect-video bg-gray-100 overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img 
                            src={`https://img.youtube.com/vi/${video.videoUrl.split('/').pop()}/hqdefault.jpg`} 
                            alt={video.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/640x360?text=Video+Thumbnail";
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-all duration-300">
                          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                            <i className="fas fa-play text-white"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Video Title */}
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {video.duration}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Recommended Courses */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 flex-grow bg-gradient-to-r from-purple-300 to-pink-300"></div>
              <h3 className="text-2xl font-bold text-gray-800 whitespace-nowrap">Tavsiya etilgan kurslar</h3>
              <div className="h-0.5 flex-grow bg-gradient-to-r from-pink-300 to-purple-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wordVideoesData.recommendedCourses.map((course) => (
                <motion.a
                  key={course.id}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="block bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl overflow-hidden shadow-lg text-white group"
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 group-hover:underline">
                      {course.title}
                    </h3>
                    <p className="text-white/90 mb-6">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        Batafsil Ma'lumot
                      </span>
                      <i className="fas fa-arrow-right text-white/70 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

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

        {/* Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {wordInsertData.practice.title}
          </h2>
          
          <p className="text-xl text-gray-700 text-center mb-12">
            {wordInsertData.practice.description}
          </p>

          {/* Practice Exercises Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {wordInsertData.practice.exercises.map((exercise) => (
              <motion.div
                key={exercise.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600">#{exercise.id}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exercise.title}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>

                {/* Tasks List */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Vazifalar:</h4>
                  <ul className="space-y-2">
                    {exercise.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips Section */}
                <div className="bg-blue-50/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Maslahatlar:</h4>
                  <ul className="space-y-2">
                    {exercise.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="text-yellow-500">💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Project Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {wordInsertData.practice.finalProject.title}
            </h3>
            
            <p className="text-gray-700 mb-6">
              {wordInsertData.practice.finalProject.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Requirements */}
              <div className="bg-white/80 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Talablar:</h4>
                <ul className="space-y-2">
                  {wordInsertData.practice.finalProject.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evaluation Criteria */}
              <div className="bg-white/80 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Baholash Mezonlari:</h4>
                <ul className="space-y-2">
                  {wordInsertData.practice.finalProject.evaluationCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-500">★</span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

        {/* Word Insert Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {wordInsertData.title}
          </h2>
          
          <p className="text-xl text-gray-700 text-center mb-12">
            {wordInsertData.description}
          </p>

          {/* Insert Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordInsertData.sections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <i className={`fas fa-${section.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{section.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                  </div>
                </div>

                {/* Tools List */}
                <div className="space-y-4">
                  {section.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-blue-50/50 rounded-lg p-4 hover:bg-blue-50/80 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <i className={`fas fa-${tool.icon || 'circle'} text-blue-500`}></i>
                          <h4 className="font-medium text-gray-800">{tool.name}</h4>
                        </div>
                        {tool.shortcut && (
                          <span className="text-sm bg-blue-100/80 px-2 py-1 rounded text-blue-700">
                            {tool.shortcut}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{tool.description}</p>

                      {/* Tool Features */}
                      {tool.features && (
                        <div className="mt-3 space-y-3">
                          {Object.entries(tool.features).map(([key, value]) => (
                            <div key={key} className="bg-white/70 rounded-lg p-3">
                              <h5 className="text-sm font-medium text-gray-700 capitalize mb-2">{key}</h5>
                              {Array.isArray(value) ? (
                                <ul className="space-y-1">
                                  {value.map((item, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                      <span className="text-blue-500">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm text-gray-600">{value}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Additional Info & Tips */}
                      {tool.additionalInfo && (
                        <div className="mt-3 pt-3 border-t border-blue-100">
                          {tool.additionalInfo.tips && (
                            <div className="space-y-2">
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
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(wordInsertData.keyboardShortcuts).map(([category, shortcuts]) => (
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

          {/* Common Issues Section */}
          <div className="mt-12 bg-white/70 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Ko'p Uchraydigan Muammolar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(wordInsertData.commonIssues).map(([category, issues]) => (
                <div key={category} className="bg-blue-50/50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3 capitalize">{category}</h4>
                  {issues.map((issue, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      <p className="font-medium text-red-600 mb-2">{issue.problem}</p>
                      <p className="text-sm text-gray-600 mb-1">Yechim: {issue.solution}</p>
                      <p className="text-sm text-blue-600">Oldini olish: {issue.prevention}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={closeVideoModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 relative">
                  <button 
                    onClick={closeVideoModal}
                    className="absolute right-4 top-4 bg-white/20 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <h3 className="text-xl font-bold pr-10">{selectedVideo.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-clock"></i> {selectedVideo.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-tag"></i> {selectedVideo.level}
                    </span>
                  </div>
                </div>

                {/* Video Player */}
                <div className="aspect-video bg-black w-full">
                  <iframe
                    className="w-full h-full"
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Details */}
                <div className="p-6 overflow-y-auto">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Tavsif</h4>
                  <p className="text-gray-700 mb-4">{selectedVideo.description}</p>
                  
                  {/* Tags */}
                  <div className="mb-5">
                    <h4 className="text-md font-semibold text-gray-800 mb-2">Teglar</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVideo.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Related Category */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 mb-2">Kategoriya</h4>
                    <div className="flex items-center gap-2">
                      <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                        {wordVideoesData.categories.find(cat => cat.id === selectedVideo.categoryId)?.title}
                      </span>
                      <button
                        onClick={() => {
                          setActiveVideoCategory(selectedVideo.categoryId);
                          closeVideoModal();
                        }}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Shu kategoriyadagi boshqa videolar →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-200 p-4 flex items-center justify-between bg-gray-50">
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 transition-colors">
                      <i className="fas fa-share-alt"></i>
                      <span>Ulashish</span>
                    </button>
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 transition-colors">
                      <i className="fas fa-bookmark"></i>
                      <span>Saqlash</span>
                    </button>
                  </div>
                  <button
                    onClick={closeVideoModal}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Yopish
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MatnMuharririWord
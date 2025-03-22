import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleStudentData, excelTutorialData, excelFormulasData, excelAdvancedData, excelTipsData } from './dataElektronJadvallar';
import dataVideoJadvallar from "./dataVideoJadvallar";
import { FaGraduationCap, FaLightbulb, FaExclamationTriangle, FaBook, FaKeyboard } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

function ReactElektronJadvallar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [showTutorial, setShowTutorial] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [activeTab, setActiveTab] = useState('data');
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [videoSearchTerm, setVideoSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoSectionRef = useRef(null);
  
  // Modal uchun state
  const [showVideoModal, setShowVideoModal] = useState(false);
  // Ko'proq ma'lumotlar ko'rsatish uchun state
  const [showAllCategories, setShowAllCategories] = useState(false);
  // Yangi kategoriya (6) uchun state
  const [showIndustryDetails, setShowIndustryDetails] = useState(false);
  const [selectedIndustryVideo, setSelectedIndustryVideo] = useState(null);

  // Qidiruv va filtrlash funksiyasi
  const filteredData = sampleStudentData.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const gradeMatch = selectedGrade === 'all' || item.grade === selectedGrade;
    return nameMatch && gradeMatch;
  });

  // Statistikani hisoblash
  const stats = {
    totalStudents: filteredData.length,
    averageScore: (filteredData.reduce((acc, curr) => acc + curr.score, 0) / filteredData.length).toFixed(1),
    gradeDistribution: filteredData.reduce((acc, curr) => {
      acc[curr.grade] = (acc[curr.grade] || 0) + 1;
      return acc;
    }, {})
  };

  // Saralash funksiyasi
  const sortData = (key) => { 
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  // Video bo'limiga scroll qilish
  const scrollToVideoSection = () => {
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Video filtrlash funksiyasi
  const getFilteredVideos = () => {
    let filtered = dataVideoJadvallar.videos.filter(video => 
      video.categoryId === activeCategoryId
    );

    if (videoSearchTerm) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(videoSearchTerm.toLowerCase()) || 
        video.description.toLowerCase().includes(videoSearchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(videoSearchTerm.toLowerCase()))
      );
    }

    return filtered;
  };

  // Video modalini ochish
  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
    document.body.style.overflow = 'hidden'; // Scroll bo'lmasligi uchun
  };

  // Video modalini yopish
  const closeVideoModal = () => {
    setShowVideoModal(false);
    document.body.style.overflow = 'auto'; // Scrollni qaytarish
  };

  // Soha video detallarini ko'rsatish
  const showIndustryVideoDetails = (video) => {
    setSelectedIndustryVideo(video);
    setShowIndustryDetails(true);
  };

  // Soha video detallarini yopish
  const closeIndustryDetails = () => {
    setShowIndustryDetails(false);
    setSelectedIndustryVideo(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Orqaga
      </button>

      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Elektron Jadvallar
      </h1>

      <div className="mb-6 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-4 flex-1">
          <input
            type="text"
            placeholder="Ism bo'yicha qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Barcha baholar</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('data')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'data' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Ma'lumotlar
          </button>
          <button
            onClick={() => setActiveTab('tutorial')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'tutorial' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Qo'llanma
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Videodarslar
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'formulas' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Formulalar
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'tips' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Maslahatlar
          </button>
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'industries' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sohalarda qo'llanish
          </button>
        </div>
      </div>

      {activeTab === 'data' && (
        <>
          <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  {['id', 'name', 'score', 'grade'].map((key) => (
                    <th
                      key={key}
                      onClick={() => sortData(key)}
                      className="px-6 py-3 border-b cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortConfig.key === key && (
                        <span className="ml-2">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4">{item.score}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${item.grade.includes('A+') ? 'bg-green-100 text-green-800' :
                          item.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                          item.grade === 'B+' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'}`}>
                        {item.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">Jami Talabalar</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.totalStudents}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">O'rtacha Ball</h3>
              <p className="text-3xl font-bold text-green-600">{stats.averageScore}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">A+ Baholar</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {stats.gradeDistribution['A+'] || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">Eng Yuqori Ball</h3>
              <p className="text-3xl font-bold text-purple-600">
                {Math.max(...filteredData.map(item => item.score))}
              </p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'tutorial' && (
        <div className="grid gap-4">
          {excelTutorialData.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-blue-600">Qadam {step.step}:</span> {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Misol:</h4>
                {Array.isArray(step.exampleData) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {step.exampleData.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium">{item.column}:</span> {item.value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">
                    {typeof step.exampleData === 'object' ? 
                      <><span className="font-medium">{step.exampleData.column}:</span> {step.exampleData.value}</> : 
                      step.exampleData
                    }
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">⚠️ Eslatma: {step.note}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'videos' && (
        <div ref={videoSectionRef} className="space-y-8">
          {/* Asosiy video tutoriali */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={dataVideoJadvallar.mainVideoTutorial}
                title="Excel video tutorial"
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{dataVideoJadvallar.title}</h2>
              <p className="text-gray-600 mb-4">{dataVideoJadvallar.description}</p>
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <span>Muallif: {dataVideoJadvallar.author}</span>
                <span>Oxirgi yangilanish: {dataVideoJadvallar.lastUpdate}</span>
                <span>Jami videolar: {dataVideoJadvallar.statistics.totalVideos}</span>
                <span>O'rtacha reyting: {dataVideoJadvallar.statistics.averageRating}/5</span>
              </div>
            </div>
          </div>

          {/* Kurs afzalliklari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kurs afzalliklari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataVideoJadvallar.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* O'rganish yo'l xaritasi */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">O'rganish yo'l xaritasi</h2>
            <div className="space-y-6">
              {dataVideoJadvallar.learningPath.map((stage) => (
                <div key={stage.stage} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Bosqich {stage.stage}: {stage.name}
                    <span className="ml-2 text-sm text-gray-500">({stage.duration})</span>
                  </h3>
                  <div className="mt-2">
                    <h4 className="text-md font-semibold text-gray-700">Ko'nikmalar:</h4>
                    <ul className="list-disc list-inside ml-2 text-gray-600">
                      {stage.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-md font-semibold text-gray-700">Loyiha g'oyasi:</h4>
                    <p className="text-gray-600 ml-2">{stage.projectIdea}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video qidiruv va kategoriyalar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Video qidirish..."
                  value={videoSearchTerm}
                  onChange={(e) => setVideoSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {dataVideoJadvallar.categories.slice(0, showAllCategories ? dataVideoJadvallar.categories.length : 5).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeCategoryId === category.id 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
                {dataVideoJadvallar.categories.length > 5 && (
                  <button
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    {showAllCategories ? 'Kamroq ko\'rsatish' : 'Ko\'proq kategoriyalar...'}
                  </button>
                )}
              </div>
            </div>

            {/* Kategoriya tavsifi */}
            <div className="mb-6">
              {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId) && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      Daraja: {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.skillLevel}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                      Taxminiy vaqt: {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.estimatedCompletionTime}
                    </span>
                  </div>
                  {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.prerequisites.length > 0 && (
                    <div className="mb-2">
                      <span className="font-medium">Talab etiladigan bilimlar: </span>
                      {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.prerequisites.join(', ')}
                    </div>
                  )}
                  <div className="mt-2">
                    <h4 className="font-medium mb-1">Natijalar:</h4>
                    <ul className="list-disc list-inside text-gray-600 ml-2">
                      {dataVideoJadvallar.categories.find(c => c.id === activeCategoryId)?.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Video kartalar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredVideos().length > 0 ? (
                getFilteredVideos().map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img 
                        src="https://dovilearn.s3.eu-west-2.amazonaws.com/images/course-images/1639098577ms-excel-training-courses.png"
                        alt={video.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                      {video.views && (
                        <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {video.views.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{video.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>
                      <div className="flex justify-between items-center">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          video.level === 'Boshlang\'ich' ? 'bg-green-100 text-green-800' :
                          video.level === 'O\'rta' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>{video.level}</span>
                        <button
                          onClick={() => openVideoModal(video)}
                          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                        >
                          Ko'rish
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500 text-lg">Hech qanday video topilmadi</p>
                </div>
              )}
            </div>
          </div>

          {/* Mashhur videolar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Mashhur Videolar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataVideoJadvallar.videos
                .filter(video => video.views > 40000)
                .slice(0, 6)
                .map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-gray-50 rounded-lg overflow-hidden shadow flex cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => openVideoModal(video)}
                  >
                    <div className="w-1/3">
                      <img 
                        src="https://dovilearn.s3.eu-west-2.amazonaws.com/images/course-images/1639098577ms-excel-training-courses.png"
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-3">
                      <h4 className="font-medium text-gray-800 line-clamp-2 text-sm">{video.title}</h4>
                      <div className="flex items-center mt-1 text-gray-500 text-xs">
                        <span className="mr-2">{video.duration}</span>
                        <span>{video.views.toLocaleString()} ko'rilgan</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Tavsiya etilgan kurslar */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaGraduationCap className="mr-2" />
              Tavsiya Etilgan Kurslar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataVideoJadvallar.videos.slice(0, 6).map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <img 
                    src="https://dovilearn.s3.eu-west-2.amazonaws.com/images/course-images/1639098577ms-excel-training-courses.png"
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{video.description.substring(0, 100)}...</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium">{video.duration}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        video.level === "Boshlang'ich" ? "bg-green-100 text-green-800" :
                        video.level === "O'rta" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {video.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Foydali maslahatlar */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaLightbulb className="mr-2" />
              Foydali Maslahatlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataVideoJadvallar.benefits.map((tip, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-start">
                  <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ko'p uchraydigan muammolar */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaExclamationTriangle className="mr-2" />
              Ko'p Uchraydigan Muammolar
            </h2>
            <div className="space-y-4">
              {dataVideoJadvallar.videos.slice(0, 5).map((video) => (
                <div key={video.id} className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-2">{video.quiz[0].question}</h4>
                  <div className="pl-4 border-l-2 border-red-200">
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Yechim: </span>
                      {video.quiz[0].options[video.quiz[0].answer]}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Maslahat: </span>
                      {video.description.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Excel atamalar lug'ati */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaBook className="mr-2" />
              Excel Atamalar Lug'ati
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataVideoJadvallar.categories.map((category) => (
                <div key={category.id} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">{category.title}</h4>
                  <p className="text-gray-700 text-sm">{category.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {category.outcomes.slice(0, 2).map((outcome, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tez klaviatura tugmalari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaKeyboard className="mr-2" />
              Tez Klaviatura Tugmalari
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { key: "Ctrl + C", action: "Nusxa olish", description: "Tanlangan ma'lumotdan nusxa olish" },
                { key: "Ctrl + V", action: "Qo'yish", description: "Nusxa olingan ma'lumotni qo'yish" },
                { key: "Ctrl + Z", action: "Bekor qilish", description: "Oxirgi amalni bekor qilish" },
                { key: "Ctrl + Y", action: "Qaytarish", description: "Bekor qilingan amalni qaytarish" },
                { key: "Ctrl + S", action: "Saqlash", description: "Fayl o'zgarishlarini saqlash" },
                { key: "F2", action: "Tahrirlash", description: "Katakni tahrirlash rejimiga o'tish" },
                { key: "Ctrl + 1", action: "Formatlash", description: "Formatlash oynasini ochish" },
                { key: "Alt + =", action: "Avtoyig'indi", description: "Avtomatik yig'indi hisoblash" },
                { key: "Ctrl + Shift + L", action: "Filtr", description: "Filtrlash tugmalarini yoqish/o'chirish" }
              ].map((shortcut, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-mono bg-gray-200 px-2 py-1 rounded inline-block mb-2">
                    {shortcut.key}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{shortcut.action}</h4>
                  <p className="text-gray-600 text-sm">{shortcut.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikatsiya ma'lumotlari */}
          {dataVideoJadvallar.certification && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{dataVideoJadvallar.certification.title}</h2>
              <p className="text-gray-600 mb-6">{dataVideoJadvallar.certification.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sertifikatsiya darajalari</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dataVideoJadvallar.certification.levels.map((level, index) => (
                    <a 
                      key={index} 
                      href={level.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-blue-600 mb-2">{level.name}</h4>
                      <p className="text-gray-700">{level.description}</p>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sertifikatning afzalliklari</h3>
                <ul className="list-disc list-inside space-y-2">
                  {dataVideoJadvallar.certification.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tayyorgarlik materiallari</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dataVideoJadvallar.certification.prepMaterials.map((material, index) => (
                    <a 
                      key={index} 
                      href={material.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <p className="text-blue-700 font-medium">{material.title}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Excel o'rganish statistikasi */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">O'rganish Statistikasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">{dataVideoJadvallar.statistics.studentsCount.toLocaleString()}</p>
                <p className="text-gray-700">O'quvchilar soni</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-700">{dataVideoJadvallar.statistics.totalHours} soat</p>
                <p className="text-gray-700">Videolar hajmi</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-yellow-700">{dataVideoJadvallar.statistics.averageRating}</p>
                <p className="text-gray-700">O'rtacha reyting</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-700">{dataVideoJadvallar.statistics.certificatesIssued.toLocaleString()}</p>
                <p className="text-gray-700">Berilgan sertifikatlar</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-red-700">{dataVideoJadvallar.statistics.coursesCompleted.toLocaleString()}</p>
                <p className="text-gray-700">Yakunlangan kurslar</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-700 mb-2">Eng faol davlatlar:</p>
                <ul className="space-y-1">
                  {dataVideoJadvallar.statistics.topCountries.map((country, index) => (
                    <li key={index} className="text-gray-700">{country}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sohalarda qo'llanishi tab */}
      {activeTab === 'industries' && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Excel Dasturini Sohalarda Qo'llanishi</h2>
            <p className="text-gray-600 mb-8">
              Excel dasturi turli sohalarda keng qo'llaniladi. Quyida Excel dasturining turli sohalarda qanday ishlatilishi haqida ma'lumotlar keltirilgan.
              Har bir soha uchun maxsus videodars va amaliy misollar taqdim etilgan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataVideoJadvallar.videos
                .filter(video => video.categoryId === 6)
                .map((video) => (
                <div 
                  key={video.id} 
                  className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src="https://dovilearn.s3.eu-west-2.amazonaws.com/images/course-images/1639098577ms-excel-training-courses.png"
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                      {video.industry.name}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {video.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        video.level === 'Boshlang\'ich' ? 'bg-green-100 text-green-800' :
                        video.level === 'O\'rta' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>{video.level}</span>
                      <button
                        onClick={() => showIndustryVideoDetails(video)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        Batafsil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tips' && (
        <div className="space-y-8">
          {/* Klaviatura yorliqlari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Klaviatura Yorliqlari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {excelTipsData[0].tips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-mono bg-gray-200 px-2 py-1 rounded">{tip.shortcut}</span>
                  <span className="ml-3 text-gray-700">{tip.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Excel bilan ishlash maslahatlari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Excel bilan ishlash maslahatlari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {excelTipsData[1].tips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{tip.title}</h3>
                  <p className="text-gray-700">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'formulas' && (
        <div className="space-y-8">
          {/* Kategoriyalashtirilgan formulalar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Excel Formulalari va Funksiyalari</h2>
            
            {/* Formulalar kategoriyalari uchun tablar */}
            <div className="flex flex-wrap gap-2 mb-6 border-b">
              {excelFormulasData.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-t-lg transition-colors ${
                    index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
            
            {/* Aktiv kategoriya formulalari */}
            <div className="space-y-6">
              {excelFormulasData[0].formulas.map((formula, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{formula.name}</h3>
                  <p className="text-gray-700 mb-3">{formula.description}</p>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <h4 className="font-semibold mb-1">Sintaksis:</h4>
                    <code className="font-mono text-green-700 block">{formula.syntax}</code>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold mb-1">Misollar:</h4>
                    <div className="bg-gray-100 p-2 rounded">
                      {formula.example && (
                        <>
                          <p className="text-gray-700 mt-1">Misol: {formula.example.value || formula.example.range}</p>
                          <p className="text-gray-700 mt-1">Natija: {formula.example.result}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ilg'or formulalar va funksiyalar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Ilg'or Excel Funksiyalari</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {excelAdvancedData.flatMap(category => 
                category.functions.map((func, idx) => (
                  <div key={`${category.category}-${idx}`} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">{func.name}</h3>
                    <p className="text-gray-700 mb-3">{func.description}</p>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <code className="font-mono text-green-700">{func.syntax}</code>
                      <p className="mt-2 text-sm text-gray-600">Misol: {func.example}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Ko'p ishlatiladigan formulalar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Ko'p Ishlatiladigan Formulalar</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Funksiya</th>
                    <th className="px-4 py-2 border">Tavsif</th>
                    <th className="px-4 py-2 border">Misol</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { func: "SUM", desc: "Qiymatlarni jamlaydi", example: "=SUM(A1:A10)" },
                    { func: "AVERAGE", desc: "O'rtacha qiymatni hisoblaydi", example: "=AVERAGE(B1:B20)" },
                    { func: "COUNT", desc: "Kataklar sonini hisoblaydi", example: "=COUNT(C1:C15)" },
                    { func: "MAX", desc: "Eng katta qiymatni topadi", example: "=MAX(D1:D30)" },
                    { func: "MIN", desc: "Eng kichik qiymatni topadi", example: "=MIN(E1:E30)" },
                    { func: "IF", desc: "Shart tekshirish", example: "=IF(F1>10, \"Katta\", \"Kichik\")" },
                    { func: "VLOOKUP", desc: "Jadvalda vertikal qidirish", example: "=VLOOKUP(G1, A1:B10, 2, FALSE)" },
                    { func: "CONCATENATE", desc: "Matnlarni birlashtirish", example: "=CONCATENATE(A1, \" \", B1)" },
                    { func: "TODAY", desc: "Joriy sanani olish", example: "=TODAY()" },
                    { func: "PMT", desc: "To'lov miqdorini hisoblash", example: "=PMT(rate, nper, pv)" }
                  ].map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2 border font-medium">{item.func}</td>
                      <td className="px-4 py-2 border">{item.desc}</td>
                      <td className="px-4 py-2 border font-mono text-sm">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Formula yaratish qadamlari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Formula Yaratish Qadamlari</h2>
            
            <div className="space-y-4">
              {[
                { step: 1, title: "Formulani boshlash", desc: "Katakka = (tenglik) belgisini yozing. Bu Excel'ga formula kiritilayotganini bildiradi." },
                { step: 2, title: "Funksiya tanlash", desc: "Kerakli funksiyani tanlang (masalan, SUM, AVERAGE, IF). Funksiyalar formulalar menyusidan ham tanlanishi mumkin." },
                { step: 3, title: "Argumentlarni kiritish", desc: "Funksiya argumentlarini kiriting. Argumentlar kataklar, diapazonlar, matnlar yoki boshqa formulalar bo'lishi mumkin." },
                { step: 4, title: "Formulani yakunlash", desc: "Enter tugmasini bosib formulani yakunlang. Excel natijani hisoblaydi va katak ichida ko'rsatadi." }
              ].map((item) => (
                <div key={item.step} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Matematika va statistika formulalari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Matematika va statistika formulalari</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "SUMIF", desc: "Shartga mos qiymatlarni jamlaydi", syntax: "=SUMIF(range, criteria, [sum_range])" },
                { name: "COUNTIF", desc: "Shartga mos kataklarni sanaydi", syntax: "=COUNTIF(range, criteria)" },
                { name: "AVERAGEIF", desc: "Shartga mos qiymatlarning o'rtachasini hisoblaydi", syntax: "=AVERAGEIF(range, criteria, [average_range])" },
                { name: "SUMPRODUCT", desc: "Massivlar ko'paytmasini hisoblaydi", syntax: "=SUMPRODUCT(array1, [array2], ...)" },
                { name: "RANK", desc: "Qiymatning tartib raqamini aniqlaydi", syntax: "=RANK(number, ref, [order])" },
                { name: "STDEV", desc: "Standart chetlanishni hisoblaydi", syntax: "=STDEV(number1, [number2], ...)" },
                { name: "CORREL", desc: "Korelyatsiya koeffitsientini hisoblaydi", syntax: "=CORREL(array1, array2)" },
                { name: "FORECAST", desc: "Kelajakdagi qiymatni bashorat qiladi", syntax: "=FORECAST(x, known_y's, known_x's)" },
                { name: "PERCENTILE", desc: "Ma'lumotlarning foizli nuqtasini topadi", syntax: "=PERCENTILE(array, k)" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-bold text-blue-700">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <code className="text-xs font-mono bg-gray-200 p-1 rounded block">{item.syntax}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video modali */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto">
            {/* Modal header */}
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">{selectedVideo.title}</h3>
                <button 
                  onClick={closeVideoModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Modal body */}
            <div className="p-4">
              {/* Video o'rniga "Tayyorlanmoqda" xabari */}
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Video darslik tayyorlanmoqda</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Hurmatli foydalanuvchi, video darsliklar tez orada yuklanadi. 
                    Iltimos, keyinroq qayta urinib ko'ring.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-blue-500 mr-2" />
                      <span>Professional sifatli kontentlar</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-blue-500 mr-2" />
                      <span>Amaliy mashg'ulotlar bilan</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-blue-500 mr-2" />
                      <span>Interaktiv testlar</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video ma'lumotlari */}
              <div className="mb-4">
                <p className="text-gray-600 mb-3">{selectedVideo.description}</p>
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    selectedVideo.level === "Boshlang'ich" ? "bg-green-100 text-green-800" :
                    selectedVideo.level === "O'rta" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {selectedVideo.level}
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-800">
                    {selectedVideo.duration}
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-800">
                    {new Date(selectedVideo.publishDate).toLocaleDateString('uz-UZ')}
                  </div>
                </div>
              </div>

              {/* Teglar */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Teglar:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resurslar */}
              {selectedVideo.resources && selectedVideo.resources.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-gray-800 mb-3">Qo'shimcha resurslar:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedVideo.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 bg-white rounded hover:bg-blue-50 transition-colors"
                      >
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">{resource.type}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Modal footer */}
            <div className="p-4 border-t flex justify-between items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Ulashish
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Saqlash
                </button>
              </div>
              <button 
                onClick={closeVideoModal}
                className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Soha video detallar modali */}
      {showIndustryDetails && selectedIndustryVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto">
            {/* Modal header */}
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">{selectedIndustryVideo.title}</h3>
                <button 
                  onClick={closeIndustryDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Modal body */}
            <div className="p-4">
              {/* Video iframe o'rniga rasm */}
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="https://dovilearn.s3.eu-west-2.amazonaws.com/images/course-images/1639098577ms-excel-training-courses.png"
                  alt={selectedIndustryVideo.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              {/* Soha ma'lumotlari */}
              <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">{selectedIndustryVideo.industry.name} sohasida Excel</h4>
                <p className="text-gray-600 mb-4">{selectedIndustryVideo.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Sohadagi mutaxassislar:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustryVideo.industry.professionals.map((prof, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded text-gray-700 text-sm">
                        {prof}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Asosiy ko'nikmalar:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedIndustryVideo.industry.keySkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Amaliy misollar */}
              {selectedIndustryVideo.realWorldExamples && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Amaliy misollar:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedIndustryVideo.realWorldExamples.map((example, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">{example.title}</h5>
                        <p className="text-gray-600">{example.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Shablonlar */}
              {selectedIndustryVideo.templates && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Tayyor shablonlar:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedIndustryVideo.templates.map((template, index) => (
                      <a 
                        key={index} 
                        href={template.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center text-center"
                      >
                        <svg className="w-6 h-6 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-green-800">{template.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Modal footer */}
            <div className="p-4 border-t flex justify-end">
              <button 
                onClick={closeIndustryDetails}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReactElektronJadvallar;
import React, { useState, useEffect } from 'react';

function AmaliyotlarPage() {
  const [filter, setFilter] = useState('Barchasi');
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedAmaliyot, setSelectedAmaliyot] = useState(null);

  const amaliyotlar = [
    // Frontend amaliyotlari
    {
      id: 1,
      title: 'HTML va CSS asoslari',
      level: 'Boshlang\'ich',
      duration: '2 hafta',
      tasks: 10,
      image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890',
      category: 'Frontend',
      description: 'Web sahifalarni yaratishning asosiy texnologiyalari',
      progress: 85,
      students: 1234,
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      lastUpdated: '2024-02-15'
    },
    {
      id: 2,
      title: 'JavaScript asoslari',
      level: 'Boshlang\'ich',
      duration: '3 hafta',
      tasks: 15,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
      category: 'Frontend',
      description: 'Dinamik web ilovalar yaratish',
      progress: 75,
      students: 987,
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Events'],
      lastUpdated: '2024-02-10'
    },

    // Backend amaliyotlari
    {
      id: 3,
      title: 'Node.js va Express',
      level: 'O\'rta',
      duration: '4 hafta',
      tasks: 12,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
      category: 'Backend',
      description: 'Server tomonini yaratish va API ishlab chiqish',
      progress: 65,
      students: 756,
      technologies: ['Node.js', 'Express.js', 'REST API', 'JWT'],
      lastUpdated: '2024-02-01'
    },
    {
      id: 4,
      title: 'Ma\'lumotlar bazasi bilan ishlash',
      level: 'O\'rta',
      duration: '3 hafta',
      tasks: 8,
      image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011',
      category: 'Backend',
      description: 'MongoDB va PostgreSQL bilan ishlash',
      progress: 70,
      students: 543,
      technologies: ['MongoDB', 'PostgreSQL', 'Mongoose', 'SQL'],
      lastUpdated: '2024-01-25'
    },

    // FullStack amaliyotlari
    {
      id: 5,
      title: 'MERN Stack loyiha',
      level: 'Yuqori',
      duration: '6 hafta',
      tasks: 20,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      category: 'FullStack',
      description: 'To\'liq stack web dastur yaratish',
      progress: 60,
      students: 432,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      lastUpdated: '2024-02-20'
    },
    {
      id: 6,
      title: 'E-commerce platforma',
      level: 'Yuqori',
      duration: '8 hafta',
      tasks: 25,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      category: 'FullStack',
      description: 'Online do\'kon yaratish loyihasi',
      progress: 55,
      students: 321,
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      lastUpdated: '2024-02-18'
    },

    // Mobile amaliyotlari
    {
      id: 7,
      title: 'React Native asoslari',
      level: 'O\'rta',
      duration: '5 hafta',
      tasks: 15,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      category: 'Mobile',
      description: 'Cross-platform mobil ilovalar yaratish',
      progress: 80,
      students: 654,
      technologies: ['React Native', 'JavaScript', 'Mobile UI', 'APIs'],
      lastUpdated: '2024-02-05'
    },
    {
      id: 8,
      title: 'Flutter bilan mobil dasturlash',
      level: 'O\'rta',
      duration: '6 hafta',
      tasks: 18,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      category: 'Mobile',
      description: 'Flutter framework bilan iOS va Android uchun ilovalar',
      progress: 70,
      students: 543,
      technologies: ['Flutter', 'Dart', 'Material Design', 'Firebase'],
      lastUpdated: '2024-01-28'
    },

    // Design amaliyotlari
    {
      id: 9,
      title: 'UI/UX dizayn asoslari',
      level: 'Boshlang\'ich',
      duration: '4 hafta',
      tasks: 12,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      category: 'Design',
      description: 'Foydalanuvchi interfeysini loyihalash',
      progress: 90,
      students: 876,
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      lastUpdated: '2024-02-12'
    },
    {
      id: 10,
      title: 'Web dizayn portfoliosi',
      level: 'Yuqori',
      duration: '5 hafta',
      tasks: 10,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
      category: 'Design',
      description: 'Professional web dizayn portfoliosini yaratish',
      progress: 85,
      students: 432,
      technologies: ['Adobe Creative Suite', 'Figma', 'WordPress', 'HTML/CSS'],
      lastUpdated: '2024-02-08'
    }
  ];

  const categories = [
    { id: 'all', name: 'Barchasi', icon: '🎯' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'fullstack', name: 'FullStack', icon: '💻' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'design', name: 'Design', icon: '🎯' }
  ];

  useEffect(() => {
    // Loading animatsiyasi
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredAmaliyotlar = filter === 'Barchasi' 
    ? amaliyotlar 
    : amaliyotlar.filter(item => item.category === filter);

  // Amaliyotni boshlash funksiyasi
  const handleStartAmaliyot = (amaliyot) => {
    setSelectedAmaliyot(amaliyot);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Amaliy mashg'ulotlar</h1>
          <p className="mt-2 text-gray-600">Professional darajadagi amaliy topshiriqlar</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Kategoriyalar</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.name)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                  ${filter === category.name
                    ? 'bg-blue-600 text-white shadow-blue-200 shadow-lg transform -translate-y-0.5'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'}
                  border border-gray-200
                `}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Amaliyotlar Grid */}
        {isLoading ? (
          // Loading state
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-xl p-4 shadow animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAmaliyotlar.map(amaliyot => (
              <div 
                key={amaliyot.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={amaliyot.image}
                    alt={amaliyot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className={`
                      ${amaliyot.level === 'Boshlang\'ich' ? 'bg-green-500' : 
                        amaliyot.level === 'O\'rta' ? 'bg-yellow-500' : 'bg-red-500'} 
                      text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                      {amaliyot.level}
                    </span>
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {amaliyot.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                      {amaliyot.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                      </svg>
                      {amaliyot.students}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {amaliyot.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {amaliyot.description}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-blue-600 font-medium">{amaliyot.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${amaliyot.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-gray-600 text-sm">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                      </svg>
                      {amaliyot.tasks} vazifa
                    </span>
                    <button 
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 hover:shadow-blue-200"
                      onClick={() => handleStartAmaliyot(amaliyot)}
                    >
                      Boshlash
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filteredAmaliyotlar.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Hech qanday amaliyot topilmadi</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Ushbu kategoriya bo'yicha hozircha amaliyotlar mavjud emas. Iltimos, boshqa kategoriyani tanlang.
            </p>
          </div>
        )}
      </div>

      {/* Boshlash modali */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Modal backdrop */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" 
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal content */}
            <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Texnik ishlar olib borilyapti
                </h3>
                <p className="text-blue-100">
                  Bu bo'lim tez orada ishga tushadi
                </p>
              </div>

              {/* Modal body */}
              <div className="px-6 py-4">
                <div className="bg-blue-50 rounded-xl p-4 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">
                        Yangilanish jarayonida
                      </h4>
                      <p className="mt-1 text-sm text-blue-700">
                        Biz platformani yanada yaxshilash uchun texnik ishlarni olib boryapmiz. Tez orada yangi imkoniyatlar bilan qaytamiz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Tayyorlanish jarayoni</span>
                    <span className="text-blue-600 font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Yangilangan interfeys</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Yangi amaliy topshiriqlar</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interaktiv o'quv materiallari</span>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Tez orada...
                </span>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 hover:shadow-blue-200"
                >
                  Tushundim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmaliyotlarPage;
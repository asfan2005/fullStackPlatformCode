import React, { useState, useEffect, useMemo } from 'react';

function QoshimchaMateriallar() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadingId, setDownloadingId] = useState(null);
  const [showTip, setShowTip] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [email, setEmail] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [requestType, setRequestType] = useState('book');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  // Kategoriyalar - video darslar olib tashlandi
  const categories = [
    { id: 'all', name: 'Barcha materiallar', icon: '📚' },
    { id: 'books', name: 'Kitoblar', icon: '📖' },
    { id: 'presentations', name: 'Taqdimotlar', icon: '📊' },
    { id: 'templates', name: 'Shablonlar', icon: '📝' },
    { id: 'cheatsheets', name: 'Shpargalkalar', icon: '📋' },
  ];

  // Qo'shimcha materiallar ma'lumotlari - video darslar olib tashlandi
  const materialsList = [
    {
      id: 1,
      title: "JavaScript asoslari",
      description: "JavaScript dasturlash tilining asosiy tushunchalari va sintaksisi haqida to'liq qo'llanma",
      category: "books",
      author: "Asfandiyor To'roqulov",
      date: "2023-05-15",
      size: "8.5 MB",
      format: "PDF",
      downloadCount: 1245,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Node.js va Express.js asoslari",
      description: "Backend dasturlash uchun Node.js va Express.js frameworklari bo'yicha qo'llanma",
      category: "books",
      author: "Jamshid Nurmatov",
      date: "2023-04-10",
      size: "6.2 MB",
      format: "PDF",
      downloadCount: 932,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      link: "#"
    },
    {
      id: 4,
      title: "UI/UX dizayn asoslari",
      description: "Foydalanuvchi interfeysini loyihalash va foydalanuvchi tajribasini yaxshilash bo'yicha taqdimot",
      category: "presentations",
      author: "Malika Karimova",
      date: "2023-07-05",
      size: "15.8 MB",
      format: "PPTX",
      downloadCount: 654,
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
      link: "#"
    },
    {
      id: 5,
      title: "Web sayt shablonlari to'plami",
      description: "Turli yo'nalishdagi web saytlar uchun HTML/CSS shablonlar to'plami",
      category: "templates",
      author: "Nilufar Sobirova",
      date: "2023-03-25",
      size: "45.2 MB",
      format: "ZIP",
      downloadCount: 1876,
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      link: "#",
      featured: true
    },
    {
      id: 7,
      title: "Data Science va Machine Learning asoslari",
      description: "Data Science va Machine Learning sohasiga kirish uchun asosiy tushunchalar va amaliy misollar",
      category: "books",
      author: "Sevara Yusupova",
      date: "2023-09-01",
      size: "12.4 MB",
      format: "PDF",
      downloadCount: 765,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "#"
    },
    {
      id: 8,
      title: "Figma dizayn dasturi bilan ishlash",
      description: "Figma dasturida UI/UX dizayn yaratish bo'yicha to'liq qo'llanma",
      category: "presentations",
      author: "Malika Karimova",
      date: "2023-07-20",
      size: "18.5 MB",
      format: "PDF",
      downloadCount: 892,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
      link: "#"
    },
    {
      id: 9,
      title: "Portfolio web sayt shabloni",
      description: "Shaxsiy portfolio uchun zamonaviy va responsive web sayt shabloni",
      category: "templates",
      author: "Nilufar Sobirova",
      date: "2023-06-15",
      size: "22.7 MB",
      format: "ZIP",
      downloadCount: 1432,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      link: "#"
    },
    {
      id: 10,
      title: "CSS Grid va Flexbox shpargalkasi",
      description: "CSS Grid va Flexbox xususiyatlarini tez eslab qolish uchun vizual qo'llanma",
      category: "cheatsheets",
      author: "Asfandiyor To'roqulov",
      date: "2023-08-05",
      size: "3.2 MB",
      format: "PDF",
      downloadCount: 2145,
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      link: "#",
      featured: true
    },
    {
      id: 11,
      title: "Git buyruqlari shpargalkasi",
      description: "Git versiya boshqaruv tizimining eng ko'p ishlatiladigan buyruqlari to'plami",
      category: "cheatsheets",
      author: "Jamshid Nurmatov",
      date: "2023-07-12",
      size: "2.8 MB",
      format: "PDF",
      downloadCount: 1876,
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
      link: "#"
    },
    {
      id: 12,
      title: "React Hooks shpargalkasi",
      description: "React Hooks API uchun tez ma'lumotnoma va misollar",
      category: "cheatsheets",
      author: "Asfandiyor To'roqulov",
      date: "2023-09-18",
      size: "4.1 MB",
      format: "PDF",
      downloadCount: 1243,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      link: "#"
    }
  ];

  // Materiallarni yuklash simulyatsiyasi
  useEffect(() => {
    const timer = setTimeout(() => {
      setMaterials(materialsList);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Materiallarni filtrlash - useMemo bilan optimizatsiya
  const filteredMaterials = useMemo(() => {
    return materials.filter(material => {
      const matchesCategory = activeCategory === 'all' || material.category === activeCategory;
      const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            material.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [materials, activeCategory, searchQuery]);

  // Kategoriya bo'yicha materiallarni filtrlash
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Kategoriya o'zgartirilganda sahifani yuqoriga aylantirish
    window.scrollTo({
      top: document.querySelector('.materiallar-section').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  // Kategoriya sarlavhasini olish
  const getCategoryTitle = () => {
    if (activeCategory === 'all') return 'Barcha materiallar';
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.name : 'Materiallar';
  };

  // Featured materiallar
  const featuredMaterials = useMemo(() => {
    return materials.filter(material => material.featured);
  }, [materials]);

  // Yuklab olish simulyatsiyasi
  const handleDownload = (id) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      // Yuklab olish tugagandan so'ng, materiallar sonini oshirish
      setMaterials(materials.map(material => 
        material.id === id 
          ? {...material, downloadCount: material.downloadCount + 1} 
          : material
      ));
      // Maslahat ko'rsatish
      if (Math.random() > 0.5 && !showTip) {
        setShowTip(true);
        setTimeout(() => setShowTip(false), 5000);
      }
    }, 2000);
  };

  // Obuna bo'lish funksiyasi
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Obuna bo'lish simulyatsiyasi
    setTimeout(() => {
      setSubscribeSuccess(true);
      setEmail('');
      setTimeout(() => {
        setShowSubscribeModal(false);
        setSubscribeSuccess(false);
      }, 2000);
    }, 1500);
  };

  // Material so'rash funksiyasi
  const handleRequest = (e) => {
    e.preventDefault();
    // So'rov yuborish simulyatsiyasi
    setTimeout(() => {
      setRequestSuccess(true);
      setRequestDetails('');
      setRequestType('book');
      setTimeout(() => {
        setShowRequestModal(false);
        setRequestSuccess(false);
      }, 2000);
    }, 1500);
  };

  // Sana formatini o'zgartirish
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

  // Fayl hajmini formatlash
  const formatFileSize = (size) => {
    return size;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Sarlavha */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Qo'shimcha <span className="text-indigo-600">Materiallar</span>
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
          O'rganish jarayoningizni yanada samaraliroq qilish uchun foydali resurslar to'plami
        </p>
      </div>

      {/* Qidiruv va Filter - Tepaga ko'chirildi */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                placeholder="Material nomi, tavsifi yoki muallif bo'yicha qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mashhur materiallar */}
      {!isLoading && featuredMaterials.length > 0 && (
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Mashhur materiallar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMaterials.map((material) => (
              <div 
                key={material.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-indigo-100 transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x200?text=Rasm+topilmadi";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500 text-white text-sm font-medium">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Mashhur
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-indigo-600/90 text-white text-sm font-medium mb-2">
                      {categories.find(cat => cat.id === material.category)?.icon} {categories.find(cat => cat.id === material.category)?.name}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {material.author}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {material.format} • {formatFileSize(material.size)}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {material.downloadCount.toLocaleString()} marta yuklangan
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <button
                    onClick={() => handleDownload(material.id)}
                    disabled={downloadingId === material.id}
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      downloadingId === material.id
                        ? 'bg-indigo-100 text-indigo-500 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {downloadingId === material.id ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Yuklanmoqda...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Yuklab olish
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Materiallar ro'yxati */}
      <div className="max-w-7xl mx-auto materiallar-section">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            {categories.find(cat => cat.id === activeCategory)?.icon} {getCategoryTitle()}
          </h2>
          <div className="text-gray-500 text-sm">
            {filteredMaterials.length} ta material
          </div>
        </div>

        {isLoading ? (
          // Yuklash animatsiyasi
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredMaterials.length === 0 ? (
          // Natija topilmadi
          <div className="text-center py-20 bg-white rounded-2xl shadow-md">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Natija topilmadi</h3>
            <p className="mt-2 text-gray-500">Bu kategoriyada hozircha materiallar mavjud emas yoki qidiruv so'roviga mos materiallar topilmadi.</p>
            <button 
              onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Barcha materiallarni ko'rish
            </button>
          </div>
        ) : (
          // Materiallar ro'yxati
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material) => (
              <div 
                key={material.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x200?text=Rasm+topilmadi";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-indigo-600/90 text-white text-sm font-medium mb-2">
                      {categories.find(cat => cat.id === material.category)?.icon} {categories.find(cat => cat.id === material.category)?.name}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {material.author}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(material.date)}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {material.format} • {formatFileSize(material.size)}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {material.downloadCount.toLocaleString()} marta yuklangan
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <button
                    onClick={() => handleDownload(material.id)}
                    disabled={downloadingId === material.id}
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      downloadingId === material.id
                        ? 'bg-indigo-100 text-indigo-500 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {downloadingId === material.id ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Yuklanmoqda...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Yuklab olish
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Maslahat xabarnomasi */}
      {showTip && (
        <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-xl p-4 max-w-md border-l-4 border-indigo-500 animate-fade-in z-30">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">Foydali maslahat</h3>
              <div className="mt-1 text-sm text-gray-600">
                <p>Yuklab olgan materiallaringizni "Mening materiallarim" bo'limida saqlashingiz mumkin. Bu keyinchalik ularni tezroq topishga yordam beradi.</p>
              </div>
              <div className="mt-3 flex">
                <button
                  type="button"
                  onClick={() => setShowTip(false)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Tushundim
                </button>
              </div>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={() => setShowTip(false)}
                  className="inline-flex rounded-md p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Yopish</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ko'proq materiallar */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Yanada ko'proq materiallar kerakmi?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-3xl mx-auto">
            Biz har hafta yangi materiallar qo'shib boramiz. Yangi materiallar haqida xabardor bo'lish uchun platformamizga obuna bo'ling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowSubscribeModal(true)}
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Obuna bo'lish
            </button>
            <button 
              onClick={() => setShowRequestModal(true)}
              className="bg-indigo-700 text-white hover:bg-indigo-800 px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Materiallar so'rash
            </button>
          </div>
        </div>
      </div>

      {/* Obuna bo'lish modali */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => !subscribeSuccess && setShowSubscribeModal(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => !subscribeSuccess && setShowSubscribeModal(false)}
                >
                  <span className="sr-only">Yopish</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {subscribeSuccess ? (
                  <div className="text-center py-6">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Obuna muvaffaqiyatli yaratildi!</h3>
                    <p className="mt-2 text-gray-500">
                      Yangi materiallar haqida xabarnomalarni olish uchun obuna bo'ldingiz. Rahmat!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                          Yangi materiallar haqida xabardor bo'ling
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Yangi materiallar qo'shilganda xabarnoma olish uchun elektron pochta manzilingizni kiriting.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <form onSubmit={handleSubscribe}>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Elektron pochta
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                              placeholder="sizning@email.uz"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                required
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="terms" className="font-medium text-gray-700">
                                Foydalanish shartlariga roziman
                              </label>
                              <p className="text-gray-500">Biz sizning ma'lumotlaringizni hech qachon uchinchi shaxslarga bermayiz.</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Obuna bo'lish
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={() => setShowSubscribeModal(false)}
                          >
                            Bekor qilish
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Material so'rash modali */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => !requestSuccess && setShowRequestModal(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => !requestSuccess && setShowRequestModal(false)}
                >
                  <span className="sr-only">Yopish</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {requestSuccess ? (
                  <div className="text-center py-6">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">So'rovingiz qabul qilindi!</h3>
                    <p className="mt-2 text-gray-500">
                      Sizning so'rovingiz muvaffaqiyatli qabul qilindi. Tez orada javob beramiz.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                          Material so'rash
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Qanday material kerakligini bizga aytib bering. Biz uni tez orada qo'shamiz.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <form onSubmit={handleRequest}>
                        <div>
                          <label htmlFor="request-type" className="block text-sm font-medium text-gray-700">
                            Material turi
                          </label>
                          <div className="mt-1">
                            <select
                              id="request-type"
                              name="request-type"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                              value={requestType}
                              onChange={(e) => setRequestType(e.target.value)}
                            >
                              <option value="book">Kitob</option>
                              <option value="presentation">Taqdimot</option>
                              <option value="template">Shablon</option>
                              <option value="cheatsheet">Shpargalka</option>
                              <option value="other">Boshqa</option>
                            </select>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="request-details" className="block text-sm font-medium text-gray-700">
                            Batafsil ma'lumot
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="request-details"
                              name="request-details"
                              rows="4"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                              placeholder="Qanday material kerakligini batafsil yozing..."
                              required
                              value={requestDetails}
                              onChange={(e) => setRequestDetails(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Elektron pochta (ixtiyoriy)
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                              placeholder="sizning@email.uz"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="mt-1 text-xs text-gray-500">Material tayyor bo'lganda xabar berish uchun</p>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            So'rov yuborish
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={() => setShowRequestModal(false)}
                          >
                            Bekor qilish
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ma'lumot */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-2xl shadow-md p-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0 bg-indigo-100 rounded-2xl p-4">
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Qo'shimcha materiallar haqida</h3>
            <p className="text-gray-600 mb-4">
              Ushbu bo'limda siz o'quv jarayoningizni yanada samaraliroq qilish uchun foydali resurslarni topishingiz mumkin. 
              Kitoblar, taqdimotlar, shablonlar va shpargalkalar - bularning barchasi sizning bilim va ko'nikmalaringizni 
              oshirishga yordam beradi.
            </p>
            <p className="text-gray-600">
              Agar sizda biror material bo'yicha savollar yoki takliflar bo'lsa, iltimos, bizga murojaat qiling. 
              Biz doimo yangi va foydali materiallarni qo'shib boramiz.
            </p>
          </div>
        </div>
      </div>

      {/* Tez-tez so'raladigan savollar */}
      <div className="max-w-7xl mx-auto mt-16 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Tez-tez so'raladigan savollar</h2>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Materiallarni qanday yuklab olaman?</h3>
              <p className="text-gray-600">
                Materiallarni yuklab olish uchun kerakli materialning kartochkasidagi "Yuklab olish" tugmasini bosing. 
                Fayl avtomatik ravishda yuklab olinadi.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Materiallar bepulmi?</h3>
              <p className="text-gray-600">
                Ha, barcha materiallar platformamiz a'zolari uchun bepul. Siz faqat ro'yxatdan o'tgan bo'lishingiz kerak.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Yangi materiallar qachon qo'shiladi?</h3>
              <p className="text-gray-600">
                Biz har hafta yangi materiallar qo'shib boramiz. Yangi materiallar haqida xabardor bo'lish uchun 
                platformamizga obuna bo'ling yoki ijtimoiy tarmoqlardagi sahifalarimizni kuzatib boring.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">O'zim material taklif qilsam bo'ladimi?</h3>
              <p className="text-gray-600">
                Albatta! Agar sizda foydali materiallar bo'lsa va ularni boshqalar bilan baham ko'rmoqchi bo'lsangiz, 
                bizga murojaat qiling. Biz sizning materiallaringizni ko'rib chiqamiz va platformaga qo'shamiz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-gray-200 pt-8 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} O'quv Platformasi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
              <span className="sr-only">Telegram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.321.012.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Dizayn elementlari - dekorativ qism */}
      <div className="max-w-7xl mx-auto relative h-full overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-8 right-32 w-48 h-48 bg-purple-100 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 left-1/2 w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default QoshimchaMateriallar;
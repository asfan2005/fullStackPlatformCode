import React, { useState } from 'react';

const PremiumCoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  // Course data with real HTTPS image URLs
  const courses = [
    {
      id: 1,
      title: "Web Dasturlash To'liq Kurs",
      importance: "Eng ko'p sotilgan",
      price: 450000,
      originalPrice: 650000,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      category: "development",
      level: "Yuqori daraja",
      modules: 15,
      students: 3450,
      instructor: "Abdulloh Yusupov"
    },
    {
      id: 2,
      title: "JavaScript & React Professional",
      importance: "Eng ommabop",
      price: 550000,
      originalPrice: 750000,
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      category: "development",
      level: "O'rta daraja",
      modules: 18,
      students: 5678,
      instructor: "Sardor Muhammadjonov"
    },
    {
      id: 3,
      title: "UI/UX Dizayn Asoslari",
      importance: "Trend",
      price: 400000,
      originalPrice: 600000,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjB1eHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      category: "design",
      level: "Barcha darajalar",
      modules: 12,
      students: 2345,
      instructor: "Malika Rahimova"
    },
    {
      id: 4,
      title: "Mobil Ilovalar Yaratish",
      importance: "Yangi kurs",
      price: 500000,
      originalPrice: 700000,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      category: "development",
      level: "O'rta daraja",
      modules: 16,
      students: 1876,
      instructor: "Jamshid Nurmatov"
    },
    {
      id: 5,
      title: "Raqamli Marketing Strategiyasi",
      importance: "Yuqori talab",
      price: 350000,
      originalPrice: 500000,
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      category: "marketing",
      level: "Boshlang'ich",
      modules: 10,
      students: 3210,
      instructor: "Nilufar Zokirova"
    },
    {
      id: 6,
      title: "Python Dasturlash - Professional",
      importance: "Eng yuqori reyting",
      price: 600000,
      originalPrice: 800000,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      category: "development",
      level: "Yuqori daraja",
      modules: 20,
      students: 2789,
      instructor: "Davron Turdiyev"
    },
    {
      id: 7,
      title: "Adobe Photoshop - Professional",
      importance: "Sertifikatsiya",
      price: 400000,
      originalPrice: 550000,
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9zaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      category: "design",
      level: "O'rta daraja",
      modules: 14,
      students: 1932,
      instructor: "Gulnora Karimova"
    },
    {
      id: 8,
      title: "Data Science va Analitika",
      importance: "Karyera yo'nalishi",
      price: 650000,
      originalPrice: 850000,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      category: "data",
      level: "Yuqori daraja",
      modules: 22,
      students: 2156,
      instructor: "Akmal Rahimov"
    }
  ];

  const categories = [
    { id: 'all', name: 'Barcha Kurslar' },
    { id: 'development', name: 'Dasturlash' },
    { id: 'design', name: 'Dizayn' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'data', name: 'Data Science' }
  ];

  // Filter and sort courses
  const getFilteredAndSortedCourses = () => {
    let filtered = courses;
    
    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'popular':
        return filtered.sort((a, b) => b.students - a.students);
      default:
        return filtered;
    }
  };

  const getDiscountPercentage = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  // Price formatting function
  const formatPrice = (price) => {
    return price.toLocaleString('uz-UZ', { 
      style: 'currency', 
      currency: 'UZS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  // Modal ochish funksiyasi
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  // Modalni yopish funksiyasi
  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  // Xabardor qilish funksiyasi
  const handleNotify = () => {
    setShowNotification(true);
    closeModal();
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Modal komponenti
  const CourseModal = () => {
    if (!showModal || !selectedCourse) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-start justify-center min-h-screen pt-[500px] px-4 pb-20 text-center sm:block sm:p-0">
          {/* Modal backdrop */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>

          {/* Modal panel */}
          <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-2xl sm:w-full relative">
            {/* Close button - yangilangan */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300 group"
            >
              <svg 
                className="w-6 h-6 text-gray-600 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.5" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal header with image */}
            <div className="relative h-64">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>

            {/* Modal content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">
                  {selectedCourse.importance}
                </span>
              </div>

              {/* Coming soon message */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <svg className="w-12 h-12 text-indigo-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Tez Orada</h4>
                    <p className="text-gray-600">
                      Ushbu kurs hozirda tayyorlanmoqda. Tez orada o'qishni boshlash mumkin bo'ladi!
                    </p>
                  </div>
                </div>
              </div>

              {/* Course details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">O'qituvchi</p>
                  <p className="font-medium text-gray-900">{selectedCourse.instructor}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Daraja</p>
                  <p className="font-medium text-gray-900">{selectedCourse.level}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Modullar</p>
                  <p className="font-medium text-gray-900">{selectedCourse.modules} ta</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">O'quvchilar</p>
                  <p className="font-medium text-gray-900">{selectedCourse.students.toLocaleString()} ta</p>
                </div>
              </div>

              {/* Price and action - updated */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 p-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                    {formatPrice(selectedCourse.price)}
                  </span>
                  {selectedCourse.originalPrice > selectedCourse.price && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(selectedCourse.originalPrice)}
                    </span>
                  )}
                </div>
                <button 
                  onClick={handleNotify}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Xabardor qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Notification komponenti
  const Notification = () => {
    if (!showNotification) return null;

    return (
      <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-fade-in-up">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Sizni tez orada xabardor qilamiz!</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      {/* Header & Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Premium Kurslar
        </h1>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between">
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Kurslarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
            <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white"
          >
            <option value="default">Saralash</option>
            <option value="price-low">Narx: Arzondan</option>
            <option value="price-high">Narx: Qimmatdan</option>
            <option value="popular">Ommabop</option>
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredAndSortedCourses().map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              onClick={() => handleCourseClick(course)}
            >
              <div className="relative">
                <img
                  className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105"
                  src={course.image}
                  alt={course.title}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white shadow-lg backdrop-blur-sm">
                    {course.importance}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white shadow-lg backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>
                {course.originalPrice > course.price && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white shadow-lg backdrop-blur-sm">
                      {getDiscountPercentage(course.originalPrice, course.price)}% OFF
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-white font-medium text-sm backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full">
                    {course.instructor}
                  </span>
                  <span className="text-white text-sm backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full">
                    {course.students.toLocaleString()} o'quvchi
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    {course.modules} ta modul
                  </span>
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                      {formatPrice(course.price)}
                    </span>
                    {course.originalPrice > course.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(course.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <button 
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      hoveredCourse === course.id 
                        ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg scale-105' 
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    }`}
                  >
                    Kursni Boshlash
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CourseModal />
      
      {/* Notification */}
      <Notification />
    </div>
  );
};

// Add this CSS to your styles
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.3s ease-out;
  }
`;

export default PremiumCoursesPage;
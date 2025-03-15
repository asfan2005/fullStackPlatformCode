import React, { useState, useMemo, useCallback } from 'react';

const ShaxsiyMentorlik = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const mentors = [
    {
      id: 1,
      name: "To'roqulov Asfandiyor",
      specialization: "Full Stack Dasturlash | Platformaning Asoschisi",
      expertise: [
        "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js",
        "Next.js", "TypeScript", "Redux", "PostgreSQL", "AWS",
        "Docker", "CI/CD", "Microservices", "System Design"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5.0,
      reviews: 248,
      monthlyRate: 500,
      yearlyRate: 50000000,
      priceNote: "Shaxsiy mentorlik dasturi",
      availability: "Dushanba - Shanba",
      experience: "6+ yil",
      category: "development",
      students: 320,
      languages: ["O'zbek", "Rus", "Ingliz"],
      description: "BuxDU va BuxIU da o'qituvchi, 100+ dan ortiq loyihalar muallifi, FAANG kompaniyalari bilan hamkorlikda ishlovchi Full Stack dasturchi. Platformaning asoschisi va bosh dasturchisi.",
      achievements: [
        "BuxDU - Axborot texnologiyalari kafedrasi o'qituvchisi",
        "BuxIU - Dasturlash fanlari bo'yicha mentor",
        "AWS Certified Developer",
        "MongoDB Certified Developer",
        "GitHub Star Contributor",
        "O'zbekistondagi eng yirik IT loyihalar muallifi",
        "500+ dan ortiq talabalar tayyorlagan"
      ],
      projects: [
        "O'quv platformasi",
        "Elektron kutubxona tizimi",
        "Online to'lov tizimlari",
        "Talabalar portali",
        "E-commerce platformasi",
        "CRM tizimi"
      ],
      socialMedia: {
        telegram: "@asfan_001",
        github: "github.com/asfandiyor",
        linkedin: "linkedin.com/in/asfandiyor"
      }
    },
    {
      id: 2,
      name: "Malika Karimova",
      specialization: "UI/UX va Product Dizayn",
      expertise: [
        "Figma", "Adobe XD", "Web Dizayn", 
        "Mobile UI", "Design Systems",
        "User Research", "Prototyping",
        "Adobe Photoshop", "Adobe Illustrator",
        "Motion Design"
      ],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 4.8,
      reviews: 129,
      monthlyRate: 300,
      yearlyRate: 30000000,
      availability: "Moslashuvchan",
      experience: "5 yil",
      category: "design",
      students: 98,
      languages: ["O'zbek", "Ingliz"],
      description: "Google va Amazonning mahalliy dizayn bo'limida ishlagan, 50+ dan ortiq loyihalar muallifi",
      achievements: [
        "Adobe Certified Expert",
        "Google UX Design Certificate",
        "Behance Featured Artist",
        "UX Design Awards finalist"
      ],
      projects: [
        "Mobile Banking App UI",
        "E-commerce Platform Design",
        "Educational Platform Interface",
        "Corporate Website Redesign"
      ],
      socialMedia: {
        telegram: "@malika_design",
        behance: "behance.net/malikakarimova",
        dribbble: "dribbble.com/malika"
      }
    },
    {
      id: 3,
      name: "Nilufar Sobirova",
      specialization: "Grafik Dizayn",
      expertise: [
        "Adobe Photoshop", "Adobe Illustrator",
        "Brand Design", "Logo Design",
        "Typography", "Print Design",
        "Social Media Design", "Package Design"
      ],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      rating: 4.9,
      reviews: 145,
      monthlyRate: 250,
      yearlyRate: 25000000,
      category: "design",
      students: 112,
      languages: ["O'zbek", "Rus"],
      description: "7 yillik tajribaga ega grafik dizayner, 200+ dan ortiq brend loyihalari muallifi",
      achievements: [
        "Red Dot Design Award Winner",
        "Adobe Design Achievement Awards finalist",
        "O'zbekiston Dizaynerlar uyushmasi a'zosi"
      ]
    },
    {
      id: 4,
      name: "Sevara Yusupova",
      specialization: "Data Science va AI",
      expertise: [
        "Python", "Machine Learning", "Deep Learning", 
        "TensorFlow", "PyTorch", "SQL", "Big Data",
        "Neural Networks", "Computer Vision",
        "Natural Language Processing"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      rating: 4.9,
      reviews: 142,
      monthlyRate: 400,
      yearlyRate: 40000000,
      availability: "Online / Offline",
      experience: "7 yil",
      category: "data",
      students: 89,
      languages: ["O'zbek", "Ingliz", "Koreys"],
      description: "Samsung AI Research markazida faoliyat yuritgan, AI loyihalar rahbari",
      achievements: [
        "PhD in Machine Learning",
        "Google AI Research Contributor",
        "Kaggle Competition Winner",
        "IEEE Conference Speaker"
      ],
      projects: [
        "Face Recognition System",
        "Predictive Analytics Platform",
        "Natural Language Processing Engine",
        "Computer Vision Solutions"
      ],
      socialMedia: {
        telegram: "@sevara_ai",
        github: "github.com/sevaraai",
        linkedin: "linkedin.com/in/sevarayusupova"
      }
    },
    {
      id: 5,
      name: "Akmal Rahimov",
      specialization: "Big Data Engineering",
      expertise: [
        "Apache Spark", "Hadoop", "Python",
        "Data Engineering", "ETL", "Data Warehousing",
        "Cloud Computing", "Database Design"
      ],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      rating: 4.8,
      reviews: 98,
      monthlyRate: 350,
      yearlyRate: 35000000,
      category: "data",
      students: 76,
      languages: ["O'zbek", "Rus", "Ingliz"],
      description: "Yirik data loyihalar arxitektori, Big Data sohasida 6 yillik tajriba",
      achievements: [
        "AWS Big Data Certified",
        "Apache Spark Contributor",
        "Data Engineering Conference Speaker"
      ]
    }
  ];

  const categories = [
    { 
      id: 'all', 
      name: 'Barcha yo\'nalishlar', 
      icon: '🎯',
      description: 'Barcha sohalardagi professional mentorlar'
    },
    { 
      id: 'development', 
      name: 'Dasturlash', 
      icon: '💻',
      description: 'Full Stack, Mobile va Web dasturlash'
    },
    { 
      id: 'design', 
      name: 'Dizayn', 
      icon: '🎨',
      description: 'UI/UX, Grafik va Product dizayn'
    },
    { 
      id: 'data', 
      name: 'Data Science', 
      icon: '📊',
      description: 'AI, Machine Learning va Big Data'
    }
  ];

  const filteredMentors = useMemo(() => {
    return mentors
    .filter(mentor => activeCategory === 'all' || mentor.category === activeCategory)
    .filter(mentor => 
      searchQuery === '' || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const ImageWithFallback = ({ src, alt, className }) => {
    const [imgSrc, setImgSrc] = useState(src);
    
    const handleError = () => {
      setImgSrc('https://via.placeholder.com/400x400?text=Rasm+topilmadi');
    };

    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        loading="lazy"
      />
    );
  };

  const handleOpenModal = (mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMentor(null);
  };

  const handleNotify = () => {
    setShowModal(false);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const Modal = () => {
    if (!showModal || !selectedMentor) return null;

  return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={handleCloseModal}
          ></div>

          <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative">
              <div className="h-64 w-full">
                <ImageWithFallback
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedMentor.name}</h3>
                <p className="text-blue-200">{selectedMentor.specialization}</p>
              </div>
            </div>

            <div className="px-6 py-8 bg-white">
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-blue-800">
                        Tez orada
                      </h3>
                      <p className="mt-1 text-blue-600">
                        Ushbu mentor bilan shaxsiy darslar yaqin kunlarda ishga tushadi. Tayyor bo'lishi bilanoq sizga xabar beramiz!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Tajriba</p>
                    <p className="font-medium">{selectedMentor.experience}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">O'quvchilar soni</p>
                    <p className="font-medium">{selectedMentor.students}+ nafar</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Oylik narx</p>
                    <p className="font-medium">{selectedMentor.monthlyRate.toLocaleString()} ming so'm</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Dars vaqti</p>
                    <p className="font-medium">{selectedMentor.availability}</p>
                  </div>
                </div>

                <button
                  onClick={handleNotify}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Tayyor bo'lganda xabar bering
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Notification = () => {
    if (!showNotification) return null;

    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 animate-fade-in-up">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>Xabar berish tizimi faollashtirildi!</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50"
                placeholder="Mentor yoki yo'nalish bo'yicha qidiring..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <svg className="absolute left-4 top-4 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-full">
                <ImageWithFallback
                  src={mentors[0].image}
                  alt={mentors[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 rounded-xl backdrop-blur-sm mb-4">
                    <span className="text-white font-semibold">Platformaning Asoschisi va Bosh Mentori</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {mentors[0].name}
                  </h2>
                  <p className="text-blue-200 text-xl">{mentors[0].specialization}</p>
                </div>
              </div>

              <div className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-yellow-400/10 px-4 py-2 rounded-xl">
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 font-bold text-yellow-700 text-lg">{mentors[0].rating}</span>
                    </div>
                    <span className="text-gray-600 text-lg">{mentors[0].reviews} ta baho</span>
                  </div>
                  <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg">
                    {mentors[0].monthlyRate.toLocaleString()} ming
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Tajriba</h3>
                    <p className="text-gray-600">{mentors[0].experience}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">O'quvchilar</h3>
                    <p className="text-gray-600">{mentors[0].students}+ nafar</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Tillar</h3>
                    <p className="text-gray-600">{mentors[0].languages.join(" / ")}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Dars vaqti</h3>
                    <p className="text-gray-600">{mentors[0].availability}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Texnologiyalar</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentors[0].expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Yutuqlar</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mentors[0].achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Loyihalar</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentors[0].projects?.map((project, index) => (
                      <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl text-sm font-medium">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  {mentors[0].socialMedia && Object.entries(mentors[0].socialMedia).map(([platform, link]) => (
                    <a 
                      key={platform}
                      href={`https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {platform === 'telegram' && (
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.417 0-.755-.338-.755-.755V12.18l-2.86-1.37c-.69-.282-.702-.702.15-.702l11.345-4.365c.565-.23 1.063.136.89.896z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>

                <button 
                  onClick={() => handleOpenModal(mentors[0])}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Dars band qilish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Boshqa Mentorlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.slice(1).map((mentor) => (
              <div 
                key={mentor.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="relative h-72">
                  <ImageWithFallback
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-blue-200 text-lg">{mentor.specialization}</p>
                  </div>
                  </div>
                  
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-yellow-400/10 px-3 py-1 rounded-lg">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                        <span className="ml-1 font-semibold text-yellow-700">{mentor.rating}</span>
                      </div>
                      <span className="text-gray-600">{mentor.reviews} ta baho</span>
                    </div>
                    <span className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium">
                      {mentor.monthlyRate.toLocaleString()} ming
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-3">Mutaxassislik</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {mentor.availability}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {mentor.experience} tajriba
                    </div>

                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {mentor.students} o'quvchi
                    </div>

                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      {mentor.languages.join(" / ")}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm border-t pt-4">{mentor.description}</p>
                  
                  <div className="border-t pt-4 space-y-3">
                    <h4 className="font-semibold text-gray-900">Yutuqlar:</h4>
                    <ul className="space-y-2">
                      {mentor.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Loyihalar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.projects?.map((project, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center gap-4">
                    {mentor.socialMedia && Object.entries(mentor.socialMedia).map(([platform, link]) => (
                      <a 
                        key={platform}
                        href={`https://${link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {platform === 'telegram' && (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.417 0-.755-.338-.755-.755V12.18l-2.86-1.37c-.69-.282-.702-.702.15-.702l11.345-4.365c.565-.23 1.063.136.89.896z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handleOpenModal(mentor)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Dars band qilish
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal />
      <Notification />
    </div>
  );
};

export default React.memo(ShaxsiyMentorlik);
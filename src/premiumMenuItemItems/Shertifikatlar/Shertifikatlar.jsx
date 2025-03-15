import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Shertifikatlar() {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef(null);

  // Sertifikatlar ma'lumotlari
  const certificatesData = [
    {
      id: 1,
      title: "Frontend dasturlash",
      description: "HTML, CSS, JavaScript va React.js texnologiyalari bo'yicha to'liq kurs",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
      category: "dasturlash",
      date: "2023-06-15",
      instructor: "Asfandiyor To'roqulov",
      duration: "120 soat",
      score: 95,
      badge: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux"],
      platform: "Online",
      level: "Professional"
    },
    {
      id: 2,
      title: "Backend dasturlash",
      description: "Node.js, Express.js va MongoDB texnologiyalari bo'yicha to'liq kurs",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      category: "dasturlash",
      date: "2023-08-20",
      instructor: "Jamshid Nurmatov",
      duration: "140 soat",
      score: 92,
      badge: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
      platform: "Online",
      level: "Professional"
    },
    {
      id: 3,
      title: "UI/UX dizayn asoslari",
      description: "Foydalanuvchi interfeysini loyihalash va foydalanuvchi tajribasini yaxshilash bo'yicha kurs",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
      category: "dizayn",
      date: "2023-07-10",
      instructor: "Malika Karimova",
      duration: "80 soat",
      score: 98,
      badge: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
      platform: "Online",
      level: "Professional"
    }
  ];

  // Foydalanuvchi ma'lumotlarini olish
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        // Foydalanuvchi ID=1 bo'lgan ma'lumotlarni olish
        const user = response.data.find(user => user.id === 1);
        if (user) {
          setUserData(user);
        }
      } catch (error) {
        console.error('Foydalanuvchi ma\'lumotlarini olishda xatolik:', error);
      }
    };

    fetchUserData();
  }, []);

  // Sertifikatlarni yuklash simulyatsiyasi
  useEffect(() => {
    const timer = setTimeout(() => {
      // Faqat tugatilgan kurslar uchun sertifikatlar
      setCertificates(certificatesData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Sertifikatlarni filtrlash
  const filteredCertificates = certificates.filter(certificate => {
    const matchesSearch = certificate.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          certificate.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          certificate.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Sertifikat tanlash va modalni ochish
  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  // Sana formatini o'zgartirish
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

  // Sertifikat raqamini generatsiya qilish
  const generateCertificateNumber = (id) => {
    const year = new Date().getFullYear();
    return `${year}-${id.toString().padStart(4, '0')}`;
  };

  // Sertifikatni yuklab olish
  const handleDownloadCertificate = async () => {
    if (!certificateRef.current) return;
    
    setIsDownloading(true);
    
    try {
      // Sertifikat elementini rasmga aylantirish
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
      });
      
      // PDF yaratish
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      // Rasmni PDF ga qo'shish
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // PDF ni yuklab olish
      pdf.save(`sertifikat_${selectedCertificate.id}.pdf`);
    } catch (error) {
      console.error('Sertifikatni yuklab olishda xatolik:', error);
      alert('Sertifikatni yuklab olishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Sarlavha */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Mening <span className="text-indigo-600">Sertifikatlarim</span>
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
          O'quv platformasida erishgan yutuqlaringiz va sertifikatlaringizni ko'ring
        </p>
      </div>

      {/* Qidiruv */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                placeholder="Sertifikat nomi, tavsifi yoki o'qituvchi bo'yicha qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Statistika */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center">
            <div className="bg-indigo-100 rounded-full p-4 mr-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tugatilgan kurslar</p>
              <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center">
            <div className="bg-yellow-100 rounded-full p-4 mr-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">O'rtacha ball</p>
              <p className="text-2xl font-bold text-gray-900">
                {certificates.length > 0 
                  ? Math.round(certificates.reduce((acc, curr) => acc + curr.score, 0) / certificates.length) 
                  : 0}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center">
            <div className="bg-green-100 rounded-full p-4 mr-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Foydalanuvchi</p>
              <p className="text-xl font-bold text-gray-900">
                {userData ? userData.email : "Yuklanmoqda..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sertifikatlar ro'yxati */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            🏆 Mening sertifikatlarim
          </h2>
          <div className="text-gray-500 text-sm">
            {filteredCertificates.length} ta sertifikat
          </div>
        </div>

        {isLoading ? (
          // Yuklash animatsiyasi
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredCertificates.length === 0 ? (
          // Natija topilmadi
          <div className="text-center py-20 bg-white rounded-2xl shadow-md">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Natija topilmadi</h3>
            <p className="mt-2 text-gray-500">Hozircha sertifikatlar mavjud emas yoki qidiruv so'roviga mos sertifikatlar topilmadi.</p>
          </div>
        ) : (
          // Sertifikatlar ro'yxati
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate) => (
              <div 
                key={certificate.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="relative h-48">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x200?text=Rasm+topilmadi";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                      Tugatilgan
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-indigo-600/90 text-white text-sm font-medium">
                      {certificate.level}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{certificate.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {certificate.instructor}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(certificate.date)}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {certificate.duration}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Ball: {certificate.score}/100
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <button
                    className="w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Sertifikatni ko'rish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sertifikat ma'lumotlari modali */}
      {showModal && selectedCertificate && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" 
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setShowModal(false)}
                >
                  <span className="sr-only">Yopish</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-white p-6 sm:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div ref={certificateRef} className="relative h-64 md:h-full rounded-xl overflow-hidden border-4 border-indigo-100">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 p-8">
                        <div className="text-center w-full relative">
                          {/* Watermark */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                            <svg className="w-64 h-64 text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                            </svg>
                          </div>
                          
                          {/* Border decoration */}
                          <div className="absolute inset-0 border-8 border-indigo-100 m-4 rounded-lg pointer-events-none"></div>
                          
                          {/* Corner decorations */}
                          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-indigo-600 rounded-tl-lg"></div>
                          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-indigo-600 rounded-tr-lg"></div>
                          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-indigo-600 rounded-bl-lg"></div>
                          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-indigo-600 rounded-br-lg"></div>
                          
                          {/* Certificate content */}
                          <div className="relative z-10">
                            <div className="mb-4 flex justify-center">
                              <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider">
                                RASMIY SERTIFIKAT
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <img src="/logo.png" alt="Logo" className="h-16 mx-auto" onError={(e) => { e.target.src = "https://via.placeholder.com/64?text=Logo" }} />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-indigo-800 mb-2">SERTIFIKAT</h2>
                            <p className="text-gray-600 mb-4">Ushbu sertifikat</p>
                            
                            <div className="bg-white/70 py-2 px-4 rounded-lg mb-4 mx-auto max-w-xs">
                              <h3 className="text-xl font-bold text-gray-800">
                                {userData ? (userData.fullname || userData.email.split('@')[0]) : "Foydalanuvchi"}
                              </h3>
                            </div>
                            
                            <p className="text-gray-600 mb-2">ga</p>
                            
                            <div className="bg-indigo-100/70 py-2 px-4 rounded-lg mb-4 mx-auto max-w-xs">
                              <h4 className="text-lg font-bold text-indigo-700">
                                {selectedCertificate.title}
                              </h4>
                            </div>
                            
                            <p className="text-gray-600 mb-4">kursini muvaffaqiyatli tugatganligi uchun berildi</p>
                            
                            <div className="flex justify-between items-center mb-2 px-8">
                              <div className="text-sm text-gray-500">
                                Sana: {formatDate(selectedCertificate.date)}
                              </div>
                              <div className="text-sm text-gray-500">
                                Sertifikat №: {generateCertificateNumber(selectedCertificate.id)}
                              </div>
                            </div>
                            
                            <div className="flex justify-center mt-4">
                              <div className="border-t-2 border-gray-300 w-32 pt-2">
                                <p className="text-sm text-gray-600">Imzo</p>
                              </div>
                            </div>
                            
                            {/* QR code */}
                            <div className="absolute bottom-0 right-0 m-4">
                              <div className="bg-white p-1 rounded-md">
                                <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                                  <rect x="10" y="10" width="30" height="30" rx="3" fill="black" />
                                  <rect x="60" y="10" width="30" height="30" rx="3" fill="black" />
                                  <rect x="10" y="60" width="30" height="30" rx="3" fill="black" />
                                  <rect x="60" y="60" width="10" height="10" rx="1" fill="black" />
                                  <rect x="80" y="60" width="10" height="10" rx="1" fill="black" />
                                  <rect x="60" y="80" width="10" height="10" rx="1" fill="black" />
                                  <rect x="80" y="80" width="10" height="10" rx="1" fill="black" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Hologram effect */}
                            <div className="absolute bottom-4 left-4">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                                    ORIGINAL
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedCertificate.title}</h2>
                    <p className="text-gray-600 mb-6">{selectedCertificate.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">O'qituvchi</p>
                        <p className="font-medium text-gray-900">{selectedCertificate.instructor}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Sana</p>
                        <p className="font-medium text-gray-900">{formatDate(selectedCertificate.date)}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Davomiyligi</p>
                        <p className="font-medium text-gray-900">{selectedCertificate.duration}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">Sertifikat raqami</p>
                        <p className="font-medium text-gray-900">{generateCertificateNumber(selectedCertificate.id)}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Umumiy ball</p>
                        <p className="font-bold text-green-700">{selectedCertificate.score}/100</p>
                      </div>
                      <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-green-600 h-2.5 rounded-full" 
                          style={{ width: `${selectedCertificate.score}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">O'zlashtirilgan ko'nikmalar</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img 
                          src={selectedCertificate.badge} 
                          alt="Badge" 
                          className="w-16 h-16 object-cover rounded-full border-2 border-indigo-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/64?text=Badge";
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Erishilgan yutuq</p>
                        <p className="font-medium text-gray-900">{selectedCertificate.title} bo'yicha sertifikat</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className="flex-1 py-3 px-4 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 flex items-center justify-center gap-2"
                        onClick={() => window.open(`#/certificate/${selectedCertificate.id}`, '_blank')}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Sertifikatni ko'rish
                      </button>
                      <button
                        className="flex-1 py-3 px-4 rounded-xl font-medium bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                        onClick={handleDownloadCertificate}
                        disabled={isDownloading}
                      >
                        {isDownloading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-blue-800">Sertifikat haqida</h3>
                          <div className="mt-2 text-sm text-blue-700">
                            <p>
                              Ushbu sertifikat {selectedCertificate.title} kursini muvaffaqiyatli tugatganingizni tasdiqlovchi rasmiy hujjat hisoblanadi. Sertifikat raqami: {generateCertificateNumber(selectedCertificate.id)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Kurs haqida qo'shimcha ma'lumot</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-500">Platforma</p>
                          <p className="font-medium text-gray-900">{selectedCertificate.platform || "Online"}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-500">Daraja</p>
                          <p className="font-medium text-gray-900">{selectedCertificate.level || "Professional"}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-500">Kategoriya</p>
                          <p className="font-medium text-gray-900">{selectedCertificate.category === "dasturlash" ? "Dasturlash" : selectedCertificate.category === "dizayn" ? "Dizayn" : selectedCertificate.category}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-500">Sertifikat berilgan</p>
                          <p className="font-medium text-gray-900">{formatDate(selectedCertificate.date)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dekorativ elementlar */}
      <div className="max-w-7xl mx-auto relative h-full overflow-hidden mt-16">
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-8 right-32 w-48 h-48 bg-purple-100 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 left-1/2 w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
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
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Qo'shimcha ma'lumot */}
      <div className="max-w-7xl mx-auto mt-8 text-center">
        <p className="text-sm text-gray-500">
          Sertifikatlar haqida qo'shimcha ma'lumot olish uchun <a href="#" className="text-indigo-600 hover:text-indigo-800">biz bilan bog'laning</a>.
        </p>
      </div>
    </div>
  );
}

export default Shertifikatlar;
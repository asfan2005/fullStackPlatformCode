import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'react-hot-toast';

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

  // CSS animatsiyalarini qo'shish
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      
      @keyframes shine {
        0% { background-position: -100px; }
        40%, 100% { background-position: 300px; }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
      }
      
      .shine-effect {
        position: relative;
        overflow: hidden;
      }
      
      .shine-effect::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
        transform: rotate(30deg);
        animation: shine 3s infinite linear;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Foydalanuvchi ma'lumotlarini olish
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // LocalStorage dan foydalanuvchi ma'lumotlarini olish
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          
          // API dan foydalanuvchi ma'lumotlarini yangilash
          try {
            const response = await axios.get('http://api.infinity-school.uz/api/users');
            const users = response.data;
            const currentUser = users.find(u => u.id === user.id);
            
            if (currentUser) {
              // Foydalanuvchi ma'lumotlarini yangilash
              setUserData({
                id: currentUser.id,
                fullname: currentUser.fullname,
                codename: currentUser.codename,
                email: currentUser.email,
                phone: currentUser.phone,
                created_at: currentUser.created_at,
                updated_at: currentUser.updated_at
              });

              // Foydalanuvchining sertifikatlarini olish
              try {
                const certResponse = await axios.get(`http://api.infinity-school.uz/api/certificates?userId=${currentUser.id}`);
                if (certResponse.data) {
                  setCertificates(certResponse.data);
                }
              } catch (error) {
                console.error('Sertifikatlarni olishda xatolik:', error);
                // Xatolik yuz berganda test ma'lumotlarini ishlatish
                setCertificates(certificatesData);
              }
            } else {
              // Foydalanuvchi topilmadi
              toast.error('Foydalanuvchi ma\'lumotlari topilmadi');
              window.location.href = '/login';
            }
          } catch (error) {
            console.error('API dan foydalanuvchi ma\'lumotlarini olishda xatolik:', error);
            // Xatolik yuz berganda localStorage dagi ma'lumotlarni ishlatish
            setUserData(user);
          }
        } else {
          // Agar foydalanuvchi ma'lumotlari topilmasa, login sahifasiga yo'naltirish
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Foydalanuvchi ma\'lumotlarini olishda xatolik:', error);
        // Xatolik yuz berganda login sahifasiga yo'naltirish
        window.location.href = '/login';
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
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

    // Sertifikat ochilganda animatsiya effektini qo'shish uchun timeout
    setTimeout(() => {
      if (certificateRef.current) {
        certificateRef.current.classList.add('animate-fadeIn');
      }
    }, 100);
  };

  // Sana formatini o'zgartirish
  const formatDate = (dateString) => {
    // Oy nomlarini o'zbek tilida qaytarish uchun
    const months = {
      '01': 'Yanvar',
      '02': 'Fevral',
      '03': 'Mart',
      '04': 'Aprel',
      '05': 'May',
      '06': 'Iyun',
      '07': 'Iyul',
      '08': 'Avgust',
      '09': 'Sentabr',
      '10': 'Oktabr',
      '11': 'Noyabr',
      '12': 'Dekabr'
    };

    // Joriy sana
    const date = new Date();
    const year = "2025";
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year} ${months[month]} ${day}`;
  };

  // Vaqtni formatlash
  const formatTime = (timeString) => {
    return timeString || "10:00";
  };

  // Sertifikat raqamini formatlash
  const formatCertificateNumber = (number) => {
    const certNumber = number || "0001";
    // Raqamni XXX-XXX formatida qaytarish
    return certNumber.toString().replace(/(\d{3})(\d{3})/, '$1-$2');
  };

  // Sertifikat raqamini generatsiya qilish
  const generateCertificateNumber = (id) => {
    if (!userData) return `0000-${id.toString().padStart(4, '0')}`;
    return `${userData.id}-${id.toString().padStart(4, '0')}`;
  };

  // Sertifikat dizaynini yangilash
  const CertificateDesign = ({ certificate, userData, formatDate, generateCertificateNumber }) => {
    return (
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        {/* Fon */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50"></div>

        {/* Dekorativ naqshlar */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#4338ca"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <svg className="w-2/3 h-2/3 text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>

        {/* Ramka */}
        <div className="absolute inset-0 border-[12px] border-indigo-100 m-4 rounded-lg pointer-events-none"></div>
        <div className="absolute inset-0 border-[1px] border-indigo-300 m-8 rounded-lg pointer-events-none"></div>

        {/* Burchak bezaklari */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-indigo-600 rounded-tl-xl opacity-70"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-indigo-600 rounded-tr-xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-indigo-600 rounded-bl-xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-indigo-600 rounded-br-xl opacity-70"></div>

        {/* Asosiy kontent */}
        <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center">
          {/* Yuqori qism */}
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-2 rounded-full text-sm font-semibold tracking-wider shadow-md">
              RASMIY SERTIFIKAT
            </div>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <img
              src="./vite.svg"
              alt="Logo"
              className="h-24 mx-auto filter drop-shadow-md"
              onError={(e) => { e.target.src = "https://via.placeholder.com/96?text=Logo" }}
            />
          </div>

          {/* Sarlavha */}
          <h2 className="text-4xl font-bold text-indigo-800 mb-3 font-serif tracking-wide">SERTIFIKAT</h2>
          <p className="text-gray-600 mb-5 italic text-lg">Ushbu sertifikat</p>

          {/* Foydalanuvchi nomi */}
          <div className="bg-gradient-to-r from-white/90 to-white/70 py-4 px-8 rounded-lg mb-5 mx-auto max-w-md shadow-sm border border-indigo-100">
            <h3 className="text-3xl font-bold text-gray-800 font-serif">
              {userData ? (userData.fullname || userData.email.split('@')[0]) : "Foydalanuvchi"}
            </h3>
          </div>

          <p className="text-gray-600 mb-3 text-lg">ga</p>

          {/* Kurs nomi */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-4 px-8 rounded-lg mb-5 mx-auto max-w-md shadow-sm border border-indigo-200">
            <h4 className="text-2xl font-bold text-indigo-700">
              {certificate.title}
            </h4>
          </div>

          <p className="text-gray-600 mb-8 text-lg">kursini muvaffaqiyatli tugatganligi uchun berildi</p>

          {/* Sana va sertifikat raqami */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 w-full px-6 py-5 rounded-lg shadow-md border border-indigo-200 hover:shadow-lg transition-all duration-300 mb-4">
            <div className="flex justify-between items-center">
              <div className="w-full">
                <p className="text-sm text-gray-600 font-semibold mb-1">Sana:</p>
                <div className="flex items-center space-x-2">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xl text-indigo-800 font-bold tracking-wider">{formatDate()}</p>
                </div>
              </div>
            </div>
          </div>

          

          {/* Imzo qismi */}
          <div className="flex justify-between items-center mt-8 px-12">
            {/* O'qituvchi imzosi */}
            <div className="flex flex-col items-center">
              <div className="relative w-48">
                {/* Imzo foni */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"></div>

                {/* O'qituvchi imzosi */}
                <div className="relative p-4">
                  <div className="h-16 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-32 h-16" viewBox="0 0 200 100">
                      <path
                        d="M20 50 C40 30, 60 30, 80 50 C100 70, 120 70, 140 50 C160 30, 180 30, 200 50"
                        fill="none"
                        stroke="#4338ca"
                        strokeWidth="2"
                        className="transform -rotate-6"
                      />
                      <path
                        d="M20 60 C40 40, 60 40, 80 60 C100 80, 120 80, 140 60"
                        fill="none"
                        stroke="#4338ca"
                        strokeWidth="1.5"
                        className="transform -rotate-6"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">To'raqulov Asfandiyor</p>
                    <p className="text-xs text-gray-600">O'qituvchi</p>
                  </div>
                </div>

                {/* Imzo tagidagi chiziq */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              </div>
            </div>

            {/* Muhr */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 absolute blur-xl"></div>
              <div className="w-28 h-28 rounded-full border-4 border-indigo-600/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/90"></div>
                <div className="relative z-10 transform rotate-[-12deg]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-indigo-800">TASDIQLANGAN</div>
                      <div className="text-[8px] text-indigo-600 mt-0.5">2024</div>
                      <div className="text-[7px] text-indigo-600 mt-1">№ {generateCertificateNumber(certificate.id)}</div>
                    </div>
                  </div>
                  <svg className="w-20 h-20 text-indigo-600" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,3 L63,34 L97,34 L69,54 L79,85 L50,66 L21,85 L31,54 L3,34 L37,34 Z" fillOpacity="0.2" />
                    <path d="M50,0 L63,31 L97,31 L69,51 L79,82 L50,63 L21,82 L31,51 L3,31 L37,31 Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Direktor imzosi */}
            <div className="flex flex-col items-center">
              <div className="relative w-48">
                {/* Imzo foni */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg"></div>

                {/* Direktor imzosi */}
                <div className="relative p-4">
                  <div className="h-16 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-32 h-16" viewBox="0 0 200 100">
                      <path
                        d="M20 50 C60 20, 100 20, 140 50 C180 80, 220 80, 260 50"
                        fill="none"
                        stroke="#4338ca"
                        strokeWidth="2"
                        className="transform rotate-[-12deg]"
                      />
                      <path
                        d="M20 60 C60 30, 100 30, 140 60"
                        fill="none"
                        stroke="#4338ca"
                        strokeWidth="1.5"
                        className="transform rotate-[-12deg]"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">To'raqulov A.J.</p>
                    <p className="text-xs text-gray-600">Direktor</p>
                  </div>
                </div>

                {/* Imzo tagidagi chiziq */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              </div>
            </div>
          </div>

          {/* Imzo ostidagi tasdiqlash belgisi */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
              <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs text-indigo-700 font-medium">Elektron raqamli imzo bilan tasdiqlangan</span>
            </div>
          </div>
        </div>

        {/* QR code */}
        <div className="absolute bottom-4 right-4 m-4">
          <div className="bg-white p-2 rounded-md shadow-md border border-indigo-100">
            <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
              <rect x="10" y="10" width="30" height="30" rx="3" fill="#4338ca" />
              <rect x="60" y="10" width="30" height="30" rx="3" fill="#4338ca" />
              <rect x="10" y="60" width="30" height="30" rx="3" fill="#4338ca" />
              <rect x="60" y="60" width="10" height="10" rx="1" fill="#4338ca" />
              <rect x="80" y="60" width="10" height="10" rx="1" fill="#4338ca" />
              <rect x="60" y="80" width="10" height="10" rx="1" fill="#4338ca" />
              <rect x="80" y="80" width="10" height="10" rx="1" fill="#4338ca" />
            </svg>
          </div>
        </div>

        {/* Hologram effect */}
        <div className="absolute bottom-4 left-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 flex items-center justify-center shadow-lg animate-pulse">
            <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white/50">
                <div className="transform rotate-[-20deg]">
                  <div className="text-center">
                    <div className="text-[10px] font-bold tracking-wider">ORIGINAL</div>
                    <div className="text-[8px] mt-0.5">SERTIFIKAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fon naqshlari */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Qo'shimcha dekorativ elementlar */}
        <div className="absolute top-1/2 left-0 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-indigo-900">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" />
          </svg>
        </div>
        <div className="absolute top-1/4 right-0 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-purple-900">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>

        {/* Sertifikat haqiqiyligini tasdiqlovchi belgi */}
        <div className="absolute bottom-16 right-16">
          <div className="text-xs text-gray-500 font-mono transform rotate-[-5deg] opacity-70">
            ID: {certificate.id}-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
          </div>
        </div>
      </div>
    );
  };

  // Sertifikatni yuklab olish funksiyasini yangilash
  const handleDownloadCertificate = async () => {
    if (!certificateRef.current || !userData) return;
    
    setIsDownloading(true);
    
    try {
      // Animatsiya effektlarini o'chirish
      const originalClasses = certificateRef.current.className;
      certificateRef.current.classList.remove('animate-pulse', 'animate-fadeIn', 'shine-effect');

      // Sertifikat elementini rasmga aylantirish
      const canvas = await html2canvas(certificateRef.current, {
        scale: 4,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.querySelector('#certificate-clone');
          if (clonedElement) {
            clonedElement.style.animation = 'none';
            clonedElement.style.transform = 'none';
          }
        }
      });

      // Animatsiya effektlarini qaytarish
      certificateRef.current.className = originalClasses;
      
      // PDF yaratish
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      
      // PDF sifatini yaxshilash uchun sozlamalar
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // PDF metadatalarini qo'shish
      pdf.setProperties({
        title: `${selectedCertificate.title} Sertifikati`,
        subject: `${selectedCertificate.description}`,
        author: 'O\'quv Platformasi',
        keywords: 'sertifikat, kurs, ta\'lim',
        creator: 'O\'quv Platformasi'
      });

      // Rasmni PDF ga qo'shish
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      
      // PDF ni yuklab olish
      const fileName = `sertifikat_${userData.fullname.replace(/\s+/g, '_')}_${selectedCertificate.title.replace(/\s+/g, '_')}_${generateCertificateNumber(selectedCertificate.id)}.pdf`;
      pdf.save(fileName);

      // Muvaffaqiyatli yuklab olish xabari
      toast.success('Sertifikat muvaffaqiyatli yuklab olindi!');
    } catch (error) {
      console.error('Sertifikatni yuklab olishda xatolik:', error);
      toast.error('Sertifikatni yuklab olishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Sarlavha */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Mening <span className="text-indigo-600">Sertifikatlarim</span>
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
          O'quv platformasida erishgan yutuqlaringiz va sertifikatlaringizni ko'ring
        </p>
      </div>

      {/* Foydalanuvchi ma'lumotlari */}
      {userData && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    {userData.fullname.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{userData.fullname}</h3>
                  <p className="text-gray-500">{userData.email}</p>
                  <p className="text-gray-500">{userData.phone}</p>
                  <p className="text-sm text-gray-400 mt-1">@{userData.codename}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sertifikatlar soni:</span>
                <span className="text-lg font-semibold text-indigo-600">{certificates.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

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

            <div 
              className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
              style={{ 
                marginLeft: '150px',
                marginTop: '50px'
              }}
            >
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
              
              <div className="bg-gradient-to-br from-white to-indigo-50 p-6 sm:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div ref={certificateRef} id="certificate-clone" className="relative h-64 md:h-full rounded-xl overflow-hidden border-4 border-indigo-100 shadow-lg shine-effect">
                      <CertificateDesign
                        certificate={selectedCertificate}
                        userData={userData}
                        formatDate={formatDate}
                        generateCertificateNumber={generateCertificateNumber}
                      />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shertifikatlar;
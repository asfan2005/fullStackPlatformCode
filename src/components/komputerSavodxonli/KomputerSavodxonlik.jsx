import React, { useState } from 'react';
import { FaDesktop, FaWindows, FaFileWord, FaFileExcel, 
         FaFilePowerpoint, FaGlobe, FaShieldAlt, FaCloud } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function KomputerSavodxonlik() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(1);
  const [isHovered, setIsHovered] = useState(null);

  const menuItems = [
    {
      id: 1,
      title: "Kompyuter tuzilishi",
      description: "Kompyuterning asosiy qismlari va ishlash prinsipi",
      icon: <FaDesktop className="text-3xl mb-4" />,
      path: "/komputer/tuzilishi"
    },
    {
      id: 2,
      title: "Operatsion tizim",
      description: "Windows, macOS, Linux bilan ishlash",
      icon: <FaWindows className="text-3xl mb-4" />,
      path: "/komputer/operatsionTizim"
    },
    {
      id: 3,
      title: "Matn muharriri",
      description: "Microsoft Word va Google Docs dasturlari",
      icon: <FaFileWord className="text-3xl mb-4" />,
      path: "/komputer/matnMuharriri"
    },
    {
      id: 4,
      title: "Elektron jadvallar",
      description: "Microsoft Excel va formulalar bilan ishlash",
      icon: <FaFileExcel className="text-3xl mb-4" />,
      path: "/komputer/elektronJadvallar"
    },
    {
      id: 5,
      title: "Taqdimotlar",
      description: "PowerPoint va taqdimotlar tayyorlash",
      icon: <FaFilePowerpoint className="text-3xl mb-4" />,
      path: "/komputer/taqdimotlar"
    },
    {
      id: 6,
      title: "Internet",
      description: "Internetdan xavfsiz foydalanish",
      icon: <FaGlobe className="text-3xl mb-4" />,
      path: "/komputer/internet"
    },
    {
      id: 7,
      title: "Xavfsizlik",
      description: "Kompyuter xavfsizligi asoslari",
      icon: <FaShieldAlt className="text-3xl mb-4" />,
      path: "/komputer/xavfsizlik"
    },
    {
      id: 8,
      title: "Bulutli texnologiyalar",
      description: "Google Drive va bulutli xizmatlar",
      icon: <FaCloud className="text-3xl mb-4" />,
      path: "/komputer/bulutliTexnologiyalar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-600 mb-4 sm:mb-6 lg:mb-8 animate-fade-in">
            Kompyuter Savodxonligi
          </h1>
          
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
            Zamonaviy dunyoda kompyuter savodxonligi muhim ko'nikmalardan biri hisoblanadi. 
            <span className="text-blue-600 font-semibold"> Bizning professional kursimiz </span> 
            orqali zamonaviy texnologiyalar sirlarini o'rganing.
          </p>
        </div>

        {/* Detailed Information Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6 text-left">
          <div className="bg-white/50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300
            transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="animate-bounce">🎯</span> Kurs maqsadi
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Zamonaviy texnologiyalar olamiga sayohat qiling va professional darajada 
              kompyuter ko'nikmalariga ega bo'ling. Har bir darsda yangi bilim va 
              tajribaga ega bo'lasiz.
            </p>
          </div>

          <div className="bg-white/50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300
            transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="animate-pulse">📚</span> Nimalarni o'rganasiz?
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {[
                "Zamonaviy dasturlar bilan ishlash",
                "Professional prezentatsiyalar yaratish",
                "Ma'lumotlarni samarali boshqarish",
                "Internet xavfsizligi",
                "Bulutli texnologiyalar",
                "Raqamli portfolio yaratish"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 group">
                  <span className="text-blue-500 group-hover:scale-125 transition-transform">✓</span>
                  <span className="group-hover:text-blue-700 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300
            transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="animate-spin">🌟</span> Qo'shimcha imkoniyatlar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <FaDesktop />, text: "Amaliy mashg'ulotlar", color: "blue" },
                { icon: <FaShieldAlt />, text: "24/7 qo'llab-quvvatlash", color: "purple" },
                { icon: <FaFileWord />, text: "Zamonaviy o'quv materiallari", color: "green" },
                { icon: <FaGlobe />, text: "Online konsultatsiyalar", color: "orange" }
              ].map((item, idx) => (
                <div key={idx} 
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 
                  transition-all duration-300 cursor-pointer group">
                  <div className={`bg-${item.color}-100 p-3 rounded-full 
                    group-hover:scale-110 transition-transform`}>
                    <span className={`text-${item.color}-600 text-xl`}>{item.icon}</span>
                  </div>
                  <span className="group-hover:font-medium transition-all">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 
                backdrop-blur-sm ${
                activeMenu === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                  : 'bg-white/80 hover:bg-blue-50'
              }`}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => navigate(item.path)}
            >
              <div className="flex flex-col items-center relative overflow-hidden">
                <div className={`transform transition-all duration-500 ${
                  activeMenu === item.id || isHovered === item.id ? 'scale-110 rotate-6' : ''
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">{item.title}</h3>
                <p className={`text-sm text-center leading-relaxed ${
                  activeMenu === item.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
                
                {/* Hover Effect Button */}
                <div className={`mt-4 transition-all duration-300 ${
                  isHovered === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button 
                    onClick={() => navigate(item.path)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      activeMenu === item.id 
                        ? 'bg-white text-blue-600' 
                        : 'bg-blue-600 text-white'
                    } hover:shadow-lg transition-all duration-300`}
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">Kurs afzalliklari</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                title: "Amaliy ta'lim", 
                desc: "Har bir mavzu bo'yicha real loyihalar ustida ishlash, zamonaviy dasturlar va texnologiyalarni amalda qo'llash, portfolio yaratish imkoniyati" 
              },
              { 
                title: "Eng so'nggi ma'lumotlar", 
                desc: "Doimiy yangilanib turadigan o'quv dasturi, zamonaviy texnologiyalar haqida eng so'nggi yangiliklardan xabardor bo'lish, yangi dasturlar va trendlar bilan tanishish" 
              },
              { 
                title: "24/7 qo'llab-quvvatlash", 
                desc: "Professional mentorlar tomonidan uzluksiz yordam, online konsultatsiyalar, shaxsiy maslahatlar, guruh muhokamalarida ishtirok etish imkoniyati" 
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KomputerSavodxonlik;
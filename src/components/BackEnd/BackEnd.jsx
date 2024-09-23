import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaNodeJs, FaPython, FaJava, FaPhp, FaDatabase, FaServer, FaExternalLinkAlt } from "react-icons/fa";
import { SiRuby, SiDjango, SiSpring, SiLaravel, SiMongodb, SiPostgresql } from "react-icons/si";

const technologies = [
  { name: "Node.js", icon: FaNodeJs, color: "#339933", description: "JavaScript runtime muhiti, server tomonida JavaScript-ni ishga tushirish uchun.", link: "/backend/nodejs" },
  { name: "Python", icon: FaPython, color: "#3776AB", description: "Ko'p qirrali dasturlash tili, veb-ilovalar va ma'lumotlar tahlili uchun keng qo'llaniladi.", link: "/backend/python" },
  { name: "Java", icon: FaJava, color: "#007396", description: "Kuchli, ob'ektga yo'naltirilgan til, katta korxona ilovalarini yaratish uchun.", link: "/backend/java" },
  { name: "PHP", icon: FaPhp, color: "#777BB4", description: "Veb-saytlar va ilovalar yaratish uchun ommabop skript tili.", link: "/backend/php" },
  { name: "Ruby", icon: SiRuby, color: "#CC342D", description: "Dinamik, ochiq manbali dasturlash tili, Ruby on Rails freymvorki bilan mashhur.", link: "/backend/ruby" },
  { name: "Django", icon: SiDjango, color: "#092E20", description: "Python-asosli yuqori darajali veb-freymvork, tez ishlab chiqish uchun.", link: "/backend/django" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F", description: "Java uchun keng qamrovli dasturlash va konfiguratsiya modeli.", link: "/backend/spring" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", description: "PHP uchun veb-ilovalar freymvorki, elegantlik va soddalikka e'tibor qaratadi.", link: "/backend/laravel" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "Hujjatga asoslangan, taqsimlangan ma'lumotlar bazasi.", link: "/backend/mongodb" },
];

const projects = [
  { 
    name: "E-commerce API", 
    description: "Node.js va Express yordamida yaratilgan to'liq RESTful API.", 
    image: "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    link: "https://github.com/example/ecommerce-api"
  },
  { 
    name: "Blog CMS", 
    description: "Django va PostgreSQL yordamida yaratilgan kontent boshqaruv tizimi.", 
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/example/blog-cms"
  },
  { 
    name: "Mikroservis Arxitekturasi", 
    description: "Spring Boot va Docker yordamida yaratilgan mikroservislar to'plami.", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://github.com/example/microservices"
  },
];

const developerLevels = [
  {
    level: "Junior Backend Dasturchi",
    experience: "0-2 yil",
    icon: "👨‍💻",
    color: "from-green-400 to-blue-500",
    skills: ["Asosiy dasturlash tili (Python, Java, yoki Node.js)", "Ma'lumotlar bazasi asoslari", "API yaratish", "Git versiyalarni boshqarish"],
    projects: ["Oddiy CRUD ilovalar", "API endpointlari yaratish", "Ma'lumotlar bazasi sxemalarini loyihalash"],
    description: "Junior backend dasturchilari asosiy tushunchalarni o'rganadilar va kichik loyihalarda ishlaydilar. Ular kod yozish, xatolarni tuzatish va asosiy arxitektura tushunchalarini o'zlashtiradilar."
  },
  {
    level: "Middle Backend Dasturchi",
    experience: "2-5 yil",
    icon: "🚀",
    color: "from-purple-400 to-pink-500",
    skills: ["Murakkab ma'lumotlar bazasi operatsiyalari", "Xavfsizlik va autentifikatsiya", "Keshlashtirish", "Yuqori yuklamani boshqarish", "Docker"],
    projects: ["Mikroservislar", "Real vaqtda ishlash tizimlari", "To'lov integratsiyalari"],
    description: "Middle backend dasturchilari murakkab tizimlarni loyihalash va amalga oshirish qobiliyatiga ega. Ular katta loyihalarda ishlaydilar va yangi texnologiyalarni tez o'zlashtiradilar."
  },
  {
    level: "Senior Backend Dasturchi",
    experience: "5+ yil",
    icon: "🏆",
    color: "from-yellow-400 to-red-500",
    skills: ["Tizim arxitekturasi", "Yuqori masshtablilik", "Xavfsizlik auditi", "DevOps amaliyotlari", "Jamoani boshqarish"],
    projects: ["Katta masshtabli tizimlar", "Bulutli infratuzilmalar", "Ma'lumotlar tahlili platformalari"],
    description: "Senior backend dasturchilari yuqori darajadagi texnik bilimga ega bo'ladilar. Ular murakkab muammolarni hal qiladilar, arxitektura qarorlarini qabul qiladilar va jamoani yo'naltiradilar."
  }
];

function BackEnd() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredLevel, setHoveredLevel] = useState(null);

  return (
    <div className="p-2 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Backend Dasturlash</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Backend nima?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Backend dasturlash - bu veb-sayt yoki ilovaning "sahna ortidagi" qismini yaratish jarayoni. 
          Bu server tomonidagi mantiq, ma'lumotlar bazasi bilan ishlash va API yaratishni o'z ichiga oladi.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Backend dasturchilari serverlar, ma'lumotlar bazalari va ilovalar o'rtasidagi aloqani ta'minlaydilar. 
          Ular ma'lumotlarni saqlash, qayta ishlash va uzatish uchun mas'uldirlar.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Zamonaviy backend dasturlashda Node.js, Python, Java, Ruby kabi tillar va Django, Spring, Laravel kabi freymvorklar keng qo'llaniladi. 
          Bundan tashqari, ma'lumotlar bazalari, API dizayni, xavfsizlik va masshtablilik kabi muhim jihatlar ham backend dasturchisining asosiy vazifalariga kiradi.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-700">Asosiy Backend Texnologiyalari</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {technologies.map((tech) => (
          <Link 
            to={tech.link} 
            key={tech.name} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <tech.icon className="text-5xl mr-4" style={{ color: tech.color }} />
              <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
            </div>
            <p className="text-gray-600">{tech.description}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-700">Loyiha Namunalari</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <div 
            key={project.name} 
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white flex items-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Ko'rish <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-800">Backend Dasturchilar Darajalari</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developerLevels.map((level, index) => (
          <div 
            key={level.level} 
            className={`bg-gradient-to-br ${level.color} rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:rotate-1 ${hoveredLevel === index ? 'shadow-2xl' : 'shadow-lg'}`}
            onMouseEnter={() => setHoveredLevel(index)}
            onMouseLeave={() => setHoveredLevel(null)}
          >
            <div className="p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{level.level}</h3>
                <span className="text-4xl animate-bounce">{level.icon}</span>
              </div>
              <p className="text-sm font-semibold">Tajriba: {level.experience}</p>
            </div>
            <div className="bg-white p-6">
              <p className="text-gray-600 mb-6">{level.description}</p>
              <h4 className="font-bold text-gray-800 mb-2">Asosiy ko'nikmalar:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {level.skills.map((skill, idx) => (
                  <li key={idx} className="mb-1 transform transition-transform duration-200 hover:translate-x-2">{skill}</li>
                ))}
              </ul>
              <h4 className="font-bold text-gray-800 mb-2">Loyihalar:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {level.projects.map((project, idx) => (
                  <li key={idx} className="mb-1 transform transition-transform duration-200 hover:translate-x-2">{project}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackEnd;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, FaExternalLinkAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiWebpack } from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", description: "Veb-sahifalar tuzilishini belgilash uchun standart belgilash tili.", link: "/frontend/html" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", description: "Veb-sahifalar ko'rinishini boshqarish uchun uslublar tili.", link: "/frontend/css" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", description: "Veb-sahifalarga interaktivlik qo'shish uchun dasturlash tili.", link: "/frontend/javascript" },
  { name: "React", icon: FaReact, color: "#61DAFB", description: "Foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi.", link: "/frontend/react" },
  { name: "Vue.js", icon: FaVuejs, color: "#4FC08D", description: "Foydalanuvchi interfeyslarini yaratish uchun progressiv JavaScript freymvorki.", link: "/frontend/vue" },
  { name: "Angular", icon: FaAngular, color: "#DD0031", description: "Google tomonidan ishlab chiqilgan kuchli TypeScript-asosli freymvork.", link: "/frontend/angular" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "JavaScript-ning kengaytirilgan versiyasi, qat'iy tipizatsiya bilan.", link: "/frontend/typescript" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS freymvorki, tez va moslashuvchan dizayn uchun.", link: "/frontend/tailwind" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", description: "Zamonaviy JavaScript ilovalar uchun modul bundler.", link: "/frontend/webpack" },
];

const projects = [
  { 
    name: "Onlayn Do'kon", 
    description: "React va Redux yordamida yaratilgan to'liq funksional onlayn do'kon.", 
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://www.amazon.com"
  },
  { 
    name: "Blog Platformasi", 
    description: "Vue.js va Firebase yordamida yaratilgan real vaqtda ishlaydigan blog platformasi.", 
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://medium.com"
  },
  { 
    name: "Task Menejeri", 
    description: "Angular va RxJS yordamida yaratilgan kuchli task boshqaruv tizimi.", 
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://trello.com"
  },
];

const developerLevels = [
  {
    level: "Junior Frontend Dasturchi",
    experience: "0-2 yil",
    icon: "👨‍💻",
    color: "from-green-400 to-blue-500",
    skills: ["HTML", "CSS", "JavaScript asoslari", "Asosiy React/Vue/Angular"],
    projects: ["Oddiy landing sahifalar", "Kichik veb-ilovalar", "Mavjud loyihalarni qo'llab-quvvatlash"],
    description: "Junior dasturchilar o'z karyeralarining boshida bo'ladilar. Ular asosiy texnologiyalarni o'rganadilar va tajribali dasturchilar nazorati ostida ishlaydilar."
  },
  {
    level: "Middle Frontend Dasturchi",
    experience: "2-5 yil",
    icon: "🚀",
    color: "from-purple-400 to-pink-500",
    skills: ["Chuqurlashtirilgan JavaScript", "React/Vue/Angular", "State management", "REST API", "Git", "Webpack"],
    projects: ["Murakkab veb-ilovalar", "E-commerce platformalari", "Korporativ veb-saytlar"],
    description: "Middle dasturchilar mustaqil ishlash qobiliyatiga ega bo'ladilar. Ular murakkab loyihalarni boshqara oladilar va yangi texnologiyalarni tez o'zlashtiradilar."
  },
  {
    level: "Senior Frontend Dasturchi",
    experience: "5+ yil",
    icon: "🏆",
    color: "from-yellow-400 to-red-500",
    skills: ["Chuqur arxitektura bilimlari", "Keng qamrovli freymvork tajribasi", "Performance optimizatsiya", "Xavfsizlik", "Mentorlik"],
    projects: ["Katta masshtabli ilovalar", "Mikroservis arxitekturasi", "Yuqori yuklamali tizimlar"],
    description: "Senior dasturchilar yuqori darajadagi texnik bilimga ega bo'ladilar. Ular murakkab muammolarni hal qiladilar, arxitektura qarorlarini qabul qiladilar va jamoani yo'naltiradilar."
  }
];

function Frontend() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredLevel, setHoveredLevel] = useState(null);

  return (
    <div className="p-2 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Frontend Dasturlash</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Frontend nima?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Frontend dasturlash - bu foydalanuvchi ko'radigan va o'zaro ta'sir qiladigan veb-sayt yoki ilovaning vizual qismini yaratish jarayoni. 
          Bu soha veb-sahifalarning tuzilishi, dizayni va interaktivligini o'z ichiga oladi.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Frontend dasturchilari HTML, CSS va JavaScript kabi asosiy texnologiyalardan foydalanib, foydalanuvchi interfeyslarini ishlab chiqadilar. 
          Ular nafaqat chiroyli va qulay interfeyslar yaratish, balki turli brauzerlar va qurilmalarda bir xil ishlashini ta'minlash, 
          sahifalarning yuklash tezligini optimallashtirishga ham e'tibor qaratishadi.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Zamonaviy frontend dasturlashda React, Vue.js, Angular kabi freymvorklar keng qo'llaniladi. Bu freymvorklar murakkab 
          interfeyslarni yaratish va boshqarishni osonlashtiradi. Bundan tashqari, TypeScript, Webpack, Tailwind CSS kabi 
          texnologiyalar ham keng qo'llanilib, dasturlash jarayonini yanada samaraliroq qiladi.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-700">Asosiy Frontend Texnologiyalari</h2>
      
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

      <h2 className="text-3xl font-bold mb-8 text-gray-800">Frontend Dasturchilar Darajalari</h2>
      
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

export default Frontend;
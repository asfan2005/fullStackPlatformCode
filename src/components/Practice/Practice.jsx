import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaCode,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
  FaMobile,
  FaRoad,
  FaStar,
  FaClipboardCheck,
  FaTrophy,
  FaBook,
  FaLaptopCode,
  FaGithub,
  FaVideo,
  FaTablet,
  FaNewspaper,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiRubyonrails,
  SiDjango,
  SiSpring,
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiKotlin,
  SiSwift,
} from "react-icons/si";
import { Link } from "react-router-dom";

function Practice() {
  const [animate, setAnimate] = useState(false);
  const [filter, setFilter] = useState("all");

  const frontendTechnologies = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
      link: "/html/practice",
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
      link: "/css/practice",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      link: "/frontend/javascript",
      category: "frontend",
    },
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      link: "/frontend/react",
      category: "frontend",
    },
    {
      name: "Vue.js",
      icon: FaVuejs,
      color: "#4FC08D",
      link: "/frontend/vue",
      category: "frontend",
    },
    {
      name: "Angular",
      icon: FaAngular,
      color: "#DD0031",
      link: "/frontend/angular",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      link: "/frontend/typescript",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      link: "/frontend/tailwind",
      category: "frontend",
    },
    {
      name: "Webpack",
      icon: SiWebpack,
      color: "#8DD6F9",
      link: "/frontend/webpack",
      category: "frontend",
    },
  ];

  const backendTechnologies = [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
      link: "/backend/nodejs",
      category: "backend",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
      link: "/backend/python",
      category: "backend",
    },
    {
      name: "Java",
      icon: FaJava,
      color: "#007396",
      link: "/backend/java",
      category: "backend",
    },
    {
      name: "PHP",
      icon: FaPhp,
      color: "#777BB4",
      link: "/backend/php",
      category: "backend",
    },
    {
      name: "Ruby on Rails",
      icon: SiRubyonrails,
      color: "#CC0000",
      link: "/backend/rails",
      category: "backend",
    },
    {
      name: "Django",
      icon: SiDjango,
      color: "#092E20",
      link: "/backend/django",
      category: "backend",
    },
    {
      name: "Spring",
      icon: SiSpring,
      color: "#6DB33F",
      link: "/backend/spring",
      category: "backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      link: "/backend/express",
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      link: "/backend/mongodb",
      category: "backend",
    },
  ];

  const mobileTechnologies = [
    {
      name: "React Native",
      icon: FaReact,
      color: "#61DAFB",
      link: "/mobile/react-native",
      category: "mobile",
    },
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "#02569B",
      link: "/mobile/flutter",
      category: "mobile",
    },
    {
      name: "iOS (Swift)",
      icon: SiSwift,
      color: "#FFAC45",
      link: "/mobile/ios",
      category: "mobile",
    },
    {
      name: "Android (Kotlin)",
      icon: SiKotlin,
      color: "#0095D5",
      link: "/mobile/android",
      category: "mobile",
    },
    {
      name: "Xamarin",
      icon: FaMobile,
      color: "#3498DB",
      link: "/mobile/xamarin",
      category: "mobile",
    },
  ];

  const allTechnologies = [
    ...frontendTechnologies,
    ...backendTechnologies,
    ...mobileTechnologies,
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  const filteredTechnologies =
    filter === "all"
      ? allTechnologies
      : allTechnologies.filter((tech) => tech.category === filter);

  const TechnologyGrid = ({ technologies }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col items-center justify-center cursor-pointer group relative"
        >
          <tech.icon className="text-6xl mb-4" style={{ color: tech.color }} />
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            {tech.name}
          </h3>
          <Link
            to={tech.link}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          >
            <span className="bg-blue-600 px-4 py-2 rounded-full font-semibold">
              Boshlash
            </span>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Farqni ko'ring va rivojlaning
      </h1>
      <div className="mb-12 text-gray-700 text-lg max-w-5xl mx-4">
        <p className="mb-4">
          <span
            className={`inline-block mr-2 ${animate ? "animate-spin" : ""}`}
          >
            🔄
          </span>
          Amaliyot orqali o'rganish - bu bilimlarni mustahkamlash va
          ko'nikmalarni rivojlantirishning eng samarali usullaridan biridir.
        </p>
        <p className="mb-4">
          <span
            className={`inline-block mr-2 ${animate ? "animate-bounce" : ""}`}
          >
            📊
          </span>
          Quyida sizning hozirgi va kelajakdagi ko'rsatkichlaringizni taqqoslash
          imkoniyati berilgan.
        </p>
        <p className="mb-4">
          <span
            className={`inline-block mr-2 ${animate ? "animate-pulse" : ""}`}
          >
            🎯
          </span>
          Bu taqqoslash sizga:
        </p>
        <ul className="list-disc list-inside mb-4 pl-6">
          <li>O'z kuchli va zaif tomonlaringizni aniqlash;</li>
          <li>Rivojlanish uchun aniq maqsadlar belgilash;</li>
          <li>Kelajakdagi imkoniyatlaringizni ko'rish;</li>
          <li>O'sish yo'lingizni rejalashtirish imkonini beradi.</li>
        </ul>
        <p>
          <span
            className={`inline-block mr-2 ${animate ? "animate-ping" : ""}`}
          >
            💡
          </span>
          Esda tuting, har bir qadam sizni orzuingizdagi dasturchilik lavozimiga
          yaqinlashtiradi!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Endi boshlayotgan dasturchi */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex-1 transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
            <svg
              className={`w-8 h-8 mr-3 ${animate ? "animate-bounce" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Endi boshlayotgan dasturchi
          </h2>
          <p className="text-gray-600 mb-6">
            Kelajakka umid bilan qaraydi, ammo aniq yo'nalish va tajriba
            yetishmaydi
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">0</p>
              <p className="text-sm text-gray-500">Amaliy loyihalar</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">0%</p>
              <p className="text-sm text-gray-500">Ish topish imkoniyati</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">$0</p>
              <p className="text-sm text-gray-500">O'rtacha ish haqi</p>
            </div>
          </div>
        </div>

        {/* Kursni tugatgan dasturchi */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 flex-1 border-2 border-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
            <svg
              className={`w-8 h-8 mr-3 ${animate ? "animate-pulse" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Amaliyot tugatgan dasturchi
          </h2>
          <p className="text-blue-600 mb-6">
            O'ziga ishongan, tajribali va ish bozorida raqobatbardosh mutaxassis
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">10+</p>
              <p className="text-sm text-blue-600">Amaliy loyihalar</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">85%</p>
              <p className="text-sm text-blue-600">Ish topish imkoniyati</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">$10k+</p>
              <p className="text-sm text-blue-600">O'rtacha ish haqi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Amaliyotni filtrlash</h2>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("all")}
          >
            Barchasi
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "frontend"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "backend"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "mobile"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="mb-12">
        <TechnologyGrid technologies={filteredTechnologies} />
      </div>

      {/* New Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600">
            <FaRoad
              className={`mr-2 text-3xl ${animate ? "animate-pulse" : ""}`}
            />
            O'rganish yo'llari
          </h2>
          <p className="mb-4 text-gray-600">
            Bizning strukturalashtirilgan o'quv dasturlarimiz orqali o'z
            maqsadlaringizga erishing:
          </p>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center text-gray-700">
              <FaCode
                className={`mr-2 text-blue-500 ${
                  animate ? "animate-spin" : ""
                }`}
              />
              Frontend Developer yo'li
            </li>
            <li className="flex items-center text-gray-700">
              <FaDatabase
                className={`mr-2 text-green-500 ${
                  animate ? "animate-bounce" : ""
                }`}
              />
              Backend Developer yo'li
            </li>
            <li className="flex items-center text-gray-700">
              <FaLaptopCode
                className={`mr-2 text-purple-500 ${
                  animate ? "animate-pulse" : ""
                }`}
              />
              Full Stack Developer yo'li
            </li>
            <li className="flex items-center text-gray-700">
              <FaMobile
                className={`mr-2 text-red-500 ${animate ? "animate-tada" : ""}`}
              />
              Mobile Developer yo'li
            </li>
          </ul>
          <Link
            to="/learning-paths"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Yo'llarni ko'rish
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-yellow-500">
            <FaStar className={`mr-2 ${animate ? "animate-spin" : ""}`} />
            Muvaffaqiyat tarixi
          </h2>
          <blockquote className="italic mb-4 text-gray-600">
            "Bu platforma orqali men 6 oyda professional dasturchi bo'ldim va
            orzuyimdagi ishni topdim!"
          </blockquote>
          <p className="mb-4 font-semibold">
            - To'raqulov Asfandiyor, Full Stack Developer
          </p>
          <Link
            to="/success-stories"
            className="mt-4 inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300"
          >
            Ko'proq hikoyalar
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-green-600">
            <FaClipboardCheck
              className={`mr-2 ${animate ? "animate-bounce" : ""}`}
            />
            Bilim darajangizni baholang
          </h2>
          <p className="mb-4">
            Qaysi sohada bilimingizni oshirish kerakligini aniqlang:
          </p>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center text-gray-700">
              <FaCode
                className={`mr-2 text-blue-500 ${
                  animate ? "animate-spin" : ""
                }`}
              />
              Frontend texnologiyalari bo'yicha test
            </li>
            <li className="flex items-center text-gray-700">
              <FaDatabase
                className={`mr-2 text-green-500 ${
                  animate ? "animate-bounce" : ""
                }`}
              />
              Backend texnologiyalari bo'yicha test
            </li>
            <li className="flex items-center text-gray-700">
              <FaLaptopCode
                className={`mr-2 text-purple-500 ${
                  animate ? "animate-pulse" : ""
                }`}
              />
              Full Stack Developer bo'yicha test
            </li>
            <li className="flex items-center text-gray-700">
              <FaCode
                className={`mr-2 text-blue-500 ${
                  animate ? "animate-spin" : ""
                }`}
              />
              Algoritm va ma'lumotlar strukturasi bo'yicha test
            </li>
          </ul>
          <Link
            to="/skill-assessment"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            Testni boshlash
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-600">
            <FaTrophy className={`mr-2 ${animate ? "animate-bounce" : ""}`} />
            Jamoa musobaqalari
          </h2>
          <p className="mb-4">
            Boshqa dasturchilar bilan raqobatlashing va o'z ko'nikmalaringizni
            sinab ko'ring:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <FaCode
                className={`mr-2 text-blue-500 ${
                  animate ? "animate-pulse" : ""
                }`}
              />
              Haftalik coding challenge
            </li>
            <li className="flex items-center">
              <FaLaptopCode
                className={`mr-2 text-green-500 ${
                  animate ? "animate-spin" : ""
                }`}
              />
              Oylik hackathon
            </li>
            <li className="flex items-center">
              <FaGithub
                className={`mr-2 text-gray-700 ${
                  animate ? "animate-bounce" : ""
                }`}
              />
              Open-source loyihalarga hissa qo'shish musobaqasi
            </li>
          </ul>
          <Link
            to="/community-challenges"
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
          >
            Musobaqalarga qo'shilish
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-red-600">
            <FaBook className={`mr-2 ${animate ? "animate-pulse" : ""}`} />
            Resurslar kutubxonasi
          </h2>
          <p className="mb-4">Qo'shimcha o'rganish uchun foydali manbalar:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <FaVideo
                className={`mr-2 text-blue-500 ${
                  animate ? "animate-bounce" : ""
                }`}
              />
              Video darsliklar
            </li>
            <li className="flex items-center">
              <FaTablet
                className={`mr-2 text-green-500 ${
                  animate ? "animate-pulse" : ""
                }`}
              />
              Elektron kitoblar
            </li>
            <li className="flex items-center">
              <FaNewspaper
                className={`mr-2 text-yellow-500 ${
                  animate ? "animate-spin" : ""
                }`}
              />
              Maqolalar va blog postlar
            </li>
            <li className="flex items-center">
              <FaQuestionCircle
                className={`mr-2 text-purple-500 ${
                  animate ? "animate-bounce" : ""
                }`}
              />
              Coding quizlar va mashqlar
            </li>
          </ul>
          <Link
            to="/resource-library"
            className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Kutubxonaga kirish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Practice;

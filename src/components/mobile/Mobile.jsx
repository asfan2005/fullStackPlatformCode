import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAndroid, FaApple, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiXamarin,
  SiIonic,
  SiFirebase,
  SiRealm,
} from "react-icons/si";

const technologies = [
  {
    name: "Android (Java/Kotlin)",
    icon: FaAndroid,
    color: "#3DDC84",
    description:
      "Google tomonidan ishlab chiqilgan mobil operatsion tizim uchun ilova yaratish.",
    link: "/mobile/android",
  },
  {
    name: "iOS (Swift)",
    icon: FaApple,
    color: "#000000",
    description: "Apple qurilmalari uchun ilovalar yaratish tili va ekotizimi.",
    link: "/mobile/ios",
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "#61DAFB",
    description:
      "Kross-platforma ilovalarni JavaScript yordamida yaratish uchun freymvork.",
    link: "/mobile/react-native",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    description: "Google tomonidan ishlab chiqilgan UI toolkit va freymvork.",
    link: "/mobile/flutter",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    color: "#0095D5",
    description:
      "JVM uchun zamonaviy dasturlash tili, Android uchun rasmiy til.",
    link: "/mobile/kotlin",
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "#FFAC45",
    description:
      "Apple tomonidan iOS, macOS, watchOS va tvOS uchun yaratilgan til.",
    link: "/mobile/swift",
  },
  {
    name: "Xamarin",
    icon: SiXamarin,
    color: "#3498DB",
    description: ".NET freymvorki yordamida kross-platforma ilovalar yaratish.",
    link: "/mobile/xamarin",
  },
  {
    name: "Ionic",
    icon: SiIonic,
    color: "#3880FF",
    description:
      "Web texnologiyalar asosida mobil ilovalar yaratish uchun freymvork.",
    link: "/mobile/ionic",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    description: "Google-ning mobil va veb ilovalar uchun backend xizmati.",
    link: "/mobile/firebase",
  },
];

// ... (boshqa importlar o'zgarishsiz qoladi)

const projects = [
  {
    name: "Fitnes Ilovasi",
    description:
      "React Native yordamida yaratilgan kross-platforma fitnes ilovasi.",
    image:
      "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/facebook/react-native/tree/main/packages/rn-tester",
  },
  {
    name: "Oziq-ovqat Yetkazib Berish",
    description:
      "Flutter va Firebase yordamida yaratilgan oziq-ovqat buyurtma va yetkazib berish ilovasi.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/flutter/samples/tree/main/provider_shopper",
  },
  {
    name: "Ijtimoiy Tarmoq",
    description:
      "Swift va Realm yordamida yaratilgan iOS uchun ijtimoiy tarmoq ilovasi.",
    image:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/realm/realm-swift/tree/master/examples/ios/swift",
  },
];

// ... (qolgan kod o'zgarishsiz qoladi)

const developerLevels = [
  {
    level: "Junior Mobile Dasturchi",
    experience: "0-2 yil",
    icon: "👨‍💻",
    color: "from-green-400 to-blue-500",
    skills: [
      "Asosiy dasturlash tili (Java, Kotlin, Swift yoki JavaScript)",
      "UI komponentlari",
      "Ma'lumotlar saqlash",
      "API bilan ishlash",
    ],
    projects: [
      "Oddiy bir ekranli ilovalar",
      "To-do ro'yxat ilovasi",
      "Kalkulyator ilovasi",
    ],
    description:
      "Junior mobile dasturchilari asosiy tushunchalarni o'rganadilar va kichik ilovalar yaratishni boshlaydilar. Ular UI yaratish, ma'lumotlarni saqlash va API bilan ishlashni o'rganadilar.",
  },
  {
    level: "Middle Mobile Dasturchi",
    experience: "2-5 yil",
    icon: "🚀",
    color: "from-purple-400 to-pink-500",
    skills: [
      "Murakkab UI/UX",
      "Xotira optimizatsiyasi",
      "Mahalliylashtirish",
      "Push-bildirishnomalar",
      "Xavfsizlik",
    ],
    projects: [
      "Ko'p ekranli murakkab ilovalar",
      "Real vaqtda ishlash tizimlari",
      "To'lov integratsiyalari",
    ],
    description:
      "Middle mobile dasturchilari murakkab ilovalarni loyihalash va amalga oshirish qobiliyatiga ega. Ular ilg'or xususiyatlarni qo'shish va ilovaning ishlashini optimallashtirishga e'tibor qaratadilar.",
  },
  {
    level: "Senior Mobile Dasturchi",
    experience: "5+ yil",
    icon: "🏆",
    color: "from-yellow-400 to-red-500",
    skills: [
      "Arxitektura dizayni",
      "Kross-platforma ishlab chiqish",
      "CI/CD",
      "Ilg'or xavfsizlik",
      "Jamoani boshqarish",
    ],
    projects: [
      "Katta masshtabli ilovalar",
      "SDK va freymvorklar yaratish",
      "Ilg'or AR/VR ilovalar",
    ],
    description:
      "Senior mobile dasturchilari yuqori darajadagi texnik bilimga ega bo'ladilar. Ular murakkab muammolarni hal qiladilar, arxitektura qarorlarini qabul qiladilar va jamoani yo'naltiradilar.",
  },
];

function Mobile() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredLevel, setHoveredLevel] = useState(null);

  return (
    <div className="p-2 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Mobile Dasturlash
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Mobile dasturlash nima?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mobile dasturlash - bu smartfonlar, planshetlar va boshqa mobil
          qurilmalar uchun dasturiy ta'minot yaratish jarayoni. Bu Android va
          iOS kabi mobil operatsion tizimlar uchun ilovalar yaratishni o'z
          ichiga oladi.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mobile dasturchilari foydalanuvchi interfeyslarini yaratish, qurilma
          xususiyatlaridan foydalanish, ma'lumotlarni saqlash va sinxronlash,
          hamda ilovaning samaradorligi va xavfsizligini ta'minlash ustida
          ishlaydilar.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Zamonaviy mobile dasturlashda Java, Kotlin, Swift kabi tillar, hamda
          React Native va Flutter kabi kross-platforma freymvorklari keng
          qo'llaniladi. Bundan tashqari, Firebase kabi backend xizmatlari va
          AR/VR texnologiyalari ham tobora ommalashib bormoqda.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-700">
        Asosiy Mobile Texnologiyalari
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {technologies.map((tech) => (
          <Link
            to={tech.link}
            key={tech.name}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <tech.icon
                className="text-5xl mr-4"
                style={{ color: tech.color }}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {tech.name}
              </h3>
            </div>
            <p className="text-gray-600">{tech.description}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-700">
        Loyiha Namunalari
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Mobile Dasturchilar Darajalari
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developerLevels.map((level, index) => (
          <div
            key={level.level}
            className={`bg-gradient-to-br ${
              level.color
            } rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:rotate-1 ${
              hoveredLevel === index ? "shadow-2xl" : "shadow-lg"
            }`}
            onMouseEnter={() => setHoveredLevel(index)}
            onMouseLeave={() => setHoveredLevel(null)}
          >
            <div className="p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{level.level}</h3>
                <span className="text-4xl animate-bounce">{level.icon}</span>
              </div>
              <p className="text-sm font-semibold">
                Tajriba: {level.experience}
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-gray-600 mb-6">{level.description}</p>
              <h4 className="font-bold text-gray-800 mb-2">
                Asosiy ko'nikmalar:
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {level.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="mb-1 transform transition-transform duration-200 hover:translate-x-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-gray-800 mb-2">Loyihalar:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {level.projects.map((project, idx) => (
                  <li
                    key={idx}
                    className="mb-1 transform transition-transform duration-200 hover:translate-x-2"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobile;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaUsers,
  FaProjectDiagram,
  FaBrain,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaClock,
  FaReact,
  FaJs,
  FaMobile,
  FaJava,
  FaNodeJs,
  FaTelegramPlane,
  FaInstagram,
  FaCheck, 
  FaTimes,
} from "react-icons/fa";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Laptop, 
  Brain,
  Terminal,
  Palette,
  Globe,
  Server,
  AppWindow
} from 'lucide-react';

// Add testimonials array
const testimonials = [
  {
    id: 1,
    name: "Aziz Rakhimov",
    role: "Frontend Developer",
    text: "Bu platforma orqali dasturlashni o'rganish juda oson va qiziqarli bo'ldi.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Malika Karimova",
    role: "Backend Developer",
    text: "Ajoyib o'quv materiallari va amaliy mashg'ulotlar bilan ta'minlangan.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 3,
    name: "Jamshid Toshmatov",
    role: "Full Stack Developer",
    text: "Professional darajadagi kurslar va ajoyib hamjamiyat mavjud.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];


const levels = [
  {
    title: "Boshlang'ich",
    icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
    description: "HTML, CSS va JavaScript asoslarini o'rganing",
    projects: [
      "Shaxsiy portfolio",
      "Oddiy kalkulyator",
      "To-do ro'yxati",
      "Soat ilovasi",
      "Ob-havo widget'i",
      "Oddiy o'yin (Tosh, Qaychi, Qog'oz)",
      "Forma validatsiyasi",
      "Responsive landing page",
    ],
  },
  {
    title: "O'rta",
    icon: <FaLaptopCode className="text-4xl mb-4 text-green-500" />,
    description: "React va Node.js bilan tanishing",
    projects: [
      "Blog ilovasi",
      "Ob-havo ma'lumotlari",
      "Chat dasturi",
      "Kitoblar kutubxonasi",
      "Restoran menyu ilovasi",
      "Valyuta konvertori",
      "Musiqa pleyeri",
      "Foydalanuvchi autentifikatsiyasi",
    ],
  },
  {
    title: "Yuqori",
    icon: <FaServer className="text-4xl mb-4 text-purple-500" />,
    description: "Ma'lumotlar bazasi va API'lar bilan ishlashni o'rganing",
    projects: [
      "E-commerce platformasi",
      "Ijtimoiy tarmoq",
      "Task menejment tizimi",
      "Real vaqt ma'lumotlar doskasi",
      "Blog CMS",
      "Onlayn test platformasi",
      "Fayl almashish tizimi",
      "API gateway",
    ],
  },
  {
    title: "Ekspert",
    icon: <FaRocket className="text-4xl mb-4 text-red-500" />,
    description: "Murakkab loyihalar va zamonaviy texnologiyalar",
    projects: [
      "Real vaqt ilovasi (Socket.io)",
      "Machine Learning integratsiyasi",
      "Blockchain loyihasi",
      "Mikroservislar arxitekturasi",
      "GraphQL API",
      "Katta ma'lumotlar tahlili",
      "IoT monitoring tizimi",
      "AR/VR web ilovasi",
    ],
  },
];
// Categories array
const categories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-12 h-12" />,
    color: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600",
    description: "Zamonaviy web interfeyslarini React, Vue va Angular texnologiyalari yordamida yarating",
    features: ["React.js", "Vue.js", "TypeScript", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-12 h-12" />,
    color: "bg-gradient-to-br from-green-100 to-green-200 text-green-600",
    description: "Kuchli va xavfsiz server ilovalarini Node.js va Python texnologiyalari bilan yarating",
    features: ["Node.js", "Python", "REST API", "GraphQL"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-12 h-12" />,
    color: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600",
    description: "React Native va Flutter orqali cross-platform mobil ilovalar yarating",
    features: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    title: "Database Engineering",
    icon: <Database className="w-12 h-12" />,
    color: "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600",
    description: "MongoDB, PostgreSQL va Redis orqali ma'lumotlar bazasini boshqaring",
    features: ["MongoDB", "PostgreSQL", "Redis", "SQL"]
  },
  {
    title: "Cloud Computing",
    icon: <Globe className="w-12 h-12" />,
    color: "bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-600",
    description: "AWS va Google Cloud platformalarida zamonaviy cloud infratuzilmani yarating",
    features: ["AWS", "Google Cloud", "Azure", "DevOps"]
  },
  {
    title: "DevOps",
    icon: <Terminal className="w-12 h-12" />,
    color: "bg-gradient-to-br from-red-100 to-red-200 text-red-600",
    description: "Docker va Kubernetes orqali avtomatlashtirilgan deployment jarayonlarini sozlang",
    features: ["Docker", "Kubernetes", "CI/CD", "Jenkins"]
  },
  {
    title: "AI Development",
    icon: <Brain className="w-12 h-12" />,
    color: "bg-gradient-to-br from-teal-100 to-teal-200 text-teal-600",
    description: "TensorFlow va PyTorch orqali sun'iy intellekt loyihalarini yarating",
    features: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"]
  },
  {
    title: "System Design",
    icon: <AppWindow className="w-12 h-12" />,
    color: "bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600",
    description: "Masshtabli va yuqori unumli tizimlarni loyihalashtiring",
    features: ["Architecture", "Scalability", "Performance", "Security"]
  },
  {
    title: "Cyber Security",
    icon: <Laptop className="w-12 h-12" />,
    color: "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600",
    description: "Zamonaviy xavfsizlik protokollari va himoya tizimlarini o'rganing",
    features: ["Network Security", "Encryption", "Penetration Testing", "Security Protocols"]
  }
];

const plans = [
  {
    name: "Oddiy",
    price: {
      monthly: "Bepul",
      yearly: "Bepul"
    },
    features: [
      { name: "Asosiy darslar", included: true },
      { name: "Cheklangan loyihalar", included: true },
      { name: "Umumiy forum", included: true },
      { name: "Jobs ko'rish", included: false },
      { name: "Mentorlar bilan suhbat", included: false },
      { name: "Loyihalarda yordam", included: false },
      { name: "Sertifikat", included: false },
      { name: "Mock intervyular", included: false },
      { name: "Mukammal loyihalarda qatnashish", included: false },
      { name: "Shaxsiy karyera maslahatlari", included: false },
      { name: "Haftalik live kodlash sessiyalari", included: false },
      { name: "Maxsus texnik seminarlar", included: false },
    ]
  },
  {
    name: "Premium",
    price: {
      monthly: "50,000 so'm",
      yearly: "500,000 so'm"
    },
    features: [
      { name: "Barcha darslar", included: true },
      { name: "Cheksiz loyihalar", included: true },
      { name: "Maxsus forum", included: true },
      { name: "Jobs ko'rish", included: true },
      { name: "Mentorlar bilan suhbat", included: true },
      { name: "Loyihalarda yordam", included: true },
      { name: "Sertifikat", included: true },
      { name: "Mock intervyular", included: true },
      { name: "Mukammal loyihalarda qatnashish", included: true },
      { name: "Shaxsiy karyera maslahatlari", included: true },
      { name: "Haftalik live kodlash sessiyalari", included: true },
      { name: "Maxsus texnik seminarlar", included: true },
    ]
  },
  {
    name: "Online kurs",
    price: {
      monthly: "300,000 so'm",
      yearly: "3,000,000 so'm"
    },
    features: [
      { name: "Barcha Premium imkoniyatlar", included: true },
      { name: "Haftada 3 kun jonli darslar", included: true },
      { name: "1 haftalik intensiv bootcamp", included: true },
      { name: "Shaxsiy mentor", included: true },
      { name: "Kichik guruhlar (maksimum 10 kishi)", included: true },
      { name: "Real loyihalar ustida ishlash", included: true },
      { name: "Networking imkoniyatlari", included: true },
      { name: "Ishga joylashishda yordam", included: true },
      { name: "24/7 qo'llab-quvvatlash", included: true },
      { name: "Maxsus mehmon ma'ruzalari", included: true },
      { name: "Portfolio yaratishda yordam", included: true },
      { name: "Kafolatlangan natija", included: true },
    ]
  }
];

// Trafik component defined outside Home
const Trafik = () => {
  const handleButtonClick = () => {
    window.open('https://t.me/asfan_001', '_blank');
  };
  return null; // Add return statement if needed
};

// Helper components defined outside Home
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 border border-gray-100 hover:border-purple-300"
    >
      <motion.div
        className="mb-6 bg-gradient-to-br from-purple-100 to-indigo-100 p-4 rounded-full inline-block"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4 text-purple-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function LearningPathStep({ icon, title, description, details }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300"
    >
      <motion.div
        className="mb-6 text-5xl text-indigo-500"
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4 text-purple-600">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="text-left text-sm">
        {details.map((detail, index) => (
          <li key={index} className="mb-3 flex items-start">
            <FaRocket className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function StatisticCard({ icon, number, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
    >
      <div className="text-4xl mb-4 text-yellow-300">{icon}</div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-lg">{text}</p>
    </motion.div>
  );
}

function TechnologyBadge({ name, percentage }) {
  return (
    <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
      <span className="font-semibold">{name}</span>
      <span className="ml-2 text-yellow-300">{percentage}%</span>
    </div>
  );
}

function CourseCard({ icon, title, description, level, duration }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-300"
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 bg-indigo-100 p-3 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold text-purple-600">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{level}</span>
        <span>{duration}</span>
      </div>
    </motion.div>
  );
}

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  // Add handleButtonClick function inside Home component
  const handleButtonClick = () => {
    window.open('https://t.me/asfan_001', '_blank');
  };

  // Categories auto-scroll
  useEffect(() => {
    const categoryTimer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(categoryTimer);
  }, [totalSlides]);

  // Testimonials auto-scroll
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);


  // trafik

  // Get current slide items
  const getCurrentSlideItems = () => {
    const startIndex = currentCategory * itemsPerSlide;
    return categories.slice(startIndex, startIndex + itemsPerSlide);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="relative py-32 px-4 overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
              Koding <span className="text-yellow-300">Sarguzashtingiz</span>{" "}
              Boshlansin!
            </h1>
            <p className="text-xl lg:text-2xl mb-8 font-light text-gray-100">
              FullStack Practice Platform bilan g'oyalaringizni hayotga tatbiq
              eting. Koding olamida sayohat qiling, innovatsiyalar yarating va
              kelajakni shakllantiring!
            </p>
          </motion.div>

          {/* Right side animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Background shape */}
              <motion.path
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />

              {/* Code symbols */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <text
                  x="70"
                  y="90"
                  fill="white"
                  fontSize="24"
                  fontFamily="monospace"
                >
                  &lt;/&gt;
                </text>
                <text
                  x="100"
                  y="130"
                  fill="white"
                  fontSize="24"
                  fontFamily="monospace"
                >
                  {"{"}
                </text>
                <text
                  x="130"
                  y="90"
                  fill="white"
                  fontSize="24"
                  fontFamily="monospace"
                >
                  ( )
                </text>
              </motion.g>

              {/* Animated dots */}
              <motion.g
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <circle cx="100" cy="40" r="4" fill="yellow" />
                <circle cx="160" cy="100" r="4" fill="cyan" />
                <circle cx="100" cy="160" r="4" fill="magenta" />
                <circle cx="40" cy="100" r="4" fill="lime" />
              </motion.g>

              {/* Central icon */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              >
                <circle cx="100" cy="100" r="40" fill="white" />
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  fill="purple"
                  fontSize="50"
                  fontWeight="bold"
                >
                  FS
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </div>

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 text-4xl text-yellow-300 opacity-70"
        >
          <FaRocket />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-10 text-4xl text-cyan-300 opacity-70"
        >
          <FaLaptopCode />
        </motion.div>
        <motion.div
          animate={{ x: [0, 20, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 right-20 text-4xl text-pink-300 opacity-70"
        >
          <FaBrain />
        </motion.div>
      </header>

      {/* Categories Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Dasturlash Yo'nalishlari
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed px-4">
                Zamonaviy dasturlash sohasining eng istiqbolli yo'nalishlarini o'rganing va 
                o'z karyerangizni boshlang. Har bir yo'nalish bo'yicha professional mentorlar 
                va amaliy loyihalar sizni kutmoqda.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`${category.color} rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="bg-white/80 rounded-xl p-4 w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center shadow-inner">
                    {category.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className="font-bold text-lg md:text-xl mb-3">
                      {category.title}
                    </h3>
                    <p className="text-sm md:text-base mb-6 opacity-90 line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {category.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-white/50 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-purple-600">
            Mashhur <span className="text-indigo-600">Kurslar</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              icon={<FaReact className="text-4xl text-blue-500" />}
              title="ReactJS Asoslari"
              description="Zamonaviy UI yaratishning eng mashhur kutubxonasini o'rganing"
              level="Boshlang'ich"
              duration="8 hafta"
            />
            <CourseCard
              icon={<FaJs className="text-4xl text-yellow-500" />}
              title="JavaScript Chuqurlashtirilgan Kurs"
              description="JavaScript tilining ilg'or xususiyatlarini o'zlashtiring"
              level="O'rta"
              duration="10 hafta"
            />
            <CourseCard
              icon={<FaMobile className="text-4xl text-blue-400" />}
              title="React Native bilan Mobile Dasturlash"
              description="Bir kod bilan Android va iOS uchun ilovalar yarating"
              level="O'rta"
              duration="12 hafta"
            />
            <CourseCard
              icon={<FaDatabase className="text-4xl text-green-500" />}
              title="MongoDB va NoSQL"
              description="Zamonaviy ma'lumotlar bazasi tizimlarini o'rganing"
              level="Boshlang'ich"
              duration="6 hafta"
            />
            <CourseCard
              icon={<FaJava className="text-4xl text-red-500" />}
              title="Java Dasturlash Asoslari"
              description="Eng mashhur dasturlash tillaridan birini o'rganing"
              level="Boshlang'ich"
              duration="10 hafta"
            />
            <CourseCard
              icon={<FaNodeJs className="text-4xl text-green-600" />}
              title="Node.js va Backend Dasturlash"
              description="JavaScript yordamida server tomonini yaratishni o'rganing"
              level="O'rta"
              duration="8 hafta"
            />
          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Har bir bosqichda o'sib boring
            </h2>
            <p className="text-lg text-gray-600">
              Dasturlash sayohatingizda bosqichma-bosqich rivojlaning va professional darajaga ko'tariling
            </p>
          </motion.div>

          {/* Grid container with max 2 items per row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header with improved gradient */}
                <div className="relative p-8 text-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
                  <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-white shadow-md mb-6 transform transition-transform group-hover:scale-110 ring-2 ring-purple-100">
                      {level.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {level.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{level.description}</p>
                  </div>
                </div>

                {/* Projects List with improved styling */}
                <div className="p-6 bg-white">
                  <div className="space-y-3">
                    {level.projects.map((project, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="flex items-center group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-200">
                          <svg 
                            className="w-5 h-5 text-indigo-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                        </div>
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                          {project}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Improved Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium 
                      shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-700 hover:to-indigo-700
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                      text-sm md:text-base tracking-wide uppercase"
                  >
                    Boshlash
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Tariflar
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              O'zingizga mos tarifni tanlang va dasturlash sayohatingizni boshlang
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative w-full md:w-96 bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.name === "Online kurs" 
                    ? "border-2 border-green-500" 
                    : plan.name === "Premium" 
                    ? "border-2 border-indigo-500" 
                    : ""
                }`}
              >
                {plan.name === "Premium" && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-indigo-500 text-white text-sm px-4 py-1 rounded-bl-lg">
                      Eng mashhur
                    </div>
                  </div>
                )}

                {plan.name === "Online kurs" && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-500 text-white text-sm px-4 py-1 rounded-bl-lg">
                      Maxsus taklif
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      plan.name === "Online kurs" 
                        ? "text-green-600" 
                        : plan.name === "Premium" 
                        ? "text-indigo-600" 
                        : "text-gray-800"
                    }`}>
                      {plan.name}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price.monthly}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">oyiga</p>
                      
                      <div className="mt-2 text-lg font-semibold text-gray-700">
                        {plan.price.yearly}
                        <span className="text-sm text-gray-500 block">yiliga</span>
                      </div>
                    </div>

                    <div className={`w-16 h-1 mx-auto rounded-full ${
                      plan.name === "Online kurs" 
                        ? "bg-gradient-to-r from-green-400 to-green-600" 
                        : plan.name === "Premium" 
                        ? "bg-gradient-to-r from-indigo-400 to-indigo-600" 
                        : "bg-gradient-to-r from-gray-300 to-gray-500"
                    }`} />
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        {feature.included ? (
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <FaCheck className="text-green-500 w-3 h-3" />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                            <FaTimes className="text-red-500 w-3 h-3" />
                          </div>
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-800" : "text-gray-400"}`}>
                          {feature.name}
                        </span>
                        {(plan.name === "Premium" && !plans[0].features[idx]?.included) || 
                         (plan.name === "Online kurs" && idx > 0) ? (
                          <FaStar className="text-yellow-400 w-4 h-4 ml-auto" />
                        ) : null}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleButtonClick}
                    className={`w-full py-3 px-6 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg ${
                      plan.name === "Online kurs" 
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-200" 
                        : plan.name === "Premium"
                        ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-indigo-200"
                        : "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 shadow-gray-200"
                    }`}
                  >
                    {plan.name === "Online kurs" 
                      ? "Kursga yozilish" 
                      : plan.name === "Premium" 
                      ? "Premium ga o'tish" 
                      : "Boshlash"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      <footer className="bg-gray-800 text-white py-4 rounded">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="h-8 w-auto mr-2"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="8" fill="#4F46E5" />
              <path
                d="M20 8L32 32H8L20 8Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M20 18L26 32H14L20 18Z" fill="white" />
            </svg>
            <span className="text-2xl font-bold">FS</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://t.me/asfan_001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/asfan_001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

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
} from "react-icons/fa";

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aziza Soliyeva",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Bu platforma orqali men nafaqat nazariy bilimlarni, balki amaliy ko'nikmalarni ham egalladim. Haqiqiy loyihalar ustida ishlash menga katta tajriba berdi!",
      rating: 5,
    },
    {
      name: "Bobur Aliyev",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "FullStack Practice Platform menga dasturlash dunyosida o'z o'rnimni topishga yordam berdi. Amaliy mashg'ulotlar va qiziqarli loyihalar tufayli men tez orada ish topdim.",
      rating: 5,
    },
    {
      name: "Gulnora Karimova",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Men bu platformani har bir dasturlashni o'rganmoqchi bo'lganlarga tavsiya qilaman. Bu yerda siz nafaqat kod yozishni, balki muammolarni hal qilishni ham o'rganasiz.",
      rating: 4,
    },
    {
      name: "Sardor Umarov",
      role: "Mobile Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      text: "FullStack Practice Platform menga web dasturlashdan tashqari mobile dasturlash sirlarini ham o'rgatdi. Endi men cross-platform ilovalar yarata olaman!",
      rating: 5,
    },
    {
      name: "Nilufar Rahimova",
      role: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      text: "Bu platforma nafaqat dasturlash, balki dizayn sohasida ham juda foydali. Men front-end va UX/UI dizayn integratsiyasini mukammal o'rganib oldim.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Platform Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-purple-600">
            Nima uchun{" "}
            <span className="text-indigo-600">FullStack Practice Platform</span>
            ?
          </h2>
          <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
            Oddiy video darslardan farqli o'laroq, bizning platforma 100%
            amaliyotga asoslangan. Bu yerda siz nafaqat o'rganasiz, balki
            yaratish orqali o'sib borasiz!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<FaCode className="text-6xl text-purple-500" />}
              title="Jonli Kodlash Tajribasi"
              description="Har bir mavzu bo'yicha interaktiv kodlash mashqlari. Nazariyani emas, amaliyotni o'rganing!"
            />
            <FeatureCard
              icon={<FaProjectDiagram className="text-6xl text-blue-500" />}
              title="Real Loyihalar"
              description="Haqiqiy dunyodagi loyihalar ustida ishlang. Portfolio yarating, tajriba orttiring."
            />
            <FeatureCard
              icon={<FaBrain className="text-6xl text-green-500" />}
              title="Muammolarni Yechish"
              description="Kodlash qobiliyatingizni chiniqtiruvchi qiziqarli muammolar va topshiriqlar."
            />
            <FeatureCard
              icon={<FaRocket className="text-6xl text-red-500" />}
              title="Shaxsiy Rivojlanish"
              description="Har bir mashq bilan yangi ko'nikmalar egallab, o'sib boring."
            />
            <FeatureCard
              icon={<FaUsers className="text-6xl text-yellow-500" />}
              title="Hamkorlikdagi O'qish"
              description="Boshqa dasturchilar bilan birgalikda ishlang, tajriba almashing."
            />
            <FeatureCard
              icon={<FaLaptopCode className="text-6xl text-indigo-500" />}
              title="Zamonaviy Texnologiyalar"
              description="Eng so'nggi dasturlash texnologiyalari va asboblarini amalda qo'llang."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-purple-600">
            Platformamiz Haqida <span className="text-indigo-600">Fikrlar</span>
          </h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              <AnimatePresence initial={false}>
                {[0, 1, 2].map((offset) => {
                  const testimonialIndex =
                    (currentTestimonial + offset) % testimonials.length;
                  const testimonial = testimonials[testimonialIndex];
                  return (
                    <motion.div
                      key={testimonialIndex}
                      className="w-full md:w-1/3 px-4 flex-shrink-0"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-purple-600">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm italic flex-grow">
                          <FaQuoteLeft className="inline-block mr-2 text-indigo-400" />
                          {testimonial.text}
                          <FaQuoteRight className="inline-block ml-2 text-indigo-400" />
                        </p>
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-xl ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-purple-600 hover:text-lg text-purple-600 hover:text-purple-800 focus:outline-none"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-purple-600 hover:text-purple-800 focus:outline-none"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Platformadagi{" "}
            <span className="text-yellow-300">Muvaffaqiyatlar</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatisticCard
              icon={<FaUsers />}
              number="10,000+"
              text="Faol foydalanuvchilar"
            />
            <StatisticCard
              icon={<FaProjectDiagram />}
              number="5,000+"
              text="Yakunlangan loyihalar"
            />
            <StatisticCard
              icon={<FaGraduationCap />}
              number="50+"
              text="O'rganish yo'nalishlari"
            />
            <StatisticCard
              icon={<FaClock />}
              number="1,000,000+"
              text="O'rganishga sarflangan soatlar"
            />
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Eng Mashhur Texnologiyalar
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechnologyBadge name="JavaScript" percentage={85} />
              <TechnologyBadge name="React" percentage={70} />
              <TechnologyBadge name="Node.js" percentage={65} />
              <TechnologyBadge name="Java" percentage={60} />
              <TechnologyBadge name="SQL" percentage={55} />
            </div>
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

      {/* Learning Path */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-purple-600">
            Full Stack <span className="text-indigo-600">Qahramoniga</span>{" "}
            Aylanish Yo'li
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LearningPathStep
              icon={<FaCode />}
              title="1. Koding Poydevori"
              description="HTML, CSS va JavaScript sirlarini ochib, web olamiga ilk qadamingizni qo'ying."
              details={[
                "Web sahifalar arxitekturasini yarating",
                "JavaScript sehri bilan tanishing",
                "Responsive dizayn san'atini o'rganing",
              ]}
            />
            <LearningPathStep
              icon={<FaLaptopCode />}
              title="2. Front-end Sarguzashtlari"
              description="Zamonaviy front-end texnologiyalari bilan tanishib, foydalanuvchi interfeyslarini yarating."
              details={[
                "React yoki Vue kabi freymvorklar bilan do'stlashing",
                "Komponentlar va state boshqaruvi sirlarini o'rganing",
                "SPA (Single Page Application) yaratish san'atini egallang",
              ]}
            />
            <LearningPathStep
              icon={<FaServer />}
              title="3. Back-end Sehrgarlik"
              description="Server tomonidagi dasturlash orqali loyihangizga kuch va aql baxsh eting."
              details={[
                "Node.js va Express.js bilan tanishing",
                "RESTful API yaratish san'atini o'rganing",
                "Ma'lumotlar bazalari bilan ishlash sirlarini kashf eting",
              ]}
            />
            <LearningPathStep
              icon={<FaProjectDiagram />}
              title="4. Full Stack Qahramonlik"
              description="Front-end va back-end bilimlaringizni birlashtirb, to'liq web ilovalar yarating."
              details={[
                "Front-end va back-end integratsiyasini amalga oshiring",
                "Xavfsizlik va autentifikatsiya tizimlarini yarating",
                "Loyihangizni dunyoga taqdim etish va rivojlantirish sirlarini o'rganing",
              ]}
            />
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

export default Home;

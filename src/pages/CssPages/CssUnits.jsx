import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaRuler, 
  FaPercent, 
  FaMobileAlt, 
  FaDesktop, 
  FaTabletAlt, 
  FaPrint,
  FaInfoCircle,
  FaCode,
  FaBookOpen,
  FaLightbulb
} from "react-icons/fa";

function CssUnits() {
  const [activeTab, setActiveTab] = useState('absolute');
  const [showExample, setShowExample] = useState(null);

  // CSS Units haqida umumiy ma'lumot
  const generalInfo = {
    title: "CSS O'lchov Birliklari",
    description: `CSS o'lchov birliklari veb-sahifadagi elementlarning o'lchamlarini belgilash uchun ishlatiladigan 
    qiymatlardir. Ular orqali elementlarning kengligi, balandligi, matn o'lchami va boshqa xususiyatlarini 
    aniq belgilash mumkin. CSS o'lchov birliklari ikki asosiy turga bo'linadi: mutlaq va nisbiy birliklar.`,
    keyPoints: [
      {
        icon: <FaRuler className="text-blue-500" />,
        title: "Mutlaq Birliklar",
        desc: "O'zgarmas, aniq o'lchamlar (px, pt, cm). Ekran o'lchami o'zgarganda ham o'z qiymatini saqlab qoladi."
      },
      {
        icon: <FaPercent className="text-purple-500" />,
        title: "Nisbiy Birliklar",
        desc: "O'zgaruvchan o'lchamlar (rem, em, %). Ota element yoki viewport o'lchamiga qarab o'zgaradi."
      },
      {
        icon: <FaMobileAlt className="text-green-500" />,
        title: "Viewport Birliklar",
        desc: "Ekran o'lchamiga nisbatan birliklar (vh, vw). Responsive dizayn uchun juda foydali."
      }
    ],
    usageTips: [
      "Responsive dizayn uchun nisbiy birliklardan foydalaning",
      "Aniq o'lchamlar kerak bo'lganda mutlaq birliklarni ishlating",
      "Matn o'lchami uchun rem yoki em birliklarini tanlang",
      "Chop etish uchun pt, cm kabi birliklardan foydalaning"
    ]
  };

  const absoluteUnits = [
    {
      unit: "px",
      icon: <FaDesktop className="text-blue-500 text-2xl" />,
      desc: "Piksellar - Eng ko'p ishlatiladigan o'zgarmas birlik. 1 piksel ekrandagi eng kichik nuqta hisoblanadi.",
      example: "width: 200px",
      usage: [
        "Ramkalar uchun",
        "Aniq o'lchamli elementlar uchun",
        "Kichik spacing (oraliq) uchun"
      ],
      realExample: (
        <div className="w-[200px] h-12 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white rounded-lg shadow-md">
          200px kenglikdagi quti
        </div>
      ),
      codeExample: `
/* Tugma dizayni */
.button {
  width: 200px;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 24px;
  margin: 8px;
}

/* Kartochka dizayni */
.card {
  width: 320px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
      `
    },
    {
      unit: "pt",
      icon: <FaPrint className="text-purple-500 text-2xl" />,
      desc: "Nuqtalar - 1 dyuymning 1/72 qismi. Asosan chop etish uchun ishlatiladi.",
      example: "font-size: 12pt",
      usage: [
        "Chop etish uchun matn o'lchami",
        "Print stillar uchun",
        "PDF generatsiya qilishda"
      ],
      realExample: (
        <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md">
          <p style={{ fontSize: "12pt" }} className="text-white">Bu matn 12pt o'lchamda</p>
        </div>
      ),
      codeExample: `
/* Print stili */
@media print {
  .document {
    font-size: 12pt;
    line-height: 14pt;
    margin: 1in;
  }
  
  .header {
    font-size: 18pt;
    margin-bottom: 12pt;
  }
}
      `
    },
    {
      unit: "cm",
      desc: "Santimetr - 1cm = 37.8px",
      example: "width: 2cm",
      realExample: (
        <div style={{ width: "2cm" }} className="h-12 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white rounded-lg shadow-md">
          2cm kenglik
        </div>
      ),
      codeExample: `
.print-element {
  width: 2cm;
  height: 1cm;
  margin: 0.5cm;
}
      `
    }
  ];

  const relativeUnits = [
    {
      unit: "rem",
      icon: <FaBookOpen className="text-indigo-500 text-2xl" />,
      desc: "Root Element ga nisbatan (odatda 1rem = 16px). Responsive dizayn uchun eng yaxshi tanlov.",
      example: "width: 10rem",
      usage: [
        "Responsive matn o'lchamlari uchun",
        "Moslashuvchan spacing uchun",
        "Umumiy layout uchun"
      ],
      realExample: (
        <div className="w-[10rem] h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white rounded-lg shadow-md">
          10rem kenglikdagi quti
        </div>
      ),
      codeExample: `
/* Root element sozlamalari */
:root {
  font-size: 16px; /* 1rem = 16px */
}

/* Responsive typography */
.heading {
  font-size: 2rem;    /* 32px */
  margin: 1.5rem 0;   /* 24px 0 */
}

.text {
  font-size: 1rem;    /* 16px */
  line-height: 1.5;   /* 24px */
}

/* Media query bilan */
@media (max-width: 768px) {
  :root {
    font-size: 14px; /* Mobil qurilmalarda kichikroq */
  }
}
      `
    },
    {
      unit: "%",
      desc: "Ota elementga nisbatan foizda",
      example: "width: 50%",
      realExample: (
        <div className="w-full bg-gray-100 p-4 rounded-lg">
          <div className="w-1/2 h-12 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white rounded-lg shadow-md">
            50% kenglik
          </div>
        </div>
      ),
      codeExample: `
.responsive-layout {
  width: 50%;
  margin: 0 auto;
  padding: 5%;
}

.column {
  width: 33.33%;
  float: left;
}
      `
    },
    {
      unit: "vh/vw",
      desc: "Viewport (ekran) balandligi/kengligi",
      example: "height: 30vh",
      realExample: (
        <div className="h-[30vh] bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white rounded-lg shadow-md">
          30vh balandlik
        </div>
      ),
      codeExample: `
.hero-section {
  height: 100vh;
  width: 100vw;
}

.half-screen {
  height: 50vh;
  width: 50vw;
}
      `
    }
  ];

  const viewportUnits = [
    {
      unit: "vmin",
      desc: "Viewport ning eng kichik o'lchamining 1%",
      example: "width: 50vmin",
      realExample: (
        <div className="w-[50vmin] h-12 bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white rounded-lg shadow-md">
          50vmin kenglik
        </div>
      ),
      codeExample: `
.square {
  width: 50vmin;
  height: 50vmin;
}
      `
    },
    {
      unit: "vmax",
      desc: "Viewport ning eng katta o'lchamining 1%",
      example: "width: 50vmax",
      realExample: (
        <div className="w-[50vmax] h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white rounded-lg shadow-md">
          50vmax kenglik
        </div>
      ),
      codeExample: `
.responsive-element {
  width: 50vmax;
  max-height: 75vmax;
}
      `
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Asosiy Container */}
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sarlavha */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
        >
          CSS O'lchov Birliklari
        </motion.h1>

        {/* Kirish Animatsiyasi */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full mb-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">CSS O'lchov Birliklari Nima?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            CSS o'lchov birliklari veb-sahifadagi elementlarning o'lchamlarini belgilash uchun ishlatiladigan 
            qiymatlardir. Ular orqali elementlarning kengligi, balandligi, matn o'lchami va boshqa xususiyatlarini 
            aniq belgilash mumkin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-600 mb-2">Mutlaq Birliklar</h3>
              <p className="text-sm text-gray-600">O'zgarmas, aniq o'lchamlar (px, pt, cm)</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h3 className="font-semibold text-purple-600 mb-2">Nisbiy Birliklar</h3>
              <p className="text-sm text-gray-600">O'zgaruvchan o'lchamlar (rem, em, %)</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-green-600 mb-2">Viewport Birliklar</h3>
              <p className="text-sm text-gray-600">Ekranga nisbatan (vh, vw, vmin, vmax)</p>
            </div>
          </div>
        </motion.div>

        {/* Tab Paneli */}
        <div className="w-full mb-8 flex flex-wrap gap-4 justify-center">
          {['absolute', 'relative', 'viewport'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {tab === 'absolute' ? 'Mutlaq Birliklar' :
               tab === 'relative' ? 'Nisbiy Birliklar' : 'Viewport Birliklar'}
            </button>
          ))}
        </div>

        {/* Birliklar Ko'rsatish */}
        <motion.div 
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeTab === 'absolute' && absoluteUnits.map((item, index) => (
            <UnitCard key={index} item={item} index={index} />
          ))}
          {activeTab === 'relative' && relativeUnits.map((item, index) => (
            <UnitCard key={index} item={item} index={index} />
          ))}
          {activeTab === 'viewport' && viewportUnits.map((item, index) => (
            <UnitCard key={index} item={item} index={index} />
          ))}
        </motion.div>

        {/* Amaliy Qo'llanma */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full mt-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Amaliy Qo'llanma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ramkalar uchun px",
                desc: "Aniq chegaralar uchun piksellardan foydalaning",
                example: <div className="border-2 border-blue-500 p-2 rounded-lg">2px ramka</div>
              },
              {
                title: "Matn uchun rem",
                desc: "Shrift o'lchami uchun rem birligini ishlating",
                example: <p className="text-2xl font-medium">2rem matn</p>
              },
              {
                title: "Layout uchun %",
                desc: "Moslashuvchan kengliklar uchun foizlardan foydalaning",
                example: <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg" />
              },
              {
                title: "Ekran uchun vh/vw",
                desc: "To'liq ekran elementlari uchun viewport birliklarini ishlating",
                example: <div className="h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg" />
              }
            ].map((practice, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">{practice.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{practice.desc}</p>
                {practice.example}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Unit Card komponenti
function UnitCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.unit}</h3>
      <p className="text-gray-600 mb-4">{item.desc}</p>
      <code className="block p-3 bg-gray-50 rounded-lg text-sm text-blue-600 mb-4">
        {item.example}
      </code>
      <div className="mt-4">
        {item.realExample}
      </div>
    </motion.div>
  );
}

export default CssUnits;
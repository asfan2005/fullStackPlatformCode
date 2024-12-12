import React, { useState } from "react";

function CssResponsiveDesign() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const codeExamples = {
    mediaQuery: `/* Mobile First Approach */
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 15px;
}

/* Tablet (768px and up) */
@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop (1024px and up) */
@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Large Desktop (1280px and up) */
@media screen and (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}`,
    flexbox: `/* Responsive Flexbox Layout */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px;
}

.flex-item {
  flex: 1 1 100%; /* Full width on mobile */
}

@media (min-width: 768px) {
  .flex-item {
    flex: 0 1 calc(50% - 10px); /* Two columns on tablet */
  }
}

@media (min-width: 1024px) {
  .flex-item {
    flex: 0 1 calc(33.333% - 15px); /* Three columns on desktop */
  }
}`,
    grid: `/* Responsive Grid Layout */
.grid-container {
  display: grid;
  gap: 20px;
  padding: 15px;
  grid-template-columns: 1fr; /* Single column on mobile */
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablet */
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Auto-fit on desktop */
  }
}`
  };

  const renderCodeBlock = (code) => (
    <div className="bg-gray-900 rounded-lg p-4 overflow-hidden">
      <pre className="text-sm text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-3xl font-bold">Responsive Design Haqida</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Responsive web design (RWD) - bu web-saytlarni turli xil qurilmalar va ekran o'lchamlariga moslashtirishga imkon beruvchi yondashuv. Bu mobil telefonlar, planshetlar, noutbuklar va desktop kompyuterlar kabi turli qurilmalarda optimal ko'rinish va foydalanish tajribasini ta'minlaydi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">Asosiy Tamoyillar</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
                      title: "Moslashuvchan grid layoutlar",
                      desc: "Kontentni turli ekran o'lchamlariga moslashtirishga imkon beruvchi egiluvchan grid tizimi"
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
                      title: "Responsive rasmlar",
                      desc: "Rasmlarning konteyner o'lchamiga qarab moslashishi"
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                      title: "Media querylar",
                      desc: "Ekran o'lchami va orientatsiyasiga qarab stillarni o'zgartirish"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">Afzalliklari</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />,
                      title: "Yaxshilangan foydalanuvchi tajribasi",
                      desc: "Har qanday qurilmada optimal ko'rinish"
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
                      title: "Keng qamrovli qulaylik",
                      desc: "Barcha qurilmalar uchun moslanish"
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                      title: "SEO optimizatsiyasi",
                      desc: "Qidiruv tizimlarida yuqori natijalar"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold dark:text-white">Qo'shimcha Ma'lumotlar</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                    title: "Zamonaviy yondashuvlar",
                    desc: "CSS Grid, Flexbox va Container Queries"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                    title: "Kelajak tendensiyalari",
                    desc: "Yangi texnologiyalar va yondashuvlar"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
                    title: "Test qilish ahamiyati",
                    desc: "Turli qurilmalarda sinab ko'rish"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold dark:text-white">Amaliy Misollar</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold dark:text-white">Media Queries</h3>
                {renderCodeBlock(codeExamples.mediaQuery)}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold dark:text-white">Flexbox Layout</h3>
                {renderCodeBlock(codeExamples.flexbox)}
              </div>
              <div className="space-y-4 lg:col-span-2">
                <h3 className="text-xl font-semibold dark:text-white">Grid Layout</h3>
                {renderCodeBlock(codeExamples.grid)}
              </div>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Responsive Design Vositalari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Chrome DevTools",
                  description: "Turli qurilmalarni simulyatsiya qilish va responsive designni tekshirish uchun",
                  link: "https://developers.google.com/web/tools/chrome-devtools"
                },
                {
                  name: "Tailwind CSS",
                  description: "Responsive dizayn uchun utility-first CSS framework",
                  link: "https://tailwindcss.com"
                },
                {
                  name: "Bootstrap",
                  description: "Responsive grid tizimi va komponentlari bilan mashhur framework",
                  link: "https://getbootstrap.com"
                },
                {
                  name: "Responsively",
                  description: "Barcha qurilmalarda bir vaqtning o'zida tekshirish uchun desktop dastur",
                  link: "https://responsively.app"
                },
                {
                  name: "Figma",
                  description: "Responsive dizaynni loyihalash uchun vosita",
                  link: "https://www.figma.com"
                },
                {
                  name: "Am I Responsive?",
                  description: "Web-saytning responsive ko'rinishini tekshirish uchun onlayn vosita",
                  link: "http://ami.responsivedesign.is"
                }
              ].map((tool, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Batafsil →
                  </a>
                </div>
              ))}
            </div>
          </div>
        );

      case 'best-practices':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Eng Yaxshi Amaliyotlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Dizayn Tamoyillari</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Mobile-first yondashuvdan foydalaning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Nisbiy o'lcham birliklaridan foydalaning (rem, em, %)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Breakpointlarni to'g'ri tanlang</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Kontentni ustuvorlik asosida joylashtiring</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Texnik Maslahatlar</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Rasmlarni optimallang va responsive qiling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Touch targetlar uchun minimal 44x44px o'lcham</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Viewport meta tegini to'g'ri sozlang</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-indigo-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Haqiqiy qurilmalarda test qiling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-20 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-indigo-500 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-50 transition-opacity lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl p-6">
          <div className="space-y-4">
            {['overview', 'examples', 'tools', 'best-practices'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
            <div className="relative p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                Responsive Design
              </h1>
              <p className="text-lg sm:text-xl opacity-90 text-white">
                Zamonaviy web dasturlash uchun responsive dizayn texnologiyalari
              </p>
            </div>
          </div>
        </header>

        {/* Desktop Navigation Tabs */}
        <div className="hidden lg:flex space-x-4 mb-8 overflow-x-auto pb-2">
          {['overview', 'examples', 'tools', 'best-practices'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default CssResponsiveDesign;
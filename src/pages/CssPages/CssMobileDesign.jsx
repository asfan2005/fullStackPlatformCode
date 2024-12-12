import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CssMobileDesign() {
  const [activeTab, setActiveTab] = useState('responsive');

  const codeExamples = {
    responsive: {
      title: "Responsive Grid Layout",
      description: "Turli ekran o'lchamlari uchun moslashuvchan grid",
      code: `
/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.grid-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Media Query */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`,
      demo: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">Item 1</div>
          <div className="bg-white p-4 rounded-lg shadow">Item 2</div>
          <div className="bg-white p-4 rounded-lg shadow">Item 3</div>
        </div>
      )
    },
    flexbox: {
      title: "Flexbox Navigation",
      description: "Mobil qurilmalarga moslashuvchan navigatsiya",
      code: `
/* CSS */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    padding: 1rem;
  }
}`,
      demo: (
        <nav className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="font-bold text-xl mb-4 sm:mb-0">Logo</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Bosh Sahifa</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Xizmatlar</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Bog'lanish</a>
          </div>
        </nav>
      )
    },
    touchTargets: {
      title: "Touch-Friendly Buttons",
      description: "Mobil qurilmalar uchun qulay tugmalar",
      code: `
/* CSS */
.touch-button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #3B82F6;
  color: white;
  border: none;
  cursor: pointer;
}

.touch-button:active {
  transform: scale(0.98);
}`,
      demo: (
        <div className="space-y-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg min-h-[44px] min-w-[44px] hover:bg-blue-600 active:scale-98">
            Tugma 1
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg min-h-[44px] min-w-[44px] hover:bg-green-600 active:scale-98">
            Tugma 2
          </button>
        </div>
      )
    },
    mobileMenu: {
      title: "Mobil Menu",
      description: "Hamburger menu bilan mobil navigatsiya",
      code: `
/* CSS */
.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  height: 100vh;
  background: white;
  transition: 0.3s ease-in-out;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.mobile-menu.active {
  left: 0;
}

.hamburger {
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .desktop-menu {
    display: none;
  }
}`,
      demo: (
        <div className="relative bg-white p-4 rounded-lg shadow">
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-blue-600">Menu 1</a>
            <a href="#" className="text-blue-600">Menu 2</a>
            <a href="#" className="text-blue-600">Menu 3</a>
          </div>
        </div>
      )
    },
    cardLayout: {
      title: "Moslashuvchan Kartalar",
      description: "Responsive card layout dizayni",
      code: `
/* CSS */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

@media (max-width: 640px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}`,
      demo: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="aspect-video bg-gray-100"></div>
            <div className="p-4">
              <h3 className="font-semibold">Karta 1</h3>
              <p className="text-gray-600">Qisqa tavsif</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="aspect-video bg-gray-100"></div>
            <div className="p-4">
              <h3 className="font-semibold">Karta 2</h3>
              <p className="text-gray-600">Qisqa tavsif</p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <header className="py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Mobile Dizayn Asoslari
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mobil Dizayn Nima?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Mobil dizayn - bu veb-saytlarni mobil qurilmalarga moslashtirilgan holda yaratish san'atidir. 
              Bu foydalanuvchilar uchun qulay va samarali tajriba yaratishning muhim qismidir.
            </p>
          </div>
        </section>

        {/* Key Principles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Principle 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-4">Responsive Dizayn</h3>
            </div>
            <p className="text-gray-600">
              Barcha ekran o'lchamlariga moslashuvchan dizayn yaratish
            </p>
          </div>

          {/* Principle 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-4">Mobile First</h3>
            </div>
            <p className="text-gray-600">
              Avval mobil qurilmalar uchun dizayn yaratish
            </p>
          </div>

          {/* Principle 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-4">Foydalanuvchi Tajribasi</h3>
            </div>
            <p className="text-gray-600">
              Qulay va intuitiv interfeys yaratish
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Mobil Dizayn Bo'yicha Maslahatlar
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-gray-600">Katta va o'qilishi oson shriftlardan foydalaning</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-gray-600">Touch targetlar uchun yetarli joy qoldiring</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-gray-600">Kontentni ierarxik tarzda joylashtiring</p>
            </li>
          </ul>
        </section>
      </main>
      
      {/* Code Examples Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Amaliy Misollar</h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(codeExamples).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {codeExamples[tab].title}
            </button>
          ))}
        </div>

        {/* Code Example Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-2">
            {codeExamples[activeTab].title}
          </h3>
          <p className="text-gray-600 mb-4">
            {codeExamples[activeTab].description}
          </p>

          {/* Demo */}
          <div className="mb-6 p-4 border rounded-lg">
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Demo:</h4>
            {codeExamples[activeTab].demo}
          </div>

          {/* Code */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">Kod:</h4>
            <SyntaxHighlighter 
              language="css" 
              style={tomorrow}
              className="rounded-lg"
            >
              {codeExamples[activeTab].code}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Eng Yaxshi Amaliyotlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Media Queries</h3>
            <SyntaxHighlighter language="css" style={tomorrow}>
{`@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  .text {
    font-size: 16px;
  }
}`}
            </SyntaxHighlighter>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Flexible Images</h3>
            <SyntaxHighlighter language="css" style={tomorrow}>
{`img {
  max-width: 100%;
  height: auto;
}

.responsive-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default CssMobileDesign;
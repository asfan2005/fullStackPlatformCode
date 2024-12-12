import React from "react";
import { FaPalette, FaGraduationCap, FaCode, FaLightbulb, FaRocket, FaBookOpen } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdDevices, MdSpeed } from 'react-icons/md';

function CssBackrounds() {
  // Kod namunalari obyekti
  const codeExamples = {
    basic: `/* Asosiy background xususiyatlari */
.element {
  background-color: #3498db;
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}`,
    
    gradient: `/* Zamonaviy gradient namunalari */
.gradient-1 {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.gradient-2 {
  background: radial-gradient(circle at top right,
    #ff6b6b,
    #4ecdc4,
    #45b7d1
  );
}

.gradient-3 {
  background: conic-gradient(from 45deg,
    #ff6b6b,
    #4ecdc4,
    #ff6b6b
  );
}`,
    
    pattern: `/* CSS Pattern */
.pattern {
  background-color: #e5e5f7;
  opacity: 0.8;
  background: 
    linear-gradient(135deg, #444cf755 25%, transparent 25%) -10px 0,
    linear-gradient(225deg, #444cf755 25%, transparent 25%) -10px 0,
    linear-gradient(315deg, #444cf755 25%, transparent 25%),
    linear-gradient(45deg, #444cf755 25%, transparent 25%);
  background-size: 20px 20px;
}`,
    
    glassmorphism: `/* Zamonaviy Glass effect */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`,

    animation: `/* Animated Background */
.animated-bg {
  background: linear-gradient(-45deg, 
    #ee7752, 
    #e73c7e, 
    #23a6d5, 
    #23d5ab
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile responsive */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-24 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <FaPalette className="text-3xl sm:text-5xl" />
            <h1 className="text-3xl sm:text-5xl font-bold">CSS Backgrounds</h1>
          </div>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl">
            Zamonaviy web-dizaynda orqa fonlarni boshqarishning eng yaxshi usullari va texnikalari
          </p>
        </div>
      </div>

      {/* Main Content - Mobile responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <MdSpeed className="text-3xl text-blue-500" />
              <h3 className="text-xl font-semibold">Performance</h3>
            </div>
            <p className="text-gray-600">Optimallashtirilgan background texnikalari</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <MdDevices className="text-3xl text-purple-500" />
              <h3 className="text-xl font-semibold">Responsive</h3>
            </div>
            <p className="text-gray-600">Barcha qurilmalarga moslashuvchi dizayn</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-3xl text-green-500" />
              <h3 className="text-xl font-semibold">Modern</h3>
            </div>
            <p className="text-gray-600">Zamonaviy CSS texnologiyalari</p>
          </div>
        </div>

        {/* Examples Grid - Mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Basic Background */}
          <div className="group space-y-3 sm:space-y-4">
            <div className="relative h-48 sm:h-64 rounded-xl p-4 sm:p-6 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
              <div className="absolute top-4 right-4">
                <BiCodeAlt className="text-3xl text-white opacity-70" />
              </div>
              <h3 className="text-2xl font-bold text-white">Asosiy Background</h3>
              <p className="text-white/80">Rang va rasmlar bilan ishlash</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-green-400" />
                <span className="text-green-400 text-sm">Code Example</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples.basic}</code>
              </pre>
            </div>
          </div>

          {/* Gradient Background */}
          <div className="group space-y-3 sm:space-y-4">
            <div className="relative h-48 sm:h-64 rounded-xl p-4 sm:p-6 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer bg-gradient-to-br from-pink-500 to-yellow-500 overflow-hidden">
              <div className="absolute top-4 right-4">
                <FaPalette className="text-3xl text-white opacity-70" />
              </div>
              <h3 className="text-2xl font-bold text-white">Gradient</h3>
              <p className="text-white/80">Zamonaviy gradientlar</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-green-400" />
                <span className="text-green-400 text-sm">Code Example</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples.gradient}</code>
              </pre>
            </div>
          </div>

          {/* Pattern Background */}
          <div className="group space-y-3 sm:space-y-4">
            <div className="relative h-48 sm:h-64 rounded-xl p-4 sm:p-6 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer bg-slate-800 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="absolute top-4 right-4">
                <FaLightbulb className="text-3xl text-white opacity-70" />
              </div>
              <h3 className="text-2xl font-bold text-white">Pattern</h3>
              <p className="text-white/80">CSS patternlar</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-green-400" />
                <span className="text-green-400 text-sm">Code Example</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples.pattern}</code>
              </pre>
            </div>
          </div>

          {/* Glass Morphism */}
          <div className="group space-y-3 sm:space-y-4">
            <div className="relative h-48 sm:h-64 rounded-xl p-4 sm:p-6 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden"
                 style={{
                   backgroundImage: "url('https://source.unsplash.com/random/800x600?abstract')",
                   backgroundSize: 'cover'
                 }}>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">Glass Morphism</h3>
                <p className="text-white/80">Zamonaviy shaffof dizayn</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-green-400" />
                <span className="text-green-400 text-sm">Code Example</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples.glassmorphism}</code>
              </pre>
            </div>
          </div>

          {/* Animated Background */}
          <div className="group space-y-3 sm:space-y-4">
            <div className="relative h-48 sm:h-64 rounded-xl p-4 sm:p-6 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-gradient bg-[length:400%_400%]">
              <div className="absolute top-4 right-4">
                <FaRocket className="text-3xl text-white opacity-70" />
              </div>
              <h3 className="text-2xl font-bold text-white">Animated Background</h3>
              <p className="text-white/80">Harakatlanuvchi orqa fonlar</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-green-400" />
                <span className="text-green-400 text-sm">Code Example</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples.animation}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Tips Section - Mobile responsive */}
        <div className="mt-8 sm:mt-16 bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaGraduationCap className="text-2xl sm:text-3xl text-blue-500" />
            <h2 className="text-2xl sm:text-3xl font-bold">Muhim Maslahatlar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <MdSpeed className="text-blue-500" />
                Performance
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Rasmlarni WebP formatida saqlang</li>
                <li>Katta rasmlarni optimize qiling</li>
                <li>Lazy loading dan foydalaning</li>
                <li>CSS sprite texnikasini qo'llang</li>
              </ul>
            </div>
            {/* ... Boshqa maslahatlar seksiyalari ... */}
          </div>
        </div>

        {/* Resources Section - Mobile responsive */}
        <div className="mt-8 sm:mt-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaBookOpen className="text-2xl sm:text-3xl text-blue-500" />
            <h2 className="text-2xl sm:text-3xl font-bold">Foydali Resurslar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <a href="https://cssgradient.io" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <FaPalette className="text-xl sm:text-2xl text-blue-500" />
                <h3 className="text-lg sm:text-xl font-semibold">CSS Gradient Generator</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">Gradientlarni yaratish uchun onlayn generator</p>
            </a>
            {/* ... Boshqa resurs kartlari ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssBackrounds;
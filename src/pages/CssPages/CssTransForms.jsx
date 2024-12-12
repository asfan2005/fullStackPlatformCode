import React from "react";

function CssTransForms() {
  return (
    <div className="max-w-7xl mx-auto p-5 font-sans">
<div className="max-w-7xl mx-auto p-5 font-sans">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
      CSS Transform Magic
    </h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Web dizaynni yangi darajaga olib chiquvchi ajoyib CSS transform effektlari. 
      Elementlarni aylantirish, masshtablash va harakatlantirish orqali 
      foydalanuvchi interfeysini jonlantiring.
    </p>
  </div>
  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mt-10">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">
      CSS Transform Texnologiyasi
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-purple-600 mb-3">
            Transform Afzalliklari
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✨ Yuqori darajadagi animatsiya imkoniyatlari</li>
            <li>🚀 Hardware-tezlashtirilgan renderingi</li>
            <li>🎨 Cheksiz dizayn imkoniyatlari</li>
            <li>📱 Responsive dizayn uchun mukammal</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Amaliy Qo'llanish
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>🎯 Hover effektlari</li>
            <li>🔄 Loading animatsiyalari</li>
            <li>📱 Mobil menyular</li>
            <li>🎮 Interaktiv elementlar</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">
          Kod Namunalari
        </h3>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`.element {
  /* 3D Flip Effect */
  transform: perspective(1000px) rotateY(180deg);
  
  /* Hover Animation */
  transition: transform 0.5s ease;
}

/* Creative Hover Effect */
.hover-effect:hover {
  transform: 
    translateY(-10px) 
    rotate(5deg) 
    scale(1.1);
  box-shadow: 
    0 20px 25px -5px rgba(0,0,0,0.1),
    0 10px 10px -5px rgba(0,0,0,0.04);
}

/* Pulse Animation */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 2s infinite;
}`}
        </pre>
      </div>
    </div>

    {/* Pro Tips Section */}
    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Professional Maslahatlar
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border border-purple-200 rounded-lg">
          <h4 className="font-semibold text-purple-600 mb-2">
            Performance
          </h4>
          <p className="text-gray-600">
            Transform GPU orqali tezlashtirilishi uchun 
            transform-gpu klassidan foydalaning
          </p>
        </div>
        <div className="p-4 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-600 mb-2">
            Animatsiya
          </h4>
          <p className="text-gray-600">
            Transition bilan birgalikda ishlating: 
            transition: transform 0.3s ease
          </p>
        </div>
        <div className="p-4 border border-indigo-200 rounded-lg">
          <h4 className="font-semibold text-indigo-600 mb-2">
            3D Effects
          </h4>
          <p className="text-gray-600">
            perspective va transform-style: preserve-3d 
            xususiyatlarini unutmang
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Translate */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Translate</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:translate-x-6 hover:translate-y-6">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`hover:translate-x-6
hover:translate-y-6`}
            </pre>
          </div>
        </div>

        {/* Scale */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Scale</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-125">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`hover:scale-125`}
            </pre>
          </div>
        </div>

        {/* Rotate */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Rotate</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-45">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`hover:rotate-45`}
            </pre>
          </div>
        </div>

        {/* Skew */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Skew</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:skew-x-12 hover:skew-y-12">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`hover:skew-x-12
hover:skew-y-12`}
            </pre>
          </div>
        </div>

        {/* Combined */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Combined</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-45 hover:scale-110 hover:translate-x-2 hover:translate-y-2">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`hover:rotate-45 
hover:scale-110 
hover:translate-x-2 
hover:translate-y-2`}
            </pre>
          </div>
        </div>

        {/* 3D Transform */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm transform-gpu">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">3D Transform</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:-rotate-y-12 transform-gpu">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`transform-gpu
hover:-rotate-y-12`}
            </pre>
          </div>
        </div>

        {/* Origin Center */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Origin Center</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 origin-center hover:rotate-45">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`origin-center
hover:rotate-45`}
            </pre>
          </div>
        </div>

        {/* Origin Top-Right */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Origin Top-Right</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 origin-top-right hover:rotate-45">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`origin-top-right
hover:rotate-45`}
            </pre>
          </div>
        </div>

        {/* Scale X */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">Scale X</h3>
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-x-150">
            Hover Me
          </div>
          <div className="mt-4">
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`hover:scale-x-150`}
            </pre>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 p-8 rounded-xl mt-10">
        <h2 className="text-2xl text-gray-800 mb-6 font-bold">
          Transform Xususiyatlari va Misollar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl text-gray-700 mb-4 font-semibold">Asosiy Transform Xususiyatlari</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  translate(x, y)
                </code>
                {" "}- Elementni siljitish
              </li>
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  scale(x, y)
                </code>
                {" "}- O'lchamini o'zgartirish
              </li>
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  rotate(angle)
                </code>
                {" "}- Aylantirish
              </li>
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  skew(x-angle, y-angle)
                </code>
                {" "}- Egish
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-gray-700 mb-4 font-semibold">Qo'shimcha Xususiyatlar</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  transform-origin
                </code>
                {" "}- Transform boshlang'ich nuqtasi
              </li>
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  transform-style
                </code>
                {" "}- 3D transformatsiya uslubi
              </li>
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  perspective
                </code>
                {" "}- 3D effekt chuqurligi
              </li>
              <li className="text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">
                  backface-visibility
                </code>
                {" "}- Orqa tomonni ko'rsatish
              </li>
            </ul>
          </div>
        </div>

        {/* CSS Code Examples */}
        <div className="mt-8">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">CSS Kod Misollari</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`.transform-example {
  /* Basic transforms */
  transform: translate(100px, 50px);
  transform: scale(1.5);
  transform: rotate(45deg);
  transform: skew(10deg, 20deg);

  /* Combined transforms */
  transform: translate(50px, 50px) rotate(45deg) scale(1.5);

  /* 3D transforms */
  transform: rotateX(45deg) rotateY(45deg);
  transform-style: preserve-3d;
  perspective: 1000px;

  /* Animation */
  transition: transform 0.3s ease;
}`}
          </pre>
        </div>
      </div>

      {/* Advanced Examples Section */}
      <div className="bg-gray-50 p-8 rounded-xl mt-10">
        <h2 className="text-2xl text-gray-800 mb-6 font-bold">
          Kengaytirilgan Transform Misollari
        </h2>
        
        {/* Translate Example */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">1. Translate Misoli</h3>
          <div className="flex gap-8 flex-wrap">
            <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:translate-x-8">
              X o'qi bo'yicha
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:translate-y-8">
              Y o'qi bo'yicha
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:translate-x-8 hover:translate-y-8">
              Diagonal
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            {`// X o'qi bo'yicha
hover:translate-x-8

// Y o'qi bo'yicha
hover:translate-y-8

// Diagonal
hover:translate-x-8 hover:translate-y-8`}
          </pre>
        </div>

        {/* Scale Example */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">2. Scale Misoli</h3>
          <div className="flex gap-8 flex-wrap">
            <div className="w-40 h-40 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-x-150">
              X o'qi bo'yicha
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-y-150">
              Y o'qi bo'yicha
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:scale-150">
              Proporsional
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            {`// X o'qi bo'yicha
hover:scale-x-150

// Y o'qi bo'yicha
hover:scale-y-150

// Proporsional
hover:scale-150`}
          </pre>
        </div>

        {/* Rotate Example */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">3. Rotate Misoli</h3>
          <div className="flex gap-8 flex-wrap">
            <div className="w-40 h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-45">
              45 daraja
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-90">
              90 daraja
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-180">
              180 daraja
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            {`// 45 daraja
hover:rotate-45

// 90 daraja
hover:rotate-90

// 180 daraja
hover:rotate-180`}
          </pre>
        </div>

        {/* Skew Example */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">4. Skew Misoli</h3>
          <div className="flex gap-8 flex-wrap">
            <div className="w-40 h-40 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:skew-x-12">
              X o'qi bo'yicha
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:skew-y-12">
              Y o'qi bo'yicha
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:skew-x-12 hover:skew-y-12">
              Ikki o'q bo'yicha
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            {`// X o'qi bo'yicha
hover:skew-x-12

// Y o'qi bo'yicha
hover:skew-y-12

// Ikki o'q bo'yicha
hover:skew-x-12 hover:skew-y-12`}
          </pre>
        </div>

        {/* Transform Origin Example */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">5. Transform Origin Misoli</h3>
          <div className="flex gap-8 flex-wrap">
            <div className="w-40 h-40 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 origin-center hover:rotate-45">
              Markazdan
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 origin-top-left hover:rotate-45">
              Yuqori chapdan
            </div>
            <div className="w-40 h-40 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 origin-bottom-right hover:rotate-45">
              Pastki o'ngdan
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            {`// Markazdan
origin-center hover:rotate-45

// Yuqori chapdan
origin-top-left hover:rotate-45

// Pastki o'ngdan
origin-bottom-right hover:rotate-45`}
          </pre>
        </div>

        {/* 3D Transform Example */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-700 mb-4 font-semibold">6. 3D Transform Misoli</h3>
          <div className="flex gap-8 flex-wrap">
            <div className="perspective-[1000px]">
              <div className="w-40 h-40 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-y-180 transform-gpu preserve-3d">
                Y o'qi bo'yicha
              </div>
            </div>
            <div className="perspective-[1000px]">
              <div className="w-40 h-40 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:rotate-x-180 transform-gpu preserve-3d">
                X o'qi bo'yicha
              </div>
            </div>
            <div className="perspective-[1000px]">
              <div className="w-40 h-40 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer transition-transform duration-300 hover:-translate-z-32 transform-gpu preserve-3d">
                Z o'qi bo'yicha
              </div>
            </div>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            {`// Container
perspective-[1000px]

// Element
transform-gpu preserve-3d
hover:rotate-y-180  // Y o'qi
hover:rotate-x-180  // X o'qi
hover:-translate-z-32  // Z o'qi`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CssTransForms;
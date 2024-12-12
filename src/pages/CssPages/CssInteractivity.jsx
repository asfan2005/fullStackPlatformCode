import React from "react";

function CssInteractivity() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">CSS Interaktivlik</h1>
      
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
  <h2 className="text-2xl font-semibold text-gray-700 mb-4">CSS Interaktivlik haqida</h2>
  
  <div className="space-y-6 text-gray-600">
    <p>
      CSS interaktivlik - bu foydalanuvchi harakatlariga javob beradigan dinamik uslublarni 
      yaratish imkoniyati. Quyida eng ko'p ishlatiladigan interaktiv effektlarni ko'rishingiz mumkin.
    </p>

    <div className="pl-4 border-l-4 border-blue-500">
      <h3 className="font-semibold text-gray-700 mb-2">Asosiy CSS Interaktivlik turlari:</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><span className="font-medium text-blue-600">Hover</span> - sichqoncha elementi ustiga kelganda</li>
        <li><span className="font-medium text-purple-600">Active</span> - element bosilganda</li>
        <li><span className="font-medium text-green-600">Focus</span> - element tanlanganda</li>
        <li><span className="font-medium text-red-600">Visited</span> - havola tashrif buyurilganda</li>
      </ul>
    </div>

    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-2">Interaktivlik afzalliklari:</h3>
      <ul className="space-y-2">
        <li>✨ Foydalanuvchi tajribasini yaxshilaydi</li>
        <li>🎯 Sayt navigatsiyasini osonlashtiradi</li>
        <li>💡 Interfeys tushunarli bo'lishiga yordam beradi</li>
        <li>🎨 Saytga zamonaviy ko'rinish beradi</li>
      </ul>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">Transition xususiyatlari:</h4>
        <ul className="space-y-1">
          <li><code className="bg-white px-1 rounded">transition-property</code> - o'zgaradigan xususiyat</li>
          <li><code className="bg-white px-1 rounded">transition-duration</code> - davomiyligi</li>
          <li><code className="bg-white px-1 rounded">transition-timing-function</code> - tezlik funksiyasi</li>
          <li><code className="bg-white px-1 rounded">transition-delay</code> - kechikish vaqti</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">Transform xususiyatlari:</h4>
        <ul className="space-y-1">
          <li><code className="bg-white px-1 rounded">scale()</code> - o'lchamini o'zgartirish</li>
          <li><code className="bg-white px-1 rounded">rotate()</code> - aylantirish</li>
          <li><code className="bg-white px-1 rounded">translate()</code> - siljitish</li>
          <li><code className="bg-white px-1 rounded">skew()</code> - qiyalashtirish</li>
        </ul>
      </div>
    </div>

    <div className="bg-yellow-50 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-2">Muhim eslatmalar:</h3>
      <ul className="space-y-2">
        <li>⚡️ Interaktiv effektlar sayt tezligiga ta'sir qilmasligi kerak</li>
        <li>🎨 Effektlar sayt dizayni bilan uyg'un bo'lishi muhim</li>
        <li>📱 Barcha qurilmalarda to'g'ri ishlashini tekshiring</li>
        <li>♿️ Accessibility qoidalariga rioya qiling</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-2">Keng tarqalgan interaktiv effektlar:</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="bg-white p-2 rounded text-center">Hover Scale</div>
        <div className="bg-white p-2 rounded text-center">Button Push</div>
        <div className="bg-white p-2 rounded text-center">Color Fade</div>
        <div className="bg-white p-2 rounded text-center">Shadow Grow</div>
        <div className="bg-white p-2 rounded text-center">Rotate</div>
        <div className="bg-white p-2 rounded text-center">Shake</div>
      </div>
    </div>

    <blockquote className="border-l-4 border-gray-300 pl-4 italic">
      Yaxshi interaktivlik - bu foydalanuvchiga ko'rinmas yordam beruvchi, 
      ammo sayt tajribasini sezilarli darajada yaxshilovchi element.
    </blockquote>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Hover Effects */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">1. Hover Effektlari</h3>
          
          {/* Scale Effect */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Kattalashtirish effekti:</p>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg
                           transition-transform duration-300 hover:scale-105">
              Hover qiling
            </button>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                hover:scale-105
              </code>
            </div>
          </div>

          {/* Color Change Effect */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Rang o'zgarishi:</p>
            <button className="w-full bg-purple-500 text-white py-3 rounded-lg
                           transition-colors duration-300 hover:bg-purple-700">
              Rang o'zgaradi
            </button>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                hover:bg-purple-700
              </code>
            </div>
          </div>

          {/* Shadow Effect */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Soya effekti:</p>
            <div className="w-full bg-green-500 text-white py-3 rounded-lg text-center
                          transition-shadow duration-300 hover:shadow-xl">
              Soya paydo bo'ladi
            </div>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                hover:shadow-xl
              </code>
            </div>
          </div>
        </div>

        {/* Active Effects */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">2. Active Effektlari</h3>
          
          {/* Push Down Effect */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Bosish effekti:</p>
            <button className="w-full bg-red-500 text-white py-3 rounded-lg
                           transition-transform duration-150 active:translate-y-1">
              Meni bosing
            </button>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                active:translate-y-1
              </code>
            </div>
          </div>

          {/* Scale Down Effect */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Kichraytirish effekti:</p>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg
                           transition-transform duration-150 active:scale-95">
              Bosib ko'ring
            </button>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                active:scale-95
              </code>
            </div>
          </div>
        </div>

        {/* Focus Effects */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">3. Focus Effektlari</h3>
          
          {/* Border Effect */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Chegara effekti:</p>
            <input 
              type="text"
              placeholder="Fokuslanib ko'ring"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300
                       transition-all duration-300
                       focus:outline-none focus:border-blue-500"
            />
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                focus:border-blue-500
              </code>
            </div>
          </div>

          {/* Ring Effect */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Ring effekti:</p>
            <input 
              type="text"
              placeholder="Fokuslanib ko'ring"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300
                       transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-purple-200"
            />
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                focus:ring-4 focus:ring-purple-200
              </code>
            </div>
          </div>
        </div>

        {/* Group Hover Effects */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">4. Group Hover</h3>
          
          <div className="group bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
            <h4 className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Guruh hover effekti
            </h4>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Butun blok ustiga sichqonchani olib boring
            </p>
          </div>
          <div className="mt-2 bg-gray-800 p-3 rounded-md">
            <code className="text-xs text-gray-200">
              group group-hover:text-blue-600
            </code>
          </div>
        </div>
      </div>

      {/* Interaktiv namunalar bo'limi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Animatsiyali Tugmalar */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Animatsiyali Tugmalar</h3>
          
          {/* Pulse Effect */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Pulsatsiya effekti:</p>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg
                             animate-pulse transform hover:scale-105 transition-transform duration-300">
              Pulsatsiya
            </button>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                animate-pulse hover:scale-105
              </code>
            </div>
          </div>

          {/* Bounce Effect */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Sakrash effekti:</p>
            <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg
                             hover:animate-bounce transition-all duration-300">
              Sakrash
            </button>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                hover:animate-bounce
              </code>
            </div>
          </div>
        </div>

        {/* Hover Cards */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Hover Cardlar</h3>
          
          {/* 3D Flip Card */}
          <div className="group h-48 perspective-1000">
            <div className="relative h-full w-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg p-4 text-white backface-hidden">
                <h4 className="text-lg font-semibold">Old tomoni</h4>
                <p className="text-sm mt-2">Cardni hover qiling</p>
              </div>
              <div className="absolute w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg p-4 text-white backface-hidden rotate-y-180">
                <h4 className="text-lg font-semibold">Orqa tomoni</h4>
                <p className="text-sm mt-2">3D aylanish effekti</p>
              </div>
            </div>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                transform-style-3d group-hover:rotate-y-180
              </code>
            </div>
          </div>
        </div>

        {/* Interaktiv Input */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Interaktiv Inputlar</h3>
          
          {/* Floating Label Input */}
          <div className="relative mb-6">
            <input type="text" id="floating_input"
                   className="block w-full px-4 py-3 pt-5 rounded-lg border-2 border-gray-300
                            peer focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                            transition-all duration-300"
                   placeholder=" " />
            <label htmlFor="floating_input"
                   className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4
                              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                              peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-500">
              Floating Label
            </label>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                peer-focus:scale-75 peer-focus:-translate-y-3
              </code>
            </div>
          </div>

          {/* Gradient Border Input */}
          <div className="relative">
            <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 rounded-lg">
              <input type="text"
                     className="w-full px-4 py-3 bg-white rounded-md focus:outline-none"
                     placeholder="Gradient border input" />
            </div>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
              </code>
            </div>
          </div>
        </div>

        {/* Loading Animations */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Loading Animatsiyalar</h3>
          
          {/* Spinner */}
          <div className="mb-6">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full
                          animate-spin mx-auto">
            </div>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                animate-spin border-t-transparent
              </code>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          </div>
          <div className="mt-2 bg-gray-800 p-3 rounded-md">
            <code className="text-xs text-gray-200">
              animate-bounce delay-100 delay-200
            </code>
          </div>
        </div>

        {/* Text Effects */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Matn Effektlari</h3>
          
          {/* Gradient Text */}
          <div className="mb-6">
            <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                           from-purple-400 via-pink-500 to-red-500 hover:from-blue-400 
                           hover:via-purple-500 hover:to-pink-500 transition-all duration-500">
              Gradient Matn
            </h4>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                bg-clip-text text-transparent bg-gradient-to-r
              </code>
            </div>
          </div>

          {/* Glowing Text */}
          <div>
            <h4 className="text-2xl font-bold text-blue-500 hover:text-blue-400
                           transition-colors duration-300
                           hover:animate-pulse hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Nurlanuvchi Matn
            </h4>
            <div className="mt-2 bg-gray-800 p-3 rounded-md">
              <code className="text-xs text-gray-200">
                hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS kerak bo'lgan stillar */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default CssInteractivity;
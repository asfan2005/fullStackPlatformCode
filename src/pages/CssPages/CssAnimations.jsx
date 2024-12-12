import React from "react";
import Editor from "@monaco-editor/react";

function CssAnimations() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      {/* Hero section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-4 animate-fadeIn">
          CSS Animations
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto animate-slideIn">
          CSS Animations - web-sahifalaringizga hayot bag'ishlovchi kuchli vosita. 
          Elementlarni harakatlantirish, transformatsiya qilish va foydalanuvchi 
          tajribasini yaxshilash uchun ajoyib imkoniyat.
        </p>

        {/* Asosiy tushunchalar */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Asosiy Xususiyatlar</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                animation-name: Animatsiya nomi
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                animation-duration: Davomiyligi
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                animation-timing-function: Tezlik funksiyasi
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                animation-delay: Kechikish vaqti
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kod Sintaksisi</h2>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <pre className="text-sm">
                {`@keyframes animName {
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
}

.element {
  animation: animName 2s ease infinite;
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Animatsiya namunalari */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Animatsiya Namunalari
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {/* Fade In */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-40 flex items-center justify-center">
              <div className="w-20 h-20 bg-blue-500 rounded-lg animate-fadeIn"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-2">Fade In</h3>
              <p className="text-sm text-gray-600 mb-4">Elementni asta-sekin paydo qilish</p>
              <div className="bg-gray-800 rounded-lg p-3 text-white text-sm">
                <pre className="whitespace-pre-wrap">
                  {`@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-in;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Bounce */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-40 flex items-center justify-center">
              <div className="w-20 h-20 bg-green-500 rounded-full animate-bounce"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-2">Bounce</h3>
              <p className="text-sm text-gray-600 mb-4">Sakrash effekti</p>
              <div className="bg-gray-800 rounded-lg p-3 text-white text-sm">
                <pre className="whitespace-pre-wrap">
                  {`@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-bounce {
  animation: bounce 1s infinite;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Spin */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-40 flex items-center justify-center">
              <div className="w-20 h-20 bg-purple-500 rounded-lg animate-spin"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800 mb-2">Spin</h3>
              <p className="text-sm text-gray-600 mb-4">Aylanish effekti</p>
              <div className="bg-gray-800 rounded-lg p-3 text-white text-sm">
                <pre className="whitespace-pre-wrap">
                  {`@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Amaliy misollar */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <div className="bg-gray-50 rounded-xl p-4 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Loading Animation</h3>
            <div className="flex space-x-2 mb-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: "0s"}}></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-white text-sm">
              <pre className="overflow-x-auto text-xs sm:text-sm">{`<div class="flex space-x-2">
  <div class="w-4 h-4 bg-blue-500 
    rounded-full animate-bounce"></div>
  <!-- Repeat with different delays -->
</div>`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Hover Effect</h3>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg 
              transform hover:scale-110 transition-transform duration-200">
              Hover Me
            </button>
            <div className="mt-4 bg-gray-800 rounded-lg p-4 text-white text-sm">
              <pre className="overflow-x-auto text-xs sm:text-sm">{`<button class="transform hover:scale-110 
  transition-transform duration-200">
  Hover Me
</button>`}</pre>
            </div>
          </div>
        </div>

        {/* Qo'shimcha ma'lumot */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Muhim Eslatmalar</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <p>Animatsiyalarni o'rinsiz ishlatishdan saqlaning - bu foydalanuvchi tajribasiga salbiy ta'sir qilishi mumkin</p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <p>Murakkab animatsiyalar uchun CSS Variables ishlatish tavsiya etiladi</p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <p>Performance uchun transform va opacity xususiyatlarini ishlatish afzal</p>
            </li>
          </ul>
        </div>

        {/* Amaliy topshiriqlar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Amaliy Topshiriqlar
          </h2>

          {/* 1-topshiriq */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-8 shadow-lg mb-8">
            <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-4">1-topshiriq: Pulsatsiya Effekti</h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Quyidagi kodni o'rganib chiqing va pulsatsiya effektini yarating. 
                  Element o'lchamini davriy ravishda o'zgartiruvchi animatsiya yarating.
                </p>
                <div className="h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <pre className="bg-gray-800 rounded-lg p-4 text-white text-sm overflow-auto">
{`@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* 2-topshiriq */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-4">2-topshiriq: Loading Spinner</h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Quyidagi kodni o'rganib chiqing va loading spinner yarating. 
                  Gradient ranglar bilan aylanuvchi animatsiya yarating.
                </p>
                <div className="h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-customSpin"></div>
                </div>
              </div>
              <div>
                <pre className="bg-gray-800 rounded-lg p-4 text-white text-sm overflow-auto">
{`@keyframes customSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-customSpin {
  animation: customSpin 1s linear infinite;
}

/* CSS stillar */
.loading-spinner {
  width: 4rem;
  height: 4rem;
  border: 4px solid #3B82F6;
  border-top-color: transparent;
  border-radius: 50%;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Stillar */}
        <style>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes customSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }

          .animate-customSpin {
            animation: customSpin 1s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CssAnimations;
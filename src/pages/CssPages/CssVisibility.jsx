import React, { useState } from "react";

function CssVisibility() {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [opacity, setOpacity] = useState(100);

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 px-3 sm:px-4 w-full">
      <div className="max-w-6xl mx-auto w-full">
        {/* Sarlavha */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-8 text-gray-800">
          CSS Visibility Xususiyatlari
        </h1>

        {/* O'quv materiallari */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
            CSS Visibility - Batafsil Ma'lumot
          </h2>

          {/* Asosiy tushunchalar */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-3">
                Visibility Xususiyati Nima?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                CSS visibility xususiyati web-sahifadagi elementlarning
                ko'rinishini boshqaradi. Bu xususiyat elementni ko'rinmas
                qilganda ham uning egallagan joyi saqlanib qoladi, bu esa uni
                display: none dan farq qiladi.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Muhim eslatma:</h4>
              <p className="text-sm text-gray-600">
                Visibility: hidden va display: none o'rtasidagi asosiy farq -
                visibility elementning joyini saqlaydi, display esa elementni
                butunlay olib tashlaydi.
              </p>
            </div>
          </div>

          {/* Visibility qiymatlari */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              Visibility Xususiyatining Qiymatlari
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">visible</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Element odatiy holatda ko'rinadi. Bu default qiymat
                  hisoblanadi.
                </p>
                <pre className="text-xs bg-gray-100 p-2 rounded">
                  {`.element {
  visibility: visible;
}`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">hidden</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Element ko'rinmaydi, lekin joyi saqlanadi. Mouse eventlar
                  ishlamaydi.
                </p>
                <pre className="text-xs bg-gray-100 p-2 rounded">
                  {`.element {
  visibility: hidden;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Opacity haqida */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              Opacity Xususiyati
            </h3>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Opacity xususiyati elementning shaffoflik darajasini belgilaydi.
                0 (to'liq shaffof) dan 1 (umuman shaffof emas) gacha qiymat
                oladi.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">
                  Opacity qo'llanishi:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                  <li>Hover effektlari yaratish</li>
                  <li>Fade in/out animatsiyalar</li>
                  <li>Watermark effektlari</li>
                  <li>Modal oyna orqa fonini xiralashtirish</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Z-index tushunchasi */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              Z-index va Qatlamlar
            </h3>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Z-index xususiyati elementlarning bir-birining ustida qanday
                joylashishini belgilaydi. Kattaroq qiymatga ega element
                yuqoriroq qatlamda joylashadi.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">
                  Muhim qoidalar:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                  <li>Faqat positioned elementlarga ta'sir qiladi</li>
                  <li>
                    position: relative, absolute, fixed yoki sticky bo'lishi
                    kerak
                  </li>
                  <li>Stacking context ichida ishlaydi</li>
                  <li>
                    Parent element z-index qiymati child elementlarga ta'sir
                    qiladi
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Amaliy misollar */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              Amaliy Misollar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Modal oyna</h4>
                <pre className="text-xs bg-gray-100 p-2 rounded mb-2">
                  {`.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 100;
}

.modal-content {
  position: fixed;
  z-index: 101;
  /* boshqa stillar */
}`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Hover effekt</h4>
                <pre className="text-xs bg-gray-100 p-2 rounded mb-2">
                  {`.card {
  opacity: 0.8;
  transition: opacity 0.3s;
}

.card:hover {
  opacity: 1;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Qo'shimcha maslahatlar */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              Qo'shimcha Maslahatlar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Performance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • Opacity animatsiyalari GPU tomonidan tezlashtiriladi
                  </li>
                  <li>• Visibility o'zgarishi reflow chaqirmaydi</li>
                  <li>
                    • Transform va opacity animatsiyalari eng yaxshi ishlaydi
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">
                  Accessibility
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • Hidden elementlar screen reader tomonidan o'qilmaydi
                  </li>
                  <li>• aria-hidden atributini ham qo'shish tavsiya etiladi</li>
                  <li>• Keyboard fokus hidden elementlarga o'tmasligi kerak</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real Namunalar */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Real Namunalar
          </h2>

          {/* Visibility Namunasi */}
          <div className="mb-6 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              1. Visibility Xususiyati
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-gray-600">
                    {`/* CSS kod */
.element {
  visibility: visible;
}

.hidden-element {
  visibility: hidden;
}`}
                  </pre>
                </div>
                <button
                  onClick={() => setIsVisible1(!isVisible1)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 
                           rounded-lg transition duration-300 text-sm sm:text-base"
                >
                  Toggle Visibility
                </button>
              </div>
              <div className="border-2 border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 sm:w-20 h-12 sm:h-20 bg-blue-500 rounded-lg"></div>
                  <div
                    className={`w-12 sm:w-20 h-12 sm:h-20 bg-blue-500 rounded-lg 
                              transition-all duration-300 ${
                                isVisible1 ? "visible" : "invisible"
                              }`}
                  ></div>
                  <div className="w-12 sm:w-20 h-12 sm:h-20 bg-blue-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Opacity Namunasi */}
          <div className="mb-6 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              2. Opacity Xususiyati
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <pre className="text-xs sm:text-sm text-gray-600">
                    {`.element {
  opacity: ${opacity / 100};
}`}
                  </pre>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(e.target.value)}
                  className="w-full"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  Opacity: {opacity}%
                </p>
              </div>
              <div className="border-2 border-gray-200 p-4 rounded-lg">
                <div
                  className="w-full h-32 sm:h-40 bg-teal-500 rounded-lg transition-opacity duration-300"
                  style={{ opacity: opacity / 100 }}
                ></div>
              </div>
            </div>
          </div>

          {/* Z-index Namunasi */}
          <div className="mb-6 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
              3. Z-index Xususiyati
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <pre className="text-xs sm:text-sm text-gray-600">
                    {`.top-layer {
  z-index: 2;
  position: relative;
}

.bottom-layer {
  z-index: 1;
  position: relative;
}`}
                  </pre>
                </div>
              </div>
              <div className="border-2 border-gray-200 p-4 rounded-lg h-40 sm:h-48 relative">
                <div
                  className="absolute w-20 sm:w-24 h-20 sm:h-24 bg-red-500 rounded-lg 
                              left-4 top-4"
                ></div>
                <div
                  className="absolute w-20 sm:w-24 h-20 sm:h-24 bg-blue-500 rounded-lg 
                              left-12 top-12 z-10"
                ></div>
                <div
                  className="absolute w-20 sm:w-24 h-20 sm:h-24 bg-green-500 rounded-lg 
                              left-20 top-20 z-20"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Amaliy maslahatlar */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 border-b pb-2">
            Amaliy Maslahatlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Visibility vs Display */}
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3 text-base sm:text-lg">
                Visibility vs Display
              </h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Visibility: hidden - joy saqlanadi</li>
                <li>• Display: none - joy yo'qoladi</li>
                <li>• Visibility animatsiya qilish mumkin</li>
                <li>• Display animatsiya qilib bo'lmaydi</li>
              </ul>
            </div>

            {/* Opacity */}
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3 text-base sm:text-lg">
                Opacity
              </h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• 0 dan 1 gacha qiymat</li>
                <li>• Animatsiyalar uchun qulay</li>
                <li>• Barcha ichki elementlarga ta'sir qiladi</li>
                <li>• Mouse events ishlaydi</li>
              </ul>
            </div>

            {/* Z-index */}
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3 text-base sm:text-lg">
                Z-index
              </h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• Position berilgan elementlarga ishlatiladi</li>
                <li>• Katta qiymat = yuqori qatlam</li>
                <li>• Stacking context ichida ishlaydi</li>
                <li>• Butun sonlar ishlatiladi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssVisibility;

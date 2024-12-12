import React from "react";
import "./CssStyle.css";

function CssBasic() {
  return (
    <div id="app-containeri" className="h-[calc(100vh-96px)] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-6 px-4 overflow-y-auto">
      <div className="max-w-full mx-auto space-y-10">
        {/* Kirish */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">CSS nima va nima uchun kerak?</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            CSS (Cascading Style Sheets) — veb-sahifalarning ko'rinishini boshqarish uchun ishlatiladigan asosiy texnologiya. 
            U HTML elementlarining rangini, o'lchamini, joylashuvini, animatsiyalarini va boshqa vizual xususiyatlarini belgilash imkonini beradi.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            CSS yordamida siz veb-sahifangizni:
            • Professional ko'rinishga ega qilishingiz
            • Turli qurilmalarga moslashtira olishingiz
            • Foydalanuvchi tajribasini yaxshilashingiz
            • Brendingizga mos dizayn yaratishingiz mumkin
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            CSS sizga veb-sahifalaringizni yanada jozibador va interaktiv qilish imkonini beradi. 
            Har bir elementni o'zingiz xohlagancha bezatib, foydalanuvchilarni jalb qiluvchi dizaynlar yaratishingiz mumkin.
          </p>
        </div>

        {/* Asosiy bo'limlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CSS ni HTML ga bog'lash */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
              CSS ni HTML ga bog'lash usullari
            </h3>
            <ul className="text-sm text-gray-600 space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Inline style:</span>
                </div>
                <p className="pl-4">
                  HTML elementining style atributida to'g'ridan-to'g'ri yoziladi.
                  Misol: {'<div style="color: blue; font-size: 16px;">'}
                </p>
                <p className="pl-4">
                  Inline style usuli kichik o'zgarishlar uchun qulay, lekin katta loyihalarda tavsiya etilmaydi.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Internal style:</span>
                </div>
                <p className="pl-4">
                  HTML head qismida {'<style>'} tegi ichida yoziladi.
                  Bir sahifa uchun umumiy stillar berish uchun qulay.
                </p>
                <p className="pl-4">
                  Internal style usuli kichik loyihalar uchun yaxshi, lekin ko'p sahifali saytlar uchun external style tavsiya etiladi.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">External style:</span>
                </div>
                <p className="pl-4">
                  Alohida .css faylda yoziladi va {'<link>'} tegi orqali ulanadi.
                  Eng ko'p tavsiya etiladigan usul.
                </p>
                <p className="pl-4">
                  External style usuli katta loyihalar uchun ideal, chunki u kodni tartibli va qayta foydalanish mumkin qiladi.
                </p>
              </li>
            </ul>
          </div>

          {/* Selektorlar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
              CSS Selektorlar va ularning turlari
            </h3>
            <ul className="text-sm text-gray-600 space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Element selektorlari:</span>
                </div>
                <p className="pl-4">
                  HTML teglarini to'g'ridan-to'g'ri tanlash: p {'{color: blue}'}, 
                  h1 {'{font-size: 24px}'}
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Class selektorlari:</span>
                </div>
                <p className="pl-4">
                  .class-name orqali tanlanadi. Ko'p elementlarga bir xil stil berish uchun.
                  Misol: .button {'{background: red}'}
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">ID selektorlari:</span>
                </div>
                <p className="pl-4">
                  #id-name orqali tanlanadi. Unique elementlar uchun.
                  Misol: #header {'{position: fixed}'}
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Kombinatsion selektorlar:</span>
                </div>
                <p className="pl-4">
                  div p - div ichidagi barcha p elementlari
                  div , p - div ning bevosita p bolalari
                  div + p - div dan keyin kelgan p
                </p>
              </li>
            </ul>
          </div>

          {/* CSS Xossalari */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
              CSS Xossalari va ularning qiymatlari
            </h3>
            <ul className="text-sm text-gray-600 space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Ranglar va fon:</span>
                </div>
                <p className="pl-4">
                  color: matn rangi (#HEX, rgb(), rgba())
                  background-color: fon rangi
                  background-image: fon rasmi
                  opacity: shaffoflik
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">O'lcham va chegaralar:</span>
                </div>
                <p className="pl-4">
                  width/height: kenglik/balandlik
                  margin: tashqi masofa
                  padding: ichki masofa
                  border: chegara chizig'i
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Matn formatlash:</span>
                </div>
                <p className="pl-4">
                  font-family: shrift turi
                  font-size: shrift o'lchami
                  font-weight: shrift qalinligi
                  text-align: tekst joylashuvi
                  line-height: qator balandligi
                </p>
              </li>
            </ul>
          </div>

          {/* Layout */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
              Layout va Joylashuv
            </h3>
            <ul className="text-sm text-gray-600 space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Flexbox:</span>
                </div>
                <p className="pl-4">
                  Bir o'lchamli layout uchun
                  display: flex
                  flex-direction: row/column
                  justify-content: elementlarni gorizontal joylash
                  align-items: elementlarni vertikal joylash
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Grid:</span>
                </div>
                <p className="pl-4">
                  Ikki o'lchamli layout uchun
                  display: grid
                  grid-template-columns: ustunlar
                  grid-template-rows: qatorlar
                  gap: elementlar orasidagi masofa
                </p>
              </li>
            </ul>
          </div>

          {/* Responsive */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
              Responsive Dizayn
            </h3>
            <ul className="text-sm text-gray-600 space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Media Queries:</span>
                </div>
                <p className="pl-4">
                  @media screen and (max-width: 768px) {'{}'}
                  Turli ekran o'lchamlari uchun stillar
                  Breakpointlar: 320px, 768px, 1024px, 1280px
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Responsive units:</span>
                </div>
                <p className="pl-4">
                  rem: root element ga nisbatan
                  em: parent element ga nisbatan
                  vw/vh: viewport width/height
                  %: parent element foizi
                </p>
              </li>
            </ul>
          </div>

          {/* Animatsiyalar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-2">
              Animatsiyalar va Effektlar
            </h3>
            <ul className="text-sm text-gray-600 space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Transition:</span>
                </div>
                <p className="pl-4">
                  transition-property: o'zgaruvchi xossa
                  transition-duration: davomiyligi
                  transition-timing-function: tezlik funksiyasi
                  transition-delay: kechikish vaqti
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Transform:</span>
                </div>
                <p className="pl-4">
                  translate(): siljitish
                  rotate(): aylantirish
                  scale(): masshtablash
                  skew(): qiyalashtirish
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span className="font-semibold">Animation:</span>
                </div>
                <p className="pl-4">
                  @keyframes nomi {'{}'}
                  animation-name: animatsiya nomi
                  animation-duration: davomiyligi
                  animation-iteration-count: takrorlanish soni
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssBasic;
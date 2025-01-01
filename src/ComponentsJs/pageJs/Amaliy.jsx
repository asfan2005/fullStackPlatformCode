import React from 'react'
import { FaLaptopCode, FaBrain, FaRocket, FaUserTie, FaUsers, FaBug, FaLightbulb } from 'react-icons/fa'
import { MdCompareArrows } from 'react-icons/md'

function Amaliy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          JavaScript Amaliyotining Ahamiyati
        </h1>

        {/* Amaliyotli va Amaliyotsiz dasturchilar farqi */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
            <MdCompareArrows className="text-3xl mr-2 text-blue-600" />
            Amaliyotli va Amaliyotsiz dasturchilar farqi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Amaliyotsiz dasturchi:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Nazariy bilimlar bilan cheklangan</li>
                <li>• Real loyiha tajribasi yo'q</li>
                <li>• Muammolarni yechishda qiynaladi</li>
                <li>• Portfolio mavjud emas</li>
                <li>• Jamoada ishlash tajribasi past</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Amaliyotli dasturchi:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Nazariya va amaliyot uyg'unligi</li>
                <li>• Ko'plab real loyihalar tajribasi</li>
                <li>• Tez va samarali yechimlar topadi</li>
                <li>• Kuchli portfolio mavjud</li>
                <li>• Jamoada ishlash ko'nikmalari yuqori</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-4xl text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Amaliy ko'nikmalar
              </h2>
            </div>
            <p className="text-gray-600">
              Real loyihalarda ishlash orqali nazariy bilimlarni amalda mustahkamlash va 
              professional darajaga ko'tarish imkoniyati.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaBrain className="text-4xl text-purple-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Muammolarni yechish
              </h2>
            </div>
            <p className="text-gray-600">
              Murakkab masalalarni tahlil qilish va optimal yechimlar topish qobiliyatini 
              rivojlantirish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaRocket className="text-4xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Zamonaviy texnologiyalar
              </h2>
            </div>
            <p className="text-gray-600">
              Eng so'nggi freymvorklar va kutubxonalar bilan ishlash tajribasini orttirish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaUserTie className="text-4xl text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Professional portfolio
              </h2>
            </div>
            <p className="text-gray-600">
              Ish beruvchilarga ko'rsatish uchun yuqori sifatli loyihalar to'plamini yaratish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaUsers className="text-4xl text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Jamoa bilan ishlash
              </h2>
            </div>
            <p className="text-gray-600">
              Git va boshqa versiya boshqaruv tizimlari orqali jamoa bo'lib ishlash tajribasi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-4xl text-orange-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Kreativ yondashuv
              </h2>
            </div>
            <p className="text-gray-600">
              Innovatsion g'oyalarni amalga oshirish va kreativ yechimlar topish qobiliyati.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 space-y-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-2">💡</span> 
              Muhim maslahat
            </h2>
            <p className="text-lg mb-4">
              Amaliyot - bu muvaffaqiyatning kalitidir. Har kuni kamida 2-3 soat amaliyot 
              qilish orqali, siz 3-6 oy ichida professional darajaga erisha olasiz. 
              Muntazam amaliyot qiling va o'z ustingizda ishlang!
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  🚀 JavaScript Amaliyotga Tayyor bo'ling!
                </h2>
                <p className="text-lg mb-4">
                  Bizning platformamizda siz uchun:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>✨ 100+ dan ortiq amaliy mashqlar</li>
                  <li>🎯 Real loyiha misollar</li>
                  <li>🏆 Haftalik coding challenge'lar</li>
                  <li>👥 Jamoa bilan ishlash imkoniyati</li>
                </ul>
                <p className="text-lg font-semibold">
                  Hoziroq amaliyotni boshlang va JavaScript ustasi bo'ling! 
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                  Amaliyotni Boshlash
                </button>
                <p className="mt-4 text-sm opacity-90">
                  🌟 Har hafta yangi mashqlar qo'shiladi
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-lg p-6 text-white text-center">
            <p className="text-lg">
              "Amaliyotsiz nazariya - daraxtning ildizisiz tanasi kabidir. 
              Amaliyot orqali bilimlaringiz mustahkam ildiz otadi va mevalar beradi."
            </p>
            <p className="mt-2 font-semibold">- Tajribali dasturchilar maslahati</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amaliy
import React from "react";
import Editor from "@monaco-editor/react";
import { useState } from "react";

function CssPseudoClasses() {
  const [task1Code, setTask1Code] = useState(`/* 1-TOPSHIRIQ: Tugmalar uchun hover effektlari */

.task1-button {
  /* O'zingizning stillaringizni yozing */
  
}

.task1-button:hover {
  /* Hover holatidagi stillar */
  
}

.task1-button:active {
  /* Bosilgan holatdagi stillar */
  
}`);

  const [task2Code, setTask2Code] = useState(`/* 2-TOPSHIRIQ: Ro'yxat elementlari stillari */

.task2-list li {
  /* Ro'yxat elementlari uchun asosiy stillar */
  
}

.task2-list li:first-child {
  /* Birinchi element stillari */
  
}

.task2-list li:last-child {
  /* Oxirgi element stillari */
  
}

.task2-list li:nth-child(even) {
  /* Juft elementlar stillari */
  
}`);

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8 bg-gray-50">
      {/* Asosiy Sarlavha */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        CSS Pseudo-Classes
      </h1>
      
      {/* Kirish */}
      <section className="mb-6 sm:mb-8 lg:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
          CSS Pseudo-Classes nima?
        </h2>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-blue-600">CSS Pseudo-class</strong> - bu HTML elementlarining 
            maxsus holatlarini stilizatsiya qilish uchun ishlatiladigan maxsus selektor. 
            Ular elementning quyidagi holatlarini aniqlash imkonini beradi:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2">
            <li>Foydalanuvchi bilan o'zaro ta'sir (hover, click, focus)</li>
            <li>Element pozitsiyasi (birinchi, oxirgi, juft/toq)</li>
            <li>Element holati (active, checked, disabled)</li>
            <li>Tarkib holati (empty, target, valid/invalid)</li>
          </ul>
        </div>
      </section>

      {/* Asosiy Sintaksis */}
      <section className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pseudo-class Sintaksisi</h2>
        <div className="mb-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <pre className="text-gray-100 font-mono text-lg">
              <code>
                selector:pseudo-class {"{"}
                {"\n"}  property: value;
                {"\n"}{"}"}
              </code>
            </pre>
          </div>
          <p className="mt-4 text-gray-600">
            Pseudo-class <span className="text-pink-500 font-semibold">:</span> (ikki nuqta) 
            belgisi bilan ajratiladi va selektor bilan birgalikda yoziladi.
          </p>
        </div>
      </section>

      {/* Eng Ko'p Ishlatiladigan Pseudo-classlar */}
      <section className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Eng Ko'p Ishlatiladigan Pseudo-classlar
        </h2>

        {/* 1. Foydalanuvchi Interaksiyasi */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            1. Foydalanuvchi Interaksiyasi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">:hover</h4>
              <p className="text-gray-600">
                Sichqoncha kursor element ustiga kelganda ishlatiladi.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg 
                transition-all duration-300 hover:bg-blue-600 hover:shadow-lg 
                hover:-translate-y-1">
                Ustimga keling!
              </button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">:active</h4>
              <p className="text-gray-600">
                Element bosilgan paytda ishlatiladi.
              </p>
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg 
                transition-all duration-300 active:bg-green-700 active:scale-95">
                Meni bosing!
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">:focus</h4>
              <p className="text-gray-600">
                Element fokusda bo'lganda ishlatiladi.
              </p>
              <input 
                type="text" 
                placeholder="Menga fokuslanib ko'ring"
                className="w-full p-3 border-2 border-gray-300 rounded-lg 
                  transition-all duration-300 focus:border-purple-500 
                  focus:ring-2 focus:ring-purple-200 outline-none"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">:visited</h4>
              <p className="text-gray-600">
                Tashrif buyurilgan havolalar uchun ishlatiladi.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 
                visited:text-purple-600">
                Tashrif buyurilgan havola
              </a>
            </div>
          </div>
        </div>

        {/* 2. Element Pozitsiyasi */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            2. Element Pozitsiyasi
          </h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">
                :first-child, :last-child, :nth-child()
              </h4>
              <ul className="space-y-2">
                <li className="p-4 bg-blue-100 first:bg-blue-500 first:text-white 
                  rounded-lg transition-colors">
                  Birinchi element
                </li>
                <li className="p-4 bg-blue-100 even:bg-blue-200 rounded-lg 
                  transition-colors">
                  Ikkinchi element
                </li>
                <li className="p-4 bg-blue-100 odd:bg-blue-300 rounded-lg 
                  transition-colors">
                  Uchinchi element
                </li>
                <li className="p-4 bg-blue-100 last:bg-blue-500 last:text-white 
                  rounded-lg transition-colors">
                  To'rtinchi element
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Form Elementlari */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            3. Form Elementlari
          </h3>
          <form className="space-y-6 max-w-2xl">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">
                :required, :valid, :invalid
              </h4>
              <div className="space-y-2">
                <label className="block text-gray-700">Email (Majburiy):</label>
                <input 
                  type="email" 
                  required
                  placeholder="email@example.com"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg 
                    transition-all duration-300 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                    valid:border-green-500 invalid:border-red-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">
                :disabled, :enabled
              </h4>
              <div className="space-y-2">
                <label className="block text-gray-700">O'chirilgan input:</label>
                <input 
                  type="text"
                  disabled
                  value="Men o'chirilganman"
                  className="w-full p-3 bg-gray-100 border-2 border-gray-300 
                    rounded-lg cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-medium text-gray-700">
                :checked
              </h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="w-5 h-5 text-blue-500 rounded 
                      focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Meni belgilang</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Amaliy Misollar */}
      <section className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Amaliy Misollar
        </h2>
        
        <div className="space-y-8">
          {/* Navigatsiya Menyu */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-700">
              Navigatsiya Menyu
            </h3>
            <nav className="flex flex-wrap gap-2 sm:gap-4">
              <a href="#" className="px-3 py-2 sm:px-4 sm:py-2 text-gray-600 rounded-lg 
                hover:bg-blue-500 hover:text-white transition-all">
                Bosh Sahifa
              </a>
              <a href="#" className="px-3 py-2 sm:px-4 sm:py-2 text-gray-600 rounded-lg 
                hover:bg-blue-500 hover:text-white transition-all">
                Xizmatlar
              </a>
              <a href="#" className="px-3 py-2 sm:px-4 sm:py-2 text-gray-600 rounded-lg 
                hover:bg-blue-500 hover:text-white transition-all">
                Portfolio
              </a>
              <a href="#" className="px-3 py-2 sm:px-4 sm:py-2 text-gray-600 rounded-lg 
                hover:bg-blue-500 hover:text-white transition-all">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Jadval */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-700">
              Jadval Qatorlari
            </h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-gray-700">ID</th>
                      <th className="px-6 py-3 text-left text-gray-700">Nomi</th>
                      <th className="px-6 py-3 text-left text-gray-700">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">John Doe</td>
                      <td className="px-6 py-4">john@example.com</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">Jane Smith</td>
                      <td className="px-6 py-4">jane@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foydali Maslahatlar */}
      <section className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Foydali Maslahatlar
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-blue-500 text-xl">→</span>
            <p className="text-gray-600">
              <strong>Ketma-ketlik muhim:</strong> Pseudo-classlarni to'g'ri tartibda 
              ishlatish kerak (LVHA): :link → :visited → :hover → :active
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-500 text-xl">→</span>
            <p className="text-gray-600">
              <strong>Specificity:</strong> Pseudo-classlar oddiy classlardan ko'ra 
              yuqoriroq darajaga ega
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-500 text-xl">→</span>
            <p className="text-gray-600">
              <strong>Kombinatsiyalar:</strong> Pseudo-classlarni bir-biri bilan 
              kombinatsiya qilish mumkin
            </p>
          </div>
        </div>
      </section>

      {/* Qo'shimcha Resurslar */}
      <section className="p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Qo'shimcha Resurslar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 border-2 border-blue-500 rounded-xl hover:bg-blue-50 
              transition-all group"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2 
              group-hover:text-blue-600">
              MDN Web Docs
            </h3>
            <p className="text-gray-600">
              Pseudo-classlar haqida batafsil texnik hujjatlar
            </p>
          </a>
          
          <a 
            href="https://css-tricks.com/pseudo-class-selectors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 border-2 border-green-500 rounded-xl hover:bg-green-50 
              transition-all group"
          >
            <h3 className="text-xl font-semibold text-green-500 mb-2 
              group-hover:text-green-600">
              CSS-Tricks
            </h3>
            <p className="text-gray-600">
              Amaliy misollar va qo'llanmalar
            </p>
          </a>
        </div>
      </section>

      {/* Real Namunalar Bo'limi */}
      <section className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Real Loyiha Namunalari
        </h2>

        {/* 1. Hover Effects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            1. Zamonaviy Hover Effektlari
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg mb-4">
            <pre className="text-gray-100 font-mono text-sm">
              <code>
{`.card {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}`}
              </code>
            </pre>
          </div>
          
          {/* Namuna */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img 
                src="https://picsum.photos/400/300" 
                alt="Card Image" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Hover Card</h4>
                  <p className="text-sm">Hover qilib ko'ring</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Form Validatsiya */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            2. Form Validatsiya Stillari
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg mb-4">
            <pre className="text-gray-100 font-mono text-sm">
              <code>
{`.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

.form-input:valid {
  border-color: #10b981;
}

.form-input:invalid {
  border-color: #ef4444;
}

.form-input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}`}
              </code>
            </pre>
          </div>

          {/* Namuna */}
          <form className="space-y-4 max-w-full sm:max-w-md">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email"
                required
                placeholder="email@example.com"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input 
                type="password"
                required
                minLength="6"
                placeholder="Minimum 6 belgi"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg 
                  transition-all duration-300 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                  valid:border-green-500 invalid:border-red-500"
              />
            </div>
          </form>
        </div>

        {/* 3. Jadval Stillari */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            3. Zamonaviy Jadval Stillari
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg mb-4">
            <pre className="text-gray-100 font-mono text-sm">
              <code>
{`.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.table tr:nth-child(even) {
  background-color: #f8fafc;
}

.table tr:hover {
  background-color: #f1f5f9;
}

.table th {
  background-color: #f8fafc;
  font-weight: 600;
  text-align: left;
  padding: 0.75rem 1rem;
}

.table td {
  padding: 0.75rem 1rem;
  border-top: 1px solid #e2e8f0;
}

.table tbody tr:first-child td {
  border-top: none;
}`}
              </code>
            </pre>
          </div>

          {/* Namuna */}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-900 rounded-tl-lg">
                    ID
                  </th>
                  <th className="bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Nomi
                  </th>
                  <th className="bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-900 rounded-tr-lg">
                    Harakat
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-500">1</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Loyiha A</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Faol
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      Ko'rish
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-500">2</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Loyiha B</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Jarayonda
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      Ko'rish
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Navigatsiya Menyu */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            4. Zamonaviy Navigatsiya
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg mb-4">
            <pre className="text-gray-100 font-mono text-sm">
              <code>
{`.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  color: #4b5563;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #1f2937;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: #3b82f6;
}

.nav-link.active::after {
  width: 100%;
}`}
              </code>
            </pre>
          </div>

          {/* Namuna */}
          <nav className="flex space-x-6 mt-6">
            <a 
              href="#"
              className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-blue-500 after:transition-all after:duration-300
                hover:after:w-full"
            >
              Bosh Sahifa
            </a>
            <a 
              href="#"
              className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-blue-500 after:transition-all after:duration-300
                hover:after:w-full"
            >
              Xizmatlar
            </a>
            <a 
              href="#"
              className="relative px-4 py-2 text-blue-500 transition-colors
                after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                after:bg-blue-500"
            >
              Portfolio
            </a>
            <a 
              href="#"
              className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-blue-500 after:transition-all after:duration-300
                hover:after:w-full"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </section>

      {/* Amaliy Mashqlar bo'limi */}
      <section className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Amaliy Mashqlar
        </h2>

        {/* 1-Topshiriq */}
        <div className="mb-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              1-Topshiriq: Interaktiv Tugmalar
            </h3>
            <p className="text-gray-600">
              Quyidagi talablarga mos tugmalar yarating:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Tugma ustiga borganda (hover) rang o'zgarishi va soya qo'shilishi</li>
              <li>Tugma bosilganda (active) kichrayishi</li>
              <li>O'tish effektlari (transition) qo'shish</li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kod yozish qismi */}
            <div>
              <h4 className="text-lg font-medium mb-3">Kod:</h4>
              <Editor
                height="300px"
                defaultLanguage="css"
                value={task1Code}
                onChange={setTask1Code}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>

            {/* Natija qismi */}
            <div>
              <h4 className="text-lg font-medium mb-3">Natija:</h4>
              <div className="p-8 bg-gray-50 rounded-lg">
                <style>{task1Code}</style>
                <div className="space-y-4">
                  <button className="task1-button px-6 py-3 bg-blue-500 text-white rounded-lg">
                    Asosiy Tugma
                  </button>
                  <button className="task1-button px-6 py-3 bg-green-500 text-white rounded-lg">
                    Ikkinchi Tugma
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Topshiriq */}
        <div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              2-Topshiriq: Ro'yxat Stilizatsiyasi
            </h3>
            <p className="text-gray-600">
              Quyidagi talablarga mos ro'yxat yarating:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Birinchi element alohida rang va stil bilan ajralib turishi</li>
              <li>Oxirgi element alohida stil bilan ajralib turishi</li>
              <li>Juft va toq elementlar turli rang bilan ajratilishi</li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kod yozish qismi */}
            <div>
              <h4 className="text-lg font-medium mb-3">Kod:</h4>
              <Editor
                height="300px"
                defaultLanguage="css"
                value={task2Code}
                onChange={setTask2Code}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>

            {/* Natija qismi */}
            <div>
              <h4 className="text-lg font-medium mb-3">Natija:</h4>
              <div className="p-8 bg-gray-50 rounded-lg">
                <style>{task2Code}</style>
                <ul className="task2-list space-y-2">
                  <li className="p-4 bg-gray-100 rounded">Element 1</li>
                  <li className="p-4 bg-gray-100 rounded">Element 2</li>
                  <li className="p-4 bg-gray-100 rounded">Element 3</li>
                  <li className="p-4 bg-gray-100 rounded">Element 4</li>
                  <li className="p-4 bg-gray-100 rounded">Element 5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CssPseudoClasses;
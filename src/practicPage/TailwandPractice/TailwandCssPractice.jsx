import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TailwindPractice() {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Misol komponenti
  const ExampleComponent = ({ title, code, children }) => {
    const id = title.toLowerCase().replace(/\s+/g, '-');
    const isExpanded = expandedSections[id];

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => toggleSection(id)}
          >
            {isExpanded ? 'Yopish' : 'Kodni ko\'rish'}
          </button>
        </div>

        {/* Namuna */}
        <div className="mb-4">
          {children}
        </div>

        {/* Ochiluvchi kod qismi */}
        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Kod</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(code)}
                  className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Nusxa olish
                </button>
              </div>
              <pre className="text-gray-300 overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
    
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
            Tailwind CSS Practice
          </h1>
          <button 
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Orqaga
          </button>
        </div>


        <div className="container mx-auto space-y-8">
          {/* Navigation Bar misoli */}
          <ExampleComponent 
            title="Navigation Bar Misoli"
            code={`<nav class="bg-white shadow-lg">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center space-x-8">
        <div class="flex-shrink-0">
          <span class="text-xl font-bold text-indigo-600">Logo</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Bosh Sahifa</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Xizmatlar</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Blog</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Aloqa</a>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Kirish</button>
      </div>
    </div>
  </div>
</nav>`}
          >
            <nav className="bg-white shadow-lg">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center space-x-8">
                    <div className="flex-shrink-0">
                      <span className="text-xl font-bold text-indigo-600">Logo</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                      <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Bosh Sahifa</a>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Xizmatlar</a>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Blog</a>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Aloqa</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Kirish</button>
                  </div>
                </div>
              </div>
            </nav>
          </ExampleComponent>

          {/* Pricing Card misoli */}
          <ExampleComponent 
            title="Pricing Card Misoli"
            code={`<div class="bg-white rounded-lg shadow-lg overflow-hidden">
  <div class="px-6 py-8 bg-indigo-600 sm:p-10 sm:pb-6">
    <div class="flex justify-center">
      <span class="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide uppercase rounded-full text-indigo-600 bg-white">
        Premium
      </span>
    </div>
    <div class="mt-4 flex justify-center text-6xl font-extrabold text-white">
      <span class="ml-1 mr-3 text-xl font-medium leading-8">$</span>
      49
      <span class="ml-1 text-2xl font-medium leading-8">/oy</span>
    </div>
  </div>
  <div class="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
    <ul class="space-y-4">
      <li class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <p class="ml-3 text-base text-gray-700">Cheksiz foydalanuvchilar</p>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <p class="ml-3 text-base text-gray-700">24/7 qo'llab-quvvatlash</p>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <p class="ml-3 text-base text-gray-700">Maxsus imtiyozlar</p>
      </li>
    </ul>
    <div class="mt-6">
      <button class="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        Boshlash
      </button>
    </div>
  </div>
</div>`}
          >
            {/* Pricing Card komponenti */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 bg-indigo-600 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide uppercase rounded-full text-indigo-600 bg-white">
                    Premium
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-white">
                  <span className="ml-1 mr-3 text-xl font-medium leading-8">$</span>
                  49
                  <span className="ml-1 text-2xl font-medium leading-8">/oy</span>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Cheksiz foydalanuvchilar</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">24/7 qo'llab-quvvatlash</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Maxsus imtiyozlar</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Boshlash
                  </button>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Testimonial Card misoli */}
          <ExampleComponent 
            title="Testimonial Card Misoli"
            code={`<div class="bg-white rounded-xl shadow-lg px-8 py-6 max-w-xl mx-auto">
  <div class="flex items-center space-x-4">
    <img class="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar"/>
    <div>
      <h3 class="text-lg font-semibold text-gray-800">Jamshid Ahmadov</h3>
      <p class="text-gray-600">Marketing Menejeri</p>
    </div>
  </div>
  <div class="mt-4">
    <p class="text-gray-600 italic">
      "Bu mahsulot bizning kompaniyamiz uchun juda foydali bo'ldi. Biz uni har kuni ishlatamiz va natijalardan juda mamnunmiz."
    </p>
  </div>
  <div class="mt-4 flex items-center">
    <div class="flex text-yellow-400">
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    </div>
    <span class="ml-2 text-gray-600">5.0</span>
  </div>
</div>`}
          >
            {/* Testimonial Card komponenti */}
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 max-w-xl mx-auto">
              <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar"/>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Jamshid Ahmadov</h3>
                  <p className="text-gray-600">Marketing Menejeri</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">
                  "Bu mahsulot bizning kompaniyamiz uchun juda foydali bo'ldi. Biz uni har kuni ishlatamiz va natijalardan juda mamnunmiz."
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
            </div>
          </ExampleComponent>

          {/* Album Card misoli */}
          <ExampleComponent 
            title="Album Card Misoli"
            code={`<div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-white">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="Album cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&h=200&auto=format&fit=crop" />
  </div>
  <div class="flex flex-col items-center md:items-start gap-2">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <div class="flex gap-2 font-medium text-gray-600">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </div>
  </div>
</div>`}
          >
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-white">
              <div>
                <img className="size-48 shadow-xl rounded-md" alt="Album cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&h=200&auto=format&fit=crop" />
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-2xl font-medium">Class Warfare</span>
                <span className="font-medium text-sky-500">The Anti-Patterns</span>
                <div className="flex gap-2 font-medium text-gray-600">
                  <span>No. 4</span>
                  <span>·</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Button misoli */}
          <ExampleComponent 
            title="Button Misoli"
            code={`<button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Button
</button>`}
          >
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Button
            </button>
          </ExampleComponent>

          {/* Card misoli */}
          <ExampleComponent 
            title="Card Misoli"
            code={`<div class="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
  <h3 class="text-xl font-semibold mb-2">Card Sarlavhasi</h3>
  <p class="text-gray-600">Card matni bu yerda</p>
</div>`}
          >
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Card Sarlavhasi</h3>
              <p className="text-gray-600">Card matni bu yerda</p>
            </div>
          </ExampleComponent>

          {/* Alert misoli */}
          <ExampleComponent 
            title="Alert Misoli"
            code={`<div class="p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <p>Muvaffaqiyatli bajarildi!</p>
  </div>
</div>`}
          >
            <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p>Muvaffaqiyatli bajarildi!</p>
              </div>
            </div>
          </ExampleComponent>

          {/* Badge misoli */}
          <ExampleComponent 
            title="Badge Misoli"
            code={`<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  Yangi
</span>`}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Yangi
            </span>
          </ExampleComponent>

          {/* Input misoli */}
          <ExampleComponent 
            title="Input Misoli"
            code={`<input 
  type="text" 
  placeholder="Matn kiriting" 
  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>`}
          >
            <input 
              type="text" 
              placeholder="Matn kiriting" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </ExampleComponent>

          {/* Flex Container misoli */}
          <ExampleComponent 
            title="Flex Container Misoli"
            code={`<div class="flex space-x-4">
  <div class="p-4 bg-blue-100 rounded-lg">Element 1</div>
  <div class="p-4 bg-blue-100 rounded-lg">Element 2</div>
  <div class="p-4 bg-blue-100 rounded-lg">Element 3</div>
</div>`}
          >
            <div className="flex space-x-4">
              <div className="p-4 bg-blue-100 rounded-lg">Element 1</div>
              <div className="p-4 bg-blue-100 rounded-lg">Element 2</div>
              <div className="p-4 bg-blue-100 rounded-lg">Element 3</div>
            </div>
          </ExampleComponent>

          {/* Grid Container misoli */}
          <ExampleComponent 
            title="Grid Container Misoli"
            code={`<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="p-4 bg-purple-100 rounded-lg">Grid 1</div>
  <div class="p-4 bg-purple-100 rounded-lg">Grid 2</div>
  <div class="p-4 bg-purple-100 rounded-lg">Grid 3</div>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-100 rounded-lg">Grid 1</div>
              <div className="p-4 bg-purple-100 rounded-lg">Grid 2</div>
              <div className="p-4 bg-purple-100 rounded-lg">Grid 3</div>
            </div>
          </ExampleComponent>

          {/* Modern Search Input misoli */}
          <ExampleComponent 
            title="Modern Search Input Misoli"
            code={`<div class="relative max-w-md mx-auto">
  <input 
    type="text"
    placeholder="Qidirish..."
    class="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
  />
  <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
  </div>
</div>`}
          >
            <div className="relative max-w-md mx-auto">
              <input 
                type="text"
                placeholder="Qidirish..."
                className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Alert misoli */}
          <ExampleComponent 
            title="Modern Alert Misoli"
            code={`<div class="flex p-4 mb-4 text-sm rounded-lg bg-blue-50" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M18 10a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>
  <div>
    <span class="font-medium text-blue-600">Ma'lumot!</span>
    <div class="text-blue-600">
      Sizning profilingiz muvaffaqiyatli yangilandi.
    </div>
  </div>
</div>

<div class="flex p-4 mb-4 text-sm rounded-lg bg-green-50" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>
  <div>
    <span class="font-medium text-green-600">Muvaffaqiyat!</span>
    <div class="text-green-600">
      Sizning buyurtmangiz qabul qilindi.
    </div>
  </div>
</div>

<div class="flex p-4 mb-4 text-sm rounded-lg bg-red-50" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
  </svg>
  <div>
    <span class="font-medium text-red-600">Xato!</span>
    <div class="text-red-600">
      Iltimos, barcha maydonlarni to'ldiring.
    </div>
  </div>
</div>`}
          >
            <div className="space-y-4">
              <div className="flex p-4 mb-4 text-sm rounded-lg bg-blue-50" role="alert">
                <svg className="flex-shrink-0 inline w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <span className="font-medium text-blue-600">Ma'lumot!</span>
                  <div className="text-blue-600">
                    Sizning profilingiz muvaffaqiyatli yangilandi.
                  </div>
                </div>
              </div>

              <div className="flex p-4 mb-4 text-sm rounded-lg bg-green-50" role="alert">
                <svg className="flex-shrink-0 inline w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <span className="font-medium text-green-600">Muvaffaqiyat!</span>
                  <div className="text-green-600">
                    Sizning buyurtmangiz qabul qilindi.
                  </div>
                </div>
              </div>

              <div className="flex p-4 mb-4 text-sm rounded-lg bg-red-50" role="alert">
                <svg className="flex-shrink-0 inline w-5 h-5 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <div>
                  <span className="font-medium text-red-600">Xato!</span>
                  <div className="text-red-600">
                    Iltimos, barcha maydonlarni to'ldiring.
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Form misoli */}
          <ExampleComponent 
            title="Modern Form Misoli"
            code={`<form class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
  <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
    <input 
      type="email" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="example@mail.com"
      required
    />
  </div>
  <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-gray-900">Parol</label>
    <input 
      type="password"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required
    />
  </div>
  <div class="flex items-center mb-6">
    <input 
      type="checkbox"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
    />
    <label class="ml-2 text-sm font-medium text-gray-900">
      Meni eslab qol
    </label>
  </div>
  <button 
    type="submit"
    class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
  >
    Kirish
  </button>
</form>`}
          >
            <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input 
                  type="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Parol</label>
                <input 
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center mb-6">
                <input 
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-900">
                  Meni eslab qol
                </label>
              </div>
              <button 
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                Kirish
              </button>
            </form>
          </ExampleComponent>

          {/* Modern Dashboard Cards */}
          <ExampleComponent 
            title="Modern Dashboard Cards"
            code={`<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg p-6 text-white">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-medium">Foydalanuvchilar</h3>
      <span class="p-2 bg-white bg-opacity-30 rounded-lg">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
        </svg>
      </span>
    </div>
    <div class="text-3xl font-bold mb-2">1,482</div>
    <div class="flex items-center text-sm">
      <span class="text-green-300 mr-2">+12.5%</span>
      <span class="text-white opacity-50">O'tgan oydan</span>
    </div>
  </div>

  <div class="bg-gradient-to-br from-pink-600 to-red-500 rounded-lg p-6 text-white">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-medium">Daromad</h3>
      <span class="p-2 bg-white bg-opacity-30 rounded-lg">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
        </svg>
      </span>
    </div>
    <div class="text-3xl font-bold mb-2">$23,482</div>
    <div class="flex items-center text-sm">
      <span class="text-red-300 mr-2">-2.4%</span>
      <span class="text-white opacity-50">O'tgan oydan</span>
    </div>
  </div>

  <div class="bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg p-6 text-white">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-medium">Buyurtmalar</h3>
      <span class="p-2 bg-white bg-opacity-30 rounded-lg">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        </svg>
      </span>
    </div>
    <div class="text-3xl font-bold mb-2">384</div>
    <div class="flex items-center text-sm">
      <span class="text-green-300 mr-2">+8.1%</span>
      <span class="text-white opacity-50">O'tgan oydan</span>
    </div>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Foydalanuvchilar</h3>
                  <span className="p-2 bg-white bg-opacity-30 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </span>
                </div>
                <div className="text-3xl font-bold mb-2">1,482</div>
                <div className="flex items-center text-sm">
                  <span className="text-green-300 mr-2">+12.5%</span>
                  <span className="text-white opacity-50">O'tgan oydan</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-600 to-red-500 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Daromad</h3>
                  <span className="p-2 bg-white bg-opacity-30 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                </div>
                <div className="text-3xl font-bold mb-2">$23,482</div>
                <div className="flex items-center text-sm">
                  <span className="text-red-300 mr-2">-2.4%</span>
                  <span className="text-white opacity-50">O'tgan oydan</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Buyurtmalar</h3>
                  <span className="p-2 bg-white bg-opacity-30 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                    </svg>
                  </span>
                </div>
                <div className="text-3xl font-bold mb-2">384</div>
                <div className="flex items-center text-sm">
                  <span className="text-green-300 mr-2">+8.1%</span>
                  <span className="text-white opacity-50">O'tgan oydan</span>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Profile Card */}
          <ExampleComponent 
            title="Modern Profile Card"
            code={`<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div class="relative h-48">
    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Profile cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  </div>
  <div class="relative px-6 pt-4 pb-8">
    <div class="relative -mt-16 mb-4">
      <img class="w-24 h-24 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile"/>
    </div>
    <div class="text-center">
      <h2 class="text-xl font-semibold text-gray-800">Jamshid Ahmadov</h2>
      <p class="text-sm text-gray-600">Senior Software Engineer</p>
    </div>
    <div class="mt-6 flex justify-center space-x-4">
      <div class="text-center">
        <div class="font-bold text-gray-900">1,432</div>
        <div class="text-sm text-gray-600">Followers</div>
      </div>
      <div class="text-center">
        <div class="font-bold text-gray-900">86</div>
        <div class="text-sm text-gray-600">Projects</div>
      </div>
      <div class="text-center">
        <div class="font-bold text-gray-900">4.8</div>
        <div class="text-sm text-gray-600">Rating</div>
      </div>
    </div>
    <div class="mt-6 flex justify-center space-x-3">
      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Follow
      </button>
      <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
        Message
      </button>
    </div>
  </div>
</div>`}
          >
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Profile cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="relative px-6 pt-4 pb-8">
                <div className="relative -mt-16 mb-4">
                  <img className="w-24 h-24 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile"/>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">Jamshid Ahmadov</h2>
                  <p className="text-gray-600">Senior Software Engineer</p>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Calendar Component */}
          <ExampleComponent 
            title="Modern Calendar Component"
            code={`<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-gray-800">Oktabr 2023</h2>
      <div class="flex space-x-2">
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-2 text-center mb-4">
      <div class="text-sm font-medium text-gray-500">Du</div>
      <div class="text-sm font-medium text-gray-500">Se</div>
      <div class="text-sm font-medium text-gray-500">Ch</div>
      <div class="text-sm font-medium text-gray-500">Pa</div>
      <div class="text-sm font-medium text-gray-500">Ju</div>
      <div class="text-sm font-medium text-gray-500">Sh</div>
      <div class="text-sm font-medium text-gray-500">Ya</div>
    </div>
    <div class="grid grid-cols-7 gap-2 text-sm">
      <div class="p-2 text-gray-400">30</div>
      <div class="p-2 text-gray-400">31</div>
      <div class="p-2">1</div>
      <div class="p-2">2</div>
      <div class="p-2">3</div>
      <div class="p-2">4</div>
      <div class="p-2">5</div>
      <div class="p-2">6</div>
      <div class="p-2">7</div>
      <div class="p-2 bg-blue-500 text-white rounded-lg">8</div>
      <div class="p-2">9</div>
      <div class="p-2">10</div>
      <div class="p-2">11</div>
      <div class="p-2">12</div>
      <div class="p-2">13</div>
      <div class="p-2">14</div>
      <div class="p-2">15</div>
      <div class="p-2">16</div>
      <div class="p-2">17</div>
      <div class="p-2">18</div>
      <div class="p-2">19</div>
      <div class="p-2">20</div>
      <div class="p-2">21</div>
      <div class="p-2">22</div>
      <div class="p-2">23</div>
      <div class="p-2">24</div>
      <div class="p-2">25</div>
      <div class="p-2">26</div>
      <div class="p-2">27</div>
      <div class="p-2">28</div>
      <div class="p-2">29</div>
      <div class="p-2">30</div>
      <div class="p-2">31</div>
    </div>
    <div class="mt-6">
      <div class="flex items-center space-x-4">
        <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span class="text-sm text-gray-600">Bugungi sana</span>
      </div>
    </div>
  </div>
</div>`}
          >
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Oktabr 2023</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  <div className="text-sm font-medium text-gray-500">Du</div>
                  <div className="text-sm font-medium text-gray-500">Se</div>
                  <div className="text-sm font-medium text-gray-500">Ch</div>
                  <div className="text-sm font-medium text-gray-500">Pa</div>
                  <div className="text-sm font-medium text-gray-500">Ju</div>
                  <div className="text-sm font-medium text-gray-500">Sh</div>
                  <div className="text-sm font-medium text-gray-500">Ya</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-sm">
                  <div className="p-2 text-gray-400">30</div>
                  <div className="p-2 text-gray-400">31</div>
                  <div className="p-2">1</div>
                  <div className="p-2">2</div>
                  <div className="p-2">3</div>
                  <div className="p-2">4</div>
                  <div className="p-2">5</div>
                  <div className="p-2">6</div>
                  <div className="p-2">7</div>
                  <div className="p-2 bg-blue-500 text-white rounded-lg">8</div>
                  <div className="p-2">9</div>
                  <div className="p-2">10</div>
                  <div className="p-2">11</div>
                  <div className="p-2">12</div>
                  <div className="p-2">13</div>
                  <div className="p-2">14</div>
                  <div className="p-2">15</div>
                  <div className="p-2">16</div>
                  <div className="p-2">17</div>
                  <div className="p-2">18</div>
                  <div className="p-2">19</div>
                  <div className="p-2">20</div>
                  <div className="p-2">21</div>
                  <div className="p-2">22</div>
                  <div className="p-2">23</div>
                  <div className="p-2">24</div>
                  <div className="p-2">25</div>
                  <div className="p-2">26</div>
                  <div className="p-2">27</div>
                  <div className="p-2">28</div>
                  <div className="p-2">29</div>
                  <div className="p-2">30</div>
                  <div className="p-2">31</div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Bugungi sana</span>
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern File Upload Component */}
          <ExampleComponent 
            title="Modern File Upload Component"
            code={`<div class="max-w-xl mx-auto">
  <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
      </svg>
      <p class="mb-2 text-sm text-gray-500">
        <span class="font-semibold">Yuklash uchun bosing</span> yoki faylni bu yerga tashlang
      </p>
      <p class="text-xs text-gray-500">PNG, JPG yoki PDF (MAX. 10MB)</p>
    </div>
    <input type="file" class="hidden" />
  </label>
  
  <div class="mt-4">
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-gray-900">document.pdf</span>
      <span class="text-sm text-gray-500">65%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 65%"></div>
    </div>
  </div>
</div>`}
          >
            <div className="max-w-xl mx-auto">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Yuklash uchun bosing</span> yoki faylni bu yerga tashlang
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG yoki PDF (MAX. 10MB)</p>
                </div>
                <input type="file" className="hidden" />
              </label>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">document.pdf</span>
                  <span className="text-sm text-gray-500">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Data Table */}
          <ExampleComponent 
            title="Modern Data Table"
            code={`<div class="bg-white shadow-md rounded-lg overflow-hidden">
  <div class="p-4 flex items-center justify-between">
    <div>
      <h2 class="text-xl font-semibold text-gray-800">Foydalanuvchilar</h2>
      <p class="text-sm text-gray-600">Barcha foydalanuvchilar ro'yxati</p>
    </div>
    <div class="flex space-x-2">
      <div class="relative">
        <input 
          type="text" 
          placeholder="Qidirish..." 
          class="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg class="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        + Yangi
      </button>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Foydalanuvchi
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            So'nggi faollik
          </th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amallar
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">Jamshid Ahmadov</div>
                <div class="text-sm text-gray-500">jamshid@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Faol
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            5 daqiqa oldin
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button class="text-blue-600 hover:text-blue-900 mr-3">Tahrirlash</button>
            <button class="text-red-600 hover:text-red-900">O'chirish</button>
          </td>
        </tr>
        {/* More rows... */}
      </tbody>
    </table>
  </div>
  <div class="px-4 py-3 border-t border-gray-200">
    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-700">
        Jami 50 ta yozuv, 1-10 ko'rsatilmoqda
      </div>
      <div class="flex space-x-2">
        <button class="px-3 py-1 border rounded-md hover:bg-gray-50">Oldingi</button>
        <button class="px-3 py-1 border rounded-md bg-blue-600 text-white">1</button>
        <button class="px-3 py-1 border rounded-md hover:bg-gray-50">2</button>
        <button class="px-3 py-1 border rounded-md hover:bg-gray-50">3</button>
        <button class="px-3 py-1 border rounded-md hover:bg-gray-50">Keyingi</button>
      </div>
    </div>
  </div>
</div>`}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Foydalanuvchilar</h2>
                  <p className="text-sm text-gray-600">Barcha foydalanuvchilar ro'yxati</p>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Qidirish..." 
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    + Yangi
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Foydalanuvchi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        So'nggi faollik
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amallar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[1, 2, 3].map((item) => (
                      <tr key={item}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Jamshid Ahmadov</div>
                              <div className="text-sm text-gray-500">jamshid@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Faol
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          5 daqiqa oldin
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Tahrirlash</button>
                          <button className="text-red-600 hover:text-red-900">O'chirish</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Jami 50 ta yozuv, 1-10 ko'rsatilmoqda
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Oldingi</button>
                    <button className="px-3 py-1 border rounded-md bg-blue-600 text-white">1</button>
                    <button className="px-3 py-1 border rounded-md hover:bg-gray-50">2</button>
                    <button className="px-3 py-1 border rounded-md hover:bg-gray-50">3</button>
                    <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Keyingi</button>
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Stats Grid */}
          <ExampleComponent 
            title="Modern Stats Grid"
            code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-blue-100 text-blue-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-2xl font-semibold text-gray-800">2,521</h3>
        <p class="text-gray-600">Faol foydalanuvchilar</p>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-green-500 text-sm font-semibold">+15.2%</span>
        <span class="text-gray-500 text-sm">O'tgan oydan</span>
      </div>
      <div class="mt-2 h-2 bg-gray-200 rounded-full">
        <div class="h-full bg-blue-600 rounded-full" style="width: 75%"></div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-green-100 text-green-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-2xl font-semibold text-gray-800">$48,257</h3>
        <p class="text-gray-600">Oylik daromad</p>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-red-500 text-sm font-semibold">-2.4%</span>
        <span class="text-gray-500 text-sm">O'tgan oydan</span>
      </div>
      <div class="mt-2 h-2 bg-gray-200 rounded-full">
        <div class="h-full bg-green-600 rounded-full" style="width: 65%"></div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-2xl font-semibold text-gray-800">384</h3>
        <p class="text-gray-600">Yangi buyurtmalar</p>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-green-500 text-sm font-semibold">+8.1%</span>
        <span class="text-gray-500 text-sm">O'tgan oydan</span>
      </div>
      <div class="mt-2 h-2 bg-gray-200 rounded-full">
        <div class="h-full bg-yellow-600 rounded-full" style="width: 45%"></div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-purple-100 text-purple-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-2xl font-semibold text-gray-800">92.6%</h3>
        <p class="text-gray-600">Konversiya darajasi</p>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-green-500 text-sm font-semibold">+5.4%</span>
        <span class="text-gray-500 text-sm">O'tgan oydan</span>
      </div>
      <div class="mt-2 h-2 bg-gray-200 rounded-full">
        <div class="h-full bg-purple-600 rounded-full" style="width: 92%"></div>
      </div>
    </div>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Foydalanuvchilar",
                  value: "2,521",
                  change: "+15.2%",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  color: "blue"
                },
                {
                  title: "Daromad",
                  value: "$48,257",
                  change: "-2.4%",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "green"
                },
                {
                  title: "Buyurtmalar",
                  value: "384",
                  change: "+8.1%",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  ),
                  color: "yellow"
                },
                {
                  title: "Konversiya",
                  value: "92.6%",
                  change: "+5.4%",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  color: "purple"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}>
                      {stat.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-gray-800">{stat.value}</h3>
                      <p className="text-gray-600">{stat.title}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-${stat.change.startsWith('+') ? 'green' : 'red'}-500 text-sm font-semibold`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500 text-sm">O'tgan oydan</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-full bg-${stat.color}-600 rounded-full`} 
                        style={{width: Math.abs(parseFloat(stat.change)) * 5 + '%'}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExampleComponent>

          {/* Modern Settings Panel */}
          <ExampleComponent 
            title="Modern Settings Panel"
            code={`<div class="bg-white shadow-md rounded-lg overflow-hidden">
  <div class="border-b border-gray-200">
    <nav class="flex space-x-8 px-6" aria-label="Tabs">
      <button class="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">
        Umumiy
      </button>
      <button class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        Xavfsizlik
      </button>
      <button class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        Bildirishnomalar
      </button>
      <button class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        To'lov
      </button>
    </nav>
  </div>

  <div class="p-6">
    <div class="max-w-4xl">
      <h2 class="text-lg font-medium text-gray-900 mb-6">Profil sozlamalari</h2>
      
      <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label class="block text-sm font-medium text-gray-700">Ism</label>
          <input 
            type="text" 
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            value="Jamshid"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Familiya</label>
          <input 
            type="text" 
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            value="Ahmadov"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            value="jamshid@example.com"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Bio</label>
          <textarea 
            rows="4" 
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >Senior Software Engineer with 5+ years of experience...</textarea>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Profil rasmi</label>
          <div class="mt-1 flex items-center space-x-5">
            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <button class="rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
              O'zgartirish
            </button>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Bildirishnomalar</label>
          <div class="mt-2 space-y-4">
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </div>
              <div class="ml-3">
                <label class="text-sm text-gray-700">Email bildirishnomalari</label>
                <p class="text-sm text-gray-500">Yangiliklar va o'zgarishlar haqida xabar oling.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </div>
              <div class="ml-3">
                <label class="text-sm text-gray-700">SMS bildirishnomalari</label>
                <p class="text-sm text-gray-500">Muhim xabarlarni SMS orqali oling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-end space-x-3">
        <button class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Bekor qilish
        </button>
        <button class="rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700">
          Saqlash
        </button>
      </div>
    </div>
  </div>
</div>`}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {['Umumiy', 'Xavfsizlik', 'Bildirishnomalar', "To'lov"].map((tab, index) => (
                    <button 
                      key={tab}
                      className={`border-b-2 ${index === 0 ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} py-4 px-1 text-sm font-medium`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                <div className="max-w-4xl">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Profil sozlamalari</h2>
                  
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Ism</label>
                      <input 
                        type="text" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue="Jamshid"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Familiya</label>
                      <input 
                        type="text" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue="Ahmadov"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue="jamshid@example.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Bio</label>
                      <textarea 
                        rows="4" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue="Senior Software Engineer with 5+ years of experience..."
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Profil rasmi</label>
                      <div className="mt-1 flex items-center space-x-5">
                        <img 
                          className="h-12 w-12 rounded-full" 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                          alt="" 
                        />
                        <button className="rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                          O'zgartirish
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Bildirishnomalar</label>
                      <div className="mt-2 space-y-4">
                        {[
                          {
                            title: 'Email bildirishnomalari',
                            description: "Yangiliklar va o'zgarishlar haqida xabar oling."
                          },
                          {
                            title: 'SMS bildirishnomalari',
                            description: 'Muhim xabarlarni SMS orqali oling.'
                          }
                        ].map((notification, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex h-5 items-center">
                              <input 
                                type="checkbox" 
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                              />
                            </div>
                            <div className="ml-3">
                              <label className="text-sm text-gray-700">{notification.title}</label>
                              <p className="text-sm text-gray-500">{notification.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Bekor qilish
                    </button>
                    <button className="rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700">
                      Saqlash
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Pricing Cards */}
          <ExampleComponent 
            title="Modern Pricing Cards"
            code={`<div class="bg-gray-100 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Basic Plan -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-8">
          <h3 class="text-2xl font-semibold text-gray-900">Basic</h3>
          <div class="mt-4">
            <span class="text-4xl font-bold">$29</span>
            <span class="text-gray-500">/oylik</span>
          </div>
          <p class="mt-4 text-gray-500">Kichik biznes uchun ideal</p>
        </div>
        <div class="border-t border-gray-200 px-6 py-8">
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">5 loyiha</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">20GB saqlash</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">Email qo'llab-quvvatlash</span>
            </li>
          </ul>
          <button class="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Boshlash
          </button>
        </div>
      </div>

      <!-- Pro Plan -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 relative">
        <div class="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
          Eng mashhur
        </div>
        <div class="px-6 py-8">
          <h3 class="text-2xl font-semibold text-gray-900">Pro</h3>
          <div class="mt-4">
            <span class="text-4xl font-bold">$79</span>
            <span class="text-gray-500">/oylik</span>
          </div>
          <p class="mt-4 text-gray-500">O'sib borayotgan kompaniyalar uchun</p>
        </div>
        <div class="border-t border-gray-200 px-6 py-8">
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">Cheksiz loyihalar</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">100GB saqlash</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">24/7 qo'llab-quvvatlash</span>
            </li>
          </ul>
          <button class="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Boshlash
          </button>
        </div>
      </div>

      <!-- Enterprise Plan -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-8">
          <h3 class="text-2xl font-semibold text-gray-900">Enterprise</h3>
          <div class="mt-4">
            <span class="text-4xl font-bold">$199</span>
            <span class="text-gray-500">/oylik</span>
          </div>
          <p class="mt-4 text-gray-500">Katta kompaniyalar uchun</p>
        </div>
        <div class="border-t border-gray-200 px-6 py-8">
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">Maxsus xizmatlar</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">1TB saqlash</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="ml-3 text-gray-500">Shaxsiy menejer</span>
            </li>
          </ul>
          <button class="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Boshlash
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`}
          >
            {/* Implementation */}
            <div className="bg-gray-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Basic Plan */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8">
                      <h3 className="text-2xl font-semibold text-gray-900">Basic</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$29</span>
                        <span className="text-gray-500">/oylik</span>
                      </div>
                      <p className="mt-4 text-gray-500">Kichik biznes uchun ideal</p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-8">
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">5 loyiha</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">20GB saqlash</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">Email qo'llab-quvvatlash</span>
                        </li>
                      </ul>
                      <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Boshlash
                      </button>
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 relative">
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
                      Eng mashhur
                    </div>
                    <div className="px-6 py-8">
                      <h3 className="text-2xl font-semibold text-gray-900">Pro</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$79</span>
                        <span className="text-gray-500">/oylik</span>
                      </div>
                      <p className="mt-4 text-gray-500">O'sib borayotgan kompaniyalar uchun</p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-8">
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">Cheksiz loyihalar</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">100GB saqlash</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">24/7 qo'llab-quvvatlash</span>
                        </li>
                      </ul>
                      <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Boshlash
                      </button>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8">
                      <h3 className="text-2xl font-semibold text-gray-900">Enterprise</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$199</span>
                        <span className="text-gray-500">/oylik</span>
                      </div>
                      <p className="mt-4 text-gray-500">Katta kompaniyalar uchun</p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-8">
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">Maxsus xizmatlar</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">1TB saqlash</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="ml-3 text-gray-500">Shaxsiy menejer</span>
                        </li>
                      </ul>
                      <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Boshlash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Authentication Form */}
          <ExampleComponent 
            title="Modern Authentication Form"
            code={`<div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Hisobingizga kiring
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Yoki
      <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
        14 kunlik bepul sinov muddati
      </a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Email manzil
          </label>
          <div class="mt-1">
            <input
              type="email"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Parol
          </label>
          <div class="mt-1">
            <input
              type="password"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label class="ml-2 block text-sm text-gray-900">
              Meni eslab qol
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
              Parolni unutdingizmi?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Kirish
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              Yoki ijtimoiy tarmoqlar orqali
            </span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
          </div>

          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
          >
            {/* Implementation */}
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Hisobingizga kiring
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Yoki
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    14 kunlik bepul sinov muddati
                  </a>
                </p>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email manzil
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Parol
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm text-gray-900">
                          Meni eslab qol
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                          Parolni unutdingizmi?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Kirish
                      </button>
                    </div>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Yoki ijtimoiy tarmoqlar orqali
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                        </a>
                      </div>

                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Product Cards Grid */}
          <ExampleComponent 
            title="Modern Product Cards Grid"
            code={`<div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Mahsulotlar</h2>
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {/* Product Card 1 */}
      <div class="group relative">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" 
               alt="Product image"
               class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#" class="font-medium">
                Premium Mahsulot
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Qora</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$48</p>
        </div>
        <button class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Savatga qo'shish
        </button>
      </div>

      {/* Product Card 2 */}
      <div class="group relative">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
               alt="Product image"
               class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#" class="font-medium">
                Premium Plus
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Oq</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$35</p>
        </div>
        <button class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Savatga qo'shish
        </button>
      </div>

      {/* Product Card 3 */}
      <div class="group relative">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
          <img src="https://images.unsplash.com/photo-1503602642458-232111445657" 
               alt="Product image"
               class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#" class="font-medium">
                Ultra Premium
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Ko'k</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$65</p>
        </div>
        <button class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Savatga qo'shish
        </button>
      </div>
    </div>
  </div>
</div>`}
          >
            {/* Component implementation */}
            <div className="bg-white">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Mahsulotlar</h2>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {/* Product Card 1 */}
                  <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" 
                           alt="Product image"
                           className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#" className="font-medium">
                            Premium Mahsulot
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Qora</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$48</p>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Savatga qo'shish
                    </button>
                  </div>

                  {/* Product Card 2 */}
                  <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
                           alt="Product image"
                           className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#" className="font-medium">
                            Premium Plus
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Oq</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Savatga qo'shish
                    </button>
                  </div>

                  {/* Product Card 3 */}
                  <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                      <img src="https://images.unsplash.com/photo-1503602642458-232111445657" 
                           alt="Product image"
                           className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#" className="font-medium">
                            Ultra Premium
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Ko'k</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$65</p>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Savatga qo'shish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ExampleComponent>

          {/* Modern Notification System */}
          <ExampleComponent 
  title="Modern Notification System"
  code={`<div class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6">
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    {/* Success Notification */}
    <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              Muvaffaqiyatli saqlandi!
            </p>
            <p class="mt-1 text-sm text-gray-500">
              Sizning o'zgarishlaringiz muvaffaqiyatli saqlandi.
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Yopish</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Error Notification */}
    <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              Xatolik yuz berdi!
            </p>
            <p class="mt-1 text-sm text-gray-500">
              Iltimos, qaytadan urinib ko'ring.
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <span class="sr-only">Yopish</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Info Notification */}
    <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              Yangilanish mavjud
            </p>
            <p class="mt-1 text-sm text-gray-500">
              Yangi versiya yuklab olish uchun tayyor.
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span class="sr-only">Yopish</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}>
  {/* Component implementation */}
</ExampleComponent>

{/* Modern FAQ Accordion */}
<ExampleComponent 
  title="Modern FAQ Accordion"
  code={`<div class="max-w-3xl mx-auto space-y-4">
  <div class="border border-gray-200 rounded-lg">
    <button class="w-full px-4 py-3 text-left focus:outline-none">
      <div class="flex items-center justify-between">
        <span class="font-medium text-gray-900">Xizmat narxlari qanday?</span>
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
      <div class="mt-3 text-gray-600">
        Bizning narxlar mijozning ehtiyojlariga qarab belgilanadi. Batafsil ma'lumot olish uchun biz bilan bog'laning.
      </div>
    </button>
  </div>
  
  <div class="border border-gray-200 rounded-lg">
    <button class="w-full px-4 py-3 text-left focus:outline-none">
      <div class="flex items-center justify-between">
        <span class="font-medium text-gray-900">To'lov usullari qanday?</span>
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </button>
  </div>
</div>`}
>
  {/* Implementation */}
  <div className="max-w-3xl mx-auto space-y-4">
    {[
      {
        question: "Xizmat narxlari qanday?",
        answer: "Bizning narxlar mijozning ehtiyojlariga qarab belgilanadi. Batafsil ma'lumot olish uchun biz bilan bog'laning."
      },
      {
        question: "To'lov usullari qanday?",
        answer: "Biz barcha asosiy to'lov turlarini qabul qilamiz: naqd pul, bank o'tkazmalari va onlayn to'lovlar."
      },
      {
        question: "Yetkazib berish muddati?",
        answer: "Buyurtmangiz 2-3 ish kuni ichida yetkazib beriladi."
      }
    ].map((item, index) => (
      <div key={index} className="border border-gray-200 rounded-lg">
        <button className="w-full px-4 py-3 text-left focus:outline-none">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">{item.question}</span>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
          <div className="mt-3 text-gray-600">
            {item.answer}
          </div>
        </button>
      </div>
    ))}
  </div>
</ExampleComponent>

{/* Modern Team Section */}
<ExampleComponent
  title="Modern Team Section"
  code={`<div class="bg-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900">Bizning jamoa</h2>
      <p class="mt-4 text-lg text-gray-500">
        Professional va tajribali mutaxassislar jamoasi
      </p>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
        <div class="flex-shrink-0">
          <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div>
        <div class="flex-1 min-w-0">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900">Malika Karimova</p>
            <p class="text-sm text-gray-500 truncate">Bosh direktor</p>
          </a>
        </div>
      </div>
      <!-- More team members... -->
    </div>
  </div>
</div>`}
>
  {/* Implementation */}
  <div className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Bizning jamoa</h2>
        <p className="mt-4 text-lg text-gray-500">
          Professional va tajribali mutaxassislar jamoasi
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Malika Karimova",
            role: "Bosh direktor",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          },
          {
            name: "Aziz Rahimov",
            role: "Texnik direktor",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          },
          {
            name: "Nilufar Saidova",
            role: "Marketing menejeri",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        ].map((person, index) => (
          <div key={index} className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={person.image} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="text-sm text-gray-500 truncate">{person.role}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</ExampleComponent>

{/* Modern Contact Form */}
<ExampleComponent
  title="Modern Contact Form"
  code={`<div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto">
    <h2 class="text-3xl font-extrabold text-gray-900 text-center">Biz bilan bog'laning</h2>
    <p class="mt-4 text-lg text-gray-500 text-center">
      Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz.
    </p>
    <form class="mt-8 space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700">Ismingiz</label>
        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Xabar</label>
        <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
      </div>
      <div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Yuborish
        </button>
      </div>
    </form>
  </div>
</div>`}
>
  {/* Implementation */}
  <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">Biz bilan bog'laning</h2>
      <p className="mt-4 text-lg text-gray-500 text-center">
        Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz.
      </p>
      <form className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ismingiz</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Xabar</label>
          <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Yuborish
          </button>
        </div>
      </form>
    </div>
  </div>
</ExampleComponent>

{/* Modern Search with Filters */}
{/* Modern Search with Filters */}
<ExampleComponent
  title="Modern Search with Filters"
  code={`<div class="bg-white">
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    {/* Search and Filters */}
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-1">
        <div class="relative">
          <input
            type="text"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Qidirish..."
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <select class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Kategoriya</option>
          <option>Smartfonlar</option>
          <option>Noutbuklar</option>
          <option>Aksessuarlar</option>
        </select>

        <select class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Narx</option>
          <option>$0 - $500</option>
          <option>$500 - $1000</option>
          <option>$1000+</option>
        </select>

        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Qo'llash
        </button>
      </div>
    </div>

    {/* Product Grid */}
    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Product 1: iPhone */}
      <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="iPhone 13 Pro"
            class="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">iPhone 13 Pro</h3>
          <p class="mt-1 text-gray-500">128GB, Kumush rang</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-600">$999</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      {/* Product 2: MacBook */}
      <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="MacBook Pro"
            class="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">MacBook Pro</h3>
          <p class="mt-1 text-gray-500">M1 Pro, 16GB RAM</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-600">$1,999</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      {/* Product 3: AirPods */}
      <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="AirPods Pro"
            class="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">AirPods Pro</h3>
          <p class="mt-1 text-gray-500">Simsiz quloqchinlar</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-600">$249</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      {/* Product 4: iPad */}
      <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="iPad Pro"
            class="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">iPad Pro</h3>
          <p class="mt-1 text-gray-500">12.9-inch, 256GB</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-600">$1,099</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      {/* Product 5: Apple Watch */}
      <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Apple Watch"
            class="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">Apple Watch Series 7</h3>
          <p class="mt-1 text-gray-500">GPS + Cellular</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-600">$499</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      {/* Product 6: iMac */}
      <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="iMac"
            class="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">iMac 24-inch</h3>
          <p class="mt-1 text-gray-500">M1, 8-core GPU</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-600">$1,499</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sotib olish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
>
  {/* Implementation */}
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Qidirish..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Kategoriya</option>
            <option>Smartfonlar</option>
            <option>Noutbuklar</option>
            <option>Aksessuarlar</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Narx</option>
            <option>$0 - $500</option>
            <option>$500 - $1000</option>
            <option>$1000+</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Qo'llash
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Product Cards */}
        {[
          {
            name: "iPhone 13 Pro",
            description: "128GB, Kumush rang",
            price: "$999",
            image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            name: "MacBook Pro",
            description: "M1 Pro, 16GB RAM",
            price: "$1,999",
            image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            name: "AirPods Pro",
            description: "Simsiz quloqchinlar",
            price: "$249",
            image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            name: "iPad Pro",
            description: "12.9-inch, 256GB",
            price: "$1,099",
            image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            name: "Apple Watch Series 7",
            description: "GPS + Cellular",
            price: "$499",
            image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            name: "iMac 24-inch",
            description: "M1, 8-core GPU",
            price: "$1,499",
            image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ].map((product, index) => (
          <div key={index} className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-gray-500">{product.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Sotib olish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</ExampleComponent>

{/* Modern Dashboard Stats with Charts */}
{/* Modern Dashboard Stats with Charts */}
<ExampleComponent
  title="Modern Dashboard Stats with Charts"
  code={`<div className="bg-gray-100 min-h-screen p-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Boshqaruv paneli</h1>
          <p className="mt-1 text-sm text-gray-500">So'nggi 30 kunlik statistika</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center gap-4">
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
            <option>Bugun</option>
            <option>Haftalik</option>
            <option selected>Oylik</option>
            <option>Yillik</option>
          </select>
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Faol foydalanuvchilar",
            value: "2,847",
            change: "+12.5%",
            previousValue: "2,530",
            color: "blue",
            data: [40, 70, 45, 90, 55, 85, 65]
          },
          {
            title: "Umumiy daromad",
            value: "$52,145",
            change: "+8.2%",
            previousValue: "$48,150",
            color: "green",
            data: [60, 45, 75, 50, 85, 65, 90]
          },
          {
            title: "Yangi buyurtmalar",
            value: "384",
            change: "+3.7%",
            previousValue: "370",
            color: "yellow",
            data: [50, 65, 40, 75, 55, 85, 70]
          },
          {
            title: "Konversiya darajasi",
            value: "92.6%",
            change: "+5.4%",
            previousValue: "87.8%",
            color: "purple",
            data: [80, 90, 85, 95, 88, 92, 96]
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-\${stat.color}-100 text-\${stat.color}-800\`}>
                {stat.change}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-sm text-gray-500 mt-1">O'tgan oyda: {stat.previousValue}</p>
              </div>
              <div className="w-24 h-12">
                <div className="h-full flex items-end space-x-1">
                  {stat.data.map((height, i) => (
                    <div
                      key={i}
                      style={{ height: \`\${height}%\` }}
                      className={\`w-2 bg-\${stat.color}-500 rounded-t hover:bg-\${stat.color}-600 transition-colors\`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Oylik statistika</h3>
              <p className="text-sm text-gray-500">So'nggi 6 oylik ma'lumotlar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-500">Daromad</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">Xarajatlar</span>
              </div>
            </div>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg p-4">
            <div className="h-full flex items-end space-x-2">
              {['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyu'].map((month, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end space-y-1">
                  <div
                    className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                    style={{ height: \`\${Math.random() * 60 + 20}%\` }}
                  ></div>
                  <div
                    className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-colors"
                    style={{ height: \`\${Math.random() * 40 + 10}%\` }}
                  ></div>
                  <div className="text-xs text-gray-500 text-center">{month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Kategoriyalar bo'yicha</h3>
              <p className="text-sm text-gray-500">So'nggi oylik ma'lumotlar</p>
            </div>
            <select className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Haftalik</option>
              <option selected>Oylik</option>
              <option>Yillik</option>
            </select>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border-8 border-blue-500"></div>
                <div className="absolute inset-0 border-8 border-green-500" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
                <div className="absolute inset-0 border-8 border-yellow-500" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 0%, 75% 75%)' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">75%</div>
                  <div className="text-sm text-gray-500">O'sish</div>
                </div>
              </div>
            </div>
            <div className="ml-8 space-y-4">
              {[
                { color: 'blue', title: 'Mahsulotlar', value: '45%' },
                { color: 'green', title: 'Xizmatlar', value: '35%' },
                { color: 'yellow', title: 'Boshqalar', value: '20%' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={\`w-4 h-4 bg-\${item.color}-500 rounded-full\`}></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`}
>
  {/* Implementation */}
  <div className="bg-gray-50 p-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Boshqaruv paneli</h1>
          <p className="mt-1 text-sm text-gray-500">So'nggi 30 kunlik statistika</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="flex items-center space-x-4">
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Bugun</option>
              <option>Haftalik</option>
              <option selected>Oylik</option>
              <option>Yillik</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Faol foydalanuvchilar",
            value: "2,847",
            change: "+12.5%",
            previousValue: "2,530",
            color: "blue",
            data: [40, 70, 45, 90, 55, 85, 65]
          },
          {
            title: "Umumiy daromad",
            value: "$52,145",
            change: "+8.2%",
            previousValue: "$48,150",
            color: "green",
            data: [60, 45, 75, 50, 85, 65, 90]
          },
          {
            title: "Yangi buyurtmalar",
            value: "384",
            change: "+3.7%",
            previousValue: "370",
            color: "yellow",
            data: [50, 65, 40, 75, 55, 85, 70]
          },
          {
            title: "Konversiya darajasi",
            value: "92.6%",
            change: "+5.4%",
            previousValue: "87.8%",
            color: "purple",
            data: [80, 90, 85, 95, 88, 92, 96]
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${stat.color}-100 text-${stat.color}-800`}>
                {stat.change}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-sm text-gray-500 mt-1">O'tgan oyda: {stat.previousValue}</p>
              </div>
              <div className="w-24 h-12">
                <div className="h-full flex items-end space-x-1">
                  {stat.data.map((height, i) => (
                    <div
                      key={i}
                      style={{ height: `${height}%` }}
                      className={`w-2 bg-${stat.color}-500 rounded-t hover:bg-${stat.color}-600 transition-colors`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Oylik statistika</h3>
              <p className="text-sm text-gray-500">So'nggi 6 oylik ma'lumotlar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-500">Daromad</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">Xarajatlar</span>
              </div>
            </div>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg p-4">
            <div className="h-full flex items-end space-x-2">
              {['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyu', 'Iyu', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'].map((month, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end space-y-1">
                  <div
                    className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                    style={{ height: `${Math.random() * 60 + 20}%` }}
                  ></div>
                  <div
                    className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-colors"
                    style={{ height: `${Math.random() * 40 + 10}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 text-center">{month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Kategoriyalar bo'yicha</h3>
              <p className="text-sm text-gray-500">So'nggi oylik ma'lumotlar</p>
            </div>
            <select className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Haftalik</option>
              <option selected>Oylik</option>
              <option>Yillik</option>
            </select>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border-8 border-blue-500"></div>
                <div className="absolute inset-0 border-8 border-green-500" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
                <div className="absolute inset-0 border-8 border-yellow-500" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 75% 75%)' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">75%</div>
                  <div className="text-sm text-gray-500">O'sish</div>
                </div>
              </div>
            </div>
            <div className="ml-8 space-y-4">
              {[
                { color: 'blue', title: 'Mahsulotlar', value: '45%' },
                { color: 'green', title: 'Xizmatlar', value: '35%' },
                { color: 'yellow', title: 'Boshqalar', value: '20%' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-4 h-4 bg-${item.color}-500 rounded-full`}></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">So'nggi faoliyat</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Barchasini ko'rish
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: '💰',
                title: 'Yangi buyurtma',
                description: 'Mijoz #12345 $245 qiymatida buyurtma berdi',
                time: '5 daqiqa oldin'
              },
              {
                icon: '👤',
                title: 'Yangi mijoz',
                description: "Jamshid Karimov tizimda ro'yxatdan o'tdi",
                time: '23 daqiqa oldin'
              },
              {
                icon: '📦',
                title: 'Mahsulot qaytarildi',
                description: 'Buyurtma #98765 qaytarildi',
                time: '1 soat oldin'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</ExampleComponent>



{/* Modern Multi-Step Form */}
<ExampleComponent
  title="Modern Multi-Step Form"
  code={`<div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
  {/* Progress Steps */}
  <div class="px-4 py-8 bg-gray-50">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between">
        {[
          { step: 1, title: "Shaxsiy ma'lumotlar" },
          { step: 2, title: "Ish tajribasi" },
          { step: 3, title: "Ta'lim" },
          { step: 4, title: "Yakuniy" }
        ].map((item, index) => (
          <div key={index} class="relative flex flex-col items-center">
            <div class={\`w-10 h-10 rounded-full flex items-center justify-center border-2 \${
              index <= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white text-gray-500'
            }\`}>
              {index <= 1 ? (
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{item.step}</span>
              )}
            </div>
            <div class="absolute -bottom-6 w-32 text-center">
              <span class={\`text-sm font-medium \${
                index <= 1 ? 'text-blue-600' : 'text-gray-500'
              }\`}>{item.title}</span>
            </div>
            {index < 3 && (
              <div class={\`absolute left-full top-5 w-full h-0.5 -translate-y-1/2 transform \${
                index <= 0 ? 'bg-blue-600' : 'bg-gray-300'
              }\`} style={{ width: 'calc(100% - 2.5rem)' }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Form Content */}
  <div class="px-8 py-10">
    {/* Step 2: Work Experience */}
    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-8">Ish tajribasi</h2>
      
      {/* Experience Entry */}
      <div class="space-y-8">
        <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Kompaniya nomi
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Kompaniya nomini kiriting"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Lavozim
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Lavozmingizni kiriting"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Boshlangan sana
                <span class="text-red-500">*</span>
              </label>
              <input
                type="date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Tugatilgan sana
              </label>
              <input
                type="date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Vazifalar va yutuqlar
                <span class="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Asosiy vazifalaringiz va yutuqlaringizni kiriting"
              ></textarea>
            </div>
          </div>

          <div class="mt-6 flex items-center">
            <input type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label class="ml-2 text-sm text-gray-700">
              Hozirda shu kompaniyada ishlayman
            </label>
          </div>
        </div>

        {/* Add More Experience Button */}
        <button class="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors">
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yana ish tajribasi qo'shish
          </div>
        </button>
      </div>

      {/* Skills Section */}
      <div class="mt-10">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Ko'nikmalar</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Asosiy ko'nikmalar
              <span class="text-red-500">*</span>
            </label>
            <div class="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
                <span key={skill} class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  {skill}
                  <button class="ml-2 text-blue-500 hover:text-blue-700">×</button>
                </span>
              ))}
              <input
                type="text"
                class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Yangi ko'nikma qo'shish..."
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Qo'shimcha ko'nikmalar
            </label>
            <div class="flex flex-wrap gap-2">
              {['Git', 'Docker', 'AWS'].map((skill) => (
                <span key={skill} class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  {skill}
                  <button class="ml-2 text-gray-500 hover:text-gray-700">×</button>
                </span>
              ))}
              <input
                type="text"
                class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Yangi ko'nikma qo'shish..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div class="mt-10 flex items-center justify-between pt-6 border-t border-gray-200">
        <button class="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Ortga
        </button>
        <button class="flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          Keyingi
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`}
>
  {/* Implementation */}
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    {/* Progress Steps */}
    <div className="px-4 py-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          {[
            { step: 1, title: "Shaxsiy ma'lumotlar" },
            { step: 2, title: "Ish tajribasi" },
            { step: 3, title: "Ta'lim" },
            { step: 4, title: "Yakuniy" }
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                index <= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white text-gray-500'
              }`}>
                {index <= 1 ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{item.step}</span>
                )}
              </div>
              <div className="absolute -bottom-6 w-32 text-center">
                <span className={`text-sm font-medium ${
                  index <= 1 ? 'text-blue-600' : 'text-gray-500'
                }`}>{item.title}</span>
              </div>
              {index < 3 && (
                <div className={`absolute left-full top-5 w-full h-0.5 -translate-y-1/2 transform ${
                  index <= 0 ? 'bg-blue-600' : 'bg-gray-300'
                }`} style={{ width: 'calc(100% - 2.5rem)' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Form Content */}
    <div className="px-8 py-10">
      {/* Step 2: Work Experience */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Ish tajribasi</h2>
        
        {/* Experience Entry */}
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kompaniya nomi
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Kompaniya nomini kiriting"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lavozim
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Lavozmingizni kiriting"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Boshlangan sana
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tugatilgan sana
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vazifalar va yutuqlar
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Asosiy vazifalaringiz va yutuqlaringizni kiriting"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
              <label className="ml-2 text-sm text-gray-700">
                Hozirda shu kompaniyada ishlayman
              </label>
            </div>
          </div>

          {/* Add More Experience Button */}
          <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Yana ish tajribasi qo'shish
            </div>
          </button>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ko'nikmalar</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Asosiy ko'nikmalar
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {skill}
                    <button className="ml-2 text-blue-500 hover:text-blue-700">×</button>
                  </span>
                ))}
                <input
                  type="text"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Yangi ko'nikma qo'shish..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qo'shimcha ko'nikmalar
              </label>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                    {skill}
                    <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                  </span>
                ))}
                <input
                  type="text"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Yangi ko'nikma qo'shish..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex items-center justify-between pt-6 border-t border-gray-200">
          <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Ortga
          </button>
          <button className="flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            Keyingi
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</ExampleComponent>




{/* Modern Pricing Section */}
<ExampleComponent
  title="Modern Pricing Section"
  code={`<div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    {/* Header */}
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Narxlash rejalari
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        Biznesingiz uchun eng maqbul rejani tanlang
      </p>
    </div>

    {/* Toggle */}
    <div class="mt-12 flex justify-center">
      <div class="relative bg-white rounded-lg p-0.5 flex sm:mt-0">
        <button class="relative py-2 px-6 border-gray-200 rounded-md text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm">
          Oylik to'lov
        </button>
        <button class="ml-0.5 relative py-2 px-6 border-transparent rounded-md text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500">
          Yillik to'lov
        </button>
      </div>
    </div>

    {/* Pricing Cards */}
    <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
      {/* Basic Plan */}
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900">Boshlang'ich</h3>
          <p class="mt-4 text-sm text-gray-500">Kichik bizneslar uchun asosiy xizmatlar</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900">$29</span>
            <span class="text-base font-medium text-gray-500">/oyiga</span>
          </p>
          <button class="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Boshlash
          </button>
        </div>
        <div class="px-6 pt-6 pb-8">
          <h4 class="text-sm font-medium text-gray-900 tracking-wide">Qo'shilgan xizmatlar</h4>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">5 GB xotira</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">2 foydalanuvchi</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">Email qo'llab-quvvatlash</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Pro Plan */}
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900">Professional</h3>
          <p class="mt-4 text-sm text-gray-500">O'sib borayotgan bizneslar uchun</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900">$99</span>
            <span class="text-base font-medium text-gray-500">/oyiga</span>
          </p>
          <button class="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Boshlash
          </button>
        </div>
        <div class="px-6 pt-6 pb-8">
          <h4 class="text-sm font-medium text-gray-900 tracking-wide">Qo'shilgan xizmatlar</h4>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">20 GB xotira</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">10 foydalanuvchi</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">24/7 qo'llab-quvvatlash</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">API kirish</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900">Korporativ</h3>
          <p class="mt-4 text-sm text-gray-500">Yirik kompaniyalar uchun</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900">$299</span>
            <span class="text-base font-medium text-gray-500">/oyiga</span>
          </p>
          <button class="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Boshlash
          </button>
        </div>
        <div class="px-6 pt-6 pb-8">
          <h4 class="text-sm font-medium text-gray-900 tracking-wide">Qo'shilgan xizmatlar</h4>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">Cheksiz xotira</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">Cheksiz foydalanuvchilar</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">24/7 shaxsiy qo'llab-quvvatlash</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">Maxsus API kirish</span>
            </li>
            <li class="flex space-x-3">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-500">Shaxsiy server</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`}
>
  {/* Implementation */}
  <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Narxlash rejalari
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Biznesingiz uchun eng maqbul rejani tanlang
      </p>
    </div>

    {/* Toggle */}
    <div className="mt-12 flex justify-center">
      <div className="relative bg-white rounded-lg p-0.5 flex sm:mt-0">
        <button className="relative py-2 px-6 border-gray-200 rounded-md text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm">
          Oylik to'lov
        </button>
        <button className="ml-0.5 relative py-2 px-6 border-transparent rounded-md text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500">
          Yillik to'lov
        </button>
      </div>
    </div>

    {/* Pricing Cards */}
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
      {[
        {
          title: "Boshlang'ich",
          description: "Kichik bizneslar uchun asosiy xizmatlar",
          price: "$29",
          features: [
            "5 GB xotira",
            "2 foydalanuvchi",
            "Email qo'llab-quvvatlash"
          ]
        },
        {
          title: "Professional",
          description: "O'sib borayotgan bizneslar uchun",
          price: "$99",
          features: [
            "20 GB xotira",
            "10 foydalanuvchi",
            "24/7 qo'llab-quvvatlash",
            "API kirish"
          ],
          popular: true
        },
        {
          title: "Korporativ",
          description: "Yirik kompaniyalar uchun",
          price: "$299",
          features: [
            "Cheksiz xotira",
            "Cheksiz foydalanuvchilar",
            "24/7 shaxsiy qo'llab-quvvatlash",
            "Maxsus API kirish",
            "Shaxsiy server"
          ]
        }
      ].map((plan, index) => (
        <div 
          key={index} 
          className={`relative bg-white border ${
            plan.popular 
              ? 'border-blue-500 shadow-xl' 
              : 'border-gray-200 shadow-sm'
          } rounded-lg divide-y divide-gray-200`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
              <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-500 text-white">
                Eng mashhur
              </span>
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">{plan.title}</h3>
            <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              <span className="text-base font-medium text-gray-500">/oyiga</span>
            </p>
            <button 
              className={`mt-8 w-full py-3 px-4 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-500'
              }`}
            >
              Boshlash
            </button>
          </div>
          <div className="px-6 pt-6 pb-8">
            <h4 className="text-sm font-medium text-gray-900 tracking-wide">
              Qo'shilgan xizmatlar
            </h4>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex space-x-3">
                  <svg 
                    className="flex-shrink-0 h-5 w-5 text-green-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* FAQ Section */}
    <div className="mt-16">
      <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
        Ko'p so'raladigan savollar
      </h3>
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {[
          {
            question: "To'lov rejasini o'zgartirish mumkinmi?",
            answer: "Ha, siz istalgan vaqtda to'lov rejangizni o'zgartirishingiz mumkin. O'zgarishlar keyingi to'lov davringizdan boshlab kuchga kiradi."
          },
          {
            question: "Sinov muddati bormi?",
            answer: "Ha, barcha rejalarda 14 kunlik bepul sinov muddati mavjud. Bu davrda barcha xizmatlardan to'liq foydalanishingiz mumkin."
          },
          {
            question: "Pulni qaytarib olish mumkinmi?",
            answer: "Ha, agar xizmatdan qoniqmagan bo'lsangiz, 30 kun ichida to'lovingizni to'liq qaytarib olishingiz mumkin."
          }
        ].map((faq, index) => (
          <div key={index} className="py-6">
            <dt className="text-lg font-medium text-gray-900">
              {faq.question}
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              {faq.answer}
            </dd>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  </div>
</ExampleComponent>


{/* Modern Blog Cards */}
<ExampleComponent
  title="Modern Blog Cards"
  code={`
<div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        So'nggi Yangiliklar
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Bizning eng so'nggi yangiliklar va maqolalarimiz
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Zamonaviy dasturlash tillari",
          description: "2024-yilda eng mashhur dasturlash tillari va ularning istiqbollari haqida batafsil ma'lumot",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          category: "Dasturlash",
          author: {
            name: "Akmal Karimov",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
          },
          date: "5 Mart, 2024"
        },
        {
          title: "UI/UX dizayn trendlari",
          description: "Zamonaviy web-dizayn yo'nalishlari va foydalanuvchi tajribasi optimizatsiyasi",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          category: "Dizayn",
          author: {
            name: "Nilufar Azizova",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
          },
          date: "3 Mart, 2024"
        },
        {
          title: "AI texnologiyalari",
          description: "Sun'iy intellekt sohasidagi so'nggi yangiliklardan xabardor bo'ling",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          category: "Texnologiya",
          author: {
            name: "Jamshid Nurmatov",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
          },
          date: "1 Mart, 2024"
        }
      ].map((post, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-600">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {post.category}
                </span>
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={post.author.image} alt={post.author.name} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {post.author.name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2024-03-16">{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>6 daqiqa o'qish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
        Barcha maqolalarni ko'rish
        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</div>
`}>
  {/* Implementation */}
  <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
   
<div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        So'nggi Yangiliklar
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Bizning eng so'nggi yangiliklar va maqolalarimiz
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Zamonaviy dasturlash tillari",
          description: "2024-yilda eng mashhur dasturlash tillari va ularning istiqbollari haqida batafsil ma'lumot",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          category: "Dasturlash",
          author: {
            name: "Akmal Karimov",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
          },
          date: "5 Mart, 2024"
        },
        {
          title: "UI/UX dizayn trendlari",
          description: "Zamonaviy web-dizayn yo'nalishlari va foydalanuvchi tajribasi optimizatsiyasi",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          category: "Dizayn",
          author: {
            name: "Nilufar Azizova",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
          },
          date: "3 Mart, 2024"
        },
        {
          title: "AI texnologiyalari",
          description: "Sun'iy intellekt sohasidagi so'nggi yangiliklardan xabardor bo'ling",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          category: "Texnologiya",
          author: {
            name: "Jamshid Nurmatov",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
          },
          date: "1 Mart, 2024"
        }
      ].map((post, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-600">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {post.category}
                </span>
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={post.author.image} alt={post.author.name} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {post.author.name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2024-03-16">{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>6 daqiqa o'qish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
        Barcha maqolalarni ko'rish
        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</div>
  </div>
</ExampleComponent>



{/* Modern Statistics Dashboard */}
<ExampleComponent
  title="Modern Statistics Dashboard"
  code={`
<div className="bg-white p-8 rounded-2xl shadow-lg">
  {/* Header */}
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900">Statistika ma'lumotlari</h2>
    <p className="text-gray-500">So'nggi 30 kunlik ko'rsatkichlar</p>
  </div>

  {/* Stats Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          +12.5%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Faol foydalanuvchilar</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">8,249</p>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-green-50 border border-green-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-green-100 text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          +8.2%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Yangi buyurtmalar</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">1,423</p>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          +5.4%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">O'rtacha check</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">$452</p>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          +7.8%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Daromad</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">$87,432</p>
      </div>
    </div>
  </div>

  {/* Chart Section */}
  <div className="mt-12">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-medium text-gray-900">Daromad statistikasi</h3>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900">
          Haftalik
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
          Oylik
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900">
          Yillik
        </button>
      </div>
    </div>
    <div className="bg-gray-50 rounded-xl p-4 h-64 flex items-center justify-center">
      <p className="text-gray-500">Grafik ma'lumotlari bu yerda ko'rsatiladi</p>
    </div>
  </div>

  {/* Summary Cards */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-green-100 text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">Eng ko'p sotilgan</h4>
          <p className="mt-1 text-lg font-semibold text-gray-900">iPhone 14 Pro</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">Faol mijozlar</h4>
          <p className="mt-1 text-lg font-semibold text-gray-900">1,433</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">O'rtacha vaqt</h4>
          <p className="mt-1 text-lg font-semibold text-gray-900">2.4 soat</p>
        </div>
      </div>
    </div>
  </div>
</div>
`}>
  {/* Implementation */}
  <div className="bg-white p-8 rounded-2xl shadow-lg">
   
<div className="bg-white p-8 rounded-2xl shadow-lg">
  {/* Header */}
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900">Statistika ma'lumotlari</h2>
    <p className="text-gray-500">So'nggi 30 kunlik ko'rsatkichlar</p>
  </div>

  {/* Stats Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          +12.5%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Faol foydalanuvchilar</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">8,249</p>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-green-50 border border-green-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-green-100 text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          +8.2%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Yangi buyurtmalar</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">1,423</p>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          +5.4%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">O'rtacha check</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">$452</p>
      </div>
    </div>

    <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
            />
          </svg>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          +7.8%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Daromad</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">$87,432</p>
      </div>
    </div>
  </div>

  {/* Chart Section */}
  <div className="mt-12">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-medium text-gray-900">Daromad statistikasi</h3>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900">
          Haftalik
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
          Oylik
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900">
          Yillik
        </button>
      </div>
    </div>
    <div className="bg-gray-50 rounded-xl p-4 h-64 flex items-center justify-center">
      <p className="text-gray-500">Grafik ma'lumotlari bu yerda ko'rsatiladi</p>
    </div>
  </div>

  {/* Summary Cards */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-green-100 text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">Eng ko'p sotilgan</h4>
          <p className="mt-1 text-lg font-semibold text-gray-900">iPhone 14 Pro</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">Faol mijozlar</h4>
          <p className="mt-1 text-lg font-semibold text-gray-900">1,433</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">O'rtacha vaqt</h4>
          <p className="mt-1 text-lg font-semibold text-gray-900">2.4 soat</p>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</ExampleComponent>

{/* Modern Team Members Section */}
<ExampleComponent
  title="Modern Team Members Section"
  code={`
<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
      Bizning professional jamoa
    </h2>
    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
      Har bir loyihani mukammal darajada bajarish uchun mehnat qiluvchi mutaxassislar
    </p>
  </div>

  {/* Team Members Grid */}
  <div className="mt-16 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Aziza Karimova",
          role: "Bosh dizayner",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          bio: "10 yillik tajribaga ega UI/UX dizayner. Google va Amazonning sobiq xodimi.",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          },
          skills: ["UI/UX", "Figma", "Adobe XD"]
        },
        {
          name: "Jamshid Nurmatov",
          role: "Senior Developer",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",
          bio: "8 yillik fullstack dasturchi. 100+ dan ortiq loyihalarni muvaffaqiyatli yakunlagan.",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          },
          skills: ["React", "Node.js", "Python"]
        },
        {
          name: "Malika Azizova",
          role: "Product Manager",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          bio: "5 yillik product management tajribasi. Stanford MBA bitiruvchisi.",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          },
          skills: ["Scrum", "Agile", "Leadership"]
        }
      ].map((member, index) => (
        <div key={index} className="group relative">
          {/* Member Card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
            {/* Image Container */}
            <div className="relative h-80 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative px-6 pt-6 pb-8">
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p className="mt-4 text-base text-gray-500 text-center">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-6">
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={member.social.github}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-6 pb-6 px-6">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Bog'lanish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* CTA Section */}
  <div className="mt-20 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Jamoamizga qo'shilishni xohlaysizmi?
    </h3>
    <p className="mt-4 text-lg text-gray-500">
      Biz doimo o'z sohasining professional mutaxassislarini izlaymiz
    </p>
    <div className="mt-8">
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Vakansiyalarni ko'rish
        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</div>
`}>
  {/* Implementation */}
  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
   
<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
      Bizning professional jamoa
    </h2>
    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
      Har bir loyihani mukammal darajada bajarish uchun mehnat qiluvchi mutaxassislar
    </p>
  </div>

  {/* Team Members Grid */}
  <div className="mt-16 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Aziza Karimova",
          role: "Bosh dizayner",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          bio: "10 yillik tajribaga ega UI/UX dizayner. Google va Amazonning sobiq xodimi.",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          },
          skills: ["UI/UX", "Figma", "Adobe XD"]
        },
        {
          name: "Jamshid Nurmatov",
          role: "Senior Developer",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",
          bio: "8 yillik fullstack dasturchi. 100+ dan ortiq loyihalarni muvaffaqiyatli yakunlagan.",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          },
          skills: ["React", "Node.js", "Python"]
        },
        {
          name: "Malika Azizova",
          role: "Product Manager",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          bio: "5 yillik product management tajribasi. Stanford MBA bitiruvchisi.",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          },
          skills: ["Scrum", "Agile", "Leadership"]
        }
      ].map((member, index) => (
        <div key={index} className="group relative">
          {/* Member Card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
            {/* Image Container */}
            <div className="relative h-80 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative px-6 pt-6 pb-8">
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p className="mt-4 text-base text-gray-500 text-center">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-6">
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={member.social.github}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-6 pb-6 px-6">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Bog'lanish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* CTA Section */}
  <div className="mt-20 text-center">
    <h3 className="text-2xl font-bold text-gray-900">
      Jamoamizga qo'shilishni xohlaysizmi?
    </h3>
    <p className="mt-4 text-lg text-gray-500">
      Biz doimo o'z sohasining professional mutaxassislarini izlaymiz
    </p>
    <div className="mt-8">
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Vakansiyalarni ko'rish
        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</div>

  </div>
</ExampleComponent>




        </div>
      </div>
    </div>
  );
}
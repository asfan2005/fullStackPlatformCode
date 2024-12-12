import React from "react";
import { FaRocket, FaMobileAlt, FaGlobe, FaTools, FaExclamationTriangle } from "react-icons/fa";

function CssFilters() {
  // Namuna effektlar uchun ma'lumotlar
  const filterExamples = [
    {
      id: 1,
      title: "Blur Effekti",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60",
      filterClass: "blur-sm",
      code: "filter: blur(4px);"
    },
    {
      id: 2,
      title: "Yorqinlik Effekti",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60",
      filterClass: "brightness-150",
      code: "filter: brightness(150%);"
    },
    {
      id: 3,
      title: "Kontrast Effekti",
      image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=800&auto=format&fit=crop&q=60",
      filterClass: "contrast-150",
      code: "filter: contrast(150%);"
    },
    {
      id: 4,
      title: "Grayscale Effekti",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60",
      filterClass: "grayscale",
      code: "filter: grayscale(100%);"
    },
    {
      id: 5,
      title: "Sepia Effekti",
      image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=800&auto=format&fit=crop&q=60",
      filterClass: "sepia",
      code: "filter: sepia(100%);"
    },
    {
      id: 6,
      title: "Invert Effekti",
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&auto=format&fit=crop&q=60",
      filterClass: "invert",
      code: "filter: invert(100%);"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CSS Filtrlar Dunyosi 🎨
            </h1>
            <p className="text-xl text-white/90 mb-12">
              Tasvirlaringizga professional effektlarni qo'llashni o'rganing
            </p>
          </div>
        </div>
      </div>

      {/* Filter Examples Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterExamples.map((example) => (
            <div key={example.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative group">
                {/* Original Image */}
                <img 
                  src={example.image} 
                  alt={`Original ${example.title}`}
                  className="w-full h-48 object-cover"
                />
                {/* Filtered Image (shows on hover) */}
                <img 
                  src={example.image} 
                  alt={`${example.title} qo'llanilgan`}
                  className={`w-full h-48 object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${example.filterClass}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {example.title}
                </h3>
                <code className="block bg-gray-800 text-white p-3 rounded-md text-sm">
                  {example.code}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Interaktiv Namunalar
          </h2>

          {/* Hover Effect Example */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Hover Effekti
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60"
                  alt="Hover effekti namunasi"
                  className="w-full rounded-lg transition-all duration-300 hover:brightness-150 hover:contrast-125"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Rasmga sichqonchani olib boring
                </p>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>{`.hover-effect {
  transition: all 0.3s;
}

.hover-effect:hover {
  filter: brightness(150%) 
         contrast(125%);
}`}</code>
              </pre>
            </div>
          </div>

          {/* Multiple Filters Example */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Kombinatsiyalangan Filtrlar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60"
                  alt="Kombinatsiya namunasi"
                  className="w-full rounded-lg blur-[2px] brightness-125 contrast-110"
                />
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>{`.combined-filters {
  filter: 
    blur(2px)
    brightness(125%)
    contrast(110%);
}`}</code>
              </pre>
            </div>
          </div>

          {/* Additional Interactive Example */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Sepia va Invert Effekti
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=800&auto=format&fit=crop&q=60"
                  alt="Sepia va Invert effekti"
                  className="w-full rounded-lg sepia hover:invert transition-all duration-300"
                />
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>{`.sepia-invert-effect {
  filter: sepia(100%);
}

.sepia-invert-effect:hover {
  filter: invert(100%);
}`}</code>
              </pre>
            </div>
          </div>

          {/* Grayscale and Brightness Example */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Grayscale va Yorqinlik Effekti
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60"
                  alt="Grayscale va Yorqinlik effekti"
                  className="w-full rounded-lg grayscale hover:brightness-150 transition-all duration-300"
                />
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>{`.grayscale-brightness-effect {
  filter: grayscale(100%);
}

.grayscale-brightness-effect:hover {
  filter: brightness(150%);
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Foydali Maslahatlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaRocket className="text-purple-600 mr-2" /> Performance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><FaExclamationTriangle className="inline text-red-500 mr-2" /> Filtrlarni kerakli joylardagina ishlating, chunki ular ko'p resurs talab qiladi.</li>
                <li><FaMobileAlt className="inline text-blue-500 mr-2" /> Og'ir filtrlarni katta elementlarga qo'llamang, bu sahifa yuklanishini sekinlashtirishi mumkin.</li>
                <li><FaTools className="inline text-green-500 mr-2" /> Animatsiyalarda transition ishlatishni unutmang, bu foydalanuvchi tajribasini yaxshilaydi.</li>
                <li><FaMobileAlt className="inline text-blue-500 mr-2" /> Har doim filtrlarni test qiling, ayniqsa mobil qurilmalarda.</li>
                <li><FaExclamationTriangle className="inline text-red-500 mr-2" /> Filtrlarni birlashtirishda ehtiyot bo'ling, bu kutilmagan natijalarga olib kelishi mumkin.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaGlobe className="text-purple-600 mr-2" /> Browser Support
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><FaGlobe className="inline text-blue-500 mr-2" /> Zamonaviy brauzerlar to'liq qo'llab-quvvatlaydi, lekin eski versiyalarni tekshirishni unutmang.</li>
                <li><FaTools className="inline text-green-500 mr-2" /> Fallback variantlarni tayyorlab qo'ying, shunda barcha foydalanuvchilar uchun bir xil tajriba ta'minlanadi.</li>
                <li><FaExclamationTriangle className="inline text-red-500 mr-2" /> Prefix-larni unutmang (-webkit-filter), bu eski brauzerlar uchun muhim.</li>
                <li><FaGlobe className="inline text-blue-500 mr-2" /> Har doim brauzerlararo test o'tkazing, ayniqsa Internet Explorer uchun.</li>
                <li><FaTools className="inline text-green-500 mr-2" /> CSS filtrlarining yangi versiyalarini kuzatib boring, ular doimiy ravishda yangilanib turadi.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssFilters;
import React from "react";

function CssGradients() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Asosiy sarlavha */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        CSS Gradientlar
      </h1>

      {/* Kirish qismi */}
      <div className="max-w-3xl mx-auto mb-12 text-gray-600">
        <p className="text-lg mb-4">
          CSS Gradientlar - bu ikki yoki undan ortiq ranglar orasidagi ravon o'tishni
          ta'minlaydigan maxsus CSS funksiyalari. Ular veb-sahifalarni jozibali
          qilish uchun keng qo'llaniladi.
        </p>
      </div>

      {/* Asosiy content */}
      <div className="space-y-16">
        {/* 1. Chiziqli Gradientlar */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            1. Chiziqli (Linear) Gradientlar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Oddiy chiziqli gradient */}
            <div className="gradient-card">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Oddiy chiziqli gradient</h3>
                <code className="text-sm text-gray-600">
                  background: linear-gradient(to right, #3B82F6, #A855F7);
                </code>
              </div>
            </div>

            {/* Ko'p rangli gradient */}
            <div className="gradient-card">
              <div className="h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-lg"></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Ko'p rangli gradient</h3>
                <code className="text-sm text-gray-600">
                  background: linear-gradient(to right, #EC4899, #A855F7, #6366F1);
                </code>
              </div>
            </div>

            {/* Burchakli gradient */}
            <div className="gradient-card">
              <div className="h-48 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-t-lg"></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Burchakli gradient (45°)</h3>
                <code className="text-sm text-gray-600">
                  background: linear-gradient(45deg, #FBBF24, #EC4899);
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Radial Gradientlar */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            2. Radial Gradientlar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gradient-card">
              <div className="h-48 rounded-t-lg" style={{
                background: "radial-gradient(circle, #3B82F6, #1E3A8A)"
              }}></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Doira shaklidagi gradient</h3>
                <code className="text-sm text-gray-600">
                  radial-gradient(circle, #3B82F6, #1E3A8A)
                </code>
              </div>
            </div>

            <div className="gradient-card">
              <div className="h-48 rounded-t-lg" style={{
                background: "radial-gradient(ellipse at center, #F472B6, #7C3AED)"
              }}></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Ellips shaklidagi gradient</h3>
                <code className="text-sm text-gray-600">
                  radial-gradient(ellipse, #F472B6, #7C3AED)
                </code>
              </div>
            </div>

            <div className="gradient-card">
              <div className="h-48 rounded-t-lg" style={{
                background: "radial-gradient(circle at top right, #34D399, #3B82F6, #8B5CF6)"
              }}></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Pozitsiyalangan gradient</h3>
                <code className="text-sm text-gray-600">
                  radial-gradient(circle at top right, ...)
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Conic Gradientlar */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            3. Konik (Conic) Gradientlar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gradient-card">
              <div className="h-48 rounded-t-lg" style={{
                background: "conic-gradient(from 0deg, #3B82F6, #EC4899, #3B82F6)"
              }}></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Oddiy konik gradient</h3>
                <code className="text-sm text-gray-600">
                  conic-gradient(from 0deg, #3B82F6, #EC4899, #3B82F6)
                </code>
              </div>
            </div>

            <div className="gradient-card">
              <div className="h-48 rounded-t-lg" style={{
                background: "conic-gradient(from 0deg, red, yellow, lime, aqua, blue, magenta, red)"
              }}></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Rang doirasi</h3>
                <code className="text-sm text-gray-600">
                  conic-gradient(red, yellow, lime, ...)
                </code>
              </div>
            </div>

            <div className="gradient-card">
              <div className="h-48 rounded-t-lg" style={{
                background: "repeating-conic-gradient(from 0deg, #3B82F6 0deg 30deg, #EC4899 30deg 60deg)"
              }}></div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Takrorlanuvchi konik</h3>
                <code className="text-sm text-gray-600">
                  repeating-conic-gradient(...)
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Amaliy qo'llanish */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Amaliy Misollar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tugma dizayni */}
            <div className="gradient-card">
              <button className="w-full h-48 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-white font-bold text-xl">
                Hover qiling
              </button>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Interaktiv tugma</h3>
                <code className="text-sm text-gray-600">
                  hover:from-purple-500 hover:to-blue-500
                </code>
              </div>
            </div>

            {/* Karta dizayni */}
            <div className="gradient-card">
              <div className="h-48 rounded-t-lg bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6 flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 w-full">
                  <h4 className="text-white font-bold">Glass Effect</h4>
                </div>
              </div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Shisha effekti</h3>
                <code className="text-sm text-gray-600">
                  bg-white/30 backdrop-blur-sm
                </code>
              </div>
            </div>

            {/* Animatsiyali gradient */}
            <div className="gradient-card">
              <div className="h-48 rounded-t-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
              </div>
              <div className="p-4 bg-white rounded-b-lg shadow">
                <h3 className="font-semibold mb-2">Animatsiyali gradient</h3>
                <code className="text-sm text-gray-600">
                  animate-gradient-x
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CssGradients;
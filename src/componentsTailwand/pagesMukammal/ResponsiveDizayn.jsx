import React from "react"
import dataUtilityFirstYondashuv from "../dataMukammal/dataResponsiveDizayn";

function ResponsiveDizayn() {
  // Breakpoints ma'lumotlari
  const breakpoints = [
    { prefix: "sm:", size: "640px", desc: "Kichik ekranlar (Mobile)" },
    { prefix: "md:", size: "768px", desc: "O'rta ekranlar (Tablet)" },
    { prefix: "lg:", size: "1024px", desc: "Katta ekranlar (Desktop)" },
    { prefix: "xl:", size: "1280px", desc: "Juda katta ekranlar" },
    { prefix: "2xl:", size: "1536px", desc: "Ultra keng ekranlar" }
  ];

  // Kod misollari
  const codeExamples = `<!-- Responsive Container -->
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Responsive Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <!-- Responsive Card -->
    <div class="w-full p-4 sm:p-6 lg:p-8">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold">Sarlavha</h2>
      <p class="text-sm sm:text-base lg:text-lg">Matn kontenti</p>
    </div>
  </div>
</div>`;

  // Amaliy maslahatlar
  const bestPractices = [
    "Mobile-first yondashuvdan foydalaning",
    "Breakpointlarni ketma-ketlikda qo'llang (sm → 2xl)",
    "Container classlardan samarali foydalaning",
    "Responsive dizaynni barcha qurilmalarda test qiling",
    "Matn o'lchamlarini moslashuvchan qiling"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 hover:text-blue-600 transition-colors duration-300">
          Responsive Dizayn va Breakpointlar
        </h1>

        {/* Breakpoints Section */}
        <div className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-t-2xl">
            <h2 className="text-3xl font-bold text-white">
              Responsive Breakpointlar
            </h2>
          </div>

          <div className="p-8">
            {/* Breakpoints Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Breakpoint</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">O'lcham</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tavsif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {breakpoints.map((point, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-blue-600">{point.prefix}</td>
                      <td className="px-6 py-4 text-gray-700">{point.size}</td>
                      <td className="px-6 py-4 text-gray-700">{point.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Code Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">💻</span>
                Kod Misollari
              </h3>
              <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <code className="text-sm text-gray-100 font-mono whitespace-pre">
                  {codeExamples}
                </code>
              </pre>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">💡</span>
                Amaliy Maslahatlar
              </h3>
              <ul className="space-y-3">
                {bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    {practice}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="space-y-8">
          {dataUtilityFirstYondashuv.map((item) => (
            <div 
              key={item.id}
              className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-t-2xl">
                <h2 className="text-3xl font-bold text-white">
                  {item.title}
                </h2>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Examples */}
                <div className="mb-8 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">📌</span>
                    Misollar
                  </h3>
                  <ul className="space-y-3">
                    {item.examples.map((example, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Example */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">💻</span>
                    Kod Misoli
                  </h3>
                  <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono">
                      {item.codeExample}
                    </code>
                  </pre>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">💡</span>
                    Maslahatlar
                  </h3>
                  <ul className="space-y-3">
                    {item.tips.map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResponsiveDizayn;

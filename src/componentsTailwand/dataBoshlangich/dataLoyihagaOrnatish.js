const tailwindOrnatishMalumotlar = [
    {
        id: 1,
        title: "1-Qadam: Yangi React loyiha yaratish",
        code: "npx create-react-app loyiha-nomi",
        description: "Bu komanda orqali yangi React loyihasi yaratiladi"
    },
    {
        id: 2,
        title: "2-Qadam: Tailwind CSS o'rnatish",
        code: "npm install -D tailwindcss postcss autoprefixer",
        description: "Tailwind CSS va kerakli dependencylarni o'rnatish"
    },
    {
        id: 3,
        title: "3-Qadam: Tailwind konfiguratsiyasini yaratish",
        code: "npx tailwindcss init -p",
        description: "Bu komanda tailwind.config.js va postcss.config.js fayllarini yaratadi"
    },
    {
        id: 4,
        title: "4-Qadam: Tailwind konfiguratsiyasini sozlash",
        code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
        description: "tailwind.config.js faylini sozlash"
    },
    {
        id: 5,
        title: "5-Qadam: CSS faylini sozlash",
        code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        description: "src/index.css fayliga Tailwind direktivalarini qo'shish"
    },
    {
        id: 6,
        title: "6-Qadam: Misol komponenti",
        code: `import React from 'react';

function MisolKomponent() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-blue-600">
                  Salom Tailwind CSS!
                </h1>
                <p className="mt-4 text-gray-600">
                  Bu Tailwind CSS yordamida stillangan komponet
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Bosing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisolKomponent;`,
        description: "Tailwind CSS klasslari bilan yaratilgan misol komponenti"
    },
    {
        id: 7,
        title: "Muhim eslatmalar",
        tips: [
            "Tailwind CSS klasslari to'g'ridan-to'g'ri HTML elementlariga className orqali qo'shiladi",
            "Responsive dizayn uchun sm:, md:, lg:, xl: prefixlaridan foydalaning",
            "hover:, focus:, active: kabi state modifikatorlarini ishlatish mumkin",
            "Tailwind CSS utility-first yondashuvi orqali tez va samarali stillar yaratish mumkin"
        ]
    }
];

export default tailwindOrnatishMalumotlar;
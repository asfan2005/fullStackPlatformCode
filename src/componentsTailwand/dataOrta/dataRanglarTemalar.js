const dataRanglarTemalar = [
    {
        "id": 1,
        "title": "Ranglar",
        "desc": "Asosiy ranglar va ularning gradientlari",
        "items": [
            {
                "name": "Asosiy Ranglar",
                "description": "Loyiha uchun asosiy rang palitralari",
                "examples": [
                    "bg-primary",
                    "text-secondary",
                    "border-accent",
                    "bg-slate-500",
                    "text-gray-700",
                    "bg-blue-600",
                    "text-green-500",
                    "bg-red-400"
                ],
                "codeExample": `// Asosiy Rang Komponentlari
<div class="space-y-4">
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Asosiy Tugma
  </button>
  
  <div class="bg-gray-100 text-gray-800 p-4 rounded">
    Ikkilamchi Panel
  </div>
  
  <span class="text-red-500 font-semibold">
    Ogohlantirish Matni
  </span>
</div>

// Gradient Ranglar
<div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded">
  <h3 class="text-white font-bold">Gradient Sarlavha</h3>
</div>`,
                "tips": [
                    "Brend ranglarini o'zgaruvchilar orqali saqlash",
                    "Kontrast ranglardan foydalanish",
                    "Accessibility uchun ranglarni tekshirish",
                    "Hover va focus holatlar uchun ranglarni belgilash"
                ]
            },
            {
                "name": "Rang Temalari",
                "description": "Yorug' va Qorong'u temalar",
                "examples": [
                    "dark:bg-gray-800",
                    "dark:text-white",
                    "light:bg-white",
                    "light:text-gray-900"
                ],
                "codeExample": `// Tema Almashish Komponenti
<div class="dark:bg-gray-800 bg-white transition-colors duration-200">
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-bold dark:text-white text-gray-900">
      Mavzu Sarlavhasi
    </h2>
    
    <p class="mt-4 dark:text-gray-300 text-gray-600">
      Matn rangini temaga moslash
    </p>
    
    <div class="mt-6 space-y-4">
      <div class="dark:bg-gray-700 bg-gray-100 p-4 rounded">
        <h3 class="dark:text-white text-gray-800 font-medium">
          Panel Elementi
        </h3>
      </div>
      
      <button class="dark:bg-blue-600 bg-blue-500 text-white px-4 py-2 rounded">
        Tema Tugmasi
      </button>
    </div>
  </div>
</div>`
            }
        ]
    },
    {
        "id": 2,
        "title": "Maxsus Effektlar",
        "desc": "Rang effektlari va animatsiyalar",
        "items": [
            {
                "name": "Rang Gradientlari",
                "description": "Gradientlar va o'tishlar",
                "examples": [
                    "bg-gradient-to-r",
                    "from-purple-500",
                    "to-pink-500",
                    "via-blue-500",
                    "hover:bg-gradient-to-l"
                ],
                "codeExample": `// Gradient Kartalar
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
    <h3 class="text-white font-bold text-xl mb-2">Gradient Karta 1</h3>
    <p class="text-white/80">Chiroyli gradient effekt</p>
  </div>
  
  <div class="bg-gradient-to-tr from-blue-500 via-teal-500 to-green-500 p-6 rounded-lg shadow-lg">
    <h3 class="text-white font-bold text-xl mb-2">Gradient Karta 2</h3>
    <p class="text-white/80">Ko'p rangli gradient</p>
  </div>
</div>`,
                "tips": [
                    "Gradientlar uchun kontrast ranglarni tanlash",
                    "Matn o'qilishini ta'minlash",
                    "Hover effektlarini qo'shish",
                    "Responsive dizaynni hisobga olish"
                ]
            },
            {
                "name": "Rang Animatsiyalari",
                "description": "Rang o'zgarish animatsiyalari",
                "examples": [
                    "transition-colors",
                    "duration-300",
                    "ease-in-out",
                    "animate-pulse",
                    "hover:shadow-xl"
                ],
                "codeExample": `// Animatsiyali Elementlar
<div class="space-y-4">
  <button class="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 
    text-white px-6 py-2 rounded-lg shadow hover:shadow-lg">
    Animatsiyali Tugma
  </button>
  
  <div class="bg-gray-100 hover:bg-gray-200 transition-all duration-300 
    p-4 rounded-lg hover:scale-105 transform">
    <p class="text-gray-800">Hover Effektli Panel</p>
  </div>
  
  <div class="animate-pulse bg-gradient-to-r from-purple-400 to-pink-400 
    h-12 rounded-lg">
  </div>
</div>`
            }
        ]
    }
];

export default dataRanglarTemalar;
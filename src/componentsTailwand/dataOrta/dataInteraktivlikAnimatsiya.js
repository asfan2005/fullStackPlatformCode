const dataInteraktivlikAnimatsiya = [
    {
        "id": 1,
        "title": "Interaktiv Elementlar",
        "desc": "Foydalanuvchi bilan o'zaro aloqa elementlari",
        "items": [
            {
                "name": "Tugmalar va Hover Effektlar",
                "description": "Interaktiv tugmalar va ularning holatlari",
                "examples": [
                    "hover:scale-105",
                    "active:scale-95",
                    "focus:ring-2",
                    "group-hover:translate-x-2",
                    "hover:rotate-3"
                ],
                "codeExample": `// Interaktiv Tugmalar
<div class="space-y-4">
  <button class="transform hover:scale-105 active:scale-95 
    transition-all duration-200 bg-blue-500 text-white px-6 
    py-3 rounded-lg hover:bg-blue-600 focus:ring-2 
    focus:ring-blue-300 focus:outline-none">
    Asosiy Tugma
  </button>

  <div class="group hover:bg-gray-100 p-4 rounded-lg 
    transition-all duration-300">
    <h3 class="text-lg font-semibold group-hover:text-blue-500">
      Guruh Hover Effekti
    </h3>
    <p class="group-hover:translate-x-2 transition-transform">
      → Matn siljishi
    </p>
  </div>
</div>`,
                "tips": [
                    "Interaktiv elementlarga transition qo'shish",
                    "Foydalanuvchi harakatlariga javob berish",
                    "Focus holatlarini unutmaslik",
                    "Group hover effektlaridan foydalanish"
                ]
            },
            {
                "name": "Form Elementlari",
                "description": "Interaktiv forma elementlari",
                "examples": [
                    "focus:border-blue-500",
                    "invalid:border-red-500",
                    "checked:bg-blue-500",
                    "disabled:opacity-50"
                ],
                "codeExample": `// Form Elementlari
<form class="space-y-4">
  <input type="text" 
    class="w-full px-4 py-2 rounded-lg border border-gray-300
    focus:border-blue-500 focus:ring-2 focus:ring-blue-200
    invalid:border-red-500 invalid:ring-red-200
    transition-all duration-200"
    placeholder="Matnni kiriting"
  />
  
  <div class="flex items-center space-x-2">
    <input type="checkbox" 
      class="w-5 h-5 rounded border-gray-300
      checked:bg-blue-500 checked:border-blue-500
      focus:ring-2 focus:ring-blue-200
      transition-colors duration-200"
    />
    <label class="text-gray-700">Tasdiqlash</label>
  </div>
  
  <button disabled 
    class="w-full py-2 rounded-lg bg-blue-500 text-white
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:bg-blue-600 transition-colors duration-200">
    Yuborish
  </button>
</form>`
            }
        ]
    },
    {
        "id": 2,
        "title": "Animatsiyalar",
        "desc": "Dinamik animatsiya effektlari",
        "items": [
            {
                "name": "Asosiy Animatsiyalar",
                "description": "Tailwind bilan animatsiyalar",
                "examples": [
                    "animate-spin",
                    "animate-pulse",
                    "animate-bounce",
                    "animate-ping",
                    "motion-safe:animate-spin"
                ],
                "codeExample": `// Animatsiya Namunalari
<div class="space-y-8">
  <div class="flex space-x-4">
    <div class="animate-spin h-8 w-8 border-4 border-blue-500 
      border-t-transparent rounded-full">
    </div>
    
    <div class="animate-pulse h-8 w-8 bg-blue-500 rounded-full">
    </div>
    
    <div class="animate-bounce h-8 w-8 bg-green-500 rounded-full">
    </div>
  </div>

  <div class="relative">
    <span class="animate-ping absolute h-4 w-4 rounded-full 
      bg-red-400 opacity-75">
    </span>
    <span class="relative h-4 w-4 rounded-full bg-red-500">
    </span>
  </div>
</div>`,
                "tips": [
                    "Animatsiyalarni o'rinli ishlatish",
                    "Performance ni hisobga olish",
                    "Motion-safe mediaquery dan foydalanish",
                    "Animatsiya tezligini sozlash"
                ]
            },
            {
                "name": "Murakkab Animatsiyalar",
                "description": "Transformatsiya va o'tish effektlari",
                "examples": [
                    "transition-transform",
                    "rotate-45",
                    "scale-110",
                    "translate-x-4",
                    "skew-y-3"
                ],
                "codeExample": `// Murakkab Animatsiyalar
<div class="grid grid-cols-2 gap-4">
  <div class="transform hover:rotate-45 hover:scale-110 
    transition-all duration-300 bg-purple-500 h-24 w-24">
  </div>
  
  <div class="group">
    <div class="transform transition-all duration-500 
      group-hover:translate-x-4 group-hover:translate-y-4 
      group-hover:rotate-12 bg-green-500 h-24 w-24">
    </div>
  </div>
  
  <div class="hover:animate-bounce transform hover:skew-y-3 
    transition-transform bg-yellow-500 h-24 w-24">
  </div>
  
  <div class="relative overflow-hidden bg-blue-500 h-24 w-24">
    <div class="absolute inset-0 bg-white opacity-0 
      hover:opacity-25 transition-opacity duration-300">
    </div>
  </div>
</div>`
            }
        ]
    },
    {
        "id": 3,
        "title": "Maxsus Effektlar",
        "desc": "Zamonaviy va murakkab animatsiya effektlari",
        "items": [
            {
                "name": "Gradient Animatsiyalar",
                "description": "Rang o'tishlar bilan animatsiyalar",
                "examples": [
                    "animate-gradient",
                    "bg-gradient-to-r",
                    "from-purple-500",
                    "via-pink-500",
                    "to-red-500"
                ],
                "codeExample": `// Gradient Animatsiyalar
<div class="space-y-6">
  <div class="h-24 w-full bg-gradient-to-r from-purple-500 via-pink-500 
    to-red-500 animate-gradient rounded-lg shadow-xl">
  </div>

  <button class="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 
    to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white 
    transform hover:scale-105 transition-all duration-300">
    Gradient Tugma
  </button>
</div>`,
                "tips": [
                    "Gradientlarni animatsiya qilish",
                    "Rang kombinatsiyalarini tanlash",
                    "Hover effektlarini qo'shish",
                    "Performance optimizatsiyasi"
                ]
            },
            {
                "name": "3D Transformatsiyalar",
                "description": "Uch o'lchamli animatsiya effektlari",
                "examples": [
                    "perspective",
                    "rotate-y-180",
                    "backface-hidden",
                    "preserve-3d",
                    "translate-z-12"
                ],
                "codeExample": `// 3D Effektlar
<div class="perspective-1000">
  <div class="group h-64 w-48 [transform-style:preserve-3d] transition-all 
    duration-500 hover:[transform:rotateY(180deg)]">
    <div class="absolute inset-0 backface-hidden bg-blue-500 rounded-xl 
      shadow-xl flex items-center justify-center text-white">
      Old tomon
    </div>
    <div class="absolute inset-0 [transform:rotateY(180deg)] backface-hidden 
      bg-green-500 rounded-xl shadow-xl flex items-center justify-center 
      text-white">
      Orqa tomon
    </div>
  </div>
</div>`
            }
        ]
    },
    {
        "id": 4,
        "title": "Loading Animatsiyalar",
        "desc": "Yuklash va kutish animatsiyalari",
        "items": [
            {
                "name": "Kreativ Loading Effektlar",
                "description": "Turli xil yuklash animatsiyalari",
                "examples": [
                    "animate-loading",
                    "animate-dots",
                    "animate-skeleton",
                    "animate-wave",
                    "animate-progress"
                ],
                "codeExample": `// Loading Animatsiyalar
<div class="space-y-8">
  <!-- Doira Loading -->
  <div class="flex space-x-2">
    <div class="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
    <div class="w-3 h-3 rounded-full bg-blue-500 animate-bounce 
      [animation-delay:0.2s]"></div>
    <div class="w-3 h-3 rounded-full bg-blue-500 animate-bounce 
      [animation-delay:0.4s]"></div>
  </div>

  <!-- Skeleton Loading -->
  <div class="space-y-3">
    <div class="h-4 bg-gray-200 rounded-full animate-pulse"></div>
    <div class="h-4 bg-gray-200 rounded-full animate-pulse w-3/4"></div>
    <div class="h-4 bg-gray-200 rounded-full animate-pulse w-1/2"></div>
  </div>

  <!-- Progress Bar -->
  <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
    <div class="h-full bg-blue-500 w-1/2 animate-progress"></div>
  </div>
</div>`,
                "tips": [
                    "Loading animatsiyalarini optimizatsiya qilish",
                    "Foydalanuvchi tajribasini yaxshilash",
                    "Turli xil loading variantlarini tayyorlash",
                    "Animatsiya tezligini sozlash"
                ]
            }
        ]
    }
];

export default dataInteraktivlikAnimatsiya;
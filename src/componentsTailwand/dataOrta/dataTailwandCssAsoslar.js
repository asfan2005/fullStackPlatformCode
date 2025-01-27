const dataTailwandCssAsoslar = [
    {
        "id": 1,
        "title": "Utility Classes",
        "desc": "Tailwind CSS utility klasslari - tez va samarali stillar yaratish uchun",
        "items": [
            {
                "name": "Asosiy Utility Klasslar",
                "description": "Eng ko'p ishlatiladigan utility klasslar va ularning qo'llanilishi",
                "examples": [
                    "text-{size} (text-xs, text-sm, text-base, text-lg, text-xl, text-2xl)",
                    "font-{weight} (font-normal, font-medium, font-semibold, font-bold)",
                    "bg-{color}-{shade} (bg-blue-500, bg-red-600)",
                    "p-{size} (p-2, p-4, p-6, p-8)",
                    "m-{size} (m-2, m-4, m-auto)",
                    "flex flex-{direction} (flex flex-row, flex flex-col)",
                    "grid grid-cols-{number} (grid grid-cols-2, grid-cols-3)"
                ],
                "values": {
                    "text": "xs dan 9xl gacha",
                    "font": "thin, light, normal, medium, semibold, bold, extrabold",
                    "bg": "50 dan 900 gacha intensivlik",
                    "p": "0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16",
                    "m": "p bilan bir xil"
                },
                "codeExample": `// Tugma komponenti
<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
  py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all 
  duration-300 ease-in-out transform hover:-translate-y-0.5">
  Bosing
</button>

// Card komponenti
<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
  transition-shadow duration-300 max-w-sm">
  <img src="/rasm.jpg" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="font-bold text-xl mb-2 text-gray-800">Sarlavha</h3>
    <p class="text-gray-600">Tavsif matni</p>
  </div>
</div>

// Form elementi
<input type="text" 
  class="w-full px-4 py-2 rounded-lg border border-gray-300 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
  outline-none transition-all duration-200"
  placeholder="Matn kiriting"
/>`,
                "tips": [
                    "Utility klasslarni mantiqiy tartibda yozing",
                    "Qayta ishlatilinadigan komponentlar yarating",
                    "Custom klasslar qo'shish mumkin",
                    "Responsive dizayn uchun sm:, md:, lg: prefikslardan foydalaning",
                    "hover:, focus:, active: kabi state modifikatorlarni qo'llang"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Layout",
        "desc": "Zamonaviy va moslashuvchan layout strukturalari",
        "items": [
            {
                "name": "Container va Grid",
                "description": "Responsive va moslashuvchan layout yaratish",
                "examples": [
                    "container",
                    "grid grid-cols-{number}",
                    "flex flex-{direction}",
                    "cols-span-{number}"
                ],
                "layoutExamples": [
                    {
                        "name": "Responsive Container",
                        "code": "container mx-auto px-4 sm:px-6 lg:px-8"
                    },
                    {
                        "name": "Responsive Grid",
                        "code": "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    },
                    {
                        "name": "Complex Flex Layout",
                        "code": "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4"
                    }
                ],
                "codeExample": `// Responsive Grid Layout
<div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <img src="/rasm1.jpg" class="w-full h-48 object-cover rounded-md mb-4" />
      <h3 class="text-lg font-semibold mb-2">Karta 1</h3>
      <p class="text-gray-600">Tavsif matni</p>
    </div>
    <!-- Boshqa kartalar -->
  </div>
</div>

// Complex Navigation
<nav class="bg-white shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center space-x-8">
        <a href="#" class="text-xl font-bold text-gray-800">Logo</a>
        <div class="hidden md:flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-900">Asosiy</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Xizmatlar</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Bog'lanish</a>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Kirish
        </button>
      </div>
    </div>
  </div>
</nav>`
            }
        ]
    },
    {
        "id": 3,
        "title": "Typography",
        "desc": "Professional darajadagi tipografiya",
        "items": [
            {
                "name": "Matn Stillari",
                "description": "Zamonaviy va o'qishli matn dizayni",
                "examples": [
                    "font-sans, font-serif, font-mono",
                    "text-{size} (text-sm -> text-9xl)",
                    "text-{color}-{shade}",
                    "leading-{size}, tracking-{size}",
                    "text-left, text-center, text-right"
                ],
                "fontStyles": {
                    "sans": "Inter, Roboto, system-ui",
                    "serif": "Merriweather, Georgia",
                    "mono": "JetBrains Mono, Menlo"
                },
                "codeExample": `// Blog post sarlavhasi
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 
  leading-tight tracking-tight mb-8">
  Katta va chiroyli sarlavha
</h1>

// Blog post matni
<article class="prose lg:prose-xl max-w-none">
  <p class="text-lg text-gray-700 leading-relaxed mb-6">
    Asosiy matn. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus lacinia odio vitae vestibulum vestibulum.
  </p>
  
  <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">
    Kichik sarlavha
  </h2>
  
  <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
    Muhim iqtibos yoki eslatma
  </blockquote>
</article>

// Maxsus matn
<p class="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent 
  bg-clip-text text-4xl font-extrabold">
  Gradient matn
</p>`
            }
        ]
    },
    {
        "id": 4,
        "title": "Animatsiyalar va Effektlar",
        "desc": "Interaktiv animatsiyalar va vizual effektlar",
        "items": [
            {
                "name": "Animatsiya va Transform",
                "description": "Zamonaviy web animatsiyalar",
                "examples": [
                    "transition-{property}",
                    "duration-{time}",
                    "ease-{timing}",
                    "transform",
                    "animate-{name}"
                ],
                "codeExample": `// Hover effektli karta
<div class="group bg-white rounded-xl p-6 shadow-lg 
  hover:shadow-2xl transform hover:-translate-y-1 
  transition-all duration-300">
  <div class="overflow-hidden rounded-lg mb-4">
    <img src="/rasm.jpg" 
      class="w-full h-48 object-cover transform group-hover:scale-110 
      transition-transform duration-300" />
  </div>
  <h3 class="text-xl font-bold mb-2 text-gray-800">Sarlavha</h3>
  <p class="text-gray-600">Tavsif</p>
</div>

// Pulse animatsiyali tugma
<button class="relative bg-blue-500 text-white px-6 py-3 rounded-lg
  hover:bg-blue-600 transition-colors">
  <span class="absolute inset-0 rounded-lg bg-blue-400 animate-ping 
    opacity-20"></span>
  <span class="relative">Bosing</span>
</button>

// Loading animatsiya
<div class="flex space-x-2">
  <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
  <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
  <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
</div>`
            }
        ]
    },
    {
        "id": 5,
        "title": "Responsive Dizayn",
        "desc": "Barcha qurilmalarga moslashuvchi dizayn",
        "items": [
            {
                "name": "Responsive Patterns",
                "description": "Responsive dizayn namunalari",
                "breakpoints": {
                    "sm": "640px",
                    "md": "768px",
                    "lg": "1024px",
                    "xl": "1280px",
                    "2xl": "1536px"
                },
                "codeExample": `// Responsive Navigation
<nav class="bg-white shadow-lg">
  <div class="container mx-auto px-4">
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center justify-between h-16">
      <div class="flex items-center space-x-8">
        <a href="#" class="text-xl font-bold">Logo</a>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-900">Asosiy</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Xizmatlar</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Bog'lanish</a>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Kirish
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="md:hidden">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="text-xl font-bold">Logo</a>
        <button class="text-gray-600 hover:text-gray-900">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" 
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

// Responsive Grid
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <!-- Grid items -->
</div>

// Responsive Typography
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
  font-bold text-center">
  Responsive Sarlavha
</h1>`
            }
        ]
    }
];

export default dataTailwandCssAsoslar;
const dataResponsiveDizayn = [
    {
        "id": 1,
        "title": "Asosiy Responsive Konseptlar",
        "desc": "Responsive dizayn yaratishning asosiy konseptlari va yondashuvlari",
        "items": [
            {
                "name": "Breakpoint Sistemasi",
                "description": "Tailwind CSS breakpoint sistemasi va responsive dizayn",
                "examples": [
                    "sm: 640px",
                    "md: 768px",
                    "lg: 1024px",
                    "xl: 1280px",
                    "2xl: 1536px"
                ],
                "codeExample": `// Breakpoint Misollari
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive Card */}
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h3 class="text-base md:text-lg lg:text-xl font-bold">
      Responsive Sarlavha
    </h3>
    <p class="mt-2 text-sm md:text-base">
      Matn o'lchami ekran o'lchamiga qarab o'zgaradi
    </p>
  </div>
</div>`,
                "tips": [
                    "Har bir breakpoint uchun alohida stillar berish",
                    "Container o'lchamlarini to'g'ri tanlash",
                    "Grid sistemadan unumli foydalanish",
                    "Responsive utilitylarni ishlatish"
                ]
            },
            {
                "name": "Mobile-First Yondashuv",
                "description": "Mobile qurilmalardan boshlab dizayn qilish metodologiyasi",
                "examples": [
                    "base-styles",
                    "mobile-layout",
                    "tablet-adaptation",
                    "desktop-enhancement"
                ],
                "codeExample": `// Mobile-First Misoli
<nav class="w-full bg-white shadow-lg">
  {/* Mobile Menu */}
  <div class="block md:hidden">
    <div class="flex justify-between p-4">
      <div class="text-xl font-bold">Logo</div>
      <button class="mobile-menu-button">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" 
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  {/* Desktop Menu */}
  <div class="hidden md:flex justify-between p-4">
    <div class="text-xl font-bold">Logo</div>
    <div class="space-x-4">
      <a href="#" class="hover:text-blue-600">Asosiy</a>
      <a href="#" class="hover:text-blue-600">Xizmatlar</a>
      <a href="#" class="hover:text-blue-600">Bog'lanish</a>
    </div>
  </div>
</nav>`,
                "tips": [
                    "Mobil versiyani birinchi o'rinda qo'yish",
                    "Progressive enhancement usulini qo'llash",
                    "Katta ekranlar uchun qo'shimcha funksiyalar qo'shish",
                    "Performance optimizatsiyasi"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Responsive Layout Patterns",
        "desc": "Keng qo'llaniladigan responsive layout patternlar",
        "items": [
            {
                "name": "Responsive Grid Sistemasi",
                "description": "Grid orqali moslashuvchan layoutlar yaratish",
                "examples": [
                    "basic-grid",
                    "complex-grid",
                    "auto-fit",
                    "masonry-layout"
                ],
                "codeExample": `// Responsive Grid Layout
<div class="container mx-auto px-4">
  {/* Asosiy Grid */}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-4 gap-4">
    {/* Grid Element */}
    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg 
      transition-shadow duration-300">
      <img src="/image.jpg" class="w-full h-48 object-cover rounded" />
      <h3 class="mt-4 text-lg font-semibold">Sarlavha</h3>
      <p class="mt-2 text-gray-600">Qisqa tavsif matni</p>
    </div>
    
    {/* Boshqa grid elementlari ... */}
  </div>
</div>`,
                "tips": [
                    "Grid gap'larni responsive qilish",
                    "Auto-fit va auto-fill'dan foydalanish",
                    "Grid template areas'ni qo'llash",
                    "Nested gridlardan foydalanish"
                ]
            },
            {
                "name": "Responsive Tipografiya",
                "description": "Ekran o'lchamiga qarab moslashadigan shriftlar",
                "examples": [
                    "fluid-typography",
                    "responsive-spacing",
                    "line-height-scaling",
                    "font-size-adjustment"
                ],
                "codeExample": `// Responsive Tipografiya
<article class="prose lg:prose-xl max-w-none">
  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold 
    tracking-tight text-gray-900">
    Katta Sarlavha
  </h1>
  
  <p class="mt-4 text-base md:text-lg text-gray-600 
    leading-relaxed">
    Asosiy matn kontenti bu yerda. Matn o'lchami va 
    qatorlar orasidagi masofa ekran o'lchamiga qarab 
    moslashadi.
  </p>
  
  <h2 class="mt-8 text-2xl md:text-3xl font-semibold 
    text-gray-800">
    Ikkinchi darajali sarlavha
  </h2>
</article>`,
                "tips": [
                    "Fluid tipografiya formulalarini ishlatish",
                    "Minimum va maximum o'lchamlarni belgilash",
                    "Sarlavhalar ierarhiyasini saqlash",
                    "O'qish uchun qulay width'larni tanlash"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Responsive Komponentlar",
        "desc": "Har qanday ekran o'lchamiga moslashadigan UI komponentlar",
        "items": [
            {
                "name": "Responsive Navigatsiya",
                "description": "Moslashuvchan navigatsiya komponentlari",
                "examples": [
                    "hamburger-menu",
                    "dropdown-nav",
                    "sidebar-nav",
                    "mega-menu"
                ],
                "codeExample": `// Responsive Navigatsiya
<header class="bg-white shadow-sm">
  <nav class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      {/* Logo */}
      <div class="flex-shrink-0">
        <img class="h-8 w-auto" src="/logo.svg" alt="Logo" />
      </div>
      
      {/* Desktop Menu */}
      <div class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-700 hover:text-blue-600 
          transition-colors">Asosiy</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 
          transition-colors">Mahsulotlar</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 
          transition-colors">Blog</a>
      </div>
      
      {/* Mobile Menu Button */}
      <div class="md:hidden">
        <button class="p-2 rounded-md hover:bg-gray-100">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</header>`,
                "tips": [
                    "Mobile menu animatsiyalarini qo'shish",
                    "Touch interactionlarni hisobga olish",
                    "Scroll holatlarini boshqarish",
                    "Nested menyularni to'g'ri joylashtirish"
                ]
            }
        ]
    }
];

export default dataResponsiveDizayn;
const dataKomponentlar = [
    {
        "id": 1,
        "title": "Asosiy Komponentlar",
        "desc": "Qayta ishlatiluvchi asosiy UI komponentlar to'plami",
        "items": [
            {
                "name": "Button Komponentlari",
                "description": "Turli xil tugma variantlari",
                "examples": [
                    "primary-button",
                    "secondary-button",
                    "outline-button",
                    "icon-button",
                    "loading-button"
                ],
                "codeExample": `// Tugma Variantlari
<div class="space-y-4">
  {/* Asosiy Tugma */}
  <button class="px-6 py-2 bg-blue-600 text-white rounded-lg
    hover:bg-blue-700 focus:ring-2 focus:ring-blue-300
    transition-all duration-200">
    Asosiy Tugma
  </button>

  {/* Ikkilamchi Tugma */}
  <button class="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg
    hover:bg-gray-300 focus:ring-2 focus:ring-gray-200
    transition-all duration-200">
    Ikkilamchi Tugma
  </button>

  {/* Chegarali Tugma */}
  <button class="px-6 py-2 border-2 border-blue-600 text-blue-600
    rounded-lg hover:bg-blue-50 focus:ring-2 focus:ring-blue-200
    transition-all duration-200">
    Chegarali Tugma
  </button>

  {/* Icon Tugma */}
  <button class="p-2 bg-blue-600 text-white rounded-full
    hover:bg-blue-700 focus:ring-2 focus:ring-blue-300
    transition-all duration-200">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
    </svg>
  </button>
</div>`,
                "tips": [
                    "Tugmalar uchun hover va focus holatlarini qo'shish",
                    "Loading holatini ko'rsatish",
                    "Icon va matn kombinatsiyalaridan foydalanish",
                    "Turli o'lchamlarda tayyorlash"
                ]
            },
            {
                "name": "Card Dizaynlari",
                "description": "Turli xil card komponentlari",
                "examples": [
                    "simple-card",
                    "image-card",
                    "action-card",
                    "profile-card",
                    "product-card"
                ],
                "codeExample": `// Card Namunalari
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Oddiy Card */}
  <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl
    transition-shadow duration-300">
    <h3 class="text-xl font-semibold text-gray-800">Card Sarlavhasi</h3>
    <p class="mt-2 text-gray-600">Card matni bu yerda bo'ladi.</p>
  </div>

  {/* Rasm Card */}
  <div class="bg-white rounded-xl shadow-lg overflow-hidden
    hover:shadow-xl transition-shadow duration-300">
    <img src="/rasm.jpg" alt="Card rasmi"
      class="w-full h-48 object-cover"/>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-800">Rasmli Card</h3>
      <p class="mt-2 text-gray-600">Card tavsifi bu yerda.</p>
      <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg
        hover:bg-blue-700 transition-colors duration-200">
        Batafsil
      </button>
    </div>
  </div>
</div>`,
                "tips": [
                    "Cardlarni responsive qilish",
                    "Hover effektlarini qo'shish",
                    "Rasmlarni optimizatsiya qilish",
                    "Animatsiyalardan foydalanish"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Navigatsiya Elementlari",
        "desc": "Sayt navigatsiyasi uchun komponentlar",
        "items": [
            {
                "name": "Navbar Komponentlari",
                "description": "Sayt tepasidagi navigatsiya panellari",
                "examples": [
                    "simple-navbar",
                    "responsive-navbar",
                    "dropdown-navbar",
                    "mobile-menu"
                ],
                "codeExample": `// Navbar Namunasi
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      {/* Logo */}
      <div class="flex items-center">
        <a href="#" class="text-xl font-bold text-blue-600">Logo</a>
      </div>

      {/* Desktop Menu */}
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="px-3 py-2 text-gray-700 hover:text-blue-600
          transition-colors duration-200">Asosiy</a>
        <a href="#" class="px-3 py-2 text-gray-700 hover:text-blue-600
          transition-colors duration-200">Xizmatlar</a>
        <a href="#" class="px-3 py-2 text-gray-700 hover:text-blue-600
          transition-colors duration-200">Blog</a>
        <a href="#" class="px-4 py-2 bg-blue-600 text-white rounded-lg
          hover:bg-blue-700 transition-colors duration-200">Aloqa</a>
      </div>

      {/* Mobile Menu Button */}
      <div class="md:hidden flex items-center">
        <button class="text-gray-700 hover:text-blue-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" 
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>`,
                "tips": [
                    "Mobile menyuni to'g'ri sozlash",
                    "Dropdown menyularni qo'shish",
                    "Scroll effektlarini qo'shish",
                    "Active holatlarni ko'rsatish"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Form Elementlari",
        "desc": "Forma elementlari va validatsiya",
        "items": [
            {
                "name": "Input Komponentlari",
                "description": "Turli xil input elementlari",
                "examples": [
                    "text-input",
                    "select-input",
                    "checkbox-input",
                    "radio-input",
                    "textarea-input"
                ],
                "codeExample": `// Form Elementlari
<form class="space-y-6 max-w-md">
  {/* Text Input */}
  <div class="space-y-2">
    <label class="block text-sm font-medium text-gray-700">
      Ism
    </label>
    <input type="text"
      class="w-full px-4 py-2 rounded-lg border border-gray-300
      focus:ring-2 focus:ring-blue-200 focus:border-blue-500
      transition-all duration-200"
      placeholder="Ismingizni kiriting"
    />
  </div>

  {/* Select Input */}
  <div class="space-y-2">
    <label class="block text-sm font-medium text-gray-700">
      Kategoriya
    </label>
    <select class="w-full px-4 py-2 rounded-lg border border-gray-300
      focus:ring-2 focus:ring-blue-200 focus:border-blue-500
      transition-all duration-200">
      <option>Kategoriya 1</option>
      <option>Kategoriya 2</option>
      <option>Kategoriya 3</option>
    </select>
  </div>

  {/* Checkbox */}
  <div class="flex items-center space-x-2">
    <input type="checkbox"
      class="w-4 h-4 rounded border-gray-300 text-blue-600
      focus:ring-blue-200"
    />
    <label class="text-sm text-gray-700">
      Shartlarni qabul qilaman
    </label>
  </div>

  {/* Submit Button */}
  <button type="submit"
    class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg
    hover:bg-blue-700 focus:ring-2 focus:ring-blue-300
    transition-all duration-200">
    Yuborish
  </button>
</form>`,
                "tips": [
                    "Validatsiya xabarlarini ko'rsatish",
                    "Loading holatlarini qo'shish",
                    "Error holatlarini ko'rsatish",
                    "Formani responsive qilish"
                ]
            }
        ]
    }
];

export default dataKomponentlar;
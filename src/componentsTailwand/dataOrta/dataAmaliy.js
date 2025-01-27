const dataAmaliy = [
    {
        "id": 1,
        "title": "Responsive Navbar",
        "description": "Tailwind CSS bilan adaptiv navigatsiya paneli",
        "examples": [
            "Mobile Menu",
            "Dropdown Navigation",
            "Dark/Light Mode",
            "Sticky Header"
        ],
        "codeExample": `<nav className="w-full bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="flex-shrink-0">
        <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
          Asosiy
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
          Xizmatlar
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-blue-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>`,
        "tips": [
            "Container classlardan foydalaning",
            "Responsive breakpointlarni to'g'ri tanlang",
            "Hover effectlarni qo'shing",
            "Dark mode ni implement qiling"
        ]
    },
    {
        "id": 2,
        "title": "Hero Section",
        "description": "Zamonaviy Hero section Tailwind CSS bilan",
        "examples": [
            "Gradient Background",
            "Responsive Layout",
            "Custom Animations",
            "Call-to-Action Button"
        ],
        "codeExample": `<div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-20 md:py-28">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Zamonaviy Web Dizayn
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl">
        Tailwind CSS yordamida tez va sifatli web saytlar yarating
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg
        hover:bg-blue-50 transition duration-300 shadow-lg">
        Boshlash
      </button>
    </div>
  </div>
  <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
    {/* Background Pattern */}
  </div>
</div>`,
        "tips": [
            "Gradientlardan unumli foydalaning",
            "Responsive spacing qo'llang",
            "Animation classlarni to'g'ri tanlang",
            "Performance optimizatsiyasi"
        ]
    },
    {
        "id": 3,
        "title": "Card Components",
        "description": "Tailwind CSS bilan universal card komponentlari",
        "examples": [
            "Product Cards",
            "Blog Post Cards",
            "Profile Cards",
            "Feature Cards"
        ],
        "codeExample": `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl
    transition duration-300 transform hover:-translate-y-1">
    <div className="relative">
      <img className="w-full h-48 object-cover" src="/product.jpg" alt="Product" />
      <div className="absolute top-2 right-2">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Yangi
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Mahsulot nomi
      </h3>
      <p className="text-gray-600 mb-4">
        Mahsulot haqida qisqacha ma'lumot
      </p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">$99</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg
          hover:bg-blue-700 transition duration-300">
          Sotib olish
        </button>
      </div>
    </div>
  </div>
</div>`,
        "tips": [
            "Grid sistemadan foydalaning",
            "Hover effectlarni qo'shing",
            "Shadow va transition effectlar",
            "Responsive dizayn"
        ]
    },
    {
        "id": 4,
        "title": "Form Elements",
        "description": "Tailwind CSS bilan zamonaviy formalar",
        "examples": [
            "Input Fields",
            "Checkboxes",
            "Radio Buttons",
            "Custom Select"
        ],
        "codeExample": `<form className="max-w-md mx-auto space-y-6">
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-2">
      Email
    </label>
    <input type="email"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
      focus:ring-blue-600 focus:border-transparent transition duration-200"
      placeholder="email@example.com"
    />
  </div>
  
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-2">
      Parol
    </label>
    <input type="password"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
      focus:ring-blue-600 focus:border-transparent transition duration-200"
    />
  </div>

  <div className="flex items-center">
    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500
      border-gray-300 rounded" />
    <label className="ml-2 block text-gray-700 text-sm">
      Meni eslab qol
    </label>
  </div>

  <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4
    rounded-lg hover:bg-blue-700 transition duration-300">
    Kirish
  </button>
</form>`,
        "tips": [
            "Form validatsiyasini qo'shing",
            "Focus state'larni sozlang",
            "Custom input stillarini yarating",
            "Accessibility ga e'tibor bering"
        ]
    }
];

export default dataAmaliy;
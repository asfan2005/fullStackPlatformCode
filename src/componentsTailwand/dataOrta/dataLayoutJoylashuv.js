const dataLayoutJoylashuv = [
    {
        "id": 1,
        "title": "Flexbox Layout",
        "desc": "Moslashuvchan va zamonaviy layout tizimi",
        "items": [
            {
                "name": "Flex Asoslari",
                "description": "Flexbox yordamida elementlarni joylash",
                "examples": [
                    "flex",
                    "flex-row",
                    "flex-col",
                    "flex-wrap",
                    "flex-nowrap",
                    "items-center",
                    "justify-center"
                ],
                "codeExample": `// Markazlashgan Container
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Markaziy Kontent</h2>
  </div>
</div>

// Navigation Bar
<nav class="flex items-center justify-between p-4 bg-white shadow-md">
  <div class="flex items-center space-x-4">
    <img src="/logo.svg" class="h-8 w-8" />
    <span class="font-bold text-xl">Logo</span>
  </div>
  <div class="flex space-x-4">
    <a href="#" class="hover:text-blue-500">Asosiy</a>
    <a href="#" class="hover:text-blue-500">Xizmatlar</a>
    <a href="#" class="hover:text-blue-500">Aloqa</a>
  </div>
</nav>`,
                "tips": [
                    "flex-grow va flex-shrink xususiyatlarini to'g'ri ishlating",
                    "gap-{size} yordamida elementlar orasidagi masofani belgilang",
                    "flex-wrap responsive dizayn uchun muhim",
                    "items-center va justify-center eng ko'p ishlatiladigan klasslar"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Grid Layout",
        "desc": "Murakkab grid tizimlarini yaratish",
        "items": [
            {
                "name": "Grid Asoslari",
                "description": "CSS Grid yordamida murakkab layoutlar",
                "examples": [
                    "grid",
                    "grid-cols-{number}",
                    "gap-{size}",
                    "col-span-{number}",
                    "row-span-{number}"
                ],
                "gridExamples": [
                    {
                        "name": "Asosiy Grid",
                        "code": "grid grid-cols-3 gap-4"
                    },
                    {
                        "name": "Responsive Grid",
                        "code": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    }
                ],
                "codeExample": `// Galereya Grid
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="/rasm1.jpg" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="font-bold">Sarlavha 1</h3>
      <p class="text-gray-600">Tavsif</p>
    </div>
  </div>
  <!-- Boshqa rasmlar -->
</div>

// Dashboard Layout
<div class="grid grid-cols-12 gap-6">
  <div class="col-span-12 md:col-span-3 lg:col-span-2">
    <!-- Sidebar -->
  </div>
  <div class="col-span-12 md:col-span-9 lg:col-span-7">
    <!-- Main Content -->
  </div>
  <div class="col-span-12 lg:col-span-3">
    <!-- Right Sidebar -->
  </div>
</div>`
            }
        ]
    },
    {
        "id": 3,
        "title": "Positioning",
        "desc": "Elementlarni aniq joylash",
        "items": [
            {
                "name": "Position Xususiyatlari",
                "description": "Elementlarni aniq pozitsiyalash",
                "examples": [
                    "static",
                    "relative",
                    "absolute",
                    "fixed",
                    "sticky"
                ],
                "codeExample": `// Modal Dialog
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
    <h2 class="text-xl font-bold mb-4">Modal Sarlavha</h2>
    <p class="text-gray-600 mb-4">Modal matni</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Yopish</button>
  </div>
</div>

// Sticky Header
<header class="sticky top-0 bg-white shadow-md z-50">
  <nav class="container mx-auto px-4 py-4">
    <!-- Navigation content -->
  </nav>
</header>

// Dropdown Menu
<div class="relative">
  <button class="bg-white px-4 py-2 rounded-lg">Menyu</button>
  <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Element 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Element 2</a>
  </div>
</div>`
            }
        ]
    },
    {
        "id": 4,
        "title": "Container va Spacing",
        "desc": "Kontentni to'g'ri joylashtirish va masofalash",
        "items": [
            {
                "name": "Container va Margin/Padding",
                "description": "Kontent uchun container va masofalar",
                "examples": [
                    "container",
                    "mx-auto",
                    "px-{size}",
                    "py-{size}",
                    "space-x-{size}",
                    "space-y-{size}"
                ],
                "codeExample": `// Main Container
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <!-- Content -->
  </div>
</div>

// Card Grid with Spacing
<div class="space-y-8">
  <section class="space-y-4">
    <h2 class="text-2xl font-bold">Bo'lim 1</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Cards -->
    </div>
  </section>
  
  <section class="space-y-4">
    <h2 class="text-2xl font-bold">Bo'lim 2</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Cards -->
    </div>
  </section>
</div>`
            }
        ]
    },
    {
        "id": 5,
        "title": "Responsive Layoutlar",
        "desc": "Har qanday ekran o'lchamiga moslashuvchan layoutlar",
        "items": [
            {
                "name": "Responsive Design Patterns",
                "description": "Responsive layoutlar yaratish",
                "breakpoints": {
                    "sm": "640px",
                    "md": "768px",
                    "lg": "1024px",
                    "xl": "1280px",
                    "2xl": "1536px"
                },
                "codeExample": `// Responsive Sidebar Layout
<div class="flex flex-col md:flex-row min-h-screen">
  <!-- Sidebar -->
  <aside class="w-full md:w-64 bg-gray-800 text-white">
    <div class="p-4">
      <h2 class="text-xl font-bold">Sidebar</h2>
      <nav class="mt-4 space-y-2">
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Menu 1</a>
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Menu 2</a>
      </nav>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 p-6 bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Asosiy Kontent</h1>
      <!-- Content -->
    </div>
  </main>
</div>

// Responsive Cards
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Karta 1</h3>
    <p class="text-gray-600">Tavsif matni</p>
  </div>
  <!-- More cards -->
</div>`
            }
        ]
    }
];

export default dataLayoutJoylashuv;
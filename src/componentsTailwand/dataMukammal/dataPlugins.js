const dataPlugins = [
    {
        id: 1,
        title: "Container Plugin",
        description: "Container so'rovlari uchun plugin. Responsive dizayn yaratishda juda foydali.",
        codeExample: `// tailwind.config.js
const plugin = require("tailwindcss/plugin")

module.exports = {
    plugins: [
        require("@tailwindcss/container-queries"),
    ],
}

<!-- Container Example -->
<div class="@container">
    <div class="@lg:grid grid-cols-2 gap-4">
        <div class="@lg:p-6 p-4">
            <h2 class="text-xl font-bold">Responsive Container</h2>
            <p class="mt-2">Container query bilan ishlash</p>
        </div>
        <div class="@lg:p-6 p-4">
            <img src="/image.jpg" class="w-full rounded-lg" />
        </div>
    </div>
</div>`
    },
    {
        id: 2,
        title: "Forms Plugin",
        description: "Formalar uchun maxsus stillar va elementlar to'plami.",
        codeExample: `// tailwind.config.js
module.exports = {
    plugins: [
        require("@tailwindcss/forms"),
    ],
}

<!-- Form Elements -->
<form class="space-y-4">
    <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input 
            type="email" 
            class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="email@example.com"
        >
    </div>
    
    <div>
        <label class="block text-sm font-medium text-gray-700">Kategoriya</label>
        <select class="form-select mt-1 block w-full rounded-md border-gray-300">
            <option>Kategoriya 1</option>
            <option>Kategoriya 2</option>
        </select>
    </div>

    <div class="flex items-center">
        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
        <label class="ml-2">Shartlarni qabul qilaman</label>
    </div>
</form>`
    },
    {
        id: 3,
        title: "Typography Plugin",
        description: "Matnlar uchun professional tipografiya va stillar.",
        codeExample: `// tailwind.config.js
module.exports = {
    plugins: [
        require("@tailwindcss/typography"),
    ],
}

<!-- Typography Example -->
<article class="prose lg:prose-xl max-w-none">
    <h1>Asosiy Sarlavha</h1>
    <p class="lead">
        Kirish matni va asosiy tushunchalar haqida qisqacha ma'lumot.
        Bu paragraf o'quvchining e'tiborini tortishi kerak.
    </p>
    
    <h2>Ikkinchi Daraja Sarlavha</h2>
    <p>Asosiy kontent matni. Bu yerda mavzu batafsil yoritiladi.</p>
    
    <blockquote>
        Muhim iqtibos yoki ta'kidlanadigan fikr.
        <cite>- Muallif nomi</cite>
    </blockquote>

    <h3>Kichik Bo'lim</h3>
    <ul>
        <li>Birinchi punkt</li>
        <li>Ikkinchi punkt</li>
        <li>Uchinchi punkt</li>
    </ul>
</article>`
    },
    {
        id: 4,
        title: "Aspect Ratio Plugin",
        description: "Rasmlar va videolar uchun aspect ratio sozlamalari.",
        codeExample: `<!-- Aspect Ratio Examples -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    <!-- Rasm bilan misol -->
    <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Tasvir"
            class="w-full h-full object-cover"
        />
    </div>

    <!-- Video bilan misol -->
    <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
        <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>

    <!-- Square aspect ratio -->
    <div class="aspect-w-1 aspect-h-1 bg-blue-100 rounded-lg">
        <div class="flex items-center justify-center text-blue-600 font-bold">
            1:1 Kvadrat
        </div>
    </div>

    <!-- Custom aspect ratio -->
    <div class="aspect-w-4 aspect-h-3 bg-green-100 rounded-lg">
        <div class="flex items-center justify-center text-green-600 font-bold">
            4:3 Nisbat
        </div>
    </div>
</div>`
    },
    {
        id: 5,
        title: "Line Clamp Plugin",
        description: "Matnlarni qatorlar bo'yicha cheklash uchun plugin.",
        codeExample: `<!-- Line Clamp Examples -->
<div class="space-y-4">
    <!-- 2 qator -->
    <p class="line-clamp-2 bg-blue-50 p-4 rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris.
    </p>

    <!-- 3 qator -->
    <p class="line-clamp-3 bg-green-50 p-4 rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat.
    </p>

    <!-- Line clamp none -->
    <p class="line-clamp-none bg-purple-50 p-4 rounded-lg">
        To'liq ko'rsatiladigan matn
    </p>
</div>`
    },
    {
        id: 6,
        title: "Custom Plugin Creation",
        description: "Maxsus CSS klasslar va komponentlar yaratish.",
        codeExample: `<!-- Custom Plugin Examples -->
<div class="space-y-6 p-4">
    <!-- Card Component -->
    <div class="card bg-white p-6 rounded-lg shadow-xl">
        <h2 class="text-xl font-bold text-shadow">Maxsus Sarlavha</h2>
        <p class="mt-2">Card komponenti matni</p>
        <button class="btn-primary mt-4">
            Tugma
        </button>
    </div>

    <!-- Custom Shadows -->
    <div class="custom-shadow bg-white p-6 rounded-lg">
        Custom Shadow Element
    </div>

    <!-- Text Shadow -->
    <div class="text-shadow text-2xl font-bold text-blue-600">
        Text Shadow Example
    </div>
</div>`
    },
    {
        id: 7,
        title: "Scroll Snap Plugin",
        description: "Scroll effektlari uchun maxsus plugin.",
        codeExample: `<!-- Scroll Snap Example -->
<div class="snap snap-x snap-mandatory flex w-full overflow-x-auto">
    <div class="snap-start w-full flex-shrink-0 h-64 bg-blue-500 flex items-center justify-center">
        <h2 class="text-4xl text-white font-bold">Slayd 1</h2>
    </div>
    <div class="snap-start w-full flex-shrink-0 h-64 bg-green-500 flex items-center justify-center">
        <h2 class="text-4xl text-white font-bold">Slayd 2</h2>
    </div>
    <div class="snap-start w-full flex-shrink-0 h-64 bg-purple-500 flex items-center justify-center">
        <h2 class="text-4xl text-white font-bold">Slayd 3</h2>
    </div>
</div>`
    },
    {
        id: 8,
        title: "Animation Plugin",
        description: "Maxsus animatsiyalar uchun plugin.",
        codeExample: `<!-- Animation Examples -->
<div class="space-y-8 p-4">
    <div class="animate-float bg-blue-500 p-6 rounded-lg text-white text-center">
        Floating Element
    </div>
    <div class="animate-pulse-slow bg-green-500 p-6 rounded-lg text-white text-center">
        Pulsing Element
    </div>
    <div class="animate-bounce bg-purple-500 p-6 rounded-lg text-white text-center">
        Bouncing Element
    </div>
</div>`
    },
    {
        id: 9,
        title: "Grid Plugin",
        description: "Murakkab grid layoutlar uchun plugin.",
        codeExample: `<!-- Grid Examples -->
<div class="grid-masonry p-6 gap-4">
    <div class="bg-blue-100 p-6 rounded-lg shadow-md">
        <h3 class="font-bold text-blue-800">Element 1</h3>
        <p class="mt-2">Grid element matni</p>
    </div>
    <div class="bg-green-100 p-6 rounded-lg shadow-md">
        <h3 class="font-bold text-green-800">Element 2</h3>
        <p class="mt-2">Grid element matni</p>
    </div>
    <div class="bg-yellow-100 p-6 rounded-lg shadow-md">
        <h3 class="font-bold text-yellow-800">Element 3</h3>
        <p class="mt-2">Grid element matni</p>
    </div>
    <div class="bg-red-100 p-6 rounded-lg shadow-md">
        <h3 class="font-bold text-red-800">Element 4</h3>
        <p class="mt-2">Grid element matni</p>
    </div>
    <div class="bg-purple-100 p-6 rounded-lg shadow-md">
        <h3 class="font-bold text-purple-800">Element 5</h3>
        <p class="mt-2">Grid element matni</p>
    </div>
</div>`
    },
    {
        id: 10,
        title: "Gradient Plugin",
        description: "Murakkab gradientlar uchun plugin.",
        codeExample: `<!-- Gradient Examples -->
<div class="space-y-4 p-6">
    <div class="gradient-primary p-6 rounded-lg text-white text-center font-bold">
        Primary Gradient
    </div>
    <div class="gradient-secondary p-6 rounded-lg text-white text-center font-bold">
        Secondary Gradient
    </div>
    <div class="gradient-radial p-6 rounded-lg text-white text-center font-bold">
        Radial Gradient
    </div>
    <div class="gradient-conic p-6 rounded-lg text-white text-center font-bold">
        Conic Gradient
    </div>
    <div class="gradient-diagonal p-6 rounded-lg text-white text-center font-bold">
        Diagonal Gradient
    </div>
    <div class="gradient-shine p-6 rounded-lg text-white text-center font-bold">
        Shining Gradient
    </div>
</div>`
    }
];

export default dataPlugins;
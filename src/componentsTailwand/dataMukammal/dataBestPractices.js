const dataBestPractices = [
    {
        id: 1,
        title: "Tailwind CSS Asoslari",
        description: "Tailwind CSS asosiy tushunchalari va utility-first yondashuvi.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
        codeExample: `<!-- Asosiy stillar -->
<div class="bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Salom Dunyo</h1>
    <p class="text-gray-600">
        Tailwind CSS utility-first framework
    </p>
</div>

<!-- Responsive dizayn -->
<div class="sm:text-base md:text-lg lg:text-xl">
    Responsive matn
</div>`
    },
    {
        id: 2,
        title: "Flexbox va Grid",
        description: "Tailwind CSS da Flexbox va Grid yordamida joylashuvni boshqarish.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1964&auto=format&fit=crop",
        codeExample: `<!-- Flexbox -->
<div class="flex justify-between items-center p-4">
    <div class="flex-shrink-0">Element 1</div>
    <div class="flex-grow">Element 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
    <div class="bg-blue-200 p-4">Grid 1</div>
    <div class="bg-blue-300 p-4">Grid 2</div>
    <div class="bg-blue-400 p-4">Grid 3</div>
</div>`
    },
    {
        id: 3,
        title: "Animatsiya va O'tishlar",
        description: "Tailwind CSS da animatsiya va transition effektlarini qo'llash.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        codeExample: `<!-- Hover effektlari -->
<button class="bg-blue-500 hover:bg-blue-700 
    text-white font-bold py-2 px-4 rounded
    transition duration-300 ease-in-out">
    Tugma
</button>

<!-- Animatsiyalar -->
<div class="animate-pulse bg-blue-500 h-4 w-32"></div>
<div class="animate-bounce text-3xl">↓</div>`
    },
    {
        id: 4,
        title: "Custom Stillar",
        description: "Tailwind CSS ni kengaytirish va maxsus stillar yaratish.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
        codeExample: `<!-- Maxsus ranglar -->
<div class="bg-primary-500 text-custom-gray">
    Maxsus ranglar
</div>

/* tailwind.config.js */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#FF5733',
                },
                'custom-gray': '#2C3E50',
            }
        }
    }
}`
    },
    {
        id: 5,
        title: "Tailwind Components",
        description: "Qayta ishlatiluvchi komponentlar yaratish.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        codeExample: `<!-- Karta komponenti -->
<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="rasm.jpg" alt="Karta rasmi">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Karta sarlavhasi</div>
        <p class="text-gray-700 text-base">
            Karta matni
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full 
            px-3 py-1 text-sm font-semibold text-gray-700 
            mr-2 mb-2">
            #tailwindcss
        </span>
    </div>
</div>`
    },
    {
        id: 6,
        title: "Responsive Dizayn",
        description: "Tailwind CSS da responsive dizayn yaratish usullari.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        codeExample: `<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-purple-200 p-4 rounded">
        <h3 class="text-lg md:text-xl font-bold">Element 1</h3>
        <p class="mt-2">Matn</p>
    </div>
    <div class="bg-purple-300 p-4 rounded">
        <h3 class="text-lg md:text-xl font-bold">Element 2</h3>
        <p class="mt-2">Matn</p>
    </div>
    <div class="bg-purple-400 p-4 rounded">
        <h3 class="text-lg md:text-xl font-bold">Element 3</h3>
        <p class="mt-2">Matn</p>
    </div>
</div>`
    },
    {
        id: 7,
        title: "Dark Mode",
        description: "Tailwind CSS da Dark Mode ni qo'llash.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        codeExample: `<!-- Dark Mode -->
<div class="bg-white dark:bg-gray-800">
    <h2 class="text-gray-900 dark:text-white text-2xl font-bold">
        Sarlavha
    </h2>
    <p class="text-gray-600 dark:text-gray-300">
        Dark mode matni
    </p>
    <button class="bg-blue-500 dark:bg-blue-700 
        text-white px-4 py-2 rounded">
        Tugma
    </button>
</div>`
    },
    {
        id: 8,
        title: "Performance Optimizatsiya",
        description: "Tailwind CSS da performance optimizatsiya usullari.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        codeExample: `<!-- JIT Mode -->
<div class="
    bg-[#123456] 
    hover:bg-[#654321]
    text-[14px]
    p-[10px]
    w-[200px]
">
    Custom value
</div>

<!-- Purge CSS -->
/* tailwind.config.js */
module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
}`
    }
];

export default dataBestPractices;
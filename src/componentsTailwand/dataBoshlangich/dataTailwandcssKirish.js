const dataTailwandcssKirish = [
    {
        id: 1,
        title: "Tailwind CSS Asoslari",
        description: "Tailwind CSS ning asosiy tushunchalari va afzalliklari",
        examples: [
            {
                name: "Utility-First Yondashuv",
                code: `// HTML with Tailwind CSS classes
<div class="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">
    <h2 class="text-xl font-bold text-gray-800">
        Tailwind CSS Example
    </h2>
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click me
    </button>
</div>

// Tailwind CSS konfiguratsiya
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',
                secondary: '#64748b',
            },
            spacing: {
                '128': '32rem',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}`,
                explanation: "Utility-first yondashuv orqali tez va samarali stillar yaratish",
                result: "Toza va tartibli HTML struktura"
            }
        ]
    },
    {
        id: 2,
        title: "Responsive Dizayn",
        description: "Tailwind CSS yordamida responsive dizayn yaratish",
        examples: [
            {
                name: "Responsive Breakpoints",
                code: `// Responsive dizayn misoli
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="p-4 bg-gray-100 rounded-lg">
        <h3 class="text-lg sm:text-xl md:text-2xl font-bold">
            Responsive Card
        </h3>
        <p class="mt-2 text-sm md:text-base text-gray-600">
            This card adapts to different screen sizes
        </p>
    </div>
</div>

// Custom breakpoint qo'shish
module.exports = {
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            'custom': '1400px',
        }
    }
}`,
                explanation: "Turli ekran o'lchamlari uchun moslashuvchan dizayn",
                result: "Barcha qurilmalarda to'g'ri ko'rinuvchi dizayn"
            }
        ]
    },
    {
        id: 3,
        title: "Komponentlar va Reusability",
        description: "Qayta ishlatiluvchi komponentlar yaratish",
        examples: [
            {
                name: "Custom Komponentlar",
                code: `// React komponenti with Tailwind CSS
function Card({ title, description, imageUrl }) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full h-48 object-cover" 
                 src={imageUrl} 
                 alt={title} 
            />
            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">
                    {title}
                </h3>
                <p class="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

// @apply direktivi bilan CSS yaratish
@layer components {
    .btn-primary {
        @apply px-4 py-2 bg-blue-500 text-white rounded;
        @apply hover:bg-blue-600 transition-colors;
    }
    .card-wrapper {
        @apply p-4 bg-white rounded-lg shadow-md;
        @apply hover:shadow-lg transition-shadow;
    }
}`,
                explanation: "Qayta ishlatiluvchi komponentlar va klaslar yaratish",
                result: "DRY prinsipi asosida optimallashtirilgan kod"
            }
        ]
    },
    {
        id: 4,
        title: "Performance va Optimizatsiya",
        description: "Tailwind CSS loyihalarini optimizatsiya qilish",
        examples: [
            {
                name: "Production Optimizatsiya",
                code: `// tailwind.config.js
module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}

// PostCSS konfiguratsiya
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'production' && require('cssnano')
    ]
}`,
                explanation: "Production uchun CSS faylni optimizatsiya qilish",
                result: "Kichik hajmli va optimallashtirilgan CSS"
            }
        ]
    }
];

export default dataTailwandcssKirish;
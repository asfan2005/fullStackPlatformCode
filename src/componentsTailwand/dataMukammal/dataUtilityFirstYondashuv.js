const dataUtilityFirstYondashuv = [
    {
        id: 1,
        title: "Utility-First Yondashuv Asoslari",
        description: "Tailwind CSS ning Utility-First yondashuvi va uning afzalliklari",
        examples: [
            "Tezkor ishlab chiqish",
            "Qayta foydalanish imkoniyati",
            "Kodni saqlash osonligi",
            "Moslashuvchanlik"
        ],
        codeExample: `<!-- An'anaviy CSS -->
.button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #3b82f6;
    color: white;
}

<!-- Utility-First yondashuv -->
<button class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
    Tugma
</button>`,
        tips: [
            "Utility classlarni mantiqiy tartibda yozish",
            "Ko'p ishlatiladigan kombinatsiyalarni aniqlash",
            "Responsive dizayn uchun prefixlardan foydalanish",
            "HTML tuzilishini toza saqlash"
        ]
    },
    {
        id: 2,
        title: "Utility Classlarning Afzalliklari",
        description: "Utility classlardan foydalanishning asosiy afzalliklari",
        examples: [
            "CSS fayllar hajmining kamayishi",
            "Tezkor prototiplash",
            "Oson o'zgartirish kiritish",
            "Yaxshi maintainability"
        ],
        codeExample: `<!-- Responsive dizayn -->
<div class="w-full md:w-1/2 lg:w-1/3">
    <!-- Kontent -->
</div>

<!-- Holatlar boshqaruvi -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 
               disabled:bg-gray-400 disabled:cursor-not-allowed">
    Tugma
</button>`,
        tips: [
            "Loyiha hajmiga qarab utility classlarni tanlash",
            "Performance optimizatsiyasini unutmaslik",
            "Komponentlarni modullar ko'rinishida saqlash",
            "CSS hajmini nazorat qilish"
        ]
    },
    {
        id: 3,
        title: "Utility Classlarni Guruhlash",
        description: "Utility classlarni samarali guruhlash usullari",
        examples: [
            "Layout classlar",
            "Typography classlar",
            "Color va background",
            "Spacing va sizing"
        ],
        codeExample: `<!-- Layout guruhi -->
<div class="flex items-center justify-between">
    <!-- Content -->
</div>

<!-- Typography guruhi -->
<h1 class="text-2xl font-bold text-gray-900 tracking-tight">
    Sarlavha
</h1>

<!-- Spacing va Color guruhi -->
<div class="p-4 m-2 bg-white shadow-lg rounded-lg">
    <!-- Content -->
</div>`,
        tips: [
            "Related classlarni birga guruhlash",
            "Mantiqiy tartibda joylashtirish",
            "Kod o'qilishini osonlashtirish",
            "Qayta foydalanish uchun qulay qilish"
        ]
    },
    {
        id: 4,
        title: "@apply Direktivi",
        description: "@apply direktivi yordamida utility classlarni birlashtirish",
        examples: [
            "Component stillarini yaratish",
            "Qayta foydalaniladigan stillar",
            "Custom classlar yaratish",
            "CSS modullarini tashkil etish"
        ],
        codeExample: `/* styles.css */
.custom-button {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg 
           hover:bg-blue-600 transition duration-300;
}

/* Custom component */
.card {
    @apply p-6 bg-white rounded-xl shadow-lg;
}

/* Responsive styles */
.responsive-container {
    @apply w-full md:w-2/3 lg:w-1/2 mx-auto;
}`,
        tips: [
            "@apply ni kerakli joylarda ishlatish",
            "Component logikasini saqlash",
            "Kod takrorlanishini kamaytirish",
            "Maintainability ni yaxshilash"
        ]
    },
    {
        id: 5,
        title: "Custom Utility Classlar",
        description: "O'z utility classlaringizni yaratish va sozlash",
        examples: [
            "Custom ranglar",
            "Custom o'lchamlar",
            "Custom animatsiyalar",
            "Custom gradientlar"
        ],
        codeExample: `// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                'brand': {
                    light: '#60a5fa',
                    DEFAULT: '#3b82f6',
                    dark: '#1d4ed8',
                }
            },
            spacing: {
                '128': '32rem',
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        }
    }
}

/* Ishlatish */
<div class="bg-brand text-brand-light border-brand-dark">
    <!-- Content -->
</div>`,
        tips: [
            "Loyiha talablariga mos utility classlar yaratish",
            "Theme konfiguratsiyasini to'g'ri sozlash",
            "Naming conventionlarga amal qilish",
            "Dokumentatsiya yuritish"
        ]
    },
    {
        id: 6,
        title: "Prefixlar va Suffixlar",
        description: "Tailwind CSS da prefix va suffixlardan foydalanish",
        examples: [
            "Responsive prefixlar",
            "State suffixlar",
            "Dark mode prefix",
            "Group hover"
        ],
        codeExample: `<!-- Responsive prefixlar -->
<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <!-- Content -->
</div>

<!-- State suffixlar -->
<button class="bg-blue-500 hover:bg-blue-600 
               focus:ring-2 active:bg-blue-700">
    Tugma
</button>

<!-- Dark mode -->
<div class="bg-white dark:bg-gray-800 
            text-gray-900 dark:text-white">
    <!-- Content -->
</div>

<!-- Group hover -->
<div class="group hover:bg-gray-100">
    <p class="group-hover:text-blue-500">
        Hover effect
    </p>
</div>`,
        tips: [
            "Prefixlarni mantiqiy tartibda ishlatish",
            "Responsive dizaynni to'g'ri rejalashtirish",
            "State boshqaruvini optimizatsiya qilish",
            "Dark mode ni to'g'ri implement qilish"
        ]
    }
];

export default dataUtilityFirstYondashuv;
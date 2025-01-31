const dataRanglarGradientlar = [
    {
        id: 1,
        title: "Asosiy Rang Palitralari",
        description: "Tailwind CSS da mavjud bo'lgan standart rang palitralari va ulardan foydalanish",
        examples: [
            "Asosiy ranglar (primary colors)",
            "Neytral ranglar (gray scale)",
            "Accent ranglar",
            "Semantic ranglar (success, error, warning)"
        ],
        codeExample: `<!-- Asosiy ranglar -->
<div class="bg-blue-500 text-white">Primary Blue</div>
<div class="bg-red-500 text-white">Primary Red</div>

<!-- Neytral ranglar -->
<div class="bg-gray-100">Light Gray</div>
<div class="bg-gray-900 text-white">Dark Gray</div>

<!-- Semantic ranglar -->
<div class="bg-green-500">Success</div>
<div class="bg-red-500">Error</div>
<div class="bg-yellow-500">Warning</div>`,
        tips: [
            "Ranglarni konsistent ishlatish",
            "Kontrast nisbatlarini saqlash",
            "Accessibility standartlariga amal qilish",
            "Brand ranglarini hisobga olish"
        ]
    },
    {
        id: 2,
        title: "Custom Ranglar",
        description: "Loyiha uchun maxsus ranglar qo'shish va sozlash",
        examples: [
            "Brand ranglarini qo'shish",
            "Rang variantlarini yaratish",
            "Rang shkalasini kengaytirish",
            "Custom rang nomlari"
        ],
        codeExample: `// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                'brand': {
                    light: '#93C5FD',
                    DEFAULT: '#3B82F6',
                    dark: '#1D4ED8',
                },
                'accent': '#F59E0B',
                'custom-gray': {
                    50: '#F9FAFB',
                    900: '#111827',
                }
            }
        }
    }
}

<!-- Ishlatish -->
<div class="bg-brand text-white">Brand rang</div>
<div class="bg-brand-light">Yorqin brand</div>
<div class="bg-brand-dark">To'q brand</div>`,
        tips: [
            "Rang nomlarini aniq va tushunarli qilish",
            "Rang gradatsiyalarini to'g'ri tanlash",
            "Brand guide'ga moslashtirish",
            "Ranglar soni optimal bo'lishi"
        ]
    },
    {
        id: 3,
        title: "Rang Opacity va Transparentlik",
        description: "Ranglar uchun opacity va transparentlik sozlamalari",
        examples: [
            "Opacity modifikatorlari",
            "Transparentlik darajalari",
            "Background opacity",
            "Text opacity"
        ],
        codeExample: `<!-- Rang opacity -->
<div class="bg-blue-500/75">75% opacity blue</div>
<div class="bg-red-500/50">50% opacity red</div>

<!-- Text opacity -->
<p class="text-black/60">60% opacity text</p>

<!-- Background va border -->
<div class="bg-white/30 border-black/25 backdrop-blur-sm">
    Glassmorphism effect
</div>`,
        tips: [
            "Opacity qiymatlarini mantiqiy tanlash",
            "Kontrast nisbatlarini saqlash",
            "Performance ta'sirini hisobga olish",
            "Overlay effectlarni to'g'ri qo'llash"
        ]
    },
    {
        id: 4,
        title: "Linear Gradientlar",
        description: "Chiziqli gradient effektlarini yaratish va sozlash",
        examples: [
            "Asosiy gradient yo'nalishlari",
            "Multiple color stops",
            "Gradient intensivligi",
            "Custom gradient yo'nalishlari"
        ],
        codeExample: `<!-- Asosiy gradientlar -->
<div class="bg-gradient-to-r from-blue-500 to-purple-500">
    Right gradient
</div>

<!-- Multiple color stops -->
<div class="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
    Multiple colors
</div>

<!-- Custom gradient -->
<div class="bg-[linear-gradient(45deg,#ff0000,#00ff00)]">
    Custom angle
</div>`,
        tips: [
            "Gradient yo'nalishini UI dizayniga moslash",
            "Ranglar o'tishini yumshoq qilish",
            "Kontrast darajasini saqlash",
            "Mobile devicelarda testlash"
        ]
    },
    {
        id: 5,
        title: "Radial Gradientlar",
        description: "Radiusli gradient effektlarini yaratish va sozlash",
        examples: [
            "Doiraviy gradientlar",
            "Elliptik gradientlar",
            "Gradient pozitsiyalari",
            "Size va shape sozlamalari"
        ],
        codeExample: `<!-- Radial gradient -->
<div class="bg-[radial-gradient(ellipse_at_center,#3B82F6,#1E3A8A)]">
    Radial gradient
</div>

<!-- Custom radial gradient -->
<div class="bg-[radial-gradient(circle_at_top_right,#F59E0B,#B45309)]">
    Positioned gradient
</div>

<!-- Complex gradient -->
<div class="bg-[radial-gradient(circle_farthest-corner_at_10%_20%,#FF0080_0%,#7645D9_100%)]">
    Complex radial
</div>`,
        tips: [
            "Gradient markazini to'g'ri joylashtirish",
            "Rang o'tishlarini optimallash",
            "Performance masalalarini hisobga olish",
            "Browser compatibility'ni tekshirish"
        ]
    },
    {
        id: 6,
        title: "Rang Funksiyalari va Utilities",
        description: "Ranglar bilan ishlash uchun qo'shimcha funksional imkoniyatlar",
        examples: [
            "Mix blend modes",
            "Color adjustments",
            "Filter effects",
            "Background blending"
        ],
        codeExample: `<!-- Mix blend modes -->
<div class="mix-blend-multiply bg-blue-500">
    Multiply blend
</div>

<!-- Filter effects -->
<div class="backdrop-blur-lg backdrop-brightness-150">
    Blur effect
</div>

<!-- Background blend -->
<div class="bg-blend-overlay bg-gradient-to-r from-purple-500 to-pink-500">
    Blend overlay
</div>`,
        tips: [
            "Effektlarni moderatsiya bilan ishlatish",
            "Browser supportni tekshirish",
            "Performance optimizatsiyasi",
            "Accessibility masalalarini hisobga olish"
        ]
    }
];

export default dataRanglarGradientlar;
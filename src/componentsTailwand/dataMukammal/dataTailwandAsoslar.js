const dataTailwandAsoslar = [
    {
        "id": 1,
        "title": "Tailwind CSS asoslari",
        "description": "Tailwind CSS - utility-first CSS frameworki haqida asosiy tushunchalar",
        "examples": [
            "Utility-first yondashuvi",
            "Responsive dizayn",
            "Component-based yondashuv",
            "Dark mode qo'llab-quvvatlash"
        ],
        "codeExample": `// Tailwind CSS ni NPM orqali o'rnatish
npm install -D tailwindcss
npx tailwindcss init

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;`,
        "tips": [
            "Tailwind CSS dokumentatsiyasini o'rganish",
            "Utility classlarni to'g'ri tanlash",
            "Performance optimizatsiyasi",
            "Best practices ga amal qilish"
        ]
    },
    {
        "id": 2,
        "title": "O'rnatish va Konfiguratsiya",
        "description": "Tailwind CSS ni loyihaga qo'shish va sozlash yo'llari",
        "examples": [
            "NPM orqali o'rnatish",
            "CDN orqali ulash",
            "PostCSS bilan integratsiya",
            "Framework integratsiyasi"
        ],
        "codeExample": `<!-- CDN orqali ulash -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- PostCSS bilan ishlatish -->
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

<!-- Framework bilan ishlatish (Next.js misoli) -->
// next.config.js
module.exports = {
  future: {
    webpack5: true,
  },
}`,
        "tips": [
            "Loyiha turiga qarab o'rnatish usulini tanlash",
            "Development va production muhitlarini to'g'ri sozlash",
            "Build jarayonini optimizatsiya qilish",
            "Version compatibility ni tekshirish"
        ]
    },
    {
        "id": 3,
        "title": "Utility-first Konsepsiyasi",
        "description": "Tailwind CSS ning asosiy utility-first yondashuvi",
        "examples": [
            "Spacing utilities",
            "Flexbox utilities",
            "Grid utilities",
            "Color utilities"
        ],
        "codeExample": `<!-- Utility classlar misoli -->
<div class="flex items-center justify-between p-4 bg-blue-500 text-white">
  <h1 class="text-2xl font-bold">
    Sarlavha
  </h1>
  <button class="px-4 py-2 bg-white text-blue-500 rounded-lg 
    hover:bg-blue-100 transition duration-300">
    Tugma
  </button>
</div>

<!-- Custom utility yaratish -->
@layer utilities {
  .custom-class {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
  }
}`,
        "tips": [
            "Utility classlarni mantiqiy guruhlashtirish",
            "Custom utilitylar yaratish",
            "Responsive classlardan foydalanish",
            "Code maintainability ni ta'minlash"
        ]
    },
    {
        "id": 4,
        "title": "Tailwind CLI va Konfiguratsiya",
        "description": "Tailwind CLI va konfiguratsiya fayli bilan ishlash",
        "examples": [
            "CLI buyruqlari",
            "Config file sozlamalari",
            "Custom theme",
            "Plugin qo'shish"
        ],
        "codeExample": `// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // yoki 'media'
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#3b82f6',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    }
  },
}`,
        "tips": [
            "Config faylini loyiha talablariga moslashtirish",
            "Custom theme va variantlarni to'g'ri sozlash",
            "Kerakli pluginlarni qo'shish",
            "Build jarayonini optimizatsiya qilish"
        ]
    },
    {
        "id": 5,
        "title": "Best Practices va Optimizatsiya",
        "description": "Tailwind CSS da best practices va optimizatsiya usullari",
        "examples": [
            "Code organization",
            "Performance optimization",
            "Responsive design",
            "Accessibility"
        ],
        "codeExample": `// Component yaratish
const Button = ({ children, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-lg transition duration-300';
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };
  
  return (
    <button className={\`\${baseClasses} \${variants[variant]}\`}>
      {children}
    </button>
  );
};

// PurgeCSS konfiguratsiyasi
// tailwind.config.js
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['bg-blue-500', 'bg-red-500'],
    },
  },
}`,
        "tips": [
            "Component-based yondashuvni qo'llash",
            "Utility classlarni mantiqiy tashkil etish",
            "Performance optimizatsiyasi usullarini qo'llash",
            "Accessibility standartlariga rioya qilish"
        ]
    }
];

export default dataTailwandAsoslar;
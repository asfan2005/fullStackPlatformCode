const dataTailwandCssIntegrat = [
    {
        "id": 1,
        "title": "Tailwind CSS Asosiy Integratsiya",
        "desc": "Tailwind CSS ni turli framework va toollar bilan integratsiya qilish",
        "items": [
            {
                "name": "React Integratsiyasi",
                "description": "React loyihalariga Tailwind CSS ni o'rnatish va sozlash",
                "examples": [
                    "Create React App",
                    "Vite + React",
                    "Next.js",
                    "Remix"
                ],
                "codeExample": `// React loyihasi uchun o'rnatish
// Terminal buyruqlari:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;`,
                "tips": [
                    "PostCSS konfiguratsiyasini to'g'ri sozlash",
                    "Content paths'larni to'g'ri ko'rsatish",
                    "Hot reload'ni enable qilish",
                    "Development tools'larni sozlash"
                ]
            },
            {
                "name": "Vue.js Integratsiyasi",
                "description": "Vue.js loyihalariga Tailwind CSS ni ulash",
                "examples": [
                    "Vue CLI",
                    "Vite + Vue",
                    "Nuxt.js",
                    "Vue 2/3"
                ],
                "codeExample": `// Vue.js loyihasi uchun o'rnatish
// Terminal buyruqlari:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// style.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// Vue komponenti
<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-gray-900">
      Vue + Tailwind
    </h1>
  </div>
</template>`,
                "tips": [
                    "Vue CLI plaginlarini to'g'ri sozlash",
                    "Single File Component'lar bilan ishlash",
                    "Scoped styles'ni to'g'ri qo'llash",
                    "Production build optimizatsiyasi"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Build Tools va Konfiguratsiya",
        "desc": "Tailwind CSS build tools va konfiguratsiya sozlamalari",
        "items": [
            {
                "name": "Build Process",
                "description": "Tailwind CSS build jarayoni va optimizatsiya",
                "examples": [
                    "PostCSS",
                    "Webpack",
                    "Vite",
                    "Rollup"
                ],
                "codeExample": `// PostCSS konfiguratsiyasi
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: 'default',
      }
    } : {})
  }
}

// Webpack konfiguratsiyasi
module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      }
    ],
  },
}`,
                "tips": [
                    "PurgeCSS ni to'g'ri sozlash",
                    "Development va production mode'larni ajratish",
                    "Cache'ni to'g'ri boshqarish",
                    "Bundle size'ni optimizatsiya qilish"
                ]
            },
            {
                "name": "Custom Konfiguratsiya",
                "description": "Tailwind CSS ni loyiha talablariga moslashtirish",
                "examples": [
                    "Custom theme",
                    "Custom plugins",
                    "Preset configs",
                    "Extended utilities"
                ],
                "codeExample": `// Custom konfiguratsiya
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0066cc',
          dark: '#004d99',
        },
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}`,
                "tips": [
                    "Theme extending usullarini qo'llash",
                    "Custom utility'lar yaratish",
                    "Prefix va suffix'larni sozlash",
                    "Variant'larni to'g'ri sozlash"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Tailwind CSS Advanced Features",
        "desc": "Tailwind CSS ning ilg'or xususiyatlari va komponentlari",
        "items": [
            {
                "name": "Responsive Design",
                "description": "Tailwind CSS yordamida adaptiv dizayn yaratish",
                "examples": [
                    "Mobile First",
                    "Breakpoints",
                    "Container Queries",
                    "Dynamic Layouts"
                ],
                "codeExample": `// Responsive dizayn misollari
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-lg shadow">
    <h2 class="text-lg md:text-xl lg:text-2xl font-bold">
      Responsive Card
    </h2>
    <p class="mt-2 text-sm md:text-base">
      Bu karta turli o'lchamlarga moslashadi
    </p>
  </div>
</div>

// Custom breakpoint qo'shish
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  }
}`,
                "tips": [
                    "Mobile-first yondashuvni qo'llash",
                    "Container so'rovlaridan foydalanish",
                    "Breakpoint'larni to'g'ri tanlash",
                    "Performance optimizatsiyasi"
                ]
            },
            {
                "name": "Dark Mode",
                "description": "Tailwind CSS bilan qorong'u rejimni qo'llash",
                "examples": [
                    "Manual Dark Mode",
                    "System Dark Mode",
                    "Custom Dark Theme",
                    "Dynamic Switching"
                ],
                "codeExample": `// Dark mode konfiguratsiyasi
// tailwind.config.js
module.exports = {
  darkMode: 'class', // yoki 'media'
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          text: '#ffffff',
          primary: '#bb86fc',
        },
      },
    },
  },
}

// Dark mode komponenti
<div class="bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text">
  <h1 class="text-2xl font-bold">
    Qorong'u Rejim
  </h1>
  <button class="px-4 py-2 bg-primary dark:bg-dark-primary">
    Tugma
  </button>
</div>`,
                "tips": [
                    "Dark mode strategiyasini tanlash",
                    "Ranglar palitrasini sozlash",
                    "User preferences'ni hisobga olish",
                    "Smooth transitions qo'shish"
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Performance Optimizatsiya",
        "desc": "Tailwind CSS loyihalarini optimizatsiya qilish usullari",
        "items": [
            {
                "name": "JIT Compiler",
                "description": "Just-in-Time kompilyatsiya va uning afzalliklari",
                "examples": [
                    "Dynamic Utilities",
                    "Build Time",
                    "File Size",
                    "Development Experience"
                ],
                "codeExample": `// JIT mode konfiguratsiyasi
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Dynamic utilities
      spacing: {
        '[1-100]': ({ value }) => \`\${value}px\`,
      },
    },
  },
}`,
                "tips": [
                    "JIT mode'ni to'g'ri sozlash",
                    "Dynamic utility'lardan foydalanish",
                    "Build vaqtini optimizatsiya qilish",
                    "Development tajribasini yaxshilash"
                ]
            }
        ]
    }
];

export default dataTailwandCssIntegrat;
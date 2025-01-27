const dataMaxsusConfigPlugins = [
    {
        "id": 1,
        "title": "Tailwind CSS Maxsus Konfiguratsiya",
        "desc": "Tailwind CSS ni loyiha talablariga moslashtirishning keng qamrovli usullari",
        "items": [
            {
                "name": "Theme Customization",
                "description": "Tailwind CSS mavzusini to'liq sozlash va moslash",
                "examples": [
                    "Custom Colors",
                    "Typography Settings",
                    "Spacing Scale",
                    "Border Radius"
                ],
                "codeExample": `// Theme sozlamalari
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      'asosiy': '#1E40AF',
      'ikkilamchi': '#60A5FA',
      'accent': '#EAB308',
    },
    extend: {
      fontSize: {
        'mega': ['4rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '15': '3.75rem',
        '128': '32rem',
      },
      borderRadius: {
        'maxsus': '1.5rem',
      },
    },
  },
}`,
                "tips": [
                    "Base theme'ni to'liq qayta yozish",
                    "Mavjud theme'ni kengaytirish",
                    "Custom qiymatlarni qo'shish",
                    "Default qiymatlarni o'zgartirish"
                ]
            },
            {
                "name": "Custom Utilities",
                "description": "Maxsus utility klasslarni yaratish va sozlash",
                "examples": [
                    "Custom Components",
                    "Utility Variants",
                    "Complex Utilities",
                    "Dynamic Classes"
                ],
                "codeExample": `// Custom utility'lar yaratish
@layer utilities {
  .text-shadow-sm {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

// Plugin orqali utility qo'shish
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ]
}`,
                "tips": [
                    "Utility'larni @layer ichida yaratish",
                    "Prefix va suffix'larni to'g'ri qo'llash",
                    "Responsive variantlarni qo'shish",
                    "CSS custom property'lardan foydalanish"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Tailwind CSS Plugins",
        "desc": "Tailwind CSS uchun rasmiy va community pluginlardan foydalanish",
        "items": [
            {
                "name": "Official Plugins",
                "description": "Tailwind CSS jamoasi tomonidan yaratilgan rasmiy plaginlar",
                "examples": [
                    "@tailwindcss/forms",
                    "@tailwindcss/typography",
                    "@tailwindcss/aspect-ratio",
                    "@tailwindcss/line-clamp"
                ],
                "codeExample": `// Rasmiy plaginlarni o'rnatish
npm install @tailwindcss/forms @tailwindcss/typography

// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}

// Typography plugin misoli
<article class="prose prose-lg prose-blue">
  <h1>Sarlavha</h1>
  <p>Matn kontenti...</p>
</article>`,
                "tips": [
                    "Plaginlarni to'g'ri o'rnatish",
                    "Konfiguratsiya parametrlarini sozlash",
                    "Plugin konfliktlarini hal qilish",
                    "Performance ta'sirini tekshirish"
                ]
            },
            {
                "name": "Custom Plugins",
                "description": "O'z Tailwind CSS plaginlaringizni yaratish",
                "examples": [
                    "Component Plugins",
                    "Utility Plugins",
                    "Variant Plugins",
                    "Theme Plugins"
                ],
                "codeExample": `// Custom plugin yaratish
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
        '.card-hover': {
          '&:hover': {
            transform: 'scale(1.02)',
            transition: 'transform 0.2s ease-in-out',
          },
        },
      })
    }),
    
    // Variant plugin
    plugin(function({ addVariant }) {
      addVariant('third', '&:nth-child(3)')
      addVariant('hovered-sibling', '&:hover ~ &')
    })
  ],
}`,
                "tips": [
                    "Plugin API'dan to'g'ri foydalanish",
                    "Theme qiymatlariga murojaat qilish",
                    "Variantlarni to'g'ri qo'shish",
                    "Plaginni test qilish va hujjatlashtirish"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Tailwind CSS Performance Optimizatsiya",
        "desc": "Tailwind CSS loyihangizni optimallashtirishning eng yaxshi usullari",
        "items": [
            {
                "name": "JIT (Just-in-Time) Mode",
                "description": "Real vaqtda CSS generatsiya qilish orqali production build hajmini kamaytirish",
                "examples": [
                    "Dynamic Utility Generation",
                    "Arbitrary Values",
                    "Performance Boost",
                    "Development Experience"
                ],
                "codeExample": `// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      // JIT mode bilan arbitrary qiymatlar
      spacing: {
        '[500px]': '500px',
      },
    }
  }
}`,
                "tips": [
                    "JIT mode'ni to'g'ri sozlash",
                    "PurgeCSS konfiguratsiyasi",
                    "Build vaqtini optimallashtirish",
                    "Development va production farqlari"
                ]
            },
            {
                "name": "Advanced Configurations",
                "description": "Murakkab va kengaytirilgan Tailwind CSS sozlamalari",
                "examples": [
                    "Custom Variants",
                    "Complex Animations",
                    "Responsive Design",
                    "Dark Mode"
                ],
                "codeExample": `// Murakkab animatsiyalar
@layer utilities {
  .animate-bounce-slow {
    animation: bounce 3s infinite;
  }
}

// Dark mode sozlamalari
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-primary': '#1a1a1a',
        'dark-secondary': '#2d2d2d',
      },
    },
  },
}`,
                "tips": [
                    "Custom variantlarni qo'llash",
                    "Responsive dizayn strategiyasi",
                    "Dark mode implementatsiyasi",
                    "Animation optimizatsiyasi"
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Tailwind CSS Integration",
        "desc": "Tailwind CSS ni turli framework va toollar bilan integratsiya qilish",
        "items": [
            {
                "name": "Framework Integration",
                "description": "Tailwind CSS ni React, Vue, Angular va boshqa frameworklar bilan ishlatish",
                "examples": [
                    "React Integration",
                    "Vue.js Setup",
                    "Next.js Configuration",
                    "Angular Implementation"
                ],
                "codeExample": `// React komponenti misoli
function Card({ title, content }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}`,
                "tips": [
                    "Framework specific setup",
                    "Component strukturasi",
                    "Build process optimizatsiyasi",
                    "Best practices"
                ]
            },
            {
                "name": "Build Tools",
                "description": "Tailwind CSS build va development toollarini sozlash",
                "examples": [
                    "PostCSS Configuration",
                    "Webpack Setup",
                    "Vite Integration",
                    "Rollup Config"
                ],
                "codeExample": `// PostCSS config
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}`,
                "tips": [
                    "Build pipeline optimizatsiyasi",
                    "Development workflow",
                    "Production build sozlamalari",
                    "Performance monitoring"
                ]
            }
        ]
    }
];

export default dataMaxsusConfigPlugins;
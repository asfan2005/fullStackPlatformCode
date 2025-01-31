const dataCustomization = [
    {
        id: 1,
        title: "Theme Configuration",
        codeExample: `// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',
                secondary: '#64748b',
                brand: {
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    900: '#0c4a6e',
                }
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Lexend', 'sans-serif'],
            }
        }
    }
}`
    },
    {
        id: 2,
        title: "Custom Variants",
        codeExample: `// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
    variants: {
        extend: {
            backgroundColor: ['active', 'disabled'],
            opacity: ['disabled'],
        },
    },
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('optional', '&:optional')
            addVariant('hocus', ['&:hover', '&:focus'])
            addVariant('supports-grid', '@supports (display: grid)')
        })
    ]
}`
    },
    {
        id: 3,
        title: "Custom Plugin",
        codeExample: `// custom-plugin.js
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
    const newUtilities = {
        '.text-shadow-sm': {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
        },
    }
    addUtilities(newUtilities)
})`
    },
    {
        id: 4,
        title: "Prefix Configuration",
        codeExample: `// tailwind.config.js
module.exports = {
    prefix: 'tw-',
    important: true,
    corePlugins: {
        preflight: false,
    },
    plugins: [
        function({ addVariant }) {
            addVariant('important', ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = \`.\${rule.selector.slice(1)} !important\`
                })
            })
        }
    ]
}`
    },
    {
        id: 5,
        title: "JIT Configuration",
        codeExample: `// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.{js,jsx,ts,tsx}',
            './public/index.html',
        ],
        options: {
            safelist: [
                /^bg-/,
                /^text-/,
            ]
        }
    },
    theme: {
        extend: {}
    }
}`
    }
];

export default dataCustomization;
const dataPerformance = [
    {
        id: 1,
        title: "PurgeCSS Integration",
        codeExample: `// tailwind.config.js
module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.{js,jsx,ts,tsx}',
            './public/index.html',
        ],
        options: {
            safelist: [
                /^bg-/,
                /^text-opacity-/,
                'shadow-lg'
            ],
            blocklist: [
                /^debug-/
            ]
        }
    }
}`
    },
    {
        id: 2,
        title: "JIT Compiler Setup",
        codeExample: `// tailwind.config.js
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    }
}`
    },
    {
        id: 3,
        title: "Optimization Strategies",
        codeExample: `// tailwind.config.js
module.exports = {
    // Disable unused core plugins
    corePlugins: {
        float: false,
        objectFit: false,
        objectPosition: false,
    },
    // Disable unused variants
    variants: {
        extend: {
            backgroundColor: ['active'],
            opacity: ['disabled'],
        },
    },
    // Minimize redundant utilities
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        }
    }
}`
    },
    {
        id: 4,
        title: "Bundle Size Optimization",
        codeExample: `// webpack.config.js
module.exports = {
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 50000,
            minChunks: 1,
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
}`
    },
    {
        id: 5,
        title: "Caching Strategies",
        codeExample: `// next.config.js or similar
module.exports = {
    // Enable caching in production
    generateBuildId: () => 'build-id',
    
    // Configure cache headers
    async headers() {
        return [
            {
                source: '/css/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            }
        ]
    },
    
    // Configure build output
    experimental: {
        optimizeCss: true,
        optimizeImages: true
    }
}`
    },
    {
        id: 6,
        title: "Production Optimization",
        codeExample: `// postcss.config.js
module.exports = {
    plugins: [
        'tailwindcss',
        'autoprefixer',
        'cssnano',
        [
            '@fullhuman/postcss-purgecss',
            {
                content: [
                    './src/**/*.{js,jsx,ts,tsx}',
                    './public/index.html'
                ],
                defaultExtractor: content => 
                    content.match(/[\\w-/:]+(?<!:)/g) || []
            }
        ]
    ]
}`
    }
];

export default dataPerformance;
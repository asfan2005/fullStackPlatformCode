const dataModullarPaketlar = [
    {
        id: 1,
        title: "JavaScript Modullari",
        description: "ES6 modullar tizimi va ularning ishlashi",
        examples: [
            {
                name: "Modul eksport va import",
                code: `// matematik.js
export const qoshish = (a, b) => a + b;
export const ayrish = (a, b) => a - b;
export default class Kalkulator {
    static kopaytirish(a, b) {
        return a * b;
    }
}

// app.js
import Kalkulator, { qoshish, ayrish } from './matematik.js';

console.log(qoshish(5, 3));  // 8
console.log(ayrish(10, 4));  // 6
console.log(Kalkulator.kopaytirish(2, 6));  // 12`,
                explanation: "JavaScript modullarini yaratish va ulardan foydalanish",
                result: "Kod modullashtirish va qayta ishlatish"
            }
        ]
    },
    {
        id: 2,
        title: "NPM (Node Package Manager)",
        description: "NPM orqali paketlarni o'rnatish va boshqarish",
        examples: [
            {
                name: "NPM asoslari",
                code: `// package.json fayli
{
    "name": "my-project",
    "version": "1.0.0",
    "dependencies": {
        "axios": "^0.24.0",
        "lodash": "^4.17.21"
    },
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
    }
}

// Terminal buyruqlari
npm init  // Yangi loyiha yaratish
npm install axios  // Paket o'rnatish
npm install --save-dev nodemon  // Development paketi o'rnatish
npm run start  // Loyihani ishga tushirish`,
                explanation: "NPM bilan ishlash asoslari",
                result: "Paketlarni boshqarish va loyiha sozlash"
            }
        ]
    },
    {
        id: 3,
        title: "Webpack Asoslari",
        description: "Webpack orqali loyihani bundle qilish",
        examples: [
            {
                name: "Webpack konfiguratsiyasi",
                code: `// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}`,
                explanation: "Webpack konfiguratsiyasi va bundling",
                result: "Loyihani production uchun optimize qilish"
            }
        ]
    },
    {
        id: 4,
        title: "Animatsiya Paketi Bilan Ishlash",
        description: "GSAP animatsiya kutubxonasidan foydalanish",
        examples: [
            {
                name: "GSAP animatsiyalari",
                code: `// GSAP ni o'rnatish
npm install gsap

// JavaScript kod
import { gsap } from 'gsap';

// Oddiy animatsiya
gsap.to(".box", {
    duration: 2,
    x: 100,
    y: 50,
    rotation: 360,
    scale: 1.5
});

// Timeline animatsiya
const timeline = gsap.timeline();
timeline
    .from(".header", { y: -100, opacity: 0 })
    .from(".content", { x: -100, opacity: 0 })
    .from(".footer", { y: 100, opacity: 0 });

// Scroll trigger
gsap.from(".animate-on-scroll", {
    scrollTrigger: {
        trigger: ".animate-on-scroll",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    opacity: 0,
    y: 100
});`,
                explanation: "GSAP animatsiya kutubxonasi bilan ishlash",
                result: "Professional web animatsiyalar yaratish"
            }
        ]
    },
    {
        id: 5,
        title: "Parcel Bundler",
        description: "Parcel orqali zero-configuration bundling",
        examples: [
            {
                name: "Parcel asoslari",
                code: `// package.json
{
    "scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html"
    }
}

// index.html
<!DOCTYPE html>
<html>
<head>
    <title>Parcel Loyiha</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="./src/index.js"></script>
</body>
</html>

// Terminal buyruqlari
npm install --save-dev parcel
npm run start  // Development server
npm run build  // Production build`,
                explanation: "Parcel bundler bilan ishlash",
                result: "Tez va oson loyiha bundling"
            }
        ]
    }
];

export default dataModullarPaketlar;
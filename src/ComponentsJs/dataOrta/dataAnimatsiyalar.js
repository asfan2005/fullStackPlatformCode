const animationData = [
    {
        id: 1,
        title: "CSS Animatsiya asoslari",
        description: "CSS yordamida elementlarni animatsiya qilishning asosiy usullari",
        examples: [
            {
                name: "Oddiy animatsiya",
                code: `@keyframes harakatlan {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
}

.element {
    animation: harakatlan 2s infinite;
}`,
                explanation: "@keyframes va animation xususiyati yordamida animatsiya yaratish"
            },
            {
                name: "Transition effekti",
                code: `.tugma {
    background: blue;
    transition: all 0.3s ease;
}
.tugma:hover {
    background: red;
    transform: scale(1.1);
}`,
                explanation: "Transition yordamida yumshoq o'tishlar yaratish"
            }
        ]
    },
    {
        id: 2,
        title: "Transform xususiyatlari",
        description: "Elementlarni aylantirish, masshtablash va siljitish uchun transform xususiyatlari",
        examples: [
            {
                name: "Transform turlari",
                code: `.element {
    transform: rotate(45deg);
    transform: scale(1.5);
    transform: translate(50px, 20px);
    transform: skew(10deg);
}`,
                explanation: "Asosiy transform funksiyalaridan foydalanish"
            },
            {
                name: "3D transformlar",
                code: `.kub {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateY(45deg);
}`,
                explanation: "3D effektlar yaratish uchun transformlar"
            }
        ]
    },
    {
        id: 3,
        title: "Animatsiya timing funksiyalari",
        description: "Animatsiyalarning tezlik va harakat traektoriyasini boshqarish",
        examples: [
            {
                name: "Timing funksiyalari",
                code: `.element {
    transition-timing-function: ease;
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
                explanation: "Turli xil animatsiya tezlik funksiyalari"
            },
            {
                name: "Animatsiya davomiyligi",
                code: `.element {
    animation-duration: 2s;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}`,
                explanation: "Animatsiya parametrlarini sozlash"
            }
        ]
    },
    {
        id: 4,
        title: "JavaScript bilan animatsiyalar",
        description: "JavaScript yordamida dinamik animatsiyalar yaratish",
        examples: [
            {
                name: "requestAnimationFrame",
                code: `let position = 0; // position o'zgaruvchisini aniqlaymiz

function animate() {
    element.style.transform = \`translateX(\${position}px)\`;
    position += 2;
    if (position <= 300) { // animatsiyani cheklash
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);`,
                explanation: "Yuqori samarali animatsiyalar uchun requestAnimationFrame"
            },
            {
                name: "Web Animations API",
                code: `element.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(300px)' }
], {
    duration: 1000,
    iterations: Infinity
});`,
                explanation: "Web Animations API yordamida animatsiyalar yaratish"
            }
        ]
    },
    {
        id: 5,
        title: "Zamonaviy animatsiya kutubxonalari",
        description: "Mashhur animatsiya kutubxonalari bilan ishlash",
        examples: [
            {
                name: "GSAP kutubxonasi",
                code: `gsap.to(".element", {
    duration: 1,
    x: 100,
    y: 50,
    rotation: 360,
    ease: "power2.inOut"
});`,
                explanation: "GSAP animatsiya kutubxonasidan foydalanish"
            },
            {
                name: "Framer Motion (React)",
                code: `<motion.div
    animate={{ 
        scale: [1, 2, 1],
        rotate: [0, 180, 360]
    }}
    transition={{ duration: 2 }}
>
    Animatsiya
</motion.div>`,
                explanation: "React loyihalar uchun Framer Motion"
            }
        ]
    },
    {
        id: 6,
        title: "Murakkab animatsiya effektlari",
        description: "Ilg'or animatsiya texnikalari va effektlari",
        examples: [
            {
                name: "Paralaks effekti",
                code: `window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    element.style.transform = 
        \`translateY(\${offset * 0.5}px)\`;
});`,
                explanation: "Scroll paytida paralaks effektini yaratish"
            },
            {
                name: "Animatsiya ketma-ketligi",
                code: `const timeline = gsap.timeline();

timeline
    .to(".element1", { x: 100, duration: 1 })
    .to(".element2", { y: 50, duration: 1 })
    .to(".element3", { rotation: 360, duration: 1 });`,
                explanation: "Ketma-ket animatsiyalarni yaratish",
            }
        ]
    }
];

export default animationData;
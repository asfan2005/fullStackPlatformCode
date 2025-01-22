const dataDebugKonsol = [
    {
        id: 1,
        title: "Console Metodlari",
        description: "JavaScript dasturlashda debugging uchun console metodlaridan foydalanish",
        examples: [
            {
                name: "console.log() va Variantlari",
                code: `// Oddiy console.log
console.log("Oddiy xabar");

// Bir nechta qiymatlarni chiqarish
console.log("Ism:", "Ali", "Yosh:", 25);

// Object va Array larni chiqarish
const user = { ism: "Vali", yosh: 30 };
console.log("Foydalanuvchi:", user);

// console.table() bilan jadval ko'rinishida chiqarish
const users = [
    { id: 1, ism: "Ali", yosh: 25 },
    { id: 2, ism: "Vali", yosh: 30 }
];
console.table(users);`,
                explanation: "Console metodlarining asosiy turlari va ulardan foydalanish",
                result: "Konsolda turli formatdagi ma'lumotlarni ko'rsatish"
            },
            {
                name: "Debug va Trace",
                code: `// console.debug()
console.debug("Debug xabari");

// console.trace() - chaqiruvlar stackini ko'rsatadi
function func1() {
    func2();
}
function func2() {
    console.trace("Trace natijasi");
}
func1();`,
                explanation: "Debug va trace metodlari yordamida kodni tekshirish",
                result: "Debug ma'lumotlari va chaqiruvlar stackini ko'rsatish"
            }
        ]
    },
    {
        id: 2,
        title: "Xatolarni Aniqlash",
        description: "Try-catch va debugging metodlari",
        examples: [
            {
                name: "Try-Catch Bloki",
                code: `try {
    // Xato yuzaga kelishi mumkin bo'lgan kod
    const natija = notAniqFunksiya();
} catch (error) {
    console.error("Xato yuz berdi:", error.message);
    console.error("Xato stack:", error.stack);
}

// Custom xato yaratish
try {
    throw new Error("Maxsus xato xabari");
} catch (error) {
    console.warn("Ogohlantirish:", error.message);
}`,
                explanation: "Xatolarni ushlash va ular bilan ishlash",
                result: "Xato xabarlarini konsolda ko'rsatish"
            }
        ]
    },
    {
        id: 3,
        title: "Performance Debugging",
        description: "Kod ishlash tezligini o'lchash va optimizatsiya",
        examples: [
            {
                name: "console.time()",
                code: `// Kod ishlash vaqtini o'lchash
console.time("Sikl");
for(let i = 0; i < 1000000; i++) {
    // Biror operatsiya
}
console.timeEnd("Sikl");

// Murakkab operatsiyalarni tekshirish
console.time("Array to'ldirish");
const kattaArray = new Array(1000000).fill(0);
console.timeEnd("Array to'ldirish");`,
                explanation: "Kod qismlarining ishlash vaqtini o'lchash",
                result: "Kod bajarilish vaqtini millisekundlarda ko'rsatish"
            }
        ]
    },
    {
        id: 4,
        title: "Breakpoint va Debugger",
        description: "Kodni qadam-baqadam tekshirish",
        examples: [
            {
                name: "Debugger Statement",
                code: `function murakkabFunksiya(n) {
    let natija = 0;
    debugger; // Kod bu yerda to'xtaydi
    for(let i = 0; i < n; i++) {
        natija += i;
    }
    return natija;
}

// Funksiyani chaqirish
murakkabFunksiya(5);`,
                explanation: "Debugger yordamida kodni to'xtatish va tekshirish",
                result: "Kod bajarilishini to'xtatib, qiymatlarni tekshirish imkoniyati"
            }
        ]
    },
    {
        id: 5,
        title: "Console Formatlash",
        description: "Konsolda chiroyli ma'lumotlar chiqarish",
        examples: [
            {
                name: "Styled Console",
                code: `// Ranglar va stillar
console.log(
    "%cKatta Xabar%c Normal xabar", 
    "color: red; font-size: 20px; font-weight: bold;",
    "color: black;"
);

// Guruhlar
console.group("Foydalanuvchi ma'lumotlari");
console.log("Ism: Ali");
console.log("Yosh: 25");
console.groupEnd();

// Custom counter
console.count("Tugma bosildi");
console.count("Tugma bosildi");
console.countReset("Tugma bosildi");`,
                explanation: "Konsolda ma'lumotlarni chiroyli formatlash",
                result: "Rangli va formatlangan konsol xabarlari"
            }
        ]
    }
];

export default dataDebugKonsol;
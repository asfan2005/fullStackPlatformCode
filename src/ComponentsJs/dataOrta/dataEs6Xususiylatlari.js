const dataEs6Xususiylatlari = [
    {
        id: 1,
        title: "Let va Const",
        description: "O'zgaruvchilarni e'lon qilishning zamonaviy usullari",
        examples: [
            {
                name: "Let va Const farqlari",
                code: `// Let - qayta qiymat berish mumkin
let yosh = 25;
yosh = 26;
console.log(yosh); // 26

// Const - o'zgarmas qiymat
const PI = 3.14;
// PI = 3.15; // Xato!

// Block scope
{
    let x = 10;
    const y = 20;
}
// console.log(x); // Xato! x bu yerda mavjud emas`,
                explanation: "Let va Const kalit so'zlarining ishlashi",
                result: "O'zgaruvchilarni to'g'ri e'lon qilish"
            }
        ]
    },
    {
        id: 2,
        title: "Arrow Functions",
        description: "Funksiyalarni yozishning qisqa usuli",
        examples: [
            {
                name: "Arrow funksiyalar",
                code: `// Oddiy funksiya
function qoshish(a, b) {
    return a + b;
}

// Arrow funksiya
const qoshish2 = (a, b) => a + b;

// Bir qatorli arrow funksiya
const kvadrat = x => x * x;

// Ko'p qatorli arrow funksiya
const tekshir = (son) => {
    if (son > 0) {
        return "Musbat";
    }
    return "Manfiy yoki nol";
};

// Array metodlari bilan
const sonlar = [1, 2, 3, 4];
const kvadratlar = sonlar.map(son => son * son);`,
                explanation: "Arrow funksiyalarning afzalliklari",
                result: "Funksiyalarni qisqa va aniq yozish"
            }
        ]
    },
    {
        id: 3,
        title: "Template Literals",
        description: "Stringlarni yaratishning zamonaviy usuli",
        examples: [
            {
                name: "Template stringlar",
                code: `// O'zgaruvchilarni string ichida ishlatish
const ism = 'Ali';
const yosh = 25;

// Eski usul
console.log('Salom, mening ismim ' + ism + ' va men ' + yosh + ' yoshdaman');

// Template literal
console.log(\`Salom, mening ismim \${ism} va men \${yosh} yoshdaman\`);

// Ko'p qatorli stringlar
const html = \`
    <div>
        <h1>\${ism}</h1>
        <p>Yosh: \${yosh}</p>
    </div>
\`;`,
                explanation: "Template literallarning qulayliklari",
                result: "Stringlarni qulay formatda yozish"
            }
        ]
    },
    {
        id: 4,
        title: "Destructuring",
        description: "Array va Objectlardan ma'lumotlarni ajratib olish",
        examples: [
            {
                name: "Destructuring assignment",
                code: `// Array destructuring
const sonlar = [1, 2, 3, 4, 5];
const [birinchi, ikkinchi, ...qolganlar] = sonlar;
console.log(birinchi); // 1
console.log(qolganlar); // [3, 4, 5]

// Object destructuring
const talaba = {
    ism: 'Vali',
    yosh: 20,
    manzil: {
        shahar: 'Toshkent',
        tuman: 'Chilonzor'
    }
};

const { ism, yosh, manzil: { shahar } } = talaba;
console.log(ism); // Vali
console.log(shahar); // Toshkent`,
                explanation: "Destructuring usullari",
                result: "Ma'lumotlarni oson ajratib olish"
            }
        ]
    },
    {
        id: 5,
        title: "Spread va Rest Operatorlari",
        description: "Array va Objectlarni kengaytirish va birlashtirish",
        examples: [
            {
                name: "Spread va Rest",
                code: `// Spread operator arraylar uchun
const sonlar1 = [1, 2, 3];
const sonlar2 = [4, 5, 6];
const hammaSonlar = [...sonlar1, ...sonlar2];
console.log(hammaSonlar); // [1, 2, 3, 4, 5, 6]

// Spread operator objectlar uchun
const talaba1 = { ism: 'Ali', yosh: 20 };
const talaba2 = { ...talaba1, kurs: 2 };
console.log(talaba2); // { ism: 'Ali', yosh: 20, kurs: 2 }

// Rest parameter
function yigindi(...sonlar) {
    return sonlar.reduce((a, b) => a + b, 0);
}
console.log(yigindi(1, 2, 3, 4)); // 10`,
                explanation: "Spread va Rest operatorlarining ishlashi",
                result: "Ma'lumotlarni moslashuvchan boshqarish"
            }
        ]
    },
    {
        id: 6,
        title: "Classes",
        description: "OOP dasturlash uchun klasslar",
        examples: [
            {
                name: "ES6 Klasslar",
                code: `// Klass yaratish
class Avtomobil {
    constructor(nomi, yili) {
        this.nomi = nomi;
        this.yili = yili;
    }

    malumot() {
        return \`\${this.nomi} \${this.yili} yil\`;
    }

    static taqqosla(avto1, avto2) {
        return avto1.yili - avto2.yili;
    }
}

// Inheritance
class ElektrAvto extends Avtomobil {
    constructor(nomi, yili, quvvat) {
        super(nomi, yili);
        this.quvvat = quvvat;
    }

    malumot() {
        return \`\${super.malumot()}, \${this.quvvat}kW\`;
    }
}`,
                explanation: "Klasslar va inheritance",
                result: "OOP printsiplarini qo'llash"
            }
        ]
    },
    {
        id: 7,
        title: "Promises va Async/Await",
        description: "Asinxron dasturlash",
        examples: [
            {
                name: "Promise va Async/Await",
                code: `// Promise yaratish
const malumotOlish = new Promise((resolve, reject) => {
    setTimeout(() => {
        const malumot = { id: 1, nom: 'Test' };
        resolve(malumot);
        // reject('Xato yuz berdi');
    }, 2000);
});

// Promise ishlatish
malumotOlish
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Async/Await
async function malumotniOl() {
    try {
        const javob = await fetch('https://api.example.com/data');
        const data = await javob.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}`,
                explanation: "Asinxron operatsiyalarni boshqarish",
                result: "Asinxron kod yozish"
            }
        ]
    },
    {
        id: 8,
        title: "Modules",
        description: "Kodni modullarga bo'lish",
        examples: [
            {
                name: "ES6 Modullar",
                code: `// utils.js
export const qoshish = (a, b) => a + b;
export const ayirish = (a, b) => a - b;

export default class Calculator {
    static kvadrat(x) {
        return x * x;
    }
}

// main.js
import Calculator, { qoshish, ayirish } from './utils.js';

console.log(qoshish(5, 3)); // 8
console.log(Calculator.kvadrat(4)); // 16`,
                explanation: "Modullar bilan ishlash",
                result: "Kodni tashkil qilish va qayta ishlatish"
            }
        ]
    },
    {
        id: 9,
        title: "Map va Set",
        description: "Yangi ma'lumot turlari",
        examples: [
            {
                name: "Map va Set kolleksiyalari",
                code: `// Map
const xodimlar = new Map();
xodimlar.set('ali', { lavozim: 'dasturchi', yosh: 25 });
xodimlar.set('vali', { lavozim: 'dizayner', yosh: 30 });

console.log(xodimlar.get('ali')); // { lavozim: 'dasturchi', yosh: 25 }
console.log(xodimlar.has('vali')); // true

// Set
const sonlar = new Set([1, 2, 2, 3, 3, 4]);
console.log(sonlar); // Set(4) {1, 2, 3, 4}

sonlar.add(5);
console.log(sonlar.has(2)); // true
sonlar.delete(1);`,
                explanation: "Map va Set kolleksiyalarining ishlashi",
                result: "Yangi ma'lumot turlarini qo'llash"
            }
        ]
    },
    {
        id: 10,
        title: "Default Parameters",
        description: "Funksiya parametrlarining standart qiymatlari",
        examples: [
            {
                name: "Standart parametrlar",
                code: `// Standart parametrli funksiya
function salomlash(ism = 'mehmon', vaqt = 'kun') {
    return \`Salom \${ism}, xayrli \${vaqt}!\`;
}

console.log(salomlash()); // "Salom mehmon, xayrli kun!"
console.log(salomlash('Ali', 'tong')); // "Salom Ali, xayrli tong!"

// Arrow funksiya bilan
const qoshish = (a = 0, b = 0) => a + b;
console.log(qoshish(5)); // 5
console.log(qoshish(5, 3)); // 8`,
                explanation: "Standart parametrlarning afzalliklari",
                result: "Funksiyalarni moslashuvchan qilish"
            }
        ]
    }
];

export default dataEs6Xususiylatlari;
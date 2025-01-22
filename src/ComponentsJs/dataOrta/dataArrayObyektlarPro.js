const arrayObjectData = [
    {
        id: 1,
        title: "Array (Massiv) asoslari",
        description: "JavaScript'da massivlar elementlar to'plamini saqlash uchun ishlatiladi",
        examples: [
            {
                name: "Massiv yaratish",
                code: `const mevalar = ['olma', 'nok', 'banan'];
const sonlar = [1, 2, 3, 4, 5];`,
                explanation: "Massivlar kvadrat qavslar [] yordamida yaratiladi"
            },
            {
                name: "Massiv metodlari",
                code: `mevalar.push('uzum');     // oxiriga qo'shish
mevalar.pop();           // oxiridan o'chirish
mevalar.unshift('anor'); // boshiga qo'shish
mevalar.shift();         // boshidan o'chirish`,
                explanation: "Massivlarni boshqarish uchun asosiy metodlar"
            }
        ]
    },
    {
        id: 2,
        title: "Object (Obyekt) asoslari",
        description: "Obyektlar key-value juftliklarini saqlash uchun ishlatiladi",
        examples: [
            {
                name: "Obyekt yaratish",
                code: `const talaba = {
    ism: 'Ali',
    yosh: 20,
    kurs: 2
};`,
                explanation: "Obyektlar jingalak qavslar {} yordamida yaratiladi"
            },
            {
                name: "Obyekt bilan ishlash",
                code: `talaba.ism;          // qiymatni olish
talaba['yosh'];      // alternative usul
talaba.fakultet = 'IT'; // yangi property qo'shish
delete talaba.kurs;   // property ni o'chirish`,
                explanation: "Obyekt xususiyatlarini boshqarish usullari"
            }
        ]
    },
    {
        id: 3,
        title: "Array va Object metodlari",
        description: "Keng qo'llaniladigan array va object metodlari",
        examples: [
            {
                name: "Array metodlari",
                code: `const sonlar = [1, 2, 3, 4, 5];
sonlar.map(son => son * 2);    // [2,4,6,8,10]
sonlar.filter(son => son > 2); // [3,4,5]
sonlar.reduce((a, b) => a + b); // 15`,
                explanation: "Massivlar bilan ishlash uchun zamonaviy metodlar"
            },
            {
                name: "Object metodlari",
                code: `const keys = Object.keys(talaba);    // kalitlar massivi
const values = Object.values(talaba); // qiymatlar massivi
const entries = Object.entries(talaba); // [key, value] juftliklari`,
                explanation: "Obyektlar bilan ishlash uchun foydali metodlar"
            }
        ]
    },
    {
        id: 4,
        title: "Array va Object destructuring",
        description: "Ma'lumotlarni qismlarga ajratish usullari",
        examples: [
            {
                name: "Array destructuring",
                code: `const [birinchi, ikkinchi] = mevalar;
const [x, ...qolganlar] = sonlar;`,
                explanation: "Massiv elementlarini alohida o'zgaruvchilarga ajratish"
            },
            {
                name: "Object destructuring",
                code: `const { ism, yosh } = talaba;
const { ism: studentName } = talaba;`,
                explanation: "Obyekt xususiyatlarini alohida o'zgaruvchilarga ajratish"
            }
        ]
    },
    {
        id: 5,
        title: "Array bilan amaliy misollar",
        description: "Kundalik dasturlashda Array bilan ishlashning amaliy misollari",
        examples: [
            {
                name: "Array elementlarini filtrlash va o'zgartirish",
                code: `const mahsulotlar = [
    { nomi: 'Telefon', narxi: 500 },
    { nomi: 'Noutbuk', narxi: 1200 },
    { nomi: 'Quloqchin', narxi: 50 }
];

// Arzon mahsulotlarni topish
const arzonMahsulotlar = mahsulotlar
    .filter(m => m.narxi < 1000)
    .map(m => m.nomi);
// Natija: ['Telefon', 'Quloqchin']`,
                explanation: "Filter va map metodlarini birlashtirish",
                result: "['Telefon', 'Quloqchin']"
            },
            {
                name: "Array elementlarini guruhlash",
                code: `const talabalar = [
    { ism: 'Ali', kurs: 2 },
    { ism: 'Vali', kurs: 1 },
    { ism: 'Guli', kurs: 2 }
];

const kurslarBoyicha = talabalar.reduce((acc, talaba) => {
    acc[talaba.kurs] = acc[talaba.kurs] || [];
    acc[talaba.kurs].push(talaba.ism);
    return acc;
}, {});`,
                explanation: "reduce metodi yordamida elementlarni guruhlash",
                result: "{ 1: ['Vali'], 2: ['Ali', 'Guli'] }"
            }
        ]
    },
    {
        id: 6,
        title: "Object bilan murakkab operatsiyalar",
        description: "Obyektlar bilan ishlashning ilg'or usullari",
        examples: [
            {
                name: "Obyektlarni birlashtirish",
                code: `const shaxs = { ism: 'Ali', yosh: 20 };
const talaba = { kurs: 2, fakultet: 'IT' };

// Spread operator bilan birlashtirish
const toliqMalumot = { ...shaxs, ...talaba };

// Object.assign bilan birlashtirish
const toliqMalumot2 = Object.assign({}, shaxs, talaba);`,
                explanation: "Bir nechta obyektni bitta obyektga birlashtirish usullari",
                result: "{ ism: 'Ali', yosh: 20, kurs: 2, fakultet: 'IT' }"
            },
            {
                name: "Obyekt ichida obyektlar",
                code: `const universitet = {
    fakultetlar: {
        IT: {
            talabalarSoni: 200,
            kafedralar: ['Dasturlash', 'Tarmoqlar']
        },
        Fizika: {
            talabalarSoni: 150,
            kafedralar: ['Nazariy fizika', 'Amaliy fizika']
        }
    }
};

const ITtalabalar = universitet.fakultetlar.IT.talabalarSoni;
const { fakultetlar: { IT: { kafedralar } } } = universitet;`,
                explanation: "Murakkab obyekt strukturasi bilan ishlash",
                result: "kafedralar: ['Dasturlash', 'Tarmoqlar']"
            }
        ]
    }
];

export default arrayObjectData;
const practiceDataNumbers = [
    {
        title: "Qo'shish amali (+)",
        description: `JavaScript-da qo'shish amali:
• Ikki yoki undan ortiq sonlarni qo'shish mumkin
• O'nlik kasrlar bilan ham ishlaydi
• Natija aniq hisoblanadi`,
        challenge: {
            type: "Boshlang'ich",
            text: `Vazifa: 
1. Ikkita o'zgaruvchi yarating: narx = 15000 va chegirma = 3500
2. Umumiy summani hisoblang (narx + chegirma)
3. Natijani konsolga chiqaring`,
            code: `// Kodingizni shu yerda yozing`,
            expectedOutput: "18500"
        },
        solution: {
            title: "Yechim",
            code: `let narx = 15000;
let chegirma = 3500;
console.log(narx + chegirma);`,
            explanation: `Tushuntirish:
• O'zgaruvchilar e'lon qilindi
• Qo'shish amali (+) orqali hisoblandi
• Natija 18500 chiqadi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat",
                content: "O'zgaruvchilarni oldin e'lon qiling, keyin ularni qo'shing",
                status: "Hidden"
            }
        ]
    },
    {
        title: "Ayirish amali (-)",
        description: `JavaScript-da ayirish amali:
• Sonlarni bir-biridan ayirish mumkin
• Natija manfiy ham bo'lishi mumkin
• O'nlik kasrlar bilan ishlaydi`,
        challenge: {
            type: "Boshlang'ich",
            text: `Vazifa:
1. Ikkita son yarating: umumiy = 45000 va tolandi = 28000
2. Qolgan summani hisoblang (umumiy - tolandi)
3. Natijani konsolga chiqaring`,
            code: `// Kodingizni shu yerda yozing`,
            expectedOutput: "17000"
        },
        solution: {
            title: "Yechim",
            code: `let umumiy = 45000;
let tolandi = 28000;
console.log(umumiy - tolandi);`,
            explanation: `Tushuntirish:
• Umumiy summadan to'langan summa ayirildi
• Natija qolgan summani ko'rsatadi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat",
                content: "Ayirish amalida tartib muhim: birinchi sondan ikkinchi son ayiriladi",
                status: "Hidden"
            }
        ]
    },
    {
        title: "Ko'paytirish amali (*)",
        description: `JavaScript-da ko'paytirish amali:
• Sonlarni ko'paytirish uchun * belgisi ishlatiladi
• Butun va o'nlik kasrlar bilan ishlaydi
• Natija aniq hisoblanadi`,
        challenge: {
            type: "Boshlang'ich",
            text: `Vazifa:
1. Mahsulot narxi (narx = 5000) va soni (soni = 4) berilgan
2. Umumiy summani hisoblang (narx * soni)
3. Natijani konsolga chiqaring`,
            code: `// Kodingizni shu yerda yozing`,
            expectedOutput: "20000"
        },
        solution: {
            title: "Yechim",
            code: `let narx = 5000;
let soni = 4;
console.log(narx * soni);`,
            explanation: `Tushuntirish:
• Narx va sonini ko'paytirib umumiy summa chiqarildi
• Ko'paytirish uchun * belgisi ishlatildi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat",
                content: "Ko'paytirish belgisi (*) tushib qolmasin",
                status: "Hidden"
            }
        ]
    },
    {
        title: "Bo'lish amali (/)",
        description: `JavaScript-da bo'lish amali:
• Sonlarni bo'lish uchun / belgisi ishlatiladi
• Natija o'nlik kasr bo'lishi mumkin
• Nolga bo'lish mumkin emas`,
        challenge: {
            type: "Boshlang'ich",
            text: `Vazifa:
1. Umumiy summa (summa = 120000) va oylar soni (oylar = 12) berilgan
2. Bir oylik to'lovni hisoblang (summa / oylar)
3. Natijani konsolga chiqaring`,
            code: `// Kodingizni shu yerda yozing`,
            expectedOutput: "10000"
        },
        solution: {
            title: "Yechim",
            code: `let summa = 120000;
let oylar = 12;
console.log(summa / oylar);`,
            explanation: `Tushuntirish:
• Umumiy summa oylar soniga bo'lindi
• Natija bir oylik to'lovni ko'rsatadi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat",
                content: "Bo'lish belgisi (/) va o'zgaruvchilar orasida bo'sh joy bo'lishi shart emas",
                status: "Hidden"
            }
        ]
    },
    {
        title: "Qoldiqli bo'lish (%)",
        description: `JavaScript-da qoldiqli bo'lish:
• % belgisi qoldiqni hisoblash uchun ishlatiladi
• Butun sonlar bilan ishlashda foydali
• Doimo butun son qaytaradi`,
        challenge: {
            type: "Boshlang'ich",
            text: `Vazifa:
1. Ikkita son berilgan: son = 17 va boluvchi = 5
2. Bo'lish qoldig'ini toping (son % boluvchi)
3. Natijani konsolga chiqaring`,
            code: `// Kodingizni shu yerda yozing`,
            expectedOutput: "2"
        },
        solution: {
            title: "Yechim",
            code: `let son = 17;
let boluvchi = 5;
console.log(son % boluvchi);`,
            explanation: `Tushuntirish:
• 17 ni 5 ga bo'lganda qoldiq 2 chiqadi
• % belgisi qoldiqni hisoblaydi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat",
                content: "Qoldiqli bo'lish (%) natijasi har doim bo'luvchidan kichik bo'ladi",
                status: "Hidden"
            }
        ]
    }
];

export default practiceDataNumbers;
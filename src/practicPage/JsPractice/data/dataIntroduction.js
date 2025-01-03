const practiceDataIntroduction = [
    {
        title: "Introduction",
        description: `JavaScript haqida muhim ma'lumotlar:
• JavaScript - zamonaviy web-dasturlashning eng mashhur tili
• Barcha zamonaviy brauzerlar JavaScript-ni qo'llab-quvvatlaydi
• Veb-sahifalarni interaktiv qilish uchun ishlatiladi
• Boshlang'ich darajadan professional darajagacha o'rganish mumkin`,
        challenge: {
            type: "Boshlang'ich",
            text: `Quyidagi vazifalarni bajaring:
1. Kod maydoniga e'tibor bering
2. Berilgan kodni diqqat bilan o'qing
3. 'Run Code' tugmasini bosing va natijani kuzating`,
            code: `console.log("Salom, men JavaScript dasturlash tilini o'rganishni boshladim!");`,
            expectedOutput: "Salom, men JavaScript dasturlash tilini o'rganishni boshladim!"
        },
        solution: {
            title: "Yechim va tushuntirish",
            code: `console.log("Salom, men JavaScript dasturlash tilini o'rganishni boshladim!");`,
            explanation: `Kod tushuntirilishi:
• console.log() - bu JavaScript-da ma'lumotlarni konsolga chiqarish uchun ishlatiladigan maxsus funksiya
• Qo'shtirnoq (" ") ichida yozilgan har qanday matn konsolga chiqariladi
• O'zbek tilidagi harflarni to'g'ri ko'rsatish uchun UTF-8 kodlash tizimi ishlatiladi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat 1",
                content: "Kod maydonini topish: Ekranning o'rta qismida kod yozish maydoni joylashgan",
                status: "Hidden"
            },
            {
                title: "Maslahat 2",
                content: "Natijani ko'rish: Kodni ishga tushirgandan so'ng, natija konsolda (odatda kod maydonining pastki qismida) ko'rinadi",
                status: "Hidden"
            }
        ]
    },
    {
        title: "Hello World!",
        description: `"Hello World" dasturi haqida muhim ma'lumotlar:
• Bu har qanday dasturlash tilini o'rganishda birinchi yoziladigan dastur hisoblanadi
• Bu dastur orqali siz quyidagilarni o'rganasiz:
  - Matn ma'lumotlarini qanday chiqarish
  - console.log() funksiyasining ishlashi
  - Qo'shtirnoqlardan to'g'ri foydalanish
  - Sintaksis xatolardan qochish`,
        challenge: {
            type: "Boshlang'ich",
            text: `Vazifa: 
1. console.log() funksiyasidan foydalaning
2. "Hello World!" matinini aynan shu ko'rinishda (katta-kichik harflar bilan) chiqaring
3. Qo'shtirnoqlarni to'g'ri ishlatganingizga ishonch hosil qiling
4. Nuqta-vergul (;) qo'yishni unutmang`,
            expectedOutput: "Hello World!",
            testCases: [
                {
                    input: null,
                    expectedOutput: "Hello World!",
                    description: "Dastur natijasi aynan 'Hello World!' bo'lishi kerak (katta-kichik harflarga e'tibor bering)"
                }
            ]
        },
        solution: {
            title: "Yechim va tushuntirish",
            code: 'console.log("Hello World!");',
            explanation: `Kodni qism bo'yicha tushuntirish:
1. console.log() - bu funksiya konsolga ma'lumot chiqaradi
2. "Hello World!" - qo'shtirnoq ichidagi matn aynan shunday chiqariladi
3. ; - har bir buyruq oxirida nuqta-vergul qo'yiladi`,
            status: "Hidden"
        },
        hints: [
            {
                title: "Maslahat 1",
                content: "Sintaksis: console.log() funksiyasini to'g'ri yozing (katta-kichik harflarga e'tibor bering)",
                status: "Hidden"
            },
            {
                title: "Maslahat 2",
                content: "Qo'shtirnoqlar: Matn qo'shtirnoq (\") ichida bo'lishi shart",
                status: "Hidden"
            },
            {
                title: "Maslahat 3",
                content: "Xatoliklar: Eng ko'p uchraydigan xatolar - qo'shtirnoqni yopish va nuqta-vergul qo'yishni unutish",
                status: "Hidden"
            }
        ]
    }
];

export default practiceDataIntroduction;


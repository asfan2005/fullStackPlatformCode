const dataAsinxronlik = [
    {
        id: 1,
        title: "Promise va async/await",
        description: "JavaScript'da asinxron operatsiyalarni boshqarish usullari",
        examples: [
            {
                name: "Promise asoslari",
                code: `// Promise yaratish
const vaadaBerish = new Promise((resolve, reject) => {
    setTimeout(() => {
        const tasodifiy = Math.random();
        if (tasodifiy > 0.5) {
            resolve("Muvaffaqiyatli!");
        } else {
            reject("Xatolik yuz berdi");
        }
    }, 1000);
});

// Promise ishlatish
vaadaBerish
    .then(natija => console.log(natija))
    .catch(xato => console.error(xato));

// async/await bilan ishlash
async function malumotOlish() {
    try {
        const natija = await vaadaBerish;
        console.log(natija);
    } catch (xato) {
        console.error(xato);
    }
}`,
                explanation: "Promise va async/await asoslari",
                result: "Asinxron kod boshqaruvi"
            }
        ]
    },
    {
        id: 2,
        title: "Callbacks va Event Loop",
        description: "JavaScript'da callback funksiyalar va event loop ishlashi",
        examples: [
            {
                name: "Callback funksiyalar",
                code: `// Callback misoli
function malumotOlish(callback) {
    setTimeout(() => {
        const malumot = { id: 1, nom: "Mahsulot" };
        callback(null, malumot);
    }, 1000);
}

malumotOlish((xato, malumot) => {
    if (xato) {
        console.error(xato);
        return;
    }
    console.log(malumot);
});

// Event Loop misoli
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve('3').then(console.log);
console.log('4');
// Natija: 1, 4, 3, 2`,
                explanation: "Callback va Event Loop ishlash tartibi",
                result: "Asinxron kod ketma-ketligi"
            }
        ]
    },
    {
        id: 3,
        title: "AJAX va Fetch API",
        description: "Server bilan ma'lumot almashish usullari",
        examples: [
            {
                name: "Fetch API dan foydalanish",
                code: `// Ma'lumotlarni olish
async function malumotlarniOlish() {
    try {
        const javob = await fetch('https://api.example.com/data');
        const malumotlar = await javob.json();
        return malumotlar;
    } catch (xato) {
        console.error('Xatolik:', xato);
    }
}

// POST so'rov yuborish
async function malumotYuborish(malumot) {
    try {
        const javob = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(malumot)
        });
        return await javob.json();
    } catch (xato) {
        console.error('Xatolik:', xato);
    }
}`,
                explanation: "Fetch API bilan ishlash",
                result: "Server bilan aloqa"
            }
        ]
    },
    {
        id: 4,
        title: "Amaliy loyihalar",
        description: "Asinxron JavaScript loyihalari",
        examples: [
            {
                name: "Valyuta konvertori",
                code: `class ValyutaKonvertor {
    constructor() {
        this.API_KEY = 'YOUR_API_KEY';
        this.BASE_URL = 'https://api.exchangerate-api.com/v4/latest/';
    }

    async kursniOlish(asosiyValyuta) {
        try {
            const javob = await fetch(\`\${this.BASE_URL}\${asosiyValyuta}\`);
            const malumot = await javob.json();
            return malumot.rates;
        } catch (xato) {
            throw new Error('Valyuta kursi olishda xatolik');
        }
    }

    async konvertatsiya(summa, asosiyValyuta, ikkinchiValyuta) {
        const kurslar = await this.kursniOlish(asosiyValyuta);
        const kurs = kurslar[ikkinchiValyuta];
        return summa * kurs;
    }
}`,
                explanation: "Valyuta konvertori dasturi",
                result: "Valyutalarni konvertatsiya qilish"
            },
            {
                name: "Ob-havo dasturi",
                code: `class ObHavoDasturi {
    constructor() {
        this.API_KEY = 'YOUR_WEATHER_API_KEY';
        this.BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async haroratniOlish(shahar) {
        try {
            const url = \`\${this.BASE_URL}?q=\${shahar}&appid=\${this.API_KEY}&units=metric\`;
            const javob = await fetch(url);
            const malumot = await javob.json();
            
            return {
                harorat: malumot.main.temp,
                namlik: malumot.main.humidity,
                shamolTezligi: malumot.wind.speed,
                tavsif: malumot.weather[0].description
            };
        } catch (xato) {
            throw new Error('Ob-havo ma\'lumotlarini olishda xatolik');
        }
    }

    async kunlikBashorat(shahar) {
        try {
            const url = \`https://api.openweathermap.org/data/2.5/forecast?q=\${shahar}&appid=\${this.API_KEY}&units=metric\`;
            const javob = await fetch(url);
            const malumot = await javob.json();
            
            return malumot.list.map(item => ({
                sana: new Date(item.dt * 1000),
                harorat: item.main.temp,
                tavsif: item.weather[0].description
            }));
        } catch (xato) {
            throw new Error('Bashorat ma\'lumotlarini olishda xatolik');
        }
    }
}`,
                explanation: "Ob-havo ma'lumotlarini olish dasturi",
                result: "Ob-havo ma'lumotlari"
            }
        ]
    }
];

export default dataAsinxronlik;
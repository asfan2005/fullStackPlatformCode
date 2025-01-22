const dataAmaliy = [
    {
        id: 1,
        title: "Array bilan ishlash",
        description: "Array metodlari va ular bilan ishlash bo'yicha amaliy mashqlar",
        examples: [
            {
                name: "Array metodlari",
                code: `// Array yaratish va to'ldirish
const sonlar = [1, 2, 3, 4, 5];
const mevalar = ['olma', 'nok', 'banan'];

// push() - oxiriga element qo'shish
mevalar.push('uzum');
console.log(mevalar); // ['olma', 'nok', 'banan', 'uzum']

// map() - har bir element uchun amal bajarish
const kvadratlar = sonlar.map(son => son * son);
console.log(kvadratlar); // [1, 4, 9, 16, 25]

// filter() - shartga mos elementlarni filtrlash
const juftSonlar = sonlar.filter(son => son % 2 === 0);
console.log(juftSonlar); // [2, 4]`,
                explanation: "Array metodlarining asosiy funksiyalari",
                result: "Array metodlarini qo'llash natijalari"
            }
        ]
    },
    {
        id: 2,
        title: "Object bilan ishlash",
        description: "Objectlar va ular ustida amallar bajarish",
        examples: [
            {
                name: "Object yaratish va metodlar",
                code: `// Object yaratish
const talaba = {
    ism: 'Ali',
    yosh: 20,
    kurs: 2,
    fanlar: ['Matematika', 'Fizika'],
    
    malumotlarniKorsat() {
        return \`\${this.ism}, \${this.yosh} yoshda, \${this.kurs}-kurs talabasi\`;
    }
};

// Object.keys()
console.log(Object.keys(talaba)); // ['ism', 'yosh', 'kurs', 'fanlar']

// Object.values()
console.log(Object.values(talaba)); // ['Ali', 20, 2, ['Matematika', 'Fizika']]

// Object.entries()
for (let [key, value] of Object.entries(talaba)) {
    if (typeof value !== 'function') {
        console.log(\`\${key}: \${value}\`);
    }
}`,
                explanation: "Objectlar bilan ishlash usullari",
                result: "Object metodlarini qo'llash natijalari"
            }
        ]
    },
    {
        id: 3,
        title: "DOM bilan ishlash",
        description: "DOM elementlari bilan ishlash bo'yicha amaliy mashqlar",
        examples: [
            {
                name: "DOM elementlarini boshqarish",
                code: `// Element yaratish
const yangiElement = document.createElement('div');
yangiElement.className = 'container';
yangiElement.innerHTML = '<h1>Salom Dunyo!</h1>';

// Elementni sahifaga qo'shish
document.body.appendChild(yangiElement);

// Event listener qo'shish
const tugma = document.createElement('button');
tugma.textContent = 'Bosing';
tugma.addEventListener('click', () => {
    alert('Tugma bosildi!');
});

// Stillarni o'zgartirish
yangiElement.style.backgroundColor = '#f0f0f0';
yangiElement.style.padding = '20px';
yangiElement.style.margin = '10px';`,
                explanation: "DOM elementlari bilan ishlash usullari",
                result: "Sahifada dinamik elementlar yaratish va ular bilan ishlash"
            }
        ]
    },
    {
        id: 4,
        title: "Form validatsiya",
        description: "Formalarni tekshirish va validatsiya qilish",
        examples: [
            {
                name: "Form validatsiya",
                code: `// Form validatsiya funksiyasi
function formniTekshir(event) {
    event.preventDefault();
    
    const ism = document.getElementById('ism').value;
    const email = document.getElementById('email').value;
    const parol = document.getElementById('parol').value;
    
    // Ism tekshirish
    if (ism.length < 3) {
        xatoKorsat('ism', 'Ism kamida 3 ta harfdan iborat bo\'lishi kerak');
        return;
    }
    
    // Email tekshirish
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        xatoKorsat('email', 'Noto\'g\'ri email formati');
        return;
    }
    
    // Parol tekshirish
    if (parol.length < 6) {
        xatoKorsat('parol', 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak');
        return;
    }
    
    // Muvaffaqiyatli
    alert('Form muvaffaqiyatli yuborildi!');
}

function xatoKorsat(maydonId, xabarMatni) {
    const maydon = document.getElementById(maydonId);
    const xatoElement = document.createElement('div');
    xatoElement.className = 'xato-xabar';
    xatoElement.textContent = xabarMatni;
    
    maydon.parentNode.appendChild(xatoElement);
    setTimeout(() => xatoElement.remove(), 3000);
}`,
                explanation: "Form validatsiya qilish usullari",
                result: "Formani tekshirish va xatolarni ko'rsatish"
            }
        ]
    },
    {
        id: 5,
        title: "LocalStorage bilan ishlash",
        description: "LocalStorage orqali ma'lumotlarni saqlash va boshqarish",
        examples: [
            {
                name: "LocalStorage CRUD operatsiyalari",
                code: `// Ma'lumotni saqlash
function malumotniSaqlash(kalit, qiymat) {
    localStorage.setItem(kalit, JSON.stringify(qiymat));
}

// Ma'lumotni olish
function malumotniOlish(kalit) {
    const data = localStorage.getItem(kalit);
    return data ? JSON.parse(data) : null;
}

// Ma'lumotni yangilash
function malumotniYangilash(kalit, yangiQiymat) {
    if (localStorage.getItem(kalit)) {
        localStorage.setItem(kalit, JSON.stringify(yangiQiymat));
        return true;
    }
    return false;
}

// Ma'lumotni o'chirish
function malumotniOchirish(kalit) {
    if (localStorage.getItem(kalit)) {
        localStorage.removeItem(kalit);
        return true;
    }
    return false;
}

// Misol
const foydalanuvchi = {
    id: 1,
    ism: 'Ali',
    yosh: 25
};

malumotniSaqlash('foydalanuvchi', foydalanuvchi);
console.log(malumotniOlish('foydalanuvchi'));`,
                explanation: "LocalStorage bilan ishlash usullari",
                result: "Ma'lumotlarni brauzerda saqlash va boshqarish"
            }
        ]
    },
    {
        id: 6,
        title: "String metodlari bilan ishlash",
        description: "String metodlari va ular bilan ishlash bo'yicha amaliy mashqlar",
        examples: [
            {
                name: "String metodlari",
                code: `// String metodlari
const matn = "JavaScript dasturlash tili";

// slice() - matnni kesish
console.log(matn.slice(0, 10)); // "JavaScript"

// split() - massivga ajratish
const sozlar = matn.split(" ");
console.log(sozlar); // ["JavaScript", "dasturlash", "tili"]

// replace() - almashtirish
const yangiMatn = matn.replace("JavaScript", "Python");
console.log(yangiMatn); // "Python dasturlash tili"

// toUpperCase() va toLowerCase()
console.log(matn.toUpperCase()); // "JAVASCRIPT DASTURLASH TILI"
console.log(matn.toLowerCase()); // "javascript dasturlash tili"

// includes() - qidirish
console.log(matn.includes("script")); // true

// startsWith() va endsWith()
console.log(matn.startsWith("Java")); // true
console.log(matn.endsWith("tili")); // true`,
                explanation: "String metodlarining asosiy funksiyalari",
                result: "String metodlarini qo'llash natijalari"
            }
        ]
    },
    {
        id: 7,
        title: "Math obyekti bilan ishlash",
        description: "JavaScript Math obyekti va matematik amallar",
        examples: [
            {
                name: "Math metodlari",
                code: `// Math metodlari
// Sonni yaxlitlash
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// Yuqoriga va pastga yaxlitlash
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

// Random sonlar
console.log(Math.random()); // 0 dan 1 gacha
// 1 dan 10 gacha random son
console.log(Math.floor(Math.random() * 10) + 1);

// Minimum va maximum
console.log(Math.min(2, 5, 1, 8, 3)); // 1
console.log(Math.max(2, 5, 1, 8, 3)); // 8

// Darajaga ko'tarish
console.log(Math.pow(2, 3)); // 8

// Ildiz
console.log(Math.sqrt(16)); // 4`,
                explanation: "Math obyektining asosiy metodlari",
                result: "Matematik amallarni bajarish natijalari"
            }
        ]
    },
    {
        id: 8,
        title: "Date obyekti bilan ishlash",
        description: "Sana va vaqt bilan ishlash",
        examples: [
            {
                name: "Date metodlari",
                code: `// Yangi sana yaratish
const hozir = new Date();
console.log(hozir);

// Ma'lum sanani yaratish
const sana = new Date('2024-03-15');
console.log(sana);

// Sana qismlarini olish
console.log(\`Yil: \${hozir.getFullYear()}\`);
console.log(\`Oy: \${hozir.getMonth() + 1}\`); // 0-11
console.log(\`Kun: \${hozir.getDate()}\`);
console.log(\`Soat: \${hozir.getHours()}\`);
console.log(\`Daqiqa: \${hozir.getMinutes()}\`);

// Sanani formatlash
function sanaFormati(sana) {
    const kun = String(sana.getDate()).padStart(2, '0');
    const oy = String(sana.getMonth() + 1).padStart(2, '0');
    const yil = sana.getFullYear();
    return \`\${kun}.\${oy}.\${yil}\`;
}

console.log(sanaFormati(new Date())); // "15.03.2024"`,
                explanation: "Date obyekti va uning metodlari",
                result: "Sana va vaqt bilan ishlash natijalari"
            }
        ]
    },
    {
        id: 9,
        title: "Try-Catch xatolarni ushlash",
        description: "Xatolarni boshqarish va ularni qayta ishlash",
        examples: [
            {
                name: "Try-Catch bloklari",
                code: `// Xatolarni ushlash
function sonniTekshir(son) {
    try {
        if (isNaN(son)) {
            throw new Error("Son emas!");
        }
        if (son < 0) {
            throw new Error("Manfiy son!");
        }
        return "Son to'g'ri: " + son;
    } catch (xato) {
        return "Xato: " + xato.message;
    } finally {
        console.log("Tekshirish tugadi");
    }
}

console.log(sonniTekshir(5)); // "Son to'g'ri: 5"
console.log(sonniTekshir(-10)); // "Xato: Manfiy son!"
console.log(sonniTekshir("abc")); // "Xato: Son emas!"

// Custom Error yaratish
class SonXatosi extends Error {
    constructor(xabar) {
        super(xabar);
        this.name = "SonXatosi";
    }
}

function sonniTekshir2(son) {
    try {
        if (son > 100) {
            throw new SonXatosi("Son 100 dan katta bo'lmasligi kerak!");
        }
        return "Son to'g'ri";
    } catch (xato) {
        if (xato instanceof SonXatosi) {
            return xato.message;
        }
        return "Boshqa xato: " + xato.message;
    }
}`,
                explanation: "Xatolarni ushlash va boshqarish usullari",
                result: "Try-Catch bloklarini qo'llash natijalari"
            }
        ]
    },
    {
        id: 10,
        title: "Regular Expressions",
        description: "Regular expressions bilan ishlash va tekshirish",
        examples: [
            {
                name: "RegExp metodlari",
                code: `// Regular expressions yaratish
const regex1 = /salom/i; // i - case insensitive
const regex2 = new RegExp('salom', 'i');

// test() metodi
console.log(regex1.test('Salom dunyo')); // true

// match() metodi
const matn = 'Salom dunyo, Salom JavaScript';
console.log(matn.match(/salom/gi)); // ['Salom', 'Salom']

// Email validatsiya
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('test@example.com')); // true
console.log(emailRegex.test('test@com')); // false

// Telefon raqam validatsiya
const telRegex = /^\+998[0-9]{9}$/;
console.log(telRegex.test('+998901234567')); // true
console.log(telRegex.test('998901234567')); // false

// replace() bilan regex
const matn2 = 'JavaScript JavaScript JavaScript';
console.log(matn2.replace(/JavaScript/g, 'Python'));`,
                explanation: "Regular expressions va ularning metodlari",
                result: "RegExp metodlarini qo'llash natijalari"
            }
        ]
    }
];

export default dataAmaliy;
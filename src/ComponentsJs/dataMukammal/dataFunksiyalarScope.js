const dataFunksiyalarScope = [
    {
        id: 1,
        title: "Funksiyalar Turlari",
        description: "JavaScript funksiyalarining asosiy turlari va ularning ishlatilishi",
        examples: [
            {
                name: "Function Declaration",
                code: `// Oddiy funksiya e'loni
function salamBer(ism) {
    return \`Assalomu alaykum, \${ism}!\`;
}

// Parametrli funksiya
function qoshish(a, b = 0) {
    return a + b;
}

// Rest parametrli funksiya
function yigindi(...sonlar) {
    return sonlar.reduce((a, b) => a + b, 0);
}

// Rekursiv funksiya
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
                explanation: "Funksiyalarning turli xil e'lon qilish usullari",
                result: "Funksiyalarni to'g'ri ishlatish"
            },
            {
                name: "Arrow Functions",
                code: `// Oddiy arrow funksiya
const kvadrat = (son) => son * son;

// Ko'p qatorli arrow funksiya
const tekshir = (son) => {
    if (son > 0) return "Musbat";
    if (son < 0) return "Manfiy";
    return "Nol";
};

// Array metodlari bilan
const sonlar = [1, 2, 3, 4, 5];
const juftlar = sonlar.filter(son => son % 2 === 0);
const kvadratlar = sonlar.map(son => son * son);`,
                explanation: "Arrow funksiyalar va ularning qo'llanilishi",
                result: "Zamonaviy funksiya yozish usullari"
            }
        ]
    },
    {
        id: 2,
        title: "Scope va Context",
        description: "JavaScript scope turlari va kontekst tushunchasi",
        examples: [
            {
                name: "Scope Turlari",
                code: `// Global scope
let globalOzgaruvchi = "Men global";

function scopeTest() {
    // Function scope
    let localOzgaruvchi = "Men local";
    
    if (true) {
        // Block scope
        let blockOzgaruvchi = "Men block";
        const constOzgaruvchi = "O'zgarmas";
        var varOzgaruvchi = "Function scope";
    }
    
    console.log(varOzgaruvchi); // Ishlaydi
    // console.log(blockOzgaruvchi); // Xato!
}`,
                explanation: "JavaScript даги scope турлари ва уларнинг фарқлари",
                result: "Scope'ларни тўғри ишлатиш"
            },
            {
                name: "Closure",
                code: `// Closure misoli
function tashqiFunksiya(x) {
    return function(y) {
        return x + y;
    };
}

const qoshBesh = tashqiFunksiya(5);
console.log(qoshBesh(3)); // 8

// Counter misoli
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const hisoblagich = counter();`,
                explanation: "Closure va uning amaliy qo'llanilishi",
                result: "Xavfsiz va encapsulation qilingan kod"
            }
        ]
    },
    {
        id: 3,
        title: "This Kalit So'zi",
        description: "This kalit so'zining kontekstga bog'liq holda ishlashi",
        examples: [
            {
                name: "This Konteksti",
                code: `// Obyekt ichida this
const user = {
    ism: "Ali",
    salom: function() {
        return \`Salom, \${this.ism}!\`;
    },
    // Arrow funksiyada this
    salomArrow: () => {
        return \`Salom, \${this.ism}!\`; // this global kontekstga ishora
    }
};

// Constructor funksiyada this
function User(ism) {
    this.ism = ism;
    this.salom = function() {
        return \`Salom, \${this.ism}!\`;
    };
}

const yangiUser = new User("Vali");`,
                explanation: "This kalit so'zining turli kontekstlarda ishlashi",
                result: "This kontekstini to'g'ri boshqarish"
            }
        ]
    },
    {
        id: 4,
        title: "Callback va Higher-Order Functions",
        description: "Yuqori tartibli funksiyalar va callback'lar",
        examples: [
            {
                name: "Higher-Order Functions",
                code: `// Higher-order function misoli
function operatsiyaniBajar(a, b, operatsiya) {
    return operatsiya(a, b);
}

const qoshish = (x, y) => x + y;
const ayrish = (x, y) => x - y;

console.log(operatsiyaniBajar(5, 3, qoshish)); // 8
console.log(operatsiyaniBajar(5, 3, ayrish)); // 2

// Array metodlari bilan
const mevalar = ['olma', 'nok', 'banan'];
const uzunMevalar = mevalar
    .filter(meva => meva.length > 3)
    .map(meva => meva.toUpperCase());`,
                explanation: "Yuqori tartibli funksiyalar va ularning qo'llanilishi",
                result: "Funksional dasturlash asoslari"
            },
            {
                name: "Callback Functions",
                code: `// Callback funksiya misoli
function malumotniYukla(callback) {
    setTimeout(() => {
        const malumot = { id: 1, nom: "Mahsulot" };
        callback(malumot);
    }, 2000);
}

malumotniYukla((data) => {
    console.log("Ma'lumot yuklandi:", data);
});

// Event listener bilan
document.querySelector('button')
    .addEventListener('click', function(event) {
        console.log('Tugma bosildi!');
    });`,
                explanation: "Callback funksiyalar va asinxron dasturlash",
                result: "Asinxron kodni boshqarish"
            }
        ]
    },
    {
        id: 5,
        title: "Amaliy Loyihalar",
        description: "Funksiyalar va scope'ni o'rganish uchun amaliy loyihalar",
        examples: [
            {
                name: "Parol Kuchini Tekshirish",
                code: `// Parol kuchini tekshiruvchi dastur
function parolKuchiniTekshir(parol) {
    let kuch = 0;
    const tekshiruvlar = {
        uzunlik: parol.length >= 8,
        kattaHarf: /[A-Z]/.test(parol),
        kichikHarf: /[a-z]/.test(parol),
        raqamlar: /[0-9]/.test(parol),
        maxsusBelilar: /[!@#$%^&*]/.test(parol)
    };

    // Har bir to'g'ri tekshiruv uchun ball qo'shish
    Object.values(tekshiruvlar).forEach(natija => {
        if (natija) kuch++;
    });

    // Natijani qaytarish
    return {
        kuch: kuch,
        xavfsizlik: kuch < 2 ? "Zaif" :
                    kuch < 4 ? "O'rtacha" : "Kuchli",
        tekshiruvlar
    };
}

// Dasturni ishlatish
const natija = parolKuchiniTekshir("Parol123!");
console.log(natija);`,
                explanation: "Parol kuchini tekshiruvchi funksional dastur",
                result: "Xavfsiz parollarni tekshirish"
            },
            {
                name: "Kalkulyator",
                code: `// Kalkulyator closure yordamida
function kalkulyatorYaratish() {
    let xotira = 0;

    return {
        qoshish: (son) => {
            xotira += son;
            return xotira;
        },
        ayrish: (son) => {
            xotira -= son;
            return xotira;
        },
        kopaytirish: (son) => {
            xotira *= son;
            return xotira;
        },
        bolish: (son) => {
            if (son === 0) return "Nolga bo'lib bo'lmaydi";
            xotira /= son;
            return xotira;
        },
        tozalash: () => {
            xotira = 0;
            return xotira;
        },
        xotiraniKorish: () => xotira
    };
}

const calc = kalkulyatorYaratish();
console.log(calc.qoshish(5));      // 5
console.log(calc.kopaytirish(2));  // 10
console.log(calc.ayrish(3));       // 7
console.log(calc.tozalash());      // 0`,
                explanation: "Closure va funksiyalar yordamida kalkulyator",
                result: "Xotirali kalkulyator dasturi"
            }
        ]
    }
];

export default dataFunksiyalarScope;
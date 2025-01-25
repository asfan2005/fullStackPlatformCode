const dataJavaScriptAsoslar = [
    {
        id: 1,
        title: "JavaScript Asosiy Tushunchalar",
        description: "JavaScript dasturlash tilining fundamental tushunchalari",
        examples: [
            {
                name: "O'zgaruvchilar va Ma'lumot Turlari",
                code: `// O'zgaruvchilar e'lon qilish
let ism = "Ali";           // string
const yosh = 25;           // number
var faol = true;           // boolean
let massiv = [1,2,3];      // array
let obyekt = {             // object
    ism: "Vali",
    yosh: 30
};
let boshQiymat = null;     // null
let aniqlanmagan;          // undefined

// Template literal
let xabar = \`Salom \${ism}, yoshingiz \${yosh}da\`;`,
                explanation: "JavaScript da asosiy ma'lumot turlari va o'zgaruvchilar",
                result: "O'zgaruvchilarni to'g'ri ishlatish"
            },
            {
                name: "Operatorlar va Shartlar",
                code: `// Arifmetik operatorlar
let a = 10 + 5;  // 15
let b = 20 - 8;  // 12
let c = 4 * 3;   // 12
let d = 15 / 3;  // 5
let e = 17 % 5;  // 2 (qoldiq)

// Taqqoslash operatorlari
if (yosh >= 18) {
    console.log("Siz voyaga yetgansiz");
} else if (yosh > 12) {
    console.log("Siz o'smirsiz");
} else {
    console.log("Siz bolasiz");
}

// Mantiqiy operatorlar
let natija = (a > b && c < d) || e === 2;`,
                explanation: "Operatorlar va shart operatorlari",
                result: "Mantiqiy va arifmetik amallarni bajarish"
            }
        ]
    },
    {
        id: 2,
        title: "Funksiyalar va Scope",
        description: "JavaScript funksiyalari va scope tushunchasi",
        examples: [
            {
                name: "Funksiyalar",
                code: `// Oddiy funksiya
function salamBer(ism) {
    return \`Salom, \${ism}!\`;
}

// Arrow funksiya
const kvadrat = (son) => son * son;

// Callback funksiya
setTimeout(() => {
    console.log("3 soniyadan keyin ishga tushdi");
}, 3000);

// Higher Order Function
function hisobla(a, b, operatsiya) {
    return operatsiya(a, b);
}

const qoshish = (x, y) => x + y;
const natija = hisobla(5, 3, qoshish);`,
                explanation: "Turli xil funksiyalar va ularning ishlatilishi",
                result: "Funksional dasturlash asoslari"
            },
            {
                name: "Array Metodlari",
                code: `// Array bilan ishlash
const sonlar = [1, 2, 3, 4, 5];

// map metodi
const kvadratlar = sonlar.map(son => son * son);

// filter metodi
const juftSonlar = sonlar.filter(son => son % 2 === 0);

// reduce metodi
const yigindi = sonlar.reduce((acc, curr) => acc + curr, 0);

// forEach metodi
sonlar.forEach(son => console.log(son));

// find va findIndex
const topilganSon = sonlar.find(son => son > 3);
const topilganIndex = sonlar.findIndex(son => son > 3);`,
                explanation: "Array metodlari va ularning qo'llanilishi",
                result: "Array bilan samarali ishlash"
            }
        ]
    },
    {
        id: 3,
        title: "Async JavaScript",
        description: "Asinxron dasturlash va Promise",
        examples: [
            {
                name: "Promise va Async/Await",
                code: `// Promise yaratish
const vadaQil = new Promise((resolve, reject) => {
    setTimeout(() => {
        const muvaffaqiyatli = true;
        if (muvaffaqiyatli) {
            resolve("Ma'lumotlar olindi!");
        } else {
            reject("Xatolik yuz berdi!");
        }
    }, 2000);
});

// Promise ishlatish
vadaQil
    .then(natija => console.log(natija))
    .catch(xato => console.error(xato));

// Async/Await
async function malumotlarniOl() {
    try {
        const natija = await vadaQil;
        console.log(natija);
    } catch (xato) {
        console.error(xato);
    }
}`,
                explanation: "Asinxron dasturlash va Promise bilan ishlash",
                result: "Asinxron operatsiyalarni boshqarish"
            },
            {
                name: "DOM bilan Ishlash",
                code: `// Element tanlash
const element = document.querySelector('.class-name');
const elements = document.querySelectorAll('div');

// Element yaratish
const yangiElement = document.createElement('div');
yangiElement.textContent = 'Yangi element';
yangiElement.classList.add('yangi-class');

// Elementni o'zgartirish
element.style.backgroundColor = 'red';
element.innerHTML = '<span>Yangi content</span>';

// Event listener
element.addEventListener('click', (event) => {
    console.log('Element bosildi!');
    event.preventDefault();
});`,
                explanation: "DOM bilan ishlash va manipulyatsiya qilish",
                result: "Web sahifani dinamik boshqarish"
            }
        ]
    },
    {
        id: 4,
        title: "Tsikllar va Takrorlash",
        description: "JavaScript da turli xil tsikl turlari va ularning qo'llanilishi",
        examples: [
            {
                name: "For va While Tsikllari",
                code: `// For tsikli
for (let i = 0; i < 5; i++) {
    console.log(\`Hisob: \${i}\`);
}

// While tsikli
let counter = 0;
while (counter < 5) {
    console.log(\`Counter: \${counter}\`);
    counter++;
}

// For...of (massivlar uchun)
const mevalar = ['olma', 'nok', 'banan'];
for (const meva of mevalar) {
    console.log(meva);
}

// For...in (obyektlar uchun)
const talaba = {
    ism: 'Ali',
    yosh: 20,
    kurs: 2
};
for (const key in talaba) {
    console.log(\`\${key}: \${talaba[key]}\`);
}`,
                explanation: "JavaScript da mavjud barcha tsikl turlari",
                result: "Takrorlanuvchi amallarni bajarish"
            }
        ]
    },
    {
        id: 5,
        title: "Amaliy Loyihalar",
        description: "JavaScript da amaliy loyihalar namunalari",
        examples: [
            {
                name: "Kalkulyator",
                code: `// Kalkulyator klassi
class Kalkulyator {
    qoshish(a, b) {
        return a + b;
    }
    
    ayirish(a, b) {
        return a - b;
    }
    
    kopaytirish(a, b) {
        return a * b;
    }
    
    bolish(a, b) {
        if (b === 0) return "Nolga bo'lib bo'lmaydi";
        return a / b;
    }
}

// Kalkulyatorni ishlatish
const calc = new Kalkulyator();
console.log(calc.qoshish(10, 5));      // 15
console.log(calc.ayirish(10, 5));      // 5
console.log(calc.kopaytirish(10, 5));  // 50
console.log(calc.bolish(10, 5));       // 2`,
                explanation: "Oddiy kalkulyator dasturi",
                result: "Asosiy matematik amallarni bajaruvchi dastur"
            },
            {
                name: "Todo Ro'yxat",
                code: `// Todo ro'yxat klassi
class TodoRoyxat {
    constructor() {
        this.vazifalar = [];
    }
    
    vazifaQoshish(vazifa) {
        this.vazifalar.push({
            id: Date.now(),
            title: vazifa,
            bajarildi: false
        });
        console.log("Vazifa qo'shildi!");
    }
    
    vazifaniOchirish(id) {
        this.vazifalar = this.vazifalar.filter(v => v.id !== id);
        console.log("Vazifa o'chirildi!");
    }
    
    vazifaniBajarish(id) {
        const vazifa = this.vazifalar.find(v => v.id === id);
        if (vazifa) {
            vazifa.bajarildi = true;
            console.log("Vazifa bajarildi!");
        }
    }
    
    barcharVazifalarniKorish() {
        console.log("Barcha vazifalar:");
        this.vazifalar.forEach(v => {
            console.log(\`[\${v.bajarildi ? '✓' : ' '}] \${v.title}\`);
        });
    }
}

// Todo ro'yxatni ishlatish
const todo = new TodoRoyxat();
todo.vazifaQoshish("JavaScript o'rganish");
todo.vazifaQoshish("Mashq qilish");
todo.barcharVazifalarniKorish();`,
                explanation: "Konsol asosida ishlovchi todo ro'yxat dasturi",
                result: "Vazifalarni boshqarish tizimi"
            }
        ]
    },
    {
        id: 6,
        title: "Switch va Maxsus Operatorlar",
        description: "Switch konstruksiyasi va maxsus operatorlar",
        examples: [
            {
                name: "Switch Konstruksiyasi",
                code: `// Switch misoli
const kun = 3;
switch (kun) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    default:
        console.log("Noma'lum kun");
}

// Ternary operator
const yosh = 20;
const xabar = yosh >= 18 
    ? "Siz voyaga yetgansiz" 
    : "Siz voyaga yetmagansiz";

// Nullish coalescing operator (??)
const ism = null;
const standartIsm = ism ?? "Mehmon";`,
                explanation: "Switch va maxsus operatorlarning ishlatilishi",
                result: "Shartli konstruksiyalarni samarali ishlatish"
            }
        ]
    }
];

export default dataJavaScriptAsoslar;
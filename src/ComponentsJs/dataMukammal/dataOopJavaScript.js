const dataOopJavaScript = [
    {
        id: 1,
        title: "Obyektlar va Sinflar",
        description: "JavaScript'da obyektlar va sinflar bilan ishlash, konstruktorlar va prototiplar",
        examples: [
            {
                name: "Obyekt Yaratish",
                code: `// Obyekt literal
const talaba = {
    ism: 'Ali',
    yosh: 20,
    tanishtirish() {
        return \`Men \${this.ism}, \${this.yosh} yoshdaman\`;
    }
};

// Class orqali obyekt yaratish
class Talaba {
    constructor(ism, yosh) {
        this.ism = ism;
        this.yosh = yosh;
    }
    
    tanishtirish() {
        return \`Men \${this.ism}, \${this.yosh} yoshdaman\`;
    }
}

const talaba1 = new Talaba('Vali', 22);`,
                explanation: "Obyektlarni yaratishning turli usullari",
                result: "Obyektlar bilan ishlash"
            },
            {
                name: "Prototiplar",
                code: `// Prototip orqali metodlar qo'shish
function Mashina(model) {
    this.model = model;
}

Mashina.prototype.signal = function() {
    return \`\${this.model} signal bermoqda\`;
};

const bmw = new Mashina('BMW');

// Class bilan prototip
class Transport {
    static transportSoni = 0;
    
    constructor(turi) {
        this.turi = turi;
        Transport.transportSoni++;
    }
    
    static getTransportSoni() {
        return Transport.transportSoni;
    }
}`,
                explanation: "Prototiplar va statik metodlar",
                result: "Prototip asosida obyektlar"
            }
        ]
    },
    {
        id: 2,
        title: "Meros va Kengaytirish",
        description: "Sinflardan meros olish va ularni kengaytirish",
        examples: [
            {
                name: "Meros Olish",
                code: `// Asosiy sinf
class Transport {
    constructor(model, yil) {
        this.model = model;
        this.yil = yil;
    }
    
    malumot() {
        return \`\${this.model} \${this.yil}-yil\`;
    }
}

// Voris sinf
class Avtomobil extends Transport {
    constructor(model, yil, rang) {
        super(model, yil);
        this.rang = rang;
    }
    
    malumot() {
        return \`\${super.malumot()}, \${this.rang} rang\`;
    }
}

const malibu = new Avtomobil('Malibu', 2023, 'qora');`,
                explanation: "Sinflardan meros olish",
                result: "Ierarxik obyektlar"
            }
        ]
    },
    {
        id: 3,
        title: "Inkapsulyatsiya va Polimorfizm",
        description: "Ma'lumotlarni yashirish va metodlarni qayta aniqlash",
        examples: [
            {
                name: "Inkapsulyatsiya",
                code: `// Private xususiyatlar
class Bank {
    #balans = 0;
    
    constructor(egasi) {
        this.egasi = egasi;
    }
    
    pulQoyish(summa) {
        this.#balans += summa;
    }
    
    pulYechish(summa) {
        if (summa <= this.#balans) {
            this.#balans -= summa;
            return true;
        }
        return false;
    }
    
    getBalans() {
        return this.#balans;
    }
}`,
                explanation: "Private xususiyatlar va metodlar",
                result: "Xavfsiz ma'lumotlar"
            },
            {
                name: "Polimorfizm",
                code: `// Polimorfizm misoli
class Shakl {
    maydonHisobla() {
        return 0;
    }
}

class Doira extends Shakl {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    maydonHisobla() {
        return Math.PI * this.radius ** 2;
    }
}

class TortBurchak extends Shakl {
    constructor(eni, boyi) {
        super();
        this.eni = eni;
        this.boyi = boyi;
    }
    
    maydonHisobla() {
        return this.eni * this.boyi;
    }
}

// Polimorfik funksiya
function maydonniKorsat(shakl) {
    console.log(\`Maydon: \${shakl.maydonHisobla()}\`);
}

const doira = new Doira(5);
const tortBurchak = new TortBurchak(4, 6);

maydonniKorsat(doira);        // Doira maydoni
maydonniKorsat(tortBurchak);  // To'rtburchak maydoni`,
                explanation: "Polimorfizm va metodlarni qayta aniqlash",
                result: "Moslashuvchan obyektlar"
            }
        ]
    },
    {
        id: 4,
        title: "Amaliy Misollar",
        description: "OOP konsepsiyalarini amalda qo'llash",
        examples: [
            {
                name: "Elektron Kutubxona",
                code: `class Kitob {
    constructor(nomi, muallif, yil) {
        this.nomi = nomi;
        this.muallif = muallif;
        this.yil = yil;
        this.mavjud = true;
    }
}

class Kutubxona {
    #kitoblar = new Map();
    
    kitobQoshish(kitob) {
        this.#kitoblar.set(kitob.nomi, kitob);
    }
    
    kitobniIjaraga(nomi) {
        const kitob = this.#kitoblar.get(nomi);
        if (kitob && kitob.mavjud) {
            kitob.mavjud = false;
            return true;
        }
        return false;
    }
    
    kitobniQaytarish(nomi) {
        const kitob = this.#kitoblar.get(nomi);
        if (kitob) {
            kitob.mavjud = true;
            return true;
        }
        return false;
    }
    
    mavjudKitoblar() {
        return Array.from(this.#kitoblar.values())
            .filter(kitob => kitob.mavjud);
    }
}`,
                explanation: "Kutubxona tizimini OOP yordamida yaratish",
                result: "Amaliy OOP dasturi"
            }
        ]
    }
];

export default dataOopJavaScript;
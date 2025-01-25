const dataDomManipulyatsiya = [
    {
        id: 1,
        title: "DOM Elementlarini Tanlash",
        description: "DOM elementlarini turli usullar bilan tanlash va ularga murojaat qilish",
        examples: [
            {
                name: "Element Tanlash Usullari",
                code: `// ID bo'yicha tanlash
const element = document.getElementById('myId');

// Class bo'yicha tanlash
const elements = document.getElementsByClassName('myClass');

// Tag nomi bo'yicha tanlash
const paragraphs = document.getElementsByTagName('p');

// CSS selector bo'yicha tanlash
const selector = document.querySelector('.class #id');
const allSelectors = document.querySelectorAll('.item');`,
                explanation: "DOM elementlarini turli usullar bilan tanlash",
                result: "Elementlarni samarali tanlash"
            },
            {
                name: "Element Xususiyatlarini O'zgartirish",
                code: `// Element matnini o'zgartirish
element.textContent = 'Yangi matn';
element.innerHTML = '<span>HTML matn</span>';

// Stillarni o'zgartirish
element.style.backgroundColor = 'red';
element.style.fontSize = '20px';

// Klasslarni boshqarish
element.classList.add('yangi-klass');
element.classList.remove('eski-klass');
element.classList.toggle('toggle-klass');`,
                explanation: "DOM elementlari xususiyatlarini o'zgartirish",
                result: "Elementlarni dinamik o'zgartirish"
            }
        ]
    },
    {
        id: 2,
        title: "Hodisalarni Boshqarish",
        description: "DOM elementlariga hodisa tinglovchilarini qo'shish va boshqarish",
        examples: [
            {
                name: "Event Listeners",
                code: `// Asosiy hodisa tinglovchisi
element.addEventListener('click', function(event) {
    console.log('Element bosildi!');
});

// Hodisa obyekti bilan ishlash
document.addEventListener('keydown', function(event) {
    console.log('Bosilgan tugma:', event.key);
    if (event.key === 'Escape') {
        console.log('Escape bosildi!');
    }
});

// Hodisani to'xtatish
element.addEventListener('click', function(event) {
    event.stopPropagation(); // Hodisa tarqalishini to'xtatish
    event.preventDefault();   // Standart xatti-harakatni to'xtatish
});`,
                explanation: "Hodisalarni tinglovchilar bilan ishlash",
                result: "Interaktiv web elementlar"
            }
        ]
    },
    {
        id: 3,
        title: "Dinamik Kontent",
        description: "DOM elementlarini dinamik ravishda yaratish va o'zgartirish",
        examples: [
            {
                name: "Element Yaratish va Qo'shish",
                code: `// Yangi element yaratish
const yangiElement = document.createElement('div');
yangiElement.textContent = 'Yangi element';
yangiElement.classList.add('yangi-klass');

// Elementni DOMga qo'shish
parentElement.appendChild(yangiElement);
parentElement.insertBefore(yangiElement, referenceElement);

// Elementni o'chirish
element.remove();
parentElement.removeChild(childElement);`,
                explanation: "Dinamik ravishda DOM elementlarini boshqarish",
                result: "Dinamik web sahifalar"
            }
        ]
    },
    {
        id: 4,
        title: "Amaliy Loyihalar",
        description: "DOM manipulyatsiyasi uchun amaliy loyihalar",
        examples: [
            {
                name: "Dinamik Tugmalar",
                code: `// Rang o'zgaruvchi tugma
function rangliTugmaYaratish() {
    const tugma = document.createElement('button');
    tugma.textContent = 'Meni bos!';
    
    const ranglar = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    let rangIndex = 0;
    
    tugma.addEventListener('click', () => {
        rangIndex = (rangIndex + 1) % ranglar.length;
        tugma.style.backgroundColor = ranglar[rangIndex];
        tugma.textContent = \`Rang \${rangIndex + 1}\`;
    });
    
    return tugma;
}`,
                explanation: "Interaktiv tugmalar yaratish",
                result: "Foydalanuvchi interfeysini boyitish"
            },
            {
                name: "Oddiy Slayder",
                code: `// Oddiy slayder yaratish
function slayderYaratish(rasmlar) {
    const slayder = document.createElement('div');
    slayder.classList.add('slayder');
    
    let joriyRasm = 0;
    
    // Rasm elementi
    const rasmElement = document.createElement('img');
    rasmElement.src = rasmlar[0];
    slayder.appendChild(rasmElement);
    
    // Tugmalar
    const oldingaTugma = document.createElement('button');
    oldingaTugma.textContent = 'Oldinga';
    const orqagaTugma = document.createElement('button');
    orqagaTugma.textContent = 'Orqaga';
    
    // Hodisa tinglovchilari
    oldingaTugma.addEventListener('click', () => {
        joriyRasm = (joriyRasm + 1) % rasmlar.length;
        rasmElement.src = rasmlar[joriyRasm];
    });
    
    orqagaTugma.addEventListener('click', () => {
        joriyRasm = (joriyRasm - 1 + rasmlar.length) % rasmlar.length;
        rasmElement.src = rasmlar[joriyRasm];
    });
    
    slayder.appendChild(orqagaTugma);
    slayder.appendChild(oldingaTugma);
    
    return slayder;
}

// Slayderni ishlatish
const rasmlar = [
    'rasm1.jpg',
    'rasm2.jpg',
    'rasm3.jpg'
];
const slayder = slayderYaratish(rasmlar);
document.body.appendChild(slayder);`,
                explanation: "Oddiy slayder komponenti yaratish",
                result: "Interaktiv slayder"
            }
        ]
    }
];

export default dataDomManipulyatsiya;
const dataCloneCode = [
    {
        id: 1,
        title: "Prototype Pattern",
        description: "Obyektlarning nusxasini yaratish uchun pattern",
        examples: [
            {
                name: "Shallow Clone",
                code: `// Shallow cloning example
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York'
    }
};

const shallowClone = Object.assign({}, originalObject);
// or
const spreadClone = { ...originalObject };`,
                explanation: "Yuza nusxa ko'chirish - faqat birinchi darajadagi xususiyatlarni nusxalaydi",
                result: "Nested obyektlar reference sifatida ko'chiriladi"
            },
            {
                name: "Deep Clone",
                code: `// Deep cloning methods
// Method 1: JSON
const deepClone1 = JSON.parse(JSON.stringify(originalObject));

// Method 2: Recursive function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    
    const copy = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}`,
                explanation: "Chuqur nusxa ko'chirish - barcha darajadagi ma'lumotlarni to'liq nusxalaydi",
                result: "Yangi, mustaqil obyekt yaratiladi"
            }
        ]
    },
    {
        id: 2,
        title: "Modern Clone Methods",
        description: "Zamonaviy JavaScript'da klonlash usullari",
        examples: [
            {
                name: "Structured Clone",
                code: `// Using structuredClone()
const original = {
    name: 'John',
    dates: [new Date()],
    map: new Map([['key', 'value']]),
    set: new Set([1, 2, 3]),
    nested: {
        array: [1, 2, 3],
        object: { a: 1, b: 2 }
    }
};

const clone = structuredClone(original);`,
                explanation: "structuredClone() - JavaScript'ning eng yangi va kuchli klonlash metodi",
                result: "Murakkab obyektlar va built-in obyektlarni to'g'ri klonlash"
            },
            {
                name: "Performance Clone",
                code: `// High-performance cloning
const fastClone = obj => {
    if (obj === null || typeof obj !== 'object') return obj;
    
    // Array check
    if (Array.isArray(obj)) {
        return obj.map(item => fastClone(item));
    }
    
    // Date check
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    // Object clone
    const clonedObj = {};
    Object.keys(obj).forEach(key => {
        clonedObj[key] = fastClone(obj[key]);
    });
    
    return clonedObj;
}`,
                explanation: "Yuqori unumdorlikka ega klonlash funksiyasi",
                result: "Katta hajmdagi ma'lumotlarni tez klonlash"
            }
        ]
    },
    {
        id: 3,
        title: "Immutable Clone",
        description: "O'zgarmas obyektlar yaratish usullari",
        examples: [
            {
                name: "Immutable Update",
                code: `// Immutable update patterns
const state = {
    user: {
        name: 'John',
        settings: {
            theme: 'dark',
            notifications: true
        }
    }
};

// Immutable update
const newState = {
    ...state,
    user: {
        ...state.user,
        settings: {
            ...state.user.settings,
            theme: 'light'
        }
    }
};`,
                explanation: "O'zgarmas obyektlarni yangilash usullari",
                result: "Side effect'larsiz ishlaydigan toza kod"
            },
            {
                name: "Freeze Objects",
                code: `// Making objects immutable
const config = Object.freeze({
    api: {
        url: 'https://api.example.com',
        key: 'secret-key'
    },
    settings: {
        timeout: 5000,
        retries: 3
    }
});

// Deep freeze function
function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
}`,
                explanation: "Obyektlarni muzlatish va o'zgartirib bo'lmaydigan qilish",
                result: "Xavfsiz va ishonchli ma'lumotlar strukturasi"
            }
        ]
    }
];

export default dataCloneCode;
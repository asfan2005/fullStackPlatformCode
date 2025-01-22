const storageBrowserData = [
    {
        id: 1,
        title: "localStorage API",
        description: "Brauzerda ma'lumotlarni doimiy saqlash uchun localStorage API dan foydalanish",
        examples: [
            {
                name: "Ma'lumotlarni saqlash",
                code: `// Ma'lumot saqlash
localStorage.setItem('username', 'Ali');
localStorage.setItem('settings', JSON.stringify({
    theme: 'dark',
    fontSize: 16
}));

// Ma'lumotlarni olish
const username = localStorage.getItem('username');
const settings = JSON.parse(localStorage.getItem('settings'));

// Ma'lumotni o'chirish
localStorage.removeItem('username');

// Barcha ma'lumotlarni o'chirish
localStorage.clear();`,
                explanation: "localStorage orqali ma'lumotlarni saqlash va boshqarish"
            },
            {
                name: "localStorage eventi",
                code: `// Boshqa oynalardagi o'zgarishlarni kuzatish
window.addEventListener('storage', (e) => {
    console.log('Kalit:', e.key);
    console.log('Eski qiymat:', e.oldValue);
    console.log('Yangi qiymat:', e.newValue);
    console.log('URL:', e.url);
});`,
                explanation: "Storage o'zgarishlarini kuzatish uchun event listener"
            }
        ]
    },
    {
        id: 2,
        title: "sessionStorage API",
        description: "Brauzerda vaqtinchalik ma'lumotlarni saqlash uchun sessionStorage",
        examples: [
            {
                name: "SessionStorage bilan ishlash",
                code: `// Ma'lumot saqlash
sessionStorage.setItem('userToken', 'abc123');
sessionStorage.setItem('cartItems', JSON.stringify([
    { id: 1, name: 'Mahsulot 1' },
    { id: 2, name: 'Mahsulot 2' }
]));

// Ma'lumotlarni olish
const token = sessionStorage.getItem('userToken');
const cart = JSON.parse(sessionStorage.getItem('cartItems'));

// Ma'lumotni o'chirish
sessionStorage.removeItem('userToken');

// Barcha ma'lumotlarni o'chirish
sessionStorage.clear();`,
                explanation: "SessionStorage orqali seans davomida ma'lumotlarni saqlash"
            },
            {
                name: "Storage hajmini tekshirish",
                code: `function getStorageSize() {
    let total = 0;
    for (let key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key)) {
            total += sessionStorage[key].length;
        }
    }
    return (total / 1024).toFixed(2) + ' KB';
}`,
                explanation: "Saqlangan ma'lumotlar hajmini hisoblash"
            }
        ]
    },
    {
        id: 3,
        title: "Cookies bilan ishlash",
        description: "Browser cookies orqali ma'lumotlarni saqlash va boshqarish",
        examples: [
            {
                name: "Cookie yaratish va o'qish",
                code: `// Cookie yaratish
document.cookie = "username=John; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
document.cookie = "theme=dark; max-age=86400; secure; samesite=strict";

// Cookies ni o'qish
function getCookie(name) {
    const value = \`; \${document.cookie}\`;
    const parts = value.split(\`; \${name}=\`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

// Cookie ni o'chirish
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`,
                explanation: "Cookie yaratish, o'qish va o'chirish usullari"
            },
            {
                name: "Cookie parametrlari",
                code: `// Kengaytirilgan cookie parametrlari
function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        secure: true,
        'max-age': 3600,
        ...options
    };

    let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        cookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            cookie += "=" + optionValue;
        }
    }

    document.cookie = cookie;
}`,
                explanation: "Cookie yaratishning kengaytirilgan funksiyasi"
            }
        ]
    },
    {
        id: 4,
        title: "IndexedDB API",
        description: "Katta hajmdagi strukturalangan ma'lumotlarni saqlash uchun IndexedDB",
        examples: [
            {
                name: "IndexedDB yaratish",
                code: `const request = indexedDB.open('MyDatabase', 1);

request.onerror = (event) => {
    console.error('Database error:', event.target.error);
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore('users', { keyPath: 'id' });
    store.createIndex('name', 'name', { unique: false });
};

request.onsuccess = (event) => {
    const db = event.target.result;
    // Ma'lumot qo'shish
    const transaction = db.transaction(['users'], 'readwrite');
    const store = transaction.objectStore('users');
    store.add({
        id: 1,
        name: 'Ali',
        email: 'ali@example.com'
    });
};`,
                explanation: "IndexedDB yaratish va ma'lumot qo'shish"
            },
            {
                name: "IndexedDB dan ma'lumot olish",
                code: `function getData(db, key) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['users'], 'readonly');
        const store = transaction.objectStore('users');
        const request = store.get(key);

        request.onerror = () => {
            reject(request.error);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
}

// Ishlatish
getData(db, 1).then(user => {
    console.log('Foydalanuvchi:', user);
}).catch(error => {
    console.error('Xato:', error);
});`,
                explanation: "IndexedDB dan ma'lumotlarni o'qish"
            }
        ]
    },
    {
        id: 5,
        title: "Cache API",
        description: "Web ilovalar uchun resurslarni keshlab saqlash",
        examples: [
            {
                name: "Cache API dan foydalanish",
                code: `// Resurslarni keshlash
caches.open('v1').then(cache => {
    return cache.addAll([
        '/styles/main.css',
        '/scripts/app.js',
        '/images/logo.png'
    ]);
});

// Keshlangan resurslarni olish
caches.match('/styles/main.css')
    .then(response => {
        if (response) {
            return response;
        }
        return fetch('/styles/main.css');
    });`,
                explanation: "Web resurslarni keshlash va ulardan foydalanish"
            },
            {
                name: "Cache strategiyasi",
                code: `self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request)
                    .then(response => {
                        return caches.open('v1')
                            .then(cache => {
                                cache.put(event.request, response.clone());
                                return response;
                            });
                    });
            })
    );
});`,
                explanation: "Cache-first strategiyasini qo'llash"
            }
        ]
    }
];

export default storageBrowserData;
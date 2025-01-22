const dataTestingDebug = [
    {
        id: 1,
        title: "Unit Testing",
        description: "JavaScript dasturlarni test qilish usullari",
        examples: [
            {
                name: "Jest bilan Unit Test",
                code: `// Jest ni o'rnatish
// npm install --save-dev jest

// Funksiyani test qilish
function sumNumbers(a, b) {
    return a + b;
}

test('sumNumbers funksiyasi to\'g\'ri ishlashini tekshirish', () => {
    expect(sumNumbers(2, 3)).toBe(5);
    expect(sumNumbers(-1, 1)).toBe(0);
    expect(sumNumbers(0, 0)).toBe(0);
});

// Asinxron funksiyani test qilish
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
}

test('fetchData funksiyasi ma\'lumotlarni olishini tekshirish', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
});`,
                explanation: "Jest test framework yordamida unit testlar yozish",
                result: "Dastur kodining to'g'ri ishlashini tekshirish"
            }
        ]
    },
    {
        id: 2,
        title: "Debugging Tools",
        description: "JavaScript dasturlarni debug qilish usullari",
        examples: [
            {
                name: "Console Methods",
                code: `// Oddiy log
console.log('Oddiy xabar');

// Ma'lumotlarni jadval ko'rinishida chiqarish
console.table([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Vali' }
]);

// Xatolarni log qilish
console.error('Xatolik yuz berdi!');

// Ogohlantirish xabari
console.warn('Diqqat!');

// Vaqtni o'lchash
console.time('Operatsiya');
// ... kod ...
console.timeEnd('Operatsiya');

// Stack trace ni ko'rsatish
console.trace('Stack trace');`,
                explanation: "Console metodlari orqali dasturni debug qilish",
                result: "Xatolarni topish va bartaraf etish"
            },
            {
                name: "Chrome DevTools",
                code: `// Breakpoint qo'yish
function murakkabFunksiya() {
    debugger; // Bu yerda kod to'xtaydi
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        sum += i;
    }
    return sum;
}

// Performance monitoring
console.profile('Dastur ishlashi');
// ... kod ...
console.profileEnd('Dastur ishlashi');

// Memory leaks ni tekshirish
// Chrome DevTools Memory tabida
// Heap snapshot olish va tahlil qilish`,
                explanation: "Chrome DevTools yordamida dasturni debug qilish",
                result: "Dastur ishlashini optimizatsiya qilish"
            }
        ]
    },
    {
        id: 3,
        title: "Error Handling",
        description: "Xatolarni boshqarish va qayta ishlash",
        examples: [
            {
                name: "Try-Catch",
                code: `// Oddiy try-catch
try {
    throw new Error('Xatolik yuz berdi');
} catch (error) {
    console.error('Xato:', error.message);
} finally {
    console.log('Har doim bajariladi');
}

// Custom Error yaratish
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Custom Error ni ishlatish
function validateUser(user) {
    if (!user.name) {
        throw new ValidationError('Ism kiritilmagan');
    }
    if (!user.age || user.age < 0) {
        throw new ValidationError('Noto\'g\'ri yosh');
    }
}

// Asinxron xatolarni ushlash
async function fetchUser() {
    try {
        const response = await fetch('https://api.example.com/user');
        if (!response.ok) {
            throw new Error('Network response error');
        }
        return await response.json();
    } catch (error) {
        console.error('Xato:', error);
        throw error;
    }
}`,
                explanation: "Xatolarni professional darajada boshqarish",
                result: "Xavfsiz va ishonchli dastur yaratish"
            }
        ]
    },
    {
        id: 4,
        title: "Testing Best Practices",
        description: "Test yozishning eng yaxshi amaliyotlari",
        examples: [
            {
                name: "Integration Tests",
                code: `// Integration test misoli
describe('User Service Tests', () => {
    let userService;
    let dbConnection;

    beforeAll(async () => {
        dbConnection = await connectToDatabase();
        userService = new UserService(dbConnection);
    });

    afterAll(async () => {
        await dbConnection.close();
    });

    test('should create and retrieve user', async () => {
        // Test user yaratish
        const user = {
            name: 'Test User',
            email: 'test@example.com'
        };

        // User yaratish
        const createdUser = await userService.createUser(user);
        expect(createdUser.id).toBeDefined();

        // User ni olish
        const retrievedUser = await userService.getUser(createdUser.id);
        expect(retrievedUser).toEqual(createdUser);
    });
});`,
                explanation: "Integration testlar yozish va test coverage ni ta'minlash",
                result: "Dastur komponentlarining to'g'ri ishlashini tekshirish"
            }
        ]
    },
    {
        id: 5,
        title: "Performance Testing",
        description: "Dastur ishlash tezligini tekshirish",
        examples: [
            {
                name: "Performance Tests",
                code: `// Performance test misoli
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

// Turli algoritmlarni taqqoslash
suite
    .add('Array.prototype.map', () => {
        return [1, 2, 3, 4, 5].map(x => x * 2);
    })
    .add('For loop', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * 2);
        }
        return result;
    })
    .on('cycle', event => {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Eng tez:', this.filter('fastest').map('name'));
    })
    .run({ 'async': true });

// Memory usage ni tekshirish
const used = process.memoryUsage();
console.log(\`Memory usage:
    RSS: \${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB
    Heap: \${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB\`);`,
                explanation: "Dastur ishlash tezligini va resurs sarfini o'lchash",
                result: "Dastur optimizatsiyasi uchun ma'lumotlar olish"
            }
        ]
    }
];

export default dataTestingDebug;
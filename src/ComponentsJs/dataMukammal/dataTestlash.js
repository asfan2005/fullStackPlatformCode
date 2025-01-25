const dataTestlash = [
    {
        id: 1,
        title: "Unit Testing Asoslari",
        description: "Jest test framework bilan ishlash va unit testlar yozish",
        examples: [
            {
                name: "Jest bilan oddiy test",
                code: `// matematik.js
export const qoshish = (a, b) => a + b;
export const kopaytirish = (a, b) => a * b;

// matematik.test.js
import { qoshish, kopaytirish } from './matematik';

describe('Matematik funksiyalar testi', () => {
    test('qoshish funksiyasi togri ishlashi kerak', () => {
        expect(qoshish(2, 3)).toBe(5);
        expect(qoshish(-1, 1)).toBe(0);
        expect(qoshish(0, 0)).toBe(0);
    });

    test('kopaytirish funksiyasi togri ishlashi kerak', () => {
        expect(kopaytirish(2, 3)).toBe(6);
        expect(kopaytirish(-2, 3)).toBe(-6);
        expect(kopaytirish(0, 5)).toBe(0);
    });
});`,
                explanation: "Jest test frameworki bilan unit testlar yozish",
                result: "Funksiyalar to'g'ri ishlashini tekshirish"
            }
        ]
    },
    {
        id: 2,
        title: "Matn Testlari",
        description: "Matn bilan ishlaydigan funksiyalarni testlash",
        examples: [
            {
                name: "Matn funksiyalari testi",
                code: `// stringUtils.js
export const teskariAylanish = (text) => {
    return text.split('').reverse().join('');
};

export const kattaHarf = (text) => {
    return text.toUpperCase();
};

// stringUtils.test.js
import { teskariAylanish, kattaHarf } from './stringUtils';

describe('Matn funksiyalari testi', () => {
    test('teskariAylanish funksiyasi', () => {
        expect(teskariAylanish('hello')).toBe('olleh');
        expect(teskariAylanish('12345')).toBe('54321');
        expect(teskariAylanish('')).toBe('');
    });

    test('kattaHarf funksiyasi', () => {
        expect(kattaHarf('hello')).toBe('HELLO');
        expect(kattaHarf('JavaScript')).toBe('JAVASCRIPT');
        expect(kattaHarf('')).toBe('');
    });
});`,
                explanation: "Matn funksiyalarini testlash",
                result: "Matn operatsiyalari to'g'ri ishlashini tekshirish"
            }
        ]
    },
    {
        id: 3,
        title: "Asinxron Testlar",
        description: "Promise va async/await funksiyalarni testlash",
        examples: [
            {
                name: "Asinxron funksiyalar testi",
                code: `// api.js
export const fetchUser = async (id) => {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    return response.json();
};

// api.test.js
import { fetchUser } from './api';

describe('API testlari', () => {
    test('fetchUser malumotlarni olishi kerak', async () => {
        const user = await fetchUser(1);
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
    });

    test('noto'g'ri ID uchun xato qaytarishi kerak', async () => {
        await expect(fetchUser(-1)).rejects.toThrow();
    });
});`,
                explanation: "Asinxron funksiyalarni testlash",
                result: "API va asinxron operatsiyalarni tekshirish"
            }
        ]
    },
    {
        id: 4,
        title: "Mock va Stub Testlash",
        description: "Mock obyektlar va stub funksiyalar bilan ishlash",
        examples: [
            {
                name: "Mock funksiyalar",
                code: `// database.js
export class Database {
    async saveUser(user) {
        // Ma'lumotlar bazasiga saqlash
    }
}

// userService.js
export class UserService {
    constructor(database) {
        this.database = database;
    }

    async createUser(userData) {
        await this.database.saveUser(userData);
        return { success: true };
    }
}

// userService.test.js
import { UserService } from './userService';

describe('UserService testi', () => {
    test('createUser database ni chaqirishi kerak', async () => {
        const mockDatabase = {
            saveUser: jest.fn()
        };
        
        const service = new UserService(mockDatabase);
        await service.createUser({ name: 'John' });
        
        expect(mockDatabase.saveUser).toHaveBeenCalledWith({ 
            name: 'John' 
        });
    });
});`,
                explanation: "Mock obyektlar bilan testlash",
                result: "Tashqi bog'liqliklarni simulyatsiya qilish"
            }
        ]
    },
    {
        id: 5,
        title: "Test Coverage",
        description: "Kod qamrovini tekshirish va hisobot olish",
        examples: [
            {
                name: "Jest coverage",
                code: `// package.json
{
    "scripts": {
        "test": "jest",
        "test:coverage": "jest --coverage"
    }
}

// jest.config.js
module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/index.js',
        '!**/node_modules/**'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
}`,
                explanation: "Test qamrovini konfiguratsiya qilish",
                result: "Kod qamrovi hisoboti va sifat nazorati"
            }
        ]
    }
];

export default dataTestlash;
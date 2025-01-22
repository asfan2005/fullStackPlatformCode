const dataTestingDebug = [
    {
        id: 1,
        title: "Unit Testing",
        description: "JavaScript dasturlarni test qilish usullari va metodologiyalari",
        examples: [
            {
                name: "Jest bilan Unit Test",
                code: `// Jest ni o'rnatish
npm install --save-dev jest

// Test konfiguratsiyasi (jest.config.js)
module.exports = {
    verbose: true,
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80
        }
    }
};

// Math utils test
const mathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : null
};

describe('Math Utils Tests', () => {
    test('add funksiyasi', () => {
        expect(mathUtils.add(2, 3)).toBe(5);
        expect(mathUtils.add(-1, 1)).toBe(0);
        expect(mathUtils.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('subtract funksiyasi', () => {
        expect(mathUtils.subtract(5, 3)).toBe(2);
        expect(mathUtils.subtract(1, 1)).toBe(0);
    });

    test('multiply funksiyasi', () => {
        expect(mathUtils.multiply(2, 3)).toBe(6);
        expect(mathUtils.multiply(-2, 3)).toBe(-6);
    });

    test('divide funksiyasi', () => {
        expect(mathUtils.divide(6, 2)).toBe(3);
        expect(mathUtils.divide(5, 0)).toBeNull();
    });
});`,
                explanation: "Jest test framework yordamida unit testlarni yozish va test coverage ni ta'minlash",
                result: "Dastur kodining to'g'ri ishlashini va sifatini ta'minlash"
            },
            {
                name: "Mock va Spy Tests",
                code: `// Mock funksiya yaratish
const mockCallback = jest.fn(x => x + 1);
forEach([0, 1], mockCallback);

// Mock funksiyani tekshirish
expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.results[0].value).toBe(1);

// API ni mock qilish
jest.mock('axios');
test('API test', async () => {
    axios.get.mockResolvedValue({ data: { id: 1, name: 'Test' } });
    const result = await fetchUser(1);
    expect(result.name).toBe('Test');
});

// Spy yaratish
const calculator = {
    add: (a, b) => a + b
};
const spy = jest.spyOn(calculator, 'add');
calculator.add(2, 3);
expect(spy).toHaveBeenCalledWith(2, 3);`,
                explanation: "Mock va Spy testlar yordamida murakkab testlarni yaratish",
                result: "Tashqi bog'liqliklarni va funksiyalar chaqirilishini tekshirish"
            }
        ]
    },
    {
        id: 2,
        title: "Advanced Debugging",
        description: "Professional darajada debug qilish usullari",
        examples: [
            {
                name: "Chrome DevTools Advanced",
                code: `// Performance monitoring
console.profile('Algorithm Performance');
const result = complexAlgorithm();
console.profileEnd('Algorithm Performance');

// Memory leak detection
let leakyArray = [];
function addToArray() {
    for (let i = 0; i < 10000; i++) {
        leakyArray.push(new Array(10000));
    }
}

// Event listener leak
class Component {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
        window.addEventListener('click', this.handleClick);
    }
    
    destroy() {
        // Clean up
        window.removeEventListener('click', this.handleClick);
    }
}

// Source maps for debugging
// webpack.config.js
module.exports = {
    devtool: 'source-map',
    // ...config
};`,
                explanation: "Xotira sizishlarini aniqlash va dastur ishlashini monitoring qilish",
                result: "Dastur resurslaridan optimal foydalanishni ta'minlash"
            }
        ]
    },
    {
        id: 3,
        title: "Error Handling va Logging",
        description: "Professional xatolarni boshqarish va logging",
        examples: [
            {
                name: "Advanced Error Handling",
                code: `// Custom Error hierarchiyasi
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ValidationError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

class DatabaseError extends AppError {
    constructor(message) {
        super(message, 500);
    }
}

// Xatolarni qayta ishlash
async function handleRequest(req, res) {
    try {
        const result = await processRequest(req);
        res.json(result);
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).json({ error: error.message });
        } else if (error instanceof DatabaseError) {
            logger.error(error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            logger.error('Unexpected error:', error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
}`,
                explanation: "Professional xatolarni boshqarish va logging tizimini yaratish",
                result: "Xavfsiz va ishonchli dastur yaratish"
            }
        ]
    },
    {
        id: 4,
        title: "Performance Optimization",
        description: "Dastur ishlashini optimizatsiya qilish usullari",
        examples: [
            {
                name: "Performance Optimization Techniques",
                code: `// Memory optimization
const cache = new Map();
function memoize(fn) {
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Event debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Async code optimization
async function optimizedFetch() {
    const [users, posts] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/posts')
    ]);
    return {
        users: await users.json(),
        posts: await posts.json()
    };
}`,
                explanation: "Dastur ishlashini optimizatsiya qilish usullari",
                result: "Tezkor va samarali dastur yaratish"
            }
        ]
    }
];

export default dataTestingDebug;
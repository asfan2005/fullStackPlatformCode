const dataModullar = [
    {
        id: 1,
        title: "Asosiy Module Tushunchalar",
        description: "JavaScript modullarining asosiy tushunchalari va sodda misollar",
        examples: [
            {
                name: "Oddiy Export/Import",
                code: `// helper.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { sum, multiply } from './helper.js';
console.log(sum(2, 3));      // 5
console.log(multiply(2, 3)); // 6`,
                explanation: "Eng sodda export/import misoli",
                result: "5\n6"
            },
            {
                name: "Default Export",
                code: `// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return \`Salom, \${this.name}!\`;
    }
}

// main.js
import User from './user.js';
const user = new User("Ali");
console.log(user.sayHi());`,
                explanation: "Default export va uni import qilish",
                result: "Salom, Ali!"
            }
        ]
    },
    {
        id: 2,
        title: "O'rta Darajadagi Modullar",
        description: "Module pattern va IIFE yordamida encapsulation",
        examples: [
            {
                name: "Module Pattern",
                code: `const Calculator = (function() {
    // Private variables
    let result = 0;
    
    // Private function
    function validate(num) {
        return typeof num === 'number';
    }
    
    return {
        add: function(num) {
            if (validate(num)) {
                result += num;
                return result;
            }
            return "Xato: son kiriting";
        },
        subtract: function(num) {
            if (validate(num)) {
                result -= num;
                return result;
            }
            return "Xato: son kiriting";
        },
        getResult: function() {
            return result;
        }
    };
})();

// Ishlatish
console.log(Calculator.add(5));     // 5
console.log(Calculator.subtract(2)); // 3
console.log(Calculator.getResult()); // 3`,
                explanation: "Module pattern orqali private va public metodlarni yaratish",
                result: "5\n3\n3"
            }
        ]
    },
    {
        id: 3,
        title: "Dinamik Import",
        description: "Modullarni dinamik ravishda yuklash usullari",
        examples: [
            {
                name: "Async Import",
                code: `// mathOperations.js
export const complexCalculation = (x) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * x * x);
        }, 1000);
    });
};

// main.js
async function loadMathModule() {
    try {
        const math = await import('./mathOperations.js');
        const result = await math.complexCalculation(3);
        console.log('Natija:', result);
    } catch (error) {
        console.error('Xato:', error);
    }
}

loadMathModule();`,
                explanation: "Dinamik import va async/await yordamida modullarni yuklash",
                result: "Natija: 27 (1 sekunddan keyin)"
            }
        ]
    },
    {
        id: 4,
        title: "Murakkab Module Tizimi",
        description: "Katta loyihalarda modullar bilan ishlash",
        examples: [
            {
                name: "Modullar Agregatsiyasi",
                code: `// api/users.js
export const getUsers = () => {
    return fetch('/api/users');
};

// api/posts.js
export const getPosts = () => {
    return fetch('/api/posts');
};

// api/index.js
export * from './users';
export * from './posts';

// services/dataService.js
import { getUsers, getPosts } from '../api';

export class DataService {
    async getAllData() {
        const [users, posts] = await Promise.all([
            getUsers(),
            getPosts()
        ]);
        return { users, posts };
    }
}

// main.js
import { DataService } from './services/dataService';

const service = new DataService();
service.getAllData()
    .then(data => console.log('Data:', data));`,
                explanation: "Katta loyihalarda modullarni strukturalash va agregatsiya qilish",
                result: "Data: { users: [...], posts: [...] }"
            }
        ]
    },
    {
        id: 5,
        title: "Maxsus Module Pattternlar",
        description: "Ilg'or module patternlar va ularning qo'llanilishi",
        examples: [
            {
                name: "Singleton Pattern with Modules",
                code: `// database.js
let instance = null;

export default class Database {
    constructor() {
        if (instance) {
            return instance;
        }
        this.connections = 0;
        instance = this;
    }

    connect() {
        this.connections++;
        return \`Ulanish #\${this.connections} yaratildi\`;
    }

    disconnect() {
        if (this.connections > 0) {
            this.connections--;
            return \`Ulanish uzildi. Qolgan ulanishlar: \${this.connections}\`;
        }
        return "Ulanishlar yo'q";
    }
}

// Ishlatish
import Database from './database.js';

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true
console.log(db1.connect());
console.log(db1.connect());
console.log(db2.disconnect());`,
                explanation: "Singleton pattern va modullarni birgalikda qo'llash",
                result: "true\nUlanish #1 yaratildi\nUlanish #2 yaratildi\nUlanish uzildi. Qolgan ulanishlar: 1"
            }
        ]
    }
];

export default dataModullar;
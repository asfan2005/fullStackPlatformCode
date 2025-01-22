const dataTypeScript = [
    {
        id: 1,
        title: "TypeScript Asoslari",
        description: "TypeScript dasturlash tilining asosiy tushunchalari",
        examples: [
            {
                name: "Basic Types",
                code: `// TypeScript basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Enum example
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

// Any and void
let notSure: any = 4;
function warnUser(): void {
    console.log("This is a warning message");
}`,
                explanation: "TypeScript'ning asosiy ma'lumot turlari",
                result: "Kuchli tipizatsiya va xatolarni oldini olish"
            },
            {
                name: "Interfaces",
                code: `// Interface definition
interface User {
    readonly id: number;
    name: string;
    age?: number;
    sayHello(): string;
}

// Implementation
class Employee implements User {
    readonly id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    sayHello(): string {
        return \`Hello, I'm \${this.name}\`;
    }
}`,
                explanation: "Interfacelar va ularning implementatsiyasi",
                result: "Kod strukturasini yaxshilash va maintainability"
            }
        ]
    },
    {
        id: 2,
        title: "Advanced TypeScript",
        description: "TypeScript'ning ilg'or xususiyatlari",
        examples: [
            {
                name: "Generics",
                code: `// Generic functions and classes
function identity<T>(arg: T): T {
    return arg;
}

// Generic class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// Generic constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}`,
                explanation: "Generic tiplar va ularning ishlatilishi",
                result: "Type-safe va qayta ishlatiluvchi kod"
            },
            {
                name: "Decorators",
                code: `// Class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Method decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

@sealed
class Example {
    @enumerable(false)
    method() {
        // method implementation
    }
}`,
                explanation: "Decoratorlar va metaprogramming",
                result: "Kod funksionalligini kengaytirish imkoniyati"
            }
        ]
    },
    {
        id: 3,
        title: "TypeScript Patterns",
        description: "TypeScript'da design pattern'lar",
        examples: [
            {
                name: "Singleton Pattern",
                code: `// Singleton implementation in TypeScript
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBusinessLogic() {
        // business logic
    }
}`,
                explanation: "TypeScript'da Singleton pattern",
                result: "Global state management va resurs optimizatsiyasi"
            },
            {
                name: "Factory Pattern",
                code: `// Factory pattern
interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    operation(): string {
        return "ConcreteProduct1";
    }
}

class ConcreteProduct2 implements Product {
    operation(): string {
        return "ConcreteProduct2";
    }
}

class Creator {
    public static createProduct(type: string): Product {
        switch(type) {
            case "1":
                return new ConcreteProduct1();
            case "2":
                return new ConcreteProduct2();
            default:
                throw new Error("Invalid product type");
        }
    }
}`,
                explanation: "Factory pattern implementatsiyasi",
                result: "Obyektlarni yaratishning moslashuvchan usuli"
            }
        ]
    }
];

export default dataTypeScript;
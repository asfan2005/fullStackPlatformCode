const dataDesignPatterns = [
    {
        id: 1,
        title: "Creational Patterns",
        description: "Obyektlarni yaratish uchun design pattern'lar",
        examples: [
            {
                name: "Singleton Pattern",
                code: `// Singleton pattern implementation
class Database {
    private static instance: Database;
    private constructor() {}
    
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    
    public query(sql: string) {
        // Database query logic
    }
}

// Foydalanish
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true`,
                explanation: "Singleton pattern bitta obyektning yagona nusxasini ta'minlaydi",
                result: "Global holatni boshqarish va resurslardan samarali foydalanish"
            },
            {
                name: "Factory Method",
                code: `// Factory Method implementation
interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver() {
        return "Truck delivery";
    }
}

class Ship implements Transport {
    deliver() {
        return "Sea delivery";
    }
}

class LogisticsFactory {
    createTransport(type: string): Transport {
        switch(type) {
            case 'truck':
                return new Truck();
            case 'ship':
                return new Ship();
            default:
                throw new Error('Unknown transport type');
        }
    }
}`,
                explanation: "Factory Method obyektlarni yaratish uchun interface taqdim etadi",
                result: "Kengaytiriladigan obyekt yaratish tizimi"
            }
        ]
    },
    {
        id: 2,
        title: "Structural Patterns",
        description: "Obyektlar va klasslar tuzilishini shakllantirish uchun pattern'lar",
        examples: [
            {
                name: "Adapter Pattern",
                code: `// Adapter pattern implementation
interface ModernPayment {
    processPayment(amount: number): void;
}

class LegacyPayment {
    oldProcessPayment(sum: number) {
        console.log(\`Processing old payment: \${sum}\`);
    }
}

class PaymentAdapter implements ModernPayment {
    private legacyPayment: LegacyPayment;

    constructor(legacyPayment: LegacyPayment) {
        this.legacyPayment = legacyPayment;
    }

    processPayment(amount: number): void {
        this.legacyPayment.oldProcessPayment(amount);
    }
}`,
                explanation: "Adapter pattern turli interfacelarni moslashtiradi",
                result: "Mos kelmaydigan interfacelarning birgalikda ishlashi"
            }
        ]
    },
    {
        id: 3,
        title: "Behavioral Patterns",
        description: "Obyektlar o'rtasidagi aloqa va mas'uliyatlarni taqsimlash pattern'lari",
        examples: [
            {
                name: "Observer Pattern",
                code: `// Observer pattern implementation
interface Observer {
    update(data: any): void;
}

class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    public notify(data: any): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}

class UserInterface implements Observer {
    update(data: any): void {
        console.log(\`UI updated with: \${data}\`);
    }
}`,
                explanation: "Observer pattern obyektlar o'rtasida bog'liqlikni ta'minlaydi",
                result: "Real vaqtda ma'lumotlarni sinxronlash"
            }
        ]
    },
    {
        id: 4,
        title: "Architectural Patterns",
        description: "Dastur arxitekturasini tashkil qilish pattern'lari",
        examples: [
            {
                name: "MVC Pattern",
                code: `// MVC pattern implementation
class Model {
    private data: any;

    getData() {
        return this.data;
    }

    setData(data: any) {
        this.data = data;
        // Notify observers
    }
}

class View {
    display(data: any) {
        console.log(\`Displaying: \${data}\`);
    }
}

class Controller {
    private model: Model;
    private view: View;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
    }

    updateView() {
        const data = this.model.getData();
        this.view.display(data);
    }

    setData(data: any) {
        this.model.setData(data);
    }
}`,
                explanation: "MVC pattern dastur logikasini alohida qatlamlarga ajratadi",
                result: "Kodni samarali tashkil qilish va boshqarish"
            }
        ]
    }
];

export default dataDesignPatterns;
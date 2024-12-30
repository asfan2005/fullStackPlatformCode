import React from 'react'

function Es6New() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript ES6 Yangiliklari</h1>
        <p className="text-gray-700 mb-4">
          ES6 (ECMAScript 2015) - JavaScript tiliga ko'plab yangi imkoniyatlar va yaxshilanishlar olib kelgan versiya.
          Bu yangiliklar kod yozishni yanada samarali va zamonaviy qildi.
        </p>

        <div className="space-y-6">
          {/* 1. let va const */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. let va const</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">O'zgaruvchilarni e'lon qilishning yangi usullari:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// let - qayta qiymat berish mumkin
let name = "Ali";
name = "Vali"; // OK

// const - o'zgarmas qiymat
const PI = 3.14;
// PI = 3.15; // Xato!

// Block scope
{
  let x = 10;
  const y = 20;
}
// console.log(x); // Xato! x bu yerda mavjud emas`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Arrow Functions */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Arrow Functions</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Oddiy funksiya
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Bir qatorli
const square = x => x * x;

// Ko'p qatorli
const calculate = (x, y) => {
  const sum = x + y;
  return sum * 2;
};`}</code>
              </pre>
            </div>
          </div>

          {/* 3. Template Literals */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Template Literals</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`const name = "Ali";
const age = 25;

// Eski usul
const oldWay = "Mening ismim " + name + ", yoshim " + age;

// Template literal
const newWay = \`Mening ismim \${name}, yoshim \${age}\`;

// Ko'p qatorli matn
const multiLine = \`
  Birinchi qator
  Ikkinchi qator
  Uchinchi qator
\`;`}</code>
              </pre>
            </div>
          </div>

          {/* 4. Destructuring */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Destructuring</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Massiv destructuring
const colors = ["qizil", "yashil", "ko'k"];
const [first, second] = colors;

// Obyekt destructuring
const person = {
  name: "Ali",
  age: 25,
  city: "Toshkent"
};
const { name, age } = person;

// Default qiymatlar bilan
const { country = "O'zbekiston" } = person;`}</code>
              </pre>
            </div>
          </div>

          {/* 5. Spread va Rest */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Spread va Rest Operatorlari</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

const defaults = { theme: "light", lang: "uz" };
const settings = { ...defaults, theme: "dark" };

// Rest parameter
const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3, 4)); // 10`}</code>
              </pre>
            </div>
          </div>

          {/* 6. Default Parameters */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Standart Parametrlar</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">Funksiya parametrlariga standart qiymat berish imkoniyati:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Standart parametrlar
const greet = (name = "Mehmon") => \`Salom, \${name}!\`;
console.log(greet());        // Salom, Mehmon!
console.log(greet("Ali"));   // Salom, Ali!

// Ko'p parametrli
const createUser = (
  name = "Foydalanuvchi",
  age = 18,
  city = "Toshkent"
) => ({
  name,
  age,
  city
});

console.log(createUser("Ali", 25));
// { name: "Ali", age: 25, city: "Toshkent" }`}</code>
              </pre>
            </div>
          </div>

          {/* 7. for...of Loop */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-teal-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. for...of Tsikli</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">Iteratsiya qilinadigan obyektlar bilan ishlash:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Massiv bilan
const colors = ["qizil", "yashil", "ko'k"];
for (const color of colors) {
  console.log(color);
}

// String bilan
const text = "Salom";
for (const char of text) {
  console.log(char);
}

// Set bilan
const uniqueNumbers = new Set([1, 2, 3]);
for (const num of uniqueNumbers) {
  console.log(num);
}`}</code>
              </pre>
            </div>
          </div>

          {/* 8. Classes */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. Klasslar</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">OOP uchun yangi sintaksis:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} gapiryapti\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} vov-vov deyapti\`;
  }
}

const dog = new Dog("Bobik", "Buldog");
console.log(dog.speak()); // Bobik vov-vov deyapti`}</code>
              </pre>
            </div>
          </div>

          {/* 9. Modules */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">9. Modullar</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">Kodni modullarga bo'lish:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default class Calculator {
  multiply(a, b) {
    return a * b;
  }
}

// main.js
import Calculator, { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

const calc = new Calculator();
console.log(calc.multiply(5, 3)); // 15`}</code>
              </pre>
            </div>
          </div>

          {/* 10. Map and Set */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">10. Map va Set</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Map</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const userMap = new Map();

// Map ga qo'shish
userMap.set('ali', { age: 25, city: 'Toshkent' });
userMap.set('vali', { age: 30, city: 'Samarqand' });

// Map dan olish
console.log(userMap.get('ali')); // { age: 25, city: 'Toshkent' }

// Map ustida iteratsiya
for (const [key, value] of userMap) {
  console.log(\`\${key}: \${JSON.stringify(value)}\`);
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Set</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set(4) { 1, 2, 3, 4 }

// Set ga qo'shish
uniqueNumbers.add(5);

// Set da mavjudligini tekshirish
console.log(uniqueNumbers.has(2)); // true

// Set dan o'chirish
uniqueNumbers.delete(1);`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 11. Symbol */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">11. Symbol</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">Noyob identifikatorlar yaratish:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Symbol yaratish
const id = Symbol('id');
const name = Symbol('name');

// Obyektda ishlatish
const user = {
  [id]: 1,
  [name]: 'Ali'
};

console.log(user[id]); // 1
console.log(Symbol('id') === Symbol('id')); // false

// Global Symbol
const globalId = Symbol.for('globalId');
const sameGlobalId = Symbol.for('globalId');
console.log(globalId === sameGlobalId); // true`}</code>
              </pre>
            </div>
          </div>

          {/* 12. Generators */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">12. Generatorlar</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">Iteratsiya qilinadigan funksiyalar yaratish:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Cheksiz generator
function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 1`}</code>
              </pre>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>ES6 zamonaviy JavaScript dasturlashning poydevori</li>
                <li>Kod yozishni soddalashtiradi va samaradorlikni oshiradi</li>
                <li>OOP va modulli dasturlashni qo'llab-quvvatlaydi</li>
                <li>Yangi ma'lumot turlari va strukturalari</li>
                <li>Asinxron dasturlash imkoniyatlari</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Es6New
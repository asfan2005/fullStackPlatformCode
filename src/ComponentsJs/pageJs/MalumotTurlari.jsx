import React from 'react';

function MalumotTurlari() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">JavaScript Ma'lumot Turlari</h1>
      
      {/* Asosiy tushuntirish */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-gray-800">
          JavaScriptda ma'lumot turlari (data types) ikki asosiy turga bo'linadi: 
          <span className="font-bold">primiv turdagi ma'lumotlar</span> va 
          <span className="font-bold"> murakkab turdagi ma'lumotlar</span>.
        </p>
      </div>

      {/* Primiv Ma'lumot Turlari */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-2 pb-2">
          Primiv turdagi ma'lumotlar
        </h2>
        
        <div className="space-y-6">
          {/* String */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">1. String (Matn)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Matnli ma'lumotlarni ifodalaydi</li>
                <li>Ikkita yoki bitta qo'shtirnoq ichida yoziladi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let text = "Hello, World!";
let singleText = 'JavaScript is fun!';
console.log(text); // Hello, World!`}</code>
              </pre>
            </div>
          </div>

          {/* Number */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">2. Number (Raqam)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Butun va o'nlik sonlarni ifodalaydi</li>
                <li>Integer yoki float kabi alohida turlarga bo'linmaydi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let num1 = 42; // Butun son
let num2 = 3.14; // O'nlik son
console.log(num1 + num2); // 45.14`}</code>
              </pre>
            </div>
          </div>

          {/* BigInt */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">3. BigInt</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Juda katta raqamlarni saqlash uchun ishlatiladi</li>
                <li>2<sup>53</sup> - 1 dan katta yoki kichik raqamlarni ifodalaydi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n`}</code>
              </pre>
            </div>
          </div>

          {/* Boolean */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">4. Boolean (Mantiqiy qiymat)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Haqiqat yoki yolg'onni ifodalaydi</li>
                <li>Qiymatlari: true yoki false</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let isAvailable = true;
let isComplete = false;
console.log(isAvailable); // true`}</code>
              </pre>
            </div>
          </div>

          {/* Undefined */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">5. Undefined</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Qiymati belgilangan bo'lmagan o'zgaruvchi</li>
                <li>O'zgaruvchi e'lon qilingan, lekin qiymat berilmagan holatda paydo bo'ladi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let x;
console.log(x); // undefined`}</code>
              </pre>
            </div>
          </div>

          {/* Null */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">6. Null</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Hech qanday qiymatga ega emasligini ifodalaydi</li>
                <li>Qo'lda tayinlangan bo'sh qiymat</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let y = null;
console.log(y); // null`}</code>
              </pre>
            </div>
          </div>

          {/* Symbol */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">7. Symbol</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Unikal va o'ziga xos identifikatorlarni yaratish uchun ishlatiladi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Murakkab Ma'lumot Turlari */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-2 pb-2">
          Murakkab turdagi ma'lumotlar
        </h2>
        
        <div className="space-y-6">
          {/* Object */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">1. Object (Ob'ekt)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Kalit-qiymat juftliklarini saqlash uchun ishlatiladi</li>
                <li>JavaScriptning asosiy strukturalaridan biri</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let person = {
  name: "Ali",
  age: 30,
  city: "Toshkent"
};
console.log(person.name); // Ali`}</code>
              </pre>
            </div>
          </div>

          {/* Array */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">2. Array (Massiv)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Tartiblangan qiymatlar to'plamini saqlaydi</li>
                <li>Ob'ektning maxsus ko'rinishi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
console.log(fruits[1]); // Banan`}</code>
              </pre>
            </div>
          </div>

          {/* Function */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">3. Function (Funksiya)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Qayta ishlatilishi mumkin bo'lgan kod blokini yaratadi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`function greet() {
  return "Salom!";
}
console.log(greet()); // Salom!`}</code>
              </pre>
            </div>
          </div>

          {/* Date */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">4. Date (Sana va vaqt)</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Vaqt va sanani ifodalaydi</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`let now = new Date();
console.log(now); // Hozirgi sana va vaqt`}</code>
              </pre>
            </div>
          </div>

          {/* Map va Set */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h3 className="text-xl font-semibold">5. Map va Set</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Map - kalit-qiymat juftliklarini saqlash</li>
                <li>Set - noyob qiymatlar to'plami</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded">
                <code>{`// Map
let map = new Map();
map.set("key1", "value1");
console.log(map.get("key1")); // value1

// Set
let set = new Set();
set.add(1);
set.add(2);
set.add(1); // Takrorlanadigan qiymat saqlanmaydi
console.log(set.size); // 2`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* typeof Operatori */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">typeof Operatori</h2>
        <p className="mb-4 text-gray-700">
          O'zgaruvchining ma'lumot turini tekshirish uchun ishlatiladi.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>{`let a = "Hello";
console.log(typeof a); // string

let b = 42;
console.log(typeof b); // number`}</code>
        </pre>
      </div>

      {/* Primiv va murakkab turlarning farqi */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">
          Primiv va murakkab turlarning asosiy farqi
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Primiv turlar qiymat orqali saqlanadi</li>
          <li>Murakkab turlar havola (reference) orqali saqlanadi</li>
          <li>Murakkab turlar katta miqdordagi ma'lumotlarni boshqarish uchun ishlatiladi</li>
        </ul>
      </div>

      {/* Amaliy namunalar */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8 text-indigo-700 border-b-2 pb-2">
          Amaliy namunalar
        </h2>

        {/* String namunalari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2">
            <h3 className="text-xl font-semibold">String bilan ishlash namunalari</h3>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`// 1. String metodlari
let matn = "JavaScript";
console.log(matn.length);  // 10
console.log(matn.toUpperCase());  // "JAVASCRIPT"
console.log(matn.toLowerCase());  // "javascript"
console.log(matn.slice(0, 4));  // "Java"

// 2. String birlashtirish
let ism = "Ali";
let familiya = "Valiyev";
let toliqIsm = ism + " " + familiya;
console.log(toliqIsm);  // "Ali Valiyev"

// 3. Template literal
let yosh = 25;
let kasb = "dasturchi";
let info = \`\${ism} \${yosh} yoshda va \${kasb} bo'lib ishlaydi\`;
console.log(info);  // "Ali 25 yoshda va dasturchi bo'lib ishlaydi"

// 4. String qidiruv
let jumla = "JavaScript - eng mashhur dasturlash tili";
console.log(jumla.includes("JavaScript"));  // true
console.log(jumla.startsWith("Java"));  // true
console.log(jumla.endsWith("tili"));  // true

// 5. String almashtirish
let xabar = "Salom, dunyo!";
console.log(xabar.replace("dunyo", "JavaScript"));  // "Salom, JavaScript!"`}</code>
            </pre>
          </div>
        </div>

        {/* Number namunalari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2">
            <h3 className="text-xl font-semibold">Number bilan ishlash namunalari</h3>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`// 1. Asosiy matematik amallar
let x = 10;
let y = 5;
console.log(x + y);  // 15 (qo'shish)
console.log(x - y);  // 5 (ayirish)
console.log(x * y);  // 50 (ko'paytirish)
console.log(x / y);  // 2 (bo'lish)
console.log(x % y);  // 0 (qoldiq)

// 2. Math obyekti metodlari
console.log(Math.PI);  // 3.141592653589793
console.log(Math.round(3.6));  // 4
console.log(Math.floor(3.6));  // 3
console.log(Math.ceil(3.2));   // 4
console.log(Math.random());    // 0-1 orasida tasodifiy son

// 3. Sonlarni formatlash
let kattaSon = 1000000;
console.log(kattaSon.toLocaleString());  // "1,000,000"
console.log(kattaSon.toExponential());   // "1e+6"

// 4. Sonlarni tekshirish
console.log(Number.isInteger(5));     // true
console.log(Number.isInteger(5.5));   // false
console.log(Number.isFinite(10/0));   // false

// 5. Son konvertatsiya
console.log(parseInt("123"));         // 123
console.log(parseFloat("3.14"));      // 3.14
console.log(Number("123.45"));        // 123.45`}</code>
            </pre>
          </div>
        </div>

        {/* Array namunalari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2">
            <h3 className="text-xl font-semibold">Array bilan ishlash namunalari</h3>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`// 1. Array yaratish va elementlar bilan ishlash
let mevalar = ["olma", "banan", "apelsin"];
mevalar.push("uzum");           // oxiriga qo'shish
mevalar.unshift("nok");        // boshiga qo'shish
console.log(mevalar);          // ["nok", "olma", "banan", "apelsin", "uzum"]
console.log(mevalar.pop());    // "uzum" (oxirgi elementni olish)
console.log(mevalar.shift());  // "nok" (birinchi elementni olish)

// 2. Array metodlari
let sonlar = [1, 2, 3, 4, 5];
let juftSonlar = sonlar.filter(son => son % 2 === 0);  // [2, 4]
let kvadratlar = sonlar.map(son => son * son);         // [1, 4, 9, 16, 25]
let yigindi = sonlar.reduce((a, b) => a + b, 0);      // 15

// 3. Array qidirish
let ismlar = ["Ali", "Vali", "Gani", "Ali"];
console.log(ismlar.indexOf("Ali"));        // 0
console.log(ismlar.lastIndexOf("Ali"));    // 3
console.log(ismlar.includes("Vali"));      // true

// 4. Array saralash
let tartibsizSonlar = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(tartibsizSonlar.sort());                    // Natural saralash
console.log(tartibsizSonlar.sort((a, b) => a - b));    // O'sish tartibida
console.log(tartibsizSonlar.sort((a, b) => b - a));    // Kamayish tartibida

// 5. Ko'p o'lchovli arraylar
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]);  // 5
matrix.forEach(qator => {
    qator.forEach(element => console.log(element));
});`}</code>
            </pre>
          </div>
        </div>

        {/* Object namunalari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2">
            <h3 className="text-xl font-semibold">Object bilan ishlash namunalari</h3>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`// 1. Obyekt yaratish va xususiyatlar bilan ishlash
let talaba = {
    ism: "Ali",
    yosh: 20,
    kurs: 2,
    fakultet: "Informatika"
};
console.log(talaba.ism);      // "Ali"
talaba.yosh = 21;             // Qiymatni o'zgartirish
talaba.stipendiya = true;     // Yangi xususiyat qo'shish
delete talaba.kurs;           // Xususiyatni o'chirish

// 2. Obyekt metodlari
let mashina = {
    model: "Tesla",
    yil: 2023,
    yurish: function() {
        return this.model + " harakatlanmoqda";
    }
};
console.log(mashina.yurish());  // "Tesla harakatlanmoqda"

// 3. Object.keys(), Object.values(), Object.entries()
let kompyuter = {
    CPU: "Intel i7",
    RAM: "16GB",
    SSD: "512GB"
};
console.log(Object.keys(kompyuter));    // ["CPU", "RAM", "SSD"]
console.log(Object.values(kompyuter));  // ["Intel i7", "16GB", "512GB"]
console.log(Object.entries(kompyuter)); // [["CPU","Intel i7"], ["RAM","16GB"], ["SSD","512GB"]]

// 4. Obyektlarni birlashtirish
let malumot1 = { a: 1, b: 2 };
let malumot2 = { c: 3, d: 4 };
let birlashgan = { ...malumot1, ...malumot2 };
console.log(birlashgan);  // { a: 1, b: 2, c: 3, d: 4 }

// 5. Obyekt destrukturizatsiyasi
let shaxs = {
    ism: "Vali",
    yosh: 25,
    manzil: {
        shahar: "Toshkent",
        tuman: "Chilonzor"
    }
};
let { ism, yosh, manzil: { shahar } } = shaxs;
console.log(ism, yosh, shahar);  // "Vali" 25 "Toshkent"`}</code>
            </pre>
          </div>
        </div>

        {/* Function namunalari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2">
            <h3 className="text-xl font-semibold">Function bilan ishlash namunalari</h3>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`// 1. Turli xil funksiya e'lonlari
// Oddiy funksiya
function qoshish(a, b) {
    return a + b;
}

// Arrow funksiya
const kopaytirish = (a, b) => a * b;

// Function expression
const bolish = function(a, b) {
    return a / b;
};

// 2. Parametrlar bilan ishlash
function salamlash(ism = "mehmon") {
    return \`Salom, \${ism}!\`;
}
console.log(salamlash());        // "Salom, mehmon!"
console.log(salamlash("Ali"));   // "Salom, Ali!"

// 3. Rest parametrlar
function yigindi(...sonlar) {
    return sonlar.reduce((sum, son) => sum + son, 0);
}
console.log(yigindi(1, 2, 3, 4, 5));  // 15

// 4. Callback funksiyalar
function bajar(x, callback) {
    return callback(x);
}
console.log(bajar(5, (x) => x * x));     // 25
console.log(bajar(6, (x) => x + 2));     // 8

// 5. Closure (Yopilish)
function tashqiFunksiya(x) {
    return function(y) {
        return x + y;
    };
}
const qoshBesh = tashqiFunksiya(5);
console.log(qoshBesh(3));  // 8
console.log(qoshBesh(7));  // 12`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MalumotTurlari;
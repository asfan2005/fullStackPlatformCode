import React from 'react'

function ArrayMassiv() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Massivlar (Array)</h1>
        <p className="text-gray-700 mb-4">
          JavaScriptda massiv (array) bir xil yoki turli xil qiymatlarni tartibli ko'rinishda saqlash uchun ishlatiladi. 
          Har bir element indeks bo'yicha saqlanadi va bu indeks orqali ularga murojaat qilinadi.
        </p>

        {/* Massiv yaratish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Massiv yaratish usullari</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Array obyekti yordamida
let myArray = new Array(); // Bo'sh massiv
let myArray2 = new Array(5); // 5 ta elementdan iborat massiv

// Kvadrat qavslar yordamida
let fruits = []; // Bo'sh massiv
let mevalar = ["Olma", "Banan", "Apelsin"];

// Element qo'shish usullari
fruits[0] = "Olma";
fruits.push("Banan");      // Oxiriga qo'shish
fruits.unshift("Apelsin"); // Boshiga qo'shish`}</code>
            </pre>
          </div>
        </div>

        {/* Massivdan elementlarni o'chirish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-green-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Massivdan elementlarni o'chirish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// pop() - oxirgi elementni o'chirish
let fruits = ["Olma", "Banan"];
let removed = fruits.pop();
console.log(fruits);   // ["Olma"]
console.log(removed);  // "Banan"

// shift() - birinchi elementni o'chirish
let mevalar = ["Olma", "Banan"];
let birinchi = mevalar.shift();
console.log(mevalar);   // ["Banan"]
console.log(birinchi);  // "Olma"`}</code>
            </pre>
          </div>
        </div>

        {/* Massiv metodlari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Asosiy massiv metodlari</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// concat() - massivlarni birlashtirish
let fruits = ["Olma", "Banan"];
let vegetables = ["Sabzi", "Karam"];
let combined = fruits.concat(vegetables);
console.log(combined); // ["Olma", "Banan", "Sabzi", "Karam"]

// slice() - massiv qismini olish
let mevalar = ["Olma", "Banan", "Apelsin", "Gilos"];
let qism = mevalar.slice(1, 3);
console.log(qism); // ["Banan", "Apelsin"]

// map() - har bir element uchun funksiya
let numbers = [1, 2, 3];
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]

// filter() - elementlarni filtrlash
let sonlar = [1, 2, 3, 4, 5];
let juftSonlar = sonlar.filter(num => num % 2 === 0);
console.log(juftSonlar); // [2, 4]`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Amaliy misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amaliy misollar</h2>

        {/* Ko'p o'lchamli massivlar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Ko'p o'lchamli massivlar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Ko'p o'lchamli massiv yaratish
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Elementga murojaat
console.log(matrix[1][2]); // 6

// Matrix ustida sikl
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Ob'ektlar massivi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Ob'ektlar massivi</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Ob'ektlar massivini yaratish
let users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Vali", age: 30 },
  { id: 3, name: "Gani", age: 28 }
];

// Filter bilan ishlash
let kattaYosh = users.filter(user => user.age > 25);
console.log(kattaYosh);

// Map bilan ishlash
let ismlar = users.map(user => user.name);
console.log(ismlar); // ["Ali", "Vali", "Gani"]`}</code>
            </pre>
          </div>
        </div>

        {/* Savatchadagi mahsulotlar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Savatchadagi mahsulotlar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Savatcha mahsulotlari
const savatcha = [
  { id: 1, nomi: "Telefon", narxi: 1200000, soni: 2 },
  { id: 2, nomi: "Quloqchin", narxi: 200000, soni: 1 },
  { id: 3, nomi: "Powerbank", narxi: 150000, soni: 3 }
];

// Umumiy summani hisoblash
const umumiySumma = savatcha.reduce((sum, mahsulot) => {
  return sum + (mahsulot.narxi * mahsulot.soni);
}, 0);

console.log(\`Umumiy summa: \${umumiySumma}\`); // 3050000

// Mahsulotlar sonini oshirish
const mahsulotniOshirish = (id) => {
  return savatcha.map(item => 
    item.id === id 
      ? { ...item, soni: item.soni + 1 }
      : item
  );
};

// Savatchadan mahsulot o'chirish
const mahsulotniOchirish = (id) => {
  return savatcha.filter(item => item.id !== id);
};

// Eng qimmat mahsulotni topish
const engQimmat = savatcha.reduce((max, item) => 
  item.narxi > max.narxi ? item : max
);

console.log("Eng qimmat mahsulot:", engQimmat.nomi);`}</code>
            </pre>
          </div>
        </div>

        {/* Ma'lumotlarni filtrlash va saralash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-teal-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. Ma'lumotlarni filtrlash va saralash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Talabalar ro'yxati
const talabalar = [
  { id: 1, ism: "Ali", yosh: 20, baho: 4.5 },
  { id: 2, ism: "Vali", yosh: 19, baho: 3.8 },
  { id: 3, ism: "Gani", yosh: 21, baho: 4.2 },
  { id: 4, ism: "Salim", yosh: 20, baho: 4.8 },
  { id: 5, ism: "Karim", yosh: 22, baho: 3.5 }
];

// A'lochi talabalar (4.0 dan yuqori)
const alochilar = talabalar
  .filter(talaba => talaba.baho >= 4.0)
  .sort((a, b) => b.baho - a.baho);

console.log("A'lochilar:", alochilar);

// Yosh bo'yicha guruhlash
const yoshBoyichaGuruhlash = talabalar.reduce((groups, talaba) => {
  const yosh = talaba.yosh;
  if (!groups[yosh]) {
    groups[yosh] = [];
  }
  groups[yosh].push(talaba);
  return groups;
}, {});

console.log("Yosh bo'yicha:", yoshBoyichaGuruhlash);

// O'rtacha bahoni hisoblash
const ortachaBaho = talabalar.reduce((sum, talaba) => 
  sum + talaba.baho, 0) / talabalar.length;

console.log(\`O'rtacha baho: \${ortachaBaho.toFixed(2)}\`);`}</code>
            </pre>
          </div>
        </div>

        {/* API ma'lumotlari bilan ishlash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-orange-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">5. API ma'lumotlari bilan ishlash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// API dan olingan foydalanuvchilar ma'lumotlari
const users = [
  { id: 1, name: "John", email: "john@example.com", active: true },
  { id: 2, name: "Jane", email: "jane@example.com", active: false },
  { id: 3, name: "Bob", email: "bob@example.com", active: true },
  { id: 4, name: "Alice", email: "alice@example.com", active: true }
];

// Faol foydalanuvchilarni topish
const activateUsers = async () => {
  try {
    // Faol foydalanuvchilarni filtrlash
    const activeUsers = users.filter(user => user.active);
    
    // Email bo'yicha saralash
    activeUsers.sort((a, b) => a.email.localeCompare(b.email));
    
    // Foydalanuvchi ma'lumotlarini formatlash
    const formattedUsers = activeUsers.map(user => ({
      ...user,
      displayName: user.name.toUpperCase(),
      domain: user.email.split('@')[1]
    }));

    return formattedUsers;
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    return [];
  }
};

// Foydalanuvchilarni guruhlash
const groupUsersByDomain = (users) => {
  return users.reduce((groups, user) => {
    const domain = user.email.split('@')[1];
    if (!groups[domain]) {
      groups[domain] = [];
    }
    groups[domain].push(user);
    return groups;
  }, {});
};

// Foydalanish
activateUsers().then(users => {
  console.log("Faol foydalanuvchilar:", users);
  console.log("Domainlar bo'yicha:", groupUsersByDomain(users));
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Qo'shimcha ma'lumotlar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Qo'shimcha ma'lumotlar</h2>

        {/* Foydali metodlar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-pink-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">Foydali metodlar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// indexOf() - element indeksini topish
let fruits = ["Olma", "Banan", "Apelsin"];
console.log(fruits.indexOf("Banan")); // 1

// includes() - element mavjudligini tekshirish
console.log(fruits.includes("Olma")); // true

// join() - massivni satrga aylantirish
console.log(fruits.join(", ")); // "Olma, Banan, Apelsin"

// sort() - saralash
fruits.sort();
console.log(fruits); // ["Apelsin", "Banan", "Olma"]

// reverse() - teskari tartib
fruits.reverse();
console.log(fruits); // ["Olma", "Banan", "Apelsin"]`}</code>
            </pre>
          </div>
        </div>

        {/* Xulosa */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-2">
            <h4 className="text-lg font-medium">Xulosa</h4>
          </div>
          <div className="p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Massivlar ma'lumotlarni tartibli saqlash uchun ishlatiladi</li>
              <li>Turli xil yaratish va elementlarni boshqarish usullari mavjud</li>
              <li>Ko'plab foydali metodlar orqali ma'lumotlarni qayta ishlash mumkin</li>
              <li>Ko'p o'lchamli massivlar murakkab ma'lumotlar strukturasini yaratish imkonini beradi</li>
              <li>Ob'ektlar massivi real loyihalarda keng qo'llaniladi</li>
              <li>Modern JavaScript metodlari massivlar bilan ishlashni osonlashtiradi</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArrayMassiv
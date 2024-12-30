import React from 'react'

function ArrayMetod() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Massiv Metodlari (Array Methods)</h1>
        <p className="text-gray-700 mb-4">
          JavaScriptda massiv metodlari ma'lumotlar bilan ishlashni osonlashtiradi va turli xil operatsiyalarni 
          bajarish imkonini beradi. Bu metodlar yordamida massivlarni qayta ishlash, qidirish, saralash va 
          boshqa amallarni bajarish mumkin.
        </p>

        {/* 1. Qo'shish va olib tashlash metodlari */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Qo'shish va olib tashlash metodlari</h2>
            </div>
            
            {/* push() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.1 push()</h3>
              <p className="text-gray-600 mb-2">Massivning oxiriga element qo'shadi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan"];
fruits.push("Apelsin");
console.log(fruits); // ["Olma", "Banan", "Apelsin"]`}</code>
              </pre>
            </div>

            {/* pop() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.2 pop()</h3>
              <p className="text-gray-600 mb-2">Massivning oxiridagi elementni olib tashlaydi va uni qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
let removed = fruits.pop();
console.log(fruits);   // ["Olma", "Banan"]
console.log(removed);  // "Apelsin"`}</code>
              </pre>
            </div>

            {/* unshift() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.3 unshift()</h3>
              <p className="text-gray-600 mb-2">Massivning boshiga element qo'shadi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan"];
fruits.unshift("Gilos");
console.log(fruits); // ["Gilos", "Olma", "Banan"]`}</code>
              </pre>
            </div>

            {/* shift() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.4 shift()</h3>
              <p className="text-gray-600 mb-2">Massivning boshidagi elementni olib tashlaydi va uni qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan"];
let removed = fruits.shift();
console.log(fruits);   // ["Banan"]
console.log(removed);  // "Olma"`}</code>
              </pre>
            </div>

            {/* splice() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.5 splice()</h3>
              <p className="text-gray-600 mb-2">Massivdan elementlarni olib tashlash, qo'shish yoki almashtirish uchun ishlatiladi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
fruits.splice(1, 1, "Gilos");  // 1-pozitsiyadagi elementni olib tashlab, "Gilos" qo'shadi
console.log(fruits); // ["Olma", "Gilos", "Apelsin"]`}</code>
              </pre>
            </div>

            {/* concat() */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.6 concat()</h3>
              <p className="text-gray-600 mb-2">Ikki yoki undan ortiq massivlarni birlashtiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan"];
let vegetables = ["Sabzi", "Karam"];
let combined = fruits.concat(vegetables);
console.log(combined); // ["Olma", "Banan", "Sabzi", "Karam"]`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Qidirish va tekshirish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Qidirish va tekshirish metodlari</h2>
            </div>

            {/* indexOf() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 indexOf()</h3>
              <p className="text-gray-600 mb-2">Elementning indeksini qaytaradi (topilmasa -1 qaytaradi).</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
console.log(fruits.indexOf("Banan")); // 1
console.log(fruits.indexOf("Gilos")); // -1`}</code>
              </pre>
            </div>

            {/* lastIndexOf() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.2 lastIndexOf()</h3>
              <p className="text-gray-600 mb-2">Elementning oxirgi indeksini qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Olma"];
console.log(fruits.lastIndexOf("Olma")); // 2`}</code>
              </pre>
            </div>

            {/* includes() */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.3 includes()</h3>
              <p className="text-gray-600 mb-2">Element massivda borligini tekshiradi (true yoki false qaytaradi).</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan"];
console.log(fruits.includes("Banan")); // true
console.log(fruits.includes("Gilos")); // false`}</code>
              </pre>
            </div>
          </div>

          {/* 3. O'zgartirish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. O'zgartirish metodlari</h2>
            </div>

            {/* reverse() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.1 reverse()</h3>
              <p className="text-gray-600 mb-2">Massivni teskari tartibga soladi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
fruits.reverse();
console.log(fruits); // ["Apelsin", "Banan", "Olma"]`}</code>
              </pre>
            </div>

            {/* sort() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.2 sort()</h3>
              <p className="text-gray-600 mb-2">Massivni alfavit yoki o'sish tartibida saralaydi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Satrlarni saralash
let fruits = ["Olma", "Banan", "Apelsin"];
fruits.sort();
console.log(fruits); // ["Apelsin", "Banan", "Olma"]

// Sonlarni saralash
let numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 25, 40]`}</code>
              </pre>
            </div>

            {/* fill() */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.3 fill()</h3>
              <p className="text-gray-600 mb-2">Massivni belgilangan qiymat bilan to'ldiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let numbers = [1, 2, 3, 4];
numbers.fill(0, 1, 3); // 1-pozitsiyadan 3-gacha 0 bilan to'ldiradi
console.log(numbers); // [1, 0, 0, 4]`}</code>
              </pre>
            </div>
          </div>

          {/* 4. Funksional metodlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Funksional metodlar</h2>
            </div>

            {/* map() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.1 map()</h3>
              <p className="text-gray-600 mb-2">Har bir elementga funksiya qo'llab, yangi massiv qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let numbers = [1, 2, 3];
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]`}</code>
              </pre>
            </div>

            {/* filter() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.2 filter()</h3>
              <p className="text-gray-600 mb-2">Berilgan shartga mos keluvchi elementlarni tanlab, yangi massiv qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]`}</code>
              </pre>
            </div>

            {/* reduce() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.3 reduce()</h3>
              <p className="text-gray-600 mb-2">Massivning barcha elementlarini bitta qiymatga yig'adi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10`}</code>
              </pre>
            </div>

            {/* forEach() */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.4 forEach()</h3>
              <p className="text-gray-600 mb-2">Har bir element uchun funksiya bajaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
fruits.forEach(fruit => console.log(fruit));
// Olma
// Banan
// Apelsin`}</code>
              </pre>
            </div>
          </div>

          {/* 5. Tekshirish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Tekshirish metodlari</h2>
            </div>

            {/* every() */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.1 every()</h3>
              <p className="text-gray-600 mb-2">Barcha elementlar shartga mos kelishini tekshiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let numbers = [2, 4, 6];
console.log(numbers.every(num => num % 2 === 0)); // true`}</code>
              </pre>
            </div>

            {/* some() */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.2 some()</h3>
              <p className="text-gray-600 mb-2">Kamida bitta element shartga mos kelishini tekshiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let numbers = [1, 2, 3];
console.log(numbers.some(num => num % 2 === 0)); // true`}</code>
              </pre>
            </div>
          </div>

          {/* 6. String yaratish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. String yaratish metodlari</h2>
            </div>

            {/* join() */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.1 join()</h3>
              <p className="text-gray-600 mb-2">Massiv elementlarini birlashtirib, satr yaratadi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let fruits = ["Olma", "Banan", "Apelsin"];
let joined = fruits.join(", ");
console.log(joined); // "Olma, Banan, Apelsin"`}</code>
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
                <li>Massiv metodlari ma'lumotlar bilan ishlashni osonlashtiradi</li>
                <li>Har bir metod o'zining maxsus vazifasiga ega</li>
                <li>Metodlarni kombinatsiyalab murakkab operatsiyalarni bajarish mumkin</li>
                <li>Modern JavaScript loyihalarida bu metodlar juda ko'p ishlatiladi</li>
                <li>Metodlarni to'g'ri tanlash dastur samaradorligini oshiradi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArrayMetod
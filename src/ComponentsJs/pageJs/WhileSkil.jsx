import React from 'react'

function WhileSkil() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">While Sikli</h1>
        <p className="text-gray-700 mb-4">
          While sikli JavaScriptda ma'lum bir shart bajarilguncha kodni qayta-qayta bajarish uchun ishlatiladi. Bu sikl, ayniqsa, takrorlashlar soni noma'lum bo'lgan holatlarda foydali hisoblanadi.
        </p>

        {/* Asosiy sintaksis */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. While siklining asosiy sintaksisi</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`while (shart) {
  // Takroran bajariladigan kod
}`}</code>
            </pre>
          </div>
        </div>

        {/* Oddiy misol */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-green-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Oddiy misol</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let i = 0;
while (i < 5) {
  console.log("Iteratsiya raqami: " + i);
  i++;
}

// Natija:
// Iteratsiya raqami: 0
// Iteratsiya raqami: 1
// Iteratsiya raqami: 2
// Iteratsiya raqami: 3
// Iteratsiya raqami: 4`}</code>
            </pre>
          </div>
        </div>

        {/* Break bilan ishlash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Break bilan sikldan chiqish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let i = 0;
while (i < 10) {
  if (i === 5) {
    break; // Sikl 5-ga yetganda to'xtaydi
  }
  console.log(i);
  i++;
}

// Natija:
// 0
// 1
// 2
// 3
// 4`}</code>
            </pre>
          </div>
        </div>

        {/* Continue bilan ishlash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. Continue bilan iteratsiyani o'tkazib yuborish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue; // 3-ni o'tkazib yuboradi
  }
  console.log(i);
}

// Natija:
// 1
// 2
// 4
// 5`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Amaliy misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amaliy misollar</h2>

        {/* Faktorial hisoblash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Faktorial hisoblash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function factorial(n) {
  let result = 1;
  let i = 1;
  
  while (i <= n) {
    result *= i;
    i++;
  }
  
  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6`}</code>
            </pre>
          </div>
        </div>

        {/* Massiv bilan ishlash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Massiv bilan ishlash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let fruits = ["olma", "banan", "apelsin"];
let index = 0;

while (index < fruits.length) {
  console.log(\`Meva \${index + 1}: \${fruits[index]}\`);
  index++;
}

// Natija:
// Meva 1: olma
// Meva 2: banan
// Meva 3: apelsin`}</code>
            </pre>
          </div>
        </div>

        {/* Raqamlar yig'indisi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-teal-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Raqamlar yig'indisi</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function sumOfDigits(number) {
  let sum = 0;
  let temp = Math.abs(number);
  
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  
  return sum;
}

console.log(sumOfDigits(123)); // 6 (1+2+3)
console.log(sumOfDigits(5678)); // 26 (5+6+7+8)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Kengaytirilgan misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Kengaytirilgan misollar</h2>

        {/* Tub sonlarni tekshirish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-pink-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Tub sonlarni tekshirish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function isPrime(num) {
  if (num < 2) return false;
  let i = 2;
  
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) return false;
    i++;
  }
  
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(12)); // false`}</code>
            </pre>
          </div>
        </div>

        {/* Fibonacci ketma-ketligi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-orange-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Fibonacci ketma-ketligi</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function fibonacci(n) {
  let a = 0, b = 1;
  let result = [a, b];
  let count = 2;
  
  while (count < n) {
    let c = a + b;
    result.push(c);
    a = b;
    b = c;
    count++;
  }
  
  return result;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Muhim eslatmalar va namunalar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Muhim eslatmalar va namunalar</h2>

        {/* 1. While sikli faqat shart qismidan iborat */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. While sikli faqat shart qismidan iborat</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2">While sikli for siklidan farqli ravishda faqat shart qismidan iborat:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// While sikli
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

// Tengkuch for sikli
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// Natija (ikkala holatda ham):
// 1
// 2
// 3`}</code>
            </pre>
          </div>
        </div>

        {/* 2. Shart true bo'lganda sikl davom etadi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-green-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Shart true bo'lganda sikl davom etadi</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2">Shart true bo'lguncha sikl davom etadi:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let sum = 0;
let num = 1;

while (sum < 10) {
  sum += num;
  console.log(\`Hozirgi yig'indi: \${sum}\`);
  num++;
}

// Natija:
// Hozirgi yig'indi: 1
// Hozirgi yig'indi: 3
// Hozirgi yig'indi: 6
// Hozirgi yig'indi: 10`}</code>
            </pre>
          </div>
        </div>

        {/* 3. Break operatori */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Break operatori siklni to'liq to'xtatish uchun</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2">Break operatori siklni shartdan qat'iy nazar to'xtatadi:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let password = "";
let attempts = 0;

while (true) {
  attempts++;
  password = prompt("Parolni kiriting:"); // Browser muhitida ishlaydi
  
  if (password === "secret123") {
    console.log("To'g'ri parol!");
    break;
  }
  
  if (attempts >= 3) {
    console.log("Urinishlar soni tugadi");
    break;
  }
  
  console.log("Noto'g'ri parol, qayta urinib ko'ring");
}

// Natija (foydalanuvchi kiritishiga qarab):
// "Noto'g'ri parol, qayta urinib ko'ring"
// "To'g'ri parol!" yoki "Urinishlar soni tugadi"`}</code>
            </pre>
          </div>
        </div>

        {/* 4. Continue operatori */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. Continue operatori iteratsiyani o'tkazib yuborish uchun</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2">Continue operatori joriy iteratsiyani o'tkazib yuboradi:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let i = 0;
let juftSonlarYigindisi = 0;

while (i < 10) {
  i++;
  
  if (i % 2 !== 0) {
    continue; // Toq sonlarni o'tkazib yuborish
  }
  
  juftSonlarYigindisi += i;
  console.log(\`Juft son topildi: \${i}\`);
}

console.log(\`Juft sonlar yig'indisi: \${juftSonlarYigindisi}\`);

// Natija:
// Juft son topildi: 2
// Juft son topildi: 4
// Juft son topildi: 6
// Juft son topildi: 8
// Juft son topildi: 10
// Juft sonlar yig'indisi: 30`}</code>
            </pre>
          </div>
        </div>

        {/* 5. Cheksiz sikllardan ehtiyot bo'lish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">5. Cheksiz sikllardan ehtiyot bo'lish</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2">Noto'g'ri yozilgan kod cheksiz siklga tushib qolishi mumkin:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// ❌ Noto'g'ri - Cheksiz sikl
let count = 1;
while (count > 0) {
  console.log(count);
  count++; // Count hech qachon 0 dan kichik bo'lmaydi
}

// ✅ To'g'ri - Cheklangan sikl
let count = 1;
let maxCount = 5;
while (count <= maxCount) {
  console.log(count);
  count++;
}

// Natija:
// 1
// 2
// 3
// 4
// 5`}</code>
            </pre>
          </div>
        </div>

        {/* 6. Hisoblagichni to'g'ri yangilab borish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">6. Hisoblagichni to'g'ri yangilab borish</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2">Hisoblagichni to'g'ri yangilab borish muhim:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// ❌ Noto'g'ri - Hisoblagich yangilanmayapti
let i = 0;
while (i < 3) {
  console.log(i); // Cheksiz sikl
}

// ❌ Noto'g'ri - Noto'g'ri joyda yangilanish
let j = 0;
while (j < 3) {
  j++; // Avval yangilanish
  console.log(j); // 1, 2, 3 chiqadi
}

// ✅ To'g'ri - Hisoblagich to'g'ri yangilanmoqda
let k = 0;
while (k < 3) {
  console.log(k); // 0, 1, 2 chiqadi
  k++; // Keyin yangilanish
}

// Natija:
// 0
// 1
// 2`}</code>
            </pre>
          </div>
        </div>

        {/* Qo'shimcha maslahatlar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-2">
            <h4 className="text-lg font-medium">Qo'shimcha maslahatlar</h4>
          </div>
          <div className="p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Har doim sikldan chiqish shartini tekshiring</li>
              <li>Hisoblagichni o'z vaqtida yangilab boring</li>
              <li>Break va continue operatorlarini ehtiyotkorlik bilan ishlating</li>
              <li>Murakkab shartlarda sikl ichida xatoliklar yuz bermasligi uchun tekshiruvlar qo'shing</li>
              <li>Sikl ichida resurslardan tejamkor foydalaning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhileSkil
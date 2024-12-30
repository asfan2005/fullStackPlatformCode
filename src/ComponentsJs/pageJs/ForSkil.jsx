import React from 'react'

function ForSkil() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">For Sikli</h1>
        <p className="text-gray-700 mb-4">
          For sikli JavaScriptda takroriy operatsiyalarni bajarish uchun ishlatiladi. Bu sikl ma'lum bir shart bajarilgunga qadar kodni qayta-qayta bajaradi.
        </p>

        {/* Asosiy sintaksis */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. For siklining asosiy sintaksisi</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`for (boshlang'ich; shart; yangilanish) {
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
              <code>{`for (let i = 0; i < 5; i++) {
  console.log("Iteratsiya raqami: " + i);
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
              <code>{`for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sikl 5-ga yetganda to'xtaydi
  }
  console.log(i);
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
              <code>{`for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // 2-ni o'tkazib yuboradi
  }
  console.log(i);
}

// Natija:
// 0
// 1
// 3
// 4`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Amaliy misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amaliy misollar</h2>

        {/* Ichma-ich for sikli */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Ichma-ich for sikli</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(\`i: \${i}, j: \${j}\`);
  }
}

// Natija:
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 1
// i: 2, j: 2
// i: 3, j: 1
// i: 3, j: 2`}</code>
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

for (let i = 0; i < fruits.length; i++) {
  console.log(\`Index: \${i}, Value: \${fruits[i]}\`);
}

// Natija:
// Index: 0, Value: olma
// Index: 1, Value: banan
// Index: 2, Value: apelsin`}</code>
            </pre>
          </div>
        </div>

        {/* Boshqa sikl turlari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-teal-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. For sikliga o'xshash boshqa sikllar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// while
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// do-while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for...of
let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}

// for...in
let person = { name: "Ali", age: 25 };
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Yangi qo'shimcha bo'limlar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Kengaytirilgan misollar</h2>

        {/* For sikli bilan sonlar ustida amallar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-pink-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Sonlar bilan ishlash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// 1. Juft sonlarni topish
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(\`Juft son: \${i}\`);
  }
}

// 2. Sonning faktorialini hisoblash
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120

// 3. Fibonacci ketma-ketligi
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`}</code>
            </pre>
          </div>
        </div>

        {/* Massivlar bilan murakkab operatsiyalar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-orange-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Massivlar bilan murakkab operatsiyalar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// 1. Massivni filtrlash
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 2. Massivni transformatsiya qilish
let originalArray = [1, 2, 3, 4, 5];
let squaredArray = [];
for (let i = 0; i < originalArray.length; i++) {
  squaredArray.push(originalArray[i] * originalArray[i]);
}
console.log(squaredArray); // [1, 4, 9, 16, 25]

// 3. 2D massiv bilan ishlash
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
console.log(\`Matritsa elementlari yig'indisi: \${sum}\`);`}</code>
            </pre>
          </div>
        </div>

        {/* Amaliy masalalar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-cyan-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Amaliy masalalar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// 1. Tub sonlarni topish
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(findPrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

// 2. Palindrom tekshirish
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// 3. Bubble sort algoritmi
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Almashtirish
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* For sikli bilan bog'liq muhim eslatmalar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Muhim eslatmalar</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <ul className="list-disc list-inside space-y-2">
              <li>For sikli boshlanish qiymati, shart va yangilanish qismlaridan iborat</li>
              <li>Break operatori siklni to'liq to'xtatish uchun ishlatiladi</li>
              <li>Continue operatori joriy iteratsiyani o'tkazib yuborish uchun ishlatiladi</li>
              <li>For...of massivlar va iteratsiya qilinadigan obyektlar uchun qulay</li>
              <li>For...in obyektning xususiyatlarini aylanib chiqish uchun ishlatiladi</li>
              <li>Ichma-ich sikllar murakkab vazifalarni hal qilishda foydali</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Har bir for turi uchun misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">For turlarining batafsil misollari</h2>

        {/* 1. For siklining asosiy qismlari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. For siklining asosiy qismlari</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Boshlang'ich qiymat: let i = 1
// Shart: i <= 5
// Yangilanish: i++

function generateMultiplicationTable(number) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    table.push(\`\${number} x \${i} = \${result}\`);
  }
  return table;
}

// Namuna: 5 sonining ko'paytirish jadvali
console.log(generateMultiplicationTable(5));
/* Natija:
[
  "5 x 1 = 5",
  "5 x 2 = 10",
  "5 x 3 = 15",
  "5 x 4 = 20",
  "5 x 5 = 25",
  "5 x 6 = 30",
  "5 x 7 = 35",
  "5 x 8 = 40",
  "5 x 9 = 45",
  "5 x 10 = 50"
]
*/`}</code>
            </pre>
          </div>
        </div>

        {/* 2. Break operatori */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-green-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Break operatori</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function findFirstNegative(numbers) {
  let firstNegative = null;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      firstNegative = numbers[i];
      break; // Birinchi manfiy son topilishi bilan sikl to'xtatiladi
    }
    console.log(\`Tekshirilayotgan son: \${numbers[i]}\`);
  }
  
  return firstNegative ? 
    \`Birinchi manfiy son: \${firstNegative}\` : 
    "Manfiy son topilmadi";
}

const numbers = [3, 7, 1, -4, 9, -2, 8];
console.log(findFirstNegative(numbers));
// Natija:
// Tekshirilayotgan son: 3
// Tekshirilayotgan son: 7
// Tekshirilayotgan son: 1
// Birinchi manfiy son: -4`}</code>
            </pre>
          </div>
        </div>

        {/* 3. Continue operatori */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Continue operatori</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function printNonDivisibleBy3(start, end) {
  let numbers = [];
  
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      continue; // 3 ga bo'linadigan sonlarni o'tkazib yuborish
    }
    numbers.push(i);
  }
  
  return \`3 ga bo'linmaydigan sonlar: \${numbers.join(', ')}\`;
}

console.log(printNonDivisibleBy3(1, 10));
// Natija: "3 ga bo'linmaydigan sonlar: 1, 2, 4, 5, 7, 8, 10"`}</code>
            </pre>
          </div>
        </div>

        {/* 4. For...of sikli */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. For...of sikli</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function calculateAverageGrade(grades) {
  let total = 0;
  let count = 0;
  
  for (const grade of grades) {
    total += grade;
    count++;
  }
  
  const average = total / count;
  return {
    grades: grades,
    average: average.toFixed(1),
    summary: \`O'rtacha baho: \${average.toFixed(1)}\`
  };
}

const studentGrades = [85, 92, 78, 95, 88];
console.log(calculateAverageGrade(studentGrades));
/* Natija:
{
  grades: [85, 92, 78, 95, 88],
  average: "87.6",
  summary: "O'rtacha baho: 87.6"
}
*/`}</code>
            </pre>
          </div>
        </div>

        {/* 5. For...in sikli */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">5. For...in sikli</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function formatPersonInfo(person) {
  let formattedInfo = [];
  
  for (const key in person) {
    // Obyekt xususiyatlarini chiroyli formatda chiqarish
    let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    formattedInfo.push(\`\${formattedKey}: \${person[key]}\`);
  }
  
  return formattedInfo.join('\\n');
}

const person = {
  ism: "Aziz",
  yosh: 25,
  kasb: "Dasturchi",
  shahar: "Toshkent"
};

console.log(formatPersonInfo(person));
/* Natija:
Ism: Aziz
Yosh: 25
Kasb: Dasturchi
Shahar: Toshkent
*/`}</code>
            </pre>
          </div>
        </div>

        {/* 6. Ichma-ich sikllar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">6. Ichma-ich sikllar</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function createMultiplicationTable(start, end) {
  let table = [];
  
  // Tashqi sikl: qatorlar
  for (let i = start; i <= end; i++) {
    let row = [];
    
    // Ichki sikl: ustunlar
    for (let j = start; j <= end; j++) {
      row.push(i * j);
    }
    
    table.push(row);
  }
  
  // Natijani chiroyli formatda chiqarish
  let formattedTable = '';
  for (let row of table) {
    formattedTable += row.map(num => num.toString().padStart(4, ' ')).join('') + '\\n';
  }
  
  return formattedTable;
}

console.log(createMultiplicationTable(1, 5));
/* Natija:
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
*/`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForSkil
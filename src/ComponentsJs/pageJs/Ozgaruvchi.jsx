import React from 'react'

function Ozgaruvchi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">O'zgaruvchilar (Variables)</h1>
      
      {/* Asosiy tushuntirish */}
      <div className="mb-8">
        <p className="mb-4">
          O'zgaruvchilar JavaScript dasturlash tilida ma'lumotlarni saqlash uchun ishlatiladigan konteynerlardir.
          Ular yordamida biz ma'lumotlarni xotirada saqlashimiz va ulardan foydalanishimiz mumkin.
        </p>
      </div>

      {/* O'zgaruvchi e'lon qilish usullari */}
      <div className="space-y-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">1. var bilan e'lon qilish</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> var - bu JavaScript-ning eng eski o'zgaruvchi e'lon qilish usulidir. 
              Zamonaviy JavaScript-da kamdan-kam ishlatiladi. Function scope xususiyatiga ega, ya'ni faqat funksiya ichida 
              cheklangan. Qayta e'lon qilish mumkin, bu ba'zida xatolarga olib kelishi mumkin.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Asosiy xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Function scope</li>
                <li>Qayta e'lon qilish mumkin</li>
                <li>Hoisting xususiyatiga ega</li>
                <li>Qiymatini o'zgartirish mumkin</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`var ism = "Ali";
console.log(ism);  // Ali

var yosh = 25;
console.log(yosh);  // 25

var ism = "Vali";  // Qayta e'lon qilish mumkin
console.log(ism);  // Vali`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">2. let bilan e'lon qilish</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> let - zamonaviy JavaScript-da eng ko'p ishlatiladigan o'zgaruvchi 
              e'lon qilish usulidir. Block scope xususiyatiga ega, ya'ni faqat {} ichida cheklangan. Qiymati 
              o'zgarishi mumkin bo'lgan o'zgaruvchilar uchun ishlatiladi.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Asosiy xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Block scope</li>
                <li>Qayta e'lon qilib bo'lmaydi</li>
                <li>Qiymatini o'zgartirish mumkin</li>
                <li>Hoisting xususiyati yo'q</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`let ism = "Ali";
console.log(ism);  // Ali

let yosh = 25;
console.log(yosh);  // 25

// let ism = "Vali";  // Xato! Qayta e'lon qilib bo'lmaydi
ism = "Vali";  // Qiymatni o'zgartirish mumkin
console.log(ism);  // Vali`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">3. const bilan e'lon qilish</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> const - o'zgarmas qiymatlarni saqlash uchun ishlatiladi. 
              Bir marta e'lon qilingandan keyin qiymatini o'zgartirib bo'lmaydi. Konstantalar, konfiguratsiya 
              qiymatlari va o'zgarmaydigan ma'lumotlar uchun ishlatiladi.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Asosiy xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Block scope</li>
                <li>Qayta e'lon qilib bo'lmaydi</li>
                <li>Qiymatini o'zgartirib bo'lmaydi</li>
                <li>Obyektlar uchun reference o'zgarmaydi</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`const PI = 3.14;
console.log(PI);  // 3.14

// PI = 3.15;  // Xato! O'zgartirib bo'lmaydi

const talaba = {
    ism: "Ali",
    yosh: 20
};
console.log(talaba.ism);  // Ali
console.log(talaba.yosh);  // 20`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-red-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">4. String (Matn) bilan ishlash</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> String ma'lumot turi matnli ma'lumotlarni saqlash uchun ishlatiladi. 
              Masalan: ismlar, manzillar, xabarlar va boshqa har qanday matnli ma'lumotlar.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Asosiy xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Bir tirnoq ('), qo'sh tirnoq (") yoki backtick (`) ichida yoziladi</li>
                <li>Backtick yordamida string interpolation qilish mumkin</li>
                <li>Turli xil metodlar orqali matn bilan ishlash mumkin</li>
                <li>Belgilar ketma-ketligi sifatida saqlanadi</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`let matn = "Salom dunyo";
console.log(matn);  // Salom dunyo

let ism = 'Ali';
console.log(ism);  // Ali

let shablon = \`Salom, \${ism}\`;
console.log(shablon);  // Salom, Ali`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">5. Number (Son) bilan ishlash</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> Number ma'lumot turi sonli qiymatlarni saqlash uchun ishlatiladi. 
              Butun sonlar, kasr sonlar va manfiy sonlarni saqlash mumkin. Matematik hisob-kitoblar uchun ishlatiladi.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Asosiy xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Butun sonlar va kasr sonlarni saqlaydi</li>
                <li>Matematik amallarni bajarish mumkin</li>
                <li>Maxsus qiymatlar: Infinity, -Infinity, NaN</li>
                <li>64-bitli format (IEEE 754)</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`let butunSon = 42;
console.log(butunSon);  // 42

let kasr = 3.14;
console.log(kasr);  // 3.14

let manfiy = -123;
console.log(manfiy);  // -123`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">6. Boolean bilan ishlash</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> Boolean ma'lumot turi mantiqiy qiymatlarni saqlash uchun ishlatiladi. 
              Faqat ikkita qiymat: true yoki false. Shart operatorlari va mantiqiy tekshirishlar uchun ishlatiladi.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Asosiy xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Faqat true yoki false qiymatlarini oladi</li>
                <li>Mantiqiy operatorlar bilan ishlaydi (&&, ||, !)</li>
                <li>Taqqoslash natijalarini saqlash uchun ishlatiladi</li>
                <li>If-else shartlarida keng qo'llaniladi</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`let togri = true;
console.log(togri);  // true

let notogri = false;
console.log(notogri);  // false

let tekshirish = 5 > 3;
console.log(tekshirish);  // true`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-pink-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">7. Undefined va Null</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Qachon ishlatiladi:</strong> Undefined va Null maxsus qiymatlar bo'lib, 
              o'zgaruvchining qiymati yo'qligini yoki bo'sh ekanligini bildirish uchun ishlatiladi.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Farqlari va xususiyatlari:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>undefined - o'zgaruvchi e'lon qilingan, lekin qiymat berilmagan</li>
                <li>null - o'zgaruvchiga ataylab "bo'sh" qiymat berilgan</li>
                <li>undefined - JavaScript tomonidan avtomatik beriladigan qiymat</li>
                <li>null - dasturchi tomonidan beriladigan qiymat</li>
              </ul>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`let aniqlanmagan;
console.log(aniqlanmagan);  // undefined

let bosh = null;
console.log(bosh);  // null

console.log(typeof aniqlanmagan);  // "undefined"
console.log(typeof bosh);  // "object"`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-teal-600 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">8. Arifmetik amallar</h2>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>{`let son1 = 10;
let son2 = 5;

let qoshish = son1 + son2;
console.log("Yig'indi:", qoshish);  // Yig'indi: 15

let ayrish = son1 - son2;
console.log("Ayirma:", ayrish);  // Ayirma: 5

let kopaytirish = son1 * son2;
console.log("Ko'paytma:", kopaytirish);  // Ko'paytma: 50

let bolish = son1 / son2;
console.log("Bo'linma:", bolish);  // Bo'linma: 2`}</code>
            </pre>
          </div>
        </div>

        {/* Amaliy mashqlar bo'limi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2">
            <h2 className="text-xl font-semibold">Amaliy mashqlar</h2>
          </div>
          <div className="p-4">
            <div className="space-y-6">
              {/* var uchun mashq */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">var bilan ishlash:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded">
                  <code>{`// 1-mashq: var bilan ishlash
var meva = "olma";
var narx = 5000;
var mavjud = true;

function dokonKorish() {
    var meva = "anor";  // Qayta e'lon qilish mumkin
    console.log(meva);  // "anor"
}

console.log(meva);  // "olma"
dokonKorish();`}</code>
                </pre>
              </div>

              {/* let uchun mashq */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold mb-2">let bilan ishlash:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded">
                  <code>{`// 2-mashq: let bilan ishlash
let ball = 85;
let natija;

if (ball >= 85) {
    let baho = 5;  // block scope
    natija = "A'lo";
    console.log(baho);  // 5
}

// console.log(baho);  // Xato! baho bu yerda mavjud emas
console.log(natija);  // "A'lo"`}</code>
                </pre>
              </div>

              {/* const uchun mashq */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold mb-2">const bilan ishlash:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded">
                  <code>{`// 3-mashq: const bilan ishlash
const KOMPANIYA = "Tech Hub";
const XODIM = {
    ism: "Aziz",
    lavozim: "Dasturchi"
};

// KOMPANIYA = "IT Park";  // Xato! O'zgartirib bo'lmaydi
XODIM.lavozim = "Senior dasturchi";  // Obyekt ichidagi qiymatni o'zgartirish mumkin
console.log(XODIM);  // { ism: "Aziz", lavozim: "Senior dasturchi" }`}</code>
                </pre>
              </div>

              {/* String bilan ishlash */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold mb-2">String bilan ishlash:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded">
                  <code>{`// 4-mashq: String metodlari
let matn = "JavaScript";
console.log(matn.length);  // 10
console.log(matn.toUpperCase());  // "JAVASCRIPT"
console.log(matn.toLowerCase());  // "javascript"
console.log(matn.slice(0, 4));  // "Java"

// Template literal
let ism = "Bobur";
let yosh = 25;
let info = \`\${ism} \${yosh} yoshda\`;
console.log(info);  // "Bobur 25 yoshda"`}</code>
                </pre>
              </div>

              {/* Number bilan ishlash */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold mb-2">Number bilan ishlash:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded">
                  <code>{`// 5-mashq: Sonlar bilan ishlash
let narx = 15000;
let chegirma = 10;
let yakuniyNarx = narx - (narx * chegirma / 100);

console.log(Math.round(3.6));  // 4
console.log(Math.floor(3.6));  // 3
console.log(Math.ceil(3.2));   // 4
console.log(Math.random());    // 0-1 orasida tasodifiy son`}</code>
                </pre>
              </div>

              {/* Boolean bilan ishlash */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-bold mb-2">Boolean bilan ishlash:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded">
                  <code>{`// 6-mashq: Mantiqiy amallar
let yosh = 20;
let talaba = true;

let chegirmaHuquqi = yosh < 25 && talaba;
console.log(chegirmaHuquqi);  // true

let a = 5, b = 10;
console.log(a > b);  // false
console.log(a < b);  // true
console.log(a === b);  // false
console.log(a !== b);  // true`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ozgaruvchi
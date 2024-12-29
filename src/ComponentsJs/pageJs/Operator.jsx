import React from 'react';

function Operator() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">JavaScript Operatorlari</h1>

      {/* 1. Arifmetik operatorlar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Arifmetik operatorlar</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
                <th className="border border-gray-300 p-3 text-center">Natija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">+</td>
                <td className="border border-gray-300 p-3 text-center">Qo'shish</td>
                <td className="border border-gray-300 p-3 text-center">5 + 3</td>
                <td className="border border-gray-300 p-3 text-center">8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">-</td>
                <td className="border border-gray-300 p-3 text-center">Ayirish</td>
                <td className="border border-gray-300 p-3 text-center">5 - 3</td>
                <td className="border border-gray-300 p-3 text-center">2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">*</td>
                <td className="border border-gray-300 p-3 text-center">Ko'paytirish</td>
                <td className="border border-gray-300 p-3 text-center">5 * 3</td>
                <td className="border border-gray-300 p-3 text-center">15</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">/</td>
                <td className="border border-gray-300 p-3 text-center">Bo'lish</td>
                <td className="border border-gray-300 p-3 text-center">6 / 3</td>
                <td className="border border-gray-300 p-3 text-center">2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">%</td>
                <td className="border border-gray-300 p-3 text-center">Qoldiq olish</td>
                <td className="border border-gray-300 p-3 text-center">7 % 3</td>
                <td className="border border-gray-300 p-3 text-center">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">**</td>
                <td className="border border-gray-300 p-3 text-center">Darajaga ko'tarish</td>
                <td className="border border-gray-300 p-3 text-center">2 ** 3</td>
                <td className="border border-gray-300 p-3 text-center">8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">++</td>
                <td className="border border-gray-300 p-3 text-center">Birga oshirish (inkrement)</td>
                <td className="border border-gray-300 p-3 text-center">let x = 5; x++</td>
                <td className="border border-gray-300 p-3 text-center">6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">--</td>
                <td className="border border-gray-300 p-3 text-center">Birga kamaytirish (dekrement)</td>
                <td className="border border-gray-300 p-3 text-center">let x = 5; x--</td>
                <td className="border border-gray-300 p-3 text-center">4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Arifmetik operatorlar - Misollar</h3>

          {/* Qo'shish va ayirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. Qo'shish va ayirish</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Sonlarni qo'shish va ayirish uchun + va - operatorlari ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Qo'shish
let a = 10, b = 5;
let yigindi = a + b;
console.log("Yig'indi:", yigindi);  // 15

// Ayirish
let ayirma = a - b;
console.log("Ayirma:", ayirma);  // 5

// Matnlar bilan qo'shish
let ism = "Ali";
let familiya = "Valiyev";
let toliqIsm = ism + " " + familiya;
console.log(toliqIsm);  // "Ali Valiyev"`}</code>
              </pre>
            </div>
          </div>

          {/* Ko'paytirish va bo'lish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. Ko'paytirish va bo'lish</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Sonlarni ko'paytirish uchun * va bo'lish uchun / operatori ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ko'paytirish
let x = 6, y = 2;
let kopaytma = x * y;
console.log("Ko'paytma:", kopaytma);  // 12

// Bo'lish
let bolinma = x / y;
console.log("Bo'linma:", bolinma);  // 3

// Kasr sonlar bilan ishlash
let narx = 15.5;
let soni = 3;
let umumiyNarx = narx * soni;
console.log("Umumiy narx:", umumiyNarx);  // 46.5`}</code>
              </pre>
            </div>
          </div>

          {/* Qoldiq va daraja */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. Qoldiq va darajaga ko'tarish</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Qoldiqni olish uchun % va darajaga ko'tarish uchun ** operatori ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Qoldiqni olish
let m = 17, n = 5;
let qoldiq = m % n;
console.log("Qoldiq:", qoldiq);  // 2

// Darajaga ko'tarish
let son = 2;
let daraja = son ** 3;  // 2 ni 3-darajaga ko'tarish
console.log("2 ning 3-darajasi:", daraja);  // 8

// Amaliy misol
let pul = 100000;
let mahsulotNarxi = 30000;
let qolganPul = pul % mahsulotNarxi;
console.log("Qolgan pul:", qolganPul);  // 10000`}</code>
              </pre>
            </div>
          </div>

          {/* Inkrement va dekrement */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. Inkrement va dekrement</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Qiymatni 1 ga oshirish uchun ++ va kamaytirish uchun -- operatori ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Inkrement (oldidan)
let count = 5;
console.log(++count);  // 6 (darhol oshiriladi)
console.log(count);    // 6

// Inkrement (ketidan)
let son = 5;
console.log(son++);    // 5 (keyingi safar oshadi)
console.log(son);      // 6

// Dekrement misollari
let ball = 10;
console.log(--ball);   // 9 (darhol kamayadi)
console.log(ball--);   // 9 (keyingi safar kamayadi)
console.log(ball);     // 8

// Amaliy misol
let urinishlarSoni = 3;
while (urinishlarSoni > 0) {
    console.log("Urinish:", urinishlarSoni);
    urinishlarSoni--;
}`}</code>
              </pre>
            </div>
          </div>

          {/* Kompleks misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">5. Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Turli operatorlarni birgalikda ishlatish misollari.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Doira yuzini hisoblash
const PI = 3.14;
let radius = 5;
let yuza = PI * (radius ** 2);
console.log("Doira yuzi:", yuza);  // 78.5

// Chegirma hisoblash
let aslNarx = 100000;
let chegirmaFoizi = 15;
let chegirmaMiqdori = aslNarx * (chegirmaFoizi / 100);
let yakuniyNarx = aslNarx - chegirmaMiqdori;
console.log("Yakuniy narx:", yakuniyNarx);  // 85000

// O'rtacha qiymatni hisoblash
let son1 = 10, son2 = 15, son3 = 20;
let ortacha = (son1 + son2 + son3) / 3;
console.log("O'rtacha qiymat:", ortacha);  // 15`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Taqqoslash operatorlari */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Taqqoslash operatorlari</h2>
        
        {/* Taqqoslash operatorlari jadvali */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
                <th className="border border-gray-300 p-3 text-center">Natija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">==</td>
                <td className="border border-gray-300 p-3 text-center">Tenglik</td>
                <td className="border border-gray-300 p-3 text-center">5 == "5"</td>
                <td className="border border-gray-300 p-3 text-center">true</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">===</td>
                <td className="border border-gray-300 p-3 text-center">Qat'iy tenglik</td>
                <td className="border border-gray-300 p-3 text-center">5 === "5"</td>
                <td className="border border-gray-300 p-3 text-center">false</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">!=</td>
                <td className="border border-gray-300 p-3 text-center">Teng emas</td>
                <td className="border border-gray-300 p-3 text-center">5 != 3</td>
                <td className="border border-gray-300 p-3 text-center">true</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">!==</td>
                <td className="border border-gray-300 p-3 text-center">Qat'iy teng emas</td>
                <td className="border border-gray-300 p-3 text-center">5 !== "5"</td>
                <td className="border border-gray-300 p-3 text-center">true</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&gt;</td>
                <td className="border border-gray-300 p-3 text-center">Katta</td>
                <td className="border border-gray-300 p-3 text-center">5 &gt; 3</td>
                <td className="border border-gray-300 p-3 text-center">true</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&lt;</td>
                <td className="border border-gray-300 p-3 text-center">Kichik</td>
                <td className="border border-gray-300 p-3 text-center">5 &lt; 3</td>
                <td className="border border-gray-300 p-3 text-center">false</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&gt;=</td>
                <td className="border border-gray-300 p-3 text-center">Katta yoki teng</td>
                <td className="border border-gray-300 p-3 text-center">5 &gt;= 5</td>
                <td className="border border-gray-300 p-3 text-center">true</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&lt;=</td>
                <td className="border border-gray-300 p-3 text-center">Kichik yoki teng</td>
                <td className="border border-gray-300 p-3 text-center">5 &lt;= 3</td>
                <td className="border border-gray-300 p-3 text-center">false</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Namuna kodlar */}
        <div className="mt-6 space-y-6">
          {/* Tenglik operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. Tenglik operatorlari (== va ===)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> == operatori faqat qiymatlarni, === operatori esa qiymat va ma'lumot turini tekshiradi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// == operatori (qiymat tenglik)
console.log(5 == "5");     // true
console.log(true == 1);    // true
console.log(null == undefined);  // true

// === operatori (qat'iy tenglik)
console.log(5 === "5");    // false
console.log(true === 1);   // false
console.log(null === undefined);  // false

// Amaliy misol
let parol = "1234";
let kiritilganParol = "1234";
console.log(parol === kiritilganParol);  // true`}</code>
              </pre>
            </div>
          </div>

          {/* Teng emas operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. Teng emas operatorlari (!= va !==)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> != operatori qiymatlar teng emasligini, !== operatori qiymat va tur teng emasligini tekshiradi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// != operatori
console.log(5 != "5");     // false
console.log(5 != 3);       // true

// !== operatori
console.log(5 !== "5");    // true
console.log(5 !== 5);      // false

// Amaliy misol
let status = "active";
if (status !== "blocked") {
    console.log("Foydalanuvchi faol");
}`}</code>
              </pre>
            </div>
          </div>

          {/* Katta-kichik operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. Katta-kichik operatorlari (&gt;, &lt;, &gt;=, &lt;=)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Sonlarni va boshqa qiymatlarni taqqoslash uchun ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Sonlarni taqqoslash
let yosh = 18;
let minimumYosh = 16;

console.log(yosh > minimumYosh);   // true
console.log(yosh < 21);            // true
console.log(yosh >= 18);           // true
console.log(yosh <= 15);           // false

// Amaliy misol - Yosh chegarasi tekshirish
function yoshniTekshirish(yosh) {
    if (yosh >= 18) {
        return "Kirish mumkin";
    } else {
        return "Kirish taqiqlangan";
    }
}

console.log(yoshniTekshirish(20));  // "Kirish mumkin"
console.log(yoshniTekshirish(16));  // "Kirish taqiqlangan"`}</code>
              </pre>
            </div>
          </div>

          {/* Kompleks misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Turli taqqoslash operatorlarini birgalikda ishlatish.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Foydalanuvchi autentifikatsiyasi
let username = "admin";
let password = "12345";

function login(user, pass) {
    if (user === "admin" && pass === "12345") {
        return "Tizimga kirdingiz";
    } else {
        return "Login yoki parol noto'g'ri";
    }
}

// Ball tizimi
function bahoniAniqlash(ball) {
    if (ball >= 90) {
        return "A'lo";
    } else if (ball >= 70) {
        return "Yaxshi";
    } else if (ball >= 60) {
        return "Qoniqarli";
    } else {
        return "Qoniqarsiz";
    }
}

console.log(bahoniAniqlash(85));  // "Yaxshi"
console.log(bahoniAniqlash(95));  // "A'lo"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mantiqiy operatorlar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Mantiqiy operatorlar</h2>
        
        {/* Mantiqiy operatorlar jadvali */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
                <th className="border border-gray-300 p-3 text-center">Natija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&&</td>
                <td className="border border-gray-300 p-3 text-center">VA (AND)</td>
                <td className="border border-gray-300 p-3 text-center">true && false</td>
                <td className="border border-gray-300 p-3 text-center">false</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">||</td>
                <td className="border border-gray-300 p-3 text-center">YOKI (OR)</td>
                <td className="border border-gray-300 p-3 text-center">true || false</td>
                <td className="border border-gray-300 p-3 text-center">true</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">!</td>
                <td className="border border-gray-300 p-3 text-center">EMAS (NOT)</td>
                <td className="border border-gray-300 p-3 text-center">!true</td>
                <td className="border border-gray-300 p-3 text-center">false</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Namuna kodlar */}
        <div className="mt-6 space-y-6">
          {/* AND (&&) operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. AND (&&) operatori</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Ikkala shart ham true bo'lsa, natija true bo'ladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// AND (&&) operatori misollari
let yosh = 25;
let talaba = true;

// Ikkala shart ham true
console.log(yosh > 18 && talaba);  // true

// Bitta shart false
console.log(yosh < 20 && talaba);  // false

// Amaliy misol - Chegirma tekshirish
function chegirmaniTekshirish(yosh, talaba) {
    if (yosh < 25 && talaba) {
        return "Chegirma beriladi";
    }
    return "Chegirma berilmaydi";
}

console.log(chegirmaniTekshirish(20, true));   // "Chegirma beriladi"
console.log(chegirmaniTekshirish(30, true));   // "Chegirma berilmaydi"`}</code>
              </pre>
            </div>
          </div>

          {/* OR (||) operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. OR (||) operatori</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Kamida bitta shart true bo'lsa, natija true bo'ladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// OR (||) operatori misollari
let adminMi = false;
let moderatorMi = true;

// Kamida bittasi true
console.log(adminMi || moderatorMi);  // true

// Default qiymat berish
let foydalanuvchiIsmi = "";
let defaultIsm = "Mehmon";
let ism = foydalanuvchiIsmi || defaultIsm;
console.log(ism);  // "Mehmon"

// Amaliy misol - Kirish huquqini tekshirish
function kirishHuquqi(admin, moderator) {
    if (admin || moderator) {
        return "Kirish mumkin";
    }
    return "Kirish taqiqlangan";
}

console.log(kirishHuquqi(false, true));  // "Kirish mumkin"
console.log(kirishHuquqi(false, false)); // "Kirish taqiqlangan"`}</code>
              </pre>
            </div>
          </div>

          {/* NOT (!) operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. NOT (!) operatori</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Mantiqiy qiymatni teskarisiga o'zgartiradi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// NOT (!) operatori misollari
let faol = true;
console.log(!faol);  // false

let bloklangan = false;
console.log(!bloklangan);  // true

// Ikki marta inkor
console.log(!!faol);  // true

// Amaliy misol - Foydalanuvchi holatini tekshirish
function holatniTekshirish(bloklangan) {
    if (!bloklangan) {
        return "Foydalanuvchi faol";
    }
    return "Foydalanuvchi bloklangan";
}

console.log(holatniTekshirish(false));  // "Foydalanuvchi faol"
console.log(holatniTekshirish(true));   // "Foydalanuvchi bloklangan"`}</code>
              </pre>
            </div>
          </div>

          {/* Kompleks misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Mantiqiy operatorlarni birgalikda ishlatish.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Kompleks mantiqiy operatorlar
let yosh = 20;
let talaba = true;
let ishchi = false;
let chegirmaKarta = true;

// Murakkab shartlar
let chegirmaHuquqi = (yosh < 25 && talaba) || chegirmaKarta;
console.log("Chegirma huquqi:", chegirmaHuquqi);  // true

// Kirish huquqini tekshirish
function kirishniTekshirish(yosh, talaba, ishchi) {
    if ((yosh >= 18 && talaba) || (ishchi && !talaba)) {
        return "Kirish mumkin";
    }
    return "Kirish taqiqlangan";
}

console.log(kirishniTekshirish(20, true, false));   // "Kirish mumkin"
console.log(kirishniTekshirish(17, true, false));   // "Kirish taqiqlangan"
console.log(kirishniTekshirish(25, false, true));   // "Kirish mumkin"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O'zlashtirish operatorlari */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. O'zlashtirish operatorlari</h2>
        
        {/* O'zlashtirish operatorlari jadvali */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
                <th className="border border-gray-300 p-3 text-center">Natija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">=</td>
                <td className="border border-gray-300 p-3 text-center">O'zlashtirish</td>
                <td className="border border-gray-300 p-3 text-center">x = 10</td>
                <td className="border border-gray-300 p-3 text-center">x teng 10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">+=</td>
                <td className="border border-gray-300 p-3 text-center">Qo'shish va o'zlashtirish</td>
                <td className="border border-gray-300 p-3 text-center">x += 5</td>
                <td className="border border-gray-300 p-3 text-center">x = x + 5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">-=</td>
                <td className="border border-gray-300 p-3 text-center">Ayirish va o'zlashtirish</td>
                <td className="border border-gray-300 p-3 text-center">x -= 3</td>
                <td className="border border-gray-300 p-3 text-center">x = x - 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">*=</td>
                <td className="border border-gray-300 p-3 text-center">Ko'paytirish va o'zlashtirish</td>
                <td className="border border-gray-300 p-3 text-center">x *= 2</td>
                <td className="border border-gray-300 p-3 text-center">x = x * 2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">/=</td>
                <td className="border border-gray-300 p-3 text-center">Bo'lish va o'zlashtirish</td>
                <td className="border border-gray-300 p-3 text-center">x /= 2</td>
                <td className="border border-gray-300 p-3 text-center">x = x / 2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">%=</td>
                <td className="border border-gray-300 p-3 text-center">Qoldiq olish va o'zlashtirish</td>
                <td className="border border-gray-300 p-3 text-center">x %= 2</td>
                <td className="border border-gray-300 p-3 text-center">x = x % 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Namuna kodlar */}
        <div className="mt-6 space-y-6">
          {/* Oddiy o'zlashtirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. Oddiy o'zlashtirish (=)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> O'zgaruvchiga qiymat berish uchun ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Oddiy o'zlashtirish
let son = 10;
console.log("Boshlang'ich qiymat:", son);  // 10

let matn = "Salom";
console.log("Matn:", matn);  // "Salom"

// Bir nechta o'zlashtirish
let x = y = z = 5;
console.log("x:", x, "y:", y, "z:", z);  // x: 5, y: 5, z: 5`}</code>
              </pre>
            </div>
          </div>

          {/* Qo'shish va ayirish bilan o'zlashtirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. Qo'shish va ayirish bilan o'zlashtirish (+= va -=)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Mavjud qiymatga qo'shish yoki ayirish va natijani o'zlashtirib olish.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Qo'shish bilan o'zlashtirish
let hisob = 1000;
console.log("Boshlang'ich hisob:", hisob);  // 1000

hisob += 500;  // hisob = hisob + 500
console.log("Hisobga 500 qo'shildi:", hisob);  // 1500

// Ayirish bilan o'zlashtirish
hisob -= 200;  // hisob = hisob - 200
console.log("Hisobdan 200 ayirildi:", hisob);  // 1300

// Matn bilan ishlash
let ism = "Ali";
ism += " Valiyev";  // ism = ism + " Valiyev"
console.log("To'liq ism:", ism);  // "Ali Valiyev"`}</code>
              </pre>
            </div>
          </div>

          {/* Ko'paytirish va bo'lish bilan o'zlashtirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. Ko'paytirish va bo'lish bilan o'zlashtirish (*= va /=)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Mavjud qiymatni ko'paytirish yoki bo'lish va natijani o'zlashtirib olish.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ko'paytirish bilan o'zlashtirish
let narx = 100;
console.log("Boshlang'ich narx:", narx);  // 100

narx *= 2;  // narx = narx * 2
console.log("Narx 2 ga ko'paytirildi:", narx);  // 200

// Bo'lish bilan o'zlashtirish
let miqdor = 1000;
miqdor /= 4;  // miqdor = miqdor / 4
console.log("Miqdor 4 ga bo'lindi:", miqdor);  // 250

// Amaliy misol - Chegirma hisoblash
let aslNarx = 1000;
let chegirmaFoizi = 20;
aslNarx *= (100 - chegirmaFoizi) / 100;
console.log("Chegirmadan keyin:", aslNarx);  // 800`}</code>
              </pre>
            </div>
          </div>

          {/* Qoldiq bilan o'zlashtirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. Qoldiq bilan o'zlashtirish (%=)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Bo'lish qoldig'ini hisoblash va natijani o'zlashtirib olish.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Qoldiq bilan o'zlashtirish
let son = 17;
console.log("Boshlang'ich son:", son);  // 17

son %= 5;  // son = son % 5
console.log("5 ga bo'lgandagi qoldiq:", son);  // 2

// Amaliy misol - Juft/Toq sonni aniqlash
function juftmiTokmi(n) {
    let qoldiq = n;
    qoldiq %= 2;
    return qoldiq === 0 ? "Juft son" : "Toq son";
}

console.log(juftmiTokmi(10));  // "Juft son"
console.log(juftmiTokmi(7));   // "Toq son"

// Amaliy misol - Vaqtni soat formatiga o'tkazish
let daqiqalar = 125;
let soat = Math.floor(daqiqalar / 60);
daqiqalar %= 60;
console.log(\`\${soat}:\${daqiqalar}\`);  // "2:5"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bitwise operatorlari */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Bitwise operatorlari</h2>
        
        {/* Bitwise operatorlari jadvali */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
                <th className="border border-gray-300 p-3 text-center">Natija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&</td>
                <td className="border border-gray-300 p-3 text-center">Va (AND)</td>
                <td className="border border-gray-300 p-3 text-center">5 & 1</td>
                <td className="border border-gray-300 p-3 text-center">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">|</td>
                <td className="border border-gray-300 p-3 text-center">YOKI (OR)</td>
                <td className="border border-gray-300 p-3 text-center">5 | 1</td>
                <td className="border border-gray-300 p-3 text-center">5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">^</td>
                <td className="border border-gray-300 p-3 text-center">XOR</td>
                <td className="border border-gray-300 p-3 text-center">5 ^ 1</td>
                <td className="border border-gray-300 p-3 text-center">4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">~</td>
                <td className="border border-gray-300 p-3 text-center">Emas (NOT)</td>
                <td className="border border-gray-300 p-3 text-center">~5</td>
                <td className="border border-gray-300 p-3 text-center">-6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&lt;&lt;</td>
                <td className="border border-gray-300 p-3 text-center">Chapga siljitish</td>
                <td className="border border-gray-300 p-3 text-center">5 &lt;&lt; 1</td>
                <td className="border border-gray-300 p-3 text-center">10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">&gt;&gt;</td>
                <td className="border border-gray-300 p-3 text-center">O'ngga siljitish</td>
                <td className="border border-gray-300 p-3 text-center">5 &gt;&gt; 1</td>
                <td className="border border-gray-300 p-3 text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Namuna kodlar */}
        <div className="mt-6 space-y-6">
          {/* AND va OR operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. AND (&) va OR (|) operatorlari</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Bitlarni solishtirish uchun ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// AND (&) operatori
let a = 5;  // 101 binary
let b = 3;  // 011 binary
console.log("5 & 3:", a & b);  // 1 (001 binary)

// OR (|) operatori
console.log("5 | 3:", a | b);  // 7 (111 binary)

// Amaliy misol - Ruxsatlarni tekshirish
const READ = 4;    // 100 binary
const WRITE = 2;   // 010 binary
const EXECUTE = 1; // 001 binary

let permissions = READ | WRITE;  // 110 binary (6)
console.log("Ruxsatlar:", permissions);  // 6

// Ruxsatni tekshirish
console.log("O'qish ruxsati:", !!(permissions & READ));    // true
console.log("Yozish ruxsati:", !!(permissions & WRITE));   // true
console.log("Bajarish ruxsati:", !!(permissions & EXECUTE)); // false`}</code>
              </pre>
            </div>
          </div>

          {/* XOR va NOT operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. XOR (^) va NOT (~) operatorlari</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> XOR faqat bitlar farq qilganda 1 qaytaradi, NOT esa barcha bitlarni teskarisiga o'zgartiradi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// XOR (^) operatori
let x = 5;  // 101 binary
let y = 3;  // 011 binary
console.log("5 ^ 3:", x ^ y);  // 6 (110 binary)

// NOT (~) operatori
console.log("~5:", ~x);  // -6

// Amaliy misol - Shifrlash
function oddiyShifrlash(matn, kalit) {
    return matn.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) ^ kalit)
    ).join('');
}

let matn = "Salom";
let kalit = 5;
let shifrlangan = oddiyShifrlash(matn, kalit);
console.log("Shifrlangan:", shifrlangan);
console.log("Qayta shifrlangan:", oddiyShifrlash(shifrlangan, kalit));  // "Salom"`}</code>
              </pre>
            </div>
          </div>

          {/* Siljitish operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. Siljitish operatorlari (&lt;&lt; va &gt;&gt;)</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Bitlarni chapga yoki o'ngga siljitish uchun ishlatiladi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Chapga siljitish (<<)
let son = 5;  // 101 binary
console.log("5 << 1:", son << 1);  // 10 (1010 binary)
console.log("5 << 2:", son << 2);  // 20 (10100 binary)

// O'ngga siljitish (>>)
console.log("5 >> 1:", son >> 1);  // 2 (10 binary)
console.log("5 >> 2:", son >> 2);  // 1 (1 binary)

// Amaliy misol - Tezkor ko'paytirish va bo'lish
function tezKopaytirish(son, daraja) {
    return son << daraja;  // son * (2 ** daraja)
}

function tezBolish(son, daraja) {
    return son >> daraja;  // Math.floor(son / (2 ** daraja))
}

console.log("8 ni 2 ga ko'paytirish:", tezKopaytirish(8, 1));  // 16
console.log("8 ni 2 ga bo'lish:", tezBolish(8, 1));  // 4`}</code>
              </pre>
            </div>
          </div>

          {/* Kompleks misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Funksiya parametrlarini tekshirish
function qoshish(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Parametrlar son bo'lishi kerak");
    }
    return a + b;
}

try {
    console.log(qoshish(5, "10"));
} catch (error) {
    console.log(error.message);  // "Parametrlar son bo'lishi kerak"
}

// Ma'lumotlar validatsiyasi
function malumotniTekshirish(data) {
    if (!(data instanceof Object)) {
        return "Xato: Object bo'lishi kerak";
    }
    
    if (typeof data.ism !== "string") {
        return "Xato: Ism matn bo'lishi kerak";
    }
    
    if (typeof data.yosh !== "number") {
        return "Xato: Yosh son bo'lishi kerak";
    }
    
    if (!(data.hobbies instanceof Array)) {
        return "Xato: Hobbies massiv bo'lishi kerak";
    }
    
    return "Ma'lumotlar to'g'ri";
}

let foydalanuvchi = {
    ism: "Ali",
    yosh: 25,
    hobbies: ["Kitob o'qish", "Sport"]
};

console.log(malumotniTekshirish(foydalanuvchi));  // "Ma'lumotlar to'g'ri"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Shartli (ternary) operator */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Shartli (ternary) operator</h2>

        {/* Asosiy tushuntirish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gray-100 p-4">
            <p className="text-gray-700">
              <strong>Sintaksis:</strong> <code className="bg-gray-200 px-2 py-1 rounded">shart ? true_qiymat : false_qiymat</code>
            </p>
            <p className="mt-2 text-gray-600">
              Ternary operator if-else operatorining qisqa ko'rinishi hisoblanadi. U shart asosida ikkita qiymatdan birini tanlash imkonini beradi.
            </p>
          </div>
        </div>

        {/* Namuna kodlar */}
        <div className="space-y-6">
          {/* Oddiy misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. Oddiy misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Yosh bo'yicha tekshirish
let yosh = 20;
let natija = yosh >= 18 ? "Katta" : "Yosh";
console.log("Yosh holati:", natija);  // "Katta"

// Bahoni tekshirish
let ball = 75;
let baho = ball >= 90 ? "A'lo" : 
           ball >= 70 ? "Yaxshi" : 
           ball >= 60 ? "Qoniqarli" : "Qoniqarsiz";
console.log("Baho:", baho);  // "Yaxshi"

// Juft/Toq sonni aniqlash
let son = 7;
console.log(\`\${son} soni \${son % 2 === 0 ? "juft" : "toq"}\`);  // "7 soni toq"`}</code>
              </pre>
            </div>
          </div>

          {/* Amaliy misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. Amaliy misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Foydalanuvchi holati
let faol = true;
let bloklangan = false;
let holat = bloklangan ? "Bloklangan" : 
            faol ? "Faol" : "Nofaol";
console.log("Foydalanuvchi holati:", holat);  // "Faol"

// Chegirma hisoblash
let narx = 100000;
let chegirmaFoizi = 20;
let yakuniyNarx = chegirmaFoizi > 0 
    ? narx - (narx * chegirmaFoizi / 100) 
    : narx;
console.log("Yakuniy narx:", yakuniyNarx);  // 80000

// Xabar formatlash
let xabarlarSoni = 5;
let xabar = xabarlarSoni === 0 ? "Xabar yo'q" :
            xabarlarSoni === 1 ? "1 ta xabar bor" :
            \`\${xabarlarSoni} ta xabar bor\`;
console.log(xabar);  // "5 ta xabar bor"`}</code>
              </pre>
            </div>
          </div>

          {/* Murakkab misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. Murakkab misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Foydalanuvchi huquqlarini tekshirish
let admin = false;
let moderator = true;
let oddiyFoydalanuvchi = true;

let huquq = admin ? "Admin huquqlari" :
            moderator ? "Moderator huquqlari" :
            oddiyFoydalanuvchi ? "Oddiy foydalanuvchi huquqlari" :
            "Huquqlar yo'q";

console.log("Foydalanuvchi huquqlari:", huquq);  // "Moderator huquqlari"

// Til tanlov
let til = "uz";
let salom = til === "uz" ? "Assalomu alaykum" :
           til === "en" ? "Hello" :
           til === "ru" ? "Привет" :
           "Salom";

console.log("Salomlashish:", salom);  // "Assalomu alaykum"

// Raqamni formatlash
function raqamniFormatlash(raqam) {
    return raqam === 0 ? "0" :
           raqam < 0 ? \`(\${Math.abs(raqam)})\` :
           raqam > 999999 ? \`\${(raqam/1000000).toFixed(1)}M\` :
           raqam > 999 ? \`\${(raqam/1000).toFixed(1)}K\` :
           raqam.toString();
}

console.log(raqamniFormatlash(1234567));  // "1.2M"
console.log(raqamniFormatlash(1234));     // "1.2K"
console.log(raqamniFormatlash(-42));      // "(42)"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Tipni o'zgartirish operatorlari */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. Tipni o'zgartirish operatorlari</h2>

        {/* Jadval */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
                <th className="border border-gray-300 p-3 text-center">Natija</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">,</td>
                <td className="border border-gray-300 p-3 text-center">Bir nechta iboralarni ajratadi</td>
                <td className="border border-gray-300 p-3 text-center">let x = (1, 2, 3);</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">delete</td>
                <td className="border border-gray-300 p-3 text-center">Ob'ekt xususiyatini o'chiradi</td>
                <td className="border border-gray-300 p-3 text-center">delete obj.key;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">in</td>
                <td className="border border-gray-300 p-3 text-center">Xususiyat mavjudligini tekshiradi</td>
                <td className="border border-gray-300 p-3 text-center">"key" in obj</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">new</td>
                <td className="border border-gray-300 p-3 text-center">Yangi ob'ekt yaratadi</td>
                <td className="border border-gray-300 p-3 text-center">let obj = new Object();</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">this</td>
                <td className="border border-gray-300 p-3 text-center">Hozirgi ob'ektni bildiradi</td>
                <td className="border border-gray-300 p-3 text-center">this.name</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">void</td>
                <td className="border border-gray-300 p-3 text-center">Hech narsa qaytarmaydi</td>
                <td className="border border-gray-300 p-3 text-center">void(0);</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Namuna kodlar */}
        <div className="mt-6 space-y-6">
          {/* Vergul operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. Vergul (,) operatori</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Bir nechta o'zgaruvchilarni e'lon qilish
let a = 1, b = 2, c = 3;
console.log(a, b, c);  // 1 2 3

// Iboralarni bajarish
let x = (console.log("Birinchi"), console.log("Ikkinchi"), 5);
console.log("x qiymati:", x);  // 5

// For tsiklida ishlatish
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(i, j);
}`}</code>
              </pre>
            </div>
          </div>

          {/* delete va in operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. delete va in operatorlari</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ob'ekt yaratish
let talaba = {
    ism: "Ali",
    yosh: 20,
    kurs: 2
};

// delete operatori
console.log("O'chirishdan oldin:", talaba);
delete talaba.kurs;
console.log("O'chirishdan keyin:", talaba);

// in operatori
console.log("ism mavjudmi:", "ism" in talaba);     // true
console.log("kurs mavjudmi:", "kurs" in talaba);   // false

// Massivda tekshirish
let massiv = [1, 2, 3];
console.log("1-index mavjudmi:", 1 in massiv);     // true
console.log("5-index mavjudmi:", 5 in massiv);     // false`}</code>
              </pre>
            </div>
          </div>

          {/* new va this operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. new va this operatorlari</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Klass yaratish
class Avtomobil {
    constructor(model, yil) {
        this.model = model;
        this.yil = yil;
    }

    malumot() {
        return \`\${this.model} (\${this.yil})\`;
    }
}

// new operatori bilan ob'ekt yaratish
let moshina = new Avtomobil("Malibu", 2023);
console.log(moshina.malumot());  // "Malibu (2023)"

// Built-in konstruktorlar
let sana = new Date();
let regex = new RegExp("\\w+");
let massiv = new Array(1, 2, 3);

console.log("Sana:", sana);
console.log("Massiv:", massiv);`}</code>
              </pre>
            </div>
          </div>

          {/* void operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. void operatori</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// void operatori
console.log(void 0);  // undefined
console.log(void(2 + 3));  // undefined

// HTML havolalarda ishlatish
<a href="javascript:void(0)" onclick="alert('Salom!')">
    Bosing
</a>

// Funksiya qaytish qiymatini bekor qilish
function hechNarsaQaytarma() {
    return void console.log("Bajarildi");
}

console.log(hechNarsaQaytarma());  // undefined

// IIFE (Immediately Invoked Function Expression)
void function() {
    console.log("Bu funksiya darhol bajariladi");
}();`}</code>
              </pre>
            </div>
          </div>

          {/* Kompleks misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">5. Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ob'ektlar bilan ishlash
class Mahsulot {
    constructor(nom, narx) {
        this.nom = nom;
        this.narx = narx;
    }
}

let mahsulotlar = {
    a1: new Mahsulot("Telefon", 1000),
    a2: new Mahsulot("Noutbuk", 2000),
    a3: new Mahsulot("Planshet", 500)
};

// Mahsulotni o'chirish
console.log("O'chirishdan oldin:", "a2" in mahsulotlar);  // true
delete mahsulotlar.a2;
console.log("O'chirishdan keyin:", "a2" in mahsulotlar);  // false

// Yangi mahsulot qo'shish
mahsulotlar.a4 = new Mahsulot("Soat", 300);

// Barcha mahsulotlarni ko'rish
for (let key in mahsulotlar) {
    console.log(\`\${key}: \${mahsulotlar[key].nom} - \${mahsulotlar[key].narx}$\`);
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Maxsus operatorlar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">8. Maxsus operatorlar</h2>

        {/* Jadval */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-center">Operator</th>
                <th className="border border-gray-300 p-3 text-center">Ma'nosi</th>
                <th className="border border-gray-300 p-3 text-center">Misol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">,</td>
                <td className="border border-gray-300 p-3 text-center">Bir nechta iboralarni ajratadi</td>
                <td className="border border-gray-300 p-3 text-center">let x = (1, 2, 3);</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">delete</td>
                <td className="border border-gray-300 p-3 text-center">Ob'ekt xususiyatini o'chiradi</td>
                <td className="border border-gray-300 p-3 text-center">delete obj.key;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">in</td>
                <td className="border border-gray-300 p-3 text-center">Xususiyat mavjudligini tekshiradi</td>
                <td className="border border-gray-300 p-3 text-center">"key" in obj</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">new</td>
                <td className="border border-gray-300 p-3 text-center">Yangi ob'ekt yaratadi</td>
                <td className="border border-gray-300 p-3 text-center">let obj = new Object();</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">this</td>
                <td className="border border-gray-300 p-3 text-center">Hozirgi ob'ektni bildiradi</td>
                <td className="border border-gray-300 p-3 text-center">this.name</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">void</td>
                <td className="border border-gray-300 p-3 text-center">Hech narsa qaytarmaydi</td>
                <td className="border border-gray-300 p-3 text-center">void(0);</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Namuna kodlar */}
        <div className="mt-6 space-y-6">
          {/* Vergul operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">1. Vergul (,) operatori</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Bir nechta o'zgaruvchilarni e'lon qilish
let a = 1, b = 2, c = 3;
console.log(a, b, c);  // 1 2 3

// Iboralarni bajarish
let x = (console.log("Birinchi"), console.log("Ikkinchi"), 5);
console.log("x qiymati:", x);  // 5

// For tsiklida ishlatish
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(i, j);
}`}</code>
              </pre>
            </div>
          </div>

          {/* delete va in operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">2. delete va in operatorlari</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ob'ekt yaratish
let talaba = {
    ism: "Ali",
    yosh: 20,
    kurs: 2
};

// delete operatori
console.log("O'chirishdan oldin:", talaba);
delete talaba.kurs;
console.log("O'chirishdan keyin:", talaba);

// in operatori
console.log("ism mavjudmi:", "ism" in talaba);     // true
console.log("kurs mavjudmi:", "kurs" in talaba);   // false

// Massivda tekshirish
let massiv = [1, 2, 3];
console.log("1-index mavjudmi:", 1 in massiv);     // true
console.log("5-index mavjudmi:", 5 in massiv);     // false`}</code>
              </pre>
            </div>
          </div>

          {/* new va this operatorlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">3. new va this operatorlari</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Klass yaratish
class Avtomobil {
    constructor(model, yil) {
        this.model = model;
        this.yil = yil;
    }

    malumot() {
        return \`\${this.model} (\${this.yil})\`;
    }
}

// new operatori bilan ob'ekt yaratish
let moshina = new Avtomobil("Malibu", 2023);
console.log(moshina.malumot());  // "Malibu (2023)"

// Built-in konstruktorlar
let sana = new Date();
let regex = new RegExp("\\w+");
let massiv = new Array(1, 2, 3);

console.log("Sana:", sana);
console.log("Massiv:", massiv);`}</code>
              </pre>
            </div>
          </div>

          {/* void operatori */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">4. void operatori</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// void operatori
console.log(void 0);  // undefined
console.log(void(2 + 3));  // undefined

// HTML havolalarda ishlatish
<a href="javascript:void(0)" onclick="alert('Salom!')">
    Bosing
</a>

// Funksiya qaytish qiymatini bekor qilish
function hechNarsaQaytarma() {
    return void console.log("Bajarildi");
}

console.log(hechNarsaQaytarma());  // undefined

// IIFE (Immediately Invoked Function Expression)
void function() {
    console.log("Bu funksiya darhol bajariladi");
}();`}</code>
              </pre>
            </div>
          </div>

          {/* Kompleks misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">5. Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ob'ektlar bilan ishlash
class Mahsulot {
    constructor(nom, narx) {
        this.nom = nom;
        this.narx = narx;
    }
}

let mahsulotlar = {
    a1: new Mahsulot("Telefon", 1000),
    a2: new Mahsulot("Noutbuk", 2000),
    a3: new Mahsulot("Planshet", 500)
};

// Mahsulotni o'chirish
console.log("O'chirishdan oldin:", "a2" in mahsulotlar);  // true
delete mahsulotlar.a2;
console.log("O'chirishdan keyin:", "a2" in mahsulotlar);  // false

// Yangi mahsulot qo'shish
mahsulotlar.a4 = new Mahsulot("Soat", 300);

// Barcha mahsulotlarni ko'rish
for (let key in mahsulotlar) {
    console.log(\`\${key}: \${mahsulotlar[key].nom} - \${mahsulotlar[key].narx}$\`);
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Operator;
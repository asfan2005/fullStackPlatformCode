import React, { useState } from 'react'

function ShartOperatorlar() {
  const [selectedExample, setSelectedExample] = useState('if')

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          JavaScript Shart Operatorlari
        </h1>

        {/* 1. if operatori */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. if operatori</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">Oddiy if</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Shartni tekshirish uchun eng oddiy usul.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Oddiy if
let yosh = 18;

if (yosh >= 18) {
    console.log("Siz voyaga yetgansiz");
}

// Ko'p qatorli if
if (yosh >= 18) {
    console.log("Siz voyaga yetgansiz");
    console.log("Barcha huquqlarga egasiz");
    console.log("Mashinani boshqarish huquqi beriladi");
}`}</code>
              </pre>
            </div>
          </div>

          {/* if-else */}
          <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">if-else</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Ikkita holatni tekshirish uchun.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// if-else
let yosh = 16;

if (yosh >= 18) {
    console.log("Siz voyaga yetgansiz");
} else {
    console.log("Siz hali voyaga yetmagansiz");
}

// Amaliy misol
let ball = 75;
if (ball >= 70) {
    console.log("Siz imtihondan o'tdingiz");
} else {
    console.log("Siz imtihondan o'ta olmadingiz");
}`}</code>
              </pre>
            </div>
          </div>

          {/* if-else if-else */}
          <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">if-else if-else</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Ko'p holatlarni tekshirish uchun.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// if-else if-else
let ball = 85;

if (ball >= 90) {
    console.log("A'lo");
} else if (ball >= 80) {
    console.log("Yaxshi");
} else if (ball >= 70) {
    console.log("Qoniqarli");
} else {
    console.log("Qoniqarsiz");
}

// Amaliy misol
let vaqt = new Date().getHours();

if (vaqt < 12) {
    console.log("Xayrli tong!");
} else if (vaqt < 18) {
    console.log("Xayrli kun!");
} else {
    console.log("Xayrli kech!");
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 2. switch operatori */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. switch operatori</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">switch</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Bir qiymatni ko'p holatlar bilan solishtirish.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Oddiy switch
let kun = 3;

switch (kun) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    default:
        console.log("Noma'lum kun");
}

// Amaliy misol
let til = "uz";

switch (til) {
    case "uz":
        console.log("O'zbek tili tanlandi");
        break;
    case "en":
        console.log("English language selected");
        break;
    case "ru":
        console.log("Выбран русский язык");
        break;
    default:
        console.log("Til tanlanmagan");
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 3. Ternary operatori */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Ternary operatori</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">Ternary</h4>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-700">
                <strong>Tushuntirish:</strong> Qisqa if-else yozish usuli.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Oddiy ternary
let yosh = 20;
let xabar = yosh >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan";
console.log(xabar);

// Murakkab ternary
let ball = 85;
let natija = ball >= 90 ? "A'lo" :
            ball >= 80 ? "Yaxshi" :
            ball >= 70 ? "Qoniqarli" :
            "Qoniqarsiz";
console.log(natija);

// Amaliy misol
let til = "uz";
let salom = til === "uz" ? "Assalomu alaykum" :
           til === "en" ? "Hello" :
           til === "ru" ? "Привет" :
           "Salom";
console.log(salom);`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 4. Amaliy misollar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Amaliy misollar</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h4 className="text-lg font-medium">Kompleks misollar</h4>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Foydalanuvchi autentifikatsiyasi
function login(username, password) {
    if (username === "" || password === "") {
        return "Iltimos, barcha maydonlarni to'ldiring";
    } else if (username === "admin" && password === "12345") {
        return "Tizimga muvaffaqiyatli kirdingiz";
    } else {
        return "Login yoki parol noto'g'ri";
    }
}

// Bahoni hisoblash
function bahoniHisoblash(ball) {
    if (ball < 0 || ball > 100) {
        return "Noto'g'ri ball";
    }
    
    return ball >= 90 ? "A'lo" :
           ball >= 80 ? "Yaxshi" :
           ball >= 70 ? "Qoniqarli" :
           "Qoniqarsiz";
}

// Fasl aniqlovchi
function faslniAniqla(oy) {
    switch (oy) {
        case 12:
        case 1:
        case 2:
            return "Qish";
        case 3:
        case 4:
        case 5:
            return "Bahor";
        case 6:
        case 7:
        case 8:
            return "Yoz";
        case 9:
        case 10:
        case 11:
            return "Kuz";
        default:
            return "Noto'g'ri oy";
    }
}

// Yoshga qarab chipta narxini hisoblash
function chiptaNarxiniHisoblash(yosh) {
    const asosiyNarx = 10000;
    
    if (yosh <= 6) {
        return "Bepul";
    } else if (yosh <= 12) {
        return asosiyNarx * 0.5 + " so'm (50% chegirma)";
    } else if (yosh >= 60) {
        return asosiyNarx * 0.7 + " so'm (30% chegirma)";
    } else {
        return asosiyNarx + " so'm (to'liq narx)";
    }
}

// Parolni tekshirish
function parolniTekshir(parol) {
    if (parol.length < 8) {
        return "Parol kamida 8 ta belgidan iborat bo'lishi kerak";
    }
    
    let kattaHarf = false;
    let raqam = false;
    let maxsusbelgi = false;
    
    for (let i = 0; i < parol.length; i++) {
        if (parol[i] >= 'A' && parol[i] <= 'Z') kattaHarf = true;
        if (parol[i] >= '0' && parol[i] <= '9') raqam = true;
        if ('!@#$%^&*'.includes(parol[i])) maxsusbelgi = true;
    }
    
    if (!kattaHarf) return "Parolda kamida 1 ta katta harf bo'lishi kerak";
    if (!raqam) return "Parolda kamida 1 ta raqam bo'lishi kerak";
    if (!maxsusbelgi) return "Parolda kamida 1 ta maxsus belgi bo'lishi kerak";
    
    return "Parol to'g'ri";
}

// Hafta kuniga qarab ish jadvalini aniqlash
function ishJadvali(kun, soat) {
    if (soat < 0 || soat > 23) return "Noto'g'ri soat kiritildi";
    
    switch (kun.toLowerCase()) {
        case 'dushanba':
        case 'seshanba':
        case 'chorshanba':
        case 'payshanba':
        case 'juma':
            if (soat >= 9 && soat < 18) {
                return "Ish vaqti";
            } else if (soat >= 13 && soat < 14) {
                return "Tushlik vaqti";
            } else {
                return "Ish vaqti emas";
            }
        case 'shanba':
            if (soat >= 10 && soat < 15) {
                return "Yarim ish kuni";
            } else {
                return "Dam olish vaqti";
            }
        case 'yakshanba':
            return "Dam olish kuni";
        default:
            return "Noto'g'ri kun kiritildi";
    }
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Qo'shimcha ma'lumotlar */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Qo'shimcha ma'lumotlar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Shart operatorlari kodni shartli ravishda bajarish uchun ishlatiladi</li>
            <li>if operatori eng sodda va keng tarqalgan shart operatori</li>
            <li>switch operatori ko'p shartlarni tekshirish uchun qulay</li>
            <li>Ternary operator qisqa shartlarni yozish uchun ishlatiladi</li>
            <li>Murakkab shartlar uchun mantiqiy operatorlar (&& va ||) ishlatiladi</li>
            <li>break operatori switch operatorida kerakli joyda to'xtatish uchun ishlatiladi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShartOperatorlar
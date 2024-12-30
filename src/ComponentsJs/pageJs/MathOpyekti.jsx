import React from 'react'

function MathOpyekti() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Math Obyekti (Math Object)</h1>
        <p className="text-gray-700 mb-4">
          JavaScriptda Math obyekti matematik hisoblashlarni osonlashtirish uchun ko'plab metod va konstantalarni taqdim etadi. 
          Bu obyektni ishlatishda alohida yaratish kerak emas, to'g'ridan-to'g'ri Math dan foydalaniladi.
        </p>

        <div className="space-y-6">
          {/* 1. Math Konstantalari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Math Konstantalari</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Konstanta</th>
                      <th className="border p-2">Tavsifi</th>
                      <th className="border p-2">Qiymati</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Math.PI</td>
                      <td className="border p-2">Pi ning qiymati</td>
                      <td className="border p-2">3.141592653589793</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.E</td>
                      <td className="border p-2">Euler soni (e)</td>
                      <td className="border p-2">2.718281828459045</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.LN2</td>
                      <td className="border p-2">2 ning natural logarifmi</td>
                      <td className="border p-2">0.6931471805599453</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.LN10</td>
                      <td className="border p-2">10 ning natural logarifmi</td>
                      <td className="border p-2">2.302585092994046</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.LOG2E</td>
                      <td className="border p-2">e ning 2 asosida logarifmi</td>
                      <td className="border p-2">1.4426950408889634</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.LOG10E</td>
                      <td className="border p-2">e ning 10 asosida logarifmi</td>
                      <td className="border p-2">0.4342944819032518</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.SQRT2</td>
                      <td className="border p-2">2 ning kvadrat ildizi</td>
                      <td className="border p-2">1.4142135623730951</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.SQRT1_2</td>
                      <td className="border p-2">1/2 ning kvadrat ildizi</td>
                      <td className="border p-2">0.7071067811865476</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Konstantalardan foydalanish
console.log(Math.PI);      // 3.141592653589793
console.log(Math.E);       // 2.718281828459045
console.log(Math.LN2);     // 0.6931471805599453
console.log(Math.LN10);    // 2.302585092994046
console.log(Math.LOG2E);   // 1.4426950408889634
console.log(Math.LOG10E);  // 0.4342944819032518
console.log(Math.SQRT2);   // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Raqamlarni yaxlitlash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Raqamlarni yaxlitlash</h2>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 round(), ceil(), floor(), trunc()</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// round() - eng yaqin butun songa yaxlitlash
console.log(Math.round(4.3));  // 4
console.log(Math.round(4.7));  // 5

// ceil() - yuqoriga yaxlitlash
console.log(Math.ceil(4.1));   // 5
console.log(Math.ceil(4.9));   // 5

// floor() - pastga yaxlitlash
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(4.9));  // 4

// trunc() - kasr qismini olib tashlash
console.log(Math.trunc(4.1));  // 4
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.2)); // -4`}</code>
              </pre>
            </div>
          </div>

          {/* 3. Min va Max qiymatlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Min va Max qiymatlar</h2>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// min() - eng kichik qiymatni topish
console.log(Math.min(5, 2, 8, 1, -4));  // -4
console.log(Math.min(...[3, 7, 2, 9]));  // 2

// max() - eng katta qiymatni topish
console.log(Math.max(5, 2, 8, 1, -4));  // 8
console.log(Math.max(...[3, 7, 2, 9]));  // 9

// Amaliy misol: Massivdagi min va max qiymatlarni topish
const numbers = [23, 45, 12, 67, 89, 34];
console.log(\`Minimum: \${Math.min(...numbers)}\`); // 12
console.log(\`Maximum: \${Math.max(...numbers)}\`); // 89`}</code>
              </pre>
            </div>
          </div>

          {/* 4. Random sonlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Random sonlar</h2>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// 0 va 1 oralig'ida tasodifiy son
console.log(Math.random());  // masalan: 0.7834321234

// Ma'lum oraliqda tasodifiy butun son olish
// min va max oralig'ida tasodifiy butun son
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Misollar:
console.log(getRandomInt(1, 10));    // 1 dan 10 gacha
console.log(getRandomInt(1, 100));   // 1 dan 100 gacha
console.log(getRandomInt(-10, 10));  // -10 dan 10 gacha

// Tasodifiy elementni tanlash
const fruits = ['olma', 'banan', 'apelsin', 'uzum'];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);  // tasodifiy meva nomi`}</code>
              </pre>
            </div>
          </div>

          {/* 5. Ildiz va darajalar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Ildiz va darajalar</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Metod</th>
                      <th className="border p-2">Tavsifi</th>
                      <th className="border p-2">Misol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Math.sqrt()</td>
                      <td className="border p-2">Kvadrat ildizni hisoblaydi</td>
                      <td className="border p-2">Math.sqrt(16) → 4</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.cbrt()</td>
                      <td className="border p-2">Kub ildizni hisoblaydi</td>
                      <td className="border p-2">Math.cbrt(27) → 3</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.pow()</td>
                      <td className="border p-2">Sonni belgilangan darajaga ko'taradi</td>
                      <td className="border p-2">Math.pow(2, 3) → 8</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.exp()</td>
                      <td className="border p-2">e ni belgilangan darajaga ko'taradi</td>
                      <td className="border p-2">Math.exp(1) → 2.718...</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.log()</td>
                      <td className="border p-2">Natural logarifmni hisoblaydi</td>
                      <td className="border p-2">Math.log(10) → 2.302...</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.log10()</td>
                      <td className="border p-2">10 asosida logarifmni hisoblaydi</td>
                      <td className="border p-2">Math.log10(100) → 2</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.log2()</td>
                      <td className="border p-2">2 asosida logarifmni hisoblaydi</td>
                      <td className="border p-2">Math.log2(8) → 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Kvadrat ildiz (sqrt - square root)
console.log(Math.sqrt(16));    // 4
console.log(Math.sqrt(2));     // 1.4142135623730951

// Kub ildiz (cbrt - cube root)
console.log(Math.cbrt(27));    // 3
console.log(Math.cbrt(8));     // 2

// Darajaga ko'tarish (pow - power)
console.log(Math.pow(2, 3));   // 8  (2³)
console.log(Math.pow(5, 2));   // 25 (5²)

// e sonining darajasi (exp - exponential)
console.log(Math.exp(1));      // 2.718281828459045
console.log(Math.exp(2));      // 7.3890560989306495

// Logarifmlar
console.log(Math.log(Math.E)); // 1  (natural logarifm)
console.log(Math.log10(100));  // 2  (10 asosli logarifm)
console.log(Math.log2(8));     // 3  (2 asosli logarifm)`}</code>
              </pre>
            </div>
          </div>

          {/* 6. Trigonometrik funksiyalar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Trigonometrik funksiyalar</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Metod</th>
                      <th className="border p-2">Tavsifi</th>
                      <th className="border p-2">Misol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Math.sin()</td>
                      <td className="border p-2">Radiandagi sinus qiymatini hisoblaydi</td>
                      <td className="border p-2">Math.sin(Math.PI / 2) → 1</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.cos()</td>
                      <td className="border p-2">Radiandagi kosinus qiymatini hisoblaydi</td>
                      <td className="border p-2">Math.cos(0) → 1</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.tan()</td>
                      <td className="border p-2">Radiandagi tangens qiymatini hisoblaydi</td>
                      <td className="border p-2">Math.tan(Math.PI / 4) → 1</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.asin()</td>
                      <td className="border p-2">Radiandagi sinusning teskari qiymati</td>
                      <td className="border p-2">Math.asin(1) → 1.5708...</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.acos()</td>
                      <td className="border p-2">Radiandagi kosinusning teskari qiymati</td>
                      <td className="border p-2">Math.acos(1) → 0</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.atan()</td>
                      <td className="border p-2">Radiandagi tangensning teskari qiymati</td>
                      <td className="border p-2">Math.atan(1) → 0.7853...</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.atan2()</td>
                      <td className="border p-2">Koordinatalar bo'yicha burchakni hisoblaydi</td>
                      <td className="border p-2">Math.atan2(1, 1) → 0.7853...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Asosiy trigonometrik funksiyalar
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1

// Teskari trigonometrik funksiyalar
console.log(Math.asin(1));     // 1.5707963267948966 (π/2)
console.log(Math.acos(1));     // 0
console.log(Math.atan(1));     // 0.7853981633974483 (π/4)

// Gradusdan radianga o'tkazish
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Radiandan gradusga o'tkazish
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

console.log(Math.sin(toRadians(90)));  // 1
console.log(toDegrees(Math.PI));       // 180`}</code>
              </pre>
            </div>
          </div>

          {/* 7. Absolyut va boshqa operatsiyalar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. Absolyut va boshqa operatsiyalar</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Metod</th>
                      <th className="border p-2">Tavsifi</th>
                      <th className="border p-2">Misol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Math.abs()</td>
                      <td className="border p-2">Sonning absolyut qiymatini qaytaradi</td>
                      <td className="border p-2">Math.abs(-5) → 5</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.sign()</td>
                      <td className="border p-2">Sonning ishorasini qaytaradi (-1, 0, 1)</td>
                      <td className="border p-2">Math.sign(-10) → -1</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Math.hypot()</td>
                      <td className="border p-2">Koordinatalar bo'yicha gipotenuzani hisoblaydi</td>
                      <td className="border p-2">Math.hypot(3, 4) → 5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Absolyut qiymat
console.log(Math.abs(-5));     // 5
console.log(Math.abs(5));      // 5

// Sonning ishorasi
console.log(Math.sign(-5));    // -1
console.log(Math.sign(5));     // 1
console.log(Math.sign(0));     // 0

// Gipotenuza hisoblash
console.log(Math.hypot(3, 4));      // 5
console.log(Math.hypot(5, 12));     // 13
console.log(Math.hypot(1, 1, 1));   // 1.7320508075688772`}</code>
              </pre>
            </div>
          </div>

          {/* 8. Amaliy misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. Amaliy misollar</h2>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">8.1 Kvadrat tenglamani yechish</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// ax² + bx + c = 0 ko'rinishidagi kvadrat tenglamani yechish
function solveQuadratic(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return \`Ikkita yechim: x₁ = \${x1}, x₂ = \${x2}\`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return \`Bitta yechim: x = \${x}\`;
    } else {
        return "Haqiqiy yechimlarga ega emas";
    }
}

console.log(solveQuadratic(1, -3, 2));  // Ikkita yechim: x₁ = 2, x₂ = 1
console.log(solveQuadratic(1, -2, 1));  // Bitta yechim: x = 1
console.log(solveQuadratic(1, 1, 1));   // Haqiqiy yechimlarga ega emas

// Doira yuzasi va uzunligini hisoblash
function circleCalculations(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    return {
        area: Math.round(area * 100) / 100,
        circumference: Math.round(circumference * 100) / 100
    };
}

console.log(circleCalculations(5));  
// { area: 78.54, circumference: 31.42 }`}</code>
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
                <li>Math obyekti matematik hisob-kitoblar uchun ko'plab foydali metodlarni o'z ichiga oladi</li>
                <li>Konstantalar (Math.PI, Math.E) aniq matematik hisob-kitoblar uchun muhim</li>
                <li>Yaxlitlash metodlari (round, ceil, floor) sonlar bilan ishlashni osonlashtiradi</li>
                <li>Random sonlar generatsiyasi Math.random() orqali amalga oshiriladi</li>
                <li>Trigonometrik funksiyalar geometrik hisob-kitoblar uchun zarur</li>
                <li>Amaliy masalalarni yechishda Math obyekti metodlarini kombinatsiyalab ishlatish mumkin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MathOpyekti
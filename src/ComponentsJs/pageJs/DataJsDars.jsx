import React from 'react'

function DataJsDars() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Date Obyekti (Date Object)</h1>
        <p className="text-gray-700 mb-4">
          JavaScriptda Date obyekti vaqt va sana bilan ishlash uchun foydalaniladi. 
          Bu obyekt yordamida joriy vaqtni olish, sanani o'zgartirish, vaqtlar orasidagi 
          farqni hisoblash va boshqa operatsiyalarni amalga oshirish mumkin.
        </p>

        <div className="space-y-6">
          {/* 1. Date Obyekti Yaratish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Date Obyekti Yaratish</h2>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Joriy vaqt va sanani olish
let now = new Date();
console.log(now); // Masalan: "2024-12-29T12:34:56.789Z"

// Sanani aniq belgilash
let specificDate = new Date(2024, 11, 29, 12, 0, 0);
console.log(specificDate); // "Sun Dec 29 2024 12:00:00"

// ISO formatdagi string yordamida
let isoDate = new Date("2024-12-29T12:00:00");
console.log(isoDate);

// Millisekundlardan foydalanib
let fromEpoch = new Date(1672531200000);
console.log(fromEpoch);`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Sana va vaqtni olish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Sana va vaqtni olish metodlari</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Metod</th>
                      <th className="border p-2">Tavsifi</th>
                      <th className="border p-2">Misol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">getFullYear()</td>
                      <td className="border p-2">To'liq yilni qaytaradi</td>
                      <td className="border p-2">date.getFullYear() → 2024</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getMonth()</td>
                      <td className="border p-2">Oy indeksini qaytaradi (0 - yanvar, 11 - dekabr)</td>
                      <td className="border p-2">date.getMonth() → 11</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getDate()</td>
                      <td className="border p-2">Kun (1 - 31) ni qaytaradi</td>
                      <td className="border p-2">date.getDate() → 29</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getDay()</td>
                      <td className="border p-2">Haftaning kunini qaytaradi (0 - yakshanba)</td>
                      <td className="border p-2">date.getDay() → 0</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getHours()</td>
                      <td className="border p-2">Soatni qaytaradi</td>
                      <td className="border p-2">date.getHours() → 12</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getMinutes()</td>
                      <td className="border p-2">Daqiqani qaytaradi</td>
                      <td className="border p-2">date.getMinutes() → 0</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getSeconds()</td>
                      <td className="border p-2">Soniyani qaytaradi</td>
                      <td className="border p-2">date.getSeconds() → 0</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getMilliseconds()</td>
                      <td className="border p-2">Millisekundni qaytaradi</td>
                      <td className="border p-2">date.getMilliseconds() → 500</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getTime()</td>
                      <td className="border p-2">1970-01-01 dan millisekundlarni qaytaradi</td>
                      <td className="border p-2">date.getTime() → 1703851200000</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getTimezoneOffset()</td>
                      <td className="border p-2">UTC va lokal vaqt o'rtasidagi farqni (daqiqa)</td>
                      <td className="border p-2">date.getTimezoneOffset() → -300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Get metodlaridan foydalanish namunalari
let date = new Date();

// Asosiy vaqt komponentlarini olish
console.log(\`Yil: \${date.getFullYear()}\`);        // Yil: 2024
console.log(\`Oy: \${date.getMonth() + 1}\`);        // Oy: 12 (0 dan boshlanadi)
console.log(\`Kun: \${date.getDate()}\`);            // Kun: 29
console.log(\`Hafta kuni: \${date.getDay()}\`);      // Hafta kuni: 0 (yakshanba)

// Vaqt komponentlarini olish
console.log(\`Soat: \${date.getHours()}\`);          // Soat: 12
console.log(\`Daqiqa: \${date.getMinutes()}\`);      // Daqiqa: 30
console.log(\`Soniya: \${date.getSeconds()}\`);      // Soniya: 45
console.log(\`Millisoniya: \${date.getMilliseconds()}\`); // Millisoniya: 500

// Timestamp va timezone
console.log(\`Timestamp: \${date.getTime()}\`);
console.log(\`Timezone farqi: \${date.getTimezoneOffset()}\`);

// Formatlangan sana
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};
console.log(date.toLocaleDateString('uz-UZ', options));`}</code>
              </pre>
            </div>
          </div>

          {/* 3. Sana va vaqtni o'rnatish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Sana va vaqtni o'rnatish metodlari</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Metod</th>
                      <th className="border p-2">Tavsifi</th>
                      <th className="border p-2">Misol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">setFullYear(year)</td>
                      <td className="border p-2">Yilni o'zgartiradi</td>
                      <td className="border p-2">date.setFullYear(2025)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">setMonth(month)</td>
                      <td className="border p-2">Oyni o'zgartiradi (0 - yanvar)</td>
                      <td className="border p-2">date.setMonth(0)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">setDate(day)</td>
                      <td className="border p-2">Kunni o'zgartiradi (1 - 31)</td>
                      <td className="border p-2">date.setDate(15)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">setHours(hours)</td>
                      <td className="border p-2">Soatni o'zgartiradi</td>
                      <td className="border p-2">date.setHours(14)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">setMinutes(minutes)</td>
                      <td className="border p-2">Daqiqani o'zgartiradi</td>
                      <td className="border p-2">date.setMinutes(30)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">setSeconds(seconds)</td>
                      <td className="border p-2">Soniyani o'zgartiradi</td>
                      <td className="border p-2">date.setSeconds(45)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">setMilliseconds(ms)</td>
                      <td className="border p-2">Millisekundni o'zgartiradi</td>
                      <td className="border p-2">date.setMilliseconds(500)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Set metodlaridan foydalanish namunalari
let date = new Date();

// Yangi sanani o'rnatish
date.setFullYear(2025);    // Yilni 2025 ga o'zgartirish
date.setMonth(0);          // Yanvar oyiga o'zgartirish
date.setDate(15);          // Oyning 15-kuniga o'zgartirish

console.log(date.toDateString());  // "Wed Jan 15 2025"

// Vaqtni o'zgartirish
date.setHours(14);         // Soatni 14:00 ga o'zgartirish
date.setMinutes(30);       // Daqiqani 30 ga o'zgartirish
date.setSeconds(45);       // Soniyani 45 ga o'zgartirish
date.setMilliseconds(500); // Millisekundni 500 ga o'zgartirish

console.log(date.toTimeString());  // "14:30:45 GMT+0500"

// Bir necha parametrni bir vaqtda o'zgartirish
date.setFullYear(2025, 5, 1);  // 2025-yil 1-iyun
console.log(date.toDateString());

// Sanani oldinga/orqaga surish
date.setDate(date.getDate() + 7);  // 7 kunga oldinga
console.log(\`Bir haftadan keyin: \${date.toDateString()}\`);

date.setMonth(date.getMonth() - 1);  // 1 oyga orqaga
console.log(\`Bir oy oldin: \${date.toDateString()}\`);`}</code>
              </pre>
            </div>
          </div>

          {/* 4. Vaqtlar orasidagi farqni hisoblash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Vaqtlar orasidagi farqni hisoblash</h2>
            </div>
            <div className="p-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Ikkita sana orasidagi farqni topish
let startDate = new Date("2024-01-01");
let endDate = new Date("2024-12-29");

let diffInMs = endDate - startDate; // Millisekundlarda farq
let diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Kunlarga aylantirish

console.log(\`Farq: \${diffInDays} kun\`); // "Farq: 363 kun"

// Vaqt oraliqlarini hisoblash
function getTimeDifference(date1, date2) {
  let diff = Math.abs(date2 - date1);
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

let diff = getTimeDifference(startDate, endDate);
console.log(\`Farq: \${diff.days} kun, \${diff.hours} soat, \${diff.minutes} daqiqa\`);`}</code>
              </pre>
            </div>
          </div>

          {/* 5. Joriy vaqtni formatlash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Joriy vaqtni formatlash</h2>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.1 Oddiy string yaratish</h3>
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
                      <td className="border p-2">toDateString()</td>
                      <td className="border p-2">Faqat sanani qaytaradi</td>
                      <td className="border p-2">"Sun Dec 29 2024"</td>
                    </tr>
                    <tr>
                      <td className="border p-2">toTimeString()</td>
                      <td className="border p-2">Faqat vaqtni qaytaradi</td>
                      <td className="border p-2">"12:00:00 GMT+0000 (UTC)"</td>
                    </tr>
                    <tr>
                      <td className="border p-2">toISOString()</td>
                      <td className="border p-2">ISO 8601 formatini qaytaradi</td>
                      <td className="border p-2">"2024-12-29T12:00:00.000Z"</td>
                    </tr>
                    <tr>
                      <td className="border p-2">toLocaleDateString()</td>
                      <td className="border p-2">Lokal formatda sanani qaytaradi</td>
                      <td className="border p-2">"12/29/2024"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let now = new Date();

// Oddiy formatlash metodlari
console.log(now.toDateString());        // "Sun Dec 29 2024"
console.log(now.toTimeString());        // "12:00:00 GMT+0000 (UTC)"
console.log(now.toISOString());         // "2024-12-29T12:00:00.000Z"
console.log(now.toLocaleDateString());  // "12/29/2024"

// Maxsus formatlash
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

console.log(now.toLocaleDateString('uz-UZ', options));
// "Yakshanba, 29-dekabr, 2024, 12:00"`}</code>
              </pre>

              <h3 className="text-lg font-medium text-gray-800 my-4">5.2 Shablonlar bilan formatlash</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let now = new Date();

// O'zbek tilidagi oylar
const months = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];

// Formatlar
let formattedDate = \`\${now.getFullYear()}-\${now.getMonth() + 1}-\${now.getDate()}\`;
console.log(formattedDate); // "2024-12-29"

let uzDate = \`\${now.getDate()}-\${months[now.getMonth()]}, \${now.getFullYear()}\`;
console.log(uzDate); // "29-Dekabr, 2024"

// Vaqt bilan
let fullDateTime = \`\${now.getDate()}-\${months[now.getMonth()]}, \${now.getFullYear()} \${now.getHours()}:\${now.getMinutes()}\`;
console.log(fullDateTime); // "29-Dekabr, 2024 12:00"`}</code>
              </pre>
            </div>
          </div>

          {/* 6. Amaliy misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Amaliy misollar</h2>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.1 Haftaning kunini aniqlash</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`let today = new Date();
let days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];

console.log(\`Bugun: \${days[today.getDay()]}\`); // "Bugun: Yakshanba"`}</code>
              </pre>

              <h3 className="text-lg font-medium text-gray-800 mb-2">6.2 Vaqtni hisoblash</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`let start = new Date(); // Dastur boshlanish vaqti

// Biror vaqtni kechiktirish
for (let i = 0; i < 1e6; i++) {} // Simulyatsiya

let end = new Date(); // Dastur tugash vaqti
let duration = end - start;

console.log(\`Dastur ishlash vaqti: \${duration} ms\`); // "Dastur ishlash vaqti: 12 ms"`}</code>
              </pre>

              <h3 className="text-lg font-medium text-gray-800 mb-2">6.3 Yangi yilgacha qolgan vaqt</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let now = new Date();
let nextYear = now.getFullYear() + 1;
let newYear = new Date(nextYear, 0, 1);

let msLeft = newYear - now;
let daysLeft = Math.floor(msLeft / (1000 * 60 * 60 * 24));

console.log(\`Yangi yilgacha \${daysLeft} kun qoldi.\`);`}</code>
              </pre>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Date obyekti JavaScript da vaqt va sana bilan ishlash uchun asosiy vosita hisoblanadi</li>
                <li>Get metodlari yordamida sana va vaqt qismlarini olish mumkin</li>
                <li>Set metodlari yordamida sana va vaqtni o'zgartirish mumkin</li>
                <li>Vaqtlar orasidagi farqni hisoblash uchun oddiy arifmetik amallardan foydalanish mumkin</li>
                <li>Turli formatlash metodlari orqali sanani kerakli ko'rinishga o'tkazish mumkin</li>
                <li>Amaliy misollarda ko'rsatilganidek, Date obyekti juda ko'p vazifalarni bajarish imkonini beradi</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default DataJsDars

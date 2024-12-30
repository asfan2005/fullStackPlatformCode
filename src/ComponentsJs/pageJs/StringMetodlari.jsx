import React from 'react'

function StringMetodlari() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">String Metodlari (String Methods)</h1>
        <p className="text-gray-700 mb-4">
          JavaScriptda string metodlari matn bilan ishlashda yordam beradi. Ular yordamida matnni o'zgartirish, 
          qidirish, bo'laklash, qo'shish va boshqa ko'plab operatsiyalarni bajarish mumkin.
        </p>

        <div className="space-y-6">
          {/* 1. String uzunligi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. String uzunligi</h2>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">1.1 length</h3>
              <p className="text-gray-600 mb-2">Stringning uzunligini qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.length); // 13`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Qidirish va indeksni aniqlash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Qidirish va indeksni aniqlash</h2>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 indexOf()</h3>
              <p className="text-gray-600 mb-2">Berilgan matnning birinchi marta uchragan joyining indeksini qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.indexOf("world")); // 7
console.log(text.indexOf("JavaScript")); // -1`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.2 lastIndexOf()</h3>
              <p className="text-gray-600 mb-2">Berilgan matnning oxirgi marta uchragan joyining indeksini qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world! Hello again!";
console.log(text.lastIndexOf("Hello")); // 14`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.3 includes()</h3>
              <p className="text-gray-600 mb-2">Matn ichida berilgan qism borligini tekshiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.includes("world")); // true
console.log(text.includes("JavaScript")); // false`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.4 startsWith()</h3>
              <p className="text-gray-600 mb-2">Matn berilgan qism bilan boshlanishini tekshiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.startsWith("Hello")); // true
console.log(text.startsWith("world")); // false`}</code>
              </pre>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.5 endsWith()</h3>
              <p className="text-gray-600 mb-2">Matn berilgan qism bilan tugashini tekshiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.endsWith("world!")); // true
console.log(text.endsWith("Hello")); // false`}</code>
              </pre>
            </div>
          </div>

          {/* 3. Kesish va bo'laklash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Kesish va bo'laklash</h2>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.1 slice()</h3>
              <p className="text-gray-600 mb-2">Matndan belgilangan qismini ajratib oladi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
let sliced = text.slice(7, 12); // 7 dan 12 gacha (12 kirmaydi)
console.log(sliced); // "world"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.2 substring()</h3>
              <p className="text-gray-600 mb-2">slice()ga o'xshash, lekin sal farqli usulda ishlaydi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
let result = text.substring(7, 12);
console.log(result); // "world"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.3 substr() (Eskirgan)</h3>
              <p className="text-gray-600 mb-2">Belgilangan joydan boshlab, ma'lum uzunlikdagi qismni qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
let result = text.substr(7, 5); // 7-pozitsiyadan boshlab 5 ta belgi
console.log(result); // "world"`}</code>
              </pre>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.4 split()</h3>
              <p className="text-gray-600 mb-2">Matnni belgilangan belgi bo'yicha bo'lib, massiv qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "apple,banana,cherry";
let fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]`}</code>
              </pre>
            </div>
          </div>

          {/* 4. O'zgartirish metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. O'zgartirish metodlari</h2>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.1 replace()</h3>
              <p className="text-gray-600 mb-2">Berilgan qismni boshqa matn bilan almashtiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
let result = text.replace("world", "JavaScript");
console.log(result); // "Hello, JavaScript!"`}</code>
              </pre>
            </div>

            {/* 4. O'zgartirish metodlari (davomi) */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.2 replaceAll()</h3>
              <p className="text-gray-600 mb-2">Matnda berilgan qismning barcha uchrashgan joylarini almashtiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world! Hello again!";
let result = text.replaceAll("Hello", "Hi");
console.log(result); // "Hi, world! Hi again!"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.3 toUpperCase()</h3>
              <p className="text-gray-600 mb-2">Matnni katta harflarga o'zgartiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.4 toLowerCase()</h3>
              <p className="text-gray-600 mb-2">Matnni kichik harflarga o'zgartiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, WORLD!";
console.log(text.toLowerCase()); // "hello, world!"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.5 trim()</h3>
              <p className="text-gray-600 mb-2">Matnning boshidagi va oxiridagi bo'sh joylarni olib tashlaydi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "   Hello, world!   ";
console.log(text.trim()); // "Hello, world!"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.6 padStart()</h3>
              <p className="text-gray-600 mb-2">Matnning boshiga belgilangan uzunlikka yetkazish uchun belgi qo'shadi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "5";
console.log(text.padStart(3, "0")); // "005"`}</code>
              </pre>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.7 padEnd()</h3>
              <p className="text-gray-600 mb-2">Matnning oxiriga belgilangan uzunlikka yetkazish uchun belgi qo'shadi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "5";
console.log(text.padEnd(3, "0")); // "500"`}</code>
              </pre>
            </div>
          </div>

          {/* 5. Birlashtirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Birlashtirish</h2>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.1 concat()</h3>
              <p className="text-gray-600 mb-2">Ikki yoki undan ortiq matnni birlashtiradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text1 = "Hello";
let text2 = "world";
let result = text1.concat(", ", text2, "!");
console.log(result); // "Hello, world!"`}</code>
              </pre>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.2 Oddiy qo'shish usuli</h3>
              <p className="text-gray-600 mb-2">Template literal yordamida matnlarni birlashtirish.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text1 = "Hello";
let text2 = "world";
console.log(\`\${text1}, \${text2}!\`); // "Hello, world!"`}</code>
              </pre>
            </div>
          </div>

          {/* 6. Tekshirish va qiyoslash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Tekshirish va qiyoslash</h2>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.1 charAt()</h3>
              <p className="text-gray-600 mb-2">Berilgan indeksdagi belgini qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
console.log(text.charAt(7)); // "w"`}</code>
              </pre>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.2 charCodeAt()</h3>
              <p className="text-gray-600 mb-2">Berilgan indeksdagi belgining Unicode qiymatini qaytaradi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello";
console.log(text.charCodeAt(0)); // 72`}</code>
              </pre>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.3 localeCompare()</h3>
              <p className="text-gray-600 mb-2">Ikki matnni lokalga mos ravishda qiyoslaydi.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let a = "apple";
let b = "banana";
console.log(a.localeCompare(b)); // -1 (a < b)`}</code>
              </pre>
            </div>
          </div>

          {/* 7. Shablonlar bilan ishlash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. Shablonlar bilan ishlash</h2>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">7.1 Backticks va shablon satrlari</h3>
              <p className="text-gray-600 mb-2">O'zgaruvchilarni matn ichiga joylash.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let name = "Ali";
let age = 25;
let message = \`Mening ismim \${name}, yoshim \${age}.\`;
console.log(message); // "Mening ismim Ali, yoshim 25."`}</code>
              </pre>
            </div>
          </div>

          {/* 8. Amaliy misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. Amaliy misollar</h2>
            </div>

            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800 mb-2">8.1 Stringni teskari o'girish</h3>
              <p className="text-gray-600 mb-2">Matnni teskari tartibda yozish.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "Hello, world!";
let reversed = text.split("").reverse().join("");
console.log(reversed); // "!dlrow ,olleH"`}</code>
              </pre>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">8.2 So'zlarni katta harfga aylantirish</h3>
              <p className="text-gray-600 mb-2">Har bir so'zning birinchi harfini katta qilish.</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let text = "hello world";
let capitalized = text
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized); // "Hello World"`}</code>
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
                <li>String metodlari matn bilan ishlashda katta imkoniyatlarni taqdim etadi</li>
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

export default StringMetodlari
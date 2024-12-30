import React from 'react'

function JsonDars() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript JSON (JavaScript Object Notation)</h1>
        <p className="text-gray-700 mb-4">
          JSON — bu ma'lumotlarni saqlash va almashish uchun keng tarqalgan format. U matn shaklida yoziladi, 
          ammo JavaScript obyektlariga o'xshash tuzilishga ega va ko'pincha veb-ilovalarda server va brauzer 
          o'rtasida ma'lumot almashish uchun ishlatiladi.
        </p>

        <div className="space-y-6">
          {/* 1. JSON Formati */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. JSON Formati</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">JSON quyidagilarni qo'llab-quvvatlaydi:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kalit-qiymat juftliklari (Object)</li>
                <li>Elementlar ro'yxati (Array)</li>
              </ul>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON Obyektlari</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`{
  "name": "John",
  "age": 30,
  "isStudent": false
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON Massivlari</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`[
  "Apple",
  "Banana",
  "Cherry"
]`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 2. JavaScript va JSON */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. JavaScript va JSON bilan ishlash</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Metod</th>
                      <th className="border p-2">Tavsifi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">JSON.stringify()</td>
                      <td className="border p-2">JavaScript obyektini JSON matnga aylantiradi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">JSON.parse()</td>
                      <td className="border p-2">JSON matnini JavaScript obyektiga aylantiradi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3. Amaliy Misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Amaliy Misollar</h2>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Serverdan ma'lumot olish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Xato:", error));`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">3.2 JSON bilan LocalStorage ishlatish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Obyektni saqlash
let user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Obyektni o'qish
let savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "John"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">3.3 JSON va Form Ma'lumotlarini Serverga Yuborish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let formData = {
  name: "Alice",
  email: "alice@example.com"
};

fetch("https://example.com/api/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(data => console.log("Ma'lumot yuborildi:", data))
  .catch(error => console.error("Xato:", error));`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. JSON va JavaScript Obyektlari Farqi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. JSON va JavaScript Obyektlari Farqi</h2>
            </div>
            <div className="p-4 space-y-6">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">JSON</th>
                      <th className="border p-2">JavaScript Obyekti</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Matn formatida</td>
                      <td className="border p-2">Ma'lumotlarni saqlash uchun tuzilgan</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Kalitlar doimo qo'shtirnoqda</td>
                      <td className="border p-2">Kalitlar qo'shtirnoqsiz ham bo'lishi mumkin</td>
                    </tr>
                    <tr>
                      <td className="border p-2">JSON statik</td>
                      <td className="border p-2">JavaScript obyektlar dinamik</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JSON Formati:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`{
  "name": "John",
  "age": 30
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">JavaScript Obyekti:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let user = {
  name: "John",
  age: 30
};`}</code>
                </pre>
              </div>

              <div className="text-gray-700 space-y-2">
                <p>Asosiy farqlar:</p>
                <ul className="list-disc list-inside">
                  <li>JSON kalitlari doimo qo'shtirnoq ichida bo'lishi shart</li>
                  <li>JavaScript obyektlarida kalitlar qo'shtirnoqsiz ham ishlatilishi mumkin</li>
                  <li>JSON faqat ma'lumotlarni saqlash uchun ishlatiladi</li>
                  <li>JavaScript obyektlari metodlar va boshqa murakkab xususiyatlarga ega bo'lishi mumkin</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. JSON Ishlatishda Xatolar va Yechimlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. JSON Ishlatishda Xatolar va Yechimlar</h2>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">5.1 JSON noto'g'ri tuzilishi</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Noto'g'ri JSON
let jsonString = '{name: "John", age: 30}'; // Kalitlar qo'shtirnoqda bo'lishi kerak
let user = JSON.parse(jsonString); // Xato

// To'g'ri yechim:
let jsonString = '{"name": "John", "age": 30}';
let user = JSON.parse(jsonString);`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">5.2 Recursive JSON tuzilmalari</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let obj = {};
obj.self = obj; // Recursive tuzilma
JSON.stringify(obj); // Xato`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 6. JSON Validator va Formatter */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. JSON Validator va Formatter</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">
                Agar JSON matni katta va murakkab bo'lsa, uni validerlash va formatlash uchun onlayn 
                vositalardan foydalanish mumkin:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <a 
                    href="https://jsonlint.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    JSONLint - JSON Validator
                  </a>
                </li>
                <li>
                  <a 
                    href="https://jsonformatter.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    JSON Formatter & Validator
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. JSON Xavfsizlik Masalalari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. JSON Xavfsizlik Masalalari</h2>
            </div>
            <div className="p-4 space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>JSON ma'lumotlarini parse qilishda ishonchli manbalardan foydalaning</li>
                <li>JSON.parse() dan oldin ma'lumotlarni validatsiya qiling</li>
                <li>Maxfiy ma'lumotlarni JSON formatida saqlashda ehtiyot bo'ling</li>
                <li>CSRF (Cross-Site Request Forgery) hujumlaridan himoyalanish choralarini ko'ring</li>
              </ul>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                JSON — bu JavaScript va boshqa dasturlash tillarida keng qo'llaniladigan, ma'lumotlarni 
                almashish uchun oddiy va qulay format. U server va mijoz o'rtasidagi aloqada, 
                ma'lumotlarni saqlashda va turli platformalar o'rtasida ma'lumot almashishda keng qo'llaniladi.
                JSON.stringify() va JSON.parse() metodlari JSON va JavaScript obyektlari o'rtasida ishlashni 
                osonlashtiradi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JsonDars
import React from 'react'

function LocalStroge() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript LocalStorage</h1>
        <p className="text-gray-700 mb-4">
          LocalStorage — bu foydalanuvchining brauzerida ma'lumotlarni saqlash uchun ishlatiladigan mexanizm. 
          U doimiy saqlashni ta'minlaydi, ya'ni ma'lumotlar brauzer yopilgandan keyin ham saqlanib qoladi.
        </p>

        <div className="space-y-6">
          {/* 1. localStorage Xususiyatlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. localStorage Xususiyatlari</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ma'lumotlar key-value (kalit-qiymat) ko'rinishida saqlanadi</li>
                <li>Faqat string (matnli) ma'lumotlarni saqlaydi</li>
                <li>Ma'lumotlar doimiy saqlanadi</li>
                <li>Bir xil domen uchun ishlaydi</li>
              </ul>
            </div>
          </div>

          {/* 2. localStorage API */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. localStorage API</h2>
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
                      <td className="border p-2">setItem(key, value)</td>
                      <td className="border p-2">Kalit-qiymat juftligini saqlaydi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">getItem(key)</td>
                      <td className="border p-2">Berilgan kalitning qiymatini qaytaradi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">removeItem(key)</td>
                      <td className="border p-2">Berilgan kalitga tegishli qiymatni o'chiradi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">clear()</td>
                      <td className="border p-2">Barcha saqlangan ma'lumotlarni o'chiradi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3. localStorage dan Foydalanish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. localStorage dan Foydalanish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* Ma'lumot saqlash */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Ma'lumot saqlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`localStorage.setItem("username", "JohnDoe");`}</code>
                </pre>
              </div>

              {/* Ma'lumotni o'qish */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.2 Ma'lumotni o'qish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let username = localStorage.getItem("username");
console.log(username); // "JohnDoe"`}</code>
                </pre>
              </div>

              {/* Ma'lumotni o'chirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.3 Ma'lumotni o'chirish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Bitta elementni o'chirish
localStorage.removeItem("username");

// Hamma ma'lumotlarni o'chirish
localStorage.clear();`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. JSON bilan ishlash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. JSON bilan ishlash</h2>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">4.1 Obyektni saqlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">4.2 Obyektni o'qish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let user = JSON.parse(localStorage.getItem("user"));
console.log(user.name); // "John"`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 5. Amaliy Misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Amaliy Misollar</h2>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">5.1 Mavzu saqlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function() {
  let savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">5.2 Forma ma'lumotlarini saqlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let form = document.getElementById("userForm");

form.addEventListener("input", function() {
  let formData = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 6. Cheklovlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Cheklovlar</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Har bir domen uchun taxminan 5MB saqlash hajmi</li>
                <li>Ma'lumotlar shifrlanmaydi</li>
                <li>Faqat bir xil domen ichida ishlaydi</li>
              </ul>
            </div>
          </div>

          {/* 7. localStorage va sessionStorage farqi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. localStorage va sessionStorage farqi</h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Xususiyat</th>
                      <th className="border p-2">localStorage</th>
                      <th className="border p-2">sessionStorage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 font-medium">Saqlash muddati</td>
                      <td className="border p-2">Doimiy (o'chirilmaguncha saqlanadi)</td>
                      <td className="border p-2">Faqat sessiya davomida</td>
                    </tr>
                    <tr>
                      <td className="border p-2 font-medium">Brauzer yopilishi</td>
                      <td className="border p-2">Ma'lumotlar saqlanib qoladi</td>
                      <td className="border p-2">Ma'lumotlar yo'qoladi</td>
                    </tr>
                    <tr>
                      <td className="border p-2 font-medium">Domen chegarasi</td>
                      <td className="border p-2">Bir xil domen ichida ishlaydi</td>
                      <td className="border p-2">Bir xil domen ichida ishlaydi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                localStorage - bu veb-ilovalar uchun qulay va samarali ma'lumotlarni saqlash mexanizmi. 
                U foydalanuvchi sozlamalari, forma ma'lumotlari va boshqa muhim ma'lumotlarni saqlash 
                uchun juda foydali vosita hisoblanadi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocalStroge
import React from 'react'

function EventsJs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript Events (Hodisalar)</h1>
        <p className="text-gray-700 mb-4">
          JavaScript Events (hodisalar) - bu brauzer yoki foydalanuvchi tomonidan yuzaga keladigan voqealar bo'lib, 
          ular sahifadagi elementlar bilan o'zaro ta'sirni boshqarish uchun ishlatiladi.
        </p>

        <div className="space-y-6">
          {/* 1. Eventlar Tushunchasi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Eventlar Tushunchasi</h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">
                Hodisalar sahifadagi o'zgarishlar yoki foydalanuvchi harakatlarini ifodalaydi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Asosiy event turlari
- click: Tugma bosilganda
- mouseover: Sichqoncha element ustiga kelganda
- keydown: Klaviaturada tugma bosilganda
- submit: Forma yuborilganda`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Eventlarni Qo'shish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Eventlarni Qo'shish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 2.1 Inline usuli */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 Inline usuli (HTMLda)</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`<button onclick="alert('Tugma bosildi!')">Bos!</button>`}</code>
                </pre>
              </div>

              {/* 2.2 DOM orqali */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.2 DOM orqali (JavaScriptda)</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let button = document.getElementById("myButton");
button.onclick = function() {
  alert("Tugma bosildi!");
};`}</code>
                </pre>
              </div>

              {/* 2.3 addEventListener */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.3 addEventListener() metodi</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Tugma bosildi!");
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 3. Eng Ko'p Foydalaniladigan Hodisalar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Eng Ko'p Foydalaniladigan Hodisalar</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 3.1 Mouse Events */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Mouse (Sichqoncha) Hodisalari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Hodisa</th>
                        <th className="border p-2">Tavsifi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">click</td>
                        <td className="border p-2">Sichqoncha bosilganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">dblclick</td>
                        <td className="border p-2">Ikkilamchi bosish</td>
                      </tr>
                      <tr>
                        <td className="border p-2">mousedown</td>
                        <td className="border p-2">Tugma bosilgan vaqti</td>
                      </tr>
                      <tr>
                        <td className="border p-2">mouseup</td>
                        <td className="border p-2">Tugma qo'yib yuborilganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">mouseover</td>
                        <td className="border p-2">Sichqoncha element ustiga kelganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">mouseout</td>
                        <td className="border p-2">Sichqoncha elementdan chiqib ketganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">mousemove</td>
                        <td className="border p-2">Sichqoncha harakati</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let box = document.getElementById("myBox");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "white";
});`}</code>
                </pre>
              </div>

              {/* 3.2 Klaviatura Hodisalari */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.2 Klaviatura Hodisalari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Hodisa</th>
                        <th className="border p-2">Tavsifi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">keydown</td>
                        <td className="border p-2">Tugma bosilganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">keypress</td>
                        <td className="border p-2">Tugma bosilganda (deprecated)</td>
                      </tr>
                      <tr>
                        <td className="border p-2">keyup</td>
                        <td className="border p-2">Tugma qo'yib yuborilganda</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`document.addEventListener("keydown", function(event) {
  console.log(\`Bosilgan tugma: \${event.key}\`);
});`}</code>
                </pre>
              </div>

              {/* 3.3 Forma Hodisalari */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.3 Forma Hodisalari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Hodisa</th>
                        <th className="border p-2">Tavsifi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">submit</td>
                        <td className="border p-2">Forma yuborilganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">change</td>
                        <td className="border p-2">Forma elementi o'zgartirilganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">input</td>
                        <td className="border p-2">Forma elementi ichiga ma'lumot kiritilganda</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Formani jo'natilishini bloklash
  alert("Forma yuborildi!");
});`}</code>
                </pre>
              </div>

              {/* 3.4 Window Hodisalari */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.4 Window Hodisalari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Hodisa</th>
                        <th className="border p-2">Tavsifi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">load</td>
                        <td className="border p-2">Sahifa to'liq yuklanganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">resize</td>
                        <td className="border p-2">Brauzer oynasi hajmi o'zgarganda</td>
                      </tr>
                      <tr>
                        <td className="border p-2">scroll</td>
                        <td className="border p-2">Sahifa scroll qilganda</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`window.addEventListener("resize", function() {
  console.log("Oyna hajmi o'zgardi!");
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Event Obyekti */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Event Obyekti</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Har bir hodisa avtomatik ravishda event obyektini yaratadi, bu obyekt orqali 
                hodisaning turli ma'lumotlariga kirish mumkin.
              </p>

              {/* 4.1 Eventning asosiy xususiyatlari */}
              <div>
                <h3 className="text-lg font-medium mb-2">4.1 Eventning asosiy xususiyatlari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Xususiyat</th>
                        <th className="border p-2">Tavsifi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">type</td>
                        <td className="border p-2">Hodisaning turi (masalan, click, keydown)</td>
                      </tr>
                      <tr>
                        <td className="border p-2">target</td>
                        <td className="border p-2">Hodisa yuz bergan element</td>
                      </tr>
                      <tr>
                        <td className="border p-2">currentTarget</td>
                        <td className="border p-2">Hozirgi faol element</td>
                      </tr>
                      <tr>
                        <td className="border p-2">clientX, clientY</td>
                        <td className="border p-2">Sichqoncha koordinatalari</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`document.addEventListener("click", function(event) {
  console.log(\`Hodisa turi: \${event.type}\`);
  console.log(\`Bosilgan element: \${event.target.tagName}\`);
});`}</code>
                </pre>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Eslatma:</span> Event obyekti orqali hodisa haqida 
                    to'liq ma'lumot olish va uni boshqarish mumkin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Event Delegatsiyasi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Event Delegatsiyasi</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Event delegatsiyasi katta elementlar to'plamida samarali ishlash uchun ishlatiladi. 
                Hodisani ota elementga biriktirib, undagi bolalar elementlarni boshqarish mumkin.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-2">JavaScript kod:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log(\`Bosilgan tugma: \${event.target.textContent}\`);
  }
});`}</code>
                </pre>

                <h3 className="text-lg font-medium mb-2">HTML struktura:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`<div id="parent">
  <button>Tugma 1</button>
  <button>Tugma 2</button>
</div>`}</code>
                </pre>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm">
                    <span className="font-bold">Afzalligi:</span> Ko'p elementlar uchun bitta event listener 
                    yetarli bo'ladi, bu xotira sarfini kamaytiradi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Eventlarning Oldindan Belgilangan Amalini To'xtatish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Eventlarning Oldindan Belgilangan Amalini To'xtatish</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Ba'zi hodisalarning standart harakatlarini bloklash uchun preventDefault() metodidan foydalaniladi.
              </p>

              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`document.querySelector("a").addEventListener("click", function(event) {
  event.preventDefault(); // Havolani bosish harakatini to'xtatadi
  alert("Havolaga o'tish bloklandi!");
});`}</code>
              </pre>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-sm">
                  <span className="font-bold">Qo'llanilishi:</span> Formalarni yuborish, havolalarga o'tish 
                  kabi standart harakatlarni boshqarish uchun ishlatiladi.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Eventlarni O'chirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. Eventlarni O'chirish</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Eventlarni o'chirish uchun removeEventListener() metodidan foydalaniladi.
              </p>

              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`function sayHello() {
  console.log("Salom!");
}

let button = document.getElementById("myButton");
button.addEventListener("click", sayHello);

// Eventni o'chirish
button.removeEventListener("click", sayHello);`}</code>
              </pre>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm">
                  <span className="font-bold">Muhim:</span> removeEventListener() ishlatish uchun event handler 
                  alohida funksiya ko'rinishida bo'lishi kerak.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Asosiy Hodisalar Bo'yicha Amaliy Misol */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. Asosiy Hodisalar Bo'yicha Amaliy Misol</h2>
            </div>
            <div className="p-4 space-y-6">
              <h3 className="text-lg font-medium mb-2">Misol: Tugmani bosib rangni o'zgartirish</h3>

              <div className="space-y-4">
                <h4 className="text-md font-medium mb-2">HTML:</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`<button id="colorButton">Rangni o'zgartir</button>`}</code>
                </pre>

                <h4 className="text-md font-medium mb-2">JavaScript:</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let button = document.getElementById("colorButton");
button.addEventListener("click", function() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Hodisalar veb-sahifa bilan foydalanuvchi o'rtasidagi aloqani boshqaradi</li>
                <li>addEventListener() zamonaviy va moslashuvchan usul hisoblanadi</li>
                <li>Event delegatsiyasi yordamida katta hajmli DOM tuzilmasini boshqarish osonlashadi</li>
                <li>preventDefault() va stopPropagation() kabi metodlar bilan hodisalar oqimini boshqarish mumkin</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default EventsJs
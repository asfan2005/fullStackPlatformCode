import React from 'react'

function DomBilanIshlash() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">DOM bilan ishlash (Document Object Model)</h1>
        <p className="text-gray-700 mb-4">
          DOM (Document Object Model) - bu veb-sahifalar bilan ishlash uchun mo'ljallangan interfeys bo'lib, 
          HTML yoki XML hujjatlarini daraxt ko'rinishida ifodalaydi va JavaScript orqali manipulyatsiya qilish 
          imkonini beradi.
        </p>

        <div className="space-y-6">
          {/* 1. DOM Nima? */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. DOM Nima?</h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">
                DOM sahifadagi har bir HTML elementini tugun (node) sifatida ifodalaydi va ularni 
                daraxt strukturasida joylashtiradi.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html>
<head>
  <title>DOM Misol</title>
</head>
<body>
  <h1 id="title">Salom, Dunyolar!</h1>
  <p class="text">Bu DOM bilan ishlashning namunasi.</p>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>

          {/* 2. DOM Elementlariga Kirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. DOM Elementlariga Kirish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 2.1 ID bo'yicha kirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 ID bo'yicha kirish</h3>
                <p className="text-gray-700 mb-3">
                  getElementById() metodi orqali ID bo'yicha elementga kirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let title = document.getElementById("title");
console.log(title.textContent); // "Salom, Dunyolar!"`}</code>
                </pre>
              </div>

              {/* 2.2 Class nomi bo'yicha kirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.2 Class nomi bo'yicha kirish</h3>
                <p className="text-gray-700 mb-3">
                  getElementsByClassName() metodi orqali class nomi bo'yicha elementlarni olishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let textElements = document.getElementsByClassName("text");
console.log(textElements[0].textContent); // "Bu DOM bilan ishlashning namunasi."`}</code>
                </pre>
              </div>

              {/* 2.3 Teg nomi bo'yicha kirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.3 Teg nomi bo'yicha kirish</h3>
                <p className="text-gray-700 mb-3">
                  getElementsByTagName() metodi orqali teg nomi bo'yicha elementlarni olishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent); // "Bu DOM bilan ishlashning namunasi."`}</code>
                </pre>
              </div>

              {/* 2.4 CSS selektor bo'yicha kirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.4 CSS selektor bo'yicha kirish</h3>
                <p className="text-gray-700 mb-3">
                  querySelector() va querySelectorAll() metodlari orqali CSS selektorlari yordamida elementlarni topishimiz mumkin.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-sm">
                    <span className="font-bold">querySelector():</span> Faqat birinchi mos elementni qaytaradi.<br/>
                    <span className="font-bold">querySelectorAll():</span> Barcha mos elementlarni qaytaradi.
                  </p>
                </div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let title = document.querySelector("#title");
let texts = document.querySelectorAll(".text");
console.log(title.textContent); // "Salom, Dunyolar!"
console.log(texts.length);      // 1`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 3. DOM Elementlarini O'zgartirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. DOM Elementlarini O'zgartirish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 3.1 Matnni o'zgartirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Matnni o'zgartirish</h3>
                <p className="text-gray-700 mb-3">
                  textContent xususiyati orqali element ichidagi matnni o'zgartirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let title = document.getElementById("title");
title.textContent = "DOM bilan ishlashni boshladik!";
console.log(title.textContent); // "DOM bilan ishlashni boshladik!"`}</code>
                </pre>
              </div>

              {/* 3.2 HTML tarkibini o'zgartirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.2 HTML tarkibini o'zgartirish</h3>
                <p className="text-gray-700 mb-3">
                  innerHTML xususiyati orqali element ichidagi HTML tarkibini o'zgartirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let paragraph = document.querySelector(".text");
paragraph.innerHTML = "<b>Bu yangi matn.</b>";
console.log(paragraph.innerHTML); // "<b>Bu yangi matn.</b>"`}</code>
                </pre>
              </div>

              {/* 3.3 Elementning atributlarini boshqarish */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.3 Elementning atributlarini boshqarish</h3>
                <p className="text-gray-700 mb-3">
                  setAttribute(), getAttribute() va removeAttribute() metodlari orqali elementlarning atributlarini boshqarishimiz mumkin.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Atribut o'rnatish:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`let link = document.createElement("a");
link.setAttribute("href", "https://www.google.com");
link.textContent = "Google";
document.body.appendChild(link);`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Atributni olish:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`let href = link.getAttribute("href");
console.log(href); // "https://www.google.com"`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Atributni o'chirish:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`link.removeAttribute("href");`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Eslatma:</span> Atributlar bilan ishlashda HTML5 data-* atributlarini 
                    ham ishlatishingiz mumkin. Masalan: data-id, data-name va hokazo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. DOM Elementlarini Qo'shish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. DOM Elementlarini Qo'shish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 4.1 Yangi element yaratish */}
              <div>
                <h3 className="text-lg font-medium mb-2">4.1 Yangi element yaratish</h3>
                <p className="text-gray-700 mb-3">
                  createElement() metodi orqali yangi HTML elementini yaratishimiz va appendChild() orqali uni sahifaga qo'shishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let newParagraph = document.createElement("p");
newParagraph.textContent = "Bu yangi paragraf.";
document.body.appendChild(newParagraph);`}</code>
                </pre>
              </div>

              {/* 4.2 Yangi elementni qo'shish (aniq joyga) */}
              <div>
                <h3 className="text-lg font-medium mb-2">4.2 Yangi elementni qo'shish (aniq joyga)</h3>
                <p className="text-gray-700 mb-3">
                  insertBefore() metodi orqali yangi elementni mavjud elementdan oldin joylashtirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let newDiv = document.createElement("div");
newDiv.textContent = "Yangi div elementi.";
document.body.insertBefore(newDiv, document.querySelector("#title"));`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 5. DOM Elementlarini O'chirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. DOM Elementlarini O'chirish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 5.1 Elementni o'chirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.1 Elementni o'chirish</h3>
                <p className="text-gray-700 mb-3">
                  remove() metodi orqali elementni sahifadan to'liq o'chirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let title = document.getElementById("title");
title.remove();`}</code>
                </pre>
              </div>

              {/* 5.2 Bola elementlarni o'chirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.2 Bola elementlarni o'chirish</h3>
                <p className="text-gray-700 mb-3">
                  innerHTML xususiyatini bo'sh string qilib, barcha ichki elementlarni o'chirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let parent = document.querySelector("body");
parent.innerHTML = ""; // Barcha ichki elementlarni o'chiradi`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 6. DOM Hodisalarini Qo'shish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. DOM Hodisalarini Qo'shish</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                DOM orqali elementlarga hodisalar (events) qo'shish mumkin, masalan: click, mouseover, keydown, va boshqalar.
              </p>

              {/* 6.1 addEventListener bilan hodisalarni qo'shish */}
              <div>
                <h3 className="text-lg font-medium mb-2">6.1 addEventListener bilan hodisalarni qo'shish</h3>
                <p className="text-gray-700 mb-3">
                  addEventListener() metodi orqali elementlarga dinamik ravishda hodisalarni qo'shishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let button = document.createElement("button");
button.textContent = "Bos!";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Tugma bosildi!");
});`}</code>
                </pre>
              </div>

              {/* 6.2 Inline hodisa qo'shish */}
              <div>
                <h3 className="text-lg font-medium mb-2">6.2 Inline hodisa qo'shish (HTMLda)</h3>
                <p className="text-gray-700 mb-3">
                  HTML elementlariga to'g'ridan-to'g'ri onclick va boshqa hodisa atributlarini qo'shishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`<button onclick="alert('Bu inline hodisa!')">Bos!</button>`}</code>
                </pre>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Eslatma:</span> Inline hodisalar o'rniga addEventListener() ishlatish 
                    tavsiya etiladi, chunki u kod tuzilishini toza saqlashga yordam beradi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. DOM-ni Dinamik O'zgartirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-teal-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. DOM-ni Dinamik O'zgartirish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 7.1 Elementlarni dinamik ravishda yaratish */}
              <div>
                <h3 className="text-lg font-medium mb-2">7.1 Elementlarni dinamik ravishda yaratish</h3>
                <p className="text-gray-700 mb-3">
                  Array metodlari yordamida elementlarni dinamik ravishda yaratish va sahifaga qo'shish mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let items = ["Olma", "Banan", "Gilos"];
let list = document.createElement("ul");

items.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

document.body.appendChild(list);`}</code>
                </pre>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Maslahat:</span> Ko'p elementlarni bir vaqtda qo'shayotganda, 
                    DocumentFragment ishlatish tavsiya etiladi, chunki u sahifa qayta renderini kamaytirib, 
                    ishlash tezligini oshiradi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Stil va Klasslarni O'zgartirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. Stil va Klasslarni O'zgartirish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 8.1 Stilni o'zgartirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">8.1 Stilni o'zgartirish</h3>
                <p className="text-gray-700 mb-3">
                  style xususiyati orqali elementning CSS stillarini JavaScript yordamida o'zgartirishimiz mumkin.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let title = document.getElementById("title");
title.style.color = "blue";
title.style.fontSize = "24px";`}</code>
                </pre>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Eslatma:</span> CSS xususiyatlari camelCase formatida yoziladi. 
                    Masalan: background-color → backgroundColor
                  </p>
                </div>
              </div>

              {/* 8.2 Klasslarni boshqarish */}
              <div>
                <h3 className="text-lg font-medium mb-2">8.2 Klasslarni boshqarish</h3>
                <p className="text-gray-700 mb-3">
                  classList xususiyati orqali elementning klasslarini boshqarishimiz mumkin.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Klass qo'shish:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`title.classList.add("highlight");`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Klassni o'chirish:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`title.classList.remove("highlight");`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Klassni almashtirish:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`title.classList.toggle("active");`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 9. DOM-ni Qidirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">9. DOM-ni Qidirish</h2>
            </div>
            <div className="p-4 space-y-6">
              <h3 className="text-lg font-medium mb-2">Bola va ota elementlarga kirish</h3>
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
                      <td className="border p-2">parentElement</td>
                      <td className="border p-2">Ota elementni qaytaradi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">children</td>
                      <td className="border p-2">Barcha bola elementlarni qaytaradi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">firstElementChild</td>
                      <td className="border p-2">Birinchi bolani qaytaradi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">lastElementChild</td>
                      <td className="border p-2">Oxirgi bolani qaytaradi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let parent = document.querySelector("body");
console.log(parent.children); // Barcha bola elementlar
console.log(parent.firstElementChild); // Birinchi bola
console.log(parent.lastElementChild); // Oxirgi bola
console.log(parent.parentElement); // Ota element`}</code>
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
                <li>DOM manipulyatsiyasi veb-sahifani dinamik boshqarish imkonini beradi</li>
                <li>DOM bilan ishlash uchun birinchi navbatda elementlarni qidirib topish va ularni o'zgartirish kerak</li>
                <li>Hodisalar qo'shish orqali foydalanuvchi bilan o'zaro aloqada bo'lish imkoniyati mavjud</li>
                <li>Stil va klasslarni boshqarish orqali elementlarning ko'rinishini dinamik o'zgartirish mumkin</li>
                <li>DOM daraxti bo'ylab navigatsiya qilish uchun maxsus xususiyatlar mavjud</li>
                <li>Barcha o'zgarishlar real vaqtda amalga oshiriladi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DomBilanIshlash
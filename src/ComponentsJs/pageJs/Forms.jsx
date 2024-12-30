import React from 'react'

function Forms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript Forms (Formalar)</h1>
        <p className="text-gray-700 mb-4">
          JavaScript Forms - bu foydalanuvchilardan ma'lumot yig'ish va uni qayta ishlash uchun 
          ishlatiladigan veb-sahifa elementlari hisoblanadi.
        </p>

        <div className="space-y-6">
          {/* 1. Forma Elementlariga Kirish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Forma Elementlariga Kirish</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 1.1 Forma elementini ID orqali olish */}
              <div>
                <h3 className="text-lg font-medium mb-2">1.1 Forma elementini ID orqali olish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let form = document.getElementById("myForm");
console.log(form);`}</code>
                </pre>
              </div>

              {/* 1.2 Forma ichidagi input elementlariga kirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">1.2 Forma ichidagi input elementlariga kirish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let input = document.querySelector("input[name='username']");
console.log(input.value); // Inputdagi qiymat`}</code>
                </pre>
              </div>

              {/* 1.3 Barcha forma elementlarini olish */}
              <div>
                <h3 className="text-lg font-medium mb-2">1.3 Barcha forma elementlarini olish</h3>
                <p className="text-gray-700 mb-4">
                  elements xususiyati yordamida barcha forma elementlariga kirish mumkin:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let form = document.forms["myForm"];
let elements = form.elements;
console.log(elements["username"].value); // "username" inputi qiymati`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 2. Formani Yuborish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Formani Yuborish</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Formani yuborish uchun submit hodisasidan foydalaniladi.
              </p>

              {/* 2.1 Formani yuborishni kuzatish */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 Formani yuborishni kuzatish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Standart jo'natishni bloklash
  console.log("Forma yuborildi!");
});`}</code>
                </pre>
              </div>

              {/* 2.2 Forma ma'lumotlarini olish */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.2 Forma ma'lumotlarini olish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`form.addEventListener("submit", function(event) {
  event.preventDefault();
  let username = form.elements["username"].value;
  let email = form.elements["email"].value;
  console.log(\`Username: \${username}, Email: \${email}\`);
});`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-sm">
                  <span className="font-bold">Eslatma:</span> preventDefault() metodi formaning 
                  standart yuborilishini to'xtatadi va JavaScript orqali boshqarishga imkon beradi.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Input Hodisalari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Input Hodisalari</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Forma elementlariga hodisalar qo'shib, foydalanuvchi bilan interaktivlikni oshirish mumkin.
              </p>

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
                      <td className="border p-2">input</td>
                      <td className="border p-2">Foydalanuvchi ma'lumot kiritganda</td>
                    </tr>
                    <tr>
                      <td className="border p-2">change</td>
                      <td className="border p-2">Elementning qiymati o'zgarganda</td>
                    </tr>
                    <tr>
                      <td className="border p-2">focus</td>
                      <td className="border p-2">Elementga kursor kelganda</td>
                    </tr>
                    <tr>
                      <td className="border p-2">blur</td>
                      <td className="border p-2">Elementdan kursor ketganda</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Misol</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let input = document.getElementById("username");
input.addEventListener("input", function() {
  console.log(\`Qiymat: \${input.value}\`);
});

input.addEventListener("focus", function() {
  console.log("Inputga kursor keldi.");
});

input.addEventListener("blur", function() {
  console.log("Inputdan kursor chiqdi.");
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Forma Validatsiyasi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Forma Validatsiyasi</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Forma ma'lumotlarini yuborishdan oldin validatsiya qilish foydalanuvchidan to'g'ri ma'lumot olishni ta'minlaydi.
              </p>

              {/* 4.1 Oddiy validatsiya */}
              <div>
                <h3 className="text-lg font-medium mb-2">4.1 Oddiy validatsiya</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`form.addEventListener("submit", function(event) {
  let username = form.elements["username"].value;
  if (username.trim() === "") {
    event.preventDefault();
    alert("Foydalanuvchi nomi kiritilishi shart!");
  }
});`}</code>
                </pre>
              </div>

              {/* 4.2 HTML5 validatsiya */}
              <div>
                <h3 className="text-lg font-medium mb-2">4.2 HTML5 validatsiya xususiyatlari</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li><strong>required:</strong> Majburiy maydon</li>
                  <li><strong>pattern:</strong> Belgilangan shablonga moslik</li>
                  <li><strong>min</strong>, <strong>max</strong>, <strong>maxlength</strong>, <strong>minlength:</strong> Cheklovlar</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`<form id="myForm">
  <input type="text" name="username" required minlength="3" maxlength="15">
  <input type="email" name="email" required>
  <button type="submit">Yuborish</button>
</form>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 5. FormData Obyekti */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. FormData Obyekti</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                FormData obyekti forma ma'lumotlarini avtomatik yig'ib, uni qulay boshqarishga imkon beradi.
              </p>

              <div>
                <h3 className="text-lg font-medium mb-2">5.1 FormData yordamida ma'lumot olish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let formData = new FormData(form);

  for (let [name, value] of formData.entries()) {
    console.log(\`\${name}: \${value}\`);
  }
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 6. Forma Yuborish (Fetch API) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Forma Yuborish (Fetch API bilan)</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Formani JavaScript yordamida serverga yuborish uchun Fetch API dan foydalanish mumkin.
              </p>

              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let formData = new FormData(form);

  fetch("/submit", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => console.log("Yuborildi:", data))
    .catch(error => console.error("Xato:", error));
});`}</code>
              </pre>
            </div>
          </div>

          {/* 7. Dynamic Input Qo'shish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. Dynamic Input Qo'shish</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                JavaScript yordamida foydalanuvchi uchun dinamik ravishda yangi input elementlari qo'shish mumkin.
              </p>

              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let form = document.getElementById("myForm");
let addButton = document.getElementById("addInput");

addButton.addEventListener("click", function() {
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "extraField";
  newInput.placeholder = "Qo'shimcha maydon";
  form.appendChild(newInput);
});`}</code>
              </pre>
            </div>
          </div>

          {/* 8. Forma Elementlariga Style Qo'llash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. Forma Elementlariga Style Qo'llash</h2>
            </div>
            <div className="p-4 space-y-6">
              <p className="text-gray-700 mb-4">
                Elementlarga hodisalar yoki validatsiya asosida stil qo'llash mumkin.
              </p>

              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`let input = document.getElementById("username");
input.addEventListener("input", function() {
  if (input.value.length < 3) {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
  }
});`}</code>
              </pre>
            </div>
          </div>

          {/* 9. Forma Tugmalarining Turlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">9. Forma Tugmalarining Turlari</h2>
            </div>
            <div className="p-4 space-y-6">
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li><strong>submit:</strong> Formani yuboradi</li>
                <li><strong>reset:</strong> Formani tozalaydi</li>
                <li><strong>button:</strong> Oddiy tugma, hodisalar uchun ishlatiladi</li>
              </ul>

              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<form id="myForm">
  <input type="text" name="username" placeholder="Foydalanuvchi nomi">
  <button type="submit">Yuborish</button>
  <button type="reset">Tozalash</button>
  <button type="button" onclick="alert('Oddiy tugma!')">Bos!</button>
</form>`}</code>
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
                <li>JavaScript forma elementlarini boshqarish va foydalanuvchi kiritgan ma'lumotlarni validatsiya qilish uchun kuchli vositalarni taklif etadi.</li>
                <li>FormData va Fetch API yordamida ma'lumotlarni serverga jo'natishni osonlashtirish mumkin.</li>
                <li>Foydalanuvchi bilan interaktivlikni oshirish uchun hodisalar va dinamik elementlarni boshqarish muhim ahamiyatga ega.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forms
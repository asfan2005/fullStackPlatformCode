import React from 'react'

function ArrowFunk() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Arrow Funksiyalar</h1>
        <p className="text-gray-700 mb-4">
          Arrow funksiyalar - ES6 da kiritilgan yangi funksiya yozish usuli bo'lib, 
          qisqa va aniq kod yozish imkoniyatini beradi. Ular oddiy funksiyalardan 
          o'zining sintaksisi va 'this' konteksti bilan farq qiladi.
        </p>

        <div className="space-y-6">
          {/* 1. Asosiy Sintaksis */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Arrow Funksiya Sintaksisi</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Oddiy funksiya
function add(a, b) {
  return a + b;
}

// Arrow funksiya
const add = (a, b) => a + b;

// Bir parametrli
const square = x => x * x;

// Parametrsiz
const sayHello = () => "Salom!";

// Ko'p qatorli
const calculate = (x, y) => {
  const sum = x + y;
  return sum * 2;
};`}</code>
              </pre>
            </div>
          </div>

          {/* 2. Arrow Function Xususiyatlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Arrow Function Xususiyatlari</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 2.1 Qisqa Sintaksis */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 Qisqa Sintaksis</h3>
                <p className="text-gray-700 mb-4">Arrow funksiyalar qisqa va ixcham:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// To'liq sintaksis
const greet = (name) => \`Salom, \${name}!\`;
console.log(greet("Ali")); // Salom, Ali!

// Bitta parametr uchun qavslar ixtiyoriy
const square = num => num * num;
console.log(square(4)); // 16

// Parametrsiz funksiya (qavslar shart)
const sayHello = () => "Salom, dunyo!";
console.log(sayHello()); // Salom, dunyo!`}</code>
                </pre>
              </div>

              {/* 2.2 Blok Tana */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.2 Blok Tana (Body Block)</h3>
                <p className="text-gray-700 mb-4">
                  Ko'p qatorli kod uchun jingalak qavslar va return kalit so'zi kerak:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Ko'p qatorli arrow funksiya
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(3, 4)); // 12

// Obyekt qaytarish
const createUser = (name, age) => ({
  name: name,
  age: age,
  sayHi: () => \`Salom, men \${name}\`
});

const user = createUser("Ali", 25);
console.log(user.sayHi()); // Salom, men Ali`}</code>
                </pre>
              </div>

              {/* 2.3 this Konteksti */}
              <div>
                <h3 className="text-lg font-medium mb-2">2.3 this Konteksti</h3>
                <p className="text-gray-700 mb-4">
                  Arrow funksiyalar o'zining this kontekstini yaratmaydi:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Oddiy funksiya this bilan
function Person(name) {
  this.name = name;
}

Person.prototype.sayNameRegular = function() {
  console.log(this.name);
};

// Arrow funksiya this bilan
Person.prototype.sayNameArrow = () => {
  console.log(this.name);
};

const person = new Person("Ali");
person.sayNameRegular(); // Ali
person.sayNameArrow();   // undefined

// Arrow funksiyaning this ni meros olishi
function Timer() {
  this.seconds = 0;
  
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer();
// Sekundlar o'sib boradi: 1, 2, 3...

// Amaliy misol
const button = {
  text: "Bosing",
  click: function() {
    setTimeout(() => {
      console.log(this.text);
    }, 1000);
  }
};

button.click(); // "Bosing" (1 sekunddan keyin)`}</code>
                </pre>
              </div>

              {/* Qo'shimcha eslatmalar */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Muhim eslatmalar:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Arrow funksiyalar konstruktor sifatida ishlatilmaydi</li>
                  <li>arguments obyekti arrow funksiyalarda mavjud emas</li>
                  <li>this konteksti o'zgarmas va bog'langandir</li>
                  <li>Metod sifatida ishlatilganda ehtiyot bo'lish kerak</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Arrow Function Misollari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Arrow Function Misollari</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 3.1 Oddiy Misol */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Oddiy Misol</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(5)); // false

const greet = name => \`Salom \${name}!\`;
console.log(greet("Ali")); // Salom Ali!

const sum = (a, b) => a + b;
console.log(sum(5, 3)); // 8`}</code>
                </pre>
              </div>

              {/* 3.2 Massiv bilan ishlash */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.2 Massiv bilan ishlash</h3>
                <p className="text-gray-700 mb-4">Arrow funksiyalar ko'pincha massivlarni qayta ishlash uchun ishlatiladi:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const numbers = [1, 2, 3, 4, 5];

// map bilan
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// reduce bilan
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// forEach bilan
numbers.forEach(num => console.log(\`Son: \${num}\`));
// Son: 1
// Son: 2 ...`}</code>
                </pre>
              </div>

              {/* 3.3 Filtrlash */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.3 Filtrlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ["banana", "cherry"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]`}</code>
                </pre>
              </div>

              {/* 3.4 Arrow Funksiya va Promiselar */}
              <div>
                <h3 className="text-lg font-medium mb-2">3.4 Arrow Funksiya va Promiselar</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ma'lumot muvaffaqiyatli olindi!"), 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await bilan
const getData = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Arrow Funksiya va Oddiy Funksiyalar Farqlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Arrow Funksiya va Oddiy Funksiyalar Farqlari</h2>
            </div>
            <div className="p-4">
              {/* Jadval 1: Sintaksis */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">4.1 Sintaksis Farqlari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Xususiyat</th>
                        <th className="border border-gray-300 px-4 py-2">Oddiy Funksiya</th>
                        <th className="border border-gray-300 px-4 py-2">Arrow Funksiya</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Jadval 2: Kontekst */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">4.2 Kontekst Farqlari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Xususiyat</th>
                        <th className="border border-gray-300 px-4 py-2">Oddiy Funksiya</th>
                        <th className="border border-gray-300 px-4 py-2">Arrow Funksiya</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">this</td>
                        <td className="border border-gray-300 px-4 py-2">O'z kontekstiga ega</td>
                        <td className="border border-gray-300 px-4 py-2">Tashqi kontekstni oladi</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">arguments</td>
                        <td className="border border-gray-300 px-4 py-2">Mavjud</td>
                        <td className="border border-gray-300 px-4 py-2">Mavjud emas</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">new</td>
                        <td className="border border-gray-300 px-4 py-2">Konstruktor bo'la oladi</td>
                        <td className="border border-gray-300 px-4 py-2">Konstruktor bo'la olmaydi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Jadval 3: Ishlatish */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">4.3 Ishlatish holatlari</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Holat</th>
                        <th className="border border-gray-300 px-4 py-2">Oddiy Funksiya</th>
                        <th className="border border-gray-300 px-4 py-2">Arrow Funksiya</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Metod</td>
                        <td className="border border-gray-300 px-4 py-2">✅ Tavsiya etiladi</td>
                        <td className="border border-gray-300 px-4 py-2">❌ Tavsiya etilmaydi</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Callback</td>
                        <td className="border border-gray-300 px-4 py-2">⚠️ Mumkin</td>
                        <td className="border border-gray-300 px-4 py-2">✅ Tavsiya etiladi</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Event Handler</td>
                        <td className="border border-gray-300 px-4 py-2">✅ Tavsiya etiladi</td>
                        <td className="border border-gray-300 px-4 py-2">⚠️ Ehtiyot bo'lish kerak</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Jadval 4: Qo'shimcha xususiyatlar */}
              <div>
                <h3 className="text-lg font-medium mb-3">4.4 Qo'shimcha xususiyatlar</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">Xususiyat</th>
                        <th className="border border-gray-300 px-4 py-2">Oddiy Funksiya</th>
                        <th className="border border-gray-300 px-4 py-2">Arrow Funksiya</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Hoisting</td>
                        <td className="border border-gray-300 px-4 py-2">✅ Mavjud</td>
                        <td className="border border-gray-300 px-4 py-2">❌ Mavjud emas</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">prototype</td>
                        <td className="border border-gray-300 px-4 py-2">✅ Mavjud</td>
                        <td className="border border-gray-300 px-4 py-2">❌ Mavjud emas</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">yield</td>
                        <td className="border border-gray-300 px-4 py-2">✅ Ishlatish mumkin</td>
                        <td className="border border-gray-300 px-4 py-2">❌ Ishlatib bo'lmaydi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Amaliy misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Amaliy misollar</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Promise bilan
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ma'lumot"), 1000);
  });
};

// Event handler
const handleClick = () => {
  console.log("Bosildi!");
};

// Saralash
const users = ["Ali", "Vali", "Gani"];
const sortedUsers = users.sort((a, b) => a.localeCompare(b));

// Filtrlash va o'zgartirish
const products = [
  { name: "Telefon", price: 500 },
  { name: "Noutbuk", price: 1000 },
  { name: "Quloqchin", price: 50 }
];

const affordableProducts = products
  .filter(product => product.price < 600)
  .map(product => product.name);`}</code>
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
                <li>Arrow funksiyalar kod yozishni soddalashtiradi</li>
                <li>Lexical this kontekstini ta'minlaydi</li>
                <li>Callback funksiyalar uchun juda qulay</li>
                <li>Funksional dasturlash usullarida keng qo'llaniladi</li>
                <li>Zamonaviy JavaScript loyihalarining ajralmas qismi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArrowFunk
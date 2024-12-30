import React from 'react'

function Funksiyalar() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Funksiyalar</h1>
        <p className="text-gray-700 mb-4">
          Funksiyalar JavaScriptda takrorlanuvchi yoki muayyan vazifalarni bajarish uchun foydalaniladigan kod bloklaridir. 
          Funksiyalar kodni qayta ishlatish, modullashtirish va tartibga solish uchun ishlatiladi.
        </p>

        {/* Funksiya yaratish usullari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Funksiya Deklaratsiyasi</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Funksiya deklaratsiyasi eng oddiy va keng tarqalgan usul hisoblanadi. 
              Bu usulda funksiya nomi, parametrlari va tanasi aniq ko'rsatiladi.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Funksiya deklaratsiyasi
function hello(name) {
  console.log(\`Salom, \${name}!\`);
}

// Funksiyani chaqirish
hello("Ali"); // Natija: Salom, Ali!

// Parametrlar bilan funksiya
function qoshish(a, b) {
  return a + b;
}

console.log(qoshish(5, 3)); // Natija: 8`}</code>
            </pre>
          </div>
        </div>

        {/* Funksiya ifodasi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-green-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Funksiya Ifodasi</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Funksiya ifodasi funksiyani o'zgaruvchiga saqlash imkonini beradi. 
              Bu usul funksiyani boshqa funksiyalarga argument sifatida uzatish uchun qulay.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Funksiya ifodasi
const kvadrat = function(x) {
  return x * x;
};

console.log(kvadrat(5)); // Natija: 25

// Funksiyani argument sifatida uzatish
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // Natija: [2, 4, 6, 8]`}</code>
            </pre>
          </div>
        </div>

        {/* Arrow funksiyalar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Arrow Funksiyalar</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Arrow funksiyalar ES6 da qo'shilgan bo'lib, qisqaroq sintaksisga ega. 
              Ular ayniqsa callback funksiyalar uchun juda qulay.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Oddiy arrow funksiya
const kvadrat = (x) => x * x;
console.log(kvadrat(4)); // Natija: 16

// Ko'p qatorli arrow funksiya
const yigindi = (a, b) => {
  const natija = a + b;
  return natija;
};
console.log(yigindi(3, 7)); // Natija: 10

// Array metodlari bilan ishlatish
const sonlar = [1, 2, 3, 4, 5];
const juftSonlar = sonlar.filter(son => son % 2 === 0);
console.log(juftSonlar); // Natija: [2, 4]`}</code>
            </pre>
          </div>
        </div>

        {/* IIFE */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. O'zini-o'zi Chaqiruvchi Funksiyalar (IIFE)</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              IIFE (Immediately Invoked Function Expression) - e'lon qilinishi bilan darhol ishga tushadigan funksiyalar.
              Ular global scope ni ifloslantirmaslik uchun ishlatiladi.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Oddiy IIFE
(function() {
  console.log("Bu funksiya darhol ishga tushadi");
})();

// Parametrlar bilan IIFE
(function(a, b) {
  console.log(\`Yig'indi: \${a + b}\`);
})(3, 4);

// Arrow funksiya bilan IIFE
(() => {
  const maxsusOzgaruvchi = "Bu tashqaridan ko'rinmaydi";
  console.log(maxsusOzgaruvchi);
})();`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Amaliy misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amaliy misollar</h2>

        {/* Parametrlar bilan funksiya */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Parametrlar bilan funksiyalar</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Funksiyalar turli xil parametrlar bilan ishlashi mumkin. 
              Parametrlarga standart qiymatlar berish ham mumkin.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Oddiy parametrlar
function yigindi(a, b) {
  return a + b;
}
console.log(yigindi(5, 10)); // Natija: 15

// Standart qiymatli parametrlar
function salomlash(ism = "mehmon", vaqt = "kun") {
  console.log(\`Xayrli \${vaqt}, \${ism}!\`);
}

salomlash(); // Natija: Xayrli kun, mehmon!
salomlash("Ali", "tong"); // Natija: Xayrli tong, Ali!

// Rest parametrlar
function yigindiniHisobla(...sonlar) {
  return sonlar.reduce((sum, son) => sum + son, 0);
}

console.log(yigindiniHisobla(1, 2, 3, 4)); // Natija: 10`}</code>
            </pre>
          </div>
        </div>

        {/* Funksiya ichida funksiya */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Funksiya ichida funksiya</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Funksiyalar ichida boshqa funksiyalarni e'lon qilish mumkin. 
              Bu closure va private metodlar yaratish uchun foydali.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Ichki funksiya
function tashqiFunksiya(x) {
  function ichkiFunksiya(y) {
    return y * y;
  }
  return ichkiFunksiya(x) + x;
}

console.log(tashqiFunksiya(3)); // Natija: 12

// Closure misoli
function hisoblagichYaratish() {
  let count = 0;
  
  return {
    oshirish: function() {
      count++;
      return count;
    },
    kamaytirish: function() {
      count--;
      return count;
    },
    qiymat: function() {
      return count;
    }
  };
}

const hisoblagich = hisoblagichYaratish();
console.log(hisoblagich.oshirish()); // 1
console.log(hisoblagich.oshirish()); // 2
console.log(hisoblagich.kamaytirish()); // 1`}</code>
            </pre>
          </div>
        </div>

        {/* Rekursiv funksiyalar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-teal-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Rekursiv funksiyalar</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Rekursiv funksiyalar - o'zini-o'zi chaqiradigan funksiyalar. 
              Ular murakkab masalalarni yechishda foydali.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Faktorial hisoblash
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(5)); // Natija: 120

// Fibonacci ketma-ketligi
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // Natija: 13

// Daraxtni aylanib chiqish
const daraxr = {
  qiymat: 1,
  chap: {
    qiymat: 2,
    chap: { qiymat: 4 },
    ong: { qiymat: 5 }
  },
  ong: {
    qiymat: 3,
    chap: { qiymat: 6 },
    ong: { qiymat: 7 }
  }
};

function daraxtniAylanish(tugun) {
  if (!tugun) return;
  
  console.log(tugun.qiymat);
  daraxtniAylanish(tugun.chap);
  daraxtniAylanish(tugun.ong);
}

daraxtniAylanish(daraxr);`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Qo'shimcha ma'lumotlar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Qo'shimcha ma'lumotlar</h2>

        {/* Scope va Closure */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-pink-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">Scope va Closure</h4>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Scope va closure funksiyalarning muhim xususiyatlari hisoblanadi. 
              Ular o'zgaruvchilarning ko'rinish doirasini boshqaradi.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Scope misoli
let globalOzgaruvchi = "global";

function tashqiFunksiya() {
  let tashqiOzgaruvchi = "tashqi";
  
  function ichkiFunksiya() {
    let ichkiOzgaruvchi = "ichki";
    console.log(globalOzgaruvchi); // "global"
    console.log(tashqiOzgaruvchi); // "tashqi"
    console.log(ichkiOzgaruvchi); // "ichki"
  }
  
  ichkiFunksiya();
}

// Closure misoli
function hisoblagichYaratish(boshlangichQiymat) {
  let count = boshlangichQiymat;
  
  return function() {
    return count++;
  };
}

const hisobla = hisoblagichYaratish(5);
console.log(hisobla()); // 5
console.log(hisobla()); // 6
console.log(hisobla()); // 7`}</code>
            </pre>
          </div>
        </div>

        {/* Xulosa */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-2">
            <h4 className="text-lg font-medium">Xulosa</h4>
          </div>
          <div className="p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Funksiyalar JavaScriptning asosiy qismi hisoblanadi</li>
              <li>Turli xil funksiya yaratish usullari mavjud: deklaratsiya, ifoda, arrow funksiyalar</li>
              <li>Funksiyalar parametrlar qabul qilishi va qiymat qaytarishi mumkin</li>
              <li>Rekursiya murakkab masalalarni yechishda foydali</li>
              <li>Closure va scope funksiyalarning muhim xususiyatlari hisoblanadi</li>
              <li>Zamonaviy JavaScriptda arrow funksiyalar va IIFE keng qo'llaniladi</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Funksiyalar
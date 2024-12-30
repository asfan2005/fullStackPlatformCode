import React from 'react'

function Promise() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript Promise</h1>
        <p className="text-gray-700 mb-4">
          Promise - bu asinxron operatsiyalarni boshqarish va ulardan natijalarni olish uchun ishlatiladigan obyektdir. 
          Promise ma'lum vaqtdan keyin bajariladigan (fulfilled) yoki rad etiladigan (rejected) natijani qaytaradi.
        </p>

        <div className="space-y-6">
          {/* 1. Promise Asoslari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. Promise ning Tuzilishi</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">Promise quyidagi uchta holatdan birida bo'lishi mumkin:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Pending (kutish): Promise hali bajarilmagan</li>
                <li>Fulfilled (bajarildi): Promise muvaffaqiyatli bajarildi</li>
                <li>Rejected (rad etildi): Promise bajarilayotganda xato yuz berdi</li>
              </ul>

              <div>
                <h3 className="text-lg font-medium mb-2">Promise yaratish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Muvaffaqiyatli bajarildi!");
  } else {
    reject("Xatolik yuz berdi!");
  }
});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 2. Promise Metodlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Promise ning Asosiy Metodlari</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 .then()</h3>
                <p className="text-gray-700 mb-2">Promise muvaffaqiyatli bajarilganda (resolved) chaqiriladi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Bajarildi!"), 1000);
});

promise.then((result) => {
  console.log(result); // "Bajarildi!"
});`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">2.2 .catch()</h3>
                <p className="text-gray-700 mb-2">Promise rad etilganda (rejected) chaqiriladi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const promise = new Promise((_, reject) => {
  setTimeout(() => reject("Xato yuz berdi!"), 1000);
});

promise.catch((error) => {
  console.error(error); // "Xato yuz berdi!"
});`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">2.3 .finally()</h3>
                <p className="text-gray-700 mb-2">Promise bajarilgan yoki rad etilganidan qat'i nazar, har doim chaqiriladi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Bajarildi!"), 1000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Har doim bajariladi!"));`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 3. Amaliy Misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Amaliy Misollar</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Oddiy Promise</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const getData = () => {
  return new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        resolve("Ma'lumot muvaffaqiyatli olindi!");
      } else {
        reject("Ma'lumotni olishda xato yuz berdi!");
      }
    }, 2000);
  });
};

getData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">3.2 Bir nechta Promise zanjiri</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const firstStep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("1-qadam bajarildi"), 1000);
  });
};

const secondStep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("2-qadam bajarildi"), 1000);
  });
};

firstStep()
  .then((result) => {
    console.log(result);
    return secondStep();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Promise Kombinatsiyalari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Promise Kombinatsiyalari</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">4.1 Promise.all()</h3>
                <p className="text-gray-700 mb-2">Bir nechta Promise larni parallel bajarish va ularning natijalarini olish uchun ishlatiladi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const p1 = Promise.resolve("Promise 1 bajarildi");
const p2 = new Promise((resolve) => 
  setTimeout(() => resolve("Promise 2 bajarildi"), 1000)
);
const p3 = Promise.resolve("Promise 3 bajarildi");

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">4.2 Promise.race()</h3>
                <p className="text-gray-700 mb-2">Birinchi bajarilgan Promise natijasini qaytaradi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const p1 = new Promise((resolve) => 
  setTimeout(() => resolve("Promise 1 bajarildi"), 500)
);
const p2 = new Promise((resolve) => 
  setTimeout(() => resolve("Promise 2 bajarildi"), 1000)
);

Promise.race([p1, p2])
  .then((result) => console.log(result)) // "Promise 1 bajarildi"
  .catch((error) => console.error(error));`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">4.3 Promise.allSettled()</h3>
                <p className="text-gray-700 mb-2">Barcha Promise'lar bajarilishidan qat'i nazar, ularning holatlarini qaytaradi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const p1 = Promise.resolve("Promise 1 bajarildi");
const p2 = Promise.reject("Promise 2 rad etildi");
const p3 = Promise.resolve("Promise 3 bajarildi");

Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results));

/* Natija:
[
  { status: "fulfilled", value: "Promise 1 bajarildi" },
  { status: "rejected", reason: "Promise 2 rad etildi" },
  { status: "fulfilled", value: "Promise 3 bajarildi" }
]
*/`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">4.4 Promise.any()</h3>
                <p className="text-gray-700 mb-2">Birinchi muvaffaqiyatli bajarilgan Promise'ni qaytaradi.</p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const p1 = Promise.reject("Promise 1 rad etildi");
const p2 = new Promise((resolve) => 
  setTimeout(() => resolve("Promise 2 bajarildi"), 1000)
);
const p3 = Promise.reject("Promise 3 rad etildi");

Promise.any([p1, p2, p3])
  .then((result) => console.log(result)) // "Promise 2 bajarildi"
  .catch((error) => console.error(error));`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 5. Amaliy maslahatlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. Amaliy maslahatlar</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Promise'larni imkon qadar erta yarating va kech ishga tushiring</li>
                <li>Har doim xatolarni .catch() orqali boshqaring</li>
                <li>Murakkab asinxron operatsiyalar uchun Promise zanjirlari yarating</li>
                <li>Promise.all() ni parallel bajarilishi mumkin bo'lgan operatsiyalar uchun ishlating</li>
                <li>Promise.race() ni vaqt chegarasi qo'yish uchun ishlating</li>
                <li>Promise.allSettled() ni barcha natijalar muhim bo'lganda ishlating</li>
              </ul>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Promise asinxron kodni boshqarish uchun muhim vosita</li>
                <li>Promise uchta holatda bo'lishi mumkin: pending, fulfilled, rejected</li>
                <li>then(), catch() va finally() metodlari orqali natijalarni boshqarish mumkin</li>
                <li>Promise.all(), Promise.race(), Promise.allSettled() va Promise.any() bir nechta Promise'lar bilan ishlash imkonini beradi</li>
                <li>Promise'lar callback hell muammosini hal qilishga yordam beradi</li>
                <li>Zamonaviy JavaScript dasturlashning ajralmas qismi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Promise
import React from 'react'

function TryCatch() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript try...catch (Xatolarni Boshqarish)</h1>
        <p className="text-gray-700 mb-4">
          try...catch konstruksiyasi JavaScript-da xatolarni boshqarish uchun ishlatiladi. 
          Bu kod xatoliklarini nazorat qilish va dastur ishlashini to'g'ri davom ettirish imkonini beradi.
        </p>

        <div className="space-y-6">
          {/* 1. try...catch Tuzilishi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. try...catch Tuzilishi</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Asosiy Tuzilish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  // Xato yuz berishi mumkin bo'lgan kod
} catch (error) {
  // Xatoni qayta ishlash
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">finally bloki bilan</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  // Xato yuz berishi mumkin bo'lgan kod
} catch (error) {
  // Xatoni qayta ishlash
} finally {
  // Har doim bajariladigan kod
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 2. Oddiy Misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Oddiy Misollar</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 Raqamlar bilan ishlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  let result = 10 / 0;  // Infinity
  console.log("Natija:", result);

  let data = JSON.parse('{"name": "John"}');
  console.log(data.name);

  let invalidData = JSON.parse("{name: John}"); // JSON xatosi
} catch (error) {
  console.error("Xato yuz berdi:", error.message);
} finally {
  console.log("Kod bajarilishi tugadi.");
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 3. catch Parametri */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. catch Parametri</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Xususiyat</th>
                      <th className="border p-2">Tavsifi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">message</td>
                      <td className="border p-2">Xatolik xabari</td>
                    </tr>
                    <tr>
                      <td className="border p-2">name</td>
                      <td className="border p-2">Xatolik turi</td>
                    </tr>
                    <tr>
                      <td className="border p-2">stack</td>
                      <td className="border p-2">Xatolikning stack izi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Misol:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  let result = x + 5; // x aniqlanmagan
} catch (error) {
  console.log("Xato nomi:", error.name);
  console.log("Xato xabari:", error.message);
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Maxsus Xatolarni Qayta Ishlash */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Maxsus Xatolarni Qayta Ishlash</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`try {
  let age = -5;
  if (age < 0) {
    throw new Error("Yosh manfiy bo'lishi mumkin emas.");
  }
  console.log("Yosh:", age);
} catch (error) {
  console.error("Xato:", error.message);
}`}</code>
              </pre>
            </div>
          </div>

          {/* 5. finally Bloki */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. finally Bloki</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">
                finally bloki resurslarni tozalash yoki muhim jarayonlarni tugatish uchun ishlatiladi.
              </p>
              <div>
                <h3 className="text-lg font-medium mb-2">Misol:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`function readFile() {
  try {
    console.log("Fayl ochildi.");
    throw new Error("Fayl o'qishda xato yuz berdi."); // Majburiy xato
  } catch (error) {
    console.error("Xato:", error.message);
  } finally {
    console.log("Fayl yopildi.");
  }
}

readFile();

/* Natija:
Fayl ochildi.
Xato: Fayl o'qishda xato yuz berdi.
Fayl yopildi. */`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 6. Nested try...catch */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Nested (try...catch) Ichma-ich Ishlatish</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">
                try...catch bloklarini ichma-ich joylashtirish mumkin.
              </p>
              <div>
                <h3 className="text-lg font-medium mb-2">Misol:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  try {
    let num = parseInt("abc");
    if (isNaN(num)) {
      throw new Error("Raqamni o'qib bo'lmadi.");
    }
  } catch (innerError) {
    console.error("Ichki xato:", innerError.message);
    throw new Error("Tashqi xatoga uzatildi.");
  }
} catch (outerError) {
  console.error("Tashqi xato:", outerError.message);
}

/* Natija:
Ichki xato: Raqamni o'qib bo'lmadi.
Tashqi xato: Tashqi xatoga uzatildi. */`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 7. ES10: Optional catch Bindings */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">7. ES10 dan boshlab: Optional catch Bindings</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700">
                Agar catch blokida xatolik obyekti kerak bo'lmasa, error parametrini tashlab ketish mumkin.
              </p>
              <div>
                <h3 className="text-lg font-medium mb-2">Misol:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  undefinedFunction(); // Xato yuz beradi
} catch {
  console.error("Xato yuz berdi.");
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 8. try...catch Cheklovlari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-teal-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">8. try...catch ning Cheklovlari</h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-700 mb-4">
                <strong>Async Kod:</strong> try...catch faqat sinxron koddagi xatolarni tutadi. 
                Asinxron funksiyalar uchun Promise yoki async/await bilan birga ishlatilishi kerak.
              </p>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Noto'g'ri yondashuv:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
  setTimeout(() => {
    throw new Error("Asinxron xato");
  }, 1000);
} catch (error) {
  console.log("Bu xatoni ushlay olmaydi."); // Ushlamaydi
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">To'g'ri yechim:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`(async function() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Asinxron xato")), 1000);
    });
  } catch (error) {
    console.error("Xato:", error.message);
  }
})();`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 9. Amaliy Misollar va Yaxshi Amaliyotlar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-rose-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">9. Amaliy Misollar va Yaxshi Amaliyotlar</h2>
            </div>
            <div className="p-4 space-y-6">
              {/* 9.1 API so'rovlarini boshqarish */}
              <div>
                <h3 className="text-lg font-medium mb-2">9.1 API so'rovlarini boshqarish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP xato: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Tarmoq xatosi:', error.message);
    } else {
      console.error('API xatosi:', error.message);
    }
    throw error; // Xatoni yuqoriga uzatish
  }
}`}</code>
                </pre>
              </div>

              {/* 9.2 Fayllar bilan ishlash */}
              <div>
                <h3 className="text-lg font-medium mb-2">9.2 Fayllar bilan ishlash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function processFile(filePath) {
  let fileHandle = null;
  
  try {
    fileHandle = await window.showOpenFilePicker();
    const file = await fileHandle[0].getFile();
    const content = await file.text();
    
    // Fayl ustida amallar
    console.log('Fayl muvaffaqiyatli o'qildi');
    return content;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Foydalanuvchi faylni tanlashni bekor qildi');
    } else {
      console.error('Fayl bilan ishlashda xato:', error.message);
    }
  } finally {
    if (fileHandle) {
      // Faylni yopish yoki tozalash
      console.log('Fayl yopildi');
    }
  }
}`}</code>
                </pre>
              </div>

              {/* 9.3 Xatolarni kuzatish va qayd qilish */}
              <div>
                <h3 className="text-lg font-medium mb-2">9.3 Xatolarni kuzatish va qayd qilish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`class ErrorLogger {
  static async logError(error, context = {}) {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        ...context
      };

      // Xatoni serverga yuborish
      await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorData)
      });

      console.error('Xato qayd qilindi:', error.message);
    } catch (loggingError) {
      console.error('Xatoni qayd qilishda muammo:', loggingError);
    }
  }
}

// Ishlatilishi
try {
  // Xato yuz berishi mumkin bo'lgan kod
  throw new Error('Test xatosi');
} catch (error) {
  ErrorLogger.logError(error, {
    userId: 'user123',
    action: 'testOperation'
  });
}`}</code>
                </pre>
              </div>

              {/* 9.4 Yaxshi amaliyotlar */}
              <div>
                <h3 className="text-lg font-medium mb-2">9.4 Yaxshi amaliyotlar</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Aniq xato xabarlari:</strong> Xato xabarlarini tushunarli va foydali qilib yozing
                    </li>
                    <li>
                      <strong>Xato turlari:</strong> Turli xato turlarini to'g'ri aniqlang va ular bilan ishlang
                    </li>
                    <li>
                      <strong>Xatolarni qayd qilish:</strong> Muhim xatolarni serverda qayd qiling
                    </li>
                    <li>
                      <strong>Resurslarni tozalash:</strong> finally blokidan to'g'ri foydalaning
                    </li>
                    <li>
                      <strong>Xavfsizlik:</strong> Xato xabarlarida maxfiy ma'lumotlarni oshkor qilmang
                    </li>
                  </ul>
                </div>
              </div>

              {/* 9.5 Asinxron xatolarni boshqarish */}
              <div>
                <h3 className="text-lg font-medium mb-2">9.5 Asinxron xatolarni boshqarish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Promise.all bilan xatolarni boshqarish
async function fetchMultipleUsers(userIds) {
  try {
    const promises = userIds.map(id => 
      fetch(\`https://api.example.com/users/\${id}\`)
        .then(response => response.json())
    );

    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error('Foydalanuvchilar ma'lumotlarini olishda xato:', error);
    throw error;
  }
}

// Promise.race bilan vaqt chegarasi qo'yish
async function fetchWithTimeout(url, timeout = 5000) {
  try {
    const response = await Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('So'rov vaqti tugadi')), timeout)
      )
    ]);
    return await response.json();
  } catch (error) {
    console.error('So'rovda xato:', error.message);
    throw error;
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Xulosa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">Xulosa</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>try...catch — xatoliklarni boshqarish uchun juda qulay vosita.</li>
                <li>Har doim xatolarni qayta ishlash va foydalanuvchiga aniq xabar berish uchun ishlatiladi.</li>
                <li>Asinxron xatolar uchun Promise yoki async/await bilan birga ishlatiladi.</li>
                <li>finally bloki orqali resurslarni to'g'ri boshqarish mumkin.</li>
                <li>Nested try...catch orqali murakkab xatolarni qayta ishlash imkoniyati mavjud.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TryCatch
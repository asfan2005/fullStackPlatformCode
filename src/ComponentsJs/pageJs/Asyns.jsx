import React from 'react'

function Asyns() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">JavaScript async/await (Asinxron Dasturlash)</h1>
        <p className="text-gray-700 mb-4">
          async/await - bu JavaScript-da asinxron kodni yozishni osonlashtiruvchi va uni sinxron kodga o'xshatib 
          tushunarliroq qiladigan konstruktsiyadir. Bu Promise'lar bilan ishlashni soddalashtiruvchi yuqori darajali vositadir.
        </p>

        <div className="space-y-6">
          {/* 1. async/await Asoslari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">1. async/await Asoslari</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">async Funksiya</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function myFunction() {
  return "Hello";
}

// Promise qaytaradi
myFunction().then(result => console.log(result)); // "Hello"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">await Operatori</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function example() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });

  let result = await promise; // Promise bajarilishini kutadi
  console.log(result); // "Done!"
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 2. Amaliy Misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">2. Amaliy Misollar</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 API so'rovlari</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Xato:', error);
  }
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">2.2 Parallel so'rovlar</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function fetchMultipleData() {
  try {
    const [users, posts] = await Promise.all([
      fetch('https://api.example.com/users').then(res => res.json()),
      fetch('https://api.example.com/posts').then(res => res.json())
    ]);
    
    console.log('Users:', users);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Xato:', error);
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 3. Xatolarni Boshqarish */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">3. Xatolarni Boshqarish</h2>
            </div>
            <div className="p-4 space-y-4">
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`async function handleErrors() {
  try {
    const response = await fetch('https://invalid-url');
    if (!response.ok) {
      throw new Error(\`HTTP xato: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Xato yuz berdi:', error.message);
    throw error; // Xatoni yuqoriga uzatish
  }
}`}</code>
              </pre>
            </div>
          </div>

          {/* 4. Asinxron Looplar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">4. Asinxron Looplar</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">4.1 Ketma-ket bajarish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function sequential() {
  const ids = [1, 2, 3];
  for (const id of ids) {
    const result = await fetch(\`https://api.example.com/users/\${id}\`);
    const data = await result.json();
    console.log(data);
  }
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">4.2 Parallel bajarish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function parallel() {
  const ids = [1, 2, 3];
  const promises = ids.map(id => 
    fetch(\`https://api.example.com/users/\${id}\`).then(res => res.json())
  );
  const results = await Promise.all(promises);
  console.log(results);
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 5. async/await dan foydalanish strategiyalari */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">5. async/await dan foydalanish strategiyalari</h2>
            </div>
            <div className="p-4 space-y-4">
              {/* 5.1 await ni looplarda ishlatish */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.1 await ni looplarda ishlatish</h3>
                <p className="text-gray-700 mb-4">
                  Loop ichida await ni ishlatishda ehtiyot bo'lish kerak, chunki u har bir iteratsiyada kutadi.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-medium mb-2">Sekin bajarilishi:</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`async function processArray() {
  let items = [1, 2, 3];
  for (let item of items) {
    let result = await new Promise((resolve) => 
      setTimeout(() => resolve(item * 2), 1000)
    );
    console.log(result);
  }
}

processArray(); // 3 sekund davom etadi`}</code>
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-md font-medium mb-2">Yaxshiroq usul (Parallel ishlash):</h4>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{`async function processArray() {
  let items = [1, 2, 3];
  let results = await Promise.all(
    items.map(item =>
      new Promise(resolve => 
        setTimeout(() => resolve(item * 2), 1000)
      )
    )
  );
  console.log(results); // 1 sekund davom etadi
}

processArray();`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* 5.2 Xatolarni boshqarish strategiyasi */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.2 Xatolarni boshqarish strategiyasi</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function handleErrors() {
  try {
    const results = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]);
    
    return await Promise.all(
      results.map(r => r.json())
    );
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('So'rov bekor qilindi');
    } else if (error.name === 'TypeError') {
      console.log('Tarmoq xatosi');
    } else {
      console.log('Boshqa xato:', error);
    }
    throw error;
  }
}`}</code>
                </pre>
              </div>

              {/* 5.3 Vaqt chegarasi qo'yish */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.3 Vaqt chegarasi qo'yish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    const data = await response.json();
    clearTimeout(timeoutId);
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('So'rov vaqti tugadi');
    }
    throw error;
  }
}`}</code>
                </pre>
              </div>

              {/* 5.4 Keshlashtirish */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.4 Keshlashtirish</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`const cache = new Map();

async function fetchWithCache(url, ttl = 60000) {
  if (cache.has(url)) {
    const { data, timestamp } = cache.get(url);
    if (Date.now() - timestamp < ttl) {
      return data;
    }
    cache.delete(url);
  }

  const response = await fetch(url);
  const data = await response.json();
  
  cache.set(url, {
    data,
    timestamp: Date.now()
  });

  return data;
}`}</code>
                </pre>
              </div>

              {/* 5.5 Retry mexanizmi */}
              <div>
                <h3 className="text-lg font-medium mb-2">5.5 Retry mexanizmi</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      
      await new Promise(resolve => 
        setTimeout(resolve, delay * Math.pow(2, i))
      );
      
      console.log(\`Urinish \${i + 1} muvaffaqiyatsiz, qayta urinilmoqda...\`);
    }
  }
}`}</code>
                </pre>
              </div>

              {/* Amaliy maslahatlar */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Amaliy maslahatlar:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Parallel bajarilishi mumkin bo'lgan operatsiyalar uchun Promise.all() dan foydalaning</li>
                  <li>Xatolarni to'g'ri boshqarish uchun try-catch bloklaridan foydalaning</li>
                  <li>Uzoq davom etadigan so'rovlar uchun vaqt chegarasi qo'ying</li>
                  <li>Ma'lumotlarni keshlashtirish orqali takroriy so'rovlarni kamaytiring</li>
                  <li>Muhim so'rovlar uchun retry mexanizmini qo'llang</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Misollar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-2">
              <h2 className="text-xl font-semibold">6. Real Hayotiy Misollar</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">6.1 Ma'lumotlarni yuklash</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`async function loadUserData(userId) {
  try {
    // Foydalanuvchi ma'lumotlarini yuklash
    const userResponse = await fetch(\`/api/users/\${userId}\`);
    const userData = await userResponse.json();

    // Foydalanuvchi postlarini yuklash
    const postsResponse = await fetch(\`/api/users/\${userId}/posts\`);
    const userPosts = await postsResponse.json();

    return {
      user: userData,
      posts: userPosts
    };
  } catch (error) {
    console.error('Ma\'lumotlarni yuklashda xato:', error);
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
                <li>async/await Promise'lar bilan ishlashni soddalashtiradi</li>
                <li>Kod o'qilishi va tushunilishi osonlashadi</li>
                <li>Xatolarni boshqarish osonlashadi</li>
                <li>Promise'larning barcha imkoniyatlarini saqlab qoladi</li>
                <li>Zamonaviy JavaScript dasturlashning muhim qismi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Asyns
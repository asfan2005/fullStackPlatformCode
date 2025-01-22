const dataAsyncJavaScript = [
    {
        id: 1,
        title: "Asosiy Asinxron Tushunchalar",
        description: "JavaScript asinxron dasturlashning asosiy tushunchalari va sodda misollar",
        examples: [
            {
                name: "setTimeout va setInterval",
                code: `// setTimeout misoli
console.log("Boshlandi");

setTimeout(() => {
    console.log("3 sekunddan keyin ishladi");
}, 3000);

console.log("Tugadi");

// setInterval misoli
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(\`\${count} sekund o'tdi\`);
    if (count >= 5) {
        clearInterval(intervalId);
    }
}, 1000);`,
                explanation: "setTimeout va setInterval funksiyalarining ishlashi",
                result: `Boshlandi
Tugadi
3 sekunddan keyin ishladi

1 sekund o'tdi
2 sekund o'tdi
3 sekund o'tdi
4 sekund o'tdi
5 sekund o'tdi`
            },
            {
                name: "Callbacks",
                code: `function ma'lumotniYukla(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "User" };
        callback(null, data);
    }, 2000);
}

ma'lumotniYukla((error, data) => {
    if (error) {
        console.error("Xato:", error);
    } else {
        console.log("Ma'lumot:", data);
    }
});`,
                explanation: "Callback funksiyalar bilan ishlash",
                result: "Ma'lumot: { id: 1, name: 'User' }"
            }
        ]
    },
    {
        id: 2,
        title: "Promise bilan Ishlash",
        description: "Promise asoslari va ular bilan ishlash usullari",
        examples: [
            {
                name: "Promise Yaratish",
                code: `const randomSonTopish = new Promise((resolve, reject) => {
    setTimeout(() => {
        const son = Math.random();
        if (son > 0.5) {
            resolve(\`Muvaffaqiyat: \${son}\`);
        } else {
            reject(\`Xato: son juda kichik (\${son})\`);
        }
    }, 1000);
});

randomSonTopish
    .then(natija => console.log(natija))
    .catch(xato => console.error(xato));`,
                explanation: "Promise yaratish va undan foydalanish",
                result: "Muvaffaqiyat: 0.7532... yoki Xato: son juda kichik (0.2341...)"
            },
            {
                name: "Promise.all va Promise.race",
                code: `const promise1 = new Promise(resolve => setTimeout(() => resolve("Birinchi"), 2000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Ikkinchi"), 1500));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Uchinchi"), 1000));

// Promise.all
Promise.all([promise1, promise2, promise3])
    .then(natijalar => console.log("Hamma natijalar:", natijalar));

// Promise.race
Promise.race([promise1, promise2, promise3])
    .then(birinchiNatija => console.log("Birinchi natija:", birinchiNatija));`,
                explanation: "Promise.all va Promise.race metodlarining ishlashi",
                result: `Birinchi natija: Uchinchi
Hamma natijalar: ["Birinchi", "Ikkinchi", "Uchinchi"]`
            }
        ]
    },
    {
        id: 3,
        title: "Async/Await",
        description: "Async/Await yordamida asinxron kod yozish",
        examples: [
            {
                name: "Async Function",
                code: `async function ma'lumotlarniOlish() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log("Ma'lumotlar:", data);
    } catch (error) {
        console.error("Xato yuz berdi:", error);
    }
}

// Parallel so'rovlar
async function barchaMa'lumotlarniOlish() {
    try {
        const [foydalanuvchilar, postlar] = await Promise.all([
            fetch('https://api.example.com/users').then(r => r.json()),
            fetch('https://api.example.com/posts').then(r => r.json())
        ]);
        
        console.log("Foydalanuvchilar:", foydalanuvchilar);
        console.log("Postlar:", postlar);
    } catch (error) {
        console.error("Xato:", error);
    }
}`,
                explanation: "Async/Await yordamida asinxron operatsiyalarni bajarish",
                result: "Ma'lumotlar va xatolarni async/await yordamida boshqarish"
            }
        ]
    },
    {
        id: 4,
        title: "Event Loop va Asinxron Ishlash",
        description: "JavaScript Event Loop va asinxron kodni ishlash tartibi",
        examples: [
            {
                name: "Event Loop Misoli",
                code: `console.log("1 - Sinxron kod");

setTimeout(() => {
    console.log("4 - Timeout 0ms");
}, 0);

Promise.resolve()
    .then(() => console.log("3 - Promise"));

console.log("2 - Sinxron kod");`,
                explanation: "Event Loop va task queue ishlash tartibi",
                result: `1 - Sinxron kod
2 - Sinxron kod
3 - Promise
4 - Timeout 0ms`
            }
        ]
    },
    {
        id: 5,
        title: "Asinxron Pattern va Best Practices",
        description: "Asinxron dasturlashda keng tarqalgan patternlar",
        examples: [
            {
                name: "Async Iterator Pattern",
                code: `async function* ma'lumotGeneratori() {
    let count = 0;
    while (count < 5) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield \`Ma'lumot \${++count}\`;
    }
}

async function ma'lumotlarniOlish() {
    for await (const item of ma'lumotGeneratori()) {
        console.log(item);
    }
}

ma'lumotlarniOlish();`,
                explanation: "Async iterator va generator funksiyalar",
                result: `Ma'lumot 1
Ma'lumot 2
Ma'lumot 3
Ma'lumot 4
Ma'lumot 5`
            }
        ]
    }
];

export default dataAsyncJavaScript;
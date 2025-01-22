const dataApiBilanIshlash = [
    {
        id: 1,
        title: "API Asoslari",
        description: "REST API va uning asosiy tushunchalari",
        examples: [
            {
                name: "REST Metodlari",
                code: `// GET so'rovi
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Xato:', error));

// POST so'rovi
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John',
        age: 30
    })
})
    .then(response => response.json())
    .then(data => console.log(data));`,
                explanation: "REST API ning asosiy HTTP metodlari (GET, POST, PUT, DELETE)",
                result: "API so'rovlarini yuborish va javoblarni qabul qilish"
            }
        ]
    },
    {
        id: 2,
        title: "Fetch API",
        description: "JavaScript da Fetch API dan foydalanish",
        examples: [
            {
                name: "Fetch Metodlari",
                code: `// Ma'lumotlarni olish
async function getMalumotlar() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Xato:', error);
    }
}

// Ma'lumotlarni yuborish
async function malumotYuborish(malumot) {
    try {
        const response = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(malumot)
        });
        return await response.json();
    } catch (error) {
        console.error('Xato:', error);
    }
}`,
                explanation: "Fetch API yordamida so'rovlar yuborish",
                result: "API bilan asinxron ishlash"
            }
        ]
    },
    {
        id: 3,
        title: "Axios bilan ishlash",
        description: "Axios kutubxonasi yordamida API so'rovlari",
        examples: [
            {
                name: "Axios Metodlari",
                code: `// Axios ni o'rnatish
// npm install axios

// GET so'rovi
axios.get('https://api.example.com/users')
    .then(response => console.log(response.data))
    .catch(error => console.error('Xato:', error));

// POST so'rovi
axios.post('https://api.example.com/users', {
    name: 'John',
    age: 30
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Xato:', error));`,
                explanation: "Axios kutubxonasi bilan API so'rovlarini yuborish",
                result: "Axios yordamida ma'lumotlar almashish"
            }
        ]
    },
    {
        id: 4,
        title: "API Xavfsizligi",
        description: "API so'rovlarida xavfsizlik choralari",
        examples: [
            {
                name: "Authentication",
                code: `// Token bilan so'rov yuborish
const token = 'your-auth-token';

fetch('https://api.example.com/protected', {
    headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data));

// Axios bilan token yuborish
axios.get('https://api.example.com/protected', {
    headers: {
        'Authorization': \`Bearer \${token}\`
    }
})
    .then(response => console.log(response.data));`,
                explanation: "API so'rovlarida autentifikatsiya va avtorizatsiya",
                result: "Xavfsiz API so'rovlarini amalga oshirish"
            }
        ]
    },
    {
        id: 5,
        title: "Error Handling",
        description: "API xatolarini boshqarish",
        examples: [
            {
                name: "Xatolarni ushlash",
                code: `async function apiSorov() {
    try {
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error(\`HTTP xato! status: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API xato:', error.message);
        // Xatoni qayta ishlash
        throw error;
    }
}

// Axios xatolarni ushlash
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            // Server javobi 2xx oraliqdan tashqarida
            console.error('Server xatosi:', error.response.status);
        } else if (error.request) {
            // So'rov yuborildi, lekin javob kelmadi
            console.error('Tarmoq xatosi');
        } else {
            // So'rov yuborishda xatolik
            console.error('Xato:', error.message);
        }
    });`,
                explanation: "API so'rovlaridagi xatolarni boshqarish usullari",
                result: "Xatolarni to'g'ri qayta ishlash va foydalanuvchiga xabar berish"
            }
        ]
    }
];

export default dataApiBilanIshlash;
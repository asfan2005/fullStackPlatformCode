const dataJsxAsoslarBosh = [
    {
        id: 3,
        title: "JSX Asoslari va Qoidalari",
        level: "Boshlang'ich",
        description: "JSX - React da UI elementlarini yaratishning eng samarali usuli",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070",
        mainTopics: {
            introduction: {
                title: "JSX Nima?",
                points: [
                    "JavaScript XML (JSX) - React elementlarini yaratish uchun sintaksis kengaytmasi",
                    "HTML ga o'xshash ko'rinish, lekin JavaScript kuchiga ega",
                    "Komponentlarni yaratishda qulaylik",
                    "Babel tomonidan JavaScript kodiga kompilyatsiya qilinadi",
                    "React.createElement() ga avtomatik o'giriladi"
                ]
            },
            jsxRules: {
                title: "JSX Asosiy Qoidalari",
                rules: [
                    {
                        name: "Yopilish Qoidasi",
                        description: "Har bir element yopilishi shart",
                        example: "<img src='rasm.jpg' />",
                        additionalInfo: "Barcha elementlar, jumladan bo'sh elementlar ham yopilishi kerak"
                    },
                    {
                        name: "className Ishlatilishi",
                        description: "HTML class atributi o'rniga className ishlatiladi",
                        example: "<div className='container'>Kontent</div>",
                        additionalInfo: "class JavaScript kalit so'zi bo'lgani uchun className ishlatiladi"
                    },
                    {
                        name: "camelCase Nomlash",
                        description: "HTML atributlari camelCase da yoziladi",
                        example: "backgroundColor, onClick, onChange",
                        additionalInfo: "HTML dan farqli ravishda, barcha atributlar camelCase da yoziladi"
                    },
                    {
                        name: "JavaScript Expressions",
                        description: "JavaScript ifodalarni {} ichida yozish mumkin",
                        example: "<h1>Salom, {user.name}!</h1>",
                        additionalInfo: "Har qanday valid JavaScript ifodasi ishlatilishi mumkin"
                    },
                    {
                        name: "Event Handling",
                        description: "Event handlerlar camelCase da yoziladi va funksiya sifatida uzatiladi",
                        example: "<button onClick={handleClick}>Bosing</button>",
                        additionalInfo: "HTML dan farqli ravishda, event handlerlar JavaScript funksiyalari sifatida uzatiladi"
                    },
                    {
                        name: "Style Atributi",
                        description: "Inline styles obyekt sifatida uzatiladi",
                        example: "<div style={{ color: 'blue', fontSize: '16px' }}>Matn</div>",
                        additionalInfo: "CSS xususiyatlari camelCase da yoziladi va qiymatlar string sifatida beriladi"
                    },
                    {
                        name: "htmlFor Ishlatilishi",
                        description: "HTML for atributi o'rniga htmlFor ishlatiladi",
                        example: "<label htmlFor='username'>Foydalanuvchi nomi:</label>",
                        additionalInfo: "for JavaScript kalit so'zi bo'lgani uchun htmlFor ishlatiladi"
                    }
                ]
            },
            practicalExamples: {
                title: "Amaliy Misollar",
                examples: [
                    {
                        name: "Oddiy JSX Element",
                        code: `const element = (
    <div>
        <h1>Salom Dunyo!</h1>
        <p>Bu oddiy JSX elementi</p>
    </div>
);`
                    },
                    {
                        name: "JavaScript bilan JSX",
                        code: `const name = 'Foydalanuvchi';
const element = (
    <div>
        <h1>Salom, {name}!</h1>
        <p>Hozirgi vaqt: {new Date().toLocaleTimeString()}</p>
    </div>
);`
                    },
                    {
                        name: "Shartli Rendering",
                        code: `const element = (
    <div>
        {isLoggedIn ? (
            <h1>Xush kelibsiz!</h1>
        ) : (
            <h1>Iltimos, tizimga kiring</h1>
        )}
    </div>
);`
                    }
                ]
            },
            advancedConcepts: {
                title: "Ilg'or JSX Konseptlari",
                concepts: [
                    {
                        name: "Fragmentlar",
                        description: "Qo'shimcha DOM element yaratmasdan bir nechta elementlarni guruhlash",
                        example: `<>
    <h1>Sarlavha</h1>
    <p>Paragraf</p>
</>`
                    },
                    {
                        name: "Props Spreading",
                        description: "Atributlarni spread operator orqali uzatish",
                        example: `const props = { id: 'input', type: 'text' };
<input {...props} />`
                    },
                    {
                        name: "Children Props",
                        description: "Komponent ichidagi kontentni props.children orqali olish",
                        example: `<Card>
    <h1>Bu card ichidagi kontent</h1>
</Card>`
                    }
                ]
            },
            bestPractices: {
                title: "JSX Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Komponentlarni Ajratish",
                        description: "Katta JSX strukturalarini kichik, qayta ishlatiluvchi komponentlarga bo'lish",
                        example: "Header, Footer, Sidebar kabi komponentlar"
                    },
                    {
                        name: "Conditional Rendering Usullari",
                        description: "Shartli rendering uchun turli usullar",
                        examples: [
                            {
                                name: "Ternary operator",
                                code: "condition ? <Component1 /> : <Component2 />"
                            },
                            {
                                name: "Logical AND",
                                code: "condition && <Component />"
                            },
                            {
                                name: "IIFE",
                                code: "{(() => { if (condition) return <Component1 />; return <Component2 />; })()}"
                            }
                        ]
                    }
                ]
            },
            performanceOptimization: {
                title: "JSX Optimizatsiya",
                techniques: [
                    {
                        name: "Key Atributidan To'g'ri Foydalanish",
                        description: "Ro'yxatlar uchun unique key ishlatish",
                        example: "items.map(item => <ListItem key={item.id} {...item} />)"
                    },
                    {
                        name: "Fragment Ishlatish",
                        description: "Ortiqcha div'lardan qochish uchun Fragment ishlatish",
                        example: "<>...</>"
                    }
                ]
            }
        },
        codeExamples: {
            basicSyntax: `// JSX sintaksisi
const element = (
    <div className="container">
        <h1>Salom, {user.name}!</h1>
        <img src={user.avatar} alt="Avatar" />
    </div>
);`,
            conditionalRendering: `// Shartli rendering
function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <h1>Xush kelibsiz!</h1>
            ) : (
                <button onClick={login}>
                    Kirish
                </button>
            )}
        </div>
    );
}`,
            listRendering: `// Ro'yxatni rendering qilish
function TodoList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>
    );
}`,
            forms: `// Forma bilan ishlash
function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form logikasi
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({
                    ...formData,
                    username: e.target.value
                })}
            />
            <button type="submit">Kirish</button>
        </form>
    );
}`,
            componentComposition: `// Komponentlarni kompozitsiya qilish
function Card({ title, children }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

function App() {
    return (
        <Card title="Muhim Ma'lumot">
            <p>Bu card ichidagi kontent</p>
            <button>Ko'proq</button>
        </Card>
    );
}`
        },
        commonMistakes: {
            title: "Ko'p Uchraydigan Xatolar",
            mistakes: [
                {
                    name: "class o'rniga className",
                    wrong: "<div class='container'>",
                    correct: "<div className='container'>"
                },
                {
                    name: "Yopilmagan elementlar",
                    wrong: "<input type='text'>",
                    correct: "<input type='text' />"
                },
                {
                    name: "JavaScript ifodalarini {} siz yozish",
                    wrong: "<div>name</div>",
                    correct: "<div>{name}</div>"
                },
                {
                    name: "Props ni to'g'ridan to'g'ri o'zgartirish",
                    wrong: "props.value = newValue",
                    correct: "setState(newValue)"
                },
                {
                    name: "Key sifatida index ishlatish",
                    wrong: "array.map((item, index) => <div key={index}>)",
                    correct: "array.map(item => <div key={item.id}>)"
                },
                {
                    name: "Event handler noto'g'ri uzatish",
                    wrong: "<button onClick={handleClick()}>",
                    correct: "<button onClick={handleClick}>"
                }
            ]
        },
        debugging: {
            title: "JSX Debugging",
            tools: [
                {
                    name: "React Developer Tools",
                    description: "Browser extension orqali JSX komponentlarini tekshirish"
                },
                {
                    name: "ESLint",
                    description: "JSX sintaksis xatolarini topish va tuzatish"
                }
            ],
            commonIssues: [
                "Render paytida xatolar",
                "Props uzatishdagi muammolar",
                "Key bilan bog'liq ogohlantirishlar"
            ]
        }
    }
];

export default dataJsxAsoslarBosh;
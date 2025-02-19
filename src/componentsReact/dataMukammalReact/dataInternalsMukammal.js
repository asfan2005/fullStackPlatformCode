const dataInternalsMukammal = [
    {
        id: 1,
        title: "React Virtual DOM - Sodda Misol",
        code: `
// Virtual DOM bilan ishlash
const VirtualDOMExample = () => {
    const [count, setCount] = useState(0);

    // Bu yerda React Virtual DOM ishlatiladi
    return (
        <div>
            <h2>Hozirgi son: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Sonni oshirish
            </button>
            <p>
                Virtual DOM tushuntirish:
                1. React elementlar yaratiladi
                2. Virtual DOM yangilanadi
                3. Haqiqiy DOM bilan solishtiradi
                4. Faqat o'zgargan joylar yangilanadi
            </p>
        </div>
    );
}`,
        description: "React Virtual DOM ishlash printsipini sodda misol orqali tushuntirish",
        result: `{
    "demo": "https://codesandbox.io/s/virtual-dom-example",
    "output": "Virtual DOM orqali samarali yangilanishlar"
}`
    },
    {
        id: 2,
        title: "React Reconciliation - Sodda Misol",
        code: `
// Reconciliation jarayonini ko'rsatish
const ReconciliationExample = () => {
    const [items, setItems] = useState(['Olma', 'Nok', 'Uzum']);

    const addItem = () => {
        setItems([...items, 'Anor']);
    };

    return (
        <div>
            <h3>Mevalar ro'yxati:</h3>
            <ul>
                {items.map((item, index) => (
                    // key muhim - Reconciliation uchun
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>
                Yangi meva qo'shish
            </button>
            <p>
                Reconciliation jarayoni:
                1. Elementlar key orqali taniladi
                2. O'zgarishlar aniqlanadi
                3. Minimal o'zgarishlar amalga oshiriladi
            </p>
        </div>
    );
}`,
        description: "React Reconciliation jarayonini sodda misol orqali tushuntirish",
        result: `{
    "demo": "https://codesandbox.io/s/reconciliation-example",
    "output": "Reconciliation orqali samarali yangilanish"
}`
    },
    {
        id: 3,
        title: "React Fiber - Sodda Tushuntirish",
        code: `
// React Fiber arxitekturasi
const FiberExample = () => {
    const [isLoading, setIsLoading] = useState(false);

    const startHeavyTask = () => {
        setIsLoading(true);
        // Og'ir vazifa
        setTimeout(() => {
            // React Fiber bu vazifani bo'lib bajaradi
            for(let i = 0; i < 1000000; i++) {
                // Og'ir hisob-kitoblar
            }
            setIsLoading(false);
        }, 100);
    };

    return (
        <div>
            <h3>React Fiber Misoli</h3>
            <button 
                onClick={startHeavyTask}
                disabled={isLoading}
            >
                {isLoading ? 'Ishlamoqda...' : 'Og\'ir vazifani boshlash'}
            </button>
            <p>
                React Fiber xususiyatlari:
                1. Vazifalarni bo'lib bajarish
                2. Muhim vazifalarga ustunlik berish
                3. Animatsiyalar ravon ishlaydi
                4. Foydalanuvchi interfeysini muzlatmaydi
            </p>
        </div>
    );
}`,
        description: "React Fiber arxitekturasini sodda misol orqali tushuntirish",
        result: `{
    "demo": "https://codesandbox.io/s/fiber-example",
    "output": "React Fiber orqali yaxshilangan ishlash"
}`
    },
    {
        id: 4,
        title: "React State va Props - Oddiy Misol",
        code: `
// State va Props farqini ko'rsatish
const Parent = () => {
    const [ism, setIsm] = useState("Ali");

    return (
        <div>
            <h3>Ota Komponenti</h3>
            <input 
                value={ism} 
                onChange={(e) => setIsm(e.target.value)}
                placeholder="Ismni kiriting"
            />
            <Child ismProps={ism} />
        </div>
    );
}

const Child = ({ ismProps }) => {
    return (
        <div>
            <h4>Bola Komponenti</h4>
            <p>Otadan kelgan ism: {ismProps}</p>
        </div>
    );
}`,
        description: "React State va Props farqini oddiy misol orqali tushuntirish",
        result: `{
    "demo": "https://codesandbox.io/s/state-props-example",
    "output": "State va Props orqali ma'lumot uzatish"
}`
    },
    {
        id: 5,
        title: "React useEffect - Oddiy Misol",
        code: `
// useEffect hookidan foydalanish
const EffectExample = () => {
    const [sanoq, setSanoq] = useState(0);
    const [xabar, setXabar] = useState("");

    useEffect(() => {
        setXabar("Sanoq o'zgardi!");
        
        // 3 sekunddan keyin xabarni tozalash
        const timer = setTimeout(() => {
            setXabar("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [sanoq]);

    return (
        <div>
            <h3>useEffect Misoli</h3>
            <button onClick={() => setSanoq(sanoq + 1)}>
                Sanoq: {sanoq}
            </button>
            {xabar && <p>{xabar}</p>}
            <p>
                useEffect ishlashi:
                1. Komponenta yuklanganda
                2. Sanoq o'zgarganda
                3. Tozalash funksiyasi
            </p>
        </div>
    );
}`,
        description: "React useEffect hookini oddiy misol orqali tushuntirish",
        result: `{
    "demo": "https://codesandbox.io/s/useeffect-example",
    "output": "useEffect orqali hayot sikli"
}`
    },
    {
        id: 6,
        title: "React useMemo - Oddiy Misol",
        code: `
// useMemo hookidan foydalanish
const MemoExample = () => {
    const [sonlar, setSonlar] = useState([1, 2, 3, 4, 5]);
    const [rang, setRang] = useState('oq');

    // Og'ir hisoblash (useMemo bilan keshlanadi)
    const jami = useMemo(() => {
        console.log("Hisoblanyapti...");
        return sonlar.reduce((a, b) => a + b, 0);
    }, [sonlar]);

    return (
        <div style={{ background: rang }}>
            <h3>useMemo Misoli</h3>
            <p>Sonlar yig'indisi: {jami}</p>
            <button onClick={() => setSonlar([...sonlar, sonlar.length + 1])}>
                Son qo'shish
            </button>
            <button onClick={() => setRang(rang === 'oq' ? 'kulrang' : 'oq')}>
                Rangni o'zgartirish
            </button>
            <p>
                useMemo afzalliklari:
                1. Qayta hisoblashlarni oldini oladi
                2. Ishlash tezligini oshiradi
                3. Keraksiz renderlarni kamaytiradi
            </p>
        </div>
    );
}`,
        description: "React useMemo hookini oddiy misol orqali tushuntirish",
        result: `{
    "demo": "https://codesandbox.io/s/usememo-example",
    "output": "useMemo orqali optimallashgan hisoblashlar"
}`
    }
];

export default dataInternalsMukammal;
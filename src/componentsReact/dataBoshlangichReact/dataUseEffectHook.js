const dataUseEffectHook = [
    {
        id: 1,
        title: "useEffect Hook",
        description: "useEffect - React komponentlarida side-effectlarni boshqarish uchun ishlatiladigan hook",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                id: "intro_1",
                title: "useEffect Haqida",
                points: [
                    "useEffect - komponentning hayot sikli bilan bog'liq operatsiyalarni bajarish",
                    "API so'rovlarini yuborish va ma'lumotlarni olish",
                    "DOM bilan to'g'ridan-to'g'ri ishlash",
                    "Timer va intervallarni boshqarish",
                    "Event listener'larni qo'shish va o'chirish",
                    "Tashqi resurslar va subscriptionlarni boshqarish",
                    "Component mount/unmount holatlarini kuzatish",
                    "Dependencies array orqali qayta renderlarni optimizatsiya qilish"
                ]
            },
            basicUsage: {
                id: "basic_usage_1",
                title: "Asosiy Ishlatilishi",
                examples: [
                    {
                        id: "effect_basic_1",
                        name: "Oddiy useEffect",
                        description: "Har render paytida ishga tushadigan effect",
                        code: `function SimpleEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = \`You clicked \${count} times\`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}`
                    },
                    {
                        id: "effect_deps_1",
                        name: "Dependencies bilan ishlatish",
                        description: "Ma'lum o'zgarishlarni kuzatish",
                        code: `function WatchedEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log(\`Count o'zgardi: \${count}\`);
    }, [count]); // Faqat count o'zgarganda ishlaydi

    return (
        <div>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    );
}`
                    },
                    {
                        id: "effect_basic_2",
                        name: "Oddiy Counter",
                        description: "useEffect yordamida counter qiymatini kuzatish",
                        code: `function CounterExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Counter yangilandi:", count);
    }, [count]);

    return (
        <div className="p-4">
            <h3>Counter: {count}</h3>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setCount(count + 1)}
            >
                Oshirish
            </button>
        </div>
    );
}`
                    },
                    {
                        id: "effect_basic_3",
                        name: "Input Kuzatuvchi",
                        description: "Input qiymatini useEffect bilan kuzatish",
                        code: `function InputTracker() {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        const words = text.trim().split(/\\s+/);
        setWordCount(text ? words.length : 0);
    }, [text]);

    return (
        <div className="p-4">
            <textarea
                className="w-full p-2 border rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Matn kiriting..."
            />
            <p>So'zlar soni: {wordCount}</p>
        </div>
    );
}`
                    },
                    {
                        id: "effect_basic_4",
                        name: "LocalStorage bilan ishlash",
                        description: "Ma'lumotlarni LocalStorage'da saqlash",
                        code: `function LocalStorageExample() {
    const [name, setName] = useState(
        localStorage.getItem('username') || ''
    );

    useEffect(() => {
        localStorage.setItem('username', name);
    }, [name]);

    return (
        <div className="p-4">
            <input
                type="text"
                className="p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingizni kiriting"
            />
            <p>Saqlangan ism: {name}</p>
        </div>
    );
}`
                    },
                    {
                        id: "effect_basic_5",
                        name: "Timer Misoli",
                        description: "Oddiy timer yaratish",
                        code: `function TimerExample() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    return (
        <div className="p-4">
            <h3>Timer: {seconds} soniya</h3>
            <button
                className="px-4 py-2 bg-green-500 text-white rounded mr-2"
                onClick={() => setIsRunning(!isRunning)}
            >
                {isRunning ? 'To\'xtatish' : 'Boshlash'}
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setSeconds(0)}
            >
                Qayta o'rnatish
            </button>
        </div>
    );
}`
                    }
                ]
            },
            advancedUsage: {
                id: "advanced_usage_1",
                title: "Murakkab Ishlatish",
                examples: [
                    {
                        id: "effect_cleanup_1",
                        name: "Cleanup Function",
                        description: "Tozalash funksiyasi bilan ishlash",
                        code: `function CleanupExample() {
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div style={{ height: '200vh' }}>Scroll me</div>;
}`
                    },
                    {
                        id: "effect_async_1",
                        name: "Async/Await bilan ishlatish",
                        description: "API so'rovlarini yuborish",
                        code: `function AsyncEffect() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return <div>Data: {JSON.stringify(data)}</div>;
}`
                    }
                ]
            },
            commonPatterns: {
                id: "patterns_1",
                title: "Keng Tarqalgan Patterns",
                examples: [
                    {
                        id: "pattern_subscription_1",
                        name: "Subscription Pattern",
                        description: "Real-time ma'lumotlarni kuzatish",
                        code: `function SubscriptionComponent() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('wss://api.example.com/ws');
        
        ws.onmessage = (event) => {
            setMessages(prev => [...prev, event.data]);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <ul>
            {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
            ))}
        </ul>
    );
}`
                    },
                    {
                        id: "pattern_interval_1",
                        name: "Interval Pattern",
                        description: "Vaqt bilan ishlash",
                        code: `function IntervalComponent() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div>Current time: {time.toLocaleTimeString()}</div>;
}`
                    }
                ]
            }
        }
    }
];

export default dataUseEffectHook;
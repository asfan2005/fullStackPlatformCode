const dataCustomHooks = [
    {
        id: 1,
        title: "Custom Hooks",
        description: "Custom Hook - React komponentlari orasida logikani qayta ishlatish uchun maxsus funksiyalar",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                id: "intro_1",
                title: "Custom Hooks Haqida",
                points: [
                    "Custom Hook - 'use' prefiksi bilan boshlanadigan maxsus funksiya",
                    "Komponentlar orasida logikani qayta ishlatish imkoniyati",
                    "React Hook'larini o'z ichiga olgan funksionallik",
                    "Kod takrorlanishini kamaytirish",
                    "Toza va qayta ishlatiluvchi kod yozish",
                    "Murakkab logikani soddalashtirib berish",
                    "State va lifecycle metodlarini boshqarish",
                    "Komponentlarni kichikroq va tushunarli qilish"
                ]
            },
            basicUsage: {
                id: "basic_usage_1",
                title: "Asosiy Custom Hook'lar",
                examples: [
                    {
                        id: "custom_basic_1",
                        name: "useLocalStorage Hook",
                        description: "LocalStorage bilan ishlash uchun hook",
                        code: `function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}`
                    },
                    {
                        id: "custom_basic_2",
                        name: "useInput Hook",
                        description: "Input holatini boshqarish uchun hook",
                        code: `function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return {
        value,
        onChange: handleChange,
        reset,
        setValue
    };
}`
                    },
                    {
                        id: "custom_basic_3",
                        name: "useFetch Hook",
                        description: "API so'rovlarini yuborish uchun hook",
                        code: `function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}`
                    },
                    {
                        id: "custom_basic_4",
                        name: "useToggle Hook",
                        description: "Boolean qiymatni o'zgartirish uchun oddiy hook",
                        code: `function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    
    const toggle = () => {
        setValue(!value);
    };
    
    return [value, toggle];
}

// Ishlatilishi:
function Example() {
    const [isOpen, toggleOpen] = useToggle();
    
    return (
        <button onClick={toggleOpen}>
            {isOpen ? "Yopish" : "Ochish"}
        </button>
    );
}`
                    },
                    {
                        id: "custom_basic_5",
                        name: "useCounter Hook",
                        description: "Raqamni oshirish/kamaytirish uchun oddiy hook",
                        code: `function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    
    return {
        count,
        increment,
        decrement,
        reset
    };
}

// Ishlatilishi:
function CounterExample() {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return (
        <div>
            <p>Hozirgi qiymat: {count}</p>
            <button onClick={increment}>Oshirish</button>
            <button onClick={decrement}>Kamaytirish</button>
            <button onClick={reset}>Qayta o'rnatish</button>
        </div>
    );
}`
                    },
                    {
                        id: "custom_basic_6",
                        name: "useTimeout Hook",
                        description: "Vaqt bo'yicha funksiya ishga tushirish uchun hook",
                        code: `function useTimeout(callback, delay) {
    useEffect(() => {
        const timeoutId = setTimeout(callback, delay);
        
        return () => {
            clearTimeout(timeoutId);
        };
    }, [callback, delay]);
}

// Ishlatilishi:
function TimeoutExample() {
    const [message, setMessage] = useState("");
    
    useTimeout(() => {
        setMessage("Salom, 3 soniyadan keyin!");
    }, 3000);
    
    return <div>{message}</div>;
}`
                    },
                    {
                        id: "custom_basic_7",
                        name: "usePrevious Hook",
                        description: "O'zgaruvchining oldingi qiymatini saqlash uchun hook",
                        code: `function usePrevious(value) {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}

// Ishlatilishi:
function PreviousExample() {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    
    return (
        <div>
            <p>Hozirgi qiymat: {count}</p>
            <p>Oldingi qiymat: {previousCount}</p>
            <button onClick={() => setCount(count + 1)}>
                Oshirish
            </button>
        </div>
    );
}`
                    }
                ]
            },
            advancedUsage: {
                id: "advanced_usage_1",
                title: "Murakkab Custom Hook'lar",
                examples: [
                    {
                        id: "custom_advanced_1",
                        name: "useWindowSize Hook",
                        description: "Oyna o'lchamlarini kuzatish",
                        code: `function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}`
                    },
                    {
                        id: "custom_advanced_2",
                        name: "useTheme Hook",
                        description: "Mavzuni boshqarish uchun hook",
                        code: `function useTheme() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
}`
                    }
                ]
            },
            practicalExamples: {
                id: "practical_1",
                title: "Amaliy Misollar",
                examples: [
                    {
                        id: "practical_example_1",
                        name: "useForm Hook",
                        description: "Forma validatsiyasi uchun hook",
                        code: `function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        Object.keys(values).forEach(key => {
            if (!values[key]) {
                newErrors[key] = 'Bu maydon to\'ldirilishi shart';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        validate,
        reset
    };
}`
                    },
                    {
                        id: "practical_example_2",
                        name: "useDebounce Hook",
                        description: "So'rovlarni kechiktirish uchun hook",
                        code: `function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}`
                    }
                ]
            }
        }
    }
];

export default dataCustomHooks;
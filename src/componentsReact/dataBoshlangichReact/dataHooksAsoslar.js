const dataHooksAsoslar = [
    {
        id: 1,
        title: "React Hooks Asoslari",
        description: "React Hooks - funksional komponentlarda holatni boshqarish va hayot sikli metodlarini ishlatish imkoniyati",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                id: "intro_1",
                title: "React Hooks Haqida",
                points: [
                    "Hooks - React 16.8 versiyasida qo'shilgan yangilik",
                    "Class komponentlar o'rniga funksional komponentlarda ishlash imkoniyati",
                    "State va boshqa React xususiyatlarini ishlatish",
                    "Ko'p ishlatiladigan hooklar: useState, useEffect, useContext, useRef",
                    "Custom hooklar yaratish imkoniyati",
                    "Hooklar yordamida kod qayta ishlatilishi (reusability)",
                    "Hooklar komponentlar orasida logikani almashish imkoniyati",
                    "Testing va debugging osonlashishi"
                ]
            },
            basicHooks: {
                id: "basic_hooks_1",
                title: "Asosiy Hooklar",
                examples: [
                    {
                        id: "useState_1",
                        name: "useState Hook",
                        description: "Komponentda holatni boshqarish",
                        code: `function Counter() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: '', age: 0 });

    const increment = () => setCount(prev => prev + 1);
    
    const updateUser = () => {
        setUser(prev => ({
            ...prev,
            name: 'John'
        }));
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Oshirish</button>
            
            <p>User: {user.name}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    );
}`
                    },
                    {
                        id: "useState_2",
                        name: "useState Form Example",
                        description: "Forma ma'lumotlarini boshqarish",
                        code: `function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.username) tempErrors.username = "Username required";
        if (!formData.email.includes('@')) tempErrors.email = "Invalid email";
        if (formData.password.length < 6) tempErrors.password = "Password too short";
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
}`
                    },
                    {
                        id: "useEffect_1",
                        name: "useEffect Hook",
                        description: "Hayot sikli va side-effectlarni boshqarish",
                        code: `function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Cleanup code
            console.log('Component unmounted');
        };
    }, []); // Empty dependency array

    if (loading) return <div>Loading...</div>;
    return <div>{JSON.stringify(data)}</div>;
}`
                    },
                    {
                        id: "useEffect_2",
                        name: "useEffect Timer Example",
                        description: "Timer va interval bilan ishlash",
                        code: `function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return \`\${mins}:\${secs < 10 ? '0' : ''}\${secs}\`;
    };

    return (
        <div>
            <h2>Stopwatch</h2>
            <div>{formatTime(time)}</div>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    );
}`
                    }
                ]
            },
            advancedHooks: {
                id: "advanced_hooks_1",
                title: "Murakkab Hooklar",
                examples: [
                    {
                        id: "useContext_1",
                        name: "useContext Hook",
                        description: "Kontekst qiymatlarini olish",
                        code: `// ThemeContext yaratish
const ThemeContext = React.createContext();

// Provider komponenti
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Consumer komponenti
function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#333' : '#fff'
            }}
        >
            Current theme: {theme}
        </button>
    );
}`
                    },
                    {
                        id: "useReducer_1",
                        name: "useReducer Hook",
                        description: "Murakkab holatlarni boshqarish",
                        code: `function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Date.now(),
                text: action.payload,
                completed: false
            }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: input });
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                            onClick={() => dispatch({
                                type: 'TOGGLE_TODO',
                                payload: todo.id
                            })}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({
                            type: 'DELETE_TODO',
                            payload: todo.id
                        })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}`
                    },
                    {
                        id: "useMemo_1",
                        name: "useMemo Hook",
                        description: "Qimmat hisob-kitoblarni keshlashtirish",
                        code: `function ExpensiveCalculation({ numbers }) {
    const [count, setCount] = useState(0);

    const expensiveSum = useMemo(() => {
        console.log('Calculating sum...');
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }, [numbers]);

    return (
        <div>
            <p>Sum: {expensiveSum}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>
                Increment Count
            </button>
        </div>
    );
}`
                    },
                    {
                        id: "useCallback_1",
                        name: "useCallback Hook",
                        description: "Funksiyalarni keshlashtirish",
                        code: `function ParentComponent() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(() => {
        setTodos(prev => [...prev, "New Todo"]);
    }, []);

    return (
        <div>
            <ChildComponent todos={todos} addTodo={addTodo} />
            <div>
                Count: {count}
                <button onClick={() => setCount(c => c + 1)}>
                    Increment
                </button>
            </div>
        </div>
    );
}

const ChildComponent = memo(({ todos, addTodo }) => {
    console.log("Child component render");
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
});`
                    }
                ]
            },
            customHooks: {
                id: "custom_hooks_1",
                title: "Custom Hooklar",
                examples: [
                    {
                        id: "custom_hook_1",
                        name: "useLocalStorage Hook",
                        description: "LocalStorage bilan ishlash uchun custom hook",
                        code: `function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// Hook ishlatilishi
function App() {
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    );
}`
                    },
                    {
                        id: "custom_hook_2",
                        name: "useFetch Hook",
                        description: "Ma'lumotlarni olish uchun custom hook",
                        code: `function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
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
}

// Hook ishlatilishi
function UserProfile() {
    const { data, loading, error } = useFetch('https://api.example.com/user');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
        </div>
    );
}`
                    },
                    {
                        id: "custom_hook_3",
                        name: "useWindowSize Hook",
                        description: "Oyna o'lchamlarini kuzatish uchun hook",
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
}

// Hook ishlatilishi
function ResponsiveComponent() {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h1>Window Size:</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
            {width < 768 ? (
                <p>Mobile View</p>
            ) : (
                <p>Desktop View</p>
            )}
        </div>
    );
}`
                    }
                ]
            }
        }
    }
];

export default dataHooksAsoslar;
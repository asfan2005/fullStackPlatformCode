const dataAdvancedHooksOrta = [
    {
        id: 1,
        title: "React Advanced Hooks",
        level: "O'rta",
        description: "React ilg'or darajadagi hook'lar va ularning amaliy qo'llanilishi",
        image: "https://miro.medium.com/v2/resize:fit:900/1*3d0jsQppieVP5XL6KGK6YA.png",
        mainTopics: {
            introduction: {
                title: "Advanced Hooks Asoslari",
                points: [
                    "useReducer hook",
                    "useContext hook",
                    "useRef hook",
                    "useImperativeHandle hook",
                    "useLayoutEffect hook",
                    "useDebugValue hook",
                    "Custom Hooks yaratish"
                ]
            },
            codeExamples: {
                title: "Advanced Hooks Namunalari",
                components: [
                    {
                        name: "1. useReducer - Murakkab State Boshqaruvi",
                        description: "Murakkab holatlarni boshqarish uchun reducer pattern",
                        code: `
import React, { useReducer } from 'react';

// Action types
const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

// Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, {
                id: Date.now(),
                text: action.payload.text,
                complete: false
            }];
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};

export const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { text } });
        setText('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button type="submit">Qo'shish</button>
            </form>
            {todos.map(todo => (
                <div key={todo.id}>
                    <span style={{ 
                        textDecoration: todo.complete ? 'line-through' : 'none' 
                    }}>
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id }
                    })}>
                        Toggle
                    </button>
                    <button onClick={() => dispatch({
                        type: ACTIONS.DELETE_TODO,
                        payload: { id: todo.id }
                    })}>
                        O'chirish
                    </button>
                </div>
            ))}
        </div>
    );
}`
                    },
                    {
                        name: "2. useContext - Global State Management",
                        description: "Komponentlar orasida ma'lumotlarni global tarzda uzatish",
                        code: `
import React, { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();
const UserContext = createContext();

// Custom hook for theme
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// Custom hook for user
const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
};

// Providers
export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};

// Consumer Components
export const Header = () => {
    const { theme, setTheme } = useTheme();
    const { user } = useUser();

    return (
        <header className={theme}>
            <h1>Salom, {user ? user.name : 'Mehmon'}</h1>
            <button onClick={() => setTheme(
                theme === 'light' ? 'dark' : 'light'
            )}>
                Temani o'zgartirish
            </button>
        </header>
    );
};`
                    },
                    {
                        name: "3. useRef va useImperativeHandle",
                        description: "DOM elementlariga to'g'ridan-to'g'ri murojaat va murakkab ref logikasi",
                        code: `
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = '';
        },
        getValue: () => {
            return inputRef.current.value;
        }
    }));

    return <input ref={inputRef} {...props} />;
});

export const FormWithRefs = () => {
    const inputRef = useRef();

    const handleClick = () => {
        // Custom metodlarni chaqirish
        inputRef.current.focus();
        console.log(inputRef.current.getValue());
    };

    const handleClear = () => {
        inputRef.current.clear();
    };

    return (
        <div>
            <CustomInput ref={inputRef} placeholder="Matn kiriting..." />
            <button onClick={handleClick}>Focus & Log</button>
            <button onClick={handleClear}>Tozalash</button>
        </div>
    );
};`
                    },
                    {
                        name: "4. useLayoutEffect - DOM Manipulation",
                        description: "DOM o'zgarishlarini sinxron tarzda amalga oshirish",
                        code: `
import React, { useState, useLayoutEffect, useRef } from 'react';

export const Tooltip = ({ text, children }) => {
    const [tooltipHeight, setTooltipHeight] = useState(0);
    const tooltipRef = useRef();

    useLayoutEffect(() => {
        const height = tooltipRef.current.getBoundingClientRect().height;
        setTooltipHeight(height);
        
        // DOM elementini pozitsiyasini hisoblash
        tooltipRef.current.style.top = \`-\${height + 10}px\`;
    }, [text]);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {children}
            <div
                ref={tooltipRef}
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '4px',
                    visibility: tooltipHeight ? 'visible' : 'hidden'
                }}
            >
                {text}
            </div>
        </div>
    );
};`
                    },
                    {
                        name: "5. Custom Hooks - Kengaytirilgan Hook'lar",
                        description: "O'z hook'laringizni yaratish va ulardan foydalanish",
                        code: `
import { useState, useEffect, useCallback } from 'react';

// Custom fetch hook
const useFetch = (url) => {
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
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

// Custom form hook
const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback((onSubmit) => {
        return async (e) => {
            e.preventDefault();
            await onSubmit(values);
        };
    }, [values]);

    return { values, errors, handleChange, handleSubmit };
};

// Custom local storage hook
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? 
                value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

// Example usage
export const UserProfile = () => {
    const { data, loading } = useFetch('https://api.example.com/user');
    const { values, handleChange, handleSubmit } = useForm({
        name: '',
        email: ''
    });
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    if (loading) return <div>Yuklanmoqda...</div>;

    return (
        <div>
            <form onSubmit={handleSubmit(async (values) => {
                // Form submission logic
                console.log(values);
            })}>
                <input
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <button type="submit">Saqlash</button>
            </form>
        </div>
    );
};`
                    }
                ],
                features: [
                    "useReducer - murakkab holatlarni boshqarish",
                    "useContext - global state management",
                    "useRef - DOM elementlariga murojaat",
                    "useImperativeHandle - ref logikasini sozlash",
                    "useLayoutEffect - DOM sinxron o'zgarishlar",
                    "Custom Hooks - maxsus hook'lar yaratish",
                    "Hook'larni kombinatsiyalash"
                ]
            }
        }
    },
    {
        id: 2,
        title: "React Asosiy Misollar",
        level: "Boshlang'ich",
        description: "React bilan ishlashning oddiy va tushunarli misollari",
        image: "https://example.com/react-basics.png",
        mainTopics: {
            introduction: {
                title: "Asosiy Tushunchalar",
                points: [
                    "useState hook",
                    "Props tushunchasi",
                    "Event handling",
                    "Ro'yxatlar bilan ishlash",
                    "Shartli renderlar"
                ]
            },
            codeExamples: {
                title: "Oddiy Misollar",
                components: [
                    {
                        name: "1. Counter - Oddiy Hisoblagich",
                        description: "useState hook yordamida oddiy hisoblagich yaratish",
                        code: `
import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Hisoblagich: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Qo'shish
            </button>
            <button onClick={() => setCount(count - 1)}>
                Ayirish
            </button>
            <button onClick={() => setCount(0)}>
                Nolga qaytarish
            </button>
        </div>
    );
};`
                    },
                    {
                        name: "2. To'do List - Oddiy Vazifalar Ro'yxati",
                        description: "Oddiy vazifalar ro'yxatini yaratish",
                        code: `
import React, { useState } from 'react';

export const SimpleToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <h2>Vazifalar Ro'yxati</h2>
            <div>
                <input 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Yangi vazifa..."
                />
                <button onClick={addTask}>Qo'shish</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>
                            O'chirish
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};`
                    },
                    {
                        name: "3. Form - Oddiy Shakl",
                        description: "Forma ma'lumotlarini boshqarish",
                        code: `
import React, { useState } from 'react';

export const SimpleForm = () => {
    const [formData, setFormData] = useState({
        ism: '',
        email: '',
        xabar: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Yuborilgan malumotlar:', formData);
        // Bu yerda forma ma'lumotlarini yuborish mantiqini yozish mumkin
        alert('Forma yuborildi!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ism:</label>
                <input
                    type="text"
                    name="ism"
                    value={formData.ism}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Xabar:</label>
                <textarea
                    name="xabar"
                    value={formData.xabar}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Yuborish</button>
        </form>
    );
};`
                    }
                ],
                features: [
                    "useState bilan ishlash",
                    "Formalar bilan ishlash",
                    "Ro'yxatlar bilan ishlash",
                    "Event Handling",
                    "Ma'lumotlarni saqlash",
                    "Oddiy CRUD operatsiyalari"
                ]
            }
        }
    }
];

export default dataAdvancedHooksOrta;
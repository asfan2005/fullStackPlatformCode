const reactStateManagementArchitectureData = {
    title: "React State Management Architecture",
    url: "react-state-management-architecture",
    tutorials: [
        {
            id: 1,
            title: "useState Hook Pattern",
            url: "usestate-pattern",
            content: [
                {
                    title: "useState Hook nima?",
                    text: "useState - bu React'da eng sodda state boshqarish usuli bo'lib, komponent ichida lokal holatni boshqarish uchun ishlatiladi."
                },
                {
                    title: "To'liq Misol",
                    code: `
const TodoApp = () => {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState('');
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input.trim() }]);
            setInput('');
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") addTodo();
    };

    return {
        <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Add todo"
                style={{ padding: '5px', width: '80%', marginRight: '5px' }}
            />
            <button onClick={addTodo} style={{ padding: '5px' }}>Add</button>
            <ul style={{ marginTop: '10px', paddingLeft: '0' }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ listStyle: 'none', marginBottom: '5px' }}>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '10px' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
};
};`
                }
            ]
        },
        {
            id: 2,
            title: "Context API Pattern",
            url: "context-api",
            content: [
                {
                    title: "Context API nima?",
                    text: "Context API - bu React'da prop drilling muammosini hal qilish va global state'ni boshqarish uchun ishlatiladi."
                },
                {
                    title: "To'liq Misol",
                    code: `
// Theme context yaratish
const ThemeContext = React.createContext();

// Theme provider komponenti
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return{
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
};
};

// Foydalanuvchi komponenti
const ThemedButton = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    
    return {
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#333' : '#fff',
                padding: '10px',
                border: '1px solid #ccc'
            }}
        >
            Current theme: {theme}
        </button>
};
};`
                }
            ]
        },
        {
            id: 3,
            title: "Redux Pattern",
            url: "redux-pattern",
            content: [
                {
                    title: "Redux nima?",
                    text: "Redux - bu katta React ilovalar uchun state management kutubxonasi bo'lib, markazlashtirilgan state boshqaruvini ta'minlaydi."
                },
                {
                    title: "To'liq Misol",
                    code: `
const todoSlice = {
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, {
                id: Date.now(),
                text: action.payload,
                completed: false
            }];
        },
        toggleTodo: (state, action) => {
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
};`
                }
            ]
        },
        {
            id: 4,
            title: "Zustand Pattern",
            url: "zustand-pattern",
            content: [
                {
                    title: "Zustand nima?",
                    text: "Zustand - bu Redux'ga alternative bo'lgan, sodda va yengil state management kutubxonasi."
                },
                {
                    title: "To'liq Misol",
                    code: `
const createStore = (initialState = {}) => {
    let state = initialState;
    const listeners = new Set();

    const setState = (partial) => {
        state = typeof partial === 'function' ? partial(state) : partial;
        listeners.forEach(listener => listener(state));
    };

    return {
        getState: () => state,
        setState,
        subscribe: (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        }
    };
};

const todoStore = createStore({
    todos: [],
    addTodo: (text) => todoStore.setState(state => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),
    toggleTodo: (id) => todoStore.setState(state => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    removeTodo: (id) => todoStore.setState(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
    }))
});`
                }
            ]
        },
        {
            id: 5,
            title: "Recoil Pattern",
            url: "recoil-pattern",
            content: [
                {
                    title: "Recoil nima?",
                    text: "Recoil - bu Facebook tomonidan yaratilgan React uchun state management kutubxonasi bo'lib, atom va selector konsepsiyalariga asoslangan."
                },
                {
                    title: "To'liq Misol",
                    code: `
const todosAtom = {
    key: 'todosAtom',
    default: []
};

const filterAtom = {
    key: 'filterAtom',
    default: 'all'
};

const filteredTodosSelector = {
    key: 'filteredTodosSelector',
    get: ({get}) => {
        const filter = get(filterAtom);
        const todos = get(todosAtom);

        switch (filter) {
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'active':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    }
};`
                }
            ]
        },
        {
            id: 6,
            title: "Custom Hook Pattern",
            url: "custom-hook-pattern",
            content: [
                {
                    title: "Custom Hook nima?",
                    text: "Custom Hook - bu React'da state logikasini qayta ishlatish uchun mo'ljallangan maxsus hook pattern."
                },
                {
                    title: "To'liq Misol",
                    code: `
// Custom hook yaratish
const useCounter = (initialValue = 0) => {
    const [count, setCount] = React.useState(initialValue);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
};

// Counter komponenti
const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return {
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
};
};`
                }
            ]
        },
        {
            id: 7,
            title: "useReducer Pattern",
            url: "usereducer-pattern",
            content: [
                {
                    title: "useReducer nima?",
                    text: "useReducer - bu murakkab state logikasi uchun useState'ning alternative hook'i hisoblanadi."
                },
                {
                    title: "To'liq Misol",
                    code: `
const initialState = {
    tasks: [],
    loading: false,
    error: null
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                )
            };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const TaskManager = () => {
    const [state, dispatch] = React.useReducer(taskReducer, initialState);
    
    const addTask = (text) => {
        dispatch({ type: 'ADD_TASK', payload: text });
    };
    
    const toggleTask = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };
    
    return {
        <div className="task-manager">
            <input 
                type="text" 
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        addTask(e.target.value);
                        e.target.value = '';
                    }
                }}
                placeholder="Add new task"
            />
            {state.loading && <div>Loading...</div>}
            {state.error && <div style={{color: 'red'}}>{state.error}</div>}
            <ul>
                {state.tasks.map(task => (
                    <li 
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
};
};`
                }
            ]
        }
    ]
};

export { reactStateManagementArchitectureData };
export default reactStateManagementArchitectureData;
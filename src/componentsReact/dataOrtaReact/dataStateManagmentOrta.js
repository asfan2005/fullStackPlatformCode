const dataStateManagementOrta = [
    {
        id: 1,
        title: "React State Management",
        description: "React ilovalarida holatni boshqarish usullari va zamonaviy yondashuvlar",
        image: "https://fe-tool.com/img/react-state/redux.jpeg",
        mainTopics: {
            introduction: {
                title: "State Management Asoslari",
                points: [
                    "useState va useReducer hooks",
                    "Context API",
                    "Redux asoslari",
                    "Redux Toolkit",
                    "Zustand",
                    "Recoil",
                    "Jotai"
                ]
            },
            codeExamples: {
                title: "State Management Namunalari",
                components: [
                    {
                        name: "1. useState va useReducer",
                        description: "React hooks yordamida holatni boshqarish",
                        code: `
import React, { useState, useReducer } from 'react';

// useState Example
const CounterWithState = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h3>Counter with useState</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Oshirish</button>
            <button onClick={() => setCount(count - 1)}>Kamaytirish</button>
        </div>
    );
};

// useReducer Example
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <h3>Counter with useReducer</h3>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Oshirish
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Kamaytirish
            </button>
        </div>
    );
};`
                    },
                    {
                        name: "2. Context API",
                        description: "React Context API orqali global holatni boshqarish",
                        code: `
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

const UserProfile = () => {
    const { user, logout } = useContext(UserContext);

    if (!user) return <div>Tizimga kiring</div>;

    return (
        <div>
            <h3>Foydalanuvchi Profili</h3>
            <p>Ism: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={logout}>Chiqish</button>
        </div>
    );
};`
                    },
                    {
                        name: "3. Redux Toolkit",
                        description: "Redux Toolkit yordamida holatni boshqarish",
                        code: `
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Slice yaratish
const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

// Store yaratish
const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
});

// Actions
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// React component
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Vazifalar Ro'yxati</h3>
            {todos.map(todo => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <span style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}>
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>
                        O'chirish
                    </button>
                </div>
            ))}
        </div>
    );
};`
                    },
                    {
                        name: "4. Zustand",
                        description: "Zustand kutubxonasi bilan holatni boshqarish",
                        code: `
import create from 'zustand';

// Store yaratish
const useStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { id: Date.now(), text: task, completed: false }]
    })),
    toggleTask: (taskId) => set((state) => ({
        tasks: state.tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        )
    })),
    removeTask: (taskId) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== taskId)
    }))
}));

// React component
const TaskManager = () => {
    const { tasks, addTask, toggleTask, removeTask } = useStore();
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Yangi vazifa"
                />
                <button type="submit">Qo'shish</button>
            </form>

            <div>
                {tasks.map(task => (
                    <div key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span>{task.text}</span>
                        <button onClick={() => removeTask(task.id)}>
                            O'chirish
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};`
                    },
                    {
                        name: "5. Recoil Example",
                        description: "Recoil bilan atom-based state management",
                        code: `
import { atom, useRecoilState, RecoilRoot } from 'recoil';

// Atom definition
const todoListState = atom({
    key: 'todoListState',
    default: []
});

const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoListState);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Yangi vazifa"
            />
            <button onClick={() => {
                if (newTodo.trim()) {
                    addTodo(newTodo);
                    setNewTodo('');
                }
            }}>Qo'shish</button>

            {todos.map(todo => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                </div>
            ))}
        </div>
    );
};

// Root component
const App = () => (
    <RecoilRoot>
        <TodoList />
    </RecoilRoot>
);`
                    },
                    {
                        name: "6. Jotai Example",
                        description: "Jotai bilan atomic state management",
                        code: `
import { atom, useAtom } from 'jotai';

// Atom definitions
const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

const Counter = () => {
    const [count, setCount] = useAtom(countAtom);
    const [doubleCount] = useAtom(doubleCountAtom);

    return (
        <div>
            <h3>Jotai Counter</h3>
            <p>Count: {count}</p>
            <p>Double Count: {doubleCount}</p>
            <button onClick={() => setCount(c => c + 1)}>Oshirish</button>
            <button onClick={() => setCount(c => c - 1)}>Kamaytirish</button>
        </div>
    );
};`
                    },
                    {
                        name: "7. Performance Optimization",
                        description: "React state bilan ishlashda optimizatsiya usullari",
                        code: `
import React, { useMemo, useCallback, memo } from 'react';

const ExpensiveComponent = memo(({ data, onItemClick }) => {
    return (
        <div>
            {data.map(item => (
                <div key={item.id} onClick={() => onItemClick(item.id)}>
                    {item.text}
                </div>
            ))}
        </div>
    );
});

const OptimizedApp = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');

    // Memorized data filtering
    const filteredItems = useMemo(() => {
        return items.filter(item => 
            item.text.toLowerCase().includes(filter.toLowerCase())
        );
    }, [items, filter]);

    // Memorized callback
    const handleItemClick = useCallback((id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    }, []);

    return (
        <div>
            <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter items..."
            />
            <ExpensiveComponent
                data={filteredItems}
                onItemClick={handleItemClick}
            />
        </div>
    );
};`
                    },
                    {
                        name: "8. State Persistence",
                        description: "Holatni saqlash va qayta tiklash",
                        code: `
import { useState, useEffect } from 'react';

// Custom hook for persistent state
const usePersistentState = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }, [key, state]);

    return [state, setState];
};

// Example usage
const PersistentTodoList = () => {
    const [todos, setTodos] = usePersistentState('todos', []);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Yangi vazifa"
            />
            <button onClick={() => {
                if (newTodo.trim()) {
                    addTodo(newTodo);
                    setNewTodo('');
                }
            }}>Qo'shish</button>

            {todos.map(todo => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                </div>
            ))}
        </div>
    );
};`
                    }
                ],
                features: [
                    "Local State - useState va useReducer",
                    "Global State - Context API",
                    "Complex State - Redux Toolkit",
                    "Simple State - Zustand",
                    "Atomic State - Recoil/Jotai",
                    "Performance Optimization",
                    "State Persistence"
                ],
                bestPractices: {
                    title: "Best Practices",
                    practices: [
                        {
                            name: "State Colocation",
                            description: "Holatni komponenta yaqinroq saqlash",
                            example: `
// Yaxshi
const TodoItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    return (/* ... */);
};

// Yomon
const TodoList = () => {
    const [editingId, setEditingId] = useState(null);
    return (/* ... */);
};`
                        },
                        {
                            name: "State Lifting",
                            description: "Holatni yuqoriga ko'tarish",
                            example: `
const Parent = () => {
    const [shared, setShared] = useState(null);
    return (
        <>
            <ChildA shared={shared} setShared={setShared} />
            <ChildB shared={shared} />
        </>
    );
};`
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "Redux Toolkit Documentation",
                        url: "https://redux-toolkit.js.org/"
                    },
                    {
                        name: "Zustand Documentation",
                        url: "https://github.com/pmndrs/zustand"
                    },
                    {
                        name: "Recoil Documentation",
                        url: "https://recoiljs.org/"
                    },
                    {
                        name: "Jotai Documentation",
                        url: "https://jotai.org/"
                    }
                ]
            }
        }
    }
];

export default dataStateManagementOrta;
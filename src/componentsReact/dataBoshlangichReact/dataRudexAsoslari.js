const dataReduxAsoslari = [
    {
        id: 1,
        title: "Redux Asoslari",
        level: "Boshlang'ich",
        description: "Redux - React ilovalar uchun state management kutubxonasi",
        image: "https://redux.js.org/img/redux-logo-landscape.png",
        mainTopics: {
            introduction: {
                title: "Redux Asoslari",
                points: [
                    "Redux - predictable state container",
                    "Markazlashgan state management",
                    "Single source of truth prinsipi",
                    "Immutable state updates",
                    "Redux DevTools bilan debugging",
                    "State management muammolarini yechish",
                    "Redux arxitekturasi",
                    "Redux qachon ishlatiladi?",
                    "Redux alternatives"
                ]
            },
            coreConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "Store",
                        description: "Ilovaning global state'ini saqlash",
                        example: `
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
});

export default store;`
                    },
                    {
                        name: "Actions",
                        description: "State o'zgarishini tasvirlovchi obyektlar",
                        example: `
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`
                    },
                    {
                        name: "Todo List Example",
                        description: "To'liq todo list namunasi",
                        example: `
// features/todos/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(item => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});`
                    }
                ]
            },
            reduxToolkit: {
                title: "Redux Toolkit",
                features: [
                    {
                        name: "createSlice",
                        description: "Slice yaratish",
                        example: `
// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setCredentials, logout, setError } = authSlice.actions;
export default authSlice.reducer;`
                    },
                    {
                        name: "RTK Query",
                        description: "API so'rovlarini boshqarish",
                        example: `
// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.example.com' 
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getProduct: builder.query({
            query: (id) => \`products/\${id}\`
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: 'products',
                method: 'POST',
                body: product
            })
        })
    })
});

export const { 
    useGetProductsQuery, 
    useGetProductQuery,
    useAddProductMutation 
} = api;`
                    }
                ]
            },
            practicalUsage: {
                title: "Amaliy Qo'llash",
                examples: [
                    {
                        name: "Counter Component",
                        code: `
// components/Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}`
                    },
                    {
                        name: "Todo List Component",
                        code: `
// components/TodoList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todos.items);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Yangi vazifa..."
                />
                <button type="submit">Qo'shish</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
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
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            O'chirish
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    "Redux Toolkit ishlatish",
                    "Slice'larni feature bo'yicha ajratish",
                    "Selektorlarni memoization qilish",
                    "TypeScript bilan ishlash",
                    "Redux DevTools'ni sozlash",
                    "Immutability'ni ta'minlash",
                    "Action type'larni constants sifatida saqlash",
                    "Middleware'lardan to'g'ri foydalanish",
                    "State normalization",
                    "Redux logger sozlash",
                    "Error handling",
                    "Testing strategies",
                    "Performance optimization",
                    "Code splitting"
                ],
                examples: [
                    {
                        name: "Redux Logger Sozlash",
                        description: "Redux logger middleware'ni o'rnatish va sozlash",
                        code: `
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;`
                    },
                    {
                        name: "Error Handling",
                        description: "Redux'da xatolarni boshqarish",
                        code: `
// features/errorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        error: null
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;

// components/ErrorBoundary.jsx
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../features/errorSlice';

function ErrorBoundary({ children }) {
    const error = useSelector(state => state.error.error);
    const dispatch = useDispatch();

    if (error) {
        return (
            <div className="error-container">
                <h3>Xatolik yuz berdi!</h3>
                <p>{error}</p>
                <button onClick={() => dispatch(clearError())}>
                    Yopish
                </button>
            </div>
        );
    }

    return children;
}`
                    }
                ]
            }
        }
    }
];

export default dataReduxAsoslari;
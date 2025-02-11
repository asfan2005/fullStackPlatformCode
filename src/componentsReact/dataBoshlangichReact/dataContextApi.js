const dataContextApi = [
    {
        id: 1,
        title: "React Context API",
        level: "Boshlang'ich",
        description: "React Context API - global state management tizimi",
        image: "https://v1.scrimba.com/articles/content/images/2023/02/Prop-Drilling-versus-Context-API-4.png",
        mainTopics: {
            introduction: {
                title: "Context API Asoslari",
                points: [
                    "Context API - React'da global state boshqarish usuli",
                    "Props Drilling muammosini hal qilish",
                    "Redux o'rniga yengil alternative",
                    "Kichik va o'rta proyektlar uchun qulay",
                    "Built-in React xususiyati"
                ]
            },
            basicConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "Context yaratish",
                        description: "createContext va default qiymat berish",
                        example: `
// store/UserContext.js
import { createContext } from 'react';

// Default qiymat berish
export const UserContext = createContext({
    user: null,
    setUser: () => {},
    isAuth: false
});`
                    },
                    {
                        name: "Context Provider",
                        description: "State va metodlarni ta'minlash",
                        example: `
// providers/UserProvider.jsx
import { useState } from 'react';
import { UserContext } from '../store/UserContext';

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    
    const login = (userData) => {
        setUser(userData);
        setIsAuth(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuth(false);
    };
    
    const value = {
        user,
        isAuth,
        login,
        logout
    };
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}`
                    }
                ]
            },
            contextUsage: {
                title: "Context'dan Foydalanish",
                components: [
                    {
                        name: "Custom Hook yaratish",
                        description: "Context'ni ishlatish uchun maxsus hook",
                        example: `
// hooks/useUser.js
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
}`
                    },
                    {
                        name: "Context'ni komponetda ishlatish",
                        description: "Hook orqali ma'lumotlarni olish",
                        example: `
// components/Profile.jsx
import { useUser } from '../hooks/useUser';

export function Profile() {
    const { user, logout } = useUser();
    
    if (!user) return <div>Please login</div>;
    
    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <button onClick={logout}>Chiqish</button>
        </div>
    );
}`
                    }
                ]
            },
            advancedPatterns: {
                title: "Kengaytirilgan Patterns",
                patterns: [
                    {
                        name: "Multiple Context",
                        description: "Bir nechta context'larni birlashtirish",
                        example: `
// providers/AppProvider.jsx
export function AppProvider({ children }) {
    return (
        <ThemeProvider>
            <UserProvider>
                <SettingsProvider>
                    {children}
                </SettingsProvider>
            </UserProvider>
        </ThemeProvider>
    );
}`
                    },
                    {
                        name: "Context bilan Reducer",
                        description: "Murakkab state'lar uchun reducer pattern",
                        example: `
// store/UserReducer.js
const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isAuth: true
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuth: false
            };
        default:
            return state;
    }
};

// providers/UserProvider.jsx
export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, {
        user: null,
        isAuth: false
    });
    
    const value = {
        ...state,
        dispatch
    };
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}`
                    },
                    {
                        name: "Context Performance Optimization",
                        description: "Context'ni optimallash usullari",
                        example: `
// optimized-context/PerformantContext.jsx
import { createContext, useContext, useMemo } from 'react';

const PerformanceContext = createContext(null);

export function PerformanceProvider({ children }) {
    const [state, setState] = useState({ count: 0, data: [] });
    
    // Value memoization
    const value = useMemo(() => ({
        state,
        increment: () => setState(prev => ({ 
            ...prev, 
            count: prev.count + 1 
        })),
        addData: (item) => setState(prev => ({
            ...prev,
            data: [...prev.data, item]
        }))
    }), [state]);

    return (
        <PerformanceContext.Provider value={value}>
            {children}
        </PerformanceContext.Provider>
    );
}`
                    }
                ]
            }
        },
        practicalExamples: {
            title: "Amaliy Misollar",
            examples: [
                {
                    name: "Theme Switcher",
                    code: `
// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
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

export function useTheme() {
    return useContext(ThemeContext);
}`
                },
                {
                    name: "Authentication Context",
                    code: `
// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    const login = (userData) => {
        setUser(userData);
    };
    
    const logout = () => {
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}`
                },
                {
                    name: "Shopping Cart Context",
                    code: `
// CartContext.js
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };
            
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
            
        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };
            
        default:
            return state;
    }
};

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });
    
    const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = (itemId) => dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });
    
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    const value = {
        items: state.items,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice
    };
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}`
                },
                {
                    name: "Form Context with Validation",
                    code: `
// FormContext.js
import { createContext, useContext, useState, useCallback } from 'react';

const FormContext = createContext(null);

export function FormProvider({ children, initialValues = {} }) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = useCallback((name, value) => {
        let error = '';
        switch (name) {
            case 'email':
                if (!value) error = 'Email majburiy';
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    error = 'Noto'g'ri email format';
                }
                break;
            case 'password':
                if (!value) error = 'Parol majburiy';
                else if (value.length < 6) {
                    error = 'Parol kamida 6 ta belgidan iborat bo'lishi kerak';
                }
                break;
            default:
                if (!value) error = 'Bu maydon majburiy';
        }
        return error;
    }, []);

    const handleChange = useCallback((name, value) => {
        setValues(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }, [validateField]);

    const handleBlur = useCallback((name) => {
        setTouched(prev => ({ ...prev, [name]: true }));
    }, []);

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [initialValues]);

    const value = {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        resetForm
    };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

export function useForm() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within FormProvider');
    }
    return context;
}`
                }
            ]
        },
        bestPractices: {
            title: "Eng Yaxshi Amaliyotlar",
            practices: [
                "Har bir context uchun alohida file yaratish",
                "Custom hook'lar orqali context'ga murojaat qilish",
                "Context Provider'larni ierarxiya bo'yicha to'g'ri joylashtirish",
                "useMemo va useCallback bilan optimization qilish",
                "TypeScript bilan type'larni to'g'ri sozlash",
                "Error handling qo'shish",
                "Context qiymatlarini memoization qilish",
                "Provider'larni kompozitsiya qilish",
                "Test'lar yozish",
                "Context value'larni useMemo bilan optimize qilish",
                "Katta state'lar uchun useReducer ishlatish",
                "Context'larni modullar bo'yicha ajratish",
                "Performance monitoring tools ishlatish",
                "Deeply nested provider'lardan qochish"
            ]
        }
    }
];

export default dataContextApi;
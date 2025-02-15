const dataReactContentApi = [
    {
        id: 1,
        title: "React Context API",
        description: "React ilovalarida global state boshqarish va props drilling muammosini hal qilish usuli",
        image: "https://raw.githubusercontent.com/facebook/react/main/fixtures/art/react-logo-primary.png",
        mainTopics: {
            introduction: {
                title: "Context API Asoslari",
                points: [
                    "Context API nima",
                    "Qachon ishlatish kerak",
                    "Context vs Props Drilling",
                    "Context Provider va Consumer",
                    "useContext hook",
                    "Context bilan ishlash usullari"
                ],
                examples: [
                    {
                        title: "Context yaratish",
                        description: "React Context yaratish va undan foydalanish",
                        code: `
// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};`
                    },
                    {
                        title: "useContext bilan ishlash",
                        description: "Context ma'lumotlarini komponentlarda ishlatish",
                        code: `
// ThemedButton.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#333' : '#fff'
            }}
        >
            Temani o'zgartirish
        </button>
    );
};`
                    }
                ]
            },
            codeExamples: {
                title: "Context API Namunalari",
                components: [
                    {
                        name: "1. Global State Management",
                        description: "Context yordamida global state boshqarish",
                        code: `
// AppState.js
import React, { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
    preferences: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        case 'UPDATE_PREFERENCES':
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

export function AppStateProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
}

export function useAppState() {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error('useAppState must be used within AppStateProvider');
    }
    return context;
}`
                    },
                    {
                        name: "2. Multiple Contexts",
                        description: "Bir nechta Context-lardan foydalanish",
                        code: `
// MultipleContexts.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const ThemeContext = createContext();
const LanguageContext = createContext();

export function AppProvider({ children }) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('uz');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <LanguageContext.Provider value={{ language, setLanguage }}>
                    {children}
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

// Custom hooks for each context
export const useUser = () => useContext(UserContext);
export const useTheme = () => useContext(ThemeContext);
export const useLanguage = () => useContext(LanguageContext);`
                    },
                    {
                        name: "3. Context with TypeScript",
                        description: "TypeScript bilan Context yaratish",
                        code: `
// TypedContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
}`
                    }
                ],
                features: [
                    {
                        title: "Context API Xususiyatlari",
                        description: "Asosiy xususiyatlar va funksiyalar",
                        details: [
                            "Global state management",
                            "Props drilling oldini olish",
                            "Dynamic context updates",
                            "Nested providers",
                            "Performance optimization"
                        ]
                    }
                ],
                bestPractices: {
                    title: "Context API Best Practices",
                    practices: [
                        {
                            name: "Optimal foydalanish",
                            tips: [
                                "Context-ni kerakli joylardagina ishlatish",
                                "Kichik state-lar uchun props ishlatish",
                                "Context-larni modullar bo'yicha ajratish",
                                "Performance optimizatsiyasi",
                                "TypeScript bilan ishlash"
                            ]
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Context Documentation",
                        url: "https://reactjs.org/docs/context.html"
                    },
                    {
                        name: "Advanced Context Patterns",
                        url: "https://kentcdodds.com/blog/how-to-use-react-context-effectively"
                    }
                ]
            }
        }
    }
];

export default dataReactContentApi;
const dataReactContentApi = [
    {
        id: 1,
        title: "React Context API",
        description: "React ilovalarida global state boshqarish va props drilling muammosini hal qilish usuli",
        image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcp1yfm15dbc523p9613b.png",
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
                    },
                    {
                        name: "4. API Context with Fetch",
                        description: "Context yordamida API so'rovlarini boshqarish",
                        code: `
// ApiContext.js
import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url, options = {}) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const api = {
        // GET so'rovi
        get: (url) => fetchData(url),

        // POST so'rovi
        post: (url, data) => fetchData(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }),

        // PUT so'rovi
        put: (url, data) => fetchData(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }),

        // DELETE so'rovi
        delete: (url) => fetchData(url, { method: 'DELETE' })
    };

    return (
        <ApiContext.Provider value={{ api, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext);`
                    },
                    {
                        name: "5. API Usage Example",
                        description: "API Context-dan foydalanish namunasi",
                        code: `
// UserManager.js
import React from 'react';
import { useApi } from './ApiContext';

function UserManager() {
    const { api, loading, error } = useApi();
    const [users, setUsers] = useState([]);

    // Foydalanuvchilarni olish
    const fetchUsers = async () => {
        try {
            const data = await api.get('https://api.example.com/users');
            setUsers(data);
        } catch (err) {
            console.error('Failed to fetch users:', err);
        }
    };

    // Yangi foydalanuvchi qo'shish
    const addUser = async (userData) => {
        try {
            const newUser = await api.post('https://api.example.com/users', userData);
            setUsers(prev => [...prev, newUser]);
        } catch (err) {
            console.error('Failed to add user:', err);
        }
    };

    // Foydalanuvchini yangilash
    const updateUser = async (id, userData) => {
        try {
            const updatedUser = await api.put(\`https://api.example.com/users/\${id}\`, userData);
            setUsers(prev => prev.map(user => 
                user.id === id ? updatedUser : user
            ));
        } catch (err) {
            console.error('Failed to update user:', err);
        }
    };

    // Foydalanuvchini o'chirish
    const deleteUser = async (id) => {
        try {
            await api.delete(\`https://api.example.com/users/\${id}\`);
            setUsers(prev => prev.filter(user => user.id !== id));
        } catch (err) {
            console.error('Failed to delete user:', err);
        }
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <button onClick={fetchUsers}>Load Users</button>
            {users.map(user => (
                <div key={user.id}>
                    {user.name}
                    <button onClick={() => updateUser(user.id, { ...user, name: 'Updated' })}>
                        Update
                    </button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );`
                    },
                    {
                        name: "6. Advanced API Context with Authentication",
                        description: "Autentifikatsiya bilan API Context",
                        code: `
// AuthApiContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthApiContext = createContext();

export function AuthApiProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api = {
        login: async (credentials) => {
            try {
                setLoading(true);
                const response = await fetch('https://api.example.com/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                });
                
                if (!response.ok) throw new Error('Login failed');
                
                const data = await response.json();
                setToken(data.token);
                localStorage.setItem('token', data.token);
                return data;
            } catch (err) {
                setError(err.message);
                throw err;
            } finally {
                setLoading(false);
            }
        },

        logout: () => {
            setToken(null);
            localStorage.removeItem('token');
        },

        authenticatedRequest: async (url, options = {}) => {
            if (!token) throw new Error('No authentication token');

            try {
                setLoading(true);
                const response = await fetch(url, {
                    ...options,
                    headers: {
                        ...options.headers,
                        'Authorization': \`Bearer \${token}\`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        setToken(null);
                        localStorage.removeItem('token');
                        throw new Error('Token expired');
                    }
                    throw new Error('Request failed');
                }

                return await response.json();
            } catch (err) {
                setError(err.message);
                throw err;
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <AuthApiContext.Provider value={{ api, token, loading, error }}>
            {children}
        </AuthApiContext.Provider>
    );
}

export const useAuthApi = () => useContext(AuthApiContext);`
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
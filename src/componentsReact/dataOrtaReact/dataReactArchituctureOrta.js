const dataReactArchituctureOrta = [
    {
        id: 1,
        title: "React Architecture",
        description: "React ilovalarini tuzishda arxitektura va tuzilish bo'yicha to'liq qo'llanma",
        image: "https://help.hcl-software.com/commerce/9.1.0/storeseparation/images/React_store_architecture.png",
        mainTopics: {
            introduction: {
                title: "React Arxitektura Asoslari",
                points: [
                    "Component Architecture",
                    "Project Structure",
                    "State Management",
                    "Routing Architecture",
                    "Data Flow Patterns",
                    "Code Organization",
                    "Performance Optimization",
                    "Testing Strategy"
                ]
            },
            codeExamples: {
                title: "React Arxitektura Namunalari",
                components: [
                    {
                        name: "1. Project Structure",
                        description: "Loyiha tuzilishi",
                        code: `
// Recommended project structure
src/
  ├── assets/           # Rasmlar, shriftlar, va boshqa statik fayllar
  ├── components/       # Qayta ishlatiladigan komponentlar
  │   ├── common/      # Umumiy komponentlar
  │   ├── layout/      # Layout komponentlari
  │   └── features/    # Feature-specific komponentlar
  ├── hooks/           # Custom React hooks
  ├── pages/           # Sahifa komponentlari
  ├── services/        # API va boshqa servislar
  ├── store/           # State management
  ├── utils/           # Utility funksiyalar
  ├── styles/          # Global styles
  ├── config/          # Configuration files
  └── App.js           # Root component`
                    },
                    {
                        name: "2. Component Architecture",
                        description: "Komponent arxitekturasi",
                        code: `
// components/features/UserProfile/UserProfile.jsx
import React from 'react';
import { UserHeader } from './UserHeader';
import { UserDetails } from './UserDetails';
import { UserActions } from './UserActions';

export const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <UserHeader user={user} />
            <UserDetails user={user} />
            <UserActions user={user} />
        </div>
    );
};

// Atomic Design Pattern
// atoms/Button.jsx
export const Button = ({ children, ...props }) => (
    <button className="btn" {...props}>{children}</button>
);

// molecules/SearchInput.jsx
export const SearchInput = () => (
    <div className="search-input">
        <input type="text" placeholder="Search..." />
        <Button>Search</Button>
    </div>
);`
                    },
                    {
                        name: "3. State Management Architecture",
                        description: "State boshqaruvi arxitekturasi",
                        code: `
// store/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        }
    }
});

// Context API Pattern
// contexts/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};`
                    },
                    {
                        name: "4. Data Flow Architecture",
                        description: "Ma'lumotlar oqimi arxitekturasi",
                        code: `
// services/api.js
const api = {
    async fetchData(endpoint) {
        try {
            const response = await fetch(\`\${BASE_URL}/\${endpoint}\`);
            return response.json();
        } catch (error) {
            throw new Error(\`API Error: \${error.message}\`);
        }
    }
};

// hooks/useData.js
export const useData = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await api.fetchData(endpoint);
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};`
                    },
                    {
                        name: "5. Routing Architecture",
                        description: "Routing arxitekturasi",
                        code: `
// routes/index.js
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <DashboardPage />
                    </PrivateRoute>
                )
            }
        ]
    }
]);`
                    },
                    {
                        name: "6. Performance Optimization",
                        description: "Ishlash tezligini optimizatsiya qilish",
                        code: `
// components/HeavyComponent.jsx
import React, { memo, useMemo } from 'react';

export const HeavyComponent = memo(({ data }) => {
    const processedData = useMemo(() => {
        return expensiveCalculation(data);
    }, [data]);

    return <div>{processedData}</div>;
});

// hooks/useInfiniteScroll.js
export const useInfiniteScroll = (callback) => {
    const observer = useRef();
    
    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                callback();
            }
        });
        
        if (node) observer.current.observe(node);
    }, [callback]);

    return lastElementRef;
};`
                    },
                    {
                        name: "7. Error Boundary Pattern",
                        description: "Xatolarni boshqarish pattern",
                        code: `
// components/ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        logErrorToService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}`
                    },
                    {
                        name: "8. Testing Architecture",
                        description: "Testlash arxitekturasi",
                        code: `
// __tests__/components/Button.test.jsx
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button Component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Button onClick={handleClick}>Click me</Button>
        );
        
        fireEvent.click(getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});`
                    }
                ],
                features: [
                    {
                        title: "Scalable Project Structure",
                        description: "Kengaytiriladigan loyiha tuzilishi",
                        details: [
                            "Modullar asosida tashkil etilgan papkalar tuzilishi",
                            "Feature-based arxitektura yondashuvi",
                            "Atomic Design printsiplari asosida komponentlarni tashkil etish",
                            "Shared utilities va helper funksiyalarni alohida ajratish",
                            "Environment konfiguratsiyalarini markazlashtirish"
                        ],
                        importance: "Loyihaning o'sishi bilan uni samarali boshqarish va kengaytirish imkonini beradi"
                    },
                    {
                        title: "Component Composition",
                        description: "Komponentlarni kompozitsiya qilish",
                        details: [
                            "Kichik, qayta ishlatiluvchi komponentlar yaratish",
                            "Higher-Order Components (HOC) dan foydalanish",
                            "Render props pattern qo'llash",
                            "Custom Hook'lar orqali logikani ajratish",
                            "Props drilling'dan qochish strategiyalari"
                        ],
                        importance: "Kod takrorlanishini kamaytiradi va maintainability'ni oshiradi"
                    },
                    {
                        title: "State Management Patterns",
                        description: "Holatni boshqarish patterns'lari",
                        details: [
                            "Redux va Redux Toolkit arxitekturasi",
                            "Context API va useReducer kombinatsiyasi",
                            "Zustand kabi lightweight state management",
                            "Server state boshqaruvi (React Query, SWR)",
                            "Local va global state strategiyalari"
                        ],
                        importance: "Ilovadagi ma'lumotlar oqimini samarali boshqarish imkonini beradi"
                    },
                    {
                        title: "Routing Strategies",
                        description: "Routing strategiyalari",
                        details: [
                            "React Router v6 arxitekturasi",
                            "Nested routing implementatsiyasi",
                            "Route protection va authentication",
                            "Code splitting routing darajasida",
                            "Dynamic routing va parametrlar"
                        ],
                        importance: "Single Page Application navigatsiyasini optimal tashkil etish"
                    },
                    {
                        title: "Performance Optimization",
                        description: "Ishlash tezligini optimizatsiya qilish",
                        details: [
                            "React.memo va useMemo optimizatsiyalari",
                            "useCallback hook'idan to'g'ri foydalanish",
                            "Virtual scrolling implementatsiyasi",
                            "Lazy loading va code splitting",
                            "Bundle size optimizatsiyasi"
                        ],
                        importance: "Ilovaning tez va samarali ishlashini ta'minlaydi"
                    },
                    {
                        title: "Error Handling",
                        description: "Xatolarni boshqarish",
                        details: [
                            "Error Boundary komponentlari",
                            "Try-catch strategiyalari",
                            "Global error handling",
                            "Error logging va monitoring",
                            "User-friendly error UI patterns"
                        ],
                        importance: "Xatolarni boshqarish va monitoring qilishning yaxlit tizimi"
                    },
                    {
                        title: "Testing Practices",
                        description: "Testlash amaliyotlari",
                        details: [
                            "Unit testing (Jest va React Testing Library)",
                            "Integration testing strategiyalari",
                            "E2E testing (Cypress, Playwright)",
                            "Test Driven Development (TDD)",
                            "Component testing best practices"
                        ],
                        importance: "Kod sifati va ishonchliligini ta'minlash"
                    },
                    {
                        title: "Code Organization",
                        description: "Kodni tashkil etish",
                        details: [
                            "Clean Code printsiplari",
                            "SOLID printsiplarini React'da qo'llash",
                            "DRY (Don't Repeat Yourself) yondashuvi",
                            "Naming conventions va kod standartlari",
                            "Documentation va JSDoc"
                        ],
                        importance: "Kod o'qilishi va support qilishni osonlashtiradi"
                    }
                ],
                bestPractices: {
                    title: "React Architecture Best Practices",
                    practices: [
                        {
                            name: "Component Organization",
                            description: "Komponentlarni tashkil qilish",
                            example: `
// Feature-based organization
features/
  ├── auth/
  │   ├── components/
  │   ├── hooks/
  │   ├── services/
  │   └── store/
  └── dashboard/
      ├── components/
      ├── hooks/
      └── services/`
                        },
                        {
                            name: "Code Splitting",
                            description: "Kodni bo'lib yuklash",
                            example: `
const DashboardPage = React.lazy(() => 
    import('./pages/DashboardPage')
);

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <DashboardPage />
        </Suspense>
    );
}`
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Official Documentation",
                        url: "https://reactjs.org/docs/getting-started.html"
                    },
                    {
                        name: "React Architecture Best Practices",
                        url: "https://www.patterns.dev/react"
                    }
                ]
            }
        }
    }
];

export default dataReactArchituctureOrta;
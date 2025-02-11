const dataBestPracticeBosh = [
    {
        id: 1,
        title: "React Best Practices",
        level: "Boshlang'ich",
        description: "React ilovalarni yaratishda eng yaxshi amaliyotlar va kodlash standartlari",
        image: "https://reactjs.org/logo-og.png",
        mainTopics: {
            introduction: {
                title: "React Best Practices Asoslari",
                points: [
                    "Komponentlarni to'g'ri tashkil etish",
                    "State va Props boshqaruvi",
                    "Performance optimizatsiyasi",
                    "Code style va formatlash",
                    "Testing metodologiyasi",
                    "File structure",
                    "Error handling",
                    "Clean Code principles",
                    "React Hooks best practices"
                ]
            },
            coreConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "Component Structure",
                        description: "Komponentlarni to'g'ri tuzish",
                        example: `
// components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ 
    children, 
    variant = 'primary',
    onClick,
    disabled = false 
}) => {
    return (
        <button
            className={\`\${styles.button} \${styles[variant]}\`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default Button;`
                    },
                    {
                        name: "Custom Hooks",
                        description: "Hook'lardan to'g'ri foydalanish",
                        example: `
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "State Management",
                        description: "State boshqaruvining eng yaxshi usullari",
                        code: `
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle'
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`
                    },
                    {
                        name: "Performance Optimization",
                        description: "Performansni optimizatsiya qilish",
                        code: `
// components/OptimizedList.jsx
import React, { useMemo, useCallback } from 'react';

const OptimizedList = ({ items, onItemClick }) => {
    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => a.id - b.id);
    }, [items]);

    const handleClick = useCallback((id) => {
        onItemClick(id);
    }, [onItemClick]);

    return (
        <ul>
            {sortedItems.map(item => (
                <li 
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};`
                    },
                    {
                        name: "Error Boundaries",
                        description: "Xatolarni boshqarish",
                        code: `
// components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <h1>Xatolik yuz berdi.</h1>;
        }

        return this.props.children;
    }
}`
                    }
                ]
            },
            practicalExamples: {
                title: "Amaliy Misollar",
                examples: [
                    {
                        name: "Form Handling",
                        code: `
// components/Form/useForm.js
import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback((onSubmit) => async (e) => {
        e.preventDefault();
        try {
            await onSubmit(values);
        } catch (error) {
            setErrors(error);
        }
    }, [values]);

    return { values, errors, handleChange, handleSubmit };
};`
                    },
                    {
                        name: "Data Fetching",
                        code: `
// hooks/useDataFetching.js
import { useState, useEffect } from 'react';

export const useDataFetching = (url) => {
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
};`
                    }
                ]
            },
            codeOrganization: {
                title: "Kod Tashkil Etish",
                principles: [
                    "Komponentlarni kichik va qayta ishlatiluvchi qilish",
                    "DRY (Don't Repeat Yourself) prinsipi",
                    "SOLID prinsiplari",
                    "Clean Code metodologiyasi",
                    "Proper file structure",
                    "Code splitting",
                    "Lazy loading",
                    "Module organization"
                ],
                examples: [
                    {
                        name: "Project Structure",
                        description: "Loyiha strukturasi",
                        code: `
src/
├── assets/
├── components/
│   ├── common/
│   ├── features/
│   └── layout/
├── hooks/
├── pages/
├── services/
├── store/
├── utils/
└── App.js`
                    }
                ]
            },
            practicalProjects: {
                title: "Amaliy Loyihalar",
                projects: [
                    {
                        name: "E-commerce Platform",
                        description: "To'liq funksional onlayn do'kon loyihasi",
                        structure: {
                            folders: `
src/
├── components/
│   ├── products/
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetails.jsx
│   │   └── ProductFilters.jsx
│   ├── cart/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   └── CartSummary.jsx
│   └── checkout/
├── features/
│   ├── auth/
│   ├── products/
│   └── orders/
├── services/
│   ├── api.js
│   └── firebase.js`,
                            keyFeatures: [
                                "User authentication",
                                "Product katalog",
                                "Shopping cart",
                                "Checkout process",
                                "Order tracking",
                                "Admin panel"
                            ],
                            technologies: [
                                "React + Redux Toolkit",
                                "Firebase",
                                "Styled Components",
                                "React Router",
                                "React Query"
                            ]
                        }
                    },
                    {
                        name: "Task Management System",
                        description: "Trello kabi task management tizimi",
                        structure: {
                            folders: `
src/
├── components/
│   ├── boards/
│   ├── lists/
│   ├── cards/
│   └── members/
├── features/
│   ├── workspace/
│   ├── board/
│   └── activity/
├── hooks/
│   ├── useDrag.js
│   └── useBoard.js`,
                            keyFeatures: [
                                "Drag-and-drop interface",
                                "Real-time updates",
                                "Team collaboration",
                                "Task comments & attachments",
                                "Labels & due dates"
                            ],
                            technologies: [
                                "React",
                                "React DnD",
                                "Socket.io",
                                "Express.js",
                                "MongoDB"
                            ]
                        }
                    },
                    {
                        name: "Social Media Dashboard",
                        description: "Zamonaviy ijtimoiy media boshqaruv paneli",
                        structure: {
                            folders: `
src/
├── components/
│   ├── analytics/
│   │   ├── StatisticsCard.jsx
│   │   ├── EngagementChart.jsx
│   │   └── FollowerGrowth.jsx
│   ├── posts/
│   │   ├── PostScheduler.jsx
│   │   ├── PostEditor.jsx
│   │   └── PostAnalytics.jsx
│   └── accounts/
├── features/
│   ├── scheduling/
│   ├── analytics/
│   └── reporting/
├── services/
│   ├── socialApi.js
│   └── analytics.js`,
                            keyFeatures: [
                                "Multi-platform post scheduling",
                                "Real-time analytics",
                                "Engagement tracking",
                                "Content calendar",
                                "Automated reporting",
                                "Team collaboration tools"
                            ],
                            technologies: [
                                "React + TypeScript",
                                "GraphQL",
                                "Chart.js",
                                "Material-UI",
                                "React Query"
                            ]
                        }
                    },
                    {
                        name: "Real-time Chat Application",
                        description: "Ko'p funksiyali messenger ilovasi",
                        structure: {
                            folders: `
src/
├── components/
│   ├── chat/
│   │   ├── ChatWindow.jsx
│   │   ├── MessageList.jsx
│   │   ├── MessageInput.jsx
│   │   └── ChatHeader.jsx
│   ├── users/
│   │   ├── UserList.jsx
│   │   └── UserStatus.jsx
│   └── media/
├── features/
│   ├── messages/
│   ├── presence/
│   └── attachments/
├── hooks/
│   ├── useWebSocket.js
│   └── useChat.js`,
                            keyFeatures: [
                                "Real-time messaging",
                                "File sharing",
                                "Voice/Video calls",
                                "User presence system",
                                "Message encryption",
                                "Group chats"
                            ],
                            technologies: [
                                "React",
                                "WebSocket",
                                "WebRTC",
                                "Firebase",
                                "End-to-end encryption"
                            ]
                        }
                    },
                    {
                        name: "Learning Management System",
                        description: "Online ta'lim platformasi",
                        structure: {
                            folders: `
src/
├── components/
│   ├── courses/
│   │   ├── CourseList.jsx
│   │   ├── CoursePlayer.jsx
│   │   └── CourseProgress.jsx
│   ├── assignments/
│   │   ├── AssignmentEditor.jsx
│   │   └── SubmissionViewer.jsx
│   └── quiz/
├── features/
│   ├── enrollment/
│   ├── assessment/
│   └── certificates/
├── services/
│   ├── videoService.js
│   └── progressTracker.js`,
                            keyFeatures: [
                                "Video dars pleyer",
                                "Progress tracking",
                                "Interactive quizzes",
                                "Assignment submission",
                                "Certificate generation",
                                "Discussion forums"
                            ],
                            technologies: [
                                "React",
                                "Redux Toolkit",
                                "AWS S3",
                                "Video.js",
                                "PDF generation"
                            ]
                        }
                    }
                ]
            },
            architecturePatterns: {
                title: "Arxitektura Patterns",
                patterns: [
                    {
                        name: "Feature-Sliced Design",
                        description: "Loyihani feature'lar bo'yicha tashkil etish",
                        structure: `
src/
├── pages/      # Routing points
├── widgets/    # Independent feature blocks
├── features/   # Business logic
├── entities/   # Business entities
├── shared/     # Reusable components & utils`,
                        example: `
// features/auth/model/slice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        // reducers here
    }
});`
                    },
                    {
                        name: "Atomic Design",
                        description: "Komponentlarni atomik darajada tashkil etish",
                        structure: `
src/
├── components/
│   ├── atoms/      # Basic components
│   ├── molecules/  # Combinations of atoms
│   ├── organisms/  # Complex components
│   ├── templates/  # Page layouts
│   └── pages/      # Specific instances`,
                        example: `
// atoms/Button/Button.jsx
const Button = ({ children, variant, ...props }) => (
    <button className={\`btn btn-\${variant}\`} {...props}>
        {children}
    </button>
);`
                    }
                ]
            },
            performanceOptimization: {
                title: "Performans Optimizatsiyasi",
                techniques: [
                    {
                        name: "Code Splitting",
                        example: `
// App.js
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Suspense>
    );
}`
                    },
                    {
                        name: "Memorization",
                        example: `
// components/ExpensiveList.jsx
const ExpensiveList = memo(({ items }) => {
    const sortedItems = useMemo(() => 
        items.sort((a, b) => b.price - a.price),
        [items]
    );

    return (
        <ul>
            {sortedItems.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
});`
                    }
                ]
            }
        }
    }
];

export default dataBestPracticeBosh;
const dataComponentLifecycle = [
    {
        id: 1,
        title: "React Component Lifecycle",
        description: "React komponentlarining hayot sikli bo'yicha to'liq qo'llanma",
        image: "https://miro.medium.com/v2/resize:fit:2000/1*_d25u0_0n_LJD_yEuT5NUA.png",
        mainTopics: {
            introduction: {
                title: "React Lifecycle Asoslari",
                points: [
                    "Mounting (Yaratilish fazasi)",
                    "Updating (Yangilanish fazasi)",
                    "Unmounting (O'chirish fazasi)",
                    "Error Handling (Xatolarni boshqarish)",
                    "Lifecycle Methods",
                    "Hooks bilan lifecycle",
                    "Performance optimizatsiya",
                    "Best practices"
                ]
            },
            codeExamples: {
                title: "Lifecycle Namunalari",
                components: [
                    {
                        name: "1. Class Component Lifecycle",
                        description: "Class komponentlardagi lifecycle metodlari",
                        code: `
// ClassLifecycle.jsx
import React, { Component } from 'react';

class ClassLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        console.log('1. Constructor ishga tushdi');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps ishga tushdi');
        return null;
    }

    componentDidMount() {
        console.log('4. componentDidMount ishga tushdi');
        // API calls, DOM manipulations
        this.fetchData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('5. shouldComponentUpdate ishga tushdi');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('6. getSnapshotBeforeUpdate ishga tushdi');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('7. componentDidUpdate ishga tushdi');
    }

    componentWillUnmount() {
        console.log('8. componentWillUnmount ishga tushdi');
        // Cleanup operations
    }

    fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            this.setState({ data });
        } catch (error) {
            console.error('Data fetch error:', error);
        }
    }

    render() {
        console.log('3. Render ishga tushdi');
        return (
            <div>
                <h2>Class Component Lifecycle</h2>
                {this.state.data && <pre>{JSON.stringify(this.state.data, null, 2)}</pre>}
            </div>
        );
    }
}`
                    },
                    {
                        name: "2. Functional Component Lifecycle",
                        description: "Functional komponentlarda lifecycle hooks",
                        code: `
// FunctionalLifecycle.jsx
import React, { useState, useEffect, useLayoutEffect } from 'react';

const FunctionalLifecycle = () => {
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);

    // componentDidMount o'rniga
    useEffect(() => {
        console.log('Component mounted');
        fetchData();

        // componentWillUnmount o'rniga
        return () => {
            console.log('Component unmounted');
            // Cleanup operations
        };
    }, []);

    // componentDidUpdate o'rniga
    useEffect(() => {
        console.log('Data updated:', data);
    }, [data]);

    // Layout effect - DOM o'zgarishlaridan oldin
    useLayoutEffect(() => {
        console.log('Layout effect executed');
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Data fetch error:', error);
        }
    };

    return (
        <div>
            <h2>Functional Component Lifecycle</h2>
            <button onClick={() => setCount(c => c + 1)}>
                Count: {count}
            </button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}`
                    },
                    {
                        name: "3. Error Boundary",
                        description: "Xatolarni ushlash komponenti",
                        code: `
// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error);
        console.error('Error info:', errorInfo);
        // Error logging service ga yuborish
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Xatolik yuz berdi!</h2>
                    <details>
                        <summary>Xatolik tafsilotlari</summary>
                        {this.state.error && this.state.error.toString()}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}`
                    },
                    {
                        name: "4. Custom Lifecycle Hook",
                        description: "Maxsus lifecycle hook yaratish",
                        code: `
// useLifecycle.js
import { useEffect } from 'react';

export const useLifecycle = (name = 'Component') => {
    useEffect(() => {
        console.log(\`\${name} mounted\`);

        return () => {
            console.log(\`\${name} will unmount\`);
        };
    }, [name]);

    useEffect(() => {
        console.log(\`\${name} updated\`);
    });
};

// Usage
const ExampleComponent = () => {
    useLifecycle('ExampleComponent');
    
    return <div>Example Component</div>;
};`
                    },
                    {
                        name: "5. Performance Optimization Examples",
                        description: "Lifecycle metodlarini optimallash namunalari",
                        code: `
// OptimizedComponent.jsx
import React, { useState, useCallback, useMemo, useEffect } from 'react';

const ExpensiveComponent = React.memo(({ data, onItemClick }) => {
    console.log('ExpensiveComponent rendered');
    return (
        <div>
            {data.map(item => (
                <div key={item.id} onClick={() => onItemClick(item.id)}>
                    {item.title}
                </div>
            ))}
        </div>
    );
});

const OptimizedComponent = () => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    // useCallback bilan funksiyani optimize qilish
    const handleItemClick = useCallback((id) => {
        console.log('Item clicked:', id);
    }, []); // Dependencies bo'sh array chunki funksiya o'zgarmasligi kerak

    // useMemo bilan qimmat hisob-kitoblarni optimize qilish
    const processedData = useMemo(() => {
        return items.map(item => ({
            ...item,
            processed: item.value * 2
        }));
    }, [items]); // Faqat items o'zgarganda qayta hisoblash

    // Memory leak oldini olish
    useEffect(() => {
        let isSubscribed = true;

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();
                
                if (isSubscribed) {
                    setItems(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            isSubscribed = false;
        };
    }, []);

    return (
        <div>
            <h2>Optimized Component</h2>
            <button onClick={() => setCount(c => c + 1)}>
                Rerender ({count})
            </button>
            <ExpensiveComponent 
                data={processedData}
                onItemClick={handleItemClick}
            />
        </div>
    );
}`
                    },
                    {
                        name: "6. Advanced Lifecycle Patterns",
                        description: "Murakkab lifecycle patternlar",
                        code: `
// AdvancedLifecycle.jsx
import React, { useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const AdvancedLifecycle = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const mountedRef = useRef(false);

    // Component mount holatini kuzatish
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    // Auto-refresh pattern
    useInterval(async () => {
        if (!mountedRef.current) return;

        try {
            setIsLoading(true);
            const response = await fetch('https://api.example.com/data');
            const newData = await response.json();
            
            if (mountedRef.current) {
                setData(newData);
                setError(null);
            }
        } catch (err) {
            if (mountedRef.current) {
                setError(err.message);
            }
        } finally {
            if (mountedRef.current) {
                setIsLoading(false);
            }
        }
    }, 5000); // Har 5 sekundda yangilash

    // Resource cleanup pattern
    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://api.example.com/data', {
                    signal: controller.signal
                });
                const result = await response.json();
                
                if (mountedRef.current) {
                    setData(result);
                }
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else if (mountedRef.current) {
                    setError(err.message);
                }
            } finally {
                if (mountedRef.current) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <h2>Advanced Lifecycle Patterns</h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data && (
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}`
                    }
                ],
                features: [
                    {
                        title: "Lifecycle Features",
                        description: "Asosiy lifecycle xususiyatlari",
                        details: [
                            "Mounting phase metodlari",
                            "Updating phase metodlari",
                            "Unmounting phase metodlari",
                            "Error handling metodlari",
                            "Hooks lifecycle metodlari"
                        ],
                        importance: "Komponentlar hayot siklini boshqarish va optimizatsiya qilish"
                    }
                ],
                bestPractices: {
                    title: "Lifecycle Best Practices",
                    practices: [
                        {
                            name: "Performance Optimization",
                            description: "Lifecycle metodlarini optimallash",
                            tips: [
                                "shouldComponentUpdate to'g'ri ishlatish",
                                "useEffect dependency array optimizatsiyasi",
                                "Memory leak oldini olish",
                                "Cleanup functions ishlatish",
                                "useMemo va useCallback ishlatish"
                            ]
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Lifecycle Diagram",
                        url: "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
                    },
                    {
                        name: "React Hooks Documentation",
                        url: "https://reactjs.org/docs/hooks-reference.html"
                    }
                ]
            }
        }
    }
];

export default dataComponentLifecycle;
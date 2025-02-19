const dataAdvancedMukammal = [
    {
        id: 1,
        title: "React Hooks Advanced",
        code: `
import React, { useState, useEffect } from 'react';

// Custom Hook
const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

// Example usage
function WindowSizeApp() {
    const windowSize = useWindowSize();
    
    return (
        <div style={{ padding: 20 }}>
            <h2>Window Size Monitor</h2>
            <p>Width: {windowSize.width}px</p>
            <p>Height: {windowSize.height}px</p>
        </div>
    );
}

export default WindowSizeApp;`,
        description: "Oyna o'lchamlarini real vaqtda kuzatish",
        result: `{
    "demo": "https://codesandbox.io/s/window-size-hook-demo",
    "output": {
        "initialSize": "Width: 1920px, Height: 1080px",
        "afterResize": "Width: 1024px, Height: 768px"
    }
}`
    },
    {
        id: 2,
        title: "React Context API",
        code: `
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

// Theme Provider
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

// Custom hook for using theme
export function useTheme() {
    return useContext(ThemeContext);
}

// Example Component
function ThemedButton() {
    const { theme, toggleTheme } = useTheme();
    
    const buttonStyle = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#333333' : '#ffffff',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
    };
    
    return (
        <button onClick={toggleTheme} style={buttonStyle}>
            Current Theme: {theme}
        </button>
    );
}

// App Component
function ThemeApp() {
    return (
        <ThemeProvider>
            <div style={{ padding: 20 }}>
                <h2>Theme Switcher</h2>
                <ThemedButton />
            </div>
        </ThemeProvider>
    );
}

export default ThemeApp;`,
        description: "Mavzu o'zgartirish tizimi",
        result: `{
    "demo": "https://codesandbox.io/s/theme-switcher-demo",
    "output": {
        "lightTheme": {
            "backgroundColor": "#ffffff",
            "textColor": "#333333"
        },
        "darkTheme": {
            "backgroundColor": "#333333",
            "textColor": "#ffffff"
        }
    }
}`
    },
    {
        id: 3,
        title: "React Performance Optimization",
        code: `
import React, { useState, useMemo, useCallback } from 'react';

// Expensive calculation simulation
const calculateFactorial = (num) => {
    if (num < 0) return -1;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
};

// Optimized component with React.memo
const FactorialDisplay = React.memo(({ number, factorial }) => {
    console.log("FactorialDisplay rendering");
    return (
        <div style={{ margin: '10px 0' }}>
            <p>Factorial of {number} is: {factorial}</p>
        </div>
    );
});

// Main component
function FactorialCalculator() {
    const [number, setNumber] = useState(5);
    const [count, setCount] = useState(0);

    // Memoized factorial calculation
    const factorial = useMemo(() => {
        console.log("Calculating factorial...");
        return calculateFactorial(number);
    }, [number]);

    // Memoized increment handler
    const handleIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Factorial Calculator</h2>
            <input 
                type="number" 
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                style={{ marginBottom: 10 }}
            />
            <FactorialDisplay number={number} factorial={factorial} />
            <button onClick={handleIncrement}>
                Increment Counter: {count}
            </button>
            <p>
                Note: Counter updates won't trigger factorial recalculation
            </p>
        </div>
    );
}

export default FactorialCalculator;`,
        description: "Komponentlarni optimizatsiya qilish",
        result: `{
    "demo": "https://codesandbox.io/s/factorial-calculator-demo",
    "output": {
        "factorial5": "Factorial of 5 is: 120",
        "factorial10": "Factorial of 10 is: 3628800",
        "performance": "Counter updates don't trigger factorial recalculation"
    }
}`
    },
    {
        id: 4,
        title: "React Custom Hooks - Data Fetching",
        code: `
import React, { useState, useEffect } from 'react';

// Custom hook for data fetching
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    signal: abortController.signal
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url]);

    return { data, loading, error };
}

// Example usage
function PostsList() {
    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: 20 }}>
            <h2>Posts</h2>
            <div style={{ maxHeight: '400px', overflow: 'auto' }}>
                {data && data.map(post => (
                    <div key={post.id} style={{
                        border: '1px solid #ccc',
                        margin: '10px 0',
                        padding: 10
                    }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostsList;`,
        description: "Ma'lumotlarni API dan olish",
        result: `{
    "demo": "https://codesandbox.io/s/data-fetching-hook-demo",
    "output": {
        "loading": "Loading...",
        "success": [
            {
                "id": 1,
                "title": "sunt aut facere...",
                "body": "quia et suscipit..."
            },
            {
                "id": 2,
                "title": "qui est esse...",
                "body": "est rerum tempore..."
            }
        ],
        "error": "Error: Network response was not ok"
    }
}`
    }
];

export default dataAdvancedMukammal;
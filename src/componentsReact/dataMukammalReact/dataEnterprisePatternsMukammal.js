const dataEnterprisePatternsMukammal = [
    {
        id: 1,
        title: "Container/Presenter Pattern",
        code: `
// UserContainer.js
import React, { useState, useEffect } from 'react';
import UserPresenter from './UserPresenter';

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://api.example.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleUserDelete = async (userId) => {
        // Business logic here
    };

    return (
        <UserPresenter 
            users={users}
            loading={loading}
            error={error}
            onDelete={handleUserDelete}
        />
    );
};

// UserPresenter.js
const UserPresenter = ({ users, loading, error, onDelete }) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="users-list">
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <h3>{user.name}</h3>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};`,
        description: "Container/Presenter (Smart/Dumb) pattern orqali React komponentlarini ajratish",
        result: `{
    "pattern": "Container/Presenter",
    "benefits": [
        "Separation of Concerns",
        "Reusable UI Components",
        "Better Testing",
        "Maintainable Code"
    ]
}`
    },
    {
        id: 2,
        title: "Provider Pattern",
        code: `
// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// App.js
const App = () => {
    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    );
};

// Layout.js
const Layout = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={\`app \${theme}\`}>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <Content />
        </div>
    );
};`,
        description: "Provider pattern orqali global state boshqarish",
        result: `{
    "pattern": "Provider Pattern",
    "benefits": [
        "Global State Management",
        "Prop Drilling Prevention",
        "Component Composition",
        "Context API Integration"
    ]
}`
    },
    {
        id: 3,
        title: "Compound Components Pattern",
        code: `
// Select.js
import React, { createContext, useContext, useState } from 'react';

const SelectContext = createContext();

const Select = ({ children, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect?.(option);
    };

    return (
        <SelectContext.Provider value={{ selectedOption, handleSelect }}>
            <div className="select-container">
                {children}
            </div>
        </SelectContext.Provider>
    );
};

Select.Option = ({ value, children }) => {
    const { selectedOption, handleSelect } = useContext(SelectContext);
    
    return (
        <div
            className={\`select-option \${selectedOption === value ? 'selected' : ''}\`}
            onClick={() => handleSelect(value)}
        >
            {children}
        </div>
    );
};

// Usage
const App = () => {
    return (
        <Select onSelect={(value) => console.log(value)}>
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
            <Select.Option value="3">Option 3</Select.Option>
        </Select>
    );
};`,
        description: "Compound Components pattern orqali murakkab UI komponentlarini yaratish",
        result: `{
    "pattern": "Compound Components",
    "benefits": [
        "Flexible API",
        "Encapsulated State",
        "Implicit State Sharing",
        "Declarative Interface"
    ]
}`
    },
    {
        id: 4,
        title: "Render Props Pattern",
        code: `
// MouseTracker.js
import React, { useState, useEffect } from 'react';

const MouseTracker = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return render(mousePosition);
};

// Usage
const App = () => {
    return (
        <MouseTracker
            render={({ x, y }) => (
                <div>
                    <h1>Mouse Position</h1>
                    <p>X: {x}</p>
                    <p>Y: {y}</p>
                </div>
            )}
        />
    );
};`,
        description: "Render Props pattern orqali komponent logikasini qayta ishlatish",
        result: `{
    "pattern": "Render Props",
    "benefits": [
        "Code Reusability",
        "Component Logic Sharing",
        "Flexible Rendering",
        "Cross-Cutting Concerns"
    ]
}`
    },
    {
        id: 5,
        title: "Custom Hook Pattern",
        code: `
// useApi.js
import { useState, useEffect } from 'react';

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    const refetch = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return { data, loading, error, refetch };
};

// Usage
const UserProfile = ({ userId }) => {
    const { data, loading, error, refetch } = useApi(
        \`https://api.example.com/users/\${userId}\`
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <button onClick={refetch}>Refresh</button>
        </div>
    );
};`,
        description: "Custom Hook pattern orqali logikani qayta ishlatish",
        result: `{
    "pattern": "Custom Hook Pattern",
    "benefits": [
        "Logic Reusability",
        "State Management",
        "Side Effects Handling",
        "Clean Component Code"
    ]
}`
    }
];

export default dataEnterprisePatternsMukammal;
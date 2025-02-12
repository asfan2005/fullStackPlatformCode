const dataReactPatternsOrta = [
    {
        id: 1,
        title: "React Design Patterns",
        level: "O'rta",
        description: "React ilovasini yaratishda qo'llaniladigan zamonaviy pattern va arxitektura yechimlar",
        image: "https://miro.medium.com/max/1200/1*V5oi-JrH4RlEQuYdVrQXig.png",
        mainTopics: {
            introduction: {
                title: "React Pattern Asoslari",
                points: [
                    "Render Props Pattern",
                    "HOC (Higher Order Components)",
                    "Compound Components",
                    "Custom Hooks Pattern",
                    "Provider Pattern",
                    "Container/Presentational Pattern",
                    "State Reducer Pattern"
                ]
            },
            codeExamples: {
                title: "React Pattern Namunalari",
                components: [
                    {
                        name: "1. Render Props Pattern",
                        description: "Komponentlar orasida logikani almashish uchun render props pattern",
                        code: `
import React, { useState } from 'react';

// Mouse position tracker component
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    );
};

// Usage examples
export const MouseApp = () => {
    return (
        <div>
            <h2>Sichqoncha Koordinatalari</h2>
            <MouseTracker
                render={({ x, y }) => (
                    <div>
                        <p>X: {x}</p>
                        <p>Y: {y}</p>
                    </div>
                )}
            />
            
            <MouseTracker
                render={({ x, y }) => (
                    <div style={{
                        position: 'fixed',
                        left: x,
                        top: y,
                        width: '20px',
                        height: '20px',
                        background: 'red',
                        borderRadius: '50%'
                    }}/>
                )}
            />
        </div>
    );
};`
                    },
                    {
                        name: "2. Higher Order Components (HOC)",
                        description: "Komponentlarni kengaytirish uchun HOC pattern",
                        code: `
import React from 'react';

// HOC - Loading bilan o'rash
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <div>Yuklanmoqda...</div>;
        }
        return <WrappedComponent {...props} />;
    };
};

// HOC - Authentication bilan o'rash
const withAuth = (WrappedComponent) => {
    return function WithAuthComponent({ isAuthenticated, ...props }) {
        if (!isAuthenticated) {
            return <div>Iltimos, tizimga kiring</div>;
        }
        return <WrappedComponent {...props} />;
    };
};

// Base Component
const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

// Enhanced components
const UserProfileWithLoading = withLoading(UserProfile);
const UserProfileWithAuth = withAuth(UserProfileWithLoading);

// Usage
export const App = () => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com'
    };

    return (
        <UserProfileWithAuth
            isAuthenticated={true}
            isLoading={false}
            user={user}
        />
    );
};`
                    },
                    {
                        name: "3. Compound Components",
                        description: "Bog'liq komponentlarni yaratish uchun compound pattern",
                        code: `
import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

const Accordion = ({ children }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
            <div className="accordion">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

const AccordionItem = ({ children, index }) => {
    const { openIndex, setOpenIndex } = useContext(AccordionContext);
    const isOpen = openIndex === index;

    const toggle = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="accordion-item">
            {React.Children.map(children, child =>
                React.cloneElement(child, { isOpen, toggle })
            )}
        </div>
    );
};

const AccordionHeader = ({ children, toggle }) => (
    <div className="accordion-header" onClick={toggle}>
        {children}
    </div>
);

const AccordionContent = ({ children, isOpen }) => (
    <div className={\`accordion-content \${isOpen ? 'open' : ''}\`}>
        {children}
    </div>
);

// Compound components
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

// Usage
export const AccordionExample = () => {
    return (
        <Accordion>
            <Accordion.Item index={0}>
                <Accordion.Header>Birinchi bo'lim</Accordion.Header>
                <Accordion.Content>
                    Birinchi bo'lim tafsilotlari...
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item index={1}>
                <Accordion.Header>Ikkinchi bo'lim</Accordion.Header>
                <Accordion.Content>
                    Ikkinchi bo'lim tafsilotlari...
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
};`
                    },
                    {
                        name: "4. Provider Pattern",
                        description: "Global state va funksionallikni ta'minlash uchun provider pattern",
                        code: `
import React, { createContext, useContext, useState } from 'react';

// Theme context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value = {
        theme,
        toggleTheme,
        colors: {
            light: {
                background: '#ffffff',
                text: '#000000'
            },
            dark: {
                background: '#222222',
                text: '#ffffff'
            }
        }
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for using theme
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// Usage components
const ThemedButton = () => {
    const { theme, toggleTheme, colors } = useTheme();
    const currentColors = colors[theme];

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: currentColors.background,
                color: currentColors.text,
                padding: '10px',
                border: '1px solid gray'
            }}
        >
            Temani o'zgartirish
        </button>
    );
};

const ThemedText = ({ children }) => {
    const { theme, colors } = useTheme();
    const currentColors = colors[theme];

    return (
        <p style={{ color: currentColors.text }}>
            {children}
        </p>
    );
};

// App with theme provider
export const App = () => {
    return (
        <ThemeProvider>
            <div>
                <ThemedText>
                    Bu matn joriy temaga moslashadi
                </ThemedText>
                <ThemedButton />
            </div>
        </ThemeProvider>
    );
};`
                    },
                    {
                        name: "5. Container/Presentational Pattern",
                        description: "Logika va ko'rinishni ajratish uchun container pattern",
                        code: `
import React, { useState, useEffect } from 'react';

// Presentational Component
const UserListView = ({ users, onUserSelect }) => (
    <div className="user-list">
        {users.map(user => (
            <div 
                key={user.id} 
                className="user-card"
                onClick={() => onUserSelect(user)}
            >
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
);

// Container Component
const UserListContainer = () => {
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

    const handleUserSelect = (user) => {
        console.log('Selected user:', user);
        // Additional logic here
    };

    if (loading) return <div>Yuklanmoqda...</div>;
    if (error) return <div>Xatolik: {error}</div>;

    return (
        <UserListView 
            users={users}
            onUserSelect={handleUserSelect}
        />
    );
};

export const App = () => {
    return (
        <div>
            <h1>Foydalanuvchilar Ro'yxati</h1>
            <UserListContainer />
        </div>
    );
};`
                    }
                ],
                features: [
                    "Render Props - komponentlar orasida logikani almashish",
                    "HOC - komponentlarni kengaytirish",
                    "Compound Components - bog'liq komponentlar yaratish",
                    "Provider Pattern - global state boshqaruvi",
                    "Container/Presentational - logika va ko'rinishni ajratish",
                    "State Reducer Pattern - holatni boshqarish",
                    "Custom Hooks - qayta ishlatiluvchi logika"
                ]
            }
        }
    }
];

export default dataReactPatternsOrta;
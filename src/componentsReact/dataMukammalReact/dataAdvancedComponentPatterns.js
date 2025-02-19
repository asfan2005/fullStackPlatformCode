export const reactAdvancedComponentPatternsData = {
    title: "React Advanced Component Patterns",
    url: "react-advanced-component-patterns",
    tutorials: [
        {
            id: 1,
            title: "Compound Components Pattern",
            url: "compound-components",
            content: [
                {
                    title: "Compound Components nima?",
                    text: "Compound Components - bu React komponentlarini yaratishning ilg'or usuli bo'lib, u bir-biri bilan bog'liq bo'lgan komponentlarni yaratish imkonini beradi."
                },
                {
                    title: "To'liq Misol",
                    code: `
import React, { createContext, useContext, useState } from 'react';

// Context yaratish
const SelectContext = createContext();

// Asosiy Select komponenti
const Select = ({ children, defaultValue = null }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    
    return (
        <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
            <div className="select-container">
                {children}
            </div>
        </SelectContext.Provider>
    );
};

// Select komponenti uchun Option komponenti
Select.Option = ({ value, children }) => {
    const { selectedOption, setSelectedOption } = useContext(SelectContext);
    const isSelected = selectedOption === value;
    
    return (
        <div 
            className={\`select-option \${isSelected ? 'selected' : ''}\`}
            onClick={() => setSelectedOption(value)}
        >
            {children}
        </div>
    );
};

// Select komponenti uchun Trigger komponenti
Select.Trigger = () => {
    const { selectedOption } = useContext(SelectContext);
    
    return (
        <div className="select-trigger">
            Selected: {selectedOption || 'None'}
        </div>
    );
};

// Foydalanish
export const SelectExample = () => {
    return (
        <Select defaultValue="option1">
            <Select.Trigger />
            <div className="options-container">
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
                <Select.Option value="option3">Option 3</Select.Option>
            </div>
        </Select>
    );
};`
                }
            ]
        },
        {
            id: 2,
            title: "Render Props Pattern",
            url: "render-props",
            content: [
                {
                    title: "Render Props nima?",
                    text: "Render Props - bu komponent funksionalligini boshqa komponentlar bilan ulashish uchun ishlatiladigan pattern."
                },
                {
                    title: "To'liq Misol",
                    code: `
import React, { useState, useEffect } from 'react';

// Mouse pozitsiyasini kuzatuvchi komponent
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    return render(position);
};

// Mouse pozitsiyasini ko'rsatuvchi komponent
const MousePosition = () => {
    return (
        <MouseTracker
            render={({ x, y }) => (
                <div className="mouse-position">
                    <h2>Mouse Position:</h2>
                    <p>X: {x}</p>
                    <p>Y: {y}</p>
                </div>
            )}
        />
    );
};

// Mouse pozitsiyasiga qarab harakatlanuvchi element
const MovingBox = () => {
    return (
        <MouseTracker
            render={({ x, y }) => (
                <div
                    style={{
                        position: 'fixed',
                        left: x - 25,
                        top: y - 25,
                        width: 50,
                        height: 50,
                        backgroundColor: 'blue',
                        borderRadius: '50%'
                    }}
                />
            )}
        />
    );
};

// Asosiy komponent
export const MouseTrackerExample = () => {
    return (
        <div>
            <h1>Mouse Tracker Example</h1>
            <MousePosition />
            <MovingBox />
        </div>
    );
};`
                }
            ]
        },
        {
            id: 3,
            title: "Higher-Order Components (HOC)",
            url: "higher-order-components",
            content: [
                {
                    title: "HOC nima?",
                    text: "Higher-Order Components - bu komponentni qabul qilib, yangi komponentni qaytaradigan funksiya."
                },
                {
                    title: "To'liq Misol",
                    code: `
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Authentication HOC
const withAuth = (WrappedComponent) => {
    return function WithAuthComponent(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            // Autentifikatsiyani tekshirish
            const checkAuth = async () => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch('/api/verify-token', {
                        headers: {
                            'Authorization': \`Bearer \${token}\`
                        }
                    });
                    
                    setIsAuthenticated(response.ok);
                } catch (error) {
                    console.error('Auth check failed:', error);
                    setIsAuthenticated(false);
                } finally {
                    setIsLoading(false);
                }
            };

            checkAuth();
        }, []);

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (!isAuthenticated) {
            return <Navigate to="/login" replace />;
        }

        return <WrappedComponent {...props} />;
    };
};

// Loading HOC
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            );
        }
        return <WrappedComponent {...props} />;
    };
};

// Error Handling HOC
const withErrorHandling = (WrappedComponent) => {
    return function WithErrorHandlingComponent(props) {
        const [error, setError] = useState(null);

        const handleError = (error) => {
            console.error('Error caught:', error);
            setError(error.message);
        };

        if (error) {
            return (
                <div className="error-container">
                    <h3>Error occurred:</h3>
                    <p>{error}</p>
                    <button onClick={() => setError(null)}>Try Again</button>
                </div>
            );
        }

        return (
            <WrappedComponent
                {...props}
                onError={handleError}
            />
        );
    };
};

// Namuna komponent
const UserProfile = ({ user, onError }) => {
    useEffect(() => {
        if (!user) {
            onError(new Error('User data not found'));
        }
    }, [user, onError]);

    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

// HOC'larni qo'llash
const EnhancedUserProfile = withAuth(
    withLoading(
        withErrorHandling(UserProfile)
    )
);

// Foydalanish
export const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/user');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <EnhancedUserProfile
            user={user}
            isLoading={isLoading}
        />
    );
};`
                }
            ]
        },
        {
            id: 4,
            title: "Custom Hooks Pattern",
            url: "custom-hooks",
            content: [
                {
                    title: "Custom Hooks nima?",
                    text: "Custom Hooks - bu React Hook'larini qayta ishlatish uchun mo'ljallangan pattern. Bu pattern orqali komponent logikasini alohida hook'larga ajratish mumkin."
                },
                {
                    title: "Misol",
                    code: `
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });
    
    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };
    
    return [storedValue, setValue];
};`
                }
            ]
        },
        {
            id: 5,
            title: "Context + Reducer Pattern",
            url: "context-reducer",
            content: [
                {
                    title: "Context + Reducer Pattern nima?",
                    text: "Context + Reducer pattern - bu global holatni boshqarish uchun Context API va useReducer hook'ini birgalikda ishlatish usuli. Bu pattern Redux'ga o'xshash holatni boshqarish imkoniyatini beradi."
                },
                {
                    title: "Misol",
                    code: `
const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    
    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};`
                }
            ]
        },
        {
            id: 6,
            title: "Controlled Components Pattern",
            url: "controlled-components",
            content: [
                {
                    title: "Controlled Components nima?",
                    text: "Controlled Components - bu forma elementlarining holatini React komponenti orqali boshqarish usuli. Bu pattern forma ma'lumotlarini validatsiya qilish va qayta ishlash uchun juda foydali."
                },
                {
                    title: "Misol",
                    code: `
const ControlledForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation and submission logic
        console.log('Form submitted:', formData);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    );
};`
                }
            ]
        },
        {
            id: 7,
            title: "Composition Pattern",
            url: "composition-pattern",
            content: [
                {
                    title: "Composition Pattern nima?",
                    text: "Composition Pattern - bu komponentlarni bir-biriga ulash va ularni qayta ishlatish uchun mo'ljallangan pattern. Bu pattern inheritance o'rniga composition'ni ishlatishni tavsiya qiladi."
                },
                {
                    title: "Misol",
                    code: `
const Card = ({ children, className }) => (
    <div className={\`card \${className}\`}>{children}</div>
);

const CardHeader = ({ children }) => (
    <div className="card-header">{children}</div>
);

const CardBody = ({ children }) => (
    <div className="card-body">{children}</div>
);

const CardFooter = ({ children }) => (
    <div className="card-footer">{children}</div>
);

// Usage
const App = () => (
    <Card className="custom-card">
        <CardHeader>
            <h2>Card Title</h2>
        </CardHeader>
        <CardBody>
            <p>Card content goes here</p>
        </CardBody>
        <CardFooter>
            <button>Action</button>
        </CardFooter>
    </Card>
);`
                }
            ]
        },
        {
            id: 8,
            title: "State Reducer Pattern",
            url: "state-reducer",
            content: [
                {
                    title: "State Reducer Pattern nima?",
                    text: "State Reducer Pattern - bu komponentning holatini tashqaridan boshqarish imkonini beruvchi pattern. Bu pattern orqali komponent foydalanuvchilarga o'zining holat mantiqini sozlash imkoniyatini beradi."
                },
                {
                    title: "Misol",
                    code: `
const useToggle = ({ reducer = (state, action) => action.changes } = {}) => {
    const [state, dispatch] = useReducer((currentState, action) => {
        const changes = reducer(currentState, action);
        return { ...currentState, ...changes };
    }, { on: false });

    const toggle = () => dispatch({
        type: 'TOGGLE',
        changes: { on: !state.on }
    });

    return [state, toggle];
};

// Foydalanish
const CustomToggle = () => {
    const [state, toggle] = useToggle({
        reducer: (state, action) => {
            if (action.type === 'TOGGLE' && state.on) {
                return { on: false }; // faqat o'chirish mumkin
            }
            return action.changes;
        }
    });

    return (
        <button onClick={toggle}>
            {state.on ? 'ON' : 'OFF'}
        </button>
    );
};`
                }
            ]
        },
        {
            id: 9,
            title: "Props Collection Pattern",
            url: "props-collection",
            content: [
                {
                    title: "Props Collection Pattern nima?",
                    text: "Props Collection Pattern - bu hook yoki komponentdan qayta ishlatiladigan props to'plamlarini qaytarish usuli. Bu pattern orqali kod takrorlanishini kamaytirish va props'larni guruhlab boshqarish mumkin."
                },
                {
                    title: "Misol",
                    code: `
const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const inputProps = {
        value,
        onChange: e => setValue(e.target.value),
        onBlur: () => console.log('Input blur event'),
        onFocus: () => console.log('Input focus event')
    };

    const resetProps = {
        onClick: () => setValue(''),
        type: 'button'
    };

    return {
        value,
        setValue,
        inputProps,
        resetProps
    };
};

// Foydalanish
const InputWithReset = () => {
    const { inputProps, resetProps } = useInput();
    
    return (
        <div>
            <input {...inputProps} />
            <button {...resetProps}>Reset</button>
        </div>
    );
};`
                }
            ]
        },
        {
            id: 10,
            title: "Props Getters Pattern",
            url: "props-getters",
            content: [
                {
                    title: "Props Getters Pattern nima?",
                    text: "Props Getters Pattern - bu Props Collection Pattern'ning kengaytirilgan versiyasi bo'lib, u props'larni dinamik ravishda yaratish va sozlash imkonini beradi. Bu pattern orqali props'larni moslashuvchan tarzda boshqarish mumkin."
                },
                {
                    title: "Misol",
                    code: `
const useSelect = (items = []) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const getToggleButtonProps = ({ onClick, ...props } = {}) => ({
        role: 'button',
        'aria-haspopup': true,
        'aria-expanded': !!selectedItem,
        onClick: (event) => {
            onClick?.(event);
            setSelectedItem(null);
        },
        ...props,
    });

    const getItemProps = ({ item, onClick, ...props } = {}) => ({
        role: 'menuitem',
        onClick: (event) => {
            onClick?.(event);
            setSelectedItem(item);
        },
        'aria-selected': item === selectedItem,
        ...props,
    });

    return {
        selectedItem,
        getToggleButtonProps,
        getItemProps,
    };
};

// Foydalanish
const Select = ({ items }) => {
    const { selectedItem, getToggleButtonProps, getItemProps } = useSelect(items);

    return (
        <div>
            <button {...getToggleButtonProps()}>
                {selectedItem?.label || 'Select item'}
            </button>
            <ul>
                {items.map(item => (
                    <li key={item.id} {...getItemProps({ item })}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};`
                }
            ]
        }
    ]
};
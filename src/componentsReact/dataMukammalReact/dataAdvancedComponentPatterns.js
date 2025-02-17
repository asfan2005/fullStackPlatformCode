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
                    text: "Compound Components - bu React komponentlarini yaratishning ilg'or usuli bo'lib, u bir-biri bilan bog'liq bo'lgan komponentlarni yaratish imkonini beradi. Bu pattern yordamida komponentlar orasida ma'lumotlarni almashish va ularni boshqarish osonlashadi."
                },
                {
                    title: "Misol",
                    code: `
const Select = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    return (
        <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
            {children}
        </SelectContext.Provider>
    );
};

Select.Option = ({ value, children }) => {
    const { selectedOption, setSelectedOption } = useContext(SelectContext);
    
    return (
        <div onClick={() => setSelectedOption(value)}>
            {children}
        </div>
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
                    text: "Render Props - bu komponent funksionalligini boshqa komponentlar bilan ulashish uchun ishlatiladigan pattern. Bu pattern orqali komponentning render logikasini props orqali uzatish mumkin."
                },
                {
                    title: "Misol",
                    code: `
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    return render(position);
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
                    text: "Higher-Order Components - bu komponentni qabul qilib, yangi komponentni qaytaradigan funksiya. Bu pattern komponent logikasini qayta ishlatish uchun ishlatiladi."
                },
                {
                    title: "Misol",
                    code: `
const withAuth = (WrappedComponent) => {
    return function WithAuthComponent(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        
        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }
        
        return <WrappedComponent {...props} />;
    };
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
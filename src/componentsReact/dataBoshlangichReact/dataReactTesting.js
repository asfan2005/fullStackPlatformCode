const dataReactTesting = [
    {
        id: 1,
        title: "React Testing",
        level: "Boshlang'ich",
        description: "React ilovalarni testing qilish usullari va amaliyotlari",
        image: "https://www.zealousys.com/wp-content/uploads/2024/02/React-Testing-Libraries.webp",
        mainTopics: {
            introduction: {
                title: "Testing Asoslari",
                points: [
                    "Testing nima va nima uchun kerak",
                    "Test turlari (Unit, Integration, E2E)",
                    "Testing pyramidasi",
                    "Jest test framework",
                    "React Testing Library",
                    "Test Driven Development (TDD)",
                    "Testing best practices",
                    "Code coverage",
                    "Testing strategies"
                ],
                examples: [
                    {
                        name: "Unit Testing Example",
                        description: "Oddiy funksiyani unit testing qilish",
                        code: `
// calculator.js
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : throw new Error('Cannot divide by zero')
};

// calculator.test.js
import { calculator } from './calculator';

describe('Calculator Unit Tests', () => {
    test('adds two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(1, 1)).toBe(0);
    });

    test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('divides two numbers correctly', () => {
        expect(calculator.divide(6, 2)).toBe(3);
        expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
});`
                    },
                    {
                        name: "Integration Testing Example",
                        description: "Komponentlar o'rtasidagi integratsiyani testing qilish",
                        code: `
// UserProfile.jsx
const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchUser(userId).then(setUser);
        fetchUserPosts(userId).then(setPosts);
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <UserPosts posts={posts} />
        </div>
    );
};

// UserProfile.integration.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import { fetchUser, fetchUserPosts } from './api';

jest.mock('./api');

describe('UserProfile Integration', () => {
    const mockUser = { id: 1, name: 'John Doe' };
    const mockPosts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
    ];

    beforeEach(() => {
        fetchUser.mockResolvedValue(mockUser);
        fetchUserPosts.mockResolvedValue(mockPosts);
    });

    test('loads and displays user with posts', async () => {
        render(<UserProfile userId={1} />);

        // Loading state
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // Wait for data to load
        await waitFor(() => {
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        });

        // Check if posts are rendered
        expect(screen.getByText('Post 1')).toBeInTheDocument();
        expect(screen.getByText('Post 2')).toBeInTheDocument();

        // Verify API calls
        expect(fetchUser).toHaveBeenCalledWith(1);
        expect(fetchUserPosts).toHaveBeenCalledWith(1);
    });
});`
                    },
                    {
                        name: "E2E Testing Example",
                        description: "End-to-End testing with Cypress",
                        code: `
// cypress/integration/login.spec.js
describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('successfully logs in', () => {
        // Fill login form
        cy.get('[data-testid="email-input"]')
            .type('user@example.com');
        
        cy.get('[data-testid="password-input"]')
            .type('password123');

        // Submit form
        cy.get('[data-testid="login-button"]')
            .click();

        // Verify successful login
        cy.url().should('include', '/dashboard');
        cy.get('[data-testid="welcome-message"]')
            .should('contain', 'Welcome back');
    });

    it('shows error for invalid credentials', () => {
        cy.get('[data-testid="email-input"]')
            .type('wrong@example.com');
        
        cy.get('[data-testid="password-input"]')
            .type('wrongpassword');

        cy.get('[data-testid="login-button"]')
            .click();

        cy.get('[data-testid="error-message"]')
            .should('contain', 'Invalid credentials');
    });
});`
                    },
                    {
                        name: "TDD Example",
                        description: "Test Driven Development namunasi",
                        code: `
// Step 1: Write failing test
// stringUtils.test.js
describe('String Utils', () => {
    test('capitalizes first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('react testing')).toBe('React Testing');
    });
});

// Step 2: Write minimal code to pass test
// stringUtils.js
export const capitalizeWords = (str) => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Step 3: Refactor and add more tests
describe('String Utils', () => {
    test('capitalizes first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('react testing')).toBe('React Testing');
    });

    test('handles empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles single word', () => {
        expect(capitalizeWords('hello')).toBe('Hello');
    });

    test('handles multiple spaces', () => {
        expect(capitalizeWords('hello   world')).toBe('Hello   World');
    });
});`
                    },
                    {
                        name: "Code Coverage Example",
                        description: "Jest code coverage configuration va analizi",
                        code: `
// jest.config.js
module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/index.js',
        '!src/reportWebVitals.js'
    ]
};

// userValidation.js
export const validateUser = (user) => {
    const errors = {};

    if (!user.name) {
        errors.name = 'Name is required';
    } else if (user.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

    if (!user.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
        errors.email = 'Invalid email address';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

// userValidation.test.js
describe('User Validation', () => {
    test('validates valid user data', () => {
        const user = {
            name: 'John Doe',
            email: 'john@example.com'
        };
        const result = validateUser(user);
        expect(result.isValid).toBe(true);
        expect(result.errors).toEqual({});
    });

    test('validates missing name', () => {
        const user = {
            email: 'john@example.com'
        };
        const result = validateUser(user);
        expect(result.isValid).toBe(false);
        expect(result.errors.name).toBe('Name is required');
    });

    test('validates short name', () => {
        const user = {
            name: 'J',
            email: 'john@example.com'
        };
        const result = validateUser(user);
        expect(result.isValid).toBe(false);
        expect(result.errors.name).toBe('Name must be at least 2 characters');
    });

    test('validates invalid email', () => {
        const user = {
            name: 'John Doe',
            email: 'invalid-email'
        };
        const result = validateUser(user);
        expect(result.isValid).toBe(false);
        expect(result.errors.email).toBe('Invalid email address');
    });
});`
                    }
                ]
            },
            coreConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "Jest Asoslari",
                        description: "Jest bilan unit testlar yozish",
                        example: `
// math.test.js
describe('Math functions', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });

    test('object assignment', () => {
        const data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });
});`
                    },
                    {
                        name: "React Component Testing",
                        description: "React komponentlarini testing qilish",
                        example: `
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    test('renders button with text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        
        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});`
                    },
                    {
                        name: "Async Testing",
                        description: "Asinxron operatsiyalarni testing qilish",
                        example: `
// api.test.js
import { fetchUser } from './api';

test('fetchUser returns user data', async () => {
    const user = await fetchUser(1);
    expect(user).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
    });
});

// Mock API
jest.mock('./api');
test('mocked API call', () => {
    fetchUser.mockResolvedValue({
        id: 1,
        name: 'John Doe'
    });
});`
                    },
                    {
                        name: "Hook Testing",
                        description: "Custom React hooklarni testing qilish",
                        example: `
// useCounter.js
import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
};

// useCounter.test.js
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter hook', () => {
    test('should initialize with default value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    test('should initialize with custom value', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    });

    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter(5));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(4);
    });
});`
                    },
                    {
                        name: "Context Testing",
                        description: "React Context testing",
                        example: `
// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// ThemeContext.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { useContext } from 'react';

const TestComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <div data-testid="theme">{theme}</div>
            <button onClick={() => setTheme('dark')}>Toggle Theme</button>
        </div>
    );
};

describe('ThemeContext', () => {
    test('provides theme value', () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        
        expect(screen.getByTestId('theme')).toHaveTextContent('light');
        
        fireEvent.click(screen.getByText('Toggle Theme'));
        expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });
});`
                    }
                ]
            },
            practicalExamples: {
                title: "Amaliy Misollar",
                examples: [
                    {
                        name: "Form Testing",
                        code: `
// LoginForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
    test('submits form with user data', () => {
        const handleSubmit = jest.fn();
        render(<LoginForm onSubmit={handleSubmit} />);

        fireEvent.change(screen.getByLabelText('Email'), {
            target: { value: 'test@example.com' }
        });
        
        fireEvent.change(screen.getByLabelText('Password'), {
            target: { value: 'password123' }
        });

        fireEvent.click(screen.getByText('Login'));

        expect(handleSubmit).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'password123'
        });
    });
});`
                    },
                    {
                        name: "API Integration Testing",
                        code: `
// UserProfile.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import { fetchUserProfile } from './api';

jest.mock('./api');

describe('UserProfile', () => {
    test('displays user profile data', async () => {
        fetchUserProfile.mockResolvedValue({
            name: 'John Doe',
            email: 'john@example.com',
            bio: 'Software Developer'
        });

        render(<UserProfile userId="123" />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('John Doe')).toBeInTheDocument();
            expect(screen.getByText('john@example.com')).toBeInTheDocument();
            expect(screen.getByText('Software Developer')).toBeInTheDocument();
        });
    });
});`
                    },
                    {
                        name: "Redux Integration Testing",
                        code: `
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 }
    }
});

// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import Counter from './Counter';

describe('Counter Redux Integration', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                counter: counterReducer
            }
        });
    });

    test('increments value', () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        expect(screen.getByTestId('count')).toHaveTextContent('0');
        fireEvent.click(screen.getByText('+'));
        expect(screen.getByTestId('count')).toHaveTextContent('1');
    });

    test('decrements value', () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        fireEvent.click(screen.getByText('-'));
        expect(screen.getByTestId('count')).toHaveTextContent('-1');
    });
});`
                    },
                    {
                        name: "Custom Hook with API Testing",
                        code: `
// useUsers.js
import { useState, useEffect } from 'react';

export const useUsers = () => {
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

    return { users, loading, error };
};

// useUsers.test.js
import { renderHook, waitFor } from '@testing-library/react';
import { useUsers } from './useUsers';

describe('useUsers hook', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    test('fetches users successfully', async () => {
        const mockUsers = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' }
        ];

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockUsers
        });

        const { result } = renderHook(() => useUsers());

        expect(result.current.loading).toBe(true);
        expect(result.current.users).toEqual([]);

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.users).toEqual(mockUsers);
        expect(result.current.error).toBeNull();
    });

    test('handles error', async () => {
        const errorMessage = 'Failed to fetch';
        global.fetch.mockRejectedValueOnce(new Error(errorMessage));

        const { result } = renderHook(() => useUsers());

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.error).toBe(errorMessage);
        expect(result.current.users).toEqual([]);
    });
});`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    "User interactionni simulyatsiya qilish",
                    "Accessibility testlarini yozish",
                    "Mock service worker (MSW) ishlatish",
                    "Test coverage monitoring",
                    "Snapshot testing",
                    "Integration testlar yozish",
                    "Custom test hooks yaratish",
                    "Error handling testlari",
                    "Performance testing",
                    "Security testing",
                    "Cross-browser testing",
                    "CI/CD pipeline integration"
                ],
                examples: [
                    {
                        name: "Custom Render Function",
                        description: "Test uchun maxsus render funksiyasi",
                        code: `
// test-utils.js
import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';

const customRender = (ui, { theme = 'light', ...options } = {}) => {
    return render(
        <ThemeProvider initialTheme={theme}>{ui}</ThemeProvider>,
        options
    );
};

export * from '@testing-library/react';
export { customRender as render };`
                    },
                    {
                        name: "Error Boundary Testing",
                        description: "Xatolarni ushlash testlari",
                        code: `
// ErrorBoundary.test.jsx
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
    test('renders error message when child throws', () => {
        const ThrowError = () => {
            throw new Error('Test error');
        };

        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );

        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByText('Test error')).toBeInTheDocument();
    });
});`
                    }
                ]
            }
        }
    }
];

export default dataReactTesting;
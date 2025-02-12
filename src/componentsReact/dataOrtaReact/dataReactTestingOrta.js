const dataReactTestingOrta = [
    {
        id: 1,
        title: "React Testing",
        description: "React ilovalarni test qilish bo'yicha to'liq qo'llanma",
        image: "https://miro.medium.com/v2/resize:fit:1000/0*ewpGTaP4qQ9xjKMc.png",
        mainTopics: {
            introduction: {
                title: "React Testing Asoslari",
                points: [
                    "Jest va React Testing Library",
                    "Unit Testing",
                    "Integration Testing",
                    "Component Testing",
                    "Hook Testing",
                    "Mock Functions",
                    "Snapshot Testing",
                    "Test Coverage"
                ]
            },
            codeExamples: {
                title: "Testing Namunalari",
                components: [
                    {
                        name: "1. Component Testing",
                        description: "Komponentlarni test qilish",
                        code: `
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders initial count', () => {
        render(<Counter initialCount={0} />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });

    test('increments count when button clicked', () => {
        render(<Counter initialCount={0} />);
        const button = screen.getByText('Increment');
        fireEvent.click(button);
        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });
});`
                    },
                    {
                        name: "2. Hook Testing",
                        description: "Custom hooklarni test qilish",
                        code: `
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter Hook', () => {
    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1);
    });
});`
                    },
                    {
                        name: "3. API Testing",
                        description: "API so'rovlarini test qilish",
                        code: `
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserList from './UserList';

jest.mock('axios');

describe('UserList Component', () => {
    const mockUsers = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];

    test('fetches and displays users', async () => {
        axios.get.mockResolvedValueOnce({ data: mockUsers });
        
        render(<UserList />);
        
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(screen.getByText('John')).toBeInTheDocument();
            expect(screen.getByText('Jane')).toBeInTheDocument();
        });
    });

    test('handles error state', async () => {
        axios.get.mockRejectedValueOnce(new Error('API Error'));
        
        render(<UserList />);
        
        await waitFor(() => {
            expect(screen.getByText('Error loading users')).toBeInTheDocument();
        });
    });
});`
                    },
                    {
                        name: "4. Form Testing",
                        description: "Formalarni test qilish",
                        code: `
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
    const mockSubmit = jest.fn();

    beforeEach(() => {
        mockSubmit.mockClear();
    });

    test('submits form with user data', () => {
        render(<LoginForm onSubmit={mockSubmit} />);

        fireEvent.change(screen.getByLabelText('Username'), {
            target: { value: 'testuser' }
        });

        fireEvent.change(screen.getByLabelText('Password'), {
            target: { value: 'password123' }
        });

        fireEvent.click(screen.getByText('Login'));

        expect(mockSubmit).toHaveBeenCalledWith({
            username: 'testuser',
            password: 'password123'
        });
    });

    test('displays validation errors', () => {
        render(<LoginForm onSubmit={mockSubmit} />);

        fireEvent.click(screen.getByText('Login'));

        expect(screen.getByText('Username is required')).toBeInTheDocument();
        expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
});`
                    },
                    {
                        name: "5. Redux Testing",
                        description: "Redux state va actionlarni test qilish",
                        code: `
import reducer, { increment, decrement } from './counterSlice';

describe('Counter Reducer', () => {
    test('should handle initial state', () => {
        expect(reducer(undefined, { type: 'unknown' })).toEqual({
            value: 0
        });
    });

    test('should handle increment', () => {
        const previousState = { value: 0 };
        expect(reducer(previousState, increment())).toEqual({
            value: 1
        });
    });

    test('should handle decrement', () => {
        const previousState = { value: 1 };
        expect(reducer(previousState, decrement())).toEqual({
            value: 0
        });
    });
});

// Testing Connected Components
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterComponent from './CounterComponent';
import counterReducer from './counterSlice';

const renderWithRedux = (component) => {
    const store = configureStore({
        reducer: {
            counter: counterReducer
        }
    });
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

test('counter integration with redux', () => {
    renderWithRedux(<CounterComponent />);
    
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
});`
                    },
                    {
                        name: "6. Snapshot Testing",
                        description: "Komponent ko'rinishini snapshot orqali test qilish",
                        code: `
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button Component', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<Button label="Click me" onClick={() => {}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders disabled state correctly', () => {
        const tree = renderer
            .create(<Button label="Click me" disabled />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});`
                    }
                ],
                features: [
                    "Component Testing",
                    "Hook Testing",
                    "API Testing",
                    "Form Testing",
                    "Redux Testing",
                    "Snapshot Testing",
                    "Mock Functions",
                    "Async Testing"
                ],
                bestPractices: {
                    title: "Testing Best Practices",
                    practices: [
                        {
                            name: "Test Structure",
                            description: "Testlarni to'g'ri tashkil qilish",
                            example: `
describe('Component Name', () => {
    beforeEach(() => {
        // Test setup
    });

    afterEach(() => {
        // Clean up
    });

    test('should do something', () => {
        // Test logic
    });
});`
                        },
                        {
                            name: "Testing Patterns",
                            description: "Test yozishning asosiy patterns",
                            example: `
// Arrange
const props = { ... };

// Act
const result = someFunction(props);

// Assert
expect(result).toBe(expectedValue);`
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Testing Library Documentation",
                        url: "https://testing-library.com/docs/react-testing-library/intro/"
                    },
                    {
                        name: "Jest Documentation",
                        url: "https://jestjs.io/docs/getting-started"
                    }
                ]
            }
        }
    }
];

export default dataReactTestingOrta;
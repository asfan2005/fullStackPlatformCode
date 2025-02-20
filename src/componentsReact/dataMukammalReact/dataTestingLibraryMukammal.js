const dataTestingLibraryMukammal = [
    {
        id: 1,
        title: "Basic Component Testing",
        code: `
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`,
        description: "React Testing Library asosiy komponent testlari",
        result: `{
    "feature": "Component Testing",
    "concepts": [
        "Rendering",
        "Event Testing",
        "User Interactions",
        "Jest Mocks"
    ]
}`
    },
    {
        id: 2,
        title: "Form Testing",
        code: `
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('submits form with user data', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByLabelText(/username/i), 'testuser');
    await userEvent.type(screen.getByLabelText(/password/i), 'testpass123');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpass123'
    });
  });

  test('shows validation errors', async () => {
    render(<LoginForm onSubmit={() => {}} />);
    
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });
});`,
        description: "Formalarni test qilish",
        result: `{
    "feature": "Form Testing",
    "concepts": [
        "Form Validation",
        "Input Testing",
        "Error Messages",
        "Submit Handling"
    ]
}`
    },
    {
        id: 3,
        title: "Async Testing",
        code: `
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import UserProfile from './UserProfile';

const server = setupServer(
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json({
      name: 'John Doe',
      email: 'john@example.com'
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays user data', async () => {
  render(<UserProfile />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});

test('handles error states', async () => {
  server.use(
    rest.get('/api/user', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<UserProfile />);

  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});`,
        description: "Asinxron testlarni yozish",
        result: `{
    "feature": "Async Testing",
    "concepts": [
        "API Mocking",
        "Loading States",
        "Error Handling",
        "MSW Integration"
    ]
}`
    },
    {
        id: 4,
        title: "Context Testing",
        code: `
import { render, screen } from '@testing-library/react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const customRender = (ui, { theme = 'light', ...options } = {}) => {
  return render(
    <ThemeProvider initialTheme={theme}>{ui}</ThemeProvider>,
    options
  );
};

describe('ThemeToggle with Context', () => {
  test('toggles theme when clicked', async () => {
    customRender(<ThemeToggle />);

    const toggle = screen.getByRole('button');
    expect(toggle).toHaveTextContent(/light mode/i);

    await userEvent.click(toggle);
    expect(toggle).toHaveTextContent(/dark mode/i);
  });

  test('uses provided theme', () => {
    customRender(<ThemeToggle />, { theme: 'dark' });
    expect(screen.getByRole('button')).toHaveTextContent(/dark mode/i);
  });
});`,
        description: "Context va Provider testlari",
        result: `{
    "feature": "Context Testing",
    "concepts": [
        "Custom Render",
        "Provider Testing",
        "State Changes",
        "Theme Testing"
    ]
}`
    },
    {
        id: 5,
        title: "Custom Hooks Testing",
        code: `
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(9);
  });

  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });
});`,
        description: "Custom hooklarni test qilish",
        result: `{
    "feature": "Hook Testing",
    "concepts": [
        "renderHook",
        "State Updates",
        "Act Function",
        "Initial Values"
    ]
}`
    },
    {
        id: 6,
        title: "Integration Testing",
        code: `
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TodoApp from './TodoApp';
import todoReducer from './todoSlice';

const renderWithProviders = (ui, { store = configureStore({ reducer: { todos: todoReducer } }) } = {}) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe('TodoApp Integration', () => {
  test('full todo workflow', async () => {
    renderWithProviders(<TodoApp />);

    // Add new todo
    await userEvent.type(screen.getByPlaceholderText(/add todo/i), 'New Todo');
    await userEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByText('New Todo')).toBeInTheDocument();

    // Toggle todo
    await userEvent.click(screen.getByText('New Todo'));
    expect(screen.getByText('New Todo')).toHaveStyle({
      textDecoration: 'line-through'
    });

    // Delete todo
    await userEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });
});`,
        description: "Integratsion testlar",
        result: `{
    "feature": "Integration Testing",
    "concepts": [
        "Redux Integration",
        "User Workflows",
        "State Management",
        "Component Interaction"
    ]
}`
    },
    {
        id: 7,
        title: "Snapshot Testing",
        code: `
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component Snapshots', () => {
  test('renders card with title and content', () => {
    const { container } = render(
      <Card 
        title="Test Title"
        content="Test Content"
        image="test.jpg"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('renders card with different variants', () => {
    const variants = ['primary', 'secondary', 'accent'];
    
    variants.forEach(variant => {
      const { container } = render(
        <Card
          variant={variant}
          title="Test Title"
          content="Test Content"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});`,
        description: "Snapshot testlari",
        result: `{
    "feature": "Snapshot Testing",
    "concepts": [
        "Visual Testing",
        "Component Variants",
        "Snapshot Updates",
        "UI Regression"
    ]
}`
    }
];

export default dataTestingLibraryMukammal;
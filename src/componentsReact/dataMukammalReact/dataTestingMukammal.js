const dataTestingMukammal = [
    {
        id: 1,
        title: "React Testing Library - Basic Tests",
        code: `
import { render, screen, fireEvent } from '@testing-library/react';

// Simple Counter Component
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span>Count: {count}</span>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

// Basic Tests
describe('Counter Tests', () => {
    test('counter starts at 0', () => {
        render(<Counter />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });

    test('clicking button adds 1', () => {
        render(<Counter />);
        const button = screen.getByText('+1');
        fireEvent.click(button);
        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });
});`,
        description: "React Testing Library bilan sodda testlar",
        result: `{
    "demo": "https://codesandbox.io/s/react-testing-basic-demo",
    "output": {
        "test1": "✓ counter starts at 0",
        "test2": "✓ clicking button adds 1"
    }
}`
    },
    {
        id: 2,
        title: "React Testing - Async Operations",
        code: `
import { render, screen, waitFor } from '@testing-library/react';

// Simple User Component
function UserInfo({ id }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Sodda API so'rovi
        fetch(\`/api/user/\${id}\`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return <div>{user.name}</div>;
}

// Async Test
test('user malumotlarini yuklaydi', async () => {
    render(<UserInfo id="1" />);
    
    // Loading tekshirish
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Malumot kelishini kutish
    await waitFor(() => {
        expect(screen.getByText('John')).toBeInTheDocument();
    });
});`,
        description: "Asinxron operatsiyalarni sodda testing qilish",
        result: `{
    "demo": "https://codesandbox.io/s/react-testing-async-demo",
    "output": {
        "test1": "✓ user malumotlarini yuklaydi"
    }
}`
    },
    {
        id: 3,
        title: "React Testing - Form Validation",
        code: `
import { render, screen, fireEvent } from '@testing-library/react';

// Simple Login Form
function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email kiritish shart!');
            return;
        }
        onSubmit({ email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            {error && <span>{error}</span>}
            <button type="submit">Yuborish</button>
        </form>
    );
}

// Form Tests
test('forma validatsiyasi', () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    // Bo'sh formani yuborish
    fireEvent.click(screen.getByText('Yuborish'));
    expect(screen.getByText('Email kiritish shart!')).toBeInTheDocument();

    // To'g'ri email bilan yuborish
    fireEvent.change(screen.getByPlaceholderText('Email'), {
        target: { value: 'test@example.com' }
    });
    fireEvent.click(screen.getByText('Yuborish'));
    expect(onSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
});`,
        description: "Forma validatsiyasini sodda testing qilish",
        result: `{
    "demo": "https://codesandbox.io/s/react-testing-form-demo",
    "output": {
        "test1": "✓ forma validatsiyasi"
    }
}`
    }
];

export default dataTestingMukammal;
const dataAdvancedTypeMukammal = [
    {
        id: 1,
        title: "Generic Components",
        code: `
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

const GenericList = <T,>({ items, renderItem }: ListProps<T>) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
            ))}
        </div>
    );
};

// Usage Example
interface User {
    id: number;
    name: string;
}

const App = () => {
    const users: User[] = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ];

    return (
        <GenericList 
            items={users}
            renderItem={(user) => <div>{user.name}</div>}
        />
    );
};`,
        description: "Generic komponentlar orqali universal TypeScript komponentlar yaratish",
        result: `{
    "feature": "Generic Components",
    "benefits": [
        "Type-Safe Components",
        "Reusable Code",
        "Flexible Data Types",
        "Better IntelliSense"
    ]
}`
    },
    {
        id: 2,
        title: "Advanced Props Types",
        code: `
type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    variant: ButtonVariant;
    size: ButtonSize;
    isLoading?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    size,
    isLoading,
    onClick,
    children
}) => {
    return (
        <button
            className={\`btn btn-\${variant} btn-\${size}\`}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
};`,
        description: "TypeScript yordamida murakkab props tiplarini boshqarish",
        result: `{
    "feature": "Advanced Props",
    "concepts": [
        "Union Types",
        "Literal Types",
        "Optional Properties",
        "React.FC Type"
    ]
}`
    },
    {
        id: 3,
        title: "Custom Hooks with TypeScript",
        code: `
interface UseApiResponse<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

function useApi<T>(url: string): UseApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error'));
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Usage Example
interface Post {
    id: number;
    title: string;
}

const PostList = () => {
    const { data, loading, error } = useApi<Post[]>('/api/posts');
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <ul>
            {data?.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};`,
        description: "TypeScript bilan custom hooklarni yaratish va ishlatish",
        result: `{
    "feature": "Custom Hooks",
    "benefits": [
        "Type-Safe State Management",
        "Reusable Logic",
        "Better Error Handling",
        "Generic Type Support"
    ]
}`
    },
    {
        id: 4,
        title: "Context with TypeScript",
        code: `
interface Theme {
    primary: string;
    secondary: string;
    textColor: string;
}

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>({
        primary: '#007bff',
        secondary: '#6c757d',
        textColor: '#000000'
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom Hook for using theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};`,
        description: "TypeScript va Context API orqali global state management",
        result: `{
    "feature": "TypeScript Context",
    "concepts": [
        "Strongly Typed Context",
        "Custom Hook Integration",
        "Type Safety",
        "Global State Management"
    ]
}`
    },
    {
        id: 5,
        title: "Advanced Event Handling",
        code: `
interface FormData {
    email: string;
    password: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Type-safe form submission
            const response = await submitForm(formData);
            console.log(response);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};`,
        description: "TypeScript bilan event handling va form validatsiya",
        result: `{
    "feature": "Event Handling",
    "concepts": [
        "Event Type Safety",
        "Form Event Types",
        "Error Handling",
        "Type Inference"
    ]
}`
    }
];

export default dataAdvancedTypeMukammal;
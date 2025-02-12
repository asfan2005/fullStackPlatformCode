const dataAdvancedRouting = [
    {
        id: 1,
        title: "React Advanced Routing",
        description: "React Router DOM yordamida murakkab routing tizimini yaratish",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*uJaOPQe5WfitN76wyKAIXA.png",
        mainTopics: {
            introduction: {
                title: "Advanced Routing Asoslari",
                points: [
                    "Nested Routes",
                    "Dynamic Routes",
                    "Protected Routes",
                    "Route Guards",
                    "Route Parameters",
                    "Query Parameters",
                    "Navigation Programmatically",
                    "Custom Hooks for Routing"
                ]
            },
            codeExamples: {
                title: "Advanced Routing Namunalari",
                components: [
                    {
                        name: "1. Nested Routes",
                        description: "Ichma-ich joylashgan routelar bilan ishlash",
                        code: `
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard/profile">Profile</Link>
                <Link to="/dashboard/settings">Settings</Link>
            </nav>
            <Outlet />
        </div>
    );
};

const Dashboard = () => <h2>Dashboard Home</h2>;
const Profile = () => <h2>User Profile</h2>;
const Settings = () => <h2>Settings Page</h2>;

const App = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};`
                    },
                    {
                        name: "2. Protected Routes",
                        description: "Himoyalangan routelar yaratish",
                        code: `
import { Navigate, useLocation } from 'react-router-dom';

const useAuth = () => {
    // Authentication logic
    return {
        isAuthenticated: localStorage.getItem('token') !== null
    };
};

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};`
                    },
                    {
                        name: "3. Dynamic Routes",
                        description: "Dinamik parametrli routelar",
                        code: `
import { useParams, useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <div>
            <h2>Products {category && \`in \${category}\`}</h2>
            {/* Product list rendering */}
        </div>
    );
};

const ProductDetail = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h2>Product Details for ID: {id}</h2>
            {/* Product details rendering */}
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    );
};`
                    },
                    {
                        name: "4. Route Guards",
                        description: "Route guardlar va middleware",
                        code: `
const RoleGuard = ({ children, requiredRole }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || user.role !== requiredRole) {
        return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }

    return children;
};

const AdminRoute = ({ children }) => {
    return (
        <RoleGuard requiredRole="admin">
            {children}
        </RoleGuard>
    );
};

const App = () => {
    return (
        <Routes>
            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminPanel />
                    </AdminRoute>
                }
            />
        </Routes>
    );
};`
                    },
                    {
                        name: "5. Custom Routing Hooks",
                        description: "Routing uchun maxsus hooklar",
                        code: `
import { useNavigate, useLocation } from 'react-router-dom';

const useCustomNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => navigate(-1);
    
    const goToPage = (path, params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        navigate(\`\${path}?\${queryString}\`);
    };

    const redirectWithState = (path, state) => {
        navigate(path, { state });
    };

    return {
        goBack,
        goToPage,
        redirectWithState,
        currentPath: location.pathname
    };
};

// Usage Example
const NavigationExample = () => {
    const { goBack, goToPage, currentPath } = useCustomNavigation();

    return (
        <div>
            <button onClick={goBack}>Back</button>
            <button onClick={() => goToPage('/products', { category: 'electronics' })}>
                Electronics
            </button>
            <p>Current Path: {currentPath}</p>
        </div>
    );
};`
                    },
                    {
                        name: "6. Error Handling Routes",
                        description: "Xatoliklarni qayta ishlash uchun route",
                        code: `
import { Routes, Route, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    const error = useRouteError();
    
    return (
        <div className="error-container">
            <h2>Xatolik yuz berdi!</h2>
            <p>{error.message}</p>
            <Link to="/">Bosh sahifaga qaytish</Link>
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};`
                    },
                    {
                        name: "7. Authentication Flow",
                        description: "To'liq autentifikatsiya oqimi",
                        code: `
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (credentials) => {
        try {
            const response = await loginAPI(credentials);
            setUser(response.user);
            localStorage.setItem('token', response.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button type="submit">Login</button>
        </form>
    );
};`
                    },
                    {
                        name: "8. Route Transitions",
                        description: "Route o'tishlar animatsiyasi",
                        code: `
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

// CSS styles
const styles = \`
.page-enter {
    opacity: 0;
    transform: translateX(100%);
}
.page-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 300ms ease-in;
}
.page-exit {
    opacity: 1;
    transform: translateX(0);
}
.page-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 300ms ease-in;
}\`;`
                    }
                ],
                features: [
                    "Nested Routing",
                    "Protected Routes",
                    "Dynamic Route Parameters",
                    "Query Parameters",
                    "Route Guards",
                    "Custom Navigation Hooks",
                    "Error Handling",
                    "Authentication Flow",
                    "Route Transitions",
                    "Loading States"
                ],
                bestPractices: {
                    title: "Best Practices",
                    practices: [
                        {
                            name: "Route Organization",
                            description: "Routelarni to'g'ri tashkil qilish",
                            example: `
// routes/index.js
const routes = [
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'profile', element: <Profile /> }
        ]
    }
];`
                        },
                        {
                            name: "Lazy Loading",
                            description: "Routelarni lazy load qilish",
                            example: `
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

const App = () => (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Suspense>
);`
                        },
                        {
                            name: "Error Boundaries",
                            description: "Xatolarni boshqarish",
                            example: `
class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    
    componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }
        return this.props.children;
    }
}`
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Router Documentation",
                        url: "https://reactrouter.com/"
                    },
                    {
                        name: "React Router Tutorial",
                        url: "https://reactrouter.com/docs/en/v6/getting-started/tutorial"
                    }
                ]
            }
        }
    }
];

export default dataAdvancedRouting;
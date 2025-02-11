const dataReactRouter = [
    {
        id: 1,
        title: "React Router",
        level: "Boshlang'ich",
        description: "React Router yordamida Single Page Application yaratishning to'liq qo'llanmasi",
        image: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbohilxedfl6ijlltfyeq.png",
        mainTopics: {
            introduction: {
                title: "React Router Asoslari",
                points: [
                    "React Router nima va nima uchun kerak",
                    "SPA (Single Page Application) tushunchasi",
                    "Router turlari va farqlari",
                    "Asosiy Router komponentlari",
                    "Routing konfiguratsiyasi"
                ]
            },
            routerTypes: {
                title: "Router Turlari",
                types: [
                    {
                        name: "BrowserRouter",
                        description: "HTML5 History API dan foydalanadigan zamonaviy router",
                        example: `
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}`
                    },
                    {
                        name: "HashRouter",
                        description: "URL da # belgisidan foydalanadigan router",
                        example: `
import { HashRouter } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}`
                    }
                ]
            },
            basicComponents: {
                title: "Asosiy Komponentlar",
                components: [
                    {
                        name: "Route",
                        description: "URL va komponent orasidagi bog'lanish",
                        example: `
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}`
                    },
                    {
                        name: "Link",
                        description: "Sahifalar orasida harakatlanish uchun komponent",
                        example: `
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Bosh Sahifa</Link>
            <Link to="/about">Biz Haqimizda</Link>
            <Link to="/contact">Aloqa</Link>
        </nav>
    );
}`
                    },
                    {
                        name: "NavLink",
                        description: "Aktiv holatni kuzatuvchi maxsus Link komponenti",
                        example: `
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? "active" : ""
                }
            >
                Bosh Sahifa
            </NavLink>
        </nav>
    );
}`
                    }
                ]
            },
            advancedFeatures: {
                title: "Kengaytirilgan Xususiyatlar",
                features: [
                    {
                        name: "Dynamic Routes",
                        description: "Dinamik parametrli routerlar",
                        example: `
<Route path="/product/:id" element={<Product />} />

// Product komponenti ichida
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    return <div>Mahsulot ID: {id}</div>;
}`
                    },
                    {
                        name: "Nested Routes",
                        description: "Ichma-ich joylashgan routerlar",
                        example: `
<Routes>
    <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
    </Route>
</Routes>

// Dashboard komponenti ichida
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}`
                    },
                    {
                        name: "Protected Routes",
                        description: "Himoyalangan routerlar",
                        example: `
function PrivateRoute({ children }) {
    const auth = useAuth(); // Authentication hooki

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

<Route 
    path="/admin" 
    element={
        <PrivateRoute>
            <AdminPanel />
        </PrivateRoute>
    } 
/>`
                    }
                ]
            },
            hooks: {
                title: "React Router Hooks",
                routerHooks: [
                    {
                        name: "useNavigate",
                        description: "Dasturiy ravishda navigatsiya qilish",
                        example: `
import { useNavigate } from 'react-router-dom';

function LoginButton() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Login logikasi
        navigate('/dashboard');
    };

    return <button onClick={handleLogin}>Login</button>;
}`
                    },
                    {
                        name: "useLocation",
                        description: "Joriy URL ma'lumotlarini olish",
                        example: `
import { useLocation } from 'react-router-dom';

function LocationInfo() {
    const location = useLocation();
    
    return (
        <div>
            <p>Pathname: {location.pathname}</p>
            <p>Search: {location.search}</p>
            <p>Hash: {location.hash}</p>
        </div>
    );
}`
                    },
                    {
                        name: "useSearchParams",
                        description: "URL query parametrlari bilan ishlash",
                        example: `
import { useSearchParams } from 'react-router-dom';

function SearchComponent() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <input
            value={searchParams.get('query') || ''}
            onChange={(e) => {
                setSearchParams({ query: e.target.value });
            }}
        />
    );
}`
                    }
                ]
            }
        },
        practicalExamples: {
            title: "Amaliy Misollar",
            examples: [
                {
                    name: "Asosiy Router Strukturasi",
                    code: `
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Bosh Sahifa</Link>
                <Link to="/products">Mahsulotlar</Link>
                <Link to="/about">Biz Haqimizda</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />}>
                    <Route path=":id" element={<ProductDetails />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}`
                },
                {
                    name: "Authentication bilan Router",
                    code: `
import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    function PrivateRoute({ children }) {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    return (
        <Routes>
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route 
                path="/dashboard" 
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } 
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}`
                }
            ]
        },
        bestPractices: {
            title: "Eng Yaxshi Amaliyotlar",
            practices: [
                "Route'larni alohida fayllarda saqlash",
                "Lazy loading qo'llash",
                "404 sahifasini to'g'ri sozlash",
                "URL parametrlarini validatsiya qilish",
                "Route'lar uchun constants faylidan foydalanish",
                "Navigation logic'ni hook'larga ajratish",
                "Route guard'lardan foydalanish",
                "URL'larni SEO-friendly qilish",
                "Route'lar uchun test yozish",
                "Performance optimizatsiya qilish"
            ]
        }
    }
];

export default dataReactRouter;
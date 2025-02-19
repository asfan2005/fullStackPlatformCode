const dataAdvancedRoutingMukammal = [
    {
        id: 1,
        title: "Protected Routes",
        code: `
import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

// Himoyalangan route komponenti
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');
    
    return isAuthenticated ? children : <Navigate to="/login" />;
};

// Asosiy komponentlar
const Dashboard = () => <div>Dashboard Sahifasi</div>;
const Login = () => <div>Login Sahifasi</div>;
const Profile = () => <div>Profil Sahifasi</div>;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/profile" 
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}`,
        description: "Himoyalangan routelarni yaratish va foydalanuvchi autentifikatsiyasini tekshirish",
        result: `{
    "demo": "https://codesandbox.io/s/protected-routes-demo",
    "output": {
        "authenticated": true,
        "routes": ["/dashboard", "/profile"],
        "redirectTo": "/login"
    }
}`
    },
    {
        id: 2,
        title: "Nested Routes with Layouts",
        code: `
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Layout komponenti
const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <nav>
                <Link to="/dashboard">Asosiy</Link>
                <Link to="/dashboard/users">Foydalanuvchilar</Link>
                <Link to="/dashboard/settings">Sozlamalar</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

// Ichki komponentlar
const DashboardHome = () => <div>Asosiy Panel</div>;
const Users = () => <div>Foydalanuvchilar Ro'yxati</div>;
const Settings = () => <div>Sozlamalar</div>;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}`,
        description: "Ichma-ich joylashgan routelar va layout strukturasini yaratish",
        result: `{
    "demo": "https://codesandbox.io/s/nested-routes-demo",
    "output": {
        "layout": "DashboardLayout",
        "nestedRoutes": [
            "/dashboard",
            "/dashboard/users",
            "/dashboard/settings"
        ]
    }
}`
    },
    {
        id: 3,
        title: "Dynamic Route Parameters",
        code: `
import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    useParams, 
    useNavigate 
} from 'react-router-dom';

// Mahsulot ma'lumotlari komponenti
const ProductDetails = () => {
    const { id, category } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Mahsulot: {id}</h2>
            <p>Kategoriya: {category}</p>
            <button onClick={() => navigate(-1)}>
                Orqaga qaytish
            </button>
        </div>
    );
};

// Kategoriya komponenti
const CategoryProducts = () => {
    const { category } = useParams();
    
    return (
        <div>
            <h2>{category} kategoriyasidagi mahsulotlar</h2>
            {/* Mahsulotlar ro'yxati */}
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/category/:category" element={<CategoryProducts />} />
                <Route 
                    path="/category/:category/product/:id" 
                    element={<ProductDetails />} 
                />
            </Routes>
        </BrowserRouter>
    );
}`,
        description: "Dinamik route parametrlaridan foydalanish va ularni boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/dynamic-routes-demo",
    "output": {
        "routes": {
            "category": "/category/:category",
            "product": "/category/:category/product/:id"
        },
        "params": {
            "category": "electronics",
            "id": "123"
        }
    }
}`
    }
];

export default dataAdvancedRoutingMukammal;
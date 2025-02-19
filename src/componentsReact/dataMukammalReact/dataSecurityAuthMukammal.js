const dataSecurityAuthMukammal = [
    {
        id: 1,
        title: "JWT Authentication",
        code: `
import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

// Auth Context
const AuthContext = createContext(null);

// Auth Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/login', { email, password });
            const { token, user } = response.data;
            
            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            
            // Add token to axios headers
            axios.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
            
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Example Usage
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.success) {
            console.log('Login successful');
        } else {
            console.error('Login failed:', result.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
}`,
        description: "JWT Authentication - Xavfsiz autentifikatsiya tizimi",
        result: `{
    "demo": "https://codesandbox.io/s/jwt-auth-demo",
    "output": {
        "success": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
            "id": 1,
            "email": "user@example.com",
            "name": "John Doe"
        }
    }
}`
    },
    {
        id: 2,
        title: "Protected Routes",
        code: `
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

// Example Usage
function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}`,
        description: "Protected Routes - Himoyalangan sahifalar yaratish",
        result: `{
    "demo": "https://codesandbox.io/s/protected-routes-demo",
    "output": {
        "authenticated": true,
        "currentRoute": "/dashboard",
        "access": "granted"
    }
}`
    },
    {
        id: 3,
        title: "Role-Based Access Control",
        code: `
import React, { createContext, useContext } from 'react';

// RBAC Context
const RBACContext = createContext(null);

// RBAC Provider
export const RBACProvider = ({ children }) => {
    const checkPermission = (userRole, requiredRole) => {
        const roles = {
            admin: 3,
            manager: 2,
            user: 1
        };
        return roles[userRole] >= roles[requiredRole];
    };

    return (
        <RBACContext.Provider value={{ checkPermission }}>
            {children}
        </RBACContext.Provider>
    );
};

// Protected Component with Role Check
const RoleProtected = ({ children, requiredRole }) => {
    const { user } = useContext(AuthContext);
    const { checkPermission } = useContext(RBACContext);

    if (!user || !checkPermission(user.role, requiredRole)) {
        return <div>Access Denied</div>;
    }

    return children;
};

// Example Usage
function AdminPanel() {
    return (
        <RoleProtected requiredRole="admin">
            <div>
                <h2>Admin Panel</h2>
                <button>Delete User</button>
                <button>Edit Settings</button>
            </div>
        </RoleProtected>
    );
}`,
        description: "Role-Based Access Control - Foydalanuvchi huquqlarini boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/rbac-demo",
    "output": {
        "userRole": "admin",
        "access": {
            "adminPanel": true,
            "userManagement": true,
            "settings": true
        }
    }
}`
    }
];

export default dataSecurityAuthMukammal;
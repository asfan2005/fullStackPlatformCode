const dataSecurityBosh = [
    {
        id: 1,
        title: "React Security",
        level: "Boshlang'ich",
        description: "React ilovalar xavfsizligini ta'minlash va zaif tomonlarni himoya qilish usullari",
        image: "https://reactjs.org/logo-og.png",
        mainTopics: {
            introduction: {
                title: "React Security Asoslari",
                points: [
                    "XSS (Cross-Site Scripting) himoyasi",
                    "CSRF (Cross-Site Request Forgery) himoyasi",
                    "Authentication va Authorization",
                    "Secure State Management",
                    "API Security",
                    "Environment Variables",
                    "Secure Routing",
                    "Input Validation",
                    "Dependency Security"
                ]
            },
            coreConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "XSS Protection",
                        description: "Cross-site scripting hujumlaridan himoyalanish",
                        example: `
// components/SafeHTML.jsx
import DOMPurify from 'dompurify';

function SafeHTML({ content }) {
    const sanitizedContent = DOMPurify.sanitize(content);
    
    return (
        <div 
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="safe-html-container"
        />
    );
}`
                    },
                    {
                        name: "Secure Forms",
                        description: "Formalarni xavfsiz boshqarish",
                        example: `
// components/SecureForm.jsx
import { useState } from 'react';
import { validateInput } from '../utils/security';

function SecureForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateInput(formData.username) || 
            !validateInput(formData.password)) {
            alert("Xavfsizlik tekshiruvidan o'tmadi!");
            return;
        }

        // Xavfsiz so'rov yuborish
        submitSecurely(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({
                    ...formData,
                    username: e.target.value.trim()
                })}
                maxLength={50}
            />
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({
                    ...formData,
                    password: e.target.value
                })}
            />
            <button type="submit">Yuborish</button>
        </form>
    );
}`
                    },
                    {
                        name: "JWT Handler",
                        description: "JWT tokenlarni xavfsiz saqlash",
                        example: `
// utils/jwt.js
class JWTHandler {
    static setToken(token) {
        // HTTPOnly cookie orqali saqlash tavsiya etiladi
        document.cookie = \`jwt=\${token}; path=/; secure; samesite=strict\`;
    }

    static getToken() {
        return document.cookie
            .split('; ')
            .find(row => row.startsWith('jwt='))
            ?.split('=')[1];
    }

    static removeToken() {
        document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
}`
                    }
                ]
            },
            securityTechniques: {
                title: "Xavfsizlik Usullari",
                techniques: [
                    {
                        name: "API Security",
                        description: "API so'rovlarini xavfsiz amalga oshirish",
                        example: `
// utils/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Token yaroqsiz - foydalanuvchini chiqarish
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;`
                    },
                    {
                        name: "Route Protection",
                        description: "Routelarni himoyalash",
                        example: `
// components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute({ children, requiredRole }) {
    const { user, isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate 
            to="/login" 
            state={{ from: location }} 
            replace 
        />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/forbidden" replace />;
    }

    return children;
}`
                    }
                ]
            },
            practicalExamples: {
                title: "Amaliy Misollar",
                examples: [
                    {
                        name: "Secure Authentication",
                        code: `
// hooks/useAuth.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await api.get('/auth/me');
            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        const { token, user } = response.data;
        
        localStorage.setItem('token', token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}`
                    },
                    {
                        name: "Input Sanitization",
                        code: `
// utils/sanitizer.js
import DOMPurify from 'dompurify';

export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return input;
    
    return DOMPurify.sanitize(input, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
        ALLOWED_ATTR: []
    });
};

// components/SecureInput.jsx
function SecureInput({ value, onChange, ...props }) {
    const handleChange = (e) => {
        const sanitizedValue = sanitizeInput(e.target.value);
        onChange(sanitizedValue);
    };

    return (
        <input
            value={value}
            onChange={handleChange}
            {...props}
        />
    );
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    "Inputlarni sanitatsiya qilish",
                    "HTTPS protokolidan foydalanish",
                    "Xavfsiz state management",
                    "Token-based authentication",
                    "API endpointlarni himoyalash",
                    "Environment variables'larni to'g'ri saqlash",
                    "Dependency audit",
                    "Regular security updates",
                    "Error handling",
                    "Access control",
                    "Data encryption",
                    "Security headers",
                    "CORS configuration",
                    "Password hashing"
                ],
                examples: [
                    {
                        name: "Input Sanitization",
                        description: "Inputlarni xavfsiz tozalash",
                        code: `
// utils/sanitization.js
import DOMPurify from 'dompurify';
import validator from 'validator';

export const sanitizeHTML = (content) => {
    return DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
        ALLOWED_ATTR: []
    });
};

export const sanitizeUserInput = {
    email: (email) => validator.normalizeEmail(email),
    text: (text) => validator.escape(text),
    url: (url) => validator.isURL(url) ? url : '',
    phone: (phone) => validator.blacklist(phone, '\\[\\]\\{\\}\\(\\)\\\'\\\"\\;')
};`
                    },
                    {
                        name: "HTTPS Configuration",
                        description: "HTTPS sozlamalari",
                        code: `
// server.js
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

const app = express();

// HTTPS options
const options = {
    key: fs.readFileSync('path/to/key.pem'),
    cert: fs.readFileSync('path/to/cert.pem')
};

// Force HTTPS
app.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect(['https://', req.hostname, req.url].join(''));
    }
    next();
});

https.createServer(options, app).listen(443);`
                    },
                    {
                        name: "Secure State Management",
                        description: "Xavfsiz state boshqaruvi",
                        code: `
// store/secureStore.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const encryptor = encryptTransform({
    secretKey: process.env.REACT_APP_STORE_KEY,
    onError: (error) => {
        console.error('Encryption Error:', error);
    },
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptor],
    whitelist: ['auth', 'user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);`
                    },
                    {
                        name: "Token Authentication",
                        description: "Token asosida autentifikatsiya",
                        code: `
// services/auth.service.js
import jwtDecode from 'jwt-decode';

class AuthService {
    static TOKEN_KEY = 'auth_token';
    static REFRESH_KEY = 'refresh_token';

    static setTokens(accessToken, refreshToken) {
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.REFRESH_KEY, refreshToken);
    }

    static getAccessToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    static isTokenValid(token) {
        if (!token) return false;
        try {
            const decoded = jwtDecode(token);
            return decoded.exp > Date.now() / 1000;
        } catch {
            return false;
        }
    }

    static async refreshToken() {
        const refreshToken = localStorage.getItem(this.REFRESH_KEY);
        if (!refreshToken) throw new Error('No refresh token');

        const response = await fetch('/api/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken })
        });

        if (!response.ok) throw new Error('Token refresh failed');

        const { accessToken, newRefreshToken } = await response.json();
        this.setTokens(accessToken, newRefreshToken);
        return accessToken;
    }
}`
                    },
                    {
                        name: "API Security",
                        description: "API endpointlarni himoyalash",
                        code: `
// middleware/apiSecurity.js
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later'
});

const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS.split(','),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

module.exports = {
    apiLimiter,
    corsConfig: cors(corsOptions)
};`
                    },
                    {
                        name: "Environment Variables",
                        description: "Environment o'zgaruvchilarini boshqarish",
                        code: `
// config/env.config.js
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables based on NODE_ENV
dotenv.config({
    path: path.resolve(process.cwd(), \`.env.\${process.env.NODE_ENV}\`)
});

const requiredEnvVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'API_KEY'
];

// Validate required environment variables
requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
        throw new Error(\`Missing required environment variable: \${envVar}\`);
    }
});

module.exports = {
    database: {
        url: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production'
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: '1h'
    },
    api: {
        key: process.env.API_KEY,
        url: process.env.API_URL
    }
};`
                    },
                    {
                        name: "Dependency Audit",
                        description: "Dependency xavfsizlik tekshiruvi",
                        code: `
// scripts/security-audit.js
const { exec } = require('child_process');
const fs = require('fs');

const runAudit = () => {
    exec('npm audit --json', (error, stdout) => {
        if (error) {
            console.error('Audit failed:', error);
            process.exit(1);
        }

        const auditResult = JSON.parse(stdout);
        const report = {
            timestamp: new Date().toISOString(),
            vulnerabilities: auditResult.vulnerabilities,
            summary: auditResult.metadata
        };

        fs.writeFileSync(
            \`./security-reports/audit-\${Date.now()}.json\`,
            JSON.stringify(report, null, 2)
        );

        if (auditResult.metadata.vulnerabilities.high > 0) {
            console.error('High severity vulnerabilities found!');
            process.exit(1);
        }
    });
};

runAudit();`
                    },
                    {
                        name: "Error Handling",
                        description: "Xavfsiz xato boshqaruvi",
                        code: `
// utils/errorHandler.js
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

const handleError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'production') {
        // Production error response
        if (err.isOperational) {
            return res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        }
        // Programming or unknown errors
        console.error('ERROR 💥', err);
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        });
    }

    // Development error response
    return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};`
                    },
                    {
                        name: "Access Control",
                        description: "Foydalanuvchi huquqlarini boshqarish",
                        code: `
// middleware/accessControl.js
const roles = {
    ADMIN: 'admin',
    USER: 'user',
    EDITOR: 'editor'
};

const permissions = {
    CREATE: 'create',
    READ: 'read',
    UPDATE: 'update',
    DELETE: 'delete'
};

const rolePermissions = {
    [roles.ADMIN]: [
        permissions.CREATE,
        permissions.READ,
        permissions.UPDATE,
        permissions.DELETE
    ],
    [roles.EDITOR]: [
        permissions.CREATE,
        permissions.READ,
        permissions.UPDATE
    ],
    [roles.USER]: [
        permissions.READ
    ]
};

const checkPermission = (requiredPermission) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (!rolePermissions[userRole]?.includes(requiredPermission)) {
            return res.status(403).json({
                status: 'error',
                message: 'Permission denied'
            });
        }
        next();
    };
};`
                    },
                    {
                        name: "Data Encryption",
                        description: "Ma'lumotlarni shifrlash",
                        code: `
// utils/encryption.js
const crypto = require('crypto');

class Encryption {
    constructor(encryptionKey) {
        this.algorithm = 'aes-256-gcm';
        this.key = crypto.scryptSync(encryptionKey, 'salt', 32);
    }

    encrypt(text) {
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
        
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        const authTag = cipher.getAuthTag();
        
        return {
            iv: iv.toString('hex'),
            encrypted: encrypted,
            authTag: authTag.toString('hex')
        };
    }

    decrypt(encrypted) {
        const decipher = crypto.createDecipheriv(
            this.algorithm,
            this.key,
            Buffer.from(encrypted.iv, 'hex')
        );
        
        decipher.setAuthTag(Buffer.from(encrypted.authTag, 'hex'));
        
        let decrypted = decipher.update(encrypted.encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        return decrypted;
    }
}`
                    },
                    {
                        name: "Password Hashing",
                        description: "Parollarni xavfsiz saqlash",
                        code: `
// utils/passwordUtils.js
const bcrypt = require('bcrypt');
const crypto = require('crypto');

class PasswordManager {
    static async hashPassword(password) {
        const salt = await bcrypt.genSalt(12);
        return bcrypt.hash(password, salt);
    }

    static async verifyPassword(password, hash) {
        return bcrypt.compare(password, hash);
    }

    static generateResetToken() {
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hash = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        return {
            resetToken,
            hash,
            expires: Date.now() + 10 * 60 * 1000 // 10 minutes
        };
    }

    static validatePasswordStrength(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumbers &&
            hasSpecialChar
        );
    }
}`
                    }
                ]
            }
        }
    }
];

export default dataSecurityBosh;
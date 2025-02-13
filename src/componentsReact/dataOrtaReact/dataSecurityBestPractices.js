const dataSecurityBestPractices = [
    {
        id: 1,
        title: "React Security Best Practices",
        description: "React ilovalarining xavfsizligini ta'minlash bo'yicha to'liq qo'llanma",
        image: "https://images.prismic.io/turing/652ec424fbd9a45bcec81999_React_JS_Security_Best_Practices_11zon_9a002acdd9.webp?auto=format,compress",
        mainTopics: {
            introduction: {
                title: "React Xavfsizlik Asoslari",
                points: [
                    "XSS (Cross-Site Scripting) Himoyasi",
                    "CSRF (Cross-Site Request Forgery) Himoyasi",
                    "Authentication va Authorization",
                    "Secure State Management",
                    "API Security",
                    "Dependency Security",
                    "Environment Variables",
                    "Security Headers"
                ]
            },
            codeExamples: {
                title: "Xavfsizlik Namunalari",
                components: [
                    {
                        name: "1. XSS Protection",
                        description: "XSS hujumlaridan himoyalanish",
                        code: `
// SecureContent.jsx
import DOMPurify from 'dompurify';
import { decode } from 'html-entities';

const SecureContent = ({ htmlContent }) => {
    const sanitizeContent = (content) => {
        return DOMPurify.sanitize(decode(content), {
            ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
            ALLOWED_ATTR: []
        });
    };

    return <div dangerouslySetInnerHTML={{ __html: sanitizeContent(htmlContent) }} />;
};`
                    },
                    {
                        name: "2. Secure Authentication",
                        description: "Xavfsiz autentifikatsiya",
                        code: `
// auth/secureAuth.js
import { encrypt, decrypt } from './encryption';

const secureStorage = {
    setToken: (token) => {
        const encrypted = encrypt(token);
        sessionStorage.setItem('auth_token', encrypted);
    },
    
    getToken: () => {
        const encrypted = sessionStorage.getItem('auth_token');
        return encrypted ? decrypt(encrypted) : null;
    },
    
    clearToken: () => {
        sessionStorage.removeItem('auth_token');
    }
};

export const useAuth = () => {
    const login = async (credentials) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials),
                credentials: 'include'
            });
            
            if (!response.ok) throw new Error('Auth failed');
            
            const { token } = await response.json();
            secureStorage.setToken(token);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    return { login, secureStorage };
};`
                    },
                    {
                        name: "3. Secure API Calls",
                        description: "Xavfsiz API so'rovlari",
                        code: `
// api/secureApi.js
import axios from 'axios';

const secureApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

secureApi.interceptors.request.use((config) => {
    const token = secureStorage.getToken();
    if (token) {
        config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
});

secureApi.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            secureStorage.clearToken();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);`
                    },
                    {
                        name: "4. Input Validation",
                        description: "Foydalanuvchi kiritgan ma'lumotlarni tekshirish",
                        code: `
// validation/inputValidation.js
import * as yup from 'yup';

const userSchema = yup.object().shape({
    username: yup.string()
        .required('Username majburiy')
        .min(3, 'Username kamida 3 ta belgi')
        .matches(/^[a-zA-Z0-9_]+$/, 'Faqat harflar, raqamlar va _ belgisi'),
    email: yup.string()
        .required('Email majburiy')
        .email('Email noto'g'ri formatda'),
    password: yup.string()
        .required('Parol majburiy')
        .min(8, 'Parol kamida 8 ta belgi')
        .matches(/[A-Z]/, 'Kamida 1 ta katta harf')
        .matches(/[0-9]/, 'Kamida 1 ta raqam')
});

export const validateInput = async (data) => {
    try {
        await userSchema.validate(data, { abortEarly: false });
        return { isValid: true, errors: {} };
    } catch (err) {
        const errors = err.inner.reduce((acc, error) => {
            acc[error.path] = error.message;
            return acc;
        }, {});
        return { isValid: false, errors };
    }
};`
                    },
                    {
                        name: "5. Protected Routes",
                        description: "Himoyalangan routelar",
                        code: `
// routes/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

// Usage in routes
const AppRoutes = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/public" element={<PublicPage />} />
        <Route
            path="/dashboard"
            element={
                <ProtectedRoute>
                    <DashboardPage />
                </ProtectedRoute>
            }
        />
    </Routes>
);`
                    },
                    {
                        name: "6. CSRF Protection",
                        description: "CSRF tokenni amalga oshirish",
                        code: `
// security/csrfProtection.js
const getCsrfToken = () => {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
};

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'X-CSRF-Token': getCsrfToken(),
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

// Server side (Express.js)
app.use(csrf());
app.use((req, res, next) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
});`
                    },
                    {
                        name: "7. Secure Data Storage",
                        description: "Xavfsiz ma'lumotlarni saqlash",
                        code: `
// storage/secureStorage.js
import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_STORAGE_KEY;

export const secureStorage = {
    setItem: (key, data) => {
        const encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            SECRET_KEY
        ).toString();
        localStorage.setItem(key, encryptedData);
    },

    getItem: (key) => {
        const encryptedData = localStorage.getItem(key);
        if (!encryptedData) return null;

        const decrypted = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    },

    removeItem: (key) => {
        localStorage.removeItem(key);
    }
};`
                    },
                    {
                        name: "8. Security Headers",
                        description: "Xavfsizlik headerlarini sozlash",
                        code: `
// server/securityHeaders.js
// Express.js middleware
import helmet from 'helmet';

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://api.example.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
    }
}));`
                    },
                    {
                        name: "9. Regular Security Audit",
                        description: "Muntazam xavfsizlik tekshiruvi",
                        code: `
// security/auditLogger.js
export class SecurityAuditLogger {
    static logSecurityEvent(eventType, details) {
        const event = {
            timestamp: new Date().toISOString(),
            type: eventType,
            details,
            userId: getCurrentUserId(),
            ipAddress: getCurrentIpAddress()
        };

        // Log to secure storage
        secureApi.post('/api/security-logs', event);
        
        // Alert on suspicious activity
        if (this.isSuspiciousActivity(event)) {
            this.alertSecurityTeam(event);
        }
    }

    static isSuspiciousActivity(event) {
        // Implementation of security rules
        return false;
    }

    static alertSecurityTeam(event) {
        // Alert implementation
    }
}`
                    }
                ],
                features: [
                    {
                        title: "Security Features",
                        description: "Asosiy xavfsizlik xususiyatlari",
                        details: [
                            "Input validation va sanitization",
                            "Secure authentication flows",
                            "Protected routes",
                            "CSRF token implementation",
                            "Secure data storage"
                        ],
                        importance: "Ilovaning xavfsizligini ta'minlash va zaif nuqtalarni bartaraf etish"
                    }
                ],
                bestPractices: {
                    title: "Security Best Practices",
                    practices: [
                        {
                            name: "Data Protection",
                            description: "Ma'lumotlarni himoyalash",
                            tips: [
                                "Sensitive ma'lumotlarni shifrlash",
                                "Secure storage protocols",
                                "Access control implementation",
                                "Regular security audits",
                                "Security headers configuration"
                            ]
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "OWASP React Security Guidelines",
                        url: "https://cheatsheetseries.owasp.org/cheatsheets/React_Security_Cheat_Sheet.html"
                    },
                    {
                        name: "React Security Best Practices",
                        url: "https://www.patterns.dev/posts/react-security"
                    }
                ]
            }
        }
    }
];

export default dataSecurityBestPractices;
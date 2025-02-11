const dataApiIntegration = [
    {
        id: 1,
        title: "React API Integration",
        level: "Boshlang'ich",
        description: "React ilovalarida API bilan ishlash va ma'lumotlarni boshqarish",
        image: "https://aliyev.dev/storage/app/uploads/public/657/ed1/0bc/657ed10bc0b54523352220.png",
        mainTopics: {
            introduction: {
                title: "API Integration Asoslari",
                points: [
                    "REST API tushunchasi",
                    "HTTP so'rov turlari (GET, POST, PUT, DELETE)",
                    "Fetch API va Axios",
                    "Promise va async/await",
                    "Error handling",
                    "Loading states",
                    "Data caching",
                    "API security",
                    "CORS va proxy"
                ]
            },
            fetchExamples: {
                title: "Fetch API Misollari",
                concepts: [
                    {
                        name: "GET So'rovi",
                        description: "Ma'lumotlarni olish uchun GET so'rovi",
                        example: `
// services/api.js
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};`
                    },
                    {
                        name: "POST So'rovi",
                        description: "Yangi ma'lumot qo'shish uchun POST so'rovi",
                        example: `
const createItem = async (newItem) => {
    try {
        const response = await fetch('https://api.example.com/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};`
                    }
                ]
            },
            axiosExamples: {
                title: "Axios Bilan Ishlash",
                features: [
                    {
                        name: "Axios Instance",
                        description: "Axios instance yaratish va sozlash",
                        example: `
// api/axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = \`Bearer \${token}\`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;`
                    },
                    {
                        name: "CRUD Operations",
                        description: "Axios bilan CRUD operatsiyalari",
                        example: `
// services/userService.js
import api from '../api/axios';

export const userService = {
    getUsers: async () => {
        const response = await api.get('/users');
        return response.data;
    },
    
    getUserById: async (id) => {
        const response = await api.get(\`/users/\${id}\`);
        return response.data;
    },
    
    createUser: async (userData) => {
        const response = await api.post('/users', userData);
        return response.data;
    },
    
    updateUser: async (id, userData) => {
        const response = await api.put(\`/users/\${id}\`, userData);
        return response.data;
    },
    
    deleteUser: async (id) => {
        const response = await api.delete(\`/users/\${id}\`);
        return response.data;
    }
};`
                    }
                ]
            },
            customHooks: {
                title: "Custom API Hooks",
                examples: [
                    {
                        name: "useFetch Hook",
                        code: `
// hooks/useFetch.js
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};`
                    },
                    {
                        name: "useAPI Hook",
                        code: `
// hooks/useAPI.js
import { useState } from 'react';
import api from '../api/axios';

export const useAPI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (method, url, data = null) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await api({
                method,
                url,
                data
            });
            setLoading(false);
            return response.data;
        } catch (err) {
            setError(err.response?.data || 'Something went wrong');
            setLoading(false);
            throw err;
        }
    };

    return {
        loading,
        error,
        get: (url) => request('GET', url),
        post: (url, data) => request('POST', url, data),
        put: (url, data) => request('PUT', url, data),
        delete: (url) => request('DELETE', url)
    };
};`
                    }
                ]
            },
            bestPractices: {
                title: "API Integration Best Practices",
                practices: [
                    "Error handling strategiyasi",
                    "Loading state boshqaruvi",
                    "API response caching",
                    "Rate limiting",
                    "Retry logic",
                    "Authentication handling",
                    "Request cancellation",
                    "Data transformation",
                    "API versioning",
                    "Security best practices",
                    "Performance optimization",
                    "Testing API calls",
                    "Documentation",
                    "Monitoring va logging"
                ],
                examples: [
                    {
                        name: "Error Handling",
                        description: "Xatolarni boshqarish uchun global handler",
                        code: `
// utils/errorHandler.js
export class APIError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

export const handleAPIError = (error) => {
    if (error instanceof APIError) {
        // API xatoliklar uchun
        console.error(\`API Error: \${error.message} (Status: \${error.status})\`);
    } else {
        // Boshqa xatoliklar uchun
        console.error('Unexpected error:', error);
    }
    // Xatolik monitoring servisiga yuborish
    // sendToErrorMonitoring(error);
};`
                    },
                    {
                        name: "Loading State",
                        description: "Loading holatini boshqarish",
                        code: `
// hooks/useLoadingState.js
import { useState, useCallback } from 'react';

export const useLoadingState = (initialState = false) => {
    const [isLoading, setIsLoading] = useState(initialState);
    const [error, setError] = useState(null);

    const withLoading = useCallback(async (operation) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await operation();
            return result;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isLoading, error, withLoading };
};`
                    },
                    {
                        name: "API Caching",
                        description: "API natijalarini keshlashtirish",
                        code: `
// utils/apiCache.js
class APICache {
    constructor(ttl = 5 * 60 * 1000) { // 5 daqiqa
        this.cache = new Map();
        this.ttl = ttl;
    }

    set(key, value) {
        this.cache.set(key, {
            value,
            timestamp: Date.now()
        });
    }

    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() - item.timestamp > this.ttl) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    clear() {
        this.cache.clear();
    }
}

export const apiCache = new APICache();`
                    },
                    {
                        name: "Rate Limiting",
                        description: "So'rovlar sonini cheklash",
                        code: `
// utils/rateLimiter.js
export class RateLimiter {
    constructor(maxRequests = 10, timeWindow = 1000) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
    }

    async throttle() {
        const now = Date.now();
        this.requests = this.requests.filter(time => now - time < this.timeWindow);

        if (this.requests.length >= this.maxRequests) {
            const oldestRequest = this.requests[0];
            const waitTime = this.timeWindow - (now - oldestRequest);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }

        this.requests.push(now);
    }
}

// Ishlatish:
const limiter = new RateLimiter(10, 1000); // 1 sekundda 10 ta so'rov

export const makeThrottledRequest = async (apiCall) => {
    await limiter.throttle();
    return apiCall();
};`
                    },
                    {
                        name: "Retry Logic",
                        description: "Xato bo'lganda qayta urinish",
                        code: `
// utils/retry.js
export const retry = async (
    operation,
    retries = 3,
    delay = 1000,
    backoff = 2
) => {
    try {
        return await operation();
    } catch (error) {
        if (retries === 0) throw error;
        
        await new Promise(resolve => setTimeout(resolve, delay));
        
        return retry(
            operation,
            retries - 1,
            delay * backoff,
            backoff
        );
    }
};`
                    },
                    {
                        name: "Request Cancellation",
                        description: "So'rovlarni bekor qilish",
                        code: `
// hooks/useCancellableRequest.js
import { useRef, useEffect } from 'react';
import axios from 'axios';

export const useCancellableRequest = () => {
    const abortControllerRef = useRef(null);

    const makeRequest = async (url, options = {}) => {
        // Eski so'rovni bekor qilish
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Yangi abort controller yaratish
        abortControllerRef.current = new AbortController();

        try {
            const response = await axios({
                url,
                ...options,
                signal: abortControllerRef.current.signal
            });
            return response.data;
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request cancelled');
            } else {
                throw error;
            }
        }
    };

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    return { makeRequest };
};`
                    },
                    {
                        name: "Data Transformation",
                        description: "API ma'lumotlarini transformatsiya qilish",
                        code: `
// utils/dataTransformer.js
export class DataTransformer {
    static transform(data, schema) {
        if (Array.isArray(data)) {
            return data.map(item => this.transform(item, schema));
        }

        const result = {};
        for (const [key, transformer] of Object.entries(schema)) {
            if (typeof transformer === 'function') {
                result[key] = transformer(data[key], data);
            } else if (typeof transformer === 'string') {
                result[key] = data[transformer];
            }
        }
        return result;
    }
}

// Ishlatish:
const schema = {
    id: 'id',
    fullName: (firstName, data) => \`\${data.firstName} \${data.lastName}\`,
    age: age => parseInt(age),
};`
                    },
                    {
                        name: "API Testing",
                        description: "API testlarini yozish",
                        code: `
// __tests__/api.test.js
import { render, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('/api/users', (req, res, ctx) => {
        return res(
            ctx.json([
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' }
            ])
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches users successfully', async () => {
    const { result } = renderHook(() => useUsers());

    await act(async () => {
        await result.current.fetchUsers();
    });

    expect(result.current.users).toHaveLength(2);
    expect(result.current.users[0].name).toBe('John');
});`
                    },
                    {
                        name: "Monitoring",
                        description: "API monitoring va logging",
                        code: `
// utils/monitoring.js
export class APIMonitor {
    static logRequest(method, url, data) {
        console.log(\`[\${new Date().toISOString()}] \${method} \${url}\`, {
            data,
            timestamp: Date.now()
        });
    }

    static logResponse(response) {
        console.log(\`[\${new Date().toISOString()}] Response:\`, {
            status: response.status,
            data: response.data,
            timestamp: Date.now()
        });
    }

    static logError(error) {
        console.error(\`[\${new Date().toISOString()}] Error:\`, {
            message: error.message,
            stack: error.stack,
            timestamp: Date.now()
        });
    }
}

// API interceptor with monitoring
api.interceptors.request.use(
    (config) => {
        APIMonitor.logRequest(config.method, config.url, config.data);
        return config;
    },
    (error) => {
        APIMonitor.logError(error);
        return Promise.reject(error);
    }
);`
                    }
                ]
            }
        }
    }
];

export default dataApiIntegration;
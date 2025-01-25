const dataXavfsizlikOptimizatsiya = [
    {
        id: 1,
        title: "Xavfsizlik",
        description: "Web ilovalar xavfsizligini ta'minlash usullari",
        examples: [
            {
                name: "XSS Himoyasi",
                code: `// XSS himoyasi uchun input sanitizatsiya
function sanitizeInput(input) {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// CSRF Token implementatsiyasi
function setCsrfToken() {
    const token = Math.random().toString(36).slice(2);
    document.cookie = \`csrf-token=\${token}; path=/; secure\`;
    return token;
}

// Request yuborishda CSRF tokenni qo'shish
async function secureFetch(url, options = {}) {
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrf-token='))
        ?.split('=')[1];

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'X-CSRF-Token': token,
            'Content-Security-Policy': "default-src 'self'"
        }
    });
}`,
                explanation: "XSS va CSRF hujumlaridan himoyalanish",
                result: "Xavfsiz web ilova"
            }
        ]
    },
    {
        id: 2,
        title: "Performance Optimizatsiya",
        description: "Ilovaning ishlash tezligini oshirish usullari",
        examples: [
            {
                name: "Code Splitting va Lazy Loading",
                code: `// React komponenti lazy loading
import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => 
    import('./HeavyComponent')
);

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}

// Bundle size optimizatsiyasi
const optimizeImages = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                // Rasmni optimize qilish
                const maxWidth = 800;
                const scale = maxWidth / img.width;
                
                canvas.width = maxWidth;
                canvas.height = img.height * scale;
                
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
        };
        reader.readAsDataURL(blob);
    });
}`,
                explanation: "Kodni bo'lib yuklash va resurslarni optimizatsiya qilish",
                result: "Tezkor va samarali ilova"
            }
        ]
    },
    {
        id: 3,
        title: "Memory Management",
        description: "Xotira bilan ishlashni optimizatsiya qilish",
        examples: [
            {
                name: "Memory Leak oldini olish",
                code: `// Event listener'larni to'g'ri boshqarish
class MemoryEfficient extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        // Scroll logic
        console.log('Scrolling...');
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Event listener'ni tozalash
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return <div>Memory Efficient Component</div>;
    }
}

// WeakMap va WeakSet ishlatish
const cache = new WeakMap();

function memorizeData(obj) {
    if (!cache.has(obj)) {
        const result = expensiveOperation(obj);
        cache.set(obj, result);
    }
    return cache.get(obj);
}`,
                explanation: "Xotiradan samarali foydalanish",
                result: "Memory leak'larsiz ilova"
            }
        ]
    },
    {
        id: 4,
        title: "Monitoring va Debugging",
        description: "Ilova ishlashini kuzatish va xatolarni aniqlash",
        examples: [
            {
                name: "Performance Monitoring",
                code: `// Performance monitoring
const performanceMonitor = {
    startTime: null,
    
    start() {
        this.startTime = performance.now();
    },
    
    end(operationName) {
        const duration = performance.now() - this.startTime;
        console.log(\`\${operationName}: \${duration}ms\`);
        
        // Analytics ga yuborish
        this.sendToAnalytics({
            operationName,
            duration,
            timestamp: new Date().toISOString()
        });
    },
    
    sendToAnalytics(data) {
        // Analytics servicega yuborish
        navigator.sendBeacon('/analytics', JSON.stringify(data));
    }
};

// Error tracking
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Xatoni logging servicega yuborish
        logError({
            error: error,
            errorInfo: errorInfo,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Xatolik yuz berdi.</h1>;
        }
        return this.props.children;
    }
}`,
                explanation: "Ilova ishlashini monitoring qilish va xatolarni kuzatish",
                result: "Barqaror va ishonchli ilova"
            }
        ]
    }
];

export default dataXavfsizlikOptimizatsiya;
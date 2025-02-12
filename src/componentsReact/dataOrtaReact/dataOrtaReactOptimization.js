const dataOrtaReactOptimization = [
    {
        id: 1,
        title: "React Performance Optimization",
        level: "O'rta",
        description: "React ilovalarni optimizatsiya qilish usullari va texnikalari",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*PRSCPASXfR-Kc4sQ_0ZSKw.jpeg",
        mainTopics: {
            introduction: {
                title: "Optimizatsiya Asoslari",
                points: [
                    "useMemo va useCallback hooks",
                    "React.memo",
                    "Code Splitting",
                    "Lazy Loading",
                    "Bundle Size Optimization",
                    "React Profiler",
                    "Performance Monitoring"
                ]
            },
            codeExamples: {
                title: "Mukammal Optimizatsiya Namunalari",
                components: [
                    {
                        name: "1. useMemo - Murakkab Hisoblashlar",
                        description: "Qimmat hisob-kitoblarni keshlashtirish va qayta hisoblashlarni oldini olish",
                        code: `
import React, { useMemo, useState } from 'react';

const ExpensiveCalculations = ({ numbers, filter }) => {
    const filteredAndCalculated = useMemo(() => {
        console.log("Murakkab hisoblash bajarilmoqda...");
        
        // Filtrlash
        const filtered = numbers.filter(num => num > filter);
        
        // Murakkab hisoblash
        return filtered.map(num => {
            let result = 0;
            for (let i = 1; i <= num; i++) {
                result += Math.pow(i, 2);
            }
            return result;
        });
    }, [numbers, filter]); // Faqat numbers yoki filter o'zgarganda qayta hisoblanadi

    return (
        <div>
            <h3>Hisoblangan natijalar:</h3>
            <ul>
                {filteredAndCalculated.map((result, idx) => (
                    <li key={idx}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export const Calculator = () => {
    const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [filter, setFilter] = useState(5);
    const [count, setCount] = useState(0);

    return (
        <div>
            <ExpensiveCalculations numbers={numbers} filter={filter} />
            <button onClick={() => setFilter(f => f + 1)}>
                Filter: {filter}
            </button>
            <button onClick={() => setCount(c => c + 1)}>
                Render Count: {count}
            </button>
        </div>
    );
};`
                    },
                    {
                        name: "2. useCallback - Optimallashtirilgan Event Handlers",
                        description: "Funksiyalarni qayta yaratilishini oldini olish va child componentlar uchun optimal renderingni ta'minlash",
                        code: `
import React, { useCallback, useState, useEffect } from 'react';

const ItemList = React.memo(({ items, onItemClick, onItemDelete }) => {
    console.log("ItemList qayta renderlanmoqda");
    
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <span onClick={() => onItemClick(item.id)}>
                        {item.text}
                    </span>
                    <button onClick={() => onItemDelete(item.id)}>
                        O'chirish
                    </button>
                </li>
            ))}
        </ul>
    );
});

export const OptimizedList = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Element 1' },
        { id: 2, text: 'Element 2' },
    ]);
    const [selectedId, setSelectedId] = useState(null);

    const handleItemClick = useCallback((id) => {
        setSelectedId(id);
        // Boshqa operatsiyalar...
    }, []); // Bo'sh dependency array chunki setSelectedId stable

    const handleItemDelete = useCallback((id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }, []); // Bo'sh dependency array chunki setItems stable

    const addItem = useCallback(() => {
        setItems(prevItems => [
            ...prevItems,
            {
                id: Date.now(),
                text: \`Element \${prevItems.length + 1}\`
            }
        ]);
    }, []);

    return (
        <div>
            <ItemList 
                items={items}
                onItemClick={handleItemClick}
                onItemDelete={handleItemDelete}
            />
            <button onClick={addItem}>Yangi element qo'shish</button>
            {selectedId && <div>Tanlangan ID: {selectedId}</div>}
        </div>
    );
};`
                    },
                    {
                        name: "3. React.memo - Smart Component Memoization",
                        description: "Komponentlarni aqlli keshlash va keraksiz qayta renderinglarni oldini olish",
                        code: `
import React, { useState, useCallback } from 'react';

// Props comparison function
const arePropsEqual = (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id &&
           prevProps.user.name === nextProps.user.name &&
           prevProps.user.role === nextProps.user.role;
};

const UserProfile = React.memo(({ user, onUpdate }) => {
    console.log(\`UserProfile (\${user.name}) qayta renderlanmoqda\`);
    
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p>Role: {user.role}</p>
            <button onClick={() => onUpdate(user.id)}>
                Yangilash
            </button>
        </div>
    );
}, arePropsEqual);

export const UserDashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John', role: 'Admin' },
        { id: 2, name: 'Jane', role: 'User' },
    ]);
    const [updates, setUpdates] = useState(0);

    const handleUpdate = useCallback((userId) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.id === userId
                    ? { ...user, lastUpdate: new Date().toISOString() }
                    : user
            )
        );
        setUpdates(u => u + 1);
    }, []);

    return (
        <div>
            <h2>Foydalanuvchilar ({updates} yangilanishlar)</h2>
            {users.map(user => (
                <UserProfile 
                    key={user.id}
                    user={user}
                    onUpdate={handleUpdate}
                />
            ))}
        </div>
    );
};`
                    },
                    {
                        name: "4. Code Splitting va Lazy Loading",
                        description: "Ilovani kichik qismlarga bo'lish va kerak bo'lganda yuklash",
                        code: `
import React, { Suspense, lazy, useState } from 'react';

// Lazy loading components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const AnalyticsComponent = lazy(() => import('./AnalyticsComponent'));
const ReportsComponent = lazy(() => import('./ReportsComponent'));

// Loading component
const LoadingFallback = () => (
    <div className="loading">
        <div className="spinner"></div>
        <p>Yuklanmoqda...</p>
    </div>
);

export const DynamicDashboard = () => {
    const [activeTab, setActiveTab] = useState('main');

    const renderComponent = () => {
        switch (activeTab) {
            case 'analytics':
                return <AnalyticsComponent />;
            case 'reports':
                return <ReportsComponent />;
            default:
                return <HeavyComponent />;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab('main')}>
                    Asosiy
                </button>
                <button onClick={() => setActiveTab('analytics')}>
                    Analitika
                </button>
                <button onClick={() => setActiveTab('reports')}>
                    Hisobotlar
                </button>
            </nav>

            <Suspense fallback={<LoadingFallback />}>
                {renderComponent()}
            </Suspense>
        </div>
    );
};

// HeavyComponent.js faylida:
export const HeavyComponent = () => {
    return (
        <div>
            <h2>Katta Komponent</h2>
            {/* Og'ir kontent */}
        </div>
    );
};`
                    },
                    {
                        name: "5. Bundle Size Optimization",
                        description: "Bundle hajmini optimallashtirish va kerakli kodlarni import qilish",
                        code: `
// Optimal import
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { format } from 'date-fns/format';

// Custom hooks for optimization
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const OptimizedSearch = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    const handleSearch = throttle((e) => {
        setSearch(e.target.value);
    }, 200);

    return (
        <div>
            <input
                type="text"
                onChange={handleSearch}
                placeholder="Qidiruv..."
            />
            <div>
                Qidirilmoqda: {debouncedSearch}
            </div>
            <div>
                Sana: {format(new Date(), 'dd/MM/yyyy')}
            </div>
        </div>
    );
};`
                    },
                    {
                        name: "6. Performance Monitoring va React Profiler",
                        description: "Ilova ishlashini kuzatish va tahlil qilish",
                        code: `
import React, { Profiler, useState, useEffect } from 'react';

// Performance monitoring HOC
const withPerformanceMonitoring = (WrappedComponent, componentName) => {
    return function PerformanceMonitor(props) {
        const handleRender = (
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime
        ) => {
            console.log(\`
                Komponent: \${componentName}
                Rendering vaqti: \${actualDuration.toFixed(2)}ms
                Base duration: \${baseDuration.toFixed(2)}ms
                Commit vaqti: \${commitTime}
            \`);

            // Real monitoring service ga yuborish
            if (actualDuration > 16) { // 60fps dan past
                console.warn(\`\${componentName} sekin ishlamoqda!\`);
            }
        };

        return (
            <Profiler id={componentName} onRender={handleRender}>
                <WrappedComponent {...props} />
            </Profiler>
        );
    };
};

// Performance metrics hook
const usePerformanceMetrics = () => {
    useEffect(() => {
        const marks = performance.getEntriesByType('mark');
        const measures = performance.getEntriesByType('measure');
        
        console.log('Performance Marks:', marks);
        console.log('Performance Measures:', measures);
        
        return () => {
            performance.clearMarks();
            performance.clearMeasures();
        };
    }, []);
};

const HeavyList = ({ items }) => {
    usePerformanceMetrics();

    performance.mark('renderStart');
    
    const renderedItems = items.map(item => (
        <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    ));

    performance.mark('renderEnd');
    performance.measure('renderDuration', 'renderStart', 'renderEnd');

    return <div>{renderedItems}</div>;
};

export const MonitoredList = withPerformanceMonitoring(HeavyList, 'HeavyList');`
                    }
                ],
                features: [
                    "useMemo - qimmat hisob-kitoblarni keshlashtirish",
                    "useCallback - funksiyalarni keshlashtirish",
                    "React.memo - komponentlarni keshlashtirish",
                    "Code splitting - dinamik import",
                    "Bundle optimization - import optimizatsiyasi",
                    "Performance monitoring - ishlash tezligini kuzatish",
                    "React Profiler - komponentlarni tahlil qilish"
                ]
            }
        }
    },
];

export default dataOrtaReactOptimization;
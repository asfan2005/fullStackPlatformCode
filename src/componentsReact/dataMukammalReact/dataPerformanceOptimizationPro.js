export const reactPerformanceOptimizationProData = {
    title: "React Performance Optimization Pro",
    url: "react-performance-optimization-pro",
    tutorials: [
        {
            id: 1,
            title: "React.memo() Optimizatsiyasi",
            url: "react-memo",
            content: [
                {
                    title: "React.memo() nima?",
                    text: "React.memo() - bu komponentlarni qayta renderingdan saqlab qolish uchun ishlatiladigan Higher Order Component. U props o'zgarishlarini tekshiradi va agar props o'zgarmagan bo'lsa, komponentni qayta renderlashni oldini oladi."
                },
                {
                    title: "Misol",
                    code: `
const ExpensiveComponent = React.memo(({ data }) => {
    console.log("ExpensiveComponent rendered");
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
});

// Custom taqqoslash funksiyasi bilan
const MemoizedComponent = React.memo(
    ({ user }) => (
        <div>{user.name}</div>
    ),
    (prevProps, nextProps) => {
        return prevProps.user.id === nextProps.user.id;
    }
);`
                }
            ]
        },
        {
            id: 2,
            title: "useMemo Hook Optimizatsiyasi",
            url: "use-memo",
            content: [
                {
                    title: "useMemo nima?",
                    text: "useMemo - bu qimmat hisob-kitoblar natijalarini keshlashtirish uchun ishlatiladigan hook. U dependency array o'zgargandagina qayta hisoblashni amalga oshiradi."
                },
                {
                    title: "Misol",
                    code: `
const ExpensiveCalculation = ({ numbers }) => {
    const sum = useMemo(() => {
        console.log("Calculating sum...");
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    return <div>Sum: {sum}</div>;
};

// Complex object yaratish
const Component = ({ data }) => {
    const processedData = useMemo(() => {
        return data.map(item => ({
            ...item,
            fullName: \`\${item.firstName} \${item.lastName}\`,
            totalScore: item.scores.reduce((acc, score) => acc + score, 0)
        }));
    }, [data]);

    return <DataTable data={processedData} />;
};`
                }
            ]
        },
        {
            id: 3,
            title: "useCallback Hook Optimizatsiyasi",
            url: "use-callback",
            content: [
                {
                    title: "useCallback nima?",
                    text: "useCallback - bu funksiyalarni memoizatsiya qilish uchun ishlatiladigan hook. U dependency array o'zgargandagina yangi funksiya yaratadi, bu esa keraksiz qayta renderinglarni oldini oladi."
                },
                {
                    title: "Misol",
                    code: `
const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Bo'sh dependency array

    const handleData = useCallback((data) => {
        console.log(data);
        setCount(data.length);
    }, []); // Bo'sh dependency array

    return (
        <div>
            <ChildComponent onClick={handleClick} onData={handleData} />
            <div>Count: {count}</div>
        </div>
    );
};`
                }
            ]
        },
        {
            id: 4,
            title: "Code Splitting va Lazy Loading",
            url: "code-splitting",
            content: [
                {
                    title: "Code Splitting nima?",
                    text: "Code Splitting - bu ilovani kichik qismlarga bo'lib, faqat kerak bo'lganda yuklash usuli. Bu ilova dastlabki yuklash vaqtini sezilarli darajada kamaytiradi."
                },
                {
                    title: "Misol",
                    code: `
// Route based code splitting
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Profile = lazy(() => import('./Profile'));

const App = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Suspense>
    );
};

// Component based code splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));

const MyComponent = () => {
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div>
            <button onClick={() => setShowHeavy(true)}>
                Show Heavy Component
            </button>
            {showHeavy && (
                <Suspense fallback={<div>Loading...</div>}>
                    <HeavyComponent />
                </Suspense>
            )}
        </div>
    );
};`
                }
            ]
        },
        {
            id: 5,
            title: "Virtual Scrolling",
            url: "virtual-scrolling",
            content: [
                {
                    title: "Virtual Scrolling nima?",
                    text: "Virtual Scrolling - bu katta ro'yxatlarni samarali ko'rsatish usuli. U faqat ekranda ko'rinadigan elementlarni renderlay qiladi, bu esa xotira sarfini va ishlash tezligini optimallaydi."
                },
                {
                    title: "Misol",
                    code: `
import { FixedSizeList } from 'react-window';

const VirtualList = ({ items }) => {
    const Row = ({ index, style }) => (
        <div style={style}>
            {items[index].name}
        </div>
    );

    return (
        <FixedSizeList
            height={400}
            width={300}
            itemCount={items.length}
            itemSize={50}
        >
            {Row}
        </FixedSizeList>
    );
};

// Custom virtual scroll
const CustomVirtualScroll = ({ items }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemHeight = 50;
    const windowHeight = 400;
    const visibleItems = Math.ceil(windowHeight / itemHeight);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const newStartIndex = Math.floor(scrollTop / itemHeight);
        setStartIndex(newStartIndex);
    };

    return (
        <div
            style={{ height: windowHeight, overflow: 'auto' }}
            onScroll={handleScroll}
        >
            <div style={{ height: items.length * itemHeight }}>
                {items
                    .slice(startIndex, startIndex + visibleItems)
                    .map((item, index) => (
                        <div
                            key={item.id}
                            style={{
                                height: itemHeight,
                                transform: \`translateY(\${(startIndex + index) * itemHeight}px)\`
                            }}
                        >
                            {item.name}
                        </div>
                    ))}
            </div>
        </div>
    );
};`
                }
            ]
        },
        {
            id: 6,
            title: "State Management Optimizatsiyasi",
            url: "state-management",
            content: [
                {
                    title: "State Management Optimizatsiyasi nima?",
                    text: "State Management Optimizatsiyasi - bu ilovadagi holatni samarali boshqarish usullari to'plami. Bu keraksiz renderinglarni kamaytirish va ilovaning ishlash tezligini oshirish imkonini beradi."
                },
                {
                    title: "Misol",
                    code: `
// Context splitting
const ThemeContext = createContext();
const UserContext = createContext();

const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};

// State colocating
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <AddTodo onAdd={(todo) => setTodos([...todos, todo])} />
            <TodoItems items={todos} onDelete={(id) => {
                setTodos(todos.filter(todo => todo.id !== id));
            }} />
        </div>
    );
};

// Using reducer for complex state
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};`
                }
            ]
        },
        {
            id: 7,
            title: "Web Workers Optimizatsiyasi",
            url: "web-workers",
            content: [
                {
                    title: "Web Workers nima?",
                    text: "Web Workers - bu asosiy UI threadni bloklash xavfisiz murakkab hisob-kitoblarni bajarish imkonini beruvchi texnologiya. Bu foydalanuvchi interfeysining silliq ishlashini ta'minlaydi."
                },
                {
                    title: "Misol",
                    code: `
// worker.js
self.onmessage = function(e) {
    const numbers = e.data;
    const result = numbers.reduce((acc, num) => acc + num, 0);
    self.postMessage(result);
};

// Component
const HeavyCalculation = () => {
    const [result, setResult] = useState(null);
    const workerRef = useRef();

    useEffect(() => {
        workerRef.current = new Worker('worker.js');
        workerRef.current.onmessage = (e) => {
            setResult(e.data);
        };

        return () => {
            workerRef.current.terminate();
        };
    }, []);

    const calculateSum = () => {
        const numbers = Array.from(
            { length: 10000000 },
            () => Math.floor(Math.random() * 100)
        );
        workerRef.current.postMessage(numbers);
    };

    return (
        <div>
            <button onClick={calculateSum}>
                Calculate Sum
            </button>
            {result && <div>Result: {result}</div>}
        </div>
    );
};`
                }
            ]
        },
        {
            id: 8,
            title: "React Profiler Optimizatsiyasi",
            url: "react-profiler",
            content: [
                {
                    title: "React Profiler nima?",
                    text: "React Profiler - bu React ilovaning ishlash ko'rsatkichlarini o'lchash va tahlil qilish uchun ishlatiladigan vosita. U qaysi komponentlar qancha vaqt olayotganini va necha marta qayta renderlanayotganini ko'rsatadi."
                },
                {
                    title: "Misol",
                    code: `
import { Profiler } from 'react';

const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
) => {
    console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
    });
};

const App = () => {
    return (
        <Profiler id="App" onRender={onRenderCallback}>
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        </Profiler>
    );
};

// Custom profiler hook
const useProfiler = (id) => {
    const renderCount = useRef(0);
    const renderTime = useRef(0);

    const callback = useCallback((
        profilerId,
        phase,
        actualDuration
    ) => {
        renderCount.current++;
        renderTime.current += actualDuration;
        
        console.log(\`
            Component: \${profilerId}
            Phase: \${phase}
            Render count: \${renderCount.current}
            Total render time: \${renderTime.current.toFixed(2)}ms
            Average render time: \${(renderTime.current / renderCount.current).toFixed(2)}ms
        \`);
    }, []);

    return <Profiler id={id} onRender={callback} />;
};`
                }
            ]
        },
        {
            id: 9,
            title: "Network Optimizatsiyasi",
            url: "network-optimization",
            content: [
                {
                    title: "Network Optimizatsiyasi nima?",
                    text: "Network Optimizatsiyasi - bu tarmoq so'rovlarini optimallash va ma'lumotlarni keshlashtirish orqali ilovaning ishlash tezligini oshirish usullari to'plami."
                },
                {
                    title: "Misol",
                    code: `
// Data fetching with caching
const useCachedFetch = (url) => {
    const cache = useRef({});
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (cache.current[url]) {
                setData(cache.current[url]);
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(url);
                const json = await response.json();
                cache.current[url] = json;
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading };
};

// Request debouncing
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

// Usage
const SearchComponent = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    const { data, loading } = useCachedFetch(
        \`/api/search?q=\${debouncedSearch}\`
    );

    return (
        <div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <SearchResults results={data} />
            )}
        </div>
    );
};`
                }
            ]
        },
        {
            id: 10,
            title: "Bundle Size Optimizatsiyasi",
            url: "bundle-size",
            content: [
                {
                    title: "Bundle Size Optimizatsiyasi nima?",
                    text: "Bundle Size Optimizatsiyasi - bu ilova bundle hajmini kamaytirish va yuklash tezligini oshirish usullari to'plami. Bu tree shaking, code splitting va boshqa texnikalarni o'z ichiga oladi."
                },
                {
                    title: "Misol",
                    code: `
// Dynamic import with React.lazy
const HeavyChart = lazy(() => import('./HeavyChart'));
const HeavyTable = lazy(() => import('./HeavyTable'));

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('chart');

    return (
        <div>
            <TabSelector
                activeTab={activeTab}
                onChange={setActiveTab}
            />
            <Suspense fallback={<LoadingSpinner />}>
                {activeTab === 'chart' ? (
                    <HeavyChart />
                ) : (
                    <HeavyTable />
                )}
            </Suspense>
        </div>
    );
};

// Tree shakeable imports
import { Button } from '@material-ui/core/Button';
import { useState } from 'react';

// Instead of
// import * as MaterialUI from '@material-ui/core';
// import React from 'react';

// Webpack bundle analyzer usage
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};`
                }
            ]
        }
    ]
};
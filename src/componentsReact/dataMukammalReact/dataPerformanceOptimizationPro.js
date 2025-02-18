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
                    text: "React.memo() - bu komponentlarni qayta renderingdan saqlab qolish uchun ishlatiladigan Higher Order Component. U props o'zgarishlarini tekshiradi va agar props o'zgarmagan bo'lsa, komponentni qayta renderlashni oldini oladi.",
                    code: `import React, { useState } from 'react';

// Oddiy ExpensiveComponent
const ExpensiveComponent = React.memo(({ data }) => {
    console.log("ExpensiveComponent rendered");
    
    return (
        <div className="expensive-component">
            {data.map(item => (
                <div key={item.id} className="item">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
});

// Custom taqqoslash funksiyasi bilan
const MemoizedComponent = React.memo(
    ({ user, onUpdate }) => (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => onUpdate(user.id)}>
                Update User
            </button>
        </div>
    ),
    (prevProps, nextProps) => {
        return (
            prevProps.user.id === nextProps.user.id &&
            prevProps.user.name === nextProps.user.name &&
            prevProps.user.email === nextProps.user.email
        );
    }
);

function App() {
    const [data, setData] = useState([
        { id: 1, name: "Item 1", description: "Description 1" },
        { id: 2, name: "Item 2", description: "Description 2" }
    ]);

    const [user, setUser] = useState({
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    });

    const handleUpdate = (id) => {
        setUser(prevUser => ({
            ...prevUser,
            name: prevUser.name + " Updated"
        }));
    };

    return (
        <div>
            <ExpensiveComponent data={data} />
            <MemoizedComponent 
                user={user} 
                onUpdate={handleUpdate}
            />
        </div>
    );
}

export default App;`
                }
            ]
        },
        {
            id: 2,
            title: "useMemo Hook Optimizatsiyasi",
            url: "use-memo",
            content: [
                {
                    title: "useMemo Example",
                    code: `import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = ({ numbers }) => {
    const sum = useMemo(() => {
        console.log("Calculating sum...");
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    const average = useMemo(() => {
        console.log("Calculating average...");
        return numbers.length ? sum / numbers.length : 0;
    }, [sum, numbers.length]);

    return (
        <div className="calculations">
            <h2>Calculations</h2>
            <p>Sum: {sum}</p>
            <p>Average: {average}</p>
        </div>
    );
};

const DataProcessor = ({ data }) => {
    const processedData = useMemo(() => {
        return data.map(item => ({
            ...item,
            fullName: \`\${item.firstName} \${item.lastName}\`,
            totalScore: item.scores.reduce((acc, score) => acc + score, 0),
            averageScore: item.scores.reduce((acc, score) => acc + score, 0) / item.scores.length
        }));
    }, [data]);

    return (
        <div className="data-table">
            {processedData.map(item => (
                <div key={item.id} className="data-row">
                    <h3>{item.fullName}</h3>
                    <p>Total Score: {item.totalScore}</p>
                    <p>Average Score: {item.averageScore.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

// Usage Example
const App = () => {
    const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [data] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            scores: [85, 90, 95]
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            scores: [88, 92, 98]
        }
    ]);

    return (
        <div>
            <ExpensiveCalculation numbers={numbers} />
            <DataProcessor data={data} />
        </div>
    );
};

export default App;`
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
                    code: `const ParentComponent = () => {
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
                    code: `// Route based code splitting
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
                    code: `import { FixedSizeList } from 'react-window';

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
                        <div key={index} style={{ height: itemHeight }}>
                            {item.name}
                        </div>
                    ))}
            </div>
        </div>
    );
};`
                }
            ]
        }
    ]
};
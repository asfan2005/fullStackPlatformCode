const dataCodeSplittingMukammal = [
    {
        id: 1,
        title: "React.lazy() with Suspense",
        code: `
import React, { Suspense, lazy } from 'react';

// Komponentni dinamik import qilish
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const DataGrid = lazy(() => import('./DataGrid'));

function App() {
    return (
        <div>
            <h1>Asosiy Sahifa</h1>
            <Suspense fallback={<div>Yuklanmoqda...</div>}>
                <HeavyComponent />
                <DataGrid />
            </Suspense>
        </div>
    );
}`,
        description: "React.lazy() va Suspense yordamida komponentlarni dinamik yuklash",
        result: `{
    "demo": "https://codesandbox.io/s/code-splitting-lazy-demo",
    "output": {
        "loadingState": "Yuklanmoqda...",
        "components": ["HeavyComponent", "DataGrid"]
    }
}`
    },
    {
        id: 2,
        title: "Route-based Code Splitting",
        code: `
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Sahifalarni dinamik yuklash
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Sahifa yuklanmoqda...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}`,
        description: "Routerlar asosida code splitting qo'llash",
        result: `{
    "demo": "https://codesandbox.io/s/route-splitting-demo",
    "output": {
        "routes": ["/", "/dashboard", "/profile"],
        "loadingState": "Sahifa yuklanmoqda..."
    }
}`
    },
    {
        id: 3,
        title: "Component-based Code Splitting",
        code: `
import React, { Suspense, lazy, useState } from 'react';

// Og'ir komponentlarni dinamik yuklash
const LargeChart = lazy(() => import('./components/LargeChart'));
const DataTable = lazy(() => import('./components/DataTable'));

function Dashboard() {
    const [showChart, setShowChart] = useState(false);
    const [showTable, setShowTable] = useState(false);

    return (
        <div>
            <h2>Dashboard</h2>
            
            <button onClick={() => setShowChart(true)}>
                Grafikni ko'rsatish
            </button>
            
            <button onClick={() => setShowTable(true)}>
                Jadvalni ko'rsatish
            </button>

            {showChart && (
                <Suspense fallback={<div>Grafik yuklanmoqda...</div>}>
                    <LargeChart />
                </Suspense>
            )}

            {showTable && (
                <Suspense fallback={<div>Jadval yuklanmoqda...</div>}>
                    <DataTable />
                </Suspense>
            )}
        </div>
    );
}`,
        description: "Komponentlar darajasida code splitting va shartli yuklash",
        result: `{
    "demo": "https://codesandbox.io/s/component-splitting-demo",
    "output": {
        "components": {
            "LargeChart": "Grafik yuklanmoqda...",
            "DataTable": "Jadval yuklanmoqda..."
        },
        "loadType": "conditional"
    }
}`
    }
];

export default dataCodeSplittingMukammal;
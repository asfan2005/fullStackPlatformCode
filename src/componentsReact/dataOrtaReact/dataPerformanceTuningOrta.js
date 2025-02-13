const dataPerformanceTuningOrta = [
    {
        id: 1,
        title: "React Performance Tuning",
        description: "React ilovalarining ishlash tezligini optimizatsiya qilish bo'yicha to'liq qo'llanma",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*PRSCPASXfR-Kc4sQ_0ZSKw.jpeg",
        mainTopics: {
            introduction: {
                title: "React Performance Optimizatsiya Asoslari",
                points: [
                    "Component Optimization",
                    "Memory Management",
                    "Rendering Optimization",
                    "Code Splitting",
                    "Bundle Size Optimization",
                    "Network Performance",
                    "State Management Optimization",
                    "Monitoring and Profiling"
                ]
            },
            codeExamples: {
                title: "Performance Tuning Namunalari",
                components: [
                    {
                        name: "1. Component Memoization",
                        description: "Komponentlarni memoizatsiya qilish",
                        code: `
// MemoizedComponent.jsx
import React, { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data, onItemClick }) => {
    const processedData = useMemo(() => {
        return data.map(item => ({
            ...item,
            processed: heavyCalculation(item)
        }));
    }, [data]);

    const handleClick = useCallback((id) => {
        onItemClick(id);
    }, [onItemClick]);

    return (
        <div>
            {processedData.map(item => (
                <div key={item.id} onClick={() => handleClick(item.id)}>
                    {item.processed}
                </div>
            ))}
        </div>
    );
});

export default ExpensiveComponent;`
                    },
                    {
                        name: "2. Virtual List Implementation",
                        description: "Virtual ro'yxat implementatsiyasi",
                        code: `
// VirtualList.jsx
import React, { useState, useEffect, useRef } from 'react';

const VirtualList = ({ items, itemHeight, windowHeight }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef();

    const visibleItems = useMemo(() => {
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = Math.min(
            startIndex + Math.ceil(windowHeight / itemHeight),
            items.length
        );

        return items.slice(startIndex, endIndex).map((item, index) => ({
            ...item,
            index: startIndex + index
        }));
    }, [scrollTop, items, itemHeight, windowHeight]);

    const handleScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            style={{ height: windowHeight, overflow: 'auto' }}
        >
            <div style={{ height: items.length * itemHeight }}>
                {visibleItems.map(item => (
                    <div
                        key={item.id}
                        style={{
                            position: 'absolute',
                            top: item.index * itemHeight,
                            height: itemHeight
                        }}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};`
                    },
                    {
                        name: "3. Code Splitting and Lazy Loading",
                        description: "Kodni bo'lib yuklash va lazy loading",
                        code: `
// App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Suspense>
    );
};`
                    },
                    {
                        name: "4. Performance Monitoring",
                        description: "Ishlash tezligini monitoring qilish",
                        code: `
// PerformanceMonitor.js
import { useEffect } from 'react';

export const usePerformanceMonitor = (componentName) => {
    useEffect(() => {
        const startTime = performance.now();

        return () => {
            const endTime = performance.now();
            const duration = endTime - startTime;

            console.log(\`Component: \${componentName}\`);
            console.log(\`Render time: \${duration}ms\`);

            // Web Vitals metrics
            if ('web-vital' in window) {
                webVitals.getFID(console.log);
                webVitals.getLCP(console.log);
                webVitals.getCLS(console.log);
            }
        };
    }, [componentName]);
};`
                    },
                    {
                        name: "5. State Management Optimization",
                        description: "State boshqaruvini optimizatsiya qilish",
                        code: `
// store/optimizedStore.js
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
    items: [],
    selectedItem: null,
    setItems: (items) => set({ items }),
    setSelectedItem: (item) => set({ selectedItem: item }),
    
    // Batched updates
    updateMultipleItems: (updates) => {
        set((state) => {
            const newItems = [...state.items];
            updates.forEach(update => {
                const index = newItems.findIndex(item => item.id === update.id);
                if (index !== -1) {
                    newItems[index] = { ...newItems[index], ...update };
                }
            });
            return { items: newItems };
        });
    }
})));`
                    },
                    {
                        name: "6. Network Optimization",
                        description: "Tarmoq so'rovlarini optimizatsiya qilish",
                        code: `
// api/optimizedApi.js
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 30 * 60 * 1000, // 30 minutes
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});

export const useOptimizedQuery = (key, fetcher) => {
    return useQuery(key, fetcher, {
        select: (data) => optimizeResponse(data),
        onError: handleQueryError
    });
};

// Data prefetching
export const prefetchData = async (routeData) => {
    await Promise.all(
        routeData.map(({ key, fetcher }) => 
            queryClient.prefetchQuery(key, fetcher)
        )
    );
};`
                    },
                    {
                        name: "7. Image Optimization",
                        description: "Rasmlarni optimizatsiya qilish",
                        code: `
// components/OptimizedImage.jsx
import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, width, height }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        
        img.onload = () => {
            setLoading(false);
        };
        
        img.onerror = () => {
            setError(true);
            setLoading(false);
        };
    }, [src]);

    if (loading) {
        return <div className="image-placeholder" />;
    }

    if (error) {
        return <div className="image-error">Error loading image</div>;
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
        />
    );
};`
                    },
                    {
                        name: "8. Bundle Size Analysis",
                        description: "Bundle hajmini tahlil qilish",
                        code: `
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // ... other webpack config
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'bundle-report.html',
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: 'bundle-stats.json'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};`
                    }
                ],
                features: [
                    {
                        title: "Component Optimization",
                        description: "Komponentlarni optimizatsiya qilish",
                        details: [
                            "React.memo va useMemo hook'laridan foydalanish",
                            "useCallback orqali funksiyalarni memoizatsiya qilish",
                            "Props va state'larni optimal boshqarish",
                            "Rendering jarayonini optimallashtirish",
                            "Virtual DOM diffing algoritmini tushunish"
                        ],
                        importance: "Komponentlar ishlash tezligini oshirish va keraksiz render'larni kamaytirish"
                    },
                    {
                        title: "Code Splitting Strategies",
                        description: "Kodni bo'lib yuklash strategiyalari",
                        details: [
                            "Route-based code splitting",
                            "Component-based code splitting",
                            "Vendor code splitting",
                            "Dynamic imports",
                            "Preloading va prefetching"
                        ],
                        importance: "Ilova hajmini kamaytirish va yuklanish tezligini oshirish"
                    }
                ],
                bestPractices: {
                    title: "Performance Tuning Best Practices",
                    practices: [
                        {
                            name: "Rendering Optimization",
                            description: "Rendering jarayonini optimizatsiya qilish",
                            tips: [
                                "Keraksiz render'lardan qochish",
                                "shouldComponentUpdate va React.memo'dan to'g'ri foydalanish",
                                "Key'larni to'g'ri ishlatish",
                                "State va props'larni optimal strukturalash",
                                "Virtual scrolling implementatsiyasi"
                            ]
                        },
                        {
                            name: "Memory Management",
                            description: "Xotira boshqaruvi",
                            tips: [
                                "Memory leak'larni oldini olish",
                                "Event listener'larni tozalash",
                                "useEffect cleanup'larini to'g'ri ishlatish",
                                "Large data structures'larni optimal saqlash",
                                "Garbage collection'ni hisobga olish"
                            ]
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Performance Documentation",
                        url: "https://reactjs.org/docs/optimizing-performance.html"
                    },
                    {
                        name: "Web Vitals",
                        url: "https://web.dev/vitals/"
                    },
                    {
                        name: "React Performance Optimization Tips",
                        url: "https://kentcdodds.com/blog/usememo-and-usecallback"
                    }
                ]
            }
        }
    }
];

export default dataPerformanceTuningOrta;
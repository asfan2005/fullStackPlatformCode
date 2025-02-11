const dataPerformanceBoshlangich = [
    {
        id: 1,
        title: "React Performance",
        level: "Boshlang'ich",
        description: "React ilovalar optimizatsiyasi va performance yaxshilash usullari",
        image: "https://reactjs.org/logo-og.png",
        mainTopics: {
            introduction: {
                title: "React Performance Asoslari",
                points: [
                    "React rendering jarayoni",
                    "Virtual DOM va reconciliation",
                    "Performance optimization usullari",
                    "Component lifecycle va performance",
                    "Memory leaks oldini olish",
                    "Bundle size optimization",
                    "Code splitting strategiyalari",
                    "Performance monitoring tools",
                    "Lazy loading texnikalari"
                ]
            },
            coreConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "Memo",
                        description: "Component qayta renderingni oldini olish",
                        example: `
// components/ExpensiveComponent.jsx
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
    return (
        <div>
            {/* Murakkab renderlar */}
            {data.map(item => (
                <div key={item.id}>{item.content}</div>
            ))}
        </div>
    );
});

export default ExpensiveComponent;`
                    },
                    {
                        name: "useMemo",
                        description: "Qimmatli hisob-kitoblarni keshlash",
                        example: `
// components/DataProcessor.jsx
import { useMemo } from 'react';

function DataProcessor({ items }) {
    const processedData = useMemo(() => {
        return items.filter(item => item.active)
                   .map(item => ({
                       ...item,
                       value: item.value * 2
                   }));
    }, [items]);

    return (
        <ul>
            {processedData.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    );
}`
                    },
                    {
                        name: "useCallback",
                        description: "Funksiyalarni keshlash",
                        example: `
// components/SearchComponent.jsx
import { useCallback, useState } from 'react';

function SearchComponent({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = useCallback(() => {
        onSearch(query);
    }, [query, onSearch]);

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Qidiruv..."
            />
            <button onClick={handleSearch}>Qidirish</button>
        </div>
    );
}`
                    }
                ]
            },
            optimizationTechniques: {
                title: "Optimizatsiya Usullari",
                techniques: [
                    {
                        name: "Code Splitting",
                        description: "Ilovani kichik qismlarga bo'lish",
                        example: `
// App.js
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => 
    import('./components/HeavyComponent')
);

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}`
                    },
                    {
                        name: "Virtualization",
                        description: "Katta ro'yxatlarni optimizatsiya qilish",
                        example: `
// components/VirtualList.jsx
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
    const Row = ({ index, style }) => (
        <div style={style}>
            {items[index].content}
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
}`
                    }
                ]
            },
            practicalExamples: {
                title: "Amaliy Misollar",
                examples: [
                    {
                        name: "Optimized Image Loading",
                        code: `
// components/OptimizedImage.jsx
import { useState, useEffect } from 'react';

function OptimizedImage({ src, alt }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return (
        <div className="image-container">
            {!loaded && <div className="skeleton" />}
            <img
                src={src}
                alt={alt}
                style={{ display: loaded ? 'block' : 'none' }}
            />
        </div>
    );
}`
                    },
                    {
                        name: "Debounced Search",
                        code: `
// hooks/useDebounce.js
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

// components/SearchBar.jsx
function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    return (
        <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Qidirish..."
        />
    );
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    "Component tree optimizatsiyasi",
                    "State management optimizatsiyasi",
                    "Network requests optimizatsiyasi",
                    "Image optimizatsiyasi",
                    "Bundle size monitoring",
                    "Performance metrics tracking",
                    "Lazy loading implementation",
                    "Memory leak prevention",
                    "Error boundary implementation",
                    "Code splitting strategies",
                    "Caching mechanisms",
                    "Resource preloading",
                    "Server-side rendering (SSR)",
                    "Progressive loading"
                ],
                examples: [
                    {
                        name: "Performance Monitoring",
                        description: "Performance metrics kuzatish",
                        code: `
// utils/performance.js
export const measurePerformance = (Component) => {
    return function PerformanceWrapper(props) {
        const startTime = performance.now();
        
        useEffect(() => {
            const endTime = performance.now();
            console.log(\`\${Component.name} render time: \${endTime - startTime}ms\`);
        });

        return <Component {...props} />;
    };
};`
                    },
                    {
                        name: "Error Boundary",
                        description: "Xatolarni boshqarish",
                        code: `
// components/ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Xatolik yuz berdi.</h1>;
        }

        return this.props.children;
    }
}`
                    },
                    {
                        name: "Component Tree Optimization",
                        description: "Component tree strukturasini optimizatsiya qilish",
                        code: `
// components/OptimizedList.jsx
import React, { memo } from 'react';

const ListItem = memo(({ item }) => (
    <div className="item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
));

const List = ({ items }) => (
    <div className="list">
        {items.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
    </div>
);

export default List;`
                    },
                    {
                        name: "State Management Optimization",
                        description: "State boshqaruvini optimizatsiya qilish",
                        code: `
// hooks/useOptimizedState.js
import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return { ...state, data: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export function useOptimizedState(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateData = useCallback((data) => {
        dispatch({ type: 'UPDATE_DATA', payload: data });
    }, []);

    const setLoading = useCallback((loading) => {
        dispatch({ type: 'SET_LOADING', payload: loading });
    }, []);

    return { state, updateData, setLoading };
}`
                    },
                    {
                        name: "Network Request Optimization",
                        description: "Network so'rovlarini optimizatsiya qilish",
                        code: `
// utils/apiClient.js
import { useState, useEffect } from 'react';

const cache = new Map();

export function useCachedApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cache.has(url)) {
            setData(cache.get(url));
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
            .then(res => res.json())
            .then(json => {
                cache.set(url, json);
                setData(json);
                setLoading(false);
            });

        return () => controller.abort();
    }, [url]);

    return { data, loading };
}`
                    },
                    {
                        name: "Image Optimization",
                        description: "Rasmlarni optimizatsiya qilish",
                        code: `
// components/OptimizedImage.jsx
import { useState, useEffect } from 'react';

function OptimizedImage({ src, alt, width, height }) {
    const [imageSrc, setImageSrc] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        
        const loadImage = async () => {
            try {
                await img.decode();
                setImageSrc(src);
                setLoading(false);
            } catch (err) {
                console.error('Image loading error:', err);
            }
        };

        loadImage();
    }, [src]);

    return (
        <div style={{ position: 'relative', width, height }}>
            {loading && (
                <div className="skeleton" 
                     style={{ width: '100%', height: '100%' }} 
                />
            )}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    style={{ 
                        opacity: loading ? 0 : 1,
                        transition: 'opacity 0.3s'
                    }}
                />
            )}
        </div>
    );
}`
                    },
                    {
                        name: "Bundle Size Monitoring",
                        description: "Bundle hajmini nazorat qilish",
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
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            cacheGroups: {
                vendor: {
                    test: /[\\\\/]node_modules[\\\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    }
}`
                    },
                    {
                        name: "Memory Leak Prevention",
                        description: "Memory leak'larni oldini olish",
                        code: `
// hooks/useSubscription.js
import { useState, useEffect } from 'react';

function useSubscription(subscribe) {
    const [data, setData] = useState(null);

    useEffect(() => {
        let mounted = true;
        
        const subscription = subscribe(newData => {
            if (mounted) {
                setData(newData);
            }
        });

        return () => {
            mounted = false;
            if (subscription?.unsubscribe) {
                subscription.unsubscribe();
            }
        };
    }, [subscribe]);

    return data;
}`
                    },
                    {
                        name: "Resource Preloading",
                        description: "Resurslarni oldindan yuklash",
                        code: `
// utils/preloader.js
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

export const preloadComponent = (componentPath) => {
    const component = import(componentPath);
    return component;
};

// App.jsx
import { useEffect } from 'react';
import { preloadImage, preloadComponent } from './utils/preloader';

function App() {
    useEffect(() => {
        // Asosiy rasmlarni oldindan yuklash
        const criticalImages = [
            '/logo.png',
            '/hero-image.jpg'
        ];
        
        // Muhim komponentlarni oldindan yuklash
        const criticalComponents = [
            './components/Header',
            './components/Footer'
        ];

        Promise.all([
            ...criticalImages.map(preloadImage),
            ...criticalComponents.map(preloadComponent)
        ]);
    }, []);

    return <div>App Content</div>;
}`
                    },
                    {
                        name: "Server-Side Rendering",
                        description: "Server tomonida rendering qilish",
                        code: `
// pages/_document.js (Next.js)
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://api.example.com" />
                    <link rel="dns-prefetch" href="https://api.example.com" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

// pages/index.js
export async function getServerSideProps() {
    const data = await fetch('https://api.example.com/data');
    const json = await data.json();

    return {
        props: {
            data: json
        }
    };
}`
                    },
                    {
                        name: "Progressive Loading",
                        description: "Progressive loading strategiyasi",
                        code: `
// components/ProgressiveImage.jsx
import { useState, useEffect } from 'react';

function ProgressiveImage({ lowQualitySrc, highQualitySrc, alt }) {
    const [src, setSrc] = useState(lowQualitySrc);

    useEffect(() => {
        const img = new Image();
        img.src = highQualitySrc;
        
        img.onload = () => {
            setSrc(highQualitySrc);
        };
    }, [highQualitySrc]);

    return (
        <img
            src={src}
            alt={alt}
            style={{
                filter: src === lowQualitySrc ? 'blur(10px)' : 'none',
                transition: 'filter 0.3s ease-out'
            }}
        />
    );
}`
                    }
                ]
            }
        }
    }
];

export default dataPerformanceBoshlangich;
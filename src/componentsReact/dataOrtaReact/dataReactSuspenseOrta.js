const dataReactSuspenseOrta = [
    {
        id: 1,
        title: "React Suspense",
        description: "React-da ma'lumotlarni yuklash va asinxron operatsiyalarni boshqarish",
        image: "https://hygraph.com/_next/image?url=https%3A%2F%2Feu-central-1-shared-euc1-02.graphassets.com%2FAvHQ3RDvFSousA8iwElOKz%2FyGIcpoghRUyyMn211Yjt&w=1280&q=75",
        mainTopics: {
            introduction: {
                title: "React Suspense Asoslari",
                points: [
                    "React Suspense nima",
                    "Suspense qanday ishlaydi",
                    "Suspense-ning asosiy vazifalari",
                    "Lazy loading va code splitting",
                    "Error Boundary bilan ishlash"
                ],
                examples: [
                    {
                        title: "Asosiy Suspense Komponenti",
                        description: "Oddiy Suspense komponenti yaratish",
                        code: `
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <Suspense fallback={<div>Yuklanmoqda...</div>}>
            <LazyComponent />
        </Suspense>
    );
}`
                    },
                    {
                        title: "Ma'lumotlar Yuklash",
                        description: "Suspense bilan ma'lumotlarni yuklash",
                        code: `
const resource = fetchData();

function DataComponent() {
    const data = resource.read();
    return <div>{data.map(item => <div key={item.id}>{item.name}</div>)}</div>;
}

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <DataComponent />
        </Suspense>
    );
}`
                    },
                    {
                        title: "Ko'p Komponentli Suspense",
                        description: "Bir nechta komponentlarni yuklash",
                        code: `
const LazyHeader = React.lazy(() => import('./Header'));
const LazyMain = React.lazy(() => import('./Main'));
const LazyFooter = React.lazy(() => import('./Footer'));

function App() {
    return (
        <Suspense fallback={<GlobalLoader />}>
            <LazyHeader />
            <Suspense fallback={<ContentLoader />}>
                <LazyMain />
            </Suspense>
            <LazyFooter />
        </Suspense>
    );
}`
                    }
                ]
            },
            advancedExamples: {
                title: "Murakkab Suspense Misollari",
                components: [
                    {
                        name: "SuspenseList Komponenti",
                        description: "Bir nechta Suspense-larni boshqarish",
                        code: `
import React, { Suspense, SuspenseList } from 'react';

function App() {
    return (
        <SuspenseList revealOrder="forwards" tail="collapsed">
            <Suspense fallback={<Loader />}>
                <ProfileDetails />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <ProfilePosts />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <ProfileComments />
            </Suspense>
        </SuspenseList>
    );
}`
                    },
                    {
                        name: "Error Boundary bilan Suspense",
                        description: "Xatolarni boshqarish",
                        code: `
class ErrorBoundary extends React.Component {
    state = { hasError: false };
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    render() {
        if (this.state.hasError) {
            return <div>Xatolik yuz berdi</div>;
        }
        return this.props.children;
    }
}

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <DataComponent />
            </Suspense>
        </ErrorBoundary>
    );
}`
                    },
                    {
                        name: "Custom Resource yaratish",
                        description: "Suspense uchun maxsus resurs",
                        code: `
function createResource(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );

    return {
        read() {
            if (status === 'pending') throw suspender;
            if (status === 'error') throw result;
            return result;
        }
    };
}`
                    }
                ]
            },
            practicalUsage: {
                title: "Amaliy Foydalanish",
                examples: [
                    {
                        name: "API bilan ishlash",
                        code: `
const fetchData = () => {
    return createResource(fetch('/api/data')
        .then(res => res.json())
    );
}

const DataComponent = () => {
    const data = dataResource.read();
    return <div>{/* Data rendering logic */}</div>;
}`
                    },
                    {
                        name: "Image Lazy Loading",
                        code: `
const imgResource = createResource(new Promise((resolve) => {
    const img = new Image();
    img.src = 'large-image.jpg';
    img.onload = () => resolve(img.src);
}));

function LazyImage() {
    const src = imgResource.read();
    return <img src={src} alt="Lazy loaded" />;
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Suspense Strategiyalari",
                        tips: [
                            "Suspense-ni kerakli joylardagina ishlatish",
                            "Fallback UI-ni optimallash",
                            "Code splitting strategiyasini to'g'ri tanlash",
                            "Cache-lash mexanizmlaridan foydalanish"
                        ]
                    },
                    {
                        name: "Performance Optimizatsiya",
                        tips: [
                            "Lazy loading-ni to'g'ri joyda ishlatish",
                            "Bundle size-ni nazorat qilish",
                            "Waterfall effect-lardan qochish",
                            "Preloading strategiyalarini qo'llash"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Suspense Documentation",
                        url: "https://reactjs.org/docs/concurrent-mode-suspense.html"
                    },
                    {
                        name: "React Lazy Loading Guide",
                        url: "https://reactjs.org/docs/code-splitting.html"
                    }
                ]
            }
        }
    }
];

export default dataReactSuspenseOrta;
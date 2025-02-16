const dataCustomHooksOrta = [
    {
        id: 1,
        title: "React Custom Hooks",
        description: "React-da qayta ishlatiluvchi logikani custom hook-lar orqali yaratish",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*G9RTy_Z3G498wFK5c7ziqQ.png",
        mainTopics: {
            introduction: {
                title: "Custom Hooks Asoslari",
                points: [
                    "Custom Hook nima",
                    "Custom Hook yaratish qoidalari",
                    "Hook-larni qayta ishlatish",
                    "Hook-larda state va effect-lardan foydalanish",
                    "Real loyihalarda custom hook-lar"
                ],
                examples: [
                    {
                        title: "useLocalStorage Hook",
                        description: "LocalStorage bilan ishlash uchun hook",
                        code: `
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Local storage-dan ma'lumotni o'qish
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Ma'lumotni local storage-ga saqlash
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}`
                    },
                    {
                        title: "useFetch Hook",
                        description: "API so'rovlari uchun universal hook",
                        code: `
import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setData(json);
                setError(null);
            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}`
                    },
                    {
                        title: "useToggle Hook",
                        description: "Boolean qiymatni boshqarish uchun hook",
                        code: `
import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    
    const toggle = useCallback(() => {
        setValue(prev => !prev);
    }, []);
    
    return [value, toggle];
}`
                    },
                    {
                        title: "useWindowSize Hook",
                        description: "Oyna o'lchamlarini kuzatish uchun hook",
                        code: `
import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}`
                    }
                ]
            },
            advancedExamples: {
                title: "Murakkab Custom Hook-lar",
                components: [
                    {
                        name: "useForm Hook",
                        description: "Formalar bilan ishlash uchun hook",
                        code: `
import { useState } from 'react';

function useForm(initialValues = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (onSubmit) => {
        return (event) => {
            event.preventDefault();
            onSubmit(values);
        };
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        reset
    };
}`
                    },
                    {
                        name: "useMediaQuery Hook",
                        description: "Media query-lar bilan ishlash",
                        code: `
import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        
        return () => media.removeListener(listener);
    }, [query]);

    return matches;
}`
                    },
                    {
                        name: "useDebounce Hook",
                        description: "Ma'lumotlarni kechiktirish uchun hook",
                        code: `
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}`
                    },
                    {
                        name: "useAsync Hook",
                        description: "Asinxron operatsiyalarni boshqarish uchun hook",
                        code: `
import { useState, useCallback } from 'react';

function useAsync(asyncFunction) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const execute = useCallback(async (...params) => {
        try {
            setLoading(true);
            setError(null);
            const response = await asyncFunction(...params);
            setData(response);
            return response;
        } catch (error) {
            setError(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);

    return { execute, loading, error, data };
}`
                    },
                    {
                        name: "usePrevious Hook",
                        description: "O'zgaruvchining oldingi qiymatini saqlash",
                        code: `
import { useRef, useEffect } from 'react';

function usePrevious(value) {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}`
                    }
                ]
            },
            bestPractices: {
                title: "Custom Hooks Best Practices",
                practices: [
                    {
                        name: "Asosiy Tamoyillar",
                        tips: [
                            "Hook nomlari 'use' prefiksi bilan boshlanishi shart",
                            "Hook-lar faqat React funksiya komponentlari ichida ishlatilishi kerak",
                            "Hook-lar shartli operatorlar ichida ishlatilmasligi kerak",
                            "Hook-lar qayta ishlatiluvchi logika uchun mo'ljallangan",
                            "Har bir hook bitta vazifani bajarishi kerak"
                        ]
                    },
                    {
                        name: "Xatolarni Boshqarish",
                        tips: [
                            "Hook-larda try-catch bloklaridan foydalaning",
                            "Xatolarni qayta ishlash uchun alohida holatlar yarating",
                            "Xatolik yuz berganda foydalanuvchiga ma'lumot bering",
                            "Debug qilish uchun console.error-dan foydalaning"
                        ]
                    },
                    {
                        name: "Optimizatsiya",
                        tips: [
                            "useCallback va useMemo-dan to'g'ri foydalaning",
                            "Keraksiz re-render-lardan qoching",
                            "Dependencies arrayini to'g'ri boshqaring",
                            "Memory leak-lardan qoching"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Hooks Documentation",
                        url: "https://reactjs.org/docs/hooks-intro.html"
                    },
                    {
                        name: "Custom Hooks Guide",
                        url: "https://reactjs.org/docs/hooks-custom.html"
                    }
                ]
            }
        }
    }
];

export default dataCustomHooksOrta;
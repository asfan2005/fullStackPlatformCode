export const reactCustomHooksEngineeringData = {
    title: "React Custom Hooks Engineering",
    url: "react-custom-hooks-engineering",
    tutorials: [
        {
            id: 1,
            title: "Custom Hooks Asoslari",
            url: "custom-hooks-basics",
            content: [
                {
                    title: "Custom Hook nima?",
                    text: "Custom Hook - bu React logikasini qayta ishlatiluvchi funksiyalarga ajratish imkonini beruvchi mexanizm. Custom hook'lar 'use' prefiksi bilan boshlanishi va boshqa hook'larni ishlatishi mumkin."
                },
                {
                    title: "Misol",
                    code: `
const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
};

// Ishlatilishi
const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};`
                }
            ]
        },
        {
            id: 2,
            title: "Form Boshqaruvi Custom Hook'lari",
            url: "form-management-hooks",
            content: [
                {
                    title: "Form Hook'lari",
                    text: "Form ma'lumotlarini boshqarish uchun custom hook'lar formalar bilan ishlashni ancha osonlashtiradi va kod takrorlanishini kamaytiradi."
                },
                {
                    title: "Misol",
                    code: `
const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (onSubmit) => {
        setIsSubmitting(true);
        try {
            await onSubmit(values);
            setErrors({});
        } catch (err) {
            setErrors(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        reset
    };
};

// Ishlatilishi
const LoginForm = () => {
    const { 
        values, 
        errors, 
        isSubmitting, 
        handleChange, 
        handleSubmit 
    } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = async (formData) => {
        await loginUser(formData);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
        }}>
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            
            <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Login'}
            </button>
        </form>
    );
};`
                }
            ]
        },
        {
            id: 3,
            title: "API So'rovlari Custom Hook'lari",
            url: "api-request-hooks",
            content: [
                {
                    title: "API Hook'lari",
                    text: "API so'rovlarini boshqarish uchun custom hook'lar ma'lumotlarni yuklash, xatolarni qayta ishlash va loading holatlarini boshqarishni osonlashtiradi."
                },
                {
                    title: "Misol",
                    code: `
// Universal API hook
const useApi = (endpoint, options = {}) => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(\`\${BASE_URL}\${endpoint}\`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                }
            });
            if (!response.ok) {
                throw new Error(\`API Error: \${response.status}\`);
            }
            const json = await response.json();
            setData(json);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    const mutate = async (newData) => {
        setLoading(true);
        try {
            const response = await fetch(\`\${BASE_URL}\${endpoint}\`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            });
            const json = await response.json();
            setData(json);
            return json;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, mutate, refetch: fetchData };
};

// Ishlatilish misollari
const PostsList = () => {
    const { data: posts, error, loading } = useApi('/posts');

    if (loading) return <div>Ma'lumotlar yuklanmoqda...</div>;
    if (error) return <div>Xatolik: {error}</div>;
    if (!posts) return null;

    return (
        <div className="posts-container">
            <h2>Postlar Ro'yxati</h2>
            {posts.map(post => (
                <div key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

const UserDetails = ({ userId }) => {
    const { 
        data: user, 
        error, 
        loading 
    } = useApi(\`/users/\${userId}\`);
    
    const { 
        data: userPosts,
        loading: postsLoading 
    } = useApi(\`/users/\${userId}/posts\`);

    if (loading || postsLoading) return <div>Ma'lumotlar yuklanmoqda...</div>;
    if (error) return <div>Xatolik: {error}</div>;
    if (!user) return null;

    return (
        <div className="user-profile">
            <div className="user-info">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <p>Website: {user.website}</p>
            </div>
            
            {userPosts && (
                <div className="user-posts">
                    <h3>Foydalanuvchi postlari</h3>
                    {userPosts.map(post => (
                        <div key={post.id} className="post-item">
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const CreatePost = () => {
    const { mutate, error, loading } = useApi('/posts');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = await mutate({ title, body, userId: 1 });
            alert('Post muvaffaqiyatli yaratildi!');
            setTitle('');
            setBody('');
        } catch (err) {
            alert('Xatolik yuz berdi');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-post-form">
            <h3>Yangi post yaratish</h3>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post sarlavhasi"
                    required
                />
            </div>
            <div>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Post matni"
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Yuklanmoqda...' : 'Yaratish'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};`
                }
            ]
        },
        {
            id: 4,
            title: "Local Storage Custom Hook'lari",
            url: "local-storage-hooks",
            content: [
                {
                    title: "Local Storage Hook'lari",
                    text: "Local Storage bilan ishlash uchun custom hook'lar ma'lumotlarni saqlash va sinxronizatsiya qilishni osonlashtiradi."
                },
                {
                    title: "Misol",
                    code: `
const useLocalStorage = (key, initialValue) => {
    // State ni Local Storage dan o'qish
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // State ni Local Storage ga yozish
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function 
                ? value(storedValue) 
                : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};

// Kengaytirilgan versiya
const useLocalStorageWithExpiry = (key, initialValue, expiryHours = 24) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                const parsed = JSON.parse(item);
                if (parsed.expiry && new Date().getTime() > parsed.expiry) {
                    window.localStorage.removeItem(key);
                    return initialValue;
                }
                return parsed.value;
            }
            return initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function 
                ? value(storedValue) 
                : value;
            const expiry = new Date().getTime() + (expiryHours * 60 * 60 * 1000);
            
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify({
                value: valueToStore,
                expiry
            }));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};

// Ishlatilishi
const UserSettings = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [settings, setSettings] = useLocalStorageWithExpiry(
        'settings',
        { notifications: true },
        48 // 48 soat
    );

    return (
        <div>
            <select 
                value={theme} 
                onChange={e => setTheme(e.target.value)}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <label>
                <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={e => setSettings({
                        ...settings,
                        notifications: e.target.checked
                    })}
                />
                Notifications
            </label>
        </div>
    );
};`
                }
            ]
        },
        {
            id: 5,
            title: "Media Query Custom Hook'lari",
            url: "media-query-hooks",
            content: [
                {
                    title: "Media Query Hook'lari",
                    text: "Media query'lar bilan ishlash uchun custom hook'lar responsive dizayn uchun qulay interfeysni ta'minlaydi."
                },
                {
                    title: "Misol",
                    code: `
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(
        () => window.matchMedia(query).matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handler = (event) => setMatches(event.matches);

        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
    }, [query]);

    return matches;
};

// Kengaytirilgan breakpoint hook'i
const useBreakpoint = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return {
        isMobile,
        isTablet,
        isDesktop,
        isTouch: isMobile || isTablet
    };
};

// Ishlatilishi
const ResponsiveComponent = () => {
    const { isMobile, isTablet, isDesktop } = useBreakpoint();

    return (
        <div>
            {isMobile && <MobileView />}
            {isTablet && <TabletView />}
            {isDesktop && <DesktopView />}
        </div>
    );
};

// Orientation hook
const useOrientation = () => {
    const [orientation, setOrientation] = useState(
        window.screen.orientation.type
    );

    useEffect(() => {
        const handleChange = () => {
            setOrientation(window.screen.orientation.type);
        };

        window.addEventListener('orientationchange', handleChange);
        return () => {
            window.removeEventListener('orientationchange', handleChange);
        };
    }, []);

    return orientation;
};`
                }
            ]
        }
    ]
};
import React, { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { reactCustomHooksEngineeringData } from '../dataMukammalReact/dataCustomHooksEngineering';

// Optimizatsiya uchun kichik komponentlar
const CodeBlock = memo(({ code, result }) => {
  const [copyStatus, setCopyStatus] = React.useState('Copy');
  const [showResult, setShowResult] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000);
    } catch (err) {
      setCopyStatus('Failed to copy');
      console.error('Failed to copy text: ', err);
    }
  };

  // LiveDemo komponentini yangilangan versiyasi
  const LiveDemo = () => {
    const DemoComponent = React.useMemo(() => {
      // Kod matnini tozalash
      const cleanCode = code.trim();
      
      // Demo komponentlarni qaytarish
      if (cleanCode.includes('useCounter')) return Counter;
      if (cleanCode.includes('useForm')) return LoginForm;
      if (cleanCode.includes('useFetchUser')) return () => <UserProfile userId="1" />;
      if (cleanCode.includes('useLocalStorage')) return UserSettings;
      if (cleanCode.includes('useMediaQuery')) return ResponsiveComponent;
      
      return null;
    }, [code]);

    if (!DemoComponent) return null;

    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <DemoComponent />
      </div>
    );
  };

  const hasDemo = React.useMemo(() => {
    return code.includes('useCounter') || 
           code.includes('useForm') || 
           code.includes('useFetchUser') || 
           code.includes('useLocalStorage') || 
           code.includes('useMediaQuery');
  }, [code]);

  return (
    <div className="space-y-4">
      <div className="bg-gray-900 rounded-xl overflow-hidden relative">
        <button
          onClick={handleCopy}
          className={`absolute top-2 right-2 ${
            copyStatus === 'Copied!' 
              ? 'bg-green-600 hover:bg-green-700' 
              : copyStatus === 'Failed to copy'
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-gray-700 hover:bg-gray-600'
          } text-white px-3 py-1 rounded-md text-sm transition-colors duration-200`}
        >
          {copyStatus}
        </button>
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          showLineNumbers={true}
          customStyle={{
            padding: '1.5rem',
            fontSize: '0.9rem',
            borderRadius: '0.75rem'
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
      
      <div className="mt-4 space-y-4">
        {/* Demo tugmasi */}
        {hasDemo && (
          <button 
            onClick={() => setShowResult(!showResult)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 w-full sm:w-auto"
          >
            {showResult ? "Demo'ni yashirish" : "Demo'ni ko'rish"}
          </button>
        )}
        
        {/* Demo natijasi */}
        {showResult && (
          <div className="border-2 border-gray-200 rounded-xl p-6 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4">Natija:</h4>
            <div className="overflow-x-auto">
              <LiveDemo />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

const ContentCard = memo(({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
));

function ReactCustomHooksEngineering() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 md:text-6xl mb-8">
            {reactCustomHooksEngineeringData.title}
          </h1>
        </div>

        {/* Tutorials Section */}
        <div className="space-y-16">
          {reactCustomHooksEngineeringData.tutorials.map((tutorial) => (
            <ContentCard key={tutorial.id}>
              {/* Tutorial Header */}
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {tutorial.title}
              </h2>

              {/* Tutorial Content */}
              <div className="space-y-12">
                {tutorial.content.map((item, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    
                    {item.text && (
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.text}
                      </p>
                    )}
                    
                    {item.code && (
                      <div className="mt-6">
                        <CodeBlock 
                          code={item.code} 
                          result={item.result} 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add example components that will be used in demos
const Counter = () => {
  const useCounter = (initialValue = 0) => {
    const [count, setCount] = React.useState(initialValue);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialValue);
    return { count, increment, decrement, reset };
  };

  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold">Count: {count}</p>
      <div className="space-x-2">
        <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">+</button>
        <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">-</button>
        <button onClick={reset} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const useForm = (initialValues = {}) => {
    const [values, setValues] = React.useState(initialValues);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

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

    return { values, errors, isSubmitting, handleChange, handleSubmit };
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = async (formData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(onSubmit);
    }} className="space-y-4">
      <div>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded disabled:opacity-50"
      >
        {isSubmitting ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};

const UserProfile = ({ userId }) => {
  const useFetchUser = (id) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      const fetchUser = async () => {
        try {
          setLoading(true);
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          setUser({
            id,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Developer'
          });
        } catch (err) {
          setError('Failed to fetch user');
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, [id]);

    return { user, loading, error };
  };

  const { user, loading, error } = useFetchUser(userId);

  if (loading) return <div className="text-gray-600">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!user) return <div className="text-gray-600">No user found</div>;

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">Role: {user.role}</p>
    </div>
  );
};

const UserSettings = () => {
  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = React.useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    });

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
  };

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 'medium');

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Font Size</label>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="text-sm text-gray-600">
        Settings are automatically saved to localStorage
      </div>
    </div>
  );
};

const ResponsiveComponent = () => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = (e) => setMatches(e.matches);
      media.addEventListener('change', listener);

      return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <div className="space-y-2">
      <p className="font-semibold">Current Breakpoint:</p>
      {isMobile && <p className="text-blue-600">Mobile View</p>}
      {isTablet && <p className="text-green-600">Tablet View</p>}
      {isDesktop && <p className="text-purple-600">Desktop View</p>}
      <p className="text-sm text-gray-600">
        Resize your browser window to see the changes
      </p>
    </div>
  );
};

export default memo(ReactCustomHooksEngineering);
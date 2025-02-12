import React, { useState } from 'react';
import { FaBook, FaCode, FaList, FaSync, FaWrench, FaObjectGroup, 
         FaReact, FaClock, FaBoxes, FaProjectDiagram, FaBars, FaTimes, FaShieldAlt, FaLayerGroup, FaTools, FaSpinner, FaDatabase, 
         FaMobile, FaGlobe, FaRocket, FaPlug } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import {ReactAdvancedHooksOrta, ReactAdvancedRouting, ReactOrtaReactOptimization, ReactReactPattersOrta, ReactReactTestingOrta, ReactServerStateOrta, ReactStateManagementOrta} from "../components/index"

function OrtaReact() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuIcons = {
    "React Optimization": <FaSync className="text-blue-500" />,
    "Advanced Hooks": <FaWrench className="text-green-500" />,
    "React Patterns": <FaCode className="text-purple-500" />,
    "State Management": <FaBoxes className="text-orange-500" />,
    "Advanced Routing": <FaProjectDiagram className="text-red-500" />,
    "React Testing": <FaList className="text-indigo-500" />,
    "Server State": <FaClock className="text-yellow-500" />,
    "React Architecture": <FaObjectGroup className="text-pink-500" />,
    "Performance Tuning": <FaReact className="text-teal-500" />,
    "Security Best Practices": <FaBook className="text-cyan-500" />,
    "Component Lifecycle": <FaClock className="text-emerald-500" />,
    "Error Boundaries": <FaShieldAlt className="text-red-600" />,
    "React Context API": <FaLayerGroup className="text-violet-500" />,
    "Custom Hooks": <FaTools className="text-amber-500" />,
    "React Suspense": <FaSpinner className="text-fuchsia-500" />,
    "React Animations": <FaRocket className="text-rose-500" />,
    "React Forms": <FaDatabase className="text-lime-500" />,
    "React Mobile": <FaMobile className="text-sky-500" />,
    "Internationalization": <FaGlobe className="text-indigo-600" />,
    "React Plugins": <FaPlug className="text-orange-600" />
  };

  const menu = [
    "React Optimization",
    "Advanced Hooks",
    "React Patterns",
    "State Management",
    "Advanced Routing",
    "React Testing",
    "Server State",
    "React Architecture",
    "Performance Tuning",
    "Security Best Practices",
    "Component Lifecycle",
    "Error Boundaries",
    "React Context API",
    "Custom Hooks",
    "React Suspense",
    "React Animations",
    "React Forms",
    "React Mobile",
    "Internationalization",
    "React Plugins"
  ];

  const topicContent = {
    "React Optimization": (
      <ReactOrtaReactOptimization/>
    ),
    "Advanced Hooks": (
      <ReactAdvancedHooksOrta/>
    ),
    "React Patterns": (
      <ReactReactPattersOrta/>
    ),
    "State Management": (
      <ReactStateManagementOrta/>
    ),
    "Advanced Routing": (
      <ReactAdvancedRouting/>
    ),
    "React Testing": (
    <ReactReactTestingOrta/>
    ),
    "Server State": (
      <ReactServerStateOrta/>
    ),
    "React Architecture": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Architecture Patterns</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clean Architecture</li>
          <li>Atomic Design</li>
          <li>Feature-based Structure</li>
          <li>Micro Frontends</li>
          <li>Monorepo Setup</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`// Feature-based structure
/src
  /features
    /auth
      /components
      /hooks
      /services
      /store
    /dashboard
      /components
      /hooks
      /services
      /store`}
          </pre>
        </div>
      </div>
    ),
    "Performance Tuning": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Performance Optimization</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Profiling va Performance Monitoring</li>
          <li>Code Splitting Strategies</li>
          <li>Memory Leaks Prevention</li>
          <li>Network Optimization</li>
          <li>Rendering Optimization</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`// Code splitting with React.lazy
const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HeavyComponent />
    </Suspense>
  );
}`}
          </pre>
        </div>
      </div>
    ),
    "Security Best Practices": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Security</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>XSS Prevention</li>
          <li>CSRF Protection</li>
          <li>Secure Authentication</li>
          <li>Input Sanitization</li>
          <li>Security Headers</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`// Input sanitization example
import DOMPurify from 'dompurify';

function SafeHTML({ html }) {
  return (
    <div dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(html)
    }} />
  );
}`}
          </pre>
        </div>
      </div>
    ),
    "Component Lifecycle": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Component Lifecycle in React</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mounting Phase</li>
          <li>Updating Phase</li>
          <li>Unmounting Phase</li>
          <li>Error Handling</li>
          <li>Lifecycle Methods vs Hooks</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`function LifecycleComponent() {
  useEffect(() => {
    // Mounting
    console.log('Component mounted');
    return () => {
      // Unmounting
      console.log('Component will unmount');
    };
  }, []);
}`}
          </pre>
        </div>
      </div>
    ),
    "Error Boundaries": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Error Handling with Boundaries</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom Error Boundaries</li>
          <li>Fallback UI</li>
          <li>Error Reporting</li>
          <li>Recovery Patterns</li>
          <li>Error Monitoring</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}`}
          </pre>
        </div>
      </div>
    ),
    "React Context API": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Context API Usage</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Context Creation</li>
          <li>Provider Pattern</li>
          <li>Consumer Components</li>
          <li>Performance Considerations</li>
          <li>Context vs State Management</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`}
          </pre>
        </div>
      </div>
    ),
    "Custom Hooks": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Building Custom Hooks</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hook Design Patterns</li>
          <li>Reusable Logic</li>
          <li>Hook Composition</li>
          <li>Testing Hooks</li>
          <li>Hook Libraries</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`}
          </pre>
        </div>
      </div>
    ),
    "React Suspense": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Using React Suspense</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lazy Loading</li>
          <li>Data Fetching</li>
          <li>Suspense Boundaries</li>
          <li>Error Handling</li>
          <li>Loading States</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`const LazyComponent = React.lazy(() => 
  import('./LazyComponent')
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}`}
          </pre>
        </div>
      </div>
    ),
    "React Animations": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Animation Techniques</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>React Transition Group</li>
          <li>Framer Motion kutubxonasi</li>
          <li>CSS Transitions va Animations</li>
          <li>React Spring</li>
          <li>GSAP bilan animatsiyalar</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`import { motion } from 'framer-motion';

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Animated Content
  </motion.div>
)`}
          </pre>
        </div>
      </div>
    ),
    "React Forms": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Advanced Form Handling</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>React Hook Form</li>
          <li>Formik va Yup validatsiya</li>
          <li>Custom Form Hooks</li>
          <li>Form State Management</li>
          <li>File Upload va handling</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Kod namunasi:</h4>
          <pre className="bg-gray-800 text-white p-3 rounded">
            {`import { useForm } from 'react-hook-form';

const FormComponent = () => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {errors.email && <span>Email majburiy</span>}
    </form>
  );
}`}
          </pre>
        </div>
      </div>
    ),
    "React Mobile": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Mobile Development with React</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>React Native asoslari</li>
          <li>Progressive Web Apps (PWA)</li>
          <li>Responsive Design patterns</li>
          <li>Touch Events handling</li>
          <li>Mobile-first yondashuv</li>
        </ul>
      </div>
    ),
    "Internationalization": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">React Internationalization</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>React-i18next</li>
          <li>Multiple language support</li>
          <li>RTL va LTR support</li>
          <li>Dynamic content translation</li>
          <li>Date va number formatlash</li>
        </ul>
      </div>
    ),
    "React Plugins": (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Essential React Plugins</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redux Toolkit</li>
          <li>React Query</li>
          <li>React Router v6</li>
          <li>Styled Components</li>
          <li>Material-UI va Tailwind</li>
        </ul>
      </div>
    )
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-2 right-2 z-50 w-auto">
        <button 
          onClick={() => navigate("/frontend/react")}
          className="p-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all shadow-md flex items-center gap-2"
        >
          <span>Orqaga</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-2 left-2 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all shadow-md"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <div className={`
          fixed lg:sticky lg:top-0
          w-[260px] sm:w-[280px] lg:w-[300px]
          h-screen
          bg-gray-100/95 backdrop-blur-sm
          transition-all duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
          shadow-lg lg:shadow-none
        `}>
          <div className="flex flex-col h-full p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pt-16 lg:pt-4">O'rta Daraja React</h2>
            <div className="overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <ul className="space-y-1.5 sm:space-y-2">
                {menu.map((item, index) => (
                  <li 
                    key={index}
                    className={`
                      p-2.5 sm:p-3
                      hover:bg-gray-200/80
                      cursor-pointer
                      rounded-lg
                      transition-all
                      duration-200
                      ${selectedTopic === item ? 'bg-gray-200/90' : ''}
                    `}
                    onClick={() => {
                      setSelectedTopic(item);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="text-gray-600 text-sm sm:text-base">
                        {menuIcons[item]}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:pl-0">
          <div className={`
            h-screen
            p-3 sm:p-4 md:p-6 lg:p-8
            mt-14 sm:mt-16 lg:mt-0
            transition-all
            duration-300
            ${isMobileMenuOpen ? 'blur-sm lg:blur-none' : ''}
          `}>
            {selectedTopic ? (
              <div className="h-full overflow-hidden">
                <div className="max-w-5xl mx-auto h-full flex flex-col">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                    {selectedTopic}
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {topicContent[selectedTopic]}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-8 sm:mt-10">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  Mavzuni tanlang
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400">
                  Batafsil ma'lumot olish uchun chap menuda mavzulardan birini tanlang
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default OrtaReact;
const dataInternationalizationMukammal = [
    {
        id: 1,
        title: "React-i18next Setup",
        code: `
// i18n configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          hello: 'Hello, {{name}}!',
          nav: {
            home: 'Home',
            about: 'About'
          }
        }
      },
      uz: {
        translation: {
          welcome: 'Xush kelibsiz',
          hello: 'Salom, {{name}}!',
          nav: {
            home: 'Bosh sahifa',
            about: 'Biz haqimizda'
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });`,
        description: "React-i18next ni o'rnatish va sozlash",
        result: `{
    "feature": "i18n Setup",
    "components": [
        "Configuration",
        "Language Resources",
        "Fallback Settings",
        "Interpolation Options"
    ]
}`
    },
    {
        id: 2,
        title: "Translation Usage",
        code: `
// Basic translation usage
function WelcomeComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello', { name: 'John' })}</p>
      
      {/* Plural handling */}
      <p>{t('items', { count: 4 })}</p>
      
      {/* Nested translations */}
      <nav>
        <a href="/">{t('nav.home')}</a>
        <a href="/about">{t('nav.about')}</a>
      </nav>
    </div>
  );
}`,
        description: "Tarjimalardan foydalanish usullari",
        result: `{
    "feature": "Translation Usage",
    "methods": [
        "Basic Translation",
        "Variable Interpolation",
        "Plural Forms",
        "Nested Keys"
    ]
}`
    },
    {
        id: 3,
        title: "Language Switcher",
        code: `
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Save language preference
    localStorage.setItem('preferredLanguage', lng);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('uz')}
        className={i18n.language === 'uz' ? 'active' : ''}
      >
        O'zbek
      </button>
    </div>
  );
}`,
        description: "Til almashtirgich komponenti",
        result: `{
    "feature": "Language Switching",
    "functionality": [
        "Language Selection",
        "Preference Storage",
        "Active Language Indication",
        "Dynamic Updates"
    ]
}`
    },
    {
        id: 4,
        title: "Date and Number Formatting",
        code: `
function FormattedContent() {
  const { t, i18n } = useTranslation();
  
  const date = new Date();
  const number = 1234567.89;

  return (
    <div>
      {/* Date formatting */}
      <p>
        {new Intl.DateTimeFormat(i18n.language, {
          dateStyle: 'full',
          timeStyle: 'long'
        }).format(date)}
      </p>

      {/* Number formatting */}
      <p>
        {new Intl.NumberFormat(i18n.language, {
          style: 'currency',
          currency: i18n.language === 'uz' ? 'UZS' : 'USD'
        }).format(number)}
      </p>
    </div>
  );
}`,
        description: "Sana va raqamlarni formatlash",
        result: `{
    "feature": "Formatting",
    "types": [
        "Date Formatting",
        "Number Formatting",
        "Currency Handling",
        "Locale-Specific Display"
    ]
}`
    },
    {
        id: 5,
        title: "Dynamic Loading",
        code: `
// Language chunk loading
const loadLanguageAsync = async (language) => {
  try {
    const translations = await import(
      \`./locales/\${language}/translations.json\`
    );
    
    i18n.addResourceBundle(
      language,
      'translation',
      translations.default,
      true,
      true
    );
    
    return i18n.changeLanguage(language);
  } catch (error) {
    console.error('Error loading language:', error);
    return Promise.reject(error);
  }
};

// Usage in component
function App() {
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = async (lng) => {
    setLoading(true);
    try {
      await loadLanguageAsync(lng);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <LanguageSwitcher onChange={handleLanguageChange} />
      )}
    </div>
  );
}`,
        description: "Tillarni dinamik yuklash",
        result: `{
    "feature": "Dynamic Loading",
    "benefits": [
        "Lazy Loading",
        "Bundle Size Optimization",
        "On-demand Languages",
        "Performance Improvement"
    ]
}`
    },
    {
        id: 6,
        title: "RTL Support",
        code: `
// RTL support implementation
function RTLProvider({ children }) {
  const { i18n } = useTranslation();
  
  const isRTL = ['ar', 'he'].includes(i18n.language);
  
  useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [isRTL, i18n.language]);

  return (
    <div className={\`app-container \${isRTL ? 'rtl' : 'ltr'}\`}>
      {children}
    </div>
  );
}

// Styled component with RTL support
const StyledComponent = styled.div\`
  margin-left: \${props => props.isRTL ? '0' : '20px'};
  margin-right: \${props => props.isRTL ? '20px' : '0'};
  text-align: \${props => props.isRTL ? 'right' : 'left'};
\`;`,
        description: "O'ngdan chapga yozuv tizimini qo'llab-quvvatlash",
        result: `{
    "feature": "RTL Support",
    "implementations": [
        "Direction Management",
        "Layout Adaptation",
        "Text Alignment",
        "Component Styling"
    ]
}`
    },
    {
        id: 7,
        title: "Advanced Translation Features",
        code: `
// Advanced translation features
function AdvancedTranslations() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Context-based translations */}
      <p>{t('friend', { context: 'male' })}</p>
      <p>{t('friend', { context: 'female' })}</p>

      {/* Pluralization with complex rules */}
      <p>{t('items_plural', { count: 0 })}</p>
      <p>{t('items_plural', { count: 1 })}</p>
      <p>{t('items_plural', { count: 5 })}</p>

      {/* Formatting with rich text */}
      <p>{t('welcome_rich', {
        name: 'John',
        component: (text) => <strong>{text}</strong>
      })}</p>

      {/* Date and time with specific formats */}
      <p>{t('date', {
        date: new Date(),
        formatParams: {
          date: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        }
      })}</p>
    </div>
  );
}`,
        description: "Kengaytirilgan tarjima xususiyatlari",
        result: `{
    "feature": "Advanced Translations",
    "capabilities": [
        "Context-based Translation",
        "Complex Pluralization",
        "Rich Text Formatting",
        "Date Localization"
    ]
}`
    },
    {
        id: 8,
        title: "Internationalization HOC",
        code: `
// Higher-Order Component for internationalization
const withInternationalization = (WrappedComponent) => {
  return function WithInternationalizationComponent(props) {
    const { t, i18n } = useTranslation();
    const [direction, setDirection] = useState(i18n.dir());
    
    useEffect(() => {
      const handleLanguageChange = () => {
        setDirection(i18n.dir());
        document.documentElement.lang = i18n.language;
      };

      i18n.on('languageChanged', handleLanguageChange);
      return () => {
        i18n.off('languageChanged', handleLanguageChange);
      };
    }, [i18n]);

    return (
      <WrappedComponent
        {...props}
        isRTL={direction === 'rtl'}
        currentLanguage={i18n.language}
        translate={t}
      />
    );
  };
};

// Usage example
const LocalizedComponent = withInternationalization(({ isRTL, currentLanguage, translate }) => {
  return (
    <div className={isRTL ? 'rtl-content' : 'ltr-content'}>
      <h2>{translate('title')}</h2>
      <p>Current Language: {currentLanguage}</p>
    </div>
  );
});`,
        description: "Internatsionalizatsiya uchun yuqori tartibli komponent",
        result: `{
    "feature": "i18n HOC",
    "benefits": [
        "Reusable Logic",
        "Automatic Direction Management",
        "Language Change Handling",
        "Props Injection"
    ]
}`
    },
    {
        id: 9,
        title: "Language Detection",
        code: `
// Language detection and initialization
const setupLanguage = () => {
  const detectedLanguage = navigator.language.split('-')[0];
  const savedLanguage = localStorage.getItem('userLanguage');
  const supportedLanguages = ['en', 'uz', 'ru', 'ar'];
  
  let preferredLanguage = savedLanguage 
    || detectedLanguage 
    || 'en';

  // Validate if detected language is supported
  if (!supportedLanguages.includes(preferredLanguage)) {
    preferredLanguage = 'en';
  }

  // Initialize with detected/saved language
  i18n.changeLanguage(preferredLanguage);

  // Set HTML lang attribute
  document.documentElement.lang = preferredLanguage;

  return preferredLanguage;
};

function LanguageDetector() {
  const [detectedLang, setDetectedLang] = useState('');
  
  useEffect(() => {
    const language = setupLanguage();
    setDetectedLang(language);
  }, []);

  return (
    <div>
      <p>Detected Language: {detectedLang}</p>
      <p>Browser Language: {navigator.language}</p>
    </div>
  );
}`,
        description: "Foydalanuvchi tilini aniqlash va sozlash",
        result: `{
    "feature": "Language Detection",
    "functionality": [
        "Browser Language Detection",
        "Saved Preference Check",
        "Language Validation",
        "Automatic Setup"
    ]
}`
    }
];

export default dataInternationalizationMukammal;
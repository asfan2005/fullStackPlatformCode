const dataInternationalizationOrta = [
    {
        id: 1,
        title: "React Internationalization",
        description: "React ilovalarni ko'p tillilik va lokalizatsiya qilish bo'yicha to'liq ma'lumot",
        image: "https://i.ytimg.com/vi/_2mNeiNBP_s/maxresdefault.jpg",
        mainTopics: {
            introduction: {
                title: "Internationalization Asoslari",
                points: [
                    "i18n tushunchasi",
                    "React-intl kutubxonasi",
                    "Til almashtirish",
                    "Formatlar (sana, vaqt, raqam)",
                    "Matnlarni tarjima qilish",
                    "RTL va LTR yo'nalishlar"
                ],
                examples: [
                    {
                        title: "Basic i18n Setup",
                        description: "React-intl asosiy sozlamalari",
                        code: `
import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

const messages = {
    en: {
        greeting: 'Hello, {name}!',
        welcome: 'Welcome to our app'
    },
    uz: {
        greeting: 'Salom, {name}!',
        welcome: 'Ilovamizga xush kelibsiz'
    }
};

const App = () => {
    const [locale, setLocale] = useState('en');

    return (
        <IntlProvider messages={messages[locale]} locale={locale}>
            <div>
                <FormattedMessage 
                    id="greeting"
                    values={{ name: "John" }}
                />
                <FormattedMessage id="welcome" />
            </div>
        </IntlProvider>
    );
};`
                    },
                    {
                        title: "Date and Number Formatting",
                        description: "Sana va raqamlarni formatlash",
                        code: `
import { FormattedDate, FormattedNumber, FormattedTime } from 'react-intl';

const FormattingExample = () => {
    return (
        <div>
            <FormattedDate
                value={new Date()}
                year="numeric"
                month="long"
                day="numeric"
            />
            
            <FormattedNumber
                value={1234567.89}
                style="currency"
                currency="USD"
            />
            
            <FormattedTime
                value={new Date()}
                hour="numeric"
                minute="numeric"
            />
        </div>
    );
};`
                    }
                ]
            },
            implementationGuide: {
                title: "Implementatsiya Qo'llanmasi",
                components: [
                    {
                        name: "Language Switcher",
                        description: "Til almashtirgich komponenti",
                        code: `
const LanguageSwitcher = ({ currentLocale, onLocaleChange }) => {
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'uz', name: 'O'zbek' },
        { code: 'ru', name: 'Русский' }
    ];

    return (
        <select 
            value={currentLocale}
            onChange={(e) => onLocaleChange(e.target.value)}
        >
            {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
};`
                    },
                    {
                        name: "Translation Provider",
                        description: "Tarjima provayderini sozlash",
                        code: `
import { createContext, useContext } from 'react';

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
    const [locale, setLocale] = useState('en');
    const [messages, setMessages] = useState({});

    const loadMessages = async (locale) => {
        const response = await fetch(\`/api/translations/\${locale}.json\`);
        const data = await response.json();
        setMessages(data);
    };

    useEffect(() => {
        loadMessages(locale);
    }, [locale]);

    return (
        <TranslationContext.Provider value={{ locale, setLocale, messages }}>
            <IntlProvider messages={messages} locale={locale}>
                {children}
            </IntlProvider>
        </TranslationContext.Provider>
    );
};`
                    }
                ]
            },
            advancedFeatures: {
                title: "Qo'shimcha Xususiyatlar",
                features: [
                    {
                        name: "Plural Forms",
                        description: "Ko'plik shakllarini qo'llash",
                        code: `
const PluralExample = () => {
    return (
        <FormattedMessage
            id="items"
            defaultMessage="{count, plural, 
                =0 {No items}
                one {# item}
                other {# items}
            }"
            values={{ count: 5 }}
        />
    );
};`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Optimization Tips",
                        tips: [
                            "Tarjimalarni keshirlash",
                            "Lazy loading translations",
                            "Message extraction automation",
                            "Translation management system"
                        ]
                    },
                    {
                        name: "Code Organization",
                        tips: [
                            "Tarjima fayllarini strukturalash",
                            "Konstantalardan foydalanish",
                            "HOC va hook'lardan foydalanish",
                            "Testing strategies"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React-Intl Documentation",
                        url: "https://formatjs.io/docs/react-intl/"
                    },
                    {
                        name: "i18next Framework",
                        url: "https://www.i18next.com/"
                    },
                    {
                        name: "FormatJS",
                        url: "https://formatjs.io/"
                    }
                ]
            }
        }
    }
];

export default dataInternationalizationOrta;
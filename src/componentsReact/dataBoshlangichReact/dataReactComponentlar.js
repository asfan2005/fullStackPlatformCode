const dataReactComponentlar = [
    {
        id: 1,
        title: "React Komponentlari",
        description: "React komponentlari - zamonaviy web ilovalar yaratishning asosiy building blocklari",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                title: "React Komponentlari Haqida",
                points: [
                    "Komponentlar - qayta ishlatiluvchi UI bloklari",
                    "Props orqali ma'lumot almashish imkoniyati",
                    "Har bir komponent o'z state'iga ega bo'lishi mumkin",
                    "Komponentlar bir-biri bilan ierarxik bog'lanishi mumkin",
                    "Lifecycle metodlari orqali boshqarish imkoniyati"
                ]
            },
            componentTypes: {
                title: "Komponent Turlari",
                types: [
                    {
                        name: "Function Components",
                        description: "Zamonaviy React-da eng ko'p ishlatiladigan komponent turi. Hooks bilan ishlash imkoniyati mavjud.",
                        example: `function Welcome(props) {
    return <h1>Salom, {props.name}</h1>;
}`,
                        features: [
                            "Sodda va tushunarli sintaksis",
                            "Hooks bilan ishlash imkoniyati",
                            "Yengil va tez ishlashi",
                            "Props va state bilan ishlash oson"
                        ]
                    },
                    {
                        name: "Class Components",
                        description: "OOP prinsiplariga asoslangan, to'liq funksionalli komponentlar.",
                        example: `class Welcome extends React.Component {
    render() {
        return <h1>Salom, {this.props.name}</h1>;
    }
}`,
                        features: [
                            "Lifecycle metodlariga to'liq kirish",
                            "this kontekstidan foydalanish",
                            "State va Props bilan ishlash",
                            "Legacy kodlar bilan moslik"
                        ]
                    }
                ]
            },
            componentLifecycle: {
                title: "Komponent Hayot Sikli",
                phases: [
                    {
                        name: "Mounting",
                        methods: [
                            "constructor()",
                            "render()",
                            "componentDidMount()"
                        ],
                        description: "Komponent DOM ga birinchi marta joylashtirilganda"
                    },
                    {
                        name: "Updating",
                        methods: [
                            "shouldComponentUpdate()",
                            "render()",
                            "componentDidUpdate()"
                        ],
                        description: "Props yoki state o'zgarganda"
                    },
                    {
                        name: "Unmounting",
                        methods: [
                            "componentWillUnmount()"
                        ],
                        description: "Komponent DOM dan olib tashlanganda"
                    }
                ]
            },
            hooks: {
                title: "Asosiy React Hooks",
                hooksList: [
                    {
                        name: "useState",
                        description: "Komponentda state boshqarish uchun eng asosiy hook",
                        example: `const [count, setCount] = useState(0);
// Ishlatilishi
<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`
                    },
                    {
                        name: "useEffect",
                        description: "Side-effectlarni boshqarish uchun hook",
                        example: `useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]); // count o'zgarganda ishlaydi`
                    },
                    {
                        name: "useContext",
                        description: "Context API bilan ishlash uchun hook",
                        example: `const theme = useContext(ThemeContext);
// Ishlatilishi
<div style={{ background: theme.background }}>`
                    },
                    {
                        name: "useRef",
                        description: "DOM elementlariga to'g'ridan-to'g'ri murojaat qilish",
                        example: `const inputRef = useRef();
// Ishlatilishi
<input ref={inputRef} />`
                    }
                ]
            },
            props: {
                title: "Props Bilan Ishlash",
                concepts: [
                    {
                        name: "Props Uzatish",
                        example: `<UserCard name="John" age={25} />`,
                        description: "Komponentga ma'lumot uzatish"
                    },
                    {
                        name: "Props Validation",
                        example: `UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}`,
                        description: "Props tiplarini tekshirish"
                    },
                    {
                        name: "Default Props",
                        example: `UserCard.defaultProps = {
    age: 18
}`,
                        description: "Standart qiymatlarni belgilash"
                    }
                ]
            }
        },
        practicalExamples: {
            title: "Amaliy Misollar",
            examples: [
                {
                    name: "To'liq Komponent Misoli",
                    code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (!user) return <div>Foydalanuvchi topilmadi</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <div className="user-stats">
        <span>Posts: {user.posts}</span>
        <span>Followers: {user.followers}</span>
      </div>
    </div>
  );
}`
                },
                {
                    name: "Custom Hook Yaratish",
                    code: `import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Ishlatilishi
function App() {
  const { width, height } = useWindowSize();
  return (
    <div>
      Oyna o'lchami: {width} x {height}
    </div>
  );
}`
                }
            ]
        },
        bestPractices: {
            title: "Eng Yaxshi Amaliyotlar",
            practices: [
                {
                    name: "Komponentlarni Ajratish",
                    description: "Katta komponentlarni kichik, qayta ishlatiluvchi qismlarga bo'lish",
                    example: "Header, Sidebar, Footer kabi"
                },
                {
                    name: "Props Drilling dan Qochish",
                    description: "Context yoki state management kutubxonalaridan foydalanish",
                    solution: "Redux yoki Context API ishlatish"
                },
                {
                    name: "Pure Komponentlar",
                    description: "Bir xil props uchun bir xil natija qaytaruvchi komponentlar yaratish",
                    benefit: "Performance optimizatsiyasi"
                }
            ]
        },
        commonMistakes: {
            title: "Ko'p Uchraydigan Xatolar",
            mistakes: [
                {
                    name: "State to'g'ridan-to'g'ri o'zgartirish",
                    wrong: "this.state.count = 5",
                    correct: "this.setState({ count: 5 })"
                },
                {
                    name: "useEffect dependency array",
                    wrong: "useEffect(() => {...})",
                    correct: "useEffect(() => {...}, [dependency])"
                },
                {
                    name: "Key prop unutish",
                    wrong: "array.map(item => <ListItem />)",
                    correct: "array.map(item => <ListItem key={item.id} />)"
                }
            ]
        },
        performance: {
            title: "Komponent Optimizatsiyasi",
            techniques: [
                {
                    name: "React.memo()",
                    description: "Keraksiz qayta renderlarni oldini olish",
                    example: `const MemoizedComponent = React.memo(MyComponent);`
                },
                {
                    name: "useCallback",
                    description: "Funksiyalarni keshlash",
                    example: `const memoizedFn = useCallback(() => {
    // Funksiya logikasi
}, [dependency]);`
                },
                {
                    name: "useMemo",
                    description: "Qimmat hisob-kitoblarni keshlash",
                    example: `const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);`
                }
            ]
        },
        testing: {
            title: "Komponentlarni Testing Qilish",
            tools: [
                {
                    name: "Jest",
                    description: "Unit testlar uchun framework"
                },
                {
                    name: "React Testing Library",
                    description: "Komponentlarni test qilish uchun kutubxona"
                }
            ],
            examples: [
                {
                    name: "Komponent Render Testi",
                    code: `test('renders welcome message', () => {
    render(<Welcome name="John" />);
    expect(screen.getByText(/Hello, John/i)).toBeInTheDocument();
});`
                }
            ]
        },
        basicComponents: {
            title: "Asosiy React Komponentlari",
            components: [
                {
                    name: "Button",
                    description: "Foydalanuvchi bilan o'zaro aloqa uchun asosiy element",
                    example: `function CustomButton({ onClick, children, variant = 'primary' }) {
    return (
        <button 
            onClick={onClick}
            className={\`btn btn-\${variant}\`}
        >
            {children}
        </button>
    );
}`,
                    props: ["onClick - hodisa funksiyasi", "children - tugma matni", "variant - tugma turi"]
                },
                {
                    name: "Input",
                    description: "Foydalanuvchidan ma'lumot qabul qilish uchun komponent",
                    example: `function CustomInput({ value, onChange, type = 'text', placeholder }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-input"
        />
    );
}`,
                    props: ["value - input qiymati", "onChange - o'zgarish hodisasi", "type - input turi", "placeholder - ko'rsatma matni"]
                },
                {
                    name: "Form",
                    description: "Ma'lumotlarni yuborish uchun forma komponenti",
                    example: `function LoginForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={formData.username}
                onChange={(e) => setFormData({
                    ...formData,
                    username: e.target.value
                })}
            />
            <button type="submit">Yuborish</button>
        </form>
    );
}`,
                    props: ["onSubmit - forma yuborilganda ishga tushuvchi funksiya"]
                },
                {
                    name: "Modal",
                    description: "Modal oyna komponenti",
                    example: `function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
}`,
                    props: ["isOpen - modal holatini boshqarish", "onClose - yopish funksiyasi", "children - modal tarkibi"]
                }
            ]
        },
        additionalLibraries: {
            title: "Foydali React Kutubxonalari",
            libraries: [
                {
                    name: "React Router",
                    description: "Sahifalar o'rtasida navigatsiya uchun kutubxona",
                    example: `import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}`
                },
                {
                    name: "Redux Toolkit",
                    description: "Global holatni boshqarish uchun zamonaviy yechim",
                    example: `import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 }
    }
});`
                },
                {
                    name: "React Query",
                    description: "Server ma'lumotlarini boshqarish uchun kutubxona",
                    example: `import { useQuery } from 'react-query';

function UserData() {
    const { data, isLoading } = useQuery('users', 
        () => fetch('/api/users').then(res => res.json())
    );

    if (isLoading) return 'Yuklanmoqda...';
    return <div>{data.map(user => (
        <div key={user.id}>{user.name}</div>
    ))}</div>;
}`
                }
            ]
        }
    }
];

export default dataReactComponentlar;
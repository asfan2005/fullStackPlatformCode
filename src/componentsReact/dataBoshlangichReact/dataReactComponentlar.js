const dataReactComponentlar = [
    {
        id: 4,
        title: "React Komponentlar",
        level: "Boshlang'ich",
        description: "React komponentlari - zamonaviy UI yaratishning asosiy bloklari",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                title: "React Komponentlari Nima?",
                points: [
                    "Komponentlar - qayta ishlatiluvchi UI bloklari",
                    "Mustaqil va izolyatsiya qilingan kod bo'laklari",
                    "Props orqali ma'lumot almashish imkoniyati",
                    "Har bir komponent o'z state'iga ega bo'lishi mumkin",
                    "Kichik komponentlardan katta ilovalar yaratish imkoniyati"
                ]
            },
            componentTypes: {
                title: "Komponent Turlari",
                types: [
                    {
                        name: "Function Komponentlar",
                        description: "Zamonaviy React da eng ko'p ishlatiladigan komponent turi",
                        example: `function Welcome(props) {
    return <h1>Salom, {props.name}</h1>;
}`,
                        features: [
                            "Hooks bilan ishlash imkoniyati",
                            "Sodda va tushunarli sintaksis",
                            "Yengil va samarali"
                        ]
                    },
                    {
                        name: "Class Komponentlar",
                        description: "OOP paradigmasiga asoslangan komponentlar",
                        example: `class Welcome extends React.Component {
    render() {
        return <h1>Salom, {this.props.name}</h1>;
    }
}`,
                        features: [
                            "Lifecycle metodlari",
                            "this konteksti",
                            "State boshqaruvi"
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
                        description: "State boshqarish uchun",
                        example: `const [count, setCount] = useState(0);`
                    },
                    {
                        name: "useEffect",
                        description: "Side effect'larni boshqarish",
                        example: `useEffect(() => {
    document.title = 'Yangi sarlavha';
}, []);`
                    },
                    {
                        name: "useContext",
                        description: "Context'dan ma'lumot olish",
                        example: `const value = useContext(MyContext);`
                    },
                    {
                        name: "useRef",
                        description: "DOM elementlariga murojaat",
                        example: `const inputRef = useRef();`
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
                    name: "Oddiy Komponent",
                    code: `function Welcome() {
    return <h1>Salom Dunyo!</h1>;
}`
                },
                {
                    name: "Props bilan Komponent",
                    code: `function UserProfile({ name, avatar }) {
    return (
        <div className="profile">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
        </div>
    );
}`
                },
                {
                    name: "State bilan Komponent",
                    code: `function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Siz {count} marta bosdingiz</p>
            <button onClick={() => setCount(count + 1)}>
                Bosing
            </button>
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
        }
    }
];

export default dataReactComponentlar;
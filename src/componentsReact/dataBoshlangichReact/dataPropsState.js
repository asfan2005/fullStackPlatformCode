const dataPropsState = [
    {
        id: 1,
        title: "React Props va State",
        description: "React ilovalarida ma'lumotlarni boshqarish va uzatishning asosiy mexanizmlari",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                id: "intro_1",
                title: "Props va State Haqida",
                points: [
                    "Props - komponentlar o'rtasida ma'lumot uzatish uchun",
                    "State - komponent ichidagi dinamik ma'lumotlarni saqlash",
                    "Props read-only, State o'zgaruvchan",
                    "Props yuqoridan pastga uzatiladi",
                    "State komponent ichida boshqariladi"
                ]
            },
            propsBasics: {
                id: "props_basics_1",
                title: "Props Asoslari",
                examples: [
                    {
                        id: "example_1",
                        name: "Props Uzatish",
                        description: "Komponentga ma'lumotlarni uzatish",
                        code: `// Parent komponent
function ParentComponent() {
    return <ChildComponent name="John" age={25} isAdmin={true} />;
}

// Child komponent
function ChildComponent(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Yosh: {props.age}</p>
            {props.isAdmin && <span>Admin huquqi bor</span>}
        </div>
    );
}`
                    },
                    {
                        id: "example_2",
                        name: "Props Destructuring",
                        description: "Propslarni qulayroq ishlatish",
                        code: `function UserCard({ name, age, avatar, onDelete }) {
    return (
        <div className="user-card">
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <p>{age} yosh</p>s
            <button onClick={onDelete}>O'chirish</button>
        </div>
    );
}`
                    },
                    {
                        id: "example_3",
                        name: "Product List Example",
                        description: "Mahsulotlar ro'yxatini props orqali uzatish va ko'rsatish",
                        code: `// ProductList komponenti (Parent)
function ProductList() {
    const products = [
        { id: 1, name: "iPhone 13", price: 999, inStock: true },
        { id: 2, name: "MacBook Pro", price: 1299, inStock: false },
        { id: 3, name: "AirPods Pro", price: 249, inStock: true }
    ];

    const handleBuy = (productId) => {
        console.log(\`\${productId} raqamli mahsulot sotib olindi\`);
    };

    return (
        <div className="product-list">
            <h2>Bizning Mahsulotlar</h2>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                    onBuy={handleBuy}
                />
            ))}
        </div>
    );
}

// ProductCard komponenti (Child)
function ProductCard({ id, name, price, inStock, onBuy }) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>Narxi: \${price}</p>
            <p>Holati: {inStock ? "Sotuvda bor" : "Sotuvda yo'q"}</p>
            <button 
                onClick={() => onBuy(id)}
                disabled={!inStock}
            >
                Sotib olish
            </button>
        </div>
    );
}

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    onBuy: PropTypes.func.isRequired
};`
                    },
                    {
                        id: "example_4",
                        name: "User Profile with Edit",
                        description: "Foydalanuvchi profilini props orqali boshqarish",
                        code: `// UserProfileContainer komponenti (Parent)
function UserProfileContainer() {
    const [user, setUser] = useState({
        id: 1,
        fullName: "Aziz Rahimov",
        email: "aziz@example.com",
        avatar: "https://example.com/avatar.jpg",
        settings: {
            notifications: true,
            theme: "light"
        }
    });

    const handleUpdateProfile = (updatedData) => {
        setUser(prevUser => ({
            ...prevUser,
            ...updatedData
        }));
    };

    const handleToggleNotifications = () => {
        setUser(prevUser => ({
            ...prevUser,
            settings: {
                ...prevUser.settings,
                notifications: !prevUser.settings.notifications
            }
        }));
    };

    return (
        <div className="profile-container">
            <UserProfile
                userData={user}
                onUpdate={handleUpdateProfile}
                onToggleNotifications={handleToggleNotifications}
            />
        </div>
    );
}

// UserProfile komponenti (Child)
function UserProfile({ userData, onUpdate, onToggleNotifications }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: userData.fullName,
        email: userData.email
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="user-profile">
            <img src={userData.avatar} alt={userData.fullName} />
            
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="To'liq ism"
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        type="email"
                    />
                    <button type="submit">Saqlash</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Bekor qilish
                    </button>
                </form>
            ) : (
                <>
                    <h2>{userData.fullName}</h2>
                    <p>{userData.email}</p>
                    <button onClick={() => setIsEditing(true)}>
                        Tahrirlash
                    </button>
                </>
            )}

            <div className="settings">
                <label>
                    <input
                        type="checkbox"
                        checked={userData.settings.notifications}
                        onChange={onToggleNotifications}
                    />
                    Bildirishnomalar
                </label>
            </div>
        </div>
    );
}

UserProfile.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        fullName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        settings: PropTypes.shape({
            notifications: PropTypes.bool.isRequired,
            theme: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onToggleNotifications: PropTypes.func.isRequired
};`
                    }
                ]
            },
            propsTypes: {
                id: "props_types_1",
                title: "Props Turlari va Validatsiya",
                types: [
                    {
                        id: "type_1",
                        name: "String Props",
                        description: "Matn ko'rinishidagi props",
                        example: `<Component text="Hello" />`,
                        note: "Oddiy matn uzatish uchun",
                        propType: `PropTypes.string.isRequired`
                    },
                    {
                        id: "type_2",
                        name: "Number Props",
                        description: "Raqamli props",
                        example: `<Component count={42} />`,
                        note: "Raqamli qiymatlar uchun",
                        propType: `PropTypes.number`
                    },
                    {
                        id: "type_3",
                        name: "Boolean Props",
                        description: "Mantiqiy props",
                        example: `<Component isActive={true} />`,
                        note: "True/false qiymatlar uchun",
                        propType: `PropTypes.bool`
                    },
                    {
                        id: "type_4",
                        name: "Array Props",
                        description: "Massiv ko'rinishidagi props",
                        example: `<Component items={['apple', 'banana']} />`,
                        note: "Massivlar uchun",
                        propType: `PropTypes.array`
                    },
                    {
                        id: "type_5",
                        name: "Object Props",
                        description: "Obyekt ko'rinishidagi props",
                        example: `<Component user={{ name: 'John', age: 25 }} />`,
                        note: "Obyektlar uchun",
                        propType: `PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
})`
                    },
                    {
                        id: "type_6",
                        name: "Function Props",
                        description: "Funksiya ko'rinishidagi props",
                        example: `<Component onClick={() => console.log('Clicked!')} />`,
                        note: "Callback funksiyalar uchun",
                        propType: `PropTypes.func`
                    }
                ],
                propTypesExample: {
                    id: "proptypes_example_1",
                    name: "PropTypes Validatsiya",
                    code: `import PropTypes from 'prop-types';

function UserProfile({ name, age, friends, onUpdate }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Yosh: {age}</p>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
            <button onClick={onUpdate}>Yangilash</button>
        </div>
    );
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ),
    onUpdate: PropTypes.func.isRequired
};

UserProfile.defaultProps = {
    age: 18,
    friends: []
};`
                }
            },
            stateManagement: {
                id: "state_1",
                title: "State Boshqaruvi",
                examples: [
                    {
                        id: "state_example_1",
                        name: "useState Hook",
                        description: "Holatni boshqarish",
                        code: `function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}`
                    },
                    {
                        id: "state_example_2",
                        name: "Complex State",
                        description: "Murakkab holatni boshqarish",
                        code: `function UserForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: 18
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form>
            <input
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
        </form>
    );
}`
                    }
                ]
            }
        }
    }
];

export default dataPropsState;
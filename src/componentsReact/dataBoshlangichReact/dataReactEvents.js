const dataReactEvents = [
    {
        id: 1,
        title: "React Events",
        description: "React'da event handling - foydalanuvchi harakatlariga javob berish mexanizmi",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                id: "intro_1",
                title: "React Events Haqida",
                points: [
                    "React event'lari camelCase formatida yoziladi",
                    "JSX'da event handler funksiyalar {} ichida beriladi",
                    "Event'lar synthetic events - brauzer moslashtirish uchun",
                    "Event handling orqali interaktiv UI yaratish",
                    "Event propagation va bubbling boshqarish",
                    "Event'larni to'xtatish (preventDefault, stopPropagation)",
                    "Turli xil event turlari bilan ishlash",
                    "Event handler'larni optimizatsiya qilish"
                ]
            },
            basicEvents: {
                id: "basic_events_1",
                title: "Asosiy Event'lar",
                examples: [
                    {
                        id: "event_basic_1",
                        name: "onClick Event",
                        description: "Click event'larini boshqarish",
                        code: `function ClickExample() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        alert("O'ng tugma bosildi!");
    };

    return (
        <div className="p-4">
            <button 
                onClick={handleClick}
                onContextMenu={handleRightClick}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                {count} marta bosildi
            </button>
        </div>
    );
}`
                    },
                    {
                        id: "event_basic_2",
                        name: "Form Events",
                        description: "Forma event'lari bilan ishlash",
                        code: `function FormExample() {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Yuborilgan ma\'lumotlar:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Foydalanuvchi nomi"
                    className="p-2 border rounded"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 border rounded"
                />
            </div>
            <button 
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                Yuborish
            </button>
        </form>
    );
}`
                    },
                    {
                        id: "event_basic_3",
                        name: "Mouse Events",
                        description: "Sichqoncha event'lari",
                        code: `function MouseEventsExample() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    return (
        <div 
            className="p-4 h-40 bg-gray-100"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p>Sichqoncha pozitsiyasi: x={position.x}, y={position.y}</p>
            <div 
                className={\`p-4 bg-blue-200 transition-all \${
                    isHovered ? 'bg-blue-400' : ''
                }\`}
            >
                Ustimga keling
            </div>
        </div>
    );
}`
                    }
                ]
            },
            advancedEvents: {
                id: "advanced_events_1",
                title: "Murakkab Event'lar",
                examples: [
                    {
                        id: "event_advanced_1",
                        name: "Keyboard Events",
                        description: "Klaviatura event'lari bilan ishlash",
                        code: `function KeyboardExample() {
    const [pressedKeys, setPressedKeys] = useState([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            setPressedKeys(prev => [...new Set([...prev, e.key])]);
        };

        const handleKeyUp = (e) => {
            setPressedKeys(prev => 
                prev.filter(key => key !== e.key)
            );
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className="p-4">
            <h3>Bosilgan tugmalar:</h3>
            <div className="flex gap-2">
                {pressedKeys.map(key => (
                    <span 
                        key={key}
                        className="px-2 py-1 bg-gray-200 rounded"
                    >
                        {key}
                    </span>
                ))}
            </div>
        </div>
    );
}`
                    },
                    {
                        id: "event_advanced_2",
                        name: "Drag and Drop",
                        description: "Drag and Drop funksionali",
                        code: `function DragDropExample() {
    const [items, setItems] = useState([
        { id: 1, text: "Element 1" },
        { id: 2, text: "Element 2" },
        { id: 3, text: "Element 3" }
    ]);

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDrop = (e, targetId) => {
        e.preventDefault();
        const draggedId = Number(e.dataTransfer.getData('text/plain'));
        const newItems = [...items];
        
        const draggedIndex = items.findIndex(item => item.id === draggedId);
        const targetIndex = items.findIndex(item => item.id === targetId);
        
        [newItems[draggedIndex], newItems[targetIndex]] = 
        [newItems[targetIndex], newItems[draggedIndex]];
        
        setItems(newItems);
    };

    return (
        <div className="p-4">
            {items.map(item => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, item.id)}
                    className="p-2 m-2 bg-gray-100 cursor-move"
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
}`
                    }
                ]
            },
            eventPatterns: {
                id: "patterns_1",
                title: "Event Pattern'lar",
                examples: [
                    {
                        id: "pattern_1",
                        name: "Event Delegation",
                        description: "Event delegation pattern",
                        code: `function EventDelegationExample() {
    const handleListClick = (e) => {
        if (e.target.tagName === 'LI') {
            console.log('Bosilgan element:', e.target.textContent);
        }
    };

    return (
        <ul 
            onClick={handleListClick}
            className="p-4 space-y-2"
        >
            <li className="p-2 bg-gray-100 cursor-pointer">Element 1</li>
            <li className="p-2 bg-gray-100 cursor-pointer">Element 2</li>
            <li className="p-2 bg-gray-100 cursor-pointer">Element 3</li>
        </ul>
    );
}`
                    },
                    {
                        id: "pattern_2",
                        name: "Custom Event Handler",
                        description: "Maxsus event handler yaratish",
                        code: `function useEventHandler(eventName, handler, element = window) {
    useEffect(() => {
        element.addEventListener(eventName, handler);
        return () => element.removeEventListener(eventName, handler);
    }, [eventName, handler, element]);
}

function CustomEventExample() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEventHandler('scroll', handleScroll);

    return (
        <div className="p-4">
            <p>Scroll pozitsiyasi: {scrollY}px</p>
        </div>
    );
}`
                    }
                ]
            }
        }
    }
];

export default dataReactEvents;
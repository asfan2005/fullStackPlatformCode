const dataComponentsTailwand = [
    {
        id: 1,
        title: "Asosiy Komponentlar",
        description: "Tailwind CSS da komponentlarni yaratish va ulardan foydalanish",
        examples: [
            "Button components",
            "Card components",
            "Navigation components",
            "Form components",
            "Layout components"
        ],
        codeExample: `<!-- Button Component -->
<button class="bg-blue-500 hover:bg-blue-700 text-white 
    font-bold py-2 px-4 rounded transition duration-300">
    Click me
</button>

<!-- Card Component -->
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img class="w-full" src="image.jpg" alt="Card image">
    <div class="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">Card Title</h3>
        <p class="text-gray-700 text-base">
            Card content goes here
        </p>
    </div>
</div>`,
        tips: [
            "Komponentlarni modullar sifatida yarating",
            "Qayta ishlatiluvchi komponentlar yarating",
            "Responsive dizaynni hisobga oling",
            "Accessibility qoidalariga rioya qiling"
        ]
    },
    {
        id: 2,
        title: "Component Extraction",
        description: "Mavjud HTML dan komponentlarni ajratib olish",
        examples: [
            "Template extraction",
            "Pattern extraction",
            "Layout extraction",
            "Utility extraction"
        ],
        codeExample: `// Button.jsx
const Button = ({ children, variant = 'primary' }) => {
    const styles = {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
        success: 'bg-green-500 hover:bg-green-700 text-white'
    };

    return (
        <button className={\`\${styles[variant]} font-bold 
            py-2 px-4 rounded transition duration-300\`}>
            {children}
        </button>
    );
};

// Card.jsx
const Card = ({ title, content, image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden 
            shadow-lg bg-white">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 text-base">{content}</p>
            </div>
        </div>
    );
};`,
        tips: [
            "Komponentlarni mantiqiy bo'laklarga ajrating",
            "Props orqali moslashuvchanlikni ta'minlang",
            "DRY (Don't Repeat Yourself) printsipiga amal qiling",
            "Komponent nomlarini aniq va tushunarli qiling"
        ]
    },
    {
        id: 3,
        title: "@apply Direktivi",
        description: "Tailwind utility klasslarini CSS ga extract qilish",
        examples: [
            "@apply usage",
            "Custom styles",
            "Utility extraction",
            "Style organization"
        ],
        codeExample: `/* styles.css */
.btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white 
    font-bold py-2 px-4 rounded transition duration-300;
}

.card {
    @apply max-w-sm rounded overflow-hidden shadow-lg bg-white;
}

.card-body {
    @apply px-6 py-4;
}

.card-title {
    @apply font-bold text-xl mb-2;
}`,
        tips: [
            "@apply ni kerakli joylarda ishlating",
            "Utility klasslarni tartibli saqlang",
            "Performance ni hisobga oling",
            "CSS hajmini optimize qiling"
        ]
    },
    {
        id: 4,
        title: "Custom Komponentlar",
        description: "O'ziga xos komponentlarni yaratish",
        examples: [
            "Custom designs",
            "Complex components",
            "Interactive components",
            "Animated components"
        ],
        codeExample: `<!-- Custom Notification Component -->
<div class="fixed bottom-4 right-4 flex flex-col gap-4">
    <div class="bg-white rounded-lg shadow-lg p-4 
        transform transition-all duration-300 
        hover:scale-105 border-l-4 border-blue-500">
        <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-blue-500" fill="none" 
                stroke="currentColor" viewBox="0 0 24 24">
                <!-- SVG path -->
            </svg>
            <div>
                <h4 class="font-semibold">Notification Title</h4>
                <p class="text-gray-600">Notification message</p>
            </div>
        </div>
    </div>
</div>

<!-- Custom Dropdown -->
<div class="relative inline-block text-left">
    <button class="inline-flex justify-center w-full px-4 
        py-2 text-sm font-medium text-gray-700 bg-white 
        rounded-md hover:bg-gray-50 focus:outline-none 
        focus:ring-2 focus:ring-offset-2 
        focus:ring-offset-gray-100 focus:ring-blue-500">
        Options
        <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" 
            fill="currentColor">
            <!-- SVG path -->
        </svg>
    </button>
    <div class="absolute right-0 w-56 mt-2 origin-top-right 
        bg-white rounded-md shadow-lg ring-1 ring-black 
        ring-opacity-5">
        <!-- Dropdown items -->
    </div>
</div>`,
        tips: [
            "Komponentlarni maxsus dizaynga moslang",
            "Interaktiv elementlarni qo'shing",
            "Animatsiyalardan to'g'ri foydalaning",
            "Accessibility ni ta'minlang"
        ]
    },
    {
        id: 5,
        title: "Reusable Patterns",
        description: "Qayta ishlatiluvchi pattern va shablonlar",
        examples: [
            "Layout patterns",
            "Component patterns",
            "Responsive patterns",
            "Interactive patterns"
        ],
        codeExample: `<!-- Grid Layout Pattern -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map(item => (
        <div class="bg-white rounded-lg shadow-md p-6 
            hover:shadow-lg transition duration-300">
            <!-- Item content -->
        </div>
    ))}
</div>

<!-- Modal Pattern -->
<div class="fixed inset-0 bg-black bg-opacity-50 
    flex items-center justify-center">
    <div class="bg-white rounded-lg p-6 max-w-md w-full 
        mx-4 transform transition-all duration-300">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Modal Title</h3>
            <button class="text-gray-400 hover:text-gray-600">
                <!-- Close icon -->
            </button>
        </div>
        <!-- Modal content -->
    </div>
</div>`,
        tips: [
            "Pattern larni loyiha bo'ylab bir xil ishlating",
            "Responsive dizaynni hisobga oling",
            "Kod takrorlanishini kamaytiring",
            "Pattern larni dokumentatsiya qiling"
        ]
    }
];

export default dataComponentsTailwand;
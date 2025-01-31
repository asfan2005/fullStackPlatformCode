const dataAnimatsiyalarTransitions = [
    {
        id: 1,
        title: "Asosiy Transitions",
        description: "Tailwind CSS da transition effektlarini qo'llash",
        examples: [
            "transition-all",
            "transition-colors",
            "transition-opacity",
            "transition-transform",
            "transition-none"
        ],
        codeExample: `<!-- Basic transition -->
<button class="transition-all duration-300 ease-in-out 
    bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Hover qiling
</button>

<!-- Opacity transition -->
<div class="transition-opacity duration-500 
    hover:opacity-50">
    Shaffoflik o'zgarishi
</div>

<!-- Multiple properties -->
<div class="transition-all duration-300
    transform hover:scale-105 hover:shadow-lg
    bg-white p-4 rounded">
    Hover effekti
</div>`,
        tips: [
            "Transition-all'ni ehtiyotkorlik bilan ishlating",
            "Duration qiymatlarini maqsadga muvofiq tanlang",
            "Ease-in-out smooth animatsiya uchun foydali",
            "Performance'ni hisobga oling"
        ]
    },
    {
        id: 2,
        title: "Transform Effektlari",
        description: "Element transformatsiyasi uchun klasslar",
        examples: [
            "scale-{amount}",
            "rotate-{degrees}",
            "translate-{size}",
            "skew-{degrees}"
        ],
        codeExample: `<!-- Scale transform -->
<div class="transform hover:scale-110 transition-transform
    duration-300 bg-indigo-500 p-4">
    Kattalashtirish
</div>

<!-- Rotate and scale -->
<div class="transform hover:rotate-12 hover:scale-105
    transition-all duration-500 bg-green-500 p-4">
    Aylantirish va kattalashtirish
</div>

<!-- Complex transform -->
<div class="transform hover:-translate-y-2 hover:scale-105
    transition-all duration-300 shadow-lg hover:shadow-xl
    bg-white p-6 rounded-lg">
    Ko'tarish effekti
</div>`,
        tips: [
            "Transform'larni transition bilan birga ishlating",
            "Hardware-accelerated transformlarni afzal ko'ring",
            "Murakkab transformlarni combine qiling",
            "Hover effektlarini mobile'da test qiling"
        ]
    },
    {
        id: 3,
        title: "Animatsiya Presetlari",
        description: "Tayyor animatsiya effektlari",
        examples: [
            "animate-spin",
            "animate-ping",
            "animate-pulse",
            "animate-bounce"
        ],
        codeExample: `<!-- Spinning animation -->
<div class="animate-spin h-10 w-10 border-4 
    border-blue-500 rounded-full border-t-transparent">
</div>

<!-- Pulse effect -->
<div class="animate-pulse bg-blue-400 h-12 w-12 rounded-full">
</div>

<!-- Bounce animation -->
<button class="animate-bounce bg-green-500 p-4 rounded-full
    text-white shadow-lg">
    Bounce Effect
</button>

<!-- Custom animation -->
<div class="animate-[wiggle_1s_ease-in-out_infinite]
    bg-yellow-500 p-4">
    Custom Animation
</div>`,
        tips: [
            "Animatsiyalarni maqsadli ishlating",
            "Performance'ni kuzatib boring",
            "Infinite animatsiyalardan ehtiyot bo'ling",
            "Custom animatsiyalar uchun @keyframes ishlating"
        ]
    },
    {
        id: 4,
        title: "Interaktiv Holatlar",
        description: "Hover, focus va active holatlar uchun animatsiyalar",
        examples: [
            "Hover effects",
            "Focus states",
            "Active animations",
            "Group-hover"
        ],
        codeExample: `<!-- Interactive card -->
<div class="group p-6 bg-white rounded-xl shadow-lg
    transition-all duration-300 hover:shadow-xl
    hover:-translate-y-1">
    <h3 class="text-lg group-hover:text-blue-500
        transition-colors duration-300">
        Sarlavha
    </h3>
    <p class="opacity-75 group-hover:opacity-100
        transition-opacity duration-300">
        Tavsif matni
    </p>
</div>

<!-- Button with states -->
<button class="px-6 py-3 bg-purple-500 text-white rounded-lg
    transition-all duration-300
    hover:bg-purple-600 hover:shadow-lg
    active:bg-purple-700 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-purple-500
    focus:ring-offset-2">
    Interactive Button
</button>`,
        tips: [
            "Group-hover'ni parent-child animatsiyalar uchun ishlating",
            "Focus holatlarini accessibility uchun qo'shing",
            "Active holatlar uchun scale-down effekti qo'llang",
            "Transition timing'larni user experience'ga moslang"
        ]
    },
    {
        id: 5,
        title: "Murakkab Animatsiyalar",
        description: "Kombinatsiyalangan va custom animatsiyalar",
        examples: [
            "Multiple transitions",
            "Keyframe animations",
            "Staggered animations",
            "Loading states"
        ],
        codeExample: `<!-- Complex card animation -->
<div class="transform transition-all duration-500
    hover:scale-105 hover:rotate-1 hover:shadow-2xl
    bg-gradient-to-r from-purple-500 to-pink-500
    p-8 rounded-2xl">
    <div class="transition-all duration-300
        transform hover:-translate-y-2">
        <h2 class="text-white text-2xl">Sarlavha</h2>
        <p class="text-white/80">Tavsif</p>
    </div>
</div>

<!-- Loading spinner with multiple elements -->
<div class="flex space-x-2">
    <div class="animate-bounce delay-100 h-4 w-4 bg-blue-500 rounded-full"></div>
    <div class="animate-bounce delay-200 h-4 w-4 bg-blue-500 rounded-full"></div>
    <div class="animate-bounce delay-300 h-4 w-4 bg-blue-500 rounded-full"></div>
</div>

<!-- Hover effect with multiple transitions -->
<button class="relative overflow-hidden px-6 py-3 rounded-lg
    bg-gradient-to-r from-blue-500 to-purple-500
    transition-all duration-300
    hover:from-blue-600 hover:to-purple-600">
    <span class="relative z-10 text-white
        transition-transform duration-300
        group-hover:translate-x-1">
        Bosing
    </span>
</button>`,
        tips: [
            "Animatsiyalarni mantiqiy ketma-ketlikda qo'llang",
            "CSS Variables'dan foydalaning custom animatsiyalar uchun",
            "Prefers-reduced-motion'ni hisobga oling",
            "Performance optimizatsiyasini amalga oshiring"
        ]
    }
];

export default dataAnimatsiyalarTransitions;
const dataTypography = [
    {
        id: 1,
        title: "Font Families",
        description: "Tailwind CSS da turli xil font oilalarini qo'llash va sozlash",
        examples: [
            "Sans-serif fonts",
            "Serif fonts",
            "Monospace fonts",
            "Custom fonts"
        ],
        codeExample: `<!-- Default sans-serif -->
<p class="font-sans">Modern sans-serif text</p>

<!-- Serif font -->
<p class="font-serif">Classic serif text</p>

<!-- Monospace font -->
<p class="font-mono">Monospace coding text</p>

<!-- Custom font (config orqali) -->
<p class="font-poppins">Custom Poppins font</p>`,
        tips: [
            "font-sans ni asosiy matn uchun ishlating",
            "font-serif ni sarlavhalar uchun qo'llang",
            "font-mono ni kod va raqamlar uchun ishlating",
            "Custom fontlarni tailwind.config.js da sozlang"
        ]
    },
    {
        id: 2,
        title: "Font Size va Weight",
        description: "Matn o'lchami va qalinligini boshqarish",
        examples: [
            "Text sizes",
            "Font weights",
            "Responsive typography",
            "Dynamic sizing"
        ],
        codeExample: `<!-- Font sizes -->
<h1 class="text-4xl font-bold">Katta sarlavha</h1>
<h2 class="text-2xl font-semibold">O'rta sarlavha</h2>
<p class="text-base">Normal matn</p>
<span class="text-sm">Kichik matn</span>

<!-- Responsive font size -->
<p class="text-sm md:text-base lg:text-lg">
    Responsive o'lchamli matn
</p>

<!-- Font weights -->
<p class="font-light">Yengil</p>
<p class="font-normal">Normal</p>
<p class="font-medium">O'rta</p>
<p class="font-bold">Qalin</p>`,
        tips: [
            "text-{size} ni hierarchiya uchun ishlating",
            "font-{weight} ni emphasis uchun qo'llang",
            "Responsive matn o'lchamlarini screen size'ga moslang",
            "font-bold ni muhim elementlar uchun ishlating"
        ]
    },
    {
        id: 3,
        title: "Text Alignment va Decoration",
        description: "Matn joylashuvi va bezaklarini boshqarish",
        examples: [
            "Text alignment",
            "Text decoration",
            "Text transform",
            "Text overflow"
        ],
        codeExample: `<!-- Text alignment -->
<p class="text-left">Chapga tekislangan</p>
<p class="text-center">Markazga tekislangan</p>
<p class="text-right">O'ngga tekislangan</p>

<!-- Text decoration -->
<p class="underline">Tagiga chizilgan</p>
<p class="line-through">O'chirilib yozilgan</p>
<p class="no-underline">Bezaksiz</p>

<!-- Text transform -->
<p class="uppercase">Upper case text</p>
<p class="lowercase">Lower case text</p>
<p class="capitalize">Capitalized text</p>

<!-- Text overflow -->
<p class="truncate w-48">
    Juda uzun matn qatorini qisqartirish...
</p>`,
        tips: [
            "text-{alignment} ni content tuzilishiga qarab tanlang",
            "decoration'larni link va emphasis uchun ishlating",
            "transform'larni sarlavha va buttonlar uchun qo'llang",
            "truncate'ni uzun matnlarni boshqarish uchun ishlating"
        ]
    },
    {
        id: 4,
        title: "Line Height va Letter Spacing",
        description: "Qator balandligi va harflar orasidagi masofani sozlash",
        examples: [
            "Line height options",
            "Letter spacing",
            "Vertical rhythm",
            "Reading optimization"
        ],
        codeExample: `<!-- Line height -->
<p class="leading-none">Minimal qator balandligi</p>
<p class="leading-normal">Normal qator balandligi</p>
<p class="leading-loose">Keng qator balandligi</p>

<!-- Letter spacing -->
<h1 class="tracking-tight">Zich joylashgan</h1>
<p class="tracking-normal">Normal spacing</p>
<h2 class="tracking-wide">Keng joylashgan</h2>

<!-- Combined typography -->
<article class="prose lg:prose-xl">
    <h1 class="leading-tight tracking-tight">
        Optimal o'qish uchun
    </h1>
    <p class="leading-relaxed tracking-normal">
        Matn tarkibi
    </p>
</article>`,
        tips: [
            "leading-{size} ni readability uchun tanlang",
            "tracking-{size} ni emphasis va sarlavhalar uchun",
            "prose classni blog postlar uchun ishlating",
            "Responsive typography'ni content type'ga moslang"
        ]
    },
    {
        id: 5,
        title: "Lists va Custom Shriftlar",
        description: "Ro'yxatlar va maxsus shriftlarni qo'llash",
        examples: [
            "Ordered lists",
            "Unordered lists",
            "Custom list styles",
            "Google Fonts integration"
        ],
        codeExample: `<!-- Unordered list -->
<ul class="list-disc list-inside space-y-2">
    <li>Birinchi element</li>
    <li>Ikkinchi element</li>
    <li>Uchinchi element</li>
</ul>

<!-- Ordered list -->
<ol class="list-decimal list-inside space-y-2">
    <li>Birinchi qadam</li>
    <li>Ikkinchi qadam</li>
    <li>Uchinchi qadam</li>
</ol>

<!-- Custom styled list -->
<ul class="list-none space-y-4">
    <li class="flex items-center space-x-2">
        <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
        </svg>
        <span>Maxsus belgi bilan</span>
    </li>
</ul>`,
        tips: [
            "list-{style} ni content type'ga qarab tanlang",
            "list-inside/outside ni spacing uchun ishlating",
            "Custom markerlar uchun SVG yoki emoji ishlating",
            "Google Fonts'ni @import orqali ulang"
        ]
    }
];

export default dataTypography;
const dataResponsiveDizayn = [
    {
        id: 1,
        title: "Breakpointlar",
        description: "Tailwind CSS da asosiy breakpointlar va ularning ishlatilishi",
        examples: [
            "sm (640px)",
            "md (768px)",
            "lg (1024px)",
            "xl (1280px)",
            "2xl (1536px)"
        ],
        codeExample: `<!-- Responsive width -->
<div class="w-full md:w-1/2 lg:w-1/3">
    Responsive kenglik
</div>

<!-- Responsive display -->
<div class="hidden md:block">
    Tablet va undan katta qurilmalarda ko'rinadi
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
</div>`,
        tips: [
            "Mobile-first yondashuvni qo'llang",
            "Breakpointlarni mantiqiy ketma-ketlikda ishlating",
            "Har bir breakpoint uchun alohida test o'tkazing",
            "Container classlarni to'g'ri tanlang"
        ]
    },
    {
        id: 2,
        title: "Mobile-first Yondashuv",
        description: "Mobile qurilmalardan boshlab responsive dizayn yaratish",
        examples: [
            "Default mobile styles",
            "Progressive enhancement",
            "Responsive navigation",
            "Touch-friendly interfaces"
        ],
        codeExample: `<!-- Mobile-first navigation -->
<nav class="fixed bottom-0 w-full md:static md:w-auto">
    <ul class="flex justify-around md:justify-start">
        <li class="p-4 md:p-2">Home</li>
        <li class="p-4 md:p-2">About</li>
        <li class="p-4 md:p-2">Contact</li>
    </ul>
</nav>

<!-- Responsive card layout -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div class="p-4 rounded shadow">
        <h3 class="text-lg md:text-xl">Card 1</h3>
        <p class="text-sm md:text-base">Content</p>
    </div>
</div>`,
        tips: [
            "Mobil versiyani default holatda yarating",
            "Touch targetlar kamida 44px bo'lishi kerak",
            "Menyu va navigatsiyani mobil qurilmalarga moslashtiring",
            "Performance optimizatsiyasini unutmang"
        ]
    },
    {
        id: 3,
        title: "Responsive Utilities",
        description: "Responsive dizayn uchun foydali utility classlar",
        examples: [
            "Responsive spacing",
            "Responsive flexbox",
            "Responsive positioning",
            "Responsive visibility"
        ],
        codeExample: `<!-- Responsive spacing -->
<div class="p-4 md:p-6 lg:p-8">
    <h2 class="mb-2 md:mb-4">Sarlavha</h2>
    <p class="mt-2 md:mt-4">Matn</p>
</div>

<!-- Responsive flexbox -->
<div class="flex flex-col md:flex-row md:space-x-4">
    <div class="w-full md:w-1/3">Sidebar</div>
    <div class="w-full md:w-2/3">Main content</div>
</div>

<!-- Responsive visibility -->
<button class="block md:hidden">Mobile menu</button>
<nav class="hidden md:block">Desktop menu</nav>`,
        tips: [
            "Utility classlarni mantiqiy ketma-ketlikda yozing",
            "Responsive spacing uchun dinamik qiymatlar ishlating",
            "Visibility classlarni ehtiyotkorlik bilan qo'llang",
            "Layout classlarni to'g'ri kombinatsiya qiling"
        ]
    },
    {
        id: 4,
        title: "Container Queries",
        description: "Container-based responsive dizayn",
        examples: [
            "Container sizes",
            "Container constraints",
            "Adaptive layouts",
            "Component-level responsiveness"
        ],
        codeExample: `<!-- Container with max-width -->
<div class="container mx-auto px-4">
    <div class="max-w-screen-xl mx-auto">
        Content
    </div>
</div>

<!-- Responsive container -->
<div class="container mx-auto px-4 md:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>Column 1</div>
        <div>Column 2</div>
    </div>
</div>`,
        tips: [
            "Container classni asosiy wrapper uchun ishlating",
            "Max-width constraints qo'llang",
            "Padding'larni responsive qiling",
            "Grid sistemadan unumli foydalaning"
        ]
    },
    {
        id: 5,
        title: "Responsive Typography",
        description: "Responsive matn o'lchamlari va stillar",
        examples: [
            "Fluid typography",
            "Responsive font sizes",
            "Responsive line height",
            "Responsive spacing"
        ],
        codeExample: `<!-- Responsive typography -->
<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
    Responsive sarlavha
</h1>

<p class="text-sm md:text-base lg:text-lg leading-relaxed">
    Responsive matn with proper line height
</p>

<!-- Article with responsive typography -->
<article class="prose md:prose-lg lg:prose-xl">
    <h2>Blog post sarlavhasi</h2>
    <p>Blog post matni...</p>
</article>`,
        tips: [
            "Matn o'lchamlarini screen size'ga moslang",
            "Line-height'ni o'qish uchun qulay qiling",
            "Prose classlardan blog contentda foydalaning",
            "Heading hierarchiyasini saqlang"
        ]
    }
];

export default dataResponsiveDizayn;
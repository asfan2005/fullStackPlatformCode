const dataFlexboxGrid = [
    {
        id: 1,
        title: "Flexbox Asoslari",
        description: "Tailwind CSS da Flexbox yordamida content joylashuvini boshqarish",
        examples: [
            "Flex container yaratish",
            "Flex direction",
            "Flex wrap",
            "Flex grow/shrink"
        ],
        codeExample: `<!-- Asosiy flex container -->
<div class="flex">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- Flex direction -->
<div class="flex flex-col md:flex-row">
    <div>Column on mobile</div>
    <div>Row on desktop</div>
</div>

<!-- Flex wrap -->
<div class="flex flex-wrap">
    <div class="w-1/3">Wrapped item</div>
    <div class="w-1/2">Wrapped item</div>
</div>`,
        tips: [
            "flex-row va flex-col'ni responsive dizayn uchun ishlating",
            "flex-wrap'ni dynamic content uchun qo'llang",
            "flex-grow va flex-shrink'ni ehtiyotkorlik bilan ishlating",
            "Mobile-first yondashuv bilan ishlating"
        ]
    },
    {
        id: 2,
        title: "Justify va Align",
        description: "Flex elementlarni gorizontal va vertikal joylashuvini boshqarish",
        examples: [
            "justify-content",
            "align-items",
            "align-self",
            "align-content"
        ],
        codeExample: `<!-- Justify content -->
<div class="flex justify-between">
    <div>Start</div>
    <div>Center</div>
    <div>End</div>
</div>

<!-- Align items -->
<div class="flex h-24 items-center">
    <div>Centered vertically</div>
</div>

<!-- Combined alignment -->
<div class="flex h-screen justify-center items-center">
    <div>Perfectly centered</div>
</div>`,
        tips: [
            "justify-between'ni navigation uchun ishlating",
            "items-center'ni vertical markazlashtirish uchun qo'llang",
            "align-self'ni individual elementlar uchun ishlating",
            "space-between va space-around farqini tushunib ishlating"
        ]
    },
    {
        id: 3,
        title: "Grid Layout Asoslari",
        description: "CSS Grid yordamida murakkab layoutlarni yaratish",
        examples: [
            "Grid container",
            "Grid template columns",
            "Grid template rows",
            "Grid areas"
        ],
        codeExample: `<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div>Responsive columns</div>
    <div>Adjust to screen</div>
    <div>Size changes</div>
</div>

<!-- Complex grid -->
<div class="grid grid-cols-12 gap-4">
    <div class="col-span-4">Sidebar</div>
    <div class="col-span-8">Main content</div>
</div>`,
        tips: [
            "grid-cols-{n} ni layout asosi sifatida ishlating",
            "gap utilities'ni consistent spacing uchun qo'llang",
            "col-span-{n} ni element kengligini boshqarish uchun ishlating",
            "responsive breakpointlarni to'g'ri tanlang"
        ]
    },
    {
        id: 4,
        title: "Auto-fit va Auto-fill",
        description: "Dynamic grid layoutlarni yaratish uchun auto-fit va auto-fill",
        examples: [
            "Auto-fit grids",
            "Auto-fill grids",
            "Minimal va maksimal column width",
            "Responsive auto grids"
        ],
        codeExample: `<!-- Auto-fit grid -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
    <div>Auto-fit item</div>
    <div>Adjusts automatically</div>
</div>

<!-- Auto-fill grid -->
<div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
    <div>Auto-fill item</div>
    <div>Creates new columns</div>
</div>

<!-- Responsive auto grid -->
<div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
    <div>Responsive auto-fit</div>
    <div>Adapts to viewport</div>
</div>`,
        tips: [
            "auto-fit'ni responsive gallery uchun ishlating",
            "auto-fill'ni maximum column uchun qo'llang",
            "minmax() bilan minimum column width'ni belgilang",
            "responsive breakpointlarda auto-fit/fill'ni to'g'ri ishlating"
        ]
    },
    {
        id: 5,
        title: "Grid Gap va Spacing",
        description: "Grid elementlar orasidagi masofani boshqarish",
        examples: [
            "Grid gap utilities",
            "Row va column gap",
            "Responsive gap",
            "Nested grid spacing"
        ],
        codeExample: `<!-- Basic grid gap -->
<div class="grid grid-cols-3 gap-4">
    <div>Spaced item</div>
    <div>Spaced item</div>
    <div>Spaced item</div>
</div>

<!-- Different row/column gaps -->
<div class="grid grid-cols-2 gap-x-8 gap-y-4">
    <div>Different spacing</div>
    <div>For rows and columns</div>
</div>

<!-- Responsive gap -->
<div class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
    <div>Responsive gap</div>
    <div>Changes with screen</div>
</div>`,
        tips: [
            "gap-{size} ni consistent spacing uchun ishlating",
            "gap-x va gap-y ni alohida spacing uchun qo'llang",
            "responsive gap'ni content'ga moslashtiring",
            "nested gridlarda gap'ni hisobga oling"
        ]
    }
];

export default dataFlexboxGrid;
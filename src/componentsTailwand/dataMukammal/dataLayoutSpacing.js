const dataLayoutSpacing = [
    {
        id: 1,
        title: "Container va Responsive Layout",
        description: "Tailwind CSS da container va responsive dizayn uchun asosiy layoutlar",
        examples: [
            "Container width sozlamalari",
            "Responsive breakpointlar",
            "Container markazlashtirish",
            "Container padding"
        ],
        codeExample: `<!-- Asosiy container -->
<div class="container mx-auto px-4">
    Content here
</div>

<!-- Responsive container -->
<div class="container mx-auto px-4 md:px-6 lg:px-8">
    Responsive padding
</div>

<!-- Maximum width container -->
<div class="container mx-auto max-w-6xl">
    Limited width content
</div>`,
        tips: [
            "Container'ni har doim mx-auto bilan markazlashtiring",
            "Responsive breakpointlarni to'g'ri tanlang",
            "Padding'larni screen size'ga qarab moslang",
            "Max-width'ni kontent uchun optimal tanlang"
        ]
    },
    {
        id: 2,
        title: "Padding va Margin",
        description: "Element orasidagi masofalarni boshqarish uchun padding va margin sozlamalari",
        examples: [
            "Padding yo'nalishlari",
            "Margin qiymatlari",
            "Responsive spacing",
            "Negative margin"
        ],
        codeExample: `<!-- Padding examples -->
<div class="p-4">All sides padding</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
<div class="pt-4 pr-3 pb-2 pl-1">Individual side padding</div>

<!-- Margin examples -->
<div class="m-4">All sides margin</div>
<div class="mx-auto">Center horizontally</div>
<div class="mt-4 mb-8">Vertical spacing</div>

<!-- Responsive spacing -->
<div class="p-2 md:p-4 lg:p-6">
    Responsive padding
</div>`,
        tips: [
            "Spacing'ni consistent qilib ishlating",
            "Responsive designda spacing'ni optimize qiling",
            "Negative margin'ni ehtiyotkorlik bilan ishlating",
            "Layout spacing'ni ritmik saqlang"
        ]
    },
    {
        id: 3,
        title: "Width va Height",
        description: "Elementlarning o'lchamlarini boshqarish uchun width va height sozlamalari",
        examples: [
            "Fixed width/height",
            "Responsive sizes",
            "Percentage based sizes",
            "Viewport based sizes"
        ],
        codeExample: `<!-- Width examples -->
<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>
<div class="w-screen">Viewport width</div>

<!-- Height examples -->
<div class="h-screen">Full viewport height</div>
<div class="h-64">Fixed height (16rem)</div>
<div class="h-full">Full height of parent</div>

<!-- Responsive sizes -->
<div class="w-full md:w-1/2 lg:w-1/3">
    Responsive width
</div>`,
        tips: [
            "Responsive breakpointlarda width'ni to'g'ri tanlang",
            "Height'ni dynamic content'ga moslashtiring",
            "Viewport o'lchamlarini ehtiyotkorlik bilan ishlating",
            "Overflow holatlarini hisobga oling"
        ]
    },
    {
        id: 4,
        title: "Min/Max Width/Height",
        description: "Elementlarning minimal va maksimal o'lchamlarini cheklash",
        examples: [
            "Minimum width/height",
            "Maximum width/height",
            "Responsive constraints",
            "Content-based sizing"
        ],
        codeExample: `<!-- Min-width examples -->
<div class="min-w-full">Minimum full width</div>
<div class="min-w-[300px]">Custom min width</div>

<!-- Max-width examples -->
<div class="max-w-xl">Maximum width preset</div>
<div class="max-w-prose">Readable width</div>

<!-- Combined constraints -->
<div class="min-h-screen max-w-4xl mx-auto">
    Constrained layout
</div>

<!-- Responsive constraints -->
<div class="max-w-sm md:max-w-md lg:max-w-lg">
    Responsive max width
</div>`,
        tips: [
            "Max-width'ni readability uchun ishlating",
            "Min-height'ni layout collapse'ni oldini olish uchun qo'llang",
            "Responsive dizaynda constraint'larni to'g'ri tanlang",
            "Content overflow'ni hisobga oling"
        ]
    },
    {
        id: 5,
        title: "Space Between",
        description: "Elementlar orasidagi masofani boshqarish uchun space-between utilities",
        examples: [
            "Vertical spacing",
            "Horizontal spacing",
            "Responsive spacing",
            "Negative spacing"
        ],
        codeExample: `<!-- Vertical space between -->
<div class="space-y-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- Horizontal space between -->
<div class="flex space-x-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- Responsive space between -->
<div class="space-y-2 md:space-y-4 lg:space-y-6">
    <div>Responsive spacing</div>
    <div>Between items</div>
</div>`,
        tips: [
            "Space-between'ni list elementlari uchun ishlating",
            "Flex va grid bilan kombinatsiyada ishlating",
            "Responsive spacing'ni content'ga qarab tanlang",
            "Reverse spacing'ni ham hisobga oling"
        ]
    },
    {
        id: 6,
        title: "Gap (Grid/Flex)",
        description: "Grid va Flex containerlar uchun gap spacing utilities",
        examples: [
            "Grid gap",
            "Flex gap",
            "Row/Column gap",
            "Responsive gap"
        ],
        codeExample: `<!-- Grid gap -->
<div class="grid grid-cols-3 gap-4">
    <div>Grid item 1</div>
    <div>Grid item 2</div>
    <div>Grid item 3</div>
</div>

<!-- Different row/column gap -->
<div class="grid grid-cols-2 gap-x-4 gap-y-8">
    <div>Different gaps</div>
    <div>For rows/columns</div>
</div>

<!-- Responsive gap -->
<div class="flex gap-2 md:gap-4 lg:gap-6">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
</div>`,
        tips: [
            "Gap'ni grid va flex layoutlarda ishlating",
            "Row va column gap'ni alohida boshqaring",
            "Responsive gap'ni content'ga moslashtiring",
            "Gap'ni spacing sistemaga moslab tanlang"
        ]
    }
];

export default dataLayoutSpacing;
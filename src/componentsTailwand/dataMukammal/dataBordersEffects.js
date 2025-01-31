const dataBordersEffects = [
    {
        id: 1,
        title: "Border Asoslari",
        description: "Tailwind CSS da border stillarini qo'llash",
        examples: [
            "border",
            "border-{width}",
            "border-{color}",
            "border-{side}",
            "rounded-{size}"
        ],
        codeExample: `<!-- Basic border -->
<div class="border border-gray-300 p-4">
    Oddiy border
</div>

<!-- Border width -->
<div class="border-2 border-blue-500 p-4">
    Qalin border
</div>

<!-- Rounded corners -->
<div class="border rounded-lg border-green-500 p-4">
    Yumalok burchaklar
</div>`,
        tips: [
            "Border width'ni responsive qiling",
            "Border ranglarini theme'ga moslang",
            "Border radius'ni component'ga qarab tanlang",
            "Border stillarini combine qiling"
        ]
    },
    {
        id: 2,
        title: "Border Effektlari",
        description: "Maxsus border effektlari va stillar",
        examples: [
            "border-dashed",
            "border-dotted",
            "border-double",
            "divide-x",
            "divide-y"
        ],
        codeExample: `<!-- Dashed border -->
<div class="border-dashed border-2 border-purple-500 p-4">
    Punktir border
</div>

<!-- Divided container -->
<div class="divide-y divide-gray-200">
    <div class="py-3">Element 1</div>
    <div class="py-3">Element 2</div>
    <div class="py-3">Element 3</div>
</div>

<!-- Double border -->
<div class="border-double border-4 border-indigo-500 p-4">
    Ikki qatlamli border
</div>`,
        tips: [
            "Divide utilitylarni list'larda ishlating",
            "Border stillarini hover'da o'zgartiring",
            "Responsive border stillarini qo'llang",
            "Border opacity'sini sozlang"
        ]
    },
    {
        id: 3,
        title: "Shadow Effektlari",
        description: "Box va text shadow effektlari",
        examples: [
            "shadow-{size}",
            "shadow-{color}",
            "drop-shadow",
            "text-shadow"
        ],
        codeExample: `<!-- Box shadow -->
<div class="shadow-lg hover:shadow-xl transition-shadow 
    duration-300 bg-white p-6 rounded-xl">
    Shadow effekti
</div>

<!-- Colored shadow -->
<div class="shadow-lg shadow-blue-500/50 bg-white p-6 rounded-xl">
    Rangli shadow
</div>

<!-- Drop shadow -->
<img class="drop-shadow-xl" src="image.jpg" alt="Drop shadow image">

<!-- Multiple shadows -->
<div class="shadow-[0_0_15px_rgba(0,0,0,0.2),0_0_5px_rgba(0,0,0,0.1)]
    bg-white p-6 rounded-xl">
    Murakkab shadow
</div>`,
        tips: [
            "Shadow'larni performance uchun optimize qiling",
            "Hover'da shadow o'zgarishini qo'shing",
            "Shadow ranglarini brand ranglariga moslang",
            "Mobile'da shadow'larni kamaytiring"
        ]
    },
    {
        id: 4,
        title: "Outline Effektlari",
        description: "Outline va ring effektlari",
        examples: [
            "outline",
            "outline-{width}",
            "ring",
            "ring-{width}",
            "ring-offset"
        ],
        codeExample: `<!-- Focus ring -->
<button class="focus:outline-none focus:ring-2 
    focus:ring-blue-500 focus:ring-offset-2 
    bg-white px-4 py-2 rounded-lg">
    Focus ring button
</button>

<!-- Custom outline -->
<div class="outline outline-2 outline-offset-2 
    outline-pink-500 p-4 rounded-lg">
    Outline effekti
</div>

<!-- Combined effects -->
<input type="text" 
    class="border rounded-lg px-4 py-2
    focus:outline-none focus:ring-2 
    focus:ring-purple-500 focus:border-purple-500"
    placeholder="Ring input">`,
        tips: [
            "Ring'larni accessibility uchun qo'llang",
            "Outline'ni focus holatlar uchun ishlating",
            "Ring offset'ni contrast uchun sozlang",
            "Custom outline stillarini yarating"
        ]
    },
    {
        id: 5,
        title: "Gradient Borders",
        description: "Gradient border effektlari",
        examples: [
            "Gradient borders",
            "Animated borders",
            "Border gradients",
            "Multi-color borders"
        ],
        codeExample: `<!-- Gradient border -->
<div class="p-[2px] bg-gradient-to-r from-pink-500 
    via-purple-500 to-blue-500 rounded-xl">
    <div class="bg-white p-6 rounded-lg">
        Gradient border
    </div>
</div>

<!-- Animated gradient border -->
<div class="relative p-1 rounded-xl bg-gradient-to-r 
    from-purple-500 to-pink-500 
    hover:from-pink-500 hover:to-purple-500
    transition-all duration-500">
    <div class="bg-white p-6 rounded-lg">
        Animated gradient
    </div>
</div>

<!-- Border gradient with shadow -->
<div class="p-[2px] bg-gradient-to-r from-cyan-500 
    to-blue-500 rounded-xl shadow-xl">
    <div class="bg-white p-6 rounded-lg">
        Gradient with shadow
    </div>
</div>`,
        tips: [
            "Gradient border'larni creative qo'llang",
            "Animatsiyalarni gradient'larga qo'shing",
            "Performance'ni hisobga oling",
            "Gradient'larni responsive qiling"
        ]
    }
];

export default dataBordersEffects;
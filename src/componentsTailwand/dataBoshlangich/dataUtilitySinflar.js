export const tailwindUtilityData = {
    // Layout
    container: {
        title: "Container",
        description: "Konteyner va joylashtirish uchun klasslar",
        examples: [
            "container", // Markazlashtirilgan konteyner
            "mx-auto",   // Gorizontal markazlashtirish
            "px-4",      // Padding x o'qi bo'yicha
        ],
        codeExample: `
<div class="container mx-auto px-4">
    <div class="bg-blue-100 p-4">
        Markazlashgan konteyner
    </div>
</div>`
    },

    // Flexbox
    flex: {
        title: "Flexbox",
        description: "Moslashuvchan tartibda joylash uchun klasslar",
        examples: [
            "flex",          // Flex container
            "flex-row",      // Qatorli joylashuv
            "flex-col",      // Ustunli joylashuv
            "justify-center", // Markazga tekislash
            "items-center",   // Element markazlashtirish
            "space-between",  // Elementlar orasidagi masofa
            "gap-4",         // Elementlar orasidagi bo'shliq
        ],
        codeExample: `
<div class="flex justify-center items-center gap-4">
    <div class="bg-blue-200 p-4">Element 1</div>
    <div class="bg-blue-300 p-4">Element 2</div>
    <div class="bg-blue-400 p-4">Element 3</div>
</div>`
    },

    // Spacing
    spacing: {
        title: "Spacing",
        examples: [
            "m-4",    // Margin barcha tomondan
            "mt-4",   // Margin tepadan
            "mb-4",   // Margin pastdan
            "p-4",    // Padding barcha tomondan
            "pt-4",   // Padding tepadan
            "pb-4",   // Padding pastdan
        ]
    },

    // Typography
    typography: {
        title: "Typography",
        description: "Matn va shriftlar uchun klasslar",
        examples: [
            "text-sm",      // Kichik matn
            "text-lg",      // Katta matn
            "font-bold",    // Qalin shrift
            "text-center",  // Markazga tekislash
            "text-blue-500", // Rang
            "leading-tight", // Qatorlar orasidagi masofa
        ],
        codeExample: `
<div class="space-y-2">
    <h1 class="text-2xl font-bold text-blue-500">Katta sarlavha</h1>
    <p class="text-sm leading-tight">Kichik matn namunasi</p>
    <p class="text-lg text-center">Markazlashgan matn</p>
</div>`
    },

    // Colors
    colors: {
        title: "Colors",
        description: "Rang berish uchun klasslar",
        examples: [
            "bg-blue-500",    // Fon rangi
            "text-white",     // Matn rangi
            "border-gray-300", // Chegara rangi
            "hover:bg-blue-600", // Sichqoncha ustiga kelganda
        ],
        codeExample: `
<div class="space-y-2">
    <div class="bg-blue-500 text-white p-4 hover:bg-blue-600">
        Hover effekti
    </div>
    <div class="border-2 border-gray-300 p-4">
        Chegarali element
    </div>
</div>`
    },

    // Borders
    borders: {
        title: "Borders",
        examples: [
            "border",        // Chegara
            "border-2",      // Qalin chegara
            "rounded",       // Yumaloq burchaklar
            "rounded-full",  // To'liq yumaloq
        ]
    },

    // Effects
    effects: {
        title: "Effects",
        description: "Vizual effektlar uchun klasslar",
        examples: [
            "shadow",       // Soya
            "shadow-lg",    // Katta soya
            "opacity-50",   // Shaffoflik
            "blur",         // Xiralik
        ],
        codeExample: `
<div class="space-y-4">
    <div class="bg-white shadow-lg p-4 rounded-lg">
        Soyali element
    </div>
    <div class="bg-blue-500 opacity-50 p-4">
        Shaffof element
    </div>
</div>`
    },

    // Responsive
    responsive: {
        title: "Responsive Design",
        examples: [
            "sm:flex",      // Kichik ekranlarda
            "md:hidden",    // O'rta ekranlarda
            "lg:block",     // Katta ekranlarda
            "xl:text-center", // Juda katta ekranlarda
        ]
    },

    // Transitions
    transitions: {
        title: "Transitions",
        description: "Animatsiya effektlari uchun klasslar",
        examples: [
            "transition",    // O'tish effekti
            "duration-300",  // O'tish vaqti
            "ease-in-out",   // O'tish turi
            "hover:scale-105", // Sichqoncha ustiga kelganda kattalashish
        ],
        codeExample: `
<button class="bg-blue-500 text-white p-4 rounded-lg
    transition duration-300 ease-in-out hover:scale-105
    hover:bg-blue-600">
    Hover qiling
</button>`
    },

    // Grid
    grid: {
        title: "Grid",
        description: "To'r ko'rinishida joylash uchun klasslar",
        examples: [
            "grid",           // Grid container
            "grid-cols-3",    // 3 ustunli grid
            "gap-4",          // Grid elementlari orasidagi masofa
            "col-span-2",     // 2 ustunni egallash
        ],
        codeExample: `
<div class="grid grid-cols-3 gap-4">
    <div class="bg-green-200 p-4">Grid 1</div>
    <div class="bg-green-300 p-4 col-span-2">Grid 2</div>
    <div class="bg-green-400 p-4">Grid 3</div>
</div>`
    }
};
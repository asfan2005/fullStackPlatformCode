const dataDarkMode = [
    {
        id: 1,
        title: "Oddiy Dark Mode",
        codeExample: `<div class="dark:bg-gray-800 dark:text-white">
    <h1 class="text-gray-900 dark:text-white">Sarlavha</h1>
    <p class="text-gray-600 dark:text-gray-300">Matn</p>
</div>`
    },
    {
        id: 2,
        title: "Dark Mode Enablement",
        codeExample: `<!-- Dark Mode Toggle Button -->
<button 
    onclick="toggleDarkMode()"
    class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
>
    Toggle Dark Mode
</button>

<!-- Dark Mode Content -->
<div class="bg-white dark:bg-gray-800 p-4">
    <h2 class="text-gray-900 dark:text-white">Dark Mode Content</h2>
</div>

<script>
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}
</script>

<!-- Tailwind Config -->
module.exports = {
    darkMode: 'class',
    // ...
}`
    },
    {
        id: 3,
        title: "Class Strategy Components",
        codeExample: `<div class="bg-white dark:bg-gray-900">
    <nav class="border-gray-200 dark:border-gray-700">
        <div class="bg-gray-50 dark:bg-gray-800 p-4">
            <button class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                Toggle Dark Mode
            </button>
        </div>
    </nav>
</div>`
    },
    {
        id: 4,
        title: "Media Strategy",
        codeExample: `<!-- Dark Mode Container -->
<div class="bg-white dark:bg-gray-900 p-6 rounded-lg">
    <!-- Header -->
    <h2 class="text-gray-900 dark:text-white text-2xl font-bold mb-4">
        Media Strategy Example
    </h2>
    
    <!-- Content -->
    <div class="text-gray-800 dark:text-gray-200">
        <p class="mb-4">Bu kontent foydalanuvchining tizim sozlamalariga qarab 
        avtomatik ravishda och yoki to'q rejimga o'tadi.</p>
    </div>
    
    <!-- Button -->
    <button class="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg
        hover:bg-blue-600 dark:hover:bg-blue-700">
        Action Button
    </button>
</div>

<!-- Tailwind Config -->
module.exports = {
    darkMode: 'media',
    // ...
}`
    },
    {
        id: 5,
        title: "Custom Dark Mode Styles",
        codeExample: `<div class="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-800 dark:to-gray-900">
    <button class="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-lg
        transform transition-all hover:scale-105 dark:hover:bg-blue-600">
        Maxsus Dark Mode Button
    </button>
    <div class="shadow-lg dark:shadow-gray-700/50 p-6 rounded-xl
        bg-white dark:bg-gray-800 border dark:border-gray-700">
        Maxsus Container
    </div>
</div>`
    },
    {
        id: 6,
        title: "System Preferences",
        codeExample: `<!-- Dark Mode Container -->
<div class="bg-white dark:bg-gray-900 p-6 rounded-lg transition-colors duration-200">
    <!-- Header -->
    <h2 class="text-gray-900 dark:text-white text-2xl font-bold mb-4">
        System Preferences Demo
    </h2>
    
    <!-- Content -->
    <div class="text-gray-800 dark:text-gray-200 space-y-4">
        <p>Tizim sozlamalariga moslashgan dark mode</p>
        
        <!-- Status Indicator -->
        <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Dark Mode Status</span>
        </div>
    </div>
</div>

<script>
// Dark Mode Detection
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleDarkMode(e) {
    if (e.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Listen for changes
darkModeMediaQuery.addListener(handleDarkMode);

// Initial check
handleDarkMode(darkModeMediaQuery);
</script>`
    },
    {
        id: 7,
        title: "Dark Mode Form Elements",
        codeExample: `<form class="space-y-4 dark:bg-gray-800 p-6 rounded-lg">
    <input 
        type="text" 
        class="w-full px-4 py-2 rounded-lg
        bg-white dark:bg-gray-700 
        border border-gray-300 dark:border-gray-600
        text-gray-900 dark:text-gray-100
        focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        placeholder="Matn kiriting"
    />
    <select class="w-full px-4 py-2 rounded-lg
        bg-white dark:bg-gray-700
        border border-gray-300 dark:border-gray-600
        text-gray-900 dark:text-gray-100">
        <option>Tanlov 1</option>
        <option>Tanlov 2</option>
    </select>
</form>`
    },
    {
        id: 8,
        title: "Dark Mode Cards",
        codeExample: `<div class="grid gap-6 md:grid-cols-2">
    <div class="p-6 rounded-lg
        bg-white dark:bg-gray-800 
        shadow-lg dark:shadow-gray-700/50
        border border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">Sarlavha</h3>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Tavsif matni</p>
        <button class="mt-4 px-4 py-2 rounded-lg
            bg-blue-500 dark:bg-blue-600
            text-white hover:bg-blue-600 dark:hover:bg-blue-700
            transition-colors duration-200">
            Tugma
        </button>
    </div>
</div>`
    },
    {
        id: 9,
        title: "Dark Mode Navigation",
        codeExample: `<nav class="bg-white dark:bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <a href="#" class="text-gray-900 dark:text-white font-bold">
                    Logo
                </a>
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="#" class="px-3 py-2 rounded-md text-sm font-medium
                        text-gray-900 dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700">
                        Bosh Sahifa
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>`
    },
    {
        id: 10,
        title: "Dark Mode Toggle Button",
        codeExample: `<button 
    onClick={() => document.documentElement.classList.toggle('dark')}
    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
        text-gray-800 dark:text-white
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-colors duration-200">
    <svg class="w-6 h-6 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
    <svg class="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
</button>`
    }
];

export default dataDarkMode;
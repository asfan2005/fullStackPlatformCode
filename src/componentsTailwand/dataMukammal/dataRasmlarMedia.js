const dataRasmlarMedia = [
    {
        id: 1,
        title: "Rasm o'lchamlari",
        image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
        codeExample: `// Rasm o'lchamlarini sozlash
<img class="w-16 h-16" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" alt="Kichik rasm">
<img class="w-32 h-32" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" alt="O'rta rasm">
<img class="w-64 h-64" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" alt="Katta rasm">

// Maximal va minimal o'lchamlar
<img class="max-w-sm min-h-[200px]" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" alt="Chegaralangan rasm">`
    },
    {
        id: 2,
        title: "Object-fit Xususiyatlari",
        image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
        codeExample: `// Object-fit sozlamalari
<img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1" alt="To'liq qoplangan">
<img class="object-contain w-full h-48" src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1" alt="Konteyner ichida">
<img class="object-fill w-full h-48" src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1" alt="To'ldirilgan">
<img class="object-scale-down w-full h-48" src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1" alt="Kichraytirilgan">
<img class="object-none w-full h-48" src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1" alt="Asl o'lcham">`
    },
    {
        id: 3,
        title: "Aspect Ratio",
        image: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3",
        codeExample: `// Aspect ratio sozlamalari
<div class="aspect-square w-full">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3" alt="Kvadrat">
</div>

<div class="aspect-video w-full">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3" alt="Video format">
</div>

<div class="aspect-[4/3] w-full">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3" alt="4:3 format">
</div>`
    },
    {
        id: 4,
        title: "Responsive Rasmlar",
        image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
        codeExample: `// Responsive dizayn uchun
<img class="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md" 
    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" 
    alt="Responsive rasm">

// Responsive container
<div class="container mx-auto px-4">
    <img class="w-full hover:scale-105 transition-transform" 
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba" 
        alt="Konteyner ichidagi rasm">
</div>`
    },
    {
        id: 5,
        title: "Background Images",
        image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
        codeExample: `// Orqa fon rasmlari
<div class="bg-[url('https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    h-64">
</div>

// Gradient bilan
<div class="bg-[url('https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    h-64
    relative">
    <div class="absolute inset-0 
        bg-gradient-to-r 
        from-black/50 
        to-transparent">
    </div>
</div>`
    },
    {
        id: 6,
        title: "Lazy Loading",
        image: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3",
        codeExample: `// Rasmlarni lazy loading
<img class="w-full h-64 
    object-cover 
    loading="lazy"
    decoding="async" 
    src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3" 
    alt="Lazy loading rasm">

// Placeholder bilan
<div class="w-full h-64 
    bg-gray-200 
    animate-pulse">
    <img class="w-full h-full 
        object-cover 
        loading="lazy" 
        src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3" 
        alt="Placeholder bilan">
</div>`
    }
];

export default dataRasmlarMedia;
const dataResponsiveDizayn = [
    {
        "id": 1,
        "title": "Responsive Breakpoints",
        "desc": "Tailwind CSS breakpoint o'lchamlari",
        "items": [
            {
                "name": "Breakpoint prefixlar",
                "description": "Responsive dizayn uchun breakpoint prefikslar",
                "examples": [
                    "sm:",
                    "md:",
                    "lg:",
                    "xl:",
                    "2xl:"
                ],
                "values": {
                    "sm": "640px va undan katta",
                    "md": "768px va undan katta",
                    "lg": "1024px va undan katta",
                    "xl": "1280px va undan katta",
                    "2xl": "1536px va undan katta"
                },
                "codeExample": `<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Kontent -->
</div>`,
                "tips": [
                    "Mobile-first yondashuv",
                    "Kichik ekranlardan boshlab stillar berish",
                    "Breakpointlarni ketma-ket ishlatish"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Responsive Layout",
        "desc": "Responsive tartibda joylashuvni boshqarish",
        "items": [
            {
                "name": "Responsive Grid",
                "description": "Grid tizimini responsive qilish",
                "examples": [
                    "grid-cols-1",
                    "sm:grid-cols-2",
                    "md:grid-cols-3",
                    "lg:grid-cols-4"
                ],
                "codeExample": `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-red-500 p-4">2</div>
  <div class="bg-green-500 p-4">3</div>
</div>`,
                "gridExamples": [
                    {
                        "name": "Asosiy Grid",
                        "code": "grid grid-cols-12 gap-4"
                    },
                    {
                        "name": "Moslashuvchan Grid",
                        "code": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    },
                    {
                        "name": "Auto-fit Grid",
                        "code": "grid grid-cols-auto-fit min-w-[200px]"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Responsive Visibility",
        "desc": "Elementlarni responsive ko'rinishini boshqarish",
        "items": [
            {
                "name": "Hidden/Visible",
                "description": "Elementlarni ekran o'lchamiga qarab yashirish yoki ko'rsatish",
                "examples": [
                    "hidden",
                    "md:block",
                    "lg:hidden",
                    "sm:inline-block"
                ],
                "codeExample": `<div class="hidden md:block">
  <!-- Faqat md va undan katta ekranlarda ko'rinadi -->
</div>`,
                "commonPatterns": [
                    {
                        "name": "Mobile Menu",
                        "code": "hidden md:flex"
                    },
                    {
                        "name": "Desktop Menu",
                        "code": "flex md:hidden"
                    },
                    {
                        "name": "Conditional Content",
                        "code": "hidden sm:block lg:hidden"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Responsive Spacing",
        "desc": "Margin va padding'larni responsive qilish",
        "items": [
            {
                "name": "Responsive Margin/Padding",
                "description": "Margin va padding'larni ekran o'lchamiga qarab o'zgartirish",
                "examples": [
                    "p-2",
                    "sm:p-4",
                    "md:p-6",
                    "m-2",
                    "sm:m-4",
                    "md:m-6"
                ],
                "spacingValues": {
                    "0": "0px",
                    "1": "0.25rem",
                    "2": "0.5rem",
                    "4": "1rem",
                    "6": "1.5rem",
                    "8": "2rem",
                    "12": "3rem",
                    "16": "4rem"
                },
                "codeExample": `<div class="p-2 sm:p-4 md:p-6">
  <!-- Har xil ekran o'lchamlarida har xil padding -->
</div>`,
                "commonUseCases": [
                    {
                        "name": "Section Padding",
                        "code": "py-8 md:py-12 lg:py-16"
                    },
                    {
                        "name": "Card Margin",
                        "code": "m-2 sm:m-4 lg:m-6"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "title": "Responsive Typography",
        "desc": "Matn o'lchamlarini responsive qilish",
        "items": [
            {
                "name": "Font Size",
                "description": "Shrift o'lchamlarini ekran o'lchamiga qarab o'zgartirish",
                "examples": [
                    "text-sm",
                    "md:text-base",
                    "lg:text-lg",
                    "xl:text-xl"
                ],
                "fontSizes": {
                    "xs": "0.75rem",
                    "sm": "0.875rem",
                    "base": "1rem",
                    "lg": "1.125rem",
                    "xl": "1.25rem",
                    "2xl": "1.5rem",
                    "3xl": "1.875rem",
                    "4xl": "2.25rem"
                },
                "codeExample": `<h1 class="text-xl md:text-2xl lg:text-3xl font-bold">
  Responsive Sarlavha
</h1>`,
                "textStyles": [
                    {
                        "name": "Heading 1",
                        "code": "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                    },
                    {
                        "name": "Paragraph",
                        "code": "text-sm md:text-base lg:text-lg"
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "title": "Responsive Flexbox",
        "desc": "Flex containerlarni responsive qilish",
        "items": [
            {
                "name": "Flex Direction",
                "description": "Flex yo'nalishini ekran o'lchamiga qarab o'zgartirish",
                "examples": [
                    "flex-col",
                    "md:flex-row",
                    "lg:flex-row-reverse"
                ],
                "codeExample": `<div class="flex flex-col md:flex-row items-center justify-between">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-red-500 p-4">2</div>
</div>`,
                "flexPatterns": [
                    {
                        "name": "Navigation",
                        "code": "flex flex-col md:flex-row items-center"
                    },
                    {
                        "name": "Card Layout",
                        "code": "flex flex-col lg:flex-row gap-4"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "title": "Responsive Container",
        "desc": "Container va maksimal kenglikni boshqarish",
        "items": [
            {
                "name": "Container Width",
                "description": "Konteyner kengligini ekran o'lchamiga qarab o'zgartirish",
                "examples": [
                    "container",
                    "max-w-screen-sm",
                    "max-w-screen-md",
                    "max-w-screen-lg",
                    "max-w-screen-xl"
                ],
                "containerSizes": {
                    "sm": "640px",
                    "md": "768px",
                    "lg": "1024px",
                    "xl": "1280px",
                    "2xl": "1536px"
                },
                "codeExample": `<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Responsive container with padding -->
</div>`
            }
        ]
    },
    {
        "id": 8,
        "title": "Responsive Position",
        "desc": "Elementlar pozitsiyasini responsive qilish",
        "items": [
            {
                "name": "Position Properties",
                "description": "Pozitsiya xususiyatlarini ekran o'lchamiga qarab o'zgartirish",
                "examples": [
                    "static",
                    "md:relative",
                    "lg:absolute",
                    "xl:fixed"
                ],
                "codeExample": `<div class="relative md:static lg:absolute top-0 right-0">
  <!-- Responsive position -->
</div>`,
                "positionExamples": [
                    {
                        "name": "Sticky Header",
                        "code": "relative md:sticky top-0"
                    },
                    {
                        "name": "Modal",
                        "code": "fixed top-0 left-0 w-full h-full"
                    }
                ]
            }
        ]
    }
];

export default dataResponsiveDizayn;

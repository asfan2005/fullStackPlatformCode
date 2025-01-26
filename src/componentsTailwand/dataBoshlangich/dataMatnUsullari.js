const dataMatnUsullari = [
    {
        "id": 1,
        "title": "Matn o'lchamlari",
        "desc": "Tailwind CSS da matn o'lchamlarini boshqarish",
        "items": [
            {
                "name": "Kichik matn",
                "code": "text-sm",
                "value": "14px",
                "examples": [
                    "text-xs",
                    "text-sm",
                    "text-base",
                    "text-lg"
                ],
                "description": "12px dan 18px gacha bo'lgan kichik o'lchamlar"
            },
            {
                "name": "O'rta matn",
                "code": "text-xl",
                "value": "20px",
                "examples": [
                    "text-xl",
                    "text-2xl",
                    "text-3xl",
                    "text-4xl"
                ],
                "description": "20px dan 36px gacha bo'lgan o'rta o'lchamlar"
            },
            {
                "name": "Katta matn",
                "code": "text-5xl",
                "value": "48px",
                "examples": [
                    "text-5xl",
                    "text-6xl",
                    "text-7xl",
                    "text-8xl",
                    "text-9xl"
                ],
                "description": "48px dan 128px gacha bo'lgan katta o'lchamlar"
            }
        ]
    },
    {
        "id": 2,
        "title": "Matn uslublari",
        "desc": "Matnning ko'rinishini o'zgartirish usullari",
        "items": [
            {
                "name": "Qalinlik",
                "code": "font-bold",
                "description": "Matn qalinligini boshqarish",
                "examples": [
                    "font-thin",
                    "font-extralight",
                    "font-light",
                    "font-normal",
                    "font-medium",
                    "font-semibold",
                    "font-bold",
                    "font-extrabold",
                    "font-black"
                ],
                "values": {
                    "font-thin": "100",
                    "font-extralight": "200",
                    "font-light": "300",
                    "font-normal": "400",
                    "font-medium": "500",
                    "font-semibold": "600",
                    "font-bold": "700",
                    "font-extrabold": "800",
                    "font-black": "900"
                }
            },
            {
                "name": "Matn joylashuvi",
                "code": "text-center",
                "description": "Matnni joylashtirish",
                "examples": [
                    "text-left",
                    "text-center",
                    "text-right",
                    "text-justify",
                    "text-start",
                    "text-end"
                ]
            },
            {
                "name": "Matn transformatsiyasi",
                "code": "uppercase",
                "description": "Matn ko'rinishini o'zgartirish",
                "examples": [
                    "uppercase",
                    "lowercase",
                    "capitalize",
                    "normal-case"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Matn dekoratsiyasi",
        "desc": "Matnni bezash usullari",
        "items": [
            {
                "name": "Chiziqlar",
                "code": "underline",
                "description": "Matn ostiga chiziq qo'yish",
                "examples": [
                    "underline",
                    "overline",
                    "line-through",
                    "no-underline"
                ]
            },
            {
                "name": "Matn soyasi",
                "code": "text-shadow",
                "description": "Matnga soya berish",
                "examples": [
                    "text-shadow",
                    "text-shadow-sm",
                    "text-shadow-md",
                    "text-shadow-lg",
                    "text-shadow-xl"
                ]
            },
            {
                "name": "Matn bezaklari",
                "code": "decoration",
                "description": "Matn bezaklari",
                "examples": [
                    "decoration-solid",
                    "decoration-double",
                    "decoration-dotted",
                    "decoration-dashed",
                    "decoration-wavy"
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Qator oralig'i",
        "desc": "Matn qatorlari orasidagi masofani boshqarish",
        "items": [
            {
                "name": "Qator balandligi",
                "code": "leading-normal",
                "description": "Qatorlar orasidagi masofani sozlash",
                "examples": [
                    "leading-none",
                    "leading-tight",
                    "leading-snug",
                    "leading-normal",
                    "leading-relaxed",
                    "leading-loose"
                ],
                "values": {
                    "leading-none": "1",
                    "leading-tight": "1.25",
                    "leading-snug": "1.375",
                    "leading-normal": "1.5",
                    "leading-relaxed": "1.625",
                    "leading-loose": "2"
                }
            },
            {
                "name": "Harflar oralig'i",
                "code": "tracking-normal",
                "description": "Harflar orasidagi masofani sozlash",
                "examples": [
                    "tracking-tighter",
                    "tracking-tight",
                    "tracking-normal",
                    "tracking-wide",
                    "tracking-wider",
                    "tracking-widest"
                ]
            }
        ]
    },
    {
        "id": 5,
        "title": "Responsive matn",
        "desc": "Turli qurilmalarga moslashuvchan matn",
        "items": [
            {
                "name": "Mobil uchun",
                "code": "sm:text-lg",
                "description": "Mobil qurilmalarda matn o'lchami",
                "example": "<p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Responsive matn</p>"
            },
            {
                "name": "Planshet uchun",
                "code": "md:text-xl",
                "description": "Planshet qurilmalarda matn o'lchami",
                "example": "<p className='md:text-center lg:text-left xl:text-right'>Responsive joylashuv</p>"
            },
            {
                "name": "Desktop uchun",
                "code": "lg:text-2xl",
                "description": "Desktop qurilmalarda matn o'lchami",
                "example": "<p className='lg:text-2xl xl:text-3xl 2xl:text-4xl'>Desktop matn</p>"
            }
        ]
    },
    {
        "id": 6,
        "title": "Maxsus effektlar",
        "desc": "Matn uchun maxsus effektlar",
        "items": [
            {
                "name": "Hover effekti",
                "code": "hover:text-blue-600",
                "description": "Sichqoncha ustiga kelganda matn rangi",
                "example": "<p className='hover:text-blue-600 transition-colors duration-300'>Hover effekti</p>"
            },
            {
                "name": "Gradient matn",
                "code": "bg-clip-text text-transparent bg-gradient-to-r",
                "description": "Matnga gradient rang berish",
                "example": "<p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>Gradient matn</p>"
            },
            {
                "name": "Animatsiyali matn",
                "code": "transition-all",
                "description": "Matn animatsiyasi",
                "example": "<p className='transition-all duration-300 ease-in-out hover:scale-110'>Animatsiyali matn</p>"
            },
            {
                "name": "Fokus effekti",
                "code": "focus:outline-none focus:ring",
                "description": "Element fokusda bo'lganda effekt",
                "example": "<input className='focus:outline-none focus:ring-2 focus:ring-blue-500' type='text'/>"
            }
        ]
    },
    {
        "id": 7,
        "title": "Matn ranglari",
        "desc": "Matn ranglari va ularning variantlari",
        "items": [
            {
                "name": "Asosiy ranglar",
                "code": "text-blue-500",
                "description": "Matn ranglari",
                "examples": [
                    "text-blue-500",
                    "text-red-500",
                    "text-green-500",
                    "text-yellow-500",
                    "text-purple-500",
                    "text-pink-500"
                ]
            },
            {
                "name": "Rang intensivligi",
                "code": "text-blue-{intensity}",
                "description": "Rang intensivligi",
                "examples": [
                    "text-blue-100",
                    "text-blue-300",
                    "text-blue-500",
                    "text-blue-700",
                    "text-blue-900"
                ]
            }
        ]
    }
];

export default dataMatnUsullari;
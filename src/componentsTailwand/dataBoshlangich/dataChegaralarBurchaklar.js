const dataChegaralarBurchaklar = [
    {
        "id": 1,
        "title": "Chegaralar qalinligi",
        "desc": "Elementlar chegarasining qalinligini boshqarish",
        "items": [
            {
                "name": "Oddiy chegaralar",
                "code": "border",
                "description": "Turli qalinlikdagi chegaralar",
                "examples": [
                    "border-0",
                    "border",
                    "border-2",
                    "border-4",
                    "border-8"
                ],
                "values": {
                    "border-0": "0px",
                    "border": "1px",
                    "border-2": "2px",
                    "border-4": "4px",
                    "border-8": "8px"
                }
            },
            {
                "name": "Yo'naltirilgan chegaralar",
                "code": "border-{side}",
                "description": "Ma'lum tomonga chegara qo'yish",
                "examples": [
                    "border-t-2",
                    "border-r-2",
                    "border-b-2",
                    "border-l-2",
                    "border-x-2",
                    "border-y-2"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Chegara ranglari",
        "desc": "Chegaralar uchun rang variantlari",
        "items": [
            {
                "name": "Asosiy ranglar",
                "code": "border-{color}",
                "description": "Chegara ranglari",
                "examples": [
                    "border-blue-500",
                    "border-red-500",
                    "border-green-500",
                    "border-yellow-500",
                    "border-purple-500",
                    "border-gray-500"
                ]
            },
            {
                "name": "Rang gradatsiyasi",
                "code": "border-{color}-{shade}",
                "description": "Ranglarning turli gradatsiyalari",
                "examples": [
                    "border-blue-100",
                    "border-blue-300",
                    "border-blue-500",
                    "border-blue-700",
                    "border-blue-900"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Chegara uslublari",
        "desc": "Chegaralarning ko'rinish uslublari",
        "items": [
            {
                "name": "Chegara turlari",
                "code": "border-{style}",
                "description": "Turli xil chegara uslublari",
                "examples": [
                    "border-solid",
                    "border-dashed",
                    "border-dotted",
                    "border-double",
                    "border-none"
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Burchaklar (Border Radius)",
        "desc": "Elementlarning burchaklarini yumshatish",
        "items": [
            {
                "name": "Barcha burchaklar",
                "code": "rounded",
                "description": "Barcha burchaklarni yumshatish",
                "examples": [
                    "rounded-none",
                    "rounded-sm",
                    "rounded",
                    "rounded-md",
                    "rounded-lg",
                    "rounded-xl",
                    "rounded-2xl",
                    "rounded-3xl",
                    "rounded-full"
                ],
                "values": {
                    "rounded-none": "0px",
                    "rounded-sm": "0.125rem",
                    "rounded": "0.25rem",
                    "rounded-md": "0.375rem",
                    "rounded-lg": "0.5rem",
                    "rounded-xl": "0.75rem",
                    "rounded-2xl": "1rem",
                    "rounded-3xl": "1.5rem",
                    "rounded-full": "9999px"
                }
            },
            {
                "name": "Alohida burchaklar",
                "code": "rounded-{position}",
                "description": "Ma'lum burchaklarni yumshatish",
                "examples": [
                    "rounded-t-lg",
                    "rounded-r-lg",
                    "rounded-b-lg",
                    "rounded-l-lg",
                    "rounded-tl-lg",
                    "rounded-tr-lg",
                    "rounded-bl-lg",
                    "rounded-br-lg"
                ]
            }
        ]
    },
    {
        "id": 5,
        "title": "Responsive chegaralar",
        "desc": "Turli qurilmalarga moslashuvchan chegaralar",
        "items": [
            {
                "name": "Responsive chegaralar",
                "code": "{breakpoint}:border",
                "description": "Turli o'lchamlarda chegaralarni boshqarish",
                "examples": [
                    "sm:border-2",
                    "md:border-4",
                    "lg:border-8",
                    "xl:border"
                ]
            },
            {
                "name": "Responsive burchaklar",
                "code": "{breakpoint}:rounded",
                "description": "Turli o'lchamlarda burchaklarni boshqarish",
                "examples": [
                    "sm:rounded-lg",
                    "md:rounded-xl",
                    "lg:rounded-2xl",
                    "xl:rounded-full"
                ]
            }
        ]
    },
    {
        "id": 6,
        "title": "Maxsus effektlar",
        "desc": "Chegaralar va burchaklar uchun maxsus effektlar",
        "items": [
            {
                "name": "Hover effektlari",
                "code": "hover:border",
                "description": "Sichqoncha ustiga kelganda chegara effektlari",
                "examples": [
                    "hover:border-2",
                    "hover:border-blue-500",
                    "hover:rounded-lg"
                ]
            },
            {
                "name": "Fokus effektlari",
                "code": "focus:border",
                "description": "Element fokusda bo'lganda chegara effektlari",
                "examples": [
                    "focus:border-2",
                    "focus:border-blue-500",
                    "focus:rounded-lg"
                ]
            },
            {
                "name": "O'tish effektlari",
                "code": "transition",
                "description": "Chegaralar uchun animatsiyalar",
                "examples": [
                    "transition-all",
                    "duration-300",
                    "ease-in-out"
                ]
            }
        ]
    },
    {
        "id": 7,
        "title": "Chegara soyalari",
        "desc": "Chegaralar uchun soya effektlari",
        "items": [
            {
                "name": "Ring effektlari",
                "code": "ring",
                "description": "Element atrofida halqa effekti",
                "examples": [
                    "ring-1",
                    "ring-2",
                    "ring-4",
                    "ring-8",
                    "ring-inset"
                ]
            },
            {
                "name": "Ring ranglari",
                "code": "ring-{color}",
                "description": "Halqa ranglari",
                "examples": [
                    "ring-blue-500",
                    "ring-red-500",
                    "ring-green-500",
                    "ring-opacity-50"
                ]
            }
        ]
    }
];

export default dataChegaralarBurchaklar;

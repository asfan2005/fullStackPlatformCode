const dataBoshliqniTashkil = [
    {
        "id": 1,
        "title": "Padding (Ichki bo'shliq)",
        "desc": "Elementning ichki qismidagi bo'shliqni boshqarish",
        "items": [
            {
                "name": "Barcha tomonlar uchun padding",
                "code": "p-{size}",
                "description": "Elementning barcha tomonlariga padding berish",
                "examples": [
                    "p-0",
                    "p-1",
                    "p-2",
                    "p-4",
                    "p-8",
                    "p-16"
                ],
                "values": {
                    "p-0": "0px",
                    "p-1": "0.25rem (4px)",
                    "p-2": "0.5rem (8px)",
                    "p-4": "1rem (16px)",
                    "p-8": "2rem (32px)",
                    "p-16": "4rem (64px)"
                }
            },
            {
                "name": "Yo'naltirilgan padding",
                "code": "p{t|r|b|l}-{size}",
                "description": "Ma'lum tomonga padding berish",
                "examples": [
                    "pt-2",
                    "pr-4",
                    "pb-6",
                    "pl-8",
                    "px-4",
                    "py-2"
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Margin (Tashqi bo'shliq)",
        "desc": "Elementlar orasidagi bo'shliqni boshqarish",
        "items": [
            {
                "name": "Barcha tomonlar uchun margin",
                "code": "m-{size}",
                "description": "Elementning barcha tomonlariga margin berish",
                "examples": [
                    "m-0",
                    "m-1",
                    "m-2",
                    "m-4",
                    "m-8",
                    "m-auto"
                ],
                "values": {
                    "m-0": "0px",
                    "m-1": "0.25rem (4px)",
                    "m-2": "0.5rem (8px)",
                    "m-4": "1rem (16px)",
                    "m-8": "2rem (32px)",
                    "m-auto": "auto"
                }
            },
            {
                "name": "Yo'naltirilgan margin",
                "code": "m{t|r|b|l}-{size}",
                "description": "Ma'lum tomonga margin berish",
                "examples": [
                    "mt-2",
                    "mr-4",
                    "mb-6",
                    "ml-8",
                    "mx-auto",
                    "my-4"
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Space Between",
        "desc": "Elementlar orasidagi masofani boshqarish",
        "items": [
            {
                "name": "Vertikal masofa",
                "code": "space-y-{size}",
                "description": "Vertikal joylashgan elementlar orasidagi masofa",
                "examples": [
                    "space-y-0",
                    "space-y-2",
                    "space-y-4",
                    "space-y-8",
                    "space-y-reverse"
                ]
            },
            {
                "name": "Gorizontal masofa",
                "code": "space-x-{size}",
                "description": "Gorizontal joylashgan elementlar orasidagi masofa",
                "examples": [
                    "space-x-0",
                    "space-x-2",
                    "space-x-4",
                    "space-x-8",
                    "space-x-reverse"
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Responsive bo'shliqlar",
        "desc": "Turli qurilmalarga moslashuvchan bo'shliqlar",
        "items": [
            {
                "name": "Responsive padding",
                "code": "{breakpoint}:p-{size}",
                "description": "Turli o'lchamlarda padding qo'llash",
                "examples": [
                    "sm:p-2",
                    "md:p-4",
                    "lg:p-6",
                    "xl:p-8"
                ]
            },
            {
                "name": "Responsive margin",
                "code": "{breakpoint}:m-{size}",
                "description": "Turli o'lchamlarda margin qo'llash",
                "examples": [
                    "sm:m-2",
                    "md:m-4",
                    "lg:m-6",
                    "xl:m-8"
                ]
            }
        ]
    },
    {
        "id": 5,
        "title": "Maxsus bo'shliq effektlar",
        "desc": "Bo'shliqlar uchun maxsus holatlar",
        "items": [
            {
                "name": "Manfiy margin",
                "code": "-m-{size}",
                "description": "Elementga manfiy margin berish",
                "examples": [
                    "-m-1",
                    "-m-2",
                    "-m-4",
                    "-mt-4",
                    "-mx-2"
                ]
            },
            {
                "name": "Bo'shliq animatsiyalari",
                "code": "transition-{property}",
                "description": "Bo'shliqlar uchun o'tish effektlari",
                "examples": [
                    "transition-spacing",
                    "duration-300",
                    "ease-in-out"
                ]
            }
        ]
    }
];

export default dataBoshliqniTashkil;
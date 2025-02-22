const wordInsertData = {
    title: "Microsoft Word Insert Interface - Insert Tab",
    description: "Microsoft Word dasturining Insert tabidagi boshqaruv lentasi (Ribbon) elementlari va ularning funksiyalari, hujjatga turli obyektlar va elementlar qo‘shish uchun asboblar",
    lastUpdated: "February 21, 2025",
    version: "Microsoft Word 365",
    sections: [
        {
            id: "pages",
            name: "Pages",
            icon: "pages-icon",
            description: "Hujjat sahifalarini boshqarish va qo‘shimcha sahifa elementlari qo‘shish uchun asboblar",
            tools: [
                {
                    name: "Cover Page",
                    icon: "cover-page-icon",
                    shortcut: "Alt+N, C",
                    description: "Hujjat uchun oldin qo‘yiladigan muqova sahifasi qo‘shish",
                    dropdown: true,
                    features: {
                        templates: [
                            "Built-in Templates (e.g., Sideline, Grid, Austin)",
                            "Custom Cover Page Creation"
                        ],
                        preview: "Tanlangan vaqtida real vaqtda ko‘rish"
                    },
                    additionalInfo: {
                        tips: [
                            "Muqova sahifasi avtomatik hujjat boshiga qo‘shiladi",
                            "Muqova sahifasini o‘chirish uchun Remove Current Cover Page opsiyasidan foydalaning"
                        ],
                        restrictions: [
                            "Faqat bir muqova sahifasi qo‘shish mumkin"
                        ]
                    }
                },
                {
                    name: "Blank Page",
                    icon: "blank-page-icon",
                    shortcut: "Alt+N, B",
                    description: "Hujjatga bo‘sh sahifa qo‘shish",
                    tips: [
                        "Kursorning joylashgan joyiga yangi sahifa qo‘shiladi",
                        "Sahifa uzilishi (Page Break) bilan bir xil ishlaydi, lekin ko‘proq moslashuvchan"
                    ]
                },
                {
                    name: "Page Break",
                    icon: "page-break-icon",
                    shortcut: "Ctrl+Enter",
                    description: "Joriy sahifani tugatib, yangi sahifa boshlash",
                    tips: [
                        "Section Break bilan birgalikda ishlatilsa, sahifa formatini o‘zgartirish mumkin",
                        "Show/Hide ¶ tugmasi bilan sahifa uzilishini ko‘rish mumkin"
                    ]
                }
            ]
        },
        {
            id: "tables",
            name: "Tables",
            icon: "tables-icon",
            description: "Hujjatga jadval qo‘shish va boshqarish uchun asboblar",
            tools: [
                {
                    name: "Table",
                    icon: "table-icon",
                    shortcut: "Alt+N, T",
                    description: "Hujjatga jadval qo‘shish",
                    dropdown: true,
                    features: {
                        grid: "O‘lcham tanlash grid'i (masalan, 2x3, 5x5)",
                        quickTables: "Oldindan tayyor jadval shablonlari (Calendar, Matrix)",
                        insertTable: "Maxsus o‘lchamli jadval kiritish"
                    },
                    additionalInfo: {
                        tips: [
                            "Jadvalni o‘zgartirish uchun Table Tools Design va Layout tablaridan foydalaning",
                            "Jadval ichidagi hujjatni formatlash uchun Table Styles ishlatilsin"
                        ]
                    }
                }
            ]
        },
        {
            id: "illustrations",
            name: "Illustrations",
            icon: "illustrations-icon",
            description: "Hujjatga vizual elementlar (rasmlar, shakllar, grafiklar) qo‘shish uchun asboblar",
            tools: [
                {
                    name: "Pictures",
                    icon: "pictures-icon",
                    shortcut: "Alt+N, P",
                    description: "Hujjatga rasm qo‘shish",
                    dropdown: true,
                    features: {
                        sources: [
                            "This Device - Kompyuterdan rasm tanlash",
                            "Stock Images - Microsoft'ning stock rasmlari",
                            "Online Pictures - Bing'dan rasm qidirish"
                        ],
                        editing: "Qo'shilgan rasmlarni o'zgartirish uchun Picture Tools ishlatilsin"
                    },
                    tips: [
                        "Rasmni o'lchamini o'zgartirish uchun burchak tutqichlaridan foydalaning",
                        "Alt Text qo'shish uchun Picture Format tabini oching"
                    ]
                },
                {
                    name: "Shapes",
                    icon: "shapes-icon",
                    shortcut: "Alt+N, S",
                    description: "Hujjatga geometrik shakllar qo'shish",
                    dropdown: true,
                    features: {
                        categories: [
                            "Lines",
                            "Rectangles",
                            "Basic Shapes",
                            "Block Arrows",
                            "Equation Shapes",
                            "Flowchart"
                        ],
                        formatting: "Shape Fill, Outline, Effects bilan shaklni bezash"
                    }
                },
                {
                    name: "Icons",
                    icon: "icons-icon",
                    shortcut: "Alt+N, I",
                    description: "Hujjatga zamonaviy ikonalar qo'shish",
                    dropdown: true,
                    features: {
                        categories: ["People", "Technology", "Nature", "Business"],
                        editing: "Icons uchun Graphics Tools ishlatilsin"
                    }
                },
                {
                    name: "3D Models",
                    icon: "3d-models-icon",
                    shortcut: "Alt+N, M",
                    description: "Hujjatga 3D modellar qo'shish",
                    dropdown: true,
                    features: {
                        sources: [
                            "This Device",
                            "Stock 3D Models",
                            "Online Sources"
                        ],
                        rotation: "3D modelni aylantirish va ko'rinishni o'zgartirish"
                    }
                },
                {
                    name: "SmartArt",
                    icon: "smartart-icon",
                    shortcut: "Alt+N, A",
                    description: "Hujjatga vizual diagramma yoki organigrammalar qo'shish",
                    dropdown: true,
                    features: {
                        layouts: [
                            "List",
                            "Process",
                            "Cycle",
                            "Hierarchy",
                            "Relationship"
                        ],
                        customization: "SmartArt Design va Format tablari orqali o'zgartirish"
                    }
                },
                {
                    name: "Chart",
                    icon: "chart-icon",
                    shortcut: "Alt+N, C",
                    description: "Hujjatga grafik yoki diagrammalar qo'shish",
                    dropdown: true,
                    features: {
                        types: [
                            "Column",
                            "Line",
                            "Pie",
                            "Bar",
                            "Area",
                            "Scatter"
                        ],
                        data: "Excel'da ma'lumotlarni ulash orqali grafikni avtomatik yangilash"
                    }
                },
                {
                    name: "Screenshot",
                    icon: "screenshot-icon",
                    shortcut: "Alt+N, S (keyin U)",
                    description: "Ekrandan skrinshot olish va hujjatga qo'shish",
                    features: {
                        options: [
                            "Screen Clipping - Faqat tanlangan hududni olish",
                            "Available Windows - Ochiq oynalardan skrinshot olish"
                        ]
                    }
                }
            ]
        },
        {
            id: "media",
            name: "Media",
            icon: "media-icon",
            description: "Hujjatga audio va video fayllar qo'shish uchun asboblar",
            tools: [
                {
                    name: "Online Videos",
                    icon: "online-videos-icon",
                    shortcut: "Alt+N, V",
                    description: "YouTube yoki boshqa onlayn manbalardan video qo'shish",
                    features: {
                        search: "Bing orqali video qidirish",
                        embed: "Video havolasini ulash orqali embedding"
                    },
                    restrictions: [
                        "Faqat veb-qarorlarda ishlaydi, chop etilmaydi"
                    ]
                }
            ]
        },
        {
            id: "links",
            name: "Links",
            icon: "links-icon",
            description: "Hujjat ichida yoki tashqarida havolalar qo'shish uchun asboblar",
            tools: [
                {
                    name: "Link",
                    icon: "link-icon",
                    shortcut: "Ctrl+K",
                    description: "Tanlangan matn yoki obyektga havola qo'shish",
                    features: {
                        types: [
                            "Web URL",
                            "Email Address",
                            "Place in Document",
                            "Create New Document"
                        ],
                        editing: "Havolani o'zgartirish yoki olib tashlash"
                    }
                },
                {
                    name: "Bookmark",
                    icon: "bookmark-icon",
                    shortcut: "Alt+N, K",
                    description: "Hujjat ichida belgi qo'yish va unga havola berish",
                    tips: [
                        "Bookmark'lar hujjat ichidagi tezkor navigatsiya uchun foydali",
                        "Invisible marker sifatida saqlanadi"
                    ]
                },
                {
                    name: "Cross-reference",
                    icon: "cross-reference-icon",
                    shortcut: "Alt+N, R",
                    description: "Hujjat ichidagi boshqa elementlarga havola qo'shish (masalan, sarlavhalar, jadvallar)",
                    features: {
                        targets: ["Headings", "Footnotes", "Captions", "Tables"]
                    }
                }
            ]
        },
        {
            id: "comments",
            name: "Comments",
            icon: "comments-icon",
            description: "Hujjatga izohlar qo'shish va boshqarish uchun asboblar",
            tools: [
                {
                    name: "Comment",
                    icon: "comment-icon",
                    shortcut: "Alt+N, M",
                    description: "Tanlangan matnga izoh qo'shish",
                    features: {
                        reply: "Izohga javob qo'shish",
                        resolve: "Izohni hal qilish va yashirish"
                    }
                }
            ]
        },
        {
            id: "header-footer",
            name: "Header & Footer",
            icon: "header-footer-icon",
            description: "Hujjatning yuqori va pastki qismlarini boshqarish uchun asboblar",
            tools: [
                {
                    name: "Header",
                    icon: "header-icon",
                    shortcut: "Alt+N, H",
                    description: "Hujjatning yuqori qismiga matn yoki obyekt qo'shish",
                    dropdown: true,
                    features: {
                        templates: [
                            "Blank Header",
                            "Built-in Headers (e.g., Blank, Austin, Ion)"
                        ],
                        editing: "Header & Footer Tools orqali formatlash"
                    }
                },
                {
                    name: "Footer",
                    icon: "footer-icon",
                    shortcut: "Alt+N, F",
                    description: "Hujjatning pastki qismiga matn yoki obyekt qo'shish",
                    dropdown: true,
                    features: {
                        templates: [
                            "Blank Footer",
                            "Built-in Footers (e.g., Blank, Austin, Ion)"
                        ],
                        editing: "Header & Footer Tools orqali formatlash"
                    }
                },
                {
                    name: "Page Number",
                    icon: "page-number-icon",
                    shortcut: "Alt+N, N",
                    description: "Hujjat sahifalariga avtomatik raqam qo'shish",
                    dropdown: true,
                    features: {
                        positions: [
                            "Top of Page",
                            "Bottom of Page",
                            "Page Margins",
                            "Current Position"
                        ],
                        formatting: "Raqam formatini o'zgartirish (masalan, 1, 2, 3 yoki I, II, III)"
                    }
                }
            ]
        },
        {
            id: "text",
            name: "Text",
            icon: "text-icon",
            description: "Hujjatga maxsus matn elementlari qo'shish uchun asboblar",
            tools: [
                {
                    name: "Text Box",
                    icon: "text-box-icon",
                    shortcut: "Alt+N, X",
                    description: "Hujjatga matn qutisi qo'shish",
                    dropdown: true,
                    features: {
                        types: [
                            "Simple Text Box",
                            "Built-in Templates"
                        ],
                        formatting: "Text Box Tools orqali o'zgartirish"
                    }
                },
                {
                    name: "Quick Parts",
                    icon: "quick-parts-icon",
                    shortcut: "Alt+N, Q",
                    description: "Hujjatga tez qo'shiladigan matn parchalari yoki maydonlar qo'shish",
                    dropdown: true,
                    features: {
                        options: [
                            "Field",
                            "Document Property",
                            "Building Blocks Organizer"
                        ]
                    }
                },
                {
                    name: "WordArt",
                    icon: "wordart-icon",
                    shortcut: "Alt+N, W",
                    description: "Matnni san'atli ko'rinishda bezash",
                    dropdown: true,
                    features: {
                        styles: [
                            "Fill with Color",
                            "Outline",
                            "3D Effects"
                        ]
                    }
                },
                {
                    name: "Drop Cap",
                    icon: "drop-cap-icon",
                    shortcut: "Alt+N, D",
                    description: "Matnning birinchi harfini katta va bezatilgan qilish",
                    dropdown: true,
                    features: {
                        styles: [
                            "Dropped",
                            "In Margin"
                        ],
                        customization: "O'lcham va rangni o'zgartirish"
                    }
                },
                {
                    name: "Date & Time",
                    icon: "date-time-icon",
                    shortcut: "Alt+N, T (keyin D)",
                    description: "Hujjatga sana va vaqt qo'shish",
                    dropdown: true,
                    features: {
                        formats: [
                            "MM/DD/YYYY",
                            "DD-MM-YYYY",
                            "Custom Format"
                        ],
                        updateAutomatically: "Hujjat ochilganda avtomatik yangilash"
                    }
                }
            ]
        },
        {
            id: "symbols",
            name: "Symbols",
            icon: "symbols-icon",
            description: "Hujjatga maxsus belgi va tenglamalar qo'shish uchun asboblar",
            tools: [
                {
                    name: "Equation",
                    icon: "equation-icon",
                    shortcut: "Alt+N, E",
                    description: "Hujjatga matematik tenglama qo'shish",
                    dropdown: true,
                    features: {
                        templates: [
                            "Built-in Equations (e.g., Fraction, Integral, Sum)",
                            "Ink Equation (Handwriting Recognition)"
                        ],
                        editing: "Equation Tools orqali o'zgartirish"
                    }
                },
                {
                    name: "Symbol",
                    icon: "symbol-icon",
                    shortcut: "Alt+N, U",
                    description: "Hujjatga maxsus belgilar (masalan, ©, ®, €) qo'shish",
                    dropdown: true,
                    features: {
                        categories: [
                            "Common Symbols",
                            "Special Characters",
                            "Emoji"
                        ],
                        font: "Belgilar uchun maxsus shrift tanlash"
                    }
                },
                {
                    name: "Object",
                    icon: "object-icon",
                    shortcut: "Alt+N, O",
                    description: "Hujjatga boshqa fayl yoki obyektni kiritish (masalan, Excel jadvali, Word hujjati)",
                    dropdown: true,
                    features: {
                        types: [
                            "Create New",
                            "From File"
                        ],
                        embedding: "Faylni hujjat ichida ulash yoki havola sifatida qo'shish"
                    }
                }
            ]
        }
    ],
    additionalFeatures: {
        quickAccessToolbar: {
            description: "Ribbon ustidagi tez kirish paneli",
            defaultTools: [
                { name: "Save", shortcut: "Ctrl+S", icon: "save-icon" },
                { name: "Undo", shortcut: "Ctrl+Z", icon: "undo-icon" },
                { name: "Redo", shortcut: "Ctrl+Y", icon: "redo-icon" }
            ],
            customization: {
                addRemove: "Tugmalarni qo'shish yoki olib tashlash",
                position: "Panelni Ribbon ustida yoki ostida joylashtirish"
            }
        },
        contextualTabs: {
            description: "Objekt qo'shilganda paydo bo'ladigan qo'shimcha tablar",
            examples: [
                "Picture Tools",
                "Table Tools",
                "Chart Tools",
                "SmartArt Tools"
            ]
        }
    },
    keyboardShortcuts: {
        insert: [
            "Alt+N, C - Cover Page",
            "Alt+N, T - Table",
            "Alt+N, P - Pictures",
            "Ctrl+K - Link",
            "Alt+N, H - Header"
        ],
        navigation: [
            "Ctrl+Home - Hujjat boshiga o'tish",
            "Ctrl+End - Hujjat oxiriga o'tish"
        ]
    },
    commonIssues: {
        media: [
            {
                problem: "Video o'ynay olmaydi",
                solution: "Internet ulanishini tekshirib, Online Videos uchun to'g'ri havolani ishlatish",
                prevention: "Faqat qo'llab-quvvatlanadigan veb manbalaridan foydalaning"
            }
        ],
        links: [
            {
                problem: "Havola ishlamaydi",
                solution: "Havola manzilini tekshirib, to'g'ri URL kiriting",
                prevention: "Havolani qo'shishdan oldin sinab ko'ring"
            }
        ]
    },
    practice: {
        title: "Microsoft Word Insert Tab - Amaliy Mashqlar",
        description: "Insert tab elementlarini amalda qo'llash bo'yicha topshiriqlar",
        exercises: [
            {
                id: 1,
                title: "Hujjat Muqovasi va Sahifalar",
                difficulty: "Boshlang'ich",
                tasks: [
                    "Yangi hujjat yarating va unga 'Austin' stilidagi muqova sahifasini qo'shing",
                    "Muqova sahifasidan keyin bo'sh sahifa qo'shing",
                    "Hujjatning har bir sahifasiga raqam qo'ying (pastki qismiga)"
                ],
                tips: [
                    "Cover Page opsiyasidan foydalaning",
                    "Blank Page buyrug'ini toping",
                    "Page Number menyusini o'rganing"
                ]
            },
            {
                id: 2,
                title: "Jadval va Rasmlar bilan Ishlash",
                difficulty: "O'rta",
                tasks: [
                    "3x4 o'lchamli jadval yarating va uni ma'lumotlar bilan to'ldiring",
                    "Jadval yoniga kompyuteringizdan rasm qo'shing",
                    "Rasmga sarlavha (caption) qo'shing"
                ],
                tips: [
                    "Table menyusidan foydalaning",
                    "Pictures buyrug'ini toping",
                    "Insert Caption funksiyasini o'rganing"
                ]
            },
            {
                id: 3,
                title: "Diagramma va SmartArt",
                difficulty: "Murakkab",
                tasks: [
                    "Kompaniya tuzilmasini ko'rsatuvchi SmartArt yarating",
                    "Sotuvlar statistikasini aks ettiruvchi ustunli diagramma qo'shing",
                    "Diagramma ma'lumotlarini Excel bilan bog'lang"
                ],
                tips: [
                    "SmartArt > Hierarchy layoutidan foydalaning",
                    "Chart menyusidan Column chartni tanlang",
                    "Excel ma'lumotlarini yangilash imkoniyatini tekshiring"
                ]
            },
            {
                id: 4,
                title: "Havolalar va Izohlar",
                difficulty: "O'rta",
                tasks: [
                    "Matn ichida kamida 3 ta bookmark yarating",
                    "Bookmarklarga cross-reference qo'shing",
                    "Tanlangan matnga izoh (comment) qo'shing va javob yozing"
                ],
                tips: [
                    "Bookmark nomlarini eslab qolish uchun yozib oling",
                    "Cross-reference menyusini o'rganing",
                    "Comments panelidan foydalaning"
                ]
            },
            {
                id: 5,
                title: "Maxsus Elementlar",
                difficulty: "Murakkab",
                tasks: [
                    "WordArt yordamida sarlavha yarating",
                    "Matn qutisi (Text Box) qo'shing va uni formatlang",
                    "Kvadrat tenglamani Equation Editor yordamida kiriting"
                ],
                tips: [
                    "WordArt stillarini sinab ko'ring",
                    "Text Box formatini o'zgartiring",
                    "Equation Tools panelini o'rganing"
                ]
            }
        ],
        finalProject: {
            title: "Kompleks Loyiha: Kompaniya Taqdimot Hujjati",
            description: "Barcha o'rganilgan elementlarni qo'llagan holda professional hujjat yarating",
            requirements: [
                "Professional muqova sahifasi",
                "Mundarija (avtomatik yangilanadigan)",
                "Kamida 2 ta jadval va 3 ta rasm",
                "SmartArt diagramma",
                "Statistik ma'lumotlar uchun Chart",
                "Header va Footer",
                "Sahifa raqamlari",
                "Havolalar va izohlar"
            ],
            evaluationCriteria: [
                "Barcha elementlarning to'g'ri joylashuvi",
                "Formatlashtirish sifati",
                "Hujjat tuzilishining mantiqiyligi",
                "Insert tab elementlaridan to'g'ri foydalanish"
            ]
        }
    }
};

export default wordInsertData;
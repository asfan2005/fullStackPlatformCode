const wordProcessorData = {
    title: "Microsoft Word",
    description: "Microsoft Office 365 tarkibidagi professional matn muharriri. Word 2021 versiyasi Windows 11 va macOS Monterey operatsion tizimlari uchun optimallashtirilgan.",
    lastUpdate: new Date().toLocaleDateString('uz-UZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }),
    author: "To'raqulov Asfandiyor Jaxongirovich",
    sections: [
        {
            id: 1,
            component: "Asosiy Interfeys",
            icon: "interface",
            shortDescription: "Word 2021 dasturining zamonaviy interfeysi va asosiy elementlari.",
            detailedInfo: {
                function: "Hujjatlarni yaratish va tahrirlash uchun optimallashtirilgan interfeys",
                types: [
                    "Simplified Ribbon (soddalashtirilgan lenta)",
                    "Dark/Light mode",
                    "Touch mode interfeysi",
                    "Mini toolbar",
                    "Customizable Quick Access"
                ],
                examples: [
                    "Tell Me yordamchisi - Ctrl+F1",
                    "Live Preview funksiyasi",
                    "File backstage view",
                    "Contextual tabs",
                    "Navigation pane"
                ],
                keyFeatures: [
                    "Real-time hamkorlik (Co-authoring)",
                    "Cloud-based storage integration",
                    "AI-powered proofreading",
                    "Smart Lookup",
                    "Microsoft Search"
                ],
                advantages: [
                    "Microsoft Teams bilan integratsiya",
                    "OneDrive auto-saving",
                    "Cross-platform qo'llab-quvvatlash",
                    "Touch screen optimizatsiya",
                    "Power Automate integratsiyasi"
                ],
                disadvantages: [
                    "16GB RAM tavsiya etiladi",
                    "Internet aloqasi talab qilinadi",
                    "Enterprise versiyasi qimmat"
                ]
            }
        },
        {
            id: 2,
            component: "Matn Formatlash",
            icon: "format",
            shortDescription: "Matnni formatlash va stil berish imkoniyatlari.",
            detailedInfo: {
                function: "Matn ko'rinishi va stilini o'zgartirish",
                types: [
                    "Shrift formatlash",
                    "Paragraf formatlash",
                    "Stil yaratish",
                    "Rang va effektlar",
                    "Matn joylashuvi"
                ],
                examples: [
                    "Font styles",
                    "Paragraph spacing",
                    "Text alignment",
                    "Bullets and numbering",
                    "Text effects"
                ],
                keyFeatures: [
                    "Shrift turlari",
                    "Matn o'lchami",
                    "Rang va stil",
                    "Intervallar",
                    "Chegaralar"
                ],
                advantages: [
                    "Ko'p variantli formatlash",
                    "Tez o'zgartirish",
                    "Stil saqlash",
                    "Professional ko'rinish"
                ],
                requirements: {
                    basics: "Asosiy kompyuter ko'nikmalari",
                    interface: "Word interfeysi tushunish",
                    practice: "Formatlash tajribasi"
                }
            }
        },
        {
            id: 3,
            component: "Jadvallar",
            icon: "table",
            shortDescription: "Jadvallar yaratish va tahrirlash.",
            detailedInfo: {
                function: "Ma'lumotlarni jadval ko'rinishida tashkil qilish",
                types: [
                    "Oddiy jadvallar",
                    "Murakkab jadvallar",
                    "Excel-linked jadvallar",
                    "Custom jadvallar"
                ],
                examples: [
                    "Ma'lumotlar jadvali",
                    "Taqvim jadvali",
                    "Price list",
                    "Schedule table"
                ],
                keyFeatures: [
                    "Jadval qo'shish",
                    "Katakchalarni birlashtirish",
                    "Border styles",
                    "Auto-fit content",
                    "Sort va filter"
                ],
                advantages: [
                    "Ma'lumotlarni tashkil qilish",
                    "Vizual tuzilish",
                    "Oson tahrirlash",
                    "Formatlash imkoniyatlari"
                ]
            }
        },
        {
            id: 4,
            component: "Rasmlar va Grafikalar",
            icon: "images",
            shortDescription: "Vizual elementlarni qo'shish va tahrirlash.",
            detailedInfo: {
                function: "Hujjatga rasmlar va grafikalarni qo'shish",
                types: [
                    "Rasmlar",
                    "Shapes",
                    "SmartArt",
                    "Charts",
                    "Screenshots"
                ],
                examples: [
                    "Logo qo'shish",
                    "Infografika",
                    "Diagrammalar",
                    "Flowcharts"
                ],
                keyFeatures: [
                    "Rasm tahrirlash",
                    "Position options",
                    "Wrap text",
                    "Effects",
                    "Size adjustment"
                ],
                advantages: [
                    "Vizual jozibadorlik",
                    "Professional ko'rinish",
                    "Ma'lumotlarni vizuallashtirish",
                    "Creative design"
                ]
            }
        },
        {
            id: 5,
            component: "Hujjat Strukturasi",
            icon: "structure",
            shortDescription: "Hujjat tuzilishi va navigatsiya.",
            detailedInfo: {
                function: "Hujjatni tashkil qilish va strukturalash",
                types: [
                    "Sections",
                    "Headers/Footers",
                    "Page numbers",
                    "Table of contents",
                    "References"
                ],
                examples: [
                    "Book chapters",
                    "Report sections",
                    "Document navigation",
                    "Index creation"
                ],
                keyFeatures: [
                    "Styles",
                    "Navigation pane",
                    "Section breaks",
                    "Page layout",
                    "Bookmarks"
                ],
                advantages: [
                    "Tashkil qilingan hujjat",
                    "Oson navigatsiya",
                    "Professional format",
                    "Avtomatik yangilanish"
                ]
            }
        }
    ],
    additionalInfo: {
        shortcuts: [
            "Ctrl+Alt+V - Maxsus qo'yish",
            "Alt+Shift+↑/↓ - Paragrafni ko'chirish",
            "Ctrl+Shift+C/V - Formatlashni nusxalash/qo'llash",
            "Ctrl+Shift+> - Shrift o'lchamini oshirish",
            "Ctrl+= - Subscript",
            "Alt+Ctrl+F - Footnote qo'shish",
            "Alt+Shift+D - Joriy sana kiritish",
            "Ctrl+Shift+E - Track Changes",
            "Ctrl+Shift+N - Normal stil",
            "F4 - Oxirgi amalni takrorlash"
        ],
        tips: [
            "Document Inspector ishlatish",
            "Built-in PDF convertation",
            "Read Aloud funksiyasi",
            "Style pane ishlatish",
            "Quick Parts kutubxonasi"
        ],
        commonIssues: [
            "DOCX vs DOC format muammolari - Compatibility Mode ishlatish",
            "Katta hajmli rasmlar - Compress Pictures funksiyasi",
            "Corrupt file tiklash - Open and Repair",
            "Font embedding muammolari",
            "Makroslar xavfsizligi"
        ],
        bestPractices: [
            "Styles va Themes ishlatish",
            "AutoRecover har 5 daqiqada",
            "Built-in proofreading tools",
            "Version history yoqish",
            "Cloud-based backup"
        ]
    },
    summary: "Microsoft Word 2021 - zamonaviy AI texnologiyalari va cloud imkoniyatlari bilan boyitilgan, cross-platform qo'llab-quvvatlovchi professional matn muharriri.",
    version: "2023.1"
};


export default wordProcessorData;
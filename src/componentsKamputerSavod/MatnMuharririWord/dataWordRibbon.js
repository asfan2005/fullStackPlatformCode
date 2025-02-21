import wordRibbonImage from "../../img/word.png";
const wordRibbonData = {
    title: "Microsoft Word Ribbon Interface",
    description: "Microsoft Word dasturining asosiy boshqaruv lentasi (Ribbon) elementlari va ularning funksiyalari",
    sections: [
        {
            id: "clipboard",
            name: "Clipboard",
            icon: "clipboard-icon",
            img: wordRibbonImage,
            tools: [
                {
                    name: "Paste",
                    icon: "paste-icon",
                    shortcut: "Ctrl+V",
                    description: "Nusxalangan kontentni joylashtirish",
                    features: [
                        "Normal paste - Oddiy joylashtirish",
                        "Paste special - Maxsus joylashtirish parametrlari bilan",
                        "Paste as plain text - Oddiy matn sifatida joylashtirish",
                        "Keep source formatting - Manba formatlashni saqlash",
                        "Merge formatting - Formatlashni birlashtirish"
                    ],
                    additionalInfo: {
                        tips: [
                            "Preview before paste - Joylashtirishdan oldin ko'rish imkoniyati",
                            "Right-click for more options - Qo'shimcha variantlar uchun o'ng tugmani bosing"
                        ],
                        restrictions: [
                            "Some formatting may be lost between different applications",
                            "Special formatting might not be preserved in plain text"
                        ]
                    }
                },
                {
                    name: "Cut",
                    icon: "cut-icon",
                    shortcut: "Ctrl+X",
                    description: "Tanlangan kontentni kesib olish"
                },
                {
                    name: "Copy",
                    icon: "copy-icon",
                    shortcut: "Ctrl+C",
                    description: "Tanlangan kontentni nusxalash"
                },
                {
                    name: "Format Painter",
                    icon: "format-painter-icon",
                    shortcut: "Ctrl+Shift+C",
                    description: "Formatlash parametrlarini nusxalash va qo'llash",
                    tips: [
                        "Bir marta bosish - bir marta qo'llash",
                        "Ikki marta bosish - ko'p marta qo'llash"
                    ]
                }
            ]
        },
        {
            id: "font",
            name: "Font",
            icon: "font-icon",
            tools: [
                {
                    name: "Font Selector",
                    description: "Matn shriftini tanlash va sozlash",
                    popularFonts: [
                        "Arial - Universal sans-serif shrift",
                        "Calibri - Microsoft Office standart shrifti",
                        "Times New Roman - Professional hujjatlar uchun",
                        "Verdana - Ekranda o'qish uchun qulay",
                        "Georgia - Professional va rasmiy hujjatlar uchun"
                    ],
                    features: {
                        preview: "Real vaqtda shrift ko'rinishi",
                        recentFonts: "Yaqinda ishlatilgan shriftlar",
                        searchFunction: "Shriftlarni qidirish imkoniyati"
                    },
                    categories: [
                        "Sans-serif shriftlar",
                        "Serif shriftlar",
                        "Dekorativ shriftlar",
                        "Monospace shriftlar"
                    ]
                },
                {
                    name: "Font Size",
                    description: "Shrift o'lchamini o'zgartirish",
                    shortcut: "Ctrl+Shift+> / <",
                    commonSizes: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
                    features: {
                        grow: "Shrift o'lchamini oshirish (Ctrl+>)",
                        shrink: "Shrift o'lchamini kamaytirish (Ctrl+<)",
                        custom: "Maxsus o'lcham kiritish"
                    }
                },
                {
                    name: "Text Effects",
                    description: "Matnga maxsus effektlar qo'llash",
                    effects: [
                        "Bold (Ctrl+B)",
                        "Italic (Ctrl+I)",
                        "Underline (Ctrl+U)",
                        "Strikethrough",
                        "Subscript",
                        "Superscript"
                    ]
                },
                {
                    name: "Text Highlight",
                    description: "Matnni ajratib ko'rsatish",
                    colors: [
                        "Yellow",
                        "Green",
                        "Pink",
                        "Blue"
                    ]
                }
            ]
        },
        {
            id: "paragraph",
            name: "Paragraph",
            icon: "paragraph-icon",
            tools: [
                {
                    name: "Alignment",
                    description: "Matn joylashuvini boshqarish va formatlash",
                    options: [
                        {
                            name: "Left Align",
                            shortcut: "Ctrl+L",
                            description: "Matnni chap tomonga tekislash",
                            usage: "Asosiy matn uchun standart tekislash"
                        },
                        {
                            name: "Center",
                            shortcut: "Ctrl+E",
                            description: "Matnni markazga tekislash",
                            usage: "Sarlavhalar va maxsus elementlar uchun"
                        },
                        {
                            name: "Right Align",
                            shortcut: "Ctrl+R",
                            description: "Matnni o'ng tomonga tekislash",
                            usage: "Raqamlar va sanalar uchun"
                        },
                        {
                            name: "Justify",
                            shortcut: "Ctrl+J",
                            description: "Matnni ikki tomonga tekislash",
                            usage: "Professional hujjatlar va kitoblar uchun"
                        }
                    ],
                    advancedSettings: {
                        indentation: {
                            left: "Chap tomondan chekinish",
                            right: "O'ng tomondan chekinish",
                            firstLine: "Birinchi qator chekinishi",
                            hanging: "Osma chekinish"
                        }
                    }
                },
                {
                    name: "Line Spacing",
                    description: "Qatorlar orasidagi masofani sozlash",
                    options: [
                        "Single",
                        "1.15",
                        "1.5",
                        "Double"
                    ]
                },
                {
                    name: "Bullets and Numbering",
                    description: "Ro'yxat va raqamlash qo'shish",
                    types: [
                        "Bullet lists",
                        "Numbered lists",
                        "Multi-level lists"
                    ]
                }
            ]
        },
        {
            id: "styles",
            name: "Styles",
            icon: "styles-icon",
            presets: [
                {
                    name: "Normal",
                    description: "Standart matn stili",
                    shortcut: "Ctrl+Shift+N"
                },
                {
                    name: "Heading 1",
                    description: "Birinchi darajali sarlavha",
                    shortcut: "Alt+Ctrl+1"
                },
                {
                    name: "Heading 2",
                    description: "Ikkinchi darajali sarlavha",
                    shortcut: "Alt+Ctrl+2"
                },
                {
                    name: "Title",
                    description: "Hujjat sarlavhasi"
                },
                {
                    name: "Subtitle",
                    description: "Hujjat qo'shimcha sarlavhasi"
                }
            ]
        },
        {
            id: "editing",
            name: "Editing",
            icon: "editing-icon",
            tools: [
                {
                    name: "Find",
                    shortcut: "Ctrl+F",
                    description: "Matnni qidirish"
                },
                {
                    name: "Replace",
                    shortcut: "Ctrl+H",
                    description: "Matnni almashtirish"
                },
                {
                    name: "Select",
                    description: "Tanlash opsiyalari",
                    options: [
                        "Select All (Ctrl+A)",
                        "Select Objects",
                        "Select Text with Similar Formatting"
                    ]
                }
            ]
        }
    ],
    additionalFeatures: {
        quickAccessToolbar: {
            description: "Tez kirish asboblar paneli",
            defaultTools: [
                "Save - Hujjatni saqlash (Ctrl+S)",
                "Undo - Ortga qaytarish (Ctrl+Z)",
                "Redo - Qayta bajarish (Ctrl+Y)",
                "Quick Print - Tez chop etish",
                "Spell Check - Xatolarni tekshirish"
            ],
            customization: {
                addRemove: "Tugmalarni qo'shish/olib tashlash",
                position: "Panelni Ribbon ustida yoki ostida joylashtirish",
                import: "Sozlamalarni import qilish",
                export: "Sozlamalarni export qilish"
            }
        },
        contextualTabs: {
            description: "Kontekst asosida paydo bo'ladigan qo'shimcha tablar",
            examples: [
                "Picture Tools",
                "Table Tools",
                "Drawing Tools"
            ]
        }
    },
    keyboardShortcuts: {
        formatting: [
            "Ctrl+B - Bold",
            "Ctrl+I - Italic",
            "Ctrl+U - Underline",
            "Ctrl+Space - Clear formatting"
        ],
        navigation: [
            "Ctrl+Home - Document boshiga o'tish",
            "Ctrl+End - Document oxiriga o'tish",
            "Ctrl+Arrow keys - So'zma-so'z harakatlanish"
        ],
        fileOperations: [
            "Ctrl+N - Yangi hujjat",
            "Ctrl+O - Hujjatni ochish",
            "Ctrl+S - Saqlash",
            "Ctrl+P - Chop etish"
        ]
    },
    realExamples: {
        businessDocuments: {
            title: "Biznes Hujjatlar",
            description: "Professional biznes hujjatlar yaratish namunalari",
            examples: [
                {
                    name: "Rasmiy Xat",
                    template: {
                        structure: [
                            "Sarlavha",
                            "Sana",
                            "Matn",
                            "Imzo"
                        ],
                        formatting: {
                            "Shrift": "Times New Roman",
                            "O'lcham": "12pt",
                            "Interval": "1.5"
                        }
                    },
                    preview: "business-letter-template.png"
                },
                {
                    name: "Hisobot",
                    template: {
                        sections: [
                            "Titul varag'i",
                            "Mundarija",
                            "Kirish",
                            "Asosiy qism",
                            "Xulosa",
                            "Ilovalar"
                        ],
                        formatting: {
                            headings: "Heading styles hierarchy",
                            tableOfContents: "Avtomatik mundarija",
                            pageNumbers: "Bottom center"
                        }
                    }
                }
            ]
        },
        academicPapers: {
            title: "Akademik Hujjatlar",
            description: "Ilmiy maqola va tadqiqot ishlari formatlash",
            examples: [
                {
                    name: "Ilmiy Maqola",
                    structure: [
                        "Annotatsiya",
                        "Kalit so'zlar",
                        "Kirish",
                        "Tadqiqot metodlari",
                        "Natijalar",
                        "Muhokama",
                        "Xulosa",
                        "Adabiyotlar ro'yxati"
                    ],
                    formatting: {
                        font: "Times New Roman, 12pt",
                        lineSpacing: "Double",
                        citations: "APA format"
                    }
                }
            ]
        },
        creativeProjects: {
            title: "Ijodiy Loyihalar",
            description: "Kreativ dizayn va sahifalash namunalari",
            examples: [
                {
                    name: "Broshyura",
                    features: [
                        "Ko'p ustunli matn",
                        "Rasmlar joylashtirish",
                        "Rang sxemalari",
                        "SmartArt grafikalar"
                    ],
                    designTips: [
                        "Kontrast ranglardan foydalanish",
                        "Matn va rasmlar muvozanati",
                        "White space ahamiyati"
                    ]
                }
            ]
        }
    },
    tutorials: {
        basic: [
            {
                title: "Yangi Hujjat Yaratish",
                steps: [
                    "File > New tanlash",
                    "Blank document yoki template tanlash",
                    "Create tugmasini bosish"
                ],
                tips: "Ctrl+N - yangi hujjat yaratish uchun tezkor tugma"
            },
            {
                title: "Matn Formatlash",
                steps: [
                    "Matnni tanlash",
                    "Home tabidagi formatlash asboblarini ishlatish",
                    "Font, o'lcham va rangni o'zgartirish"
                ],
                shortcuts: [
                    "Ctrl+B - qalin shrift",
                    "Ctrl+I - kursiv",
                    "Ctrl+U - tagiga chizish"
                ]
            }
        ],
        advanced: [
            {
                title: "Ko'p Ustunli Matn Yaratish",
                steps: [
                    "Layout > Columns tanlash",
                    "Ustunlar sonini belgilash",
                    "More Columns uchun qo'shimcha sozlamalar"
                ],
                tips: [
                    "Column break qo'shish uchun Ctrl+Shift+Enter",
                    "Ustunlar orasidagi masofani sozlash"
                ]
            },
            {
                title: "Avtomatik Mundarija",
                steps: [
                    "References > Table of Contents",
                    "Sarlavhalar uchun Heading stillarini qo'llash",
                    "Update Table tugmasini bosish"
                ]
            }
        ]
    },
    commonIssues: {
        formatting: [
            {
                problem: "Noto'g'ri sahifa uzilishi",
                solution: "Page Layout > Breaks > Page orqali to'g'rilash",
                prevention: "Sections va page break'larni to'g'ri ishlatish"
            },
            {
                problem: "Formatlash muammolari",
                solution: "Clear Formatting va qayta formatlash",
                prevention: "Styles panelidan foydalanish"
            }
        ],
        compatibility: [
            {
                problem: "Shriftlar ko'rinmasligi",
                solution: "Embedded fonts funksiyasini yoqish",
                prevention: "Standart shriftlardan foydalanish"
            }
        ]
    }
};

export default wordRibbonData;
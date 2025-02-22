import wordRibbonImage from "../../img/word.png";

const wordRibbonData = {
    title: "Microsoft Word Ribbon Interface - Home Tab",
    description: "Microsoft Word dasturining Home tabidagi asosiy boshqaruv lentasi (Ribbon) elementlari va ularning funksiyalari, to'liq va batafsil ma'lumotlar bilan",
    lastUpdated: "February 21, 2025",
    version: "Microsoft Word 365",
    sections: [
        {
            id: "clipboard",
            name: "Clipboard",
            icon: "clipboard-icon",
            img: wordRibbonImage,
            description: "Matn va obyektlarni nusxalash, kesish va joylashtirish uchun asboblar guruhi",
            tools: [
                {
                    name: "Paste",
                    icon: "paste-icon",
                    shortcut: "Ctrl+V",
                    description: "Nusxalangan yoki kesilgan kontentni hujjatga joylashtirish",
                    subMenu: true,
                    features: [
                        {
                            name: "Normal Paste",
                            description: "Standart joylashtirish, manba formatlashni saqlaydi",
                            icon: "paste-normal-icon"
                        },
                        {
                            name: "Paste Special",
                            description: "Maxsus formatlar (masalan, matn, rasm, jadval) bilan joylashtirish",
                            shortcut: "Alt+Ctrl+V",
                            options: [
                                "Unformatted Text",
                                "HTML Format",
                                "Picture",
                                "Word Document Object"
                            ]
                        },
                        {
                            name: "Paste as Plain Text",
                            description: "Faqat matnni formatosiz joylashtirish",
                            icon: "paste-plain-icon"
                        },
                        {
                            name: "Keep Source Formatting",
                            description: "Manbadagi barcha formatlashni saqlab joylashtirish",
                            icon: "keep-source-icon"
                        },
                        {
                            name: "Merge Formatting",
                            description: "Joriy hujjat formatlashiga moslashtirib joylashtirish",
                            icon: "merge-format-icon"
                        }
                    ],
                    additionalInfo: {
                        tips: [
                            "Live Preview: Kursor bilan joyni ko'rsatganda natija oldindan ko'rinadi",
                            "Right-click kontekst menyusidan qo'shimcha opsiyalarni ishlatish",
                            "Clipboard panelidan bir nechta elementni joylashtirish"
                        ],
                        restrictions: [
                            "Ba'zi maxsus formatlar boshqa ilovalardan to'liq ko'chirilmasligi mumkin",
                            "Katta hajmdagi kontent sekin joylashishi mumkin"
                        ],
                        relatedFeatures: {
                            clipboardPane: "Clipboard panelini ochish uchun guruhning pastki o'ng burchagidagi tugmani bosing"
                        }
                    }
                },
                {
                    name: "Cut",
                    icon: "cut-icon",
                    shortcut: "Ctrl+X",
                    description: "Tanlangan matn yoki obyektni kesib olish va clipboard'ga saqlash",
                    tips: [
                        "Kesilgan element clipboard'da saqlanadi va Paste bilan qayta ishlatiladi",
                        "Matn tanlanmagan bo'lsa, bu tugma faol bo'lmaydi"
                    ]
                },
                {
                    name: "Copy",
                    icon: "copy-icon",
                    shortcut: "Ctrl+C",
                    description: "Tanlangan matn yoki obyektni nusxalash",
                    tips: [
                        "Bir nechta nusxa olish uchun Ctrl+C ni qayta-qayta ishlatish mumkin",
                        "Clipboard'da oxirgi nusxalangan element saqlanadi"
                    ]
                },
                {
                    name: "Format Painter",
                    icon: "format-painter-icon",
                    shortcut: "Ctrl+Shift+C (nusxalash), Ctrl+Shift+V (qo'llash)",
                    description: "Tanlangan matn yoki obyektning formatlashini boshqa joyga ko'chirish",
                    features: [
                        {
                            name: "Single Use",
                            description: "Bir marta bosish bilan bir joyga qo'llash",
                            tip: "Bir marta formatni uzatadi va avtomatik o'chadi"
                        },
                        {
                            name: "Multiple Use",
                            description: "Ikki marta bosish bilan bir nechta joyga qo'llash",
                            tip: "ESC tugmasi bilan faolsizlantiriladi"
                        }
                    ],
                    additionalInfo: {
                        tips: [
                            "Format Painter faqat ko'rinadigan formatlarni (masalan, shrift, rang) ko'chiradi",
                            "Jadval yoki rasm formatlashini ham nusxalash mumkin"
                        ]
                    }
                }
            ]
        },
        {
            id: "font",
            name: "Font",
            icon: "font-icon",
            description: "Matnning ko'rinishini o'zgartirish uchun shrift va effektlar guruhi",
            tools: [
                {
                    name: "Font Selector",
                    description: "Matn uchun shrift turini tanlash",
                    dropdown: true,
                    popularFonts: [
                        { name: "Arial", description: "Oddiy va universal sans-serif shrift", category: "Sans-serif" },
                        { name: "Calibri", description: "Microsoft Office'ning standart shrifti", category: "Sans-serif" },
                        { name: "Times New Roman", description: "Rasmiy hujjatlar uchun klassik serif shrift", category: "Serif" },
                        { name: "Verdana", description: "Ekranda o'qish uchun qulay sans-serif shrift", category: "Sans-serif" },
                        { name: "Georgia", description: "Professional va zamonaviy serif shrift", category: "Serif" }
                    ],
                    features: {
                        preview: "Tanlash jarayonida real vaqtda ko'rish",
                        recentFonts: "Oxirgi ishlatilgan shriftlar ro'yxati",
                        searchFunction: "Shrift nomini yozib qidirish",
                        fontCollections: "Shriftlarni guruhlarga ajratish (All Fonts, Recently Used)"
                    },
                    additionalInfo: {
                        tips: [
                            "Shriftni tez o'zgartirish uchun dropdown'dan foydalaning",
                            "Font dialog oynasi uchun guruhning pastki burchagidagi tugmani bosing"
                        ]
                    }
                },
                {
                    name: "Font Size",
                    description: "Matn o'lchamini sozlash",
                    shortcut: "Ctrl+Shift+> (kattalashtirish), Ctrl+Shift+< (kichiklashtirish)",
                    dropdown: true,
                    commonSizes: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
                    features: {
                        growFont: {
                            name: "Grow Font",
                            shortcut: "Ctrl+>",
                            description: "Shriftni bir qadam kattalashtirish"
                        },
                        shrinkFont: {
                            name: "Shrink Font",
                            shortcut: "Ctrl+<",
                            description: "Shriftni bir qadam kichiklashtirish"
                        },
                        customSize: {
                            name: "Custom Size",
                            description: "Dropdown'da mavjud bo'lmagan o'lchamni kiritish",
                            tip: "Masalan, 15.5 yoki 100+ pt"
                        }
                    }
                },
                {
                    name: "Text Effects",
                    description: "Matnni bezash uchun maxsus effektlar va formatlash",
                    tools: [
                        { name: "Bold", shortcut: "Ctrl+B", icon: "bold-icon", description: "Matnni qalin qilish" },
                        { name: "Italic", shortcut: "Ctrl+I", icon: "italic-icon", description: "Matnni kursiv qilish" },
                        { name: "Underline", shortcut: "Ctrl+U", icon: "underline-icon", description: "Matnni tagiga chizish", subMenu: ["Single", "Double", "Dotted"] },
                        { name: "Strikethrough", icon: "strikethrough-icon", description: "Matnni o'chirilgan ko'rinishda qilish" },
                        { name: "Subscript", shortcut: "Ctrl+=", icon: "subscript-icon", description: "Matnni pastki indeks qilish (masalan, H₂O)" },
                        { name: "Superscript", shortcut: "Ctrl+Shift+=", icon: "superscript-icon", description: "Matnni yuqori indeks qilish (masalan, x²)" }
                    ],
                    additionalFeatures: {
                        textFill: "Matnni rang bilan to'ldirish",
                        textOutline: "Matn atrofiga chiziq qo'shish",
                        shadowGlow: "Matnga soya yoki yorug'lik effektlari"
                    }
                },
                {
                    name: "Font Color",
                    description: "Matn rangini o'zgartirish",
                    icon: "font-color-icon",
                    dropdown: true,
                    features: {
                        standardColors: ["Black", "Red", "Blue", "Green", "Yellow"],
                        themeColors: "Hujjat mavzusiga mos ranglar",
                        customColor: "RGB yoki HEX kod bilan maxsus rang tanlash"
                    }
                },
                {
                    name: "Text Highlight",
                    description: "Matnni rangli fon bilan ajratib ko'rsatish",
                    icon: "highlight-icon",
                    dropdown: true,
                    colors: [
                        { name: "Yellow", description: "Standart ajratish rangi" },
                        { name: "Green", description: "Yashil fon" },
                        { name: "Pink", description: "Pushti fon" },
                        { name: "Blue", description: "Ko'k fon" },
                        { name: "No Color", description: "Ajratishni olib tashlash" }
                    ],
                    tips: [
                        "Bir nechta rangni ketma-ket ishlatish mumkin",
                        "Highlight faqat tanlangan matn uchun qo'llaniladi"
                    ]
                },
                {
                    name: "Clear Formatting",
                    icon: "clear-format-icon",
                    shortcut: "Ctrl+Space",
                    description: "Tanlangan matndan barcha formatlashni olib tashlash",
                    tips: [
                        "Faqat matn formatlashini olib tashlaydi, paragraph sozlamalari qoladi",
                        "Normal stiliga qaytaradi"
                    ]
                }
            ]
        },
        {
            id: "paragraph",
            name: "Paragraph",
            icon: "paragraph-icon",
            description: "Matn bloklarini tartibga solish va formatlash uchun asboblar",
            tools: [
                {
                    name: "Alignment",
                    description: "Matnning joylashuvini sozlash",
                    tools: [
                        { name: "Left Align", shortcut: "Ctrl+L", icon: "left-align-icon", description: "Matnni chapga tekislash" },
                        { name: "Center", shortcut: "Ctrl+E", icon: "center-align-icon", description: "Matnni markazga tekislash" },
                        { name: "Right Align", shortcut: "Ctrl+R", icon: "right-align-icon", description: "Matnni o'ngga tekislash" },
                        { name: "Justify", shortcut: "Ctrl+J", icon: "justify-icon", description: "Matnni ikki tomonga tekislash" }
                    ],
                    advancedSettings: {
                        indentation: {
                            left: { description: "Chapdan chekinish", shortcut: "Ctrl+M" },
                            right: { description: "O'ngdan chekinish" },
                            special: [
                                { name: "First Line", description: "Birinchi qator uchun chekinish" },
                                { name: "Hanging", description: "Osma chekinish" }
                            ]
                        },
                        spacing: {
                            before: "Abzas oldidan masofa",
                            after: "Abzas keyin masofa"
                        }
                    }
                },
                {
                    name: "Line and Paragraph Spacing",
                    icon: "line-spacing-icon",
                    dropdown: true,
                    description: "Qatorlar va abzalar orasidagi masofani sozlash",
                    options: [
                        { value: "1.0", description: "Bitta qator masofasi" },
                        { value: "1.15", description: "Standart masofa" },
                        { value: "1.5", description: "Yarim qator masofasi" },
                        { value: "2.0", description: "Ikki qator masofasi" },
                        { value: "2.5", description: "Ikki yarim qator masofasi" },
                        { value: "3.0", description: "Uch qator masofasi" }
                    ],
                    additionalFeatures: {
                        customSpacing: "Paragraph dialog orqali maxsus masofa kiritish",
                        removeSpace: "Qator oldi yoki keyin qo'shimcha bo'shliqni olib tashlash"
                    }
                },
                {
                    name: "Bullets",
                    icon: "bullets-icon",
                    dropdown: true,
                    description: "Matnga belgili ro'yxat qo'shish",
                    types: [
                        { name: "Round Bullet", description: "Doira shaklidagi belgi" },
                        { name: "Square Bullet", description: "Kvadrat shaklidagi belgi" },
                        { name: "Arrow Bullet", description: "Yonbosh belgi" }
                    ],
                    customOptions: "Define New Bullet orqali rasm yoki maxsus belgi tanlash"
                },
                {
                    name: "Numbering",
                    icon: "numbering-icon",
                    dropdown: true,
                    description: "Matnga raqamli ro'yxat qo'shish",
                    types: [
                        { name: "1, 2, 3", description: "Oddiy raqamlar" },
                        { name: "A, B, C", description: "Harflar bilan raqamlash" },
                        { name: "I, II, III", description: "Rim raqamlari" }
                    ],
                    advanced: {
                        multiLevel: "Bir nechta darajali ro'yxatlar (1.1, 1.2)",
                        restartNumbering: "Raqamlashni qaytadan boshlash"
                    }
                },
                {
                    name: "Increase Indent",
                    icon: "increase-indent-icon",
                    shortcut: "Ctrl+M",
                    description: "Abzasni chapdan ko'proq chekintirish"
                },
                {
                    name: "Decrease Indent",
                    icon: "decrease-indent-icon",
                    shortcut: "Ctrl+Shift+M",
                    description: "Abzas chekinishini kamaytirish"
                },
                {
                    name: "Show/Hide ¶",
                    icon: "show-hide-icon",
                    shortcut: "Ctrl+Shift+8",
                    description: "Formatlash belgilari (masalan, bo'shliq, enter) ni ko'rsatish/yashirish",
                    tips: [
                        "Yashirin formatlash muammolarini aniqlash uchun foydali",
                        "Chop etishda bu belgilar ko'rinmaydi"
                    ]
                }
            ]
        },
        {
            id: "styles",
            name: "Styles",
            icon: "styles-icon",
            description: "Matn va hujjat uchun oldindan belgilangan stillarni qo'llash",
            dropdown: true,
            presets: [
                {
                    name: "Normal",
                    shortcut: "Ctrl+Shift+N",
                    description: "Oddiy matn uchun standart stil",
                    defaultSettings: { font: "Calibri", size: "11pt", spacing: "1.15" }
                },
                {
                    name: "Heading 1",
                    shortcut: "Alt+Ctrl+1",
                    description: "Asosiy sarlavha uchun katta shrift",
                    defaultSettings: { font: "Calibri Light", size: "16pt", color: "Blue" }
                },
                {
                    name: "Heading 2",
                    shortcut: "Alt+Ctrl+2",
                    description: "Ikkinchi darajali sarlavha",
                    defaultSettings: { font: "Calibri Light", size: "13pt", color: "Gray" }
                },
                {
                    name: "Title",
                    description: "Hujjatning asosiy sarlavhasi",
                    defaultSettings: { font: "Calibri Light", size: "26pt", alignment: "Center" }
                },
                {
                    name: "Subtitle",
                    description: "Sarlavha ostidagi qo'shimcha matn",
                    defaultSettings: { font: "Calibri", size: "13pt", color: "Gray" }
                },
                {
                    name: "Quote",
                    description: "Iqtiboslar uchun maxsus stil",
                    defaultSettings: { font: "Calibri", size: "11pt", italic: true, indent: "0.5in" }
                },
                {
                    name: "Emphasis",
                    description: "Matnni ta'kidlash uchun stil",
                    defaultSettings: { font: "Calibri", size: "11pt", italic: true }
                }
            ],
            additionalFeatures: {
                stylePane: "Styles panelini ochish uchun guruhning pastki burchagidagi tugmani bosing",
                modifyStyle: "Mavjud stilni o'zgartirish",
                newStyle: "Yangi maxsus stil yaratish"
            }
        },
        {
            id: "editing",
            name: "Editing",
            icon: "editing-icon",
            description: "Matnni tahrirlash va qidirish uchun asboblar",
            tools: [
                {
                    name: "Find",
                    shortcut: "Ctrl+F",
                    icon: "find-icon",
                    description: "Hujjat ichida matn qidirish",
                    features: {
                        basicSearch: "Oddiy so'z yoki ibora qidirish",
                        navigationPane: "Qidiruv natijalarini ko'rish uchun panel ochish"
                    }
                },
                {
                    name: "Replace",
                    shortcut: "Ctrl+H",
                    icon: "replace-icon",
                    description: "Matnni topib, almashtirish",
                    features: {
                        findReplace: "Bir so'zni boshqasiga almashtirish",
                        options: ["Match Case", "Whole Words", "More Options"]
                    }
                },
                {
                    name: "Select",
                    icon: "select-icon",
                    dropdown: true,
                    description: "Tanlash vositalari",
                    options: [
                        { name: "Select All", shortcut: "Ctrl+A", description: "Hamma narsani tanlash" },
                        { name: "Select Objects", description: "Rasmlar va shakllarni tanlash" },
                        { name: "Select Text with Similar Formatting", description: "Bir xil formatdagi matnni tanlash" }
                    ]
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
        miniToolbar: {
            description: "Matn tanlanganda avtomatik paydo bo'ladigan mini asboblar paneli",
            tools: ["Font", "Size", "Bold", "Italic", "Underline", "Highlight"]
        }
    },
    keyboardShortcuts: {
        clipboard: [
            "Ctrl+C - Nusxalash",
            "Ctrl+X - Kesish",
            "Ctrl+V - Joylashtirish"
        ],
        formatting: [
            "Ctrl+B - Qalin",
            "Ctrl+I - Kursiv",
            "Ctrl+U - Tagiga chizish",
            "Ctrl+Shift+C - Format Painter nusxalash",
            "Ctrl+Shift+V - Format Painter qo'llash"
        ],
        paragraph: [
            "Ctrl+L - Chapga tekislash",
            "Ctrl+E - Markazga tekislash",
            "Ctrl+R - O'ngga tekislash",
            "Ctrl+J - Ikkiga tekislash"
        ]
    },
    practicalExamples: {
        title: "Word Home Tab Amaliy Topshiriqlar",
        description: "Microsoft Word Home menyusidagi asosiy amallarni bajarish bo'yicha topshiriqlar",
        tasks: [
            {
                id: 1,
                title: "Matn formatlash",
                description: "Berilgan matnni turli ko'rinishlarda formatlash",
                steps: [
                    "Matnni tanlang va uni qalin (bold) qiling",
                    "Tanlangan matnni kursiv qiling",
                    "Matnning tagiga chizing",
                    "Matn rangini ko'kga o'zgartiring",
                    "Matn orqa fonini sariq rangga bo'yang"
                ],
                tips: [
                    "Ctrl+B tugmasini bosib tez qalin qilish mumkin",
                    "Rangni o'zgartirish uchun Font Color tugmasidan foydalaning",
                    "Bir vaqtning o'zida bir nechta formatlashni qo'llash mumkin"
                ]
            },
            {
                id: 2,
                title: "Paragraf bilan ishlash",
                description: "Paragrafni turli usullarda formatlash",
                steps: [
                    "Paragrafni markazga tekislang",
                    "Qatorlar orasidagi masofani 1.5 qiling",
                    "Paragraf chekinishini 20px ga oshiring",
                    "Matnni ikkala tomonga tekislang (justify)"
                ],
                tips: [
                    "Ctrl+E tugmasi bilan markazga tekislash mumkin",
                    "Line spacing tugmasidan kerakli oraliqni tanlang",
                    "Chekinish uchun Tab tugmasini yoki Indent tugmalarini ishlating"
                ]
            },
            {
                id: 3,
                title: "Ro'yxatlar bilan ishlash",
                description: "Matnni ro'yxat ko'rinishida formatlash",
                steps: [
                    "Belgili ro'yxat (bullet list) yarating",
                    "Raqamli ro'yxat (numbered list) yarating",
                    "Ko'p darajali ro'yxat (multilevel list) yarating"
                ],
                tips: [
                    "Ro'yxat tugmalarini Home menyusidan topasiz",
                    "Tab tugmasi bilan darajani o'zgartirish mumkin",
                    "Shift+Tab bilan darajani kamaytirish mumkin"
                ]
            },
            {
                id: 4,
                title: "Nusxa ko'chirish va joylashtirish",
                description: "Clipboard operatsiyalarini bajarish",
                steps: [
                    "Tanlangan matndan nusxa oling",
                    "Matnni boshqa joyga joylang",
                    "Format Painter yordamida formatlashni ko'chiring"
                ],
                tips: [
                    "Ctrl+C va Ctrl+V tugmalarini ishlating",
                    "Format Painter ni ikki marta bosib bir nechta joyga qo'llash mumkin",
                    "Nusxa olishdan oldin to'g'ri matn tanlanganiga ishonch hosil qiling"
                ]
            },
            {
                id: 5,
                title: "Shrift bilan ishlash",
                description: "Shrift parametrlarini o'zgartirish",
                steps: [
                    "Shrift turini Arial ga o'zgartiring",
                    "Shrift o'lchamini 16px ga o'zgartiring",
                    "Shrift rangini qizilga o'zgartiring"
                ],
                tips: [
                    "Shriftni tez o'zgartirish uchun Font selector dan foydalaning",
                    "Ctrl+Shift+> va Ctrl+Shift+< bilan shrift o'lchamini o'zgartirish mumkin",
                    "Tez-tez ishlatiladigan shriftlar ro'yxatning yuqorisida turadi"
                ]
            }
        ]
    }
};

export default wordRibbonData;
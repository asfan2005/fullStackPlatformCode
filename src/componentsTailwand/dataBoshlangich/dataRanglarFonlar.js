const dataRanglarFonlar = [
    {
        id: 1,
        title: "Asosiy ranglar",
        desc: "Tailwind CSS da eng ko'p ishlatiladigan asosiy ranglar",
        items: [
            {
                name: "Slate",
                code: "slate-500",
                value: "#64748b",
                examples: [
                    "bg-slate-500",
                    "text-slate-500",
                    "border-slate-500"
                ]
            },
            {
                name: "Gray",
                code: "gray-500",
                value: "#6b7280",
                examples: [
                    "bg-gray-500",
                    "text-gray-500",
                    "border-gray-500"
                ]
            },
            {
                name: "Red",
                code: "red-500",
                value: "#ef4444",
                examples: [
                    "bg-red-500",
                    "text-red-500",
                    "border-red-500"
                ]
            },
            {
                name: "Orange",
                code: "orange-500",
                value: "#f97316",
                examples: [
                    "bg-orange-500",
                    "text-orange-500",
                    "border-orange-500"
                ]
            },
            {
                name: "Yellow",
                code: "yellow-500",
                value: "#eab308",
                examples: [
                    "bg-yellow-500",
                    "text-yellow-500",
                    "border-yellow-500"
                ]
            },
            {
                name: "Green",
                code: "green-500",
                value: "#22c55e",
                examples: [
                    "bg-green-500",
                    "text-green-500",
                    "border-green-500"
                ]
            },
            {
                name: "Blue",
                code: "blue-500",
                value: "#3b82f6",
                examples: [
                    "bg-blue-500",
                    "text-blue-500",
                    "border-blue-500"
                ]
            },
            {
                name: "Purple",
                code: "purple-500",
                value: "#a855f7",
                examples: [
                    "bg-purple-500",
                    "text-purple-500",
                    "border-purple-500"
                ]
            },
            {
                name: "Pink",
                code: "pink-500",
                value: "#ec4899",
                examples: [
                    "bg-pink-500",
                    "text-pink-500",
                    "border-pink-500"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Fon ranglar",
        desc: "Background ranglarini qo'llash usullari",
        items: [
            {
                name: "Oddiy fon",
                code: "bg-blue-500",
                description: "Elementga asosiy fon rangini berish",
                example: '<div className="bg-blue-500 p-4">Oddiy fon</div>'
            },
            {
                name: "Gradient fon",
                code: "bg-gradient-to-r from-cyan-500 to-blue-500",
                description: "O'ngdan chapga gradient rang berish",
                example: '<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">Gradient fon</div>'
            },
            {
                name: "Shaffof fon",
                code: "bg-blue-500 bg-opacity-50",
                description: "Fon rangini shaffofligini sozlash",
                example: '<div className="bg-blue-500 bg-opacity-50 p-4">Shaffof fon</div>'
            },
            {
                name: "Diagonal gradient",
                code: "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500",
                description: "Diagonal yo'nalishda gradient",
                example: '<div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-4">Diagonal gradient</div>'
            },
            {
                name: "Pattern fon",
                code: "bg-blue-500 bg-opacity-25 backdrop-filter backdrop-blur-lg",
                description: "Shaffof va blur effektli fon",
                example: '<div className="bg-blue-500 bg-opacity-25 backdrop-filter backdrop-blur-lg p-4">Pattern fon</div>'
            }
        ]
    },
    {
        id: 3,
        title: "Rang intensivligi",
        desc: "Har bir rangning turli xil intensivlik darajalari",
        items: [
            {
                name: "Och ranglar",
                examples: [
                    "bg-blue-50",
                    "bg-blue-100",
                    "bg-blue-200",
                    "bg-blue-300"
                ]
            },
            {
                name: "O'rta ranglar",
                examples: [
                    "bg-blue-400",
                    "bg-blue-500",
                    "bg-blue-600"
                ]
            },
            {
                name: "To'q ranglar",
                examples: [
                    "bg-blue-700",
                    "bg-blue-800",
                    "bg-blue-900",
                    "bg-blue-950"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Maxsus effektlar",
        desc: "Ranglar bilan ishlashda maxsus effektlar",
        items: [
            {
                name: "Hover effekti",
                code: "hover:bg-blue-700",
                description: "Sichqoncha ustiga kelganda rang o'zgarishi",
                example: '<button className="bg-blue-500 hover:bg-blue-700 p-2">Hover effekti</button>'
            },
            {
                name: "Focus effekti",
                code: "focus:bg-blue-700",
                description: "Element fokusda bo'lganda rang o'zgarishi",
                example: '<input className="border focus:bg-blue-700 p-2" type="text" placeholder="Focus effekti"/>'
            },
            {
                name: "Active effekti",
                code: "active:bg-blue-800",
                description: "Element bosilganda rang o'zgarishi",
                example: '<button className="bg-blue-500 active:bg-blue-800 p-2">Active effekti</button>'
            },
            {
                name: "Group hover",
                code: "group-hover:bg-blue-700",
                description: "Guruh elementiga hover bo'lganda rang o'zgarishi",
                example: '<div className="group"><div className="group-hover:bg-blue-700 p-2">Group hover</div></div>'
            },
            {
                name: "Transition effekti",
                code: "transition-colors duration-300",
                description: "Rang o'zgarishida animatsiya",
                example: '<button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 p-2">Transition</button>'
            }
        ]
    },
    {
        id: 5,
        title: "Rang kombinatsiyalari",
        desc: "Ko'p ishlatiladigan rang kombinatsiyalari",
        items: [
            {
                name: "Asosiy tugma",
                code: "bg-blue-500 hover:bg-blue-600 text-white",
                description: "Asosiy tugma uslubi",
                example: '<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Tugma</button>'
            },
            {
                name: "Xabar kartasi",
                code: "bg-green-100 text-green-800 border-green-200",
                description: "Muvaffaqiyat xabari uslubi",
                example: '<div className="bg-green-100 text-green-800 border-green-200 p-4 rounded">Muvaffaqiyat xabari</div>'
            },
            {
                name: "Ogohlantirish",
                code: "bg-yellow-100 text-yellow-800 border-yellow-200",
                description: "Ogohlantirish xabari uslubi",
                example: '<div className="bg-yellow-100 text-yellow-800 border-yellow-200 p-4 rounded">Ogohlantirish</div>'
            }
        ]
    }
];

export default dataRanglarFonlar;
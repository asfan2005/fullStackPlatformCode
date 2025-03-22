export const internetVideoData = {
    title: "Internet va Tarmoq Texnologiyalari",
    description: "Internet, tarmoq texnologiyalari va xavfsizlik bo'yicha to'liq video darsliklar to'plami. Boshlang'ich darajadan professional darajagacha.",
    lastUpdate: "2024-03-25",
    author: "To'raqulov Asfandiyor Jaxongirovich",
    mainImage: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
    mainVideoTutorial: "https://www.youtube.com/embed/wLKKeAzVy58",

    statistics: {
        totalVideos: 40,
        totalHours: 30.5,
        studentsCount: 9200,
        averageRating: 4.8,
        certificatesIssued: 3100,
        coursesCompleted: 7150,
        topCountries: ["O'zbekiston", "Qozog'iston", "Turkiya", "Rossiya", "Qirg'iziston"]
    },

    categories: [
        {
            id: 1,
            title: "Internet asoslari",
            description: "Internet tushunchasi va asosiy komponentlari",
            icon: "basics",
            color: "#4285F4",
            skillLevel: "Boshlang'ich",
            estimatedTime: "10 soat"
        },
        {
            id: 2,
            title: "Internet xavfsizligi",
            description: "Internet xavfsizligi va himoya usullari",
            icon: "security",
            color: "#34A853",
            skillLevel: "O'rta",
            estimatedTime: "12 soat"
        },
        {
            id: 3,
            title: "Internet servislari",
            description: "Zamonaviy internet xizmatlari va ulardan foydalanish",
            icon: "services",
            color: "#FBBC05",
            skillLevel: "O'rta",
            estimatedTime: "8 soat"
        },
        {
            id: 4,
            title: "Internet marketing",
            description: "Internet marketing asoslari va strategiyalari",
            icon: "marketing",
            color: "#EA4335",
            skillLevel: "Professional",
            estimatedTime: "15 soat"
        }
    ],

    videos: [
        // INTERNET ASOSLARI
        {
            id: 1,
            categoryId: 1,
            title: "Internet nima?",
            description: "Internet tushunchasi, tarixi va asosiy komponentlari haqida",
            videoUrl: "https://www.youtube.com/embed/example1",
            thumbnailUrl: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
            duration: "18:30",
            level: "Boshlang'ich",
            views: 28500,
            likes: 2420,
            publishDate: "2024-01-10",
            tags: ["internet", "asoslar", "tarmoq"]
        },
        {
            id: 2,
            categoryId: 1,
            title: "Brauzerlar bilan ishlash",
            description: "Zamonaviy brauzerlar va ularning funksiyalari",
            videoUrl: "https://www.youtube.com/embed/example2",
            thumbnailUrl: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
            duration: "22:15",
            level: "Boshlang'ich",
            views: 25600,
            likes: 2180,
            publishDate: "2024-01-15",
            tags: ["brauzer", "chrome", "firefox"]
        },

        // INTERNET XAVFSIZLIGI
        {
            id: 3,
            categoryId: 2,
            title: "Xavfsiz internet",
            description: "Internet xavfsizligi asoslari va muhim qoidalar",
            videoUrl: "https://www.youtube.com/embed/example3",
            thumbnailUrl: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
            duration: "25:40",
            level: "O'rta",
            views: 31200,
            likes: 2680,
            publishDate: "2024-01-20",
            tags: ["xavfsizlik", "himoya", "virus"]
        },
        {
            id: 4,
            categoryId: 2,
            title: "Parollar xavfsizligi",
            description: "Kuchli parollar yaratish va ularni himoya qilish",
            videoUrl: "https://www.youtube.com/embed/example4",
            thumbnailUrl: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
            duration: "20:15",
            level: "O'rta",
            views: 27800,
            likes: 2340,
            publishDate: "2024-01-25",
            tags: ["parol", "himoya", "xavfsizlik"]
        },

        // INTERNET SERVISLARI
        {
            id: 5,
            categoryId: 3,
            title: "Bulutli xizmatlar",
            description: "Bulutli saqlash tizimlari va ulardan foydalanish",
            videoUrl: "https://www.youtube.com/embed/example5",
            thumbnailUrl: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
            duration: "28:20",
            level: "O'rta",
            views: 24500,
            likes: 2120,
            publishDate: "2024-02-01",
            tags: ["bulut", "saqlash", "google drive"]
        },
        {
            id: 6,
            categoryId: 3,
            title: "Onlayn to'lov tizimlari",
            description: "Xavfsiz onlayn to'lovlarni amalga oshirish",
            videoUrl: "https://www.youtube.com/embed/example6",
            thumbnailUrl: "https://rumonsenglishcare.com/wp-content/uploads/2025/01/Internet-2.png",
            duration: "23:45",
            level: "O'rta",
            views: 29900,
            likes: 2580,
            publishDate: "2024-02-05",
            tags: ["to'lov", "bank", "xavfsizlik"]
        }
    ],

    benefits: [
        "Amaliy mashg'ulotlar orqali o'rganish",
        "Zamonaviy texnologiyalar bilan tanishish",
        "Xavfsizlik ko'nikmalari",
        "Professional tajriba ulashish",
        "Real loyihalar ustida ishlash",
        "Doimiy yangilanib turuvchi ma'lumotlar"
    ],

    learningPath: [
        {
            stage: 1,
            name: "Internet asoslari",
            duration: "3 hafta",
            skills: [
                "Internet tushunchasi",
                "Brauzerlar bilan ishlash",
                "Qidiruv tizimlari",
                "Elektron pochta"
            ]
        },
        {
            stage: 2,
            name: "Xavfsizlik asoslari",
            duration: "4 hafta",
            skills: [
                "Xavfsizlik asoslari",
                "Parollar bilan ishlash",
                "Antiviruslar",
                "Xavfsiz browsing"
            ]
        },
        {
            stage: 3,
            name: "Internet servislar",
            duration: "3 hafta",
            skills: [
                "Bulutli xizmatlar",
                "Onlayn to'lovlar",
                "Ijtimoiy tarmoqlar",
                "Messenjerlar"
            ]
        }
    ],

    tipsTricks: [
        {
            id: 1,
            title: "Xavfsiz internetdan foydalanish",
            tips: [
                "Ishonchli parollardan foydalaning",
                "Antivirus dasturini yangilab turing",
                "Noma'lum havolalarga kirmang",
                "Shaxsiy ma'lumotlarni himoya qiling"
            ]
        },
        {
            id: 2,
            title: "Samarali internet",
            tips: [
                "Brauzer xatcho'plaridan foydalaning",
                "Tez tugmalar kombinatsiyalarini o'rganing",
                "Brauzer keshini muntazam tozalang",
                "Foydali kengaytmalarni o'rnating"
            ]
        }
    ],

    commonIssues: [
        {
            id: 1,
            problem: "Internet sekin ishlayapti",
            solution: "Tezlikni tekshiring, keshni tozalang, viruslar yo'qligini tekshiring"
        },
        {
            id: 2,
            problem: "Xavfsizlik ogohlantirishi",
            solution: "SSL sertifikatini tekshiring, antivirus dasturini yangilang"
        }
    ],

    glossary: [
        {
            term: "URL",
            definition: "Unified Resource Locator - veb-sahifa manzili"
        },
        {
            term: "SSL",
            definition: "Secure Sockets Layer - xavfsiz aloqa protokoli"
        },
        {
            term: "HTTP",
            definition: "HyperText Transfer Protocol - gipermatn uzatish protokoli"
        }
    ],

    shortcuts: [
        {
            key: "Ctrl + T",
            action: "Yangi brauzer oynasi ochish"
        },
        {
            key: "Ctrl + H",
            action: "Brauzer tarixini ko'rish"
        },
        {
            key: "Ctrl + D",
            action: "Joriy sahifani xatcho'plarga qo'shish"
        }
    ],

    certification: {
        levels: [
            {
                name: "Internet Xavfsizligi Sertifikati",
                requirements: [
                    "Xavfsizlik asoslarini bilish",
                    "Amaliy ko'nikmalar",
                    "Xavf-xatarlarni aniqlash"
                ]
            },
            {
                name: "Professional Internet Foydalanuvchi",
                requirements: [
                    "Barcha internet servislarini bilish",
                    "Xavfsizlik choralarini qo'llash",
                    "Muammolarni hal qilish"
                ]
            }
        ],
        examDetails: {
            duration: "1.5 soat",
            questionsCount: 60,
            passingScore: 75
        }
    }
};


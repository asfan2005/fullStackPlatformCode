const jadvalVideoesData = {
  title: "Microsoft Excel - Elektron jadvallar ustasi",
  description: "Microsoft Excel dasturi bo'yicha mukammal ma'lumotlar va videodarslar to'plami. Boshlang'ich darajadan professional darajagacha bo'lgan to'liq o'quv resursi.",
  lastUpdate: "2024-03-15",
  author: "To'raqulov Asfandiyor Jaxongirovich",
  mainImage: "https://i3.ytimg.com/vi/_Gh0UQ71I-s/maxresdefault.jpg",
  mainVideoTutorial: "https://www.youtube.com/embed/wLKKeAzVy58",
  
  // Ma'lumotlar haqida statistika
  statistics: {
      totalVideos: 45,
      totalHours: 28.5,
      studentsCount: 12450,
      averageRating: 4.8,
      certificatesIssued: 3782,
      coursesCompleted: 8935,
      topCountries: ["O'zbekiston", "Qozog'iston", "Turkiya", "Rossiya", "Qirg'iziston"]
  },
  
  // Kurs afzalliklari
  benefits: [
      "Amaliy loyihalar orqali o'rganish imkoniyati",
      "Har bir video so'ngida mashqlar to'plami",
      "Shaxsiy loyihalar uchun tayyor shablonlar",
      "Professional ekspertlar tomonidan texnik qo'llab-quvvatlash",
      "Interaktiv testlar orqali bilimlarni mustahkamlash",
      "Zamonaviy va dolzarb Excel texnikalari",
      "Mutaxassislar tavsiya qilgan eng yaxshi amaliyotlar"
  ],
  
  // O'quvchilar uchun yo'l xaritasi
  learningPath: [
      {
          stage: 1,
          name: "Excel asoslari",
          duration: "2 hafta",
          skills: ["Interfeys bilan tanishish", "Ma'lumotlarni kiritish", "Asosiy formulalar", "Jadvallarni formatlash"],
          projectIdea: "Oilaviy byudjet rejasi tayyorlash"
      },
      {
          stage: 2,
          name: "Formulalar va funksiyalar",
          duration: "3 hafta",
          skills: ["Matematik funksiyalar", "Mantiqiy funksiyalar", "Matn funksiyalari", "Sana va vaqt funksiyalari"],
          projectIdea: "Avtomatlashtirilgan hisobotlar yaratish"
      },
      {
          stage: 3,
          name: "Ma'lumotlar boshqaruvi",
          duration: "2 hafta",
          skills: ["Filtrlash va saralash", "Ma'lumotlar validatsiyasi", "Takrorlanishlarni aniqlash", "Ma'lumotlar tuzilmalari"],
          projectIdea: "Mijozlar ma'lumotlar bazasini yaratish"
      },
      {
          stage: 4,
          name: "Tahlil va vizualizatsiya",
          duration: "3 hafta",
          skills: ["Diagrammalar yaratish", "Pivot jadvallar", "Conditional formatting", "Murakkab diagrammalar"],
          projectIdea: "Interaktiv savdo-sotiq tahlili dashboardi"
      },
      {
          stage: 5,
          name: "Avtomatlashtirish va kengaytirish",
          duration: "4 hafta",
          skills: ["Makroslar", "VBA asoslari", "Power Query", "Power Pivot"],
          projectIdea: "To'liq avtomatlashtirilgan hisobot tizimi"
      }
  ],
  
  categories: [
    {
      id: 1,
      title: "Asosiy tushunchalar",
      description: "Microsoft Excel dasturining asosiy interfeysi va funksiyalarini o'rganish bo'yicha videodarslar.",
      icon: "foundation",
      color: "#4285F4",
      skillLevel: "Boshlang'ich",
      estimatedCompletionTime: "10 soat",
      prerequisites: [],
      outcomes: [
        "Excel interfeysi va asosiy elementlarini tushunish",
        "Ma'lumotlarni kiritish va tahrirlash qobiliyati",
        "Asosiy formatlash ko'nikmasi",
        "Excel fayllarini saqlash va ochish"
      ]
    },
    {
      id: 2,
      title: "Formulalar va funksiyalar",
      description: "Excel formulalari va funksiyalarini o'rganish bo'yicha videodarslar.",
      icon: "functions",
      color: "#34A853",
      skillLevel: "O'rta",
      estimatedCompletionTime: "15 soat",
      prerequisites: ["Asosiy tushunchalar"],
      outcomes: [
        "Murakkab formulalar yaratish qobiliyati",
        "Umumiy Excel funksiyalaridan samarali foydalanish",
        "Formula xatolarini tushunish va bartaraf etish",
        "Array formulalardan foydalanish"
      ]
    },
    {
      id: 3,
      title: "Ma'lumotlar tahlili",
      description: "Excel dasturida ma'lumotlarni samarali tahlil qilish bo'yicha videodarslar.",
      icon: "analytics",
      color: "#FBBC05",
      skillLevel: "Professional",
      estimatedCompletionTime: "18 soat",
      prerequisites: ["Formulalar va funksiyalar"],
      outcomes: [
        "Katta hajmdagi ma'lumotlarni tahlil qilish",
        "Pivot jadvallar va diagrammalardan samarali foydalanish",
        "Ma'lumotlar munosabatlarini aniqlash",
        "Prognozlash va trend analiz qilish"
      ]
    },
    {
      id: 4,
      title: "Diagrammalar va vizualizatsiya",
      description: "Excel dasturida diagrammalar va ma'lumotlarni vizual taqdim etish bo'yicha videodarslar.",
      icon: "charts",
      color: "#EA4335",
      skillLevel: "O'rta",
      estimatedCompletionTime: "12 soat",
      prerequisites: ["Asosiy tushunchalar"],
      outcomes: [
        "Ma'lumotlar asosida ta'sirchan vizualizatsiyalar yaratish",
        "Turli xil diagram turlarini tanlash va qo'llash",
        "Interaktiv dashboardlar yaratish",
        "Vizualizatsiyalarni formatlash va ulashish"
      ]
    },
    {
      id: 5,
      title: "Professional texnikalar",
      description: "Excel dasturining professional darajadagi xususiyatlari va imkoniyatlari bo'yicha videodarslar.",
      icon: "professional",
      color: "#673AB7",
      skillLevel: "Professional",
      estimatedCompletionTime: "20 soat",
      prerequisites: ["Ma'lumotlar tahlili", "Diagrammalar va vizualizatsiya"],
      outcomes: [
        "VBA va makroslar orqali avtomatlashtirish",
        "Murakkab ma'lumotlar modellari yaratish",
        "Power Pivot va Power Query bilan ishlash",
        "Excel va boshqa tizimlarga integratsiya"
      ]
    },
    {
      id: 6,
      title: "Excel sohalarga qo'llanishi",
      description: "Excel dasturini turli sohalarda qo'llash bo'yicha maxsus kurslar.",
      icon: "applications",
      color: "#FF9800",
      skillLevel: "Har xil",
      estimatedCompletionTime: "25 soat",
      prerequisites: ["Asosiy tushunchalar"],
      outcomes: [
        "Turli sohalarda Excel dan foydalanish qobiliyati",
        "Soha-spetsifik shablonlar yaratish",
        "Moliya, marketing, va boshqa sohalarda Excel qo'llash",
        "Biznes qarorlarni qabul qilishda Excel yordamida tahlil qilish"
      ]
    }
  ],
  
  videos: [
    // ASOSIY TUSHUNCHALAR - KATEGORIYA 1
    {
      id: 1,
      categoryId: 1,
      title: "Microsoft Excel bilan tanishish",
      description: "Microsoft Excel dasturining interfeysi, asosiy elementlari va tugmalar bilan tanishish. Dasturni yuklash va o'rnatish.",
      videoUrl: "https://www.youtube.com/embed/ujj_zLZfvYo",
      thumbnailUrl: "https://i3.ytimg.com/vi/ujj_zLZfvYo/maxresdefault.jpg",
      duration: "18:10",
      level: "Boshlang'ich",
      tags: ["asosiy", "interfeys", "tanishuv", "o'rnatish"],
      views: 45230,
      likes: 3845,
      publishDate: "2023-10-15",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-intro-practice.xlsx" },
        { type: "Qo'llanma", url: "https://example.com/excel-intro-guide.pdf" }
      ],
      quiz: [
        {
          question: "Excel dasturida yangi fayl yaratish uchun qaysi tugmalar kombinatsiyasi ishlatiladi?",
          options: ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Ctrl+F"],
          answer: 0
        }
      ]
    },
    {
      id: 2,
      categoryId: 1,
      title: "Jadvallar yaratish va formatlash",
      description: "Excel dasturida jadvallar yaratish, ma'lumotlarni kiritish va ularni formatlash. Kataklarni birlashtirish, ranglar va chegaralar bilan ishlash.",
      videoUrl: "https://www.youtube.com/embed/wLKKeAzVy58",
      thumbnailUrl: "https://i3.ytimg.com/vi/wLKKeAzVy58/maxresdefault.jpg",
      duration: "22:45",
      level: "Boshlang'ich",
      tags: ["jadval", "formatlash", "katak", "chegaralar"],
      views: 38760,
      likes: 3210,
      publishDate: "2023-10-22",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-tables-practice.xlsx" },
        { type: "Cheat sheet", url: "https://example.com/excel-formatting-cheatsheet.pdf" }
      ],
      quiz: [
        {
          question: "Kataklarni birlashtirish uchun qaysi menyudan foydalaniladi?",
          options: ["Home", "Insert", "Page Layout", "Formulas"],
          answer: 0
        }
      ]
    },
    {
      id: 3,
      categoryId: 1,
      title: "Ma'lumotlarni kiritish va tahrirlash",
      description: "Excel dasturida ma'lumotlarni tez va samarali kiritish usullari. Ma'lumotlarni ko'chirish, nusxalash va tahrirlash.",
      videoUrl: "https://www.youtube.com/embed/JNdPTyD_IgE",
      thumbnailUrl: "https://i3.ytimg.com/vi/JNdPTyD_IgE/maxresdefault.jpg",
      duration: "15:30",
      level: "Boshlang'ich",
      tags: ["ma'lumot", "kiritish", "tahrirlash", "nusxalash"],
      views: 32145,
      likes: 2780,
      publishDate: "2023-10-29",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-data-entry-practice.xlsx" },
        { type: "Namunaviy mashqlar", url: "https://example.com/excel-data-exercises.pdf" }
      ],
      quiz: [
        {
          question: "Katta hajmdagi ma'lumotlarni nusxalash va joylashtirish uchun eng samarali usul qaysi?",
          options: ["Ctrl+C, Ctrl+V", "Cut va Paste", "Drag and Drop", "AutoFill"],
          answer: 0
        }
      ]
    },
    {
      id: 4,
      categoryId: 1,
      title: "Sahifani sozlash va chop etish",
      description: "Excel hujjatlarini chop etishga tayyorlash. Sahifa sozlamalari, printer tanlovlari va print preview imkoniyatlaridan foydalanish.",
      videoUrl: "https://www.youtube.com/embed/V5SKkGLzz-U",
      thumbnailUrl: "https://i3.ytimg.com/vi/V5SKkGLzz-U/maxresdefault.jpg",
      duration: "14:15",
      level: "Boshlang'ich",
      tags: ["chop etish", "sahifa sozlamalari", "printer", "preview"],
      views: 27890,
      likes: 2345,
      publishDate: "2023-11-05",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-printing-practice.xlsx" },
        { type: "Chop etish bo'yicha qo'llanma", url: "https://example.com/excel-printing-guide.pdf" }
      ],
      quiz: [
        {
          question: "Sahifa sozlamalarini o'zgartirish uchun qaysi menyudan foydalaniladi?",
          options: ["Home", "Insert", "Page Layout", "View"],
          answer: 2
        }
      ]
    },
    {
      id: 5,
      categoryId: 1,
      title: "Excel fayllarini boshqarish",
      description: "Excel fayllari bilan ishlash. Fayllarni saqlash, ochish, eksport va import qilish. Formatlari va ularning farqlari.",
      videoUrl: "https://www.youtube.com/embed/2QhxNSzf-NE",
      thumbnailUrl: "https://i3.ytimg.com/vi/2QhxNSzf-NE/maxresdefault.jpg",
      duration: "17:20",
      level: "Boshlang'ich",
      tags: ["fayl", "saqlash", "format", "eksport", "import"],
      views: 31250,
      likes: 2675,
      publishDate: "2023-11-12",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-file-management-practice.xlsx" },
        { type: "Fayl formatlar haqida ma'lumot", url: "https://example.com/excel-file-formats-guide.pdf" }
      ],
      quiz: [
        {
          question: "Makroslarni saqlash uchun qaysi fayl formatidan foydalanish kerak?",
          options: [".xlsx", ".xlsm", ".csv", ".pdf"],
          answer: 1
        }
      ]
    },
    
    // FORMULALAR VA FUNKSIYALAR - KATEGORIYA 2
    {
      id: 6,
      categoryId: 2,
      title: "Excel formulalari asoslari",
      description: "Excel formulalarining asosiy tushunchalari. Formula yaratish, tahrirlash va nusxalash. Formulalar sintaksisi.",
      videoUrl: "https://www.youtube.com/embed/oPEvQc-AWPQ",
      thumbnailUrl: "https://i3.ytimg.com/vi/oPEvQc-AWPQ/maxresdefault.jpg",
      duration: "25:40",
      level: "O'rta",
      tags: ["formula", "sintaksis", "asoslar", "hisoblash"],
      views: 48760,
      likes: 4120,
      publishDate: "2023-11-19",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-formulas-basics-practice.xlsx" },
        { type: "Formulalar bo'yicha qo'llanma", url: "https://example.com/excel-formulas-guide.pdf" }
      ],
      quiz: [
        {
          question: "Excel formulasi qaysi belgi bilan boshlanadi?",
          options: ["#", "=", "@", "$"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "Savdo hisoboti",
          description: "Har kunlik savdo hisoblari va statistikasi"
        },
        {
          title: "Byudjet rejasi",
          description: "Oilaviy yoki biznes byudjetni rejalashtirish"
        }
      ]
    },
    {
      id: 7,
      categoryId: 2,
      title: "Matematik funksiyalar",
      description: "Excel dasturida matematik funksiyalardan foydalanish. SUM, AVERAGE, MAX, MIN, COUNT va boshqa funksiyalar.",
      videoUrl: "https://www.youtube.com/embed/tPweBTAn8Mg",
      thumbnailUrl: "https://i3.ytimg.com/vi/tPweBTAn8Mg/maxresdefault.jpg",
      duration: "28:15",
      level: "O'rta",
      tags: ["matematik", "funksiya", "SUM", "AVERAGE", "MAX", "MIN"],
      views: 42350,
      likes: 3675,
      publishDate: "2023-11-26",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-math-functions-practice.xlsx" },
        { type: "Matematik funksiyalar ro'yxati", url: "https://example.com/excel-math-functions-list.pdf" }
      ],
      quiz: [
        {
          question: "Qaysi funksiya ma'lumotlar orasidagi o'rtacha qiymatni hisoblaydi?",
          options: ["SUM", "AVERAGE", "COUNT", "MAX"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "O'quvchilar baholari tahlili",
          description: "O'rtacha, maksimal va minimal ballarni hisoblash"
        },
        {
          title: "Oylik xarajatlar hisoboti",
          description: "Kunlik xarajatlarni to'plash va tahlil qilish"
        }
      ]
    },
    {
      id: 8,
      categoryId: 2,
      title: "Mantiqiy funksiyalar",
      description: "Excel dasturida mantiqiy funksiyalardan foydalanish. IF, AND, OR, NOT va boshqa mantiqiy funksiyalar.",
      videoUrl: "https://www.youtube.com/embed/CBMy99TLx_U",
      thumbnailUrl: "https://i3.ytimg.com/vi/CBMy99TLx_U/maxresdefault.jpg",
      duration: "23:30",
      level: "O'rta",
      tags: ["mantiqiy", "funksiya", "IF", "AND", "OR", "shart"],
      views: 39870,
      likes: 3480,
      publishDate: "2023-12-03",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-logical-functions-practice.xlsx" },
        { type: "Mantiqiy operatorlar qo'llanmasi", url: "https://example.com/excel-logical-operators-guide.pdf" }
      ],
      quiz: [
        {
          question: "IF() funksiyasi nechta argumentni o'z ichiga oladi?",
          options: ["1", "2", "3", "4"],
          answer: 2
        }
      ],
      realWorldExamples: [
        {
          title: "Bonus hisoblash tizimi",
          description: "Hodimlar sotuvi asosida bonus hisoblash"
        },
        {
          title: "Baho qo'yish tizimi",
          description: "Talabalar ballariga qarab baho qo'yish"
        }
      ]
    },
    {
      id: 9,
      categoryId: 2,
      title: "Matn funksiyalari",
      description: "Excel dasturida matn funksiyalaridan foydalanish. CONCATENATE, LEFT, RIGHT, MID, FIND, LEN va boshqa matn funksiyalari.",
      videoUrl: "https://www.youtube.com/embed/_V2KjYVjAXo",
      thumbnailUrl: "https://i3.ytimg.com/vi/_V2KjYVjAXo/maxresdefault.jpg",
      duration: "19:45",
      level: "O'rta",
      tags: ["matn", "funksiya", "CONCATENATE", "LEFT", "RIGHT", "FIND"],
      views: 35240,
      likes: 2950,
      publishDate: "2023-12-10",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-text-functions-practice.xlsx" },
        { type: "Matn funksiyalari bo'yicha qo'llanma", url: "https://example.com/excel-text-functions-guide.pdf" }
      ],
      quiz: [
        {
          question: "Matnning uzunligini aniqlash uchun qaysi funksiyadan foydalaniladi?",
          options: ["LENGTH", "LEN", "COUNT", "SIZE"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "Mijozlar ma'lumotlar bazasi",
          description: "Ism va familiyani ajratish/birlashtirish"
        },
        {
          title: "Ma'lumotlarni tozalash",
          description: "Import qilingan ma'lumotlarni formatlash"
        }
      ]
    },
    {
      id: 10,
      categoryId: 2,
      title: "Vaqt va sana funksiyalari",
      description: "Excel dasturida vaqt va sana funksiyalaridan foydalanish. NOW, TODAY, DATE, DAY, MONTH, YEAR va boshqa funksiyalar.",
      videoUrl: "https://www.youtube.com/embed/hwgEP1EzR-U",
      thumbnailUrl: "https://i3.ytimg.com/vi/hwgEP1EzR-U/maxresdefault.jpg",
      duration: "21:20",
      level: "O'rta",
      tags: ["vaqt", "sana", "funksiya", "NOW", "TODAY", "DATE"],
      views: 32780,
      likes: 2765,
      publishDate: "2023-12-17",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-date-time-practice.xlsx" },
        { type: "Sana formatlari bo'yicha qo'llanma", url: "https://example.com/excel-date-formats-guide.pdf" }
      ],
      quiz: [
        {
          question: "Joriy sanani Excel hujjatiga qo'yish uchun qaysi funksiyadan foydalaniladi?",
          options: ["NOW()", "TODAY()", "DATE()", "CURRENT()"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "To'lov jadvali",
          description: "Muddatli to'lovlarni hisoblash"
        },
        {
          title: "Loyiha vaqtini boshqarish",
          description: "Loyiha muddatlari va bosqichlarini hisoblash"
        }
      ]
    },
    
    // MA'LUMOTLAR TAHLILI - KATEGORIYA 3 (qolgan videolar ham shu tartibda davom etadi)
    {
      id: 11,
      categoryId: 3,
      title: "Ma'lumotlarni saralash va filtrlash",
      description: "Excel dasturida ma'lumotlarni saralash va filtrlash imkoniyatlari. Turli mezonlar bo'yicha saralash, murakkab filtrlar yaratish.",
      videoUrl: "https://www.youtube.com/embed/qy3N7NGOa8U",
      thumbnailUrl: "https://i3.ytimg.com/vi/qy3N7NGOa8U/maxresdefault.jpg",
      duration: "20:15",
      level: "O'rta",
      tags: ["saralash", "filtrlash", "ma'lumot", "mezon"],
      views: 38450,
      likes: 3280,
      publishDate: "2023-12-24",
      resources: [
        { type: "Mashq fayli", url: "https://example.com/excel-sorting-filtering-practice.xlsx" },
        { type: "Filter sozlamalari bo'yicha qo'llanma", url: "https://example.com/excel-filtering-guide.pdf" }
      ],
      quiz: [
        {
          question: "Tez filtrlash tugmalarini yoqish uchun qaysi klaviatura kombinatsiyasidan foydalaniladi?",
          options: ["Ctrl+A", "Ctrl+F", "Ctrl+Shift+L", "Alt+D+F"],
          answer: 2
        }
      ],
      realWorldExamples: [
        {
          title: "Inventar boshqaruvi",
          description: "Kam qolgan mahsulotlarni filtrlash"
        },
        {
          title: "Hodimlar ma'lumotlar bazasi",
          description: "Bo'limlar bo'yicha saralash va filtrlash"
        }
      ]
    },
    
    // Yangi qo'shilgan ma'lumotlar
    
    // SOHALARGA QO'LLANISHI - KATEGORIYA 6 (yangi kategoriya)
    {
      id: 31,
      categoryId: 6,
      title: "Excel moliya sohasida",
      description: "Moliyaviy hisobotlar, prognozlar va tahlillarni Excel dasturida qanday amalga oshirish. Moliyaviy modellar yaratish.",
      videoUrl: "https://www.youtube.com/embed/j3yH6FfD_Wk",
      thumbnailUrl: "https://i3.ytimg.com/vi/j3yH6FfD_Wk/maxresdefault.jpg",
      duration: "38:20",
      level: "Professional",
      tags: ["moliya", "hisobot", "moliyaviy model", "budjet", "prognoz"],
      views: 47890,
      likes: 4320,
      publishDate: "2024-01-15",
      resources: [
        { type: "Moliyaviy model shablon", url: "https://example.com/excel-financial-model-template.xlsx" },
        { type: "Moliya funksiyalari bo'yicha qo'llanma", url: "https://example.com/excel-finance-functions-guide.pdf" }
      ],
      quiz: [
        {
          question: "Investitsiya qaytimini hisoblash uchun qaysi Excel funksiyasidan foydalaniladi?",
          options: ["NPV", "IRR", "PMT", "FV"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "Kompaniya byudjeti",
          description: "Yillik moliyaviy rejalashtirish va budjetni yaratish"
        },
        {
          title: "Investitsiya portfeli",
          description: "Investitsiyalarni kuzatish va qaytimni hisoblash"
        }
      ],
      industry: {
        name: "Moliya va buxgalteriya",
        professionals: ["Moliyaviy tahlilchi", "Buxgalter", "Investitsiya maslahatchisi"],
        keySkills: ["Moliyaviy modellashtirish", "Budjet rejalashtirish", "Pul oqimi tahlili"]
      },
      templates: [
        { name: "Pul oqimi hisoboti", url: "https://example.com/cash-flow-template.xlsx" },
        { name: "Moliyaviy prognoz", url: "https://example.com/financial-forecast-template.xlsx" },
        { name: "Kredit amortizatsiyasi", url: "https://example.com/loan-amortization-template.xlsx" }
      ]
    },
    {
      id: 32,
      categoryId: 6,
      title: "Excel marketing sohasida",
      description: "Marketing kampaniyalarini rejalashtirish, boshqarish va natijalarini tahlil qilish uchun Excel qo'llanishi. Asosiy marketing KPI larni kuzatish.",
      videoUrl: "https://www.youtube.com/embed/uSKg-BmLG9U",
      thumbnailUrl: "https://i3.ytimg.com/vi/uSKg-BmLG9U/maxresdefault.jpg",
      duration: "32:45",
      level: "O'rta",
      tags: ["marketing", "kampaniya", "KPI", "reklama", "ROI"],
      views: 38760,
      likes: 3280,
      publishDate: "2024-01-22",
      resources: [
        { type: "Marketing kampaniyasi shablon", url: "https://example.com/marketing-campaign-template.xlsx" },
        { type: "Marketing KPI qo'llanmasi", url: "https://example.com/marketing-kpi-guide.pdf" }
      ],
      quiz: [
        {
          question: "Marketing kampaniyasi natijalarini o'lchash uchun qanday ko'rsatkichdan foydalaniladi?",
          options: ["ROI", "CPU", "API", "SQL"],
          answer: 0
        }
      ],
      realWorldExamples: [
        {
          title: "Ijtimoiy media tahlili",
          description: "Ijtimoiy tarmoqlar samaradorligini o'lchash"
        },
        {
          title: "Reklama byudjeti",
          description: "Turli reklama kanallarining ROI ko'rsatkichlari"
        }
      ],
      industry: {
        name: "Marketing va reklama",
        professionals: ["Marketing menejeri", "Reklama mutaxassisi", "Marketing analitigi"],
        keySkills: ["Kampaniya tahlili", "Marketing budjetini rejalashtirish", "ROI hisoblash"]
      },
      templates: [
        { name: "Marketing kalendari", url: "https://example.com/marketing-calendar-template.xlsx" },
        { name: "KPI dashboard", url: "https://example.com/marketing-kpi-dashboard-template.xlsx" },
        { name: "A/B test natijalarini tahlil qilish", url: "https://example.com/ab-testing-template.xlsx" }
      ]
    },
    {
      id: 33,
      categoryId: 6,
      title: "Excel ta'lim sohasida",
      description: "O'qituvchilar va o'quv yurtlari uchun Excel dasturidan foydalanish. Baholar hisoboti, davomatni kuzatish va statistika.",
      videoUrl: "https://www.youtube.com/embed/KzPVNfAhWQ8",
      thumbnailUrl: "https://i3.ytimg.com/vi/KzPVNfAhWQ8/maxresdefault.jpg",
      duration: "29:10",
      level: "O'rta",
      tags: ["ta'lim", "o'qituvchi", "baho", "davomat", "statistika"],
      views: 42150,
      likes: 3890,
      publishDate: "2024-01-29",
      resources: [
        { type: "Baho jurnali shablon", url: "https://example.com/grade-book-template.xlsx" },
        { type: "O'qituvchilar uchun Excel qo'llanma", url: "https://example.com/excel-for-teachers-guide.pdf" }
      ],
      quiz: [
        {
          question: "O'quvchilarning o'rtacha bahosini tez hisoblash uchun qaysi funksiyadan foydalanish maqsadga muvofiq?",
          options: ["COUNT", "SUM", "AVERAGE", "VLOOKUP"],
          answer: 2
        }
      ],
      realWorldExamples: [
        {
          title: "Sinf jurnali",
          description: "O'quvchilar davomati va baholarini kuzatish"
        },
        {
          title: "O'quv dasturi rejasi",
          description: "Dars soatlari va mavzularni rejalashtirish"
        }
      ],
      industry: {
        name: "Ta'lim",
        professionals: ["O'qituvchi", "O'quv bo'limi boshlig'i", "Ta'lim menejeri"],
        keySkills: ["Baholarni hisoblash", "Davomatni kuzatish", "Ta'lim statistikasini tahlil qilish"]
      },
      templates: [
        { name: "Sinf jurnali", url: "https://example.com/classroom-gradebook-template.xlsx" },
        { name: "Dars jadvali", url: "https://example.com/class-schedule-template.xlsx" },
        { name: "Talabalar tahlili", url: "https://example.com/student-analysis-template.xlsx" }
      ]
    },
    {
      id: 34,
      categoryId: 6,
      title: "Excel logistika sohasida",
      description: "Logistika va ta'minot zanjirini boshqarish uchun Excel dasturidan foydalanish. Inventar hisobi, transport rejalashtirish va optimallashtirish.",
      videoUrl: "https://www.youtube.com/embed/ZX4RJJTcMWk",
      thumbnailUrl: "https://i3.ytimg.com/vi/ZX4RJJTcMWk/maxresdefault.jpg",
      duration: "34:50",
      level: "Professional",
      tags: ["logistika", "inventar", "transport", "ta'minot zanjiri", "optimallashtirish"],
      views: 36540,
      likes: 3120,
      publishDate: "2024-02-05",
      resources: [
        { type: "Logistika dashboard shablon", url: "https://example.com/logistics-dashboard-template.xlsx" },
        { type: "Inventar boshqaruvi qo'llanmasi", url: "https://example.com/inventory-management-guide.pdf" }
      ],
      quiz: [
        {
          question: "Logistikada optimal marshrutni topish uchun qaysi Excel vositasidan foydalanish mumkin?",
          options: ["Pivot jadval", "Solver", "Power Query", "Conditional Formatting"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "Transport xarajatlarini optimallashtirish",
          description: "Eng kam xarajatli marshrutni tanlash"
        },
        {
          title: "Inventar boshqaruvi",
          description: "Ombordagi mahsulotlar monitoringi va prognozi"
        }
      ],
      industry: {
        name: "Logistika va ta'minot zanjiri",
        professionals: ["Logistika menejeri", "Ta'minot zanjiri mutaxassisi", "Omborxona boshqaruvchisi"],
        keySkills: ["Inventar hisobi", "Transport rejalashtirish", "Xarajatlarni optimallashtirish"]
      },
      templates: [
        { name: "Inventar hisobi", url: "https://example.com/inventory-tracking-template.xlsx" },
        { name: "Transport xarajatlari", url: "https://example.com/transportation-costs-template.xlsx" },
        { name: "Ta'minot zanjiri dashboard", url: "https://example.com/supply-chain-dashboard-template.xlsx" }
      ]
    },
    {
      id: 35,
      categoryId: 6,
      title: "Excel loyiha boshqaruvida",
      description: "Loyihalarni rejalashtirish, boshqarish va nazorat qilish uchun Excel dasturidan foydalanish. Gantt diagrammalari, vazifalar jadvalini yaratish.",
      videoUrl: "https://www.youtube.com/embed/9W1PuG3dGzM",
      thumbnailUrl: "https://i3.ytimg.com/vi/9W1PuG3dGzM/maxresdefault.jpg",
      duration: "36:30",
      level: "O'rta",
      tags: ["loyiha boshqaruvi", "gantt", "vazifa", "rejalashtirish", "monitoring"],
      views: 39870,
      likes: 3450,
      publishDate: "2024-02-12",
      resources: [
        { type: "Loyiha boshqaruvi shablon", url: "https://example.com/project-management-template.xlsx" },
        { type: "Gantt diagramma yaratish qo'llanmasi", url: "https://example.com/gantt-chart-guide.pdf" }
      ],
      quiz: [
        {
          question: "Loyiha vazifalarini vaqt o'qi bo'ylab ko'rsatish uchun qanday diagramma turi qo'llaniladi?",
          options: ["Pie Chart", "Bar Chart", "Gantt Chart", "Line Chart"],
          answer: 2
        }
      ],
      realWorldExamples: [
        {
          title: "Qurilish loyihasi jadvali",
          description: "Qurilish jarayonlarini rejalashtirish va kuzatish"
        },
        {
          title: "Dasturiy ta'minot ishlab chiqish",
          description: "Agile loyiha boshqaruvi va sprint rejalashtirish"
        }
      ],
      industry: {
        name: "Loyiha boshqaruvi",
        professionals: ["Loyiha menejeri", "Loyiha koordinatori", "Biznes tahlilchi"],
        keySkills: ["Muddat rejalashtirish", "Resurslarni taqsimlash", "Loyiha monitoringi"]
      },
      templates: [
        { name: "Gantt diagramma", url: "https://example.com/gantt-chart-template.xlsx" },
        { name: "Loyiha byudjeti", url: "https://example.com/project-budget-template.xlsx" },
        { name: "Resurslar taqsimoti", url: "https://example.com/resource-allocation-template.xlsx" }
      ]
    },
    {
      id: 36,
      categoryId: 6,
      title: "Excel HR va kadrlar bo'limida",
      description: "Kadrlar bo'limi uchun Excel dasturidan foydalanish. Xodimlar ma'lumotlari, ish vaqti hisobi, ish haqini hisoblash.",
      videoUrl: "https://www.youtube.com/embed/mNJ5pK6zYu8",
      thumbnailUrl: "https://i3.ytimg.com/vi/mNJ5pK6zYu8/maxresdefault.jpg",
      duration: "30:15",
      level: "O'rta",
      tags: ["HR", "kadrlar", "xodimlar", "ish vaqti", "ish haqi"],
      views: 34560,
      likes: 2980,
      publishDate: "2024-02-19",
      resources: [
        { type: "HR dashboard shablon", url: "https://example.com/hr-dashboard-template.xlsx" },
        { type: "Ish haqi hisoblash qo'llanmasi", url: "https://example.com/payroll-calculation-guide.pdf" }
      ],
      quiz: [
        {
          question: "Xodimlar davomatini hisoblash uchun qaysi funksiyadan foydalanish qulay?",
          options: ["COUNTIF", "SUMIF", "VLOOKUP", "INDEX"],
          answer: 0
        }
      ],
      realWorldExamples: [
        {
          title: "Ish haqi hisoblash tizimi",
          description: "Ish vaqti, bonuslar va soliqlarni hisoblash"
        },
        {
          title: "Xodimlar baholash jadvali",
          description: "KPI ko'rsatkichlari va mehnat samaradorligi"
        }
      ],
      industry: {
        name: "HR va kadrlar",
        professionals: ["HR menejeri", "Kadrlar bo'limi boshlig'i", "Ish haqi hisobchisi"],
        keySkills: ["Xodimlar ma'lumotlarini boshqarish", "Ish haqi hisoblash", "Xodimlar baholashini tahlil qilish"]
      },
      templates: [
        { name: "Ish haqi hisoblash", url: "https://example.com/payroll-template.xlsx" },
        { name: "Xodimlar davomat jadvali", url: "https://example.com/employee-attendance-template.xlsx" },
        { name: "KPI ko'rsatkichlar paneli", url: "https://example.com/kpi-dashboard-template.xlsx" }
      ]
    },
    {
      id: 37,
      categoryId: 6,
      title: "Excel savdo va tarqatish sohasida",
      description: "Savdo va tarqatish jarayonlarini boshqarish uchun Excel dasturidan foydalanish. Sotuvlar tahlili, maqsadlarni belgilash va kuzatish.",
      videoUrl: "https://www.youtube.com/embed/LjS-2pgNT8Q",
      thumbnailUrl: "https://i3.ytimg.com/vi/LjS-2pgNT8Q/maxresdefault.jpg",
      duration: "31:40",
      level: "O'rta",
      tags: ["savdo", "sotuv", "tarqatish", "maqsad", "mijoz"],
      views: 41230,
      likes: 3670,
      publishDate: "2024-02-26",
      resources: [
        { type: "Savdo tahlili shablon", url: "https://example.com/sales-analysis-template.xlsx" },
        { type: "Sotuvlar bo'yicha qo'llanma", url: "https://example.com/sales-tracking-guide.pdf" }
      ],
      quiz: [
        {
          question: "Savdo ma'lumotlarini vizual tahlil qilish uchun nima eng yaxshi?",
          options: ["Jadval", "Diagramma", "Matn", "Faqat raqamlar"],
          answer: 1
        }
      ],
      realWorldExamples: [
        {
          title: "Oylik savdo hisoboti",
          description: "Sotuv ko'rsatkichlari va trendlarni aniqlash"
        },
        {
          title: "Mijozlar segmentatsiyasi",
          description: "Mijozlar guruhlari bo'yicha tahlil"
        }
      ],
      industry: {
        name: "Savdo va tarqatish",
        professionals: ["Savdo menejeri", "Savdo vakili", "Savdo tahlilchisi"],
        keySkills: ["Savdo tahlili", "Mijozlar ma'lumotlarini boshqarish", "Savdo maqsadlarini rejalashtirish"]
      },
      templates: [
        { name: "Savdo funeli", url: "https://example.com/sales-funnel-template.xlsx" },
        { name: "Mijozlar ma'lumotlar bazasi", url: "https://example.com/customer-database-template.xlsx" },
        { name: "Sotuv bashorati", url: "https://example.com/sales-forecast-template.xlsx" }
      ]
    },
    {
      id: 38,
      categoryId: 6,
      title: "Excel buxgalteriya hisobida",
      description: "Buxgalteriya hisobi uchun Excel dasturidan foydalanish. Moliyaviy hisobotlar, soliqlar, daromad va xarajatlar hisobi.",
      videoUrl: "https://www.youtube.com/embed/8L1OVkw2ZQ8",
      thumbnailUrl: "https://i3.ytimg.com/vi/8L1OVkw2ZQ8/maxresdefault.jpg",
      duration: "39:25",
      level: "Professional",
      tags: ["buxgalteriya", "moliya", "soliq", "hisobot", "balans"],
      views: 43780,
      likes: 3920,
      publishDate: "2024-03-04",
      resources: [
        { type: "Buxgalteriya hisobi shablon", url: "https://example.com/accounting-template.xlsx" },
        { type: "Moliyaviy hisobotlar qo'llanmasi", url: "https://example.com/financial-statements-guide.pdf" }
      ],
      quiz: [
        {
          question: "Balans hisobotida aktivlar va passivlar o'rtasidagi nisbat qanday bo'lishi kerak?",
          options: ["1:1", "2:1", "Farqi yo'q", "3:1"],
          answer: 0
        }
      ],
      realWorldExamples: [
        {
          title: "Balans hisoboti",
          description: "Kompaniya moliyaviy holatining qisqa ko'rinishi"
        },
        {
          title: "Daromad hisoboti",
          description: "Ma'lum davr uchun daromad va xarajatlar tahlili"
        }
      ],
      industry: {
        name: "Buxgalteriya va moliya",
        professionals: ["Buxgalter", "Moliyaviy direktor", "Soliq maslahatchisi"],
        keySkills: ["Moliyaviy hisobot tayyorlash", "Soliq hisoblash", "Auditga tayyorlanish"]
      },
      templates: [
        { name: "Bosh daftar", url: "https://example.com/general-ledger-template.xlsx" },
        { name: "Daromad hisoboti", url: "https://example.com/income-statement-template.xlsx" },
        { name: "Balans hisoboti", url: "https://example.com/balance-sheet-template.xlsx" }
      ]
    },
    {
      id: 39,
      categoryId: 6,
      title: "Excel ishlab chiqarish sohasida",
      description: "Ishlab chiqarish jarayonlarini boshqarish uchun Excel dasturidan foydalanish. Ishlab chiqarish rejasi, sifat nazorati va samaradorlikni oshirish.",
      videoUrl: "https://www.youtube.com/embed/Q5ykd_V6Kc4",
      thumbnailUrl: "https://i3.ytimg.com/vi/Q5ykd_V6Kc4/maxresdefault.jpg",
      duration: "33:55",
      level: "Professional",
      tags: ["ishlab chiqarish", "rejalashtirish", "sifat", "samaradorlik", "optimizatsiya"],
      views: 38250,
      likes: 3340,
      publishDate: "2024-03-11",
      resources: [
        { type: "Ishlab chiqarish rejasi shablon", url: "https://example.com/production-planning-template.xlsx" },
        { type: "Sifat nazorati qo'llanmasi", url: "https://example.com/quality-control-guide.pdf" }
      ],
      quiz: [
        {
          question: "Ishlab chiqarish samaradorligini o'lchash uchun qaysi ko'rsatkichdan foydalaniladi?",
          options: ["ROI", "KPI", "OEE", "CRM"],
          answer: 2
        }
      ],
      realWorldExamples: [
        {
          title: "Ishlab chiqarish jadvali",
          description: "Kunlik, haftalik va oylik ishlab chiqarish rejasi"
        },
        {
          title: "Sifat nazorati qartalari",
          description: "Statistik jarayon nazorati uchun sifat ko'rsatkichlari"
        }
      ],
      industry: {
        name: "Ishlab chiqarish",
        professionals: ["Ishlab chiqarish menejeri", "Sifat nazorati mutaxassisi", "Jarayon muhandisi"],
        keySkills: ["Ishlab chiqarishni rejalashtirish", "Samaradorlikni o'lchash", "Sifatni nazorat qilish"]
      },
      templates: [
        { name: "Ishlab chiqarish jadvali", url: "https://example.com/production-schedule-template.xlsx" },
        { name: "Sifat nazorati", url: "https://example.com/quality-control-template.xlsx" },
        { name: "Jihozlar texnik xizmati", url: "https://example.com/equipment-maintenance-template.xlsx" }
      ]
    },
    {
      id: 40,
      categoryId: 6,
      title: "Excel tibbiyot va sog'liqni saqlash sohasida",
      description: "Tibbiyot va sog'liqni saqlash sohasida Excel dasturidan foydalanish. Bemorlar ma'lumotlarini boshqarish, jadvallarni rejalashtirish, statistika va hisobotlar.",
      videoUrl: "https://www.youtube.com/embed/dL7MBkHfbZ4",
      thumbnailUrl: "https://i3.ytimg.com/vi/dL7MBkHfbZ4/maxresdefault.jpg",
      duration: "28:40",
      level: "O'rta",
      tags: ["tibbiyot", "sog'liq", "bemor", "klinika", "statistika"],
      views: 36140,
      likes: 3180,
      publishDate: "2024-03-15",
      resources: [
        { type: "Tibbiy ma'lumotlar boshqaruvi shablon", url: "https://example.com/medical-data-management-template.xlsx" },
        { type: "Tibbiyot statistikasi qo'llanmasi", url: "https://example.com/medical-statistics-guide.pdf" }
      ],
      quiz: [
        {
          question: "Bemorlar ma'lumotlarini ishonchli saqlash uchun qaysi Excel xususiyatidan foydalanish maqsadga muvofiq?",
          options: ["Parol bilan himoyalash", "Onlayn saqlash", "Makroslar", "Animatsiyalar"],
          answer: 0
        }
      ],
      realWorldExamples: [
        {
          title: "Bemorlar ro'yxati",
          description: "Bemorlar ma'lumotlari va tibbiy tarixini kuzatish"
        },
        {
          title: "Shifokorlar jadvali",
          description: "Klinika ishchi jadvalini rejalashtirish"
        }
      ],
      industry: {
        name: "Tibbiyot va sog'liqni saqlash",
        professionals: ["Tibbiyot administratori", "Tibbiy statistik", "Klinika menejeri"],
        keySkills: ["Bemorlar ma'lumotlarini boshqarish", "Tibbiy hisobotlar", "Resurslarni rejalashtirish"]
      },
      templates: [
        { name: "Klinika jadvali", url: "https://example.com/clinic-schedule-template.xlsx" },
        { name: "Bemorlar ma'lumotlar bazasi", url: "https://example.com/patient-database-template.xlsx" },
        { name: "Tibbiy statistika", url: "https://example.com/medical-statistics-template.xlsx" }
      ]
    }
  ]
}

export default jadvalVideoesData;
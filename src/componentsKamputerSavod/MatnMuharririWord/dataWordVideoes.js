const wordVideoesData = {
    title: "Microsoft Word - Matn Muharriri",
    description: "Microsoft Word dasturi bo'yicha mukammal videodarslar to'plami. Boshlang'ich darajadan professional darajagacha bo'lgan to'liq o'quv kursi.",
    lastUpdate: "2024",
    author: "To'raqulov Asfandiyor Jaxongirovich",
    mainImage: "https://i3.ytimg.com/vi/XQSiXXgKhsw/maxresdefault.jpg",
    mainVideoTutorial: "https://www.youtube.com/embed/XQSiXXgKhsw",
    
    categories: [
      {
        id: 1,
        title: "Asosiy darslar",
        description: "Microsoft Word dasturining asosiy imkoniyatlari va funksiyalarini o'rganish bo'yicha videodarslar."
      },
      {
        id: 2,
        title: "Formatting",
        description: "Matnlarni formatlash, stillar va shablonlar bilan ishlash bo'yicha videodarslar."
      },
      {
        id: 3,
        title: "Jadvallar bilan ishlash",
        description: "Word dasturida jadvallar yaratish va tahrirlash bo'yicha videodarslar."
      },
      {
        id: 4,
        title: "Rasmlar va grafikalar",
        description: "Word dasturida rasmlar, grafikalar va diagrammalar bilan ishlash bo'yicha videodarslar."
      },
      {
        id: 5,
        title: "Pro darajadagi texnikalar",
        description: "Word dasturining professional darajadagi xususiyatlari va imkoniyatlari bo'yicha videodarslar."
      }
    ],
    
    videos: [
      // ASOSIY DARSLAR - KATEGORIYA 1
      {
        id: 1,
        categoryId: 1,
        title: "Microsoft Word bilan tanishish",
        description: "Microsoft Word dasturining asosiy interfeysi, menyular va tugmalar bilan tanishish. Yangi hujjat yaratish va asosiy sozlamalar o'rnatish.",
        videoUrl: "https://www.youtube.com/embed/XQSiXXgKhsw",
        thumbnailUrl: "https://img.youtube.com/vi/XQSiXXgKhsw/hqdefault.jpg",
        duration: "15:20",
        level: "Boshlang'ich",
        tags: ["asosiy", "boshlash", "interfeys", "tanishuv"]
      },
      {
        id: 2,
        categoryId: 1,
        title: "Asosiy tahrirlash amaliyotlari",
        description: "Matnlarni kiritish, nusxalash, ko'chirish va o'chirish. Bekor qilish (Undo) va qaytarish (Redo) funksiyalari bilan ishlash.",
        videoUrl: "https://www.youtube.com/embed/-F-3E8pyjFo",
        thumbnailUrl: "https://img.youtube.com/vi/-F-3E8pyjFo/hqdefault.jpg",
        duration: "12:45",
        level: "Boshlang'ich",
        tags: ["tahrirlash", "nusxalash", "o'chirish", "Undo/Redo"]
      },
      {
        id: 3,
        categoryId: 1,
        title: "Word VBA dasturlash",
        description: "Microsoft Word dasturida VBA dasturlash va avtomatlashtirish bo'yicha chuqurlashtirilgan kurs.",
        videoUrl: "https://www.youtube.com/embed/aZcQc6nW0NI",
        thumbnailUrl: "https://i3.ytimg.com/vi/aZcQc6nW0NI/maxresdefault.jpg",
        duration: "28:15",
        level: "Professional",
        tags: ["makros", "VBA", "avtomatlashtirish", "dasturlash"]
      },
      {
        id: 4,
        categoryId: 1,
        title: "Word dasturida dizayn qilish",
        description: "Professional hujjatlar, broshyuralar va marketingga oid materiallarni Word dasturida dizayn qilish.",
        videoUrl: "https://www.youtube.com/embed/yOhcSMAhISc",
        thumbnailUrl: "https://i3.ytimg.com/vi/yOhcSMAhISc/maxresdefault.jpg",
        duration: "21:10",
        level: "O'rta",
        tags: ["dizayn", "hujjat", "broshyura", "marketing"]
      },
      {
        id: 5,
        categoryId: 1,
        title: "Akademik va ilmiy yozuv",
        description: "Ilmiy maqolalar, dissertatsiyalar va akademik hujjatlarni Word dasturida professional tayyorlash kursi.",
        videoUrl: "https://www.youtube.com/embed/NxGQJulpZjQ",
        thumbnailUrl: "https://i3.ytimg.com/vi/NxGQJulpZjQ/maxresdefault.jpg",
        duration: "24:05",
        level: "Professional",
        tags: ["ilmiy", "maqola", "dissertatsiya", "akademik"]
      },
      
      // FORMATTING - KATEGORIYA 2
      {
        id: 6,
        categoryId: 2,
        title: "Microsoft Word - Matn formatlash",
        description: "Microsoft Word dasturida matnlarni formatlash, shriftlar bilan ishlash va hujjat ko'rinishini sozlash.",
        videoUrl: "https://www.youtube.com/embed/AUlyw_DlRS0",
        thumbnailUrl: "https://i3.ytimg.com/vi/AUlyw_DlRS0/maxresdefault.jpg",
        duration: "17:30",
        level: "Boshlang'ich",
        tags: ["formatting", "shrift", "stil", "matn"]
      },
      {
        id: 7,
        categoryId: 2,
        title: "Word - Paragraf va sahifa sozlamalari",
        description: "Word dasturida paragraf va sahifa sozlamalarini o'rganish, professional hujjatlar yaratish.",
        videoUrl: "https://www.youtube.com/embed/d5SXY0slSak",
        thumbnailUrl: "https://i3.ytimg.com/vi/d5SXY0slSak/maxresdefault.jpg",
        duration: "16:40",
        level: "O'rta",
        tags: ["paragraf", "sahifa", "sozlama"]
      },
      {
        id: 8,
        categoryId: 2,
        title: "Hujjat stillarini yaratish va qo'llash",
        description: "Word'da stillar yaratish, tahrirlash va qo'llash. Mavjud stillarni moslashtirib olish va tez formatlash texnikalari.",
        videoUrl: "https://www.youtube.com/embed/E6enIebdupU",
        thumbnailUrl: "https://i3.ytimg.com/vi/E6enIebdupU/maxresdefault.jpg",
        duration: "22:15",
        level: "O'rta",
        tags: ["stil", "formatlash", "shablon", "Style Gallery"]
      },
      {
        id: 9,
        categoryId: 2,
        title: "Mundarija va havola yaratish",
        description: "Avtomatik mundarija (Table of Contents) yaratish, havolalar va izohlar qo'shish bo'yicha videodars.",
        videoUrl: "https://www.youtube.com/embed/7_HDd2t56dw",
        thumbnailUrl: "https://i3.ytimg.com/vi/7_HDd2t56dw/maxresdefault.jpg",
        duration: "19:25",
        level: "O'rta",
        tags: ["mundarija", "havola", "izoh", "TOC", "Navigation"]
      },
      {
        id: 10,
        categoryId: 2,
        title: "Sahifa raqamlari va kolontitullar",
        description: "Sahifa raqamlarini qo'shish, turli formatlar va joylashuvlar. Yuqori va pastki kolontitullar bilan ishlash.",
        videoUrl: "https://www.youtube.com/embed/d5SXY0slSak",
        thumbnailUrl: "https://i3.ytimg.com/vi/d5SXY0slSak/maxresdefault.jpg",
        duration: "13:35",
        level: "O'rta",
        tags: ["sahifa raqami", "kolontitul", "header", "footer"]
      },
      
      // JADVALLAR BILAN ISHLASH - KATEGORIYA 3
      {
        id: 11,
        categoryId: 3,
        title: "Word - Jadvallar bilan ishlash",
        description: "Microsoft Word dasturida jadvallar yaratish va ular bilan ishlash bo'yicha to'liq kurs.",
        videoUrl: "https://www.youtube.com/embed/vXFr_T8MZxE",
        thumbnailUrl: "https://i3.ytimg.com/vi/vXFr_T8MZxE/maxresdefault.jpg",
        duration: "20:10",
        level: "O'rta",
        tags: ["jadval", "table", "word"]
      },
      {
        id: 12,
        categoryId: 3,
        title: "Word - Jadval stillarini qo'llash",
        description: "Word jadvallarini professional ko'rinishga keltirish va stil berish usullari.",
        videoUrl: "https://www.youtube.com/embed/YWA_bOTFAf0",
        thumbnailUrl: "https://i3.ytimg.com/vi/YWA_bOTFAf0/maxresdefault.jpg",
        duration: "15:50",
        level: "O'rta",
        tags: ["jadval", "stil", "dizayn"]
      },
      {
        id: 13,
        categoryId: 3,
        title: "Jadvallarda hisob-kitob qilish",
        description: "Word jadvallarida formulalar yordamida hisob-kitob qilish. Summalarni hisoblash va boshqa amallarni bajarish.",
        videoUrl: "https://www.youtube.com/embed/Tj8l75cMuW0",
        thumbnailUrl: "https://img.youtube.com/vi/Tj8l75cMuW0/hqdefault.jpg",
        duration: "18:20",
        level: "Professional",
        tags: ["jadval", "formula", "hisob-kitob", "funksiya"]
      },
      {
        id: 14,
        categoryId: 3,
        title: "Jadvallarni Excel bilan integratsiya qilish",
        description: "Word va Excel o'rtasida ma'lumotlarni almashish, jadvallarni bog'lash va dinamik ma'lumotlar yaratish.",
        videoUrl: "https://www.youtube.com/embed/D_Xtx5MIrQE",
        thumbnailUrl: "https://img.youtube.com/vi/D_Xtx5MIrQE/hqdefault.jpg",
        duration: "23:40",
        level: "Professional",
        tags: ["Excel", "integratsiya", "bog'lash", "ma'lumot almashinuvi"]
      },
      {
        id: 15,
        categoryId: 3,
        title: "Jadvallarni murakkab formatlash",
        description: "Jadvallarda katak qo'shish, birlashtirish, ajratish va boshqa murakkab amaliyotlar. Avtomatik formatlash va moslashtirilgan jadvallar yaratish.",
        videoUrl: "https://www.youtube.com/embed/7nkMLpQgzSk",
        thumbnailUrl: "https://img.youtube.com/vi/7nkMLpQgzSk/hqdefault.jpg",
        duration: "21:15",
        level: "Professional",
        tags: ["jadval", "birlashtirish", "ajratish", "murakkab formatlash"]
      },
      
      // RASMLAR VA GRAFIKALAR - KATEGORIYA 4
      {
        id: 16,
        categoryId: 4,
        title: "Word - Rasmlar bilan ishlash",
        description: "Microsoft Word dasturida rasmlar bilan ishlash, formatlash va joylash usullari.",
        videoUrl: "https://www.youtube.com/embed/q1muqN5HE_g",
        thumbnailUrl: "https://i3.ytimg.com/vi/q1muqN5HE_g/maxresdefault.jpg",
        duration: "16:45",
        level: "O'rta",
        tags: ["rasm", "grafika", "formatlash"]
      },
      {
        id: 17,
        categoryId: 4,
        title: "Word - SmartArt va diagrammalar",
        description: "Word dasturida SmartArt va diagrammalar yaratish, ularni tahrirlash usullari.",
        videoUrl: "https://www.youtube.com/embed/kHh4dqRHp90",
        thumbnailUrl: "https://i3.ytimg.com/vi/kHh4dqRHp90/maxresdefault.jpg",
        duration: "19:30",
        level: "O'rta",
        tags: ["SmartArt", "diagram", "grafika"]
      },
      {
        id: 18,
        categoryId: 4,
        title: "Diagrammalar yaratish",
        description: "Word dasturida diagrammalar yaratish, ma'lumotlarni qo'shish va tahrirlash. Turli xil diagram turlari bilan ishlash.",
        videoUrl: "https://www.youtube.com/embed/aQXfDsFl7D4",
        thumbnailUrl: "https://img.youtube.com/vi/aQXfDsFl7D4/hqdefault.jpg",
        duration: "17:55",
        level: "O'rta",
        tags: ["diagram", "chart", "grafik", "statistika"]
      },
      {
        id: 19,
        categoryId: 4,
        title: "WordArt va maxsus effektlar",
        description: "WordArt yordamida badiiy matnlar yaratish, maxsus effektlar va animatsiyalar qo'shish.",
        videoUrl: "https://www.youtube.com/embed/XBTbvQsMxw8",
        thumbnailUrl: "https://img.youtube.com/vi/XBTbvQsMxw8/hqdefault.jpg",
        duration: "14:20",
        level: "O'rta",
        tags: ["WordArt", "effekt", "animatsiya", "badiiy"]
      },
      {
        id: 20,
        categoryId: 4,
        title: "Sahifalarni dizayn qilish va watermark",
        description: "Hujjat sahifalarini dizayn qilish, rangli orqa fonlar, chegaralar va watermark (filigran) qo'shish.",
        videoUrl: "https://www.youtube.com/embed/h6HV8zo8lrI",
        thumbnailUrl: "https://img.youtube.com/vi/h6HV8zo8lrI/hqdefault.jpg",
        duration: "15:40",
        level: "O'rta",
        tags: ["dizayn", "background", "watermark", "chegaralar"]
      },
      
      // PRO DARAJADAGI TEXNIKALAR - KATEGORIYA 5
      {
        id: 21,
        categoryId: 5,
        title: "Word - Professional texnikalar",
        description: "Microsoft Word dasturining professional darajadagi texnika va usullari.",
        videoUrl: "https://www.youtube.com/embed/XcF-nLF6y_U",
        thumbnailUrl: "https://i3.ytimg.com/vi/XcF-nLF6y_U/maxresdefault.jpg",
        duration: "28:15",
        level: "Professional",
        tags: ["pro", "texnika", "usul"]
      },
      {
        id: 22,
        categoryId: 5,
        title: "Word - Mail Merge funksiyasi",
        description: "Word dasturida Mail Merge funksiyasidan foydalanish va ommaviy hujjatlar yaratish.",
        videoUrl: "https://www.youtube.com/embed/Z9X_Th1yuOE",
        thumbnailUrl: "https://i3.ytimg.com/vi/Z9X_Th1yuOE/maxresdefault.jpg",
        duration: "24:30",
        level: "Professional",
        tags: ["mail merge", "ommaviy", "hujjat"]
      },
      {
        id: 23,
        categoryId: 5,
        title: "Formalar va kiritish maydonlari",
        description: "Word dasturida to'ldiriladigan formalar yaratish. Kiritish maydonlari, tumbler tugmalar va boshqa interfeys elementlarini qo'shish.",
        videoUrl: "https://www.youtube.com/embed/0MrgsYswT1c",
        thumbnailUrl: "https://img.youtube.com/vi/0MrgsYswT1c/hqdefault.jpg",
        duration: "26:40",
        level: "Professional",
        tags: ["form", "kiritish", "maydon", "to'ldirish"]
      },
      {
        id: 24,
        categoryId: 5,
        title: "Katta hujjatlarni boshqarish",
        description: "Yuqori hajmdagi murakkab hujjatlarni samarali boshqarish. Bo'limlar, kross-havolalar va hujjat tuzilishini yaratish.",
        videoUrl: "https://www.youtube.com/embed/l3T2X1m0eDc",
        thumbnailUrl: "https://img.youtube.com/vi/l3T2X1m0eDc/hqdefault.jpg",
        duration: "23:10",
        level: "Professional",
        tags: ["katta hujjat", "bo'lim", "structure", "kross-havola"]
      },
      {
        id: 25,
        categoryId: 5,
        title: "Word va boshqa Office dasturlari bilan integratsiya",
        description: "Word'ni Excel, PowerPoint, Outlook va boshqa Office dasturlari bilan birga ishlash. Ma'lumotlarni birlashtirib, murakkab hujjatlar yaratish.",
        videoUrl: "https://www.youtube.com/embed/Qh0J9jLbDCQ",
        thumbnailUrl: "https://img.youtube.com/vi/Qh0J9jLbDCQ/hqdefault.jpg",
        duration: "27:25",
        level: "Professional",
        tags: ["integratsiya", "Office", "Excel", "PowerPoint", "Outlook"]
      },
      
      // QO'SHIMCHA MAXSUS MAVZULAR
      {
        id: 26,
        categoryId: 5,
        title: "Word hujjatlarni himoyalash",
        description: "Hujjatlarni parol bilan himoyalash, tahrirlashni cheklash va xavfsizlik sozlamalarini o'rnatish. Muhim hujjatlarni himoya qilish texnikalari.",
        videoUrl: "https://www.youtube.com/embed/u6VdKW1CPd8",
        thumbnailUrl: "https://img.youtube.com/vi/u6VdKW1CPd8/hqdefault.jpg",
        duration: "20:15",
        level: "Professional",
        tags: ["himoya", "parol", "xavfsizlik", "cheklash"]
      },
      {
        id: 27,
        categoryId: 5,
        title: "Word hujjatlarni hamkorlikda tahrirlash",
        description: "Bir hujjat ustida bir nechta foydalanuvchilar bilan hamkorlik qilish. Online hamkorlik, sharhlash va o'zgarishlarni kuzatib borish.",
        videoUrl: "https://www.youtube.com/embed/LTe6XU0bYNQ",
        thumbnailUrl: "https://img.youtube.com/vi/LTe6XU0bYNQ/hqdefault.jpg",
        duration: "22:30",
        level: "Professional",
        tags: ["hamkorlik", "sharhlash", "online", "o'zgarishlarni kuzatish"]
      },
      {
        id: 28,
        categoryId: 2,
        title: "Ilmiy ishlar va dissertatsiya formatlash",
        description: "Ilmiy maqolalar, kurslar ishlari va dissertatsiyalarni Word'da professional formatlash. Ilmiy standartlarga mos (APA, MLA) hujjatlar tayyorlash.",
        videoUrl: "https://www.youtube.com/embed/VE3fXZ7Nsvs",
        thumbnailUrl: "https://img.youtube.com/vi/VE3fXZ7Nsvs/hqdefault.jpg",
        duration: "29:45",
        level: "Professional",
        tags: ["ilmiy", "dissertatsiya", "APA", "MLA", "akademik"]
      },
      {
        id: 29,
        categoryId: 4,
        title: "3D modellar va SVG grafikalar bilan ishlash",
        description: "Word dasturida 3D modellarni qo'shish va boshqarish. SVG format grafikalar bilan ishlash va ularni tahrirlash.",
        videoUrl: "https://www.youtube.com/embed/5UMD9MDuGVs",
        thumbnailUrl: "https://img.youtube.com/vi/5UMD9MDuGVs/hqdefault.jpg",
        duration: "18:50",
        level: "Professional",
        tags: ["3D", "model", "SVG", "grafika"]
      },
      {
        id: 30,
        categoryId: 1,
        title: "Word 365 yangi xususiyatlari",
        description: "Microsoft Word 365 ning eng so'nggi imkoniyatlari va yangi xususiyatlari bilan tanishish. Cloud xususiyatlari va AI asosidagi vositalar.",
        videoUrl: "https://www.youtube.com/embed/ql5nxK1rBYg",
        thumbnailUrl: "https://i3.ytimg.com/vi/ql5nxK1rBYg/maxresdefault.jpg",
        duration: "25:20",
        level: "O'rta",
        tags: ["Word 365", "yangiliklar", "cloud", "AI", "Editor"]
      },
      
      // QO'SHIMCHA FOYDALI DARSLAR
      {
        id: 31,
        categoryId: 3,
        title: "Keng qamrovli jadvallar yaratish",
        description: "Murakkab jadvallar yaratish, bir nechta jadvallarni birlashtirish va professional ko'rinishga keltirish uchun qadamlar.",
        videoUrl: "https://www.youtube.com/embed/8Ev6ltHkRuw",
        thumbnailUrl: "https://img.youtube.com/vi/8Ev6ltHkRuw/hqdefault.jpg",
        duration: "19:40",
        level: "Professional",
        tags: ["jadval", "murakkab", "birlashtirish", "professional"]
      },
      {
        id: 32,
        categoryId: 1,
        title: "Word dasturida effektiv ishlash sirlari",
        description: "Word dasturida ishlash samaradorligini oshirish bo'yicha eng yaxshi amaliyotlar va ko'p ishlatilmaydigan foydali xususiyatlar.",
        videoUrl: "https://www.youtube.com/embed/uSHUa2tljRs",
        thumbnailUrl: "https://i3.ytimg.com/vi/uSHUa2tljRs/maxresdefault.jpg",
        duration: "23:15",
        level: "O'rta",
        tags: ["samaradorlik", "amaliyot", "sirlar", "maslahatlar"]
      },
      {
        id: 33,
        categoryId: 4,
        title: "Infografikalar va vizual elementlar",
        description: "Word dasturida professional infografikalar, blok-sxemalar va vizual elementlar yaratish usullari.",
        videoUrl: "https://www.youtube.com/embed/9H_yEtSbXYw",
        thumbnailUrl: "https://img.youtube.com/vi/9H_yEtSbXYw/hqdefault.jpg",
        duration: "26:30",
        level: "Professional",
        tags: ["infografika", "vizual", "blok-sxema", "dizayn"]
      },
      {
        id: 34,
        categoryId: 2,
        title: "Word stillarni boshqarish va sozlash",
        description: "Word stillarni moslash, yangi stillar yaratish va butun hujjat ko'rinishini boshqarish.",
        videoUrl: "https://www.youtube.com/embed/Pz0YRqBHSXM",
        thumbnailUrl: "https://img.youtube.com/vi/Pz0YRqBHSXM/hqdefault.jpg",
        duration: "21:10",
        level: "O'rta",
        tags: ["stil", "moslash", "hujjat", "ko'rinish"]
      },
      {
        id: 35,
        categoryId: 5,
        title: "Murakkab bibliografia va izohlar",
        description: "Ilmiy hujjatlar uchun avtomatik bibliografiya, havolalar va izohlarni yaratish va boshqarish usullari.",
        videoUrl: "https://www.youtube.com/embed/UYn_jtYY3_8",
        thumbnailUrl: "https://img.youtube.com/vi/UYn_jtYY3_8/hqdefault.jpg",
        duration: "24:05",
        level: "Professional",
        tags: ["bibliografia", "izoh", "ilmiy", "havola"]
      }
    ],
    
    popularVideos: [1, 6, 11, 16, 21, 28, 32], // eng mashhur videolarning ID raqamlari
    
    recommendedCourses: [
      {
        id: 1,
        title: "Microsoft Office to'liq kursi",
        description: "Word, Excel, PowerPoint va boshqa Microsoft Office dasturlarini to'liq o'rganish kursi.",
        link: "https://example.com/office-course",
        image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "Professional hujjatlar tayyorlash",
        description: "Biznes hujjatlar, rezyume va professional xatlarni tayyorlash bo'yicha amaliy kurs.",
        link: "https://example.com/professional-docs",
        image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        title: "Word VBA dasturlash",
        description: "Microsoft Word dasturida VBA dasturlash va avtomatlashtirish bo'yicha chuqurlashtirilgan kurs.",
        link: "https://example.com/word-vba",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 4,
        title: "Word dasturida dizayn qilish",
        description: "Professional hujjatlar, broshyuralar va marketingga oid materiallarni Word dasturida dizayn qilish.",
        link: "https://example.com/word-design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 5,
        title: "Akademik va ilmiy yozuv",
        description: "Ilmiy maqolalar, dissertatsiyalar va akademik hujjatlarni Word dasturida professional tayyorlash kursi.",
        link: "https://example.com/academic-writing",
        image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ],
    
    // Boshqa kalit ma'lumotlar
    tipsTricks: [
      "Tez tahrirlash uchun Ctrl+Z (bekor qilish) va Ctrl+Y (qaytarish) tugmalaridan foydalaning",
      "Mundarija avtomatik yangilanishi uchun F9 tugmasini bosing",
      "Alt+= tugmalarini bosib, jadvallarda hisob-kitob formulalarini oson kiriting",
      "Katta hujjatlarda Alt+Ctrl+Home va Alt+Ctrl+End bilan tez boshiga/oxiriga o'ting",
      "Foizlarni avtomatik hisoblaydigan jadvallarni yaratish uchun formula maydonidan foydalaning",
      "Stillardan foydalanish matnlarni bir xil formatlash va keyinchalik oson o'zgartirish imkonini beradi",
      "Tez-tez ishlatadigan matnlar uchun AutoCorrect funksiyasidan foydalaning",
      "Tasvirlarni Word dokumentlariga joylashtirishda In Line with Text emas, balki Wrap Text variantidan foydalanish tavsiya etiladi"
    ],
    
    commonIssues: [
      {
        problem: "Formatlash buzilishi",
        solution: "Yangi paragraf boshlashdan oldin Enter tugmasini ikki marta bosmasdan, faqat bir marta bosing.",
        prevention: "Stil va formatlash uchun Word stillaridan foydalaning."
      },
      {
        problem: "Jadval qatorlari noto'g'ri joylashishi",
        solution: "Jadval xususiyatlarida Auto Fit funksiyasidan foydalaning.",
        prevention: "Jadval yaratishdan oldin sahifa chegaralarini va jadval o'lchamlarini oldindan rejalashtiring."
      },
      {
        problem: "Rasmlar ko'chirilganda matn buzilishi",
        solution: "Rasmni tanlang va Text Wrapping opsiyasidan 'In line with text' emas, balki 'Tight' yoki 'Square' ni tanlang.",
        prevention: "Rasmlarni joylashtirishda Text Wrapping ni to'g'ri o'rnating."
      },
      {
        problem: "Avtomatik raqamlash buzilishi",
        solution: "Kursorni buzilgan joyga qo'ying va Numbering tugmasini ikki marta bosing (o'chirish va qayta qo'llash).",
        prevention: "Raqamlash uchun stillardan foydalaning va List-ni yangi paragrafdan boshlamang."
      }
    ],
    
    faq: [
      {
        question: "Word dasturining qaysi versiyasi eng yaxshi?",
        answer: "Microsoft Word 365 eng so'nggi versiya bo'lib, cloud xizmatlar va avtomatik yangilanishlarni o'z ichiga oladi. Lekin Microsoft Word 2019 ham barqaror versiya hisoblanadi."
      },
      {
        question: "Katta hujjatlar bilan ishlashda qanday maslahatlar bor?",
        answer: "Katta hujjatlarda ishlashda hujjatni bo'limlarga ajrating, Navigatsiya panelidan foydalaning, hujjat ko'rinishini 'Outline' rejimida ko'rib chiqing va dokument tuzilmasini tekshirib boring."
      },
      {
        question: "Word dasturida PDF fayllarni tahrirlash mumkinmi?",
        answer: "Ha, Word dasturida PDF fayllarni ochib tahrirlash mumkin, ammo murakkab formatlashga ega PDF fayllar ba'zan to'g'ri ochilmasligi mumkin. Word dasturi PDF ni ochgandan keyin qayta saqlash orqali tahrirlashingiz mumkin."
      },
      {
        question: "Word stillarini qanday yaratish va ularga o'zgartirishlar kiritish mumkin?",
        answer: "Stil yaratish uchun matn formatlashni yakunlagandan so'ng, 'Styles' panelida 'Create a Style' tugmasini bosib, nom bering. Mavjud stilga o'zgartirish kiritish uchun stil ustida sichqoncha o'ng tugmasini bosib 'Modify' ni tanlang."
      },
      {
        question: "MacOS va Windows operatsion tizimlarida Word dasturlari orasida qanday farqlar bor?",
        answer: "Asosiy imkoniyatlar bir xil bo'lsa-da, interfeys va klaviatura shortkutlarida farqlar bor. MacOS da Command tugmasi Windows dagi Ctrl tugmasi o'rnida ishlatiladi. Shuningdek, ba'zi maxsus funksiyalar Windows versiyasida ko'proq bo'lishi mumkin."
      }
    ],
    
    resources: [
      {
        type: "Kitob",
        title: "Microsoft Word 2019 & 365 bo'yicha to'liq qo'llanma",
        link: "https://example.com/book-word-2019",
        description: "Word 2019 va 365 ning barcha xususiyatlari haqida batafsil ma'lumot beradigan qo'llanma."
      },
      {
        type: "Video kurs",
        title: "Word dasturida professional matn muharrirlash",
        link: "https://example.com/word-editing-course",
        description: "Matnlarni professional tahrirlash, hujjatlar tuzish va katta loyihalar ustida ishlash bo'yicha video kurs."
      },
      {
        type: "Veb-sayt",
        title: "Microsoft Word yordam markazi",
        link: "https://support.microsoft.com/word",
        description: "Microsoft tomonidan taqdim etilgan rasmiy yordam markazi, turli savollar va muammolar uchun yechimlar."
      },
      {
        type: "Shablon to'plami",
        title: "Professional hujjat shablonlari",
        link: "https://example.com/word-templates",
        description: "500 dan ortiq professional ishlab chiqilgan shablonlar to'plami."
      }
    ],
    
    certification: {
      title: "Microsoft Word sertifikatsiyasi",
      description: "Microsoft Office Specialist (MOS) Word sertifikatini olish bo'yicha ma'lumot",
      levels: [
        {
          name: "Microsoft Word Associate",
          description: "Asosiy Word funktsiyalari va imkoniyatlarini o'z ichiga oladi",
          link: "https://example.com/mos-word-associate"
        },
        {
          name: "Microsoft Word Expert",
          description: "Murakkab hujjatlar yaratish, avtomat seriyalar, formalar va keng qamrovli hujjatlarni boshqarish",
          link: "https://example.com/mos-word-expert"
        }
      ],
      benefits: [
        "Ish beruvchilarga malaka darajangizni isbotlash",
        "Resume va LinkedIn profilingizni kuchaytirish",
        "Word dasturining professional darajadagi bilimlarini olish",
        "Raqobatbardoshlikni oshirish",
        "Ish imkoniyatlarini kengaytirish"
      ],
      prepMaterials: [
        {
          title: "MOS Word sertifikati uchun tayyorgarlik kursi",
          link: "https://example.com/mos-prep"
        },
        {
          title: "Word sertifikatsiyasi bo'yicha amaliy mashqlar",
          link: "https://example.com/word-practice"
        }
      ]
    }
};

export default wordVideoesData;
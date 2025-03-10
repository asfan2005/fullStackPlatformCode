export const powerPointData = [
    {
      id: 1,
      section: "PowerPoint asoslari",
      title: "Microsoft PowerPoint bilan tanishish",
      description: "Microsoft PowerPoint - bu taqdimotlar yaratish uchun eng mashhur dastur",
      purpose: "Professional taqdimotlar yaratish",
      latestVersion: "Microsoft PowerPoint 2021",
      platforms: ["Windows", "macOS", "Web versiya", "Mobile"],
      steps: [
        {
          step: 1,
          action: "Yangi taqdimot yaratish",
          details: "PowerPoint dasturini ochib, yangi taqdimot yarating",
          note: "Tayyor shablonlardan foydalanishingiz mumkin"
        },
        {
          step: 2,
          action: "Slaydlarni qo'shish",
          details: "Yangi slaydlar qo'shish va ularni tartibga solish",
          layouts: [
            "Sarlavha slayd",
            "Matn bilan slayd",
            "Rasmli slayd"
          ]
        }
      ],
      tips: [
        "Har bir slaydda kam matn ishlatish",
        "Kontrast ranglardan foydalanish",
        "Aniq va o'qilishi oson shriftlarni tanlash"
      ],
      formats: [
        {
          format: "PPTX",
          description: "Microsoft PowerPoint 2007 va undan keyingi versiyalar uchun"
        },
        {
          format: "PDF",
          description: "Universal ko'rish formati"
        }
      ],
      systemRequirements: {
        os: "Windows 10 yoki macOS",
        ram: "4GB",
        storage: "4GB bo'sh joy"
      }
    },
    {
      id: 2,
      section: "Umumiy ma'lumot",
      title: "PowerPoint haqida qisqacha",
      description: "PowerPoint — Microsoft tomonidan ishlab chiqilgan dastur bo'lib, slaydlar orqali taqdimotlar tayyorlash uchun mo'ljallangan. U matn, rasm, video, animatsiya va grafiklardan foydalanish imkonini beradi.",
      purpose: "Ma'lumotlarni vizual tarzda taqdim etish",
      latestVersion: "Microsoft 365 (2025-yil fevral holatiga ko'ra)",
      platforms: ["Windows", "macOS", "iOS", "Android", "Veb-versiya"]
    },
    {
      id: 3,
      section: "Slayd yaratish jarayoni",
      title: "PowerPointda slaydni 0 dan qanday tayyorlash kerak?",
      steps: [
        {
          step: 1,
          action: "Dasturni ishga tushirish",
          details: "Kompyuteringizda PowerPoint dasturini oching yoki Microsoft 365 veb-saytiga kirib, 'PowerPoint' ni tanlang.",
          note: "Agar dastur o'rnatilmagan bo'lsa, Microsoft veb-versiyasidan bepul foydalanish mumkin."
        },
        {
          step: 2,
          action: "Yangi taqdimot boshlash",
          details: "'File' menyusidan 'New' ni tanlang. Ochilgan oynada 'Blank Presentation' (bo'sh taqdimot) ni bosing yoki mavjud shablonlardan birini tanlang.",
          note: "Bo'sh taqdimot 0 dan boshlash uchun eng yaxshi tanlovdir."
        },
        {
          step: 3,
          action: "Birinchi slaydni qo'shish",
          details: "Dastur ochilganda birinchi slayd avtomatik paydo bo'ladi (ko'pincha 'Title Slide' tartibi). Agar qo'shimcha slayd qo'shmoqchi bo'lsangiz, 'Home' menyusida 'New Slide' tugmasini bosing va kerakli tartibni tanlang (masalan, 'Title and Content', 'Two Content').",
          layouts: [
            "Title Slide — Sarlavha va subtitr uchun",
            "Title and Content — Matn yoki media uchun",
            "Section Header — Bo'lim sarlavhasi uchun",
            "Blank — To'liq bo'sh slayd"
          ]
        },
        {
          step: 4,
          action: "Slaydga sarlavha kiritish",
          details: "Birinchi slaydning yuqori qismidagi 'Click to add title' yozuvini bosing va taqdimotingizning asosiy sarlavhasini kiriting (masalan, 'Mening Taqdimotim'). Agar kerak bo'lsa, pastdagi 'Click to add subtitle' qismiga qo'shimcha ma'lumot qo'shing.",
          tip: "Sarlavhani qisqa va aniq tuting (5-7 so'zdan oshmasin)."
        },
        {
          step: 5,
          action: "Matn qo'shish",
          details: "'Home' yoki 'Insert' menyusidan 'Text Box' ni tanlang va slaydda kerakli joyga bosing. Matnni kiriting, so'ng shrift o'lchami, rangi va uslubini 'Home' menyusidagi vositalar yordamida sozlang.",
          formattingOptions: [
            "Font: Arial, Calibri, Times New Roman",
            "Size: 12-44 pt (sarlavha uchun 24-44, matn uchun 18-24)",
            "Bold, Italic, Underline",
            "Alignment: Chap, o'ng, markaz"
          ]
        },
        {
          step: 6,
          action: "Rasm yoki media qo'shish",
          details: "'Insert' menyusiga o'ting. 'Pictures' ni tanlab kompyuterdan rasm yuklang yoki 'Online Pictures' orqali internetdan qidiring. Video uchun 'Video' ni tanlang va faylni yuklang.",
          tip: "Rasm sifati 300 DPI dan kam bo'lmasin, slaydni og'irlashtirmaslik uchun hajmi 2 MB dan oshmasin."
        },
        {
          step: 7,
          action: "Dizayn tanlash",
          details: "'Design' menyusidan mavjud temalardan birini tanlang yoki 'Customize' bilan ranglar, shriftlar va fonni o'zgartiring. Masalan, 'Variants' orqali rang sxemasini moslashtirish mumkin.",
          note: "Professional ko'rinish uchun bir xil rang palitrasidan foydalaning."
        },
        {
          step: 8,
          action: "Animatsiya qo'shish",
          details: "'Animations' menyusidan matn yoki obyektingizni tanlang va effekt qo'shing ('Fade', 'Fly In', 'Wipe'). 'Animation Pane' yordamida tartib va vaqtni sozlang.",
          types: [
            "Entrance — Kirish effektlari",
            "Emphasis — Diqqatni jalb qilish",
            "Exit — Chiqish effektlari"
          ]
        },
        {
          step: 9,
          action: "Slayd o'tishlarini qo'shish",
          details: "'Transitions' menyusida slaydlar o'rtasidagi o'tish effektini tanlang (masalan, 'Push', 'Fade'). 'Duration' bilan vaqtni sozlang (masalan, 1-2 soniya).",
          tip: "Hamma slaydga bir xil effekt qo'yish bir Hil ko'rinish beradi."
        },
        {
          step: 10,
          action: "Taqdimotni sinash va saqlash",
          details: "'Slide Show' menyusidan 'From Beginning' ni bosing va taqdimotni tekshiring. Keyin 'File' → 'Save As' ni tanlab, faylni PPTX yoki PDF sifatida saqlang.",
          saveOptions: [
            "PPTX — Tahrirlash uchun",
            "PDF — Faqat ko'rish uchun",
            "PPSX — Avtomatik ishga tushadigan slayd-shou"
          ]
        }
      ]
    },
    {
      id: 4,
      section: "Foydali maslahatlar",
      title: "Mukammal slayd uchun tavsiyalar",
      tips: [
        "Bir slaydda 6-8 qator matndan oshmang.",
        "Ranglar kontrasti yuqori bo'lsin (masalan, qora fonda oq matn).",
        "Animatsiyalarni oshirib yubormang (2-3 ta yetarli).",
        "Slaydlar sonini 10-15 ta bilan cheklang.",
        "Oxirgi slaydda 'Rahmat' yoki 'Savollar?' qo'shing."
      ]
    },
    {
      id: 5,
      section: "Texnik ma'lumotlar",
      title: "Fayl formatlari va talablar",
      formats: [
        { format: "PPTX", description: "Asosiy zamonaviy format, XML asosida" },
        { format: "PPT", description: "Eski versiyalar uchun" },
        { format: "PPSX", description: "Avtomatik taqdimot uchun" }
      ],
      systemRequirements: {
        os: "Windows 10/11, macOS 12+, Android 9+, iOS 15+",
        ram: "Kamida 4 GB",
        storage: "2 GB bo'sh joy"
      }
    },
    {
      id: 6,
      section: "Video bilan ishlash",
      title: "PowerPointga video qo'shish va tahrirlash",
      description: "PowerPoint dasturida videolar bilan ishlash bo'yicha to'liq qo'llanma",
      steps: [
        {
          step: 1,
          action: "Videoni qo'shish usullari",
          details: "Insert menyusidan 'Video' tugmasini bosing va quyidagi variantlardan birini tanlang:",
          options: [
            "This Device - kompyuterdan video yuklash",
            "Online Video - YouTube va boshqa saytlardan video qo'shish",
            "Screen Recording - ekranni yozib olish"
          ]
        },
        {
          step: 2,
          action: "Videoni formatlash",
          details: "Video tanlangandan so'ng 'Video Format' va 'Playback' menyulari paydo bo'ladi",
          settings: [
            "Hajmini o'zgartirish",
            "Ramka qo'shish",
            "Video effektlarini qo'llash",
            "Yorqinlik va kontrastni sozlash"
          ]
        },
        {
          step: 3,
          action: "Video parametrlarini sozlash",
          details: "'Playback' menyusida quyidagi sozlamalarni o'zgartirish mumkin:",
          playbackOptions: [
            "Start: Automatically/On Click",
            "Video qismini kesish (Trim Video)",
            "Tovush balandligini sozlash",
            "Video tezligini o'zgartirish"
          ]
        },
        {
          step: 4,
          action: "Videoni slaydga joylashtirish",
          details: "Videoni slaydda to'g'ri joylashtirish uchun qo'llaniladigan usullar:",
          placementTips: [
            "Videoni markazga joylashtirish",
            "Matn bilan birgalikda joylashtirish",
            "Picture-in-Picture effektini yaratish",
            "Video hajmini slayd o'lchamiga moslashtirish"
          ]
        }
      ],
      recommendations: [
        "Video hajmi 50MB dan oshmasligi kerak",
        "MP4 formatidagi videolardan foydalaning",
        "1080p yoki 720p sifatidagi videolarni tanlang",
        "Videoning davomiyligi 2-3 daqiqadan oshmasin"
      ],
      troubleshooting: [
        "Video ishlamasa kodeklar o'rnatilganligini tekshiring",
        "Katta videolarni siqish kerak",
        "Internet videolari uchun tezkor internet kerak",
        "Video formati PowerPoint versiyasiga mos kelishi kerak"
      ]
    },
    {
      id: 7,
      section: "PowerPoint maxsus funksiyalari",
      title: "Maxsus funksiyalar va ulardan foydalanish",
      description: "PowerPoint dasturining ilg'or funksiyalari va ulardan foydalanish bo'yicha qo'llanma",
      features: [
        {
          name: "SmartArt",
          description: "Murakkab diagrammalar va sxemalarni yaratish vositasi",
          examples: [
            "Tashkiliy tuzilmalar",
            "Jarayon diagrammalari",
            "Ierarxik sxemalar"
          ]
        },
        {
          name: "Morph o'tishi",
          description: "Slaydlar orasida silliq o'tishlarni yaratish",
          useCases: [
            "3D animatsiyalar",
            "Obyektlarning harakatlanishi",
            "Zoom effektlari"
          ]
        }
      ],
      advancedTips: [
        "PowerPoint VBA dasturlashdan foydalanish",
        "Makroslar yaratish",
        "Maxsus animatsiya effektlarini yaratish"
      ]
    },
    {
      id: 8,
      section: "PowerPoint dizayn qoidalari",
      title: "Professional dizayn qoidalari",
      principles: [
        {
          rule: "60-30-10 qoidasi",
          description: "60% asosiy rang, 30% ikkilamchi rang, 10% aksent rang"
        },
        {
          rule: "Bo'shliqdan foydalanish",
          description: "Elementlar orasida yetarli bo'shliq qoldirish"
        },
        {
          rule: "Tipografika",
          fonts: [
            "Sarlavha uchun: Arial, Helvetica",
            "Matn uchun: Calibri, Georgia"
          ],
          sizes: {
            title: "32-44 pt",
            subtitle: "28-32 pt",
            bodyText: "18-24 pt"
          }
        }
      ],
      colorSchemes: [
        {
          name: "Klassik",
          colors: ["#000000", "#FFFFFF", "#0077CC"]
        },
        {
          name: "Zamonaviy",
          colors: ["#2C3E50", "#ECF0F1", "#E74C3C"]
        }
      ]
    },
    {
      id: 9,
      section: "Taqdimot strategiyalari",
      title: "Samarali taqdimot strategiyalari",
      strategies: [
        {
          type: "Hikoya uslubi",
          description: "Ma'lumotlarni hikoya shaklida taqdim etish",
          steps: [
            "Muammoni aniqlash",
            "Yechimni taklif qilish",
            "Natijalarni ko'rsatish"
          ]
        },
        {
          type: "Vizual ierarxiya",
          description: "Muhim ma'lumotlarni vizual ajratib ko'rsatish",
          techniques: [
            "Rang kontrastidan foydalanish",
            "Hajm farqlarini qo'llash",
            "Joylashuvni strategik tanlash"
          ]
        }
      ],
      presentationTypes: [
        {
          type: "Biznes taqdimot",
          focus: ["Aniq ma'lumotlar", "Grafiklar", "ROI ko'rsatkichlari"]
        },
        {
          type: "Ta'lim taqdimoti",
          focus: ["Interaktiv elementlar", "Vizual misollar", "Amaliy mashqlar"]
        }
      ]
    }
  ];
  

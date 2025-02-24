export const computerSecurityData = [
    {
      id: 1,
      section: "Umumiy ma'lumot",
      title: "Kompyuter xavfsizligi nima?",
      description: "Kompyuter xavfsizligi — kompyuterlar, tarmoqlar, dasturlar va ma'lumotlarni ruxsatsiz kirish, zararli dasturlar, ma'lumot yo'qotilishi yoki zararlanishdan himoyalash jarayoni.",
      purpose: "Maxfiy ma'lumotlarni saqlash, tizimning barqaror ishlashini ta'minlash",
      importance: "2025-yilda kiberjinoyatlar yillik zarari 10 trillion dollardan oshdi."
    },
    {
      id: 2,
      section: "Asosiy xavf-xatarlar",
      title: "Kompyuter xavfsizligiga tahdidlar",
      threats: [
        {
          threat: "Viruslar",
          description: "Tizimga zarar yetkazuvchi va o'zini ko'paytiruvchi zararli kodlar."
        },
        {
          threat: "Fishing (Phishing)",
          description: "Foydalanuvchilarni aldab, shaxsiy ma'lumotlarni olish usuli."
        },
        {
          threat: "Ransomware",
          description: "Ma'lumotlarni shifrlab, foydalanuvchidan pul talab qiluvchi dastur."
        },
        {
          threat: "DDoS hujumlari",
          description: "Tarmoqni ortiqcha yuk bilan to'xtatib qo'yish."
        },
        {
          threat: "Spyware",
          description: "Foydalanuvchi faoliyatini yashirincha kuzatuvchi dastur."
        }
      ]
    },
    {
      id: 3,
      section: "Himoya usullari",
      title: "Kompyuterni qanday himoyalash mumkin?",
      methods: [
        {
          method: "Antivirus dasturlari",
          details: "Viruslar va zararli dasturlarni aniqlash va yo'q qilish uchun ishlatiladi.",
          examples: ["Kaspersky", "Bitdefender", "Windows Defender"]
        },
        {
          method: "Parollar",
          details: "Kuchli va noyob parollar qo'yish (kamida 12 belgi, raqam va belgilar bilan).",
          tip: "Parol menejerlaridan foydalaning (masalan, LastPass)."
        },
        {
          method: "Ikki faktorli autentifikatsiya (2FA)",
          details: "Paroldan tashqari SMS yoki autentifikator ilova orqali tasdiqlash.",
          examples: ["Google Authenticator", "Microsoft Authenticator"]
        },
        {
          method: "Yangilanishlar",
          details: "Operatsion tizim va dasturlarni doimiy yangilab turish xavfsizlik teshiklarini yopadi."
        },
        {
          method: "Firewall",
          details: "Ruxsatsiz kirishni bloklaydigan tarmoq xavfsizlik devori.",
          examples: ["Windows Firewall", "pfSense"]
        },
        {
          method: "Xavfsiz browsing",
          details: "HTTPS protokolidan foydalanish, xavfsiz brauzer kengaytmalari o'rnatish.",
          examples: ["HTTPS Everywhere", "uBlock Origin", "Privacy Badger"]
        },
        {
          method: "Ma'lumotlarni shifrlash",
          details: "Muhim fayllarni shifrlash orqali himoyalash.",
          examples: ["VeraCrypt", "BitLocker", "FileVault"]
        }
      ]
    },
    {
      id: 4,
      section: "Xavfsizlikni ta'minlash jarayoni",
      title: "Kompyuter xavfsizligini qanday sozlash kerak?",
      steps: [
        {
          step: 1,
          action: "Xavfni baholash",
          details: "Qaysi ma'lumotlar muhimligini aniqlang (shaxsiy hujjatlar, bank ma'lumotlari)."
        },
        {
          step: 2,
          action: "Antivirus o'rnatish",
          details: "Ishonchli antivirus dasturni yuklab oling, o'rnating va skanerlashni boshlang."
        },
        {
          step: 3,
          action: "Parollarni yangilash",
          details: "Barcha hisoblaringiz uchun yangi, murakkab parollar yarating."
        },
        {
          step: 4,
          action: "Tarmoqni himoyalash",
          details: "Wi-Fi parolini o'zgartiring (WPA3 standartidan foydalaning) va VPN ishlatishni boshlang."
        },
        {
          step: 5,
          action: "Ma'lumotlarni zaxiralash",
          details: "Muhim fayllarni tashqi disk yoki bulutli xizmatga (Google Drive, Dropbox) saqlang."
        },
        {
          step: 6,
          action: "Doimiy monitoring",
          details: "Tizimni har hafta skanerlang va shubhali faoliyatni tekshiring."
        }
      ]
    },
    {
      id: 5,
      section: "Asosiy vositalar",
      title: "Kompyuter xavfsizligi uchun dasturlar",
      tools: [
        { tool: "Antivirus", examples: ["Norton", "McAfee", "ESET"] },
        { tool: "VPN", examples: ["NordVPN", "ExpressVPN", "Surfshark"] },
        { tool: "Parol menejeri", examples: ["1Password", "Dashlane", "Bitwarden"] },
        { tool: "Zaxira vositalari", examples: ["Acronis", "Carbonite", "EaseUS"] },
        { tool: "Tarmoq monitoringi", examples: ["Wireshark", "GlassWire"] },
        { tool: "Malware aniqlash", examples: ["Malwarebytes", "HitmanPro", "AdwCleaner"] },
        { tool: "Fayl shifrlash", examples: ["7-Zip", "PGP", "AES Crypt"] },
        { tool: "Xavfsiz messaging", examples: ["Signal", "Telegram", "WhatsApp"] }
      ]
    },
    {
      id: 6,
      section: "Xavfsizlik texnologiyalari",
      title: "Zamonaviy xavfsizlik texnologiyalari",
      technologies: [
        { tech: "Shifrlash", description: "Ma'lumotlarni maxfiylashtirish (AES-256, RSA)." },
        { tech: "Biometrika", description: "Barmoq izi yoki yuz tanish orqali kirish." },
        { tech: "AI asosidagi monitoring", description: "Xavfli faoliyatni avtomatik aniqlash." },
        { tech: "Blockchain", description: "Ma'lumotlarning o'zgarmasligini ta'minlash." }
      ]
    },
    {
      id: 7,
      section: "Foydali maslahatlar",
      title: "Kompyuter xavfsizligini yaxshilash uchun tavsiyalar",
      tips: [
        "Noma'lum manbalardan fayl yoki havolalarni ochmang.",
        "Elektron pochtadagi shubhali xatlarni tekshirmasdan bosmang.",
        "Tarmoqqa ulanganda umumiy Wi-Fi dan saqlaning yoki VPN ishlating.",
        "Dasturlarni faqat rasmiy saytlardan yuklab oling.",
        "Har 3-6 oyda parollarni yangilab turing."
      ]
    },
    {
      id: 8,
      section: "Statistika va faktlar",
      title: "Kompyuter xavfsizligi haqida qiziqarli ma'lumotlar",
      facts: [
        "2025-yilda har 11 soniyada bir marta ransomware hujumi sodir bo'lmoqda.",
        "Kiberjinoyatlarning 43% kichik bizneslarga qaratilgan.",
        "Foydalanuvchilarning 91% oddiy parollardan (masalan, '123456') foydalanadi.",
        "Xavfsizlik xarajatlari 2025-yilda global miqyosda 200 milliard dollarni oshdi."
      ]
    },
    {
      id: 9,
      section: "Xavfsizlik standartlari",
      title: "Xalqaro xavfsizlik me'yorlari",
      standards: [
        { standard: "ISO/IEC 27001", description: "Axborot xavfsizligini boshqarish tizimi." },
        { standard: "GDPR", description: "Evropa Ittifoqidagi ma'lumotlar himoyasi qoidalari." },
        { standard: "NIST", description: "AQSh xavfsizlik standartlari." }
      ]
    },
    {
      id: 10,
      section: "Zamonaviy tahdidlar",
      title: "2024-yildagi yangi xavf-xatarlar",
      threats: [
        {
          threat: "AI-asosidagi fishing",
          description: "Sun'iy intellekt yordamida yaratilgan ishonchli ko'rinishdagi fishing xatlar."
        },
        {
          threat: "IoT qurilmalar xavfi",
          description: "Aqlli uy qurilmalari orqali tarmoqqa kirish imkoniyati."
        },
        {
          threat: "Deep fake tahdidlar",
          description: "Soxta video va audio kontentlar orqali aldash."
        }
      ]
    },
    {
      id: 11,
      section: "Korporativ xavfsizlik",
      title: "Tashkilotlar uchun xavfsizlik choralari",
      measures: [
        {
          measure: "Zero Trust arxitekturasi",
          description: "Har bir so'rov va foydalanuvchini tekshirish tizimi."
        },
        {
          measure: "Xodimlarni o'qitish",
          description: "Muntazam xavfsizlik treninglari va simulyatsiyalar."
        },
        {
          measure: "Incident Response Plan",
          description: "Xavfsizlik hodisalariga javob berish rejasi."
        },
        {
          measure: "Ma'lumotlar auditi",
          description: "Muntazam ravishda ma'lumotlar xavfsizligini tekshirish va baholash."
        },
        {
          measure: "Ruxsat boshqaruvi",
          description: "Xodimlar uchun ma'lumotlarga kirish huquqlarini boshqarish tizimi."
        },
        {
          measure: "Tarmoq segmentatsiyasi",
          description: "Tarmoqni alohida qismlarga bo'lib, xavfsizlikni oshirish."
        }
      ],
      bestPractices: [
        "Muntazam zaxira nusxa olish",
        "Xavfsizlik siyosatini yangilab turish",
        "Tashqi audit o'tkazish",
        "Xodimlar uchun qo'llanmalar yaratish"
      ]
    },
    {
      id: 12,
      section: "Mobil xavfsizlik",
      title: "Mobil qurilmalar xavfsizligi",
      mobileSecurity: [
        {
          aspect: "Ilova xavfsizligi",
          tips: [
            "Faqat rasmiy do'konlardan o'rnatish",
            "Ilova ruxsatlarini tekshirish",
            "Muntazam yangilash"
          ],
          recommendations: [
            "Antivirus ilovalarni o'rnatish",
            "Ilova shifrlashni yoqish",
            "Foydalanilmagan ilovalarni o'chirish"
          ]
        },
        {
          aspect: "Mobil tarmoq xavfsizligi",
          tips: [
            "Mobil VPN ishlatish",
            "Bluetooth va Wi-Fi ni kerak bo'lganda yoqish",
            "NFC xavfsizligini ta'minlash"
          ],
          securityMeasures: [
            "2FA yoqish",
            "Biometrik himoyadan foydalanish",
            "Qurilmani kuzatish tizimini yoqish"
          ]
        },
        {
          aspect: "Ma'lumotlar xavfsizligi",
          practices: [
            "Muntazam zaxira nusxa olish",
            "Muhim ma'lumotlarni shifrlash",
            "Bulutli xizmatlarda xavfsiz saqlash"
          ],
          dataProtection: [
            "Maxfiy fayllarni himoyalash",
            "Xavfsiz parollar o'rnatish",
            "Ma'lumotlarni remote o'chirish funksiyasini sozlash"
          ]
        }
      ],
      securityTools: [
        {
          category: "Antivirus ilovalar",
          examples: ["Kaspersky Mobile", "Bitdefender Mobile", "Norton Mobile"]
        },
        {
          category: "VPN xizmatlari",
          examples: ["ExpressVPN", "NordVPN", "ProtonVPN"]
        },
        {
          category: "Parol menejerlari",
          examples: ["LastPass", "1Password", "Bitwarden"]
        }
      ]
    }
  ];
  
  // Massivni konsolda ko'rish uchun
  console.log(computerSecurityData);
export const bluetoothTechnologies = [
    {
      version: "Bluetooth 1.0",
      releaseDate: "1999-07-26",
      maxSpeed: "721 Kbps",
      range: "10 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK",
      powerConsumption: "High",
      description: "Birinchi Bluetooth versiyasi, qisqa masofali simsiz aloqa uchun asos yaratdi.",
      features: [
        "Asosiy ma'lumot uzatish",
        "Telefon va qurilmalar ulanishi",
        "Past tezlikli aloqa",
      ],
      applications: ["Simsiz quloqchinlar", "Klaviatura va sichqoncha"],
      limitations: ["Past tezlik", "Kam masofa", "Yuqori shovqin"],
    },
    {
      version: "Bluetooth 2.0 + EDR",
      releaseDate: "2004-11-10",
      maxSpeed: "3 Mbps",
      range: "10 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK, π/4-DQPSK, 8DPSK",
      powerConsumption: "Medium",
      description: "Enhanced Data Rate (EDR) qo'shildi, ma'lumot uzatish tezligini oshirdi.",
      features: [
        "Yuqori tezlik",
        "Energiya tejash rejimi",
        "Yaxshilangan signal sifati",
      ],
      applications: ["Audio uzatish", "Fayl almashish", "Mobil qurilmalar"],
      limitations: ["Hali ham qisqa masofa", "Energiya sarfi optimallashtirilmagan"],
    },
    {
      version: "Bluetooth 3.0 + HS",
      releaseDate: "2009-04-21",
      maxSpeed: "24 Mbps",
      range: "10 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK, π/4-DQPSK, 8DPSK",
      powerConsumption: "Medium-High",
      description: "High Speed (HS) bilan katta hajmdagi ma'lumotlarni uzatish imkoniyati yaratildi.",
      features: [
        "Wi-Fi integratsiyasi",
        "Katta fayllarni tez uzatish",
        "Moslashuvchan aloqa",
      ],
      applications: ["Video uzatish", "Kompyuter va mobil aloqa", "Periferik qurilmalar"],
      limitations: ["Yuqori quvvat sarfi", "Masofa cheklangan"],
    },
    {
      version: "Bluetooth 4.0 (BLE)",
      releaseDate: "2010-06-30",
      maxSpeed: "1 Mbps",
      range: "50 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK",
      powerConsumption: "Low",
      description: "Bluetooth Low Energy (BLE) bilan kam quvvat sarfi va IoT uchun optimallashtirildi.",
      features: [
        "Kam energiya sarfi",
        "Uzoqroq masofa",
        "Kichik qurilmalar uchun ideal",
      ],
      applications: ["Fitnes-trekerlar", "Smart soatlar", "Tibbiy qurilmalar"],
      limitations: ["Past tezlik", "Katta fayllar uchun mos emas"],
    },
    {
      version: "Bluetooth 5.0",
      releaseDate: "2016-12-06",
      maxSpeed: "2 Mbps",
      range: "240 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK",
      powerConsumption: "Low-Medium",
      description: "Masofa, tezlik va barqarorlik jihatidan katta yaxshilanishlar kiritildi.",
      features: [
        "4x masofa oshirish",
        "2x tezlik",
        "Yuqori barqarorlik",
        "IoT uchun kengaytirilgan qo'llab-quvvatlash",
      ],
      applications: ["Smart uy tizimlari", "Sanoat qurilmalari", "Audio qurilmalar"],
      limitations: ["Eski qurilmalar bilan moslik muammolari"],
    },
    {
      version: "Bluetooth 5.3",
      releaseDate: "2021-07-13",
      maxSpeed: "2 Mbps",
      range: "240 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK",
      powerConsumption: "Low",
      description: "Eng so'nggi versiya, xavfsizlik va samaradorlikni oshirishga qaratilgan.",
      features: [
        "Yaxshilangan xavfsizlik",
        "Signal aniqligi",
        "Energiya tejamkorligi",
      ],
      applications: ["Aqlli uy tizimlari", "Avtomobil texnologiyalari", "Sog'liqni saqlash"],
      limitations: ["Hali keng tarqalmagan"],
    },
    {
      version: "Bluetooth 5.4",
      releaseDate: "2023-01-31",
      maxSpeed: "2 Mbps",
      range: "240 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK",
      powerConsumption: "Ultra-Low",
      description: "Eng yangi versiya, PAwR va PAST texnologiyalari bilan kengaytirilgan.",
      features: [
        "Periodic Advertisement with Responses (PAwR)",
        "Encrypted Advertising Data",
        "Yaxshilangan audio sifati",
        "Ultra kam kechikish",
        "Batareya umrini uzaytirish"
      ],
      applications: [
        "Audio qurilmalar",
        "Kiyiladigan texnologiyalar",
        "IoT qurilmalari",
        "Smart shahar tizimlari",
        "Sanoat avtomatikasi"
      ],
      limitations: ["Yangi qurilmalar kerak", "Narxi yuqoriroq"],
      securityFeatures: [
        "Connection Subrating",
        "Encrypted Advertising",
        "Enhanced Authentication",
        "Secure Simple Pairing",
        "Advanced Encryption Standard (AES-128)"
      ],
      technicalSpecs: {
        channels: 40,
        channelBandwidth: "2 MHz",
        errorCorrection: "Forward Error Correction (FEC)",
        latency: "< 2ms",
        connectionDensity: "Up to 50 devices",
        encryptionType: "AES-128-CCM"
      },
      marketData: {
        adoptionRate: "Growing",
        marketShare: "15%",
        supportedDevices: "2023+ models",
        industrySupport: "High"
      },
      developmentFeatures: {
        apis: ["GATT", "GAP", "L2CAP", "SMP"],
        sdkSupport: ["Android", "iOS", "Windows", "Linux"],
        debuggingTools: ["Bluetooth Protocol Analyzer", "Stack Traces"],
        testingMethods: ["Conformance Testing", "Interoperability Testing"]
      }
    },
    {
      version: "Bluetooth Classic",
      releaseDate: "Turli versiyalar",
      maxSpeed: "3 Mbps",
      range: "10-100 meters",
      frequency: "2.4 GHz",
      modulation: "GFSK, π/4-DQPSK, 8DPSK",
      powerConsumption: "High",
      description: "An'anaviy Bluetooth protokoli, yuqori tezlikdagi ma'lumot uzatish uchun.",
      features: [
        "Uzluksiz ma'lumot uzatish",
        "Yuqori o'tkazuvchanlik",
        "Ko'p qurilmalar bilan aloqa",
        "Audio sifati yuqori"
      ],
      applications: [
        "Professional audio uskunalar",
        "Ma'lumot sinxronizatsiyasi",
        "Fayl uzatish tizimlari",
        "Multimedia qurilmalari"
      ],
      limitations: [
        "Yuqori quvvat sarfi",
        "Ulanish vaqti uzoqroq",
        "Cheklangan qurilmalar soni"
      ],
      protocols: [
        "A2DP",
        "AVRCP",
        "HFP",
        "HSP"
      ]
    },
    {
      version: "Bluetooth Mesh",
      releaseDate: "2017-07-18",
      maxSpeed: "1 Mbps",
      range: "Mesh orqali cheksiz",
      frequency: "2.4 GHz",
      modulation: "GFSK",
      powerConsumption: "Low to Medium",
      description: "Ko'p nuqtali tarmoq yaratish uchun maxsus Bluetooth texnologiyasi.",
      features: [
        "Cheksiz tarmoq kengayishi",
        "O'z-o'zini tiklash",
        "Ko'p nuqtali aloqa",
        "Markazlashtirilmagan boshqaruv",
        "Xavfsiz aloqa"
      ],
      applications: [
        "Aqlli binolar",
        "Sanoat avtomatikasi",
        "Yoritish tizimlari",
        "Sensor tarmoqlari",
        "Smart shahar infratuzilmasi"
      ],
      limitations: [
        "Murakkab sozlash",
        "Maxsus qurilmalar kerak",
        "Yuqori dastlabki xarajatlar"
      ],
      networkFeatures: [
        "Many-to-many aloqa",
        "Publish/Subscribe modeli",
        "Xavfsizlik darajasi yuqori",
        "Friendship node support",
        "Low power node optimization",
        "Relay node capabilities"
      ],
      meshSpecs: {
        topology: "Full mesh",
        maxNodes: "32,767 per network",
        messageHops: "Up to 127",
        security: "AES-128-CCM",
        provisioningMethods: ["Remote", "Local", "OOB"],
        models: ["Generic", "Sensor", "Lighting", "Time and Scene"]
      },
      industrialFeatures: {
        redundancy: "Multi-path messaging",
        reliability: "99.9%",
        scalability: "Highly scalable",
        interoperability: "Cross-vendor support"
      },
      certificationInfo: {
        certificationBody: "Bluetooth SIG",
        testingRequirements: ["Protocol", "Security", "Performance"],
        complianceLevel: "Level 1-4",
        annualAudit: "Required"
      }
    }
];
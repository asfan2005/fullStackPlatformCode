const computerStructureData = {
    title: "Kompyuter Tuzilishi",
    description: "Kompyuterning asosiy va yordamchi qismlari hamda ularning ishlash prinsipi haqida umumiy ma'lumot.",
    lastUpdate: "2024",
    author: "KomputerSavod Team",
    sections: [
      {
        id: 1,
        component: "Protsessor (CPU)",
        icon: "cpu",
        shortDescription: "Kompyuterning 'miyasi', barcha hisoblash va boshqaruv jarayonlarini amalga oshiradi.",
        detailedInfo: {
          function: "Buyruqlarni bajaradi va ma'lumotlarni qayta ishlaydi.",
          types: ["Bir yadroli", "Ko'p yadroli", "Server protsessorlari"],
          examples: ["Intel Core i9", "AMD Ryzen 9", "Xeon"],
          keyFeatures: ["Tezlik (GHz)", "Kesh xotira", "Yadro soni"],
          advantages: [
            "Yuqori hisoblash quvvati",
            "Parallel vazifalarni bajarish",
            "Zamonaviy arxitektura"
          ],
          disadvantages: [
            "Qizib ketish xavfi",
            "Yuqori energiya sarfi",
            "Narxi yuqori"
          ],
          maintenance: [
            "Sovutish tizimini tekshirish",
            "Termal pastani almashtirish",
            "Chang tozalash"
          ],
          specifications: {
            powerConsumption: "65W - 125W",
            temperature: "30-90°C",
            lifespan: "5-10 yil"
          }
        }
      },
      {
        id: 2,
        component: "Operativ xotira (RAM)",
        icon: "memory",
        shortDescription: "Dasturlar va ma'lumotlarni vaqtinchalik saqlaydi.",
        detailedInfo: {
          function: "Tezkor xotira sifatida dasturlarning tez ishlashini ta'minlaydi.",
          types: ["DDR3", "DDR4", "DDR5"],
          examples: ["16 GB DDR4", "32 GB DDR5", "64 GB RAM"],
          keyFeatures: ["Hajmi (GB)", "Tezlik (MHz)", "Kechikish vaqti"]
        }
      },
      {
        id: 3,
        component: "Qattiq disk (HDD)",
        icon: "hdd",
        shortDescription: "Ma'lumotlarni doimiy saqlash uchun mexanik qurilma.",
        detailedInfo: {
          function: "Fayllar, dasturlar va operatsion tizimni saqlaydi.",
          types: ["5400 RPM", "7200 RPM", "Hibrid (SSHD)"],
          examples: ["1 TB Seagate", "2 TB WD", "500 GB Toshiba"],
          keyFeatures: ["Hajmi", "Tezlik", "Ishlash muddati"]
        }
      },
      {
        id: 4,
        component: "Qattiq holatli disk (SSD)",
        icon: "ssd",
        shortDescription: "Yuqori tezlikdagi doimiy xotira qurilmasi.",
        detailedInfo: {
          function: "Flesh-xotira asosida ma'lumotlarni tezkor saqlaydi va o'qiydi.",
          types: ["SATA SSD", "NVMe SSD", "M.2 SSD"],
          examples: ["Samsung 970 EVO", "WD Black SN850", "Crucial MX500"],
          keyFeatures: ["Tezlik (MB/s)", "Hajmi", "Chidamlilik"]
        }
      },
      {
        id: 5,
        component: "Video karta (GPU)",
        icon: "gpu",
        shortDescription: "Grafik tasvirlarni qayta ishlash uchun ishlatiladi.",
        detailedInfo: {
          function: "O'yinlar va videolar uchun tasvirlarni optimallashtiradi.",
          types: ["Integratsiyalangan", "Alohida"],
          examples: ["NVIDIA GTX 1660", "AMD RX 580", "Intel Iris Xe"],
          keyFeatures: ["VRAM hajmi", "Yadro soni", "Ray Tracing"]
        }
      },
      {
        id: 6,
        component: "Anakart (Motherboard)",
        icon: "motherboard",
        shortDescription: "Barcha qismlarni bir-biriga bog'laydigan asosiy plata.",
        detailedInfo: {
          function: "Ma'lumot almashishni ta'minlaydi.",
          types: ["ATX", "Micro-ATX", "Mini-ITX"],
          examples: ["ASUS TUF", "MSI MAG", "Gigabyte Aorus"],
          keyFeatures: ["Portlar", "Chipset", "Slotlar"]
        }
      },
      {
        id: 7,
        component: "Quvvat bloki (PSU)",
        icon: "power",
        shortDescription: "Elektr energiyasini taqsimlaydi.",
        detailedInfo: {
          function: "Tashqi quvvatni qismlarga moslashtirib taqsimlaydi.",
          types: ["Modulli", "Yarim modulli", "Oddiy"],
          examples: ["Corsair RM750", "EVGA 600W", "BeQuiet 500W"],
          keyFeatures: ["Quvvati (W)", "Sertifikat", "Sovutish"]
        }
      },
      {
        id: 8,
        component: "Klaviatura",
        icon: "keyboard",
        shortDescription: "Ma'lumot kiritish uchun kirish qurilmasi.",
        detailedInfo: {
          function: "Matn va buyruqlarni kiritishga yordam beradi.",
          types: ["Mexanik", "Membranali", "Virtual"],
          examples: ["Logitech G Pro", "Razer BlackWidow", "Corsair K95"],
          keyFeatures: ["Tugmalar turi", "Ulanish", "RGB yorug'lik"]
        }
      },
      {
        id: 9,
        component: "Sichqoncha",
        icon: "mouse",
        shortDescription: "Kursorni boshqarish uchun qurilma.",
        detailedInfo: {
          function: "Interfeys bilan ishlashni osonlashtiradi.",
          types: ["Optik", "Lazerli", "Simsiz"],
          examples: ["Logitech MX Master", "Razer DeathAdder", "HP Wireless"],
          keyFeatures: ["DPI", "Tugmalar soni", "Ergonomika"]
        }
      },
      {
        id: 10,
        component: "Monitor",
        icon: "monitor",
        shortDescription: "Ma'lumotlarni vizual ko'rsatadi.",
        detailedInfo: {
          function: "Kompyuter natijalarini ekranda aks ettiradi.",
          types: ["LCD", "LED", "OLED"],
          examples: ["Dell UltraSharp", "LG 27GL850", "Samsung Odyssey"],
          keyFeatures: ["Ruxsat", "Yangilanish tezligi", "Panel turi"]
        }
      },
      {
        id: 11,
        component: "Printer",
        icon: "printer",
        shortDescription: "Hujjatlarni qog'ozga chiqaradi.",
        detailedInfo: {
          function: "Raqamli ma'lumotlarni chop etadi.",
          types: ["Lazerli", "Siyohli", "3D printer"],
          examples: ["HP LaserJet", "Epson EcoTank", "Creality Ender"],
          keyFeatures: ["Chop etish tezligi", "Ruxsat", "Rangli/monoxrom"]
        }
      },
      {
        id: 12,
        component: "Sovutish tizimi",
        icon: "cooling",
        shortDescription: "Kompyuter qismlarini sovutadi.",
        detailedInfo: {
          function: "Issiqlikni tarqatib, qizib ketishning oldini oladi.",
          types: ["Havoli", "Suvli", "Passiv"],
          examples: ["Noctua NH-D15", "Corsair H100i", "Arctic Freezer"],
          keyFeatures: ["Fan tezligi", "Shovqin darajasi", "Sovutish kuchi"]
        }
      },
      {
        id: 13,
        component: "Optik disk (ODD)",
        icon: "optical",
        shortDescription: "CD/DVD ma'lumotlarni o'qiydi va yozadi.",
        detailedInfo: {
          function: "Optik disklarni ishlatish uchun qurilma.",
          types: ["CD-ROM", "DVD-RW", "Blu-ray"],
          examples: ["LG GH24NSD", "ASUS DRW-24D5MT", "Pioneer BDR"],
          keyFeatures: ["Tezlik", "Format qo'llab-quvvatlashi", "Yozish imkoniyati"]
        }
      },
      {
        id: 14,
        component: "Tarmoq kartasi",
        icon: "network",
        shortDescription: "Internet va tarmoqqa ulanishni ta'minlaydi.",
        detailedInfo: {
          function: "Kompyuterni tarmoqqa ulaydi.",
          types: ["Ethernet", "Wi-Fi", "Bluetooth"],
          examples: ["TP-Link Archer", "Intel AX200", "Realtek RTL8111"],
          keyFeatures: ["Tezlik (Mbps)", "Protokollar", "Antenna"]
        }
      },
      {
        id: 15,
        component: "Kesh xotira",
        icon: "cache",
        shortDescription: "Protsessorga tezkor ma'lumot yetkazadi.",
        detailedInfo: {
          function: "Tez-tez ishlatiladigan ma'lumotlarni saqlaydi.",
          types: ["L1", "L2", "L3"],
          examples: ["4 MB L3", "512 KB L2", "128 KB L1"],
          keyFeatures: ["Hajmi", "Tezlik", "Joylashuvi"]
        }
      },
      {
        id: 16,
        component: "BIOS/UEFI",
        icon: "bios",
        shortDescription: "Kompyuterning dastlabki yuklanishini boshqaradi.",
        detailedInfo: {
          function: "Qurilmalarni tekshiradi va OSni yuklaydi.",
          types: ["BIOS", "UEFI"],
          examples: ["AMI BIOS", "ASUS UEFI", "MSI Click BIOS"],
          keyFeatures: ["Yangilanish", "Interfeys", "Moslashuvchanlik"]
        }
      },
      {
        id: 17,
        component: "UPS (Quvvat manbai)",
        icon: "ups",
        shortDescription: "Elektr uzilishida quvvat ta'minlaydi.",
        detailedInfo: {
          function: "Kompyuterni vaqtinchalik quvvat bilan ta'minlaydi.",
          types: ["Off-line", "Line-Interactive", "Online"],
          examples: ["APC 600VA", "CyberPower 1000VA", "Eaton 5E"],
          keyFeatures: ["Quvvati (VA)", "Batareya muddati", "Portlar"]
        }
      },
      {
        id: 18,
        component: "Ovoz kartasi",
        icon: "sound",
        shortDescription: "Ovoz sifatini yaxshilaydi va qayta ishlaydi.",
        detailedInfo: {
          function: "Ovoz chiqarish va yozib olishni boshqaradi.",
          types: ["Integratsiyalangan", "Alohida"],
          examples: ["Creative Sound Blaster", "Realtek HD Audio", "ASUS Xonar"],
          keyFeatures: ["Kanallar (5.1, 7.1)", "Namuna chastotasi", "Shovqin darajasi"]
        }
      },
      {
        id: 19,
        component: "Korpusi",
        icon: "case",
        shortDescription: "Barcha qismlarni joylashtiradi va himoya qiladi.",
        detailedInfo: {
          function: "Qismlarni bir joyda ushlab, sovutishni ta'minlaydi.",
          types: ["Full Tower", "Mid Tower", "Mini Tower"],
          examples: ["NZXT H510", "Fractal Meshify", "Cooler Master Q300L"],
          keyFeatures: ["Hajmi", "Fan o'rni", "Dizayn"]
        }
      },
      {
        id: 20,
        component: "Web-kamera",
        icon: "webcam",
        shortDescription: "Video tasvirlarni yozadi va uzatadi.",
        detailedInfo: {
          function: "Video qo'ng'iroqlar va yozuvlar uchun ishlatiladi.",
          types: ["Integratsiyalangan", "Tashqi"],
          examples: ["Logitech C920", "Razer Kiyo", "Microsoft LifeCam"],
          keyFeatures: ["Ruxsat (1080p)", "FPS", "Mikrofon"]
        }
      }
    ],
    additionalInfo: {
      maintenanceTips: [
        "Muntazam tozalash",
        "Sovutish tizimini tekshirish",
        "Drayverlani yangilash",
        "Antivirus dasturlarini yangilash"
      ],
      safetyGuidelines: [
        "Elektr xavfsizligi qoidalariga rioya qilish",
        "Statik elektr zaryadidan himoyalanish",
        "To'g'ri sovutishni ta'minlash"
      ],
      upgradeTips: [
        "Komponentlarning mosligini tekshirish",
        "Quvvat talablarini hisobga olish",
        "Kelajakdagi kengayish imkoniyatlarini rejalashtirish"
      ],
      troubleshootingSteps: [
        "Xatolarni aniqlash",
        "Diagnostika o'tkazish",
        "Drayverlarni tekshirish",
        "Tizimni qayta o'rnatish"
      ]
    },
    summary: "Kompyuterning 20 ta asosiy va yordamchi qismlari umumiy tizimning samarali ishlashini ta'minlaydi.",
    version: "2.0"
  };
  
  export default computerStructureData;
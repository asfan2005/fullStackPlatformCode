const computerStructureData = {
    title: "Kompyuter Tuzilishi",
  description: "Kompyuterning asosiy va yordamchi qismlari hamda ularning ishlash prinsipi haqida batafsil ma'lumot.",
    lastUpdate: "2024",
    author: "KomputerSavod Team",
  mainImage: "https://images.unsplash.com/photo-1587202372634-32705e3bf46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  videoTutorial: "https://www.youtube.com/embed/JAFhwfyYEb4",
    sections: [
      {
        id: 1,
        component: "Protsessor (CPU)",
      icon: "microchip",
        shortDescription: "Kompyuterning 'miyasi', barcha hisoblash va boshqaruv jarayonlarini amalga oshiradi.",
      images: [
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/watch?v=GLSPub4ydiM",
        detailedInfo: {
        function: "Protsessor (CPU - Central Processing Unit) kompyuterning markaziy hisoblash va boshqaruv qurilmasi bo'lib, u barcha dasturiy buyruqlarni bajaradi va ma'lumotlarni qayta ishlaydi. Kompyuter ichidagi deyarli barcha amallar protsessor orqali boshqariladi va bajariladi. Protsessor ALU (Arithmetic Logic Unit), Control Unit va registrlardan iborat bo'lib, har bir bo'lim o'zining vazifasini bajaradi.",
        howItWorks: "Protsessor buyruqlarni olish, dekodlash, bajarish va natijalarni saqlash siklida ishlaydi. Bu sikl 'fetch-decode-execute' sikli deb ataladi. Protsessor tezligi GHz (Gigagerts) bilan o'lchanadi va bu bir sekundda necha milliard buyruq bajarilishini ko'rsatadi.",
        types: ["Bir yadroli", "Ko'p yadroli (Dual-core, Quad-core, Octa-core)", "Server protsessorlari", "Mobil protsessorlar", "ARM arxitekturali protsessorlar", "x86 arxitekturali protsessorlar"],
        examples: [
          "Intel Core i9-12900K - 16 yadro, 5.2 GHz",
          "AMD Ryzen 9 5950X - 16 yadro, 4.9 GHz",
          "Apple M1 Ultra - 20 yadro, 8 GPU yadro",
          "Intel Xeon - Server uchun optimallashtirilgan",
          "Qualcomm Snapdragon - mobil qurilmalar uchun"
        ],
        keyFeatures: [
          "Tezlik (GHz) - processorning ishlash tezligi",
          "Yadro soni - parallel ravishda nechta vazifa bajarilishi mumkinligi",
          "Kesh xotira - tez-tez ishlatiladigan ma'lumotlar uchun yuqori tezlikdagi xotira",
          "TDP (Thermal Design Power) - maksimal issiqlik chiqarish darajasi",
          "IPC (Instruction Per Cycle) - har bir siklda bajarishi mumkin bo'lgan buyruqlar soni"
        ],
          advantages: [
          "Yuqori hisoblash quvvati - murakkab amallarni tez bajarish imkoniyati",
          "Parallel vazifalarni bajarish - bir vaqtning o'zida ko'p dasturlarni ishlatish",
          "Zamonaviy arxitektura - energiya samaradorligi va tezkorlikni ta'minlaydi",
          "Kengaytirilgan buy'ruqlar to'plami (AVX, SSE) - maxsus vazifalar uchun optimallashtirilgan",
          "Tez kesh xotira - ma'lumotlarga tez kirishni ta'minlaydi"
          ],
          disadvantages: [
          "Qizib ketish xavfi - yuqori yuklamada ishlash harorati ko'tarilishi mumkin",
          "Yuqori energiya sarfi - ayniqsa kuchli protsessorlar ko'p quvvat talab qiladi",
          "Narxi yuqori - yangi avlod protsessorlar qimmat bo'lishi mumkin",
          "O'rnatish murakkabligi - noto'g'ri o'rnatilganda shikastlanishi mumkin",
          "Sovutish tizimi talab qiladi - samarali ishlash uchun maxsus sovutish kerak"
          ],
          maintenance: [
          "Sovutish tizimini muntazam tekshirish va tozalash",
          "Termal pastani har 1-2 yilda almashtirish",
          "Chang va boshqa iflosliklardan tozalash",
          "BIOS/UEFI ni yangilab turish",
          "Haroratni nazorat qilish uchun maxsus dasturlardan foydalanish"
          ],
          specifications: {
          powerConsumption: "65W - 125W (uy kompyuterlari uchun)",
          temperature: "Normal ishlash harorati: 30-75°C, maksimal: 90-100°C",
          lifespan: "O'rtacha ishlash muddati: 7-10 yil",
          socketTypes: "LGA1700, AM4, AM5 (2024-yil holatiga ko'ra)",
          manufacturingProcess: "7nm, 5nm, 4nm texnologiyalari"
        },
        additionalInfo: "Zamonaviy protsessorlar ko'pincha integratsiyalangan grafik protsessorga ega bo'ladi (iGPU), bu esa alohida video karta bo'lmasa ham kompyuterni ishlatish imkonini beradi. Protsessorni tanlashda kompyuterning asosiy vazifalariga mosligi, energiya samaradorligi va narxi muhim rol o'ynaydi."
        }
      },
      {
        id: 2,
        component: "Operativ xotira (RAM)",
        icon: "memory",
      shortDescription: "Dasturlar va ma'lumotlarni vaqtinchalik saqlaydi, ishlash tezligini oshiradi.",
      images: [
        "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1655560319891-088c802a2fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/6JrOVinEjr0",
        detailedInfo: {
        function: "Operativ xotira (RAM - Random Access Memory) kompyuter ishlayotgan paytda faol dasturlar va ma'lumotlarni vaqtinchalik saqlash uchun ishlatiladi. Uning asosiy vazifasi - protsessor va boshqa qurilmalar o'rtasidagi ma'lumot almashishni tezlashtirish. RAM tezkor, ammo elektr ta'minoti o'chirilganda ma'lumotlar o'chib ketadi (volatile memory).",
        howItWorks: "RAM xotira modullari (DIMM yoki SO-DIMM) anakartdagi maxsus slotlarga o'rnatiladi. Har bir modul milliardlab xotira katakchalaridan iborat bo'lib, har biri elektr zaryadini saqlaydi. Kompyuter bu zaryadlarni 0 yoki 1 sifatida o'qiydi. RAM tezligi MHz yoki GHz bilan o'lchanadi va yuqoriroq tezlik tezroq ma'lumot almashishni anglatadi.",
        types: [
          "DDR3 (Double Data Rate 3) - 2007-yildan 2014-yilgacha keng tarqalgan, 1066-2133 MHz",
          "DDR4 (Double Data Rate 4) - 2014-yildan beri keng tarqalgan, 2133-4800 MHz",
          "DDR5 (Double Data Rate 5) - 2021-yildan boshlab, 4800-8400 MHz",
          "LPDDR (Low Power DDR) - mobil qurilmalar uchun energiya tejamkor versiya",
          "ECC RAM (Error-Correcting Code) - xatolarni avtomatik tuzatadigan, serverlar uchun"
        ],
        examples: [
          "Corsair Vengeance DDR4 16GB (2x8GB) 3200MHz",
          "Kingston FURY Beast DDR5 32GB (2x16GB) 5200MHz",
          "G.Skill Trident Z RGB DDR4 32GB (4x8GB) 3600MHz",
          "Crucial Ballistix DDR4 64GB (4x16GB) 3600MHz",
          "Samsung DDR5 ECC 128GB (4x32GB) 4800MHz Server RAM"
        ],
        keyFeatures: [
          "Hajmi (GB) - RAMning umumiy saqlash hajmi, ko'proq hajm ko'proq dasturlarni bir vaqtda ochish imkonini beradi",
          "Tezlik (MHz/GHz) - yuqoriroq tezlik ma'lumotlar tezroq o'qilishi va yozilishini ta'minlaydi",
          "Kechikish vaqti (CAS Latency) - birinchi ma'lumotlar blokinining yetib kelishigacha o'tadigan vaqt",
          "Kanal raqami (Single/Dual/Quad Channel) - bir vaqtning o'zida nechta ma'lumot kanali ishlashini ko'rsatadi",
          "XMP/DOCP profili - tezroq ishlash uchun avtomatik sozlash profillari"
        ],
        advantages: [
          "Yuqori tezlikda ma'lumotlarga kirish imkoniyati",
          "Ko'p vazifali ishlarni tezlashtiradi",
          "Dasturlarni ochish va o'rtasida almashinishni tezlashtiradi",
          "O'rnatish va almashtirish oson",
          "Turli xil dizayn va RGB yoritish bilan mavjud"
        ],
        disadvantages: [
          "Vaqtinchalik xotira - elektr ta'minoti o'chirilganda ma'lumotlar yo'qoladi",
          "Narxi yuqori, ayniqsa katta hajmli versiyalar",
          "DDR4 va DDR5 kabi turli standartlar bir-biriga mos kelmaydi",
          "Operatsion tizim cheklovlari (masalan, Windows 10 Home 32-bit 4GB gacha cheklangan)",
          "Tezlikni oshirish (overclocking) haroratni ko'tarishi mumkin"
        ],
        maintenance: [
          "RAM modullarini chang va iflosliklardan tozalab turish",
          "Kontaktlarni tekshirib turish",
          "RAM diagnostika dasturlarini ishlatib xatoliklarni aniqlash",
          "XMP profillarini to'g'ri sozlash"
        ],
        specifications: {
          voltage: "DDR4: 1.2V, DDR5: 1.1V",
          temperature: "Normal ishlash harorati: 30-85°C",
          lifespan: "O'rtacha ishlash muddati: 7-10 yil",
          formFactor: "DIMM (desktop), SO-DIMM (laptop)",
          bandwidth: "DDR4: 17-25 GB/s, DDR5: 38-51 GB/s (modul boshiga)"
        },
        additionalInfo: "RAM miqdorini tanlashda kompyuter vazifalariga e'tibor berish kerak: oddiy ofis ishlari uchun 8GB yetarli, o'yinlar uchun 16GB tavsiya etiladi, video montaj va 3D modellashtirish uchun 32GB va undan ko'p bo'lishi kerak. Bundan tashqari, RAM modullarini o'rnatishda juft bo'lib o'rnatish (masalan 2x8GB) dual-channel rejimini ishlatish imkonini beradi, bu esa unumdorlikni oshiradi."
        }
      },
      {
        id: 3,
        component: "Qattiq disk (HDD)",
        icon: "hdd",
      shortDescription: "Ma'lumotlarni doimiy saqlash uchun mexanik qurilma. Kata hajmli ammo sekin ishlaydi.",
      images: [
        "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/4SxB4Xj_8JE",
        detailedInfo: {
        function: "Qattiq disk (HDD - Hard Disk Drive) ma'lumotlarni doimiy saqlash uchun mo'ljallangan qurilma bo'lib, u fayllar, dasturlar va operatsion tizimni saqlaydi. HDD mexanik tarzda ishlaydi - disk aylanadi va magnit yozish/o'qish boshchasi ma'lumotlarni disk yuzasiga yozadi yoki o'qiydi. Qattiq disk elektr ta'minoti o'chirilganda ham ma'lumotlarni saqlab qoladi (non-volatile memory).",
        howItWorks: "Qattiq disk ichida metall disklar (platter) mavjud bo'lib, ular maxsus motor yordamida yuqori tezlikda aylanadi (5400 yoki 7200 ayl/min). Har bir disk yuzasi magnit materiallar bilan qoplangan. Elektromagnit yozish/o'qish boshchasi disklar ustida harakatlanib, disklar yuzasiga magnit maydonlar yozadi (0 va 1 kodlarini) yoki o'qiydi. Disk qanchalik tez aylansa, ma'lumotlar shuncha tez o'qiladi va yoziladi.",
        types: [
          "5400 RPM (ayl/min) - energiya tejamkor, lekin sekinroq",
          "7200 RPM (ayl/min) - tezroq ishlash, ko'proq quvvat sarflaydi",
          "10,000 RPM (ayl/min) - yuqori unumdorlikka ega, serverlar uchun",
          "15,000 RPM (ayl/min) - eng tez HDDlar, asosan enterprise muhitda",
          "Hibrid (SSHD) - HDD va SSD texnologiyalarini birlashtiradi"
        ],
        examples: [
          "Seagate Barracuda 2TB 7200RPM 256MB Cache",
          "Western Digital Blue 4TB 5400RPM 64MB Cache",
          "Toshiba X300 6TB 7200RPM 128MB Cache",
          "Seagate IronWolf 8TB 7200RPM NAS HDD",
          "Western Digital Gold 14TB 7200RPM Enterprise HDD"
        ],
        keyFeatures: [
          "Hajmi (TB) - saqlash uchun umumiy joy, ko'proq bo'lishi ko'proq ma'lumot saqlash imkonini beradi",
          "Aylanish tezligi (RPM) - diskning bir daqiqadagi aylanishlar soni, tezlikka ta'sir qiladi",
          "Kesh xotira - tez-tez ishlatiladigan ma'lumotlar uchun vaqtinchalik saqlash joyi",
          "Ulanish interfeysi (SATA, SAS) - anakartta ulanish usuli va tezligini aniqlaydi",
          "Formfaktor (3.5\", 2.5\") - fizik o'lcham, desktop yoki notbukka mosligini aniqlaydi"
        ],
        advantages: [
          "Arzon narx - bir GB uchun narxi SSDga qaraganda ancha past",
          "Katta saqlash hajmi - 20TB va undan katta hajmli modellar mavjud",
          "Uzoq muddat ishlash - o'rtacha ishlash muddati 3-5 yil",
          "O'rnatish va almashtirish oson",
          "Ko'p yozish/o'chirish sikllariga chidamli"
        ],
        disadvantages: [
          "SSDlarga qaraganda sekin ishlash (10-100 marta)",
          "Tashqi zarbalardan shikastlanishi mumkin (mexanik qismlar tufayli)",
          "Shovqinli ishlashi mumkin",
          "Ko'proq energiya sarflaydi",
          "Fragmentatsiya muammolari - vaqt o'tishi bilan sekinlashishi mumkin"
        ],
        maintenance: [
          "Muntazam defragmentatsiya qilish (Windows uchun)",
          "Diskni tekshirib turish (CHKDSK yordamida)",
          "Diskda bo'sh joy qoldirish (kamida 10-15%)",
          "Bad sektorlarni tekshirish",
          "Tebranish va zarbalardan himoya qilish"
        ],
        specifications: {
          readSpeed: "80-160 MB/s (o'qish tezligi)",
          writeSpeed: "80-160 MB/s (yozish tezligi)",
          accessTime: "5-10 ms (kirish vaqti)",
          mtbf: "MTBF (Mean Time Between Failures): 600,000-1,200,000 soat",
          interfaces: "SATA III (6 Gb/s), SAS (12 Gb/s)"
        },
        additionalInfo: "Qattiq disklar asosan katta hajmdagi ma'lumotlarni saqlash uchun ishlatiladi, masalan, media fayllari (foto, video, musiqa), arxivlar, zaxira nusxalar uchun. Zamonaviy kompyuterlarda ko'pincha HDD va SSD birgalikda ishlatiladi: SSD - operatsion tizim va dasturlar uchun, HDD - ma'lumotlar saqlash uchun. Bu eng optimal kombinatsiyadir."
        }
      },
      {
        id: 4,
        component: "Qattiq holatli disk (SSD)",
      icon: "solid-state-drive",
      shortDescription: "Flash-xotira asosidagi yuqori tezlikdagi doimiy xotira qurilmasi.",
      images: [
        "https://ict.xabar.uz/static/crop/3/6/920__95_367399373.jpeg  "
      ],
      videoUrl: "https://www.youtube.com/embed/YQEjGKYXjw8",
        detailedInfo: {
        function: "Qattiq holatli disk (SSD - Solid State Drive) harakatlanuvchi qismlarga ega bo'lmagan, flash-xotira asosida ishlaydigan saqlash qurilmasidir. SSD ma'lumotlarni elektron sxemalar orqali saqlaydi va qayta ishlaydi, bu esa HDDlarga qaraganda ancha tezroq ishlash imkonini beradi. SSD operatsion tizimni yuklash, dasturlarni ochish va fayl uzatish jarayonlarini sezilarli darajada tezlashtiradi.",
        howItWorks: "SSD NAND flash xotira chiplaridan foydalanadi, ular elektr signallar orqali ma'lumotlarni (0 va 1) saqlaydi. Har bir xotira katakchasi elektron ravishda dasturlashtiriladi, o'qiladi va qayta dasturlashtirilishi mumkin. Mexanik qismlar yo'qligi SSDga HDDga qaraganda tezroq ishlash, kam energiya sarflash va shovqinsiz ishlash imkonini beradi.",
        types: [
          "SATA SSD - standart SATA interfeysi orqali ulanadigan, 2.5\" formfaktorli",
          "M.2 SSD (SATA) - kichik formfaktorli, ammo hali ham SATA protokolini ishlatadi",
          "M.2 SSD (NVMe) - PCIe interfeysi orqali ulanadigan, eng yuqori tezlikka ega",
          "PCIe SSD - to'g'ridan-to'g'ri PCIe slotiga o'rnatiladigan karta shaklidagi SSD",
          "U.2 SSD - enterprise va server tizimlari uchun mo'ljallangan yuqori unumdorlikka ega"
        ],
        examples: [
          "Samsung 870 EVO 1TB SATA SSD - 560MB/s o'qish, 530MB/s yozish",
          "WD Black SN850 1TB NVMe SSD - 7000MB/s o'qish, 5300MB/s yozish",
          "Crucial MX500 2TB SATA SSD - 560MB/s o'qish, 510MB/s yozish",
          "Samsung 980 PRO 2TB PCIe 4.0 NVMe SSD - 7000MB/s o'qish, 5100MB/s yozish",
          "Corsair MP600 PRO XT 4TB Gen4 NVMe SSD - 7100MB/s o'qish, 6800MB/s yozish"
        ],
        keyFeatures: [
          "Tezlik (MB/s) - o'qish va yozish tezligi, yuqoriroq tezlik kompyuter unumdorligini oshiradi",
          "Hajmi (GB/TB) - SSDning umumiy saqlash hajmi",
          "Chidamlilik (TBW - Terabytes Written) - SSD yoza oladigan ma'lumotning umumiy hajmi",
          "NAND turi (SLC, MLC, TLC, QLC) - har bir xotira katakchasi nechta bit ma'lumot saqlashini ko'rsatadi",
          "Ulanish interfeysi (SATA, NVMe, PCIe) - SSDning qanday ulanishini va maksimal tezlikni aniqlaydi"
        ],
        advantages: [
          "Juda yuqori tezlik - HDDdan 10-100 marta tezroq",
          "Mexanik qismlar yo'qligi sababli ishonchliroq va tashqi zarbalardan kam shikastlanadi",
          "Shovqinsiz ishlash",
          "Kam quvvat sarflaydi, batareya quvvatini tejaydi",
          "Ishlash harorati pastroq"
        ],
        disadvantages: [
          "Narxi yuqori - bir GB uchun narxi HDDga qaraganda yuqori",
          "Kichikroq saqlash hajmi - katta hajmli modellar qimmat",
          "Cheklangan yozish sikllari - vaqt o'tishi bilan yozish qobiliyati pasayadi",
          "Ma'lumotlarni qayta tiklash qiyinroq (shikastlanganda)",
          "Xotira katakchalari vaqt o'tishi bilan zaryadini yo'qotishi mumkin"
        ],
        maintenance: [
          "TRIM funksiyasini yoqib qo'yish - SSD unumdorligini va umrini uzaytirishga yordam beradi",
          "SSDda bo'sh joy qoldirish (kamida 10-20%)",
          "SSD drayveri va firmware'ni yangilab turish",
          "S.M.A.R.T. monitoringi orqali sog'ligini tekshirish",
          "Defragmentatsiya qilmaslik (SSD uchun zarari ko'p)"
        ],
        specifications: {
          readSpeed: "SATA: 500-550 MB/s, NVMe: 3500-7000 MB/s",
          writeSpeed: "SATA: 450-520 MB/s, NVMe: 3000-6500 MB/s",
          accessTime: "0.1 ms dan kam (kirish vaqti)",
          lifespan: "TBW: 150-5000 TB (modelga qarab)",
          warranty: "3-5 yil yoki belgilangan TBW miqdorigacha"
        },
        additionalInfo: "SSDlar zamonaviy kompyuterlarning asosiy komponenti hisoblanadi. Operatsion tizim va ko'p ishlatiladigan dasturlarni SSDga o'rnatish kompyuter unumdorligini sezilarli darajada oshiradi. Kompyuterni ilk marta ishga tushirish vaqti, dasturlarni ochish va hujjatlarni saqlash jarayonlari HDDga qaraganda bir necha barobar tezlashadi. Yuqori tezlikda ma'lumot uzatish talab qiladigan professional ishlar, masalan video montaj va 3D modellashtirish uchun NVMe SSDlar tavsiya etiladi."
        }
      },
      {
        id: 5,
        component: "Video karta (GPU)",
      icon: "gpu-card",
      shortDescription: "Grafik tasvirlarni qayta ishlash va monitorga chiqarish uchun ishlatiladi.",
      images: [
        "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588941288806-fb5241552413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/Kgcfj_KV-mo",
        detailedInfo: {
        function: "Video karta (GPU - Graphics Processing Unit) grafik ma'lumotlarni qayta ishlash va monitorga tasvirni chiqarish uchun mo'ljallangan qurilma. GPU o'yinlar, video montaj, 3D modellashtirish va boshqa grafik vazifalarni tezlashtiradi. Zamonaviy video kartalar yuqori darajadagi parallel hisoblash quvvatiga ega bo'lib, ko'plab mayda grafik amallarni bir vaqtda bajarishi mumkin.",
        howItWorks: "GPU tasvirni yaratish uchun kerak bo'lgan ma'lumotlarni protsessordan oladi va uni piksellar, to'rtburchaklar va teksturalar ko'rinishida qayta ishlaydi. U 3D modellarni 2D monitorga chiqarish, maxsus effektlar (soyalar, yorug'lik, refleksiya) qo'shish va tasvir sifatini oshirish (antialiasing, anisotropic filtering) kabi amallarni bajaradi. GPUlar CPUlarga qaraganda minglab yadrolarga ega bo'lib, parallel ravishda ishlay oladi.",
        types: [
          "Diskret video karta - anakartga alohida o'rnatiladigan, yuqori unumdorlikka ega",
          "Integratsiyalashgan video karta - protsessor ichiga qurilgan, energiya tejamkor, lekin kam quvvatli",
          "Mobil video karta - noutbuklar uchun kichiklashtirilgan diskret kartalar",
          "Professional video karta (Workstation) - 3D modellashtirish, tasvirlarni qayta ishlash uchun",
          "Mining video karta - kriptovalyuta qazish uchun optimallashtirilgan"
        ],
        examples: [
          "NVIDIA GeForce RTX 4090 - o'yinlar uchun eng kuchli GPUlardan biri",
          "AMD Radeon RX 7900 XTX - NVIDIA kartalariga muqobil yuqori unumdorlikli karta",
          "NVIDIA GeForce RTX 4060 - o'rta darajadagi narx/unumdorlik nisbati bilan",
          "AMD Radeon RX 6600 - byudjet o'yin kartasi",
          "NVIDIA RTX A5000/A6000 - professional foydalanish uchun"
        ],
        keyFeatures: [
          "VRAM (Video RAM) - video kartaning o'z xotirasi, teksturalar va modellarni saqlash uchun",
          "Yadro tezligi (MHz/GHz) - grafik protsessor ishlash tezligi",
          "CUDA/Stream protsessorlari - parallel hisoblashlar uchun maxsus yadrolar soni",
          "Ray Tracing bloklari - real vaqtdagi nur izlash texnologiyasi uchun bloklari",
          "Tensor yadrolar - AI va mashinali o'qitish amallarini tezlashtiruvchi yadrolar"
        ],
        advantages: [
          "Yuqori grafik unumdorlik - zamonaviy o'yinlar va dasturlarni tez ishlashi",
          "Yuqori sifatli vizualizatsiya - ray tracing, DLSS kabi texnologiyalar bilan",
          "Parallel hisoblash quvvati - ko'plab amallarni bir vaqtda bajarish",
          "Video dekodlash/kodlash - video montajni tezlashtirish",
          "AI va mashinali o'qitishni qo'llab-quvvatlash"
        ],
        disadvantages: [
          "Yuqori narx - zamonaviy top modellar narxi 1000-2000$ dan oshishi mumkin",
          "Yuqori quvvat sarfi - kuchli GPUlar 300-450W gacha sarflashi mumkin",
          "Isitish - yuqori quvvat bilan ishlash haroratni ko'taradi, maxsus sovutish kerak",
          "O'lchamlari katta - yuqori unumdorli kartalar katta joyni egallaydi",
          "Driverlar bilan bog'liq muammolar - ba'zi yangi o'yinlar bilan mos kelmasligi mumkin"
        ],
        maintenance: [
          "Chang va iflosliklardan tozalash (6 oyda bir marta)",
          "Sovutish tizimini (kuler, termopastani) tekshirish",
          "Drayverlani yangilab turish",
          "Haroratni nazorat qilish (90°C dan past bo'lishi kerak)",
          "Ortiqcha yuklamadan saqlash, overclockingni nazorat qilish"
        ],
        specifications: {
          vram: "4GB-24GB (modeliga qarab)",
          powerConsumption: "75W-450W (modeliga qarab)",
          interfaceBus: "PCIe 3.0, 4.0 yoki 5.0",
          displays: "1-4 monitor ulanishi mumkin (modelga qarab)",
          connectivityPorts: "HDMI 2.1, DisplayPort 1.4, USB-C"
        },
        additionalInfo: "Video kartani tanlashda monitor ruxsati (1080p, 1440p, 4K), o'ynamoqchi bo'lgan o'yinlar turi, grafikaning kerakli sifati va byudjet muhim rol o'ynaydi. GPU hashingni qo'llab-quvvatlashini ham tekshiring - bu kriptovalyuta mayning uchun muhim. Notebukda GPU almashtirib bo'lmasligi sababli, xarid qilishdan oldin bu xususida ehtiyot bo'lish kerak."
        }
      },
      {
        id: 6,
      component: "Anakartta (Motherboard)",
        icon: "motherboard",
      shortDescription: "Barcha kompyuter komponentlarini birlashtiruvchi asosiy plata.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/b2pd3Y6aBag",
        detailedInfo: {
        function: "Anakartta kompyuterning barcha tarkibiy qismlarini birlashtiruvchi asosiy plata hisoblanadi. U protsessor, RAM, qattiq disk, video karta va boshqa qurilmalarni o'zaro bog'laydi hamda ular orasidagi ma'lumot almashinuvini ta'minlaydi. Anakartta kompyuter tizimining 'asab tizimi' vazifasini bajaradi va uning sifati butun tizim barqarorligiga ta'sir qiladi.",
        howItWorks: "Anakartta bir nechta chipset va kontrollerlardan iborat bo'lib, ular turli qurilmalar o'rtasidagi aloqani boshqaradi. U PCIe, SATA, USB shinalarini ta'minlaydi va boshqaradi. Markaziy chipset (northbridge va southbridge) protsessor, xotira, video karta va boshqa periferallar o'rtasidagi signallarni yo'naltiradi. Zamonaviy anakartlar ichki BIOS/UEFI firmware orqali boshlang'ich sozlashlarni saqlaydi va yuklash jarayonini boshqaradi.",
        types: [
          "ATX - standart to'liq o'lchamli anakartta",
          "Micro-ATX (mATX) - kichikroq o'lchamli, kamroq kengaytirish slotlariga ega",
          "Mini-ITX - eng kichik standart, kichkina tizimlarga mo'ljallangan",
          "E-ATX (Extended ATX) - katta o'lchamli, ko'proq xususiyatlarga ega",
          "Server anakartlari - yuqori ishonchliligi va kengaytirilish imkoniyatlari bilan"
        ],
        examples: [
          "ASUS ROG Maximus Z790 Hero - Intel protsessorlari uchun premium gaming anakartta",
          "MSI MPG B650 CARBON WIFI - AMD Ryzen protsessorlari uchun o'rta darajadagi anakartta",
          "Gigabyte Z790 AORUS ELITE AX - Intel 13-14-chi avlod uchun o'rta-premium segmenti",
          "ASRock B650M PRO RS - kompakt tizimlar uchun AMD anakartta",
          "ASUS ProArt Z790-CREATOR WIFI - kontent yaratuvchilar uchun professional anakartta"
        ],
        keyFeatures: [
          "Protsessor soketi - qanday protsessorlarni qo'llab-quvvatlashini aniqlaydi (Intel LGA1700, AMD AM5)",
          "Chipset - qo'shimcha xususiyatlar va kengaytirilish imkoniyatlarini belgilaydi (Z790, B650)",
          "RAM slotlari - o'rnatiladigan operativ xotira turi va maksimal hajmi (DDR4/DDR5)",
          "Kengaytirish slotlari - PCIe slotlari, M.2 slotlari soni va versiyasi",
          "IO portlari - USB, HDMI, DisplayPort, Ethernet va boshqa ulanish portlari"
        ],
        advantages: [
          "Barcha komponentlarni birlashtirish qobiliyati",
          "Turli xil kengaytirish imkoniyatlari - qo'shimcha qurilmalarni ulash",
          "Tizim ishlash tezligini optimallashtirishga yordam beradi",
          "Overclocking imkoniyati - premium modellarda",
          "Ko'p funksiyali I/O paneli - turli ulanish usullari"
        ],
        disadvantages: [
          "Almashtirish murakkabligi - butun tizimni qayta yig'ish kerak",
          "Mos kelish muammolari - har qanday komponent bilan ishlamasligi mumkin",
          "Yuqori narx - yuqori darajadagi modellar qimmat",
          "Cheklangan upgradability - protsessor yangilanishlaridan so'ng almashtirilishi kerak",
          "Shikastlanishga sezuvchan - statik elektr yoki fizik zararlarga nisbatan"
        ],
        maintenance: [
          "Changlarda tozalash - siqilgan havo yoki maxsus cho'tka bilan",
          "BIOS/UEFI yangilashlarini o'rnatish",
          "VRM sovutgichlarini tekshirib turish",
          "CMOS batareyasini vaqt-vaqti bilan almashtirish (3-5 yilda bir marta)",
          "Elektr tarmog'idan himoya qilish - sifatli quvvat bloki va qo'shimcha himoya moslamalaridan foydalanish"
        ],
        specifications: {
          formFactor: "ATX, mATX, Mini-ITX, E-ATX",
          chipsets: "Intel: Z790, B760, H770; AMD: X670, B650, A620",
          memorySupport: "DDR4: 2133-5333MHz, DDR5: 4800-8000MHz+",
          expansion: "PCIe 3.0, 4.0, 5.0 x16/x8/x4/x1 slotlari",
          storage: "SATA 6Gb/s, M.2 PCIe 4.0/5.0 NVMe"
        },
        additionalInfo: "Anakartta tanlashda protsessor bilan moslikni, RAM xotira tipini, IO portlarini va kengaytirish imkoniyatlarini hisobga olish muhim. Yaxshi anakartta qurilish sifati va barqarorligi muhim rol o'ynaydi. Z-seriyali (Intel) va X-seriyali (AMD) chipsetlar overclocking imkoniyati bilan keladi, B-seriyali chipsetlar o'rta darajadagi, H-seriyali (Intel) va A-seriyali (AMD) esa byudjet variantlardir."
        }
      },
      {
        id: 7,
        component: "Quvvat bloki (PSU)",
      icon: "power-supply",
      shortDescription: "Elektr energiyasini barcha kompyuter qismlariga yetkazib beruvchi qurilma.",
      images: [
        "https://s3p.kattabozor.uz/ri/e4352c8187324e861df457ae4b29bf07cac50d5d325c5f3de0953be4af7ecacd_YIfuqQ_640l.jpg"
      ],
      videoUrl: "https://www.youtube.com/embed/QQTvQvDDs_M",
        detailedInfo: {
        function: "Quvvat bloki (PSU - Power Supply Unit) kompyuter komponentlari uchun elektr energiyasini ta'minlaydigan qurilma. U tarmoqdagi o'zgaruvchan elektr tokini (AC, 220V) kompyuter komponentlari uchun kerak bo'lgan doimiy elektr tokiga (DC, +3.3V, +5V, +12V) aylantiradi. Quvvat bloki kompyuterning barcha qismlariga elektr energiyasini yetkazib beradi va qurilmalarni ortiqcha yuklanishdan himoya qiladi.",
        howItWorks: "Quvvat bloki elektr transformatori, o'zgartiruvchi va stabilizatorlardan iborat. AC elektr quvvatini oladi, uni DC quvvatiga aylantiradi va kerakli kuchlanish darajasiga tushiradi. Zamonaviy quvvat bloklari turli quvvat kanallari orqali har xil kompyuter qismlariga (protsessor, video karta, anakartta, disk qurilmalari) kerakli kuchlanishni ta'minlaydi. PSUlarning samaradorligi (80 Plus sertifikati) elektr energiyasini DC tokiga aylantirish jarayonida qancha energiya yo'qotilishini ko'rsatadi.",
        types: [
          "Standart ATX PSU - ko'pchilik desktop kompyuterlar uchun",
          "SFX/SFX-L - kichik hajmli kompyuterlar uchun",
          "TFX/Flex ATX - juda kichik sistemalar uchun",
          "Modular PSU - aloqada kerak bo'lgan kabellarnigina ulash imkoniyati mavjud",
          "Semi-modular PSU - asosiy kabellar doimiy, qo'shimcha kabellar modulli"
        ],
        examples: [
          "Corsair RM850x - 850W, 80 Plus Gold, to'liq modulli",
          "EVGA SuperNOVA 750 G5 - 750W, 80 Plus Gold, to'liq modulli",
          "Seasonic FOCUS GX-650 - 650W, 80 Plus Gold, to'liq modulli",
          "be quiet! Straight Power 11 1000W - 1000W, 80 Plus Platinum, to'liq modulli",
          "Silverstone SX700-G - 700W, 80 Plus Gold, SFX formfaktorli"
        ],
        keyFeatures: [
          "Quvvat (Watt) - PSUning maksimal quvvat uzatish imkoniyati",
          "Samaradorlik (80 Plus) - elektr energiyasini DC tokiga aylantirish samaradorligi",
          "Modulli/Modulli emas - kabellarning ulanish usuli",
          "Formfaktor - PSUning o'lchami va moslik standarti",
          "Fan size/noise - sovutish kulerining o'lchami va shovqin darajasi"
        ],
        advantages: [
          "Barqaror elektr ta'minoti - kompyuter ishonchli ishlashini ta'minlaydi",
          "Himoya sxemalari - ortiqcha yuklanish, qisqa tutashuv va kuchlanishdan himoya",
          "Yuqori samaradorlik - elektr energiyasini tejash",
          "Modulli kabellar - kabellashni optimallashtirib, havo oqimini yaxshilaydi",
          "Kengaytirilish imkoniyati - kuchli GPU va CPUlarni qo'llab-quvvatlash"
        ],
        disadvantages: [
          "Sifatlisi qimmat - yuqori sifatli PSUlar yuqori narxga ega",
          "Almashtirish murakkabligi - barcha kabellarni uzib, qayta ulash kerak",
          "O'lcham cheklovlari - kichik kompyuter korpuslari uchun qiyin bo'lishi mumkin",
          "Vaqt o'tishi bilan sifati pasayishi - 5-7 yil davomida nominal quvvati kamayishi mumkin",
          "Shovqin - ba'zi modellarda kuler shovqinli bo'lishi mumkin"
        ],
        maintenance: [
          "Chang va changdan tozalash - sovutish samaradorligini oshirish uchun",
          "Kabellarni tartibli joylashtirish - havo oqimini yaxshilash va qizishni kamaytirish uchun",
          "Elektr tarmog'idagi kuchlanish o'zgarishlaridan himoya qilish",
          "PSU kulerining ishlashini tekshirib turish",
          "PSUni yuklamaga qarab tanlash - maksimal quvvatning 50-70% atrofida ishlash optimal"
        ],
        specifications: {
          certifications: "80 Plus (Bronze, Silver, Gold, Platinum, Titanium)",
          wattage: "450W-1600W (tizim talablariga qarab)",
          dimensions: "ATX: 150x86x140mm, SFX: 125x63.5x100mm",
          warranty: "5-12 yil (ishlab chiqaruvchiga qarab)",
          railSystem: "Single +12V rail yoki Multiple +12V rails"
        },
        additionalInfo: "Quvvat blokini tanlashda tizimning umumiy quvvat talablarini hisobga olish kerak. Quvvat talabini hisoblash uchun onlayn PSU calculyatorlardan foydalanish mumkin. Sifatli PSU kompyuter komponentlarining uzok umrini ta'minlaydi. PSUni tejash hisobiga kompromissga borishni maslahat bermaymiz. 80 Plus Gold va undan yuqori sertifikatli PSUlar eng optimal tanlovdir. Kelajakdagi kengaytirishlar uchun 100-200W qo'shimcha zaxira quvvatni hisobga olish kerak."
        }
      },
      {
        id: 8,
      component: "Kompyuter korpusi",
      icon: "desktop",
      shortDescription: "Barcha kompyuter komponentlarini o'z ichiga oluvchi, himoya qiluvchi va sovutish imkonini beruvchi qurilma.",
      images: [
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/IbH_eYP6Goc",
        detailedInfo: {
        function: "Kompyuter korpusi barcha ichki komponentlarni o'z ichiga oluvchi va himoya qiluvchi asosiy qurilmadir. Korpus nafaqat kompyuterning tashqi ko'rinishi, balki komponentlarning joylashuvi, sovutish samaradorligi va kengaytirilish imkoniyatlarini ham belgilaydi. Shuningdek, u elektr va mexanik himoyani ta'minlaydi, shovqinni kamaytiradi va komponentlarni changdan himoya qiladi.",
        howItWorks: "Korpus ichki ramka, panel va montaj nuqtalaridan iborat bo'lib, u anakarta, quvvat bloki, disk qurilmalari va boshqa komponentlarni montaj qilish imkonini beradi. Korpus sovutish tizimini, shu jumladan kuler o'rnatish joylari, havo oqimi yo'llarini va ba'zi holatlarda suyuqlik sovutish uchun radiator montaj joylarini ta'minlaydi. Korpusning old tomonida kiritish-chiqarish portlari, orqa tomonida esa kengaytirish slotlari uchun teshiklar mavjud.",
        types: [
          "Full Tower - eng katta o'lchamdagi, ko'plab kengaytirish imkoniyatlariga ega",
          "Mid Tower - eng ko'p ishlatiladigan o'lcham, ko'pchilik tizimlar uchun optimal",
          "Mini Tower - o'rta darajadagi kompakt o'lcham",
          "Small Form Factor (SFF) - juda kichik o'lchamdagi, Mini-ITX anakartalar uchun",
          "HTPC (Home Theater PC) - TV ostiga qo'yish uchun mo'ljallangan yassi dizaynli"
        ],
        examples: [
          "Corsair 5000D Airflow - havoni yaxshi o'tkazish uchun optimallashtirilgan Mid-Tower",
          "NZXT H7 Flow - zamonaviy dizayn va yaxshi sovutish balansi bilan",
          "Lian Li O11 Dynamic - ikki kameralri, ko'rsatish uchun mo'ljallangan",
          "Fractal Design Meshify 2 - havoni yaxshi o'tkazish va past shovqin balansi bilan",
          "Cooler Master NR200 - mini-ITX va mATX anakartalar uchun kompakt formfaktor"
        ],
        keyFeatures: [
          "Formfaktor - korpus o'lchami va qanday anakartalarni qo'llab-quvvatlashi",
          "Sovutish imkoniyatlari - kuler o'rnatish joylari soni va o'lchami",
          "Disk qurilma joylari - nechta SSD/HDD o'rnatish mumkinligi",
          "Kengaytirish slotlari - video karta va boshqa PCIe qurilmalariga joy",
          "Frontdagi I/O portlari - USB, audio va boshqa ulanish portlari"
        ],
        advantages: [
          "Komponentlar uchun fizik himoya - zarbalar va changdan saqlaydi",
          "Havo oqimi boshqaruvi - samarali sovutish imkoniyati",
          "Kengaytirilish imkoniyatlari - qo'shimcha qurilmalar qo'shish oson",
          "Shovqin o'chirish - ichki shovqinlarni kamaytirish",
          "Estetik ko'rinish - shaxsiy didga mos keladigan dizayn tanlash imkoniyati"
        ],
        disadvantages: [
          "Joy egallashi - katta korpuslar ko'p joy egallaydi",
          "Vazn - metall korpuslar og'ir bo'lishi mumkin",
          "Transport qilish qiyin - ko'chirish noqulay",
          "Sovutish bilan bog'liq muammolar - yomon loyihalangan korpuslar qizish muammolariga olib kelishi mumkin",
          "Narx - premium korpuslar qimmat bo'lishi mumkin"
        ],
        maintenance: [
          "Muntazam changlardan tozalash - havo kompressori yoki maxsus changyutkich bilan",
          "Kulerlarning ishlashini tekshirish",
          "Filtrlarni tozalash yoki almashtirish (mavjud bo'lsa)",
          "Kabellarni tartibli joylashtirish - havo oqimini yaxshilash uchun",
          "Korpus vintlarini vaqti-vaqti bilan tekshirish va mahkamlash"
        ],
        specifications: {
          dimensions: "Full Tower: ~560x230x560mm, Mid Tower: ~450x210x480mm, Mini-ITX: ~330x165x360mm",
          materials: "SGCC po'lat, alyuminiy, temperli shisha, plastik",
          fanSupport: "120mm, 140mm fan joylari (modelga qarab 2-10 ta)",
          radiatorSupport: "120mm, 240mm, 280mm, 360mm (modelga qarab)",
          expansion: "7-10 ta kengaytirish sloti (korpus turiga qarab)"
        },
        additionalInfo: "Korpus tanlashda tizimdagi komponentlarning o'lchamiga (ayniqsa, uzun video karta, baland protsessor kuleriga, radiatorlarga) e'tibor berish kerak. Yaxshi havo oqimi kompyuter qismlarining haroratini past saqlash va uzoq umir ko'rishi uchun muhim. Airflow korpuslar (mesh old panel bilan) va muvozanatlangan korpuslar (sovutish va shovqin balansi bilan) eng ko'p tavsiya etiladiganlardir."
        }
      },
      {
        id: 9,
      component: "Monitor",
      icon: "desktop-display",
      shortDescription: "Kompyuter tomonidan ishlab chiqarilgan vizual ma'lumotlarni ko'rsatish qurilmasi.",
      images: [
        "https://images.unsplash.com/photo-1527443060795-0402a18106c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616711906324-ac447dbf1b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/ehvz3iN8pp4",
        detailedInfo: {
        function: "Monitor kompyuter tomonidan ishlab chiqarilgan ma'lumotlarni vizual ko'rsatish uchun mo'ljallangan asosiy chiqarish qurilmasidir. U foydalanuvchiga grafik interfeys orqali kompyuter bilan o'zaro aloqada bo'lish imkonini beradi. Monitorlar turli xil texnologiyalar asosida ishlaydi, har xil o'lcham, ruxsat va tasvir sifatiga ega bo'lishi mumkin.",
        howItWorks: "Zamonaviy monitorlar aksariyat LCD (Liquid Crystal Display) yoki LED (Light Emitting Diode) texnologiyalaridan foydalanadi. Monitor video kartta tomonidan uzatiladigan raqamli signallarni qabul qiladi va ularni piksellar orqali ekranda tasvirga aylantiradi. Har bir piksel kichik rangli nuqta bo'lib, ular birga qo'shilib umumiy tasvirni hosil qiladi. Monitorning yangilanish tezligi (Hz) ekran tasvirining bir sekundda necha marta yangilanishini ko'rsatadi. Yuqori yangilanish tezligi tez harakatlanuvchi obyektlar uchun silliqroq ko'rinish beradi.",
        types: [
          "LCD (Liquid Crystal Display) - suyuq kristallar asosidagi monitorlar",
          "LED (Light Emitting Diode) - yorug'lik chiqaruvchi diodlar bilan yoritiladigan LCD monitorlar",
          "OLED (Organic Light Emitting Diode) - har bir piksel o'zini yorita oladigan organik diodli monitorlar",
          "IPS (In-Plane Switching) - keng ko'rish burchagiga ega sifatli LCD panel turi",
          "VA (Vertical Alignment) - chuqur qora ranglar va yuqori kontrast nisbatiga ega panel"
        ],
        examples: [
          "Dell UltraSharp U2720Q - 27\" 4K IPS monitor, kontentni yaratish uchun",
          "LG 27GL850-B - 27\" 1440p IPS gaming monitor, 144Hz yangilanish tezligi",
          "Samsung Odyssey G7 - 32\" 1440p VA gaming monitor, 240Hz yangilanish tezligi va egri ekran",
          "ASUS ProArt PA329C - 32\" 4K IPS professional monitor, 100% Adobe RGB qamrovi",
          "LG C2 42\" OLED - OLED texnologiyali ulkan monitor, gaming va multimedia uchun"
        ],
        keyFeatures: [
          "Ruxsat (Resolution) - ekrandagi piksellar soni, masalan 1920x1080 (Full HD), 2560x1440 (2K), 3840x2160 (4K)",
          "Yangilanish tezligi (Refresh Rate) - bir sekundda ekran necha marta yangilanishi (60Hz, 144Hz, 240Hz)",
          "Panel turi (Panel Type) - TN, IPS, VA, OLED - har birining o'ziga xos xususiyatlari va afzalliklari bor",
          "Rang qamrovi (Color Gamut) - monitor ko'rsata oladigan ranglar diapazoni, sRGB, Adobe RGB, DCI-P3 foizlarda ifodalanadi",
          "Kirish portlari (Input Ports) - HDMI, DisplayPort, USB-C, VGA va boshqalar"
        ],
        advantages: [
          "Yaxshi ko'rinish - katta ekran maydonida ma'lumotlarni aniq ko'rish imkoniyati",
          "Yuqori ruxsat - tafsilotlarni aniq ko'rsatish",
          "Ko'p vazifali - bir vaqtning o'zida bir nechta oyna/dasturlarni ko'rish",
          "Har xil o'lcham va formatlar - individual ehtiyojlarga mos tanlash imkoniyati",
          "Rang aniqligiga ega modellar - professional ishlar uchun"
        ],
        disadvantages: [
          "Elektr sarfi - ayniqsa katta monitorlar ko'p quvvat sarflaydi",
          "Joyni egallashi - katta monitorlar ko'p joy egallaydi",
          "Narxi - yuqori sifatli professionalniy modellar qimmat bo'lishi mumkin",
          "Ko'zga zo'riqish - uzoq vaqt monitorda ishlash ko'z charchoqlariga olib kelishi mumkin",
          "Eskirishi - yangi texnologiyalar tez rivojlanishi sababli model tez eskirib qolishi mumkin"
        ],
        maintenance: [
          "Ekranni tozalash - maxsus suyuqlik yoki nam mato bilan yumshoq tozalash",
          "Brightness va kontrast sozlamalarini to'g'rilash - ko'zni charchatmaslik uchun",
          "Blue light filtrini yoqish - ko'zni himoya qilish uchun",
          "Monitorni to'g'ri joylashtirish - ko'z darajasiga mos, derazadan 90 gradus burchak ostida",
          "Har 20 daqiqada kamida 20 soniya uzoqqa qarash - ko'zni dam oldirish"
        ],
        specifications: {
          displaySizes: "19\" - 49\" diagonal o'lchamlar",
          aspectRatios: "16:9 (standart), 21:9 (ultra-widescreen), 32:9 (super ultra-wide)",
          responseTime: "1ms - 5ms (tez harakatlanuvchi obyektlarni ko'rsatish aniqligini belgilaydi)",
          brightness: "250 - 1000 nits (ekran yorqinligi)",
          contrastRatio: "1000:1 - 3000:1 (statik), bilan 1,000,000:1 gacha (dinamik)"
        },
        additionalInfo: "Monitorni tanlashda asosiy vazifalarga mos modelni tanlash muhim. O'yinlar uchun yuqori yangilanish tezligiga ega (144Hz-240Hz), past kirish kechikishi (input lag) bo'lgan monitorlar tavsiya etiladi. Grafik dizayn va foto/video tahrirlash uchun rang aniqligiga ega, yuqori ruxsatdagi (4K) IPS panelli monitorlar optimal. Ko'p soat ishlash uchun ko'zni himoya qiladigan texnologiyalar (TÜV ko'z himoyasi, flicker-free, blue light filter) mavjud monitorlarni tanlang."
        }
      },
      {
        id: 10,
      component: "Klaviatura",
      icon: "keyboard",
      shortDescription: "Kompyuterga ma'lumotlarni va buyruqlarni kiritish uchun ishlatiluvchi asosiy qurilma.",
      images: [
        "https://images.unsplash.com/photo-1561112078-7d24e04c3407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1609150283042-2bd3d666318d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/cTvPZ9uJD8k",
        detailedInfo: {
        function: "Klaviatura kompyuterga matn ma'lumotlarini, buyruqlarni va boshqaruv signallarini kiritish uchun ishlatiladigan asosiy qurilma hisoblanadi. Klaviatura foydalanuvchiga matn yozish, dasturlar orasida navigatsiya qilish, dasturlash va boshqa faoliyatlar bilan shug'ullanish imkonini beradi. Turli klaviatura turlari va texnologiyalari mavjud bo'lib, ular ergonomika, yozish tajribasi va funksionallikda farqlanadi.",
        howItWorks: "Klaviatura tugmalar ostidagi mexanik yoki membranali o'chirgich (switch) orqali ishlaydi. Tugma bosilganda, elektr zanjiri yopiladi va klaviatura kontrolleri bosilgan tugmaning kodini kompyuterga yuboradi. Kompyuter bu signalni qayta ishlab, tegishli harakat yoki belgini ekranda aks ettiradi. Zamonaviy klaviaturalar USB yoki Bluetooth orqali ulanishi, backlight yoritgich va maxsus makros tugmalariga ega bo'lishi mumkin.",
        types: [
          "Membranali - yumshoq membrana osti bilan, arzon va keng tarqalgan",
          "Mexanik - har bir tugma ostida alohida mexanik o'chirgich bilan",
          "Scissor-Switch - noutbuklarda keng qo'llaniladigan, yassi dizayn",
          "Optik - yorug'lik signallari orqali ishlaydigan eng tez ishlaydigan",
          "Ergonomik - qo'l va bilak zo'riqishini kamaytirish uchun maxsus loyihalangan"
        ],
        examples: [
          "Logitech G915 - past profilga ega, simsiz mexanik gaming klaviatura",
          "Ducky One 3 - yuqori sifatli mexanik klaviatura, almashtiriladigan tugmalar",
          "Microsoft Ergonomic Keyboard - ergonomik dizayn bilan bilak zo'riqishini kamaytiradi",
          "Apple Magic Keyboard - Scissor-switch mexanizmli yupqa klaviatura",
          "Keychron Q1 - to'liq sozlanuvchi mexanik klaviatura, QMK firmwareni qo'llab-quvvatlaydi"
        ],
        keyFeatures: [
          "Tugma turi (Switch Type) - tugmalarning hissi va ishlash usuli (Cherry MX, Gateron, membrane)",
          "Tugmalar joylashuvi (Layout) - QWERTY, AZERTY, full-size, TKL (tenkeyless), 60% va boshqalar",
          "Backlight - yorug'lik, RGB yoki odatiy yoritish",
          "N-key rollover - bir vaqtda nechta tugmani bosib turish mumkinligi",
          "Makros - murakkab buyruqlarni bitta tugmaga dasturlash imkoniyati"
        ],
        advantages: [
          "Tez ma'lumot kiritish - ko'p miqdorda matnni tez kiritish imkoniyati",
          "Taktil fikr (mexanik klaviaturalarda) - yaxshilangan yozish tajribasi",
          "Uzoq ishlash muddati - ayniqsa mexanik klaviaturalar 50-100 million bosilishga mo'ljallangan",
          "Ergonomika - uzoq muddat ishlaganda qo'l zo'riqishni kamaytirish",
          "Funksionallik - maxsus tugmalar va makroslar orqali samaradorlikni oshirish"
        ],
        disadvantages: [
          "Shovqin - ayniqsa mexanik klaviaturalar baland ovoz chiqarishi mumkin",
          "Narx - yuqori sifatli klaviaturalar qimmat bo'lishi mumkin",
          "O'lcham - to'liq o'lchamli klaviaturalar ko'p joy egallaydi",
          "Tozalash qiyinligi - tugmalar ostida chang va ifloslik to'planishi",
          "RSI (Repetitive Strain Injury) xavfi - noto'g'ri foydalanishda qo'l og'rig'i"
        ],
        maintenance: [
          "Klaviaturani muntazam tozalash - chang va iflosliklardan tozalash",
          "Tugmalarni alohida tozalash (mexanik klaviaturalarda)",
          "Suyuqliklardan himoya qilish - ichiga suyuqlik tushirmaslik",
          "Drayverlari va firmwareni yangilab turish",
          "Keycaplari va switchlarni almashtirish (mexanik klaviaturalarda)"
        ],
        specifications: {
          dimensions: "Full-size: ~46x15cm, TKL: ~36x15cm, 60%: ~29x10cm",
          weight: "Full-size: 0.7-1.5 kg (mexanik klaviaturalarda)",
          connectionType: "USB, USB-C, Bluetooth, RF (simsiz)",
          batteryLife: "20-200 soat (simsiz modellar uchun)",
          material: "ABS plastik, PBT plastik, alyuminiy alloy frame"
        },
        additionalInfo: "Klaviaturani tanlashda asosiy qilinishi kerak bo'lgan ishni hisobga olish muhim. Dasturlash va ko'p matn kiritish uchun mexanik klaviaturalar afzal. Mexanik klaviaturalarda switch turini tanlash muhim: Blue - taktil va 'clicky', Brown - taktil lekin kamroq shovqin, Red - taktil emas va tinch. Gaming uchun kam actuation force va tez ishlash vaqtiga ega klaviaturalar afzal. Ergonomika ergonomik muammolari borlar uchun ergonomik klaviatura yoki klaviatura oldida qo'l tirgagi foydalanish tavsiya etiladi."
        }
      },
      {
        id: 11,
      component: "Sichqoncha (Mouse)",
      icon: "computer-mouse",
      shortDescription: "Grafik interfeys bilan ishlaydigan kompyuterlarda kursor harakatini boshqarish uchun qurilma.",
      images: [
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/P3c7p6ylQpQ",
      detailedInfo: {
        function: "Sichqoncha (Mouse) kompyuterdagi kursor yoki ko'rsatkichni boshqarish imkonini beruvchi kirish qurilmasidir. U foydalanuvchiga grafik interfeys elementlarini tanlash, dasturlarni ochish, matn va boshqa obyektlarni belgilash kabi amallarni bajarishga imkon beradi. Sichqoncha kompyuter bilan o'zaro muloqotning asosiy usullaridan biridir va turli turlari ish samaradorligiga ta'sir qilishi mumkin.",
        howItWorks: "Zamonaviy sichqonchalar optik yoki lazerli sensorlar yordamida ishlaydi. Ular harakat davomida sirtdan aks etadigan nurni sensor yordamida aniqlab, bu ma'lumotni kompyuterga yuboradi, natijada ekrandagi kursor harakatlanadi. Sichqonchalar o'z korpusida bir nechta programmalanadigan tugmalarga ega, ular orqali turli buyruqlarni bajarish mumkin. DPI (Dots Per Inch) qiymati sichqoncha sensorining sezgirligi va aniqligini belgilaydi.",
        types: [
          "Optik sichqoncha - standart yuzalarda ishlaydigan, keng tarqalgan",
          "Lazerli sichqoncha - aniqroq va deyarli har qanday yuzada ishlaydi",
          "Gaming sichqoncha - yuqori DPI va ko'p tugmali, o'yinlar uchun mo'ljallangan",
          "Ergonomik sichqoncha - qo'l og'rig'ini kamaytirish uchun maxsus shakldagi",
          "Vertikal sichqoncha - qo'l va bilakning tabiiy holatini ta'minlaydi"
        ],
        examples: [
          "Logitech MX Master 3 - professional ishlatish uchun ergonomik simsiz sichqoncha",
          "Razer DeathAdder V2 - gaming uchun mo'ljallangan, 20,000 DPI sensorli",
          "Logitech G Pro X Superlight - ultra-yengil (63g) simsiz o'yin sichqonchasi",
          "Microsoft Surface Precision Mouse - ko'p qurilmali ulanish va aniq scrolling",
          "Anker Vertical Ergonomic Mouse - bilak zo'riqishini kamaytirish uchun vertikal dizaynli"
        ],
        keyFeatures: [
          "DPI - harakatni aniqlaydigan sensor sezgirligi (800-25,000 DPI diapazonda)",
          "Ergonomika - shakli va vazni qo'l o'lchamiga mosligi",
          "Tugmalar soni - oddiy modellar 2-3 tugmali, gaming modellar 5-12 tugmali",
          "Ulanish usuli - simli, Bluetooth, RF simsiz",
          "Sensor turi - optik, lazerli, yoki HERO kabi yangi texnologiyalar"
        ],
        advantages: [
          "Intuitiv boshqaruv - grafik interfeys bilan samarali ishlash",
          "Aniqlik - yuqori aniqlik bilan ekrandagi obyektlarni tanlash",
          "Ko'p funksionalli - ko'p tugmali modellar turli vazifalarni tezlashtiradi",
          "Ergonomik dizayn - qo'l charchoqlarini kamaytiradi",
          "Sozlanish imkoniyati - DPI, tugmalar funksiyalari va boshqalarni sozlash"
        ],
        disadvantages: [
          "RSI (Repetitive Strain Injury) xavfi - uzoq muddat noto'g'ri ishlatilganda qo'l og'rig'i",
          "Yuzaga bog'liqlik - ayrim modellar maxsus padsiz yaxshi ishlamaydi",
          "Simsiz modellar batareyaga bog'liq",
          "Vazn - ba'zi foydalanuvchilar yengil, ba'zilari esa og'irroq sichqonchalarni afzal ko'radi",
          "O'lcham - har qanday qo'lga mos kelmasligi mumkin"
        ],
        maintenance: [
          "Sensnorni tozalash - sensor aniqligini saqlash uchun",
          "Tugma va g'ildirak mexanizmlarini tekshirish",
          "Simsiz modellar batareyalarini o'z vaqtida almashtirish",
          "Sichqoncha uchun maxsus pad ishlatish - sensor aniqligini oshirish va sirtlarni himoya qilish uchun",
          "Drayverlari va firmwareni yangilab turish"
        ],
        specifications: {
          dimensions: "O'rtacha: 115x65x40mm (modelga qarab)",
          weight: "60-150g (modelga qarab)",
          pollingRate: "125Hz - 1000Hz (8ms - 1ms javob vaqti)",
          buttonLifespan: "10-70 million bosish sikli",
          batteryLife: "1-6 oy (simsiz modellar uchun)"
        },
        additionalInfo: "Sichqonchani tanlashda qo'l o'lchami va ishlatish maqsadini hisobga olish kerak. Katta qo'lli foydalanuvchilar uchun kattaroq sichqonchalar qulay. Gaming uchun yuqori polling rate (1000Hz) va DPI sozlash imkoniyatlariga ega sichqonchalar afzal. Dizayn va kontentni yaratuvchilar uchun yuqori aniqlikli sensorga ega modellar kerak. Uzoq vaqt ishlaydigan foydalanuvchilar uchun ergonomik yoki vertikal sichqonchalar qo'l og'rig'ini kamaytiradi. Sichqoncha padi sichqoncha sensorining ishlashiga ta'sir qilishi mumkin - gaming uchun cloth padlar, aniqlik uchun qattiq yuzali padlar tavsiya etiladi."
      }
    }
  ],
  summary: "Kompyuter tuzilishi murakkab bo'lsa-da, uning asosiy komponenetlarini bilish va tushunish zamonaviy texnologiyadan to'liq foydalanish imkonini beradi. Har bir komponent o'z vazifasini bajaradi va ularning birgalikdagi ishi kompyuter tizimining samarali ishlashini ta'minlaydi. Komponentlarni tanlashda ularning bir-biriga mos kelishi, sifati va ishlash parametrlarini hisobga olish muhim. To'g'ri tanlangan va yaxshi yig'ilgan kompyuter uzoq yillar davomida ishonchli va samarali ishlashi mumkin."
  };
  
  export default computerStructureData;
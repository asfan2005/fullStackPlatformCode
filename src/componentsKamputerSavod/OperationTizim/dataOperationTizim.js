const operationSystemData = {
    title: "Operatsion Tizim",
  description: "Kompyuter dasturiy ta'minotining asosiy qismi bo'lgan operatsion tizim va uning ishlash printsiplari haqida to'liq ma'lumot.",
  lastUpdate: "2024",
    author: "To'raqulov Asfandiyor Jaxongirovich",
  mainImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  videoTutorial: "https://www.youtube.com/embed/26QPDBe-NB8",
    sections: [
      {
        id: 1,
        component: "Windows",
        icon: "windows",
        shortDescription: "Microsoft kompaniyasi tomonidan ishlab chiqilgan eng mashhur operatsion tizim.",
      images: [
        "https://images.unsplash.com/photo-1624571409108-e9a41746af53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/R1F40sRj8Xo",
        detailedInfo: {
          function: "Foydalanuvchi interfeysi va dasturiy ta'minotni boshqaradi",
        howItWorks: "Windows operatsion tizimi kompyuter resurslari va dasturlarini boshqarish uchun NT kernelidan foydalanadi. Windows dasturlari uchun API taqdim etadi va foydalanuvchilarga grafik interfeys orqali tizim bilan o'zaro muloqot qilish imkonini beradi.",
        types: ["Windows 11", "Windows 10", "Windows Server", "Windows IoT", "Windows Mobile"],
        examples: [
          "Windows 11 Pro - eng yangi versiya, zamonaviy interfeys va xususiyatlar bilan",
          "Windows 10 Home - ko'pchilik uy foydalanuvchilari uchun mo'ljallangan",
          "Windows Server 2022 - korxonalar uchun server operatsion tizimi",
          "Windows IoT Enterprise - embedded qurilmalar uchun",
          "Windows 365 Cloud PC - cloud asosidagi Windows tajribasi"
        ],
          keyFeatures: [
          "Foydalanuvchi do'stona interfeys - TaskBar, Start Menu, File Explorer",
          "Keng dasturiy ta'minot qo'llab-quvvatlash - ko'plab Windows dasturlari",
          "DirectX texnologiyasi - yuqori sifatli o'yinlar va multimedia",
          "Microsoft Office bilan integratsiya - samaradorlikni oshirish",
          "Windows Update - avtomatik yangilanishlar"
          ],
          advantages: [
          "Ko'p dasturlar bilan moslik - keng dasturiy ta'minot ekotizimi",
          "Oson o'rnatish va sozlash - foydalanuvchi uchun qulay",
          "Keng tarqalgan - ishlab chiquvchilar e'tibori",
          "Microsoft xizmatlari integratsiyasi - Office, OneDrive, Teams",
          "Yaxshi texnik yordam - keng tarqalgan qo'llab-quvvatlash"
          ],
          disadvantages: [
          "Litsenziya narxi yuqori - tijorat operatsion tizimi",
          "Resurs talab qilishi - ayrim hollarda ko'p system resursi sarflaydi",
          "Xavfsizlik masalalari - viruslar va zaifliklar maqsadi",
          "Maxfiylik muammolari - foydalanuvchi ma'lumotlarini yig'ish",
          "Majburiy yangilanishlar - ba'zan noqulay vaqtda"
        ],
        maintenance: [
          "Muntazam Windows Update orqali yangilab turish",
          "Antivirus dasturlarini ishlatish",
          "Diskni tozalab turish va defragmentatsiya",
          "Keraksiz dasturlarni o'chirib tashlash",
          "Xavfsizlik sozlamalarini tekshirish"
        ],
        specifications: {
          processor: "1 GHz yoki tezroq, 64-bit",
          ram: "Minimum 4GB, tavsiya etilgan 8GB+",
          storage: "Minimum 64GB, tavsiya etilgan 256GB+",
          display: "800x600 yoki yuqoriroq ruxsat",
          internet: "Internet ulanishi Windows yangilanishlari uchun"
        },
        additionalInfo: "Windows Microsoft tomonidan 1985 yilda ishlab chiqilgan bo'lib, hozirgacha eng keng tarqalgan desktop operatsion tizim hisoblanadi. Windows NT kernel asosida qurilgan bo'lib, Windows 10 va Windows 11 versiyalari Windows-as-a-Service modeliga asoslangan - bu degani tizim muntazam yangilanib turadi va yangi versiyalar o'rniga yangilanishlar oladi."
        }
      },
      {
        id: 2,
        component: "Linux",
        icon: "linux",
        shortDescription: "Ochiq kodli, bepul operatsion tizim.",
      images: [
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/rrB13utjYOQ",
        detailedInfo: {
          function: "Tizim resurslarini boshqarish va dasturlarni ishga tushirish",
        howItWorks: "Linux - bu ochiq kodli kernel bo'lib, Linus Torvalds tomonidan yaratilgan. Kernel dasturiy ta'minot va hardware o'rtasida aloqa o'rnatadi. Linux distributsiyalari kernelni GNU dasturlari, utilitalari va boshqa komponentlar bilan birlashtiradi, to'liq operatsion tizimni yaratadi.",
        types: ["Ubuntu", "Fedora", "CentOS", "Debian", "Arch Linux", "Linux Mint"],
        examples: [
          "Ubuntu 22.04 LTS - foydalanuvchi do'stona, har 2 yilda yangilanadigan uzoq muddatli qo'llab-quvvatlash versiyasi",
          "Fedora 39 - eng so'nggi texnologiyalar bilan yangilangan versiya",
          "Linux Mint - Windows foydalanuvchilari uchun qulay, Cinnamon desktop environment bilan",
          "Debian 12 - barqarorlik, xavfsizlik va ochiq kodli falsafa uchun mashhur",
          "Red Hat Enterprise Linux - tijorat maqsadidagi barqaror Linux versiyasi"
        ],
          keyFeatures: [
          "Terminal orqali boshqarish - kuchli buyruqlar qatori interfeysi",
          "Xavfsizlik - yuqori darajadagi tizim xavfsizligi",
          "Moslashuvchanlik - har qanday ehtiyojga moslashtirilishi mumkin",
          "Package management - dasturlarni markazlashtirilgan holda o'rnatish va yangilash",
          "Desktop environments - GNOME, KDE, Xfce va boshqalar"
          ],
          advantages: [
          "Bepul va ochiq kodli - hech qanday litsenziya to'lovi yo'q",
          "Yuqori xavfsizlik - viruslar kamroq uchraydi",
          "Kam resurs talab qilishi - eski qurilmalarda ham yaxshi ishlaydi",
          "Moslashuvchanlik - to'liq sozlash imkoniyati",
          "Kuchli serverlar uchun - internet serverlarining ko'pchiligi Linux ishlatadi"
          ],
          disadvantages: [
          "O'rganish qiyinroq - yangi foydalanuvchilar uchun murakkab bo'lishi mumkin",
          "Ba'zi dasturlar bilan moslik muammolari - mashhur tijorat dasturlari yo'q bo'lishi mumkin",
          "Texnik yordam cheklangan - tijorat qo'llab-quvvatlash cheklangan",
          "Hardware drayverlari - ba'zi hardware bilan muammolar bo'lishi mumkin",
          "Fragmentatsiya - juda ko'p tanlov va variantlar chalkashlik yaratishi mumkin"
        ],
        maintenance: [
          "Tizimni muntazam yangilab turish - apt, dnf, pacman kabi package manager orqali",
          "Keraksiz paketlarni tozalash",
          "Xavfsizlik sozlamalarini tekshirish - firewall, SELinux/AppArmor",
          "Loglarni tekshirish - /var/log direktoriasida",
          "Minimal foydalanuvchi huquqlari bilan ishlash"
        ],
        specifications: {
          processor: "1 GHz yoki tezroq, 32-bit/64-bit",
          ram: "Minimum 2GB, tavsiya etilgan 4GB+",
          storage: "Minimum 20GB, tavsiya etilgan 50GB+",
          display: "1024x768 yoki yuqoriroq ruxsat",
          bootable: "USB yoki DVD diskdan yuklash imkoniyati"
        },
        additionalInfo: "Linux kernel Linus Torvalds tomonidan 1991 yilda yaratilgan va UNIX operatsion tizimiga o'xshash tizim yaratish maqsadida ishlab chiqilgan. Bugun Linux serverlarda, superkomputerlarda, embedded qurilmalarda, Android qurilmalarida, va desktop komputerlarda ishlatiladi. Linux ochiq kod falsafasining eng muvaffaqiyatli namunalaridan biri hisoblanadi."
        }
      },
      {
        id: 3,
        component: "macOS",
        icon: "apple",
        shortDescription: "Apple kompaniyasining Macintosh kompyuterlari uchun operatsion tizimi.",
      images: [
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/uXoIIhPM9-8",
        detailedInfo: {
          function: "Apple qurilmalari uchun maxsus operatsion tizim",
        howItWorks: "macOS Unix asosida qurilgan operatsion tizim bo'lib, Apple tomonidan maxsus Mac kompyuterlari uchun ishlab chiqilgan. U XNU (X is Not Unix) kernel asosida qurilgan va Darwin operatsion tizimining bir qismi hisoblanadi. macOS Apple'ning Cocoa API'lari orqali foydalanuvchi interfeysi va dasturlar bilan ishlaydi.",
        types: ["macOS Sonoma", "macOS Ventura", "macOS Monterey", "macOS Big Sur", "macOS Catalina"],
        examples: [
          "macOS 14 (Sonoma) - 2023-yil sentyabrida chiqarilgan eng so'nggi versiya",
          "macOS 13 (Ventura) - 2022-yilda chiqarilgan",
          "macOS 12 (Monterey) - 2021-yilda chiqarilgan",
          "macOS 11 (Big Sur) - Apple Silicon chiplarini qo'llab-quvvatlagan birinchi versiya",
          "macOS 10.15 (Catalina) - 32-bit dasturlar qo'llab-quvvatlashni to'xtatgan versiya"
        ],
          keyFeatures: [
          "Dizayn va stabillik - estetik va ishonchli interfeys",
          "Apple ekotizimi - iPhone, iPad, Apple Watch bilan integratsiya",
          "Xavfsizlik - mahalliy xavfsizlik xususiyatlari va SandBox",
          "iCloud integratsiyasi - qurilmalar o'rtasida uzluksiz ma'lumot sinxronizatsiyasi",
          "Time Machine backup - avtomatik tizim zaxiralash tizimi"
          ],
          advantages: [
          "Yuqori sifatli interfeys - estetik va intuitiv dizayn",
          "Apple qurilmalari bilan mukammal integratsiya - ekotizim ichida ishlash",
          "Yuqori xavfsizlik - viruslar kam, mahalliy xavfsizlik xususiyatlari",
          "Optimallashtirilgan ishlash - hardware va software integratsiyasi",
          "Professional dasturlar uchun qulay - dizayn, video montaj, audio ishlab chiqarish"
          ],
          disadvantages: [
          "Faqat Apple qurilmalarida ishlaydi - Apple Mac kompyuterlariga cheklangan",
          "Narxi yuqori - MacOS faqat qimmat Apple kompyuterlarida ishlaydi",
          "Dasturlar cheklangan - Windows'ga qaraganda kamroq dasturlar mavjud",
          "Qurilmalarni almashtirish qiyin - foydalanuvchining o'zi komponentlarni almashtira olmaydi",
          "Moslashuvchanlik cheklangan - o'zgartirish imkoniyatlari Linux/Windows'ga qaraganda cheklangan"
        ],
        maintenance: [
          "Software Update orqali yangilab turish",
          "Disk Utility orqali disklarni tekshirish",
          "Avtomatik Time Machine zaxira nusxalarini sozlash",
          "System Preferences orqali tizimni optimallashtirish",
          "SSD disk bo'lsa TRIM funksiyasini yoqish"
        ],
        specifications: {
          processor: "Intel yoki Apple Silicon (M1, M2, M3 oilasi)",
          ram: "Minimum 8GB, tavsiya etilgan 16GB+",
          storage: "Minimum 256GB, tavsiya etilgan 512GB+",
          graphics: "Intel UHD Graphics yoki Apple integratsiyalangan GPU",
          internet: "Internet ulanishi yangilanishlar uchun"
        },
        additionalInfo: "macOS dastlab 2001-yilda Mac OS X nomi bilan chiqarilgan va 2016-yilda macOS nomini olgan. Bu tizim Unix asosidagi Darwin operatsion tizimining ustiga qurilgan. 2020-yildan boshlab Apple Silicon chiplarida ishlash uchun optimallashtirilgan. macOS dizayn, video/audio montaj va dasturlash sohalarida keng qo'llaniladi va Apple'ning 'walled garden' (yopiq bog'cha) ekotizimining muhim qismi hisoblanadi."
        }
      },
      {
        id: 4,
        component: "Tizim Yadrosi (Kernel)",
      icon: "microchip",
        shortDescription: "Operatsion tizimning asosiy qismi.",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/jz6DKqg5OLA",
        detailedInfo: {
          function: "Qurilmalar va dasturlar o'rtasida aloqani ta'minlaydi",
        howItWorks: "Kernel operatsion tizimning eng asosiy qismi bo'lib, to'g'ridan-to'g'ri hardware resurslarni (CPU, RAM, I/O qurilmalari) boshqaradi. Kernel dasturlar va hardware o'rtasida vositachi bo'lib xizmat qiladi, hardware resurslarini dasturlar o'rtasida taqsimlaydi va tizim xavfsizligini ta'minlaydi.",
        types: ["Monolithic Kernel", "Microkernel", "Hybrid Kernel", "Exokernel", "Nanokernel"],
          examples: [
          "Linux Kernel - eng mashhur ochiq kodli kernel, ko'plab Linux distributsiyalarida ishlatiladi",
          "Windows NT Kernel - Windows 10/11 va Windows Server operatsion tizimlari asosi",
          "XNU (macOS) - macOS va iOS operatsion tizimlari asosidagi kernel",
          "BSD Kernel - FreeBSD, OpenBSD va boshqa BSD asosidagi tizimlar kerneli",
          "Zircon (Google Fuchsia) - Google tomonidan ishlab chiqilayotgan zamonaviy microkernel"
          ],
          keyFeatures: [
          "Xotira boshqaruvi - physical va virtual xotirani boshqaradi",
          "Jarayonlar boshqaruvi - protsessorni taqsimlash va multitasking ta'minlaydi",
          "Qurilmalar boshqaruvi - hardware qurilmalar bilan o'zaro aloqa qiladi",
          "Fayl tizimi boshqaruvi - disk va fayl operatsiyalarini nazorat qiladi",
          "Xavfsizlik boshqaruvi - resurslar va ma'lumotlarni himoya qiladi"
          ],
          advantages: [
          "Tizim resurslarini samarali boshqarish - resurslarga to'g'ridan-to'g'ri murojaat qilish",
          "Yuqori unumdorlik - hardware bilan to'g'ridan-to'g'ri ishlash imkoniyati",
          "Hardware bilan to'g'ridan-to'g'ri aloqa - drayverlar orqali samarali ishlash",
          "Xavfsizlik nazorati - sistemaning eng asosiy qismi sifatida himoya qilish",
          "Tizim barqarorligi - ishonchli ishlashni ta'minlaydi"
          ],
          disadvantages: [
          "Murakkab arxitektura - tushunish va ishlab chiqish qiyin",
          "Xatolarni tuzatish qiyin - kernel level xato butun tizimni ishdan chiqarishi mumkin",
          "Yangilash uchun qayta yuklash kerak - ko'p hollarda o'zgarishlar uchun restart kerak",
          "Xavfsizlik zaifliklariga ta'sirchan - kerneldagi zaiflik butun tizimni xavf ostiga qo'yadi",
          "O'zgartirish murakkab - monolithic kernelda bir qismni o'zgartirish butun kernelni qayta kompilyatsiya qilishni talab qilishi mumkin"
        ],
        maintenance: [
          "Kernel yangilanishlarini o'rnatish - xavfsizlik va barqarorlik uchun",
          "Kernel parametrlarini sozlash - sysctl, registry yoki boshqa vositalar orqali",
          "Kernel loglarini tekshirish - muammolarni aniqlash uchun",
          "Kernel panikasidan keyin tizimni tiklash",
          "Drayverlar mosligini ta'minlash"
        ],
        specifications: {
            processor: "x86, x64, ARM yoki boshqa arxitekturalar",
          ram: "Kernel turiga qarab - minimal 4MB dan bir necha GB gacha",
            storage: "Bir necha MB dan bir necha GB gacha",
          compatibility: "Hardware bilan moslik kerak",
            security: "Xavfsizlik modullarini qo'llab-quvvatlash"
        },
        additionalInfo: "Tizim yadrosi yoki kernel operatsion tizimning yuragini tashkil etadi. U 1960-1970 yillarda MULTICS va UNIX operatsion tizimlari bilan rivojlana boshlagan. Monolithic kernellar (Linux) barcha kernel funksiyalarini bir yagona kod bazasida birlashtiradi. Microkernellar (MINIX) esa asosiy funksiyalarni kernelda, qolgan funksiyalarni foydalanuvchi maydonda ishlaydi. Hybrid kernellar (Windows NT, XNU) esa ikkala yondashuvning aralashmasini qo'llaydi."
        }
      },
      {
        id: 5,
        component: "Fayllar Tizimi",
      icon: "folder",
        shortDescription: "Ma'lumotlarni saqlash va boshqarish usuli.",
      images: [
        "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/KN8YgJnShPM",
        detailedInfo: {
          function: "Fayllarni saqlash va ularga kirish imkoniyatini ta'minlaydi",
        howItWorks: "Fayl tizimi ma'lumotlarni disk yoki boshqa saqlash qurilmasida tashkil qilish va saqlash usulidir. U fayllarni qanday saqlash, nomlash, kirish va boshqarish kerakligini belgilaydi. Fayl tizimi fayl va papkalar ierarxiyasini yaratadi, ma'lumotlarni bloklarga bo'ladi va indekslash mexanizmlaridan foydalanadi.",
        types: ["NTFS", "ext4", "APFS", "FAT32", "exFAT", "HFS+", "Btrfs", "ZFS"],
          examples: [
          "Windows NTFS fayl tizimi - Windows operatsion tizimida ishlatiladi, xavfsizlik va jurnallash xususiyatlari mavjud",
          "Linux ext4 fayl tizimi - Linux tizimlarida eng ko'p qo'llaniladigan fayl tizimi",
          "macOS APFS fayl tizimi - Apple File System, SSD disklar uchun optimallashtirilgan",
          "Universal FAT32 - ko'plab qurilmalarda qo'llab-quvvatlanadigan, ammo 4GB fayl hajmi cheklovi bor",
          "ZFS - katta hajmli ma'lumotlar uchun yuqori darajadagi fayl tizimi"
          ],
          keyFeatures: [
          "Fayl huquqlari boshqaruvi - foydalanuvchi huquqlari va kirishni cheklash",
          "Fragmentatsiya nazorati - disk makonidan samarali foydalanish",
          "Jurnallash tizimi - tizim ishdan to'xtagan holatda ma'lumotlar butunligini saqlash",
          "Ma'lumotlar shifrlash - fayl darajasida shifrlash orqali ma'lumotlarni himoya qilish",
          "Fayl tiklash imkoniyati - o'chirilgan yoki shikastlangan fayllarni tiklash"
          ],
          advantages: [
          "Ma'lumotlarni tashkil qilish - fayllar va papkalar ierarxiyasi",
          "Xavfsiz saqlash - huquqlar va attritbutlar orqali himoya",
          "Tezkor kirish - indekslash va keshlashtirish orqali",
          "Katta hajmli fayllarni qo'llab-quvvatlash - zamonaviy fayl tizimlari terabaytlar hajmidagi fayllarni qo'llab-quvvatlaydi",
          "Zaxira nusxa olish imkoniyati - bir xil vaqtdagi (snapshot) nusxalar yoki jurnallash"
          ],
          disadvantages: [
          "Fragmentatsiya muammolari - diskda bo'sh joy tugagach fayl bloklari tarqalib ketishi mumkin",
          "Tizimga bog'liqlik - ayrim fayl tizimlari ma'lum operatsion tizimlarga bog'langan",
          "Turli formatlar o'rtasida moslik muammolari - har xil tizimlar o'rtasida ko'chirish muammolari",
          "Tiklash murakkabligi - chuqur shikastlanganda tiklash qiyin bo'lishi mumkin",
          "Eskirgan fayl tizimlar cheklovlari - fayl hajmi, maks fayl soni, nomlash cheklovlari"
        ],
        maintenance: [
          "Muntazam disk tekshiruvlari - CHKDSK, fsck kabi utilitalar bilan",
          "Defragmentatsiya (kerak bo'lganda) - fayllarni tartibga solish",
          "Disk bo'sh joy nazorati - kamida 10-15% bo'sh joy saqlash",
          "Fayl tizimi loglari nazorati - muammolarni aniqlash uchun",
          "Fayl tizimi xususiyatlarini optimallash - mount options, fayl tizimi sozlamalari"
        ],
        specifications: {
          processorUsage: "Minimal, ammo file operatsiyalari ko'p bo'lganda yuqori bo'lishi mumkin",
          ram: "Minimal talab, ammo cache uchun qo'shimcha xotira foydalaniladi",
          storage: "Diskning 5-15% fayl tizimi metama'lumotlari uchun ajratiladi",
          compatibility: "OS bilan moslik talab qilinadi",
          management: "Fayl tizimi boshqaruv vositalari mavjud bo'lishi kerak"
        },
        additionalInfo: "Fayl tizimlari kompyuter texnologiyasining asosiy qismlaridan biri hisoblanadi. Ilk fayl tizimlari sodda tuzilishga ega edi, zamonaviy fayl tizimlari esa katta hajm, yuqori ishonchlilik, xavfsizlik va turli xil qurilmalar uchun optimallashtirilgan. Har bir operatsion tizim o'zining asosiy fayl tizimiga ega: Windows - NTFS, Linux - ext4, macOS - APFS. Ma'lumotlar qayta tiklanishini ta'minlash va xavfsizlikni oshirish uchun jurnallash (journaling) va shifrlash fayl tizimlarining muhim xususiyatlari hisoblanadi."
        }
      },
      {
        id: 6,
      component: "Android",
      icon: "android",
      shortDescription: "Google tomonidan ishlab chiqilgan, mobil qurilmalar uchun mo'ljallangan operatsion tizim.",
      images: [
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533478583204-680d4ff74891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/l9ZdmQIeAGU",
      detailedInfo: {
        function: "Mobil qurilmalar uchun operatsion tizim",
        howItWorks: "Android Linux kernel asosida qurilgan bo'lib, ochiq kodli operatsion tizimdir. U Java va Kotlin dasturlash tillari yordamida yaratiladigan mobil ilovalarni qo'llab-quvvatlaydi. Android Runtime (ART) orqali ilovalar bajariladi va qurilma resurslarini boshqaradi. Android foydalanuvchilarga touch-interfeys va ko'plab mobil xizmatlarni taqdim etadi.",
        types: ["Android 14", "Android 13", "Android 12", "Android 11", "Android TV", "Android Auto"],
          examples: [
          "Google Pixel qurilmalarida ishlaydigan sof Android",
          "Samsung One UI - Samsung qurilmalari uchun Android modifikatsiyasi",
          "Xiaomi MIUI - Xiaomi qurilmalari uchun Android modifikatsiyasi",
          "Android Go - kam quvvatli qurilmalar uchun yengillashtirilgan versiya",
          "LineageOS - community tomonidan yaratiladigan Android distributivi"
          ],
          keyFeatures: [
          "Google Play do'koni - million ilovalarga kirish imkoniyati",
          "Google xizmatlari integratsiyasi - Maps, Gmail, Drive, Photos",
          "Kengaytiriladigan UI - launcher, widget va temalar orqali sozlash",
          "Ko'p vazifali imkoniyatlar - split-screen, floating window, background services",
          "Notification center - bildirishnomalarni boshqarish"
          ],
          advantages: [
          "Ochiq kodli - ishlab chiqaruvchilar o'z versiyalarini yaratishi mumkin",
          "Keng tarqalgan - ko'p qurilmalarda qo'llaniladi",
          "Moslashuvchanlik - turli xil hardware bilan ishlaydi",
          "Keng ilova ekotizimi - million ilovalar mavjud",
          "Foydalanuvchi uchun qulay UX - sozlash va moslashtirilishi oson"
          ],
          disadvantages: [
          "Fragmentatsiya - turli versiyalar va manufacturer modifikatsiyalari",
          "Xavfsizlik muammolari - ochiq ekotizim tufayli",
          "Batareya sarfi - ba'zi ilovalarda yuqori bo'lishi mumkin",
          "Yangilanishlar kechikishi - manufacturer o'zgartirishlari tufayli",
          "Ma'lumotlar yig'ish masalalari - Google tomonidan ma'lumotlar to'planishi"
        ],
        maintenance: [
          "Tizimni muntazam yangilab turish",
          "Ortiqcha va keraksiz ilovalarni o'chirib tashlash",
          "Play Protect xizmatini yoqiq holda saqlash",
          "Ishonchli manbalardan ilova o'rnatish",
          "Batareya optimizatsiya sozlamalarini tekshirish"
        ],
        specifications: {
          processor: "ARM-asosidagi protsessorlar, minimal 1.5 GHz",
          ram: "Minimal 2GB, tavsiya etilgan 4GB+",
          storage: "Minimal 16GB, tavsiya etilgan 64GB+",
          display: "Minimal 480x800, tavsiya etilgan 1080x1920+",
          connectivity: "Wi-Fi, Bluetooth, mobil internet qo'llab-quvvatlash"
        },
        additionalInfo: "Android dastlab 2003-yilda Android Inc. tomonidan boshlangan va 2005-yilda Google tomonidan sotib olingan. Birinchi Android-ga asoslangan smartfon 2008-yilda chiqarilgan HTC Dream edi. Bugungi kunga kelib, Android dunyo bo'ylab eng ko'p ishlatiladigan mobil operatsion tizim bo'lib, global smartfon bozorining 70% dan ko'prog'ini egallaydi. Har bir Android versiyasi shirinlik nomi bilan atalgan (masalan, KitKat, Lollipop, Marshmallow), ammo Android 10 dan boshlab faqat raqamli nomlanish boshlanganedi."
        }
      },
      {
        id: 7,
      component: "iOS",
      icon: "mobile-alt",
      shortDescription: "Apple kompaniyasi tomonidan iPhone va iPad qurilmalari uchun ishlab chiqilgan operatsion tizim.",
      images: [
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/lFw9rPpdavc",
      detailedInfo: {
        function: "iPhone va iPad qurilmalari uchun operatsion tizim",
        howItWorks: "iOS Apple'ning mobil qurilmalari (iPhone, iPad) uchun operatsion tizim bo'lib, macOS kabi Darwin kernel va XNU asosida qurilgan. Tizim Swift va Objective-C tillarida yozilgan ilovalarni boshqaradi va Apple'ning qattiq hardware va software integratsiyasi tufayli yuqori optimallikka ega.",
        types: ["iOS 17", "iOS 16", "iOS 15", "iPadOS", "watchOS", "tvOS"],
          examples: [
          "iOS 17 - 2023-yilda chiqarilgan eng so'nggi versiya",
          "iOS 16 - 2022-yilda chiqarilgan versiya",
          "iPadOS 17 - iPad uchun maxsus moslashtirilgan iOS versiyasi",
          "iOS 15 - 2021-yilda chiqarilgan versiya",
          "iOS 14 - Home Screen widget'larini taqdim etgan versiya"
          ],
          keyFeatures: [
          "App Store - million ilovalar mavjud bo'lgan ekosistemasiga kirish",
          "iCloud integratsiyasi - qurilmalar bo'ylab ma'lumotlarni sinxronlash",
          "Xavfsizlik - qattiy app verification va sandbox muhiti",
          "Siri - ovozli yordamchi",
          "FaceTime va iMessage - Apple qurilmalari o'rtasida aloqa"
          ],
          advantages: [
          "Yuqori optimallashtirish - hardware va software integratsiyasi",
          "Ishonchli va tez ishlash - yaxshi optimallashtirish, cheklovlar tufayli",
          "Uzluksiz yangilanishlar - barcha qo'llab-quvvatlanadigan qurilmalar uchun",
          "Xavfsizlik va maxfiylik - yaxshi chegaralangan tizim",
          "Ekotizim - boshqa Apple mahsulotlari bilan integratsiya (Mac, Apple Watch, AirPods)"
          ],
          disadvantages: [
          "Yopiq tizim - foydalanuvchiga cheklangan sozlash imkoniyatlari",
          "Faqat Apple qurilmalarida ishlaydi",
          "App Store cheklovlari - faqat rasmiy do'kondan ilova o'rnatish mumkin",
          "Narxi yuqori - iOS faqat qimmat Apple qurilmalarida ishlaydi",
          "Fayllar bilan ishlash cheklovlari - desktop OS kabi ochiq fayllar tizimi yo'q"
        ],
        maintenance: [
          "Tizimni muntazam yangilab turish",
          "Backup - iCloud orqali zahira nusxa olish",
          "Kerak bo'lmagan ilovalarni o'chirish orqali joy bo'shatish",
          "Battery Health tekshirish",
          "Privacy sozlamalarini optimallash"
        ],
        specifications: {
          processor: "Apple A-seriyali yoki Apple Silicon protsessorlar",
          ram: "4-6GB (yangi modellar)",
          storage: "64GB-1TB",
          display: "Retina Display, Super Retina XDR",
          security: "Face ID yoki Touch ID"
        },
        additionalInfo: "iOS dastlab iPhone OS nomi bilan 2007-yilda birinchi iPhone bilan birga chiqarilgan. 2010-yilda iOS nomini olgan. Apple'ning yopiq ekotizim strategiyasining bir qismi bo'lib, bu foydalanuvchi tajribasini nazorat qilish va xavfsizlikni oshirish imkonini beradi. iOS qurilmalari uzluksiz o'rnatilgan dasturlar (FaceTime, iMessage, Safari) bilan keladi va iCloud orqali Apple qurilmalari o'rtasida ma'lumotlarni sinxronlash imkonini beradi. Apple'ning App Store'i ilovalarni qattiq tekshiradi, bu ilovalar sifatini oshiradi, ammo ba'zan ishlab chiquvchilar uchun cheklovlarni yaratadi."
        }
      },
      {
        id: 8,
      component: "Operatsion Tizim Xavfsizligi",
      icon: "shield-alt",
      shortDescription: "Operatsion tizimni zararli dasturiy ta'minot va ruxsatsiz kirishdan himoya qilish mexanizmlari.",
      images: [
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626091618538-9b28e5a8c603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/rc_saRmXG1A",
      detailedInfo: {
        function: "Operatsion tizimni va foydalanuvchi ma'lumotlarini himoya qilish",
        howItWorks: "Operatsion tizim xavfsizligi ko'p darajali himoya mexanizmlaridan foydalanadi. Bu mexanizmlarga kiradi: foydalanuvchi autentifikatsiyasi, huquqlar boshqaruvi, shifrlash, firewall, xavfsizlik patchi, zararli dasturlardan himoya va boshqalar. Bu mexanizmlar birgalikda tizimni zararli dasturiy ta'minot va ruxsatsiz kirishdan himoya qiladi.",
        types: ["Kernel xavfsizligi", "Foydalanuvchi autentifikatsiyasi", "Shifrlash", "Firewall", "Antivirus"],
          examples: [
          "Windows Defender - Windows tizimlarida o'rnatilgan xavfsizlik mexanizmi",
          "SELinux - Linux uchun kuchli huquqlar nazorat mexanizmi",
          "macOS Gatekeeper - faqat ishonchli ilovalarni o'rnatish imkonini beradi",
          "BitLocker/FileVault - Windows va macOS uchun disk shifrlash tizimlari",
          "Sandboxing - iOS va Android tizimlari ilovalarni alohidalash uchun qo'llaydigan mexanizm"
          ],
          keyFeatures: [
          "Foydalanuvchi identifikatsiyasi va autentifikatsiyasi - login/parol, PIN, biometrika",
          "Huquqlar nazorati - administrativ huquqlar boshqaruvi",
          "Shifrlash - ma'lumotlar shifrlash orqali himoya",
          "Tarmoq xavfsizligi - firewall va port nazorati",
          "Yangilanishlar - xavfsizlik zaifliklarini yopishdagi yangilanishlar"
          ],
          advantages: [
          "Ma'lumotlar himoyasi - shaxsiy va muhim ma'lumotlarni himoya qilish",
          "Ruxsatsiz kirishdan himoya - tizim va ma'lumotlarga kirish nazorat qilinadi",
          "Zararli dasturlardan himoya - viruslar, troyanlar, ransomware'dan himoya",
          "Tizim butunligi - tizim fayllarini o'zgartirishdan himoya",
          "Xavfsizlik monitoring - tizim faoliyati nazorati"
          ],
          disadvantages: [
          "Unumdorlikka ta'sir - xavfsizlik mexanizmlari tizim resurslarini sarflaydi",
          "Foydalanuvchi qulayli cheklovlar - xavfsizlik cheklovlari foydalanuvchi uchun noqulay bo'lishi mumkin",
          "Komplekslik - kuchli xavfsizlik murakkab sozlamalarni talab qiladi",
          "Yangilash zaruriyati - doimiy yangilanishlar zarur",
          "100% xavfsizlik kafolatlanmaydi - yangi zaifliklar doimo paydo bo'lishi mumkin"
        ],
        maintenance: [
          "Muntazam tizim va dasturiy ta'minot yangilashlarini o'rnatish",
          "Kuchli va noyob parollardan foydalanish",
          "Ikki faktorli autentifikatsiyani yoqish",
          "Disk va ma'lumotlar shifrlashdan foydalanish",
          "Antivirus dasturlarini yangilab turish va skanerlash"
        ],
        specifications: {
          encryption: "AES-256, RSA, ECC shifrlash algoritmlari",
          authentication: "Parol, PIN, biometrika (barmoq izi, yuz tanish)",
          firewalls: "Ichki OS firewall, ichki tarmoq firewall",
          updates: "Avtomatik va manual yangilanishlar",
          backup: "Ma'lumotlar zaxira nusxalash mexanizmlari"
        },
        additionalInfo: "Operatsion tizim xavfsizligi kompyuter tizimlari himoyasining eng muhim qismi hisoblanadi. Bugungi raqamli dunyoda, ma'lumotlar va identifikatsiya o'g'irligi, ransomware hujumlari va boshqa kiberhujumlar kuchayib bormoqda. Operatsion tizim xavfsizligi chuqurlikdagi himoya (defense in depth) strategiyasini qo'llaydi - bu bir nechta himoya qatlamlaridan foydalanishni anglatadi. Muntazam xavfsizlik yangilanishlarini o'rnatish, kuchli parollardan foydalanish va shubhali harakat va sahifalardan o'zini saqlash operatsion tizim xavfsizligini ta'minlashning muhim qismlari hisoblanadi."
        }
      },
      {
        id: 9,
      component: "Operatsion Tizim Ishga Tushishi",
      icon: "power-off",
      shortDescription: "Operatsion tizim ishga tushish jarayoni va bosqichlari.",
      images: [
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/dy6xnuQDUkE",
      detailedInfo: {
        function: "Kompyuter yoqilgandan so'ng operatsion tizimni yuklash",
        howItWorks: "Operatsion tizimning ishga tushishi bir necha bosqichdan iborat bo'ladi. Dastlab BIOS/UEFI kompyuter hardware'ini ishga tushiradi va test qiladi. Keyin yuklash qurilmasidan (HDD, SSD) boot loader yuklanadi, u operatsion tizim kernelini yuklab, ishga tushiradi. Kernel asosiy tizim jarayonlarini va xizmatlarini boshlaydi, so'ngra foydalanuvchi seansi boshlanadi.",
        types: ["BIOS/UEFI ishga tushishi", "Bootloader bosqichi", "Kernel initialization", "Init/Systemd bosqichi", "User session"],
          examples: [
          "Windows bootloader (BOOTMGR) - Windows tizimlarini yuklaydi",
          "GRUB - ko'plab Linux distributsiyalari uchun bootloader",
          "systemd - Linux tizimlarda initialization system sifatida",
          "Secure Boot - Windows va baʼzi Linux tizimlari uchun xavfsiz yuklash mexanizmi",
          "Fast Startup - Windows tizimlarida tezlashtirilgan yuklash"
          ],
          keyFeatures: [
          "POST (Power-On Self Test) - hardware tekshiruvi",
          "Bootloader - operatsion tizimni yuklash dasturi",
          "Kernel initialization - kernel va asosiy drayverlarni yuklab olish",
          "Services startup - tizim xizmatlarini ishga tushirish",
          "User authentication - foydalanuvchini autentifikatsiya qilish"
          ],
          advantages: [
          "Oddiy boshlash - foydalanuvchi uchun oddiy va avtomatik jarayon",
          "Hardware tekshiruvi - ishga tushish paytida hardware muammolarini aniqlash",
          "Tizim diagnostikasi - boot jarayonida tizim diagnostikasi o'tkaziladi",
          "Xavfsizlik tekshiruvi - secure boot orqali ruxsatsiz tizimlar yuklanishini oldini olish",
          "Ko'p operatsion tizim qo'llab-quvvatlash - bir nechta operatsion tizim o'rnatilgan bo'lsa, tanlov imkoniyati"
          ],
          disadvantages: [
          "Sekin ishga tushish - ayrim tizimlar ko'p vaqt talab qiladi",
          "Murakkablik - bootloader muammolari hal qilish qiyin bo'lishi mumkin",
          "Moslashuvchanlik kamchiligi - boot process parametrlarini o'zgartirish murakkab",
          "Xatoliklarga ta'sirlanuvchan - boot sektorida yoki kritik fayllarda xatolik bo'lsa, tizim ishga tushmasligi mumkin",
          "Zaifliklar - boot bosqichidagi zaifliklar butun tizimni xavf ostiga qo'yishi mumkin"
        ],
        maintenance: [
          "BIOS/UEFI yangilanishlarini o'rnatish",
          "Bootloader konfiguratsiyasini zaxiralash",
          "Boot disk sog'ligini tekshirish",
          "Boot tezligini optimallash uchun kerak bo'lmagan startup serviceni o'chirish",
          "Boot loglarini tekshirish - muammolarni aniqlash uchun"
        ],
        specifications: {
          bootTime: "SSD bilan 10-30 soniya, HDD bilan 30-60 soniya",
          bootloader: "Windows: BOOTMGR, Linux: GRUB/GRUB2, macOS: Apple Boot Camp",
          firmwareType: "Legacy BIOS yoki UEFI",
          securityFeatures: "Secure Boot, TPM integratsiyasi",
          recoveryOptions: "Recovery partition, safe mode, emergency boot"
        },
        additionalInfo: "Operatsion tizimning ishga tushish jarayoni kompyuter texnologiyasining asosiy qismlaridan biri hisoblanadi. Zamonaviy tizimlar ishga tushish vaqtini qisqartirish uchun turli optimizatsiya usullaridan foydalanadi, jumladan hibernation, fast startup va SSD disklar. SSDlar HDDlarga qaraganda 5-10 marta tezroq yuklash imkonini beradi. UEFI (Unified Extensible Firmware Interface) an'anaviy BIOSga qaraganda ko'proq funksionallikka ega va secure boot kabi xavfsizlik xususiyatlarini qo'llab-quvvatlaydi. Boot-time diagnostika va xatolik tuzatish tizim muammolarini hal qilishning muhim qismidir. Operatsion tizim ishga tushishi jarayonini tushunish tizim muammolarini aniqlash va bartaraf etish uchun muhimdir."
        }
      },
      {
        id: 10,
      component: "Virtual Mashinalar",
      icon: "cubes",
      shortDescription: "Kompyuter ichida virtual kompyuter yaratuvchi texnologiya.",
      images: [
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/yIVXjl4SwVo",
      detailedInfo: {
        function: "Bir kompyuterda bir nechta operatsion tizimlarni ishga tushirish",
        howItWorks: "Virtual mashina (VM) - bu kompyuter dasturiy ta'minoti yordamida yaratilgan virtual kompyuter. VM host operatsion tizimida ishlaydigan dastur (hypervisor) tomonidan boshqariladi va host kompyuterning fizik resurslaridan (protsessor, xotira, disk, tarmoq) foydalanadi. Hypervisor bu resurslarni virtual mashinalar o'rtasida taqsimlaydi va har bir virtual mashina xuddi alohida kompyuter kabi ishlaydi.",
        types: ["Type 1 Hypervisor (Bare-metal)", "Type 2 Hypervisor (Hosted)", "Container virtualization", "Para-virtualization"],
          examples: [
          "VMware Workstation - mashhur desktop virtualizatsiya dasturi",
          "Oracle VirtualBox - bepul va ochiq kodli virtualizatsiya dasturi",
          "Microsoft Hyper-V - Windows tizimlarida o'rnatilgan virtualizatsiya",
          "KVM - Linux kernel uchun virtualizatsiya moduli",
          "VMware ESXi - enterprise darajadagi bare-metal hypervisor"
          ],
          keyFeatures: [
          "Izolatsiya - har bir virtual mashina alohida ishlaydi",
          "Resurs taqsimlash - fizik resurslarni virtual mashinalar o'rtasida taqsimlash",
          "Snapshot - virtual mashinaning holatini saqlash va qayta tiklash",
          "Live migration - ishlayotgan virtual mashinani bir fizik serverdan boshqasiga ko'chirish",
          "Hardware emulation - virtual mashina uchun hardware elementlarini emulatsiya qilish"
          ],
          advantages: [
          "Ko'p operatsion tizim - bir kompyuterda bir nechta operatsion tizimlarni ishlatish",
          "Resurs optimizatsiyasi - server konsolidatsiyasi orqali hardware resurslardan samarali foydalanish",
          "Izolatsiya - har bir virtual muhit alohida ishlaydi, xatoliklar boshqa muhitlarga ta'sir qilmaydi",
          "Test va rivojlantirish - turli muhitlarda dasturlarni xavfsiz test qilish",
          "Eski tizimlarga qo'llab-quvvatlash - zamonaviy hardwareda eski OS va dasturlarni ishlatish"
          ],
          disadvantages: [
          "Unumdorlik yo'qotish - virtualizatsiya qatlamlari qo'shimcha resurs sarflaydi",
          "Resurs raqobati - virtual mashinalar bir xil fizik resurslar uchun raqobatlashadi",
          "Murakkab sozlash - yuqori unumdorlik uchun sozlashlar kerak",
          "Hardware cheklovlari - ba'zi qurilmalarni virtualizatsiya qilish qiyin",
          "Litsenziya masalalari - ba'zi OS litsenziyalari virtualizatsiya cheklovlari bo'lishi mumkin"
        ],
        maintenance: [
          "VM snapshot yaratib turish",
          "Host tizimini yangilab turish",
          "Resurslarni monitoring qilish va optimallash",
          "Virtual disk defragmentatsiyasi",
          "VM izolyatsiyasini ta'minlash uchun xavfsizlik sozlamalarni tekshirish"
        ],
        specifications: {
          hypervisorTypes: "Type 1 (bare-metal), Type 2 (hosted)",
          performance: "Taqriban 90-95% native performance (Type 1), 70-85% (Type 2)",
          resources: "Har bir VM uchun alohida CPU, RAM, disk, tarmoq resurslari ajratiladi",
          formats: "VMware (.vmdk), VirtualBox (.vdi), Hyper-V (.vhdx)",
          networkTypes: "NAT, Bridge, Host-only, Internal"
        },
        additionalInfo: "Virtual mashinalar IT infratuzilmalarining ajralmas qismiga aylandi. Ular cloud computing, DevOps va containerizatsion bilan bog'liq. Virtualizatsiya serverlarda CPU foydalanish samaradorligini 15-20% dan 80% gacha oshirishi mumkin. Docker kabi container texnologiyalari an'anaviy virtual mashinalardan farq qiladi, chunki ular OS kernelini o'rtaklashadi va alohida OS nusxasini talab qilmaydi. Virtualizatsiya tufayli ko'plab kompaniyalar serverlar sonini qisqartirib, elektr energiyasi sarfini va IT xarajatlarini kamaytirishga erishgan. Zamonaviy hypervisorlar, masalan, VMware ESXi va Microsoft Hyper-V enterprise darajasidagi xususiyatlarni, jumladan, yuqori mavjudlik, yuklamani balanslash va avtomatik resurslarni boshqarishni ta'minlaydi."
        }
      },
      {
        id: 11,
      component: "Cloud Computing",
      icon: "cloud",
      shortDescription: "Internet orqali xizmat sifatida taqdim etiladigan kompyuter resurslari.",
      images: [
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/M988_fsOSWo",
      detailedInfo: {
        function: "Internet orqali kompyuter resurslarini xizmat sifatida taqdim etish",
        howItWorks: "Cloud computing - bu internet orqali kompyuter resurslari (serverlar, saqlash, ma'lumotlar bazalari, tarmoq, dasturiy ta'minot) ni xizmat sifatida taqdim etish. Cloud provayderlar ko'plab mijozlar uchun ulkan datamarkazlarda resurslarni boshqaradi. Foydalanuvchilar bu resurslarga internet orqali kirishlari va faqat foydalangan resurslari uchun to'lashlari mumkin.",
        types: ["IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "SaaS (Software as a Service)", "Public Cloud", "Private Cloud", "Hybrid Cloud"],
          examples: [
          "Amazon Web Services (AWS) - eng katta cloud provayderi, EC2, S3, RDS kabi ko'plab xizmatlarni taqdim etadi",
          "Microsoft Azure - keng qamrovli cloud platformasi, Microsoft ekotizimi bilan yaxshi integratsiyalangan",
          "Google Cloud Platform (GCP) - kuchli data analytics va AI imkoniyatlari bilan",
          "Dropbox, Google Drive - cloud saqlash xizmatlari",
          "Salesforce - CRM sifatida bulutli dasturiy ta'minot"
          ],
          keyFeatures: [
          "Elastiklik - resurslari kerak bo'lganda oson kengaytirish yoki qisqartirish",
          "O'z-o'ziga xizmat - resurslarni avtomatik ravishda so'rash va olish",
          "Foydalanishga asoslangan to'lov - faqat ishlatiladigan resurslar uchun to'lash",
          "Global mavjudlik - dunyoning har qanday joyidan kirish",
          "Avtomatlashtirish - resurslarni avtomatik ravishda boshqarish"
          ],
          advantages: [
          "Xarajatlarni tejash - hardware sotib olish va saqlash o'rniga foydalanishga to'lash",
          "Moslashuvchanlik - ehtiyojlarga qarab resurslarni tezda kengaytirish",
          "Mavjudlik - ko'plab datamarkazlar orqali yuqori darajadagi uzluksizlik",
          "Tezkor ishga tushirish - yangi xizmatlarni soatlar ichida ishga tushirish",
          "Global miqyosda ishlash - dunyoning turli nuqtalarida xizmatlarni taqdim etish"
          ],
          disadvantages: [
          "Internet bog'liqlik - ishonchli internet ulanishi talab qilinadi",
          "Xavfsizlik muammolari - ma'lumotlar uchinchi tomon provayderida saqlanadi",
          "Nazorat cheklanganligi - tayanch infratuzilmaga to'liq kirish yo'q",
          "Ko'chish qiyinligi - provayderga bog'lanib qolish",
          "Narxlash murakkabligi - ko'p komponentli narxlash tizimi tushunish qiyin bo'lishi mumkin"
        ],
        maintenance: [
          "Avtomatik masshtablash sozlamalari",
          "Monitoring va bildirishnomalarni sozlash",
          "Xavfsizlik guruhlarini va kirish boshqaruvini sozlash",
          "Ma'lumotlar zaxiralash va tiklash rejalarini ishlab chiqish",
          "Narxni nazorat qilish uchun budjet bildirishnomalarini o'rnatish"
        ],
        specifications: {
          deploymentModels: "Public, Private, Hybrid, Community",
          serviceModels: "IaaS, PaaS, SaaS, FaaS (Function as a Service)",
          connectivity: "Internet yoki xususiy tarmoq orqali ulanish",
          security: "Shifrlash, autentifikatsiya, avtorizatsiya",
          compliance: "GDPR, HIPAA, PCI DSS kabi standartlar bilan muvofiqlik"
        },
        additionalInfo: "Cloud computing tushunchasi 1960-yillarda kompyuter quvvatini kommunal xizmat (utility) sifatida taqdim etish g'oyasi bilan boshlangan, ammo 2000-yillarning o'rtalarida Amazon EC2 va S3 xizmatlari bilan keng tarqalishni boshlagan. Bugungi kunda cloud computing IT infratuzilmasi va xizmatlarini taqdim etishning standart usuliga aylandi. Bu hisoblash resurslarini ko'proq kommunal xizmat (elektr yoki suv kabi) sifatida ko'rib chiqishga olib keldi. Zamonaviy cloud platformalar oddiy infratuzilma xizmatlaridan tashqari AI, machine learning, IoT va serverless computing kabi ilg'or xizmatlarni ham taqdim etadi. Kelajakda edge computing (chetki hisoblash) bilan cloud computingning integratsiyasi, ko'proq tarqalgan hisoblash modelini yaratish va latency (kechikish) ni kamaytirishga olib kelishi kutilmoqda."
        }
      },
      {
        id: 12,
      component: "Unix va Linux OS",
      icon: "terminal",
      shortDescription: "Unix asosidagi operatsion tizimlar oilasi.",
      images: [
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/ROjZy1WbCIA",
      detailedInfo: {
        function: "Kuchli, ko'p foydalanuvchili, ko'p vazifali operatsion tizim platformasi",
        howItWorks: "Unix va uning derivativlari modulli arxitekturadan foydalanadi, bu yerda kernel asosiy xizmatlarni ta'minlaydi, shell foydalanuvchi interfeysi bo'lib xizmat qiladi, va ko'plab utilitalar maxsus vazifalarni bajaradi. Bu tizimlar ko'pincha 'har narsa fayl' falsafasiga ergashadi, bu degani barcha qurilmalar, protsesslar va tarmoq soketlari fayllar sifatida ko'rinadi. Unix-like tizimlar kuchli buyruq qatori interfeysi va skriptlash imkoniyatlari bilan mashhur.",
        types: ["System V Unix", "BSD", "GNU/Linux", "macOS", "Solaris", "AIX", "HP-UX"],
          examples: [
          "Ubuntu - mashhur desktop va server Linux distributivi",
          "Red Hat Enterprise Linux - biznes uchun tijorat Linux distributivi",
          "FreeBSD - kuchli, barqaror BSD asosidagi OS",
          "macOS - BSD asosidagi Apple operatsion tizimi",
          "Oracle Solaris - yuqori unumdorlikka ega enterprise tizimlari uchun Unix"
          ],
          keyFeatures: [
          "Multiuser va multitasking - bir vaqtning o'zida ko'p foydalanuvchilar va dasturlarni qo'llab-quvvatlash",
          "Terminal va shell - kuchli buyruq qatori interfeysi",
          "Pipe va redirection - dasturlar o'rtasida ma'lumotlarni yo'naltirish",
          "Fayllar ierarxiyasi - yagona ildiz (/) papkasidan boshlangan daraxtsimon tuzilma",
          "Permission tizimi - fayl va direktoriyalarga kirish huquqlarini nazorat qilish"
          ],
          advantages: [
          "Barqarorlik va ishonchlilik - uzoq vaqt ishlaydigan serverlar uchun qulay",
          "Xavfsizlik - foydalanuvchi huquqlari va xavfsizlik mexanizmlari",
          "Moslashuvchanlik - maxsus vazifalar uchun sozlash mumkin",
          "Terminal quvvati - skriptlash va avtomatlashtirish uchun kuchli",
          "Open source - ko'plab variantlar ochiq kodli va bepul"
          ],
          disadvantages: [
          "Murakkablik - o'rganish uchun tik learning curve",
          "Desktop ishlatish qiyinroq - ko'pincha terminal bilimini talab qiladi",
          "Dasturiy ta'minot cheklangan - Windows dasturlari bilan bog'liq muammolar",
          "Har xil variantlar o'rtasida farqlar - har xil Unix/Linux o'rtasida moslik muammolari",
          "Hardware qo'llab-quvvatlash - ba'zi yangi qurilmalarda drayver muammolari"
        ],
        maintenance: [
          "Paketlarni yangilab turish - aptitude, yum, dnf, pacman kabi menejerlar orqali",
          "Loglarni tekshirish - /var/log direktoriasi",
          "Disk makonini boshqarish - df, du utilitalari yordamida",
          "Foydalanuvchilar boshqaruvi - useradd, passwd kabi buyruqlar",
          "Servislarni boshqarish - systemd, service, sysvinit utilitalar"
        ],
        specifications: {
          kernel: "Linux (GPL), BSD, Unix System V va boshqalar",
          userInterface: "Terminal (CLI), X Window System (GUI), Wayland",
          packageManagers: "apt (Debian/Ubuntu), yum/dnf (RHEL/Fedora), pacman (Arch)",
          fileSystem: "ext4, XFS, ZFS, UFS, APFS va boshqalar",
          security: "SELinux, AppArmor, RBAC, DAC, MAC"
        },
        additionalInfo: "Unix dastlab 1969-yilda AT&T Bell Laboratories'da ishlab chiqilgan. 1980-yillarda BSD (Berkeley Software Distribution) va System V kabi variantlar paydo bo'lgan. Linux 1991-yilda Linus Torvalds tomonidan yaratilgan bo'lib, Unix-ga o'xshash, ammo mustaqil ishlab chiqilgan kernel. GNU loyihasi bilan birlashib, GNU/Linux operatsion tizimni yaratdi. Unix va Unix-like tizimlar Internet, ilmiy hisoblash va super-kompyuterlar sohasida hukmronlik qilgan. Ular modulli tuzilishi, ochiq standartlari va portativligi tufayli DevOps va cloud computing uchun asosiy platformaga aylandi. Linux dunyo serverlarining ko'pchiligida, Android smartfonlarda va embedded qurilmalarda ishlaydi, Unix falsafasi esa dasturiy ta'minot arxitekturasiga chuqur ta'sir ko'rsatgan."
        }
      },
      {
        id: 13,
      component: "Real-Time Operatsion Tizimlar (RTOS)",
      icon: "clock",
      shortDescription: "Aniq vaqt chegaralarida ishlaydigan maxsus operatsion tizimlar.",
      images: [
        "https://images.unsplash.com/photo-1504639725590-34d94c6ea77b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/F9tKgzNjJZg",
      detailedInfo: {
        function: "Real vaqt rejimida ishlash va aniq vaqt chegaralarini ta'minlash",
        howItWorks: "RTOS tizimlar deterministic scheduling algoritmlari orqali ishlaydi, har bir vazifa uchun aniq vaqt chegaralarini kafolatlaydi. Aniq vaqt chegaralarini ta'minlash uchun maxsus scheduler ishlatiladi va kritik vazifalar birinchi navbatda bajariladi.",
        types: ["Hard RTOS", "Soft RTOS", "Firm RTOS"],
          examples: [
          "FreeRTOS - Amazon tomonidan qo'llab-quvvatlanadigan ochiq kodli RTOS",
          "QNX - BlackBerry kompaniyasining tijorat RTOS tizimi",
          "VxWorks - Wind River Systems RTOS",
          "Micrium µC/OS - IoT qurilmalar uchun RTOS",
          "INTEGRITY - Green Hills Software RTOS"
          ],
          keyFeatures: [
          "Deterministic timing - aniq vaqt chegaralari",
          "Priority scheduling - vazifalar ustunligi",
          "Interrupt handling - uzilishlarni tez qayta ishlash",
          "Memory protection - xotira himoyasi",
          "Task management - vazifalarni boshqarish"
          ],
          advantages: [
          "Aniq timing - vazifalarni aniq vaqt ichida bajarish",
          "Yuqori ishonchlilik - kritik tizimlarda ishlash",
          "Predictable performance - prognozlanadigan ishlash",
          "Low latency - past kechikish vaqti",
          "Resource efficiency - resurslardan samarali foydalanish"
          ],
          disadvantages: [
          "Cheklangan funksionallik - faqat ma'lum vazifalar uchun mo'ljallangan",
          "Dasturlash murakkabligi - real vaqt dasturlashni talab qiladi",
          "Hardware cheklovlari - ma'lum hardware platformalarga mo'ljallangan",
          "To'liq test qilish qiyinligi - barcha holatlarni simulyatsiya qilish murakkab",
          "Narxi yuqori - ba'zi professional RTOS tizimlari qimmat"
        ],
        maintenance: [
          "Priority inversion muammolarini nazorat qilish",
          "Watchdog timerlarni to'g'ri sozlash",
          "Memory leaklar uchun monitoring qilish",
          "Task execution vaqtlarini o'lchash",
          "Kritik interrupt handlerlarni optimallash"
        ],
        specifications: {
          responseTime: "Microseconds dan milliseconds gacha",
          scheduling: "Rate Monotonic, Earliest Deadline First",
          footprint: "Minimal memory footprint - bir necha KB dan",
          interrupts: "Nested interrupt handling qo'llab-quvvatlash",
          certification: "Do28C, ISO 26262, IEC 61508 kabi standartlar"
        },
        additionalInfo: "Real-time operatsion tizimlar avtonom transport vositalari, tibbiy qurilmalar, sanoat robotlari, havo transporti va boshqa kritik tizimlarda keng qo'llaniladi. Ularning asosiy vazifasi aniq vaqt chegarasida ishonchli ishlashni ta'minlashdir. RTOS tizimlari IoT qurilmalar va embedded tizimlar rivoji bilan yanada keng tarqalmoqda. Hard RTOS tizimlari vazifalarni aniq vaqt chegarasida bajarishni kafolatlaydi, aks holda tizim ishdan chiqadi deb hisoblanadi. Soft RTOS tizimlari esa vaqt chegarasi buzilishi mumkin, lekin tizim uchun bu kritik emas."
        }
      },
      {
        id: 14,
      component: "Mobil Operatsion Tizimlar",
      icon: "mobile",
      shortDescription: "Smartfon va planshetlar uchun maxsus operatsion tizimlar.",
      images: [
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/QKvj21xaHRE",
      detailedInfo: {
        function: "Mobil qurilmalar uchun maxsus moslashtirilgan operatsion tizim",
        howItWorks: "Touch interfeys, energiya tejash, mobil internet va sensor ma'lumotlarini boshqarish uchun optimallashtirilgan. Mobil operatsion tizimlar ko'pincha monolitik kernel asosida qurilib, ARM protsessorlari uchun optimallashtirilgan va limited xotira hamda batareya resurslarini samarali boshqaradi.",
        types: ["Smartphone OS", "Tablet OS", "Wearable OS"],
          examples: [
          "HarmonyOS - Huawei tomonidan ishlab chiqilgan, IoT qurilmalar va smartfonlar uchun",
          "KaiOS - Feature telefonlar uchun yengil OS, JavaScript va HTML5 dasturlarini qo'llab-quvvatlaydi",
          "LineageOS - Community tomonidan yaratiladigan Android distributiv",
          "Ubuntu Touch - Linux asosidagi mobil operatsion tizim",
          "Tizen - Samsung tomonidan ishlab chiqilgan OS, smartfonlar va smart TV uchun"
          ],
          keyFeatures: [
          "Touch-first interfeys - sensorli ekranlar uchun optimallashtirilgan UI",
          "App Store ekotizim - markazlashgan ilova distributsiisi",
          "Energy management - batareya quvvatini saqlash uchun",
          "Connectivity - cellular, Wi-Fi, Bluetooth, NFC integratsiyasi",
          "Sensor integration - akselerometr, giroskop, GPS, kamera"
          ],
          advantages: [
          "Portativlik - har doim yoningizda",
          "Connectivity - doimiy internet va aloqa imkoniyati",
          "App ekotizim - million ilovalar mavjud",
          "Camera integration - suratlash va video yozib olish",
          "Battery efficiency - kunlar davomida ishlash"
          ],
          disadvantages: [
          "Limited multitasking - bir vaqtda kamroq ilova",
          "Input cheklovlari - kichik ekran va virtual klaviatura",
          "Computing power cheklovi - desktop kompyuterlardan kamroq quvvat",
          "Battery cheklovlari - intensiv foydalanish vaqtida tez tugashi mumkin",
          "Storage limitations - desktop OS ga qaraganda kam saqlash hajmi"
        ],
        maintenance: [
          "Operatsion tizimni yangilab turish",
          "Ortiqcha fayllarni o'chirib tashlash",
          "Background jarayonlarni boshqarish",
          "App cache va ma'lumotlarini tozalash",
          "Battery saver mode dan foydalanish"
        ],
        specifications: {
          processor: "ARM, Snapdragon, Exynos, Apple A-series",
          ram: "3-16GB",
          storage: "32GB-1TB",
          display: "60-120Hz refresh rate, 300-1000+ nits brightness",
          connectivity: "5G, Wi-Fi 6, Bluetooth 5.0+"
        },
        additionalInfo: "Mobil operatsion tizimlar 2007 yildan keyin iPhone va Android tufayli inqilob bo'ldi. Bugungi kunda mobil qurilmalar dunyodagi internetga ulanishning eng asosiy usuli hisoblanadi. Android va iOS dunyo market share ning 99%+ ni egallaydi. Mobil OSlar endi faqat telefon qo'ng'iroqlari va SMS uchun emas, balki productivlik, o'yinlar, media iste'mol qilish, navigation, banking va boshqa vazifalar uchun platformadir. Mobil OS qurilmalar uchun security sandboxing, permissions modeli, va biometrik autentifikatsiya kabi xavfsizlik xususiyatlarini taqdim etadi."
        }
      },
      {
        id: 15,
      component: "Quantum Computing OS",
      icon: "atom",
      shortDescription: "Kvant kompyuterlari uchun operatsion tizimlar.",
      images: [
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/OWJCfOvochA",
      detailedInfo: {
        function: "Kvant kompyuterlarini boshqarish va kvant algoritmlarini ishga tushirish",
        howItWorks: "Kvant bitlarini (qubit) boshqarish, kvant xatolarini tuzatish va kvant algoritmlarini bajarish. Kvant OS klassik kompyuter bilan kvant protsessor o'rtasida ko'prik bo'lib xizmat qiladi, kvant sxemalarni yaratish va bajarishni abstrakt qiladi, hamda kvant xatolarini tuzatish mexanizmlarini amalga oshiradi.",
        types: ["Full-stack Quantum OS", "Hybrid Classical-Quantum OS"],
          examples: [
          "IBM Quantum Experience - Cloud-based kvant kompyuterlarga kirish platformasi",
          "Google Cirq - kvant algoritmlarni yaratish va simulyatsiya qilish uchun Python kutubxonasi",
          "Microsoft Quantum Development Kit - klassik va kvant komponentlarni birlashtirish",
          "Rigetti Forest - kvant-klassik gibrid dasturlash uchun SDK",
          "D-Wave Ocean Software - kvantsimli (annealing) kompyuterlar uchun dasturiy ta'minot"
          ],
          keyFeatures: [
          "Quantum gate abstraction - kvant operatsiyalarini abstrakt qilish",
          "Error correction - kvant xatolarni tuzatish",
          "Classical-quantum interface - klassik va kvant hisoblashlar integratsiyasi",
          "Quantum compilation - kvant dasturlarini qubit jismoniy arxitekturaga moslashtirish",
          "Simulation tools - kvant algoritmlarni klassik kompyuterlarda simulyatsiya qilish"
          ],
          advantages: [
          "Murakkab muammolarni tezroq yechish - kvant parallelizm",
          "Kriptografik muammolarni yechish - faktorizatsiya",
          "Machine learning va optimizatsiya - kvant optimizatsiya algoritmlari",
          "Material simulation - kvant materialni simulyatsiya qilish",
          "Yangi algoritmlar yaratish imkoniyati - kvant paradigmasi"
          ],
          disadvantages: [
          "Error rate yuqoriligi - hozirgi kvant protsessorlar xatolarga moyil",
          "Quantum coherence muammosi - kvant holatni saqlash qiyin",
          "Cheklangan qubit soni - zamonaviy kvant kompyuterlarida qubitlar cheklangan",
          "Dekogerentsiya - kvant holat atrof-muhit bilan o'zaro ta'sir tufayli buzilishi",
          "Murakkab dasturlash paradigmasi - kvant dasturlashni o'rganish murakkab"
        ],
        maintenance: [
          "Qubit kalibratsiyasi",
          "Xato darajasini monitoring qilish",
          "Kriogenik haroratlarni saqlash (superconducting qubit)",
          "Kvant zovuqlarni tuzatish uchun klassik kodlarni yangilash",
          "Kvant algoritmlarni optimizatsiya qilish"
        ],
        specifications: {
          qubits: "Zamonaviy tizimlarda 50-100+ qubit",
          temperature: "Superconducting qubitlar uchun millikelvins",
          errorRate: "1% dan 5% gacha gate error rates",
          coherenceTime: "Mikrosekund dan millisekund gacha",
          quantum_supremacy: "Specific task uchun kvant ustunligi"
        },
        additionalInfo: "Kvant komyuting operatsion tizimlari hali rivojlanishning boshlang'ich bosqichida. Ular odatda klassik va kvant hisoblashlarni birlashtirishi kerak, chunki kvant kompyuterlar faqat ma'lum turdagi muammolarni yechishda afzal. IBM, Google, va Microsoft kabi kompaniyalar cloud orqali kvant kompyuterlarga kirish imkonini beradi. Zamonaviy kvant OS lar ko'pincha klassik OS ustiga qurilgan va kvant qurilmalar bilan muloqot qilish uchun maxsus API lar taqdim etadi. Kvant kriptografiya va kvant tarmoq protokollari kvant OS larning kelajakdagi qismi bo'lishi kutilmoqda. Kvant mashina o'qitish (quantum machine learning) ham kvant OS larning muhim komponenti bo'lishi mumkin."
        }
      },
      {
        id: 16,
      component: "Embedded Operatsion Tizimlar",
      icon: "microchip",
      shortDescription: "Maxsus qurilmalar uchun mo'ljallangan minimal operatsion tizimlar.",
      images: [
        "https://images.unsplash.com/photo-1614064642639-e398cf05badb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/3VCLzQiyLKg",
      detailedInfo: {
        function: "Embedded qurilmalar uchun maxsus operatsion tizim",
        howItWorks: "Embedded OS lar cheklangan resursli qurilmalarda ishlash uchun optimallashtirilgan. Minimal RAM, CPU va saqlash makonida ishlashga mo'ljallangan, ko'pincha real-time talablarga javob beradi.",
        types: ["Lightweight RTOS", "Monolithic Embedded OS", "Mobile-derived Embedded OS"],
          examples: [
          "Embedded Linux - masalan, Yocto Project, Buildroot",
          "Zephyr OS - cheklangan resursli qurilmalar uchun scalable OS",
          "Mbed OS - IoT qurilmalar uchun ARM-based OS",
          "TinyOS - sensor tarmoqlari uchun",
          "Contiki - IoT qurilmalar uchun memory-efficient OS"
          ],
          keyFeatures: [
          "Minimal footprint - kichik xotira va saqlash hajmi",
          "Energy efficiency - kam quvvat sarfi",
          "Deterministic behavior - aniq ishlash",
          "Hardware abstraction - qurilmalar bilan aloqa",
          "Security features - xavfsizlik mexanizmlari"
          ],
          advantages: [
          "Resource efficiency - minimal resurslar bilan ishlash",
          "Reliability - barqaror ishlash",
          "Long-term operation - uzoq vaqt davomida ishlash",
          "Real-time capabilities - real vaqt rejimida ishlash",
          "Low power consumption - kam elektr energiyasi sarfi"
          ],
          disadvantages: [
          "Limited functionality - cheklangan funksionallik",
          "Complex development - ishlab chiqish murakkab",
          "Limited user interface - cheklangan foydalanuvchi interfeysi",
          "Debugging challenges - debug qilish qiyin",
          "Updates complexity - yangilanishlar o'rnatish murakkab"
        ],
        maintenance: [
          "Remote diagnostics qo'llash",
          "Over-the-air yangilanishlar",
          "Power consumption monitoringi",
          "Xavfsizlik zaifliklarini tekshirish",
          "Qurilma loglarini analiz qilish"
        ],
        specifications: {
          processor: "ARM Cortex-M, RISC-V, MSP430 kabi",
          ram: "KB yoki MB darajasida, 64KB-4MB",
          storage: "Flash memory, KB yoki MB darajasida",
          interface: "Serial, I2C, SPI, CAN, Ethernet",
          power: "mW dan W gacha quvvat sarfi"
        },
        additionalInfo: "Embedded operatsion tizimlar tobora ommalashib bormoqda, chunki IoT qurilmalar, smart sensorlar va boshqa embedded qurilmalar soni tez o'sib bormoqda. Bu tizimlar industrial control, automotive, medical devices, consumer electronics va smart home qurilmalarida keng qo'llaniladi. Embedded Linuxning ommalashuvi ochiq platformalarga qiziqishni oshirdi. Xavfsizlik embedded OS larning muhim masalasi bo'lib qolmoqda, chunki ko'p embedded qurilmalar internet orqali bog'langan va cyberattack uchun target bo'lishi mumkin. Edge computing paradigmasi embedded OS larning yanada rivojlanishiga olib kelishi kutilmoqda."
        }
      },
      {
        id: 17,
      component: "Distributed Operatsion Tizimlar",
      icon: "network-wired",
      shortDescription: "Tarmoq bo'ylab bir nechta kompyuterlarni bitta tizim sifatida boshqaruvchi OS.",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://www.youtube.com/embed/4y71ksXqh1M",
      detailedInfo: {
        function: "Tarmoq bo'ylab bir nechta kompyuterlarni bitta yagona tizim sifatida boshqarish",
        howItWorks: "Distributed OS tarmoq bo'ylab resurslarni taqsimlaydi va balanslaydi, hisoblash vazifalarini bir nechta nod (node) larga taqsimlaydi, va ma'lumotlarni sinxronizatsiya qiladi.",
        types: ["Cluster OS", "Grid OS", "Cloud Distributed OS"],
          examples: [
          "Google Kubernetes - container orkestrlash tizimi",
          "Apache Mesos - distributed systems kernel",
          "CoreOS - container-centric distributed OS",
          "Plan 9 - Bell Labs tomonidan ishlab chiqilgan distributed OS",
          "Amoeba - Amsterdam Vrije universiteti distributed OS"
          ],
          keyFeatures: [
          "Resource sharing - resurslarni taqsimlash",
          "Load balancing - yuklamani balanslash",
          "Fault tolerance - xatoliklarga chidamlilik",
          "Transparency - shaffoflik",
          "Scalability - masshtablash"
          ],
          advantages: [
          "Yuqori unumdorlik - parallel hisoblash orqali",
          "Resource utilization - resurslardan samarali foydalanish",
          "Reliability - bitta node ishdan chiqqanda ham ishlashni davom ettirish",
          "Scalability - kerak bo'lganda yangi nodlar qo'shish",
          "Cost efficiency - hardware resurslardan samarali foydalanish"
          ],
          disadvantages: [
          "Murakkablik - distributed sistemalarni loyihalash va boshqarish qiyin",
          "Network dependence - tarmoq ishdan chiqsa, butun tizim ta'sirlangan",
          "Security challenges - ko'proq node = ko'proq attack surface",
          "Consistency issues - ma'lumotlar consistency ta'minlash qiyin",
          "Debugging complexity - distributed xatolarni tuzatish murakkab"
        ],
        maintenance: [
          "Node health monitoring",
          "Automatic failover mexanizmlarini tekshirish",
          "Network latency nazorati",
          "Resource utilization optimization",
          "Security patching barcha nodlarda"
        ],
        specifications: {
          nodeCount: "Bir nechtadan minglab nodlargacha",
          network: "High-speed interconnect, low latency",
          consistency: "Strong, eventual, va other consistency models",
          protocol: "Consensus protocols (Paxos, Raft)",
          architecture: "Master-slave, peer-to-peer, hybrid"
        },
        additionalInfo: "Distributed operatsion tizimlar zamonaviy bulutli hisoblash infratuzilmasining asosini tashkil qiladi. Ular har qanday miqdordagi ma'lumotlar va hisoblashlar bilan ishlash uchun gorizontal masshtablash imkonini beradi. Ular data centers, high-performance computing (HPC), va shunday miqdordagi resurslarni talab qiladigan workload lar uchun qo'llaniladi. Microservices arxitekturasi va containerization distributed OS larning ommalashuviga turtki bo'ldi. Consistency-availability-partition tolerance (CAP) teoremasi distributed tizimlarning dizayniga ta'sir ko'rsatadigan asosiy nazariya hisoblanadi. Modern distributed OS lar ko'pincha automation va self-healing xususiyatlariga ega, bu ularni minimal inson aralashuvi bilan ishlash imkonini beradi."
      }
    }
  ],
  additionalResources: {
    books: [
      {
        title: "Modern Operating Systems",
        author: "Andrew S. Tanenbaum",
        year: 2014,
        description: "Operatsion tizimlar haqida fundamental kitob"
      },
      {
        title: "Operating System Concepts",
        author: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
        year: 2020,
        description: "OS tushunchalarini keng qamrovli ko'rib chiquvchi klassik darslik"
      },
      {
        title: "Linux Kernel Development",
        author: "Robert Love",
        year: 2010,
        description: "Linux kernel tuzilishi va ishlashi haqida kitob"
      },
      {
        title: "Windows Internals",
        author: "Pavel Yosifovich",
        year: 2022,
        description: "Windows operatsion tizimi ichki tuzilishi haqida chuqur ma'lumot"
      }
    ],
    onlineCourses: [
      {
        title: "Operating Systems and You",
        platform: "Coursera",
        duration: "6 weeks",
        link: "https://www.coursera.org/learn/os-basics"
      },
      {
        title: "Introduction to Operating Systems",
        platform: "edX",
        duration: "8 weeks",
        link: "https://www.edx.org/learn/operating-systems"
      },
      {
        title: "Linux System Administration Basics",
        platform: "LinkedIn Learning",
        duration: "4 hours",
        link: "https://www.linkedin.com/learning/linux-system-administration-basics"
      },
      {
        title: "Windows Server Administration Fundamentals",
        platform: "Microsoft Learn",
        duration: "10 hours",
        link: "https://learn.microsoft.com/en-us/training/courses/windows-server-administration-fundamentals"
      }
    ],
    tools: [
      {
        name: "VirtualBox",
        type: "Virtualization",
        description: "Operatsion tizimlarni o'rganish uchun virtualizatsiya vositasi"
      },
      {
        name: "Process Explorer",
        type: "System Monitoring",
        description: "Windows operatsion tizimida jarayonlarni monitoring qilish uchun kuchli vosita"
      },
      {
        name: "Wireshark",
        type: "Network Monitoring",
        description: "Tarmoq paketlarini monitoring qilish va analiz qilish uchun vosita"
      },
      {
        name: "htop",
        type: "System Monitoring",
        description: "Linux tizimlarida resurslarni monitoring qilish uchun interaktiv vosita"
      },
      {
        name: "Disk Utility",
        type: "Disk Management",
        description: "macOS disk boshqaruvi vositasi"
      }
    ]
  },
  glossary: {
    kernel: "Operatsion tizimning asosiy qismi, hardware va software o'rtasida vositachi sifatida ishlaydi",
    process: "Bajarilayotgan dasturning nusxasi, o'z xotirasiga va resurslariga ega",
    thread: "Yengil vazifa, protsess ichida ishlaydi va protsess resurslarini boshqa threadlar bilan baham ko'radi",
    filesystem: "Ma'lumotlarni saqlash va ularga kirish imkoniyatini ta'minlaydigan tizim",
    scheduler: "Protsessorni protsesslar o'rtasida taqsimlaydigan tizim komponenti",
    bootloader: "Operatsion tizimni yuklash uchun mas'ul dastur",
    hypervisor: "Virtual mashinalarni yaratish va boshqarish uchun dasturiy ta'minot",
    daemon: "Fonda ishlaydigan va ma'lum xizmatlarni taqdim etuvchi tizim jarayoni",
    syscall: "Dasturlar operatsion tizim kernel xizmatlariga murojaat qilish uchun ishlatiladigan interfeys",
    virtualization: "Fizik hardware resurslarini bir nechta virtual qurilmalarga ajratish texnologiyasi",
    container: "Dastur va uning bog'liqliklarini izolatsiya qilish texnologiyasi",
    microkernel: "Minimal funksionalligi bo'lgan kernel arxitekturasi",
    monolithic: "Barcha asosiy funksionallikni kernelda jamlagan arxitektura",
    IPC: "Inter-Process Communication, jarayonlar o'rtasida ma'lumot almashish mexanizmi",
    pagefile: "Diskda virtual xotirani kengaytirish uchun ishlatiladigan fayl",
    registry: "Windows tizimlarida konfiguratsiya ma'lumotlari saqlanadigan markaziy ma'lumotlar bazasi",
    POSIX: "Portable Operating System Interface, turli operatsion tizimlar o'rtasida moslikni ta'minlovchi standartlar to'plami",
    API: "Application Programming Interface, dasturlar va operatsion tizim o'rtasidagi muloqot interfeysi",
    BIOS: "Basic Input/Output System, kompyuterni yuklanish paytida hardware tekshirish va operatsion tizimni yuklash",
    UEFI: "Unified Extensible Firmware Interface, zamonaviy BIOS o'rnini bosuvchi firmware interfeys",
    firmware: "Hardware va software o'rtasidagi oraliq dastur, qurilma funksiyalarini ta'minlaydigan o'rnatilgan dastur",
    driver: "Hardware qurilma va operatsion tizim o'rtasida muloqotni ta'minlaydigan dastur",
    GUI: "Graphical User Interface, grafik foydalanuvchi interfeysi",
    CLI: "Command Line Interface, buyruq qatori interfeysi",
    shell: "Foydalanuvchi buyruqlarini qayta ishlab, operatsion tizimga yetkazuvchi dastur",
    permissions: "Fayl va resurslardan foydalanish huquqlarining boshqaruv mexanizmi",
    multiprocessing: "Bir vaqtning o'zida ko'p protsessorlardan foydalanish qobiliyati",
    multithreading: "Bir protsessda bir nechta threadlarni parallel ishlata olish imkoniyati",
    cache: "Tez-tez ishlatiladigan ma'lumotlarni vaqtinchalik saqlab turadigan tezkor xotira"
  },
  faq: [
    {
      question: "Operatsion tizim nima?",
      answer: "Operatsion tizim - bu kompyuter hardware resurslari (protsessor, xotira, disk, tarmoq) va dasturlar o'rtasida vositachi bo'lib xizmat qiluvchi asosiy dasturiy ta'minot. U tizim resurslarini boshqaradi, dasturlarni ishga tushiradi, xavfsizlikni ta'minlaydi va foydalanuvchilarga interfeys taqdim etadi."
    },
    {
      question: "Ko'p ishlatiladigan operatsion tizimlar qaysilar?",
      answer: "Eng mashhur operatsion tizimlar: Windows (Microsoft), macOS (Apple), Linux (turli distributivlar: Ubuntu, Fedora, Debian), iOS (Apple mobil qurilmalari), Android (Google mobil qurilmalari), Chrome OS (Google). Server muhitlarda Windows Server, Linux va Unix variantlari keng qo'llaniladi."
    },
    {
      question: "Linux va Windows o'rtasidagi asosiy farqlar qanday?",
      answer: "Asosiy farqlar: 1) Litsenziya - Linux open source va ko'pincha bepul, Windows tijorat mahsulot. 2) Foydalanuvchi interfeysi - Linux turli desktop environment (GNOME, KDE, Xfce) taklif qiladi, Windows yagona Windows UI. 3) Terminal - Linux terminal kuchli vosita, Windows PowerShell yaqinda rivojlanmoqda. 4) Dasturlar - Windows ko'proq tijorat dasturlarini qo'llab-quvvatlaydi, Linux open source dasturlarga boy. 5) Xavfsizlik - Linux ko'pincha viruslarga kamroq ta'sirlanuvchan."
    },
    {
      question: "Kernel nima va uning asosiy vazifalari qanday?",
      answer: "Kernel operatsion tizimning markaziy qismi bo'lib, hardware va dasturiy ta'minot o'rtasida vositachi sifatida ishlaydi. Asosiy vazifalari: xotira boshqaruvi, jarayonlar boshqaruvi, qurilmalar boshqaruvi (drayverlar orqali), fayl tizimi operatsiyalari va xavfsizlik boshqaruvi."
    },
    {
      question: "Virtual mashina (VM) nima va u qanday ishlaydi?",
      answer: "Virtual mashina (VM) - bu dasturiy ta'minot yordamida yaratilgan, fizik kompyuter simulyatsiyasi. U hypervisor dasturi yordamida ishga tushiriladi. VM host operatsion tizimdan izolyatsiya qilingan holda alohida operatsion tizimni ishga tushiradi. Buning uchun fizik kompyuter resurslari (CPU, RAM, disk) virtualizatsiya qilinadi va VM ga ajratiladi."
    },
    {
      question: "Cloud computing va operatsion tizimlar o'rtasida qanday bog'liqlik bor?",
      answer: "Cloud computing operatsion tizimlar bilan bir nechta yo'llar orqali bog'langan: 1) Cloud serverlar ko'pincha Linux yoki Windows Server ishlatadilar. 2) SaaS (Software as a Service) tizimlarga browserlar orqali kiriladi, browserlar esa operatsion tizim ustida ishlaydi. 3) IaaS (Infrastructure as a Service) ko'pincha virtual mashinalar taqdim etadi, ular cloud-optimized OS ishlatadi. 4) PaaS (Platform as a Service) operatsion tizim abstraksiyasini taqdim etadi."
    },
    {
      question: "32-bit va 64-bit operatsion tizimlar o'rtasidagi farq nima?",
      answer: "64-bit operatsion tizimlar 32-bit tizimlarga qaraganda ko'proq xotirani (4GB dan ortiq RAM) qo'llab-quvvatlaydi. 64-bit tizimlar bir vaqtning o'zida ko'proq ma'lumotlarga ishlov bera oladi, bu murakkab hisoblashlar uchun tezroq ishlashni ta'minlaydi. 64-bit tizimlar 64-bit va 32-bit dasturlarni ishga tushira oladi, 32-bit tizimlar esa faqat 32-bit dasturlarni qo'llab-quvvatlaydi."
    },
    {
      question: "Operatsion tizimni yangilab turish nima uchun muhim?",
      answer: "Operatsion tizimni yangilab turish muhim, chunki: 1) Xavfsizlik - yangilanishlar xavfsizlik zaifliklarini tuzatadi. 2) Ishlash barqarorligi - xatolar tuzatiladi. 3) Moslik - yangi dasturlar va qurilmalarni qo'llab-quvvatlash. 4) Yangi funksiyalar - yangi imkoniyatlar va yaxshilanishlar. 5) Qo'llab-quvvatlash - eskiriib qolgan versiyalar qo'llab-quvvatlanishdan to'xtatiladi."
    }
  ],
  historyTimeline: [
    {
      year: "1956-1959",
      event: "Birinchi operatsion tizimlar",
      description: "General Motors tomonidan IBM kompyuterlari uchun yaratilgan GM-NAA I/O va MIT tomonidan yaratilgan CTSS (Compatible Time-Sharing System) kabi birinchi operatsion tizimlar paydo bo'ldi."
    },
    {
      year: "1969",
      event: "UNIX paydo bo'lishi",
      description: "Ken Thompson va Dennis Ritchie AT&T Bell Labs'da UNIX operatsion tizimini ishlab chiqdilar. UNIX zamonaviy operatsion tizimlarning ko'piga ta'sir ko'rsatdi."
    },
    {
      year: "1975-1985",
      event: "Personal kompyuter OS rivoji",
      description: "CP/M, MS-DOS kabi operatsion tizimlar keng tarqaldi. Apple Macintosh innovatsion interfeys bilan chiqarildi va Microsoft Windows 1.0 taqdim etildi."
    },
    {
      year: "1991",
      event: "Linux kerneli yaratilishi",
      description: "Linus Torvalds Linux kernel ustida ish boshladi, bu keyinchalik eng keng tarqalgan open source operatsion tizimlardan biriga aylandi."
    },
    {
      year: "1995-2000",
      event: "Windows 95 va 2000",
      description: "Microsoft Windows 95 va keyinchalik Windows 2000 chiqarildi, ular desktop kompyuterlar uchun standart holiga keldi."
    },
    {
      year: "2001",
      event: "Mac OS X chiqarilishi",
      description: "Apple Mac OS X (keyinchalik macOS) ni taqdim etdi, bu Darwin kernel va BSD komponentlari asosida qurilgan operatsion tizim."
    },
    {
      year: "2007-2008",
      event: "Mobil OS inqilobi",
      description: "Apple iOS va Google Android mobil operatsion tizimlari chiqarildi, bu mobil kompyuting dunyosini o'zgartirdi."
    },
    {
      year: "2009-2015",
      event: "Cloud OS rivoji",
      description: "Windows Azure (Microsoft Azure), Google Cloud Platform va boshqa cloud-oriented operatsion tizimlar rivojlandi."
    },
    {
      year: "2015-2020",
      event: "Container OS va mikroservislar",
      description: "Docker, Kubernetes, va container-optimized OS lar keng tarqaldi, mikroservis arxitekturasi ommalashdi."
    },
    {
      year: "2020+",
      event: "AI-enhanced OS va Edge Computing",
      description: "Sun'iy intellekt bilan kengaytirilgan operatsion tizimlar va Edge Computing uchun maxsus OS lar rivojlanmoqda."
    }
  ]
  };
  
  export default operationSystemData;

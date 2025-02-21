const operationSystemData = {
    title: "Operatsion Tizim",
    description: "Kompyuter dasturiy ta'minotining asosiy qismi bo'lgan operatsion tizim va uning ishlash printsiplari haqida ma'lumot.",
    lastUpdate: new Date().toLocaleDateString('uz-UZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }),
    author: "To'raqulov Asfandiyor Jaxongirovich",
    sections: [
      {
        id: 1,
        component: "Windows",
        icon: "windows",
        shortDescription: "Microsoft kompaniyasi tomonidan ishlab chiqilgan eng mashhur operatsion tizim.",
        detailedInfo: {
          function: "Foydalanuvchi interfeysi va dasturiy ta'minotni boshqaradi",
          types: ["Windows 11", "Windows 10", "Windows Server"],
          examples: ["Windows 11 Pro", "Windows 10 Home", "Windows Server 2022"],
          keyFeatures: [
            "Foydalanuvchi do'stona interfeys",
            "Keng dasturiy ta'minot qo'llab-quvvatlash",
            "DirectX texnologiyasi"
          ],
          advantages: [
            "Ko'p dasturlar bilan moslik",
            "Oson o'rnatish va sozlash",
            "Keng tarqalgan"
          ],
          disadvantages: [
            "Litsenziya narxi yuqori",
            "Resurs talab qilishi",
            "Xavfsizlik masalalari"
          ],
          requirements: {
            processor: "1 GHz yoki tezroq",
            ram: "Minimum 4GB",
            storage: "Minimum 64GB"
          }
        }
      },
      {
        id: 2,
        component: "Linux",
        icon: "linux",
        shortDescription: "Ochiq kodli, bepul operatsion tizim.",
        detailedInfo: {
          function: "Tizim resurslarini boshqarish va dasturlarni ishga tushirish",
          types: ["Ubuntu", "Fedora", "CentOS"],
          examples: ["Ubuntu 22.04 LTS", "Fedora 39", "Linux Mint"],
          keyFeatures: [
            "Terminal orqali boshqarish",
            "Xavfsizlik",
            "Moslashuvchanlik"
          ],
          advantages: [
            "Bepul va ochiq kodli",
            "Yuqori xavfsizlik",
            "Kam resurs talab qilishi"
          ],
          disadvantages: [
            "O'rganish qiyinroq",
            "Ba'zi dasturlar bilan moslik muammolari",
            "Texnik yordam cheklangan"
          ],
          requirements: {
            processor: "1 GHz yoki tezroq",
            ram: "Minimum 2GB",
            storage: "Minimum 20GB"
          }
        }
      },
      {
        id: 3,
        component: "macOS",
        icon: "apple",
        shortDescription: "Apple kompaniyasining Macintosh kompyuterlari uchun operatsion tizimi.",
        detailedInfo: {
          function: "Apple qurilmalari uchun maxsus operatsion tizim",
          types: ["macOS Sonoma", "macOS Ventura", "macOS Monterey"],
          examples: ["macOS 14", "macOS 13", "macOS 12"],
          keyFeatures: [
            "Dizayn va stabillik",
            "Apple ekotizimi",
            "Xavfsizlik",
            "iCloud integratsiyasi",
            "Time Machine backup"
          ],
          advantages: [
            "Yuqori sifatli interfeys",
            "Apple qurilmalari bilan mukammal integratsiya",
            "Yuqori xavfsizlik",
            "Optimallashtirilgan ishlash",
            "Professional dasturlar uchun qulay"
          ],
          disadvantages: [
            "Faqat Apple qurilmalarida ishlaydi",
            "Narxi yuqori",
            "Dasturlar cheklangan",
            "Qurilmalarni almashtirish qiyin",
            "Moslashuvchanlik cheklangan"
          ],
          requirements: {
            processor: "Intel yoki Apple Silicon",
            ram: "Minimum 8GB",
            storage: "Minimum 256GB",
            graphics: "Intel UHD Graphics yoki yaxshiroq",
            internet: "Internet ulanishi talab qilinadi"
          }
        }
      },
      {
        id: 4,
        component: "Tizim Yadrosi (Kernel)",
        icon: "kernel",
        shortDescription: "Operatsion tizimning asosiy qismi.",
        detailedInfo: {
          function: "Qurilmalar va dasturlar o'rtasida aloqani ta'minlaydi",
          types: ["Monolithic Kernel", "Microkernel", "Hybrid Kernel", "Exokernel"],
          examples: [
            "Linux Kernel",
            "Windows NT Kernel",
            "XNU (macOS)",
            "BSD Kernel"
          ],
          keyFeatures: [
            "Xotira boshqaruvi",
            "Jarayonlar boshqaruvi",
            "Qurilmalar boshqaruvi",
            "Fayl tizimi boshqaruvi",
            "Xavfsizlik boshqaruvi"
          ],
          advantages: [
            "Tizim resurslarini samarali boshqarish",
            "Yuqori unumdorlik",
            "Hardware bilan to'g'ridan-to'g'ri aloqa",
            "Xavfsizlik nazorati",
            "Tizim barqarorligi"
          ],
          disadvantages: [
            "Murakkab arxitektura",
            "Xatolarni tuzatish qiyin",
            "Yangilash uchun qayta yuklash kerak",
            "Xavfsizlik zaifliklariga ta'sirchan",
            "O'zgartirish murakkab"
          ],
          requirements: {
            processor: "x86, x64, ARM yoki boshqa arxitekturalar",
            ram: "Kernel turiga qarab",
            storage: "Bir necha MB dan bir necha GB gacha",
            compatibility: "Hardware bilan moslik",
            security: "Xavfsizlik modullarini qo'llab-quvvatlash"
          }
        }
      },
      {
        id: 5,
        component: "Fayllar Tizimi",
        icon: "files",
        shortDescription: "Ma'lumotlarni saqlash va boshqarish usuli.",
        detailedInfo: {
          function: "Fayllarni saqlash va ularga kirish imkoniyatini ta'minlaydi",
          types: ["NTFS", "ext4", "APFS", "FAT32", "exFAT", "HFS+"],
          examples: [
            "Windows NTFS fayl tizimi",
            "Linux ext4 fayl tizimi",
            "macOS APFS fayl tizimi",
            "Universal FAT32"
          ],
          keyFeatures: [
            "Fayl huquqlari boshqaruvi",
            "Fragmentatsiya nazorati",
            "Jurnallash tizimi",
            "Ma'lumotlar shifrlash",
            "Fayl tiklash imkoniyati"
          ],
          advantages: [
            "Ma'lumotlarni tashkil qilish",
            "Xavfsiz saqlash",
            "Tezkor kirish",
            "Katta hajmli fayllarni qo'llab-quvvatlash",
            "Zaxira nusxa olish imkoniyati"
          ],
          disadvantages: [
            "Fragmentatsiya muammolari",
            "Tizimga bog'liqlik",
            "Turli formatlar o'rtasida moslik muammolari",
            "Tiklash murakkabligi"
          ],
          requirements: {
            processor: "Zamonaviy protsessor",
            ram: "Minimum 1GB",
            storage: "Fayl tizimi turiga qarab",
            compatibility: "OS bilan moslik",
            management: "Fayl tizimi boshqaruv vositalari"
          }
        }
      },
      {
        id: 6,
        component: "Xotira Boshqaruvi",
        icon: "memory-management",
        shortDescription: "Operativ xotirani samarali taqsimlash.",
        detailedInfo: {
          function: "RAM va virtual xotirani boshqaradi, xotira resurslarini taqsimlaydi",
          types: [
            "Physical Memory Management",
            "Virtual Memory Management",
            "Swap Management",
            "Cache Management"
          ],
          examples: [
            "Windows Memory Manager",
            "Linux Memory Management",
            "macOS Memory Management",
            "Swap File System"
          ],
          keyFeatures: [
            "Xotira himoyasi",
            "Xotira taqsimlash",
            "Kesh boshqaruvi",
            "Xotira defragmentatsiyasi",
            "Xotira optimizatsiyasi"
          ],
          advantages: [
            "Samarali xotira foydalanishi",
            "Xotira himoyasi",
            "Tezkor ishlash",
            "Resurslarni optimal taqsimlash",
            "Xotira izolyatsiyasi"
          ],
          disadvantages: [
            "Murakkab boshqaruv",
            "Xotira sizib ketishi",
            "Swap file sekinligi",
            "Resurs sarfi yuqori"
          ],
          requirements: {
            processor: "64-bit protsessor",
            ram: "Tizim talabiga qarab",
            storage: "Swap fayl uchun bo'sh joy",
            system: "Zamonaviy OS",
            monitoring: "Xotira monitoring vositalari"
          }
        }
      },
      {
        id: 7,
        component: "Tarmoq Protokollari",
        icon: "network",
        shortDescription: "Internet va tarmoq aloqalarini boshqarish.",
        detailedInfo: {
          function: "Tarmoq orqali ma'lumot almashish va aloqani ta'minlash",
          types: [
            "TCP/IP",
            "UDP",
            "HTTP/HTTPS",
            "FTP",
            "SMTP",
            "DNS"
          ],
          examples: [
            "Web browsing (HTTP/HTTPS)",
            "Email (SMTP/POP3/IMAP)",
            "Fayl uzatish (FTP)",
            "Domain nomlar (DNS)",
            "Real-time aloqa (UDP)"
          ],
          keyFeatures: [
            "Paketlarni uzatish",
            "Marshrutlash",
            "Xavfsizlik protokollari",
            "Tarmoq monitoring",
            "Trafik boshqaruvi"
          ],
          advantages: [
            "Global aloqa imkoniyati",
            "Standartlashtirilgan protokollar",
            "Xavfsiz ma'lumot uzatish",
            "Turli qurilmalar bilan moslik",
            "Kengaytirilgan funksionallik"
          ],
          disadvantages: [
            "Xavfsizlik risklari",
            "Tarmoq sekinligi",
            "Protokol murakkabligi",
            "Resurs sarfi",
            "Moslik muammolari"
          ],
          requirements: {
            network: "Internet ulanish",
            bandwidth: "Minimal tezlik talabi",
            security: "Xavfsizlik vositalari",
            compatibility: "Protokol moslik",
            management: "Tarmoq boshqaruv vositalari"
          }
        }
      },
      {
        id: 8,
        component: "Grafik Interfeys",
        icon: "gui",
        shortDescription: "Foydalanuvchi grafik interfeysi (GUI).",
        detailedInfo: {
          function: "Vizual interfeys orqali tizimni boshqarish va foydalanuvchi bilan o'zaro aloqa",
          types: [
            "Desktop Environment",
            "Window Manager",
            "Display Server",
            "Compositor"
          ],
          examples: [
            "GNOME Desktop",
            "KDE Plasma",
            "Windows Explorer",
            "macOS Aqua"
          ],
          keyFeatures: [
            "Oynalar boshqaruvi",
            "Menyu tizimi",
            "Ikonkalar va tugmalar",
            "Drag-and-drop funksiyasi",
            "Vizual effektlar"
          ],
          advantages: [
            "Intuitiv boshqaruv",
            "Oson o'rganish",
            "Vizual jozibadorlik",
            "Ko'p vazifali interfeys",
            "Moslashuvchanlik"
          ],
          disadvantages: [
            "Resurs talab qilishi",
            "Tizim yuklamasi",
            "Murakkab sozlamalar",
            "Ba'zan sekinlik"
          ],
          requirements: {
            processor: "Zamonaviy CPU",
            ram: "Minimum 2GB",
            graphics: "GPU qo'llab-quvvatlash",
            storage: "5GB bo'sh joy",
            display: "Minimal 1024x768 resolution"
          }
        }
      },
      {
        id: 9,
        component: "Drayverlar",
        icon: "driver",
        shortDescription: "Qurilmalarni boshqarish dasturlari.",
        detailedInfo: {
          function: "Hardware qurilmalar bilan operatsion tizim o'rtasidagi aloqani ta'minlash",
          types: [
            "Video drayverlar",
            "Audio drayverlar",
            "Tarmoq drayverlari",
            "USB drayverlar",
            "Printer drayverlar"
          ],
          examples: [
            "NVIDIA GeForce drayver",
            "Realtek Audio drayver",
            "Intel Network Adapter",
            "HP Printer drayver",
            "Logitech WebCam drayver"
          ],
          keyFeatures: [
            "Qurilma boshqaruvi",
            "Hardware moslashtirish",
            "Xatoliklarni bartaraf etish",
            "Unumdorlikni optimizatsiya qilish",
            "Yangi funksiyalarni qo'shish"
          ],
          advantages: [
            "Hardware funksionalligini to'liq qo'llab-quvvatlash",
            "Unumdorlikni oshirish",
            "Yangi xususiyatlarni qo'shish",
            "Xavfsizlikni ta'minlash"
          ],
          disadvantages: [
            "Doimiy yangilash zarurati",
            "Nosozliklar keltirib chiqarishi mumkin",
            "Tizim resurslari sarfi",
            "Ba'zan nomosliklar"
          ],
          requirements: {
            compatibility: "Hardware moslik",
            os_version: "OS versiyasi bilan moslik",
            system: "Tizim talablari",
            storage: "O'rnatish uchun joy",
            updates: "Muntazam yangilanishlar"
          }
        }
      },
      {
        id: 10,
        component: "Jarayonlar Boshqaruvi",
        icon: "process",
        shortDescription: "Dasturlar va jarayonlarni nazorat qilish.",
        detailedInfo: {
          function: "Tizimda ishlaydigan dasturlar va jarayonlarni boshqarish va nazorat qilish",
          types: [
            "Foreground Process",
            "Background Process",
            "System Service",
            "Daemon Process",
            "Thread Management"
          ],
          examples: [
            "Windows Task Manager",
            "Linux htop",
            "macOS Activity Monitor",
            "Process Explorer",
            "System Monitor"
          ],
          keyFeatures: [
            "CPU resurslarini taqsimlash",
            "Xotira boshqaruvi",
            "Jarayonlar monitoringi",
            "Jarayonlar prioriteti",
            "Jarayonlarni to'xtatish/davom ettirish"
          ],
          advantages: [
            "Tizim resurslarini samarali taqsimlash",
            "Xavfsizlikni ta'minlash",
            "Unumdorlikni nazorat qilish",
            "Muammoli jarayonlarni aniqlash",
            "Tizim barqarorligini ta'minlash"
          ],
          disadvantages: [
            "Murakkab boshqaruv",
            "Yuqori CPU sarfi",
            "Xotira sarfi",
            "Deadlock xavfi"
          ],
          requirements: {
            processor: "Multi-core CPU",
            ram: "Yetarli operativ xotira",
            system: "Zamonaviy OS",
            monitoring: "Monitoring vositalari",
            management: "Boshqaruv dasturlari"
          }
        }
      },
      {
        id: 11,
        component: "Xavfsizlik Tizimi",
        icon: "security",
        shortDescription: "Tizim xavfsizligini ta'minlash.",
        detailedInfo: {
          function: "Tizim va ma'lumotlar xavfsizligini ta'minlash, ruxsatlarni boshqarish",
          types: [
            "Firewall",
            "Antivirus",
            "Encryption",
            "Access Control",
            "Security Policies"
          ],
          examples: [
            "Windows Defender",
            "SELinux",
            "FileVault",
            "BitLocker",
            "AppArmor"
          ],
          keyFeatures: [
            "Real vaqt himoyasi",
            "Xavflarni aniqlash",
            "Ma'lumotlarni shifrlash",
            "Foydalanuvchi huquqlarini boshqarish",
            "Tizim monitoring"
          ],
          advantages: [
            "Yuqori darajali himoya",
            "Avtomatik yangilanishlar",
            "Kompleks himoya",
            "Moslashuvchan sozlamalar",
            "Proaktiv himoya"
          ],
          disadvantages: [
            "Tizim resurslarini band qilish",
            "False positive natijalar",
            "Murakkab sozlamalar",
            "Ba'zan dasturlar bilan konflikt",
            "Narxi yuqori bo'lishi mumkin"
          ],
          requirements: {
            processor: "Zamonaviy CPU",
            ram: "Minimum 4GB",
            storage: "10GB bo'sh joy",
            os: "Yangilangan OS versiyasi",
            network: "Internet aloqasi"
          }
        }
      },
      {
        id: 12,
        component: "Yuklanish Jarayoni",
        icon: "boot",
        shortDescription: "Tizimni ishga tushirish bosqichlari.",
        detailedInfo: {
          function: "Kompyuterni yoqishdan to operatsion tizim to'liq ishga tushguncha bo'lgan jarayon",
          types: [
            "BIOS Boot",
            "UEFI Boot",
            "Secure Boot",
            "Network Boot",
            "Multi-boot"
          ],
          examples: [
            "GRUB Bootloader",
            "Windows Boot Manager",
            "Systemd-boot",
            "rEFInd",
            "Clover Bootloader"
          ],
          keyFeatures: [
            "Hardware tekshiruvi",
            "Bootloader yuklash",
            "Kernel initialization",
            "Xizmatlarni ishga tushirish",
            "Foydalanuvchi sessiyasi"
          ],
          advantages: [
            "Tizim diagnostikasi",
            "Xavfsiz yuklanish",
            "Tezkor ishga tushish",
            "Ko'p tizimli yuklanish",
            "Recovery imkoniyati"
          ],
          disadvantages: [
            "Bootloader muammolari",
            "BIOS/UEFI sozlash murakkabligi",
            "Yuklanish xatolari",
            "Vaqt sarfi",
            "Texnik bilim talab etilishi"
          ],
          requirements: {
            motherboard: "UEFI/BIOS qo'llab-quvvatlash",
            storage: "Boot sector mavjudligi",
            system: "OS bilan moslik",
            security: "Secure Boot qo'llab-quvvatlash",
            firmware: "Yangilangan firmware"
          }
        }
      },
      {
        id: 13,
        component: "Foydalanuvchi Hisobi",
        icon: "user",
        shortDescription: "Foydalanuvchilar va ruxsatlar.",
        detailedInfo: {
          function: "Foydalanuvchilar hisoblarini yaratish, boshqarish va nazorat qilish",
          types: [
            "Administrator Account",
            "Standard User",
            "Guest Account",
            "Service Account",
            "Group Accounts"
          ],
          examples: [
            "Windows User Account",
            "Linux User Management",
            "macOS Users & Groups",
            "Active Directory Users",
            "Local Accounts"
          ],
          keyFeatures: [
            "Autentifikatsiya",
            "Avtorizatsiya",
            "Huquqlar boshqaruvi",
            "Profil sozlamalari",
            "Xavfsizlik siyosati"
          ],
          advantages: [
            "Individual sozlamalar",
            "Xavfsizlik nazorati",
            "Resurslarni taqsimlash",
            "Faoliyat monitoringi",
            "Ma'lumotlar himoyasi"
          ],
          disadvantages: [
            "Boshqaruv murakkabligi",
            "Huquqlar konflikti",
            "Xotira band qilishi",
            "Parollarni eslab qolish",
            "Sozlash vaqti ko'pligi"
          ],
          requirements: {
            storage: "Profil uchun xotira",
            security: "Parol talablari",
            system: "Foydalanuvchi boshqaruvi",
            backup: "Profil zaxirasi",
            management: "Admin huquqlari"
          }
        }
      },
      {
        id: 14,
        component: "Dastur Menejeri",
        icon: "package",
        shortDescription: "Dasturlarni o'rnatish va o'chirish.",
        detailedInfo: {
          function: "Dasturiy ta'minotni o'rnatish, yangilash va o'chirish jarayonlarini boshqarish",
          types: [
            "Package Manager",
            "App Store",
            "Software Center",
            "Repository Manager",
            "Update Manager"
          ],
          examples: [
            "Windows Store",
            "Ubuntu Software Center",
            "macOS App Store",
            "Snap Store",
            "Chocolatey"
          ],
          keyFeatures: [
            "Dasturlarni qidirish",
            "Avtomatik yangilash",
            "Paketlar bog'liqligini tekshirish",
            "O'rnatish/o'chirish jarayoni",
            "Xavfsizlik tekshiruvi"
          ],
          advantages: [
            "Markazlashgan boshqaruv",
            "Xavfsiz o'rnatish",
            "Avtomatik yangilanishlar",
            "Tizim tozaligi",
            "Qulay interfeys"
          ],
          disadvantages: [
            "Internet bog'liqlik",
            "Repository cheklovlari",
            "Disk joy band qilishi",
            "Ba'zan sekin ishlashi",
            "Versiya konflikti"
          ],
          requirements: {
            internet: "Barqaror internet aloqasi",
            storage: "Yetarli bo'sh joy",
            system: "OS bilan moslik",
            memory: "Minimal 2GB RAM",
            permissions: "Admin huquqlari"
          }
        }
      },
      {
        id: 15,
        component: "Tizim Xizmatlari",
        icon: "services",
        shortDescription: "Fonda ishlaydigan xizmatlar.",
        detailedInfo: {
          function: "Tizimning asosiy funksiyalarini ta'minlovchi fon xizmatlarini boshqarish",
          types: [
            "System Service",
            "Background Service",
            "Scheduled Tasks",
            "Daemon Processes",
            "Auto-start Services"
          ],
          examples: [
            "Windows Services",
            "Systemd Services",
            "Launch Daemons",
            "Cron Jobs",
            "Task Scheduler"
          ],
          keyFeatures: [
            "Avtomatik ishga tushish",
            "Fon rejimida ishlash",
            "Resurslarni boshqarish",
            "Xizmatlar monitoringi",
            "Xatoliklarni qayd qilish"
          ],
          advantages: [
            "Avtomatlashtirish",
            "Tizim barqarorligi",
            "Resurslarni tejash",
            "24/7 ishlash",
            "Markazlashgan boshqaruv"
          ],
          disadvantages: [
            "Resurs sarfi",
            "Murakkab sozlash",
            "Xatoliklarni aniqlash qiyin",
            "Xavfsizlik risklari",
            "Tizim yuklamasi"
          ],
          requirements: {
            processor: "Multi-core CPU",
            ram: "Minimal 4GB",
            storage: "Yetarli xotira",
            system: "OS qo'llab-quvvatlashi",
            management: "Admin huquqlari"
          }
        }
      },
      {
        id: 16,
        component: "Terminallar",
        icon: "terminal",
        shortDescription: "Buyruqlar qatori interfeysi.",
        detailedInfo: {
          function: "Matnli buyruqlar orqali tizimni boshqarish va dasturlash",
          types: [
            "Command Line Interface",
            "Shell",
            "Terminal Emulator",
            "Console",
            "Remote Terminal"
          ],
          examples: [
            "Windows PowerShell",
            "Bash Shell",
            "macOS Terminal",
            "Linux Console",
            "SSH Terminal"
          ],
          keyFeatures: [
            "Buyruqlarni bajarish",
            "Skriptlash imkoniyati",
            "Tizim boshqaruvi",
            "Fayl operatsiyalari",
            "Network diagnostika"
          ],
          advantages: [
            "Tezkor boshqaruv",
            "Avtomatlashtirish",
            "Resurs tejamliligi",
            "Kuchli funksionallik",
            "Remote boshqaruv"
          ],
          disadvantages: [
            "O'rganish murakkabligi",
            "Vizual interfeys yo'qligi",
            "Xatolik xavfi yuqori",
            "Buyruqlarni eslab qolish",
            "Murakkab sintaksis"
          ],
          requirements: {
            knowledge: "Terminal buyruqlari bilimi",
            system: "Terminal qo'llab-quvvatlash",
            shell: "Shell dasturi",
            permissions: "Tegishli huquqlar",
            encoding: "Terminal kodlash"
          }
        }
      },
      {
        id: 17,
        component: "Virtuallashtirish",
        icon: "virtual",
        shortDescription: "Virtual mashinalar va konteynerlar.",
        detailedInfo: {
          function: "Virtual muhitlarni yaratish va boshqarish, resurslarni izolyatsiya qilish",
          types: [
            "Virtual Machine",
            "Container",
            "Hypervisor",
            "Cloud Virtualization",
            "Application Virtualization"
          ],
          examples: [
            "VMware Workstation",
            "Docker Container",
            "VirtualBox",
            "Hyper-V",
            "Kubernetes"
          ],
          keyFeatures: [
            "Resurslarni izolyatsiya qilish",
            "Tizimlarni parallel ishlatish",
            "Xavfsiz test muhiti",
            "Resurslarni dinamik taqsimlash",
            "Snapshot va backup"
          ],
          advantages: [
            "Resurslardan samarali foydalanish",
            "Tezkor deployment",
            "Xavfsiz muhit",
            "Moslashuvchanlik",
            "Ko'p platformali qo'llab-quvvatlash"
          ],
          disadvantages: [
            "Yuqori resurs talabi",
            "Performance overhead",
            "Murakkab konfiguratsiya",
            "Litsenziya xarajatlari",
            "O'rganish vaqti"
          ],
          requirements: {
            processor: "Virtualization qo'llab-quvvatlovchi CPU",
            ram: "Minimum 8GB",
            storage: "SSD tavsiya etiladi",
            os: "64-bit operatsion tizim",
            network: "Tezkor tarmoq ulanishi"
          }
        }
      },
      {
        id: 18,
        component: "Tizim Monitoring",
        icon: "monitor",
        shortDescription: "Tizim resurslarini kuzatish.",
        detailedInfo: {
          function: "Tizim resurslarini real vaqtda kuzatish va tahlil qilish",
          types: [
            "Performance Monitor",
            "Resource Monitor",
            "Network Monitor",
            "Process Monitor",
            "System Health Check"
          ],
          examples: [
            "Windows Task Manager",
            "Linux System Monitor",
            "macOS Activity Monitor",
            "Resource Monitor",
            "Performance Counter"
          ],
          keyFeatures: [
            "CPU foydalanish monitoring",
            "RAM holati kuzatuvi",
            "Disk aktivligi",
            "Tarmoq trafigi",
            "Jarayonlar monitoring"
          ],
          advantages: [
            "Real vaqt ma'lumotlari",
            "Muammolarni erta aniqlash",
            "Resurs optimizatsiyasi",
            "Tizim unumdorligini oshirish",
            "Xatoliklarni tezkor aniqlash"
          ],
          disadvantages: [
            "Qo'shimcha resurs sarfi",
            "Murakkab interfeys",
            "Ko'p ma'lumotlar",
            "Sozlash murakkabligi",
            "Noto'g'ri talqin qilish xavfi"
          ],
          requirements: {
            processor: "Multi-core CPU",
            ram: "Minimum 4GB",
            storage: "Log fayllar uchun joy",
            system: "Monitoring API qo'llab-quvvatlash",
            permissions: "Admin huquqlari"
          }
        }
      },
      {
        id: 19,
        component: "Tarjima Qilish",
        icon: "translate",
        shortDescription: "Til va lokalizatsiya.",
        detailedInfo: {
          function: "Tizimni turli tillarga moslashtirish va lokalizatsiya qilish",
          types: [
            "Language Pack",
            "Locale Settings",
            "Input Methods",
            "Regional Settings",
            "Translation Tools"
          ],
          examples: [
            "Windows Language Pack",
            "Linux Locale",
            "macOS Language Support",
            "Input Method Editor",
            "Regional Format"
          ],
          keyFeatures: [
            "Ko'p tilli interfeys",
            "Regional standartlar",
            "Klaviatura layoutlari",
            "Vaqt zonalari",
            "Formatlash qoidalari"
          ],
          advantages: [
            "Global qo'llanilish",
            "Mahalliy moslashuvchanlik",
            "Foydalanuvchi qulayligi",
            "Madaniy moslik",
            "Xalqaro standartlar"
          ],
          disadvantages: [
            "Disk joy egallashi",
            "Tarjima sifati",
            "Yangilash murakkabligi",
            "Ba'zi interfeys muammolari",
            "Resurs sarfi"
          ],
          requirements: {
            storage: "Har til uchun ~500MB",
            system: "Unicode qo'llab-quvvatlash",
            memory: "Qo'shimcha RAM",
            compatibility: "OS versiyasi moslik",
            fonts: "Turli til shriftlari"
          }
        }
      },
      {
        id: 20,
        component: "Tizim Arxivlash",
        icon: "backup",
        shortDescription: "Tizim zaxiralash va tiklash.",
        detailedInfo: {
          function: "Tizim va ma'lumotlarni zaxiralash, kerak bo'lganda tiklash imkoniyatini ta'minlash",
          types: [
            "Full System Backup",
            "Incremental Backup",
            "Differential Backup",
            "File-level Backup",
            "Cloud Backup"
          ],
          examples: [
            "Windows Backup and Restore",
            "Time Machine (macOS)",
            "Rsync (Linux)",
            "System Image",
            "Cloud Storage Backup"
          ],
          keyFeatures: [
            "Avtomatik zaxiralash",
            "Ma'lumotlarni shifrlash",
            "Versiyalarni saqlash",
            "Tezkor tiklash",
            "Tanlab zaxiralash"
          ],
          advantages: [
            "Ma'lumotlar xavfsizligi",
            "Tizimni tiklash imkoniyati",
            "Tarix saqlash",
            "Falokatdan himoya",
            "Oson ko'chirish"
          ],
          disadvantages: [
            "Katta saqlash joyi talab qilishi",
            "Zaxiralash vaqti uzoq",
            "Resurs sarfi",
            "Murakkab sozlamalar",
            "Narxi yuqori bo'lishi mumkin"
          ],
          requirements: {
            storage: "Katta hajmli saqlash joyi",
            network: "Tezkor internet (cloud uchun)",
            processor: "Ko'p yadroli protsessor",
            memory: "Minimum 4GB RAM",
            software: "Maxsus backup dasturlari"
          }
        }
      },
      {
        id: 21,
        component: "Tizim Diagnostikasi",
        icon: "diagnostic",
        shortDescription: "Tizim muammolarini aniqlash va bartaraf etish.",
        detailedInfo: {
          function: "Tizim nosozliklarini aniqlash, tahlil qilish va tuzatish",
          types: [
            "Hardware Diagnostics",
            "Software Diagnostics",
            "Network Diagnostics",
            "Performance Analysis",
            "Security Scanning"
          ],
          examples: [
            "Windows Diagnostic Tools",
            "Apple Diagnostics",
            "Linux System Testing",
            "Memory Diagnostics",
            "Disk Check Utility"
          ],
          keyFeatures: [
            "Xatoliklarni aniqlash",
            "Tizim tekshiruvi",
            "Unumdorlik tahlili",
            "Xavfsizlik tekshiruvi",
            "Hisobot yaratish"
          ],
          advantages: [
            "Muammolarni oldindan aniqlash",
            "Tizim barqarorligini ta'minlash",
            "Resurs sarfini optimallashtirish",
            "Xizmat muddatini uzaytirish",
            "Ishonchlilikning oshishi"
          ],
          disadvantages: [
            "Vaqt talab qilishi",
            "Murakkab natijalar tahlili",
            "Maxsus bilim talab etilishi",
            "Ba'zan noaniq natijalar",
            "Tizim resurslarini band qilish"
          ],
          requirements: {
            processor: "Diagnostika uchun CPU quvvati",
            memory: "Minimum 4GB RAM",
            storage: "Bo'sh disk maydoni",
            tools: "Diagnostika vositalari",
            access: "Admin huquqlari"
          }
        }
      },
      {
        id: 22,
        component: "Tizim Optimizatsiyasi",
        icon: "optimization",
        shortDescription: "Tizim ishlashini yaxshilash va tezlashtirish.",
        detailedInfo: {
          function: "Tizim unumdorligini oshirish va resurslardan samarali foydalanish",
          types: [
            "Memory Optimization",
            "Disk Optimization",
            "Process Optimization",
            "Network Optimization",
            "Boot Optimization"
          ],
          examples: [
            "Disk Defragmentation",
            "Memory Compression",
            "Service Optimization",
            "Registry Cleanup",
            "Startup Management"
          ],
          keyFeatures: [
            "Xotira optimizatsiyasi",
            "Disk fragmentatsiyasini kamaytirish",
            "Jarayonlar optimizatsiyasi",
            "Kesh tozalash",
            "Tizim sozlamalarini optimallashtirish"
          ],
          advantages: [
            "Tizim tezligini oshirish",
            "Resurslardan samarali foydalanish",
            "Disk samaradorligini oshirish",
            "Tizim barqarorligini yaxshilash",
            "Energiya sarfini kamaytirish"
          ],
          disadvantages: [
            "Vaqtinchalik tizim sekinlashuvi",
            "Ba'zi optimizatsiyalar xavfli",
            "Natijalar vaqtinchalik bo'lishi mumkin",
            "Noto'g'ri sozlash xavfi",
            "Resurs talab qilishi"
          ],
          requirements: {
            processor: "Zamonaviy CPU",
            memory: "Minimum 4GB RAM",
            storage: "SSD tavsiya etiladi",
            software: "Optimizatsiya vositalari",
            permissions: "Admin huquqlari"
          }
        }
      },
      {
        id: 23,
        component: "Tizim Integratsiyasi",
        icon: "integration",
        shortDescription: "Turli tizimlar va xizmatlarni birlashtirish.",
        detailedInfo: {
          function: "Turli tizimlar, xizmatlar va ilovalarni bir-biri bilan bog'lash va integratsiya qilish",
          types: [
            "Cloud Integration",
            "Network Integration",
            "Service Integration",
            "Data Integration",
            "API Integration"
          ],
          examples: [
            "Active Directory Integration",
            "Cloud Services Connection",
            "Database Integration",
            "Third-party API Integration",
            "Enterprise Service Bus"
          ],
          keyFeatures: [
            "Tizimlararo ma'lumot almashinuvi",
            "Xizmatlar sinxronizatsiyasi",
            "Markazlashgan boshqaruv",
            "Avtomatik integratsiya",
            "Xavfsiz ulanish"
          ],
          advantages: [
            "Tizimlar o'rtasida uzluksiz aloqa",
            "Ma'lumotlar yaxlitligi",
            "Resurslardan samarali foydalanish",
            "Boshqaruv samaradorligi",
            "Kengaytirilgan funksionallik"
          ],
          disadvantages: [
            "Murakkab sozlash",
            "Xavfsizlik risklari",
            "Yuqori narx",
            "Texnik muammolar",
            "Moslik masalalari"
          ],
          requirements: {
            network: "Tezkor tarmoq ulanishi",
            security: "SSL/TLS protokollari",
            compatibility: "API standartlari",
            documentation: "Texnik hujjatlar",
            support: "24/7 texnik yordam"
          }
        }
      },
      {
        id: 24,
        component: "Tizim Arxitekturasi",
        icon: "architecture",
        shortDescription: "Operatsion tizim tuzilishi va arxitekturasi.",
        detailedInfo: {
          function: "Operatsion tizimning asosiy komponentlari va ularning o'zaro bog'liqligi",
          types: [
            "Monolithic Architecture",
            "Microkernel Architecture",
            "Hybrid Architecture",
            "Layered Architecture",
            "Modular Architecture"
          ],
          examples: [
            "Windows NT Architecture",
            "Linux Kernel Architecture",
            "macOS Darwin Architecture",
            "UNIX System Architecture",
            "Android Architecture"
          ],
          keyFeatures: [
            "Kernel arxitekturasi",
            "Xotira boshqaruvi",
            "Jarayonlar arxitekturasi",
            "Fayl tizimi arxitekturasi",
            "Xavfsizlik arxitekturasi"
          ],
          advantages: [
            "Yuqori unumdorlik",
            "Xavfsizlik",
            "Moslashuvchanlik",
            "Kengaytirilganlik",
            "Barqarorlik"
          ],
          disadvantages: [
            "Murakkablik",
            "O'zgartirishlar qiyinligi",
            "Resurs talablari",
            "Moslik muammolari",
            "O'rganish murakkabligi"
          ],
          requirements: {
            processor: "64-bit arxitektura",
            memory: "Arxitekturaga mos RAM",
            storage: "Tizim uchun joy",
            compatibility: "Hardware moslik",
            documentation: "Texnik hujjatlar"
          }
        }
      },
      {
        id: 25,
        component: "Tizim Dasturlash",
        icon: "programming",
        shortDescription: "Operatsion tizim uchun dasturlash.",
        detailedInfo: {
          function: "Operatsion tizim darajasida dasturlar va drayverlar yaratish",
          types: [
            "Kernel Programming",
            "Driver Development",
            "System Utilities",
            "Shell Programming",
            "Low-level Programming"
          ],
          examples: [
            "Windows Driver Kit",
            "Linux Kernel Module",
            "System Services",
            "Shell Scripts",
            "Boot Loaders"
          ],
          keyFeatures: [
            "Tizim API'lari",
            "Kernel modullar",
            "Drayver dasturlash",
            "Xavfsizlik dasturlash",
            "Optimizatsiya"
          ],
          advantages: [
            "Yuqori unumdorlik",
            "To'liq nazorat",
            "Tizim resurslari bilan ishlash",
            "Maxsus funksionallik",
            "Hardware bilan to'g'ridan-to'g'ri ishlash"
          ],
          disadvantages: [
            "Murakkab dasturlash",
            "Xatoliklar xavfi yuqori",
            "Qiyin debug qilish",
            "Maxsus bilim talab etiladi",
            "Xavfsizlik risklari"
          ],
          requirements: {
            skills: "C/C++, Assembly",
            tools: "Development Kit",
            documentation: "API Documentation",
            testing: "Hardware testing",
            debugging: "Debug tools"
          }
        }
      }
    ],
    additionalInfo: {
      installationSteps: [
        "Qurilma mosligini tekshirish",
        "Zaxira nusxa olish",
        "Boot disk yaratish",
        "O'rnatish jarayoni",
        "Drayverlarni o'rnatish"
      ],
      securityTips: [
        "Muntazam yangilash",
        "Antivirus o'rnatish",
        "Xavfsizlik sozlamalarini sozlash",
        "Foydalanuvchi huquqlarini to'g'ri sozlash"
      ],
      optimizationTips: [
        "Keraksiz dasturlarni o'chirish",
        "Disk tozalash",
        "Tizim sozlamalarini optimallashtirish",
        "Yuklanish dasturlarini tekshirish"
      ],
      troubleshootingGuide: [
        "Xato kodlarini tekshirish",
        "Tizim loglarini analiz qilish",
        "Xavfsiz rejimda yuklash",
        "Tizimni tiklash nuqtasidan foydalanish"
      ]
    },
    summary: "Operatsion tizim kompyuterning asosiy dasturiy ta'minoti bo'lib, qurilmalar va dasturlarni boshqarish, foydalanuvchi interfeysi va xavfsizlikni ta'minlash vazifalarini bajaradi.",
    version: "2.0"
  };
  
  export default operationSystemData;
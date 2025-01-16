const practiceDataIfElse = [
    {
      id: 1,
      title: "Oddiy if-else",
      description: "if-else operatori bilan ishlash",
      task: "Berilgan son 10 dan katta bo'lsa 'Katta', aks holda 'Kichik' deb console.log() orqali chiqaring.",
      initialCode: `let number = 15;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va sonni 10 bilan solishtiring",
      checkResult: (output) => {
        return output[0] === "Katta";
      }
    },
    {
      id: 2,
      title: "Bahoni tekshirish",
      description: "O'tdi yoki o'tmadi",
      task: "Ball 60 dan yuqori bo'lsa 'O'tdi', aks holda 'O'tmadi' deb console.log() orqali chiqaring.",
      initialCode: `let score = 75;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va ballni 60 bilan solishtiring",
      checkResult: (output) => {
        return output[0] === "O'tdi";
      }
    },
    {
      id: 3,
      title: "Yoshga qarab kirish",
      description: "Yoshni tekshirish",
      task: "Yosh 18 dan katta bo'lsa 'Kirish mumkin', aks holda 'Kirish mumkin emas' deb console.log() orqali chiqaring.",
      initialCode: `let age = 20;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va yoshni 18 bilan solishtiring",
      checkResult: (output) => {
        return output[0] === "Kirish mumkin";
      }
    },
    {
      id: 4,
      title: "Parolni tekshirish",
      description: "Parol to'g'ri yoki noto'g'ri",
      task: "Parol '12345' ga teng bo'lsa 'To'g'ri', aks holda 'Noto'g'ri' deb console.log() orqali chiqaring.",
      initialCode: `let password = '12345';
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va parolni tekshiring",
      checkResult: (output) => {
        return output[0] === "To'g'ri";
      }
    },
    {
      id: 5,
      title: "Haroratni tekshirish",
      description: "Harorat ijobiy yoki salbiy",
      task: "Harorat 0 dan yuqori bo'lsa 'Iliq', aks holda 'Sovuq' deb console.log() orqali chiqaring.",
      initialCode: `let temperature = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va haroratni 0 bilan solishtiring",
      checkResult: (output) => {
        return output[0] === "Iliq";
      }
    },
    {
      id: 6,
      title: "Raqamni tekshirish",
      description: "Raqam juft yoki toq",
      task: "Raqam juft bo'lsa 'Juft', aks holda 'Toq' deb console.log() orqali chiqaring.",
      initialCode: `let number = 6;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else va % operatoridan foydalaning",
      checkResult: (output) => {
        return output[0] === "Juft";
      }
    },
    {
      id: 7,
      title: "Meva narxi",
      description: "Narx arzon yoki qimmat",
      task: "Narx 10000 dan past bo'lsa 'Arzon', aks holda 'Qimmat' deb console.log() orqali chiqaring.",
      initialCode: `let price = 8000;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va narxni 10000 bilan solishtiring",
      checkResult: (output) => {
        return output[0] === "Arzon";
      }
    },
    {
      id: 8,
      title: "Internet tezligi",
      description: "Tezlik yaxshi yoki yomon",
      task: "Tezlik 100 Mb/s dan yuqori bo'lsa 'Yaxshi', aks holda 'Yomon' deb console.log() orqali chiqaring.",
      initialCode: `let speed = 120;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va tezlikni 100 bilan solishtiring",
      checkResult: (output) => {
        return output[0] === "Yaxshi";
      }
    },
    {
      id: 9,
      title: "Vaqtni tekshirish",
      description: "Kun yoki tun",
      task: "Soat 6 dan 18 gacha bo'lsa 'Kun', aks holda 'Tun' deb console.log() orqali chiqaring.",
      initialCode: `let hour = 12;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va soatni tekshiring",
      checkResult: (output) => {
        return output[0] === "Kun";
      }
    },
    {
      id: 10,
      title: "Balans tekshirish",
      description: "Pul yetarli yoki yetarsiz",
      task: "Balans 100000 dan ko'p bo'lsa 'Yetarli', aks holda 'Yetarsiz' deb console.log() orqali chiqaring.",
      initialCode: `let balance = 150000;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va balansni tekshiring",
      checkResult: (output) => {
        return output[0] === "Yetarli";
      }
    },
    {
      id: 11,
      title: "Yil faslini aniqlash",
      description: "Oy raqamiga qarab faslni aniqlash",
      task: "Berilgan oy raqamiga qarab (1-12) yil faslini aniqlang va console.log() orqali chiqaring.",
      initialCode: `let month = 6;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va oylarni guruhlarga ajrating",
      checkResult: (output) => {
        return output[0] === "Yoz";
      }
    },
    {
      id: 12,
      title: "Transportga chiqish",
      description: "Ob-havo holatini tekshirish",
      task: "Agar yomg'ir yog'ayotgan bo'lsa 'Mashinada', aks holda 'Piyoda' deb console.log() orqali chiqaring.",
      initialCode: `let isRaining = true;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va boolean qiymatni tekshiring",
      checkResult: (output) => {
        return output[0] === "Mashinada";
      }
    },
    {
      id: 13,
      title: "Chegirma tekshirish",
      description: "Xarid summasiga qarab chegirma",
      task: "Xarid 50000 dan yuqori bo'lsa 'Chegirma bor', aks holda 'Chegirma yo'q' deb console.log() orqali chiqaring.",
      initialCode: `let purchase = 60000;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va xarid summasini tekshiring",
      checkResult: (output) => {
        return output[0] === "Chegirma bor";
      }
    },
    {
      id: 14,
      title: "Telefon quvvati",
      description: "Quvvat darajasini tekshirish",
      task: "Quvvat 20% dan past bo'lsa 'Quvvatlang', aks holda 'Yetarli' deb console.log() orqali chiqaring.",
      initialCode: `let batteryLevel = 15;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va quvvat darajasini tekshiring",
      checkResult: (output) => {
        return output[0] === "Quvvatlang";
      }
    },
    {
      id: 15,
      title: "Hafta kuni",
      description: "Dam olish kuni yoki ish kuni",
      task: "Kun raqami 6 yoki 7 bo'lsa 'Dam olish', aks holda 'Ish kuni' deb console.log() orqali chiqaring.",
      initialCode: `let day = 6;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else va || (yoki) operatoridan foydalaning",
      checkResult: (output) => {
        return output[0] === "Dam olish";
      }
    },
    {
      id: 16,
      title: "Yosh toifasi",
      description: "Yoshga qarab toifani aniqlash",
      task: "Yosh 30 dan kichik bo'lsa 'Yosh', aks holda 'Katta' deb console.log() orqali chiqaring.",
      initialCode: `let age = 25;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va yoshni tekshiring",
      checkResult: (output) => {
        return output[0] === "Yosh";
      }
    },
    {
      id: 17,
      title: "Ovqat vaqti",
      description: "Vaqtga qarab ovqatlanish",
      task: "Soat 12 dan 14 gacha bo'lsa 'Tushlik vaqti', aks holda 'Boshqa vaqt' deb console.log() orqali chiqaring.",
      initialCode: `let time = 13;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va vaqtni tekshiring",
      checkResult: (output) => {
        return output[0] === "Tushlik vaqti";
      }
    },
    {
      id: 18,
      title: "Masofa tekshirish",
      description: "Uzoq yoki yaqin",
      task: "Masofa 1000 metrdan ko'p bo'lsa 'Uzoq', aks holda 'Yaqin' deb console.log() orqali chiqaring.",
      initialCode: `let distance = 1500;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va masofani tekshiring",
      checkResult: (output) => {
        return output[0] === "Uzoq";
      }
    },
    {
      id: 19,
      title: "Til tanlash",
      description: "Foydalanuvchi tilini aniqlash",
      task: "Til 'uz' bo'lsa 'O'zbek tili', aks holda 'Boshqa til' deb console.log() orqali chiqaring.",
      initialCode: `let language = 'uz';
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va til kodini tekshiring",
      checkResult: (output) => {
        return output[0] === "O'zbek tili";
      }
    },
    {
      id: 20,
      title: "Xona harorati",
      description: "Konditsioner kerakmi",
      task: "Harorat 25 darajadan yuqori bo'lsa 'Konditsionerni yoqing', aks holda 'Yaxshi' deb console.log() orqali chiqaring.",
      initialCode: `let roomTemp = 28;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va haroratni tekshiring",
      checkResult: (output) => {
        return output[0] === "Konditsionerni yoqing";
      }
    },
    {
      id: 21,
      title: "Kitob o'qish",
      description: "Kitob o'qish vaqtini tekshirish",
      task: "O'qilgan sahifalar 50 dan ko'p bo'lsa 'Yaxshi', aks holda 'Ko'proq o'qing' deb console.log() orqali chiqaring.",
      initialCode: `let pagesRead = 60;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va sahifalar sonini tekshiring",
      checkResult: (output) => {
        return output[0] === "Yaxshi";
      }
    },
    {
      id: 22,
      title: "Sport mashg'uloti",
      description: "Mashg'ulot davomiyligini tekshirish",
      task: "Mashg'ulot 30 daqiqadan ko'p bo'lsa 'Yetarli', aks holda 'Davom eting' deb console.log() orqali chiqaring.",
      initialCode: `let exerciseTime = 40;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va vaqtni tekshiring",
      checkResult: (output) => {
        return output[0] === "Yetarli";
      }
    }
  ];
  
  export default practiceDataIfElse;
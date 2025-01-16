const practiceConditions = [
  {
    id: 1,
    title: "Yoshni tekshirish",
    description: "Yosh bo'yicha toifalarni aniqlash",
    task: "Berilgan yoshga qarab (age) shaxsning toifasini aniqlang: 0-12: 'Bola', 13-19: 'O'smir', 20-59: 'Katta yoshli', 60+: 'Keksa yoshli'",
    initialCode: `let age = 25;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Katta yoshli";
    }
  },
  {
    id: 2,
    title: "Haroratni baholash",
    description: "Ob-havo holatini aniqlash",
    task: "Harorat darajasiga qarab holatni aniqlang: <0: 'Sovuq', 0-15: 'Salqin', 16-30: 'Iliq', >30: 'Issiq'",
    initialCode: `let temp = 18;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Iliq";
    }
  },
  {
    id: 3,
    title: "Bahoni harf bilan ifodalash",
    description: "Raqamli bahoni harfli bahoga o'zgartirish",
    task: "Ball asosida baho qo'ying: 90-100: 'A', 80-89: 'B', 70-79: 'C', 60-69: 'D', <60: 'F'",
    initialCode: `let score = 85;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else yoki switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "B";
    }
  },
  {
    id: 4,
    title: "Hafta kunini aniqlash",
    description: "Raqam bo'yicha hafta kunini aniqlash",
    task: "1 dan 7 gacha bo'lgan raqam asosida hafta kunini aniqlang",
    initialCode: `let dayNumber = 3;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Chorshanba";
    }
  },
  {
    id: 5,
    title: "Juft yoki toq",
    description: "Sonning juft yoki toqligini aniqlash",
    task: "Berilgan sonning juft yoki toqligini aniqlang",
    initialCode: `let number = 7;
// Kodingizni shu yerda yozing
`,
    hint: "if-else va % operatoridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Toq son";
    }
  },
  {
    id: 6,
    title: "Yil fasli",
    description: "Oy raqami bo'yicha yil faslini aniqlash",
    task: "Oy raqamiga qarab (1-12) yil faslini aniqlang",
    initialCode: `let month = 7;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case yoki if-else if dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Yoz";
    }
  },
  {
    id: 7,
    title: "Login tekshirish",
    description: "Foydalanuvchi ma'lumotlarini tekshirish",
    task: "Login va parol to'g'ri kiritilganligini tekshiring (login='admin', parol='12345')",
    initialCode: `let login = 'admin';
let password = '12345';
// Kodingizni shu yerda yozing
`,
    hint: "if-else va && operatoridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Xush kelibsiz!";
    }
  },
  {
    id: 8,
    title: "Katta son",
    description: "Uchta sondan kattasini topish",
    task: "Berilgan uchta sondan eng kattasini aniqlang",
    initialCode: `let a = 10;
let b = 15;
let c = 12;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === 15;
    }
  },
  {
    id: 9,
    title: "Svetofor",
    description: "Svetofor rangiga qarab harakat",
    task: "Svetofor rangiga qarab harakatni aniqlang (qizil, sariq, yashil)",
    initialCode: `let color = 'qizil';
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "To'xtang";
    }
  },
  {
    id: 10,
    title: "Bahoni tekshirish",
    description: "O'tish balini tekshirish",
    task: "Ball 60 dan yuqori bo'lsa 'O'tdi', aks holda 'O'tmadi'",
    initialCode: `let score = 75;
// Kodingizni shu yerda yozing
`,
    hint: "if-else operatoridan foydalaning",
    checkResult: (output) => {
      return output[0] === "O'tdi";
    }
  },
  {
    id: 11,
    title: "Oy kunlari",
    description: "Oyning kun sonini aniqlash",
    task: "Oy raqamiga qarab (1-12) kunlar sonini aniqlang",
    initialCode: `let month = 2;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === 28;
    }
  },
  {
    id: 12,
    title: "Kabisa yili",
    description: "Kabisa yilini aniqlash",
    task: "Berilgan yilning kabisa yili ekanligini aniqlang",
    initialCode: `let year = 2024;
// Kodingizni shu yerda yozing
`,
    hint: "if-else va % operatoridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Kabisa yili";
    }
  },
  {
    id: 13,
    title: "Sonni tekshirish",
    description: "Sonning musbat, manfiy yoki nolligini aniqlash",
    task: "Berilgan sonning musbat, manfiy yoki nolligini aniqlang",
    initialCode: `let number = -5;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Manfiy son";
    }
  },
  {
    id: 14,
    title: "Vaqt zonasi",
    description: "Soat bo'yicha kunning qismini aniqlash",
    task: "Soat bo'yicha kunning qismini aniqlang (0-6: 'Tun', 6-12: 'Ertalab', 12-18: 'Kunduzi', 18-24: 'Kechqurun')",
    initialCode: `let hour = 14;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Kunduzi";
    }
  },
  {
    id: 15,
    title: "Geometrik shakl",
    description: "Tomonlar soniga qarab shaklni aniqlash",
    task: "Tomonlar soniga qarab (3-6) geometrik shaklni aniqlang",
    initialCode: `let sides = 4;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "To'rtburchak";
    }
  },
  {
    id: 16,
    title: "Ovqat vaqti",
    description: "Vaqtga qarab ovqatlanish turini aniqlash",
    task: "Soatga qarab ovqatlanish turini aniqlang (7-9: 'Nonushta', 13-15: 'Tushlik', 19-21: 'Kechki ovqat')",
    initialCode: `let hour = 14;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Tushlik";
    }
  },
  {
    id: 17,
    title: "Transport turi",
    description: "Tezlikka qarab transport turini aniqlash",
    task: "Tezlikka qarab transport turini aniqlang (0-15: 'Velosiped', 16-60: 'Avtomobil', 61-300: 'Poyezd', >300: 'Samolyot')",
    initialCode: `let speed = 250;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Poyezd";
    }
  },
  {
    id: 18,
    title: "Til tanlash",
    description: "Kod bo'yicha tilni aniqlash",
    task: "Berilgan kod bo'yicha tilni aniqlang (uz, ru, en)",
    initialCode: `let langCode = 'uz';
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "O'zbek tili";
    }
  },
  {
    id: 19,
    title: "Yosh toifasi",
    description: "Yosh bo'yicha toifani aniqlash",
    task: "Yoshga qarab sport toifasini aniqlang (6-12: 'Bolalar', 13-17: 'O'smirlar', 18-35: 'Kattalar')",
    initialCode: `let age = 15;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "O'smirlar";
    }
  },
  {
    id: 20,
    title: "Hafta turi",
    description: "Kunning ish kuni yoki dam olish kuni ekanligini aniqlash",
    task: "Hafta kuniga qarab (1-7) ish kuni yoki dam olish kunini aniqlang",
    initialCode: `let day = 6;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Dam olish kuni";
    }
  },
  {
    id: 21,
    title: "Mavsumiy faoliyat",
    description: "Faslga qarab faoliyatni aniqlash",
    task: "Faslga qarab faoliyat turini aniqlang (Qish: 'Chang'i', Bahor: 'Bog'dorchilik', Yoz: 'Suzish', Kuz: 'Sayr')",
    initialCode: `let season = 'Yoz';
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Suzish";
    }
  },
  {
    id: 22,
    title: "Baho darajasi",
    description: "Ball asosida baho darajasini aniqlash",
    task: "Ball asosida baho darajasini aniqlang (90-100: 'A'lo', 70-89: 'Yaxshi', 60-69: 'Qoniqarli', <60: 'Qoniqarsiz')",
    initialCode: `let score = 85;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Yaxshi";
    }
  },
  {
    id: 23,
    title: "Yil choraklari",
    description: "Oy bo'yicha yil choragini aniqlash",
    task: "Oy raqamiga qarab (1-12) yil choragini aniqlang",
    initialCode: `let month = 7;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case yoki if-else if dan foydalaning",
    checkResult: (output) => {
      return output[0] === "3-chorak";
    }
  },
  {
    id: 24,
    title: "Raqamni so'zda ifodalash",
    description: "Bir xonali raqamni so'zda ifodalash",
    task: "0 dan 9 gacha bo'lgan raqamni so'zda ifodalang",
    initialCode: `let number = 5;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Besh";
    }
  },
  {
    id: 25,
    title: "Oylik maosh",
    description: "Lavozimga qarab oylik maoshni aniqlash",
    task: "Lavozimga qarab oylik maoshni aniqlang (direktor: 15000, menejer: 10000, ishchi: 5000)",
    initialCode: `let position = 'menejer';
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === 10000;
    }
  },
  {
    id: 26,
    title: "Chegirma hisoblash",
    description: "Xarid summasiga qarab chegirmani aniqlash",
    task: "Xarid summasiga qarab chegirmani aniqlang (>1000: 20%, >500: 10%, >100: 5%)",
    initialCode: `let amount = 750;
// Kodingizni shu yerda yozing
`,
    hint: "if-else if-else operatorlaridan foydalaning",
    checkResult: (output) => {
      return output[0] === "10%";
    }
  },
  {
    id: 27,
    title: "Davlat poytaxti",
    description: "Davlat nomi bo'yicha poytaxtni aniqlash",
    task: "Davlat nomiga qarab poytaxtini aniqlang",
    initialCode: `let country = "O'zbekiston";
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Toshkent";
    }
  },
  {
    id: 28,
    title: "Yosh chegarasi",
    description: "Yoshga qarab ruxsat berish",
    task: "Yoshga qarab turli xizmatlarga ruxsat bering (18+: 'Ruxsat berilgan', <18: 'Ruxsat berilmagan')",
    initialCode: `let age = 20;
// Kodingizni shu yerda yozing
`,
    hint: "if-else operatoridan foydalaning",
    checkResult: (output) => {
      return output[0] === "Ruxsat berilgan";
    }
  },
  {
    id: 29,
    title: "Telefon kodi",
    description: "Telefon kodiga qarab operatorni aniqlash",
    task: "Telefon kodiga qarab mobil operatorni aniqlang (90,91: 'Beeline', 93,94: 'Ucell', 97,98: 'UMS')",
    initialCode: `let code = 93;
// Kodingizni shu yerda yozing
`,
    hint: "switch-case yoki if-else if dan foydalaning",
    checkResult: (output) => {
      return output[0] === "Ucell";
    }
  },
  {
    id: 30,
    title: "Valyuta konvertori",
    description: "Valyuta kodiga qarab kursni aniqlash",
    task: "Valyuta kodiga qarab kursni aniqlang (USD: 12000, EUR: 13000, RUB: 150)",
    initialCode: `let currency = 'USD';
// Kodingizni shu yerda yozing
`,
    hint: "switch-case dan foydalaning",
    checkResult: (output) => {
      return output[0] === 12000;
    }
  }
];

export default practiceConditions;
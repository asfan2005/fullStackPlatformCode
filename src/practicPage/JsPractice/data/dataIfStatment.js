const practiceDataIfStatement = [
    {
      title: "Oddiy if sharti",
      description: "if operatori bilan ishlash",
      task: "Berilgan son musbat yoki manfiy ekanligini aniqlang. Agar son musbat bo'lsa 'Musbat', aks holda 'Manfiy' deb console.log() orqali chiqaring.",
      initialCode: `let number = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else dan foydalaning va son 0 dan katta yoki kichikligini tekshiring",
      checkResult: (output) => {
        return output[0] === "Musbat";
      }
    },
    {
      title: "Juft yoki Toq son",
      description: "Sonlarni tekshirish",
      task: "Berilgan son juft yoki toq ekanligini aniqlang va natijani console.log() orqali chiqaring.",
      initialCode: `let number = 8;
  // Kodingizni shu yerda yozing
  `,
      hint: "% (qoldiqli bo'lish) operatoridan foydalaning",
      checkResult: (output) => {
        return output[0] === "Juft son";
      }
    },
    {
      title: "Yoshga qarab tekshirish",
      description: "Ko'p shartli if-else",
      task: "Berilgan yoshga qarab quyidagi natijalarni chiqaring: 0-6: 'Chaqaloq', 7-17: 'O'quvchi', 18-25: 'Talaba', 26-60: 'Ishchi', 60+: 'Nafaqaxo'r'.",
      initialCode: `let age = 20;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else if-else zanjiridan foydalaning",
      checkResult: (output) => {
        return output[0] === "Talaba";
      }
    },
    {
      title: "Bahoni tekshirish",
      description: "Ball asosida baho qo'yish",
      task: "Berilgan ballga qarab baho qo'ying: 90-100: 'A', 80-89: 'B', 70-79: 'C', 60-69: 'D', 0-59: 'F'.",
      initialCode: `let score = 85;
  // Kodingizni shu yerda yozing
  `,
      hint: "Har bir ball oralig'ini tekshiring",
      checkResult: (output) => {
        return output[0] === "B";
      }
    },
    {
      title: "Hafta kunlari",
      description: "Raqamga qarab hafta kunini aniqlash",
      task: "1 dan 7 gacha bo'lgan raqamga qarab hafta kunini aniqlang (1-Dushanba, 7-Yakshanba).",
      initialCode: `let day = 3;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case yoki if-else dan foydalaning",
      checkResult: (output) => {
        return output[0] === "Chorshanba";
      }
    },
    {
      title: "Eng katta son",
      description: "Uchta sondan eng kattasini topish",
      task: "Berilgan uchta sondan eng kattasini toping va console.log() orqali chiqaring.",
      initialCode: `let a = 10, b = 5, c = 8;
  // Kodingizni shu yerda yozing
  `,
      hint: "Sonlarni juftlab solishtiring",
      checkResult: (output) => {
        return output[0] === "10";
      }
    },
    {
      title: "Yil mavsumi",
      description: "Oyga qarab yil mavsumini aniqlash",
      task: "Berilgan oy raqamiga qarab (1-12), yil mavsumini aniqlang (Qish, Bahor, Yoz, Kuz).",
      initialCode: `let month = 7;
  // Kodingizni shu yerda yozing
  `,
      hint: "Oylarni mavsumlarga bo'lib tekshiring",
      checkResult: (output) => {
        return output[0] === "Yoz";
      }
    },
    {
      title: "Login tekshirish",
      description: "Foydalanuvchi ma'lumotlarini tekshirish",
      task: "Login va parolni tekshiring. Agar login='admin' va parol='12345' bo'lsa 'Xush kelibsiz', aks holda 'Xato' deb chiqaring.",
      initialCode: `let login = 'admin';
  let password = '12345';
  // Kodingizni shu yerda yozing
  `,
      hint: "&& operatoridan foydalaning",
      checkResult: (output) => {
        return output[0] === "Xush kelibsiz";
      }
    },
    {
      title: "Kabisa yili",
      description: "Kabisa yilini aniqlash",
      task: "Berilgan yil kabisa yili ekanligini aniqlang (4 ga bo'linadi, 100 ga bo'linsa 400 ga ham bo'linishi kerak).",
      initialCode: `let year = 2024;
  // Kodingizni shu yerda yozing
  `,
      hint: "Kabisa yili 4 ga bo'linadi, lekin 100 ga bo'linsa 400 ga ham bo'linishi kerak",
      checkResult: (output) => {
        return output[0] === "Kabisa yili";
      }
    },
    {
      title: "Sonni tekshirish",
      description: "Sonning xususiyatlarini aniqlash",
      task: "Berilgan son musbat/manfiy va juft/toq ekanligini aniqlang.",
      initialCode: `let number = 4;
  // Kodingizni shu yerda yozing
  `,
      hint: "Bitta sonda ikkita shartni tekshiring",
      checkResult: (output) => {
        return output[0] === "Musbat juft son";
      }
    }
  ];
  
  export default practiceDataIfStatement;
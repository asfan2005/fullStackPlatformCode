const practiceSwitchCase = [
    {
      id: 1,
      title: "Hafta kunlari",
      description: "Switch-case yordamida hafta kunlarini aniqlash",
      task: "Berilgan raqamga qarab (1-7) hafta kunini console.log() orqali chiqaring.",
      initialCode: `let dayNumber = 3;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir raqam uchun mos kunni chiqaring",
      checkResult: (output) => {
        return output[0] === "Chorshanba";
      }
    },
    {
      id: 2,
      title: "Oylar nomi",
      description: "Oy raqamiga qarab oyning nomini aniqlash",
      task: "Berilgan raqamga qarab (1-12) oyning nomini console.log() orqali chiqaring.",
      initialCode: `let monthNumber = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir raqam uchun mos oyni chiqaring",
      checkResult: (output) => {
        return output[0] === "May";
      }
    },
    {
      id: 3,
      title: "Baho darajasi",
      description: "Raqamli bahoni so'zlar bilan ifodalash",
      task: "Berilgan bahoga qarab (1-5) uning so'zdagi ifodasini console.log() orqali chiqaring.",
      initialCode: `let grade = 4;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir baho uchun mos so'zni chiqaring",
      checkResult: (output) => {
        return output[0] === "Yaxshi";
      }
    },
    {
      id: 4,
      title: "Amallar bajarish",
      description: "Matematik amallarni bajarish",
      task: "Berilgan amal belgisiga qarab (+, -, *, /) ikki son ustida amal bajaring va natijani console.log() orqali chiqaring.",
      initialCode: `let operation = '+';
  let num1 = 10;
  let num2 = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir amal uchun tegishli hisoblashni bajaring",
      checkResult: (output) => {
        return output[0] === "15";
      }
    },
    {
      id: 5,
      title: "Yil fasllari",
      description: "Fasllarni aniqlash",
      task: "Berilgan oy raqamiga qarab (1-12) yil faslini console.log() orqali chiqaring.",
      initialCode: `let month = 7;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va oylarni fasllarga ajrating",
      checkResult: (output) => {
        return output[0] === "Yoz";
      }
    },
    {
      id: 6,
      title: "Ranglar ma'nosi",
      description: "Svetofor ranglari",
      task: "Berilgan rangga qarab ('qizil', 'sariq', 'yashil') harakatni console.log() orqali chiqaring.",
      initialCode: `let color = 'qizil';
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir rang uchun tegishli ko'rsatmani chiqaring",
      checkResult: (output) => {
        return output[0] === "To'xtang";
      }
    },
    {
      id: 7,
      title: "Hafta kunlari turi",
      description: "Ish kuni yoki dam olish kuni",
      task: "Berilgan kunga qarab (1-7) 'Ish kuni' yoki 'Dam olish kuni' ekanligini console.log() orqali chiqaring.",
      initialCode: `let day = 6;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va kunlarni guruhlarga ajrating",
      checkResult: (output) => {
        return output[0] === "Dam olish kuni";
      }
    },
    {
      id: 8,
      title: "Transport turlari",
      description: "Transport turini aniqlash",
      task: "Berilgan raqamga qarab (1-4) transport turini console.log() orqali chiqaring.",
      initialCode: `let transportType = 2;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir raqam uchun mos transportni chiqaring",
      checkResult: (output) => {
        return output[0] === "Avtobus";
      }
    },
    {
      id: 9,
      title: "Ovqat vaqtlari",
      description: "Kunlik ovqatlanish vaqtlari",
      task: "Berilgan vaqtga qarab (1-4) ovqatlanish turini console.log() orqali chiqaring.",
      initialCode: `let mealTime = 2;
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir vaqt uchun mos ovqatni chiqaring",
      checkResult: (output) => {
        return output[0] === "Tushlik";
      }
    },
    {
      id: 10,
      title: "Til tanlash",
      description: "Dastur tilini o'zgartirish",
      task: "Berilgan til kodiga qarab ('uz', 'ru', 'en') tilni console.log() orqali chiqaring.",
      initialCode: `let language = 'uz';
  // Kodingizni shu yerda yozing
  `,
      hint: "switch-case dan foydalaning va har bir til kodi uchun mos tilni chiqaring",
      checkResult: (output) => {
        return output[0] === "O'zbek tili";
      }
    }
  ];
  
  export default practiceSwitchCase;
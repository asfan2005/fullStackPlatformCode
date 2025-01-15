const practiceDataLogicalOperators2 = [
    {
      id: 1,
      title: "Sonlarni solishtirish",
      description: "Uchta sonni solishtirish va eng kattasini topish",
      task: "Uchta sondan eng kattasi 'a' ekanligini tekshiring",
      initialCode: "let a = 15;\nlet b = 10;\nlet c = 5;\n\nconsole.log(a > b && a > c);",
      hint: "a > b VA a > c shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 2,
      title: "Yosh chegarasi",
      description: "Yoshga oid shartlarni tekshirish",
      task: "Yosh 18 dan katta YOKI ota-ona ruxsati borligini tekshiring",
      initialCode: "let yosh = 16;\nlet otaOnaRuxsati = true;\n\nconsole.log(yosh >= 18 || otaOnaRuxsati);",
      hint: "yosh >= 18 YOKI otaOnaRuxsati shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 3,
      title: "Parol tekshirish",
      description: "Parolning xavfsizlik darajasini tekshirish",
      task: "Parol 8 belgidan uzun VA raqam hamda harf mavjudligini tekshiring",
      initialCode: "let parol = 'Pass123word';\nlet uzunlik = parol.length > 8;\nlet raqamBor = /\\d/.test(parol);\nlet harfBor = /[a-zA-Z]/.test(parol);\n\nconsole.log(uzunlik && raqamBor && harfBor);",
      hint: "Har bir shartni alohida tekshirib, keyin AND operatori bilan birlashtiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 4,
      title: "Vaqt oralig'i",
      description: "Berilgan vaqt ish soatlariga to'g'ri kelishini tekshirish",
      task: "Vaqt 9:00 dan 18:00 gacha ekanligini tekshiring",
      initialCode: "let soat = 14;\n\nconsole.log(soat >= 9 && soat < 18);",
      hint: "soat >= 9 VA soat < 18 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 5,
      title: "Fasl tekshirish",
      description: "Berilgan oy qaysi faslga tegishli ekanligini aniqlash",
      task: "Berilgan oy yoz fasliga tegishli ekanligini tekshiring (6,7,8-oylar)",
      initialCode: "let oy = 7;\n\nconsole.log(oy >= 6 && oy <= 8);",
      hint: "oy >= 6 VA oy <= 8 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 6,
      title: "Raqamni tekshirish",
      description: "Raqam juft yoki 5 ga bo'linadigan ekanligini tekshirish",
      task: "Son juft YOKI 5 ga bo'linadigan ekanligini tekshiring",
      initialCode: "let son = 15;\n\nconsole.log(son % 2 === 0 || son % 5 === 0);",
      hint: "son % 2 === 0 YOKI son % 5 === 0 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 7,
      title: "Satr uzunligi",
      description: "Satr uzunligini tekshirish",
      task: "Satr bo'sh emas VA 10 belgidan qisqa ekanligini tekshiring",
      initialCode: "let satr = 'Salom';\n\nconsole.log(satr.length > 0 && satr.length < 10);",
      hint: "satr.length > 0 VA satr.length < 10 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 8,
      title: "Teng yoki katta",
      description: "Sonni chegaralar bilan solishtirish",
      task: "Son 10 ga teng YOKI undan katta ekanligini tekshiring",
      initialCode: "let son = 15;\n\nconsole.log(son >= 10);",
      hint: "son >= 10 shartini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 9,
      title: "Massiv uzunligi",
      description: "Massiv elementlari sonini tekshirish",
      task: "Massiv bo'sh emas VA 5 tadan kam element borligini tekshiring",
      initialCode: "let massiv = [1, 2, 3];\n\nconsole.log(massiv.length > 0 && massiv.length < 5);",
      hint: "massiv.length > 0 VA massiv.length < 5 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 10,
      title: "Sonni tekshirish",
      description: "Sonni turli shartlar bilan tekshirish",
      task: "Son manfiy YOKI 100 dan katta YOKI 0 ga teng ekanligini tekshiring",
      initialCode: "let son = -5;\n\nconsole.log(son < 0 || son > 100 || son === 0);",
      hint: "son < 0 YOKI son > 100 YOKI son === 0 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    }
  ];
  
  export default practiceDataLogicalOperators2;
const practiceDataLogicalOperators = [
    {
      id: 1,
      title: "AND (&&) operatori",
      description: "AND (&&) operatori ikkala shart ham true bo'lsagina true qaytaradi",
      task: "Ikkita sonni tekshiring: son 10 dan katta VA 20 dan kichik bo'lsin",
      initialCode: "let son = 15;\n\nconsole.log(son > 10 && son < 20);",
      hint: "son > 10 && son < 20 ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 2,
      title: "OR (||) operatori",
      description: "OR (||) operatori kamida bitta shart true bo'lsa true qaytaradi",
      task: "Berilgan son 0 dan kichik YOKI 100 dan katta ekanligini tekshiring",
      initialCode: "let son = 150;\n\nconsole.log(son < 0 || son > 100);",
      hint: "son < 0 || son > 100 ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 3,
      title: "NOT (!) operatori",
      description: "NOT (!) operatori boolean qiymatni teskarisiga o'zgartiradi",
      task: "Boolean qiymatni teskarisiga o'zgartiring",
      initialCode: "let togri = true;\n\nconsole.log(!togri);",
      hint: "!togri ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 4,
      title: "Murakkab mantiqiy ifoda",
      description: "AND va OR operatorlarini birgalikda ishlatish",
      task: "Son 10 dan katta VA (30 dan kichik YOKI 50 dan katta) ekanligini tekshiring",
      initialCode: "let son = 60;\n\nconsole.log(son > 10 && (son < 30 || son > 50));",
      hint: "son > 10 && (son < 30 || son > 50) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 5,
      title: "Qisqa tutashuv (Short-circuit)",
      description: "AND operatorida birinchi shart false bo'lsa, ikkinchi shart tekshirilmaydi",
      task: "Qisqa tutashuv xususiyatini tekshiring",
      initialCode: "let x = false;\nlet y = true;\n\nconsole.log(x && y);",
      hint: "Birinchi shart false bo'lgani uchun ikkinchi shart tekshirilmaydi",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 6,
      title: "OR operatori bilan default qiymat",
      description: "OR operatori yordamida o'zgaruvchiga default qiymat berish mumkin",
      task: "Agar ism bo'sh bo'lsa 'Mehmon' so'zi chiqsin",
      initialCode: "let ism = '';\nlet natija = ism || 'Mehmon';\n\nconsole.log(natija);",
      hint: "Bo'sh satr falsy qiymat hisoblanadi",
      checkResult: (output) => output[0] === 'Mehmon'
    },
    {
      id: 7,
      title: "Mantiqiy operatorlar ketma-ketligi",
      description: "Mantiqiy operatorlar chapdan o'ngga qarab bajariladi",
      task: "Berilgan ifodani hisoblang",
      initialCode: "console.log(true || false && false);",
      hint: "OR operatori AND operatoridan oldin bajariladi",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 8,
      title: "Mantiqiy operatorlar va sonlar",
      description: "Mantiqiy operatorlar sonlar bilan ham ishlaydi",
      task: "Son musbat VA juft ekanligini tekshiring",
      initialCode: "let son = 6;\n\nconsole.log(son > 0 && son % 2 === 0);",
      hint: "son > 0 va son % 2 === 0 shartlarini tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 9,
      title: "Mantiqiy operatorlar va null",
      description: "null falsy qiymat hisoblanadi",
      task: "null qiymatni tekshiring",
      initialCode: "let qiymat = null;\n\nconsole.log(!qiymat);",
      hint: "null falsy qiymat bo'lgani uchun !null true qaytaradi",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 10,
      title: "Ko'p shartli tekshirish",
      description: "Bir nechta shartlarni AND va OR bilan tekshirish",
      task: "Son 0 dan katta, 100 dan kichik VA 2 ga yoki 3 ga bo'linadigan bo'lsin",
      initialCode: "let son = 15;\n\nconsole.log(son > 0 && son < 100 && (son % 2 === 0 || son % 3 === 0));",
      hint: "Barcha shartlarni mantiqiy operatorlar bilan bog'lang",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 11,
      title: "Mantiqiy operatorlar va satrlar",
      description: "Bo'sh satr falsy, to'ldirilgan satr truthy hisoblanadi",
      task: "Ikkita satrdan kamida bittasi bo'sh emasligini tekshiring",
      initialCode: "let satr1 = 'Salom';\nlet satr2 = '';\n\nconsole.log(satr1 || satr2);",
      hint: "OR operatori birinchi truthy qiymatni qaytaradi",
      checkResult: (output) => output[0] === 'Salom'
    },
    {
      id: 12,
      title: "Mantiqiy operatorlar va undefined",
      description: "undefined falsy qiymat hisoblanadi",
      task: "O'zgaruvchi undefined emasligini tekshiring",
      initialCode: "let qiymat;\n\nconsole.log(qiymat !== undefined);",
      hint: "undefined bilan taqqoslash uchun !== operatorini ishlating",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 13,
      title: "Mantiqiy operatorlar ustunligi",
      description: "NOT operatori AND va OR operatorlaridan ustun turadi",
      task: "Berilgan ifodani hisoblang",
      initialCode: "console.log(!true && false || true);",
      hint: "Avval NOT, keyin AND, oxirida OR bajariladi",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 14,
      title: "Truthy va Falsy qiymatlar",
      description: "JavaScript'da ba'zi qiymatlar avtomatik ravishda true yoki false ga o'giriladi",
      task: "Qiymatlarning truthy yoki falsy ekanligini tekshiring",
      initialCode: "console.log(!!0);\nconsole.log(!!'Salom');\nconsole.log(!!null);",
      hint: "!! operatori qiymatni boolean turiga o'giradi",
      checkResult: (output) => output[0] === 'false' && output[1] === 'true' && output[2] === 'false'
    },
    {
      id: 15,
      title: "Mantiqiy operatorlar va obyektlar",
      description: "Har qanday obyekt truthy qiymat hisoblanadi",
      task: "Bo'sh obyekt va bo'sh massivni tekshiring",
      initialCode: "let obj = {};\nlet arr = [];\n\nconsole.log(!!obj && !!arr);",
      hint: "Har qanday obyekt va massiv truthy hisoblanadi",
      checkResult: (output) => output[0] === 'true'
    }
  ];
  
  export default practiceDataLogicalOperators;
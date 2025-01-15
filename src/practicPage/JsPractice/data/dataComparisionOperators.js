const practiceDataComparisionOperators = [
    {
      id: 1,
      title: "Tenglik operatori (==)",
      description: "Tenglik operatori (==) ikki qiymatni taqqoslaydi va ularning qiymati teng bo'lsa true qaytaradi",
      task: "a va b o'zgaruvchilarini == operatori yordamida taqqoslang",
      initialCode: "let a = 5;\nlet b = '5';",
      hint: "console.log(a == b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 2,
      title: "Qat'iy tenglik operatori (===)",
      description: "Qat'iy tenglik operatori (===) qiymat va ma'lumot turini tekshiradi",
      task: "a va b o'zgaruvchilarini === operatori yordamida taqqoslang",
      initialCode: "let a = 5;\nlet b = '5';",
      hint: "console.log(a === b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 3,
      title: "Teng emas operatori (!=)",
      description: "Teng emas operatori (!=) ikki qiymat teng emasligini tekshiradi",
      task: "x va y o'zgaruvchilarini != operatori yordamida taqqoslang",
      initialCode: "let x = 10;\nlet y = 5;",
      hint: "console.log(x != y) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 4,
      title: "Qat'iy teng emas operatori (!==)",
      description: "Qat'iy teng emas operatori (!==) qiymat yoki ma'lumot turi teng emasligini tekshiradi",
      task: "a va b o'zgaruvchilarini !== operatori yordamida taqqoslang",
      initialCode: "let a = 5;\nlet b = '5';",
      hint: "console.log(a !== b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 5,
      title: "Katta operatori (>)",
      description: "Katta operatori (>) chap tomondagi qiymat o'ng tomondan katta ekanligini tekshiradi",
      task: "son1 son2 dan katta ekanligini tekshiring",
      initialCode: "let son1 = 15;\nlet son2 = 10;",
      hint: "console.log(son1 > son2) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 6,
      title: "Kichik operatori (<)",
      description: "Kichik operatori (<) chap tomondagi qiymat o'ng tomondan kichik ekanligini tekshiradi",
      task: "a b dan kichik ekanligini tekshiring",
      initialCode: "let a = 7;\nlet b = 12;",
      hint: "console.log(a < b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 7,
      title: "Katta yoki teng operatori (>=)",
      description: "Katta yoki teng operatori (>=) chap tomondagi qiymat o'ng tomondan katta yoki teng ekanligini tekshiradi",
      task: "x y dan katta yoki tengligini tekshiring",
      initialCode: "let x = 20;\nlet y = 20;",
      hint: "console.log(x >= y) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 8,
      title: "Kichik yoki teng operatori (<=)",
      description: "Kichik yoki teng operatori (<=) chap tomondagi qiymat o'ng tomondan kichik yoki teng ekanligini tekshiradi",
      task: "a b dan kichik yoki tengligini tekshiring",
      initialCode: "let a = 8;\nlet b = 8;",
      hint: "console.log(a <= b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 9,
      title: "Sonlarni taqqoslash",
      description: "Turli sonlarni taqqoslash operatorlari bilan tekshirish",
      task: "son 10 dan katta va 20 dan kichik ekanligini tekshiring",
      initialCode: "let son = 15;",
      hint: "console.log(son > 10 && son < 20) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 10,
      title: "Satrlarni taqqoslash",
      description: "Satrlarni taqqoslash operatorlari bilan tekshirish",
      task: "ism1 va ism2 bir xil ekanligini tekshiring",
      initialCode: "let ism1 = 'Ali';\nlet ism2 = 'ali';",
      hint: "console.log(ism1 === ism2) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 11,
      title: "Mantiqiy taqqoslashlar",
      description: "Bir nechta shartlarni birgalikda tekshirish",
      task: "son juft va 10 dan katta ekanligini tekshiring",
      initialCode: "let son = 14;",
      hint: "console.log(son % 2 === 0 && son > 10) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 12,
      title: "Oraliqni tekshirish",
      description: "Sonning ma'lum oraliqda ekanligini tekshirish",
      task: "baho 1 dan 5 gacha oraliqda ekanligini tekshiring",
      initialCode: "let baho = 4;",
      hint: "console.log(baho >= 1 && baho <= 5) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 13,
      title: "Null va undefined taqqoslash",
      description: "Null va undefined qiymatlarni taqqoslash",
      task: "o'zgaruvchi null ga tengligini tekshiring",
      initialCode: "let qiymat = null;",
      hint: "console.log(qiymat === null) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 14,
      title: "Boolean taqqoslash",
      description: "Boolean qiymatlarni taqqoslash",
      task: "ikkala o'zgaruvchi ham true ekanligini tekshiring",
      initialCode: "let a = true;\nlet b = true;",
      hint: "console.log(a === b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 15,
      title: "Murakkab taqqoslashlar",
      description: "Turli turdagi ma'lumotlarni taqqoslash",
      task: "son1 son2 dan katta va text bo'sh satr emasligini tekshiring",
      initialCode: "let son1 = 20;\nlet son2 = 15;\nlet text = 'Salom';",
      hint: "console.log(son1 > son2 && text !== '') ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    }
  ];
  
  export default practiceDataComparisionOperators;
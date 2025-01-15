const practiceDataAssignDeclar = [
    {
      id: 1,
      title: "O'zgaruvchi e'lon qilish",
      description: "JavaScriptda o'zgaruvchilarni e'lon qilish uchun let, const va var kalit so'zlaridan foydalanamiz.",
      task: "ism degan o'zgaruvchini e'lon qiling va unga 'Ali' qiymatini bering",
      initialCode: "// O'zgaruvchini e'lon qiling",
      hint: "let ism = 'Ali' ko'rinishida yozing",
      checkResult: (output) => output[0] === 'Ali'
    },
    {
      id: 2,
      title: "O'zgarmas qiymat (const)",
      description: "const yordamida e'lon qilingan o'zgaruvchining qiymatini o'zgartirib bo'lmaydi",
      task: "PI konstantasini e'lon qiling va unga 3.14 qiymatini bering",
      initialCode: "// Konstantani e'lon qiling va console.log() orqali chiqaring",
      hint: "const PI = 3.14 ko'rinishida yozing",
      checkResult: (output) => output[0] === '3.14'
    },
    {
      id: 3,
      title: "Ko'p o'zgaruvchilarni e'lon qilish",
      description: "Bir nechta o'zgaruvchilarni bir qatorda e'lon qilish mumkin",
      task: "x va y o'zgaruvchilarini bir qatorda e'lon qiling va ularga mos ravishda 10 va 20 qiymatlarini bering",
      initialCode: "// O'zgaruvchilarni e'lon qiling va console.log(x + y) orqali chiqaring",
      hint: "let x = 10, y = 20 ko'rinishida yozing",
      checkResult: (output) => output[0] === '30'
    },
    {
      id: 4,
      title: "Qiymat almashtirish",
      description: "O'zgaruvchilar qiymatini o'zgartirish mumkin (const bundan mustasno)",
      task: "son o'zgaruvchisini e'lon qiling, 5 qiymat bering va keyin 10 ga o'zgartiring",
      initialCode: "// O'zgaruvchini e'lon qiling va qiymatini o'zgartiring",
      hint: "let son = 5;\nson = 10;",
      checkResult: (output) => output[0] === '10'
    },
    {
      id: 5,
      title: "undefined qiymat",
      description: "E'lon qilingan, lekin qiymat berilmagan o'zgaruvchi undefined qiymatiga ega bo'ladi",
      task: "test o'zgaruvchisini e'lon qiling, lekin qiymat bermang va console.log() orqali chiqaring",
      initialCode: "// O'zgaruvchini e'lon qiling",
      hint: "let test; ko'rinishida yozing",
      checkResult: (output) => output[0] === 'undefined'
    },
    {
      id: 6,
      title: "null qiymat",
      description: "null maxsus qiymat bo'lib, 'bo'sh' yoki 'mavjud emas' degan ma'noni bildiradi",
      task: "bo'sh o'zgaruvchini null qiymati bilan e'lon qiling",
      initialCode: "// null qiymatli o'zgaruvchini e'lon qiling",
      hint: "let bosh = null ko'rinishida yozing",
      checkResult: (output) => output[0] === 'null'
    },
    {
      id: 7,
      title: "O'zgaruvchilar bilan ishlash",
      description: "O'zgaruvchilar qiymatlarini boshqa o'zgaruvchilarga berish mumkin",
      task: "a = 15 qiymatini b o'zgaruvchisiga bering va b ni console.log() orqali chiqaring",
      initialCode: "let a = 15;\n// b o'zgaruvchisini e'lon qiling",
      hint: "let b = a ko'rinishida yozing",
      checkResult: (output) => output[0] === '15'
    },
    {
      id: 8,
      title: "let va const farqi",
      description: "let o'zgaruvchan, const esa o'zgarmas qiymatlar uchun ishlatiladi",
      task: "YOSH_CHEGARASI konstantasini 18 qiymati bilan e'lon qiling",
      initialCode: "// Konstantani e'lon qiling",
      hint: "const YOSH_CHEGARASI = 18 ko'rinishida yozing",
      checkResult: (output) => output[0] === '18'
    },
    {
      id: 9,
      title: "Matematik ifodalar bilan ishlash",
      description: "O'zgaruvchilarga matematik ifodalar natijasini saqlash mumkin",
      task: "natija o'zgaruvchisiga 5 + 7 ifodaning natijasini saqlang",
      initialCode: "// natija o'zgaruvchisini e'lon qiling",
      hint: "let natija = 5 + 7 ko'rinishida yozing",
      checkResult: (output) => output[0] === '12'
    },
    {
      id: 10,
      title: "Matn bilan ishlash",
      description: "O'zgaruvchilarga matn (string) qiymatlarini saqlash mumkin",
      task: "salom o'zgaruvchisiga 'Xayrli kun!' matni bilan qiymat bering",
      initialCode: "// salom o'zgaruvchisini e'lon qiling",
      hint: "let salom = 'Xayrli kun!' ko'rinishida yozing",
      checkResult: (output) => output[0] === 'Xayrli kun!'
    }
  ];
  
  export default practiceDataAssignDeclar;
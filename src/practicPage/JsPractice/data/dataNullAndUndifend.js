const practiceDataNullUndefined = [
    {
      id: 1,
      title: "undefined qiymat",
      description: "JavaScriptda e'lon qilingan, lekin qiymat berilmagan o'zgaruvchi undefined qiymatiga ega bo'ladi.",
      task: "O'zgaruvchi e'lon qiling, lekin qiymat bermang va console.log() orqali chiqaring",
      initialCode: "// O'zgaruvchini e'lon qiling va tekshiring\nlet qiymat;",
      hint: "O'zgaruvchini let bilan e'lon qiling va qiymat bermang, keyin console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'undefined'
    },
    {
      id: 2,
      title: "null qiymat",
      description: "null - bu o'zgaruvchiga ataylab berilgan 'bo'sh' qiymat hisoblanadi",
      task: "bo'shQiymat nomli o'zgaruvchiga null qiymat bering va tekshiring",
      initialCode: "// null qiymat bilan ishlash\nlet boshQiymat;",
      hint: "O'zgaruvchiga null qiymat bering va console.log() orqali tekshiring",
      checkResult: (output) => output[0] === 'null'
    },
    {
      id: 3,
      title: "null va undefined farqi",
      description: "null va undefined bir-biridan farq qiladi. Ularni taqqoslash orqali ko'ramiz",
      task: "null === undefined tengligini tekshiring",
      initialCode: "// null va undefined ni taqqoslang",
      hint: "=== operatori orqali taqqoslang va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 4,
      title: "Mavjud bo'lmagan obyekt xususiyati",
      description: "Obyektning mavjud bo'lmagan xususiyatiga murojaat qilganda undefined qaytadi",
      task: "Obyektning mavjud bo'lmagan xususiyatini tekshiring",
      initialCode: "const obyekt = {ism: 'Ali'};",
      hint: "Obyektning mavjud bo'lmagan xususiyatiga murojaat qiling va console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'undefined'
    },
    {
      id: 5,
      title: "typeof null",
      description: "typeof operatori null uchun 'object' qaytaradi, bu JavaScriptning tarixiy xatosi hisoblanadi",
      task: "null ning turini typeof orqali tekshiring",
      initialCode: "// null ning turini aniqlang",
      hint: "typeof operatorini null bilan ishlating va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'object'
    },
    {
      id: 6,
      title: "typeof undefined",
      description: "typeof operatori undefined uchun 'undefined' qaytaradi",
      task: "undefined ning turini typeof orqali tekshiring",
      initialCode: "// undefined ning turini aniqlang",
      hint: "typeof operatorini undefined bilan ishlating va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'undefined'
    },
    {
      id: 7,
      title: "Funksiya qaytargan undefined",
      description: "return ifodasiz funksiya undefined qaytaradi",
      task: "Hech narsa qaytarmaydigan funksiya yarating va natijani tekshiring",
      initialCode: "function boshFunksiya() {\n  // bo'sh funksiya\n}",
      hint: "Bo'sh funksiyani yarating va natijasini console.log() orqali tekshiring",
      checkResult: (output) => output[0] === 'undefined'
    },
    {
      id: 8,
      title: "null ga tekshirish",
      description: "O'zgaruvchi null ga tengligini tekshirish",
      task: "O'zgaruvchi null ga tengligini tekshiring",
      initialCode: "let qiymat = null;",
      hint: "=== operatori orqali null ga tenglikni tekshiring va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 9,
      title: "undefined ga tekshirish",
      description: "O'zgaruvchi undefined ga tengligini tekshirish",
      task: "O'zgaruvchi undefined ga tengligini tekshiring",
      initialCode: "let qiymat;",
      hint: "=== operatori orqali undefined ga tenglikni tekshiring va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 10,
      title: "Optional Chaining",
      description: "Optional chaining (?.) operatori undefined xatosining oldini olishga yordam beradi",
      task: "Mavjud bo'lmagan obyekt xususiyatiga optional chaining orqali murojaat qiling",
      initialCode: "const user = {ism: 'Ali'};",
      hint: "?. operatoridan foydalaning va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'undefined'
    }
  ];
  
  export default practiceDataNullUndefined;
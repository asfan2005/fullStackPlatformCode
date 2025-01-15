const practiceDataBoolean = [
    {
      id: 1,
      title: "Boolean qiymatlar",
      description: "JavaScriptda boolean qiymatlar true yoki false bo'lishi mumkin. Ular mantiqiy amallarni ifodalash uchun ishlatiladi.",
      task: "mantiq o'zgaruvchisini true qiymat bilan e'lon qiling va console.log() orqali chiqaring",
      initialCode: "// Boolean qiymat bilan ishlash\nlet mantiq = true;\nconsole.log(mantiq);",
      hint: "true yoki false qiymatini console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 2,
      title: "Mantiqiy AND (&&)",
      description: "AND (&&) operatori ikkala shart ham true bo'lsagina true qaytaradi",
      task: "a=true va b=true qiymatlarini AND operatori bilan tekshiring",
      initialCode: "let a = true;\nlet b = true;\n// Yechimni yozing",
      hint: "console.log(a && b) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 3,
      title: "Mantiqiy OR (||)",
      description: "OR (||) operatori kamida bitta shart true bo'lsa true qaytaradi",
      task: "a=false va b=true qiymatlarini OR operatori bilan tekshiring",
      initialCode: "let a = false;\nlet b = true;\n// Yechimni yozing",
      hint: "console.log(a || b) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 4,
      title: "Mantiqiy NOT (!)",
      description: "NOT (!) operatori boolean qiymatni teskarisiga o'zgartiradi",
      task: "true qiymatini NOT operatori bilan o'zgartirib ko'ring",
      initialCode: "// NOT operatorini qo'llang",
      hint: "console.log(!true) orqali tekshiring",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 5,
      title: "Taqqoslash natijasi",
      description: "Taqqoslash amallari boolean qiymat qaytaradi",
      task: "5 > 3 ifodani tekshirib, natijani console.log() orqali chiqaring",
      initialCode: "// Taqqoslash natijasini chiqaring",
      hint: "console.log(5 > 3) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 6,
      title: "Tenglik tekshirish",
      description: "=== operatori qiymatlar tengligini tekshiradi",
      task: "a=10 va b=10 qiymatlarini tengligini tekshiring",
      initialCode: "let a = 10;\nlet b = 10;\n// Tenglikni tekshiring",
      hint: "console.log(a === b) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 7,
      title: "Kompleks mantiqiy ifodalar",
      description: "Bir nechta mantiqiy operatorlarni birgalikda ishlatish mumkin",
      task: "(true && true) || false ifodani tekshiring",
      initialCode: "// Mantiqiy ifodani tekshiring",
      hint: "console.log((true && true) || false) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 8,
      title: "Tengmaslik tekshirish",
      description: "!== operatori qiymatlar teng emasligini tekshiradi",
      task: "a=5 va b=7 qiymatlarini tengmasligini tekshiring",
      initialCode: "let a = 5;\nlet b = 7;\n// Tengmaslikni tekshiring",
      hint: "console.log(a !== b) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 9,
      title: "Katta yoki teng",
      description: ">= operatori birinchi qiymat ikkinchisidan katta yoki tengligini tekshiradi",
      task: "a=10 va b=10 qiymatlarini >= operatori bilan tekshiring",
      initialCode: "let a = 10;\nlet b = 10;\n// Katta yoki tenglikni tekshiring",
      hint: "console.log(a >= b) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 10,
      title: "Boolean konvertatsiya",
      description: "Boolean() funksiyasi qiymatlarni boolean turiga o'zgartiradi",
      task: "1 sonini boolean turiga o'zgartirib, natijani console.log() orqali chiqaring",
      initialCode: "// 1 ni boolean turiga o'zgartiring",
      hint: "console.log(Boolean(1)) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    }
  ];
  
  export default practiceDataBoolean;   
const practiceDataChallangeTwo = [
    {
      title: "Arithmetic operators - 1",
      description: "Arifmetik operatorlar bilan ishlash",
      task: "15 - 5 * 2 + 4 amalini bajarib, natijani console.log() orqali chiqaring",
      hint: "Arifmetik amallar ketma-ketligiga e'tibor bering: ko'paytirish, bo'lish, qo'shish, ayirish",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "9";
      }
    },
    {
      title: "Arithmetic operators - 2",
      description: "Arifmetik operatorlar bilan ishlash",
      task: "24 / 3 + 8 % 3 ifodani bajarib, natijani console.log() orqali chiqaring",
      hint: "Avval bo'lish va qoldiqli bo'lish amallarini bajaring",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "9";
      }
    },
    {
      title: "Arithmetic shortcuts",
      description: "Arifmetik qisqartmalar bilan ishlash",
      task: "let x = 10 dan boshlang. x -= 4 amalni bajaring va natijani console.log() orqali chiqaring",
      hint: "x -= 4 bu x = x - 4 bilan bir xil",
      initialCode: `let x = 10;
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "6";
      }
    },
    {
      title: "Comparison Operators - 1",
      description: "Taqqoslash operatorlari",
      task: "15 <= 15 ifodani tekshiring va natijani console.log() orqali chiqaring",
      hint: "<= operatori 'kichik yoki teng' degan ma'noni bildiradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "true";
      }
    },
    {
      title: "Comparison Operators - 2",
      description: "Taqqoslash operatorlari",
      task: "20 > 25 taqqoslashni bajaring va natijani console.log() orqali chiqaring",
      hint: "> operatori 'katta' degan ma'noni bildiradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "false";
      }
    },
    {
      title: "Equality Operators",
      description: "Tenglik operatorlari",
      task: "'10' == 10 ifodani tekshiring va natijani console.log() orqali chiqaring",
      hint: "== operatori qiymatlarni solishtiradi va tur o'zgartirishni qo'llaydi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "true";
      }
    },
    {
      title: "Strict Equality",
      description: "Qat'iy tenglik operatori",
      task: "0 === false ifodani tekshiring va natijani console.log() orqali chiqaring",
      hint: "=== operatori qiymat va turni tekshiradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "false";
      }
    },
    {
      title: "Logical Operators - AND",
      description: "Mantiqiy operatorlar",
      task: "true && true && false ifodani tekshiring va natijani console.log() orqali chiqaring",
      hint: "&& operatori barcha qiymatlar true bo'lsagina true qaytaradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "false";
      }
    },
    {
      title: "Logical Operators - OR",
      description: "Mantiqiy operatorlar",
      task: "false || false || true ifodani tekshiring va natijani console.log() orqali chiqaring",
      hint: "|| operatori kamida bitta true bo'lsa true qaytaradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "true";
      }
    },
    {
      title: "Type Conversion - Number",
      description: "Turlarni o'zgartirish",
      task: "Number('123') funksiyasini ishlatib, natijani console.log() orqali chiqaring",
      hint: "Number() funksiyasi string qiymatni raqamga o'zgartiradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "123";
      }
    },
    {
      title: "Type Conversion - String",
      description: "Turlarni o'zgartirish",
      task: "String(true) funksiyasini ishlatib, natijani console.log() orqali chiqaring",
      hint: "String() funksiyasi har qanday qiymatni string turiga o'zgartiradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "true";
      }
    },
    {
      title: "Conditional Statement",
      description: "Shartli operatorlar",
      task: "if (0) { console.log('A') } else { console.log('B') } kodini yozing",
      hint: "0 falsy qiymat hisoblanadi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "B";
      }
    }
  ];
  
  export default practiceDataChallangeTwo;
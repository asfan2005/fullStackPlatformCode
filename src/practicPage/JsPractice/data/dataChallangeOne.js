const practiceDataChallangeOne = [
    // Numbers bilan ishlash
    {
      id: 1,
      title: "Sonlar bilan ishlash - Asosiy amallar",
      description: "Sonlarni qo'shish va ayirish amallarini o'rganamiz",
      task: "Ikkita son berilgan (a=10 va b=5). Ularning yig'indisini va ayirmasini hisoblang",
      initialCode: `const a = 10;
  const b = 5;
  // Yig'indi va ayirmani hisoblang
  `,
      hint: "console.log() orqali natijalarni chiqaring",
      checkResult: (output) => {
        return output.length >= 2 && 
               output.some(line => line.trim() === '15') && 
               output.some(line => line.trim() === '5');
      }
    },
    {
      id: 2,
      title: "Ko'paytirish va bo'lish",
      description: "Sonlar ustida ko'paytirish va bo'lish amallari",
      task: "Berilgan sonlarni (8 va 2) ko'paytiring va bo'ling",
      initialCode: `const x = 8;
const y = 2;
// Ko'paytmani va bo'linmani hisoblang
`,
      hint: "console.log() orqali natijalarni chiqaring",
      checkResult: (output) => {
        return output.length >= 2 && 
               output.some(line => line.trim() === '16') && 
               output.some(line => line.trim() === '4');
      }
    },
    {
      id: 3,
      title: "Qoldiqli bo'lish",
      description: "Sonlarni qoldiqli bo'lish",
      task: "17 ni 5 ga bo'lgandagi qoldiqni toping",
      initialCode: `const son = 17;
  // Qoldiqni hisoblang
  `,
      hint: "% operatoridan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.trim() === '2');
      }
    },
    {
      id: 4,
      title: "Darajaga ko'tarish",
      description: "Sonni darajaga ko'tarish",
      task: "3 ni kvadratga va kubga ko'taring",
      initialCode: `const num = 3;
// Kvadrat va kubni hisoblang
`,
      hint: "Math.pow() yoki ** operatoridan foydalaning",
      checkResult: (output) => {
        return output.length >= 2 && 
               output.some(line => line.trim() === '9') && 
               output.some(line => line.trim() === '27');
      }
    },
  
    // String bilan ishlash
    {
      id: 5,
      title: "Satrlarni birlashtirish",
      description: "Satrlar bilan ishlash",
      task: "Uchta so'zni ('Hello', 'Beautiful', 'World') birlashtiring",
      initialCode: `const word1 = 'Hello';
  const word2 = 'Beautiful';
  const word3 = 'World';
  // So'zlarni birlashtiring
  `,
      hint: "So'zlar orasida bo'sh joy qo'yishni unutmang",
      checkResult: (output) => {
        return output.some(line => line.trim() === 'Hello Beautiful World');
      }
    },
    {
      id: 6,
      title: "Satrni kesish",
      description: "Satrning ma'lum qismini ajratib olish",
      task: "Berilgan so'zdan ('JavaScript') birinchi 4 ta harfni ajratib oling",
      initialCode: `const word = 'JavaScript';
  // Birinchi 4 harfni ajrating
  `,
      hint: "substring() yoki slice() metodidan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.trim() === 'Java');
      }
    },
    {
      id: 7,
      title: "Katta-kichik harflar",
      description: "Satrni katta yoki kichik harflarga o'zgartirish",
      task: "Berilgan so'zni ('Hello World') katta harflarga o'zgartiring",
      initialCode: `const text = 'Hello World';
  // Katta harflarga o'zgartiring
  `,
      hint: "toUpperCase() metodidan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.includes('HELLO WORLD'));
      }
    },
  
    // Boolean bilan ishlash
    {
      id: 8,
      title: "Mantiqiy AND",
      description: "AND (&&) operatori",
      task: "Ikkita shartni (age >= 18 va hasLicense = true) tekshiring",
      initialCode: `const age = 20;
  const hasLicense = true;
  // Shartlarni tekshiring
  `,
      hint: "&& operatoridan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.trim() === 'true');
      }
    },
    {
      id: 9,
      title: "Mantiqiy OR",
      description: "OR (||) operatori",
      task: "Ikkita shartdan (isWeekend = false, isHoliday = true) birortasi bajarilganini tekshiring",
      initialCode: `const isWeekend = false;
  const isHoliday = true;
  // Shartlardan birini tekshiring
  `,
      hint: "|| operatoridan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.trim() === 'true');
      }
    },
  
    // Null va Undefined
    {
      id: 10,
      title: "Qiymat tekshirish",
      description: "Qiymat mavjudligini tekshirish",
      task: "O'zgaruvchi undefined ekanligini tekshiring",
      initialCode: `let value;
  // value undefined ekanligini tekshiring
  `,
      hint: "typeof operatoridan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.trim() === 'true' || 
                                 line.includes('undefined'));
      }
    },
    {
      id: 11,
      title: "Null qiymat",
      description: "Null qiymatni tekshirish",
      task: "O'zgaruvchi null qiymatga ega ekanligini tekshiring",
      initialCode: `let data = null;
  // data null ekanligini tekshiring
  `,
      hint: "=== null ifodasidan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.trim() === 'true');
      }
    },
  
    // O'zgaruvchilar bilan ishlash
    {
      id: 12,
      title: "O'zgaruvchi turlari",
      description: "let, const, var farqlari",
      task: "Har xil turdagi o'zgaruvchilar yarating va qiymatlarini o'zgartiring",
      initialCode: `// let, const va var bilan o'zgaruvchilar yarating
  `,
      hint: "let o'zgaruvchan, const o'zgarmas qiymatlar uchun",
      checkResult: (output) => {
        return output.some(line => line.includes('let') && line.includes('const'));
      }
    },
    {
      id: 13,
      title: "O'zgaruvchi ko'lami",
      description: "Block scope va function scope",
      task: "Block va function scope farqini ko'rsating",
      initialCode: `// Block va function scope namunasini yarating
  `,
      hint: "let block scope, var function scope uchun ishlatiladi",
      checkResult: (output) => {
        return output.some(line => line.includes('let') && line.includes('var'));
      }
    },
    {
      id: 14,
      title: "Qiymat berish",
      description: "O'zgaruvchilarga qiymat berish usullari",
      task: "Turli usullar bilan o'zgaruvchilarga qiymat bering",
      initialCode: `// O'zgaruvchilarga turli usulda qiymat bering
  `,
      hint: "=, +=, -=, *= operatorlaridan foydalaning",
      checkResult: (output) => {
        return output.some(line => line.includes('='));
      }
    }
  ];
  
  export default practiceDataChallangeOne;
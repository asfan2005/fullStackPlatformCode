const practiceOutputWithVariables = [
    {
      id: 1,
      title: "O'zgaruvchilarni e'lon qilish",
      description: "Turli turdagi o'zgaruvchilarni e'lon qilish va qiymat berish",
      task: "Ism, yosh va kasb uchun o'zgaruvchilar yarating va ularni konsolga chiqaring",
      initialCode: `// O'zgaruvchilarni shu yerda yarating
  `,
      hint: "let va const kalit so'zlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 3;
      }
    },
    {
      id: 2,
      title: "Satr bilan ishlash",
      description: "Satrlarni birlashtirish va formatlash",
      task: "Berilgan ism va familiyani to'liq ism formatiga birlashtiring",
      initialCode: `let firstName = 'Ali';
  let lastName = 'Valiyev';
  // Kodingizni shu yerda yozing
  `,
      hint: "String concatenation yoki template literal dan foydalaning",
      checkResult: (output) => {
        return output[0] === "Ali Valiyev";
      }
    },
    {
      id: 3,
      title: "Sonlar bilan amallar",
      description: "Sonlar ustida arifmetik amallarni bajarish",
      task: "Ikkita son yig'indisi, ayirmasi, ko'paytmasi va bo'linmasini hisoblang",
      initialCode: `let num1 = 10;
  let num2 = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "+, -, *, / operatorlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 4;
      }
    },
    {
      id: 4,
      title: "Ma'lumotlar turini aniqlash",
      description: "O'zgaruvchilarning turini aniqlash",
      task: "Berilgan o'zgaruvchilarning turini typeof operatori yordamida aniqlang",
      initialCode: `let name = "John";
  let age = 25;
  let isStudent = true;
  // Kodingizni shu yerda yozing
  `,
      hint: "typeof operatoridan foydalaning",
      checkResult: (output) => {
        return output.length === 3;
      }
    },
    {
      id: 5,
      title: "Shaxs haqida ma'lumot",
      description: "Shaxs haqidagi ma'lumotlarni formatlash",
      task: "Shaxs haqidagi ma'lumotlarni chiroyli formatda konsolga chiqaring",
      initialCode: `let name = 'Aziz';
  let age = 20;
  let profession = 'Developer';
  // Kodingizni shu yerda yozing
  `,
      hint: "Template literal (\`\`) dan foydalaning",
      checkResult: (output) => {
        return output[0].includes("Aziz") && output[0].includes("20");
      }
    },
    {
      id: 6,
      title: "Sonni formatlash",
      description: "Sonlarni belgilangan formatda ifodalash",
      task: "Berilgan sonni 2 xona verguldan keyin yaxlitlang",
      initialCode: `let number = 3.14159;
  // Kodingizni shu yerda yozing
  `,
      hint: "toFixed() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === "3.14";
      }
    },
    {
      id: 7,
      title: "Satr uzunligi",
      description: "Satr uzunligini hisoblash",
      task: "Berilgan satr uzunligini va bo'sh joylar sonini hisoblang",
      initialCode: `let text = "Hello World!";
  // Kodingizni shu yerda yozing
  `,
      hint: "length xususiyati va split() metodidan foydalaning",
      checkResult: (output) => {
        return output.length === 2;
      }
    },
    {
      id: 8,
      title: "Vaqt formati",
      description: "Soat va daqiqani formatlash",
      task: "Berilgan soat va daqiqani 'HH:MM' formatida ifodalang",
      initialCode: `let hours = 9;
  let minutes = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "padStart() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === "09:05";
      }
    },
    {
      id: 9,
      title: "Matematik hisoblashlar",
      description: "Doira parametrlarini hisoblash",
      task: "Doiraning yuzi va perimetrini hisoblang (r=5)",
      initialCode: `const radius = 5;
  // Kodingizni shu yerda yozing
  `,
      hint: "Math.PI dan foydalaning",
      checkResult: (output) => {
        return output.length === 2;
      }
    },
    {
      id: 10,
      title: "Satrni o'zgartirish",
      description: "Satr ustida turli amallarni bajarish",
      task: "Berilgan satrni katta harflarga o'tkazing va bo'sh joylarni olib tashlang",
      initialCode: `let text = "  Hello World  ";
  // Kodingizni shu yerda yozing
  `,
      hint: "toUpperCase() va trim() metodlaridan foydalaning",
      checkResult: (output) => {
        return output[0] === "HELLO WORLD";
      }
    }
  ];
  
  export default practiceOutputWithVariables;
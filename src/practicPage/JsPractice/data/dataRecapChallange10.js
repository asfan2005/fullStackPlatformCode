const practiceRecapChallenge10 = [
    {
      id: 1,
      title: "Array yaratish",
      description: "Massiv e'lon qilish usullari",
      task: "fruits nomli massiv yarating va unga 3 ta meva nomini qo'shing",
      initialCode: `// Array yaratish
  const fruits = // Kodingizni shu yerda yozing`,
      hint: "[] yoki new Array() dan foydalaning",
      checkResult: (output) => Array.isArray(output[0]) && output[0].length === 3
    },
    {
      id: 2,
      title: "Array metodlari - push()",
      description: "Massivga element qo'shish",
      task: "numbers massiviga 5 sonini oxiriga qo'shing",
      initialCode: `const numbers = [1, 2, 3, 4];
  // Kodingizni shu yerda yozing`,
      hint: "push() metodidan foydalaning",
      checkResult: (output) => output[0][4] === 5
    },
    // ... 28 ta qo'shimcha element
    {
      id: 30,
      title: "Array.from()",
      description: "Massivga aylantirish",
      task: "Berilgan stringni harflar massiviga aylantiring",
      initialCode: `const str = 'Hello';
  // Kodingizni shu yerda yozing`,
      hint: "Array.from() metodidan foydalaning",
      checkResult: (output) => Array.isArray(output[0]) && output[0].join('') === 'Hello'
    }
  ];
  
  export default practiceRecapChallenge10;
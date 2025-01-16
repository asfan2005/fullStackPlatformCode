const practiceDeclaringArray = [
    {
      id: 1,
      title: "Array yaratish - literal usuli",
      description: "JavaScript da massiv yaratishning eng oddiy usuli",
      task: "Kvadrat qavslar [] yordamida colors nomli massiv yarating va unga 3 ta rang nomini qo'shing",
      initialCode: `// Array yaratish
  const colors = // Kodingizni shu yerda yozing`,
      hint: "Masalan: const colors = ['red', 'green', 'blue']",
      checkResult: (output) => Array.isArray(output[0]) && output[0].length === 3
    },
    {
      id: 2,
      title: "Array yaratish - konstruktor usuli",
      description: "new Array() konstruktori yordamida massiv yaratish",
      task: "new Array() konstruktori yordamida numbers nomli massiv yarating va unga 1 dan 5 gacha sonlarni qo'shing",
      initialCode: `// Array yaratish
  const numbers = // Kodingizni shu yerda yozing`,
      hint: "Masalan: const numbers = new Array(1, 2, 3, 4, 5)",
      checkResult: (output) => Array.isArray(output[0]) && output[0].length === 5
    },
    {
      id: 3,
      title: "Array.from() metodi",
      description: "Boshqa ma'lumot turlaridan massiv yaratish",
      task: "Array.from() metodidan foydalanib 'Hello' so'zini harflar massiviga aylantiring",
      initialCode: `const word = 'Hello';
  // Kodingizni shu yerda yozing`,
      hint: "Array.from(word) dan foydalaning",
      checkResult: (output) => Array.isArray(output[0]) && output[0].join('') === 'Hello'
    },
    {
      id: 4,
      title: "Array elementlariga murojaat",
      description: "Massiv elementlariga indeks orqali murojaat qilish",
      task: "Berilgan fruits massivining ikkinchi elementini console.log() orqali chiqaring",
      initialCode: `const fruits = ['apple', 'banana', 'orange'];
  // Kodingizni shu yerda yozing`,
      hint: "Indeks 0 dan boshlanishini unutmang",
      checkResult: (output) => output[0] === 'banana'
    },
    {
      id: 5,
      title: "Ko'p o'lchamli massivlar",
      description: "Massiv ichida massivlar yaratish",
      task: "2x2 o'lchamli matrix massivini yarating",
      initialCode: `// 2x2 matrix yarating
  const matrix = // Kodingizni shu yerda yozing`,
      hint: "Masalan: [[1, 2], [3, 4]]",
      checkResult: (output) => {
        return Array.isArray(output[0]) && 
               output[0].length === 2 && 
               output[0].every(row => Array.isArray(row) && row.length === 2)
      }
    }
  ];
  
  export default practiceDeclaringArray;
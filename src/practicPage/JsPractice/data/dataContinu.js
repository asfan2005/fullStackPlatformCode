const practiceContinue = [
    {
      id: 1,
      title: "Oddiy continue",
      description: "Continue operatorining asosiy ishlatilishi",
      task: "1 dan 5 gacha sonlardan faqat juft sonlarni chiqaring",
      initialCode: `// Faqat juft sonlarni chiqaring
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 2 !== 0) continue; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4';
      }
    },
    {
      id: 2,
      title: "3 ga bo'linadigan sonlarni o'tkazib yuborish",
      description: "Continue bilan ma'lum sonlarni o'tkazib yuborish",
      task: "1 dan 10 gacha sonlardan 3 ga bo'linadiganlaridan tashqari barchasini chiqaring",
      initialCode: `// 3 ga bo'linadigan sonlardan tashqari chiqaring
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 3 === 0) continue; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,4,5,7,8,10';
      }
    },
    {
      id: 3,
      title: "Massivda filtrlash",
      description: "Continue bilan massivni filtrlash",
      task: "Berilgan massivdan faqat musbat sonlarni chiqaring",
      initialCode: `// Faqat musbat sonlarni chiqaring
  const arr = [-1, 2, -3, 4, -5, 6];
  let positives = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(arr[i] < 0) continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4,6';
      }
    },
    {
      id: 4,
      title: "So'zlarni filtrlash",
      description: "Continue bilan so'zlarni filtrlash",
      task: "3 harfdan uzun bo'lgan so'zlarni chiqaring",
      initialCode: `// 3 harfdan uzun so'zlarni chiqaring
  const words = ['hi', 'hello', 'hey', 'world'];
  let longWords = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(words[i].length <= 3) continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === 'hello,world';
      }
    },
    {
      id: 5,
      title: "Ichma-ich sikllarda continue",
      description: "Continue operatorini ichma-ich sikllarda ishlatish",
      task: "2x2 matritsa elementlaridan faqat juft sonlarni chiqaring",
      initialCode: `// Faqat juft sonlarni chiqaring
  const matrix = [[1, 2], [3, 4]];
  let evens = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(matrix[i][j] % 2 !== 0) continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4';
      }
    },
    {
      id: 6,
      title: "Raqamlarni filtrlash",
      description: "Continue bilan raqamlarni filtrlash",
      task: "100 dan 200 gacha sonlardan faqat 5 ga bo'linadiganlarini chiqaring",
      initialCode: `// 5 ga bo'linadigan sonlarni chiqaring
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 5 !== 0) continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].slice(0,3).join(',') === '100,105,110';
      }
    },
    {
      id: 7,
      title: "While va continue",
      description: "While siklida continue operatori",
      task: "1 dan 20 gacha sonlardan 3 ga ham 4 ga ham bo'linmaydigan sonlarni chiqaring",
      initialCode: `// 3 ga va 4 ga bo'linmaydigan sonlarni chiqaring
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 3 === 0 || i % 4 === 0) continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,5,7,11,13,17,19';
      }
    },
    {
      id: 8,
      title: "Tub sonlarni topish",
      description: "Continue bilan tub sonlarni topish",
      task: "1 dan 20 gacha bo'lgan tub sonlarni chiqaring",
      initialCode: `// Tub sonlarni chiqaring
  let primes = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Ichma-ich sikllar va continue dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,3,5,7,11,13,17,19';
      }
    },
    {
      id: 9,
      title: "Stringlarni tozalash",
      description: "Continue bilan stringlarni tozalash",
      task: "So'zlar massividan bo'sh stringlarni olib tashlang",
      initialCode: `// Bo'sh stringlarni olib tashlang
  const words = ['hello', '', 'world', '', 'js'];
  let cleanWords = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(words[i] === '') continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === 'hello,world,js';
      }
    },
    {
      id: 10,
      title: "Murakkab filtrlash",
      description: "Continue operatorining murakkab ishlatilishi",
      task: "10 dan 50 gacha sonlardan 3 ga bo'linadigan va 4 ga bo'linganda 1 qoldiq qoladigan sonlarni toping",
      initialCode: `// Shartga mos sonlarni toping
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(!(i % 3 === 0 && i % 4 === 1)) continue;",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '21,33,45';
      }
    }
  ];
  
  export default practiceContinue;
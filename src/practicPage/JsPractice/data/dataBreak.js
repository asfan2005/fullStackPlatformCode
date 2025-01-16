const practiceBreak = [
    {
      id: 1,
      title: "Oddiy break",
      description: "Break operatorining asosiy ishlatilishi",
      task: "1 dan 10 gacha sonlarni chiqaring, 5 ga yetganda to'xtang",
      initialCode: `// 1 dan 5 gacha sonlarni chiqaring
  let i = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "for loop va if(i === 5) break; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 2,
      title: "Juft son topish",
      description: "Break bilan birinchi juft sonni topish",
      task: "1 dan boshlab birinchi juft sonni toping va dasturni to'xtating",
      initialCode: `// Birinchi juft sonni toping
  let i = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 2 === 0) break; dan foydalaning",
      checkResult: (output) => {
        return output[0] === 2;
      }
    },
    {
      id: 3,
      title: "Massivda qidirish",
      description: "Break bilan massivda element qidirish",
      task: "Massivdan 5 sonini toping va indeksini qaytaring",
      initialCode: `// 5 sonining indeksini toping
  const arr = [1, 3, 5, 7, 9];
  let index = -1;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(arr[i] === 5) { index = i; break; }",
      checkResult: (output) => {
        return output[0] === 2;
      }
    },
    {
      id: 4,
      title: "Parol tekshirish",
      description: "Break bilan parolni tekshirish",
      task: "To'g'ri parol kiritilguncha davom eting (parol: '1234')",
      initialCode: `// Parolni tekshiring
  const passwords = ['4321', '5678', '1234', '9012'];
  let found = false;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(passwords[i] === '1234') { found = true; break; }",
      checkResult: (output) => {
        return output[0] === true;
      }
    },
    {
      id: 5,
      title: "Ichma-ich sikllarda break",
      description: "Break operatorini ichma-ich sikllarda ishlatish",
      task: "2x2 matritsa elementlarini chiqaring, 4 ni topganda to'xtang",
      initialCode: `// 4 ni topganda to'xtang
  const matrix = [[1, 2], [3, 4]];
  // Kodingizni shu yerda yozing
  `,
      hint: "Ikki qavat for loop va break label dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,4';
      }
    },
    {
      id: 6,
      title: "Tub son qidirish",
      description: "Break bilan tub son qidirish",
      task: "10 dan katta birinchi tub sonni toping",
      initialCode: `// Birinchi tub sonni toping
  let num = 11;
  let result = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "Ichma-ich sikllar va break dan foydalaning",
      checkResult: (output) => {
        return output[0] === 11;
      }
    },
    {
      id: 7,
      title: "While va break",
      description: "While siklida break operatori",
      task: "100 gacha bo'lgan sonlardan 3 ga ham 5 ga ham bo'linadigan birinchi sonni toping",
      initialCode: `// 3 va 5 ga bo'linadigan sonni toping
  let i = 1;
  let result = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 3 === 0 && i % 5 === 0) { result = i; break; }",
      checkResult: (output) => {
        return output[0] === 15;
      }
    },
    {
      id: 8,
      title: "Xato qidirish",
      description: "Break bilan xatoni topish",
      task: "Massivda birinchi manfiy sonni toping",
      initialCode: `// Manfiy sonni toping
  const numbers = [1, 3, -2, 4, -5];
  let negative = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(numbers[i] < 0) { negative = numbers[i]; break; }",
      checkResult: (output) => {
        return output[0] === -2;
      }
    },
    {
      id: 9,
      title: "String qidirish",
      description: "Break bilan stringda qidirish",
      task: "Berilgan so'zlar ichidan 'hello' so'zini toping",
      initialCode: `// 'hello' so'zini toping
  const words = ['hi', 'hey', 'hello', 'hola'];
  let found = false;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(words[i] === 'hello') { found = true; break; }",
      checkResult: (output) => {
        return output[0] === true;
      }
    },
    {
      id: 10,
      title: "Murakkab break",
      description: "Break operatorining murakkab ishlatilishi",
      task: "1 dan 20 gacha sonlardan 4 ga bo'linib, 6 ga bo'linmaydigan birinchi sonni toping",
      initialCode: `// Shartga mos sonni toping
  let i = 1;
  let result = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 4 === 0 && i % 6 !== 0) { result = i; break; }",
      checkResult: (output) => {
        return output[0] === 4;
      }
    }
  ];
  
  export default practiceBreak;
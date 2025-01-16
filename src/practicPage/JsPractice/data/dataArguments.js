const practiceArrayMethods = [
    {
      id: 1,
      title: "map() metodi",
      description: "Massiv elementlarini o'zgartirish",
      task: "numbers massividagi har bir elementni 3 ga ko'paytiring va yangi massiv hosil qiling",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "map() metodidan foydalaning: numbers.map(x => x * 3)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return JSON.stringify(arr) === JSON.stringify([3, 6, 9, 12, 15]);
      }
    },
    {
      id: 2,
      title: "filter() metodi",
      description: "Massiv elementlarini filtrlash",
      task: "numbers massividan 5 dan katta sonlarni ajratib oling",
      initialCode: `const numbers = [2, 5, 8, 1, 9, 3, 7];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "filter() metodidan foydalaning: numbers.filter(x => x > 5)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return JSON.stringify(arr) === JSON.stringify([8, 9, 7]);
      }
    },
    {
      id: 3,
      title: "reduce() metodi",
      description: "Massiv elementlarini ko'paytmasini hisoblash",
      task: "numbers massividagi barcha sonlar ko'paytmasini hisoblang",
      initialCode: `const numbers = [2, 3, 4];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "reduce() metodidan foydalaning: numbers.reduce((mult, current) => mult * current, 1)",
      checkResult: (output) => {
        return output[0] === '24';
      }
    },
    {
      id: 4,
      title: "find() metodi",
      description: "Massivdan element qidirish",
      task: "numbers massividan 3 ga bo'linadigan birinchi sonni toping",
      initialCode: `const numbers = [4, 7, 9, 12, 15];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "find() metodidan foydalaning: numbers.find(x => x % 3 === 0)",
      checkResult: (output) => {
        return output[0] === '9';
      }
    },
    {
      id: 5,
      title: "every() metodi",
      description: "Massiv elementlarini tekshirish",
      task: "numbers massividagi barcha sonlar musbat ekanligini tekshiring (true/false qaytaring)",
      initialCode: `const numbers = [1, -2, 3, 4, 5];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "every() metodidan foydalaning: numbers.every(x => x > 0)",
      checkResult: (output) => {
        return output[0] === 'false';
      }
    },
    {
      id: 6,
      title: "includes() metodi",
      description: "Massivda element mavjudligini tekshirish",
      task: "numbers massivida 7 soni borligini tekshiring (true/false qaytaring)",
      initialCode: `const numbers = [5, 7, 9, 11];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "includes() metodidan foydalaning: numbers.includes(7)",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 7,
      title: "indexOf() metodi",
      description: "Element indeksini topish",
      task: "numbers massivida 8 sonining indeksini toping",
      initialCode: `const numbers = [4, 6, 8, 10];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "indexOf() metodidan foydalaning: numbers.indexOf(8)",
      checkResult: (output) => {
        return output[0] === '2';
      }
    },
    {
      id: 8,
      title: "join() metodi",
      description: "Massivni stringga aylantirish",
      task: "numbers massivini vergul bilan ajratilgan stringga aylantiring",
      initialCode: `const numbers = [1, 2, 3, 4];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "join() metodidan foydalaning: numbers.join(',')",
      checkResult: (output) => {
        return output[0] === '1,2,3,4';
      }
    },
    {
      id: 9,
      title: "reverse() metodi",
      description: "Massivni teskari tartibga keltirish",
      task: "numbers massivini teskari tartibda joylashtiring",
      initialCode: `const numbers = [1, 2, 3, 4];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "reverse() metodidan foydalaning: [...numbers].reverse()",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return JSON.stringify(arr) === JSON.stringify([4, 3, 2, 1]);
      }
    },
    {
      id: 10,
      title: "sort() metodi",
      description: "Massivni tartiblash",
      task: "numbers massivini o'sish tartibida joylashtiring",
      initialCode: `const numbers = [4, 2, 5, 1, 3];
  let result = // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "sort() metodidan foydalaning: numbers.sort((a, b) => a - b)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return JSON.stringify(arr) === JSON.stringify([1, 2, 3, 4, 5]);
      }
    }
  ];
  
  export default practiceArrayMethods;
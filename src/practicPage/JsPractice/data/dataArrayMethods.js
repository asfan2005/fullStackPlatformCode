const practiceArrayMethods = [
    {
      id: 1,
      title: "map() metodi",
      description: "Massiv elementlarini o'zgartirish",
      task: "numbers massividagi har bir elementni 2 ga ko'paytiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "map() metodidan foydalaning: numbers.map(x => x * 2)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,4,6,8,10';
      }
    },
    {
      id: 2,
      title: "filter() metodi",
      description: "Massiv elementlarini filtrlash",
      task: "numbers massividan juft sonlarni ajratib oling",
      initialCode: `const numbers = [1, 2, 3, 4, 5, 6];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "filter() metodidan foydalaning: numbers.filter(x => x % 2 === 0)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.every(x => x % 2 === 0);
      }
    },
    {
      id: 3,
      title: "reduce() metodi",
      description: "Massiv elementlarini yig'indisini hisoblash",
      task: "numbers massividagi barcha sonlar yig'indisini hisoblang",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "reduce() metodidan foydalaning: numbers.reduce((acc, curr) => acc + curr, 0)",
      checkResult: (output) => {
        return Number(output[0]) === 15;
      }
    },
    {
      id: 4,
      title: "find() metodi",
      description: "Massivdan element qidirish",
      task: "numbers massividan 5 dan katta birinchi sonni toping",
      initialCode: `const numbers = [2, 4, 6, 8, 10];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "find() metodidan foydalaning: numbers.find(x => x > 5)",
      checkResult: (output) => {
        return Number(output[0]) === 6;
      }
    },
    {
      id: 5,
      title: "some() metodi",
      description: "Massivda element mavjudligini tekshirish",
      task: "numbers massivida 10 dan katta son borligini tekshiring",
      initialCode: `const numbers = [2, 5, 8, 12, 15];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "some() metodidan foydalaning: numbers.some(x => x > 10)",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 6,
      title: "every() metodi",
      description: "Massiv elementlarini tekshirish",
      task: "numbers massividagi barcha elementlar musbat ekanligini tekshiring",
      initialCode: `const numbers = [1, -2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "every() metodidan foydalaning: numbers.every(x => x > 0)",
      checkResult: (output) => {
        return output[0] === 'false';
      }
    },
    {
      id: 7,
      title: "includes() metodi",
      description: "Massivda element mavjudligini tekshirish",
      task: "fruits massivida 'apple' elementi borligini tekshiring",
      initialCode: `const fruits = ['banana', 'apple', 'orange'];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "includes() metodidan foydalaning: fruits.includes('apple')",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 8,
      title: "indexOf() metodi",
      description: "Massivda element indeksini topish",
      task: "numbers massivida 5 elementi nechanchi indeksda joylashganini toping",
      initialCode: `const numbers = [2, 4, 5, 6, 8];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "indexOf() metodidan foydalaning: numbers.indexOf(5)",
      checkResult: (output) => {
        return Number(output[0]) === 2;
      }
    },
    {
      id: 9,
      title: "concat() metodi",
      description: "Massivlarni birlashtirish",
      task: "arr1 va arr2 massivlarini birlashtiring",
      initialCode: `const arr1 = [1, 2];
  const arr2 = [3, 4];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "concat() metodidan foydalaning: arr1.concat(arr2)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4';
      }
    },
    {
      id: 10,
      title: "slice() metodi",
      description: "Massivdan qism ajratib olish",
      task: "numbers massividan 2-elementdan 4-elementgacha bo'lgan qismini ajratib oling",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "slice() metodidan foydalaning: numbers.slice(1, 4)",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,3,4';
      }
    }
  ];
  
  export default practiceArrayMethods;
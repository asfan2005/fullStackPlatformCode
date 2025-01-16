const practiceWhileLoop = [
    {
      id: 1,
      title: "Oddiy while loop",
      description: "While loop asoslari",
      task: "1 dan 5 gacha sonlarni while loop yordamida chiqaring",
      initialCode: `// While loop yordamida 1 dan 5 gacha sonlarni chiqaring
  let i = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "while(i <= 5) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 2,
      title: "Teskari sanash",
      description: "While loop bilan teskari sanash",
      task: "10 dan 1 gacha sonlarni teskari tartibda chiqaring",
      initialCode: `// 10 dan 1 gacha sonlarni while loop yordamida chiqaring
  let i = 10;
  // Kodingizni shu yerda yozing
  `,
      hint: "while(i >= 1) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '10,9,8,7,6,5,4,3,2,1';
      }
    },
    {
      id: 3,
      title: "Juft sonlar",
      description: "While loop bilan juft sonlarni topish",
      task: "1 dan 10 gacha bo'lgan juft sonlarni chiqaring",
      initialCode: `// While loop yordamida juft sonlarni chiqaring
  let i = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "i % 2 === 0 shartidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4,6,8,10';
      }
    },
    {
      id: 4,
      title: "Yig'indi hisoblash",
      description: "While loop bilan yig'indi hisoblash",
      task: "1 dan 5 gacha sonlar yig'indisini hisoblang",
      initialCode: `// While loop yordamida yig'indini hisoblang
  let i = 1;
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "sum += i dan foydalaning",
      checkResult: (output) => {
        return output[0] === 15;
      }
    },
    {
      id: 5,
      title: "Faktorial hisoblash",
      description: "While loop bilan faktorial hisoblash",
      task: "Berilgan sonning faktorialini hisoblang",
      initialCode: `// 5! ni hisoblang
  let n = 5;
  let factorial = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "factorial *= i dan foydalaning",
      checkResult: (output) => {
        return output[0] === 120;
      }
    },
    {
      id: 6,
      title: "Raqamlar yig'indisi",
      description: "While loop bilan raqamlar yig'indisi",
      task: "Berilgan sonning raqamlari yig'indisini hisoblang",
      initialCode: `// 123 sonining raqamlari yig'indisini hisoblang
  let num = 123;
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "num % 10 va Math.floor(num / 10) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 6;
      }
    },
    {
      id: 7,
      title: "Tub son tekshirish",
      description: "While loop bilan tub sonni tekshirish",
      task: "Berilgan son tub ekanligini aniqlang",
      initialCode: `// 17 soni tub ekanligini aniqlang
  let num = 17;
  let isPrime = true;
  let i = 2;
  // Kodingizni shu yerda yozing
  `,
      hint: "num % i === 0 shartidan foydalaning",
      checkResult: (output) => {
        return output[0] === true;
      }
    },
    {
      id: 8,
      title: "Fibonacci ketma-ketligi",
      description: "While loop bilan Fibonacci sonlarini hisoblash",
      task: "Fibonacci ketma-ketligining dastlabki 5 ta hadini chiqaring",
      initialCode: `// Fibonacci ketma-ketligini hisoblang
  let n = 5;
  let a = 0, b = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "Har qadamda a va b ni yangilang",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '0,1,1,2,3';
      }
    },
    {
      id: 9,
      title: "Do-while loop",
      description: "Do-while loop asoslari",
      task: "Do-while loop yordamida 1 dan 5 gacha sonlarni chiqaring",
      initialCode: `// Do-while loop yordamida sonlarni chiqaring
  let i = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "do { ... } while(i <= 5) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 10,
      title: "Break operatori",
      description: "While loop da break operatori",
      task: "1 dan 10 gacha sonlarni chiqaring, lekin 5 ga yetganda to'xtang",
      initialCode: `// Break operatoridan foydalaning
  let i = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i === 5) break; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,4,5';
      }
    }
  ];
  
  export default practiceWhileLoop;
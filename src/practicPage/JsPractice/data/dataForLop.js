const practiceForLoop = [
    {
      id: 1,
      title: "Oddiy for tsikli",
      description: "1 dan 10 gacha sonlarni chiqarish",
      task: "1 dan 10 gacha bo'lgan sonlarni massivga yig'ing",
      initialCode: `// Natija: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "for(let i = 1; i <= 10; i++) va push() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,4,5,6,7,8,9,10';
      }
    },
    {
      id: 2,
      title: "Juft sonlarni topish",
      description: "1 dan 20 gacha bo'lgan juft sonlarni topish",
      task: "1 dan 20 gacha bo'lgan juft sonlarni massivga yig'ing",
      initialCode: `// Natija: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  let evenNumbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsikli va if(i % 2 === 0) shartidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].every(num => num % 2 === 0) && output[0].length === 10;
      }
    },
    {
      id: 3,
      title: "Massiv elementlari yig'indisi",
      description: "For tsikli yordamida massiv elementlari yig'indisini hisoblash",
      task: "Berilgan massiv elementlari yig'indisini hisoblang",
      initialCode: `let numbers = [2, 4, 6, 8, 10];
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsiklida har bir elementni sum ga qo'shib boring",
      checkResult: (output) => {
        return output[0] === 30;
      }
    },
    {
      id: 4,
      title: "Teskari tartib",
      description: "Sonlarni teskari tartibda chiqarish",
      task: "10 dan 1 gacha bo'lgan sonlarni teskari tartibda massivga yig'ing",
      initialCode: `// Natija: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  let reverseNumbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "for(let i = 10; i >= 1; i--) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '10,9,8,7,6,5,4,3,2,1';
      }
    },
    {
      id: 5,
      title: "Ko'paytma jadvali",
      description: "Berilgan son uchun ko'paytma jadvali",
      task: "5 sonining 1 dan 10 gacha bo'lgan ko'paytma jadvalini yarating",
      initialCode: `// Natija: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
  let number = 5;
  let multiplicationTable = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsiklida har bir sonni 5 ga ko'paytirib boring",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '5,10,15,20,25,30,35,40,45,50';
      }
    },
    {
      id: 6,
      title: "Faktorial hisoblash",
      description: "For tsikli yordamida faktorial hisoblash",
      task: "5 sonining faktorialini hisoblang (5! = 5 * 4 * 3 * 2 * 1)",
      initialCode: `let number = 5;
  let factorial = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsiklida 1 dan 5 gacha ko'paytirib boring",
      checkResult: (output) => {
        return output[0] === 120;
      }
    },
    {
      id: 7,
      title: "Fibonachchi ketma-ketligi",
      description: "For tsikli yordamida Fibonachchi sonlarini hisoblash",
      task: "Dastlabki 10 ta Fibonachchi sonini massivga yig'ing",
      initialCode: `// Natija: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  let fibonacci = [0, 1];
  // Kodingizni shu yerda yozing
  `,
      hint: "Har bir yangi son o'zidan oldingi ikkita sonning yig'indisi",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '0,1,1,2,3,5,8,13,21,34';
      }
    },
    {
      id: 8,
      title: "Tub sonlarni topish",
      description: "For tsikli yordamida tub sonlarni aniqlash",
      task: "1 dan 20 gacha bo'lgan tub sonlarni toping",
      initialCode: `// Natija: [2, 3, 5, 7, 11, 13, 17, 19]
  let primeNumbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Ichma-ich for tsikllaridan foydalaning va bo'linuvchilarni tekshiring",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,3,5,7,11,13,17,19';
      }
    },
    {
      id: 9,
      title: "Harflarni sanash",
      description: "For tsikli yordamida matndagi harflarni sanash",
      task: "Berilgan matndagi 'a' harflar sonini hisoblang",
      initialCode: `let text = "JavaScript dasturlash tili";
  let count = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsikli va if(text[i].toLowerCase() === 'a') shartidan foydalaning",
      checkResult: (output) => {
        return output[0] === 4;
      }
    },
    {
      id: 10,
      title: "2 ning darajalari",
      description: "For tsikli yordamida 2 ning darajalarini hisoblash",
      task: "2 ning 0 dan 7 gacha bo'lgan darajalarini hisoblang",
      initialCode: `// Natija: [1, 2, 4, 8, 16, 32, 64, 128]
  let powers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Math.pow(2, i) yoki 2 ** i dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,4,8,16,32,64,128';
      }
    },
    {
      id: 11,
      title: "Massivni teskari o'girish",
      description: "For tsikli yordamida massivni teskari o'girish",
      task: "Berilgan massivni teskari tartibda joylashtiring",
      initialCode: `let numbers = [1, 2, 3, 4, 5];
  let reversed = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Massiv oxiridan boshiga qarab yuring",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '5,4,3,2,1';
      }
    },
    {
      id: 12,
      title: "Palindrom tekshirish",
      description: "For tsikli yordamida palindromlikni tekshirish",
      task: "Berilgan so'z palindrom ekanligini aniqlang ('radar' so'zi uchun)",
      initialCode: `let word = "radar";
  let isPalindrome = true;
  // Kodingizni shu yerda yozing
  `,
      hint: "So'zning boshi va oxiridan tekshirib boring",
      checkResult: (output) => {
        return output[0] === true;
      }
    },
    {
      id: 13,
      title: "Massiv elementlarini ko'paytirish",
      description: "For tsikli yordamida har bir elementni 2 ga ko'paytirish",
      task: "Massivning har bir elementini 2 ga ko'paytirib, yangi massiv hosil qiling",
      initialCode: `let numbers = [1, 2, 3, 4, 5];
  let multiplied = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Har bir elementni 2 ga ko'paytirib, yangi massivga qo'shing",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4,6,8,10';
      }
    },
    {
      id: 14,
      title: "Toq sonlar yig'indisi",
      description: "For tsikli yordamida toq sonlar yig'indisini hisoblash",
      task: "1 dan 10 gacha bo'lgan toq sonlar yig'indisini hisoblang",
      initialCode: `// Natija: 25 (1 + 3 + 5 + 7 + 9)
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsikli va if(i % 2 !== 0) shartidan foydalaning",
      checkResult: (output) => {
        return output[0] === 25;
      }
    },
    {
      id: 15,
      title: "Raqamlar yig'indisi",
      description: "For tsikli yordamida son raqamlari yig'indisini hisoblash",
      task: "Berilgan sonning raqamlari yig'indisini hisoblang (12345 soni uchun)",
      initialCode: `let number = 12345;
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "Sonni stringga o'girib, har bir raqamni yig'indiga qo'shing",
      checkResult: (output) => {
        return output[0] === 15;
      }
    }
  ];
  
  export default practiceForLoop;
const practiceChallenge7 = [
    {
      id: 1,
      title: "For loop asoslari",
      description: "For loop yordamida sonlar bilan ishlash",
      task: "1 dan 10 gacha bo'lgan sonlar yig'indisini toping",
      initialCode: `// 1 dan 10 gacha sonlar yig'indisi
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "for(let i = 1; i <= 10; i++) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 55;
      }
    },
    {
      id: 2,
      title: "While loop bilan ishlash",
      description: "While loop yordamida ma'lum shartgacha davom etish",
      task: "2 ning darajalarini 100 dan oshmaguncha chiqaring",
      initialCode: `// 2 ning darajalarini chiqaring
  let powers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "while(current <= 100) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4,8,16,32,64';
      }
    },
    {
      id: 3,
      title: "Break operatori",
      description: "Break operatori yordamida siklni to'xtatish",
      task: "1 dan 100 gacha sonlar orasidan birinchi 7 ga bo'linadigan va 5 ga bo'linganda 3 qoldiq qoladigan sonni toping",
      initialCode: `// Shartga mos birinchi sonni toping
  let result = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 7 === 0 && i % 5 === 3) break; dan foydalaning",
      checkResult: (output) => {
        return output[0] === 28;
      }
    },
    {
      id: 4,
      title: "Continue va juft sonlar",
      description: "Continue operatori yordamida filtrlash",
      task: "1 dan 20 gacha faqat juft sonlarni toping",
      initialCode: `// Juft sonlarni toping
  let evens = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 2 !== 0) continue; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4,6,8,10,12,14,16,18,20';
      }
    },
    {
      id: 5,
      title: "Do-while loop",
      description: "Do-while loop bilan ishlash",
      task: "Foydalanuvchi kiritgan son 5 ga bo'linmaguncha davom eting (simulyatsiya uchun numbers massividan foydalaning)",
      initialCode: `// 5 ga bo'linadigan son topilguncha davom eting
  const numbers = [7, 3, 9, 15, 2];
  let index = 0;
  let result = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "do-while va numbers[index++] dan foydalaning",
      checkResult: (output) => {
        return output[0] === 15;
      }
    },
    {
      id: 6,
      title: "Ichma-ich for loop",
      description: "Ichma-ich for loop yordamida ko'paytirish jadvali",
      task: "3x3 ko'paytirish jadvalini yarating",
      initialCode: `// 3x3 ko'paytirish jadvali
  let table = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Ikki qavat for loop ishlatish kerak",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,3,2,4,6,3,6,9';
      }
    },
    {
      id: 7,
      title: "Break va massiv",
      description: "Break operatori yordamida massivda qidirish",
      task: "Berilgan massivdan birinchi juft sonni toping",
      initialCode: `// Birinchi juft sonni toping
  const numbers = [5, 3, 8, 1, 4];
  let firstEven = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(numbers[i] % 2 === 0) break; dan foydalaning",
      checkResult: (output) => {
        return output[0] === 8;
      }
    },
    {
      id: 8,
      title: "While va counter",
      description: "While loop yordamida hisoblash",
      task: "Berilgan sonni 2 ga bo'lish operatsiyasini necha marta bajarish mumkinligini toping",
      initialCode: `// 2 ga bo'lish operatsiyasi sonini toping
  let number = 32;
  let count = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "while(number > 1) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 5;
      }
    },
    {
      id: 9,
      title: "For loop va string",
      description: "For loop yordamida string bilan ishlash",
      task: "Berilgan so'zdagi unli harflar sonini toping",
      initialCode: `// Unli harflar sonini toping
  const word = "hello world";
  let vowelCount = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "includes() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 3;
      }
    },
    {
      id: 10,
      title: "Continue va massiv filtrlash",
      description: "Continue operatori yordamida massivni filtrlash",
      task: "Berilgan sonlar massividan faqat musbat sonlarni ajratib oling",
      initialCode: `// Musbat sonlarni toping
  const numbers = [-2, 5, -1, 7, -3, 6];
  let positives = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(numbers[i] <= 0) continue; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '5,7,6';
      }
    },
    {
      id: 11,
      title: "For...of loop",
      description: "For...of loop yordamida massiv elementlari bilan ishlash",
      task: "Berilgan so'zlar massividan eng uzun so'zni toping",
      initialCode: `// Eng uzun so'zni toping
  const words = ['apple', 'banana', 'kiwi', 'strawberry'];
  let longest = '';
  // Kodingizni shu yerda yozing
  `,
      hint: "word.length dan foydalaning",
      checkResult: (output) => {
        return output[0] === 'strawberry';
      }
    },
    {
      id: 12,
      title: "While va string",
      description: "While loop yordamida string qayta ishlash",
      task: "Berilgan stringdan ketma-ket kelgan probelllarni bitta probelga almashtiring",
      initialCode: `// Probellarni tozalang
  let text = "Hello   World    JS";
  let result = '';
  // Kodingizni shu yerda yozing
  `,
      hint: "while(text.includes('  ')) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 'Hello World JS';
      }
    },
    {
      id: 13,
      title: "Break va raqamlar",
      description: "Break operatori yordamida raqamlarni tekshirish",
      task: "1 dan 100 gacha sonlar orasidan 3 ga ham, 5 ga ham bo'linadigan birinchi sonni toping",
      initialCode: `// 3 va 5 ga bo'linadigan birinchi son
  let result = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 3 === 0 && i % 5 === 0) break; dan foydalaning",
      checkResult: (output) => {
        return output[0] === 15;
      }
    },
    {
      id: 14,
      title: "Ichma-ich loop va break",
      description: "Ichma-ich loop va break operatorining birgalikda ishlatilishi",
      task: "2x3 matritsa elementlari orasidan birinchi 3 ga bo'linadigan sonni toping",
      initialCode: `// 3 ga bo'linadigan birinchi son
  const matrix = [[1, 2, 3], [4, 5, 6]];
  let found = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "Ikki qavat loop va break label dan foydalaning",
      checkResult: (output) => {
        return output[0] === 3;
      }
    },
    {
      id: 15,
      title: "For loop va fibonachi",
      description: "For loop yordamida fibonachi sonlarini hisoblash",
      task: "Dastlabki 8 ta fibonachi sonini toping",
      initialCode: `// Fibonachi sonlarini toping
  let fib = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "fib[i] = fib[i-1] + fib[i-2] dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '0,1,1,2,3,5,8,13';
      }
    },
    {
      id: 16,
      title: "While va palindrom",
      description: "While loop yordamida palindrom sonlarni tekshirish",
      task: "100 dan 200 gacha sonlar orasidan palindrom sonlarni toping",
      initialCode: `// Palindrom sonlarni toping
  let palindromes = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "String() va split().reverse().join() dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '101,111,121,131,141,151,161,171,181,191';
      }
    },
    {
      id: 17,
      title: "Continue va tub sonlar",
      description: "Continue operatori yordamida tub sonlarni topish",
      task: "1 dan 50 gacha bo'lgan tub sonlarni toping",
      initialCode: `// Tub sonlarni toping
  let primes = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Ichma-ich loop va continue dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,3,5,7,11,13,17,19,23,29,31,37,41,43,47';
      }
    },
    {
      id: 18,
      title: "For loop va harflar",
      description: "For loop yordamida harflar bilan ishlash",
      task: "A dan Z gacha bo'lgan harflarni toping",
      initialCode: `// A-Z harflarini toping
  let letters = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "String.fromCharCode() dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join('') === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
    },
    {
      id: 19,
      title: "While va geometrik progressiya",
      description: "While loop yordamida geometrik progressiya hisoblash",
      task: "3 ning darajalarini 1000 dan oshmaguncha hisoblang",
      initialCode: `// 3 ning darajalarini toping
  let sequence = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "while(current <= 1000) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '3,9,27,81,243,729';
      }
    },
    {
      id: 20,
      title: "Break va array qidirish",
      description: "Break operatori yordamida massivda element qidirish",
      task: "Berilgan massivdan 'JavaScript' so'zi birinchi marta kelgan indeksni toping",
      initialCode: `// JavaScript so'zi indeksini toping
  const arr = ['HTML', 'CSS', 'JavaScript', 'Python', 'JavaScript'];
  let firstIndex = -1;
  // Kodingizni shu yerda yozing
  `,
      hint: "if(arr[i] === 'JavaScript') break; dan foydalaning",
      checkResult: (output) => {
        return output[0] === 2;
      }
    },
    {
      id: 21,
      title: "Ichma-ich loop va pattern",
      description: "Ichma-ich loop yordamida pattern yaratish",
      task: "5x5 o'lchamli shaxmat doskasi pattern yarating (1 va 0 bilan)",
      initialCode: `// Shaxmat doskasi patterni
  let pattern = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "Ikki qavat loop va (i+j) % 2 dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 25;
      }
    },
    {
      id: 22,
      title: "For loop va faktorial",
      description: "For loop yordamida faktorial hisoblash",
      task: "Berilgan sonning faktorialini hisoblang (n = 5)",
      initialCode: `// 5! ni hisoblang
  let factorial = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "for(let i = 1; i <= 5; i++) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 120;
      }
    },
    {
      id: 23,
      title: "Continue va juft indekslar",
      description: "Continue operatori yordamida juft indekslarni filtrlash",
      task: "Massivning faqat juft indeksdagi elementlarini toping",
      initialCode: `// Juft indeksdagi elementlar
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  let evenIndexed = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(i % 2 !== 0) continue; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === 'a,c,e';
      }
    },
    {
      id: 24,
      title: "While va raqamlar yig'indisi",
      description: "While loop yordamida raqamlar yig'indisini hisoblash",
      task: "Berilgan sonning raqamlari yig'indisini toping (n = 12345)",
      initialCode: `// Raqamlar yig'indisi
  let number = 12345;
  let sum = 0;
  // Kodingizni shu yerda yozing
  `,
      hint: "while(number > 0) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 15;
      }
    },
    {
      id: 25,
      title: "For...of va string filter",
      description: "For...of loop yordamida stringni filtrlash",
      task: "Berilgan stringdan raqamlarni ajratib oling",
      initialCode: `// Raqamlarni ajrating
  const str = 'h3ll0 w0rld';
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "isNaN() dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '3,0,0';
      }
    },
    {
      id: 26,
      title: "Break va mukammal son",
      description: "Break operatori yordamida mukammal sonni tekshirish",
      task: "1 dan 100 gacha sonlar orasidan birinchi mukammal sonni toping",
      initialCode: `// Birinchi mukammal son
  let perfect = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "Mukammal son o'z bo'luvchilari yig'indisiga teng bo'ladi",
      checkResult: (output) => {
        return output[0] === 6;
      }
    },
    {
      id: 27,
      title: "Ichma-ich loop va ko'paytma",
      description: "Ichma-ich loop yordamida ko'paytma hisoblash",
      task: "3x3 matritsa elementlari ko'paytmasini hisoblang",
      initialCode: `// Matritsa elementlari ko'paytmasi
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let product = 1;
  // Kodingizni shu yerda yozing
  `,
      hint: "Ikki qavat loop ishlatish kerak",
      checkResult: (output) => {
        return output[0] === 362880;
      }
    },
    {
      id: 28,
      title: "Continue va so'z uzunligi",
      description: "Continue operatori yordamida so'zlarni filtrlash",
      task: "Berilgan so'zlar massividan 5 harfdan uzun so'zlarni toping",
      initialCode: `// 5 harfdan uzun so'zlar
  const words = ['apple', 'banana', 'kiwi', 'strawberry', 'fig'];
  let longWords = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if(words[i].length <= 5) continue; dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === 'banana,strawberry';
      }
    },
    {
      id: 29,
      title: "While va binary",
      description: "While loop yordamida binary sonni hisoblash",
      task: "Berilgan sonni binary formatga o'tkazing (n = 25)",
      initialCode: `// Binary formatga o'tkazing
  let number = 25;
  let binary = '';
  // Kodingizni shu yerda yozing
  `,
      hint: "while(number > 0) dan foydalaning",
      checkResult: (output) => {
        return output[0] === '11001';
      }
    },
    {
      id: 30,
      title: "Murakkab loop vazifa",
      description: "Barcha loop turlarini birgalikda qo'llash",
      task: "100 dan 200 gacha sonlar orasidan 3 ga ham, 5 ga ham bo'linadigan, lekin 15 ga bo'linmaydigan sonlarni toping",
      initialCode: `// Shartga mos sonlarni toping
  let numbers = [];
  // Kodingizni shu yerda yozing
  `,
      hint: "if((i % 3 === 0 && i % 5 === 0) && i % 15 !== 0) dan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 0;
      }
    }
  ];
  
  export default practiceChallenge7;
const practiceDeclareFunctions = [
    {
      id: 1,
      title: "Funksiya e'lon qilish",
      description: "Function declaration sintaksisi bilan ishlash",
      task: "sayHello nomli funksiya yarating, u 'Hello World!' qaytarsin",
      initialCode: `// Funksiya yarating
  function sayHello() {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return 'Hello World!' dan foydalaning",
      checkResult: (output) => {
        return output[0] === 'Hello World!';
      }
    },
    {
      id: 2,
      title: "Parametrli funksiya",
      description: "Funksiyaga parametr uzatish",
      task: "Ikkita sonni qo'shadigan add nomli funksiya yarating",
      initialCode: `// Qo'shish funksiyasi
  function add(a, b) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return a + b dan foydalaning",
      checkResult: (output) => {
        return output[0] === 7; // Test case: add(3,4)
      }
    },
    {
      id: 3,
      title: "Ko'p parametrli funksiya",
      description: "Funksiyaga bir nechta parametr uzatish",
      task: "Uchta sonning o'rtachasini hisoblaydigan getAverage nomli funksiya yarating",
      initialCode: `// O'rtacha qiymatni hisoblash
  function getAverage(a, b, c) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return (a + b + c) / 3 dan foydalaning",
      checkResult: (output) => {
        return output[0] === 4; // Test case: getAverage(3,4,5)
      }
    },
    {
      id: 4,
      title: "Qiymat qaytarish",
      description: "Funksiyadan qiymat qaytarish",
      task: "Berilgan sonning juft yoki toqligini tekshiruvchi isEven funksiyasini yarating",
      initialCode: `// Juft sonni tekshirish
  function isEven(number) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return number % 2 === 0 dan foydalaning",
      checkResult: (output) => {
        return output[0] === true; // Test case: isEven(4)
      }
    },
    {
      id: 5,
      title: "Default parametrlar",
      description: "Funksiyada default parametrlardan foydalanish",
      task: "Greeting xabarini yaratuvchi funksiya yarating, default ism 'Guest' bo'lsin",
      initialCode: `// Default parametrli funksiya
  function greet(name = 'Guest') {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return \`Hello, \${name}!\` dan foydalaning",
      checkResult: (output) => {
        return output[0] === 'Hello, Guest!';
      }
    },
    {
      id: 6,
      title: "Rekursiv funksiya",
      description: "Rekursiv funksiyalar bilan ishlash",
      task: "Berilgan sonning faktorialini hisoblovchi factorial funksiyasini yarating",
      initialCode: `// Faktorial hisoblash
  function factorial(n) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return n <= 1 ? 1 : n * factorial(n-1) dan foydalaning",
      checkResult: (output) => {
        return output[0] === 120; // Test case: factorial(5)
      }
    },
    {
      id: 7,
      title: "Funksiya scope",
      description: "Funksiya ichidagi o'zgaruvchilar scope'i",
      task: "counter funksiyasini yarating, u har chaqirilganda 1 ga oshsin",
      initialCode: `// Counter funksiyasi
  let count = 0;
  function increment() {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return ++count dan foydalaning",
      checkResult: (output) => {
        return output[0] === 1;
      }
    },
    {
      id: 8,
      title: "Funksiya parametrlari",
      description: "Funksiya parametrlarini tekshirish",
      task: "Ikkita son parametrini tekshirib, kattasini qaytaruvchi max funksiyani yarating",
      initialCode: `// Katta sonni topish
  function max(a, b) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return a > b ? a : b dan foydalaning",
      checkResult: (output) => {
        return output[0] === 5; // Test case: max(3,5)
      }
    },
    {
      id: 9,
      title: "Array bilan ishlash",
      description: "Funksiyaga array uzatish",
      task: "Array elementlari yig'indisini hisoblovchi sum funksiyasini yarating",
      initialCode: `// Array yig'indisi
  function sum(arr) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 15; // Test case: sum([1,2,3,4,5])
      }
    },
    {
      id: 10,
      title: "String qaytarish",
      description: "Funksiyadan string qaytarish",
      task: "Berilgan so'zni teskari o'giradigan reverse funksiyasini yarating",
      initialCode: `// So'zni teskari o'girish
  function reverse(str) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "split('').reverse().join('') dan foydalaning",
      checkResult: (output) => {
        return output[0] === 'olleh'; // Test case: reverse('hello')
      }
    }
  ];
  
  export default practiceDeclareFunctions;
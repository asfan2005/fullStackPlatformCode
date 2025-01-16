const practiceRecapChallenge9 = [
    {
      id: 1,
      title: "Funksiya e'lon qilish",
      description: "Function declaration usuli",
      task: "sayHello nomli funksiya yarating, u 'Hello World' ni qaytarsin",
      initialCode: `// Function declaration
  function sayHello() {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return kalit so'zidan foydalaning",
      checkResult: (output) => output[0] === "Hello World"
    },
    {
      id: 2,
      title: "Function Expression",
      description: "O'zgaruvchiga funksiya tayinlash",
      task: "multiply nomli funksiya expression yarating, u 2 ta sonni ko'paytirsin",
      initialCode: `// Function expression
  const multiply = // Kodingizni shu yerda yozing`,
      hint: "const multiply = function(a, b) {...}",
      checkResult: (output) => output[0] === 20 // Test: multiply(4, 5)
    },
    {
      id: 3,
      title: "Arrow Function",
      description: "O'q funksiyalar bilan ishlash",
      task: "square nomli arrow function yarating, u sonning kvadratini qaytarsin",
      initialCode: `// Arrow function
  const square = // Kodingizni shu yerda yozing`,
      hint: "const square = (n) => n * n",
      checkResult: (output) => output[0] === 25 // Test: square(5)
    },
    {
      id: 4,
      title: "Parametrli funksiya",
      description: "Funksiyaga parametrlar uzatish",
      task: "greet nomli funksiya yarating, u ismni qabul qilib salom bersin",
      initialCode: `// Parametrli funksiya
  function greet(name) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Parametrdan foydalaning va string qaytaring",
      checkResult: (output) => output[0] === "Salom, John!"
    },
    {
      id: 5,
      title: "Ko'p parametrli funksiya",
      description: "Bir nechta parametrlar bilan ishlash",
      task: "calculateArea nomli funksiya yarating, u to'rtburchakning yuzini hisoblasin",
      initialCode: `// Ko'p parametrli funksiya
  function calculateArea(width, height) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "width va height ni ko'paytiring",
      checkResult: (output) => output[0] === 50 // Test: calculateArea(10, 5)
    },
    {
      id: 6,
      title: "Default parametrlar",
      description: "Funksiyada default qiymatlardan foydalanish",
      task: "setVolume nomli funksiya yarating, u default qiymati 50 bo'lgan parametr qabul qilsin",
      initialCode: `// Default parametrli funksiya
function setVolume(level) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Parametrga default qiymat bering",
      checkResult: (output) => output[0] === 50 // Test: setVolume()
    },
    {
      id: 7,
      title: "Rest parametrlari",
      description: "Ko'p parametrlarni massiv sifatida qabul qilish",
      task: "sum nomli funksiya yarating, u istalgancha sonlarni qabul qilib yig'indisini qaytarsin",
      initialCode: `// Rest parametrli funksiya
function sum(...numbers) {
  // Kodingizni shu yerda yozing
}`,
      hint: "reduce metodidan foydalaning",
      checkResult: (output) => output[0] === 15 // Test: sum(1,2,3,4,5)
    },
    {
      id: 8,
      title: "Rekursiv funksiya",
      description: "O'z-o'zini chaqiruvchi funksiya",
      task: "factorial nomli rekursiv funksiya yarating",
      initialCode: `// Rekursiv funksiya
function factorial(n) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Funksiya o'zini chaqirsin",
      checkResult: (output) => output[0] === 120 // Test: factorial(5)
    },
    {
      id: 9,
      title: "Callback funksiya",
      description: "Funksiyani argument sifatida uzatish",
      task: "processArray nomli funksiya yarating, u massiv va callback qabul qilsin",
      initialCode: `// Callback funksiya
function processArray(arr, callback) {
  // Kodingizni shu yerda yozing
}`,
      hint: "map metodidan foydalaning",
      checkResult: (output) => output[0].toString() === [2,4,6,8,10].toString()
    },
    {
      id: 10,
      title: "Closure",
      description: "Ichki funksiya va tashqi o'zgaruvchilar",
      task: "counter nomli funksiya yarating, u har chaqirilganda 1 ga oshuvchi hisoblagich qaytarsin",
      initialCode: `// Closure funksiya
function createCounter() {
  // Kodingizni shu yerda yozing
}`,
      hint: "Ichki o'zgaruvchi va funksiyadan foydalaning",
      checkResult: (output) => {
        const counter = output[0]();
        return counter() === 1 && counter() === 2;
      }
    },
    {
      id: 11,
      title: "IIFE (Immediately Invoked Function Expression)",
      description: "O'z-o'zini chaqiruvchi funksiya ifodasi",
      task: "IIFE yarating va u 'Hello' ni qaytarsin",
      initialCode: `// IIFE
// Kodingizni shu yerda yozing`,
      hint: "(function() { ... })() formatidan foydalaning",
      checkResult: (output) => output[0] === "Hello"
    },
    {
      id: 12,
      title: "Generator funksiya",
      description: "Generator funksiyalar bilan ishlash",
      task: "numberGenerator nomli generator yarating, u 1 dan n gacha sonlarni generatsiya qilsin",
      initialCode: `// Generator funksiya
function* numberGenerator(n) {
  // Kodingizni shu yerda yozing
}`,
      hint: "yield operatoridan foydalaning",
      checkResult: (output) => {
        const gen = output[0](3);
        return gen.next().value === 1 && gen.next().value === 2;
      }
    },
    {
      id: 13,
      title: "Async funksiya",
      description: "Asinxron funksiyalar bilan ishlash",
      task: "fetchData nomli async funksiya yarating, u ma'lumotlarni qaytarsin",
      initialCode: `// Async funksiya
async function fetchData() {
  // Kodingizni shu yerda yozing
}`,
      hint: "await dan foydalaning",
      checkResult: (output) => output[0] instanceof Promise
    },
    {
      id: 14,
      title: "Method funksiya",
      description: "Obyekt metodlari yaratish",
      task: "calculator obyekti yarating, uning add va subtract metodlari bo'lsin",
      initialCode: `// Obyekt metodlari
const calculator = {
  // Kodingizni shu yerda yozing
}`,
      hint: "Metodlarni obyekt ichida e'lon qiling",
      checkResult: (output) => output[0].add(5,3) === 8 && output[0].subtract(5,3) === 2
    },
    {
      id: 15,
      title: "Pure funksiya",
      description: "Toza funksiyalar yaratish",
      task: "pure nomli funksiya yarating, u tashqi o'zgaruvchilarni o'zgartirmasin",
      initialCode: `// Pure funksiya
function pure(x, y) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Faqat parametrlar bilan ishlang",
      checkResult: (output) => output[0](5,3) === 8
    },
    {
      id: 16,
      title: "Higher-order funksiya",
      description: "Yuqori tartibli funksiyalar",
      task: "multiply nomli funksiya yarating, u boshqa funksiyani qaytarsin",
      initialCode: `// Higher-order funksiya
function multiply(x) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Ichki funksiya qaytaring",
      checkResult: (output) => output[0](2)(3) === 6
    },
    {
      id: 17,
      title: "Currying",
      description: "Funksiyani curry qilish",
      task: "add nomli curry funksiya yarating",
      initialCode: `// Curry funksiya
function add(a) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Ichma-ich funksiyalar qaytaring",
      checkResult: (output) => output[0](1)(2)(3)() === 6
    },
    {
      id: 18,
      title: "Memoization",
      description: "Funksiya natijalarini keshlashtirish",
      task: "memoizedFib nomli funksiya yarating, u fibonacci sonlarini keshlash bilan hisoblasin",
      initialCode: `// Memoization funksiya
function memoizedFib() {
  // Kodingizni shu yerda yozing
}`,
      hint: "Obyektdan kesh sifatida foydalaning",
      checkResult: (output) => output[0](5) === 5
    },
    {
      id: 19,
      title: "Kompozitsiya",
      description: "Funksiyalarni birlashtirish",
      task: "compose nomli funksiya yarating, u funksiyalarni birlashtirsin",
      initialCode: `// Kompozitsiya funksiya
function compose(...fns) {
  // Kodingizni shu yerda yozing
}`,
      hint: "reduce metodidan foydalaning",
      checkResult: (output) => output[0](x => x+1, x => x*2)(5) === 11
    },
    {
      id: 20,
      title: "Dekorator",
      description: "Funksiyani o'zgartirish",
      task: "logger nomli dekorator yarating, u funksiya natijasini logga yozsin",
      initialCode: `// Dekorator funksiya
function logger(fn) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Wrapper funksiya qaytaring",
      checkResult: (output) => typeof output[0](() => {}) === 'function'
    },
    {
      id: 21,
      title: "Promise funksiya",
      description: "Promise qaytaruvchi funksiya",
      task: "delay nomli funksiya yarating, u promise qaytarsin",
      initialCode: `// Promise funksiya
function delay(ms) {
  // Kodingizni shu yerda yozing
}`,
      hint: "new Promise dan foydalaning",
      checkResult: (output) => output[0](1000) instanceof Promise
    },
    {
      id: 22,
      title: "Funksiya parametrlari validatsiyasi",
      description: "Parametrlarni tekshirish",
      task: "divide nomli funksiya yarating, u nolga bo'lishni tekshirsin",
      initialCode: `// Validatsiya funksiya
function divide(a, b) {
  // Kodingizni shu yerda yozing
}`,
      hint: "if dan foydalaning",
      checkResult: (output) => {
        try {
          output[0](10,0);
          return false;
        } catch {
          return true;
        }
      }
    },
    {
      id: 23,
      title: "Method chaining",
      description: "Metodlarni zanjir qilib chaqirish",
      task: "Calculator klassi yarating, metodlarini zanjir qilib chaqirish mumkin bo'lsin",
      initialCode: `// Method chaining
class Calculator {
  // Kodingizni shu yerda yozing
}`,
      hint: "this ni qaytaring",
      checkResult: (output) => {
        const calc = new output[0]();
        return calc.add(5).multiply(2).getResult() === 10;
      }
    },
    {
      id: 24,
      title: "Event handling funksiya",
      description: "Hodisalarni qayta ishlash",
      task: "addEventListener wrapper funksiyasini yarating",
      initialCode: `// Event handling
function addEventListenerWrapper(element, event, handler) {
  // Kodingizni shu yerda yozing
}`,
      hint: "try-catch dan foydalaning",
      checkResult: (output) => typeof output[0] === 'function'
    },
    {
      id: 25,
      title: "Funksiya fabrikasi",
      description: "Funksiyalar yaratuvchi funksiya",
      task: "createMultiplier nomli funksiya yarating, u ko'paytiruvchi funksiya qaytarsin",
      initialCode: `// Funksiya fabrikasi
function createMultiplier(factor) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Yangi funksiya qaytaring",
      checkResult: (output) => output[0](3)(4) === 12
    },
    {
      id: 26,
      title: "Funksiya kompozitsiyasi",
      description: "Funksiyalarni ketma-ket bajarish",
      task: "pipe nomli funksiya yarating, u funksiyalarni chapdan o'ngga bajarsin",
      initialCode: `// Funksiya kompozitsiyasi
function pipe(...fns) {
  // Kodingizni shu yerda yozing
}`,
      hint: "reduce metodidan foydalaning",
      checkResult: (output) => output[0](x => x+1, x => x*2)(5) === 12
    },
    {
      id: 27,
      title: "Partial application",
      description: "Funksiyani qisman qo'llash",
      task: "partial nomli funksiya yarating",
      initialCode: `// Partial application
function partial(fn, ...args) {
  // Kodingizni shu yerda yozing
}`,
      hint: "bind yoki closure dan foydalaning",
      checkResult: (output) => output[0]((a,b,c) => a+b+c, 1,2)(3) === 6
    },
    {
      id: 28,
      title: "Throttle funksiya",
      description: "Funksiya chaqiruvlarini cheklash",
      task: "throttle nomli funksiya yarating",
      initialCode: `// Throttle funksiya
function throttle(fn, delay) {
  // Kodingizni shu yerda yozing
}`,
      hint: "setTimeout dan foydalaning",
      checkResult: (output) => typeof output[0](() => {}, 1000) === 'function'
    },
    {
      id: 29,
      title: "Debounce funksiya",
      description: "Funksiya chaqiruvlarini kechiktirish",
      task: "debounce nomli funksiya yarating",
      initialCode: `// Debounce funksiya
function debounce(fn, delay) {
  // Kodingizni shu yerda yozing
}`,
      hint: "clearTimeout dan foydalaning",
      checkResult: (output) => typeof output[0](() => {}, 1000) === 'function'
    },
    {
      id: 30,
      title: "Once funksiya",
      description: "Funksiyani bir marta bajarish",
      task: "once nomli funksiya yarating, u funksiyani faqat bir marta bajartirsin",
      initialCode: `// Once funksiya
function once(fn) {
  // Kodingizni shu yerda yozing
}`,
      hint: "Closure dan foydalaning",
      checkResult: (output) => {
        const f = output[0](() => 1);
        return f() === 1 && f() === undefined;
      }
    }
  ];
  
  export default practiceRecapChallenge9;
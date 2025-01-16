const practiceReturn = [
    {
      id: 1,
      title: "Oddiy return",
      description: "Funksiyadan qiymat qaytarish",
      task: "Berilgan sonni 2 ga ko'paytirib qaytaruvchi multiplyByTwo funksiyasini yarating",
      initialCode: `// Sonni 2 ga ko'paytirish
  function multiplyByTwo(num) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "return operatoridan foydalaning",
      checkResult: (output) => {
        return output[0] === 10; // Test case: multiplyByTwo(5)
      }
    },
    {
      id: 2,
      title: "Shartli return",
      description: "Shartga qarab qiymat qaytarish",
      task: "Berilgan son musbat bo'lsa true, aks holda false qaytaruvchi isPositive funksiyasini yarating",
      initialCode: `// Musbat sonni tekshirish
  function isPositive(num) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "if/else va return dan foydalaning",
      checkResult: (output) => {
        return output[0] === true; // Test case: isPositive(5)
      }
    },
    {
      id: 3,
      title: "Ko'p qiymatli return",
      description: "Bir nechta qiymatni obyekt ko'rinishida qaytarish",
      task: "Berilgan sonning kvadrati va kubini obyekt ko'rinishida qaytaruvchi getPowers funksiyasini yarating",
      initialCode: `// Sonning darajalarini hisoblash
  function getPowers(num) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Obyekt qaytaring: { square: ..., cube: ... }",
      checkResult: (output) => {
        return output[0].square === 4 && output[0].cube === 8; // Test case: getPowers(2)
      }
    },
    {
      id: 4,
      title: "Array return",
      description: "Massiv qaytarish",
      task: "1 dan n gacha bo'lgan sonlar massivini qaytaruvchi createRange funksiyasini yarating",
      initialCode: `// Sonlar qatorini yaratish
  function createRange(n) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Array.from() yoki for loop dan foydalaning",
      checkResult: (output) => {
        return output[0].length === 5 && output[0][4] === 5; // Test case: createRange(5)
      }
    },
    {
      id: 5,
      title: "Early return",
      description: "Funksiyani erta tugatish",
      task: "Agar argument 0 dan kichik bo'lsa erta return qiladigan, aks holda sonning faktorialini hisoblaydigan factorial funksiyasini yarating",
      initialCode: `// Faktorialni hisoblash
  function factorial(n) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Manfiy son uchun early return qo'llang",
      checkResult: (output) => {
        return output[0] === 24; // Test case: factorial(4)
      }
    },
    {
      id: 6,
      title: "Function return",
      description: "Funksiya qaytarish",
      task: "Berilgan songa ko'paytiruvchi funksiya qaytaruvchi multiplier funksiyasini yarating",
      initialCode: `// Ko'paytiruvchi funksiya
  function multiplier(x) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Ichki funksiya qaytaring",
      checkResult: (output) => {
        return output[0](5) === 25; // Test case: multiplier(5)(5)
      }
    },
    {
      id: 7,
      title: "Promise return",
      description: "Promise qaytarish",
      task: "Berilgan vaqtdan keyin resolve bo'ladigan promise qaytaruvchi delay funksiyasini yarating",
      initialCode: `// Kechikish (delay)
  function delay(ms) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "new Promise() dan foydalaning",
      checkResult: (output) => {
        return output[0] instanceof Promise; // Test case: delay(1000)
      }
    },
    {
      id: 8,
      title: "Generator return",
      description: "Generator funksiyadan return",
      task: "Berilgan songacha fibonachi sonlarini generatsiya qiluvchi fibonacci funksiyasini yarating",
      initialCode: `// Fibonachi generatori
  function* fibonacci(n) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "yield operatoridan foydalaning",
      checkResult: (output) => {
        const result = [...output[0]];
        return result[4] === 5; // Test case: fibonacci(5)
      }
    },
    {
      id: 9,
      title: "Recursive return",
      description: "Rekursiv funksiyadan return",
      task: "Berilgan sonni raqamlari yig'indisini rekursiv hisoblaydigan sumDigits funksiyasini yarating",
      initialCode: `// Raqamlar yig'indisi
  function sumDigits(num) {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Rekursiv chaqiruv va return ishlating",
      checkResult: (output) => {
        return output[0] === 6; // Test case: sumDigits(123)
      }
    },
    {
      id: 10,
      title: "Chainable return",
      description: "Zanjirli metodlar yaratish",
      task: "Zanjirli hisoblash imkonini beruvchi calculator obyektini qaytaruvchi createCalculator funksiyasini yarating",
      initialCode: `// Zanjirli kalkulyator
  function createCalculator() {
    // Kodingizni shu yerda yozing
  }`,
      hint: "Har bir metodda this ni qaytaring",
      checkResult: (output) => {
        return output[0].add(5).subtract(2).getValue() === 3; // Test case
      }
    }
  ];
  
  export default practiceReturn;
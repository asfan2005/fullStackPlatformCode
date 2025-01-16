const practiceSix = [
    // ARRAYS (1-10)
    {
      id: 1,
      title: "Massiv yaratish",
      description: "Bo'sh massiv yaratish va elementlar qo'shish",
      task: "Bo'sh massiv yarating va unga 5 ta son qo'shing (1 dan 5 gacha)",
      initialCode: `// Bo'sh massiv yarating va push() metodi bilan elementlar qo'shing
  // Kodingizni shu yerda yozing
  `,
      hint: "push() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 5;
      }
    },
    {
      id: 2,
      title: "Massiv elementlarini qo'shish",
      description: "Massiv elementlari yig'indisini hisoblash",
      task: "Berilgan massiv elementlari yig'indisini hisoblang",
      initialCode: `let numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 15;
      }
    },
    {
      id: 3,
      title: "Massivni filtrlash",
      description: "Juft sonlarni filtrlash",
      task: "Massivdan faqat juft sonlarni ajratib oling",
      initialCode: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Kodingizni shu yerda yozing
  `,
      hint: "filter() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].every(num => num % 2 === 0);
      }
    },
    {
      id: 4,
      title: "Massivni o'zgartirish",
      description: "Har bir elementni 2 ga ko'paytirish",
      task: "Massivning har bir elementini 2 ga ko'paytirib, yangi massiv qaytaring",
      initialCode: `let numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "map() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '2,4,6,8,10';
      }
    },
    {
      id: 5,
      title: "Massivni saralash",
      description: "Massivni o'sish tartibida saralash",
      task: "Sonlar massivini o'sish tartibida saralang",
      initialCode: `let numbers = [5, 2, 8, 1, 9];
  // Kodingizni shu yerda yozing
  `,
      hint: "sort() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].join(',') === '1,2,5,8,9';
      }
    },
    {
      id: 6,
      title: "Massiv elementlarini qidirish",
      description: "Element indeksini topish",
      task: "Massivdan 7 sonining indeksini toping",
      initialCode: `let numbers = [1, 3, 5, 7, 9, 11];
  // Kodingizni shu yerda yozing
  `,
      hint: "indexOf() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 3;
      }
    },
    {
      id: 7,
      title: "Massivni tekshirish",
      description: "Massiv elementlarini tekshirish",
      task: "Barcha elementlar 10 dan katta ekanligini tekshiring",
      initialCode: `let numbers = [12, 15, 18, 11, 13];
  // Kodingizni shu yerda yozing
  `,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'boolean';
      }
    },
    {
      id: 8,
      title: "Massivlarni birlashtirish",
      description: "Ikkita massivni birlashtirish",
      task: "Ikkita massivni birlashtirib, yangi massiv hosil qiling",
      initialCode: `let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  // Kodingizni shu yerda yozing
  `,
      hint: "concat() yoki spread operatoridan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 6;
      }
    },
    {
      id: 9,
      title: "Massiv elementlarini o'chirish",
      description: "Ma'lum indeksdan elementlarni o'chirish",
      task: "2-indeksdan boshlab 2 ta elementni o'chiring",
      initialCode: `let numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "splice() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 3;
      }
    },
    {
      id: 10,
      title: "Massiv elementlarini almashtirish",
      description: "Birinchi va oxirgi elementlarni almashtirish",
      task: "Massivning birinchi va oxirgi elementlari o'rnini almashtiring",
      initialCode: `let arr = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "Vaqtinchalik o'zgaruvchidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0][0] === 5 && output[0][4] === 1;
      }
    },
  
    // OBJECTS (11-20)
    {
      id: 11,
      title: "Obyekt yaratish",
      description: "Shaxs ma'lumotlarini saqlash",
      task: "Ism, yosh va kasb ma'lumotlarini saqlovchi obyekt yarating",
      initialCode: `// Obyekt yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "Obyekt literal sintaksisidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'object' && 'ism' in output[0] && 'yosh' in output[0] && 'kasb' in output[0];
      }
    },
    {
      id: 12,
      title: "Obyekt metodlari",
      description: "Obyektga metod qo'shish",
      task: "Shaxs obyektiga to'liq ismni qaytaruvchi metod qo'shing",
      initialCode: `let person = {
    firstName: "John",
    lastName: "Doe"
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "fullName metodini qo'shing",
      checkResult: (output) => {
        return typeof output[0].fullName === 'function' && output[0].fullName() === 'John Doe';
      }
    },
    {
      id: 13,
      title: "Obyekt kalitlari",
      description: "Obyekt kalitlarini olish",
      task: "Obyektning barcha kalitlarini massiv ko'rinishida qaytaring",
      initialCode: `let user = {
    name: "John",
    age: 30,
    city: "New York"
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "Object.keys() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 3;
      }
    },
    {
      id: 14,
      title: "Obyekt qiymatlari",
      description: "Obyekt qiymatlarini olish",
      task: "Obyektning barcha qiymatlarini massiv ko'rinishida qaytaring",
      initialCode: `let user = {
    name: "John",
    age: 30,
    city: "New York"
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "Object.values() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 3;
      }
    },
    {
      id: 15,
      title: "Obyektni nusxalash",
      description: "Obyektning chuqur nusxasini yaratish",
      task: "Berilgan obyektning chuqur nusxasini yarating",
      initialCode: `let user = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "JSON.parse() va JSON.stringify() metodlaridan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'object' && output[0].address.city === "New York";
      }
    },
    {
      id: 16,
      title: "Obyektlarni birlashtirish",
      description: "Ikkita obyektni birlashtirish",
      task: "Ikkita obyektni birlashtirib, yangi obyekt hosil qiling",
      initialCode: `let obj1 = { a: 1, b: 2 };
  let obj2 = { c: 3, d: 4 };
  // Kodingizni shu yerda yozing
  `,
      hint: "Object.assign() yoki spread operatoridan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'object' && Object.keys(output[0]).length === 4;
      }
    },
    {
      id: 17,
      title: "Obyekt xususiyatlarini tekshirish",
      description: "Obyektda xususiyat mavjudligini tekshirish",
      task: "Obyektda 'age' xususiyati mavjudligini tekshiring",
      initialCode: `let user = {
    name: "John",
    city: "New York"
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "hasOwnProperty() metodidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'boolean';
      }
    },
    {
      id: 18,
      title: "Obyekt metodlari bilan ishlash",
      description: "Obyekt metodini chaqirish",
      task: "Kalkulyator obyekti yarating (qo'shish va ayirish metodlari bilan)",
      initialCode: `// Kalkulyator obyektini yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "add va subtract metodlarini yarating",
      checkResult: (output) => {
        return typeof output[0] === 'object' && typeof output[0].add === 'function';
      }
    },
    {
      id: 19,
      title: "Obyekt xususiyatlarini o'zgartirish",
      description: "Obyekt xususiyatlarini yangilash",
      task: "Foydalanuvchi yoshini 1 ga oshiring",
      initialCode: `let user = {
    name: "John",
    age: 25
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "age xususiyatini yangilang",
      checkResult: (output) => {
        return output[0].age === 26;
      }
    },
    {
      id: 20,
      title: "Obyektdan massivga o'tish",
      description: "Obyekt juftliklarini massivga o'tkazish",
      task: "Obyekt kalit-qiymat juftliklarini massivga o'tkazing",
      initialCode: `let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  // Kodingizni shu yerda yozing
  `,
      hint: "Object.entries() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 3;
      }
    },
  
    // FUNCTIONS (21-30)
    {
      id: 21,
      title: "Funksiya yaratish",
      description: "Oddiy funksiya yaratish",
      task: "Ikki sonni qo'shuvchi funksiya yarating",
      initialCode: `// Funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "return kalit so'zidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'function' && output[0](2, 3) === 5;
      }
    },
    {
      id: 22,
      title: "Strelkali funksiya",
      description: "Strelkali funksiya yaratish",
      task: "Sonning kvadratini hisoblovchi strelkali funksiya yarating",
      initialCode: `// Strelkali funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "Arrow function sintaksisidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'function' && output[0](4) === 16;
      }
    },
    {
      id: 23,
      title: "Funksiya parametrlari",
      description: "Ko'p parametrli funksiya",
      task: "Uchta sonning o'rtachasini hisoblovchi funksiya yarating",
      initialCode: `// Funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "Parametrlarni qo'shib, 3 ga bo'ling",
      checkResult: (output) => {
        return typeof output[0] === 'function' && output[0](1, 2, 3) === 2;
      }
    },
    {
      id: 24,
      title: "Rekursiv funksiya",
      description: "Rekursiv funksiya yaratish",
      task: "Sonning faktorialini hisoblovchi rekursiv funksiya yarating",
      initialCode: `// Rekursiv funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "Funksiya o'zini chaqirishi kerak",
      checkResult: (output) => {
        return typeof output[0] === 'function' && output[0](5) === 120;
      }
    },
    {
      id: 25,
      title: "Callback funksiya",
      description: "Callback funksiyadan foydalanish",
      task: "Massivning har bir elementiga callback funksiyani qo'llovchi funksiya yarating",
      initialCode: `// forEach funksiyasini yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "Callback funksiyani har bir element uchun chaqiring",
      checkResult: (output) => {
        return typeof output[0] === 'function';
      }
    },
    {
      id: 26,
      title: "Funksiya qaytaruvchi funksiya",
      description: "Yangi funksiya qaytarish",
      task: "Sonni ko'paytiruvchi funksiya qaytaruvchi funksiya yarating",
      initialCode: `// Funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "Ichki funksiya qaytaring",
      checkResult: (output) => {
        return typeof output[0] === 'function' && output[0](2)(3) === 6;
      }
    },
    {
      id: 27,
      title: "Funksiya parametrlari tekshirish",
      description: "Parametrlarni tekshirish",
      task: "Parametrlar to'g'ri kiritilganligini tekshiruvchi funksiya yarating",
      initialCode: `// Funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "typeof operatoridan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'function';
      }
    },
    {
      id: 28,
      title: "IIFE (Immediately Invoked Function Expression)",
      description: "O'z-o'zini chaqiruvchi funksiya",
      task: "O'z-o'zini chaqiruvchi funksiya yarating va natijani qaytaring",
      initialCode: `// IIFE yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "(function(){})() sintaksisidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'number';
      }
    },
    {
      id: 29,
      title: "Generator funksiya",
      description: "Generator funksiya yaratish",
      task: "Juft sonlar generatorini yarating",
      initialCode: `// Generator funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "function* sintaksisidan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'function' && output[0]().next().value % 2 === 0;
      }
    },
    {
      id: 30,
      title: "Funksiya dekoratori",
      description: "Funksiyani dekoratsiya qilish",
      task: "Funksiya bajarilish vaqtini o'lchovchi dekorator yarating",
      initialCode: `// Dekorator funksiya yarating
  // Kodingizni shu yerda yozing
  `,
      hint: "console.time() va console.timeEnd() dan foydalaning",
      checkResult: (output) => {
        return typeof output[0] === 'function';
      }
    }
  ];
  
  export default practiceSix;
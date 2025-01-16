const practiceArrayBasics = [
    {
      id: 1,
      title: "Array yaratish",
      description: "Bo'sh massiv yaratish",
      task: "Bo'sh massiv yarating va uni result o'zgaruvchisiga saqlang",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Bo'sh massiv yaratish uchun [] dan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return Array.isArray(arr) && arr.length === 0;
      }
    },
    {
      id: 2,
      title: "Array elementlari",
      description: "Sonli massiv yaratish",
      task: "1, 2, 3 sonlaridan iborat massiv yarating",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Massivni [1, 2, 3] ko'rinishida yarating",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3';
      }
    },
    {
      id: 3,
      title: "Array uzunligi",
      description: "Massiv uzunligini aniqlash",
      task: "Berilgan numbers massivining uzunligini toping",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "length xususiyatidan foydalaning",
      checkResult: (output) => {
        return Number(output[0]) === 5;
      }
    },
    {
      id: 4,
      title: "Array elementiga murojaat",
      description: "Massiv elementini topish",
      task: "numbers massivining 3-elementini toping (0 dan boshlab hisoblang)",
      initialCode: `const numbers = [10, 20, 30, 40, 50];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Massiv indeksi 0 dan boshlanadi",
      checkResult: (output) => {
        return Number(output[0]) === 40;
      }
    },
    {
      id: 5,
      title: "push() metodi",
      description: "Massivga element qo'shish",
      task: "numbers massiviga 6 sonini oxiridan qo'shing",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "push() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4,5,6';
      }
    },
    {
      id: 6,
      title: "pop() metodi",
      description: "Massivdan oxirgi elementni o'chirish",
      task: "numbers massividan oxirgi elementni o'chirib tashlang",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "pop() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4';
      }
    },
    {
      id: 7,
      title: "unshift() metodi",
      description: "Massiv boshiga element qo'shish",
      task: "numbers massivi boshiga 0 sonini qo'shing",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "unshift() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '0,1,2,3,4,5';
      }
    },
    {
      id: 8,
      title: "shift() metodi",
      description: "Massiv boshidan element o'chirish",
      task: "numbers massividan birinchi elementni o'chirib tashlang",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "shift() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,3,4,5';
      }
    },
    {
      id: 9,
      title: "Array elementini o'zgartirish",
      description: "Massiv elementini yangilash",
      task: "numbers massivining 2-elementini 10 ga o'zgartiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "To'g'ridan-to'g'ri indeks orqali o'zgartiring",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,10,3,4,5';
      }
    },
    {
      id: 10,
      title: "Array uzunligini o'zgartirish",
      description: "Massiv uzunligini kamaytirish",
      task: "numbers massivini uzunligini 3 ta elementgacha qisqartiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "length xususiyatidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3';
      }
    },
    {
      id: 11,
      title: "Array nusxasini olish",
      description: "Massivdan nusxa olish",
      task: "numbers massividan nusxa oling (slice metodi yordamida)",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "slice() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 12,
      title: "Array qismini olish",
      description: "Massivdan ma'lum qismni ajratib olish",
      task: "numbers massividan 2-elementdan 4-elementgacha bo'lgan qismni ajratib oling",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "slice(1, 4) metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,3,4';
      }
    },
    {
      id: 13,
      title: "splice() metodi",
      description: "Massivdan element o'chirish",
      task: "numbers massividan 2-elementdan boshlab 2 ta elementni o'chirib tashlang",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "splice(2, 2) metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,5';
      }
    },
    {
      id: 14,
      title: "Array elementlarini birlashtirish",
      description: "Massiv elementlarini string qilib birlashtirish",
      task: "numbers massivi elementlarini vergul bilan ajratilgan string ko'rinishiga o'tkazing",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "join() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === '1,2,3,4,5';
      }
    },
    {
      id: 15,
      title: "Array elementlarini saralash",
      description: "Massivni o'sish tartibida saralash",
      task: "numbers massivini o'sish tartibida saralang",
      initialCode: `const numbers = [5, 2, 8, 1, 9];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "sort() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,5,8,9';
      }
    },
    {
      id: 16,
      title: "Array elementlarini teskari tartibda joylashtirish",
      description: "Massiv elementlarini teskari tartibda joylashtirish",
      task: "numbers massivi elementlarini teskari tartibda joylashtiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reverse() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '5,4,3,2,1';
      }
    },
    {
      id: 17,
      title: "Array elementini qidirish",
      description: "Massivda element mavjudligini tekshirish",
      task: "numbers massivida 3 soni borligini tekshiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "includes() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 18,
      title: "Array elementining indeksini topish",
      description: "Massivda element indeksini topish",
      task: "numbers massivida 4 soni turgan indeksni toping",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "indexOf() metodidan foydalaning",
      checkResult: (output) => {
        return Number(output[0]) === 3;
      }
    },
    {
      id: 19,
      title: "Array elementlarini filtrlash",
      description: "Massivdan shartga mos elementlarni ajratish",
      task: "numbers massividan juft sonlarni ajratib oling",
      initialCode: `const numbers = [1, 2, 3, 4, 5, 6];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,4,6';
      }
    },
    {
      id: 20,
      title: "Array elementlarini o'zgartirish",
      description: "Har bir element ustida amal bajarish",
      task: "numbers massividagi har bir elementni 2 ga ko'paytiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "map() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,4,6,8,10';
      }
    },
    {
      id: 21,
      title: "Array elementlari yig'indisi",
      description: "Massiv elementlari yig'indisini hisoblash",
      task: "numbers massividagi sonlar yig'indisini hisoblang",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        return Number(output[0]) === 15;
      }
    },
    {
      id: 22,
      title: "Array elementlarini tekshirish",
      description: "Barcha elementlar shartni qanoatlantirishini tekshirish",
      task: "numbers massividagi barcha sonlar musbat ekanligini tekshiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 23,
      title: "Array elementlaridan birortasi",
      description: "Birorta element shartni qanoatlantirishini tekshirish",
      task: "numbers massivida 5 dan katta son borligini tekshiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5, 6];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "some() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 24,
      title: "Ko'p o'lchovli array",
      description: "Ikki o'lchovli massiv yaratish",
      task: "2x2 o'lchamli massiv yarating: [[1,2], [3,4]]",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Massiv ichida massiv yarating",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return JSON.stringify(arr) === '[[1,2],[3,4]]';
      }
    },
    {
      id: 25,
      title: "Ko'p o'lchovli array elementi",
      description: "Ikki o'lchovli massiv elementiga murojaat",
      task: "matrix massivining 2-qatori 1-elementini oling",
      initialCode: `const matrix = [[1,2], [3,4], [5,6]];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Ikki marta indeks ishlatish kerak",
      checkResult: (output) => {
        return Number(output[0]) === 3;
      }
    },
    {
      id: 26,
      title: "Array metodlarini birlashtirish 1",
      description: "Bir nechta array metodlarini ishlatish",
      task: "numbers massividan toq sonlarni ajratib, har birini 3 ga ko'paytiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() va map() metodlarini birga ishlating",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '3,9,15';
      }
    },
    {
      id: 27,
      title: "Array metodlarini birlashtirish 2",
      description: "Murakkab array amallari",
      task: "numbers massividan 3 dan katta sonlarni ajratib, har birini 2 ga ko'paytiring va yig'indisini toping",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter(), map() va reduce() metodlarini birga ishlating",
      checkResult: (output) => {
        return Number(output[0]) === 18;
      }
    },
    {
      id: 28,
      title: "Array elementlarini almashtirish",
      description: "Massivda elementlar o'rnini almashtirish",
      task: "numbers massivining birinchi va oxirgi elementlari o'rnini almashtiring",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
      hint: "Vaqtinchalik o'zgaruvchidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '5,2,3,4,1';
      }
    },
    {
      id: 29,
      title: "Array elementlarini noyob qilish",
      description: "Massivdan takroriy elementlarni olib tashlash",
      task: "numbers massividan takroriy elementlarni olib tashlang",
      initialCode: `const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Set obyektidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 30,
      title: "Array metodlarini birlashtirish 3",
      description: "Murakkab massiv amallari",
      task: "numbers massividan juft sonlarni ajratib, har birini 2 ga ko'paytiring va yig'indisini hisoblang",
      initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter(), map() va reduce() metodlarini zanjir qilib ishlatish mumkin",
      checkResult: (output) => {
        return Number(output[0]) === 60;
      }
    }
  ];
  
  export default practiceArrayBasics;
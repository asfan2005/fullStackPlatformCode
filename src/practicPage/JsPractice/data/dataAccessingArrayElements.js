const practiceAccessingArrayElements = [
  {
    id: 1,
    title: "Array elementlariga kirish",
    description: "Massiv elementlariga indeks orqali kirish",
    task: "Berilgan fruits massivining birinchi elementini console.log() orqali chiqaring",
    initialCode: `const fruits = ['apple', 'banana', 'orange'];
// Kodingizni shu yerda yozing`,
    hint: "Massiv indeksi 0 dan boshlanadi",
    checkResult: (output) => output[0] === 'apple'
  },
  {
    id: 2,
    title: "Oxirgi elementga kirish",
    description: "Massivning oxirgi elementiga kirish",
    task: "numbers massivining oxirgi elementini console.log() orqali chiqaring",
    initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing`,
    hint: "length - 1 yoki at(-1) dan foydalaning",
    checkResult: (output) => output[0] === '5'
  },
  {
    id: 3,
    title: "Elementlarni o'zgartirish",
    description: "Massiv elementlarini indeks orqali o'zgartirish",
    task: "colors massivining ikkinchi elementini 'yellow' ga o'zgartiring",
    initialCode: `const colors = ['red', 'blue', 'green'];
// Kodingizni shu yerda yozing
console.log(colors);`,
    hint: "colors[1] = 'yellow'",
    checkResult: (output) => {
      const arr = JSON.parse(output[0]);
      return arr[1] === 'yellow';
    }
  },
  {
    id: 4,
    title: "O'rta elementga kirish",
    description: "Massivning o'rta elementiga kirish",
    task: "numbers massivining o'rta elementini console.log() orqali chiqaring",
    initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing`,
    hint: "Math.floor(numbers.length / 2) indeksdan foydalaning",
    checkResult: (output) => output[0] === '3'
  },
  {
    id: 5,
    title: "Elementlarni almashtirish",
    description: "Massivdagi ikki elementni o'zaro almashtirish",
    task: "fruits massivining birinchi va oxirgi elementlarini almashtirib qo'ying",
    initialCode: `const fruits = ['apple', 'banana', 'orange'];
// Kodingizni shu yerda yozing
console.log(fruits);`,
    hint: "Vaqtinchalik o'zgaruvchidan foydalaning",
    checkResult: (output) => {
      const arr = JSON.parse(output[0]);
      return arr[0] === 'orange' && arr[arr.length-1] === 'apple';
    }
  },
  {
    id: 6,
    title: "Element qo'shish",
    description: "Massiv oxiriga yangi element qo'shish",
    task: "numbers massivining oxiriga 6 sonini qo'shing",
    initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing
console.log(numbers);`,
    hint: "push() metodidan foydalaning",
    checkResult: (output) => {
      const arr = JSON.parse(output[0]);
      return arr[arr.length-1] === 6;
    }
  },
  {
    id: 7,
    title: "Element o'chirish",
    description: "Massivdan element o'chirish",
    task: "fruits massivining birinchi elementini o'chiring",
    initialCode: `const fruits = ['apple', 'banana', 'orange'];
// Kodingizni shu yerda yozing
console.log(fruits);`,
    hint: "shift() metodidan foydalaning",
    checkResult: (output) => {
      const arr = JSON.parse(output[0]);
      return arr[0] === 'banana';
    }
  },
  {
    id: 8,
    title: "Elementlarni kesish",
    description: "Massivdan ma'lum qismni kesib olish",
    task: "numbers massivining 2-elementidan 4-elementigacha bo'lgan qismini console.log() orqali chiqaring",
    initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing`,
    hint: "slice() metodidan foydalaning",
    checkResult: (output) => {
      const arr = JSON.parse(output[0]);
      return arr.toString() === '2,3,4';
    }
  },
  {
    id: 9,
    title: "Element qidirish",
    description: "Massivda element mavjudligini tekshirish",
    task: "fruits massivida 'banana' mavjudligini tekshiring va natijani console.log() orqali chiqaring",
    initialCode: `const fruits = ['apple', 'banana', 'orange'];
// Kodingizni shu yerda yozing`,
    hint: "includes() metodidan foydalaning",
    checkResult: (output) => output[0] === 'true'
  },
  {
    id: 10,
    title: "Element indeksini topish",
    description: "Massivda element indeksini topish",
    task: "numbers massivida 4 sonining indeksini console.log() orqali chiqaring",
    initialCode: `const numbers = [1, 2, 3, 4, 5];
// Kodingizni shu yerda yozing`,
    hint: "indexOf() metodidan foydalaning",
    checkResult: (output) => output[0] === '3'
  }
];

export default practiceAccessingArrayElements; 
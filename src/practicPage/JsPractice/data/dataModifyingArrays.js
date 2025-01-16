const practiceModifyingArrays = [
    {
      id: 1,
      title: "push() metodi",
      description: "Massiv oxiriga element qo'shish",
      task: "numbers massiviga 6 sonini qo'shing",
      initialCode: `const numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  console.log(numbers);`,
      hint: "push() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr[arr.length - 1] === 6;
      }
    },
    {
      id: 2,
      title: "pop() metodi",
      description: "Massiv oxiridan element o'chirish",
      task: "fruits massividan oxirgi elementni o'chiring",
      initialCode: `const fruits = ['apple', 'banana', 'orange'];
  // Kodingizni shu yerda yozing
  console.log(fruits);`,
      hint: "pop() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.length === 2;
      }
    },
    {
      id: 3,
      title: "Massivga element qo'shish",
      description: "Massiv boshiga element qo'shish",
      task: "sonlar massiviga 0 sonini boshiga qo'shing",
      initialCode: `const sonlar = [1, 2, 3];
  // Kodingizni shu yerda yozing
  console.log(sonlar);`,
      hint: "unshift() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr[0] === 0;
      }
    },
    {
      id: 4,
      title: "Massiv elementini o'zgartirish",
      description: "Massivning birinchi elementini o'zgartirish",
      task: "mevalar massivining birinchi elementini 'anor' ga o'zgartiring",
      initialCode: `const mevalar = ['olma', 'nok', 'uzum'];
  // Kodingizni shu yerda yozing
  console.log(mevalar);`,
      hint: "Index orqali o'zgartiring (mevalar[0] = 'anor')",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr[0] === 'anor';
      }
    },
    {
      id: 5,
      title: "Massiv uzunligi",
      description: "Massiv uzunligini topish",
      task: "massiv uzunligini consolega chiqaring",
      initialCode: `const raqamlar = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "length xususiyatidan foydalaning",
      checkResult: (output) => {
        return output[0] == 5;
      }
    },
    {
      id: 6,
      title: "Massivni birlashtirish",
      description: "Ikkita massivni birlashtirish",
      task: "ikkita massivni birlashtirib yangi massiv yarating",
      initialCode: `const arr1 = [1, 2];
  const arr2 = [3, 4];
  // Kodingizni shu yerda yozing
  `,
      hint: "concat() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.length === 4;
      }
    },
    {
      id: 7,
      title: "Massivni kesish",
      description: "Massivdan qism ajratib olish",
      task: "massivdan 2 va 3-elementlarni ajratib oling",
      initialCode: `const harflar = ['a', 'b', 'c', 'd'];
  // Kodingizni shu yerda yozing
  `,
      hint: "slice() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.length === 2 && arr[0] === 'b';
      }
    },
    {
      id: 8,
      title: "Element qidirish",
      description: "Massivda element mavjudligini tekshirish",
      task: "massivda 5 soni borligini tekshiring",
      initialCode: `const sonlar = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "includes() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 9,
      title: "Massivni tartiblash",
      description: "Massivni o'sish tartibida saralash",
      task: "sonlarni o'sish tartibida saralang",
      initialCode: `const tartibsiz = [3, 1, 4, 2];
  // Kodingizni shu yerda yozing
  `,
      hint: "sort() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr[0] === 1 && arr[3] === 4;
      }
    },
    {
      id: 10,
      title: "Massivni tekshirish",
      description: "Massiv elementlarini tekshirish",
      task: "barcha elementlar musbat sonlar ekanligini tekshiring",
      initialCode: `const numbers = [1, 2, 3, 4];
  // Kodingizni shu yerda yozing
  `,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    }
  ];
  
  export default practiceModifyingArrays;
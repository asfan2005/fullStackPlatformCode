const practiceDataChallangeThree = [
    {
      title: "Array Methods - push",
      description: "Massiv metodlari bilan ishlash",
      task: "Berilgan massivga [1, 2] yangi element qo'shing: let arr = [3, 4]. Natijani console.log() orqali chiqaring",
      hint: "push() metodi massiv oxiriga element qo'shadi",
      initialCode: `let arr = [3, 4];
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "3,4,1,2";
      }
    },
    {
      title: "Array Methods - pop",
      description: "Massiv metodlari bilan ishlash",
      task: "Berilgan massivdan oxirgi elementni olib tashlang: let arr = [1, 2, 3]. Natijani console.log() orqali chiqaring",
      hint: "pop() metodi massiv oxiridan element olib tashlaydi",
      initialCode: `let arr = [1, 2, 3];
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "1,2";
      }
    },
    {
      title: "String Methods - length",
      description: "String metodlari bilan ishlash",
      task: "'JavaScript' so'zining uzunligini toping va console.log() orqali chiqaring",
      hint: "length xossasi string uzunligini qaytaradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "10";
      }
    },
    {
      title: "String Methods - toUpperCase",
      description: "String metodlari bilan ishlash",
      task: "'hello' so'zini katta harflarga o'zgartiring va console.log() orqali chiqaring",
      hint: "toUpperCase() metodi barcha harflarni katta qiladi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "HELLO";
      }
    },
    {
      title: "Math Object - round",
      description: "Math obyekti metodlari",
      task: "3.7 sonini yaxlitlang va console.log() orqali chiqaring",
      hint: "Math.round() eng yaqin butun songa yaxlitlaydi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "4";
      }
    },
    {
      title: "Math Object - random",
      description: "Math obyekti metodlari",
      task: "1 dan 10 gacha bo'lgan tasodifiy butun son yarating va console.log() orqali chiqaring",
      hint: "Math.random() 0 dan 1 gacha son qaytaradi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        const num = Number(output[0]);
        return num >= 1 && num <= 10 && Number.isInteger(num);
      }
    },
    {
      title: "Object Properties",
      description: "Obyekt xossalari bilan ishlash",
      task: "{ name: 'John', age: 25 } obyektidan age qiymatini console.log() orqali chiqaring",
      hint: "Nuqta yoki kvadrat qavs orqali xossalarga murojaat qilish mumkin",
      initialCode: `let person = { name: 'John', age: 25 };
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "25";
      }
    },
    {
      title: "Array Filter",
      description: "Massivni filtrlash",
      task: "[1, 2, 3, 4, 5] massividan juft sonlarni ajratib oling va console.log() orqali chiqaring",
      hint: "filter() metodi shartga mos elementlarni qaytaradi",
      initialCode: `let numbers = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "2,4";
      }
    },
    {
      title: "Array Map",
      description: "Massivni o'zgartirish",
      task: "[1, 2, 3] massivining har bir elementini 2 ga ko'paytirib, natijani console.log() orqali chiqaring",
      hint: "map() metodi har bir element uchun funksiya bajaradi",
      initialCode: `let numbers = [1, 2, 3];
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "2,4,6";
      }
    },
    {
      title: "Date Object",
      description: "Sana bilan ishlash",
      task: "Joriy yilni console.log() orqali chiqaring",
      hint: "new Date() joriy sanani yaratadi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === new Date().getFullYear().toString();
      }
    },
    {
      title: "Template Literals",
      description: "Shablon satrlar",
      task: "name='John' va age=25 o'zgaruvchilaridan foydalanib 'My name is John and I am 25 years old' satrini yarating",
      hint: "Template literal uchun ` belgisidan foydalaning",
      initialCode: `let name = 'John';
  let age = 25;
  // Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0] === "My name is John and I am 25 years old";
      }
    },
    {
      title: "Error Handling",
      description: "Xatolarni qayta ishlash",
      task: "try-catch yordamida nonexistentFunction() ni chaqiring va xatoni console.log() orqali chiqaring",
      hint: "try-catch bloki xatolarni ushlash uchun ishlatiladi",
      initialCode: `// Kodingizni shu yerda yozing
  `,
      checkResult: (output) => {
        return output[0].includes("is not defined");
      }
    }
  ];
  
  export default practiceDataChallangeThree;
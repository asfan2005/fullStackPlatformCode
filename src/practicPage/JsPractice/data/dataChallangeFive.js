const practiceFive = [
    {
      id: 1,
      title: "Consolega chiqarish",
      description: "Console.log() yordamida ma'lumotlarni chiqarish",
      task: "O'zgaruvchilarni yarating va ularni console.log() yordamida chiqaring",
      initialCode: `// O'zgaruvchilar yarating va ularni console.log() da chiqaring
  let ism = "Anvar";
  let yosh = 25;
  // Kodingizni shu yerda yozing
  `,
      hint: "console.log() metodidan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'string';
      }
    },
    {
      id: 2,
      title: "Massiv elementlarini chiqarish",
      description: "For tsikli yordamida massiv elementlarini chiqarish",
      task: "Berilgan massivning har bir elementini console.log() yordamida chiqaring",
      initialCode: `let sonlar = [1, 2, 3, 4, 5];
  // Kodingizni shu yerda yozing
  `,
      hint: "for tsiklidan foydalaning",
      checkResult: (output) => {
        return output.length === 5 && typeof output[0] === 'number';
      }
    },
    {
      id: 3,
      title: "Juft sonlarni topish",
      description: "Massivdagi juft sonlarni yangi massivga saqlash",
      task: "Berilgan massivdan juft sonlarni ajratib oling",
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
      title: "Yoshni tekshirish",
      description: "If-else yordamida yoshni tekshirish",
      task: "Berilgan yoshga qarab, shaxsning voyaga yetganligini aniqlang",
      initialCode: `let yosh = 17;
  // Kodingizni shu yerda yozing
  `,
      hint: "if-else operatorlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 1 && typeof output[0] === 'string';
      }
    },
    {
      id: 5,
      title: "Massivni saralash",
      description: "Massivni o'sish tartibida saralash",
      task: "Berilgan sonlar massivini o'sish tartibida saralang",
      initialCode: `let sonlar = [5, 2, 8, 1, 9];
  // Kodingizni shu yerda yozing
  `,
      hint: "sort() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 5;
      }
    },
        {
          id: 6,
          title: "Massivni map() bilan o'zgartirish",
          description: "Massiv elementlarini ikki barobarga oshirish",
          task: "Berilgan massivning har bir elementini 2 ga ko'paytiring",
          initialCode: `let numbers = [2, 4, 6, 8, 10];
      // Kodingizni shu yerda yozing
      `,
          hint: "map() metodidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0].every((num, idx) => num === [4, 8, 12, 16, 20][idx]);
          }
        },
        {
          id: 7,
          title: "Satrni tekshirish",
          description: "Satr uzunligini tekshirish va bosh harfni olish",
          task: "Berilgan satrning uzunligini va birinchi harfini toping",
          initialCode: `let text = "JavaScript";
      // Kodingizni shu yerda yozing
      `,
          hint: "length xususiyati va charAt() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 2 && typeof output[0] === 'number' && typeof output[1] === 'string';
          }
        },
        {
          id: 8,
          title: "Sonni tekshirish",
          description: "Berilgan sonning musbat, manfiy yoki nolligini aniqlash",
          task: "Sonning musbat, manfiy yoki nolligini tekshiring",
          initialCode: `let number = -5;
      // Kodingizni shu yerda yozing
      `,
          hint: "if-else if konstruksiyasidan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && typeof output[0] === 'string';
          }
        },
        {
          id: 9,
          title: "Massiv elementlarini qo'shish",
          description: "Massiv elementlari yig'indisini hisoblash",
          task: "Berilgan massiv elementlari yig'indisini toping",
          initialCode: `let numbers = [1, 2, 3, 4, 5];
      // Kodingizni shu yerda yozing
      `,
          hint: "reduce() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && output[0] === 15;
          }
        },
        {
          id: 10,
          title: "Satrni bo'lish",
          description: "Satrni bo'sh joy bo'yicha massivga ajratish",
          task: "Berilgan satrni so'zlarga ajrating",
          initialCode: `let text = "JavaScript dasturlash tili";
      // Kodingizni shu yerda yozing
      `,
          hint: "split() metodidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0].length === 3;
          }
        },
        {
          id: 11,
          title: "Obyekt yaratish",
          description: "Shaxs haqida ma'lumotlarni obyektda saqlash",
          task: "Ism, yosh va kasb ma'lumotlarini o'z ichiga olgan obyekt yarating",
          initialCode: `// Kodingizni shu yerda yozing
      `,
          hint: "Obyekt literal sintaksisidan foydalaning",
          checkResult: (output) => {
            return typeof output[0] === 'object' && 'ism' in output[0] && 'yosh' in output[0] && 'kasb' in output[0];
          }
        },
        {
          id: 12,
          title: "Massivni teskari tartibda saralash",
          description: "Massivni kamayish tartibida saralash",
          task: "Berilgan sonlar massivini kamayish tartibida saralang",
          initialCode: `let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
      // Kodingizni shu yerda yozing
      `,
          hint: "sort() metodidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0][0] === 9;
          }
        },
        {
          id: 13,
          title: "Satrni katta harflarga o'tkazish",
          description: "Berilgan satrni katta harflarga o'tkazish",
          task: "Satrni to'liq katta harflarga o'tkazing",
          initialCode: `let text = "hello world";
      // Kodingizni shu yerda yozing
      `,
          hint: "toUpperCase() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && output[0] === "HELLO WORLD";
          }
        },
        {
          id: 14,
          title: "Massiv elementlarini birlashtirish",
          description: "Massiv elementlarini vergul bilan ajratib birlashtirish",
          task: "Berilgan massiv elementlarini vergul bilan ajratib bir satrga birlashtiring",
          initialCode: `let fruits = ["olma", "banan", "apelsin"];
      // Kodingizni shu yerda yozing
      `,
          hint: "join() metodidan foydalaning",
          checkResult: (output) => {
            return typeof output[0] === 'string' && output[0].includes(',');
          }
        },
        {
          id: 15,
          title: "Sonni yaxlitlash",
          description: "O'nlik sonni yaxlitlash",
          task: "Berilgan o'nlik sonni eng yaqin butun songacha yaxlitlang",
          initialCode: `let number = 5.7;
      // Kodingizni shu yerda yozing
      `,
          hint: "Math.round() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && output[0] === 6;
          }
        },
        {
          id: 16,
          title: "Massiv elementlarini filtrlash",
          description: "Massivdan ma'lum shartga mos elementlarni filtrlash",
          task: "5 dan katta bo'lgan sonlarni ajratib oling",
          initialCode: `let numbers = [2, 8, 4, 10, 1, 7, 3, 9];
      // Kodingizni shu yerda yozing
      `,
          hint: "filter() metodidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0].every(num => num > 5);
          }
        },
        {
          id: 17,
          title: "Satr uzunligini tekshirish",
          description: "Satr uzunligini tekshirish va xabar chiqarish",
          task: "Satr uzunligi 10 dan katta bo'lsa 'Uzun satr', aks holda 'Qisqa satr' deb chiqaring",
          initialCode: `let text = "JavaScript";
      // Kodingizni shu yerda yozing
      `,
          hint: "length xususiyati va if-else dan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && typeof output[0] === 'string';
          }
        },
        {
          id: 18,
          title: "Massiv elementlarini almashtirish",
          description: "Massivning birinchi va oxirgi elementlarini almashtirish",
          task: "Massivning birinchi va oxirgi elementlarini o'rnini almashtiring",
          initialCode: `let arr = [1, 2, 3, 4, 5];
      // Kodingizni shu yerda yozing
      `,
          hint: "Vaqtinchalik o'zgaruvchidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0][0] === 5 && output[0][4] === 1;
          }
        },
        {
          id: 19,
          title: "Sonni satrga o'tkazish",
          description: "Sonni satrga o'tkazish va raqamlar sonini hisoblash",
          task: "Berilgan sonni satrga o'tkazing va undagi raqamlar sonini hisoblang",
          initialCode: `let number = 12345;
      // Kodingizni shu yerda yozing
      `,
          hint: "toString() va length xususiyatidan foydalaning",
          checkResult: (output) => {
            return output.length === 2 && typeof output[0] === 'string' && output[1] === 5;
          }
        },
        {
          id: 20,
          title: "Massiv elementlarini dublikatlarini o'chirish",
          description: "Massivdan takrorlanuvchi elementlarni olib tashlash",
          task: "Berilgan massivdan dublikat elementlarni olib tashlang",
          initialCode: `let numbers = [1, 2, 2, 3, 3, 4, 5, 5];
      // Kodingizni shu yerda yozing
      `,
          hint: "Set obyektidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && new Set(output[0]).size === output[0].length;
          }
        },
        {
          id: 21,
          title: "Satrni teskari o'girish",
          description: "Berilgan satrni teskari tartibda yozish",
          task: "Satrni teskari tartibda yozing",
          initialCode: `let text = "JavaScript";
      // Kodingizni shu yerda yozing
      `,
          hint: "split(), reverse() va join() metodlaridan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && output[0] === "tpircSavaJ";
          }
        },
        {
          id: 22,
          title: "Massiv elementlari yig'indisi va o'rtachasi",
          description: "Massiv elementlari yig'indisi va o'rtacha qiymatini hisoblash",
          task: "Massiv elementlari yig'indisi va o'rtacha qiymatini hisoblang",
          initialCode: `let numbers = [10, 20, 30, 40, 50];
      // Kodingizni shu yerda yozing
      `,
          hint: "reduce() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 2 && output[0] === 150 && output[1] === 30;
          }
        },
        {
          id: 23,
          title: "Satrda qidirish",
          description: "Satrda so'z mavjudligini tekshirish",
          task: "Berilgan satrda 'JavaScript' so'zi mavjudligini aniqlang",
          initialCode: `let text = "Men JavaScript dasturlash tilini o'rganyapman";
      // Kodingizni shu yerda yozing
      `,
          hint: "includes() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && typeof output[0] === 'boolean';
          }
        },
        {
          id: 24,
          title: "Massivni tekshirish",
          description: "Massiv elementlari orasida manfiy son borligini tekshirish",
          task: "Massivda manfiy son mavjudligini aniqlang",
          initialCode: `let numbers = [1, -2, 3, 4, -5];
      // Kodingizni shu yerda yozing
      `,
          hint: "some() metodidan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && typeof output[0] === 'boolean';
          }
        },
        {
          id: 25,
          title: "Obyekt kalitlari va qiymatlari",
          description: "Obyekt kalitlari va qiymatlarini massivga o'tkazish",
          task: "Obyekt kalitlari va qiymatlarini alohida massivlarga o'tkazing",
          initialCode: `let person = {
        name: "John",
        age: 30,
        city: "New York"
      };
      // Kodingizni shu yerda yozing
      `,
          hint: "Object.keys() va Object.values() metodlaridan foydalaning",
          checkResult: (output) => {
            return output.length === 2 && Array.isArray(output[0]) && Array.isArray(output[1]);
          }
        },
        {
          id: 26,
          title: "Massivni qismlarga bo'lish",
          description: "Massivni berilgan o'lchamda qismlarga bo'lish",
          task: "Massivni 2 ta elementdan iborat qismlarga bo'ling",
          initialCode: `let numbers = [1, 2, 3, 4, 5, 6];
      // Kodingizni shu yerda yozing
      `,
          hint: "slice() metodidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0].length === 3;
          }
        },
        {
          id: 27,
          title: "Satrni formatlash",
          description: "Template literal yordamida satrni formatlash",
          task: "Ism va yoshni template literal yordamida satrga joylashtiring",
          initialCode: `let name = "John";
      let age = 25;
      // Kodingizni shu yerda yozing
      `,
          hint: "Template literal (\`\`) dan foydalaning",
          checkResult: (output) => {
            return output.length === 1 && typeof output[0] === 'string' && output[0].includes('John') && output[0].includes('25');
          }
        },
        {
          id: 28,
          title: "Massivlarni birlashtirish",
          description: "Ikkita massivni birlashtirish",
          task: "Ikkita berilgan massivni bitta massivga birlashtiring",
          initialCode: `let arr1 = [1, 2, 3];
      let arr2 = [4, 5, 6];
      // Kodingizni shu yerda yozing
      `,
          hint: "spread operator (...) dan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0].length === 6;
          }
        },
        {
          id: 29,
          title: "Obyektni nusxalash",
          description: "Obyektning chuqur nusxasini yaratish",
          task: "Berilgan obyektning chuqur nusxasini yarating",
          initialCode: `let obj = {
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
          id: 30,
          title: "Massiv elementlarini o'zgartirish",
          description: "Massiv elementlarini ma'lum qoidaga ko'ra o'zgartirish",
          task: "Massivdagi juft sonlarni 2 ga, toq sonlarni 3 ga ko'paytiring",
          initialCode: `let numbers = [1, 2, 3, 4, 5];
      // Kodingizni shu yerda yozing
      `,
          hint: "map() metodidan foydalaning",
          checkResult: (output) => {
            return Array.isArray(output[0]) && output[0].length === 5;
          }
        }
  ];
  
  export default practiceFive;
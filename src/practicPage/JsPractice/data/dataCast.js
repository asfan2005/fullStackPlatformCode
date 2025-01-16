const practiceCast = [
    {
      id: 1,
      title: "Sonni satrga o'tkazish",
      description: "Sonni satr turiga o'tkazishning turli usullari",
      task: "Berilgan sonni String() va toString() metodlari yordamida satrga o'tkazing",
      initialCode: `let number = 42;
  // Kodingizni shu yerda yozing
  `,
      hint: "String() va toString() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'string';
      }
    },
    {
      id: 2,
      title: "Satrni songa o'tkazish",
      description: "Satrni son turiga o'tkazishning turli usullari",
      task: "Berilgan satrni Number(), parseInt() va parseFloat() metodlari yordamida songa o'tkazing",
      initialCode: `let strNumber = "123.45";
  // Kodingizni shu yerda yozing
  `,
      hint: "Number(), parseInt() va parseFloat() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 3 && typeof output[0] === 'number';
      }
    },
    {
      id: 3,
      title: "Boolean turiga o'tkazish",
      description: "Turli qiymatlarni mantiqiy turga o'tkazish",
      task: "Berilgan qiymatlarni Boolean turiga o'tkazing",
      initialCode: `let str = "";
  let num = 0;
  let obj = null;
  // Kodingizni shu yerda yozing
  `,
      hint: "Boolean() konstruktoridan foydalaning",
      checkResult: (output) => {
        return output.length === 3 && typeof output[0] === 'boolean';
      }
    },
    {
      id: 4,
      title: "Raqamli satrni tekshirish",
      description: "Satr raqamdan iboratligini tekshirish",
      task: "Berilgan satr faqat raqamlardan iboratligini tekshiring",
      initialCode: `let str = "12345";
  // Kodingizni shu yerda yozing
  `,
      hint: "isNaN() va Number() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 1 && typeof output[0] === 'boolean';
      }
    },
    {
      id: 5,
      title: "Butun songa o'tkazish",
      description: "O'nlik sonni butun songa o'tkazishning turli usullari",
      task: "Berilgan o'nlik sonni Math.floor(), Math.ceil() va Math.round() metodlari yordamida butun songa o'tkazing",
      initialCode: `let float = 3.7;
  // Kodingizni shu yerda yozing
  `,
      hint: "Math.floor(), Math.ceil() va Math.round() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 3 && Number.isInteger(output[0]);
      }
    },
    {
      id: 6,
      title: "JSON formatiga o'tkazish",
      description: "Obyektni JSON formatiga o'tkazish",
      task: "Berilgan obyektni JSON formatiga o'tkazing va qayta obyektga o'tkazing",
      initialCode: `let person = { name: "John", age: 30 };
  // Kodingizni shu yerda yozing
  `,
      hint: "JSON.stringify() va JSON.parse() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'string';
      }
    },
    {
      id: 7,
      title: "Massivga o'tkazish",
      description: "Satrni massivga o'tkazish",
      task: "Berilgan satrni harflar massiviga o'tkazing",
      initialCode: `let str = "Hello";
  // Kodingizni shu yerda yozing
  `,
      hint: "split() metodidan foydalaning",
      checkResult: (output) => {
        return Array.isArray(output[0]) && output[0].length === 5;
      }
    },
    {
      id: 8,
      title: "Satrga o'tkazish metodlari",
      description: "Obyektni satrga o'tkazishning turli usullari",
      task: "Berilgan obyektni toString() va String() metodlari yordamida satrga o'tkazing",
      initialCode: `let arr = [1, 2, 3];
  // Kodingizni shu yerda yozing
  `,
      hint: "toString() va String() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'string';
      }
    },
    {
      id: 9,
      title: "NaN ni tekshirish",
      description: "NaN qiymatini aniqlash",
      task: "Berilgan qiymat NaN ekanligini tekshiring",
      initialCode: `let value = parseInt("Hello");
  // Kodingizni shu yerda yozing
  `,
      hint: "isNaN() va Number.isNaN() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'boolean';
      }
    },
    {
      id: 10,
      title: "Xavfsiz casting",
      description: "Xavfsiz type casting amallarini bajarish",
      task: "Berilgan qiymatni xavfsiz tarzda songa o'tkazing",
      initialCode: `let value = "123abc";
  // Kodingizni shu yerda yozing
  `,
      hint: "parseInt() va try-catch dan foydalaning",
      checkResult: (output) => {
        return output.length === 1 && typeof output[0] === 'number';
      }
    },
    {
      id: 11,
      title: "Array Buffer ga o'tkazish",
      description: "Satrni ArrayBuffer formatiga o'tkazish",
      task: "Berilgan satrni ArrayBuffer ga o'tkazing va qayta satrga o'tkazing",
      initialCode: `let text = "Hello World";
// Kodingizni shu yerda yozing
`,
      hint: "TextEncoder va TextDecoder klasslaridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && output[0] instanceof ArrayBuffer;
      }
    },
    {
      id: 12,
      title: "Symbol turiga o'tkazish",
      description: "Satrdan Symbol yaratish",
      task: "Berilgan satrdan Symbol yarating va uni taqqoslang",
      initialCode: `let str1 = "mySymbol";
let str2 = "mySymbol";
// Kodingizni shu yerda yozing
`,
      hint: "Symbol() konstruktoridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'symbol';
      }
    },
    {
      id: 13,
      title: "Base64 formatiga o'tkazish",
      description: "Satrni Base64 formatiga o'tkazish",
      task: "Berilgan satrni Base64 formatiga o'tkazing va qayta deshifrlang",
      initialCode: `let data = "Salom, dunyo!";
// Kodingizni shu yerda yozing
`,
      hint: "btoa() va atob() funksiyalaridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && typeof output[0] === 'string';
      }
    },
    {
      id: 14,
      title: "Map obyektiga o'tkazish",
      description: "Oddiy obyektni Map obyektiga o'tkazish",
      task: "Berilgan obyektni Map obyektiga o'tkazing",
      initialCode: `let obj = { name: "John", age: 30, city: "New York" };
// Kodingizni shu yerda yozing
`,
      hint: "new Map() va Object.entries() metodlaridan foydalaning",
      checkResult: (output) => {
        return output.length === 1 && output[0] instanceof Map;
      }
    },
    {
      id: 15,
      title: "Set obyektiga o'tkazish",
      description: "Massivni Set obyektiga o'tkazish",
      task: "Berilgan massivni Set obyektiga o'tkazing va takroriy elementlarni olib tashlang",
      initialCode: `let arr = [1, 2, 2, 3, 3, 4, 5, 5];
// Kodingizni shu yerda yozing
`,
      hint: "new Set() konstruktoridan foydalaning",
      checkResult: (output) => {
        return output.length === 2 && output[0] instanceof Set;
      }
    }
  ];
  
  export default practiceCast;
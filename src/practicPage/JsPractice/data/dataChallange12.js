const practiceArrayAdvanced = [
    {
      id: 1,
      title: "Array ichida obyektlar",
      description: "Obyektlardan iborat massiv yaratish",
      task: "Ikkita obyektdan iborat massiv yarating. Har bir obyektda 'name' va 'age' xususiyatlari bo'lsin",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Massiv ichida obyektlarni {} yordamida yarating",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return Array.isArray(arr) && arr.length === 2 && 
               arr.every(item => 'name' in item && 'age' in item);
      }
    },
    {
      id: 2,
      title: "Nested Array yasash",
      description: "3x3 o'lchamli massiv yaratish",
      task: "1 dan 9 gacha sonlardan iborat 3x3 o'lchamli massiv yarating: [[1,2,3], [4,5,6], [7,8,9]]",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Uch qatorli, har qatorda uch elementli massiv yarating",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return JSON.stringify(arr) === '[[1,2,3],[4,5,6],[7,8,9]]';
      }
    },
    {
      id: 3,
      title: "Array destructuring",
      description: "Massiv elementlarini destructuring qilish",
      task: "Berilgan [1, 2, 3] massivini destructuring yordamida a, b, c o'zgaruvchilariga ajrating va c ni qaytaring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "const [a, b, c] = [1, 2, 3] sintaksisidan foydalaning",
      checkResult: (output) => {
        return Number(output[0]) === 3;
      }
    },
    {
      id: 4,
      title: "Spread operator",
      description: "Massivlarni birlashtirish",
      task: "Ikkita massivni [1, 2] va [3, 4] spread operator yordamida birlashtiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "[...arr1, ...arr2] sintaksisidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4';
      }
    },
    {
      id: 5,
      title: "Array.from()",
      description: "String'dan array yaratish",
      task: "'Hello' so'zidan harflar massivini yarating",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Array.from() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join('') === 'Hello';
      }
    },
    {
      id: 6,
      title: "flatMap metodi",
      description: "Massivni tekislash va o'zgartirish",
      task: "[[1], [2, 3], [4]] massivini tekislab, har bir elementni 2 ga ko'paytiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "flatMap() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,4,6,8';
      }
    },
    {
      id: 7,
      title: "Array.isArray()",
      description: "Massivni tekshirish",
      task: "Berilgan input massiv ekanligini tekshiring: [1, 2, 3]",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Array.isArray() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 8,
      title: "Murakkab filtrlash",
      description: "Massivni bir necha shart bo'yicha filtrlash",
      task: "numbers=[1,2,3,4,5,6,7,8,9,10] massividan 3 ga bo'linadigan va 5 dan katta sonlarni ajrating",
      initialCode: `const numbers = [1,2,3,4,5,6,7,8,9,10];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() metodida ikki shartni && bilan bog'lang",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '6,9';
      }
    },
    {
      id: 9,
      title: "Elementlarni guruhlash",
      description: "Massiv elementlarini guruhlash",
      task: "[1,2,3,4,5,6] massivini juft va toq sonlar guruhiga ajrating: {odd: [...], even: [...]}",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return JSON.stringify(obj.odd) === '[1,3,5]' && JSON.stringify(obj.even) === '[2,4,6]';
      }
    },
    {
      id: 10,
      title: "Murakkab saralash",
      description: "Obyektlar massivini saralash",
      task: "Berilgan [{name: 'B', age: 20}, {name: 'A', age: 30}] massivini name bo'yicha saralang",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "sort() metodida obyekt xususiyatlarini taqqoslang",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr[0].name === 'A' && arr[1].name === 'B';
      }
    },
    {
      id: 11,
      title: "Array transformatsiya",
      description: "Massivni boshqa strukturaga o'zgartirish",
      task: "[1,2,3] massivini {1:1, 2:4, 3:9} ko'rinishidagi obyektga o'zgartiring (sonlar kvadrati)",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return obj['1'] === 1 && obj['2'] === 4 && obj['3'] === 9;
      }
    },
    {
      id: 12,
      title: "Validatsiya",
      description: "Massiv elementlarini tekshirish",
      task: "Massivdagi barcha elementlar string tipida ekanligini tekshiring",
      initialCode: `const arr = ['hello', 'world', 'test'];
// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 13,
      title: "Massiv kesishması",
      description: "Ikki massivning kesishmasini topish",
      task: "[1,2,3,4] va [3,4,5,6] massivlarining kesishmasini toping",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() va includes() metodlaridan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '3,4';
      }
    },
    {
      id: 14,
      title: "Massiv farqi",
      description: "Ikki massiv orasidagi farqni topish",
      task: "[1,2,3,4] va [3,4,5,6] massivlarining farqini toping (birinchi massivda bor, ikkinchisida yo'q elementlar)",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() va !includes() metodlaridan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2';
      }
    },
    {
      id: 15,
      title: "Massiv birlashtirish",
      description: "Bir nechta massivni birlashtirish",
      task: "[1,2], [3,4] va [5,6] massivlarini birlashtiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "concat() yoki spread operatordan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4,5,6';
      }
    },
    {
      id: 16,
      title: "Massiv elementlarini sanash",
      description: "Massivda elementlar sonini hisoblash",
      task: "[1,2,2,3,3,3] massivida har bir elementdan nechtadan borligini obyekt ko'rinishida qaytaring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return obj['1'] === 1 && obj['2'] === 2 && obj['3'] === 3;
      }
    },
    {
      id: 17,
      title: "Massiv elementlarini guruhlash",
      description: "Massiv elementlarini uzunligi bo'yicha guruhlash",
      task: "['a', 'bb', 'ccc'] massivini elementlar uzunligi bo'yicha guruhlang: {1: ['a'], 2: ['bb'], 3: ['ccc']}",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return obj['1'].join('') === 'a' && obj['2'].join('') === 'bb' && obj['3'].join('') === 'ccc';
      }
    },
    {
      id: 18,
      title: "Massiv aylanishi",
      description: "Massiv elementlarini aylantirib chiqish",
      task: "[1,2,3] massivini n=1 marta o'ngga aylantiring: [3,1,2]",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "slice() va concat() metodlaridan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '3,1,2';
      }
    },
    {
      id: 19,
      title: "Massiv yig'indisi",
      description: "Massiv elementlari yig'indisini topish",
      task: "[[1,2],[3,4],[5,6]] massividagi barcha sonlar yig'indisini toping",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "flat() va reduce() metodlaridan foydalaning",
      checkResult: (output) => {
        return Number(output[0]) === 21;
      }
    },
    {
      id: 20,
      title: "Massiv kesishmasi 2",
      description: "Uch massivning kesishmasini topish",
      task: "[1,2,3], [2,3,4] va [3,4,5] massivlarining kesishmasini toping",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() va every() metodlaridan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '3';
      }
    },
    {
      id: 21,
      title: "Massiv elementlarini almashtirish",
      description: "Massiv elementlarini o'zaro almashtirish",
      task: "[1,2,3,4,5] massivida juft indeksli elementlar bilan toq indeksli elementlarni almashtiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "map() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,1,4,3,5';
      }
    },
    {
      id: 22,
      title: "Massiv elementlarini tekshirish",
      description: "Massiv elementlarini shartga tekshirish",
      task: "[2,4,6,8] massividagi barcha elementlar 2 ga bo'linishini tekshiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 23,
      title: "Massiv elementlarini o'chirish",
      description: "Massivdan ma'lum elementlarni o'chirish",
      task: "[1,2,3,4,5] massividan 3 dan katta elementlarni o'chiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3';
      }
    },
    {
      id: 24,
      title: "Massiv elementlarini qo'shish",
      description: "Massivga ma'lum pozitsiyaga element qo'shish",
      task: "[1,2,4,5] massiviga 3-pozitsiyaga 3 sonini qo'shing",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "splice() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 25,
      title: "Massiv elementlarini topish",
      description: "Massivdan shartga mos birinchi elementni topish",
      task: "[1,3,5,7,9] massividan 5 dan katta birinchi elementni toping",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "find() metodidan foydalaning",
      checkResult: (output) => {
        return Number(output[0]) === 7;
      }
    },
    {
      id: 26,
      title: "Massiv elementlarini saralash 2",
      description: "Massivni murakkab shart bo'yicha saralash",
      task: "[{id:3,val:3},{id:1,val:1},{id:2,val:2}] massivini id bo'yicha o'sish tartibida saralang",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "sort() metodida obyekt xususiyatlarini taqqoslang",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr[0].id === 1 && arr[1].id === 2 && arr[2].id === 3;
      }
    },
    {
      id: 27,
      title: "Massiv elementlarini guruhlash 2",
      description: "Massiv elementlarini bir necha xususiyat bo'yicha guruhlash",
      task: "[{type:'A',val:1},{type:'B',val:2},{type:'A',val:3}] massivini type bo'yicha guruhlang",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return obj.A.length === 2 && obj.B.length === 1;
      }
    },
    {
      id: 28,
      title: "Massiv elementlarini yangilash",
      description: "Massiv elementlarini shartli yangilash",
      task: "[1,2,3,4,5] massivida toq sonlarni 2 ga ko'paytiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "map() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '2,2,6,4,10';
      }
    },
    {
      id: 29,
      title: "Massiv elementlarini tekshirish 2",
      description: "Massiv elementlarini murakkab shartga tekshirish",
      task: "[{age:25},{age:30},{age:35}] massividagi barcha odamlar 20 dan katta yoshda ekanligini tekshiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 30,
      title: "Massiv elementlarini qidirish",
      description: "Massivdan elementni murakkab shart bo'yicha qidirish",
      task: "[{id:1,val:10},{id:2,val:20}] massividan id=2 bo'lgan elementni toping",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "find() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return obj.id === 2 && obj.val === 20;
      }
    },
    {
      id: 31,
      title: "Massiv elementlarini o'zgartirish",
      description: "Massiv elementlarini shartli o'zgartirish",
      task: "['a','b','c'] massivini elementlarini katta harflarga o'zgartiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "map() va toUpperCase() metodlaridan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === 'A,B,C';
      }
    },
    {
      id: 32,
      title: "Massiv elementlarini birlashtirish",
      description: "Massiv elementlarini maxsus ajratuvchi bilan birlashtirish",
      task: "['hello','world'] massivi elementlarini '-' bilan ajratib birlashtiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "join() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'hello-world';
      }
    },
    {
      id: 33,
      title: "Massiv elementlarini tekshirish 3",
      description: "Massiv elementlarini bir necha shartga tekshirish",
      task: "[10,20,30,40] massivida 0 dan katta va 50 dan kichik sonlar borligini tekshiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 34,
      title: "Massiv elementlarini filtrlash 2",
      description: "Massivni murakkab shart bo'yicha filtrlash",
      task: "[{name:'A',age:25},{name:'B',age:30}] massividan yoshi 28 dan katta obyektlarni ajrating",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "filter() metodidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.length === 1 && arr[0].name === 'B';
      }
    },
    {
      id: 35,
      title: "Massiv elementlarini o'zgartirish 2",
      description: "Massiv elementlarini shartli ravishda o'zgartirish",
      task: "[1,'2',3,'4'] massivida string tipidagi elementlarni number tipiga o'zgartiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "map() va Number() funksiyasidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.every(x => typeof x === 'number');
      }
    },
    {
      id: 36,
      title: "Massiv elementlarini guruhlash 3",
      description: "Massiv elementlarini qiymat bo'yicha guruhlash",
      task: "[1,1,2,2,2,3] massivini elementlar soni bo'yicha guruhlang: {1:2, 2:3, 3:1}",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "reduce() metodidan foydalaning",
      checkResult: (output) => {
        const obj = JSON.parse(output[0]);
        return obj['1'] === 2 && obj['2'] === 3 && obj['3'] === 1;
      }
    },
    {
      id: 37,
      title: "Massiv elementlarini tekshirish 4",
      description: "Massiv elementlarini murakkab shartga tekshirish",
      task: "[[1,2],[3,4],[5,6]] massivining barcha ichki massivlari uzunligi 2 ga tengligini tekshiring",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "every() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === 'true';
      }
    },
    {
      id: 38,
      title: "Massiv elementlarini qo'shish 2",
      description: "Massivga shartli ravishda element qo'shish",
      task: "[1,2,4,5] massiviga 3 sonini to'g'ri pozitsiyaga (tartiblangan holatda) qo'shing",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "findIndex() va splice() metodlaridan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3,4,5';
      }
    },
    {
      id: 39,
      title: "Massiv elementlarini o'chirish 2",
      description: "Massivdan takroriy elementlarni o'chirish",
      task: "[1,2,2,3,3,3] massividan takroriy elementlarni o'chirib tashlang",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Set obyektidan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '1,2,3';
      }
    },
    {
      id: 40,
      title: "Massiv elementlarini almashtirish 2",
      description: "Massiv elementlarini o'zaro almashtirish",
      task: "[1,2,3,4] massivining birinchi va oxirgi elementlarini almashtirib qo'ying",
      initialCode: `// Kodingizni shu yerda yozing
console.log(result);`,
      hint: "Destructuring assignmentdan foydalaning",
      checkResult: (output) => {
        const arr = JSON.parse(output[0]);
        return arr.join(',') === '4,2,3,1';
      }
    }
  ];
  
  export default practiceArrayAdvanced;
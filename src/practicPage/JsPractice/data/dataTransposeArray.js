const practiceTransposeArray = [
    {
      id: 1,
      title: "Oddiy transpozitsiya",
      description: "2x2 matrisani transpozitsiya qilish",
      task: "[[1,2], [3,4]] massivini transpozitsiya qiling. Natija: [[1,3], [2,4]]",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2], [3,4]];
  let result;`,
      hint: "Yangi massiv yarating va elementlarni to'g'ri tartibda joylashtiring",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,3], [2,4]]);
      }
    },
    {
      id: 2,
      title: "3x3 matritsa",
      description: "3x3 o'lchamli matrisani transpozitsiya qilish",
      task: "[[1,2,3], [4,5,6], [7,8,9]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2,3], [4,5,6], [7,8,9]];
  let result;`,
      hint: "map() va forEach() metodlaridan foydalaning",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,4,7], [2,5,8], [3,6,9]]);
      }
    },
    {
      id: 3,
      title: "To'g'ri burchakli matritsa",
      description: "2x3 o'lchamli to'g'ri burchakli matrisani transpozitsiya qilish",
      task: "[[1,2,3], [4,5,6]] massivini transpozitsiya qiling. Natija: [[1,4], [2,5], [3,6]]",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2,3], [4,5,6]];
  let result;`,
      hint: "Natijada ustunlar soni boshlang'ich qatorlar soniga teng bo'ladi",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,4], [2,5], [3,6]]);
      }
    },
    {
      id: 4,
      title: "Nol elementli matritsa",
      description: "Nollar bilan to'ldirilgan matrisani transpozitsiya qilish",
      task: "[[0,0,0], [0,0,0]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[0,0,0], [0,0,0]];
  let result;`,
      hint: "Array(n).fill() metodidan foydalaning",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[0,0], [0,0], [0,0]]);
      }
    },
    {
      id: 5,
      title: "Matn elementli matritsa",
      description: "Harflardan iborat matrisani transpozitsiya qilish",
      task: "[['a','b'], ['c','d']] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [['a','b'], ['c','d']];
  let result;`,
      hint: "Matritsa elementi turi muhim emas",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([['a','c'], ['b','d']]);
      }
    },
    {
      id: 6,
      title: "Bir qatorli matritsa",
      description: "1xN o'lchamli matrisani transpozitsiya qilish",
      task: "[[1,2,3,4]] massivini transpozitsiya qiling. Natija: [[1],[2],[3],[4]]",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2,3,4]];
  let result;`,
      hint: "Har bir element alohida massivga aylanadi",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1],[2],[3],[4]]);
      }
    },
    {
      id: 7,
      title: "Bir ustunli matritsa",
      description: "Nx1 o'lchamli matrisani transpozitsiya qilish",
      task: "[[1],[2],[3],[4]] massivini transpozitsiya qiling. Natija: [[1,2,3,4]]",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1],[2],[3],[4]];
  let result;`,
      hint: "Barcha elementlarni bitta massivga birlashtiring",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,2,3,4]]);
      }
    },
    {
      id: 8,
      title: "Aralash turdagi elementlar",
      description: "Turli turdagi elementlardan iborat matrisani transpozitsiya qilish",
      task: "[[1,'a',true], [2,'b',false]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,'a',true], [2,'b',false]];
  let result;`,
      hint: "Element turini tekshirish shart emas",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,2], ['a','b'], [true,false]]);
      }
    },
    {
      id: 9,
      title: "Bo'sh matritsa",
      description: "Bo'sh massivni transpozitsiya qilish",
      task: "[[]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[]];
  let result;`,
      hint: "Bo'sh massiv uchun alohida tekshiruv qo'shing",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[]]);
      }
    },
    {
      id: 10,
      title: "Katta matritsa",
      description: "4x4 o'lchamli matrisani transpozitsiya qilish",
      task: "[[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
  let result;`,
      hint: "Ikki qatlamli tsikldan foydalaning",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,5,9,13], [2,6,10,14], [3,7,11,15], [4,8,12,16]]);
      }
    },
    {
      id: 11,
      title: "Manfiy sonli matritsa",
      description: "Manfiy sonlardan iborat matrisani transpozitsiya qilish",
      task: "[[-1,-2], [-3,-4]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[-1,-2], [-3,-4]];
  let result;`,
      hint: "Sonning ishorasi muhim emas",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[-1,-3], [-2,-4]]);
      }
    },
    {
      id: 12,
      title: "Kasr sonli matritsa",
      description: "Kasr sonlardan iborat matrisani transpozitsiya qilish",
      task: "[[0.5,1.5], [2.5,3.5]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[0.5,1.5], [2.5,3.5]];
  let result;`,
      hint: "Kasr sonlar bilan ishlash oddiy sonlar bilan ishlash kabidir",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[0.5,2.5], [1.5,3.5]]);
      }
    },
    {
      id: 13,
      title: "Simmetrik matritsa",
      description: "Simmetrik matrisani transpozitsiya qilish",
      task: "[[1,2,3], [2,4,5], [3,5,6]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2,3], [2,4,5], [3,5,6]];
  let result;`,
      hint: "Simmetrik matrisaning transpozitsiyasi o'ziga teng bo'ladi",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([[1,2,3], [2,4,5], [3,5,6]]);
      }
    },
    {
      id: 14,
      title: "Satr elementli matritsa",
      description: "So'zlardan iborat matrisani transpozitsiya qilish",
      task: '[["salom","dunyo"], ["hello","world"]] massivini transpozitsiya qiling',
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [["salom","dunyo"], ["hello","world"]];
  let result;`,
      hint: "Satrlar bilan ishlash boshqa turlar bilan ishlash kabidir",
      checkResult: (output) => {
        return JSON.stringify(output) === JSON.stringify([["salom","hello"], ["dunyo","world"]]);
      }
    },
    {
      id: 15,
      title: "Murakkab matritsa",
      description: "Turli o'lchamli ichki massivlardan iborat matrisani transpozitsiya qilish",
      task: "[[1,2], [3,4,5]] massivini transpozitsiya qiling",
      initialCode: `// Kodingizni shu yerda yozing
  const matrix = [[1,2], [3,4,5]];
  let result;`,
      hint: "Noto'g'ri o'lchamli massivlar uchun xatolikni tekshiring",
      checkResult: (output) => {
        return output === "Xato: Matritsa to'g'ri formatda emas";
      }
    }
  ];
  
  export default practiceTransposeArray;
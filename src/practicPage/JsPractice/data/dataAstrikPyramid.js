const practiceAsterikPyramid = [
    {
      id: 1,
      title: "Oddiy yulduzcha",
      description: "Bitta qatorda yulduzchalar chiqarish",
      task: "5 ta yulduzchani (*****) bir qatorda chiqaring",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "repeat() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === '*****';
      }
    },
    {
      id: 2,
      title: "To'g'ri burchakli yulduzcha",
      description: "3 qatorli to'g'ri burchakli shakl",
      task: "Quyidagi ko'rinishda yulduzchalarni chiqaring:\n*\n**\n***",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "For tsiklidan foydalaning",
      checkResult: (output) => {
        return output[0] === '*\n**\n***';
      }
    },
    {
      id: 3,
      title: "Teng yonli uchburchak",
      description: "Markazlashgan yulduzchali uchburchak",
      task: "3 qatorli teng yonli uchburchak yasang:\n  *\n ***\n*****",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "repeat() va bo'shliqlardan foydalaning",
      checkResult: (output) => {
        return output[0] === '  *\n ***\n*****';
      }
    },
    {
      id: 4,
      title: "Teskari uchburchak",
      description: "Tepadan pastga kichrayib boruvchi uchburchak",
      task: "3 qatorli teskari uchburchak yasang:\n*****\n ***\n  *",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "For tsikli va repeat() metodidan foydalaning",
      checkResult: (output) => {
        return output[0] === '*****\n ***\n  *';
      }
    },
    {
      id: 5,
      title: "Romb shakli",
      description: "Yulduzchalardan romb yasash",
      task: "5 qatorli romb shakli yasang:\n  *\n ***\n*****\n ***\n  *",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Ikki for tsiklidan foydalaning",
      checkResult: (output) => {
        return output[0] === '  *\n ***\n*****\n ***\n  *';
      }
    },
    {
      id: 6,
      title: "Bo'sh uchburchak",
      description: "Faqat chegaralari bor uchburchak",
      task: "Ichki qismi bo'sh uchburchak yasang:\n  *\n * *\n*****",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Har bir qatorda faqat chegaradagi yulduzchalarni chiqaring",
      checkResult: (output) => {
        return output[0] === '  *\n * *\n*****';
      }
    },
    {
      id: 7,
      title: "Raqamli piramida",
      description: "Yulduzchalar o'rniga raqamlar",
      task: "Raqamli piramida yasang:\n  1\n 222\n33333",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "toString() va repeat() metodlaridan foydalaning",
      checkResult: (output) => {
        return output[0] === '  1\n 222\n33333';
      }
    },
    {
      id: 8,
      title: "Aralash piramida",
      description: "Yulduzcha va raqamlardan iborat piramida",
      task: "Aralash piramida yasang:\n  *\n 2*2\n*****",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Har bir qatorda raqam va yulduzchalarni almashtiring",
      checkResult: (output) => {
        return output[0] === '  *\n 2*2\n*****';
      }
    },
    {
      id: 9,
      title: "Ikki tomonlama piramida",
      description: "Yonma-yon ikkita piramida",
      task: "Ikki tomonlama piramida yasang:\n*        *\n**      **\n***    ***\n****  ****\n**********",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Bo'shliqlarni hisoblab chiqaring",
      checkResult: (output) => {
        return output[0] === '*        *\n**      **\n***    ***\n****  ****\n**********';
      }
    },
    {
      id: 10,
      title: "Murakkab shakl",
      description: "Piramida va teskari piramida birlashmasi",
      task: "Quyidagi murakkab shaklni yasang:\n  *\n ***\n*****\n*****\n ***\n  *",
      initialCode: `// Kodingizni shu yerda yozing
  console.log(result);`,
      hint: "Shaklni ikki qismga bo'lib yasang",
      checkResult: (output) => {
        return output[0] === '  *\n ***\n*****\n*****\n ***\n  *';
      }
    }
  ];
  
  export default practiceAsterikPyramid;
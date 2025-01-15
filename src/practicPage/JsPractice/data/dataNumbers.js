const practiceDataNumbers = [
    {
      id: 1,
      title: "Raqamlar (Numbers)",
      description: "JavaScriptda raqamlar bilan ishlash juda oson. Raqamlarni o'zgaruvchilarga saqlash va ular ustida turli amallar bajarish mumkin.",
      task: "son o'zgaruvchisini 42 qiymat bilan e'lon qiling va console.log() orqali chiqaring",
      initialCode: "// Raqamlar bilan ishlash\nlet son = 42;\nconsole.log(son);",
      hint: "Raqamni console.log() orqali chiqaring",
      checkResult: (output) => output[0] === '42'
    },
    {
      id: 2,
      title: "Arifmetik amallar",
      description: "JavaScriptda asosiy arifmetik amallarni bajarish mumkin: qo'shish (+), ayirish (-), ko'paytirish (*), bo'lish (/)",
      task: "Ikkita son qo'shib, natijani console.log() orqali chiqaring. a=10 va b=20",
      initialCode: "let a = 10;\nlet b = 20;\n// Yechimni yozing",
      hint: "console.log(a + b) orqali yechimni chiqaring",
      checkResult: (output) => output[0] === '30'
    },
    {
      id: 3,
      title: "Qoldiqli bo'lish",
      description: "% operatori orqali sonlarni bo'lganda qoldiqni topish mumkin",
      task: "17 ni 5 ga bo'lgandagi qoldiqni toping",
      initialCode: "// Qoldiqli bo'lish\n// Yechimni yozing",
      hint: "% operatoridan foydalaning",
      checkResult: (output) => output[0] === '2'
    },
    {
      id: 4,
      title: "Sonlarni taqqoslash",
      description: "Sonlarni taqqoslash uchun >, <, >=, <=, === operatorlaridan foydalaniladi",
      task: "a=15 va b=20 sonlarini taqqoslab, natijani console.log() orqali chiqaring",
      initialCode: "let a = 15;\nlet b = 20;\n// Yechimni yozing",
      hint: "console.log(a < b) orqali tekshiring",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 5,
      title: "Ko'paytirish",
      description: "JavaScriptda sonlarni ko'paytirish uchun * operatoridan foydalanamiz",
      task: "a=8 va b=6 sonlarini ko'paytirib, natijani console.log() orqali chiqaring",
      initialCode: "let a = 8;\nlet b = 6;\n// Ko'paytmani hisoblang",
      hint: "console.log(a * b) orqali natijani chiqaring",
      checkResult: (output) => output[0] === '48'
    },
    {
      id: 6,
      title: "Bo'lish",
      description: "Sonlarni bo'lish uchun / operatori ishlatiladi",
      task: "a=45 va b=5 sonlarini bo'lib, natijani console.log() orqali chiqaring",
      initialCode: "let a = 45;\nlet b = 5;\n// Bo'lish natijasini hisoblang",
      hint: "console.log(a / b) orqali natijani chiqaring",
      checkResult: (output) => output[0] === '9'
    },
    {
      id: 7,
      title: "Darajaga ko'tarish",
      description: "Sonni darajaga ko'tarish uchun ** operatoridan foydalanamiz",
      task: "5 ni 2-darajaga ko'tarib, natijani console.log() orqali chiqaring",
      initialCode: "// 5 ni kvadratini hisoblang",
      hint: "console.log(5 ** 2) yoki Math.pow(5, 2) dan foydalaning",
      checkResult: (output) => output[0] === '25'
    },
    {
      id: 8,
      title: "Ildiz",
      description: "Sondan ildiz chiqarish uchun Math.sqrt() metodidan foydalanamiz",
      task: "81 sonidan kvadrat ildiz chiqarib, natijani console.log() orqali chiqaring",
      initialCode: "// 81 dan ildiz chiqaring",
      hint: "Math.sqrt(81) metodidan foydalaning",
      checkResult: (output) => output[0] === '9'
    },
    {
      id: 9,
      title: "Yaxlitlash",
      description: "Sonlarni yaxlitlash uchun Math.round(), Math.floor() va Math.ceil() metodlari mavjud",
      task: "3.7 sonini butun songacha yaxlitlab, natijani console.log() orqali chiqaring",
      initialCode: "// 3.7 ni yaxlitlang",
      hint: "Math.round(3.7) metodidan foydalaning",
      checkResult: (output) => output[0] === '4'
    },
    {
      id: 10,
      title: "Kompleks amallar",
      description: "Bir nechta arifmetik amallarni birgalikda bajarish mumkin",
      task: "(15 + 5) * 2 ifodani hisoblab, natijani console.log() orqali chiqaring",
      initialCode: "// Ifodani hisoblang",
      hint: "Qavslar ichidagi amalni birinchi bajaring",
      checkResult: (output) => output[0] === '40'
    }
];

export default practiceDataNumbers;
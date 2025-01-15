const practiceDataEqualityStrict = [
    {
      id: 1,
      title: "Oddiy tenglik (==)",
      description: "JavaScript'da == operatori qiymatlarni taqqoslaydi, lekin ma'lumot turini e'tiborga olmaydi va avtomatik ravishda ma'lumot turini o'zgartiradi",
      task: "Berilgan o'zgaruvchilarni == operatori bilan taqqoslang",
      initialCode: "let son = 5;\nlet satr = '5';",
      hint: "console.log(son == satr) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 2,
      title: "Qat'iy tenglik (===)",
      description: "=== operatori qiymatlarni va ularning ma'lumot turini ham tekshiradi. Bu aniqroq natija beradi",
      task: "Berilgan o'zgaruvchilarni === operatori bilan taqqoslang",
      initialCode: "let son = 5;\nlet satr = '5';",
      hint: "console.log(son === satr) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 3,
      title: "null va undefined taqqoslash",
      description: "null va undefined == operatori bilan taqqoslanganda true qaytaradi, === bilan false qaytaradi",
      task: "null va undefined ni == operatori bilan taqqoslang",
      initialCode: "let a = null;\nlet b = undefined;",
      hint: "console.log(a == b) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 4,
      title: "Boolean va raqamlar",
      description: "Boolean qiymatlar raqamlarga avtomatik o'zgartiriladi: true = 1, false = 0",
      task: "true qiymatini 1 raqami bilan == operatori orqali taqqoslang",
      initialCode: "let bool = true;\nlet raqam = 1;",
      hint: "console.log(bool == raqam) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 5,
      title: "Satrlar va raqamlar",
      description: "Satrlar raqamlarga avtomatik o'zgartirilishi mumkin",
      task: "Raqamli satrni raqam bilan taqqoslang",
      initialCode: "let satr = '123';\nlet son = 123;",
      hint: "console.log(satr == son) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 6,
      title: "Qat'iy teng emaslik (!==)",
      description: "!== operatori qiymat yoki ma'lumot turi teng emasligini tekshiradi",
      task: "Ikkita o'zgaruvchi qat'iy teng emasligini tekshiring",
      initialCode: "let x = 10;\nlet y = '10';",
      hint: "console.log(x !== y) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 7,
      title: "Object taqqoslash",
      description: "Objectlarni taqqoslashda ularning xotiradagi manzili tekshiriladi",
      task: "Ikkita bir xil tarkibli objectni taqqoslang",
      initialCode: "let obj1 = {a: 1};\nlet obj2 = {a: 1};",
      hint: "console.log(obj1 === obj2) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 8,
      title: "Array taqqoslash",
      description: "Arraylarni taqqoslashda ham ularning xotiradagi manzili tekshiriladi",
      task: "Ikkita bir xil tarkibli arrayni taqqoslang",
      initialCode: "let arr1 = [1, 2, 3];\nlet arr2 = [1, 2, 3];",
      hint: "console.log(arr1 === arr2) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 9,
      title: "NaN taqqoslash",
      description: "NaN o'zi bilan ham teng emas",
      task: "NaN ni o'zi bilan taqqoslang",
      initialCode: "let notANumber = NaN;",
      hint: "console.log(notANumber === notANumber) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'false'
    },
    {
      id: 10,
      title: "0 va -0 taqqoslash",
      description: "JavaScript'da 0 va -0 teng hisoblanadi",
      task: "0 va -0 ni === operatori bilan taqqoslang",
      initialCode: "let nol = 0;\nlet minusNol = -0;",
      hint: "console.log(nol === minusNol) ko'rinishida yozing",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 11,
      title: "String va Number taqqoslash",
      description: "JavaScript'da string va number taqqoslashda, == operatori stringni numberga o'girishga harakat qiladi",
      task: "String '100' va number 100 ni == va === operatorlari bilan taqqoslang",
      initialCode: "let str = '100';\nlet num = 100;\n\nconsole.log('== natija:', str == num);\nconsole.log('=== natija:', str === num);",
      hint: "console.log() orqali ikkala taqqoslash natijasini chiqaring. == true, === false qaytarishi kerak",
      checkResult: (output) => output[0] === '== natija: true' && output[1] === '=== natija: false'
    },
    {
      id: 12,
      title: "Object reference taqqoslash",
      description: "Objectlarni nusxalash va taqqoslash reference asosida ishlaydi",
      task: "Bitta objectdan ikkinchi object yarating va ularni taqqoslang",
      initialCode: "let obj1 = {x: 1};\nlet obj2 = obj1;\nlet obj3 = {x: 1};\n\nconsole.log(obj1 === obj2);\nconsole.log(obj1 === obj3);",
      hint: "Birinchi taqqoslash true, ikkinchisi false bo'lishi kerak",
      checkResult: (output) => output[0] === 'true' && output[1] === 'false'
    },
    {
      id: 13,
      title: "Murakkab tenglik tekshirish",
      description: "JavaScript'da turli qiymatlarni taqqoslashda kutilmagan natijalar bo'lishi mumkin",
      task: "[] == false va [1] == true taqqoslashlarini bajaring",
      initialCode: "console.log([] == false);\nconsole.log([1] == true);",
      hint: "Bo'sh array false ga, [1] esa true ga teng bo'ladi",
      checkResult: (output) => output[0] === 'true' && output[1] === 'true'
    },
    {
      id: 14,
      title: "undefined va null taqqoslash",
      description: "undefined va null qiymatlari o'zaro va boshqa qiymatlar bilan taqqoslashda o'ziga xos xususiyatlarga ega",
      task: "undefined va null ni turli operatorlar bilan taqqoslang",
      initialCode: "console.log(undefined == null);\nconsole.log(undefined === null);\nconsole.log(undefined == false);",
      hint: "undefined == null true, qolgan taqqoslashlar false bo'lishi kerak",
      checkResult: (output) => output[0] === 'true' && output[1] === 'false' && output[2] === 'false'
    },
    {
      id: 15,
      title: "Type Coercion bilan ishlash",
      description: "JavaScript'da == operatori type coercion (tur o'zgartirish) ni amalga oshiradi",
      task: "'123' va 123 ni taqqoslang, keyin ularni typeof bilan tekshiring",
      initialCode: "let str = '123';\nlet num = 123;\n\nconsole.log(str == num);\nconsole.log(typeof str);\nconsole.log(typeof num);",
      hint: "Birinchi natija true, keyin 'string' va 'number' chiqishi kerak",
      checkResult: (output) => output[0] === 'true' && output[1] === 'string' && output[2] === 'number'
    }
  ];
  
  export default practiceDataEqualityStrict;
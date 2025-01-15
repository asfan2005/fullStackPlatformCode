const practiceDataArifmetikOperators = [
    {
      id: 1,
      title: "Qo'shish operatori (+)",
      description: "Qo'shish operatori (+) ikkita sonni qo'shish uchun ishlatiladi",
      task: "a va b o'zgaruvchilarini qo'shing va natijani console.log() orqali chiqaring",
      initialCode: "let a = 10;\nlet b = 5;",
      hint: "a va b ni + operatori orqali qo'shing",
      checkResult: (output) => output[0] === '15'
    },
    {
      id: 2,
      title: "Ayirish operatori (-)",
      description: "Ayirish operatori (-) birinchi sondan ikkinchi sonni ayirish uchun ishlatiladi",
      task: "a dan b ni ayiring va natijani console.log() orqali chiqaring",
      initialCode: "let a = 20;\nlet b = 8;",
      hint: "a dan b ni - operatori orqali ayiring",
      checkResult: (output) => output[0] === '12'
    },
    {
      id: 3,
      title: "Ko'paytirish operatori (*)",
      description: "Ko'paytirish operatori (*) ikkita sonni ko'paytirish uchun ishlatiladi",
      task: "a va b ni ko'paytiring va natijani console.log() orqali chiqaring",
      initialCode: "let a = 6;\nlet b = 7;",
      hint: "a va b ni * operatori orqali ko'paytiring",
      checkResult: (output) => output[0] === '42'
    },
    {
      id: 4,
      title: "Bo'lish operatori (/)",
      description: "Bo'lish operatori (/) birinchi sonni ikkinchi songa bo'lish uchun ishlatiladi",
      task: "a ni b ga bo'ling va natijani console.log() orqali chiqaring",
      initialCode: "let a = 15;\nlet b = 3;",
      hint: "a ni b ga / operatori orqali bo'ling",
      checkResult: (output) => output[0] === '5'
    },
    {
      id: 5,
      title: "Qoldiqli bo'lish operatori (%)",
      description: "Qoldiqli bo'lish operatori (%) bo'lish natijasidan qolgan qoldiqni qaytaradi",
      task: "a ni b ga bo'lgandagi qoldiqni toping",
      initialCode: "let a = 17;\nlet b = 5;",
      hint: "% operatoridan foydalaning",
      checkResult: (output) => output[0] === '2'
    },
    {
      id: 6,
      title: "Increment operatori (++)",
      description: "Increment operatori (++) o'zgaruvchi qiymatini 1 ga oshiradi",
      task: "son o'zgaruvchisini increment operatori yordamida 1 ga oshiring",
      initialCode: "let son = 5;",
      hint: "++ operatoridan foydalaning va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === '6'
    },
    {
      id: 7,
      title: "Decrement operatori (--)",
      description: "Decrement operatori (--) o'zgaruvchi qiymatini 1 ga kamaytiradi",
      task: "son o'zgaruvchisini decrement operatori yordamida 1 ga kamaytiring",
      initialCode: "let son = 8;",
      hint: "-- operatoridan foydalaning va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === '7'
    },
    {
      id: 8,
      title: "Qiymat qo'shib o'zlashtirish (+=)",
      description: "Qiymat qo'shib o'zlashtirish operatori (+=) o'zgaruvchiga yangi qiymat qo'shib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisiga 5 ni qo'shing va o'zlashtiring",
      initialCode: "let son = 10;",
      hint: "+= operatoridan foydalaning va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === '15'
    },
    {
      id: 9,
      title: "Qiymat ayirib o'zlashtirish (-=)",
      description: "Qiymat ayirib o'zlashtirish operatori (-=) o'zgaruvchidan yangi qiymatni ayirib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisidan 3 ni ayiring va o'zlashtiring",
      initialCode: "let son = 12;",
      hint: "-= operatoridan foydalaning va natijani console.log() orqali chiqaring",
      checkResult: (output) => output[0] === '9'
    },
    {
      id: 10,
      title: "Murakkab arifmetik amallar",
      description: "Arifmetik operatorlarni birgalikda ishlatish",
      task: "a ni b ga ko'paytirib, natijani c ga bo'ling va qoldiqni toping",
      initialCode: "let a = 25;\nlet b = 3;\nlet c = 4;",
      hint: "Avval ko'paytiring, keyin qoldiqli bo'lish operatorini ishlating",
      checkResult: (output) => output[0] === '3'
    },
    {
      id: 11,
      title: "Ko'paytirish va qo'shish",
      description: "Arifmetik amallarning bajarilish tartibi",
      task: "a ni b ga ko'paytirib, natijaga c ni qo'shing",
      initialCode: "let a = 4;\nlet b = 3;\nlet c = 5;",
      hint: "Avval ko'paytirish (*), keyin qo'shish (+) amalini bajaring",
      checkResult: (output) => output[0] === '17'
    },
    {
      id: 12,
      title: "Murakkab bo'lish",
      description: "Bo'lish va qoldiqni birgalikda hisoblash",
      task: "a ni b ga bo'lib, butun qismini va qoldig'ini alohida chiqaring",
      initialCode: "let a = 17;\nlet b = 4;",
      hint: "Butun qism uchun / operatori, qoldiq uchun % operatoridan foydalaning",
      checkResult: (output) => output[0] === '4' && output[1] === '1'
    },
    {
      id: 13,
      title: "Darajaga ko'tarish",
      description: "Sonni darajaga ko'tarish uchun ** operatori ishlatiladi",
      task: "a ni 3-darajaga ko'taring",
      initialCode: "let a = 2;",
      hint: "** operatoridan foydalaning (2 ** 3 = 8)",
      checkResult: (output) => output[0] === '8'
    },
    {
      id: 14,
      title: "Murakkab qo'shish",
      description: "Bir nechta sonlarni ketma-ket qo'shish",
      task: "a, b va c sonlarini qo'shing, so'ng natijani 2 ga ko'paytiring",
      initialCode: "let a = 3;\nlet b = 4;\nlet c = 5;",
      hint: "Avval qo'shish, keyin ko'paytirish amalini bajaring",
      checkResult: (output) => output[0] === '24'
    },
    {
      id: 15,
      title: "O'zgaruvchini yangilash",
      description: "O'zgaruvchiga yangi qiymat berish",
      task: "son o'zgaruvchisiga 5 ni qo'shing, keyin 2 ga ko'paytiring",
      initialCode: "let son = 3;",
      hint: "Avval += keyin *= operatorlaridan foydalaning",
      checkResult: (output) => output[0] === '16'
    },
    {
      id: 16,
      title: "Sonlarni taqqoslash",
      description: "Ikkita ifodani hisoblash va taqqoslash",
      task: "a * b va c * d ifodalarni hisoblang va taqqoslang",
      initialCode: "let a = 5;\nlet b = 3;\nlet c = 4;\nlet d = 4;",
      hint: "Har ikkala ifodani hisoblang va console.log() orqali chiqaring",
      checkResult: (output) => output[0] === '15' && output[1] === '16'
    },
    {
      id: 17,
      title: "Murakkab ayirish",
      description: "Ketma-ket ayirish amallari",
      task: "a dan b ni ayiring, natijadan c ni ayiring",
      initialCode: "let a = 20;\nlet b = 5;\nlet c = 3;",
      hint: "Amallarni chapdan o'ngga bajaring",
      checkResult: (output) => output[0] === '12'
    },
    {
      id: 18,
      title: "Aralash amallar",
      description: "Turli arifmetik amallarni birgalikda bajarish",
      task: "(a + b) * c - d ifodani hisoblang",
      initialCode: "let a = 4;\nlet b = 3;\nlet c = 2;\nlet d = 5;",
      hint: "Avval qavs ichidagi amalni bajaring",
      checkResult: (output) => output[0] === '9'
    },
    {
      id: 19,
      title: "Sonni ikkilantirish",
      description: "Berilgan sonni turli usullar bilan ikkilantirish",
      task: "son o'zgaruvchisini uch xil usulda ikkilantiring (*, +=, ++)",
      initialCode: "let son = 5;",
      hint: "son * 2, son += son, va son++ son++ usullarini qo'llang",
      checkResult: (output) => output[0] === '10' && output[1] === '10' && output[2] === '7'
    },
    {
      id: 20,
      title: "Kompleks masala",
      description: "Barcha o'rganilgan operatorlarni qo'llash",
      task: "(a + b) * c / d % e ifodani hisoblang",
      initialCode: "let a = 10;\nlet b = 5;\nlet c = 3;\nlet d = 4;\nlet e = 7;",
      hint: "Amallarni bajarish tartibiga e'tibor bering",
      checkResult: (output) => output[0] === '4'
    }
  ];
  
  export default practiceDataArifmetikOperators;
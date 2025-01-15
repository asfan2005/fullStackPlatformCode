const practiceDataArifmetikShouts = [
    {
      id: 1,
      title: "Qo'shib o'zlashtirish (+=)",
      description: "Qo'shib o'zlashtirish operatori (+=) o'zgaruvchiga qiymat qo'shib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisiga 5 ni += operatori orqali qo'shing",
      initialCode: "let son = 10;",
      hint: "son += 5 ko'rinishida yozing",
      checkResult: (output) => output[0] === '15'
    },
    {
      id: 2,
      title: "Ayirib o'zlashtirish (-=)",
      description: "Ayirib o'zlashtirish operatori (-=) o'zgaruvchidan qiymat ayirib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisidan 3 ni -= operatori orqali ayiring",
      initialCode: "let son = 15;",
      hint: "son -= 3 ko'rinishida yozing",
      checkResult: (output) => output[0] === '12'
    },
    {
      id: 3,
      title: "Ko'paytirib o'zlashtirish (*=)",
      description: "Ko'paytirib o'zlashtirish operatori (*=) o'zgaruvchini berilgan songa ko'paytirib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisini 4 ga *= operatori orqali ko'paytiring",
      initialCode: "let son = 3;",
      hint: "son *= 4 ko'rinishida yozing",
      checkResult: (output) => output[0] === '12'
    },
    {
      id: 4,
      title: "Bo'lib o'zlashtirish (/=)",
      description: "Bo'lib o'zlashtirish operatori (/=) o'zgaruvchini berilgan songa bo'lib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisini 2 ga /= operatori orqali bo'ling",
      initialCode: "let son = 10;",
      hint: "son /= 2 ko'rinishida yozing",
      checkResult: (output) => output[0] === '5'
    },
    {
      id: 5,
      title: "Qoldiqli bo'lib o'zlashtirish (%=)",
      description: "Qoldiqli bo'lib o'zlashtirish operatori (%=) bo'lish natijasidan qolgan qoldiqni o'zlashtiradi",
      task: "son o'zgaruvchisini 3 ga %= operatori orqali bo'ling va qoldiqni o'zlashtiring",
      initialCode: "let son = 7;",
      hint: "son %= 3 ko'rinishida yozing",
      checkResult: (output) => output[0] === '1'
    },
    {
      id: 6,
      title: "Darajaga ko'tarib o'zlashtirish (**=)",
      description: "Darajaga ko'tarib o'zlashtirish operatori (**=) o'zgaruvchini berilgan darajaga ko'tarib, natijani o'zlashtiradi",
      task: "son o'zgaruvchisini 2-darajaga **= operatori orqali ko'taring",
      initialCode: "let son = 4;",
      hint: "son **= 2 ko'rinishida yozing",
      checkResult: (output) => output[0] === '16'
    },
    {
      id: 7,
      title: "Kombinatsiyalangan qisqartmalar",
      description: "Bir nechta qisqartma operatorlarni ketma-ket ishlatish",
      task: "son o'zgaruvchisiga 5 ni qo'shing, keyin 2 ga ko'paytiring (qisqartma operatorlar bilan)",
      initialCode: "let son = 3;",
      hint: "son += 5 va son *= 2 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '16'
    },
    {
      id: 8,
      title: "Murakkab qisqartmalar",
      description: "Qisqartma operatorlarni murakkab ifodalar bilan ishlatish",
      task: "son o'zgaruvchisiga a ni qo'shing, keyin b ga bo'ling",
      initialCode: "let son = 10;\nlet a = 5;\nlet b = 3;",
      hint: "son += a va son /= b operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '5'
    },
    {
      id: 9,
      title: "Satrlar bilan qisqartmalar",
      description: "Qisqartma operatorlarni satrlar bilan ishlatish",
      task: "matn o'zgaruvchisiga ' dunyo' so'zini += operatori bilan qo'shing",
      initialCode: "let matn = 'Salom';",
      hint: "matn += ' dunyo' ko'rinishida yozing",
      checkResult: (output) => output[0] === 'Salom dunyo'
    },
    {
      id: 10,
      title: "Kompleks masala",
      description: "Barcha qisqartma operatorlarni birgalikda ishlatish",
      task: "son o'zgaruvchisiga 4 ni qo'shing, 2 ga ko'paytiring va 3 ga bo'lgandagi qoldiqni toping",
      initialCode: "let son = 5;",
      hint: "son += 4, son *= 2, son %= 3 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '0'
    },
    {
      id: 11,
      title: "Ko'p bosqichli amallar",
      description: "Bir nechta qisqartma operatorlarni mantiqiy ketma-ketlikda ishlatish",
      task: "son o'zgaruvchisiga 3 ni qo'shing, 2 ga ko'paytiring va 4 ga bo'ling",
      initialCode: "let son = 5;",
      hint: "son += 3, son *= 2, son /= 4 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '4'
    },
    {
      id: 12,
      title: "O'zgaruvchilar bilan ishlash",
      description: "Qisqartma operatorlarni o'zgaruvchilar bilan ishlatish",
      task: "natija o'zgaruvchisiga a ni qo'shing, b ga ko'paytiring va c ga bo'ling",
      initialCode: "let natija = 10;\nlet a = 5;\nlet b = 2;\nlet c = 5;",
      hint: "natija += a, natija *= b, natija /= c operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '6'
    },
    {
      id: 13,
      title: "Darajalar bilan ishlash",
      description: "Darajaga ko'tarish va boshqa amallarni birgalikda ishlatish",
      task: "son o'zgaruvchisini 2-darajaga ko'taring, keyin 5 ga qo'shing",
      initialCode: "let son = 3;",
      hint: "son **= 2, son += 5 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '14'
    },
    {
      id: 14,
      title: "Satrlarni birlashtirish",
      description: "Bir nechta satrlarni qisqartma operator orqali birlashtirish",
      task: "ism o'zgaruvchisiga ' ' va familiya o'zgaruvchisini qo'shing",
      initialCode: "let ism = 'Anvar';\nlet familiya = 'Qodirov';",
      hint: "ism += ' ' va ism += familiya operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === 'Anvar Qodirov'
    },
    {
      id: 15,
      title: "Qoldiqli bo'lish kombinatsiyasi",
      description: "Qoldiqli bo'lish va boshqa amallarni birgalikda ishlatish",
      task: "son o'zgaruvchisiga 7 ni qo'shing va 4 ga bo'lgandagi qoldiqni toping",
      initialCode: "let son = 5;",
      hint: "son += 7, son %= 4 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '0'
    },
    {
      id: 16,
      title: "Murakkab matematik amallar",
      description: "Turli qisqartma operatorlarni matematik masalada qo'llash",
      task: "son o'zgaruvchisini 3 ga ko'paytiring, 2-darajaga ko'taring va 10 ga bo'ling",
      initialCode: "let son = 2;",
      hint: "son *= 3, son **= 2, son /= 10 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '3.6'
    },
    {
      id: 17,
      title: "Mantiqiy ketma-ketlik",
      description: "Qisqartma operatorlarni mantiqiy ketma-ketlikda qo'llash",
      task: "son o'zgaruvchisidan 3 ni ayiring, 4 ga ko'paytiring va 2 ga bo'ling",
      initialCode: "let son = 10;",
      hint: "son -= 3, son *= 4, son /= 2 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '14'
    },
    {
      id: 18,
      title: "Aralash tiplar bilan ishlash",
      description: "Sonlar va satrlar bilan qisqartma operatorlarni ishlatish",
      task: "son o'zgaruvchisiga 5 ni qo'shing va natijani matn o'zgaruvchisiga qo'shing",
      initialCode: "let son = 10;\nlet matn = 'Natija: ';",
      hint: "son += 5 va matn += son operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === 'Natija: 15'
    },
    {
      id: 19,
      title: "Darajalar ketma-ketligi",
      description: "Ketma-ket darajaga ko'tarish amallari",
      task: "son o'zgaruvchisini avval 2-darajaga, keyin 3-darajaga ko'taring",
      initialCode: "let son = 2;",
      hint: "son **= 2, son **= 3 operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '64'
    },
    {
      id: 20,
      title: "Kompleks masala - 2",
      description: "Barcha o'rganilgan operatorlarni murakkab masalada qo'llash",
      task: "son o'zgaruvchisiga a ni qo'shing, b ga ko'paytiring, c ga bo'ling va d ga bo'lgandagi qoldiqni toping",
      initialCode: "let son = 10;\nlet a = 5;\nlet b = 3;\nlet c = 2;\nlet d = 7;",
      hint: "son += a, son *= b, son /= c, son %= d operatorlarini ketma-ket ishlating",
      checkResult: (output) => output[0] === '1'
    }
  ];
  
  export default practiceDataArifmetikShouts;
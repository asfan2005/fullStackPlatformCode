const practiceDataString = [
    {
      id: 1,
      title: "Satr (String) yaratish",
      description: "JavaScriptda satr (string) qiymatlarni yaratish uchun ' yoki \" belgilaridan foydalanamiz",
      task: "matn degan o'zgaruvchi yarating va unga 'Salom Dunyo' qiymatini bering, so'ng console.log() orqali chiqaring",
      initialCode: "// Satr yarating\nlet matn = 'Salom Dunyo';\nconsole.log(matn);",
      hint: "Satrni console.log() orqali chiqaring",
      checkResult: (output) => output[0] === 'Salom Dunyo'
    },
    {
      id: 2,
      title: "Satrlarni birlashtirish",
      description: "Satrlarni + operatori yoki concat() metodi orqali birlashtirish mumkin",
      task: "ism='Ali' va familiya='Valiyev' o'zgaruvchilarini birlashtirib, console.log() orqali chiqaring",
      initialCode: "let ism = 'Ali';\nlet familiya = 'Valiyev';\n// Yechimni yozing",
      hint: "console.log(ism + ' ' + familiya) orqali yechimni chiqaring",
      checkResult: (output) => output[0] === 'Ali Valiyev'
    },
    {
      id: 3,
      title: "Satr uzunligi",
      description: "Satr uzunligini .length xossasi orqali bilish mumkin",
      task: "matn='JavaScript' so'zining uzunligini console.log() orqali chiqaring",
      initialCode: "let matn = 'JavaScript';\n// Yechimni yozing",
      hint: "matn.length dan foydalaning",
      checkResult: (output) => output[0] === '10'
    },
    {
      id: 4,
      title: "Katta-kichik harflar",
      description: "toUpperCase() va toLowerCase() metodlari orqali harflarni o'zgartirish mumkin",
      task: "matn='Hello' so'zini katta harflarga o'zgartirib, console.log() orqali chiqaring",
      initialCode: "let matn = 'Hello';\n// Yechimni yozing",
      hint: "matn.toUpperCase() metodidan foydalaning",
      checkResult: (output) => output[0] === 'HELLO'
    },
    {
      id: 5,
      title: "Satrdan qism olish",
      description: "substring() metodi orqali satrning ma'lum qismini ajratib olish mumkin",
      task: "matn='JavaScript' so'zidan 'Script' qismini ajratib olib, console.log() orqali chiqaring",
      initialCode: "let matn = 'JavaScript';\n// Yechimni yozing",
      hint: "matn.substring(4) metodidan foydalaning",
      checkResult: (output) => output[0] === 'Script'
    },
    {
      id: 6,
      title: "Satrni almashtirish",
      description: "replace() metodi orqali satrdagi ma'lum qismni boshqa qiymat bilan almashtirish mumkin",
      task: "matn='Hello World' da 'World' so'zini 'JavaScript' ga almashtirib, natijani console.log() orqali chiqaring",
      initialCode: "let matn = 'Hello World';\n// Yechimni yozing",
      hint: "matn.replace('World', 'JavaScript') metodidan foydalaning",
      checkResult: (output) => output[0] === 'Hello JavaScript'
    },
    {
      id: 7,
      title: "Bo'sh joylarni olib tashlash",
      description: "trim() metodi satr boshi va oxiridagi bo'sh joylarni olib tashlaydi",
      task: "matn='  Salom  ' satridagi bo'sh joylarni olib tashlab, natijani console.log() orqali chiqaring",
      initialCode: "let matn = '  Salom  ';\n// Yechimni yozing",
      hint: "matn.trim() metodidan foydalaning",
      checkResult: (output) => output[0] === 'Salom'
    },
    {
      id: 8,
      title: "Satrni massivga aylantirish",
      description: "split() metodi satrni belgilangan ajratuvchi bo'yicha massivga ajratadi",
      task: "matn='olma,anor,uzum' satrini vergul bo'yicha massivga ajratib, console.log() orqali chiqaring",
      initialCode: "let matn = 'olma,anor,uzum';\n// Yechimni yozing",
      hint: "matn.split(',') metodidan foydalaning",
      checkResult: (output) => output[0] === 'olma,anor,uzum'.split(',').toString()
    },
    {
      id: 9,
      title: "Satrda qidirish",
      description: "includes() metodi satr ichida ma'lum bir qism borligini tekshiradi",
      task: "matn='JavaScript dasturlash tili' da 'dasturlash' so'zi borligini tekshirib, natijani console.log() orqali chiqaring",
      initialCode: "let matn = 'JavaScript dasturlash tili';\n// Yechimni yozing",
      hint: "matn.includes('dasturlash') metodidan foydalaning",
      checkResult: (output) => output[0] === 'true'
    },
    {
      id: 10,
      title: "Satr indeksi",
      description: "indexOf() metodi satrda ma'lum bir qism qaysi indeksdan boshlanishini qaytaradi",
      task: "matn='JavaScript' da 'Script' so'zi qaysi indeksdan boshlanishini console.log() orqali chiqaring",
      initialCode: "let matn = 'JavaScript';\n// Yechimni yozing",
      hint: "matn.indexOf('Script') metodidan foydalaning",
      checkResult: (output) => output[0] === '4'
    }
  ];
  
  export default practiceDataString;
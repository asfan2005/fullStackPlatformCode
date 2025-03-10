// Excel jadval yaratishni o'rgatuvchi ma'lumotlar massivi
export const excelTutorialData = [
    {
        step: 1,
        title: "Excel faylini ochish",
        description: "Microsoft Excel dasturini ishga tushuring va yangi ish varag'ini (worksheet) oching.",
        exampleData: { column: "A1", value: "Jadval nomi yozing (masalan, 'Talabalar')" },
        note: "Bu birinchi qadam bo'lib, Excelda ishni boshlash uchun zarur."
    },
    {
        step: 2,
        title: "Ustun sarlavhalarini kiritish",
        description: "Jadvalning birinchi qatoriga ustun nomlarini yozing (masalan, ID, Ism, Ball).",
        exampleData: [
            { column: "A1", value: "ID" },
            { column: "B1", value: "Ism" },
            { column: "C1", value: "Ball" },
            { column: "D1", value: "Baho" }
        ],
        note: "Ustun nomlari aniq va tushunarli bo'lishi kerak."
    },
    {
        step: 3,
        title: "Ma'lumotlarni kiritish",
        description: "Har bir ustun ostiga tegishli ma'lumotlarni kiriting.",
        exampleData: [
            { column: "A2", value: 1 },
            { column: "B2", value: "Ali" },
            { column: "C2", value: 85 },
            { column: "D2", value: "A" },
            { column: "A3", value: 2 },
            { column: "B3", value: "Nodira" },
            { column: "C3", value: 95 },
            { column: "D3", value: "A+" }
        ],
        note: "Ma'lumotlar to'g'ri tartibda va xatosiz kiritilishi kerak."
    },
    {
        step: 4,
        title: "Jadvalni formatlash",
        description: "Ma'lumotlarni tanlang va 'Format as Table' opsiyasidan jadval sifatida formatlang.",
        exampleData: "A1:D3 diapazonini tanlang -> Home -> Format as Table",
        note: "Bu jadvalni filtrlash va tartiblashni osonlashtiradi."
    },
    {
        step: 5,
        title: "Matematik formulalarni qo'shish",
        description: "O'rtacha ballni hisoblash uchun formuladan foydalaning.",
        exampleData: { column: "C4", value: "=AVERAGE(C2:C3)" },
        note: "Formulalar Excelda avtomatlashtirish uchun juda muhim."
    },
    {
        step: 6,
        title: "Ma'lumotlarni kengaytirish",
        description: "Jadvalga yangi qatorlar qo'shib, ko'proq ma'lumot kiriting.",
        exampleData: [
            { column: "A4", value: 3 },
            { column: "B4", value: "Sardor" },
            { column: "C4", value: 78 },
            { column: "D4", value: "B" }
        ],
        note: "Jadval avtomatik kengayishi uchun formatlashni unutmang."
    },
    {
        step: 7,
        title: "Faylni saqlash",
        description: "Ishingizni saqlash uchun File -> Save As ni bosing va .xlsx formatini tanlang.",
        exampleData: "Fayl nomi: 'Talabalar_Jadvali.xlsx'",
        note: "Saqlash joyini oson topiladigan qilib tanlang."
    },
    {
        step: 8,
        title: "Ma'lumotlarni filtrlash",
        description: "Jadval ustunlarini filtrlash orqali kerakli ma'lumotlarni ajratib olish.",
        exampleData: "Ustun sarlavhasidagi filter tugmasini bosing -> Kerakli filterni tanlang",
        note: "Filtrlar ma'lumotlarni tez tahlil qilishda yordam beradi."
    },
    {
        step: 9,
        title: "Diagrammalar yaratish",
        description: "Ma'lumotlarni vizual ko'rinishda taqdim etish uchun diagramma yarating.",
        exampleData: "Ma'lumotlarni tanlang -> Insert -> Chart -> Diagramma turini tanlang",
        note: "Diagrammalar ma'lumotlarni tahlil qilish va taqdim etishni osonlashtiradi."
    },
    {
        step: 10,
        title: "Shartli formatlash",
        description: "Ma'lumotlarni vizual ajratish uchun shartli formatlashdan foydalaning.",
        exampleData: "Ustunni tanlang -> Conditional Formatting -> Qoidani tanlang",
        note: "Muhim ma'lumotlarni ranglar yordamida ajratib ko'rsatish mumkin."
    }
];

// Qo'shimcha: 20 ta namunaviy ma'lumotlar massivi
export const sampleStudentData = [
    { id: 1, name: "Alisher", score: 98, grade: "A+" },
    { id: 2, name: "Nodira", score: 95, grade: "A+" },
    { id: 3, name: "Sardor", score: 87, grade: "A" },
    { id: 4, name: "Gulnora", score: 92, grade: "A+" },
    { id: 5, name: "Jasur", score: 85, grade: "A" },
    { id: 6, name: "Madina", score: 88, grade: "A" },
    { id: 7, name: "Vali", score: 78, grade: "B+" },
    { id: 8, name: "Zarina", score: 82, grade: "B+" },
    { id: 9, name: "Bobur", score: 75, grade: "B" },
    { id: 10, name: "Dilnoza", score: 93, grade: "A+" },
];

// Excel formulalar va funksiyalar haqida ma'lumotlar
export const excelFormulasData = [
    {
        category: "Asosiy matematik formulalar",
        formulas: [
            {
                name: "Yig'indi (SUM)",
                syntax: "=SUM(A1:A10)",
                description: "Tanlangan diapazondagi sonlarni qo'shadi",
                example: { range: "A1:A5", result: "=SUM(A1:A5)" }
            },
            {
                name: "O'rtacha (AVERAGE)",
                syntax: "=AVERAGE(B1:B10)",
                description: "Tanlangan diapazondagi sonlarning o'rtachasini hisoblaydi",
                example: { range: "B1:B5", result: "=AVERAGE(B1:B5)" }
            },
            {
                name: "Yaxlitlash (ROUND)",
                syntax: "=ROUND(number, num_digits)",
                description: "Sonni belgilangan xonagacha yaxlitlaydi",
                example: { value: "=ROUND(123.456, 2)", result: "123.46" }
            },
            {
                name: "Butun qism (INT)",
                syntax: "=INT(number)",
                description: "Sonning butun qismini oladi",
                example: { value: "=INT(123.789)", result: "123" }
            }
        ]
    },
    {
        category: "Statistik formulalar",
        formulas: [
            {
                name: "Maksimum (MAX)",
                syntax: "=MAX(D1:D10)",
                description: "Eng katta qiymatni topadi",
                example: { range: "D1:D10", result: "=MAX(D1:D10)" }
            },
            {
                name: "Mod (MODE)",
                syntax: "=MODE(range)",
                description: "Eng ko'p takrorlangan qiymatni topadi",
                example: { range: "A1:A10", result: "=MODE(A1:A10)" }
            },
            {
                name: "Standart Og'ish (STDEV)",
                syntax: "=STDEV(range)",
                description: "Ma'lumotlar to'plamining standart og'ishini hisoblaydi",
                example: { range: "B1:B10", result: "=STDEV(B1:B10)" }
            },
            {
                name: "Percentile (PERCENTILE)",
                syntax: "=PERCENTILE(range, k)",
                description: "Ma'lumotlar to'plamining k-percentilini hisoblaydi",
                example: { range: "C1:C10, 0.75", result: "=PERCENTILE(C1:C10, 0.75)" }
            }
        ]
    },
    {
        category: "Matn formulalari",
        formulas: [
            {
                name: "Birlashtirish (CONCATENATE)",
                syntax: "=CONCATENATE(text1, text2, ...)",
                description: "Bir nechta matnlarni birlashtiradi",
                example: { value: "=CONCATENATE(A1, \" \", B1)", result: "Alisher Navoiy" }
            },
            {
                name: "Matn uzunligi (LEN)",
                syntax: "=LEN(text)",
                description: "Matndagi belgilar sonini qaytaradi",
                example: { value: "=LEN(\"Hello\")", result: "5" }
            },
            {
                name: "Katta harf (UPPER)",
                syntax: "=UPPER(text)",
                description: "Matnni katta harflarga o'zgartiradi",
                example: { value: "=UPPER(\"hello\")", result: "HELLO" }
            }
        ]
    },
    {
        category: "Sana va vaqt formulalari",
        formulas: [
            {
                name: "Bugungi sana (TODAY)",
                syntax: "=TODAY()",
                description: "Joriy sanani qaytaradi",
                example: { value: "=TODAY()", result: "44987" }
            },
            {
                name: "Kunlar farqi (DATEDIF)",
                syntax: "=DATEDIF(start_date, end_date, unit)",
                description: "Ikki sana orasidagi farqni hisoblaydi",
                example: { value: "=DATEDIF(\"1/1/2023\", \"12/31/2023\", \"D\")", result: "364" }
            }
        ]
    },
    {
        category: "Moliyaviy formulalar",
        formulas: [
            {
                name: "To'lov (PMT)",
                syntax: "=PMT(rate, nper, pv)",
                description: "Kredit to'lovlarini hisoblaydi",
                example: { value: "=PMT(0.1/12, 36, 1000000)", result: "-32267.79" }
            },
            {
                name: "Kelajak qiymati (FV)",
                syntax: "=FV(rate, nper, pmt, pv)",
                description: "Investitsiyaning kelajakdagi qiymatini hisoblaydi",
                example: { value: "=FV(0.08/12, 12, -1000, -10000)", result: "22877.47" }
            }
        ]
    },
    {
        category: "Ilg'or mantiqiy funksiyalar",
        formulas: [
            {
                name: "SUMIFS",
                syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)",
                description: "Bir nechta shartlarga mos keluvchi qiymatlar yig'indisini hisoblaydi",
                example: { value: "=SUMIFS(C2:C10, B2:B10, \">=90\", D2:D10, \"A+\")", result: "Yuqori balli talabalar yig'indisi" }
            },
            {
                name: "COUNTIFS",
                syntax: "=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]...)",
                description: "Bir nechta shartlarga mos keluvchi qiymatlar sonini hisoblaydi",
                example: { value: "=COUNTIFS(B2:B10, \">=90\", D2:D10, \"A+\")", result: "A+ olgan talabalar soni" }
            }
        ]
    },
    {
        category: "Ma'lumotlarni tahlil qilish funksiyalari",
        formulas: [
            {
                name: "RANK",
                syntax: "=RANK(number, ref, [order])",
                description: "Raqamning berilgan diapazondagi o'rnini aniqlaydi",
                example: { value: "=RANK(B2, $B$2:$B$10, 0)", result: "Talabaning reytingdagi o'rni" }
            },
            {
                name: "LARGE",
                syntax: "=LARGE(array, k)",
                description: "Massivdagi k-chi eng katta qiymatni qaytaradi",
                example: { value: "=LARGE(B2:B10, 3)", result: "3-chi eng yuqori ball" }
            }
        ]
    }
];

// Excel funksiyalari bo'yicha qo'shimcha ma'lumotlar
export const excelAdvancedData = [
    {
        category: "Mantiqiy funksiyalar",
        functions: [
            {
                name: "IF",
                syntax: "=IF(A1>90, \"A+\", \"B\")",
                description: "Shartga asosan qiymat qaytaradi",
                example: "Agar ball 90 dan yuqori bo'lsa A+, aks holda B"
            },
            {
                name: "COUNTIF",
                syntax: "=COUNTIF(A1:A10, \">90\")",
                description: "Shartga mos keluvchi qiymatlar sonini hisoblaydi",
                example: "90 dan yuqori baholar sonini hisoblash"
            }
        ]
    },
    {
        category: "Izlash funksiyalari",
        functions: [
            {
                name: "VLOOKUP",
                syntax: "=VLOOKUP(lookup_value, table_array, col_index_num)",
                description: "Vertikal jadvaldan ma'lumot izlaydi",
                example: "Talaba ID si bo'yicha uning bahosini topish"
            },
            {
                name: "HLOOKUP",
                syntax: "=HLOOKUP(lookup_value, table_array, row_index_num)",
                description: "Gorizontal jadvaldan ma'lumot izlaydi",
                example: "Fan nomi bo'yicha o'rtacha ballni topish"
            }
        ]
    }
];

// Qo'shimcha namunaviy ma'lumotlar
export const additionalExamples = [
    {
        title: "Talaba baholash formulasi",
        formula: "=IF(AND(B2>=90,B2<=100),\"A+\",IF(AND(B2>=80,B2<90),\"A\",IF(AND(B2>=70,B2<80),\"B\",\"C\")))",
        description: "Ballarga qarab baho qo'yish",
        example: [
            { ball: 95, natija: "A+" },
            { ball: 85, natija: "A" },
            { ball: 75, natija: "B" }
        ]
    },
    {
        title: "O'rtacha ball hisoblash",
        formula: "=AVERAGE(B2:B20)",
        description: "Guruh bo'yicha o'rtacha ball",
        example: "Barcha talabalar ballari yig'indisi / talabalar soni"
    }
];

// Excel bilan ishlash bo'yicha qo'shimcha maslahatlar
export const excelTipsData = [
    {
        category: "Klaviatura yorliqlari",
        tips: [
            { shortcut: "Ctrl + C", description: "Nusxa olish" },
            { shortcut: "Ctrl + V", description: "Qo'yish" },
            { shortcut: "Ctrl + Z", description: "Ortga qaytarish" },
            { shortcut: "Ctrl + Y", description: "Oldinga qaytarish" },
            { shortcut: "Ctrl + S", description: "Saqlash" },
            { shortcut: "F2", description: "Katak tahrirlash" },
            { shortcut: "Ctrl + 1", description: "Formatlash oynasini ochish" },
            { shortcut: "Alt + =", description: "AutoSum funksiyasi" },
            { shortcut: "Ctrl + Shift + L", description: "Filterni yoqish/o'chirish" },
            { shortcut: "Ctrl + PgUp/PgDn", description: "Varaqlar orasida o'tish" },
            { shortcut: "Ctrl + Arrow", description: "Ma'lumotlar oxiriga sakrash" },
            { shortcut: "Ctrl + Space", description: "Ustunni tanlash" },
            { shortcut: "Shift + Space", description: "Qatorni tanlash" },
            { shortcut: "Ctrl + ;", description: "Joriy sanani kiritish" },
            { shortcut: "Ctrl + Shift + :", description: "Joriy vaqtni kiritish" }
        ]
    },
    {
        category: "Excel bilan ishlash maslahatlari",
        tips: [
            {
                title: "Ma'lumotlarni tekshirish",
                description: "Data -> Data Validation orqali ma'lumotlar kiritishni cheklash va tekshirish"
            },
            {
                title: "Pivot jadvallar",
                description: "Katta hajmdagi ma'lumotlarni tahlil qilish uchun Pivot Table dan foydalaning"
            },
            {
                title: "Ma'lumotlarni himoyalash",
                description: "Review -> Protect Sheet orqali ma'lumotlarni himoyalang"
            },
            {
                title: "Flash Fill",
                description: "Ctrl + E yordamida ma'lumotlarni avtomatik to'ldirish"
            },
            {
                title: "Shartli formatlash",
                description: "Home -> Conditional Formatting orqali ma'lumotlarni vizual ajratish"
            },
            {
                title: "Ma'lumotlarni filtrlash",
                description: "Data -> Filter orqali ma'lumotlarni saralash va filtrlash"
            }
        ]
    },
    {
        category: "Excel formulalar bilan ishlash",
        tips: [
            {
                title: "Nisbiy va mutlaq havolalar",
                description: "$ belgisi bilan mutlaq havolalarni yaratish (masalan, $A$1)"
            },
            {
                title: "Formulalarni nusxalash",
                description: "Fill handle yordamida formulalarni avtomatik nusxalash"
            },
            {
                title: "Formulalar tekshiruvi",
                description: "Formulas -> Error Checking orqali xatolarni tekshirish"
            },
            {
                title: "Named Ranges",
                description: "Formulas -> Name Manager orqali diapazonlarga nom berish"
            }
        ]
    },
    {
        category: "Ma'lumotlarni vizualizatsiya qilish",
        tips: [
            {
                title: "Diagrammalar",
                description: "Insert -> Charts orqali ma'lumotlarni vizual ko'rinishda taqdim etish"
            },
            {
                title: "Sparklines",
                description: "Insert -> Sparklines orqali kichik grafiklarni yaratish"
            },
            {
                title: "Smart Art",
                description: "Insert -> SmartArt orqali ma'lumotlarni chiroyli ko'rinishda taqdim etish"
            }
        ]
    },
    {
        category: "Ma'lumotlarni tahlil qilish",
        tips: [
            {
                title: "What-If Analysis",
                description: "Data -> What-If Analysis orqali turli senariylarni tekshirish"
            },
            {
                title: "Goal Seek",
                description: "Data -> What-If Analysis -> Goal Seek orqali maqsadli natijaga erishish"
            },
            {
                title: "Solver",
                description: "Data -> Solver orqali murakkab masalalarni yechish"
            }
        ]
    },
    {
        category: "Excel xavfsizligi",
        tips: [
            {
                title: "Fayl himoyasi",
                description: "File -> Info -> Protect Workbook orqali faylni himoyalash"
            },
            {
                title: "Varaq himoyasi",
                description: "Review -> Protect Sheet orqali varaqni himoyalash"
            },
            {
                title: "Makrolar xavfsizligi",
                description: "File -> Options -> Trust Center orqali makrolar xavfsizligini sozlash"
            }
        ]
    },
    {
        category: "Excel unumdorlik maslahatlari",
        tips: [
            {
                title: "Custom Views",
                description: "View -> Custom Views orqali turli ko'rinishlarni saqlash"
            },
            {
                title: "Quick Analysis",
                description: "Ma'lumotlarni tanlagan holda Ctrl + Q bosish orqali tezkor tahlil"
            },
            {
                title: "Templates",
                description: "File -> New orqali tayyor shablonlardan foydalanish"
            },
            {
                title: "Auto-Calculate",
                description: "Formulas -> Calculation Options orqali hisoblash rejimini sozlash"
            }
        ]
    }
];

// Tutorialni konsolda ko'rsatish funksiyasi
function displayExcelTutorial(data) {
   
    data.forEach(step => {
        
        if (Array.isArray(step.exampleData)) {
            step.exampleData.forEach(item => {
                
            });
        } else {
           
        }
        
    });
}

// Statistik ma'lumotlarni hisoblash funksiyasi
function calculateStatistics(data) {
    const totalStudents = data.length;
    const averageScore = data.reduce((sum, student) => sum + student.score, 0) / totalStudents;
    
    const gradeCount = data.reduce((acc, student) => {
        acc[student.grade] = (acc[student.grade] || 0) + 1;
        return acc;
    }, {});

    return {
        totalStudents,
        averageScore: averageScore.toFixed(1),
        gradeDistribution: gradeCount
    };
}

// Statistikani ko'rsatish funksiyasi
function displayStatistics(data) {
    const stats = calculateStatistics(data);
 
    Object.entries(stats.gradeDistribution).forEach(([grade, count]) => {
      
    });
}

// Namunaviy ma'lumotlarni jadval sifatida ko'rsatish
function displaySampleData(data) {
   
    data.forEach(item => {
    
    });
    
    // Statistikani ko'rsatish
    displayStatistics(data);
}

// Formulalarni ko'rsatish funksiyasi
function displayExcelFormulas(data) {
   
    data.forEach(category => {
      
        category.formulas.forEach(formula => {
            
        });
    });
}

// Natijalarni chiqarish
displayExcelTutorial(excelTutorialData);
displaySampleData(sampleStudentData);
displayExcelFormulas(excelFormulasData);

// JSON formatida eksport qilish
const jsonTutorial = JSON.stringify(excelTutorialData, null, 2);
const jsonSampleData = JSON.stringify(sampleStudentData, null, 2);

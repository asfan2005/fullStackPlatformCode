const dataMalumotlarBilanIsh = [
    {
        id: 1,
        title: "Array Metodlari",
        description: "JavaScript array metodlari bilan ishlash",
        examples: [
            {
                name: "Map, Filter va Reduce",
                code: `// Map - har bir elementni o'zgartirish
const mahsulotlar = [
    { id: 1, nomi: 'Telefon', narxi: 1000 },
    { id: 2, nomi: 'Noutbuk', narxi: 2000 },
    { id: 3, nomi: 'Planshet', narxi: 500 }
];

// Narxlarni 10% ga oshirish
const yangiNarxlar = mahsulotlar.map(mahsulot => ({
    ...mahsulot,
    narxi: mahsulot.narxi * 1.1
}));

// Filter - ma'lumotlarni filtrlash
const qimmatMahsulotlar = mahsulotlar.filter(mahsulot => 
    mahsulot.narxi > 1000
);

// Reduce - ma'lumotlarni agregatsiya qilish
const umumiyNarx = mahsulotlar.reduce((jami, mahsulot) => 
    jami + mahsulot.narxi, 0
);`,
                explanation: "Array metodlarining asosiy funksiyalari",
                result: "Ma'lumotlarni qayta ishlash"
            }
        ]
    },
    {
        id: 2,
        title: "Ma'lumotlarni Saralash va Filtrlash",
        description: "Murakkab ma'lumotlar ustida amallar",
        examples: [
            {
                name: "Murakkab filtrlash va saralash",
                code: `// Ma'lumotlarni saralash
function saralashVaFiltrlash(data, options) {
    let natija = [...data];
    
    // Filtrlash
    if (options.filter) {
        natija = natija.filter(item => {
            return Object.entries(options.filter).every(([key, value]) => 
                item[key].toString().toLowerCase().includes(value.toLowerCase())
            );
        });
    }
    
    // Saralash
    if (options.sort) {
        const { field, direction } = options.sort;
        natija.sort((a, b) => {
            if (direction === 'asc') {
                return a[field] > b[field] ? 1 : -1;
            }
            return a[field] < b[field] ? 1 : -1;
        });
    }
    
    return natija;
}

// Ishlatish
const foydalanuvchilar = [
    { id: 1, ism: 'Ali', yosh: 25 },
    { id: 2, ism: 'Vali', yosh: 30 },
    { id: 3, ism: 'Gani', yosh: 20 }
];

const natija = saralashVaFiltrlash(foydalanuvchilar, {
    filter: { ism: 'a' },
    sort: { field: 'yosh', direction: 'asc' }
});`,
                explanation: "Ma'lumotlarni saralash va filtrlash funksiyalari",
                result: "Tartiblangan va filtrlangan ma'lumotlar"
            }
        ]
    },
    {
        id: 3,
        title: "State Management",
        description: "Redux va Context API bilan ishlash",
        examples: [
            {
                name: "Redux Toolkit slice",
                code: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action
export const getMahsulotlar = createAsyncThunk(
    'mahsulotlar/get',
    async () => {
        const response = await fetch('https://api.example.com/mahsulotlar');
        return response.json();
    }
);

const mahsulotlarSlice = createSlice({
    name: 'mahsulotlar',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        qoshish: (state, action) => {
            state.items.push(action.payload);
        },
        ochirish: (state, action) => {
            state.items = state.items.filter(item => 
                item.id !== action.payload
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMahsulotlar.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMahsulotlar.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getMahsulotlar.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});`,
                explanation: "Redux Toolkit yordamida state management",
                result: "Markazlashgan holatni boshqarish"
            }
        ]
    },
    {
        id: 4,
        title: "Ma'lumotlar Formatlari",
        description: "Turli format va fayllar bilan ishlash",
        examples: [
            {
                name: "CSV va JSON konvertatsiya",
                code: `// CSV ni JSON ga o'girish
function csvToJson(csv) {
    const lines = csv.split('\\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j].trim();
        }
        result.push(obj);
    }

    return result;
}

// JSON ni CSV ga o'girish
function jsonToCsv(json) {
    const headers = Object.keys(json[0]);
    const csvRows = [];
    
    // Header qatori
    csvRows.push(headers.join(','));
    
    // Ma'lumotlar qatorlari
    for (const item of json) {
        const values = headers.map(header => {
            const val = item[header];
            return \`"\${val}"\`;
        });
        csvRows.push(values.join(','));
    }
    
    return csvRows.join('\\n');
}`,
                explanation: "CSV va JSON formatlarini konvertatsiya qilish",
                result: "Formatlar o'rtasida ma'lumotlarni almashtirish"
            }
        ]
    }
];

export default dataMalumotlarBilanIsh;
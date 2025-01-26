const dataGridTizimi = [
    {
        "id": 1,
        "title": "Grid Container",
        "desc": "Grid container xususiyatlarini boshqarish",
        "items": [
            {
                "name": "Display Grid",
                "code": "grid",
                "description": "Elementni grid container sifatida belgilash",
                "examples": [
                    "grid",
                    "inline-grid"
                ],
                "values": {
                    "grid": "display: grid",
                    "inline-grid": "display: inline-grid"
                },
                "codeExample": `<div class="grid">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-red-500 p-4">2</div>
  <div class="bg-green-500 p-4">3</div>
</div>`
            }
        ]
    },
    {
        "id": 2,
        "title": "Grid Template Columns",
        "desc": "Ustunlarni sozlash",
        "items": [
            {
                "name": "Grid Columns",
                "code": "grid-cols-{n}",
                "description": "Ustunlar sonini belgilash",
                "examples": [
                    "grid-cols-1",
                    "grid-cols-2",
                    "grid-cols-3",
                    "grid-cols-4",
                    "grid-cols-12"
                ],
                "values": {
                    "grid-cols-1": "repeat(1, minmax(0, 1fr))",
                    "grid-cols-2": "repeat(2, minmax(0, 1fr))",
                    "grid-cols-3": "repeat(3, minmax(0, 1fr))",
                    "grid-cols-4": "repeat(4, minmax(0, 1fr))",
                    "grid-cols-12": "repeat(12, minmax(0, 1fr))"
                },
                "codeExample": `<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-red-500 p-4">2</div>
  <div class="bg-green-500 p-4">3</div>
</div>`
            }
        ]
    },
    {
        "id": 3,
        "title": "Grid Template Rows",
        "desc": "Qatorlarni sozlash",
        "items": [
            {
                "name": "Grid Rows",
                "code": "grid-rows-{n}",
                "description": "Qatorlar sonini belgilash",
                "examples": [
                    "grid-rows-1",
                    "grid-rows-2",
                    "grid-rows-3",
                    "grid-rows-4",
                    "grid-rows-6"
                ],
                "values": {
                    "grid-rows-1": "repeat(1, minmax(0, 1fr))",
                    "grid-rows-2": "repeat(2, minmax(0, 1fr))",
                    "grid-rows-3": "repeat(3, minmax(0, 1fr))",
                    "grid-rows-4": "repeat(4, minmax(0, 1fr))",
                    "grid-rows-6": "repeat(6, minmax(0, 1fr))"
                }
            }
        ]
    },
    {
        "id": 4,
        "title": "Grid Column/Row Span",
        "desc": "Elementlarning ustun va qatorlar bo'yicha cho'zilishi",
        "items": [
            {
                "name": "Column Span",
                "code": "col-span-{n}",
                "description": "Element egallashi kerak bo'lgan ustunlar soni",
                "examples": [
                    "col-span-1",
                    "col-span-2",
                    "col-span-3",
                    "col-span-full"
                ],
                "codeExample": `<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 bg-blue-500 p-4">Katta element</div>
  <div class="bg-red-500 p-4">Kichik element</div>
</div>`
            },
            {
                "name": "Row Span",
                "code": "row-span-{n}",
                "description": "Element egallashi kerak bo'lgan qatorlar soni",
                "examples": [
                    "row-span-1",
                    "row-span-2",
                    "row-span-3",
                    "row-span-full"
                ]
            }
        ]
    },
    {
        "id": 5,
        "title": "Grid Gap",
        "desc": "Grid elementlari orasidagi masofani boshqarish",
        "items": [
            {
                "name": "Gap",
                "code": "gap-{size}",
                "description": "Grid elementlari orasidagi masofani belgilash",
                "examples": [
                    "gap-0",
                    "gap-1",
                    "gap-2",
                    "gap-4",
                    "gap-8",
                    "gap-x-4",
                    "gap-y-4"
                ],
                "values": {
                    "gap-0": "0px",
                    "gap-1": "0.25rem",
                    "gap-2": "0.5rem",
                    "gap-4": "1rem",
                    "gap-8": "2rem"
                },
                "codeExample": `<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-red-500 p-4">2</div>
  <div class="bg-green-500 p-4">3</div>
</div>`
            }
        ]
    },
    {
        "id": 6,
        "title": "Grid Auto Flow",
        "desc": "Grid elementlarining avtomatik joylashish tartibini boshqarish",
        "items": [
            {
                "name": "Grid Auto Flow",
                "code": "grid-flow-{value}",
                "description": "Elementlarning joylashish yo'nalishini belgilash",
                "examples": [
                    "grid-flow-row",
                    "grid-flow-col",
                    "grid-flow-row-dense",
                    "grid-flow-col-dense"
                ],
                "values": {
                    "grid-flow-row": "row",
                    "grid-flow-col": "column",
                    "grid-flow-row-dense": "row dense",
                    "grid-flow-col-dense": "column dense"
                }
            }
        ]
    },
    {
        "id": 7,
        "title": "Grid Alignment",
        "desc": "Grid elementlarini tekislash",
        "items": [
            {
                "name": "Justify Items",
                "code": "justify-items-{value}",
                "description": "Grid elementlarini gorizontal tekislash",
                "examples": [
                    "justify-items-start",
                    "justify-items-end",
                    "justify-items-center",
                    "justify-items-stretch"
                ]
            },
            {
                "name": "Align Items",
                "code": "items-{value}",
                "description": "Grid elementlarini vertikal tekislash",
                "examples": [
                    "items-start",
                    "items-end",
                    "items-center",
                    "items-stretch"
                ]
            }
        ]
    }
];

export default dataGridTizimi;

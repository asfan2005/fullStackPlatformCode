const dataFlexboxAsoslar = [
    {
        "id": 1,
        "title": "Flexbox Container",
        "desc": "Flex container xususiyatlarini boshqarish",
        "items": [
            {
                "name": "Display Flex",
                "code": "flex",
                "description": "Elementni flex container sifatida belgilash",
                "examples": [
                    "flex",
                    "inline-flex"
                ],
                "values": {
                    "flex": "display: flex",
                    "inline-flex": "display: inline-flex"
                },
                "codeExample": `<div class="flex">
  <div class="w-20 h-20 bg-blue-500"></div>
  <div class="w-20 h-20 bg-red-500"></div>
  <div class="w-20 h-20 bg-green-500"></div>
</div>`
            },
            {
                "name": "Flex yo'nalishi",
                "code": "flex-{direction}",
                "description": "Flex elementlarining joylashish yo'nalishini belgilash",
                "examples": [
                    "flex-row",
                    "flex-row-reverse",
                    "flex-col",
                    "flex-col-reverse"
                ],
                "codeExample": `<div class="flex flex-row">
  <div class="w-20 h-20 bg-blue-500">1</div>
  <div class="w-20 h-20 bg-red-500">2</div>
  <div class="w-20 h-20 bg-green-500">3</div>
</div>

<div class="flex flex-col">
  <div class="w-20 h-20 bg-blue-500">1</div>
  <div class="w-20 h-20 bg-red-500">2</div>
  <div class="w-20 h-20 bg-green-500">3</div>
</div>`
            }
        ]
    },
    {
        "id": 2,
        "title": "Flex Wrap",
        "desc": "Qatorga sig'may qolgan elementlarni keyingi qatorga o'tkazish",
        "items": [
            {
                "name": "Wrap xususiyatlari",
                "code": "flex-{wrap}",
                "description": "Elementlarning o'ralish xususiyatini boshqarish",
                "examples": [
                    "flex-wrap",
                    "flex-wrap-reverse",
                    "flex-nowrap"
                ],
                "values": {
                    "flex-wrap": "wrap",
                    "flex-wrap-reverse": "wrap-reverse",
                    "flex-nowrap": "nowrap"
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "Justify Content",
        "desc": "Asosiy o'q bo'yicha elementlarni joylashtirishni boshqarish",
        "items": [
            {
                "name": "Justify Content xususiyatlari",
                "code": "justify-{value}",
                "description": "Gorizontal tekislashni boshqarish",
                "examples": [
                    "justify-start",
                    "justify-end",
                    "justify-center",
                    "justify-between",
                    "justify-around",
                    "justify-evenly"
                ],
                "values": {
                    "justify-start": "flex-start",
                    "justify-end": "flex-end",
                    "justify-center": "center",
                    "justify-between": "space-between",
                    "justify-around": "space-around",
                    "justify-evenly": "space-evenly"
                },
                "codeExample": `<div class="flex justify-center w-full bg-gray-100">
  <div class="w-20 h-20 bg-blue-500"></div>
  <div class="w-20 h-20 bg-red-500"></div>
  <div class="w-20 h-20 bg-green-500"></div>
</div>

<div class="flex justify-between w-full bg-gray-100">
  <div class="w-20 h-20 bg-blue-500"></div>
  <div class="w-20 h-20 bg-red-500"></div>
  <div class="w-20 h-20 bg-green-500"></div>
</div>`
            }
        ]
    },
    {
        "id": 4,
        "title": "Align Items",
        "desc": "Ko'ndalang o'q bo'yicha elementlarni tekislash",
        "items": [
            {
                "name": "Align Items xususiyatlari",
                "code": "items-{value}",
                "description": "Vertikal tekislashni boshqarish",
                "examples": [
                    "items-start",
                    "items-end",
                    "items-center",
                    "items-baseline",
                    "items-stretch"
                ],
                "values": {
                    "items-start": "flex-start",
                    "items-end": "flex-end",
                    "items-center": "center",
                    "items-baseline": "baseline",
                    "items-stretch": "stretch"
                },
                "codeExample": `<div class="flex items-center h-40 bg-gray-100">
  <div class="w-20 h-20 bg-blue-500"></div>
  <div class="w-20 h-32 bg-red-500"></div>
  <div class="w-20 h-16 bg-green-500"></div>
</div>

<div class="flex items-stretch h-40 bg-gray-100">
  <div class="w-20 bg-blue-500"></div>
  <div class="w-20 bg-red-500"></div>
  <div class="w-20 bg-green-500"></div>
</div>`
            }
        ]
    },
    {
        "id": 5,
        "title": "Flex Item xususiyatlari",
        "desc": "Individual flex elementlarini boshqarish",
        "items": [
            {
                "name": "Flex Growth",
                "code": "flex-{value}",
                "description": "Elementning o'sish qobiliyatini boshqarish",
                "examples": [
                    "flex-1",
                    "flex-auto",
                    "flex-initial",
                    "flex-none"
                ],
                "values": {
                    "flex-1": "1 1 0%",
                    "flex-auto": "1 1 auto",
                    "flex-initial": "0 1 auto",
                    "flex-none": "none"
                },
                "codeExample": `<div class="flex gap-4 w-full">
  <div class="flex-1 h-20 bg-blue-500">flex-1</div>
  <div class="flex-1 h-20 bg-red-500">flex-1</div>
  <div class="flex-none w-20 h-20 bg-green-500">flex-none</div>
</div>`
            },
            {
                "name": "Align Self",
                "code": "self-{value}",
                "description": "Individual elementning tekislanishini boshqarish",
                "examples": [
                    "self-auto",
                    "self-start",
                    "self-end",
                    "self-center",
                    "self-stretch"
                ]
            }
        ]
    },
    {
        "id": 6,
        "title": "Gap (Oraliq)",
        "desc": "Flex elementlari orasidagi masofani boshqarish",
        "items": [
            {
                "name": "Gap xususiyatlari",
                "code": "gap-{size}",
                "description": "Elementlar orasidagi masofani belgilash",
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
                }
            }
        ]
    }
];

export default dataFlexboxAsoslar;

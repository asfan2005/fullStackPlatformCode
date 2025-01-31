const dataJadvallar = [
    {
        id: 1,
        title: "Oddiy Jadval",
        codeExample: `<table class="min-w-full">
    <thead>
        <tr>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left">Sarlavha</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left">Malumot</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="px-6 py-4 border-b border-gray-300">Qator 1</td>
            <td class="px-6 py-4 border-b border-gray-300">Malumot 1</td>
        </tr>
    </tbody>
</table>`
    },
    {
        id: 2,
        title: "Border Collapse Jadval",
        codeExample: `<table class="border-collapse border border-slate-400">
    <thead>
        <tr>
            <th class="border border-slate-300 p-4">Sarlavha 1</th>
            <th class="border border-slate-300 p-4">Sarlavha 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-4">Qator 1</td>
            <td class="border border-slate-300 p-4">Malumot 1</td>
        </tr>
    </tbody>
</table>`
    },
    {
        id: 3,
        title: "Striped Rows Jadval",
        codeExample: `<table class="min-w-full">
    <tbody>
        <tr class="bg-white">
            <td class="px-6 py-4">Qator 1</td>
            <td class="px-6 py-4">Malumot 1</td>
        </tr>
        <tr class="bg-gray-50">
            <td class="px-6 py-4">Qator 2</td>
            <td class="px-6 py-4">Malumot 2</td>
        </tr>
        <tr class="bg-white">
            <td class="px-6 py-4">Qator 3</td>
            <td class="px-6 py-4">Malumot 3</td>
        </tr>
    </tbody>
</table>`
    },
    {
        id: 4,
        title: "Responsive Jadval",
        codeExample: `<div class="overflow-x-auto">
    <table class="min-w-full lg:w-2/3">
        <thead>
            <tr>
                <th class="w-1/4 px-4 py-2">Sarlavha 1</th>
                <th class="w-1/4 px-4 py-2">Sarlavha 2</th>
                <th class="w-1/4 px-4 py-2">Sarlavha 3</th>
                <th class="w-1/4 px-4 py-2">Sarlavha 4</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border px-4 py-2">Malumot 1</td>
                <td class="border px-4 py-2">Malumot 2</td>
                <td class="border px-4 py-2">Malumot 3</td>
                <td class="border px-4 py-2">Malumot 4</td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    {
        id: 5,
        title: "Table Spacing",
        codeExample: `<table class="border-separate border-spacing-2">
    <thead>
        <tr>
            <th class="border border-slate-600 rounded-md p-4">Sarlavha 1</th>
            <th class="border border-slate-600 rounded-md p-4">Sarlavha 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-700 rounded-md p-4">Malumot 1</td>
            <td class="border border-slate-700 rounded-md p-4">Malumot 2</td>
        </tr>
    </tbody>
</table>`
    },
    {
        id: 6,
        title: "Zamonaviy Jadval",
        codeExample: `<table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
        <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nomi
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
            </th>
        </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Misol nomi
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Faol
                </span>
            </td>
        </tr>
    </tbody>
</table>`
    },
    {
        id: 7,
        title: "Interaktiv Jadval",
        codeExample: `<table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-100">
        <tr>
            <th class="group px-6 py-3 text-left cursor-pointer hover:bg-gray-200">
                <div class="flex items-center space-x-2">
                    <span class="text-sm font-semibold text-gray-600">Ism</span>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M8 15l4-4 4 4"></path>
                    </svg>
                </div>
            </th>
            <th class="px-6 py-3 text-left">Status</th>
            <th class="px-6 py-3 text-left">Amallar</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
                <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" src="avatar.jpg" alt="">
                    </div>
                    <div class="ml-4">
                        <div class="font-medium text-gray-900">Abdulloh</div>
                        <div class="text-gray-500">abdulloh@example.com</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Faol
                </span>
            </td>
            <td class="px-6 py-4">
                <button class="text-indigo-600 hover:text-indigo-900">Tahrirlash</button>
            </td>
        </tr>
    </tbody>
</table>`
    },
    {
        id: 8,
        title: "Statistika Jadvali",
        codeExample: `<div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
            <tr>
                <th class="px-6 py-4 font-medium text-gray-900">Mahsulot</th>
                <th class="px-6 py-4 font-medium text-gray-900">Sotildi</th>
                <th class="px-6 py-4 font-medium text-gray-900">O'sish</th>
                <th class="px-6 py-4 font-medium text-gray-900">Holat</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">245</td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        <span class="text-green-600">32%</span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-green-600 h-2.5 rounded-full" style="width:85%"></div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    {
        id: 9,
        title: "Murakkab Jadval",
        codeExample: `<div class="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
    <table class="w-full border-collapse bg-white text-sm">
        <thead>
            <tr>
                <th colspan="4" class="border-b border-gray-100 bg-gray-50 p-4 pl-8 text-left text-lg font-semibold text-gray-900">
                    Kompaniya Statistikasi
                </th>
            </tr>
            <tr>
                <th class="border-b border-gray-100 bg-gray-50 p-4 pl-8 text-left font-semibold text-gray-900">
                    Bo'lim
                </th>
                <th class="border-b border-gray-100 bg-gray-50 p-4 text-left font-semibold text-gray-900">
                    Xodimlar
                </th>
                <th class="border-b border-gray-100 bg-gray-50 p-4 text-left font-semibold text-gray-900">
                    Budjet
                </th>
                <th class="border-b border-gray-100 bg-gray-50 p-4 pr-8 text-left font-semibold text-gray-900">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-gray-50">
                <td class="p-4 pl-8">Marketing</td>
                <td class="p-4">
                    <div class="flex -space-x-2">
                        <img class="h-8 w-8 rounded-full border-2 border-white" src="avatar1.jpg" alt="">
                        <img class="h-8 w-8 rounded-full border-2 border-white" src="avatar2.jpg" alt="">
                        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100">+3</span>
                    </div>
                </td>
                <td class="p-4">$24,500</td>
                <td class="p-4 pr-8">
                    <div class="flex items-center gap-4">
                        <div class="w-full bg-gray-100 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width:75%"></div>
                        </div>
                        <span class="text-sm font-medium text-gray-600">75%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    {
        id: 10,
        title: "Maxsus Jadval",
        codeExample: `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-700 uppercase bg-gradient-to-r from-blue-50 to-blue-100">
            <tr>
                <th scope="col" class="px-6 py-4">Maxsulot nomi</th>
                <th scope="col" class="px-6 py-4">Kategoriya</th>
                <th scope="col" class="px-6 py-4">Narx</th>
                <th scope="col" class="px-6 py-4">Holat</th>
                <th scope="col" class="px-6 py-4">
                    <span class="sr-only">Tahrirlash</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4 font-medium text-gray-900">iPhone 14 Pro</td>
                <td class="px-6 py-4">Telefon</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Sotuvda
                    </span>
                </td>
                <td class="px-6 py-4">
                    <div class="flex gap-2">
                        <button class="font-medium text-blue-600 hover:underline">Tahrirlash</button>
                        <button class="font-medium text-red-600 hover:underline">O'chirish</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`
    }
];

export default dataJadvallar;
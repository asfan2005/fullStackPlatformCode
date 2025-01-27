const dataTypographyRuxsatlash = [
    {
        "id": 1,
        "title": "Typography",
        "desc": "Matn va shriftlarni boshqarish",
        "items": [
            {
                "name": "Shrift Stillari",
                "description": "Asosiy tipografiya elementlari",
                "examples": [
                    "font-sans",
                    "font-serif",
                    "font-mono",
                    "text-xs",
                    "text-sm",
                    "text-base",
                    "text-lg",
                    "text-xl",
                    "text-2xl",
                    "font-bold",
                    "font-semibold",
                    "italic",
                    "underline"
                ],
                "codeExample": `// Sarlavhalar
<h1 class="text-4xl font-bold text-gray-900 mb-4">Katta Sarlavha</h1>
<h2 class="text-3xl font-semibold text-gray-800 mb-3">O'rta Sarlavha</h2>
<h3 class="text-2xl font-medium text-gray-700 mb-2">Kichik Sarlavha</h3>

// Matn Paragraflari
<p class="text-base text-gray-600 leading-relaxed mb-4">
  Asosiy matn uchun paragraph. Leading-relaxed yordamida qatorlar orasidagi
  masofa optimal qilingan.
</p>

// Maxsus Matn Stillari
<div class="space-y-2">
  <p class="font-mono text-sm">Kod uchun Monospace shrift</p>
  <p class="italic text-gray-500">Kursiv matn</p>
  <p class="font-semibold text-indigo-600">Yarim qalin rang</p>
  <p class="underline decoration-2 decoration-blue-500">Tagiga chizilgan</p>
</div>`,
                "tips": [
                    "Sarlavhalar uchun text-2xl dan text-6xl gacha foydalaning",
                    "Matn o'qilishini yaxshilash uchun leading-relaxed ishlatish",
                    "Muhim ma'lumotlar uchun font-medium yoki font-semibold ishlatish",
                    "Responsive dizayn uchun sm:text-lg kabi breakpointlar qo'shish"
                ]
            },
            {
                "name": "Matn Joylashuvi",
                "description": "Matnni sahifada joylashtirish",
                "examples": [
                    "text-left",
                    "text-center",
                    "text-right",
                    "text-justify",
                    "tracking-wide",
                    "leading-loose",
                    "truncate"
                ],
                "codeExample": `// Markazlashgan Matn Bloki
<div class="text-center max-w-2xl mx-auto">
  <h2 class="text-3xl font-bold mb-4">Markaziy Sarlavha</h2>
  <p class="text-gray-600 tracking-wide">
    Keng harflar oralig'i bilan yozilgan matn
  </p>
</div>

// Ko'p Qatorli Matn
<div class="space-y-4">
  <p class="text-justify leading-relaxed">
    Tekislangan matn bloki. Barcha qatorlar bir xil uzunlikka ega.
  </p>
  <p class="truncate">
    Juda uzun matn qisqartiriladi va ... bilan tugaydi
  </p>
</div>`
            }
        ]
    },
    {
        "id": 2,
        "title": "Ruxsatlash Tizimi",
        "desc": "Foydalanuvchi huquqlarini boshqarish",
        "items": [
            {
                "name": "Ruxsat Darajalari",
                "description": "Foydalanuvchi huquqlarini nazorat qilish",
                "roles": [
                    "admin",
                    "moderator",
                    "user",
                    "guest"
                ],
                "codeExample": `// Ruxsatlarni Tekshirish
const UserAccess = ({ userRole, children }) => {
  const allowedRoles = ['admin', 'moderator'];
  
  return allowedRoles.includes(userRole) ? children : null;
};

// Foydalanish
<UserAccess userRole={currentUser.role}>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-xl font-bold mb-4">Admin Paneli</h3>
    <div class="space-y-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Foydalanuvchilarni Boshqarish
      </button>
      <button class="bg-green-500 text-white px-4 py-2 rounded">
        Tizim Sozlamalari
      </button>
    </div>
  </div>
</UserAccess>`,
                "permissions": [
                    {
                        "role": "admin",
                        "capabilities": [
                            "Barcha huquqlar",
                            "Foydalanuvchilarni boshqarish",
                            "Tizim sozlamalari",
                            "Moderatorlarni tayinlash"
                        ]
                    },
                    {
                        "role": "moderator",
                        "capabilities": [
                            "Kontentni tahrirlash",
                            "Foydalanuvchi postlarini o'chirish",
                            "Kommentariyalarni boshqarish"
                        ]
                    },
                    {
                        "role": "user",
                        "capabilities": [
                            "Profil yaratish",
                            "Post yozish",
                            "Kommentariya qoldirish"
                        ]
                    }
                ]
            },
            {
                "name": "Ruxsatlash UI Elementlari",
                "description": "Ruxsatlash uchun UI komponentlar",
                "codeExample": `// Login Forma
<form class="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
  <h2 class="text-2xl font-bold mb-6 text-center">Tizimga Kirish</h2>
  
  <div class="space-y-4">
    <div>
      <label class="block text-gray-700 mb-2">Email</label>
      <input type="email" 
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="email@example.com"
      />
    </div>
    
    <div>
      <label class="block text-gray-700 mb-2">Parol</label>
      <input type="password"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="********"
      />
    </div>
    
    <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
      Kirish
    </button>
  </div>
</form>

// Ruxsat Yo'q Xabar
<div class="text-center p-8 bg-red-50 rounded-lg">
  <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
  <h3 class="text-xl font-bold text-red-800 mb-2">Ruxsat Yo'q</h3>
  <p class="text-red-600">Bu sahifani ko'rish uchun sizda yetarli huquqlar mavjud emas.</p>
</div>`
            }
        ]
    }
];

export default dataTypographyRuxsatlash;
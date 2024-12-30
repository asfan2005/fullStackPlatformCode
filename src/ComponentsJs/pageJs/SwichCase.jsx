import React from 'react'

function SwichCase() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Asosiy tushuntirish */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Switch Operatori</h1>
        <p className="text-gray-700 mb-4">
          Switch operatori bir o'zgaruvchi yoki ifodaning qiymatini bir nechta holatlar (case) bilan taqqoslash va 
          mos kelgan holat uchun tegishli kodni bajarish uchun ishlatiladi.
        </p>

        {/* Asosiy sintaksis */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Switch operatorining asosiy sintaksisi</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`// Switch operatorining asosiy sintaksisi
switch (ifoda) {
  case qiymat1:
    // qiymat1 ga mos kelganda bajariladigan kod
    break;
  case qiymat2:
    // qiymat2 ga mos kelganda bajariladigan kod
    break;
  default:
    // Hech bir case mos kelmasa bajariladigan kod
}`}</code>
            </pre>
          </div>
        </div>

        {/* Oddiy misol */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-green-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Oddiy misol</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let fruit = "olma";

switch (fruit) {
  case "banan":
    console.log("Bu banan.");
    break;
  case "olma":
    console.log("Bu olma.");
    break;
  case "apelsin":
    console.log("Bu apelsin.");
    break;
  default:
    console.log("Bu meva noma'lum.");
}

// Natija: "Bu olma."`}</code>
            </pre>
          </div>
        </div>

        {/* break operatorisiz */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-yellow-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. break operatorisiz ishlatilishi</h4>
          </div>
          <div className="p-4">
            <p className="mb-4 text-gray-700">
              <strong>Tushuntirish:</strong> Agar break ishlatilmasa, keyingi barcha case lar ham bajariladi.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let day = 2;

switch (day) {
  case 1:
    console.log("Dushanba");
  case 2:
    console.log("Seshanba");
  case 3:
    console.log("Chorshanba");
  default:
    console.log("Hafta kuni noma'lum.");
}

// Natija:
// "Seshanba"
// "Chorshanba"
// "Hafta kuni noma'lum."`}</code>
            </pre>
          </div>
        </div>

        {/* Bir nechta case ni birlashtirish */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-purple-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. Bir nechta case ni birlashtirish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`let day = "shanba";

switch (day) {
  case "shanba":
  case "yakshanba":
    console.log("Dam olish kuni.");
    break;
  default:
    console.log("Ish kuni.");
}

// Natija: "Dam olish kuni."`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Amaliy misollar */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amaliy misollar</h2>

        {/* Hafta kunlari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-red-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">1. Hafta kunlari</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function getWeekDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Dushanba";
    case 2:
      return "Seshanba";
    case 3:
      return "Chorshanba";
    case 4:
      return "Payshanba";
    case 5:
      return "Juma";
    case 6:
      return "Shanba";
    case 7:
      return "Yakshanba";
    default:
      return "Noto'g'ri kun raqami";
  }
}

console.log(getWeekDay(3));  // "Chorshanba"`}</code>
            </pre>
          </div>
        </div>

        {/* Baholarni baholash */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-indigo-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">2. Baholarni baholash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function gradeEvaluator(grade) {
  switch (grade) {
    case "A":
      return "Zo'r! (90-100)";
    case "B":
      return "Yaxshi (80-89)";
    case "C":
      return "Qoniqarli (70-79)";
    case "D":
      return "O'rtacha (60-69)";
    case "F":
      return "Muvaffaqiyatsiz (0-59)";
    default:
      return "Noto'g'ri baho";
  }
}

console.log(gradeEvaluator("A"));  // "Zo'r! (90-100)"`}</code>
            </pre>
          </div>
        </div>

        {/* Fasllar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-teal-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">3. Fasllarni aniqlash</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Qish";
    case 3:
    case 4:
    case 5:
      return "Bahor";
    case 6:
    case 7:
    case 8:
      return "Yoz";
    case 9:
    case 10:
    case 11:
      return "Kuz";
    default:
      return "Noto'g'ri oy raqami";
  }
}

console.log(getSeason(3));  // "Bahor"
console.log(getSeason(7));  // "Yoz"`}</code>
            </pre>
          </div>
        </div>

        {/* To'lov statusi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-pink-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">4. To'lov statusini tekshirish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function getPaymentStatus(status) {
  let message = "";
  let color = "";

  switch (status) {
    case "SUCCESS":
      message = "To'lov muvaffaqiyatli amalga oshirildi";
      color = "text-green-500";
      break;
    case "PENDING":
      message = "To'lov kutilmoqda";
      color = "text-yellow-500";
      break;
    case "FAILED":
      message = "To'lov amalga oshmadi";
      color = "text-red-500";
      break;
    case "CANCELLED":
      message = "To'lov bekor qilindi";
      color = "text-gray-500";
      break;
    default:
      message = "Noma'lum status";
      color = "text-gray-700";
  }

  return { message, color };
}

// Ishlatilishi:
const payment = {
  id: "PAY123",
  amount: 150000,
  status: "PENDING"
};

const { message, color } = getPaymentStatus(payment.status);
// JSX da ishlatish: <p className={color}>{message}</p>

// Natija: <p className="text-yellow-500">To'lov kutilmoqda</p>`}</code>
            </pre>
          </div>
        </div>

        {/* Til tanlov */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-orange-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">5. Ko'p tilli interfeys</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function getTranslation(key, lang = 'uz') {
  const translations = {
    welcome: {
      uz: "Xush kelibsiz",
      en: "Welcome",
      ru: "Добро пожаловать"
    },
    goodbye: {
      uz: "Xayr",
      en: "Goodbye",
      ru: "До свидания"
    },
    error: {
      uz: "Xatolik yuz berdi",
      en: "An error occurred",
      ru: "Произошла ошибка"
    }
  };

  switch (lang) {
    case 'uz':
    case 'en':
    case 'ru':
      return translations[key][lang] || key;
    default:
      return translations[key]['uz'] || key;
  }
}

// Ishlatilishi:
console.log(getTranslation('welcome', 'uz')); // "Xush kelibsiz"
console.log(getTranslation('welcome', 'en')); // "Welcome"
console.log(getTranslation('welcome', 'ru')); // "Добро пожаловать"`}</code>
            </pre>
          </div>
        </div>

        {/* Foydalanuvchi huquqlari */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-cyan-600 text-white px-4 py-2">
            <h4 className="text-lg font-medium">6. Foydalanuvchi huquqlarini tekshirish</h4>
          </div>
          <div className="p-4">
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`function checkUserPermissions(role) {
  const permissions = {
    canView: false,
    canEdit: false,
    canDelete: false,
    canManageUsers: false
  };

  switch (role.toUpperCase()) {
    case 'ADMIN':
      permissions.canManageUsers = true;
      // break ni ataylab qo'ymaymiz, chunki admin barcha huquqlarga ega
    case 'EDITOR':
      permissions.canDelete = true;
      // break ni ataylab qo'ymaymiz
    case 'AUTHOR':
      permissions.canEdit = true;
      // break ni ataylab qo'ymaymiz
    case 'USER':
      permissions.canView = true;
      break;
    default:
      // Mehmon foydalanuvchi uchun faqat ko'rish huquqi
      permissions.canView = true;
  }

  return permissions;
}

// Ishlatilishi:
const adminPerms = checkUserPermissions('ADMIN');
console.log(adminPerms);
/* Natija:
{
  canView: true,
  canEdit: true,
  canDelete: true,
  canManageUsers: true
}
*/

const authorPerms = checkUserPermissions('AUTHOR');
console.log(authorPerms);
/* Natija:
{
  canView: true,
  canEdit: true,
  canDelete: false,
  canManageUsers: false
}
*/`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SwichCase
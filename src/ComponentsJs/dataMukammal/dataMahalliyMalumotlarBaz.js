const dataMahalliyMalumotlarBaz = [
    {
        id: 1,
        title: "localStorage va sessionStorage",
        description: "Brauzerda ma'lumotlarni saqlash usullari",
        examples: [
            {
                name: "localStorage asoslari",
                code: `// Ma'lumotlarni saqlash
localStorage.setItem('foydalanuvchi', JSON.stringify({
    id: 1,
    ism: 'Abdulla',
    yosh: 25
}));

// Ma'lumotlarni olish
const foydalanuvchi = JSON.parse(localStorage.getItem('foydalanuvchi'));
console.log(foydalanuvchi);

// Ma'lumotlarni o'chirish
localStorage.removeItem('foydalanuvchi');

// Barcha ma'lumotlarni tozalash
localStorage.clear();

// sessionStorage bilan ishlash
sessionStorage.setItem('token', 'abc123');
const token = sessionStorage.getItem('token');`,
                explanation: "localStorage va sessionStorage bilan ishlash asoslari",
                result: "Mahalliy xotirada ma'lumotlarni saqlash"
            }
        ]
    },
    {
        id: 2,
        title: "Cookies bilan ishlash",
        description: "Cookie fayllarni boshqarish va sozlash",
        examples: [
            {
                name: "Cookies yaratish va o'qish",
                code: `// Cookie yaratish
function cookieYaratish(nom, qiymat, kunlar) {
    const sana = new Date();
    sana.setTime(sana.getTime() + (kunlar * 24 * 60 * 60 * 1000));
    const muddati = "expires=" + sana.toUTCString();
    document.cookie = nom + "=" + qiymat + ";" + muddati + ";path=/";
}

// Cookie ni o'qish
function cookieOqish(nom) {
    const nomCookie = nom + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nomCookie) === 0) {
            return cookie.substring(nomCookie.length, cookie.length);
        }
    }
    return "";
}

// Cookie ni o'chirish
function cookieOchirish(nom) {
    document.cookie = nom + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}`,
                explanation: "Cookie fayllar bilan ishlash",
                result: "Cookie boshqaruvi"
            }
        ]
    },
    {
        id: 3,
        title: "Login tizimi",
        description: "Foydalanuvchi autentifikatsiyasi va ma'lumotlarini saqlash",
        examples: [
            {
                name: "Login tizimi klassi",
                code: `class LoginTizimi {
    constructor() {
        this.tokenKaliti = 'userToken';
        this.foydalanuvchiKaliti = 'userData';
    }

    login(email, parol) {
        // API dan kelgan javobni simulyatsiya qilish
        const token = 'jwt_token_' + Math.random().toString(36).substr(2);
        const foydalanuvchi = {
            id: 1,
            email: email,
            ism: 'Foydalanuvchi',
            roli: 'user'
        };

        // Ma'lumotlarni saqlash
        localStorage.setItem(this.tokenKaliti, token);
        localStorage.setItem(this.foydalanuvchiKaliti, 
            JSON.stringify(foydalanuvchi));

        return foydalanuvchi;
    }

    logout() {
        localStorage.removeItem(this.tokenKaliti);
        localStorage.removeItem(this.foydalanuvchiKaliti);
    }

    getFoydalanuvchi() {
        const malumot = localStorage.getItem(this.foydalanuvchiKaliti);
        return malumot ? JSON.parse(malumot) : null;
    }

    tekshirish() {
        return !!localStorage.getItem(this.tokenKaliti);
    }
}`,
                explanation: "Login tizimini amalga oshirish",
                result: "Foydalanuvchi autentifikatsiyasi"
            }
        ]
    },
    {
        id: 4,
        title: "Shaxsiy kundalik ilovasi",
        description: "Mahalliy xotirada qaydlarni saqlash va boshqarish",
        examples: [
            {
                name: "Kundalik ilovasi klassi",
                code: `class ShaxsiyKundalik {
    constructor() {
        this.kalit = 'kundalik_qaydlari';
        this.qaydlar = this.qaydlarniOlish();
    }

    qaydlarniOlish() {
        const saqlangan = localStorage.getItem(this.kalit);
        return saqlangan ? JSON.parse(saqlangan) : [];
    }

    qaydniSaqlash() {
        localStorage.setItem(this.kalit, JSON.stringify(this.qaydlar));
    }

    qaydQoshish(sarlavha, matn) {
        const yangiQayd = {
            id: Date.now(),
            sarlavha,
            matn,
            sana: new Date().toISOString(),
            ozgartirilgan: null
        };
        
        this.qaydlar.push(yangiQayd);
        this.qaydniSaqlash();
        return yangiQayd;
    }

    qaydniTahrirlash(id, yangiMalumot) {
        const index = this.qaydlar.findIndex(qayd => qayd.id === id);
        if (index !== -1) {
            this.qaydlar[index] = {
                ...this.qaydlar[index],
                ...yangiMalumot,
                ozgartirilgan: new Date().toISOString()
            };
            this.qaydniSaqlash();
            return true;
        }
        return false;
    }

    qaydniOchirish(id) {
        this.qaydlar = this.qaydlar.filter(qayd => qayd.id !== id);
        this.qaydniSaqlash();
    }

    barqaQaydlarniOlish() {
        return this.qaydlar;
    }

    qaydniTopish(id) {
        return this.qaydlar.find(qayd => qayd.id === id);
    }
}`,
                explanation: "Shaxsiy kundalik ilovasi yaratish",
                result: "Qaydlarni saqlash va boshqarish"
            }
        ]
    }
];

export default dataMahalliyMalumotlarBaz;
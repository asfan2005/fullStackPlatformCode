const dataSecurity = [
    {
        id: 1,
        title: "Authentication va Authorization",
        description: "Web ilovalar uchun xavfsizlik autentifikatsiya va avtorizatsiya usullari",
        examples: [
            {
                name: "JWT Authentication",
                code: `// JWT token yaratish
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

// Middleware for JWT verification
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(403).json({ message: "Token taqdim etilmagan" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Yaroqsiz token" });
    }
};`,
                explanation: "JWT asosida foydalanuvchilarni autentifikatsiya qilish",
                result: "Xavfsiz foydalanuvchi autentifikatsiyasi"
            },
            {
                name: "Password Hashing",
                code: `// Bcrypt bilan parolni hashlash
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

async function verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

// Foydalanish
async function registerUser(email, password) {
    const hashedPassword = await hashPassword(password);
    // Save to database
    return await db.users.create({
        email,
        password: hashedPassword
    });
}`,
                explanation: "Parollarni xavfsiz saqlash va tekshirish",
                result: "Foydalanuvchi parollarining xavfsizligini ta'minlash"
            }
        ]
    },
    {
        id: 2,
        title: "XSS va CSRF Protection",
        description: "Cross-Site Scripting va Cross-Site Request Forgery hujumlaridan himoya",
        examples: [
            {
                name: "XSS Protection",
                code: `// Input sanitization
const sanitizeHtml = require('sanitize-html');

function sanitizeUserInput(input) {
    return sanitizeHtml(input, {
        allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
        allowedAttributes: {
            'a': [ 'href' ]
        }
    });
}

// Content Security Policy
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
    );
    next();
});`,
                explanation: "XSS hujumlaridan himoyalanish usullari",
                result: "Xavfsiz foydalanuvchi kiritish va kontent boshqaruvi"
            }
        ]
    },
    {
        id: 3,
        title: "Encryption va Data Protection",
        description: "Ma'lumotlarni shifrlash va himoya qilish usullari",
        examples: [
            {
                name: "Data Encryption",
                code: `// Crypto modulidan foydalanish
const crypto = require('crypto');

// Ma'lumotlarni shifrlash
function encryptData(data, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
        'aes-256-gcm', 
        Buffer.from(key, 'hex'),
        iv
    );
    
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted,
        authTag: authTag.toString('hex')
    };
}

// Ma'lumotlarni deshifrlash
function decryptData(encrypted, key) {
    const decipher = crypto.createDecipheriv(
        'aes-256-gcm',
        Buffer.from(key, 'hex'),
        Buffer.from(encrypted.iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(encrypted.authTag, 'hex'));
    
    let decrypted = decipher.update(encrypted.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
}`,
                explanation: "Ma'lumotlarni xavfsiz shifrlash va deshifrlash",
                result: "Maxfiy ma'lumotlarning xavfsizligini ta'minlash"
            }
        ]
    },
    {
        id: 4,
        title: "Security Headers va Best Practices",
        description: "Web ilova xavfsizligi uchun eng yaxshi amaliyotlar",
        examples: [
            {
                name: "Security Headers",
                code: `// Express.js security headers
const helmet = require('helmet');
const app = express();

// Asosiy xavfsizlik headerlarini o'rnatish
app.use(helmet());

// Maxsus headerlarni sozlash
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: true,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    dnsPrefetchControl: true,
    frameguard: { action: "deny" },
    hidePoweredBy: true,
    hsts: { maxAge: 31536000, preload: true },
    ieNoOpen: true,
    noSniff: true,
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    xssFilter: true
}));`,
                explanation: "Xavfsizlik headerlarini to'g'ri sozlash",
                result: "Web ilovaning umumiy xavfsizligini oshirish"
            }
        ]
    }
];

export default dataSecurity;
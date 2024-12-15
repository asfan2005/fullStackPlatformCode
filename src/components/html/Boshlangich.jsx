import React, { useState, useCallback, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useNavigate } from "react-router-dom";
import {
  CodeBracketIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LinkIcon,
  PhotoIcon,
  TableCellsIcon,
  ListBulletIcon,
  Bars3Icon,
  XMarkIcon,
  CubeIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import "./b.css";

const Lesson = ({ title, content, onComplete, isCompleted }) => {
  return (
    <div
      id="app-containeri"
      className="bg-white rounded-xl shadow-lg p-6 mb-6 overflow-auto max-h-[900px]"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="prose mb-4 overflow-y-auto">{content}</div>
      {!isCompleted ? (
        <button
          onClick={onComplete}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Darsni tugatish
        </button>
      ) : (
        <p className="text-green-600 font-bold mt-4">Dars tugatildi! ✅</p>
      )}
    </div>
  );
};

const MiniGame = ({
  title,
  question,
  options,
  correctAnswer,
  onComplete,
  isCompleted,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = useCallback(() => {
    if (selectedAnswer === correctAnswer) {
      setIsCorrect(true);
      onComplete();
    } else {
      setIsCorrect(false);
    }
  }, [selectedAnswer, correctAnswer, onComplete]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{question}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(index)}
            className={`py-2 px-4 rounded ${
              selectedAnswer === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {!isCompleted && (
        <button
          onClick={checkAnswer}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Javobni tekshirish
        </button>
      )}
      {isCorrect !== null && (
        <p
          className={`mt-4 font-bold ${
            isCorrect ? "text-green-600" : "text-red-600"
          }`}
        >
          {isCorrect
            ? "To'g'ri javob! 🎉"
            : "Noto'g'ri javob. Qaytadan urinib ko'ring."}
        </p>
      )}
      {isCompleted && (
        <p className="text-green-600 font-bold mt-4">O'yin tugatildi! ✅</p>
      )}
    </div>
  );
};

const CodeEditor = ({ initialCode, language }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // HTML kodni xavfsiz tarzda bajarish
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      iframe.contentDocument.open();
      iframe.contentDocument.write(code);
      iframe.contentDocument.close();

      // Natijani olish
      const result = iframe.contentDocument.documentElement.outerHTML;
      setOutput(result);

      // iframe ni o'chirish
      document.body.removeChild(iframe);
    } catch (error) {
      setOutput(`Xato yuz berdi: ${error.message}`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <Editor
        height="300px"
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
      />
      <button
        onClick={runCode}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Kodni ishga tushirish
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-2">Natija:</h4>
        <iframe
          srcDoc={output}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="300px"
          className="border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

// Copy tugmasi komponenti
const CopyButton = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button 
      onClick={handleCopy} 
      className={`absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs transition-all duration-300 ${className}`}
    >
      {copied ? "Nusxa olindi!" : "Nusxa olish"}
    </button>
  );
};

// Pre komponenti
const CodeBlock = ({ children, language = "html" }) => {
  return (
    <div className="relative">
      <CopyButton text={children} />
      <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto relative">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

// Yangi massiv: har bir mavzu uchun alohida darslik kontenti
const topicLessons = {
  "html-basics": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">1. HTML Asoslari</h3>
        <p>
          HTML (HyperText Markup Language) veb-sahifalarni yaratish uchun ishlatiladigan markap tilidir. 
          HTML yordamida veb-sahifalarning tuzilishi, matn, rasmlar, video, havolalar va boshqa elementlari belgilanadi.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-3">2. HTML Hujjatining Tuzilishi</h3>
        <p>Har bir HTML hujjati quyidagi tuzilishga ega bo'ladi:</p>
        <CodeBlock>
{`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Asoslari</title>
</head>
<body>
    <h1>Salom, Dunyo!</h1>
    <p>Bu HTML asoslari haqidagi darslik.</p>
</body>
</html>`}
        </CodeBlock>

        <div className="space-y-2">
          <p><strong>Tushuntirish:</strong></p>
          <ul className="list-disc list-inside pl-4">
            <li><code>&lt;!DOCTYPE html&gt;</code> — bu HTML5 hujjati ekanligini bildiradi.</li>
            <li><code>&lt;html&gt;</code> — HTML hujjatining boshlanishi. <code>lang="uz"</code> atributi sahifa tilini belgilaydi.</li>
            <li><code>&lt;head&gt;</code> — meta ma'lumotlar va sahifaning boshqa boshqaruvchi ma'lumotlari joylashadi.</li>
            <li><code>&lt;meta charset="UTF-8"&gt;</code> — sahifadagi barcha belgilarni to'g'ri ko'rsatish uchun kodlashni aniqlaydi.</li>
            <li><code>&lt;body&gt;</code> — sahifaning asosiy tarkibi joylashadi.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mt-4 mb-3">3. Sarlavhalar (Headings)</h3>
        <p>HTMLda sarlavhalar 6 xil turga bo'linadi, bu <code>&lt;h1&gt;</code> eng katta, <code>&lt;h6&gt;</code> esa eng kichik bo'ladi.</p>
        <CodeBlock>
{`<h1>Eng Katta Sarlavha</h1>
<h2>Ikkinchi darajali Sarlavha</h2>
<h3>Uchinchi darajali Sarlavha</h3>
<h4>To'rtinchi darajali Sarlavha</h4>
<h5>Beshinchi darajali Sarlavha</h5>
<h6>Eng Kichik Sarlavha</h6>`}
        </CodeBlock>

        <h3 className="text-xl font-bold mt-4 mb-3">4. Paragraflar</h3>
        <p>Matnni guruhlash uchun <code>&lt;p&gt;</code> elementi ishlatiladi.</p>
        <CodeBlock>
{`<p>Bu birinchi paragraf.</p>
<p>Bu ikkinchi paragraf.</p>`}
        </CodeBlock>

        <h3 className="text-xl font-bold mt-4 mb-3">5. Rasm Qo'shish (Images)</h3>
        <p>Rasm qo'shish uchun <code>img</code> elementi ishlatiladi. Rasm manzili <code>src</code> atributi orqali ko'rsatiladi va rasmning tavsifi <code>alt</code> atributi orqali taqdim etiladi.</p>
        <CodeBlock>
{`<img src="image.jpg" alt="Ajoyib Rasm" width="500" height="300">`}
        </CodeBlock>

        <h3 className="text-xl font-bold mt-4 mb-3">6. Havolalar (Links)</h3>
        <p>Havola yaratish uchun <code>&lt;a&gt;</code> elementi ishlatiladi. <code>href</code> atributi havola manzilini ko'rsatadi.</p>
        <CodeBlock>
{`<a href="https://www.example.com">Example vebsaytiga o'ting</a>`}
        </CodeBlock>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Asoslari</title>
</head>
<body>
    <h1>Salom, Dunyo!</h1>
    <p>Bu HTML asoslari haqidagi darslik.</p>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Asoslarini Tekshiring - 1",
        question: "HTML so'zining to'liq ma'nosi nima?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: 0
      },
      {
        title: "HTML Asoslarini Tekshiring - 2",
        question: "HTML hujjatning asosiy mazmuni qaysi teg ichida joylashadi?",
        options: ["<head>", "<content>", "<body>", "<main>"],
        correctAnswer: 2
      }
    ]
  },
  "html-elements": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Elementlari</h3>
        <p>
          HTML elementlari veb-sahifaning tuzilishi va kontentini belgilashga yordam beruvchi maxsus teglardir. 
          Har bir element o'zining alohida vazifasiga ega bo'lib, sahifaning semantik va vizual tuzilishini shakllantiradi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Matn Elementlari</h4>
        <CodeBlock>
{`<!-- Sarlavhalar -->
<h1>Eng katta sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>

<!-- Paragraflar -->
<p>Bu oddiy paragraf.</p>

<!-- Matn formatlash -->
<strong>Qalin matn</strong>
<em>Kursiv matn</em>
<u>Tagiga chizilgan matn</u>
<mark>Belgilangan matn</mark>
<del>O'chirilgan matn</del>
<sup>Yuqori indeks</sup>
<sub>Pastki indeks</sub>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Ro'yxat Elementlari</h4>
        <CodeBlock>
{`<!-- Tartibsiz ro'yxat -->
<ul>
    <li>Olma</li>
    <li>Banana</li>
    <li>Gilos</li>
</ul>

<!-- Tartiblangan ro'yxat -->
<ol>
    <li>Birinchi element</li>
    <li>Ikkinchi element</li>
    <li>Uchinchi element</li>
</ol>

<!-- Tavsif ro'yxati -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Havola va Navigatsiya</h4>
        <CodeBlock>
{`<!-- Oddiy havola -->
<a href="https://www.example.com">Veb-saytga o'tish</a>

<!-- Ichki havola -->
<a href="#section1">Bo'limga o'tish</a>

<!-- Yangi oynada ochish -->
<a href="https://www.example.com" target="_blank">Yangi oynada ochish</a>

<!-- Elektron pochta havolasi -->
<a href="mailto:info@example.com">Bizga yozing</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Multimediya Elementlari</h4>
        <CodeBlock>
{`<!-- Rasm -->
<img src="rasm.jpg" alt="Rasm tasviri" width="300" height="200">

<!-- Video -->
<video controls width="500">
    <source src="video.mp4" type="video/mp4">
    Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Sizning brauzeringiz audioni qo'llab-quvvatlamaydi.
</audio>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Konteyner va Semantik Elementlar</h4>
        <CodeBlock>
{`<!-- Umumiy konteyner -->
<div>Blok elementlar uchun konteyner</div>

<!-- Inline konteyner -->
<span>Qator ichidagi element</span>

<!-- Semantik elementlar -->
<header>Sahifa yoki bo'lim boshi</header>
<nav>Navigatsiya havolalari</nav>
<main>Asosiy tarkib</main>
<section>Bo'lim</section>
<article>Mustaqil maqola</article>
<aside>Qo'shimcha kontentlar</aside>
<footer>Sahifa yoki bo'lim pasti</footer>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">6. Forma Elementlari</h4>
        <CodeBlock>
{`<form action="/submit" method="post">
    <!-- Matn kiritish -->
    <input type="text" placeholder="Ismingiz">
    
    <!-- Elektron pochta -->
    <input type="email" placeholder="Email manzilingiz">
    
    <!-- Parol -->
    <input type="password" placeholder="Parol">
    
    <!-- Belgilash -->
    <input type="checkbox"> Shartlarni qabul qilaman
    
    <!-- Radio tugmalar -->
    <input type="radio" name="gender"> Erkak
    <input type="radio" name="gender"> Ayol
    
    <!-- Tanlash -->
    <select>
        <option>Tanlang</option>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    
    <!-- Ko'p qatorli matn -->
    <textarea placeholder="Izoh qoldiring"></textarea>
    
    <!-- Yuborish tugmasi -->
    <button type="submit">Yuborish</button>
</form>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> HTML elementlari faqat strukturani belgilaydi. 
            Elementlarning dizayni va interaktivligi uchun CSS va JavaScript kerak bo'ladi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Elementlari</title>
</head>
<body>
    <h1>HTML Elementlari Namunasi</h1>
    
    <section>
        <h2>Ro'yxat</h2>
        <ul>
            <li>Birinchi element</li>
            <li>Ikkinchi element</li>
        </ul>
    </section>
    
    <section>
        <h2>Havola</h2>
        <a href="https://www.example.com">Veb-saytga o'tish</a>
    </section>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Elementlari Viktorinasi - 1",
        question: "Qaysi element paragraf yaratadi?",
        options: [
          "<paragraph>",
          "<p>",
          "<text>",
          "<br>"
        ],
        correctAnswer: 1
      },
      {
        title: "HTML Elementlari Viktorinasi - 2",
        question: "Tartibsiz ro'yxat uchun qaysi element ishlatiladi?",
        options: [
          "<ol>",
          "<list>",
          "<ul>",
          "<li>"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Elementlari Viktorinasi - 3",
        question: "Rasm qo'shish uchun qaysi element ishlatiladi?",
        options: [
          "<picture>",
          "<image>",
          "<img>",
          "<src>"
        ],
        correctAnswer: 2
      }
    ]
  },
  "html-attributes": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Atributlari</h3>
        <p>
          HTML atributlari elementlarning xususiyatlarini, ishlash tartibini va ko'rinishini belgilashga yordam beruvchi maxsus ko'rsatmalardir. 
          Har bir atribut elementga qo'shimcha ma'lumot yoki xususiyat beradi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Asosiy Atributlar</h4>
        <CodeBlock>
{`<!-- id atributi: Unikal identifikator -->
<p id="intro">Bu birinchi paragraf.</p>

<!-- class atributi: Bir nechta elementlarga stil berish -->
<div class="container highlight">Konteyner</div>

<!-- title atributi: Qo'shimcha ma'lumot -->
<a href="https://www.example.com" title="Example veb-sayti">Havola</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Media Atributlari</h4>
        <CodeBlock>
{`<!-- src atributi: Media fayllar uchun -->
<img src="rasm.jpg" alt="Tabiat manzarasi" width="300" height="200">

<!-- controls atributi: Video va audio uchun boshqaruv paneli -->
<video src="video.mp4" controls>
    Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
</video>

<!-- alt atributi: Rasm uchun tavsif -->
<img src="logo.png" alt="Kompaniya logotipi">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Forma Atributlari</h4>
        <CodeBlock>
{`<!-- required atributi: Majburiy kiritish -->
<input type="email" required placeholder="Email manzilingiz">

<!-- placeholder atributi: Yordam matn -->
<input type="text" placeholder="Ismingizni kiriting">

<!-- disabled atributi: Elementni bloklash -->
<button disabled>Yuborish</button>

<!-- value atributi: Boshlang'ich qiymat -->
<input type="text" value="Standart matn">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Havola va Navigatsiya Atributlari</h4>
        <CodeBlock>
{`<!-- href atributi: Havola manzili -->
<a href="https://www.example.com">Veb-sayt</a>

<!-- target atributi: Havola ochilish oynasi -->
<a href="https://www.example.com" target="_blank">Yangi oynada ochish</a>

<!-- download atributi: Faylni yuklab olish -->
<a href="dokument.pdf" download>PDF faylni yuklab olish</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Global Atributlar</h4>
        <CodeBlock>
{`<!-- style atributi: Inline CSS -->
<p style="color: red; font-size: 18px;">Qizil rangdagi matn</p>

<!-- data-* atributlari: Maxsus ma'lumotlar -->
<div data-user-id="123" data-role="admin">Foydalanuvchi ma'lumotlari</div>

<!-- lang atributi: Til -->
<p lang="uz">Bu o'zbek tilidagi matn</p>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> Atributlar elementlarga qo'shimcha xususiyatlar va 
            funksionallik beradi. Ularni to'g'ri va maqsadli ishlatish veb-sahifaning 
            sifatini oshiradi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Atributlari</title>
</head>
<body>
    <h1 id="main-title" class="text-center">HTML Atributlari Namunasi</h1>
    
    <div class="container">
        <img src="rasm.jpg" alt="HTML atributlari" width="400">
        
        <form>
            <input 
                type="text" 
                name="username" 
                placeholder="Ismingizni kiriting" 
                required
            >
            <button type="submit">Yuborish</button>
        </form>
    </div>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Atributlari Viktorinasi - 1",
        question: "Qaysi atribut elementga unikal identifikator beradi?",
        options: [
          "class",
          "id",
          "name",
          "type"
        ],
        correctAnswer: 1
      },
      {
        title: "HTML Atributlari Viktorinasi - 2",
        question: "Rasm uchun tavsif beruvchi atribut qaysi?",
        options: [
          "src",
          "href",
          "alt",
          "title"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Atributlari Viktorinasi - 3",
        question: "Forma elementini majburiy qiluvchi atribut qaysi?",
        options: [
          "disabled",
          "required",
          "placeholder",
          "value"
        ],
        correctAnswer: 1
      }
    ]
  },
  "html-links": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Havolalari</h3>
        <p>
          HTML havolalari veb-sahifalar orasida navigatsiya va resurslarga o'tishni ta'minlovchi asosiy elementlardir. 
          Ular foydalanuvchi tajribasini yaxshilash va sahifalar o'rtasida bog'lanish yaratishga yordam beradi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Oddiy Havolalar</h4>
        <CodeBlock>
{`<!-- Tashqi havola -->
<a href="https://www.example.com">Example saytiga o'tish</a>

<!-- Ichki havola -->
<a href="#section1">Sahifa bo'limiga o'tish</a>

<!-- Elektron pochta havolasi -->
<a href="mailto:info@example.com">Biz bilan bog'laning</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Havola Turları</h4>
        <CodeBlock>
{`<!-- Telefon raqamiga havola -->
<a href="tel:+998901234567">Qo'ng'iroq qilish</a>

<!-- Faylni yuklab olish -->
<a href="dokument.pdf" download>PDF faylni yuklab olish</a>

<!-- FTP serveriga havola -->
<a href="ftp://ftp.example.com">FTP serverga ulanish</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Target Atributi</h4>
        <CodeBlock>
{`<!-- Yangi tabda ochish -->
<a href="https://www.example.com" target="_blank">Yangi tabda ochish</a>

<!-- Hozirgi tabda ochish (default) -->
<a href="https://www.example.com" target="_self">Hozirgi tabda ochish</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Rel Atributi</h4>
        <CodeBlock>
{`<!-- Qidiruv tizimlari uchun -->
<a href="https://www.example.com" rel="nofollow">Indekslanmaydigan havola</a>

<!-- Xavfsizlik uchun -->
<a href="https://www.example.com" 
   target="_blank" 
   rel="noopener noreferrer">
   Xavfsiz yangi tabda ochish
</a>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Havola Ichidagi Elementlar</h4>
        <CodeBlock>
{`<!-- Rasm havolasi -->
<a href="https://www.example.com">
    <img src="rasm.jpg" alt="Rasm havolasi">
</a>

<!-- Tugma havolasi -->
<a href="https://www.example.com">
    <button>Saytga o'tish</button>
</a>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> Havolalarni to'g'ri va maqsadli ishlatish 
            foydalanuvchi tajribasini yaxshilaydi va sayt navigatsiyasini 
            osonlashtiradi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Havolalari</title>
</head>
<body>
    <h1>HTML Havolalar Namunasi</h1>
    
    <nav>
        <a href="https://www.example.com">Bosh Sahifa</a>
        <a href="#about">Biz Haqimizda</a>
        <a href="mailto:info@example.com">Aloqa</a>
    </nav>

    <section id="about">
        <h2>Biz Haqimizda</h2>
        <p>Biz haqimizda qisqacha ma'lumot.</p>
    </section>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Havolalari Viktorinasi - 1",
        question: "Qaysi atribut havolani yangi tabda ochishni ta'minlaydi?",
        options: [
          "new",
          "open",
          "target",
          "href"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Havolalari Viktorinasi - 2",
        question: "Elektron pochta havolasi qanday yoziladi?",
        options: [
          "link@email.com",
          "mailto:email@example.com",
          "email://example.com",
          "send:email@example.com"
        ],
        correctAnswer: 1
      },
      {
        title: "HTML Havolalari Viktorinasi - 3",
        question: "Qaysi atribut havolaning manzilini belgilaydi?",
        options: [
          "src",
          "link",
          "href",
          "url"
        ],
        correctAnswer: 2
      }
    ]
  },
  "html-images": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Rasmlar</h3>
        <p>
          HTML rasmlar veb-sahifada tasvirlarni ko'rsatish va kontentni boyitish uchun muhim elementdir. 
          Rasmlar foydalanuvchi tajribasini yaxshilaydi va sahifaga vizual joziba qo'shadi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Asosiy Rasm Qo'shish</h4>
        <CodeBlock>
{`<!-- Oddiy rasm qo'shish -->
<img src="rasm.jpg" alt="Rasm tavsifi">

<!-- Mahalliy rasm -->
<img src="images/nature.jpg" alt="Tabiat manzarasi">

<!-- Tashqi URL orqali rasm -->
<img src="https://example.com/image.jpg" alt="Internet rasmи">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Rasm O'lchamlari</h4>
        <CodeBlock>
{`<!-- O'lchamlarni belgilash -->
<img src="rasm.jpg" alt="Rasm" width="500" height="300">

<!-- Responsive rasm -->
<img src="rasm.jpg" alt="Responsive rasm" style="max-width: 100%; height: auto;">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Rasmga Link Qo'shish</h4>
        <CodeBlock>
{`<!-- Rasm havolasi -->
<a href="https://www.example.com">
    <img src="rasm.jpg" alt="Havola rasmи">
</a>

<!-- Rasm bilan title -->
<img src="rasm.jpg" alt="Rasm tavsifi" title="Qo'shimcha ma'lumot">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Lazy Loading</h4>
        <CodeBlock>
{`<!-- Rasmni kechroq yuklash -->
<img src="rasm.jpg" alt="Lazy loading rasm" loading="lazy">

<!-- Markazlashtirilgan rasm -->
<img src="rasm.jpg" alt="Markazlashtirilgan rasm" 
     style="display: block; margin: 0 auto;">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Rasm Formatlar va SEO</h4>
        <CodeBlock>
{`<!-- Turli format rasmlar -->
<img src="rasm.jpg" alt="JPEG rasm">
<img src="rasm.png" alt="PNG rasm">
<img src="rasm.webp" alt="WebP rasm">

<!-- SEO uchun yaxshi alt tekst -->
<img src="logo.png" alt="Kompaniya logotipi - Professional xizmatlar">`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> Rasmlarni to'g'ri va optimal tarzda 
            ishlatish veb-sahifaning vizual ko'rinishini va 
            performansini yaxshilaydi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Rasmlar</title>
</head>
<body>
    <h1>HTML Rasmlar Namunasi</h1>
    
    <div class="gallery">
        <img src="rasm1.jpg" alt="Birinchi rasm" width="300" height="200">
        <img src="rasm2.jpg" alt="Ikkinchi rasm" width="300" height="200">
        
        <a href="https://www.example.com">
            <img src="rasm3.jpg" alt="Havola rasmи" width="300" height="200">
        </a>
    </div>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Rasmlar Viktorinasi - 1",
        question: "Rasm qo'shish uchun qaysi teg ishlatiladi?",
        options: [
          "<picture>",
          "<image>",
          "<img>",
          "<src>"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Rasmlar Viktorinasi - 2",
        question: "Rasm tavsifini ko'rsatadigan atribut qaysi?",
        options: [
          "src",
          "href",
          "alt",
          "title"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Rasmlar Viktorinasi - 3",
        question: "Rasmni kechroq yuklash uchun qaysi atribut ishlatiladi?",
        options: [
          "defer",
          "async",
          "lazy",
          "loading"
        ],
        correctAnswer: 3
      }
    ]
  },
  "html-lists": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Ro'yxatlar</h3>
        <p>
          HTML ro'yxatlar ma'lumotlarni tartibli va tushunarli tarzda ko'rsatish uchun 
          ishlatiladi. Ular veb-sahifaning strukturasini yaxshilaydi va kontentni 
          osonlashtirib beradi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Tartibsiz Ro'yxat (Unordered List)</h4>
        <CodeBlock>
{`<!-- Oddiy tartibsiz ro'yxat -->
<ul>
    <li>Olma</li>
    <li>Banana</li>
    <li>Gilos</li>
</ul>

<!-- Ro'yxat ichida havola -->
<ul>
    <li><a href="https://www.example.com">Sayt havolasi</a></li>
    <li>Matn elementi</li>
</ul>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Tartiblangan Ro'yxat (Ordered List)</h4>
        <CodeBlock>
{`<!-- Oddiy tartiblangan ro'yxat -->
<ol>
    <li>Birinchi element</li>
    <li>Ikkinchi element</li>
    <li>Uchinchi element</li>
</ol>

<!-- Harflar bilan ro'yxat -->
<ol type="a">
    <li>Kichik harflar</li>
    <li>Yana bir element</li>
</ol>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Ichki Ro'yxatlar (Nested Lists)</h4>
        <CodeBlock>
{`<!-- Ichki ro'yxatlar -->
<ul>
    <li>Meva
        <ul>
            <li>Olma
                <ul>
                    <li>Qizil olma</li>
                    <li>Yashil olma</li>
                </ul>
            </li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Sabzavotlar</li>
</ul>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Ro'yxat Stilini O'zgartirish</h4>
        <CodeBlock>
{`<!-- CSS bilan ro'yxat stilini o'zgartirish -->
<ul style="list-style-type: square;">
    <li>Kvadrat nuqtali element</li>
    <li>Yana bir element</li>
</ul>

<!-- Ro'yxatni yashirish -->
<ul>
    <li>Ko'rinadigan element</li>
    <li style="display: none;">Yashirin element</li>
</ul>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Ro'yxat Elementlari Kombinatsiyasi</h4>
        <CodeBlock>
{`<!-- Turli elementlar bilan ro'yxat -->
<ul>
    <li><img src="rasm.jpg" alt="Rasm"> Rasm bilan element</li>
    <li>
        <strong>Qalin matn</strong> va <em>kursiv matn</em>
    </li>
    <li>
        <a href="https://www.example.com">Havola</a>
    </li>
</ul>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> Ro'yxatlar ma'lumotlarni tashkil etishning 
            eng samarali usullaridan biridir. Ularni to'g'ri va maqsadli ishlatish 
            veb-sahifaning tuzilishini yaxshilaydi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Ro'yxatlar</title>
</head>
<body>
    <h1>HTML Ro'yxatlar Namunasi</h1>
    
    <h2>Tartibsiz Ro'yxat</h2>
    <ul>
        <li>Olma</li>
        <li>Banana</li>
        <li>Gilos</li>
    </ul>

    <h2>Tartiblangan Ro'yxat</h2>
    <ol type="a">
        <li>Birinchi element</li>
        <li>Ikkinchi element</li>
        <li>Uchinchi element</li>
    </ol>

    <h2>Ichki Ro'yxat</h2>
    <ul>
        <li>Meva
            <ul>
                <li>Olma</li>
                <li>Banana</li>
            </ul>
        </li>
        <li>Sabzavotlar</li>
    </ul>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Ro'yxatlar Viktorinasi - 1",
        question: "Tartibsiz ro'yxat uchun qaysi teg ishlatiladi?",
        options: [
          "<ol>",
          "<ul>",
          "<li>",
          "<list>"
        ],
        correctAnswer: 1
      },
      {
        title: "HTML Ro'yxatlar Viktorinasi - 2",
        question: "Ro'yxat elementini belgilovchi teg qaysi?",
        options: [
          "<item>",
          "<list-item>",
          "<li>",
          "<element>"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Ro'yxatlar Viktorinasi - 3",
        question: "Tartiblangan ro'yxat uchun qaysi teg ishlatiladi?",
        options: [
          "<ul>",
          "<ol>",
          "<list>",
          "<ordered>"
        ],
        correctAnswer: 1
      }
    ]
  },
  "html-tables": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Jadvallar</h3>
        <p>
          HTML jadvallar ma'lumotlarni tartibli va aniq ko'rsatish uchun ishlatiladi. 
          Ular ma'lumotlarni qatorlar va ustunlarda strukturali tarzda taqdim etadi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Asosiy Jadval Tuzilmasi</h4>
        <CodeBlock>
{`<!-- Oddiy Jadval -->
<table>
    <tr>
        <th>Ism</th>
        <th>Familiya</th>
        <th>Yosh</th>
    </tr>
    <tr>
        <td>Ali</td>
        <td>Valiyev</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Veli</td>
        <td>Karimov</td>
        <td>30</td>
    </tr>
</table>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Jadvalni Bezatish</h4>
        <CodeBlock>
{`<!-- CSS bilan Jadval Bezatish -->
<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
</style>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Ustunlarni Birlashtirish</h4>
        <CodeBlock>
{`<!-- colspan va rowspan -->
<table>
    <tr>
        <th colspan="2">Ism va Familiya</th>
        <th>Yosh</th>
    </tr>
    <tr>
        <td>Ali</td>
        <td>Valiyev</td>
        <td rowspan="2">25-30</td>
    </tr>
    <tr>
        <td>Veli</td>
        <td>Karimov</td>
    </tr>
</table>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Jadval Qismlari</h4>
        <CodeBlock>
{`<!-- thead, tbody, tfoot -->
<table>
    <thead>
        <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Yosh</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ali</td>
            <td>Valiyev</td>
            <td>25</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Jami</td>
            <td>25</td>
        </tr>
    </tfoot>
</table>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Responsive Jadval</h4>
        <CodeBlock>
{`<!-- Mobil qurilmalar uchun -->
<div style="overflow-x: auto;">
    <table>
        <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Yosh</th>
            <th>Shahar</th>
        </tr>
        <tr>
            <td>Ali</td>
            <td>Valiyev</td>
            <td>25</td>
            <td>Toshkent</td>
        </tr>
    </table>
</div>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> Jadvallarni to'g'ri va maqsadli ishlatish 
            ma'lumotlarni aniq va tushunarli ko'rsatishga yordam beradi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Jadvallar</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Talabalar Ro'yxati</h1>
    <table>
        <thead>
            <tr>
                <th>Ism</th>
                <th>Familiya</th>
                <th>Yosh</th>
                <th>Kursi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ali</td>
                <td>Valiyev</td>
                <td>20</td>
                <td>2-kurs</td>
            </tr>
            <tr>
                <td>Veli</td>
                <td>Karimov</td>
                <td>22</td>
                <td>3-kurs</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Jami talabalar</td>
                <td>2</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Jadvallar Viktorinasi - 1",
        question: "Jadval yaratish uchun qaysi teg ishlatiladi?",
        options: [
          "<grid>",
          "<table>",
          "<tr>",
          "<td>"
        ],
        correctAnswer: 1
      },
      {
        title: "HTML Jadvallar Viktorinasi - 2",
        question: "Jadval qatorini belgilovchi teg qaysi?",
        options: [
          "<td>",
          "<th>",
          "<tr>",
          "<table>"
        ],
        correctAnswer: 2
      },
      {
        title: "HTML Jadvallar Viktorinasi - 3",
        question: "Ustunlarni birlashtirish uchun qaysi atribut ishlatiladi?",
        options: [
          "merge",
          "colspan",
          "rowspan",
          "combine"
        ],
        correctAnswer: 1
      }
    ]
  },
  "html-forms": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">HTML Formalar</h3>
        <p>
          HTML formalar foydalanuvchilardan ma'lumot olish va serverga yuborish uchun 
          ishlatiladi. Ular veb-sahifaning interaktivligini ta'minlaydi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Asosiy Forma Tuzilmasi</h4>
        <CodeBlock>
{`<!-- Oddiy Forma -->
<form action="/submit" method="post">
    <label for="name">Ismingiz:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Yuborish</button>
</form>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Forma Elementlari</h4>
        <CodeBlock>
{`<!-- Turli Input Turlari -->
<form>
    <!-- Matn kiritish -->
    <input type="text" placeholder="Foydalanuvchi nomi">
    
    <!-- Parol kiritish -->
    <input type="password" placeholder="Parol">
    
    <!-- Elektron pochta -->
    <input type="email" placeholder="Email">
    
    <!-- Telefon raqami -->
    <input type="tel" placeholder="Telefon raqami">
    
    <!-- Sana -->
    <input type="date">
    
    <!-- Raqam -->
    <input type="number" min="0" max="100">
</form>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Tanlash Elementlari</h4>
        <CodeBlock>
{`<!-- Checkbox va Radio -->
<form>
    <!-- Checkbox -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Yangiliklardan xabardor bo'ling</label>
    
    <!-- Radio -->
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Erkak</label>
    
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Ayol</label>
    
    <!-- Tanlash ro'yxati -->
    <select name="country">
        <option value="">Davlatni tanlang</option>
        <option value="uz">O'zbekiston</option>
        <option value="ru">Rossiya</option>
        <option value="us">AQSH</option>
    </select>
</form>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Katta Matn va Forma Yuborish</h4>
        <CodeBlock>
{`<!-- Katta matn va yuborish -->
<form action="/submit" method="post">
    <!-- Ko'p qatorli matn -->
    <textarea 
        name="message" 
        rows="4" 
        cols="50" 
        placeholder="Izohingizni kiriting"
    ></textarea>
    
    <!-- Forma yuborish tugmasi -->
    <button type="submit">Yuborish</button>
    
    <!-- Formani tozalash -->
    <button type="reset">Tozalash</button>
</form>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Forma Validatsiyasi</h4>
        <CodeBlock>
{`<!-- Forma validatsiyasi -->
<form>
    <!-- Majburiy maydon -->
    <input type="text" required placeholder="Majburiy maydon">
    
    <!-- Minimal va maksimal qiymatlar -->
    <input type="number" min="18" max="100" placeholder="Yosh">
    
    <!-- Pattern bilan tekshirish -->
    <input 
        type="text" 
        pattern="[A-Za-z]+" 
        placeholder="Faqat harflar"
    >
</form>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">6. HTML Formasi</h4>
        <CodeBlock>
{`<!-- HTML formasi -->
<form action="/submit" method="post">
    <div>
        <label for="fullname">To'liq Ism:</label>
        <input 
            type="text" 
            id="fullname" 
            name="fullname" 
            required 
            placeholder="Ismingiz va familiyangiz"
        >
    </div>
    
    <div>
        <label for="email">Email:</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="Email manzilingiz"
        >
    </div>
    
    <div>
        <label for="password">Parol:</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            minlength="8" 
            placeholder="Parolingiz"
        >
    </div>
    
    <div>
        <label for="age">Yosh:</label>
        <input 
            type="number" 
            id="age" 
            name="age" 
            min="18" 
            max="100"
        >
    </div>
    
    <div>
        <label>Jins:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Erkak</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Ayol</label>
    </div>
    
    <div>
        <label for="country">Davlat:</label>
        <select id="country" name="country">
            <option value="">Tanlang</option>
            <option value="uz">O'zbekiston</option>
            <option value="ru">Rossiya</option>
            <option value="us">AQSH</option>
        </select>
    </div>
    
    <div>
        <label for="message">Qo'shimcha Izoh:</label>
        <textarea 
            id="message" 
            name="message" 
            rows="4" 
            placeholder="Izohingizni kiriting"
        ></textarea>
    </div>
    
    <div>
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">Shartlarni qabul qilaman</label>
    </div>
    
    <button type="submit">Ro'yxatdan O'tish</button>
    <button type="reset">Tozalash</button>
</form>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> HTML formasi yordamida foydalanuvchilardan ma'lumot olish va serverga yuborish 
            jarayoni ko'p qatorli va aniq ma'lumotlar bilan amalga oshiriladi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>HTML Formalar</title>
</head>
<body>
    <h1>Ro'yxatdan O'tish Formasi</h1>
    <form action="/register" method="post">
        <div>
            <label for="fullname">To'liq Ism:</label>
            <input 
                type="text" 
                id="fullname" 
                name="fullname" 
                required 
                placeholder="Ismingiz va familiyangiz"
            >
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="Email manzilingiz"
            >
        </div>
        
        <div>
            <label for="password">Parol:</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                minlength="8" 
                placeholder="Parolingiz"
            >
        </div>
        
        <div>
            <label for="age">Yosh:</label>
            <input 
                type="number" 
                id="age" 
                name="age" 
                min="18" 
                max="100"
            >
        </div>
        
        <div>
            <label>Jins:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Erkak</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Ayol</label>
        </div>
        
        <div>
            <label for="country">Davlat:</label>
            <select id="country" name="country">
                <option value="">Tanlang</option>
                <option value="uz">O'zbekiston</option>
                <option value="ru">Rossiya</option>
                <option value="us">AQSH</option>
            </select>
        </div>
        
        <div>
            <label for="message">Qo'shimcha Izoh:</label>
            <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Izohingizni kiriting"
            ></textarea>
        </div>
        
        <div>
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms">Shartlarni qabul qilaman</label>
        </div>
        
        <button type="submit">Ro'yxatdan O'tish</button>
        <button type="reset">Tozalash</button>
    </form>
</body>
</html>`,
    miniGames: [
      {
        title: "HTML Formalar Viktorinasi - 1",
        question: "Forma yaratish uchun qaysi teg ishlatiladi?",
        options: [
          "<input>",
          "<form>",
          "<submit>",
          "<button>"
        ],
        correctAnswer: 1
      },
      {
        title: "HTML Formalar Viktorinasi - 2",
        question: "Forma yuborish usullari qaysilар?",
        options: [
          "GET va POST",
          "SEND va RECEIVE",
          "INPUT va OUTPUT",
          "SUBMIT va CANCEL"
        ],
        correctAnswer: 0
      },
      {
        title: "HTML Formalar Viktorinasi - 3",
        question: "Majburiy maydonni belgilash uchun qaysi atribut ishlatiladi?",
        options: [
          "mandatory",
          "important",
          "required",
          "necessary"
        ],
        correctAnswer: 2
      }
    ]
  },
  "html-semantics": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">Semantik HTML</h3>
        <p>
          Semantik HTML HTML elementlarining ma'nosi va ular orasidagi bog'lanishlarini 
          aniq va tushunarli tarzda belgilashga yordam beradi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Semantik Elementlar</h4>
        <CodeBlock>
{`<!-- Semantik elementlar -->
<header>Sahifa yoki bo'lim boshi</header>
<nav>Navigatsiya havolalari</nav>
<main>Asosiy tarkib</main>
<section>Bo'lim</section>
<article>Mustaqil maqola</article>
<aside>Qo'shimcha kontentlar</aside>
<footer>Sahifa yoki bo'lim pasti</footer>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. Semantik Atributlar</h4>
        <CodeBlock>
{`<!-- Semantik atributlar -->
<article class="post">
    <h2 class="post-title">Post Title</h2>
    <p class="post-content">Post content...</p>
</article>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Semantik HTML</h4>
        <CodeBlock>
{`<!-- Semantik HTML -->
<header>
    <h1>HTML Semantik</h1>
</header>
<main>
    <section>
        <h2>Semantik Elementlar</h2>
        <p>Semantik elementlar HTML elementlarining ma'nosi va ular orasidagi bog'lanishlarini aniqlaydi.</p>
    </section>
    <section>
        <h2>Semantik Atributlar</h2>
        <p>Semantik atributlar HTML elementlariga qo'shimcha ma'lumotlar beradi.</p>
    </section>
</main>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> Semantik HTML HTML elementlarining ma'nosi va ular orasidagi bog'lanishlarini aniq va tushunarli tarzda belgilashga yordam beradi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Semantik HTML</title>
</head>
<body>
    <header>
        <h1>Semantik HTML</h1>
    </header>
    <main>
        <section>
            <h2>Semantik Elementlar</h2>
            <p>Semantik elementlar HTML elementlarining ma'nosi va ular orasidagi bog'lanishlarini aniqlaydi.</p>
        </section>
        <section>
            <h2>Semantik Atributlar</h2>
            <p>Semantik atributlar HTML elementlariga qo'shimcha ma'lumotlar beradi.</p>
        </section>
    </main>
</body>
</html>`,
    miniGames: [
      {
        title: "Semantik HTML Viktorinasi - 1",
        question: "Semantik elementlar qaysi teglar orqali yaratiladi?",
        options: [
          "<header>",
          "<main>",
          "<section>",
          "<article>"
        ],
        correctAnswer: 1
      },
      {
        title: "Semantik HTML Viktorinasi - 2",
        question: "Semantik atributlar qaysi teglar orqali qo'shiladi?",
        options: [
          "<class>",
          "<id>",
          "<style>",
          "<data-*"
        ],
        correctAnswer: 3
      },
      {
        title: "Semantik HTML Viktorinasi - 3",
        question: "Semantik HTML maqsadini aniqlash uchun qaysi teg ishlatiladi?",
        options: [
          "<header>",
          "<main>",
          "<section>",
          "<article>"
        ],
        correctAnswer: 1
      }
    ]
  },
  "html-accessibility": {
    lessonContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-3">Qulaylik</h3>
        <p>
          HTML qulaylik HTML elementlarining interaktivligini va tushunarli tarzda ishlashini ta'minlaydi.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">1. Asosiy Qulaylik Elementlari</h4>
        <CodeBlock>
{`<!-- Qulaylik elementlari -->
<button>Yuborish</button>
<input type="text">
<textarea></textarea>
<select>
    <option>Tanlang</option>
</select>
<label>
    <input type="checkbox">
    <span>Shartlarni qabul qilaman</span>
</label>
<label>
    <input type="radio" name="gender">
    <span>Erkak</span>
</label>
<label>
    <input type="radio" name="gender">
    <span>Ayol</span>
</label>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">2. ARIA atributlari</h4>
        <CodeBlock>
{`<!-- ARIA atributlari -->
<button aria-label="Yuborish">Yuborish</button>
<input aria-describedby="description" placeholder="Ismingiz">
<textarea aria-invalid="true"></textarea>
<select aria-label="Davlat">
    <option value="">Davlatni tanlang</option>
</select>
<div aria-live="polite">Joriy holat</div>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">3. Alt Text</h4>
        <CodeBlock>
{`<!-- Alt text -->
<img src="logo.png" alt="Kompaniya logotipi">
<img src="image.jpg" alt="Ajoyib rasm">`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">4. Tabindex</h4>
        <CodeBlock>
{`<!-- Tabindex -->
<button tabindex="0">Yuborish</button>
<input type="text" tabindex="1">
<textarea tabindex="2"></textarea>`}
        </CodeBlock>

        <h4 className="text-lg font-bold mt-4 mb-2">5. Focusable Elementlar</h4>
        <CodeBlock>
{`<!-- Focusable elementlar -->
<button>Yuborish</button>
<input type="text">
<textarea></textarea>
<select>
    <option>Tanlang</option>
</select>
<label>
    <input type="checkbox">
    <span>Shartlarni qabul qilaman</span>
</label>
<label>
    <input type="radio" name="gender">
    <span>Erkak</span>
</label>
<label>
    <input type="radio" name="gender">
    <span>Ayol</span>
</label>`}
        </CodeBlock>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            💡 <strong>Eslatma:</strong> HTML qulaylik HTML elementlarining interaktivligini va tushunarli tarzda ishlashini ta'minlaydi.
          </p>
        </div>
      </div>
    ),
    initialCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Qulaylik</title>
</head>
<body>
    <h1>Qulaylik Namunasi</h1>
    
    <button>Yuborish</button>
    <input type="text">
    <textarea></textarea>
    <select>
        <option>Tanlang</option>
    </select>
    <label>
        <input type="checkbox">
        <span>Shartlarni qabul qilaman</span>
    </label>
    <label>
        <input type="radio" name="gender">
        <span>Erkak</span>
    </label>
    <label>
        <input type="radio" name="gender">
        <span>Ayol</span>
    </label>
</body>
</html>`,
    miniGames: [
      {
        title: "Qulaylik Viktorinasi - 1",
        question: "Qulaylik elementini tanlash uchun qaysi teg ishlatiladi?",
        options: [
          "<button>",
          "<input>",
          "<textarea>",
          "<select>"
        ],
        correctAnswer: 1
      },
      {
        title: "Qulaylik Viktorinasi - 2",
        question: "ARIA atributini qaysi teg orqali qo'shish mumkin?",
        options: [
          "<aria-label>",
          "<aria-describedby>",
          "<aria-invalid>",
          "<aria-live>"
        ],
        correctAnswer: 2
      },
      {
        title: "Qulaylik Viktorinasi - 3",
        question: "Alt text qaysi teg orqali qo'shiladi?",
        options: [
          "<img>",
          "<alt>",
          "<title>",
          "<aria-label>"
        ],
        correctAnswer: 1
      }
    ]
  },
};

function Boshlangich() {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("htmlAdventureScore");
    return savedScore ? parseInt(savedScore, 10) : 0;
  });
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState(() => {
    const savedLessons = localStorage.getItem("htmlAdventureCompletedLessons");
    return savedLessons ? parseInt(savedLessons, 10) : 0;
  });
  const [currentTopic, setCurrentTopic] = useState("html-basics");
  const [topicProgress, setTopicProgress] = useState(() => {
    const savedProgress = localStorage.getItem("htmlAdventureTopicProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("htmlAdventureScore", score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem(
      "htmlAdventureCompletedLessons",
      completedLessons.toString()
    );
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem(
      "htmlAdventureTopicProgress",
      JSON.stringify(topicProgress)
    );
  }, [topicProgress]);

  const incrementScore = useCallback(() => {
    setScore((prevScore) => prevScore + 10);
  }, []);

  const incrementCompletedLessons = useCallback(() => {
    setCompletedLessons((prevLessons) => prevLessons + 1);
  }, []);

  const completeLesson = useCallback(
    (topicId) => {
      setTopicProgress((prev) => ({
        ...prev,
        [topicId]: { ...prev[topicId], lessonCompleted: true },
      }));
      incrementScore();
      incrementCompletedLessons();
    },
    [incrementScore, incrementCompletedLessons]
  );

  const completeMiniGame = useCallback(
    (topicId) => {
      setTopicProgress((prev) => ({
        ...prev,
        [topicId]: { ...prev[topicId], miniGameCompleted: true },
      }));
      incrementScore();
    },
    [incrementScore]
  );

  const htmlTopics = [
    {
      id: "html-basics",
      name: "HTML Asoslari",
      icon: DocumentTextIcon,
      videos: [
        {
          id: "html1",
          title: "HTML kirish - Web sahifa yaratish",
          url: "https://www.youtube.com/embed/salY_Sm6mv4",
          duration: "3:24",
          thumbnail: "https://i3.ytimg.com/vi/salY_Sm6mv4/maxresdefault.jpg",
        },
        {
          id: "html2",
          title: "HTML asosiy tuzilishi",
          url: "https://www.youtube.com/embed/MDLn5-zSQQI",
          duration: "4:15",
          thumbnail: "https://i3.ytimg.com/vi/MDLn5-zSQQI/maxresdefault.jpg",
        },
        {
          id: "html3",
          title: "HTML teglar va elementlar",
          url: "https://www.youtube.com/embed/916GWv2Qs08",
          duration: "5:30",
          thumbnail: "https://i3.ytimg.com/vi/916GWv2Qs08/maxresdefault.jpg",
        },
        {
          id: "html4",
          title: "HTML atributlar bilan ishlash",
          url: "https://www.youtube.com/embed/DHGhFJZLKMs",
          duration: "4:45",
          thumbnail: "https://i3.ytimg.com/vi/DHGhFJZLKMs/maxresdefault.jpg",
        },
      ],
    },
    {
      id: "html-elements",
      name: "HTML Elementlari",
      icon: CodeBracketIcon,
      videos: [
        {
          id: "elem1",
          title: "HTML elementlari - 1-dars",
          url: "https://www.youtube.com/embed/XiQ9rjaa2Ow",
          duration: "4:30",
          thumbnail: "https://i3.ytimg.com/vi/XiQ9rjaa2Ow/maxresdefault.jpg",
        },
        {
          id: "elem2",
          title: "HTML matn elementlari",
          url: "https://www.youtube.com/embed/VkWJQe_EsjQ",
          duration: "5:15",
          thumbnail: "https://i3.ytimg.com/vi/VkWJQe_EsjQ/maxresdefault.jpg",
        },
        {
          id: "elem3",
          title: "HTML ro'yxat elementlari",
          url: "https://www.youtube.com/embed/09oErCBjVns",
          duration: "3:45",
          thumbnail: "https://i3.ytimg.com/vi/09oErCBjVns/maxresdefault.jpg",
        },
        {
          id: "elem4",
          title: "HTML jadval elementlari",
          url: "https://www.youtube.com/embed/bOUhq46fd5g",
          duration: "6:20",
          thumbnail: "https://i3.ytimg.com/vi/bOUhq46fd5g/maxresdefault.jpg",
        },
        {
          id: "elem5",
          title: "HTML forma elementlari",
          url: "https://www.youtube.com/embed/fNcJuPIZ2WE",
          duration: "5:00",
          thumbnail: "https://i3.ytimg.com/vi/fNcJuPIZ2WE/maxresdefault.jpg",
        },
      ],
    },
    {
      id: "html-attributes",
      name: "HTML Atributlari",
      icon: CubeIcon,
      videos: [
        {
          id: "attr1",
          title: "HTML atributlari kirish",
          url: "https://www.youtube.com/embed/Oe421EPjeBE",
          duration: "4:20",
          thumbnail: "https://i3.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
        },
        {
          id: "attr2",
          title: "HTML global atributlar",
          url: "https://www.youtube.com/embed/XXrpsQqAlIQ",
          duration: "5:15",
          thumbnail: "https://i3.ytimg.com/vi/XXrpsQqAlIQ/maxresdefault.jpg",
        },
        {
          id: "attr3",
          title: "HTML class va id atributlari",
          url: "https://www.youtube.com/embed/yfoY53QXEnI",
          duration: "3:45",
          thumbnail: "https://i3.ytimg.com/vi/yfoY53QXEnI/maxresdefault.jpg",
        },
        {
          id: "attr4",
          title: "HTML style atributi",
          url: "https://www.youtube.com/embed/D-h8L5hgW-w",
          duration: "6:20",
          thumbnail: "https://i3.ytimg.com/vi/D-h8L5hgW-w/maxresdefault.jpg",
        },
        {
          id: "attr5",
          title: "HTML atributlari amaliyot",
          url: "https://www.youtube.com/embed/hu-q2zYwEYs",
          duration: "5:00",
          thumbnail: "https://i3.ytimg.com/vi/hu-q2zYwEYs/maxresdefault.jpg",
        },
      ],
    },
    {
        id: 'html-links',
        name: 'Havolalar',
        icon: LinkIcon,
        videos: [
            {
                id: 'link1',
                title: 'HTML havolalar - Kirish',
                url: 'https://www.youtube.com/embed/DiSvq5SgLMI',
                duration: '4:15',
                thumbnail: 'https://i3.ytimg.com/vi/DiSvq5SgLMI/maxresdefault.jpg'
            },
            {
                id: 'link2',
                title: 'HTML havolalar turlari',
                url: 'https://www.youtube.com/embed/L9GXV5ze6rk',
                duration: '5:30',
                thumbnail: 'https://i3.ytimg.com/vi/L9GXV5ze6rk/maxresdefault.jpg'
            },
            {
                id: 'link3',
                title: 'HTML havolalar target atributi',
                url: 'https://www.youtube.com/embed/KA2HWASBsuY',
                duration: '4:45',
                thumbnail: 'https://i3.ytimg.com/vi/KA2HWASBsuY/maxresdefault.jpg'
            },
            {
                id: 'link4',
                title: 'HTML havolalar stillar bilan ishlash',
                url: 'https://www.youtube.com/embed/gOioxltfh48',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/gOioxltfh48/maxresdefault.jpg'
            },
            {
                id: 'link5',
                title: 'HTML havolalar amaliyot',
                url: 'https://www.youtube.com/embed/ZOI7Tq5Zq2s',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/ZOI7Tq5Zq2s/maxresdefault.jpg'
            }
        ]
    },
    {
        id: 'html-images',
        name: 'Rasmlar',
        icon: PhotoIcon,
        videos: [
            {
                id: 'img1',
                title: 'HTML rasmlar bilan ishlash - Kirish',
                url: 'https://www.youtube.com/embed/Hh_se2Zqsdk',
                duration: '4:15',
                thumbnail: 'https://i3.ytimg.com/vi/Hh_se2Zqsdk/maxresdefault.jpg'
            },
            {
                id: 'img2',
                title: 'HTML img tegi va atributlari',
                url: 'https://www.youtube.com/embed/_w6N_nplmAw',
                duration: '5:30',
                thumbnail: 'https://i3.ytimg.com/vi/_w6N_nplmAw/maxresdefault.jpg'
            },
            {
                id: 'img3',
                title: 'HTML rasmlar o\'lchamlari',
                url: 'https://www.youtube.com/embed/PVMTPSwrlX0',
                duration: '4:45',
                thumbnail: 'https://i3.ytimg.com/vi/PVMTPSwrlX0/maxresdefault.jpg'
            },
            {
                id: 'img4',
                title: 'HTML rasmlar stillar bilan ishlash',
                url: 'https://www.youtube.com/embed/-C-qR1gziNc',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/-C-qR1gziNc/maxresdefault.jpg'
            },
            {
                id: 'img5',
                title: 'HTML rasmlar amaliyot',
                url: 'https://www.youtube.com/embed/Oa9LTDR9ugU',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/Oa9LTDR9ugU/maxresdefault.jpg'
            }
        ]
    },
    {
        id: 'html-lists',
        name: 'Ro\'yxatlar',
        icon: ListBulletIcon,
        videos: [
            {
                id: 'list1',
                title: 'HTML ro\'yxatlar bilan ishlash - Kirish',
                url: 'https://www.youtube.com/embed/-kXZvKxs9oA',
                duration: '4:30',
                thumbnail: 'https://i3.ytimg.com/vi/-kXZvKxs9oA/maxresdefault.jpg'
            },
            {
                id: 'list2',
                title: 'HTML tartibli ro\'yxatlar',
                url: 'https://www.youtube.com/embed/oUm7rvMUNq8',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/oUm7rvMUNq8/maxresdefault.jpg'
            },
            {
                id: 'list3',
                title: 'HTML tartibsiz ro\'yxatlar',
                url: 'https://www.youtube.com/embed/-QuK8taGLCs',
                duration: '3:45',
                thumbnail: 'https://i3.ytimg.com/vi/-QuK8taGLCs/maxresdefault.jpg'
            },
            {
                id: 'list4',
                title: 'HTML tavsif ro\'yxatlari',
                url: 'https://www.youtube.com/embed/8Z7zR-UGjcQ',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/8Z7zR-UGjcQ/maxresdefault.jpg'
            },
            {
                id: 'list5',
                title: 'HTML ro\'yxatlar amaliyot',
                url: 'https://www.youtube.com/embed/nDZh87XunEc',
                duration: '5:00',
                thumbnail: 'https://i3.ytimg.com/vi/nDZh87XunEc/maxresdefault.jpg'
            }
        ]
    },
    {
        id: 'html-tables',
        name: 'Jadvallar',
        icon: TableCellsIcon,
        videos: [
            {
                id: 'table1',
                title: 'HTML jadvallar bilan ishlash - Kirish',
                url: 'https://www.youtube.com/embed/iDA0kF5lrVk',
                duration: '4:30',
                thumbnail: 'https://i3.ytimg.com/vi/iDA0kF5lrVk/maxresdefault.jpg'
            },
            {
                id: 'table2',
                title: 'HTML jadval yaratish',
                url: 'https://www.youtube.com/embed/e62D-aayveY',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/e62D-aayveY/maxresdefault.jpg'
            },
            {
                id: 'table3',
                title: 'HTML jadval qo\'shish va birlashtirish',
                url: 'https://www.youtube.com/embed/K21yqCmo6Qg',
                duration: '3:45',
                thumbnail: 'https://i3.ytimg.com/vi/K21yqCmo6Qg/maxresdefault.jpg'
            },
            {
                id: 'table4',
                title: 'HTML jadval stillar bilan ishlash',
                url: 'https://www.youtube.com/embed/-LK7xOT2AW8',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/-LK7xOT2AW8/maxresdefault.jpg'
            },
            {
                id: 'table5',
                title: 'HTML jadvallar amaliyot',
                url: 'https://www.youtube.com/embed/dK27jWKtJxs',
                duration: '5:00',
                thumbnail: 'https://i3.ytimg.com/vi/dK27jWKtJxs/maxresdefault.jpg'
            }
        ]
    },
    {
        id: 'html-forms',
        name: 'Formalar',
        icon: ArrowPathIcon,
        videos: [
            {
                id: 'form1',
                title: 'HTML formalar bilan ishlash - Kirish',
                url: 'https://www.youtube.com/embed/2O8pkybH6po',
                duration: '4:30',
                thumbnail: 'https://i3.ytimg.com/vi/2O8pkybH6po/maxresdefault.jpg'
            },
            {
                id: 'form2',
                title: 'HTML forma elementlari',
                url: 'https://www.youtube.com/embed/VLeERv_dR6Q',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/VLeERv_dR6Q/maxresdefault.jpg'
            },
            {
                id: 'form3',
                title: 'HTML forma input turlari',
                url: 'https://www.youtube.com/embed/D4jj3HHrnSU',
                duration: '3:45',
                thumbnail: 'https://i3.ytimg.com/vi/D4jj3HHrnSU/maxresdefault.jpg'
            },
            {
                id: 'form4',
                title: 'HTML forma validatsiya',
                url: 'https://www.youtube.com/embed/fNcJuPIZ2WE',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/fNcJuPIZ2WE/maxresdefault.jpg'
            },
            {
                id: 'form5',
                title: 'HTML formalar amaliyot',
                url: 'https://www.youtube.com/embed/frAGrGN00OA',
                duration: '5:00',
                thumbnail: 'https://i3.ytimg.com/vi/frAGrGN00OA/maxresdefault.jpg'
            }
        ]
    },
    {
        id: 'html-semantics',
        name: 'Semantik HTML',
        icon: GlobeAltIcon,
        videos: [
            {
                id: 'semantic1',
                title: 'HTML semantik elementlar - Kirish',
                url: 'https://www.youtube.com/embed/bOUhq46fd5g',
                duration: '4:30',
                thumbnail: 'https://i3.ytimg.com/vi/bOUhq46fd5g/maxresdefault.jpg'
            },
            {
                id: 'semantic2',
                title: 'HTML semantik tuzilish',
                url: 'https://www.youtube.com/embed/3yIMmoqqt_0',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/3yIMmoqqt_0/maxresdefault.jpg'
            },
            {
                id: 'semantic3',
                title: 'HTML semantik teglar',
                url: 'https://www.youtube.com/embed/pAdywtcCaR8',
                duration: '3:45',
                thumbnail: 'https://i3.ytimg.com/vi/pAdywtcCaR8/maxresdefault.jpg'
            },
            {
                id: 'semantic4',
                title: 'HTML semantik qoidalar',
                url: 'https://www.youtube.com/embed/b9NCe9-w4FY',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/b9NCe9-w4FY/maxresdefault.jpg'
            },
            {
                id: 'semantic5',
                title: 'HTML semantik amaliyot',
                url: 'https://www.youtube.com/embed/U-HbW3VyeXk',
                duration: '5:00',
                thumbnail: 'https://i3.ytimg.com/vi/U-HbW3VyeXk/maxresdefault.jpg'
            }
        ]
    },
    {
        id: 'html-accessibility',
        name: 'Qulaylik',
        icon: ShieldCheckIcon,
        videos: [
            {
                id: 'access1',
                title: 'HTML qulaylik - Kirish',
                url: 'https://www.youtube.com/embed/1A6SrPwmGpg',
                duration: '4:30',
                thumbnail: 'https://i3.ytimg.com/vi/1A6SrPwmGpg/maxresdefault.jpg'
            },
            {
                id: 'access2',
                title: 'HTML qulaylik elementlari',
                url: 'https://www.youtube.com/embed/0hqhAIjE_8I',
                duration: '5:15',
                thumbnail: 'https://i3.ytimg.com/vi/0hqhAIjE_8I/maxresdefault.jpg'
            },
            {
                id: 'access3',
                title: 'HTML ARIA atributlari',
                url: 'https://www.youtube.com/embed/i7lU6v_RejM',
                duration: '3:45',
                thumbnail: 'https://i3.ytimg.com/vi/i7lU6v_RejM/maxresdefault.jpg'
            },
            {
                id: 'access4',
                title: 'HTML qulaylik standartlari',
                url: 'https://www.youtube.com/embed/lSqXHePabFo',
                duration: '6:20',
                thumbnail: 'https://i3.ytimg.com/vi/lSqXHePabFo/maxresdefault.jpg'
            },
            {
                id: 'access5',
                title: 'HTML qulaylik amaliyot',
                url: 'https://www.youtube.com/embed/qr0ujkLLgmE',
                duration: '5:00',
                thumbnail: 'https://i3.ytimg.com/vi/qr0ujkLLgmE/maxresdefault.jpg'
            }
        ]
    },
  ];

  const renderContent = () => {
    const currentTopicData = htmlTopics.find(
      (topic) => topic.id === currentTopic
    );
    const topicLesson = topicLessons[currentTopic];

    return (
      <div className="grid grid-cols-1 gap-6">
        {/* Darslik */}
        <div className="md:col-span-2">
          <Lesson
            title={currentTopicData.name}
            content={topicLesson.lessonContent}
            onComplete={() => completeLesson(currentTopicData.id)}
            isCompleted={topicProgress[currentTopicData.id]?.lessonCompleted}
          />
        </div>

        {/* Video darslar */}
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  {currentTopicData.name} - Video Darslar
                </span>
              </h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-sm">
                  {currentTopicData.videos?.length || 0} ta video
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTopicData.videos?.map((video, index) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group hover:bg-opacity-30 transition-all duration-300">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          className="w-8 h-8 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </a>
                    </div>
                    <div className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {index + 1}-dars
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {video.duration}
                      </span>
                      <button
                        className="text-purple-600 hover:text-purple-700 font-medium"
                        onClick={() => window.open(video.url, "_blank")}
                      >
                        Darsni ko'rish
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kod Editor */}
        <div className="md:col-span-2">
          <CodeEditor
            initialCode={topicLesson.initialCode}
            language="html"
          />
        </div>

        {/* Mini o'yinlar */}
        {topicLesson.miniGames?.map((game, index) => (
          <div key={index} className="md:col-span-2">
            <MiniGame
              title={game.title}
              question={game.question}
              options={game.options}
              correctAnswer={game.correctAnswer}
              onComplete={() => completeMiniGame(currentTopicData.id)}
              isCompleted={topicProgress[currentTopicData.id]?.miniGameCompleted}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      id="app-containeri"
      className="bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen"
    >
      <nav className="bg-white shadow-lg fixed top-0 left-0 z-10 right-0">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <span className="text-4xl">🚀</span>
              <h1
                onClick={() => navigate("/frontend/html")}
                className="text-xl sm:text-2xl font-bold text-blue-600"
              >
                HTML Sarguzashtlari
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-300 px-3 py-1 rounded-full text-yellow-800 text-sm sm:text-base">
                ⭐ {score} Ball
              </span>
              <span className="bg-green-300 px-3 py-1 rounded-full text-green-800 text-sm sm:text-base">
                🏆 {completedLessons} Yutuq
              </span>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-gray-800 opacity-75"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl z-50 p-4">
            <h3 className="text-lg font-bold mb-4">HTML Mavzulari</h3>
            <ul className="space-y-2">
              {htmlTopics.map((topic) => (
                <li key={topic.id}>
                  <button
                    onClick={() => {
                      setCurrentTopic(topic.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center w-full p-2 rounded-lg transition-colors duration-200 ${
                      currentTopic === topic.id
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <topic.icon className="h-5 w-5 mr-2" />
                    <span className="text-sm flex gap-3">{topic.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <main className="container mx-auto px-4 py-8 mt-20 sm:mt-24">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-blue-600"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2 sm:mb-4">
            HTML Dunyosiga Xush Kelibsiz! 🎮
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Veb-sahifalar yaratishni o'yin orqali o'rganamiz!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 order-2 lg:order-1 hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                HTML Mavzulari
              </h3>
              <ul className="space-y-2">
                {htmlTopics.map((topic) => (
                  <li key={topic.id}>
                    <button
                      onClick={() => setCurrentTopic(topic.id)}
                      className={`flex items-center w-full p-2 rounded-lg transition-colors duration-200 ${
                        currentTopic === topic.id
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <topic.icon className="h-5 w-5 mr-2" />
                      <span className="text-sm sm:text-base">{topic.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
            {renderContent()}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Mening Yutuqlarim 🏆
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                completedLessons >= 1 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🌟</span>
              <p className="text-gray-600 text-sm sm:text-base">
                HTML Boshlovchi
              </p>
            </div>
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                score >= 20 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🎯</span>
              <p className="text-gray-600 text-sm sm:text-base">Tag Master</p>
            </div>
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                completedLessons >= 2 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🎨</span>
              <p className="text-gray-600 text-sm sm:text-base">
                HTML Dizayner
              </p>
            </div>
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                score >= 50 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🚀</span>
              <p className="text-gray-600 text-sm sm:text-base">HTML Pro</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-8 sm:mt-12 py-4 sm:py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            HTML Sarguzashtlari - Bolalar uchun HTML o'rganish platformasi 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Boshlangich;

const VideoPlayer = ({ video, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (onPlay) onPlay(video.id);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 mb-6">
      {!isPlaying ? (
        <div className="relative group cursor-pointer" onClick={handlePlay}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 5v10l8-5-8-5z" />
              </svg>
            </div>
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              {video.duration}
            </span>
          </div>
        </div>
      ) : (
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`${video.url}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          {video.title}
        </h4>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
          </svg>
          {video.duration}
        </div>
      </div>
    </div>
  );
};

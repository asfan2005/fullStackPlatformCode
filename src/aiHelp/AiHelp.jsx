import React, { useState, useEffect } from 'react';

const InfinitySchoolApp = () => {
  const initialMessage = {
    id: 1,
    sender: 'ai',
    message: 'Salom! Men Infinity-School\'ning AI assistentiman. Dasturlash bo\'yicha savollaringizga javob berishga tayyorman!',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([initialMessage]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [conversationId, setConversationId] = useState(1);
  const [allConversations, setAllConversations] = useState([
    { id: 1, messages: [initialMessage] }
  ]);
  const [activeTab, setActiveTab] = useState('conversations');
  const [theme, setTheme] = useState('light');
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [codeContent, setCodeContent] = useState('// Kodingizni shu yerga yozing\nconsole.log("Salom dunyo!");');
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Add body class to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobile, isSidebarOpen]);

  // Programming questions and answers database
  const programmingQnA = {
    'javascript nima?': `<div class="w-full">
      <p>JavaScript - bu web-dasturlash tili bo'lib, web-sahifalarni interaktiv qilish uchun ishlatiladi. U HTML va CSS bilan birga web-dasturlashning asosiy texnologiyalaridan biri hisoblanadi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// JavaScript misollar
  // O'zgaruvchi e'lon qilish
  let ism = "Ali";
  const yosh = 25;
  
  // Funksiya yaratish
  function salomlash(ism) {
    return "Salom, " + ism + "!";
  }
  
  // DOM bilan ishlash
  document.getElementById("tugma").addEventListener("click", function() {
    alert("Tugma bosildi!");
  });</code></pre>
    </div>`,
    
    'python nima?': `<div class="w-full">
      <p>Python - bu yuqori darajadagi, umumiy maqsadli dasturlash tili. U o'qish va yozish osonligi, kodni aniq va mantiqiy tuzilishi bilan mashhur. Python sun'iy intellekt, ma'lumotlar tahlili, veb-dasturlash va boshqa ko'p sohalarda qo'llaniladi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code># Python misollar
  # O'zgaruvchilar
  ism = "Aziz"
  yosh = 30
  
  # Funksiya yaratish
  def salomlash(ism):
      return f"Salom, {ism}!"
  
  # For tsikli
  for i in range(5):
      print(i)
      
  # List bilan ishlash
  mevalar = ["olma", "banan", "uzum"]
  for meva in mevalar:
      print(meva)</code></pre>
    </div>`,
    
    'for tsikli nima?': `<div class="w-full">
      <p>For tsikli - bu kod blokini belgilangan miqdordagi marta takrorlash uchun ishlatiladigan dasturlash konstruktsiyasi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// JavaScript for tsikli
  for(let i = 0; i < 5; i++) { 
    console.log(i);  // 0, 1, 2, 3, 4 raqamlarini konsolga chiqaradi
  }
  
  // Array elementlarini aylanib chiqish
  const mevalar = ["olma", "banan", "uzum"];
  for(let i = 0; i < mevalar.length; i++) {
    console.log(mevalar[i]);
  }
  
  // for...of tsikli
  for(const meva of mevalar) {
    console.log(meva);
  }</code></pre>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code># Python for tsikli
  for i in range(5):
      print(i)  # 0, 1, 2, 3, 4 raqamlarini konsolga chiqaradi
      
  # List elementlarini aylanib chiqish
  mevalar = ["olma", "banan", "uzum"]
  for meva in mevalar:
      print(meva)</code></pre>
    </div>`,
    
    'html nima?': `<div class="w-full">
      <p>HTML (HyperText Markup Language) - bu veb-sahifalarni yaratish uchun ishlatiladigan standart belgilash tili. U veb-sahifaning tuzilishini tavsiflaydi va turli elementlarni joylashtirishga imkon beradi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Mening birinchi web sahifam&lt;/title&gt;
    &lt;meta charset="UTF-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Salom, dunyo!&lt;/h1&gt;
    &lt;p&gt;Bu mening birinchi HTML sahifam.&lt;/p&gt;
    
    &lt;div class="container"&gt;
      &lt;h2&gt;HTML elementlar&lt;/h2&gt;
      &lt;ul&gt;
        &lt;li&gt;Sarlavhalar: h1, h2, ...&lt;/li&gt;
        &lt;li&gt;Paragraflar: p&lt;/li&gt;
        &lt;li&gt;Ro'yxatlar: ul, ol, li&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
    </div>`,
    
    'css nima?': `<div class="w-full">
      <p>CSS (Cascading Style Sheets) - veb-sahifalar ko'rinishini tavsiflovchi uslublar tili. U HTML elementlariga rang, shrift, joylashuv va boshqa vizual elementlarni qo'shish uchun ishlatiladi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>/* CSS misollari */
  /* Elementlarga uslub berish */
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  h1 {
    color: #333;
    font-size: 24px;
    text-align: center;
  }
  
  /* Class bilan ishlash */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  /* Flexbox */
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Media queries - responsive dizayn */
  @media (max-width: 768px) {
    h1 {
      font-size: 20px;
    }
    
    .container {
      padding: 10px;
    }
  }</code></pre>
    </div>`,
    
    'react nima?': `<div class="w-full">
      <p>React - bu Facebook tomonidan yaratilgan JavaScript kutubxonasi bo'lib, foydalanuvchi interfeyslarini yaratish uchun ishlatiladi. U komponentlarga asoslangan yondashuv orqali veb-dasturlashni samarali qiladi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// React komponent misoli
  import React, { useState } from 'react';
  
  function Counter() {
    // Holatni e'lon qilish
    const [count, setCount] = useState(0);
  
    return (
      &lt;div className="counter"&gt;
        &lt;h2&gt;Sanoq: {count}&lt;/h2&gt;
        &lt;button onClick={() => setCount(count + 1)}&gt;
          Ko'paytirish
        &lt;/button&gt;
        &lt;button onClick={() => setCount(count - 1)}&gt;
          Kamaytirish
        &lt;/button&gt;
      &lt;/div&gt;
    );
  }
  
  // App komponent
  function App() {
    return (
      &lt;div className="app"&gt;
        &lt;h1&gt;React Counter App&lt;/h1&gt;
        &lt;Counter /&gt;
      &lt;/div&gt;
    );
  }
  
  export default App;</code></pre>
    </div>`,
    
    'api nima?': `<div class="w-full">
      <p>API (Application Programming Interface) - bu dasturiy ta'minotning boshqa dasturiy ta'minot bilan o'zaro aloqa qilishiga imkon beruvchi mexanizm. U dasturchilar uchun ma'lum funktsiyalarni osongina qo'llash imkonini beradi.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// REST API dan ma'lumotlarni olish (JavaScript)
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log('Foydalanuvchilar:', data);
    })
    .catch(error => {
      console.error('Xatolik yuz berdi:', error);
    });
  
  // Async/await yordamida API bilan ishlash
  async function getFoydalanuvchilar() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  }</code></pre>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code># Python bilan API ni ishlatish
  import requests
  
  # API dan ma'lumotlarni olish
  response = requests.get('https://jsonplaceholder.typicode.com/users')
  if response.status_code == 200:
      users = response.json()
      print('Foydalanuvchilar soni:', len(users))
  else:
      print('Xatolik yuz berdi, status kod:', response.status_code)</code></pre>
    </div>`,
    
    'database nima?': `<div class="w-full">
      <p>Ma'lumotlar bazasi - bu ma'lumotlarni saqlash, boshqarish va qayta ishlash imkonini beruvchi tizim. Eng mashhur ma'lumotlar bazasi turlari: SQL (MySQL, PostgreSQL) va NoSQL (MongoDB, Firebase).</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>-- SQL misollari (MySQL)
  -- Jadval yaratish
  CREATE TABLE foydalanuvchilar (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ism VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    yosh INT,
    yaratilgan_sana TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  -- Ma'lumot qo'shish
  INSERT INTO foydalanuvchilar (ism, email, yosh) 
  VALUES ('Ali Valiyev', 'ali@example.com', 25);
  
  -- Ma'lumotlarni olish
  SELECT * FROM foydalanuvchilar WHERE yosh > 20;
  
  -- Ma'lumotlarni yangilash
  UPDATE foydalanuvchilar SET yosh = 26 WHERE ism = 'Ali Valiyev';
  
  -- Ma'lumotlarni o'chirish
  DELETE FROM foydalanuvchilar WHERE id = 1;</code></pre>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// MongoDB (NoSQL) misoli
  // Hujjat yaratish
  db.foydalanuvchilar.insertOne({
    ism: "Ali Valiyev",
    email: "ali@example.com",
    yosh: 25,
    qiziqishlar: ["dasturlash", "kitob o'qish", "sayohat"],
    manzil: {
      shahar: "Toshkent",
      tuman: "Yunusobod"
    }
  })
  
  // Ma'lumotlarni olish
  db.foydalanuvchilar.find({ yosh: { $gt: 20 } })</code></pre>
    </div>`,
    
    'variable nima?': `<div class="w-full">
      <p>O'zgaruvchi - bu dasturlashda ma'lumotlarni saqlash uchun ishlatiladigan konteyner.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// JavaScript o'zgaruvchilar
  // let - o'zgartirilishi mumkin bo'lgan o'zgaruvchi
  let ism = "Akmal";
  ism = "Bekzod";  // o'zgartirish mumkin
  
  // const - o'zgartirilmaydigan o'zgaruvchi
  const PI = 3.14159;
  // PI = 3.14;  // xato - const o'zgartirib bo'lmaydi
  
  // Turli turdagi o'zgaruvchilar
  let yosh = 25;  // number (son)
  let isLoggedIn = true;  // boolean (mantiqiy)
  let manzil = null;  // null
  let profile = {  // object (obyekt)
    ism: "Akmal",
    yosh: 25
  };
  let raqamlar = [1, 2, 3, 4, 5];  // array (massiv)</code></pre>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code># Python o'zgaruvchilar
  ism = "Akmal"  # string (matn)
  yosh = 25  # int (butun son)
  boy = 1.75  # float (o'nlik son)
  is_student = True  # boolean (mantiqiy)
  manzil = None  # None
  profile = {  # dictionary (lug'at)
      "ism": "Akmal",
      "yosh": 25
  }
  raqamlar = [1, 2, 3, 4, 5]  # list (ro'yxat)</code></pre>
    </div>`,
    
    'function nima?': `<div class="w-full">
      <p>Funktsiya - bu ma'lum vazifani bajarish uchun mo'ljallangan kod bloki. Funktsiyalar kodni qayta ishlatish va mantiqiy ajratish uchun juda foydali.</p>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code>// JavaScript funksiyalar
  // Oddiy funksiya
  function qoshish(a, b) {
    return a + b;
  }
  
  // Funksiyani chaqirish
  const natija = qoshish(5, 3);  // 8
  
  // Arrow funksiya (ES6+)
  const kopaytirish = (a, b) => a * b;
  
  // Default parametrli funksiya
  function salomlash(ism = "mehmon") {
    return \`Salom, \${ism}!\`;
  }
  
  // Callback funksiya
  function hisoblash(a, b, callback) {
    return callback(a, b);
  }
  
  const natija2 = hisoblash(5, 3, (a, b) => a + b);  // 8</code></pre>
      <pre class="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-x-auto"><code># Python funksiyalar
  # Oddiy funksiya
  def qoshish(a, b):
      return a + b
  
  # Funksiyani chaqirish
  natija = qoshish(5, 3)  # 8
  
  # Default parametrli funksiya
  def salomlash(ism="mehmon"):
      return f"Salom, {ism}!"
  
  # Lambda funksiya (bir qatorli funksiya)
  kopaytirish = lambda a, b: a * b
  
  # Dekorator funksiyasi
  def logger(func):
      def wrapper(*args, **kwargs):
          print(f"Funksiya chaqirildi: {func.__name__}")
          return func(*args, **kwargs)
      return wrapper
  
  @logger
  def ayirish(a, b):
      return a - b</code></pre>
    </div>`
  };

  const suggestedQuestions = [
    { id: 1, text: 'JavaScript nima?', category: 'Web Dasturlash' },
    { id: 2, text: 'Python nima?', category: 'Backend' },
    { id: 3, text: 'For tsikli nima?', category: 'Asoslar' },
    { id: 4, text: 'HTML nima?', category: 'Frontend' },
    { id: 5, text: 'CSS nima?', category: 'Frontend' },
    { id: 6, text: 'React nima?', category: 'Framework' }
  ];

  const recentConversations = [
    { id: 1, title: 'JavaScript asoslari', subtitle: 'O\'zgaruvchilar va funksiyalar', time: 'Bugun' },
    { id: 2, title: 'Python dasturlash', subtitle: 'Ma\'lumotlar tuzilmasi', time: 'Kecha' },
    { id: 3, title: 'Web dasturlash', subtitle: 'HTML va CSS asoslari', time: '2 kun oldin' },
    { id: 4, title: 'Algoritmlar', subtitle: 'Qidirish va saralash algoritmlari', time: '4 kun oldin' },
    { id: 5, title: 'Ma\'lumotlar bazalari', subtitle: 'SQL va NoSQL farqlari', time: '1 hafta oldin' }
  ];

  // Available features
  const features = [
    { id: 1, title: 'Kod redaktori', description: 'Dasturlash kodlarini yozish va tekshirish uchun o\'rnatilgan redaktor', icon: 'code' },
    { id: 2, title: 'Code snippets', description: 'Eng ko\'p ishlatiladigan kod parchalarini saqlash va boshqarish', icon: 'copy' },
    { id: 3, title: 'Qorong\'i rejim', description: 'Interfeys ko\'rinishini qorong\'i rejimga o\'zgartirish', icon: 'moon', toggle: true, isActive: theme === 'dark' },
    { id: 4, title: 'Xabarlarni export qilish', description: 'Suhbatlarni PDF yoki matn formatida saqlash', icon: 'download' },
    { id: 5, title: 'Kod formatlash', description: 'Yozilgan kodlarni avtomatik formatlash imkoniyati', icon: 'layout' },
    { id: 6, title: 'Til sozlamalari', description: 'Dastur interfeysining tilini o\'zgartirish', icon: 'globe' }
  ];

  // Learning materials
  const learningMaterials = [
    { id: 1, title: 'JavaScript asoslari', description: 'JavaScript dasturlash tili haqida asosiy ma\'lumotlar', progress: 75, lessons: 12, completed: 9 },
    { id: 2, title: 'React framework', description: 'React kutubxonasidan foydalanib web dasturlash', progress: 30, lessons: 18, completed: 6 },
    { id: 3, title: 'Python dasturlash', description: 'Python asoslari va amaliy mashqlar', progress: 90, lessons: 10, completed: 9 },
    { id: 4, title: 'HTML/CSS', description: 'Web sahifalarni yaratish asoslari', progress: 100, lessons: 8, completed: 8 }
  ];

  // Function to get current time in HH:MM format
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to conversation
      const newUserMessage = {
        id: conversations.length + 1,
        sender: 'user',
        message: message,
        time: getCurrentTime()
      };
      
      const updatedConversations = [...conversations, newUserMessage];
      setConversations(updatedConversations);
      
      // Update allConversations
      updateAllConversations(updatedConversations);
      
      // Generate AI response
      setTimeout(() => {
        const lowerCaseMessage = message.toLowerCase().trim();
        let aiResponse = '';
        
        // Check if the question exists in our database
        for (const question in programmingQnA) {
          if (lowerCaseMessage.includes(question.toLowerCase())) {
            aiResponse = programmingQnA[question];
            break;
          }
        }
        
        // Default response if no match found
        if (!aiResponse) {
          aiResponse = `<div class="w-full">
            <p>Kechirasiz, bu savol bo'yicha ma'lumotim yo'q. Iltimos, dasturlash bo'yicha boshqa savol bering.</p>
            <p class="mt-2">Masalan:</p>
            <ul class="list-disc pl-5 mt-1">
              <li>JavaScript nima?</li>
              <li>Python nima?</li>
              <li>For tsikli nima?</li>
            </ul>
          </div>`;
        }
        
        const newAiMessage = {
          id: updatedConversations.length + 1,
          sender: 'ai',
          message: aiResponse,
          time: getCurrentTime()
        };
        
        const finalConversations = [...updatedConversations, newAiMessage];
        setConversations(finalConversations);
        
        // Update allConversations
        updateAllConversations(finalConversations);
      }, 500);
      
      setMessage('');
    }
  };

  // Function to update allConversations with the current conversation
  const updateAllConversations = (currentMessages) => {
    setAllConversations(prev => {
      const newConversations = [...prev];
      const index = newConversations.findIndex(convo => convo.id === conversationId);
      
      if (index !== -1) {
        newConversations[index] = { ...newConversations[index], messages: currentMessages };
      }
      
      return newConversations;
    });
  };

  // Function to handle clicking on a suggested question
  const handleQuestionClick = (questionText) => {
    setMessage(questionText);
    
    // Add user message to conversation
    const newUserMessage = {
      id: conversations.length + 1,
      sender: 'user',
      message: questionText,
      time: getCurrentTime()
    };
    
    const updatedConversations = [...conversations, newUserMessage];
    setConversations(updatedConversations);
    
    // Update allConversations
    updateAllConversations(updatedConversations);
    
    // Close sidebar on mobile after selecting a question
    if (isMobile) {
      setSidebarOpen(false);
    }
    
    // Generate AI response
    setTimeout(() => {
      const lowerCaseMessage = questionText.toLowerCase().trim();
      let aiResponse = '';
      
      // Check if the question exists in our database
      for (const question in programmingQnA) {
        if (lowerCaseMessage.includes(question.toLowerCase())) {
          aiResponse = programmingQnA[question];
          break;
        }
      }
      
      // Default response if no match found
      if (!aiResponse) {
        aiResponse = `<div class="w-full">
          <p>Kechirasiz, bu savol bo'yicha ma'lumotim yo'q. Iltimos, dasturlash bo'yicha boshqa savol bering.</p>
          <p class="mt-2">Masalan:</p>
          <ul class="list-disc pl-5 mt-1">
            <li>JavaScript nima?</li>
            <li>Python nima?</li>
            <li>For tsikli nima?</li>
          </ul>
        </div>`;
      }
      
      const newAiMessage = {
        id: updatedConversations.length + 1,
        sender: 'ai',
        message: aiResponse,
        time: getCurrentTime()
      };
      
      const finalConversations = [...updatedConversations, newAiMessage];
      setConversations(finalConversations);
      
      // Update allConversations
      updateAllConversations(finalConversations);
    }, 500);
    
    setMessage('');
  };

  // Function to clear the current conversation
  const handleClearConversation = () => {
    // Reset to initial state with just the welcome message
    setConversations([initialMessage]);
    
    // Update allConversations
    updateAllConversations([initialMessage]);
  };

  // Function to create a new conversation
  const handleNewConversation = () => {
    // Generate a new conversation ID
    const newId = allConversations.length + 1;
    
    // Create initial message for the new conversation
    const newInitialMessage = {
      id: 1,
      sender: 'ai',
      message: 'Yangi suhbat boshlandi! Men Infinity-School\'ning AI assistentiman. Dasturlash bo\'yicha savollaringizga javob berishga tayyorman!',
      time: getCurrentTime()
    };
    
    // Add new conversation to allConversations
    setAllConversations(prev => [...prev, { id: newId, messages: [newInitialMessage] }]);
    
    // Set the new conversation as current
    setConversationId(newId);
    setConversations([newInitialMessage]);
    
    // Close sidebar on mobile after creating a new conversation
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Function to switch to a specific conversation
  const handleSwitchConversation = (id) => {
    const conversation = allConversations.find(convo => convo.id === id);
    
    if (conversation) {
      setConversationId(id);
      setConversations(conversation.messages);
      
      // Close sidebar on mobile after switching conversation
      if (isMobile) {
        setSidebarOpen(false);
      }
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Function to handle feature click
  const handleFeatureClick = (feature) => {
    if (feature.id === 3) { // Dark mode toggle
      toggleTheme();
    } else {
      // Show a demo alert for now
      alert(`${feature.title} xususiyati tez orada qo'shiladi!`);
    }
  };

  // Function to format code
  const formatCode = () => {
    // Simple indentation formatter
    const lines = codeContent.split('\n');
    let indentLevel = 0;
    const formattedLines = lines.map(line => {
      if (line.trim().startsWith('}')) {
        indentLevel = Math.max(0, indentLevel - 1);
      }
      
      const formattedLine = '  '.repeat(indentLevel) + line.trim();
      
      if (line.includes('{') && !line.includes('}')) {
        indentLevel++;
      }
      
      return formattedLine;
    });
    
    setCodeContent(formattedLines.join('\n'));
  };

  // Add clear code function
  const clearCode = () => {
    setCodeContent('// Kodingizni shu yerga yozing');
  };

  // Export conversation
  const exportConversation = () => {
    let content = "Infinity School AI Suhbati\n\n";
    conversations.forEach(msg => {
      content += `[${msg.time}] ${msg.sender === 'user' ? 'Siz' : 'AI'}: ${msg.message}\n\n`;
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `infinity-school-chat-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Generate Icon based on name (simplified version)
  const Icon = ({ name, className }) => {
    switch (name) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'copy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'moon':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      case 'download':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        );
      case 'layout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      {/* Mobile Overlay for sidebar */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - conditionally rendered with responsive styles */}
      {isSidebarOpen && (
        <div 
          className={`${isMobile ? 'fixed inset-y-0 left-0 w-4/5 max-w-xs z-50' : 'w-80'} 
            ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
            border-r flex flex-col transition-all duration-300 ease-in-out shadow-xl`}
        >
          {/* Mobile sidebar header */}
          {isMobile && (
            <div className={`p-4 flex items-center justify-between border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className="text-lg font-semibold">Infinity School AI</h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Search */}
          <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Suhbatlar qidirish..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'border-gray-300 focus:ring-blue-500'
                } border focus:outline-none focus:ring-2`}
              />
              <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* New Chat Button */}
          <button 
            className="mx-4 my-3 py-2 px-4 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
            onClick={handleNewConversation}
          >
            <span className="mr-2">+</span>
            <span>Yangi suhbat</span>
          </button>

          {/* Tabs */}
          <div className={`flex border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <button 
              className={`flex-1 py-3 font-medium ${
                activeTab === 'conversations' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('conversations')}
            >
              Suhbatlar
            </button>
            <button 
              className={`flex-1 py-3 font-medium ${
                activeTab === 'features' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('features')}
            >
              Imkoniyatlar
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'conversations' ? (
            /* Conversation List */
            <div className="flex-1 overflow-y-auto">
              {/* Real conversations from allConversations state */}
              {allConversations.map((convo) => (
                <div 
                  key={convo.id} 
                  className={`p-4 hover:bg-gray-100 cursor-pointer border-b ${
                    theme === 'dark' 
                      ? 'border-gray-700 hover:bg-gray-700' 
                      : 'border-gray-100'
                  } ${convo.id === conversationId ? theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50' : ''} transition-all`}
                  onClick={() => handleSwitchConversation(convo.id)}
                >
                  <div className="flex justify-between">
                    <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Suhbat {convo.id}</h3>
                    <span className="text-xs text-gray-500">{convo.messages[convo.messages.length - 1]?.time || ''}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {convo.messages.length > 1 
                      ? convo.messages[convo.messages.length - 1].message.substring(0, 40) + '...' 
                      : 'Yangi suhbat'}
                  </p>
                </div>
              ))}
              
              {/* Sample conversations for UI display */}
              {recentConversations.map((convo) => (
                <div 
                  key={`sample-${convo.id}`} 
                  className={`p-4 hover:bg-gray-100 cursor-pointer border-b ${
                    theme === 'dark' 
                      ? 'border-gray-700 hover:bg-gray-700' 
                      : 'border-gray-100'
                  } transition-all`}
                >
                  <div className="flex justify-between">
                    <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{convo.title}</h3>
                    <span className="text-xs text-gray-500">{convo.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{convo.subtitle}</p>
                </div>
              ))}
            </div>
          ) : (
            /* Features List */
            <div className="flex-1 overflow-y-auto">
              {/* Features section */}
              <div className="p-4">
                <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Dastur imkoniyatlari</h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature) => (
                    <div 
                      key={feature.id} 
                      className={`p-4 rounded-lg cursor-pointer ${
                        theme === 'dark' 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                      } shadow-sm transition transform hover:scale-105`}
                      onClick={() => handleFeatureClick(feature)}
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-md mr-3 ${
                          feature.isActive 
                            ? 'bg-blue-100 text-blue-600' 
                            : theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon name={feature.icon} className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{feature.title}</h4>
                          <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                        {feature.toggle && (
                          <div className={`w-12 h-6 rounded-full p-1 ${feature.isActive ? 'bg-blue-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} transition-colors`}>
                            <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${feature.isActive ? 'translate-x-6' : ''}`}></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Materials */}
              <div className="p-4 mt-2">
                <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>O'quv materiallari</h3>
                <div className="grid grid-cols-1 gap-3">
                  {learningMaterials.map((material) => (
                    <div 
                      key={material.id} 
                      className={`p-4 rounded-lg cursor-pointer ${
                        theme === 'dark' 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                      } shadow-sm transition transform hover:scale-105`}
                    >
                      <div className="mb-2">
                        <h4 className="font-medium">{material.title}</h4>
                        <p className="text-sm text-gray-500">{material.description}</p>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{material.completed} / {material.lessons} darslar</span>
                        <span>{material.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: `${material.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 border-b flex items-center justify-between shadow-sm sticky top-0 z-30`}>
          {/* Toggle sidebar button */}
          <button
            className={`p-2 rounded-md ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen && isMobile ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          <div className={`text-center flex-1 ${isMobile ? 'mx-2' : 'mx-4'}`}>
            <h1 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} transition-colors`}>Infinity School AI Yordamchisi</h1>
            {!isMobile && (
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1 transition-colors`}>
                Dasturlash bo'yicha savollaringizga javob beruvchi AI assistant
              </p>
            )}
          </div>
          
          {/* Theme toggle button */}
          <button
            className={`p-2 rounded-md ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </header>

        {/* Code Editor - conditionally shown */}
        {showCodeEditor && (
          <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'} transition-colors`}>Kod redaktori</h3>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded text-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                  onClick={formatCode}
                >
                  Formatlash
                </button>
                <button 
                  className={`px-3 py-1 rounded text-sm ${theme === 'dark' ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-yellow-500 text-white hover:bg-yellow-600'} transition-colors`}
                  onClick={clearCode}
                >
                  Tozalash
                </button>
                <button 
                  className={`px-3 py-1 rounded text-sm ${theme === 'dark' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'} transition-colors`}
                  onClick={() => setShowCodeEditor(false)}
                >
                  Yopish
                </button>
              </div>
            </div>
            <textarea
              value={codeContent}
              onChange={(e) => setCodeContent(e.target.value)}
              className={`w-full h-40 p-3 font-mono text-sm rounded-md ${
                theme === 'dark' 
                  ? 'bg-gray-900 text-gray-300 border-gray-700' 
                  : 'bg-white text-gray-800 border-gray-300'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            />
          </div>
        )}

        {/* Chat Area */}
        <div className={`flex-1 p-3 sm:p-4 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
          {conversations.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
              <div className={`flex max-w-xs sm:max-w-md md:max-w-lg xl:max-w-xl ${
                msg.sender === 'user' 
                  ? theme === 'dark' ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white' 
                  : theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              } rounded-lg p-3 shadow-md transition-colors transform hover:scale-[1.01] ${msg.sender === 'ai' ? 'w-full' : ''}`}>
                {msg.sender === 'ai' && (
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 ${
                    theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'
                  } rounded-full text-white mr-3 transition-colors`}>
                    AI
                  </div>
                )}
                <div className="flex-1">
                  {msg.sender === 'ai' && msg.message.startsWith('<div') ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.message }} />
                  ) : (
                    <p className="text-sm break-words">{msg.message}</p>
                  )}
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} block text-right mt-1 transition-colors`}>{msg.time}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Suggested Questions - only shown if it's a new conversation */}
          {conversations.length === 1 && (
            <div className="mt-6 animate-fade-in">
              <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-3 transition-colors`}>Tavsiya etilgan savollar:</h3>
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
                {suggestedQuestions.map((question) => (
                  <div 
                    key={question.id} 
                    className={`${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                        : 'bg-white border-gray-200 hover:border-blue-400'
                    } p-3 rounded-lg border cursor-pointer transition-all transform hover:scale-[1.02] hover:shadow-md`}
                    onClick={() => handleQuestionClick(question.text)}
                  >
                    <p className="text-sm">{question.text}</p>
                    <span className={`text-xs ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-600'
                    } px-2 py-1 rounded mt-2 inline-block transition-colors`}>{question.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className={`p-3 sm:p-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t sticky bottom-0 z-10 shadow-[0_-2px_5px_rgba(0,0,0,0.05)] transition-colors`}>
          <div className="flex items-center">
            <div className="flex-1 flex items-center space-x-2">
              <button 
                className={`p-2 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition-colors`}
                onClick={() => setShowCodeEditor(!showCodeEditor)}
                aria-label="Code editor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </button>
              <button 
                className={`p-2 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition-colors`}
                onClick={exportConversation}
                aria-label="Export conversation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Savolingizni yozing..."
                className={`flex-1 py-2 px-3 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-100 border-gray-200 text-gray-800'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
            </div>
            <button 
              className={`ml-2 p-2 rounded-full ${
                message.trim() 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : theme === 'dark' ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
              } ${message.trim() ? 'cursor-pointer' : 'cursor-not-allowed'} transition-colors`}
              onClick={handleSendMessage}
              disabled={!message.trim()}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button 
              className={`text-xs ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
              onClick={handleClearConversation}
            >
              Suhbatni tozalash
            </button>
            <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>
              Javoblar AI tomonidan generatsiya qilingan va noaniqliklar bo'lishi mumkin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add some CSS for animations
const cssStyles = `
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;

export default InfinitySchoolApp;
import React, { useState, useCallback, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Editor from "@monaco-editor/react";
import "./b.css";
import { useNavigate } from "react-router-dom";
const Lesson = ({ title, content, onComplete, isCompleted }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="prose mb-4">{content}</div>
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
          height="200px"
        />
      </div>
    </div>
  );
};

const htmlTopics = [
  {
    id: "multimedia",
    name: "Multimedia elementlari",
    icon: () => <span>🎥</span>,
  },
  {
    id: "advanced-forms",
    name: "Kengaytirilgan formalar",
    icon: () => <span>📝</span>,
  },
  { id: "iframe", name: "Iframe", icon: () => <span>🖼️</span> },
  {
    id: "semantic-html",
    name: "Chuqurlashtirilgan semantik HTML",
    icon: () => <span>🏷️</span>,
  },
  { id: "meta-seo", name: "Meta teglar va SEO", icon: () => <span>🔍</span> },
  { id: "svg-canvas", name: "SVG va Canvas", icon: () => <span>🎨</span> },
  {
    id: "responsive-design",
    name: "Responsive Web Design",
    icon: () => <span>📱</span>,
  },
  { id: "html5-apis", name: "HTML5 APIs", icon: () => <span>🔌</span> },
  {
    id: "progressive-enhancement",
    name: "Progressive Enhancement",
    icon: () => <span>🚀</span>,
  },
  { id: "videos", name: "Video darslar", icon: () => <span>🎥</span> },
];

function Orta() {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("htmlAdventureScoreOrta");
    return savedScore ? parseInt(savedScore, 10) : 0;
  });
  const [completedLessons, setCompletedLessons] = useState(() => {
    const savedLessons = localStorage.getItem(
      "htmlAdventureCompletedLessonsOrta"
    );
    return savedLessons ? parseInt(savedLessons, 10) : 0;
  });
  const [currentTopic, setCurrentTopic] = useState("multimedia");
  const [topicProgress, setTopicProgress] = useState(() => {
    const savedProgress = localStorage.getItem(
      "htmlAdventureTopicProgressOrta"
    );
    return savedProgress ? JSON.parse(savedProgress) : {};
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideoTopic, setCurrentVideoTopic] = useState("multimedia");

  useEffect(() => {
    localStorage.setItem("htmlAdventureScoreOrta", score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem(
      "htmlAdventureCompletedLessonsOrta",
      completedLessons.toString()
    );
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem(
      "htmlAdventureTopicProgressOrta",
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

  const renderContent = () => {
    switch (currentTopic) {
      case "multimedia":
        return (
          <div className="space-y-4">
            <Lesson
              title="Multimedia elementlari"
              content={
                <div className="space-y-4">
                  <p>
                    HTML5 multimedia elementlari audio va video kontentni
                    osongina joylashtirish imkonini beradi.
                  </p>

                  <h3 className="text-xl font-bold">Audio elementi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<audio controls> 
  <source src="audio.mp3" 
  type="audio/mpeg"> 
  Brauzeringiz audio 
  elementini 
  qo'llab-quvvatlamaydi.
</audio>`}</code>
                  </pre>
                  <h3 className="text-xl font-bold">Video elementi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<video width="320" height="240" 
                  controls>
  <source src="video.mp4" 
  type="video/mp4">
  Brauzeringiz video elementini
   qo'llab-quvvatlamaydi.
</video>`}</code>
                  </pre>
                </div>
              }
              onComplete={() => completeLesson("multimedia")}
              isCompleted={topicProgress["multimedia"]?.lessonCompleted}
            />
            <CodeEditor
              initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Multimedia elementlari</title>
</head>
<body>
    <h1>Audio va Video namunasi</h1>
    
    <!-- Audio elementi -->
    <audio controls>
        <source src="https://example.com/audio.mp3" type="audio/mpeg">
        Brauzeringiz audio elementini qo'llab-quvvatlamaydi.
    </audio>
    
    <!-- Video elementi -->
    <video width="320" height="240" controls>
        <source src="https://example.com/video.mp4" type="video/mp4">
        Brauzeringiz video elementini qo'llab-quvvatlamaydi.
    </video>
</body>
</html>`}
              language="html"
            />
            <MiniGame
              title="Multimedia elementi tanlash"
              question="Qaysi element audio fayllarni o'ynatish uchun ishlatiladi?"
              options={["<audio>", "<video>", "<media>", "<sound>"]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("multimedia-audio-game")}
              isCompleted={
                topicProgress["multimedia-audio-game"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Multimedia elementi tanlash"
              question="Qaysi element video fayllarni o'ynatish uchun ishlatiladi?"
              options={["<audio>", "<video>", "<media>", "<animation>"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("multimedia-video-game")}
              isCompleted={
                topicProgress["multimedia-video-game"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Multimedia elementi tanlash"
              question="Qaysi atribut audio yoki video fayllarni avtomatik ijro qilish uchun ishlatiladi?"
              options={["controls", "autoplay", "loop", "muted"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("multimedia-autoplay-game")}
              isCompleted={
                topicProgress["multimedia-autoplay-game"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Multimedia elementi tanlash"
              question="Qaysi atribut audio yoki video fayllarni takroran o'ynatish uchun ishlatiladi?"
              options={["controls", "autoplay", "loop", "muted"]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("multimedia-loop-game")}
              isCompleted={
                topicProgress["multimedia-loop-game"]?.miniGameCompleted
              }
            />
          </div>
        );

      case "advanced-forms":
        return (
          <div className="space-y-4">
            <Lesson
              title="Kengaytirilgan formalar"
              content={
                <div className="space-y-4">
                  <p>
                    HTML5 yangi form elementlari va atributlarini taqdim etadi,
                    ular formalarni yanada funksional va foydalanuvchi uchun
                    qulay qiladi.
                  </p>

                  <h3 className="text-xl font-bold">Yangi input turlari:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<input type="date">
<input type="email">
<input type="number">
<input type="range">
<input type="search">
<input type="tel">
<input type="url">`}</code>
                  </pre>

                  <h3 className="text-xl font-bold">Form validatsiyasi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<input type="text" required>
<input type="email" 
pattern="[a-z0-9._%+-]
+@[a-z0-9.-]+\.[a-z]{2,}$">
<input type="number"
 min="1" max="100">`}</code>
                  </pre>
                </div>
              }
              onComplete={() => completeLesson("advanced-forms")}
              isCompleted={topicProgress["advanced-forms"]?.lessonCompleted}
            />
            <CodeEditor
              initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Kengaytirilgan formalar</title>
</head>
<body>
    <h1>Kengaytirilgan forma namunasi</h1>
    
    <form>
        <label for="name">Ism:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="birthdate">Tug'ilgan sana:</label>
        <input type="date" id="birthdate" name="birthdate"><br><br>
        
        <label for="phone">Telefon raqam:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"><br><br>
        
        <label for="rating">Baholash (1-5):</label>
        <input type="range" id="rating" name="rating" min="1" max="5"><br><br>
        
        <input type="submit" value="Yuborish">
    </form>
</body>
</html>`}
              language="html"
            />
            <MiniGame
              title="Kengaytirilgan forma elementini tanlash"
              question="Qaysi input turi email manzilini kiritish uchun ishlatiladi?"
              options={[
                '<input type="mail">',
                '<input type="email">',
                '<input type="address">',
                '<input type="contact">',
              ]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("advanced-forms-game-email")}
              isCompleted={
                topicProgress["advanced-forms-game-email"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Kengaytirilgan forma elementini tanlash"
              question="Qaysi input turi sanani kiritish uchun ishlatiladi?"
              options={[
                '<input type="text">',
                '<input type="datetime">',
                '<input type="date">',
                '<input type="calendar">',
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("advanced-forms-game-date")}
              isCompleted={
                topicProgress["advanced-forms-game-date"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Kengaytirilgan forma elementini tanlash"
              question="Qaysi input turi parolni kiritish uchun ishlatiladi?"
              options={[
                '<input type="text">',
                '<input type="password">',
                '<input type="secure">',
                '<input type="hidden">',
              ]}
              correctAnswer={1}
              onComplete={() =>
                completeMiniGame("advanced-forms-game-password")
              }
              isCompleted={
                topicProgress["advanced-forms-game-password"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Kengaytirilgan forma elementini tanlash"
              question="Qaysi input turi telefon raqamini kiritish uchun ishlatiladi?"
              options={[
                '<input type="phone">',
                '<input type="tel">',
                '<input type="contact">',
                '<input type="number">',
              ]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("advanced-forms-game-tel")}
              isCompleted={
                topicProgress["advanced-forms-game-tel"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Kengaytirilgan forma elementini tanlash"
              question="Qaysi input turi rangni tanlash uchun ishlatiladi?"
              options={[
                '<input type="color">',
                '<input type="range">',
                '<input type="rgb">',
                '<input type="select">',
              ]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("advanced-forms-game-color")}
              isCompleted={
                topicProgress["advanced-forms-game-color"]?.miniGameCompleted
              }
            />
          </div>
        );

      case "iframe":
        return (
          <div className="space-y-4">
            <Lesson
              title="Iframe"
              content={
                <div className="space-y-4">
                  <p>
                    Iframe elementi boshqa HTML hujjatni joriy hujjat ichiga
                    joylashtirish imkonini beradi.
                  </p>

                  <h3 className="text-xl font-bold">Iframe sintaksisi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<iframe src="URL" width="width" 
height="height"></iframe>`}</code>
                  </pre>

                  <p>Iframe'lar quyidagi maqsadlarda ishlatilishi mumkin:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Boshqa veb-saytlardan kontent joylashtirish:
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<iframe 
src="https://www.example.com"
width="600" height="400"></iframe>`}</code>
                      </pre>
                    </li>
                    <li>
                      Xaritalarni joylashtirish:
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<iframe 
src="https://maps.google.com"
width="600" height="450"></iframe>`}</code>
                      </pre>
                    </li>
                    <li>
                      YouTube videolarini joylashtirish:
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<iframe 
src="https://www.youtube.com/embed/VIDEO_ID"
width="560" height="315"></iframe>`}</code>
                      </pre>
                    </li>
                  </ul>
                </div>
              }
              onComplete={() => completeLesson("iframe")}
              isCompleted={topicProgress["iframe"]?.lessonCompleted}
            />
            <CodeEditor
              initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Iframe namunasi</title>
</head>
<body>
    <h1>Iframe namunasi</h1>
    
    <h2>YouTube video:</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    
    <h2>Google xarita:</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264768713!2d69.13928276870501!3d41.28251254339432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1652963105255!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</body>
</html>`}
              language="html"
            />
            <MiniGame
              title="Iframe elementi"
              question="Iframe elementining to'g'ri sintaksisi qaysi?"
              options={[
                '<iframe link="URL"></iframe>',
                '<frame src="URL"></frame>',
                '<iframe src="URL"></iframe>',
                '<embed src="URL"></embed>',
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("iframe-game-1")}
              isCompleted={topicProgress["iframe-game-1"]?.miniGameCompleted}
            />

            <MiniGame
              title="Iframe elementi"
              question="Iframe elementining kengligini belgilash uchun qaysi atribut ishlatiladi?"
              options={["length", "width", "size", "frame-width"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("iframe-game-2")}
              isCompleted={topicProgress["iframe-game-2"]?.miniGameCompleted}
            />

            <MiniGame
              title="Iframe elementi"
              question="Iframe orqali boshqa sahifalardan kontent joylashtirish xavfsizlikka qanday ta'sir qiladi?"
              options={[
                "Xavfsizlikka ta’siri yo‘q",
                "Xavfsizlikka ta’sir qiladi, chunki zararli sahifalar joylashtirilishi mumkin",
                "Iframe faqat xavfsiz sahifalarni ko‘rsata oladi",
                "Iframe elementlari faqat lokal fayllarni ko‘rsatadi",
              ]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("iframe-game-3")}
              isCompleted={topicProgress["iframe-game-3"]?.miniGameCompleted}
            />

            <MiniGame
              title="Iframe elementi"
              question="Iframe elementini qaysi atribut orqali skroll qilinmaydigan qilib qo‘yish mumkin?"
              options={[
                'scrollable="false"',
                "noscroll",
                'scrolling="no"',
                "disable-scroll",
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("iframe-game-4")}
              isCompleted={topicProgress["iframe-game-4"]?.miniGameCompleted}
            />

            <MiniGame
              title="Iframe elementi"
              question="Iframe elementini qaysi atribut orqali belgilangan o‘lchamda ko‘rsatilishini sozlash mumkin?"
              options={[
                'scale="yes"',
                'zoom="100%"',
                "frameborder",
                "height va width",
              ]}
              correctAnswer={3}
              onComplete={() => completeMiniGame("iframe-game-5")}
              isCompleted={topicProgress["iframe-game-5"]?.miniGameCompleted}
            />
            {/* Add more mini-games for iframe topic */}
          </div>
        );

      case "semantic-html":
        return (
          <div className="space-y-4">
            <Lesson
              title="Chuqurlashtirilgan semantik HTML"
              content={
                <div className="space-y-4">
                  <p>
                    Semantik HTML elementlari kontentning ma'nosini va
                    strukturasini aniqroq ifodalaydi.
                  </p>

                  <h3 className="text-xl font-bold">Semantik elementlar:</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      &lt;header&gt; - Sahifa yoki bo'lim sarlavhasi
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<header>\n  <h1>Sahifa sarlavhasi</h1>\n</header>`}</code>
                      </pre>
                    </li>
                    <li>
                      &lt;nav&gt; - Navigatsiya havolalari to'plami
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<nav> 
<ul>
<li><a href="#home">Home</a></li>    
<li><a href="#about">About</a></li>\n  </ul>\n</nav>`}</code>
                      </pre>
                    </li>
                    <li>
                      &lt;main&gt; - Asosiy kontent
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<main>\n  <article>\n    <h2>Maqola sarlavhasi</h2>\n    <p>Asosiy kontent bu yerda.</p>\n  </article>\n</main>`}</code>
                      </pre>
                    </li>
                    <li>
                      &lt;article&gt; - Mustaqil, to'liq kontent
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<article>\n  <h2>Maqola sarlavhasi</h2>\n  <p>Maqola kontenti.</p>\n</article>`}</code>
                      </pre>
                    </li>
                    <li>
                      &lt;section&gt; - Tematik guruhlanagan kontent
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<section>\n  <h3>Bo'lim nomi</h3>\n  <p>Bo'lim kontenti.</p>\n</section>`}</code>
                      </pre>
                    </li>
                    <li>
                      &lt;aside&gt; - Yordamchi kontent
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<aside>\n  <h4>Yordamchi bo'lim</h4>\n  <p>Yordamchi kontent.</p>\n</aside>`}</code>
                      </pre>
                    </li>
                    <li>
                      &lt;footer&gt; - Sahifa yoki bo'lim pastki qismi
                      <pre className="bg-gray-100 p-2 rounded">
                        <code>{`<footer>\n  <p>&copy; 2024 Kompaniya nomi</p>\n</footer>`}</code>
                      </pre>
                    </li>
                  </ul>
                </div>
              }
              onComplete={() => completeLesson("semantic-html")}
              isCompleted={topicProgress["semantic-html"]?.lessonCompleted}
            />
            <CodeEditor
              initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Semantik HTML namunasi</title>
</head>
<body>
    <header>
        <h1>Mening blogim</h1>
        <nav>
            <ul>
                <li><a href="#home">Bosh sahifa</a></li>
                <li><a href="#about">Haqida</a></li>
                <li><a href="#contact">Aloqa</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Maqola sarlavhasi</h2>
            <p>Maqola matni...</p>
        </article>

        <section>
            <h2>Izohlar</h2>
            <p>Foydalanuvchi izohlari...</p>
        </section>
    </main>

    <aside>
        <h3>Ommabop postlar</h3>
        <ul>
            <li><a href="#">Post 1</a></li>
            <li><a href="#">Post 2</a></li>
        </ul>
    </aside>
    <footer>
        <p>&copy; 2023 Mening blogim. Barcha huquqlar himoyalangan.</p>
    </footer>
</body>
</html>`}
              language="html"
            />
            <MiniGame
              title="Semantik HTML"
              question="Qaysi element sahifaning asosiy navigatsiyasi uchun ishlatiladi?"
              options={["<header>", "<nav>", "<main>", "<footer>"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("semantic-html-game-1")}
              isCompleted={
                topicProgress["semantic-html-game-1"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Semantik HTML"
              question="Qaysi element sahifaning asosiy kontentini belgilaydi?"
              options={["<article>", "<section>", "<aside>", "<main>"]}
              correctAnswer={3}
              onComplete={() => completeMiniGame("semantic-html-game-2")}
              isCompleted={
                topicProgress["semantic-html-game-2"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Semantik HTML"
              question="Qaysi element sahifaning pastki qismini ifodalaydi?"
              options={["<header>", "<footer>", "<nav>", "<section>"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("semantic-html-game-3")}
              isCompleted={
                topicProgress["semantic-html-game-3"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Semantik HTML"
              question="Qaysi element ma'lumotlar to'plamini ifodalash uchun ishlatiladi?"
              options={["<div>", "<section>", "<article>", "<table>"]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("semantic-html-game-4")}
              isCompleted={
                topicProgress["semantic-html-game-4"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Semantik HTML"
              question="Qaysi element sahifada yordamchi kontent uchun ishlatiladi?"
              options={["<aside>", "<footer>", "<nav>", "<header>"]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("semantic-html-game-5")}
              isCompleted={
                topicProgress["semantic-html-game-5"]?.miniGameCompleted
              }
            />
            {/* Add more mini-games for semantic HTML topic */}
          </div>
        );

      case "meta-seo":
        return (
          <div className="space-y-4">
            <Lesson
              title="Meta teglar va SEO"
              content={
                <div className="space-y-4">
                  <p>
                    Meta teglar va SEO (Search Engine Optimization)
                    veb-saytingizni qidiruv tizimlarida yaxshiroq ko'rsatish
                    uchun muhimdir. Ular saytingiz haqidagi ma'lumotlarni
                    qidiruv tizimlariga taqdim etadi.
                  </p>

                  <h3 className="text-xl font-bold">Muhim meta teglar:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<meta charset="UTF-8">
<meta name="viewport" 
content="width=device-width, 
        initial-scale=1.0">
<meta name="description" 
content="Sayt tavsifi">
<meta name="keywords" 
content="kalit so'zlar">
<meta name="author" 
content="Muallif nomi">
<title>Sahifa sarlavhasi</title>`}</code>
                  </pre>

                  <h3 className="text-xl font-bold">
                    Meta teglar haqida qo'shimcha ma'lumot:
                  </h3>
                  <p>
                    Meta teglar HTML faylning bo'limida joylashadi va
                    saytingizni qidiruv tizimlarida ko'rsatishda muhim rol
                    o'ynaydi. Quyidagi meta teglar keng qo'llaniladi:
                  </p>

                  <h4 className="font-bold">1. Charset Meta Teg:</h4>
                  <p>
                    <code>{`<meta charset="UTF-8">`}</code> — Sahifaning
                    kodlashini belgilaydi. UTF-8 eng ko'p ishlatiladigan
                    kodlashdir.
                  </p>

                  <h4 className="font-bold">2. Viewport Meta Teg:</h4>
                  <p>
                    <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code>{" "}
                    — Mobil qurilmalarda sahifani qanday ko'rsatishni
                    belgilaydi.
                  </p>

                  <h4 className="font-bold">3. Description Meta Teg:</h4>
                  <p>
                    <code>{`<meta name="description" content="Sayt tavsifi">`}</code>{" "}
                    — Sahifaning tavsifini taqdim etadi. Bu tavsif qidiruv
                    natijalarida ko'rsatilishi mumkin.
                  </p>

                  <h4 className="font-bold">4. Keywords Meta Teg:</h4>
                  <p>
                    <code>{`<meta name="keywords" content="kalit so'zlar">`}</code>{" "}
                    — Sahifa bilan bog'liq kalit so'zlarni ko'rsatadi. Ammo
                    hozirgi kunda bu teg ko'p ishlatilmaydi.
                  </p>

                  <h4 className="font-bold">5. Author Meta Teg:</h4>
                  <p>
                    <code>{`<meta name="author" content="Muallif nomi">`}</code>{" "}
                    — Sahifaning muallifini ko'rsatadi.
                  </p>
                </div>
              }
              onComplete={() => completeLesson("meta-seo")}
              isCompleted={topicProgress["meta-seo"]?.lessonCompleted}
            />

            <CodeEditor
              initialCode={`<!DOCTYPE html>
        <html lang="uz">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Bu sayt HTML va SEO haqida ma'lumot beradi">
            <meta name="keywords" content="HTML, SEO, meta teglar, qidiruv tizimi optimizatsiyasi">
            <meta name="author" content="Sizning ismingiz">
            <title>HTML va SEO asoslari</title>
        </head>
        <body>
            <h1>HTML va SEO asoslari</h1>
            <p>Bu sahifa meta teglar va SEO ahamiyatini ko'rsatadi.</p>
        </body>
        </html>`}
              language="html"
            />

            <MiniGame
              title="Meta teglar va SEO"
              question="Qaysi meta teg sahifa tavsifini belgilaydi?"
              options={[
                '<meta name="keywords">',
                '<meta name="description">',
                '<meta name="author">',
                '<meta name="viewport">',
              ]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("meta-seo-game-1")}
              isCompleted={topicProgress["meta-seo-game-1"]?.miniGameCompleted}
            />

            <MiniGame
              title="Meta teglar va SEO"
              question="Qaysi meta teg sahifani mobil qurilmalarga moslashtirish uchun ishlatiladi?"
              options={[
                '<meta name="description">',
                '<meta name="viewport">',
                '<meta charset="UTF-8">',
                '<meta name="author">',
              ]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("meta-seo-game-2")}
              isCompleted={topicProgress["meta-seo-game-2"]?.miniGameCompleted}
            />

            <MiniGame
              title="Meta teglar va SEO"
              question="Qaysi meta teg sahifaning muallifini belgilaydi?"
              options={[
                '<meta name="keywords">',
                '<meta name="description">',
                '<meta name="author">',
                '<meta name="viewport">',
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("meta-seo-game-3")}
              isCompleted={topicProgress["meta-seo-game-3"]?.miniGameCompleted}
            />

            <MiniGame
              title="Meta teglar va SEO"
              question="Qaysi meta teg sahifada ishlatilgan kalit so'zlarni ko'rsatadi?"
              options={[
                '<meta name="keywords">',
                '<meta name="description">',
                '<meta name="author">',
                '<meta charset="UTF-8">',
              ]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("meta-seo-game-4")}
              isCompleted={topicProgress["meta-seo-game-4"]?.miniGameCompleted}
            />

            <MiniGame
              title="Meta teglar va SEO"
              question="Qaysi meta teg sahifaning kodlashini belgilaydi?"
              options={[
                '<meta name="viewport">',
                '<meta charset="UTF-8">',
                '<meta name="description">',
                '<meta name="keywords">',
              ]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("meta-seo-game-5")}
              isCompleted={topicProgress["meta-seo-game-5"]?.miniGameCompleted}
            />
          </div>
        );

      case "svg-canvas":
        return (
          <div className="space-y-4">
            <Lesson
              title="SVG va Canvas"
              content={
                <div className="space-y-4">
                  <p>
                    SVG (Scalable Vector Graphics) va Canvas HTML5 da grafikalar
                    yaratish uchun ishlatiladi. Har ikkisining o'ziga xos
                    xususiyatlari va afzalliklari bor.
                  </p>

                  <h3 className="text-xl font-bold">SVG haqida ma'lumot:</h3>
                  <p>
                    SVG — bu vektorli grafikalar formatidir, bu grafikalarni
                    keskinlikni yo'qotmasdan kattalashtirish imkonini beradi.
                    SVG markup tilida yaratiladi va CSS yoki JavaScript
                    yordamida o'zgartirilishi mumkin. SVG elementlari yuqori
                    sifatli grafikalar, diagrammalar va animatsiyalar yaratish
                    uchun juda mos keladi.
                  </p>
                  <h3 className="text-xl font-bold">SVG namunasi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
          </svg>`}</code>
                  </pre>

                  <h3 className="text-xl font-bold">Canvas haqida ma'lumot:</h3>
                  <p>
                    Canvas — bu rasmlar va grafikalar chizish uchun HTML5 da
                    qo'llaniladigan elementdir. Canvas yordamida 2D yoki 3D
                    grafikalar yaratish mumkin. Canvas dinamik ravishda
                    JavaScript yordamida chiziladi, bu esa interaktiv
                    grafikalarni yaratishga imkon beradi.
                  </p>
                  <h3 className="text-xl font-bold">Canvas namunasi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<canvas id="myCanvas" width="200" height="100"></canvas>
          <script>
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, 150, 75);
          </script>`}</code>
                  </pre>
                </div>
              }
              onComplete={() => completeLesson("svg-canvas")}
              isCompleted={topicProgress["svg-canvas"]?.lessonCompleted}
            />

            <CodeEditor
              initialCode={`<!DOCTYPE html>
          <html lang="uz">
          <head>
              <meta charset="UTF-8">
              <title>SVG va Canvas namunasi</title>
          </head>
          <body>
              <h1>SVG namunasi</h1>
              <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
              </svg>
          
              <h1>Canvas namunasi</h1>
              <canvas id="myCanvas" width="200" height="100"></canvas>
              <script>
                  var c = document.getElementById("myCanvas");
                  var ctx = c.getContext("2d");
                  ctx.fillStyle = "red";
                  ctx.fillRect(0, 0, 150, 75);
              </script>
          </body>
          </html>`}
              language="html"
            />

            <MiniGame
              title="SVG va Canvas"
              question="Qaysi element vektorli grafikalar yaratish uchun ishlatiladi?"
              options={["<img>", "<canvas>", "<svg>", "<graphic>"]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("svg-canvas-game-1")}
              isCompleted={
                topicProgress["svg-canvas-game-1"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="SVG va Canvas"
              question="Canvas qaysi formatda grafikalarni yaratish uchun ishlatiladi?"
              options={["2D", "3D", "Vektorli", "Raster"]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("svg-canvas-game-2")}
              isCompleted={
                topicProgress["svg-canvas-game-2"]?.miniGameCompleted
              }
            />
            <MiniGame
              title="SVG va Canvas"
              question="Qaysi element dinamik grafikalarni yaratish uchun ishlatiladi?"
              options={["<svg>", "<canvas>", "<img>", "<div>"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("svg-canvas-game-3")}
              isCompleted={
                topicProgress["svg-canvas-game-3"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="SVG va Canvas"
              question="SVG formatida tasvirlarni ko'rish qanchalik sifatli?"
              options={[
                "Sifatli emas",
                "O'zgarmas",
                "Sifatli",
                "Tezlik bilan bog'liq",
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("svg-canvas-game-4")}
              isCompleted={
                topicProgress["svg-canvas-game-4"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="SVG va Canvas"
              question="Canvas yordamida qanday turdagi grafikalarni yaratish mumkin?"
              options={[
                "Vektorli grafikalar",
                "Raster grafikalar",
                "Ikkala turdagi grafikalar",
                "Faqat 3D grafikalar",
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("svg-canvas-game-5")}
              isCompleted={
                topicProgress["svg-canvas-game-5"]?.miniGameCompleted
              }
            />
          </div>
        );

      case "responsive-design":
        return (
          <div className="space-y-4">
            <Lesson
              title="Responsive Web Design"
              content={
                <div className="space-y-4">
                  <p>
                    Responsive Web Design turli qurilmalarda yaxshi ko'rinadigan
                    veb-saytlar yaratish usuli. Bu dizayn usuli,
                    foydalanuvchilarning ekran o'lchamlariga qarab,
                    web-sahifalarni moslashtirishga yordam beradi.
                  </p>

                  <h3 className="text-xl font-bold">Asosiy texnikalar:</h3>
                  <ul className="list-disc list-inside">
                    <li>Moslashuvchan grid</li>
                    <li>Moslashuvchan rasmlar</li>
                    <li>Media so'rovlari</li>
                    <li>Mobil-beruvchi dizayn</li>
                    <li>Flexbox va CSS Grid</li>
                  </ul>

                  <h3 className="text-xl font-bold">Media so'rov namunasi:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`@media screen and (max-width: 600px) {
          .column {
            width: 100%;
          }
        }`}</code>
                  </pre>

                  <h3 className="text-xl font-bold">Flexbox misoli:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`.container {
          display: flex;
          flex-wrap: wrap;
        }
        
        .column {
          flex: 33.33%;
          padding: 10px;
        }
        
        @media screen and (max-width: 600px) {
          .column {
            flex: 100%;
          }
        }`}</code>
                  </pre>
                </div>
              }
              onComplete={() => completeLesson("responsive-design")}
              isCompleted={topicProgress["responsive-design"]?.lessonCompleted}
            />

            <CodeEditor
              initialCode={`<!DOCTYPE html>
        <html lang="uz">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Responsive Design namunasi</title>
            <style>
                .container {
                    display: flex;
                    flex-wrap: wrap;
                }
                .column {
                    flex: 33.33%;
                    padding: 20px;
                    box-sizing: border-box;
                }
                @media screen and (max-width: 600px) {
                    .column {
                        flex: 100%;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="column">
                    <h2>Ustun 1</h2>
                    <p>Bu birinchi ustun matni.</p>
                </div>
                <div class="column">
                    <h2>Ustun 2</h2>
                    <p>Bu ikkinchi ustun matni.</p>
                </div>
                <div class="column">
                    <h2>Ustun 3</h2>
                    <p>Bu uchinchi ustun matni.</p>
                </div>
            </div>
        </body>
        </html>`}
              language="html"
            />

            <MiniGame
              title="Responsive Web Design"
              question="Qaysi CSS xususiyati turli ekran o'lchamlariga moslashish uchun ishlatiladi?"
              options={["@responsive", "@screen", "@adapt", "@media"]}
              correctAnswer={3}
              onComplete={() => completeMiniGame("responsive-design-game-1")}
              isCompleted={
                topicProgress["responsive-design-game-1"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Responsive Web Design"
              question="Flexbox yordamida qanday dizayn tuzilishi mumkin?"
              options={["Gorizontal", "Vertikal", "Ikkalasi", "Faqat shartli"]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("responsive-design-game-2")}
              isCompleted={
                topicProgress["responsive-design-game-2"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Responsive Web Design"
              question="Media so'rovlar qachon qo'llaniladi?"
              options={[
                "Raqamli dizayn",
                "Ovozli interfeyslar",
                "Ekran o'lchamiga qarab",
                "Qayta yuklash",
              ]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("responsive-design-game-3")}
              isCompleted={
                topicProgress["responsive-design-game-3"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Responsive Web Design"
              question="Responsive dizaynning maqsadi nima?"
              options={[
                "Qurilmalardan qat'i nazar ko'rinishi",
                "Faqat mobil qurilmalarda ko'rinishi', 'Foydalanuvchi tajribasini pasaytirish",
                "Foydalanuvchilarni jalb qilish",
              ]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("responsive-design-game-4")}
              isCompleted={
                topicProgress["responsive-design-game-4"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="Responsive Web Design"
              question="Qaysi usul moslashuvchan rasmlarni yaratishda ishlatiladi?"
              options={["max-width", "min-width", "width", "fixed"]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("responsive-design-game-5")}
              isCompleted={
                topicProgress["responsive-design-game-5"]?.miniGameCompleted
              }
            />
          </div>
        );

      case "html5-apis":
        return (
          <div className="space-y-4">
            <Lesson
              title="HTML5 API-lari"
              content={
                <div className="space-y-4">
                  <p>
                    HTML5 API-lari veb-sahifalarga interaktivlik va kuchli
                    funksiyalar qo'shishga yordam beradigan yangi imkoniyatlar
                    taqdim etadi. Ushbu API-lar yordamida foydalanuvchilarning
                    tajribasini yanada yaxshilash mumkin.
                  </p>

                  <h3 className="text-xl font-bold">Asosiy HTML5 API-lari:</h3>
                  <ul className="list-disc list-inside">
                    <li>Geolocation API</li>
                    <li>Canvas API</li>
                    <li>Web Storage API</li>
                    <li>Audio va Video API</li>
                    <li>WebSockets</li>
                  </ul>

                  <h3 className="text-xl font-bold">
                    Geolocation API namunasi:
                  </h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
}`}</code>
                  </pre>

                  <h3 className="text-xl font-bold">
                    Web Storage API namunasi:
                  </h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`// Mahalliy saqlash
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));

// Session saqlash
sessionStorage.setItem("sessionName", "Jane");
console.log(sessionStorage.getItem("sessionName"));`}</code>
                  </pre>
                </div>
              }
              onComplete={() => completeLesson("html5-apis")}
              isCompleted={topicProgress["html5-apis"]?.lessonCompleted}
            />

            <CodeEditor
              initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 API-lari namunasi</title>
</head>
<body>
    <h1>Geolocation API</h1>
    <button onclick="getLocation()">Mening joyimni bilish</button>
    <script>
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    alert("Latitude: " + position.coords.latitude + 
                          "\nLongitude: " + position.coords.longitude);
                });
            } else {
                alert("Geolocation API qo'llab-quvvatlanmaydi.");
            }
        }
    </script>
</body>
</html>`}
              language="html"
            />

            <MiniGame
              title="HTML5 API-lari"
              question="Qaysi API foydalanuvchining geografik joylashuvini aniqlash uchun ishlatiladi?"
              options={["Web Storage", "Geolocation", "Canvas", "WebSockets"]}
              correctAnswer={1}
              onComplete={() => completeMiniGame("html5-apis-game-1")}
              isCompleted={
                topicProgress["html5-apis-game-1"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="HTML5 API-lari"
              question="Mahalliy saqlashda ma'lumot qaysi usul yordamida o'qiladi?"
              options={[
                "localStorage.getItem()",
                "sessionStorage.get()",
                "localStorage.read()",
                "storage.get()",
              ]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("html5-apis-game-2")}
              isCompleted={
                topicProgress["html5-apis-game-2"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="HTML5 API-lari"
              question="Canvas API qanday maqsadlarda ishlatiladi?"
              options={[
                "Vektor grafikalar",
                "Rasm chizish",
                "Animatsiya yaratish",
                "Barchasi",
              ]}
              correctAnswer={3}
              onComplete={() => completeMiniGame("html5-apis-game-3")}
              isCompleted={
                topicProgress["html5-apis-game-3"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="HTML5 API-lari"
              question="WebSockets qaysi maqsadlarda ishlatiladi?"
              options={[
                "Serverga bog'lanish",
                "Ma'lumotlarni saqlash",
                "Qidiruv qilish",
                "Veb-sahifalarni ko'rsatish",
              ]}
              correctAnswer={0}
              onComplete={() => completeMiniGame("html5-apis-game-4")}
              isCompleted={
                topicProgress["html5-apis-game-4"]?.miniGameCompleted
              }
            />

            <MiniGame
              title="HTML5 API-lari"
              question="Audio va Video API qaysi formatlarni qo'llab-quvvatlaydi?"
              options={["mp3, mp4", "wav, aac", "barchasi", "faqat mp4"]}
              correctAnswer={2}
              onComplete={() => completeMiniGame("html5-apis-game-5")}
              isCompleted={
                topicProgress["html5-apis-game-5"]?.miniGameCompleted
              }
            />
          </div>
        );

      case "progressive-enhancement":
        return (
          <div className="space-y-4">
            <Lesson
              title="Progressive Enhancement"
              content={
                <div className="space-y-4">
                  <p>
                    Progressive Enhancement — bu web-saytlar va ilovalar
                    yaratishda asosiy funktsiyalarni ta'minlab, foydalanuvchilar
                    tomonidan kengaytirilgan imkoniyatlardan foydalangan holda,
                    barcha foydalanuvchilarga imkoniyatlarni oshirishga yordam
                    beruvchi yondashuvdir.
                  </p>

                  <h3 className="text-xl font-bold">Asosiy tamoyillar:</h3>
                  <ul className="list-disc list-inside">
                    <li>Yadro funksiyalarini ta'minlash</li>
                    <li>
                      Qo'shimcha funktsiyalarni CSS va JavaScript orqali
                      qo'shish
                    </li>
                    <li>Foydalanuvchilar uchun to'liq tajriba yaratish</li>
                  </ul>

                  <h3 className="text-xl font-bold">Misol:</h3>
                  <pre className="bg-gray-100 p-2 rounded">
                    <code>{`<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Ismingiz" required>
  <input type="submit" value="Yuborish">
</form>

<style>
  /* CSS orqali yaxshilash */
  input[type="text"] {
      width: 100%;
      padding: 10px;
  }
</style>

<script>
  // JavaScript orqali yanada ko'proq imkoniyatlar
  document.querySelector('form').addEventListener('submit', function(e) {
      alert('Formani yuborishdan oldin tekshirish');
  });
</script>`}</code>
                  </pre>
                </div>
              }
              onComplete={() => completeLesson("progressive-enhancement")}
              isCompleted={
                topicProgress["progressive-enhancement"]?.lessonCompleted
              }
            />

            <CodeEditor
              initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progressive Enhancement namunasi</title>
</head>
<body>
    <h1>Formani yuborish</h1>
    <form action="/submit" method="POST">
        <input type="text" name="name" placeholder="Ismingiz" required>
        <input type="submit" value="Yuborish">
    </form>

    <style>
        input[type="text"] {
            width: 100%;
            padding: 10px;
        }
    </style>

    <script>
        document.querySelector('form').addEventListener('submit', function(e) {
            alert('Formani yuborishdan oldin tekshirish');
        });
    </script>
</body>
</html>`}
              language="html"
            />

            <MiniGame
              title="Progressive Enhancement"
              question="Progressive Enhancement usulida asosiy funktsiyalarni ta'minlash qachon amalga oshiriladi?"
              options={[
                "Foydalanuvchi kiritgan ma'lumotlar",
                "Har qanday qurilma",
                "Eng kuchli brauzerlar",
                "Qayta yuklash",
              ]}
              correctAnswer={1}
              onComplete={() =>
                completeMiniGame("progressive-enhancement-game-1")
              }
              isCompleted={
                topicProgress["progressive-enhancement-game-1"]
                  ?.miniGameCompleted
              }
            />

            <MiniGame
              title="Progressive Enhancement"
              question="Qo'shimcha funktsiyalarni qaysi texnologiyalar yordamida qo'shish mumkin?"
              options={["HTML", "CSS", "JavaScript", "Barchasi"]}
              correctAnswer={3}
              onComplete={() =>
                completeMiniGame("progressive-enhancement-game-2")
              }
              isCompleted={
                topicProgress["progressive-enhancement-game-2"]
                  ?.miniGameCompleted
              }
            />
          </div>
        );

      case "videos":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">HTML Video Darslar</h2>

              {/* Video kategoriyalari */}
              <div className="flex flex-wrap gap-2 mb-6">
                {htmlTopics.slice(0, -1).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setCurrentVideoTopic(topic.id)}
                    className={`px-4 py-2 rounded-full ${
                      currentVideoTopic === topic.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {topic.icon()} {topic.name}
                  </button>
                ))}
              </div>

              {/* Videolar ro'yxati */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(() => {
                  // Har bir mavzu uchun videolar
                  const videos = {
                    multimedia: [
                      {
                        id: "video1",
                        title: "HTML5 Audio va Video elementlari",
                        videoId: "9gTw2EDkaDQ", // HTML5 Audio va Video elementlari
                      },
                      {
                        id: "video2",
                        title: "HTML Video elementlari",
                        videoId: "eWb8o0jC9dE", // HTML Video tag
                      },
                      {
                        id: "video3",
                        title: "HTML Audio elementlari",
                        videoId: "A_siSfQQEPw", // HTML Audio tag
                      },
                      {
                        id: "video4",
                        title: "Media elementlari bilan ishlash",
                        videoId: "MTXxmNPcTck", // HTML Media Elements
                      },
                      {
                        id: "video5",
                        title: "HTML5 Media API",
                        videoId: "ByGJQzlzxQg", // HTML5 Media API
                      },
                    ],
                    "advanced-forms": [
                      {
                        id: "video1",
                        title: "HTML5 Form elementlari",
                        videoId: "fNcJuPIZ2WE", // HTML5 Forms
                      },
                      {
                        id: "video2",
                        title: "Form validatsiyasi",
                        videoId: "rsd4FNGTRBw", // HTML Form Validation
                      },
                      {
                        id: "video3",
                        title: "Input turlari",
                        videoId: "8qBPKXRUOnk", // HTML Input Types
                      },
                      {
                        id: "video4",
                        title: "Form stillarini berish",
                        videoId: "frAGrGN00OA", // HTML Form Styling
                      },
                      {
                        id: "video5",
                        title: "Form bilan ishlash",
                        videoId: "YwbIeMlxZAU", // Working with Forms
                      },
                    ],
                    iframe: [
                      {
                        id: "video1",
                        title: "Iframe asoslari",
                        videoId: "aRGdDy18qfY", // HTML iFrame Basics
                      },
                      {
                        id: "video2",
                        title: "YouTube videolarini joylashtirish",
                        videoId: "c-ptvXgUfdg", // Embedding YouTube Videos
                      },
                      {
                        id: "video3",
                        title: "Google xaritalarini joylashtirish",
                        videoId: "2_HZObVbe-g", // Embedding Google Maps
                      },
                      {
                        id: "video4",
                        title: "Iframe xavfsizligi",
                        videoId: "POX3dT-pB4E", // iFrame Security
                      },
                      {
                        id: "video5",
                        title: "Iframe loyihasi",
                        videoId: "t2ByLmLnYJ8", // iFrame Project
                      },
                    ],
                    "semantic-html": [
                      {
                        id: "video1",
                        title: "Semantik HTML asoslari",
                        videoId: "kGW8Al_cga4", // Semantic HTML Basics
                      },
                      {
                        id: "video2",
                        title: "HTML5 strukturasi",
                        videoId: "ZThq93Yuwd0", // HTML5 Structure
                      },
                      {
                        id: "video3",
                        title: "Semantik elementlar",
                        videoId: "t1eDd0gqfZg", // Semantic Elements
                      },
                      {
                        id: "video4",
                        title: "Header va Footer",
                        videoId: "qU4FIAA7R5w", // Header and Footer
                      },
                      {
                        id: "video5",
                        title: "Nav va Article",
                        videoId: "dDn9uw7N9Xg", // Nav and Article
                      },
                    ],
                    "meta-seo": [
                      {
                        id: "video1",
                        title: "Meta teglar asoslari",
                        videoId: "bi5bfH_gVWE", // Meta Tags Basics
                      },
                      {
                        id: "video2",
                        title: "SEO optimizatsiyasi",
                        videoId: "d5WnEDem50s", // SEO Optimization
                      },
                      {
                        id: "video3",
                        title: "Meta teglar va SEO",
                        videoId: "o3Gfsc6kihk", // Meta Tags and SEO
                      },
                      {
                        id: "video4",
                        title: "Open Graph protokoli",
                        videoId: "RW5HCOMbvuQ", // Open Graph Protocol
                      },
                      {
                        id: "video5",
                        title: "SEO loyihasi",
                        videoId: "d5WnEDem50s", // SEO Project
                      },
                    ],
                    "svg-canvas": [
                      {
                        id: "video1",
                        title: "SVG asoslari",
                        videoId: "ZJSCl6XEdP8", // SVG Basics
                      },
                      {
                        id: "video2",
                        title: "Canvas asoslari",
                        videoId: "gm1QtePAYTM", // Canvas Basics
                      },
                      {
                        id: "video3",
                        title: "SVG animatsiyalar",
                        videoId: "UTHgr6NLeEw", // SVG Animations
                      },
                      {
                        id: "video4",
                        title: "Canvas chizish",
                        videoId: "jEUuM5bRAzw", // Canvas Drawing
                      },
                      {
                        id: "video5",
                        title: "SVG va Canvas loyihasi",
                        videoId: "eXQom29T5I8", // SVG and Canvas Project
                      },
                    ],
                    "responsive-design": [
                      {
                        id: "video1",
                        title: "Responsive dizayn asoslari",
                        videoId: "srvUrASNj0s", // Responsive Design Basics
                      },
                      {
                        id: "video2",
                        title: "Media so'rovlar",
                        videoId: "2KL-z9A56SQ", // Media Queries
                      },
                      {
                        id: "video3",
                        title: "Flexbox va Grid",
                        videoId: "JJSoEo8JSnc", // Flexbox and Grid
                      },
                      {
                        id: "video4",
                        title: "Mobil moslashuv",
                        videoId: "ZYV6dYtz4HA", // Mobile Adaptation
                      },
                      {
                        id: "video5",
                        title: "Responsive loyiha",
                        videoId: "D-h8L5hgW-w", // Responsive Project
                      },
                    ],
                    "html5-apis": [
                      {
                        id: "video1",
                        title: "HTML5 API asoslari",
                        videoId: "GrYA7sMQaBQ", // HTML5 APIs Basics
                      },
                      {
                        id: "video2",
                        title: "Geolocation API",
                        videoId: "3ls013DBcww", // Geolocation API
                      },
                      {
                        id: "video3",
                        title: "Web Storage API",
                        videoId: "k8yJCeuP6I8", // Web Storage API
                      },
                      {
                        id: "video4",
                        title: "Drag and Drop API",
                        videoId: "wv7pvH1O5Ho", // Drag and Drop API
                      },
                      {
                        id: "video5",
                        title: "API loyihasi",
                        videoId: "tc8DU14qX6I", // API Project
                      },
                    ],
                    "progressive-enhancement": [
                      {
                        id: "video1",
                        title: "Progressive Enhancement asoslari",
                        videoId: "dc-2t26Vuhs", // Progressive Enhancement Basics
                      },
                      {
                        id: "video2",
                        title: "HTML asosi",
                        videoId: "qz0aGYrrlhU", // HTML Base
                      },
                      {
                        id: "video3",
                        title: "CSS qo'shish",
                        videoId: "1PnVor36_40", // Adding CSS
                      },
                      {
                        id: "video4",
                        title: "JavaScript qo'shish",
                        videoId: "W6NZfCO5SIk", // Adding JavaScript
                      },
                      {
                        id: "video5",
                        title: "Progressive loyiha",
                        videoId: "hdI2bqOjy3c", // Progressive Project
                      },
                    ],
                  };

                  return videos[currentVideoTopic || "multimedia"].map(
                    (video) => (
                      <div
                        key={video.id}
                        className="bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    )
                  );
                })()}
              </div>
            </div>
          </div>
        );
      default:
        return <div>Mavzu tanlang</div>;
    }
  };
  const navigate = useNavigate();
  return (
    <div
      id="app-containeri"
      className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100"
    >
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <span className="text-4xl">🚀</span>
              <h1
                onClick={() => navigate("/frontend/html")}
                className="text-xl sm:text-2xl font-bold text-blue-600 wrap-text"
              >
                HTML Sarguzashtlari: O'rta Daraja
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-300 px-3 py-1 rounded-full text-yellow-800 text-sm sm:text-base wrap-text">
                ⭐ {score} Ball
              </span>
              <span className="bg-green-300 px-3 py-1 rounded-full text-green-800 text-sm sm:text-base wrap-text">
                🏆 {completedLessons} Yutuq
              </span>
            </div>
          </div>
        </div>
      </header>

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
                    <span className="text-sm">{topic.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8 mt-20 sm:mt-24">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2 sm:mb-4">
            HTML Dunyosiga Xush Kelibsiz! 🎮
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Veb-sahifalar yaratishni o'yin orqali o'rganamiz!
          </p>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-blue-600 mb-4"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

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
                HTML O'rta darajachi
              </p>
            </div>
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                score >= 50 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🎯</span>
              <p className="text-gray-600 text-sm sm:text-base">
                Multimedia Ustasi
              </p>
            </div>
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                completedLessons >= 5 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🎨</span>
              <p className="text-gray-600 text-sm sm:text-base">
                HTML Dizayner Pro
              </p>
            </div>
            <div
              className={`bg-gray-100 rounded-lg p-3 sm:p-4 text-center ${
                score >= 100 ? "" : "opacity-50"
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">🚀</span>
              <p className="text-gray-600 text-sm sm:text-base">HTML Guru</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-8 sm:mt-12 py-4 sm:py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            HTML Sarguzashtlari: O'rta Daraja - Veb-dasturlashni o'rganish
            platformasi 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Orta;

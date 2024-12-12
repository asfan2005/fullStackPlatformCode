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

    return (
      <div className="grid grid-cols-1 gap-6">
        {/* Mavjud darslik kontenti */}
        <div className="md:col-span-2">
          <Lesson
            title={currentTopicData.name}
            content={
              <div className="space-y-4">
                <p>
                  HTML (HyperText Markup Language) - veb-sahifalar yaratish
                  uchun ishlatiladigan standart belgilash tilidir.
                </p>

                <h3 className="text-xl font-bold">HTML hujjat tuzilishi:</h3>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    <code>&lt;!DOCTYPE html&gt;</code> - hujjat turi
                    deklaratsiyasi
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;!DOCTYPE html&gt;</code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;html&gt;</code> - butun HTML sahifani o'rab turadi
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;html&gt;...&lt;/html&gt;</code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;head&gt;</code> - meta-ma'lumotlar va sarlavha
                    uchun
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;head&gt;...&lt;/head&gt;</code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;body&gt;</code> - sahifaning asosiy mazmuni
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;body&gt;...&lt;/body&gt;</code>
                    </pre>
                  </li>
                </ul>

                <h3 className="text-xl font-bold">Asosiy HTML teglari:</h3>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    <code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code> -
                    sarlavhalar
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>
                        &lt;h1&gt;Eng katta sarlavha&lt;/h1&gt;
                        &lt;h2&gt;Ikkinchi darajali sarlavha&lt;/h2&gt;
                      </code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;p&gt;</code> - paragraf
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;p&gt;Bu bir paragraf.&lt;/p&gt;</code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;a&gt;</code> - havola
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>
                        &lt;a href="https://example.com"&gt;Bu havola&lt;/a&gt;
                      </code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;img&gt;</code> - rasm
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;img src="rasm.jpg" alt="Rasm tavsifi"&gt;</code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;div&gt;</code> - bo'lim
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;div&gt;...&lt;/div&gt;</code>
                    </pre>
                  </li>
                  <li>
                    <code>&lt;span&gt;</code> - inline konteyner
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      <code>&lt;span&gt;Inline matn&lt;/span&gt;</code>
                    </pre>
                  </li>
                </ul>
              </div>
            }
            onComplete={() => completeLesson(currentTopicData.id)}
            isCompleted={topicProgress[currentTopicData.id]?.lessonCompleted}
          />
        </div>

        {/* Video darslar bo'limi */}
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

        {/* Mavjud kod editor */}
        <div className="md:col-span-2">
          <CodeEditor
            initialCode={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening birinchi HTML sahifam</title>
</head>
<body>
    <h1>Salom, dunyo!</h1>
    <p>Bu mening birinchi HTML sahifam.</p>
    <a href="https://example.com">Bu havola</a>
    <img src="https://via.placeholder.com/150" alt="Namuna rasm">
</body>
</html>`}
            language="html"
          />
        </div>

        {/* Mavjud mini o'yin */}
        <div className="md:col-span-2">
          <MiniGame
            title="HTML Asoslarini Tekshiring - 1"
            question="HTML so'zining to'liq ma'nosi nima?"
            options={[
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "Home Tool Markup Language",
            ]}
            correctAnswer={0}
            onComplete={() => completeMiniGame(currentTopicData.id)}
            isCompleted={topicProgress[currentTopicData.id]?.miniGameCompleted}
          />
        </div>
        <div className="md:col-span-2">
          <MiniGame
            title="HTML Asoslarini Tekshiring - 2"
            question="HTML hujjatning asosiy mazmuni qaysi teg ichida joylashadi?"
            options={["<head>", "<content>", "<body>", "<main>"]}
            correctAnswer={2}
            onComplete={() => completeMiniGame(currentTopicData.id)}
            isCompleted={topicProgress[currentTopicData.id]?.miniGameCompleted}
          />
        </div>
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
            HTML Sarguzashtlari - Bolalar uchun HTML o'rganish platformasi 🚀
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

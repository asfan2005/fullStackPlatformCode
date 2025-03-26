import React, { useState, useRef, useEffect } from "react";
import Menu from "../menu/Menu";
import Section from "../section/Section";
import { ListBulletIcon, XMarkIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import FrontendPaymentSection from '../../kursTolovlar/frontEnd/FrontEndKurslar';
import axios from "axios";

function Main() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setError(null);
    
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (err) {
      console.error("Foydalanuvchi ma'lumotlarini yuklashda xatolik:", err);
    }
    
    fetchUserMessages();
  }, []);

  const fetchUserMessages = async () => {
    setIsLoading(true);
    try {
      const userData = localStorage.getItem('user');
      const userId = userData ? JSON.parse(userData).id : 'guest';
      
      const response = await axios.get(`http://localhost:3000/api/messages/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (response.data && Array.isArray(response.data)) {
        if (response.data.length === 0) {
          // Agar xabarlar bo'sh bo'lsa, dastlabki xabarni ko'rsatish
          setChatMessages([
            {
              id: 1,
              text: "Assalomu alaykum! CodeShef.uz web sitega xush kelibsiz! Sizga qanday yordam bera olaman?",
              isAdmin: true,
              time: new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })
            }
          ]);
        } else {
          setChatMessages(response.data);
        }
      } else {
        // Agar response to'g'ri formatda bo'lmasa, dastlabki xabarni ko'rsatish
        setChatMessages([
          {
            id: 1,
            text: "Assalomu alaykum! CodeShef.uz web sitega xush kelibsiz! Sizga qanday yordam bera olaman?",
            isAdmin: true,
            time: new Date().toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })
          }
        ]);
      }
    } catch (err) {
      console.error("Xabarlarni yuklashda xatolik:", err);
      setError("Xabarlarni yuklashda xatolik yuz berdi.");
      // Xatolik yuz berganda ham dastlabki xabarni ko'rsatish
      setChatMessages([
        {
          id: 1,
          text: "Assalomu alaykum! CodeShef.uz web sitega xush kelibsiz! Sizga qanday yordam bera olaman?",
          isAdmin: true,
          time: new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      fetchUserMessages();
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    const currentTime = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    
    const userData = localStorage.getItem('user');
    const userId = userData ? JSON.parse(userData).id : 'guest';
    
    const newUserMessage = {
      id: Date.now(),
      text: message.trim(),
      isAdmin: false,
      time: currentTime,
      userId: userId,
      status: 'sending'
    };
    
    try {
      // UI ga xabarni qo'shish
      setChatMessages(prevMessages => {
        const messages = Array.isArray(prevMessages) ? prevMessages : [];
        return [...messages, newUserMessage];
      });
      
      setMessage("");
      
      // Xabarni serverga yuborish
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/messages',
        data: {
          text: newUserMessage.text,
          userId: userId,
          isAdmin: false,
          time: currentTime
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        timeout: 15000
      });
      
      if (!response.data) {
        throw new Error('Serverdan javob olinmadi');
      }
      
      // Xabar statusini yangilash
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === newUserMessage.id 
            ? { ...msg, status: 'sent' } 
            : msg
        )
      );
      
      // Admin javobini generatsiya qilish
      setTimeout(() => {
        generateAdminResponse(userId);
      }, 1000);
      
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      
      setChatMessages(prevMessages => {
        const errorMessage = {
          id: Date.now(),
          text: "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
          isAdmin: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'error'
        };
        
        return prevMessages.map(msg => 
          msg.id === newUserMessage.id 
            ? { ...msg, status: 'error' } 
            : msg
        ).concat(errorMessage);
      });
    }
  };

  const generateAdminResponse = async (userId) => {
    try {
      const responses = [
        "Savolingiz uchun rahmat! Tez orada javob beramiz.",
        "Bu haqida ko'proq ma'lumot berishingiz mumkinmi?",
        "Albatta, sizga yordam beramiz. Bir oz kuting.",
        "Qo'shimcha savollaringiz bormi?",
        "Bu masala bo'yicha ko'proq ma'lumot olish uchun kurslarimizni ko'rishingiz mumkin."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const adminResponseTime = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      
      const adminResponse = {
        id: Date.now(),
        text: randomResponse,
        isAdmin: true,
        time: adminResponseTime,
        userId: userId,
        status: 'sending'
      };
      
      // UI ga admin javobini qo'shish
      setChatMessages(prevMessages => [...prevMessages, adminResponse]);
      
      // Admin javobini serverga yuborish
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/messages',
        data: {
          text: randomResponse,
          userId: userId,
          isAdmin: true,
          time: adminResponseTime
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        timeout: 15000
      });
      
      // Admin xabari statusini yangilash
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === adminResponse.id 
            ? { ...msg, status: 'sent' } 
            : msg
        )
      );
      
    } catch (error) {
      console.error("Admin javobini yuborishda xatolik:", error);
      
      setChatMessages(prevMessages => {
        const errorMessage = {
          id: Date.now(),
          text: "Admin javobini yuborishda xatolik yuz berdi.",
          isAdmin: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'error'
        };
        return [...prevMessages, errorMessage];
      });
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
      setChatMessages([
        { id: 1, text: "Assalomu alaykum! Qanday yordam bera olaman?", isAdmin: true, time: "09:30" },
      ]);
    } catch (err) {
      console.error("Tizimdan chiqishda xatolik:", err);
    }
  };

  const renderChatMessages = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      );
    }
    
    if (error) {
      return (
        <div className="text-center p-4 text-red-500">
          <p>{error}</p>
          <button 
            onClick={fetchUserMessages} 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Qayta urinish
          </button>
        </div>
      );
    }
    
    if (!chatMessages || !Array.isArray(chatMessages) || chatMessages.length === 0) {
      return (
        <div className="flex justify-center items-center h-full text-gray-500">
          <p>Hozircha xabarlar yo'q. Yangi xabar yuboring!</p>
        </div>
      );
    }
    
    return chatMessages.map((msg) => (
      <div
        key={msg.id}
        className={`mb-4 flex ${msg.isAdmin ? "justify-start" : "justify-end"}`}
      >
        {msg.isAdmin && (
          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
            <span className="text-xs font-bold">A</span>
          </div>
        )}
        <div
          className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
            msg.isAdmin
              ? "bg-white text-gray-800 rounded-tl-none"
              : "bg-blue-600 text-white rounded-tr-none"
          }`}
        >
          <p className="break-words">{msg.text}</p>
          <span className={`text-xs block mt-1 ${msg.isAdmin ? "text-gray-500" : "text-blue-100"}`}>
            {msg.time}
          </span>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    if (!isLoading && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isLoading]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeContent />;
      case 'frontend':
        return <FrontendContent />;
      case 'backend':
        return <BackendContent />;
      case 'mobile':
        return <MobileContent />;
      case 'computer-literacy':
        return <ComputerLiteracyContent />;
      case 'practice':
        return <PracticeContent />;
      case 'codes':
        return <CodesContent />;
      case 'payment-management':
      case 'course-payments':
      case 'payment-methods':
      case 'account-balance':
        return <PaymentContent />;
      default:
        return <PageNotFoundContent />;
    }
  };

  return (
    <div className="relative flex h-[calc(100vh-5.5rem)]">
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "90%",
          zIndex: 50,
        }}
        className="md:hidden p-2 bg-gray-200 rounded-md"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-800" />
        ) : (
          <ListBulletIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>

      <div
        className={`fixed md:static w-[75%] md:w-[20%] bg-gray-100 h-full z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Menu
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          closeMenu={toggleMenu}
        />
      </div>

      <div className="flex-1 overflow-auto z-10">
        <Section currentPage={currentPage} key={currentPage}>
          {renderContent()}
        </Section>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      <button
        onClick={toggleChat}
        className="fixed right-6 bottom-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-[9999] transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        aria-label="Chat"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
        <span className="text-sm font-medium hidden md:inline">Yordam</span>
      </button>

      {isChatOpen && (
        <div className="fixed right-6 bottom-20 w-full sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden z-[9999] border border-gray-200 flex flex-col max-h-[500px] animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white text-blue-600 flex items-center justify-center mr-3 shadow-md">
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Yordam markazi</h3>
                <p className="text-xs text-blue-100">
                  {user ? `${user.name || user.id || 'Foydalanuvchi'} • Online` : 'Online • Tez javob beramiz'}
                </p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div 
            className="p-4 flex-1 overflow-y-auto bg-gray-50" 
            style={{ 
              minHeight: "300px", 
              maxHeight: "400px",
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23f1f5f9\" fill-opacity=\"0.5\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
              backgroundSize: "cover"
            }}
          >
            {renderChatMessages()}
            <div ref={chatEndRef} />
          </div>

          {!user && (
            <div className="bg-yellow-50 border-t border-yellow-200 px-4 py-2">
              <p className="text-sm text-yellow-700">
                <span className="font-medium">Eslatma:</span> Xabar tarixini saqlash uchun tizimga kiring.
                <button className="ml-2 text-blue-600 hover:underline">Kirish</button>
              </p>
            </div>
          )}

          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="flex space-x-2 text-gray-500">
                  <button 
                    type="button" 
                    className="hover:text-blue-600 transition-colors" 
                    title="Jilmayish"
                    onClick={() => setMessage(prev => prev + "😊")}
                  >
                    😊
                  </button>
                  <button 
                    type="button" 
                    className="hover:text-blue-600 transition-colors" 
                    title="Qo'llar"
                    onClick={() => setMessage(prev => prev + "👍")}
                  >
                    👍
                  </button>
                  <button 
                    type="button" 
                    className="hover:text-blue-600 transition-colors" 
                    title="Rahmat"
                    onClick={() => setMessage(prev => prev + "🙏")}
                  >
                    🙏
                  </button>
                </div>
                
                {user && (
                  <div className="ml-auto">
                    <button 
                      type="button" 
                      onClick={handleLogout} 
                      className="text-xs text-gray-500 hover:text-red-500"
                    >
                      Chiqish
                    </button>
                  </div>
                )}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Xabar yozing..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition-colors flex items-center disabled:bg-blue-400 disabled:cursor-not-allowed"
                  disabled={!message.trim()}
                >
                  <PaperAirplaneIcon className="h-5 w-5 rotate-90 -mr-1" />
                  <span className="ml-1 hidden md:inline">Yuborish</span>
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                <span>Ishchi soatlar: 9:00 - 18:00, Dushanba-Juma</span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

const HomeContent = () => (
  <Section title="Bosh sahifa" subtitle="O'zbekistondagi eng yaxshi dasturlash platformasiga xush kelibsiz!">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Dasturlash kurslari</h3>
        <p className="text-gray-600 mb-4">Frontend, Backend, Mobile va boshqa yo'nalishlarda professional kurslar</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Kurslarga o'tish
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Amaliy loyihalar</h3>
        <p className="text-gray-600 mb-4">Haqiqiy loyihalar ustida ishlash orqali tajriba orttiring</p>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Loyihalarga o'tish
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Jamiyat</h3>
        <p className="text-gray-600 mb-4">Dasturchilar jamoasiga qo'shiling va bilimlaringizni ulashing</p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Jamiyatga qo'shilish
        </button>
      </div>
    </div>
  </Section>
);

const FrontendContent = () => (
  <Section title="Frontend dasturlash" subtitle="Web saytlar yaratish uchun frontend texnologiyalari">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Frontend kurslari</h3>
      <p className="text-gray-600 mb-4">HTML, CSS, JavaScript, React, Vue va boshqa frontend texnologiyalari bo'yicha kurslar</p>
    </div>
  </Section>
);

const BackendContent = () => (
  <Section title="Backend dasturlash" subtitle="Server tomonidagi dasturlash va ma'lumotlar bazasi">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Backend kurslari</h3>
      <p className="text-gray-600 mb-4">Node.js, Express, MongoDB, PostgreSQL va boshqa backend texnologiyalari bo'yicha kurslar</p>
    </div>
  </Section>
);

const MobileContent = () => (
  <Section title="Mobile dasturlash" subtitle="iOS va Android uchun mobil ilovalar yaratish">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile kurslari</h3>
      <p className="text-gray-600 mb-4">React Native, Flutter, Swift, Kotlin va boshqa mobile texnologiyalari bo'yicha kurslar</p>
    </div>
  </Section>
);

const ComputerLiteracyContent = () => (
  <Section title="Kompyuter savodxonligi" subtitle="Kompyuter va dasturlash asoslari">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Kompyuter savodxonligi kurslari</h3>
      <p className="text-gray-600 mb-4">Kompyuter asoslari, operatsion tizimlar, ofis dasturlari va boshqa asosiy bilimlar</p>
    </div>
  </Section>
);

const PracticeContent = () => (
  <Section title="Amaliyot" subtitle="Amaliy loyihalar va mashqlar">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Amaliy loyihalar</h3>
      <p className="text-gray-600 mb-4">Haqiqiy loyihalar ustida ishlash orqali tajriba orttiring</p>
    </div>
  </Section>
);

const CodesContent = () => (
  <Section title="Kodlar" subtitle="Tayyor kod namunalari va snippetlar">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Kod namunalari</h3>
      <p className="text-gray-600 mb-4">Turli dasturlash tillari va texnologiyalari uchun tayyor kod namunalari</p>
    </div>
  </Section>
);

const PaymentContent = () => (
  <Section title="To'lovlar" subtitle="Kurslar va xizmatlar uchun to'lovlar">
    <div>
      <FrontendPaymentSection />
    </div>
  </Section>
);

const PageNotFoundContent = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl">
      <h2 className="text-3xl font-bold text-red-600 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sahifa topilmadi</h3>
      <p className="text-gray-600 mb-6">
        Siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan bo'lishi mumkin.
      </p>
      <button 
        onClick={() => window.location.href = '/'}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Bosh sahifaga qaytish
      </button>
    </div>
  </div>
);

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Main;

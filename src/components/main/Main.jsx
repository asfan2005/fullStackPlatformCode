import React, { useState, useRef, useEffect } from "react";
import Menu from "../menu/Menu";
import Section from "../section/Section";
import { ListBulletIcon, XMarkIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import FrontendPaymentSection from '../../kursTolovlar/frontEnd/FrontEndKurslar';
import axios from "axios";
import { toast } from "react-hot-toast";
import { format } from "date-fns";

function Main() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);
  const menuRef = useRef(null);

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
    setError(null);
    
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        throw new Error('Foydalanuvchi ma\'lumotlari topilmadi');
      }

      const user = JSON.parse(userData);
      
      // Faqat shu foydalanuvchiga tegishli xabarlarni so'rash
      // userId parametrini URL query sifatida yuborish
      const response = await axios.get(`http://localhost:3000/api/messages?userId=${user.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (response.data.success && Array.isArray(response.data.messages)) {
        // Xabarlarni vaqt bo'yicha tartiblash
        const sortedMessages = response.data.messages.sort((a, b) => 
          new Date(a.createdAt) - new Date(b.createdAt)
        );

        // Faqat hozirgi foydalanuvchiga tegishli xabarlarni filterlaymiz
        const userMessages = sortedMessages.filter(message => 
          message.userId === user.id || 
          (message.isAdmin && message.recipientUserId === user.id)
        );

        const formattedMessages = userMessages.map(message => ({
          ...message,
          formattedTime: new Date(message.time).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          }),
          formattedDate: format(new Date(message.createdAt), "d-MMM yyyy HH:mm"),
          status: 'sent'
        }));
        
        setChatMessages(formattedMessages);
        
        // Xabarlar bo'sh bo'lsa salomlashish xabarini ko'rsatish
        if (formattedMessages.length === 0) {
          addWelcomeMessage(user);
        }
      } else {
        // Agar xabarlar bo'sh bo'lsa yoki xatolik bo'lsa
        addWelcomeMessage(user);
      }
    } catch (err) {
      console.error('Xabarlarni yuklashda xatolik:', err);
      
      try {
        // Xatolik bo'lganida ham foydalanuvchiga xabar ko'rsatish
        const userData = localStorage.getItem('user');
        const user = userData ? JSON.parse(userData) : { id: 'guest' };
        addWelcomeMessage(user);
      } catch (e) {
        console.error('Foydalanuvchi ma\'lumotlarini yuklashda xatolik:', e);
        // Barcha xatoliklar uchun ham salomlashish xabarini ko'rsatish
        addWelcomeMessage({ id: 'guest' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Salomlashish xabarini qo'shish uchun alohida funksiya
  const addWelcomeMessage = (user) => {
    const welcomeMessage = {
      id: Date.now(),
      text: `Assalomu alaykum ${user.name || 'mehmon'}! Infinity-School web sitega xush kelibsiz! Sizga qanday yordam bera olaman?`,
      isAdmin: true,
      userId: user.id,
      time: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      formattedTime: new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      formattedDate: format(new Date(), "d-MMM yyyy HH:mm"),
      status: 'sent',
      hasReply: false,
      reply: null
    };
    setChatMessages([welcomeMessage]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    const userData = localStorage.getItem('user');
    if (!userData) {
      toast.error("Xabar yuborish uchun tizimga kiring");
      return;
    }

    const user = JSON.parse(userData);
    const messageId = Date.now();
    const currentTime = new Date();
    const newMessage = {
      id: messageId,
      text: message.trim(),
      userId: user.id,
      isAdmin: false,
      time: currentTime.toISOString(),
      createdAt: currentTime.toISOString(),
      formattedTime: currentTime.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      formattedDate: format(currentTime, "d-MMM yyyy HH:mm"),
      status: 'sending',
      hasReply: false,
      reply: null
    };
    
    // Xabarni UI ga qo'shish
    setChatMessages(prev => [...prev, newMessage]);
    setMessage("");
    
    try {
      // Xabarni serverga yuborish
      const response = await axios.post('http://localhost:3000/api/messages', {
        text: newMessage.text,
        userId: user.id,
        isAdmin: false
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data.success) {
        // Xabar muvaffaqiyatli yuborildi
        setChatMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { 
                  ...response.data.data, 
                  formattedTime: newMessage.formattedTime,
                  formattedDate: newMessage.formattedDate,
                  status: 'sent' 
                }
              : msg
          )
        );
        
        // Avtomatik javob yuborish
        setTimeout(() => {
          const autoResponses = [
            "Xabaringiz qabul qilindi! Admin tez orada sizga javob beradi.",
            "Savolingiz uchun rahmat! Tez orada javob beramiz.",
            "Xabaringiz muvaffaqiyatli yuborildi. Iltimos, javobni kuting.",
            "Administratorlarimiz xabaringizni ko'rib chiqishadi va tez orada javob berishadi."
          ];
          
          const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
          const responseTime = new Date();
          
          const autoReply = {
            id: Date.now(),
            text: randomResponse,
            userId: user.id,
            recipientUserId: user.id,
            isAdmin: true,
            time: responseTime.toISOString(),
            createdAt: responseTime.toISOString(),
            formattedTime: responseTime.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            }),
            formattedDate: format(responseTime, "d-MMM yyyy HH:mm"),
            status: 'sent',
            hasReply: false,
            reply: null
          };
          
          setChatMessages(prev => [...prev, autoReply]);
          
          // Avtomatik javobdan keyin scroll pastga
          if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 1000);
      } else {
        throw new Error(response.data.message || 'Xabar yuborishda xatolik');
      }
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      toast.error("Xabar yuborishda xatolik yuz berdi");
      
      // Xabar statusini xato qilish
      setChatMessages(prev => 
        prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, status: 'error' }
            : msg
        )
      );
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicking outside menu to close it (on mobile)
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && window.innerWidth < 768) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      fetchUserMessages();
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

  // Admin xabarlarini yuborish uchun funksiya
  const handleAdminReply = async (messageId, replyText) => {
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        throw new Error('Admin ma\'lumotlari topilmadi');
      }

      const user = JSON.parse(userData);
      
      // Qaysi xabarga javob berilayotganini topish
      const originalMessage = chatMessages.find(msg => msg.id === messageId);
      if (!originalMessage) {
        throw new Error('Asl xabar topilmadi');
      }

      const adminResponse = {
        id: Date.now(),
        text: replyText,
        isAdmin: true,
        userId: user.id,
        recipientUserId: originalMessage.userId, // Javob kimga yuborilayotganini saqlash
        time: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        formattedTime: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        formattedDate: format(new Date(), "d-MMM yyyy HH:mm"),
        status: 'sending',
        replyToMessageId: messageId
      };

      // UI ga admin javobini qo'shish
      setChatMessages(prevMessages => [...prevMessages, adminResponse]);

      // Admin javobini serverga yuborish
      const response = await axios.post('http://localhost:3000/api/messages/reply', {
        text: replyText,
        userId: user.id,
        messageId: messageId,
        recipientUserId: originalMessage.userId // Javob kimga yuborilayotgani
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data.success) {
        // Admin xabari statusini yangilash
        setChatMessages(prevMessages => 
          prevMessages.map(msg => 
            msg.id === adminResponse.id 
              ? { ...msg, status: 'sent' } 
              : msg
          )
        );
        
        // Xabarlar ro'yxatini yangilash
        setTimeout(() => {
          fetchUserMessages();
        }, 500);
      } else {
        throw new Error(response.data.message || 'Javob yuborishda xatolik');
      }
    } catch (error) {
      console.error("Admin javobini yuborishda xatolik:", error);
      toast.error("Javob yuborishda xatolik yuz berdi");
      
      // Xatolik bo'lsa, javob statusini xato qilish
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === adminResponse?.id 
            ? { ...msg, status: 'error' } 
            : msg
        )
      );
    }
  };

  // MessageItem komponentini yaxshilash
  const MessageItem = ({ msg, onReply }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');

    // Javob yuborish funksiyasi
    const handleReplySubmit = (e) => {
      e.preventDefault();
      if (replyText.trim()) {
        onReply(msg.id, replyText.trim());
        setReplyText('');
        setIsReplying(false);
      }
    };

    // Xabar statusiga qarab indikator ko'rsatish
    const renderStatus = () => {
      if (msg.status === 'sending') {
        return <span className="text-blue-300 text-xs ml-2">• Yuborilmoqda</span>;
      } else if (msg.status === 'error') {
        return <span className="text-red-500 text-xs ml-2">• Xatolik</span>;
      }
      return null;
    };

    return (
      <div className={`mb-4 flex ${msg.isAdmin ? "justify-start" : "justify-end"}`}>
        {msg.isAdmin ? (
          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
            <span className="text-xs font-bold">A</span>
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center ml-2 flex-shrink-0 order-2">
            <span className="text-xs font-bold">S</span>
          </div>
        )}
        
        <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
          msg.isAdmin
            ? "bg-white text-gray-800 rounded-tl-none shadow-md"
            : "bg-blue-600 text-white rounded-tr-none order-1 shadow-md"
        }`}>
          <p className="break-words">{msg.text}</p>
          <div className={`text-xs mt-1 flex items-center justify-between gap-2 ${
            msg.isAdmin ? "text-gray-500" : "text-blue-100"
          }`}>
            <div className="flex items-center">
              <span>{msg.formattedTime}</span>
              {renderStatus()}
            </div>
            
            {!msg.isAdmin && user?.isAdmin && !msg.hasReply && (
              <button 
                onClick={() => setIsReplying(!isReplying)}
                className="text-xs text-blue-200 hover:text-white"
              >
                Javob berish
              </button>
            )}
          </div>

          {isReplying && (
            <form onSubmit={handleReplySubmit} className="mt-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Javobingizni yozing..."
                className="w-full px-2 py-1 text-sm text-gray-800 border rounded"
              />
              <div className="flex justify-end gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setIsReplying(false)}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="text-xs text-blue-600 hover:text-blue-800"
                  disabled={!replyText.trim()}
                >
                  Yuborish
                </button>
              </div>
            </form>
          )}

          {msg.reply && (
            <div className="mt-3 pl-4 border-l-2 border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-green-600">Admin javobi</span>
                <span className="text-xs text-gray-500">
                  {format(new Date(msg.reply.createdAt), "HH:mm")}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{msg.reply.text}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // renderChatMessages funksiyasini yangilash
  const renderChatMessages = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="ml-3 text-gray-500">Xabarlar yuklanmoqda...</p>
        </div>
      );
    }
    
    if (error) {
      return (
        <div className="text-center p-4">
          <div className="text-red-500 mb-2">{error}</div>
          <button 
            onClick={fetchUserMessages} 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Qayta urinish
          </button>
        </div>
      );
    }
    
    if (!chatMessages || chatMessages.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p>Hozircha xabarlar yo'q</p>
          </div>
          <p className="text-gray-500 text-sm">Yangi xabar yuboring!</p>
        </div>
      );
    }
    
    return chatMessages.map((msg) => (
      <MessageItem 
        key={msg.id} 
        msg={msg} 
        onReply={handleAdminReply}
      />
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
    <div className="relative flex h-[calc(100vh-7rem)] top-[30px]">
      {/* Fixed Menu Button - with responsive positioning */}
      {!isMenuOpen && (
        <button
          onClick={toggleMenu}
          
          className="fixed md:top-[60px] top-[120px] md:left-4 right-[30px] z-50 p-2 rounded-lg transition-all duration-200"
        >
          <ListBulletIcon className="h-6 w-6 text-gray-600" />
        </button>
      )}

      <div ref={menuRef}>
        <Menu
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          closeMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      </div>

      <div 
        className={`flex-1 overflow-auto z-10 transition-all duration-300 ${
          isMenuOpen ? 'ml-0 md:ml-96' : 'ml-0'
        }`}
      >
        <Section currentPage={currentPage} key={currentPage}>
          {renderContent()}
        </Section>
      </div>

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
                  disabled={!message.trim() || isLoading}
                >
                  <PaperAirplaneIcon className="h-5 w-5 rotate-90 -mr-1" />
                  <span className="ml-1 hidden md:inline">Yuborish</span>
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                <span>Ishchi soatlar: 9:00 - 18:00, Dushanba-Yakshanba</span>
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

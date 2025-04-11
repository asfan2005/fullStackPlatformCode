import React, { useState, useRef, useEffect } from "react";
import Menu from "../menu/Menu";
import Section from "../section/Section";
import { ListBulletIcon, XMarkIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import FrontendPaymentSection from '../../kursTolovlar/frontEnd/FrontEndKurslar';
import AiHelp from "../../aiHelp/AiHelp";
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
  const [isSending, setIsSending] = useState(false);
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

  // Redirect to home if trying to access protected route
  useEffect(() => {
    const protectedPages = ['frontend', 'backend', 'mobile', 'computer-literacy', 'practice', 'codes', 'ai-help', 'payment-management', 'course-payments', 'payment-methods', 'account-balance'];
    
    // Check if current page is protected and user is not authenticated
    if (protectedPages.includes(currentPage) && !user) {
      // Redirect to home page
      setCurrentPage('home');
      // Show toast message
      toast.error("Bu bo'limga kirish uchun tizimga kirishingiz kerak");
    }
  }, [currentPage, user]);

  // Handle page change with authentication check
  const setPageWithAuthCheck = (page) => {
    const protectedPages = ['frontend', 'backend', 'mobile', 'computer-literacy', 'practice', 'codes', 'ai-help', 'payment-management', 'course-payments', 'payment-methods', 'account-balance'];
    
    if (protectedPages.includes(page) && !user) {
      toast.error("Bu bo'limga kirish uchun tizimga kirishingiz kerak");
      return;
    }
    
    setCurrentPage(page);
    // Close menu when navigating from home to any other page
    if (page !== 'home') {
      setIsMenuOpen(false);
    }
  };

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
      const response = await axios.get(`https://api.infinity-school.uz/api/messages?userId=${user.id}`, {
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
          formattedDate: (() => {
            try {
              const messageDate = new Date(message.createdAt);
              if (!isNaN(messageDate.getTime())) {
                return format(messageDate, "d-MMM yyyy HH:mm");
              }
              return new Date().toLocaleString();
            } catch (error) {
              console.error("Date formatting error:", error);
              return new Date().toLocaleString();
            }
          })(),
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
    
    setIsSending(true);
    
    const newMessage = {
      id: Date.now(),
      text: message.trim(),
      isAdmin: false,
      userId: user?.id || 'anonymous',
      time: new Date().toISOString(),
      formattedTime: new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      status: 'sending'
    };
    
    // Xabarni UI ga qo'shish
    setChatMessages(prevMessages => [...prevMessages, newMessage]);
    
    // Input ni tozalash
    setMessage('');
    
    // Auto scroll
    if (chatEndRef.current) {
      setTimeout(() => {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    
    try {
      // Xabarni serverga yuborish
      const response = await axios({
        method: 'POST',
        url: 'https://api.infinity-school.uz/api/messages',
        data: {
          text: newMessage.text,
          userId: user?.id || 'anonymous',
          time: newMessage.time
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': user ? `Bearer ${localStorage.getItem('token')}` : undefined
        },
        timeout: 15000
      });
      
      // Xabar statusini yangilash
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, status: 'sent', serverId: response.data.id } 
            : msg
        )
      );
      
      // Admin javobini simulyatsiya qilish
      setTimeout(() => {
        if (user?.id) {
          generateAdminResponse(user.id);
        } else {
          generateAdminResponse('anonymous');
        }
      }, 2000);
      
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      
      // Xabar statusini xatolik ga o'zgartirish
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, status: 'error' } 
            : msg
        )
      );
      
      toast.error("Xabar yuborishda xatolik yuz berdi. Qayta urinib ko'ring.");
    } finally {
      setIsSending(false);
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
        url: 'https://api.infinity-school.uz/api/messages',
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
        formattedDate: format(new Date(), "d-MMM yyyy HH:mm"), // Current date is always valid
        status: 'sending',
        replyToMessageId: messageId
      };

      // UI ga admin javobini qo'shish
      setChatMessages(prevMessages => [...prevMessages, adminResponse]);

      // Admin javobini serverga yuborish
      const response = await axios.post('https://api.infinity-school.uz/api/messages/reply', {
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
            <ShieldCheckIcon className="h-5 w-5" />
          </div>
        ) : null}
        
        <div 
          className={`max-w-[85%] sm:max-w-[75%] rounded-lg px-4 py-3 ${
            msg.isAdmin 
              ? "bg-white text-gray-800 shadow-sm border border-gray-100" 
              : "bg-blue-600 text-white shadow-sm"
          } ${msg.isAdmin ? "rounded-tl-none" : "rounded-tr-none"}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs ${msg.isAdmin ? "text-blue-600 font-medium" : "text-blue-100"}`}>
              {msg.isAdmin ? "Admin" : "Siz"}
            </span>
            <div className="flex items-center">
              {renderStatus()}
              <span className={`text-xs ${msg.isAdmin ? "text-gray-500" : "text-blue-100"}`}>
                {(() => {
                  // Verify we have a valid date before formatting
                  try {
                    const dateValue = msg.time || msg.createdAt || Date.now();
                    const date = new Date(dateValue);
                    // Check if date is valid
                    if (!isNaN(date.getTime())) {
                      return format(date, "HH:mm");
                    }
                    // Fallback if date is invalid
                    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                  } catch (err) {
                    console.error("Date formatting error:", err);
                    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                  }
                })()}
              </span>
            </div>
          </div>
          
          <p className="text-sm break-words whitespace-pre-wrap">{msg.text}</p>
          
          {user?.isAdmin && !msg.isAdmin && !isReplying && (
            <div className="flex justify-end mt-2">
              <button
                onClick={() => setIsReplying(true)}
                className="text-xs text-gray-100 bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded transition-colors"
              >
                Javob berish
              </button>
            </div>
          )}

          {isReplying && (
            <form onSubmit={handleReplySubmit} className="mt-3 bg-blue-50 p-2 rounded border border-blue-100">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Javobingizni yozing..."
                className="w-full px-3 py-2 text-sm text-gray-800 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={2}
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setIsReplying(false)}
                  className="text-xs px-2 py-1 text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  disabled={!replyText.trim()}
                >
                  Yuborish
                </button>
              </div>
            </form>
          )}

          {msg.reply && (
            <div className="mt-3 p-2 bg-gray-50 rounded border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-green-600">Admin javobi</span>
                <span className="text-xs text-gray-500">
                  {(() => {
                    // Verify we have a valid date before formatting
                    try {
                      const replyDate = new Date(msg.reply.createdAt);
                      // Check if date is valid
                      if (!isNaN(replyDate.getTime())) {
                        return format(replyDate, "HH:mm");
                      }
                      // Fallback if date is invalid
                      return "";
                    } catch (err) {
                      console.error("Reply date formatting error:", err);
                      return "";
                    }
                  })()}
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">{msg.reply.text}</p>
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
        <div className="flex flex-col justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mb-3"></div>
          <p className="text-gray-500 text-sm">Xabarlar yuklanmoqda...</p>
        </div>
      );
    }
    
    if (error) {
      return (
        <div className="flex flex-col justify-center items-center h-full text-center p-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-sm">
            <div className="text-red-600 mb-2 font-medium">Xatolik yuz berdi</div>
            <p className="text-red-500 text-sm mb-3">{error}</p>
            <button 
              onClick={fetchUserMessages} 
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
            >
              Qayta urinish
            </button>
          </div>
        </div>
      );
    }
    
    if (!chatMessages || chatMessages.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-xs sm:max-w-sm mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">Xabarlar bo'sh</h3>
            <p className="text-gray-600 text-sm mb-4">Hech qanday xabar topilmadi. Yangi xabar yuboring!</p>
            <div className="text-xs text-blue-500 font-medium">
              Yordam markazimiz tezda javob beradi
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-4">
        {chatMessages.map((msg) => (
          <MessageItem 
            key={msg.id} 
            msg={msg} 
            onReply={handleAdminReply}
          />
        ))}
      </div>
    );
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
      case 'ai-help':
        return <AiHelp />;
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
    <div className="relative flex h-[calc(100vh-6.5rem)] overflow-hidden">
      {/* Fixed Menu Button - make it always visible when menu is closed */}
      <button
        onClick={toggleMenu}
        className={`fixed md:top-[60px] top-[90px] md:left-4 left-[30px] z-50 p-2 rounded-lg transition-all duration-200 ${
          isMenuOpen ? 'hidden' : 'block'
        }`}
      >
        <ListBulletIcon className="h-6 w-6 text-gray-600" />
      </button>

      <div ref={menuRef}>
        <Menu
          setCurrentPage={setPageWithAuthCheck}
          currentPage={currentPage}
          closeMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      </div>

      <div  
      style={{
        marginTop:"30px"
      }}
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
        className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 p-3 sm:p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-[9999] transition-all duration-300 transform hover:scale-110 flex items-center gap-2 ${isChatOpen ? 'rotate-90' : ''}`}
        aria-label="Chat"
      >
        {isChatOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <>
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span className="text-sm font-medium hidden md:inline">Yordam</span>
          </>
        )}
      </button>

      {isChatOpen && (
        <div className="fixed right-0 bottom-0 sm:right-6 sm:bottom-20 w-full sm:w-96 bg-white rounded-lg sm:rounded-lg shadow-2xl overflow-hidden z-[9999] border border-gray-200 flex flex-col h-[100vh] sm:h-auto sm:max-h-[500px] chat-mobile-enter sm:chat-desktop-enter">
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
              height: "calc(100vh - 135px)",
              maxHeight: "400px",
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23f1f5f9\" fill-opacity=\"0.5\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
              backgroundSize: "cover"
            }}
          >
            {renderChatMessages()}
            <div ref={chatEndRef} />
          </div>

          <div className="border-t border-gray-200 p-3 bg-white">
            <form 
              onSubmit={handleSendMessage} 
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Xabar yozing..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!message.trim() || isSending}
                className={`p-2 rounded-lg ${
                  !message.trim() || isSending
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white transition-colors`}
              >
                {isSending ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
                )}
              </button>
            </form>
          </div>
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
  
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
  
  @keyframes slideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }
  
  @media (max-width: 640px) {
    .chat-mobile-enter {
      animation: slideUp 0.3s ease-out forwards;
    }
    
    .chat-mobile-exit {
      animation: slideDown 0.3s ease-out forwards;
    }
  }
  
  @media (min-width: 641px) {
    .chat-desktop-enter {
      animation: fadeIn 0.3s ease-out forwards;
    }
  }
`;
document.head.appendChild(style);

export default Main;

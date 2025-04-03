import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  Search,
  Filter,
  Send,
  Trash2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Info
} from 'lucide-react';

// API_BASE_URL ni yuqorida e'lon qilamiz
const API_BASE_URL = 'http://localhost:3000/api/messages';

function AllMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sendingReply, setSendingReply] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [groupedMessages, setGroupedMessages] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Barcha xabarlarni olish
      const response = await axios.get(API_BASE_URL);
      
      if (response.data.success) {
        const formattedMessages = response.data.messages.map(message => ({
          ...message,
          formattedDate: format(new Date(message.createdAt), "d-MMM yyyy HH:mm"),
          replied: message.hasReply,
          user_name: message.isAdmin ? 'Admin' : `Foydalanuvchi ID:${message.userId}`,
          user_id: message.userId
        }));
        
        // Xabarlarni foydalanuvchilar bo'yicha guruhlash
        const groupByUser = formattedMessages.reduce((groups, message) => {
          const userId = message.userId;
          if (!groups[userId]) {
            groups[userId] = [];
          }
          groups[userId].push(message);
          return groups;
        }, {});
        
        setGroupedMessages(groupByUser);
        setMessages(formattedMessages);
      } else {
        throw new Error(response.data.message || 'Xabarlarni yuklashda xatolik');
      }
    } catch (err) {
      console.error('Xabarlarni yuklashda xatolik:', err);
      setError(err.response?.data?.message || 'Serverga ulanishda xatolik yuz berdi');
      toast.error('Xabarlarni yuklashda xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchMessages();
    setRefreshing(false);
  };

  const handleReply = async () => {
    if (!selectedMessage || !replyText.trim()) return;

    try {
      setSendingReply(true);
      
      // Javob yuborish
      const response = await axios.post(`${API_BASE_URL}/reply`, {
        text: replyText,
        userId: selectedMessage.userId, // Javob kimga yuborilayotgani
        messageId: selectedMessage.id    // Qaysi xabarga javob
      });

      if (response.data.success) {
        toast.success('Javob muvaffaqiyatli yuborildi');
        setReplyText('');
        setSelectedMessage(null);
        await fetchMessages();
      } else {
        throw new Error(response.data.message || 'Javob yuborishda xatolik');
      }
    } catch (err) {
      console.error('Javob yuborishda xatolik:', err);
      toast.error(err.response?.data?.message || 'Javob yuborishda xatolik yuz berdi');
    } finally {
      setSendingReply(false);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    if (!window.confirm('Ushbu xabarni o\'chirmoqchimisiz?')) return;

    try {
      const response = await axios.delete(`${API_BASE_URL}/${messageId}`);
      
      if (response.data.success) {
        toast.success('Xabar muvaffaqiyatli o\'chirildi');
        
        // UI dan ham xabarni o'chirish
        setMessages(messages.filter(msg => msg.id !== messageId));
        
        // Agar tanlangan xabar o'chirilgan bo'lsa, tanlashni bekor qilish
        if (selectedMessage?.id === messageId) {
          setSelectedMessage(null);
        }
        
        // Xabarlar ro'yxatini yangilash
        await fetchMessages();
      } else {
        throw new Error(response.data.message || 'Xabarni o\'chirishda xatolik');
      }
    } catch (err) {
      console.error('Xabarni o\'chirishda xatolik:', err);
      toast.error(err.response?.data?.message || 'Xabarni o\'chirishda xatolik yuz berdi');
    }
  };

  // Filtrlash va qidirish
  const getFilteredMessages = () => {
    let filteredMsgs;
    
    // Foydalanuvchi tanlangan bo'lsa, faqat uning xabarlarini ko'rsatish
    if (selectedUserId) {
      filteredMsgs = messages.filter(message => message.userId.toString() === selectedUserId.toString());
    } else {
      filteredMsgs = messages;
    }
    
    // Qidiruv va filtrlash
    filteredMsgs = filteredMsgs.filter(message => {
      const matchesSearch = 
        message.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.user_name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = 
        filterStatus === 'all' || 
        (filterStatus === 'answered' && message.replied) ||
        (filterStatus === 'unanswered' && !message.replied);
      
      return matchesSearch && matchesFilter;
    });
    
    return filteredMsgs;
  };

  const filteredMessages = getFilteredMessages();
  
  // Pagination
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
  const paginatedMessages = filteredMessages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Yangi komponent - Foydalanuvchilar ro'yxati
  const UsersList = () => {
    const userIds = Object.keys(groupedMessages);
    
    if (userIds.length === 0) {
  return (
        <div className="p-4 text-gray-500 text-center">
          <p>Foydalanuvchilar topilmadi</p>
        </div>
      );
    }
    
    return (
      <div className="border-r border-gray-200 h-full">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-medium text-gray-700 flex items-center">
            <User className="w-4 h-4 mr-2" /> Foydalanuvchilar
          </h3>
        </div>
        <div className="overflow-y-auto max-h-[600px]">
          <div className="divide-y divide-gray-100">
            <button
              onClick={() => setSelectedUserId(null)}
              className={`w-full p-3 text-left hover:bg-gray-50 transition flex items-center ${
                selectedUserId === null ? 'bg-blue-50 text-blue-700' : ''
              }`}
            >
              <User className="w-4 h-4 mr-2" /> Barcha foydalanuvchilar
            </button>
            
            {userIds.map(userId => {
              const userMessages = groupedMessages[userId];
              const unansweredCount = userMessages.filter(msg => !msg.isAdmin && !msg.replied).length;
              
              return (
                <button
                  key={userId}
                  onClick={() => setSelectedUserId(userId)}
                  className={`w-full p-3 text-left hover:bg-gray-50 transition flex items-center justify-between ${
                    selectedUserId === userId ? 'bg-blue-50 text-blue-700' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>ID: {userId}</span>
                  </div>
                  
                  {unansweredCount > 0 && (
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {unansweredCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarlavha */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Xabarlar boshqaruvi</h1>
          <p className="mt-1 text-sm text-gray-500">
            Barcha xabarlarni ko'rish va foydalanuvchilarga javob berish
          </p>
        </div>

        {/* Asosiy konteyner */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Qidiruv va filterlar */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Qidiruv */}
              <div className="relative flex-grow max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Xabar yoki foydalanuvchi nomi bo'yicha qidirish..."
                  className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4">
                {/* Filter */}
                <div className="relative min-w-[180px]">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">Barcha xabarlar</option>
                    <option value="answered">Javob berilgan</option>
                    <option value="unanswered">Javob berilmagan</option>
                  </select>
                </div>

                {/* Yangilash tugmasi */}
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                >
                  <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Ikki ustunli konteyner */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Foydalanuvchilar ro'yxati */}
            <div className="md:col-span-1 border-b md:border-b-0">
              <UsersList />
            </div>
            
            {/* Xabarlar ro'yxati */}
            <div className="md:col-span-3">
              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-gray-500">Xabarlar yuklanmoqda...</p>
                </div>
              ) : error ? (
                <div className="p-8 text-center text-red-500">
                  <p>{error}</p>
                </div>
              ) : paginatedMessages.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Mail className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p>Xabarlar topilmadi</p>
                  <p className="text-sm mt-1">Qidiruv parametrlarini o'zgartiring yoki yangi xabarlarni tekshiring</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {paginatedMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 sm:p-6 hover:bg-gray-50 transition cursor-pointer ${
                        selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900 flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {message.user_name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {message.formattedDate}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full w-fit ${
                              message.isAdmin
                                ? 'bg-blue-100 text-blue-800'
                                : message.replied
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {message.isAdmin 
                                ? 'Admin javobi' 
                                : message.replied 
                                  ? 'Javob berilgan' 
                                  : 'Javob kutilmoqda'
                              }
                            </span>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                            <p className="text-gray-700 whitespace-pre-wrap">{message.text}</p>
                          </div>
                          
                          {/* Javob mavjud bo'lsa ko'rsatish */}
                          {message.reply && (
                            <div className="mt-3 pl-6 border-l-2 border-green-200">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium text-green-600 flex items-center">
                                  <Info className="h-3 w-3 mr-1" /> Admin javobi
                                </span>
                                <span className="text-xs text-gray-500">
                                  {format(new Date(message.reply.createdAt), "d-MMM yyyy HH:mm")}
                                </span>
                              </div>
                              <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                                <p className="text-gray-700 whitespace-pre-wrap">{message.reply.text}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {!message.isAdmin && !message.replied && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMessage(message);
                              }}
                              className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition"
                              title="Javob berish"
                            >
                              <Send className="h-5 w-5" />
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteMessage(message.id);
                            }}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition"
                            title="O'chirish"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Jami <span className="font-medium">{filteredMessages.length}</span> ta xabar
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg ${
                          currentPage === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`min-w-[2rem] h-8 rounded-lg text-sm font-medium ${
                              page === currentPage
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg ${
                          currentPage === totalPages
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Javob yozish modali */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-4 sm:p-6">
            <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-2xl shadow-2xl">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Xabarga javob yozish</h3>
                <p className="mt-1 text-sm text-gray-500 flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Foydalanuvchi ID: {selectedMessage.userId} ga javob
                </p>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Asl xabar:</span>
                    <span className="text-gray-500">{format(new Date(selectedMessage.createdAt), "d-MMM yyyy HH:mm")}</span>
                  </div>
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.text}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="reply" className="block text-sm font-medium text-gray-700 mb-2">
                      Javob matni
                    </label>
                    <textarea
                      id="reply"
                      rows="4"
                      className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                      placeholder="Javob matnini kiriting..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    ></textarea>
                    <p className="mt-2 text-sm text-gray-500">Bu javob faqat xabarni yuborgan foydalanuvchiga ko'rinadi.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handleReply}
                  disabled={!replyText.trim() || sendingReply}
                  className={`px-4 py-2 rounded-lg text-white flex items-center transition ${
                    !replyText.trim() || sendingReply
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {sendingReply ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2"></div>
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Javob yuborish
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllMessages;
import React, { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  XMarkIcon, 
  ChatBubbleLeftRightIcon, 
  PlusIcon, 
  ArrowPathIcon, 
  TrashIcon 
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function AiHelp() {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load conversations from localStorage or create default
    const savedConversations = localStorage.getItem('aiConversations');
    if (savedConversations) {
      setConversations(JSON.parse(savedConversations));
    } else {
      const defaultConversation = {
        id: Date.now(),
        title: 'Yangi suhbat',
        createdAt: new Date().toISOString(),
        messages: []
      };
      setConversations([defaultConversation]);
      setActiveConversation(defaultConversation);
      localStorage.setItem('aiConversations', JSON.stringify([defaultConversation]));
    }
  }, []);

  useEffect(() => {
    // Set the first conversation as active if none is selected
    if (conversations.length > 0 && !activeConversation) {
      setActiveConversation(conversations[0]);
      setMessages(conversations[0].messages || []);
    }
  }, [conversations, activeConversation]);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const createNewConversation = () => {
    const newConversation = {
      id: Date.now(),
      title: 'Yangi suhbat',
      createdAt: new Date().toISOString(),
      messages: []
    };
    
    const updatedConversations = [newConversation, ...conversations];
    setConversations(updatedConversations);
    setActiveConversation(newConversation);
    setMessages([]);
    
    // Save to localStorage
    localStorage.setItem('aiConversations', JSON.stringify(updatedConversations));
    setIsMobileMenuOpen(false);
  };

  const selectConversation = (conversation) => {
    setActiveConversation(conversation);
    setMessages(conversation.messages || []);
    setIsMobileMenuOpen(false);
  };

  const deleteConversation = (event, conversationId) => {
    event.stopPropagation();
    
    const updatedConversations = conversations.filter(conv => conv.id !== conversationId);
    setConversations(updatedConversations);
    
    // If the active conversation is deleted, set the first in the list as active
    if (activeConversation && activeConversation.id === conversationId) {
      if (updatedConversations.length > 0) {
        setActiveConversation(updatedConversations[0]);
        setMessages(updatedConversations[0].messages || []);
      } else {
        // If no conversations left, create a new one
        createNewConversation();
      }
    }
    
    // Save to localStorage
    localStorage.setItem('aiConversations', JSON.stringify(updatedConversations));
  };

  const clearConversation = () => {
    if (!activeConversation) return;
    
    const updatedConversation = { ...activeConversation, messages: [] };
    const updatedConversations = conversations.map(conv => 
      conv.id === activeConversation.id ? updatedConversation : conv
    );
    
    setConversations(updatedConversations);
    setActiveConversation(updatedConversation);
    setMessages([]);
    
    // Save to localStorage
    localStorage.setItem('aiConversations', JSON.stringify(updatedConversations));
    toast.success('Suhbat tozalandi');
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!message.trim() || !activeConversation) return;
    
    const userMessage = {
      id: Date.now(),
      text: message.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    // Update UI immediately
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setMessage('');
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Simulate AI response (replace with actual API call)
      setTimeout(() => {
        const aiResponses = [
          "Men sizga qanday yordam bera olaman?",
          "Savolingiz bo'yicha quyidagi ma'lumotlarni taqdim etishim mumkin...",
          "Dasturlash bo'yicha qo'shimcha ma'lumot olish uchun kurslarimizni ko'rishingizni tavsiya qilaman.",
          "Bu savolingizga javob berish uchun qo'shimcha kontekst kerak bo'lishi mumkin.",
          "Frontend dasturlashda bu yondashuvni qo'llash tavsiya etiladi.",
          "Backend dasturlashda ma'lumotlar bazasi bilan ishlashning eng yaxshi amaliyotlari quyidagilardir...",
          "React frameworkida komponentlarni tuzish bo'yicha maslahatlar...",
          "JavaScript da obyektlar va massivlar bilan ishlashning samarali usullari mavjud.",
          "Dasturlashni o'rganishda eng muhim narsa amaliyot qilishdir.",
          "Sizning loyihangiz uchun quyidagi texnologiyalarni o'rganishni tavsiya qilaman..."
        ];
        
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        
        const aiMessage = {
          id: Date.now(),
          text: randomResponse,
          sender: 'ai',
          timestamp: new Date().toISOString()
        };
        
        const finalMessages = [...updatedMessages, aiMessage];
        setMessages(finalMessages);
        
        // Update conversation with new messages
        const updatedConversation = { 
          ...activeConversation, 
          messages: finalMessages,
          title: userMessage.text.substring(0, 30) + (userMessage.text.length > 30 ? '...' : '')
        };
        
        const updatedConversations = conversations.map(conv => 
          conv.id === activeConversation.id ? updatedConversation : conv
        );
        
        setConversations(updatedConversations);
        setActiveConversation(updatedConversation);
        
        // Save to localStorage
        localStorage.setItem('aiConversations', JSON.stringify(updatedConversations));
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('AI Help error:', error);
      toast.error('Xabar yuborishda xatolik yuz berdi');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left sidebar (Conversations) */}
      <div className={`fixed md:relative inset-0 z-20 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 md:w-72 bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold">AI Yordamchi</h2>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <XMarkIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-3">
          <button 
            onClick={createNewConversation}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Yangi suhbat</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {conversations.map(conversation => (
            <div 
              key={conversation.id}
              onClick={() => selectConversation(conversation)}
              className={`p-3 rounded-md cursor-pointer flex justify-between items-center hover:bg-gray-100 group ${activeConversation?.id === conversation.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
            >
              <div className="flex-1 truncate">
                <div className="font-medium truncate">{conversation.title}</div>
                <div className="text-xs text-gray-500">
                  {format(new Date(conversation.createdAt), 'dd MMM, HH:mm')}
                </div>
              </div>
              <button
                onClick={(e) => deleteConversation(e, conversation.id)}
                className="p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-200 transition-opacity"
              >
                <TrashIcon className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 mr-2 rounded-md hover:bg-gray-100"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500" />
            </button>
            <h2 className="text-lg font-semibold truncate">
              {activeConversation?.title || 'AI Yordamchi'}
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={clearConversation}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-500 flex items-center justify-center"
              title="Suhbatni tozalash"
            >
              <ArrowPathIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ChatBubbleLeftRightIcon className="h-16 w-16 mb-4 text-gray-300" />
              <h3 className="text-xl font-medium mb-2">AI Yordamchi</h3>
              <p className="text-center max-w-md">
                Dasturlash bo'yicha savollaringizni bering. Men sizga yordam berishga harakat qilaman.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-lg px-4 py-3 shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <div className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {format(new Date(msg.timestamp), 'HH:mm')}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-3 shadow-sm bg-white text-gray-800 rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          )}
        </div>
        
        {/* Input area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Savolingizni yozing..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              disabled={!message.trim() || isLoading}
            >
              <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
            </button>
          </form>
          <div className="text-xs text-gray-500 mt-2 text-center">
            <p>AI Yordamchi - Dasturlash savollaringizga javob olish uchun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiHelp;
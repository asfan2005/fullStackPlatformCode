import React, { useState, useEffect } from 'react';
import { Eye, Search, ChevronLeft, ChevronRight, Filter, Calendar, Clock, Users, Check, X, AlertTriangle, RefreshCw, Download, Send, CreditCard, User, BookOpen, Receipt, Bell, Shield, Award } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function OnlineKursObuna() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [showConfirmationSection, setShowConfirmationSection] = useState(false);
  
  const itemsPerPage = 10;

  // Default confirmation message template
  const defaultConfirmationMessage = `Assalomu alaykum!

To'lovingiz muvaffaqiyatli tasdiqlandi. Kurs ma'lumotlari:
- Tarif: {planName}
- Boshlanish sanasi: {startDate}
- Dars vaqti: {timeSlot}
- Dars kunlari: {courseDays}

Savollaringiz bo'lsa, bizga murojaat qiling.
Rahmat!`;

  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    if (selectedPayment && selectedPayment.status === 'pending') {
      // Populate confirmation message with payment details
      let message = defaultConfirmationMessage
        .replace('{planName}', selectedPayment.plan_name || 'Premium')
        .replace('{startDate}', formatDate(selectedPayment.course_start_date).split(',')[0] || 'Belgilanmagan')
        .replace('{timeSlot}', selectedPayment.course_time_slot || 'Belgilanmagan')
        .replace('{courseDays}', selectedPayment.course_days || 'Belgilanmagan');
      
      setConfirmationMessage(message);
    }
  }, [selectedPayment]);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.infinity-school.uz/api/payment-page/all');
      
      if (response.data.success && response.data.data.payments) {
        setPayments(response.data.data.payments);
      } else {
        setPayments([]);
      }
      setLoading(false);
    } catch (err) {
      console.error("To'lovlarni yuklashda xatolik:", err);
      setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      setLoading(false);
      toast.error("Ma'lumotlarni yuklashda xatolik yuz berdi");
    }
  };

  const refreshPayments = async () => {
    try {
      setRefreshing(true);
      await fetchPayments();
      toast.success("Ma'lumotlar yangilandi");
    } catch (err) {
      toast.error("Ma'lumotlarni yangilashda xatolik yuz berdi");
    } finally {
      setRefreshing(false);
    }
  };

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
    setShowConfirmationSection(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayment(null);
    setConfirmationMessage('');
    setShowConfirmationSection(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = async (paymentId, newStatus) => {
    try {
      setProcessingPayment(true);
      
      const response = await axios.put(
        `https://api.infinity-school.uz/api/payment-page/status/${paymentId}`,
        { status: newStatus }
      );

      if (response.data.success) {
        // Update payments list
        setPayments(payments.map(payment => 
          payment.id === paymentId 
            ? { ...payment, status: newStatus }
            : payment
        ));
        
        // If modal is open, update selected payment
        if (selectedPayment && selectedPayment.id === paymentId) {
          setSelectedPayment({ ...selectedPayment, status: newStatus });
        }
        
        toast.success(`To'lov holati ${newStatus === 'completed' ? 'tasdiqlandi' : 'rad etildi'}`);
      }
    } catch (error) {
      console.error("Status yangilashda xatolik:", error);
      toast.error("To'lov holatini yangilashda xatolik yuz berdi");
    } finally {
      setProcessingPayment(false);
    }
  };

  const handleSendConfirmation = async () => {
    if (!selectedPayment || !confirmationMessage.trim()) {
      toast.error("Tasdiqlash xabari kiritilmagan");
      return;
    }
    
    try {
      setProcessingPayment(true);
      
      // Update payment status to completed
      await handleStatusChange(selectedPayment.id, 'completed');
      
      // Send confirmation message to user
      const response = await axios.post(
        `https://api.infinity-school.uz/api/notifications/send`,
        {
          telegramUsername: selectedPayment.telegram_username,
          message: confirmationMessage,
          paymentId: selectedPayment.id
        }
      );
      
      if (response.data.success) {
        toast.success("Tasdiqlash xabari yuborildi", {
          icon: '✅',
          style: {
            borderRadius: '10px',
            background: '#18A558',
            color: '#fff',
          },
          duration: 3000
        });
        
        setTimeout(() => {
          handleCloseModal();
        }, 1500);
      }
    } catch (error) {
      console.error("Tasdiqlash xabarini yuborishda xatolik:", error);
      toast.error("Tasdiqlash xabarini yuborishda xatolik yuz berdi");
    } finally {
      setProcessingPayment(false);
    }
  };

  // Filter and search the payments
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transaction_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.telegram_username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.phone_number?.includes(searchTerm);
    
    const matchesFilter = filterStatus === 'all' || payment.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPayments = filteredPayments.slice(startIndex, startIndex + itemsPerPage);

  // Status badge color mapping
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'completed':
      case 'success':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'rejected':
      case 'failed':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
      case 'success':
        return 'Tasdiqlangan';
      case 'pending':
        return 'Kutilmoqda';
      case 'rejected':
      case 'failed':
        return 'Rad etilgan';
      default:
        return 'Noma\'lum';
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Sana mavjud emas';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('uz-UZ', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Noto\'g\'ri sana formati';
    }
  };

  // Calculate time remaining for subscription
  const calculateTimeRemaining = (startDate) => {
    if (!startDate) return { days: 0, hours: 0, minutes: 0 };
    
    try {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(end.getDate() + 30); // 30-day subscription
      
      const now = new Date();
      const diff = end - now;
      
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, expired: true };
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      return { days, hours, minutes, expired: false };
    } catch (error) {
      return { days: 0, hours: 0, minutes: 0 };
    }
  };

  // Kvitansiya rasmini ko'rsatish uchun URL ni to'g'rilash
  const getReceiptUrl = (payment) => {
    if (!payment.receipt_url) return null;
    return `https://api.infinity-school.uz${payment.receipt_url}`;
  };

  // Render payment table
  const renderTable = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Table header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="ID, ism yoki telefon orqali qidirish..."
                className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Filters and Refresh */}
            <div className="flex items-center gap-4">
              <div className="relative min-w-[180px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  value={filterStatus}
                  onChange={handleFilterChange}
                >
                  <option value="all">Barcha holatlar</option>
                  <option value="pending">Kutilmoqda</option>
                  <option value="completed">Tasdiqlangan</option>
                  <option value="success">Muvaffaqiyatli</option>
                  <option value="rejected">Rad etilgan</option>
                  <option value="failed">Muvaffaqiyatsiz</option>
                </select>
              </div>
              
              <button 
                onClick={refreshPayments}
                disabled={refreshing}
                className="p-2.5 rounded-lg text-blue-600 hover:bg-blue-50 border border-blue-200 transition-colors duration-200 flex items-center gap-2 shadow-sm"
                title="Yangilash"
              >
                <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Yangilash</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-100">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">Jami to'lovlar</div>
            <div className="text-xl font-bold text-gray-900">{payments.length}</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">Kutilayotgan</div>
            <div className="text-xl font-bold text-yellow-600">
              {payments.filter(p => p.status === 'pending').length}
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">Tasdiqlangan</div>
            <div className="text-xl font-bold text-green-600">
              {payments.filter(p => p.status === 'completed' || p.status === 'success').length}
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">Rad etilgan</div>
            <div className="text-xl font-bold text-red-600">
              {payments.filter(p => p.status === 'rejected' || p.status === 'failed').length}
            </div>
          </div>
        </div>

        {/* Table content */}
        <div className="divide-y divide-gray-100">
          {paginatedPayments.length > 0 ? (
            paginatedPayments.map((payment) => (
              <div 
                key={payment.id} 
                className="p-4 sm:p-6 hover:bg-gray-50 transition duration-150 cursor-pointer"
                onClick={() => handleViewDetails(payment)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* ID and Payment Status */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center">
                      <CreditCard className="h-3.5 w-3.5 mr-1 text-blue-500" />
                      To'lov ID
                    </div>
                    <div className="font-medium text-gray-900">{payment.transaction_id}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(payment.status)}`}>
                        {getStatusText(payment.status)}
                      </span>
                      {payment.status === 'pending' && (
                        <div className="flex items-center space-x-1">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(payment.id, 'completed');
                            }}
                            className="p-1 rounded-full text-green-600 hover:bg-green-50 transition-colors duration-200 border border-green-200 shadow-sm"
                            title="Tasdiqlash"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(payment.id, 'rejected');
                            }}
                            className="p-1 rounded-full text-red-600 hover:bg-red-50 transition-colors duration-200 border border-red-200 shadow-sm"
                            title="Rad etish"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* User Information */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center">
                      <User className="h-3.5 w-3.5 mr-1 text-purple-500" />
                      Foydalanuvchi
                    </div>
                    <div className="font-medium text-gray-900">{payment.full_name}</div>
                    <div className="text-sm text-gray-500">{payment.telegram_username}</div>
                    <div className="text-sm text-gray-500">{payment.phone_number}</div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center">
                      <Receipt className="h-3.5 w-3.5 mr-1 text-green-500" />
                      To'lov
                    </div>
                    <div className="font-medium text-gray-900">{payment.plan_name}</div>
                    <div className="text-sm text-blue-600 font-medium">{payment.plan_price}</div>
                    <div className="text-sm text-gray-500">{payment.formatted_payment_date || formatDate(payment.payment_date)}</div>
                  </div>

                  {/* Course Information */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center">
                      <BookOpen className="h-3.5 w-3.5 mr-1 text-indigo-500" />
                      Kurs ma'lumotlari
                    </div>
                    <div className="font-medium text-gray-900">{payment.course_time_slot}</div>
                    <div className="text-sm text-gray-500">{payment.course_days}</div>
                    <div className="text-sm text-gray-500">Boshlanish: {formatDate(payment.course_start_date).split(',')[0]}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <div className="flex flex-col items-center justify-center py-12">
                <AlertTriangle className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">To'lovlar topilmadi</h3>
                <p className="text-gray-500 max-w-md">
                  Hech qanday to'lov ma'lumoti mavjud emas yoki qidiruv natijasi bo'sh
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Jami <span className="font-medium">{filteredPayments.length}</span> ta to'lov
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
    );
  };

  // Render payment details modal
  const renderModal = () => {
    if (!showModal || !selectedPayment) return null;

    const imageUrl = selectedPayment.receipt_url 
      ? `https://api.infinity-school.uz${selectedPayment.receipt_url}`
      : null;
      
    const timeRemaining = calculateTimeRemaining(selectedPayment.course_start_date);

    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
        <div className="bg-white rounded-2xl w-full max-w-3xl my-4 sm:my-8 mx-auto shadow-2xl transform transition-all scale-100">
          {/* Modal header */}
          <div className="sticky top-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl z-10">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold truncate">Kurs to'lovi ma'lumotlari</h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 truncate">ID: {selectedPayment.transaction_id}</p>
            </div>
            <button
              onClick={handleCloseModal}
              className="ml-4 p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Modal body */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Status badge */}
            <div className="mb-4 sm:mb-6 flex items-center justify-center">
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-sm ${
                selectedPayment.status === 'completed' || selectedPayment.status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                : selectedPayment.status === 'pending' 
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {getStatusText(selectedPayment.status)}
              </span>
            </div>

            {/* Action buttons for pending payments */}
            {selectedPayment.status === 'pending' && (
              <div className="mb-6 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setShowConfirmationSection(!showConfirmationSection)}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  {showConfirmationSection ? "Xabarni yashirish" : "Xabar yuborish"}
                </button>
                
                <button
                  onClick={() => handleStatusChange(selectedPayment.id, 'completed')}
                  disabled={processingPayment}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processingPayment ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2"></div>
                      <span>Jarayonda...</span>
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      <span>Tasdiqlash</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => handleStatusChange(selectedPayment.id, 'rejected')}
                  disabled={processingPayment}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <X className="h-4 w-4 mr-2" />
                  <span>Rad etish</span>
                </button>
              </div>
            )}

            {/* Confirmation message section */}
            {selectedPayment.status === 'pending' && showConfirmationSection && (
              <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 shadow-sm">
                <h4 className="text-sm font-medium text-blue-800 mb-2 flex items-center">
                  <Bell className="h-4 w-4 mr-1" />
                  Tasdiqlash xabari
                </h4>
                <textarea
                  value={confirmationMessage}
                  onChange={(e) => setConfirmationMessage(e.target.value)}
                  className="w-full h-32 p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                  placeholder="Foydalanuvchiga yuboriluvchi xabar..."
                ></textarea>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={handleSendConfirmation}
                    disabled={!confirmationMessage.trim() || processingPayment}
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processingPayment ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2"></div>
                        <span>Yuborilmoqda...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        <span>Xabarni yuborish</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Subscription time remaining */}
            {(selectedPayment.status === 'completed' || selectedPayment.status === 'success') && (
              <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 shadow-sm">
                <h4 className="text-sm font-medium text-blue-800 mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Obuna muddati
                </h4>
                {timeRemaining.expired ? (
                  <div className="text-red-600 font-medium">Obuna muddati tugagan</div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white rounded-lg p-2 text-center shadow-sm border border-blue-50">
                      <div className="text-2xl font-bold text-blue-600">{timeRemaining.days}</div>
                      <div className="text-xs text-gray-500">kun</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center shadow-sm border border-blue-50">
                      <div className="text-2xl font-bold text-blue-600">{timeRemaining.hours}</div>
                      <div className="text-xs text-gray-500">soat</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center shadow-sm border border-blue-50">
                      <div className="text-2xl font-bold text-blue-600">{timeRemaining.minutes}</div>
                      <div className="text-xs text-gray-500">daqiqa</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Payment and User Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Payment Information */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-100/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg sm:text-xl shadow-sm">
                    💳
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">To'lov ma'lumotlari</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">Tarif</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.plan_name}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">Summa</p>
                    <p className="text-base sm:text-lg font-semibold text-blue-600 mt-1">{selectedPayment.plan_price}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">To'lov sanasi</p>
                    <p className="font-medium text-gray-900 mt-1">
                      {selectedPayment.formatted_payment_date || formatDate(selectedPayment.payment_date)}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">Ro'yxatdan o'tish sanasi</p>
                    <p className="font-medium text-gray-900 mt-1">
                      {formatDate(selectedPayment.registration_date)}
                    </p>
                  </div>
                </div>
              </div>

              {/* User Information */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-100/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg sm:text-xl shadow-sm">
                    👤
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Foydalanuvchi</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">F.I.O</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.full_name}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">Telegram</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.telegram_username}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">Telefon</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.phone_number}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-indigo-100/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg sm:text-xl shadow-sm">
                  📚
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">Kurs ma'lumotlari</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-indigo-500" />
                    <p className="text-xs sm:text-sm text-gray-500">Boshlanish sanasi</p>
                  </div>
                  <p className="font-medium text-gray-900 mt-auto">
                    {formatDate(selectedPayment.course_start_date).split(',')[0]}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    <p className="text-xs sm:text-sm text-gray-500">Dars vaqti</p>
                  </div>
                  <p className="font-medium text-gray-900 mt-auto">{selectedPayment.course_time_slot}</p>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-indigo-500" />
                    <p className="text-xs sm:text-sm text-gray-500">Dars kunlari</p>
                  </div>
                  <p className="font-medium text-gray-900 mt-auto">{selectedPayment.course_days}</p>
                </div>
              </div>
            </div>

            {/* Receipt Image */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-100/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg sm:text-xl shadow-sm">
                  📄
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">To'lov cheki</h4>
              </div>
              {selectedPayment.receipt_url ? (
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100">
                    <img
                      src={getReceiptUrl(selectedPayment)}
                      alt="To'lov cheki"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x400?text=Rasm+topilmadi';
                        e.target.className = "object-contain w-full h-full opacity-50";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a 
                        href={getReceiptUrl(selectedPayment)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/90 rounded-lg text-sm font-medium text-gray-900 hover:bg-white transition-colors duration-200 transform hover:scale-105 shadow-sm"
                      >
                        <Eye className="h-4 w-4 inline-block mr-1" />
                        Kattalashtirish
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-3xl sm:text-4xl mb-2">📷</span>
                    <p className="text-sm sm:text-base text-gray-500">Chek mavjud emas</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal footer */}
          <div className="sticky bottom-0 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            <div className="flex flex-wrap justify-end gap-2 sm:gap-3">
              {selectedPayment.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleStatusChange(selectedPayment.id, 'completed')}
                    disabled={processingPayment}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Tasdiqlash</span>
                  </button>
                  
                  <button
                    onClick={() => handleStatusChange(selectedPayment.id, 'rejected')}
                    disabled={processingPayment}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <X className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Rad etish</span>
                  </button>
                </>
              )}
              
              <button
                onClick={handleCloseModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-500">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md" role="alert">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
              <div>
                <p className="font-bold">Xatolik yuz berdi</p>
                <p>{error}</p>
              </div>
            </div>
            <div className="mt-4">
              <button 
                onClick={refreshPayments}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Qayta urinish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Award className="h-6 w-6 mr-2 text-blue-600" />
            Online kurs obunalari
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Barcha kurs to'lovlari va obunalar ro'yxati
          </p>
        </div>

        {renderTable()}
        {renderModal()}
      </div>
    </div>
  );
}

export default OnlineKursObuna;
                        
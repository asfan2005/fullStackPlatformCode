import { useState, useEffect } from 'react';
import { Eye, Check, X, Search, ChevronLeft, ChevronRight, Filter, Send } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function AdminPaymentsPanel() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(''); 
  const [sendingConfirmation, setSendingConfirmation] = useState(false);
  const [confirmationSuccess, setConfirmationSuccess] = useState(null);
  
  const itemsPerPage = 10;

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/payments/all');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setPayments(data.payments || []);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleViewReceipt = (payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
    setConfirmationMessage('');
    setConfirmationSuccess(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayment(null);
    setConfirmationMessage('');
    setConfirmationSuccess(null);
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
        const response = await axios.put(
            `http://localhost:3000/api/payments/status/${paymentId}`,
            { status: newStatus }
        );

        if (response.data.success) {
            // To'lovlar ro'yxatini yangilash
            setPayments(payments.map(payment => 
                payment.id === paymentId 
                    ? { ...payment, status: newStatus }
                    : payment
            ));
            
            toast.success("To'lov holati muvaffaqiyatli yangilandi");
        }
    } catch (error) {
        console.error("Status yangilashda xatolik:", error);
        toast.error("To'lov holatini yangilashda xatolik yuz berdi");
    }
  };

  const handleSendConfirmation = async () => {
    if (!selectedPayment || !confirmationMessage.trim()) {
      return;
    }
    
    try {
      setSendingConfirmation(true);
      
      // Tasdiqlash xabarini yuborish
      const response = await fetch(`http://localhost:3000/api/payments/confirm/${selectedPayment.id}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          message: confirmationMessage,
          telegramUsername: selectedPayment.telegram_username,
          status: 'completed',
          updatedAt: new Date().toISOString()
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Tasdiqlash xabarini yuborishda xatolik');
      }
      
      setConfirmationSuccess(true);
      
      // To'lovlar ro'yxatini yangilash
      const updatedPayments = payments.map(payment => {
        if (payment.id === selectedPayment.id) {
          return { ...payment, status: 'completed' };
        }
        return payment;
      });
      
      setPayments(updatedPayments);
      
      // Muvaffaqiyatli xabar ko'rsatish
      showNotification({
        title: 'Muvaffaqiyatli',
        message: 'Tasdiqlash xabari yuborildi',
        type: 'success'
      });

      // Foydalanuvchiga xabar yuborish
      await sendUserNotification({
        telegramUsername: selectedPayment.telegram_username,
        message: confirmationMessage
      });
      
      setTimeout(() => {
        handleCloseModal();
      }, 2000);
      
    } catch (err) {
      console.error('Tasdiqlash xabarini yuborishda xatolik:', err);
      setConfirmationSuccess(false);
      
      showNotification({
        title: 'Xatolik',
        message: err.message || 'Tasdiqlash xabarini yuborishda xatolik yuz berdi',
        type: 'error'
      });
      
    } finally {
      setSendingConfirmation(false);
    }
  };

  // Filter and search the payments
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transaction_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.telegram_username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.phone_number.includes(searchTerm);
    
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
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Receipt Image qismini yangilaymiz
  const renderReceiptImage = (payment) => {
    if (!payment.receipt_image_filename) {
        return (
            <div className="border rounded-lg p-8 text-center text-gray-500">
                Chek mavjud emas
            </div>
        );
    }

    // Backend URL ni to'g'ri shakllantirish
    const imageUrl = `http://localhost:3000/api/payments/receipt/${payment.receipt_image_filename}`;

    return (
        <div className="flex justify-center border rounded-lg overflow-hidden">
            <div className="relative w-full h-96">
                <img
                    src={imageUrl}
                    alt="To'lov cheki"
                    className="object-contain w-full h-full"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-image.jpg';
                        e.target.className = "object-contain w-full h-full opacity-50";
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'absolute inset-0 flex items-center justify-center text-red-500';
                        errorMessage.textContent = 'Rasmni yuklashda xatolik yuz berdi';
                        e.target.parentNode.appendChild(errorMessage);
                    }}
                    loading="lazy"
                />
            </div>
        </div>
    );
  };

  // Jadval qismini yangilaymiz
  const renderTable = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Jadval sarlavhasi */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Qidiruv */}
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

            {/* Filterlar */}
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
                  <option value="rejected">Rad etilgan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Jadval kontenti */}
        <div className="divide-y divide-gray-100">
          {paginatedPayments.length > 0 ? (
            paginatedPayments.map((payment) => (
              <div 
                key={payment.id} 
                className="p-4 sm:p-6 hover:bg-gray-50 transition duration-150 cursor-pointer"
                onClick={() => handleViewReceipt(payment)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* ID va To'lov ma'lumotlari */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">To'lov ID</div>
                    <div className="font-medium text-gray-900">{payment.transaction_id}</div>
                    <div className="mt-2">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(payment.status)}`}>
                        {payment.status === 'pending' && 'Kutilmoqda'}
                        {payment.status === 'completed' && 'Tasdiqlangan'}
                        {payment.status === 'rejected' && 'Rad etilgan'}
                      </span>
                    </div>
                  </div>

                  {/* Foydalanuvchi ma'lumotlari */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Foydalanuvchi</div>
                    <div className="font-medium text-gray-900">{payment.full_name}</div>
                    <div className="text-sm text-gray-500">{payment.telegram_username}</div>
                    <div className="text-sm text-gray-500">{payment.phone_number}</div>
                  </div>

                  {/* To'lov ma'lumotlari */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">To'lov</div>
                    <div className="font-medium text-gray-900">{payment.plan_name}</div>
                    <div className="text-sm text-blue-600 font-medium">{payment.plan_price}</div>
                    <div className="text-sm text-gray-500">{payment.formattedDate}</div>
                  </div>

                  {/* Amallar */}
                  <div className="flex items-center justify-end gap-3">
                    {/* Chek mavjudligi indikatori */}
                    {payment.receipt_image_filename ? (
                      <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-xs text-green-700">Chek mavjud</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span className="text-xs text-gray-500">Chek yo'q</span>
                      </div>
                    )}

                    {/* Amal tugmalari */}
                    {payment.status === 'pending' && (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(payment.id, 'completed');
                          }}
                          className="p-1.5 rounded-lg text-green-600 hover:bg-green-50 transition duration-150"
                          title="Tasdiqlash"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(payment.id, 'rejected');
                          }}
                          className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition duration-150"
                          title="Rad etish"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              To'lovlar topilmadi
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-100">
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

  // Modal ichidagi rasm ko'rsatish qismini yangilaymiz
  const renderModal = () => {
    if (!showModal || !selectedPayment) return null;

    const imageUrl = selectedPayment.receipt_image_filename 
      ? `http://localhost:3000/api/payments/receipt/${selectedPayment.receipt_image_filename}`
      : null;

    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
        <div className="bg-white rounded-2xl w-full max-w-3xl my-4 sm:my-8 mx-auto shadow-2xl transform transition-all scale-100">
          {/* Modal header */}
          <div className="sticky top-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-2xl z-10">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">To'lov ma'lumotlari</h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 truncate">ID: {selectedPayment.transaction_id}</p>
            </div>
            <button
              onClick={handleCloseModal}
              className="ml-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
          
          {/* Modal body */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Status badge */}
            <div className="mb-4 sm:mb-6 flex items-center justify-center">
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 ${
                selectedPayment.status === 'completed' ? 'bg-green-100 text-green-800 border border-green-200' :
                selectedPayment.status === 'pending' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                'bg-red-100 text-red-800 border border-red-200'
              }`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {selectedPayment.status === 'completed' && 'Tasdiqlangan'}
                {selectedPayment.status === 'pending' && 'Kutilmoqda'}
                {selectedPayment.status === 'rejected' && 'Rad etilgan'}
              </span>
            </div>

            {/* Payment and User Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* To'lov ma'lumotlari */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg sm:text-xl">
                    💳
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">To'lov ma'lumotlari</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Tarif</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.plan_name}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Summa</p>
                    <p className="text-base sm:text-lg font-semibold text-blue-600 mt-1">{selectedPayment.plan_price}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Sana</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.formattedDate}</p>
                  </div>
                </div>
              </div>

              {/* Foydalanuvchi ma'lumotlari */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg sm:text-xl">
                    👤
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Foydalanuvchi</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">F.I.O</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.full_name}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Telegram</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.telegram_username}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Telefon</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.phone_number}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt Image */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg sm:text-xl">
                  📄
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">To'lov cheki</h4>
              </div>
              {imageUrl ? (
                <div className="relative group">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-sm">
                    <img
                      src={imageUrl}
                      alt="To'lov cheki"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-4 py-2 bg-white/90 rounded-lg text-sm font-medium text-gray-900 hover:bg-white transition-colors duration-200 transform hover:scale-105">
                        Kattalashtirish
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-3xl sm:text-4xl mb-2">📷</span>
                    <p className="text-sm sm:text-base text-gray-500">Chek mavjud emas</p>
                  </div>
                </div>
              )}
            </div>

            {/* Confirmation Section */}
            {selectedPayment.status === 'pending' && (
              <div className="mt-6 sm:mt-8 bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-lg sm:text-xl">
                    ✉️
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">To'lovni tasdiqlash</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="confirmationMessage" className="block text-sm font-medium text-gray-700 mb-2">
                      Tasdiqlash xabari
                    </label>
                    <textarea
                      id="confirmationMessage"
                      rows="3"
                      className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none text-sm sm:text-base"
                      placeholder="Foydalanuvchiga yuboriluvchi xabar..."
                      value={confirmationMessage}
                      onChange={(e) => setConfirmationMessage(e.target.value)}
                    ></textarea>
                  </div>

                  {confirmationSuccess === true && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 rounded-r-lg">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <p className="ml-3 text-sm text-green-700">
                          Tasdiqlash xabari muvaffaqiyatli yuborildi!
                        </p>
                      </div>
                    </div>
                  )}

                  {confirmationSuccess === false && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-3 sm:p-4 rounded-r-lg">
                      <div className="flex items-center">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <p className="ml-3 text-sm text-red-700">
                          Xatolik yuz berdi. Qayta urinib ko'ring.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Modal footer */}
          <div className="sticky bottom-0 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            <div className="flex flex-wrap justify-end gap-2 sm:gap-3">
              {selectedPayment.status === 'pending' && (
                <>
                  <button
                    onClick={handleSendConfirmation}
                    disabled={!confirmationMessage.trim() || sendingConfirmation}
                    className={`flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 
                      ${!confirmationMessage.trim() || sendingConfirmation 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      }`}
                  >
                    {sendingConfirmation ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2"></div>
                        <span className="truncate">Yuborilmoqda...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">Xabarni yuborish</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleStatusChange(selectedPayment.id, 'completed')}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Tasdiqlash</span>
                  </button>

                  <button
                    onClick={() => handleStatusChange(selectedPayment.id, 'rejected')}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

  // Notification komponenti
  const Notification = ({ title, message, type, onClose }) => {
    return (
      <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}>
        <div className="flex items-center space-x-3">
          {type === 'success' ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          <div>
            <h4 className="text-white font-medium">{title}</h4>
            <p className="text-white/90 text-sm">{message}</p>
          </div>
        </div>
      </div>
    );
  };

  // Notification ko'rsatish uchun helper funksiya
  const showNotification = ({ title, message, type }) => {
    const notification = document.createElement('div');
    notification.innerHTML = ReactDOMServer.renderToString(
      <Notification title={title} message={message} type={type} />
    );
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  // Foydalanuvchiga xabar yuborish uchun helper funksiya
  const sendUserNotification = async ({ telegramUsername, message }) => {
    try {
      const response = await fetch('http://localhost:3000/api/notifications/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telegramUsername,
          message
        })
      });

      if (!response.ok) {
        throw new Error('Xabar yuborishda xatolik');
      }

      return true;
    } catch (error) {
      console.error('Xabar yuborishda xatolik:', error);
      return false;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">To'lovlar boshqaruvi</h1>
          <p className="mt-1 text-sm text-gray-500">
            Barcha to'lovlarni ko'rish va boshqarish
          </p>
        </div>

        {renderTable()}
        {renderModal()}
      </div>
    </div>
  );
}
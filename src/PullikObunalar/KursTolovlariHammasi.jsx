import React, { useState, useEffect } from 'react';
import { Eye, Check, X, Search, ChevronLeft, ChevronRight, Filter, Send, Download, Calendar, User, CreditCard } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function KursTolovlariHammasi() {
  // State variables
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [adminComment, setAdminComment] = useState('');
  const [sendingUpdate, setSendingUpdate] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(null);
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('DESC');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  
  const itemsPerPage = 10;

  // Fetch payments on component mount
  useEffect(() => {
    fetchPayments();
  }, [currentPage]); // Only trigger on page change, other filters will be handled manually

  // Fetch payments from API
  const fetchPayments = async (resetPage = false) => {
    try {
      setLoading(true);
      
      // Reset page if needed
      if (resetPage) {
        setCurrentPage(1);
      }
      
      // Build query parameters
      const params = new URLSearchParams({
        page: resetPage ? 1 : currentPage,
        limit: itemsPerPage,
        sortBy: sortBy,
        sortOrder: sortOrder
      });
      
      if (searchTerm) params.append('search', searchTerm);
      if (filterStatus !== 'all') params.append('status', filterStatus);
      if (dateRange.startDate) params.append('startDate', dateRange.startDate);
      if (dateRange.endDate) params.append('endDate', dateRange.endDate);
      
      console.log('Fetching payments with params:', Object.fromEntries(params.entries()));
      
      const response = await axios.get(`http://localhost:3000/api/payment-modal/all?${params}`, {
        timeout: 10000, // 10 second timeout
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data && response.data.success) {
        setPayments(response.data.data || []);
        
        // Update pagination info from backend
        if (response.data.pagination) {
          setTotalPages(response.data.pagination.totalPages || 1);
          setTotalItems(response.data.pagination.totalItems || 0);
          
          // Adjust current page if it's out of bounds
          if (currentPage > response.data.pagination.totalPages && response.data.pagination.totalPages > 0) {
            setCurrentPage(response.data.pagination.totalPages);
          }
        } else {
          // If backend doesn't provide pagination info, calculate it
          const total = response.data.total || response.data.data?.length || 0;
          setTotalItems(total);
          setTotalPages(Math.ceil(total / itemsPerPage) || 1);
        }
        
        setError(null);
      } else {
        throw new Error(response.data?.message || 'Ma\'lumotlarni olishda xatolik yuz berdi');
      }
    } catch (err) {
      console.error('To\'lovlarni olishda xatolik:', err);
      let errorMessage = 'To\'lovlarni olishda xatolik yuz berdi';
      
      if (err.response) {
        // Server returned an error response
        errorMessage = err.response.data?.message || `Server xatosi: ${err.response.status}`;
      } else if (err.request) {
        // Request was made but no response received
        errorMessage = 'Server javob bermadi. Internet aloqasini tekshiring.';
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Retry fetching on error
  const retryFetch = () => {
    setError(null);
    fetchPayments(false);
  };

  // Handle search
  const handleSearch = () => {
    fetchPayments(true); // Reset page when searching
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    fetchPayments(true); // Reset page when filtering
  };

  // Handle sort change
  const handleSortChange = (field) => {
    setSortBy(field);
    fetchPayments(true); // Reset page when sorting
  };

  // Handle sort order change
  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
    fetchPayments(false); // Don't reset page when changing sort order
  };

  // Handle date range change
  const handleDateRangeChange = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
    // Don't fetch immediately, wait for apply button
  };

  // Apply date filter
  const applyDateFilter = () => {
    fetchPayments(true); // Reset page when applying date filter
  };

  // Clear date filter
  const clearDateFilter = () => {
    setDateRange({ startDate: '', endDate: '' });
    fetchPayments(true); // Reset page when clearing date filter
  };

  // Handle view payment details
  const handleViewPayment = (payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
    setAdminComment('');
    setUpdateSuccess(null);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayment(null);
    setAdminComment('');
    setUpdateSuccess(null);
  };

  // Handle status change
  const handleStatusChange = async (transactionId, newStatus) => {
    try {
      setSendingUpdate(true);
      
      const response = await axios.put(
        `http://localhost:3000/api/payment-modal/status/${transactionId}`,
        { 
          status: newStatus,
          adminComment: adminComment || undefined
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          timeout: 8000 // 8 second timeout
        }
      );

      if (response.data.success) {
        // Update payments list
        setPayments(payments.map(payment => 
          payment.transaction_id === transactionId 
            ? { ...payment, status: newStatus, admin_comment: adminComment, updated_at: new Date().toISOString() }
            : payment
        ));
        
        setUpdateSuccess(true);
        toast.success(`To'lov holati muvaffaqiyatli yangilandi: ${getStatusText(newStatus)}`);
        
        // Close modal after delay
        setTimeout(() => {
          handleCloseModal();
          fetchPayments(false); // Refresh data without resetting page
        }, 1500);
      } else {
        throw new Error(response.data?.message || 'Holat yangilashda xatolik yuz berdi');
      }
    } catch (error) {
      console.error("Status yangilashda xatolik:", error);
      setUpdateSuccess(false);
      
      let errorMessage = "To'lov holatini yangilashda xatolik yuz berdi";
      if (error.response) {
        errorMessage = error.response.data?.message || `Server xatosi: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Server javob bermadi. Internet aloqasini tekshiring.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setSendingUpdate(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get status text
  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Kutilmoqda';
      case 'approved': return 'Tasdiqlangan';
      case 'rejected': return 'Rad etilgan';
      case 'refunded': return 'Qaytarilgan';
      default: return status;
    }
  };

  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'refunded':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
  };

  // Calculate total from courses
  const calculateTotal = (courses) => {
    if (!courses || !Array.isArray(courses)) return 0;
    return courses.reduce((sum, course) => sum + (course.price || 0), 0);
  };

  // Export to CSV
  const exportToCSV = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/payment-modal/export', {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `to'lovlar-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Ma\'lumotlar muvaffaqiyatli yuklab olindi');
    } catch (error) {
      console.error('Eksport qilishda xatolik:', error);
      toast.error('Ma\'lumotlarni eksport qilishda xatolik yuz berdi');
    }
  };

  // Export to Excel
  const exportToExcel = async () => {
    try {
      setLoading(true);
      
      // Get all payments for export
      const params = new URLSearchParams({
        limit: 1000, // Get more records for export
        sortBy: sortBy,
        sortOrder: sortOrder
      });
      
      if (filterStatus !== 'all') params.append('status', filterStatus);
      if (dateRange.startDate) params.append('startDate', dateRange.startDate);
      if (dateRange.endDate) params.append('endDate', dateRange.endDate);
      if (searchTerm) params.append('search', searchTerm);
      
      const response = await axios.get(`http://localhost:3000/api/payment-modal/all?${params}`);
      const paymentsData = response.data.data || [];
      
      // Prepare data for Excel
      const excelData = paymentsData.map(payment => ({
        'ID': payment.transaction_id,
        'Holat': getStatusText(payment.status),
        'Email': payment.email,
        'Telefon': payment.phone,
        'Tarif': payment.subscription_type === 'monthly' ? 'Oylik' : 'Yillik',
        'Asosiy summa': payment.base_amount || 0,
        'Qo\'shimcha summa': payment.additional_amount || 0,
        'Chegirma': payment.discounts || 0,
        'Jami summa': payment.final_amount || 0,
        'Sana': formatDate(payment.created_at),
        'Yangilangan sana': formatDate(payment.updated_at),
        'Admin izohi': payment.admin_comment || '',
        'Manzil': payment.address || '',
        'Passport': payment.passport || ''
      }));
      
      // Convert to Excel using SheetJS (xlsx)
      const XLSX = await import('xlsx');
      const worksheet = XLSX.utils.json_to_sheet(excelData);
      
      // Set column widths
      const columnWidths = [
        { wch: 20 }, // ID
        { wch: 15 }, // Holat
        { wch: 25 }, // Email
        { wch: 15 }, // Telefon
        { wch: 10 }, // Tarif
        { wch: 15 }, // Asosiy summa
        { wch: 15 }, // Qo'shimcha summa
        { wch: 15 }, // Chegirma
        { wch: 15 }, // Jami summa
        { wch: 20 }, // Sana
        { wch: 20 }, // Yangilangan sana
        { wch: 30 }, // Admin izohi
        { wch: 25 }, // Manzil
        { wch: 20 }  // Passport
      ];
      
      worksheet['!cols'] = columnWidths;
      
      // Create workbook and add the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'To\'lovlar');
      
      // Generate Excel file
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      // Download Excel file
      const url = window.URL.createObjectURL(excelBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `to'lovlar-${new Date().toISOString().slice(0, 10)}.xlsx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Excel fayl muvaffaqiyatli yuklab olindi');
    } catch (error) {
      console.error('Excel eksport qilishda xatolik:', error);
      toast.error('Excel faylni eksport qilishda xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  // Notification component
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

  // Show notification
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

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    // fetchPayments will be triggered by useEffect
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than max pages to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, maxPagesToShow - 1);
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - maxPagesToShow + 2);
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  // Render table component
  const renderTable = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Table header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="ID, email yoki telefon orqali qidirish..."
                className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="absolute inset-y-0 right-0 px-3 flex items-center bg-blue-50 text-blue-600 rounded-r-lg hover:bg-blue-100 transition duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="relative min-w-[180px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="pl-10 pr-10 py-2.5 w-full border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  value={filterStatus}
                  onChange={handleFilterChange}
                >
                  <option value="all">Barcha holatlar</option>
                  <option value="pending">Kutilmoqda</option>
                  <option value="approved">Tasdiqlangan</option>
                  <option value="rejected">Rad etilgan</option>
                  <option value="refunded">Qaytarilgan</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronLeft className="h-4 w-4 text-gray-400 rotate-90" />
                </div>
              </div>
              
              <div className="dropdown relative">
                <button
                  className="px-4 py-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition duration-150 flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    const dropdown = document.getElementById('exportDropdown');
                    dropdown.classList.toggle('hidden');
                    
                    // Close dropdown when clicking outside
                    const closeDropdown = (event) => {
                      if (!dropdown.contains(event.target)) {
                        dropdown.classList.add('hidden');
                        document.removeEventListener('click', closeDropdown);
                      }
                    };
                    
                    document.addEventListener('click', closeDropdown);
                  }}
                >
                  <Download className="h-5 w-5" />
                  <span className="hidden sm:inline">Eksport</span>
                </button>
                <div id="exportDropdown" className="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={exportToCSV}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <span className="text-gray-500">📄</span> CSV formatida
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={exportToExcel}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <span className="text-green-500">📊</span> Excel formatida
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Date filters */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Sana bo'yicha:</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="date"
                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateRange.startDate}
                onChange={(e) => handleDateRangeChange(e.target.value, dateRange.endDate)}
              />
              <span className="text-gray-500">-</span>
              <input
                type="date"
                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dateRange.endDate}
                onChange={(e) => handleDateRangeChange(dateRange.startDate, e.target.value)}
              />
              
              <button
                onClick={clearDateFilter}
                className="px-2 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition duration-150"
                disabled={!dateRange.startDate && !dateRange.endDate}
              >
                Tozalash
              </button>
              
              <button
                onClick={applyDateFilter}
                className="px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition duration-150 ml-2"
                disabled={!dateRange.startDate && !dateRange.endDate}
              >
                Qo'llash
              </button>
            </div>
          </div>
          
          {/* Sort options */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <span className="text-sm text-gray-600">Saralash:</span>
            </div>
            
            <div className="flex items-center gap-2">
              <select
                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="created_at">Sana bo'yicha</option>
                <option value="final_amount">Summa bo'yicha</option>
                <option value="email">Email bo'yicha</option>
                <option value="status">Holat bo'yicha</option>
              </select>
              <div className="relative inline-block">
                <button
                  onClick={handleSortOrderChange}
                  className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-150"
                  title={sortOrder === 'ASC' ? 'Kamayish tartibida' : 'O\'sish tartibida'}
                >
                  {sortOrder === 'ASC' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                  )}
                </button>
              </div>
              
              <button
                onClick={() => fetchPayments(false)}
                className="ml-2 p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-150"
                title="Yangilash"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Table content */}
        <div className="divide-y divide-gray-100">
          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
              <p className="text-gray-500">Ma'lumotlar yuklanmoqda...</p>
            </div>
          ) : payments.length > 0 ? (
            payments.map((payment) => (
              <div 
                key={payment.id || payment.transaction_id} 
                className="p-4 sm:p-6 hover:bg-gray-50 transition duration-150 cursor-pointer"
                onClick={() => handleViewPayment(payment)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* ID and Payment info */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">To'lov ID</div>
                    <div className="font-medium text-gray-900">{payment.transaction_id}</div>
                    <div className="mt-2">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(payment.status)}`}>
                        {getStatusText(payment.status)}
                      </span>
                    </div>
                  </div>

                  {/* User info */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Foydalanuvchi</div>
                    <div className="font-medium text-gray-900">{payment.email}</div>
                    <div className="text-sm text-gray-500">{payment.phone}</div>
                  </div>

                  {/* Payment details */}
                  <div>
                    <div className="text-xs text-gray-500 mb-1">To'lov</div>
                    <div className="font-medium text-gray-900">{payment.subscription_type === 'monthly' ? 'Oylik' : 'Yillik'}</div>
                    <div className="text-sm text-blue-600 font-medium">{formatPrice(payment.final_amount)}</div>
                    <div className="text-sm text-gray-500">{formatDate(payment.created_at)}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3">
                    {/* Receipt indicator */}
                    {payment.file_name ? (
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

                    {/* Action buttons */}
                    {payment.status === 'pending' && (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(payment.transaction_id, 'approved');
                          }}
                          className="p-1.5 rounded-lg text-green-600 hover:bg-green-50 transition duration-150"
                          title="Tasdiqlash"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(payment.transaction_id, 'rejected');
                          }}
                          className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition duration-150"
                          title="Rad etish"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewPayment(payment);
                      }}
                      className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition duration-150"
                      title="Batafsil ko'rish"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
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
        {totalItems > 0 && (
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Jami <span className="font-medium">{totalItems}</span> ta to'lov
                {totalPages > 1 && (
                  <span className="ml-1">
                    (<span className="font-medium">{currentPage}</span> / {totalPages} sahifa)
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
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
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[2rem] h-8 rounded-lg text-sm font-medium ${
                          page === currentPage
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
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

  // Render modal component
  const renderModal = () => {
    if (!showModal || !selectedPayment) return null;

    const imageUrl = selectedPayment.file_name 
      ? `http://localhost:3000/api/payment-modal/receipt/${selectedPayment.file_name}`
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
                selectedPayment.status === 'approved' ? 'bg-green-100 text-green-800 border border-green-200' :
                selectedPayment.status === 'pending' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                selectedPayment.status === 'rejected' ? 'bg-red-100 text-red-800 border border-red-200' :
                'bg-purple-100 text-purple-800 border border-purple-200'
              }`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {getStatusText(selectedPayment.status)}
              </span>
            </div>

            {/* Payment and User Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* To'lov ma'lumotlari */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg sm:text-xl">
                    <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">To'lov ma'lumotlari</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Tarif</p>
                    <p className="font-medium text-gray-900 mt-1">
                      {selectedPayment.subscription_type === 'monthly' ? 'Oylik' : 'Yillik'}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Asosiy summa</p>
                    <p className="font-medium text-gray-900 mt-1">{formatPrice(selectedPayment.base_amount || 0)}</p>
                  </div>
                  {selectedPayment.additional_amount > 0 && (
                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <p className="text-xs sm:text-sm text-gray-500">Qo'shimcha summa</p>
                      <p className="font-medium text-gray-900 mt-1">{formatPrice(selectedPayment.additional_amount)}</p>
                    </div>
                  )}
                  {selectedPayment.discounts > 0 && (
                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <p className="text-xs sm:text-sm text-gray-500">Chegirma</p>
                      <p className="font-medium text-red-600 mt-1">-{formatPrice(selectedPayment.discounts)}</p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Jami summa</p>
                    <p className="text-base sm:text-lg font-semibold text-blue-600 mt-1">{formatPrice(selectedPayment.final_amount)}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Sana</p>
                    <p className="font-medium text-gray-900 mt-1">{formatDate(selectedPayment.created_at)}</p>
                  </div>
                </div>
              </div>

              {/* Foydalanuvchi ma'lumotlari */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg sm:text-xl">
                    <User className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Foydalanuvchi</h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.email}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500">Telefon</p>
                    <p className="font-medium text-gray-900 mt-1">{selectedPayment.phone}</p>
                  </div>
                  {selectedPayment.address && (
                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <p className="text-xs sm:text-sm text-gray-500">Manzil</p>
                      <p className="font-medium text-gray-900 mt-1">{selectedPayment.address}</p>
                    </div>
                  )}
                  {selectedPayment.passport && (
                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <p className="text-xs sm:text-sm text-gray-500">Passport</p>
                      <p className="font-medium text-gray-900 mt-1">{selectedPayment.passport}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Courses section if available */}
            {selectedPayment.courses && selectedPayment.courses.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg sm:text-xl">
                    📚
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Kurslar</h4>
                </div>
                <div className="space-y-3">
                  {selectedPayment.courses.map((course, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-gray-900">{course.title}</h5>
                          <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                        </div>
                        <p className="text-blue-600 font-medium">{formatPrice(course.price)}</p>
                      </div>
                    </div>
                  ))}
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mt-3">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-gray-900">Jami:</p>
                      <p className="text-lg font-semibold text-blue-600">{formatPrice(calculateTotal(selectedPayment.courses))}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-image.jpg';
                        e.target.className = "object-contain w-full h-full opacity-50";
                      }}
                    />
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

            {/* Admin Comment Section */}
            {selectedPayment.status === 'pending' && (
              <div className="mt-6 sm:mt-8 bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-lg sm:text-xl">
                    ✉️
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Admin izohi</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="adminComment" className="block text-sm font-medium text-gray-700 mb-2">
                      To'lov haqida izoh
                    </label>
                    <textarea
                      id="adminComment"
                      rows="3"
                      className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none text-sm sm:text-base"
                      placeholder="To'lov haqida izoh yozing..."
                      value={adminComment}
                      onChange={(e) => setAdminComment(e.target.value)}
                    ></textarea>
                  </div>

                  {updateSuccess === true && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 rounded-r-lg">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <p className="ml-3 text-sm text-green-700">
                          To'lov holati muvaffaqiyatli yangilandi!
                        </p>
                      </div>
                    </div>
                  )}

                  {updateSuccess === false && (
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

            {/* Previous Admin Comment if exists */}
            {selectedPayment.admin_comment && (
              <div className="mt-6 sm:mt-8 bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-lg sm:text-xl">
                    💬
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Oldingi izoh</h4>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700">{selectedPayment.admin_comment}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {formatDate(selectedPayment.updated_at)}
                  </p>
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
                    onClick={() => handleStatusChange(selectedPayment.transaction_id, 'approved')}
                    disabled={sendingUpdate}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendingUpdate ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2"></div>
                    ) : (
                      <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                    )}
                    <span className="truncate">Tasdiqlash</span>
                  </button>

                  <button
                    onClick={() => handleStatusChange(selectedPayment.transaction_id, 'rejected')}
                    disabled={sendingUpdate}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendingUpdate ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2"></div>
                    ) : (
                      <X className="h-4 w-4 mr-2 flex-shrink-0" />
                    )}
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

  // Loading state
  if (loading && payments.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <X className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Xatolik yuz berdi</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={retryFetch}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Qayta urinish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Kurs To'lovlari</h1>
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

export default KursTolovlariHammasi;

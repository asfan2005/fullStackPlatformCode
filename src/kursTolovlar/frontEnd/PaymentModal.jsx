import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  CreditCard, 
  Calendar, 
  Lock, 
  Shield, 
  Check, 
  AlertCircle, 
  Download, 
  Printer,
  FileText,
  DollarSign,
  ChevronsRight,
  Info,
  Search,
  Plus,
  Minus,
  CheckCircle
} from 'lucide-react';
import html2canvas from 'html2canvas';

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  courseData, 
  selectedCourseType, 
  selectedPlan, 
  totalPrice,
  discountApplied,
  courseCategories
}) => {
  // State management
  const [step, setStep] = useState(1); // 1: Course selection, 2: Card info, 3: Processing, 4: Success, 5: Receipt
  const [formData, setFormData] = useState({
    cardNumber: '8600 0304 3617 5164',
    cardHolder: 'To\'raqulov Asfandiyor',
    expiryDate: '12/25',
    email: '',
    phone: '',
    address: '',
    passportNumber: '',
    additionalInfo: ''
  });
  const [errors, setErrors] = useState({});
  const [transactionId, setTransactionId] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const receiptRef = useRef(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [finalPrice, setFinalPrice] = useState(totalPrice);
  const [isSendingToAdmin, setIsSendingToAdmin] = useState(false);
  const [adminNotified, setAdminNotified] = useState(false);
  const [receiptImage, setReceiptImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // Initialize selected courses based on selected course type
  useEffect(() => {
    if (isOpen) {
      // Add one default course from the selected category
      const defaultCourse = courseData[selectedCourseType]?.find(course => course.popular) || 
                           courseData[selectedCourseType]?.[0];
      
      if (defaultCourse) {
        setSelectedCourses([{
          ...defaultCourse,
          categoryId: selectedCourseType,
          categoryName: courseCategories.find(cat => cat.id === selectedCourseType)?.name || selectedCourseType
        }]);
      }
      
      // Calculate initial price
      updateFinalPrice();
  }
  }, [isOpen, selectedCourseType, courseData]);

  // Update final price whenever selected courses change
  useEffect(() => {
    updateFinalPrice();
  }, [selectedCourses, customAmount, selectedPlan, discountApplied]);

  // Calculate final price based on selected courses
  const updateFinalPrice = () => {
    let price = 0;
    
    // Add up prices of selected courses
    selectedCourses.forEach(course => {
      if (!course.free) {
        price += course.price;
      }
    });
    
    // Add custom amount if provided
    if (customAmount && !isNaN(parseFloat(customAmount))) {
      price += parseFloat(customAmount);
    }
    
    // Apply yearly discount
    if (selectedPlan === 'yearly') {
      price = Math.round(price * 0.8);
    }
    
    // Apply promo code discount if applied
    if (discountApplied) {
      price = Math.round(price * 0.9);
    }
    
    setFinalPrice(price);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData({ ...formData, [name]: formatted.substring(0, 19) });
    } 
    // Format expiry date with slash
    else if (name === 'expiryDate') {
      let formatted = value.replace(/\D/g, '');
      if (formatted.length > 2) {
        formatted = formatted.substring(0, 2) + '/' + formatted.substring(2, 4);
      }
      setFormData({ ...formData, [name]: formatted });
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
  };

  // Format price for display
  const formatPrice = (price) => {
    return price.toLocaleString('en-US');
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = "Karta raqami to'liq emas";
    }
    
    if (!formData.cardHolder) {
      newErrors.cardHolder = "Karta egasi kiritilmagan";
    }
    
    if (!formData.expiryDate || formData.expiryDate.length < 5) {
      newErrors.expiryDate = "Amal qilish muddati noto'g'ri";
    }
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email manzil noto'g'ri";
    }
    
    if (!formData.phone || formData.phone.length < 9) {
      newErrors.phone = "Telefon raqami noto'g'ri";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add image upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5242880) { // 5MB limit
        setUploadError("Rasm hajmi 5MB dan oshmasligi kerak");
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        setUploadError("Faqat rasm fayllari qabul qilinadi");
        return;
      }

      try {
        // Create FormData object
        const formData = new FormData();
        formData.append('receipt', file);

        // Upload image to server
        const response = await fetch('https://api.infinity-school.uz/api/payment-modal/upload-receipt', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Rasmni yuklashda xatolik');
        }

        setReceiptImage(file);
        setUploadError('');
        
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);

        showToast('Rasm muvaffaqiyatli yuklandi', 'success');

      } catch (error) {
        console.error('Rasm yuklashda xatolik:', error);
        setUploadError('Rasmni yuklashda xatolik yuz berdi');
        showToast('Rasmni yuklashda xatolik yuz berdi', 'error');
      }
    }
  };

  // Send receipt to admin
  const sendReceiptToAdmin = async () => {
    try {
      setIsSendingToAdmin(true);
      
      // Create FormData for multipart/form-data
      const formDataObj = new FormData();
      
      // Add receipt image if exists
      if (receiptImage) {
        formDataObj.append('receipt', receiptImage);
      }

      // Prepare payment data with correct user information
      const paymentData = {
        fileName: receiptImage?.name || null,
        additionalAmount: customAmount ? parseFloat(customAmount) : 0,
        baseAmount: selectedCourses.reduce((sum, course) => sum + (course.free ? 0 : course.price), 0),
        finalAmount: finalPrice,
        subscriptionType: selectedPlan,
        discounts: {
          yearly: selectedPlan === 'yearly' ? '20%' : 'Yo\'q',
          promo: discountApplied ? '10%' : 'Yo\'q'
        },
        address: formData.address || '',
        email: formData.email,
        passport: formData.passportNumber || '',
        phone: formData.phone ? `+998${formData.phone}` : '',
        courses: selectedCourses.map(course => ({
          id: course.id,
          title: course.title,
          price: course.free ? 0 : course.price,
          category: course.categoryName
        }))
      };

      

      // Add payment data to FormData
      formDataObj.append('paymentData', JSON.stringify(paymentData));

      // Send data to backend
      const response = await fetch('https://api.infinity-school.uz/api/payment-modal/create', {
        method: 'POST',
        body: formDataObj
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'To\'lovni saqlashda xatolik');
      }

      setTransactionId(result.data.transaction_id);
      setAdminNotified(true);
      showToast('To\'lov muvaffaqiyatli saqlandi', 'success');

    } catch (error) {
      console.error('To\'lovni saqlashda xatolik:', error);
      showToast('To\'lovni saqlashda xatolik yuz berdi', 'error');
      setAdminNotified(false);
    } finally {
      setIsSendingToAdmin(false);
    }
  };

  // Handle payment processing
  const processPayment = async () => {
    if (validateForm()) {
      setStep(3); // Show processing state
      
      try {
        // Generate transaction ID and current date
        const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
        setTransactionId(`TX-${randomId}`);
        
        const now = new Date();
        setCurrentDate(now.toLocaleString('uz-UZ', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit' 
        }));

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Send receipt to admin
        await sendReceiptToAdmin();

        // Show success state
        setStep(4);
        
        // Show success toast
        showToast('To\'lov muvaffaqiyatli amalga oshirildi', 'success');

      } catch (error) {
        console.error('To\'lovda xatolik:', error);
        showToast('To\'lov jarayonida xatolik yuz berdi', 'error');
        setStep(2);
      }
    }
  };

  // View receipt
  const viewReceipt = () => {
    setStep(5);
  };

  // Download receipt as image
  const downloadReceipt = async () => {
    if (receiptRef.current) {
      try {
        // Add loading state
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
          downloadBtn.disabled = true;
          downloadBtn.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Yuklanmoqda...
          `;
        }

        // Set background color to white
        const originalBg = receiptRef.current.style.backgroundColor;
        receiptRef.current.style.backgroundColor = 'white';

        // Create high quality image
        const canvas = await html2canvas(receiptRef.current, {
          scale: 2, // Higher quality
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: receiptRef.current.scrollWidth,
          windowHeight: receiptRef.current.scrollHeight
        });

        // Restore original background
        receiptRef.current.style.backgroundColor = originalBg;

        // Convert to blob
        canvas.toBlob((blob) => {
          // Create download link
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `chek-${transactionId}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);

          // Reset button state
          if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = `
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Yuklab olish
            `;
          }
        }, 'image/png', 1.0);

      } catch (error) {
        console.error('Chekni yuklashda xatolik:', error);
        alert('Chekni yuklashda xatolik yuz berdi. Iltimos qayta urinib ko\'ring.');
        
        // Reset button state on error
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
          downloadBtn.disabled = false;
          downloadBtn.innerHTML = `
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Yuklab olish
          `;
        }
      }
    }
  };

  // Print receipt
  const printReceipt = () => {
    if (receiptRef.current) {
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>To\'lov cheki</title>');
      printWindow.document.write('<style>body { font-family: Arial, sans-serif; padding: 20px; }</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(receiptRef.current.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  // Get course category icon
  const getCategoryIcon = (categoryId) => {
    const category = courseCategories.find(cat => cat.id === categoryId);
    const IconComponent = category ? category.icon : CreditCard;
    return <IconComponent size={20} className="text-green-600" />;
  };

  // Add course to selected courses
  const addCourse = (course, categoryId) => {
    const categoryName = courseCategories.find(cat => cat.id === categoryId)?.name || categoryId;
    
    // Check if course is already selected
    if (!selectedCourses.some(c => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, {
        ...course,
        categoryId,
        categoryName
      }]);
    }
  };

  // Remove course from selected courses
  const removeCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== courseId));
  };

  // Filter courses based on search term
  const getFilteredCourses = () => {
    if (!searchTerm.trim()) return [];
    
    const results = [];
    
    // Search in all categories
    Object.keys(courseData).forEach(categoryId => {
      const matchingCourses = courseData[categoryId].filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      matchingCourses.forEach(course => {
        results.push({
          ...course,
          categoryId,
          categoryName: courseCategories.find(cat => cat.id === categoryId)?.name || categoryId
        });
      });
    });
    
    return results;
  };

  // Show toast notification
  const showToast = (message, type = 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 5000);
  };

  // Handle course navigation after payment
  const handleNavigateToCourses = () => {
    // Input ma'lumotlarini tozalash
    setFormData({
      cardNumber: '8600 0304 3617 5164',
      cardHolder: 'To\'raqulov Asfandiyor',
      expiryDate: '12/25',
      email: '',
      phone: '',
      address: '',
      passportNumber: '',
      additionalInfo: ''
    });
    
    // Boshqa ma'lumotlarni tozalash
    setSelectedCourses([]);
    setSearchTerm('');
    setCustomAmount('');
    setReceiptImage(null);
    setImagePreview('');
    setUploadError('');
    setTransactionId('');
    setCurrentDate('');
    
    // Modalni yopish
    onClose();
    
    // Sahifani yangilash
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto" style={{ marginTop: '100px' }}>
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
          <h3 className="text-lg font-semibold text-gray-800">
            {step === 1 && "Kurslarni tanlash"}
            {step === 2 && "To'lov ma'lumotlari"}
            {step === 3 && "To'lov amalga oshirilmoqda"}
            {step === 4 && "To'lov muvaffaqiyatli amalga oshirildi"}
            {step === 5 && "To'lov cheki"}
          </h3>
          <button 
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full"
            onClick={onClose}
            disabled={step === 3}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          {/* Step 1: Course Selection */}
          {step === 1 && (
            <>
              <div className="mb-6">
                <h4 className="text-base font-medium text-gray-800 mb-4">Kurslarni tanlang</h4>
                
                {/* Search courses */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Kurs nomini qidiring..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
                </div>
                
                {/* Search results */}
                {searchTerm.trim() !== '' && (
                  <div className="mb-6 max-h-60 overflow-y-auto border border-gray-200 rounded-lg">
                    {getFilteredCourses().length > 0 ? (
                      getFilteredCourses().map(course => (
                        <div 
                          key={`search-${course.id}`}
                          className="p-3 border-b border-gray-200 hover:bg-gray-50 flex justify-between items-center"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-800">{course.title}</span>
                              {course.popular && (
                                <span className="bg-orange-100 text-orange-700 text-xs px-1.5 py-0.5 rounded">Mashhur</span>
                              )}
                              {course.free && (
                                <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded">Tekin</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {course.categoryName} • {course.duration}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium ${course.free ? 'text-blue-600' : 'text-green-600'}`}>
                              {course.free ? 'Tekin' : `${formatPrice(course.price)} so'm`}
                            </span>
                            <button
                              className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                              onClick={() => addCourse(course, course.categoryId)}
                              disabled={selectedCourses.some(c => c.id === course.id)}
                            >
                              {selectedCourses.some(c => c.id === course.id) ? (
                                <CheckCircle size={18} />
                              ) : (
                                <Plus size={18} />
                              )}
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        Kurslar topilmadi
                      </div>
                    )}
                  </div>
                )}
                
                {/* Selected courses */}
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Tanlangan kurslar</h5>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {selectedCourses.length > 0 ? (
                      <>
                        {selectedCourses.map(course => (
                          <div 
                            key={`selected-${course.id}`}
                            className="p-3 border-b border-gray-200 hover:bg-gray-50 flex justify-between items-center"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-800">{course.title}</span>
                                {course.popular && (
                                  <span className="bg-orange-100 text-orange-700 text-xs px-1.5 py-0.5 rounded">Mashhur</span>
                                )}
                                {course.free && (
                                  <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded">Tekin</span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                {course.categoryName} • {course.duration}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium ${course.free ? 'text-blue-600' : 'text-green-600'}`}>
                                {course.free ? 'Tekin' : `${formatPrice(course.price)} so'm`}
                              </span>
                              <button
                                className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                                onClick={() => removeCourse(course.id)}
                              >
                                <Minus size={18} />
                              </button>
                            </div>
                          </div>
                        ))}
                        
                        {/* Custom amount input */}
                        <div className="p-3 border-b border-gray-200 bg-gray-50">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-sm font-medium text-gray-800">Qo'shimcha to'lov</span>
                              <p className="text-xs text-gray-500 mt-1">
                                Ixtiyoriy qo'shimcha to'lov
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="relative">
                                <input
                                  type="text"
                                  className="w-32 border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-right"
                                  placeholder="0"
                                  value={customAmount}
                                  onChange={handleCustomAmountChange}
                                />
                                <span className="absolute right-3 top-1.5 text-sm text-gray-500">so'm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="p-3 bg-green-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">Jami summa:</span>
                            <span className="font-bold text-green-600 text-lg">
                              {formatPrice(finalPrice)} so'm
                            </span>
                          </div>
                          {(selectedPlan === 'yearly' || discountApplied) && (
                            <div className="flex justify-between text-sm mt-1">
                              <span className="text-gray-600">Chegirmalar:</span>
                              <span className="text-green-600">
                                {selectedPlan === 'yearly' ? '20% yillik obuna' : ''} 
                                {selectedPlan === 'yearly' && discountApplied ? ', ' : ''}
                                {discountApplied ? '10% promo kod' : ''}
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        Hech qanday kurs tanlanmagan
                      </div>
                    )}
                  </div>
                </div>
                
                <button 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={() => setStep(2)}
                  disabled={selectedCourses.length === 0}
                >
                  <ChevronsRight size={18} />
                  Davom etish
                </button>
              </div>
            </>
          )}
          
          {/* Step 2: Payment Form */}
          {step === 2 && (
            <>
              {/* Selected course info */}
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="text-base font-medium text-gray-800 mb-2">Tanlangan kurslar:</h4>
                
                <div className="max-h-40 overflow-y-auto mb-3">
                  {selectedCourses.map(course => (
                    <div key={`summary-${course.id}`} className="flex justify-between items-center py-1 border-b border-green-100 last:border-0">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(course.categoryId)}
                        <span className="text-sm">{course.title}</span>
                      </div>
                      <span className={`text-sm font-medium ${course.free ? 'text-blue-600' : 'text-green-600'}`}>
                        {course.free ? 'Tekin' : `${formatPrice(course.price)} so'm`}
                      </span>
                    </div>
                  ))}
                  
                  {customAmount && parseFloat(customAmount) > 0 && (
                    <div className="flex justify-between items-center py-1 border-b border-green-100">
                      <span className="text-sm">Qo'shimcha to'lov</span>
                      <span className="text-sm font-medium text-green-600">
                        {formatPrice(parseFloat(customAmount))} so'm
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gray-500" />
                    <span>To'lov turi: {selectedPlan === 'monthly' ? 'Oylik' : 'Yillik'} {discountApplied ? '(Chegirma bilan)' : ''}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-green-200 flex justify-between items-center">
                  <span className="text-gray-700">Jami summa:</span>
                  <span className="font-bold text-green-600 text-lg">{formatPrice(finalPrice)} so'm</span>
                </div>
              </div>

              {/* Card details form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Karta raqami</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      placeholder="8600 0000 0000 0000"
                      maxLength="19"
                    />
                    <CreditCard size={18} className="absolute left-3 top-2.5 text-gray-500" />
                  </div>
                  {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amal qilish muddati</label>
                    <input 
                      type="text" 
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Karta egasi</label>
                    <input 
                      type="text" 
                      name="cardHolder"
                      value={formData.cardHolder}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.cardHolder ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      placeholder="Ism Familiya"
                    />
                    {errors.cardHolder && <p className="text-red-500 text-xs mt-1">{errors.cardHolder}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="example@mail.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon raqami</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">+998</span>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 pl-14 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      placeholder="901234567"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Manzil</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Viloyat, tuman, ko'cha"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passport raqami</label>
                  <input 
                    type="text" 
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="AA1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">To'lov cheki rasmi</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      {!imagePreview ? (
                        <>
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="receipt-image" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                              <span>Rasm yuklash</span>
                              <input 
                                id="receipt-image" 
                                name="receipt-image" 
                                type="file" 
                                className="sr-only"
                                accept="image/*"
                                onChange={handleImageUpload}
                              />
                            </label>
                            <p className="pl-1">yoki sudrab tashlang</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF 5MB gacha</p>
                        </>
                      ) : (
                        <div className="relative">
                          <img src={imagePreview} alt="Receipt preview" className="max-h-48 rounded-lg" />
                          <button
                            type="button"
                            className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-100 rounded-full p-1 text-red-600 hover:bg-red-200"
                            onClick={() => {
                              setReceiptImage(null);
                              setImagePreview('');
                            }}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {uploadError && (
                    <p className="mt-1 text-sm text-red-500">{uploadError}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 my-6">
                <Shield size={18} className="text-green-600" />
                <p className="text-sm text-gray-600">To'lov ma'lumotlaringiz xavfsiz shifrlangan va himoyalangan</p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setStep(1)}
                >
                  Orqaga
                </button>
                
                <button 
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={processPayment}
                >
                  <Lock size={18} />
                  To'lovni amalga oshirish
                </button>
              </div>
            </>
          )}
          
          {/* Step 3: Processing */}
          {step === 3 && (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-t-green-500 border-green-200 rounded-full animate-spin mb-6"></div>
              <p className="text-gray-700 font-medium text-lg">To'lov amalga oshirilmoqda...</p>
              <p className="text-gray-500 text-sm mt-2">Iltimos, sahifani yopmasdan kuting</p>
            </div>
          )}
          
          {/* Step 4: Success */}
          {step === 4 && (
            <div className="py-8 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check size={36} className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-green-600 mb-3">To'lov muvaffaqiyatli amalga oshirildi!</h4>
              <p className="text-gray-600 text-center mb-2">Tabriklaymiz! Siz kurslarga kirish imkoniyatiga ega bo'ldingiz.</p>
              <p className="text-gray-500 text-sm text-center">To'lov ID: {transactionId}</p>
              
              {/* Add admin notification status */}
              <div className="mt-4 text-sm">
                {isSendingToAdmin ? (
                  <p className="text-gray-600 flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></span>
                    Adminga ma'lumot yuborilmoqda...
                  </p>
                ) : adminNotified ? (
                  <p className="text-green-600 flex items-center gap-2">
                    <Check size={16} />
                    Admin to'lov haqida xabardor qilindi
                  </p>
                ) : (
                  <p className="text-yellow-600 flex items-center gap-2">
                    <AlertCircle size={16} />
                    Adminga yuborishda xatolik
                  </p>
                )}
              </div>
              
              <div className="flex flex-col w-full mt-8 gap-3">
                <button 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-200"
                  onClick={viewReceipt}
                >
                  To'lov chekini ko'rish
                </button>
              </div>
            </div>
          )}
          
          {/* Step 5: Receipt */}
          {step === 5 && (
            <div>
              <div 
                className="bg-white rounded-lg border border-gray-200 p-6 mb-6"
                ref={receiptRef}
              >
                {/* Chek sarlavhasi */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">To'lov cheki</h2>
                    <p className="text-sm text-gray-500">EducationUz.com</p>
                    <p className="text-xs text-gray-400 mt-1">{currentDate}</p>
                  </div>
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Check size={32} className="text-green-600" />
                  </div>
                </div>
                
                {/* Tranzaksiya ma'lumotlari */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Tranzaksiya raqami:</p>
                      <p className="font-medium text-gray-800">{transactionId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">To'lov sanasi:</p>
                      <p className="font-medium text-gray-800">{currentDate}</p>
                    </div>
                  </div>
                </div>

                {/* To'lov ma'lumotlari */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">To'lov ma'lumotlari</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Karta raqami:</p>
                      <p className="font-medium">**** **** **** {formData.cardNumber.slice(-4)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Karta egasi:</p>
                      <p className="font-medium">{formData.cardHolder}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Amal qilish muddati:</p>
                      <p className="font-medium">{formData.expiryDate}</p>
                    </div>
                  </div>
                </div>

                {/* Sotib olingan kurslar */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">
                    Sotib olingan kurslar ({selectedCourses.length} ta)
                  </h3>
                  <div className="space-y-3">
                    {selectedCourses.map(course => (
                      <div key={`receipt-${course.id}`} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">{getCategoryIcon(course.categoryId)}</div>
                            <div>
                              <p className="font-medium text-gray-800">{course.title}</p>
                              <p className="text-sm text-gray-500 mt-1">{course.categoryName}</p>
                              {course.duration && (
                                <p className="text-xs text-gray-500 mt-0.5">Davomiyligi: {course.duration}</p>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${course.free ? 'text-blue-600' : 'text-green-600'}`}>
                              {course.free ? 'Tekin' : `${formatPrice(course.price)} so'm`}
                            </p>
                            {course.popular && (
                              <span className="inline-block mt-1 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                                Mashhur kurs
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chegirmalar */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Chegirmalar</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {selectedPlan === 'yearly' && (
                      <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200">
                        <div>
                          <p className="text-sm font-medium text-gray-800">Yillik obuna</p>
                          <p className="text-xs text-gray-500 mt-0.5">12 oylik to'lov uchun chegirma</p>
                        </div>
                        <p className="font-medium text-green-600">-20%</p>
                      </div>
                    )}
                    {discountApplied && (
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-800">Promo kod</p>
                          <p className="text-xs text-gray-500 mt-0.5">Maxsus chegirma</p>
                        </div>
                        <p className="font-medium text-green-600">-10%</p>
                      </div>
                    )}
                    {!selectedPlan === 'yearly' && !discountApplied && (
                      <p className="text-sm text-gray-500">Chegirmalar mavjud emas</p>
                    )}
                  </div>
                </div>

                {/* Mijoz ma'lumotlari */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Mijoz ma'lumotlari</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Email manzili:</p>
                        <p className="font-medium text-gray-800">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefon raqami:</p>
                        <p className="font-medium text-gray-800">+998 {formData.phone}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Manzil:</p>
                        <p className="font-medium text-gray-800">{formData.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Passport:</p>
                        <p className="font-medium text-gray-800">{formData.passportNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jami summa */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-gray-800">To'lov tafsilotlari</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedCourses.length} ta kurs
                        {customAmount && parseFloat(customAmount) > 0 ? ' + qo\'shimcha to\'lov' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{formatPrice(finalPrice)} so'm</p>
                      {(selectedPlan === 'yearly' || discountApplied) && (
                        <p className="text-sm text-green-600 mt-1">Chegirma bilan</p>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-green-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-600">Asosiy summa:</p>
                      <p className="font-medium">
                        {formatPrice(selectedCourses.reduce((sum, course) => sum + (course.free ? 0 : course.price), 0))} so'm
                      </p>
                    </div>
                    {customAmount && parseFloat(customAmount) > 0 && (
                      <div className="flex justify-between text-sm">
                        <p className="text-gray-600">Qo'shimcha to'lov:</p>
                        <p className="font-medium">{formatPrice(parseFloat(customAmount))} so'm</p>
                      </div>
                    )}
                    {selectedPlan === 'yearly' && (
                      <div className="flex justify-between text-sm text-green-600">
                        <p>Yillik chegirma (20%):</p>
                        <p className="font-medium">
                          -{formatPrice(selectedCourses.reduce((sum, course) => sum + (course.free ? 0 : course.price), 0) * 0.2)} so'm
                        </p>
                      </div>
                    )}
                    {discountApplied && (
                      <div className="flex justify-between text-sm text-green-600">
                        <p>Promo kod chegirmasi (10%):</p>
                        <p className="font-medium">
                          -{formatPrice(selectedCourses.reduce((sum, course) => sum + (course.free ? 0 : course.price), 0) * 0.1)} so'm
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3">
                <button 
                  id="downloadBtn"
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={downloadReceipt}
                >
                  <Download size={18} />
                  Yuklab olish
                </button>
                
                <button 
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={printReceipt}
                >
                  <Printer size={18} />
                  Chop etish
                </button>
              </div>
              
              <button 
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mt-6 hover:bg-green-700 transition-colors duration-200"
                onClick={handleNavigateToCourses}
              >
                Kurslarga o'tish
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          toast.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          <div className="flex items-center gap-2">
            {toast.type === 'error' ? <AlertCircle size={20} /> : <Check size={20} />}
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
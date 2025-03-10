import React, { useState, useEffect } from 'react';
import Header from "../components/header/Header"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// Modal komponenti 
const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                        <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        To'lov muvaffaqiyatli!
                    </h3>

                    {/* Message */}
                    <p className="text-gray-500 mb-6">
                        Sizning akkauntingiz tez orada faollashtiriladi. 
                        Biroz kutib turing...
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-xl hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                    >
                        Yopish
                    </button>
                </div>
            </div>
        </div>
    );
};

// SubscriptionStatus komponenti o'rniga yangi funksiya
const SubscriptionInfo = ({ subscription }) => {
    const [timeLeft, setTimeLeft] = useState('');
    const [progress, setProgress] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const updateTimeLeft = () => {
            if (!subscription?.end_date) return;

            const end = new Date(subscription.end_date);
            const now = new Date();
            const start = new Date(subscription.start_date);
            const total = end - start;
            const elapsed = end - now;
            
            const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
            const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            setDaysLeft(days);
            const progressValue = ((total - elapsed) / total) * 100;
            setProgress(Math.max(0, Math.min(100, progressValue)));

            if (elapsed <= 0) {
                setTimeLeft('Obuna tugagan');
                return;
            }

            setTimeLeft(`${days} kun ${hours} soat qoldi`);
        };

        updateTimeLeft();
        const timer = setInterval(updateTimeLeft, 1000 * 60);
        return () => clearInterval(timer);
    }, [subscription]);

    if (!subscription) return null;

    return (
        <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 mb-8">
            <div className="w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Joriy obuna holati</span>
                    </h3>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                        subscription.status === 'active' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                        {subscription.status === 'active' ? 'Faol' : 'Faol emas'}
                    </span>
                </div>
            </div>

            <div className="p-6">
                {/* Obuna ma'lumotlari */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="text-sm text-gray-500 mb-1">Tarif</div>
                        <div className="font-medium text-gray-900">{subscription.plan_name}</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="text-sm text-gray-500 mb-1">Narx</div>
                        <div className="font-medium text-gray-900">{subscription.plan_price}</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="text-sm text-gray-500 mb-1">Boshlanish sanasi</div>
                        <div className="font-medium text-gray-900">
                            {new Date(subscription.start_date).toLocaleDateString('uz-UZ')}
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="text-sm text-gray-500 mb-1">Tugash sanasi</div>
                        <div className="font-medium text-gray-900">
                            {new Date(subscription.end_date).toLocaleDateString('uz-UZ')}
                        </div>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-3">
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                                progress > 80 ? 'bg-red-500' : 
                                progress > 50 ? 'bg-yellow-500' : 
                                'bg-green-500'
                            }`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className={`font-medium ${
                            daysLeft <= 5 ? 'text-red-600' : 
                            daysLeft <= 10 ? 'text-yellow-600' : 
                            'text-green-600'
                        }`}>
                            {timeLeft}
                        </div>
                        <div className="text-gray-500">
                            {Math.round(progress)}% ishlatilgan
                        </div>
                    </div>
                </div>

                {/* Ogohlantirish */}
                {daysLeft <= 5 && daysLeft > 0 && (
                    <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <h4 className="text-sm font-medium text-yellow-800">
                                    Obuna muddati tugayapti
                                </h4>
                                <p className="mt-1 text-sm text-yellow-700">
                                    Obuna muddati tugashiga {daysLeft} kun qoldi. Iltimos, yangi to'lovni amalga oshiring.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Notification komponenti
const Notification = ({ type, title, message, onClose }) => {
  return (
    <div className={`fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border-l-4 ${
      type === 'success' ? 'border-green-500' :
      type === 'warning' ? 'border-yellow-500' :
      'border-red-500'
    } p-4 transform transition-all duration-500 z-50`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : type === 'warning' ? (
            <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onClose}
            className="inline-flex text-gray-400 hover:text-gray-500"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

function PaymentPage({ plan, onClose }) {
    const [formData, setFormData] = useState({
        fullName: "",
        telegramUsername: "",
        phoneNumber: "",
        cardNumber: "8600 0304 3617 5164",
        cardOwner: "To'raqulov Asfandiyor",
        expiryDate: "",
        cvv: "",
        image: null,
        planName: plan?.name || "Premium",
        planPrice: plan?.price?.monthly || "50,000 so'm",
        paymentDate: new Date().toISOString(),
        status: "pending"
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    
        checkPaymentStatus();
    }, []);

   

    const checkPaymentStatus = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/payments/all');
            
            if (response.data.success && response.data.payments.length > 0) {
                // Eng oxirgi to'lovni olish
                const latestPayment = response.data.payments[0];
                
                if (latestPayment.status === 'completed') {
                    // To'lov tasdiqlangan bo'lsa
                    setPaymentStatus('completed');
                    
                    // Obuna ma'lumotlarini yangilash
                    setSubscription({
                        status: 'active',
                        plan_name: latestPayment.plan_name,
                        plan_price: latestPayment.plan_price,
                        start_date: latestPayment.updated_at,
                        end_date: calculateEndDate(latestPayment.updated_at),
                        user: {
                            full_name: latestPayment.full_name,
                            phone_number: latestPayment.phone_number,
                            telegram_username: latestPayment.telegram_username
                        }
                    });

                    // Muvaffaqiyatli to'lov xabari
                    showNotification({
                        type: 'success',
                        title: 'To\'lov tasdiqlandi',
                        message: `${latestPayment.plan_name} tarifi uchun to'lovingiz tasdiqlandi. Xizmatdan foydalanishingiz mumkin.`
                    });
                }
            }
        } catch (error) {
            console.error('To\'lov holatini tekshirishda xatolik:', error);
        }
    };

    // Obuna tugash sanasini hisoblash
    const calculateEndDate = (startDate) => {
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 30); // 30 kun qo'shish
        return endDate.toISOString();
    };

    const showNotification = (notification) => {
        const id = Date.now();
        setNotifications(prev => [...prev, { ...notification, id }]);
        
        // 5 sekunddan keyin notification ni o'chirish
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 5000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            const formattedValue = value
                .replace(/\s/g, '')
                .match(/.{1,4}/g)?.join(' ') || '';

            setFormData({
                ...formData,
                [name]: formattedValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Fayl hajmini tekshirish (2MB dan katta bo'lmasligi kerak)
            if (file.size > 2 * 1024 * 1024) {
                alert("Fayl hajmi 2MB dan katta bo'lmasligi kerak!");
                return;
            }
            
            // Fayl turini tekshirish
            if (!file.type.match('image.*')) {
                alert("Faqat rasm fayllarini yuklash mumkin!");
                return;
            }
            
            setFormData({
                ...formData,
                image: file
            });
            
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            
            console.log("Rasm yuklandi:", file.name, "hajmi:", (file.size / 1024).toFixed(2) + "KB");
        }
    };

    // Form ni tozalash uchun funksiya
    const resetForm = () => {
        setFormData({
            fullName: "",
            telegramUsername: "",
            phoneNumber: "",
            cardNumber: "8600 0304 3617 5164",
            cardOwner: "To'raqulov Asfandiyor",
            expiryDate: "",
            cvv: "",
            image: null,
            planName: plan?.name || "Premium",
            planPrice: plan?.price?.monthly || "50,000 so'm",
            paymentDate: new Date().toISOString(),
            status: "pending"
        });
        setPreviewImage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // To'lov ma'lumotlarini tayyorlash
            const newTransactionId = Math.random().toString(36).substr(2, 9);
            
            const formDataToSend = new FormData();
            
            if (formData.image) {
                formDataToSend.append('receipt', formData.image);
            }
            
            formDataToSend.append('transactionId', newTransactionId);
            formDataToSend.append('timestamp', new Date().toISOString());
            formDataToSend.append('status', 'pending');
            
            const paymentDataObj = {
                fullName: formData.fullName,
                telegramUsername: formData.telegramUsername,
                phoneNumber: formData.phoneNumber,
                cardNumber: formData.cardNumber,
                cardOwner: formData.cardOwner,
                planName: formData.planName,
                planPrice: formData.planPrice,
                paymentDate: new Date().toISOString()
            };
            
            formDataToSend.append('paymentData', JSON.stringify(paymentDataObj));
            
            const response = await axios.post(
                'http://localhost:3000/api/payments/with-receipt',
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            
            if (response.data.success) {
                setShowSuccessModal(true);
                resetForm();
                // To'lovdan keyin statusni tekshirish
                await checkPaymentStatus();
            }
            
        } catch (error) {
            console.error("TO'LOV XATOSI:", error);
            let errorMessage = "To'lov jarayonida xatolik yuz berdi.";
            
            if (error.response) {
                errorMessage = error.response.data.message || errorMessage;
            } else if (error.request) {
                errorMessage = "Server bilan bog'lanishda xatolik yuz berdi.";
            }
            
            showNotification({
                type: 'error',
                title: 'Xatolik',
                message: errorMessage
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Orqaga qaytish funksiyasi
    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
            <Header />
            
            {/* Orqaga qaytish tugmasini qo'shamiz */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6">
                <button
                    onClick={handleGoBack}
                    className="group flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-indigo-300"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        <svg 
                            className="w-8 h-8 p-1.5 text-gray-600 group-hover:text-indigo-600 relative transition-colors duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-indigo-600 font-medium transition-colors duration-200">
                        Orqaga qaytish
                    </span>
                </button>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
                {/* Subscription Status */}
                {subscription && <SubscriptionInfo subscription={subscription} />}

                {/* Main Container */}
                <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                    {/* Header Section */}
                    <div className="w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-6 sm:p-10">
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-6">
                                {/* Logo Container */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 p-4 sm:p-5 rounded-2xl backdrop-blur-xl shadow-xl border border-white/30 transform hover:rotate-3 transition-all duration-300 relative">
                                        <svg className="w-full h-full text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>  
                                </div>

                                {/* Title and Plan Info */}
                                <div className="space-y-3">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                                        To'lov sahifasi
                                    </h2>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                                        {/* Premium Badge */}
                                        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 2a1 1 0 00-.894.553L7.382 6H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V8a1 1 0 100-2h-3.382l-1.724-3.447A1 1 0 0010 2zm0 2.618L11.724 8H8.276L10 4.618z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-white font-medium text-lg">Premium</span>
                                        </div>

                                        {/* Price Badge */}
                                        <div className="flex items-center space-x-2 bg-indigo-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm border border-indigo-400/30 shadow-lg">
                                            <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-white/90 font-medium">{formData.planPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Close Button */}
                            {/* <button
                                onClick={onClose}
                                className="group relative w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button> */}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full p-6 sm:p-10">
                        <div className="w-full max-w-5xl mx-auto space-y-8">
                            {/* Obuna holati */}
                            {subscription && (
                                <SubscriptionInfo subscription={subscription} />
                            )}

                            {/* Payment Info Card */}
                            <div className="w-full bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 p-6 sm:p-8 rounded-2xl border border-indigo-100/50 shadow-xl">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center space-x-3">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        <span>To'lov ma'lumotlari</span>
                                    </h3>
                                    <div className="flex items-center space-x-2 text-sm text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full shadow-lg mt-2 sm:mt-0 border border-emerald-100">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span className="font-medium">Xavfsiz to'lov</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white/50 p-4 rounded-xl border border-indigo-100/30 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Plastik egasi:</span>
                                            <span className="font-medium text-indigo-700">{formData.cardOwner}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-xl border border-indigo-100/30 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Plastik raqami:</span>
                                            <span className="font-medium text-indigo-700">{formData.cardNumber}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-xl border border-indigo-100/30 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Tarif:</span>
                                            <span className="font-medium text-indigo-700">{formData.planName}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-xl border border-indigo-100/30 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Narx:</span>
                                            <span className="font-medium text-indigo-700">{formData.planPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                                    <p className="text-amber-700 text-sm flex items-center">
                                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Iltimos, to'lovni faqat ko'rsatilgan plastik raqamiga amalga oshiring</span>
                                    </p>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* User Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name Input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span>To'lovchi to'liq ismi</span>
                                        </label>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Ismingizni kiriting"
                                                className="w-full pl-12 pr-4 py-3.5 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-sm group-hover:shadow-md"
                                                required
                                            />
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Telegram Username Input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            <span>Telegram username</span>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <span className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300">@</span>
                                            </div>
                                            <input
                                                type="text"
                                                name="telegramUsername"
                                                value={formData.telegramUsername}
                                                onChange={handleChange}
                                                placeholder="username"
                                                className="w-full pl-8 pr-12 py-3.5 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-sm group-hover:shadow-md"
                                                required
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Number Input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span>Telefon raqami</span>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <span className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300">+998</span>
                                            </div>
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder="XX XXX XX XX"
                                                className="w-full pl-20 pr-12 py-3.5 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-sm group-hover:shadow-md"
                                                required
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Receipt Upload */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                        <span>To'lov cheki</span>
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl bg-white/70 backdrop-blur-sm group hover:border-indigo-500 transition-colors duration-300">
                                        <div className="space-y-2 text-center">
                                            {previewImage ? (
                                                <div className="relative inline-block">
                                                    <img
                                                        src={previewImage}
                                                        alt="Receipt"
                                                        className="max-h-48 rounded-lg shadow-lg"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setPreviewImage(null);
                                                            setFormData({ ...formData, image: null });
                                                        }}
                                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:bg-red-600 transition-colors duration-300"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span>Chekni yuklang</span>
                                                            <input
                                                                type="file"
                                                                className="sr-only"
                                                                accept="image/*"
                                                                onChange={handleImageUpload}
                                                            />
                                                        </label>
                                                        <p className="pl-1">yoki bu yerga tashlang</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (max. 2MB)</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="w-full sm:w-1/3 py-3.5 px-4 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                                    >
                                        Bekor qilish
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-2/3 py-3.5 px-4 border border-transparent rounded-xl text-white font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center space-x-3">
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>To'lov amalga oshirilmoqda...</span>
                                            </div>
                                        ) : (
                                            "To'lovni tasdiqlash"
                                        )}
                                    </button>
                                </div>
                            </form>

                            {/* Payment Methods */}
                            <div className="pt-8 border-t border-gray-200">
                                <h4 className="text-lg font-medium text-gray-800 mb-6 flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <span>Qabul qilinadigan to'lov turlari</span>
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                                    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                        <img
                                            src="https://logos-download.com/wp-content/uploads/2022/01/Uzcard_Logo_white_text-643x700.png"
                                            alt="Uzcard"
                                            className="h-8 sm:h-10 object-contain mx-auto"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://logobank.uz:8005/media/logos_png/Uzcard-01.png";
                                            }}
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                        <img
                                            src="https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png"
                                            alt="Humo"
                                            className="h-8 sm:h-10 object-contain mx-auto"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://logobank.uz:8005/media/logos_png/Humo-01.png";
                                            }}
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                        <img
                                            src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
                                            alt="Visa"
                                            className="h-8 sm:h-10 object-contain mx-auto"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png";
                                            }}
                                        />
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                                            alt="Mastercard"
                                            className="h-8 sm:h-10 object-contain mx-auto"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Success Modal */}
            <SuccessModal 
                isOpen={showSuccessModal} 
                onClose={() => {
                    setShowSuccessModal(false);
                    if (onClose) onClose();
                }} 
            />

            {/* Notifications */}
            <div className="fixed bottom-4 right-4 space-y-4 z-50">
                {notifications.map(notification => (
                    <Notification
                        key={notification.id}
                        {...notification}
                        onClose={() => setNotifications(prev => 
                            prev.filter(n => n.id !== notification.id)
                        )}
                    />
                ))}
            </div>
        </div>
    );
}

export default PaymentPage;
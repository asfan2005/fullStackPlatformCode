import React, { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// Success Modal component
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

// Form validation function
const validateForm = (formData) => {
    // Check if required fields are filled
    if (!formData.fullName.trim()) {
        return { isValid: false, message: "Iltimos, to'liq ismingizni kiriting" };
    }
    
    // Validate Telegram username
    const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/;
    if (!telegramRegex.test(formData.telegramUsername.replace('@', ''))) {
        return { isValid: false, message: "Telegram username noto'g'ri formatda" };
    }
    
    // Validate phone number
    if (!formData.phoneNumber || formData.phoneNumber.replace('+998', '').length !== 9) {
        return { isValid: false, message: "Telefon raqami noto'g'ri formatda" };
    }
    
    // Validate course details
    if (!formData.courseStartDate) {
        return { isValid: false, message: "Kurs boshlanish sanasini tanlang" };
    }
    
    if (!formData.courseTimeSlot) {
        return { isValid: false, message: "Kurs vaqtini tanlang" };
    }
    
    if (!formData.courseDays) {
        return { isValid: false, message: "Kurs kunlarini tanlang" };
    }
    
    return { isValid: true };
};

// Live Stream Info component
const LiveStreamInfo = () => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 shadow-sm">
        <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </div>
            <div>
                <h3 className="text-sm font-medium text-blue-800">Live stream orqali darslar</h3>
                <p className="mt-1 text-xs text-blue-600">
                    Barcha darslar Zoom platformasi orqali jonli efirda o'tiladi. Darslarni telefoningiz yoki kompyuteringizdan kuzatishingiz mumkin.
                </p>
            </div>
        </div>
    </div>
);

// Lesson Types component
const LessonTypes = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 shadow-sm">
            <h4 className="text-sm font-medium text-green-800 flex items-center">
                <svg className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nazariy darslar
            </h4>
            <p className="mt-1 text-xs text-green-600">
                Har bir mavzu bo'yicha chuqur nazariy bilimlar beriladi
            </p>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-xl p-4 border border-purple-100 shadow-sm">
            <h4 className="text-sm font-medium text-purple-800 flex items-center">
                <svg className="h-4 w-4 mr-1 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Amaliy mashg'ulotlar
            </h4>
            <p className="mt-1 text-xs text-purple-600">
                Har bir mavzu bo'yicha amaliy mashg'ulotlar o'tkaziladi
            </p>
        </div>
    </div>
);

// Calculate end date function
const calculateEndDate = (startDate) => {
    if (!startDate) return null;
    const date = new Date(startDate);
    date.setDate(date.getDate() + 30); // 30-day subscription
    return date.toISOString();
};

// Notification component
const Notification = ({ type, title, message }) => {
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
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{message}</p>
                </div>
            </div>
        </div>
    );
};

// SubscriptionInfo component
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

function PaymentPage1({ plan, onClose }) {
    const [formData, setFormData] = useState({
        fullName: "",
        telegramUsername: "",
        phoneNumber: "",
        cardNumber: "8600 0304 3617 5164",
        cardOwner: "To'raqulov Asfandiyor",
        expiryDate: "",
        cvv: "",
        image: null,
        planName: plan?.name || "Online kurslar",
        planPrice: plan?.price?.monthly || "300,000 so'm",
        paymentDate: new Date().toISOString(),
        status: "pending",
        courseStartDate: "",
        courseTimeSlot: "",
        courseDays: ""
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [notification, setNotification] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [userPayments, setUserPayments] = useState([]);
    const [currentUserPhone, setCurrentUserPhone] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    
    const navigate = useNavigate();

    // Time slots for course
    const timeSlots = [
        "09:00 - 11:00",
        "11:00 - 13:00",
        "14:00 - 16:00",
        "16:00 - 18:00",
        "18:00 - 20:00"
    ];

    // Days for course
    const courseDaysOptions = [
        { id: "dush_chor_juma", label: "Dushanba/Chorshanba/Juma", value: "Dushanba/Chorshanba/Juma" },
        { id: "sesh_pay_shanba", label: "Seshanba/Payshanba/Shanba", value: "Seshanba/Payshanba/Shanba" }
    ];

    // Check payment status when phone number changes
    useEffect(() => {
        if (formData.phoneNumber) {
            checkPaymentStatus();
        }
    }, [formData.phoneNumber]);

    // Check payment status periodically
    useEffect(() => {
        const checkInterval = setInterval(() => {
            if (formData.phoneNumber) {
                checkPaymentStatus();
            }
        }, 10000); // Every 10 seconds

        return () => clearInterval(checkInterval);
    }, [formData.phoneNumber]);

    // Format phone number
    const formatPhoneNumber = (value) => {
        // Remove non-digit characters
        const numbers = value.replace(/\D/g, '');
        
        // Take only first 9 digits if more
        const trimmed = numbers.slice(0, 9);
        
        // Add +998 prefix
        return trimmed ? `+998${trimmed}` : '';
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            // Format card number with spaces after every 4 digits
            const formattedValue = value
                .replace(/\s/g, '')
                .match(/.{1,4}/g)?.join(' ') || '';

            setFormData({
                ...formData,
                [name]: formattedValue
            });
        } else if (name === "phoneNumber") {
            // Format phone number
            const formattedValue = formatPhoneNumber(value);
            setFormData({
                ...formData,
                phoneNumber: formattedValue
            });
            setCurrentUserPhone(formattedValue);
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                showNotification({
                    type: 'error',
                    title: 'Xatolik',
                    message: "Fayl hajmi 2MB dan katta bo'lmasligi kerak!"
                });
                return;
            }
            
            // Check file type
            if (!file.type.match('image.*')) {
                showNotification({
                    type: 'error',
                    title: 'Xatolik',
                    message: "Faqat rasm fayllarini yuklash mumkin!"
                });
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
        }
    };

    // Reset form
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
            planName: plan?.name || "Online kurslar",
            planPrice: plan?.price?.monthly || "300,000 so'm",
            paymentDate: new Date().toISOString(),
            status: "pending",
            courseStartDate: "",
            courseTimeSlot: "",
            courseDays: ""
        });
        setPreviewImage(null);
        setSelectedTimeSlot("");
        setSelectedDays([]);
    };

    // Show notification
    const showNotification = ({ type, title, message }) => {
        setNotification({ type, title, message });
        
        // Clear notification after 5 seconds
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };

    // Check payment status
    const checkPaymentStatus = async () => {
        try {
            // Skip if phone number is empty
            if (!formData.phoneNumber) {
                return;
            }

            const response = await axios.get('http://localhost:3000/api/payment-page/all');
            
            if (response.data && response.data.payments && response.data.payments.length > 0) {
                // Filter payments by user's phone number
                const userSpecificPayments = response.data.payments.filter(
                    payment => payment.phone_number === formData.phoneNumber
                );
                
                setUserPayments(userSpecificPayments);

                // Find latest completed payment
                const latestCompletedPayment = userSpecificPayments.find(
                    payment => payment.status === 'completed' || payment.status === 'success'
                );
                
                if (latestCompletedPayment) {
                    // Payment is confirmed
                    const subscriptionData = {
                        status: 'active',
                        plan_name: latestCompletedPayment.plan_name,
                        plan_price: latestCompletedPayment.plan_price,
                        start_date: latestCompletedPayment.updated_at || latestCompletedPayment.created_at,
                        end_date: calculateEndDate(latestCompletedPayment.updated_at || latestCompletedPayment.created_at),
                        user: {
                            full_name: latestCompletedPayment.full_name,
                            phone_number: latestCompletedPayment.phone_number,
                            telegram_username: latestCompletedPayment.telegram_username
                        },
                        course_details: {
                            time_slot: latestCompletedPayment.course_time_slot,
                            days: latestCompletedPayment.course_days,
                            start_date: latestCompletedPayment.course_start_date
                        }
                    };
                    
                    setSubscription(subscriptionData);
                    
                    showNotification({
                        type: 'success',
                        title: 'To\'lov tasdiqlangan',
                        message: `${latestCompletedPayment.plan_name} tarifi faol`
                    });
                } else if (userSpecificPayments.length > 0) {
                    // Payment is pending
                    showNotification({
                        type: 'warning',
                        title: 'To\'lov kutilmoqda',
                        message: 'To\'lovingiz tasdiqlanishi kutilmoqda'
                    });
                }
            }
        } catch (error) {
            console.error('To\'lov holatini tekshirishda xatolik:', error);
            showNotification({
                type: 'error',
                title: 'Xatolik',
                message: 'To\'lov ma\'lumotlarini olishda xatolik yuz berdi'
            });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Update form data with selected time slot and days
        const updatedFormData = {
            ...formData,
            courseTimeSlot: selectedTimeSlot,
            courseDays: selectedDays.length > 0 ? selectedDays[0].value : ""
        };
        
        // Validate form
        const validation = validateForm(updatedFormData);
        if (!validation.isValid) {
            showNotification({
                type: 'error',
                title: 'Forma ma\'lumotlarida xatolik bor',
                message: validation.message
            });
            return;
        }
        
        setIsSubmitting(true);

        try {
            const newTransactionId = `CP-${Math.random().toString(36).substr(2, 8)}-${Date.now().toString().substring(8)}`;
            const formDataToSend = new FormData();
            
            if (updatedFormData.image) {
                formDataToSend.append('receipt', updatedFormData.image);
            }
            
            // Prepare payment data
            const paymentDataObj = {
                fullName: updatedFormData.fullName,
                telegramUsername: updatedFormData.telegramUsername,
                phoneNumber: updatedFormData.phoneNumber,
                cardNumber: updatedFormData.cardNumber,
                cardOwner: updatedFormData.cardOwner,
                planName: updatedFormData.planName,
                planPrice: updatedFormData.planPrice,
                paymentDate: new Date().toISOString(),
                registrationDate: new Date().toISOString(),
                startDate: updatedFormData.courseStartDate,
                timeSlot: updatedFormData.courseTimeSlot,
                courseDays: updatedFormData.courseDays,
                fileName: updatedFormData.image ? updatedFormData.image.name : null,
                fileSize: updatedFormData.image ? `${(updatedFormData.image.size / 1024).toFixed(2)} KB` : null,
                uploadTime: new Date().toISOString()
            };
            
            formDataToSend.append('paymentData', JSON.stringify(paymentDataObj));
            
            // Log payment details
            const paymentDetails = {
                userInfo: {
                    fullName: updatedFormData.fullName,
                    telegramUsername: updatedFormData.telegramUsername,
                    phoneNumber: updatedFormData.phoneNumber,
                    registrationDate: new Date().toLocaleString('uz-UZ')
                },
                receipt: {
                    fileName: updatedFormData.image ? updatedFormData.image.name : "Yuklanmagan",
                    fileSize: updatedFormData.image ? `${(updatedFormData.image.size / 1024).toFixed(2)} KB` : "0 KB",
                    uploadTime: new Date().toLocaleString('uz-UZ')
                },
                courseDetails: {
                    startDate: updatedFormData.courseStartDate,
                    timeSlot: updatedFormData.courseTimeSlot,
                    courseDays: updatedFormData.courseDays
                },
                transactionId: newTransactionId,
                timestamp: new Date().toISOString()
            };
            
            console.log("To'lov ma'lumotlari:", paymentDetails);
            
            // Send payment data to server
            const response = await axios.post(
                'http://localhost:3000/api/payment-page/create',
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
                // Check payment status after submission
                await checkPaymentStatus();
            }
            
        } catch (error) {
            console.error("TO'LOV XATOSI:", error);
            let errorMessage = "To'lov jarayonida xatolik yuz berdi.";
            
            if (error.response) {
                errorMessage = error.response.data.message || errorMessage;
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

    // Handle go back
    const handleGoBack = () => {
        navigate('/');
    };

    // Course Details Section
    const CourseDetailsSection = () => (
        <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Kurs ma'lumotlari</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Kurs boshlanish sanasi
                    </label>
                    <input
                        type="date"
                        name="courseStartDate"
                        value={formData.courseStartDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-sm"
                        required
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>
            </div>

            <LiveStreamInfo />
            <LessonTypes />
        </div>
    );

    // Course Schedule Section
    const CourseScheduleSection = () => (
        <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dars jadvali</span>
            </h3>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Dars vaqti
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((slot) => (
                            <div key={slot} className="relative">
                                <input
                                    type="radio"
                                    id={`time-${slot}`}
                                    name="timeSlot"
                                    value={slot}
                                    checked={selectedTimeSlot === slot}
                                    onChange={() => {
                                        setSelectedTimeSlot(slot);
                                        setFormData({
                                            ...formData,
                                            courseTimeSlot: slot
                                        });
                                    }}
                                    className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                                />
                                <label
                                    htmlFor={`time-${slot}`}
                                    className={`block w-full px-4 py-3 text-center rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                                        selectedTimeSlot === slot
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 font-medium shadow-sm'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-300'
                                    }`}
                                >
                                    {slot}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Dars kunlari
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {courseDaysOptions.map((option) => (
                            <div key={option.id} className="relative">
                                <input
                                    type="radio"
                                    id={`days-${option.id}`}
                                    name="courseDays"
                                    value={option.value}
                                    checked={selectedDays.some(day => day.id === option.id)}
                                    onChange={() => {
                                        setSelectedDays([option]);
                                        setFormData({
                                            ...formData,
                                            courseDays: option.value
                                        });
                                    }}
                                    className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                                />
                                <label
                                    htmlFor={`days-${option.id}`}
                                    className={`block w-full px-4 py-3 text-center rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                                        selectedDays.some(day => day.id === option.id)
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 font-medium shadow-sm'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-300'
                                    }`}
                                >
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
            <Header />
            
            {/* Back button */}
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
                {/* User payments */}
                {userPayments.length > 0 && (
                    <div className="mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Sizning to'lovlaringiz</h3>
                            <div className="space-y-4">
                                {userPayments.map(payment => (
                                    <div 
                                        key={payment.id}
                                        className="border rounded-lg p-4 flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-medium">{payment.plan_name}</p>
                                            <p className="text-sm text-gray-600">
                                                {new Date(payment.created_at).toLocaleDateString('uz-UZ')}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="font-medium">{payment.plan_price}</span>
                                            <span className={`px-3 py-1 rounded-full text-sm ${
                                                payment.status === 'completed' || payment.status === 'success'
                                                    ? 'bg-green-100 text-green-800' 
                                                    : payment.status === 'rejected' || payment.status === 'failed'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {payment.status === 'completed' || payment.status === 'success' 
                                                    ? 'Tasdiqlangan' 
                                                    : payment.status === 'rejected' || payment.status === 'failed'
                                                    ? 'Rad etilgan'
                                                    : 'Kutilmoqda'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Subscription info */}
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
                                            <span className="text-white font-medium text-lg">{formData.planName}</span>
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
                            {onClose && (
                                <button
                                    onClick={onClose}
                                    className="group relative w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full p-6 sm:p-10">
                        <div className="w-full max-w-5xl mx-auto space-y-8">
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
                                                value={formData.telegramUsername.replace('@', '')}
                                                onChange={(e) => setFormData({
                                                    ...formData,
                                                    telegramUsername: `@${e.target.value.replace('@', '')}`
                                                })}
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
                                                value={formData.phoneNumber.replace('+998', '')}
                                                onChange={handleChange}
                                                placeholder="XX XXX XX XX"
                                                className="w-full pl-20 pr-12 py-3.5 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-sm group-hover:shadow-md"
                                                required
                                                maxLength={9}
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Details and Schedule */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <CourseDetailsSection />
                                    <CourseScheduleSection />
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
                                        onClick={onClose || handleGoBack}
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
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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

            {/* Notification */}
            {notification && (
                <Notification
                    type={notification.type}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </div>
    );
}

export default PaymentPage1;
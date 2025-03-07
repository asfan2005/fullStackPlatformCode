import React, { useState, useEffect } from 'react';
import Header from "../components/header/Header"
import { useNavigate } from 'react-router-dom';

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

// Qo'shimcha validatsiya funksiyasi
const validateForm = (formData) => {
    const errors = {};
    
    // Telefon raqam validatsiyasi
    if (!/^[0-9]{9}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
        errors.phoneNumber = "Telefon raqam noto'g'ri formatda";
    }

    // Telegram username validatsiyasi
    if (!/^[a-zA-Z0-9_]{5,32}$/.test(formData.telegramUsername)) {
        errors.telegramUsername = "Telegram username noto'g'ri formatda";
    }

    // To'liq ism validatsiyasi
    if (formData.fullName.length < 3) {
        errors.fullName = "Ism kamida 3 ta harfdan iborat bo'lishi kerak";
    }

    return errors;
};

// Kurs ma'lumotlari
const courseDetails = {
    title: "Online Dasturlash Kursi",
    duration: "3 oy",
    startDate: "2025-04-01",
    schedule: "Dushanba, Chorshanba, Juma",
    time: "18:00 - 20:00",
    features: [
        "Jonli darslar",
        "Amaliy mashg'ulotlar",
        "Mentor yordami",
        "Portfolio loyihalar",
        "Sertifikat",
        "Ishga joylashishda yordam"
    ],
    liveStreamInfo: {
        platform: "Zoom",
        accessType: "Premium foydalanuvchilar uchun",
        recordingAccess: "24 soat ichida platformaga yuklanadi"
    },
    lessonTypes: [
        {
            type: "Jonli efir",
            description: "Real vaqtda o'qituvchi bilan jonli muloqot",
            icon: "🎥"
        },
        {
            type: "Yozib olingan video",
            description: "Platformada doimiy foydalanish uchun",
            icon: "📼"
        },
        {
            type: "Amaliy mashg'ulotlar",
            description: "Har bir mavzu bo'yicha topshiriqlar",
            icon: "💻"
        }
    ]
};

// Dars vaqtlari uchun konstantalar
const availableTimeSlots = [
    { id: 1, time: "09:00 - 11:00", maxStudents: 20 },
    { id: 2, time: "11:00 - 13:00", maxStudents: 20 },
    { id: 3, time: "14:00 - 16:00", maxStudents: 20 },
    { id: 4, time: "16:00 - 18:00", maxStudents: 20 },
    { id: 5, time: "18:00 - 20:00", maxStudents: 20 },
    { id: 6, time: "20:00 - 22:00", maxStudents: 20 }
];

// Dars kunlari uchun konstantalar
const availableDays = [
  { id: 1, days: "Dushanba/Chorshanba/Juma" },
  { id: 2, days: "Seshanba/Payshanba/Shanba" }
];

// LiveStream komponenti
const LiveStreamInfo = () => (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Jonli efir ma'lumotlari
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" 
                             alt="Zoom" 
                             className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-900">Platform</h4>
                        <p className="text-sm text-gray-500">{courseDetails.liveStreamInfo.platform}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-900">Kirish huquqi</h4>
                        <p className="text-sm text-gray-500">{courseDetails.liveStreamInfo.accessType}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-4 bg-indigo-50 rounded-xl p-4">
            <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-indigo-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                    <h4 className="text-sm font-medium text-gray-900">Darsdan so'ng</h4>
                    <p className="text-sm text-gray-500">{courseDetails.liveStreamInfo.recordingAccess}</p>
                </div>
            </div>
        </div>
    </div>
);

// Dars turlari komponenti
const LessonTypes = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {courseDetails.lessonTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{type.type}</h4>
                <p className="text-sm text-gray-500">{type.description}</p>
            </div>
        ))}
    </div>
);

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
    const [formErrors, setFormErrors] = useState({});
    const [showCourseDetails, setShowCourseDetails] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [selectedDays, setSelectedDays] = useState("");
    const [startDate, setStartDate] = useState("");

    // Add new state for tracking live stream status
    const [liveStreamStatus, setLiveStreamStatus] = useState({
        isActive: false,
        nextStreamDate: null,
        currentViewers: 0
    });

    const navigate = useNavigate();

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
            status: "pending",
            courseStartDate: "",
            courseTimeSlot: "",
            courseDays: ""
        });
        setPreviewImage(null);
    };

    // Tanlangan ma'lumotlarni formData ga saqlash
    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            courseStartDate: startDate,
            courseTimeSlot: selectedTimeSlot,
            courseDays: selectedDays
        }));
    }, [startDate, selectedTimeSlot, selectedDays]);

    // Effect to simulate live stream status updates
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveStreamStatus(prev => ({
                ...prev,
                isActive: Math.random() > 0.5,
                currentViewers: Math.floor(Math.random() * 50) + 10
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Forma yuborishdan oldin validatsiya
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!startDate || !selectedTimeSlot || !selectedDays) {
            alert("Iltimos, dars jadvalini to'liq tanlang");
            return;
        }

        // Validatsiya
        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        try {
            const paymentDetails = {
                transactionId: Math.random().toString(36).substr(2, 9),
                timestamp: new Date().toISOString(),
                status: "success",
                paymentData: formData
            };
            
            // To'lov ma'lumotlarini log qilish
            console.log(JSON.stringify(paymentDetails, null, 2));

            // To'lov jarayonini simulyatsiya qilish
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Formani tozalash
            resetForm();
            
            // To'lov muvaffaqiyatli bo'lganda
            setIsSuccess(true);
            
            // Modalni ko'rsatish
            setShowSuccessModal(true);

        } catch (error) {
            console.error("❌ TO'LOV XATOSI:", error);
            alert("To'lov jarayonida xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Orqaga qaytish funksiyasi
    const handleGoBack = () => {
        navigate('/');
    };

    // Qo'shimcha kurs ma'lumotlari komponenti
    const CourseDetailsSection = () => (
        <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 mt-8">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Kurs haqida ma'lumot</h3>
                <button
                    onClick={() => setShowCourseDetails(!showCourseDetails)}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    {showCourseDetails ? "Yopish" : "Ko'rish"}
                </button>
            </div>

            {showCourseDetails && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-indigo-50 rounded-xl p-4">
                            <h4 className="font-semibold text-indigo-800 mb-2">Kurs davomiyligi</h4>
                            <p className="text-gray-700">{courseDetails.duration}</p>
                        </div>
                        <div className="bg-indigo-50 rounded-xl p-4">
                            <h4 className="font-semibold text-indigo-800 mb-2">Boshlanish sanasi</h4>
                            <p className="text-gray-700">{courseDetails.startDate}</p>
                        </div>
                        <div className="bg-indigo-50 rounded-xl p-4">
                            <h4 className="font-semibold text-indigo-800 mb-2">Dars jadvali</h4>
                            <p className="text-gray-700">{courseDetails.schedule}</p>
                        </div>
                        <div className="bg-indigo-50 rounded-xl p-4">
                            <h4 className="font-semibold text-indigo-800 mb-2">Dars vaqti</h4>
                            <p className="text-gray-700">{courseDetails.time}</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                        <h4 className="font-semibold text-indigo-800 mb-4">Kurs imkoniyatlari</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {courseDetails.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-4">
                        <p className="text-amber-800 text-sm flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Kursni muvaffaqiyatli tugatganingizdan so'ng sertifikat beriladi
                        </p>
                    </div>
                </div>
            )}
        </div>
    );

    // Dars vaqti tanlash komponenti
    const CourseScheduleSection = () => (
        <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Dars jadvali</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Boshlanish sanasi */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Boshlanish sanasi
                    </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                        required
                    />
                </div>

                {/* Dars vaqtlari */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Dars vaqti
                    </label>
                    <select
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                        required
                    >
                        <option value="">Vaqtni tanlang</option>
                        {availableTimeSlots.map((slot) => (
                            <option key={slot.id} value={slot.time}>
                                {slot.time}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Dars kunlari */}
                <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Dars kunlari
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {availableDays.map((schedule) => (
                            <div
                                key={schedule.id}
                                onClick={() => setSelectedDays(schedule.days)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                    selectedDays === schedule.days
                                        ? "border-indigo-500 bg-indigo-50"
                                        : "border-gray-200 hover:border-indigo-300"
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-900">
                                        {schedule.days}
                                    </span>
                                    {selectedDays === schedule.days && (
                                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add LiveStreamInfo component */}
            <LiveStreamInfo />

            {/* Add LessonTypes component */}
            <LessonTypes />

            {/* Tanlangan jadval ma'lumotlari */}
            {(startDate || selectedTimeSlot || selectedDays) && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
                    <h4 className="font-medium text-indigo-800 mb-2">Tanlangan jadval:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {startDate && (
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Boshlanish sanasi: {new Date(startDate).toLocaleDateString()}</span>
                            </li>
                        )}
                        {selectedTimeSlot && (
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Dars vaqti: {selectedTimeSlot}</span>
                            </li>
                        )}
                        {selectedDays && (
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span>Dars kunlari: {selectedDays}</span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
            <Header />
            
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6">
                <button
                    onClick={handleGoBack}
                    className="group flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        <svg 
                            className="w-10 h-10 p-2 relative" 
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
                    <span className="text-lg font-medium">Orqaga qaytish</span>
                </button>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
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
                            {/* Add CourseDetailsSection before the form */}
                            <CourseDetailsSection />

                            {/* Dars jadvali seksiyasini qo'shamiz */}
                            <CourseScheduleSection />

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
        </div>
    );
}

export default PaymentPage1;
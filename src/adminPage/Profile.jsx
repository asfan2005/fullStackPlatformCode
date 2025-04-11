import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, HomeIcon } from '@heroicons/react/24/outline';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [securityErrors, setSecurityErrors] = useState({});
  const [securityLoading, setSecurityLoading] = useState(false);
  const [securityMessage, setSecurityMessage] = useState({ text: '', type: '' });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // LocalStorage'dan foydalanuvchi email'ini olish
        const localUser = JSON.parse(localStorage.getItem('user'));
        
        if (!localUser?.email) {
          throw new Error("Foydalanuvchi ma'lumotlari topilmadi");
        }

        // API dan to'liq ma'lumotlarni olish
        const response = await axios.get('http://api.infinity-school.uz/api/users');
        const users = response.data;
        const currentUser = users.find(user => user.email === localUser.email);
        
        if (currentUser) {
          setUserData(currentUser);
        } else {
          throw new Error("Foydalanuvchi ma'lumotlari topilmadi");
        }
      } catch (err) {
        console.error("Profil ma'lumotlarini yuklashda xatolik:", err);
        setError(err.message || "Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Parolni o'zgartirish funksiyasi
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setSecurityErrors({});
    setSecurityMessage({ text: '', type: '' });

    // Validatsiya
    const errors = {};
    if (!securityForm.currentPassword) {
      errors.currentPassword = 'Joriy parolni kiriting';
    }
    if (!securityForm.newPassword) {
      errors.newPassword = 'Yangi parolni kiriting';
    } else if (securityForm.newPassword.length < 6) {
      errors.newPassword = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak';
    }
    if (!securityForm.confirmPassword) {
      errors.confirmPassword = 'Yangi parolni tasdiqlang';
    } else if (securityForm.newPassword !== securityForm.confirmPassword) {
      errors.confirmPassword = 'Parollar mos kelmadi';
    }

    if (Object.keys(errors).length > 0) {
      setSecurityErrors(errors);
      return;
    }

    setSecurityLoading(true);
    try {
      const localUser = JSON.parse(localStorage.getItem('user'));
      const response = await axios.put(`https://api.infinity-school.uz/api/users/password/${localUser.id}`, {
        currentPassword: securityForm.currentPassword,
        newPassword: securityForm.newPassword
      });

      if (response.data.success) {
        setSecurityMessage({
          text: 'Parol muvaffaqiyatli o\'zgartirildi',
          type: 'success'
        });
        setSecurityForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      }
    } catch (err) {
      setSecurityMessage({
        text: err.response?.data?.message || 'Parolni o\'zgartirishda xatolik yuz berdi',
        type: 'error'
      });
    } finally {
      setSecurityLoading(false);
    }
  };

  // Loading animation component
  const LoadingScreen = () => (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-50">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-200"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-8 border-blue-600 animate-spin"></div>
      </div>
      <p className="text-blue-800 text-xl font-medium animate-pulse">Ma'lumotlar yuklanmoqda...</p>
    </div>
  );

  // Error screen component
  const ErrorScreen = () => (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-red-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-red-600 h-2 w-full"></div>
        <div className="p-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-4">Xatolik Yuz Berdi</h3>
          <p className="text-center text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-lg"
          >
            Qayta urinib ko'rish
          </button>
        </div>
      </div>
    </div>
  );

  // Empty data screen component
  const EmptyDataScreen = () => (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ma'lumotlar Topilmadi</h3>
        <p className="text-gray-600 mb-6">Sizning profilingiz bo'yicha hech qanday ma'lumot topilmadi.</p>
        <button 
          onClick={() => window.location.href = "/dashboard"}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  );

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;
  if (!userData) return <EmptyDataScreen />;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Bosh sahifaga qaytish tugmasi */}
      <Link 
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
        <span className="text-gray-700 font-medium">Bosh sahifa</span>
      </Link>

      {/* Top Decorative Wave */}
      <div className="w-full h-64 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgb(239 246 255 / 0.8)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 mb-16 relative z-10">
        {/* Profile Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300">
          {/* Profile Header */}
          <div className="w-full relative">
            <div className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-10">
              {/* Profile Avatar */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white p-2 sm:p-3 shadow-2xl mb-4 md:mb-0 md:mr-8">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-inner">
                  <span className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                    {userData?.fullname?.charAt(0).toUpperCase() || '?'}
                  </span>
                </div>
              </div>
              
              {/* Profile Title */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{userData?.fullname || 'Foydalanuvchi'}</h1>
                <div className="mb-4 inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-medium">
                  {userData?.codename || 'Kod nomi mavjud emas'}
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  ID: <span className="font-semibold text-gray-800">{userData?.id}</span>
                </p>
              </div>
              
              {/* Quick Stats - Hidden on mobile, shown on tablet and up */}
              <div className="hidden md:flex space-x-4 mt-6 md:mt-0">
                <div className="flex flex-col items-center justify-center rounded-lg bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">
                    {userData?.created_at ? new Date(userData.created_at).toLocaleDateString('uz-UZ', { month: 'short', year: 'numeric' }) : '-'}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm">Ro'yxatdan o'tgan</span>
                </div>
              </div>
            </div>
            
            {/* Tab Navigation - Scrollable on mobile */}
            <div className="w-full flex overflow-x-auto scrollbar-hide border-t border-gray-200">
              <button
                className={`flex-none sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 transition-colors duration-200 font-medium text-sm sm:text-base whitespace-nowrap focus:outline-none 
                          ${activeTab === 'profile' 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profil Ma'lumotlari
              </button>
              <button
                className={`flex-none sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 transition-colors duration-200 font-medium text-sm sm:text-base whitespace-nowrap focus:outline-none 
                          ${activeTab === 'security' 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('security')}
              >
                Xavfsizlik
              </button>
              <button
                className={`flex-none sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 transition-colors duration-200 font-medium text-sm sm:text-base whitespace-nowrap focus:outline-none 
                          ${activeTab === 'settings' 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('settings')}
              >
                Sozlamalar
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="p-4 sm:p-6 md:p-10">
            {activeTab === 'profile' && (
              <div className="animate-fadeIn">
                {/* Profile Information Section */}
                <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 sm:mr-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Shaxsiy Ma'lumotlar</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Personal Info Cards */}
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-500">To'liq Ism</label>
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-lg text-gray-900 font-medium">{userData?.fullname || 'Kiritilmagan'}</p>
                      </div>
                      
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-500">Kod Nomi</label>
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-lg text-gray-900 font-medium">{userData?.codename || 'Kiritilmagan'}</p>
                      </div>
                    </div>
                      
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-500">Email</label>
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-lg text-gray-900 font-medium break-all">{userData?.email || 'Kiritilmagan'}</p>
                      </div>
                      
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-500">Telefon Raqami</label>
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-lg text-gray-900 font-medium">{userData?.phone || 'Kiritilmagan'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Account Information Section */}
                <div className="bg-indigo-50 rounded-2xl p-6 mb-8 shadow-lg border border-indigo-100">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Akkount Ma'lumotlari</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-50">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-500">Ro'yxatdan O'tgan Sana</label>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-lg text-gray-900 font-medium">
                        {userData?.created_at ? new Date(userData.created_at).toLocaleDateString('uz-UZ', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        }) : 'Ma\'lum emas'}
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-50">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-500">Oxirgi Yangilanish</label>
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-lg text-gray-900 font-medium">
                        {userData?.updated_at ? new Date(userData.updated_at).toLocaleDateString('uz-UZ', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        }) : 'Ma\'lum emas'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Actions Section */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl 
                              font-medium text-base sm:text-lg hover:from-blue-700 hover:to-indigo-700 shadow-md sm:shadow-lg
                              transition duration-300 transform hover:-translate-y-1 hover:shadow-xl
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                              flex items-center justify-center"
                    onClick={() => {/* Profilni tahrirlash */}}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span className="text-sm sm:text-base">Profilni tahrirlash</span>
                  </button>
                  <button 
                    className="w-full bg-white border border-gray-300 text-gray-700 py-4 px-6 rounded-xl 
                              font-medium text-lg hover:bg-gray-50 hover:border-gray-400 shadow-lg
                              transition duration-300 transform hover:-translate-y-1 hover:shadow-xl
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                              flex items-center justify-center"
                    onClick={() => setActiveTab('security')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Parolni o'zgartirish
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className="animate-fadeIn">
                <div className="bg-purple-50 rounded-2xl p-6 mb-8 shadow-lg border border-purple-100">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Parolni o'zgartirish</h2>
                  </div>

                  {securityMessage.text && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      securityMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {securityMessage.text}
                    </div>
                  )}
                  
                  <form onSubmit={handlePasswordChange} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Joriy parol
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          value={securityForm.currentPassword}
                          onChange={(e) => setSecurityForm({
                            ...securityForm,
                            currentPassword: e.target.value
                          })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            securityErrors.currentPassword ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12`}
                          placeholder="Joriy parolingizni kiriting"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showCurrentPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {securityErrors.currentPassword && (
                        <p className="mt-1 text-sm text-red-600">{securityErrors.currentPassword}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Yangi parol
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={securityForm.newPassword}
                          onChange={(e) => setSecurityForm({
                            ...securityForm,
                            newPassword: e.target.value
                          })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            securityErrors.newPassword ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12`}
                          placeholder="Yangi parolingizni kiriting"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showNewPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {securityErrors.newPassword && (
                        <p className="mt-1 text-sm text-red-600">{securityErrors.newPassword}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Yangi parolni tasdiqlang
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={securityForm.confirmPassword}
                          onChange={(e) => setSecurityForm({
                            ...securityForm,
                            confirmPassword: e.target.value
                          })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            securityErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12`}
                          placeholder="Yangi parolingizni qayta kiriting"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {securityErrors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{securityErrors.confirmPassword}</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={securityLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl 
                                font-medium text-lg hover:from-purple-700 hover:to-indigo-700 shadow-lg
                                transition duration-300 transform hover:-translate-y-1 hover:shadow-xl
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                                disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {securityLoading ? 'Yuklanmoqda...' : 'Parolni yangilash'}
                    </button>
                  </form>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="animate-fadeIn">
                <div className="bg-green-50 rounded-2xl p-6 mb-8 shadow-lg border border-green-100">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Sozlamalar</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Til sozlamalari */}
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Til sozlamalari</h3>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option value="uz">O'zbek</option>
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                      </select>
                    </div>

                    {/* Bildirishnomalar */}
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Bildirishnomalar</h3>
                      <div className="space-y-4">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                          <span className="ml-3 text-gray-700">Email orqali bildirishnomalar</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                          <span className="ml-3 text-gray-700">SMS bildirishnomalar</span>
                        </label>
                      </div>
                    </div>

                    {/* Maxfiylik */}
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Maxfiylik</h3>
                      <div className="space-y-4">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                          <span className="ml-3 text-gray-700">Profilni boshqalarga ko'rsatish</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                          <span className="ml-3 text-gray-700">Online holatni ko'rsatish</span>
                        </label>
                      </div>
                    </div>

                    {/* Saqlash tugmasi */}
                    <button 
                      className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-6 rounded-xl 
                                font-medium text-lg hover:from-green-700 hover:to-teal-700 shadow-lg
                                transition duration-300 transform hover:-translate-y-1 hover:shadow-xl
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      O'zgarishlarni saqlash
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
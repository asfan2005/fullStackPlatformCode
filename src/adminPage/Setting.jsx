import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  BellIcon, 
  ShieldCheckIcon, 
  UserIcon, 
  GlobeAltIcon,
  MoonIcon,
  SunIcon,
  ArrowLeftIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';

function Settings() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('general');
  const [settingsForm, setSettingsForm] = useState({
    emailNotifications: false,
    smsNotifications: false,
    showProfile: false,
    showOnlineStatus: false,
    language: 'uz',
    theme: 'light',
    accountPrivacy: 'public',
    profileVisibility: 'all',
    fontStyle: 'default'
  });
  const [saveLoading, setSaveLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        setLoading(true);
        const localUser = JSON.parse(localStorage.getItem('user'));
        
        if (!localUser?.email) {
          throw new Error("Foydalanuvchi ma'lumotlari topilmadi");
        }

        const response = await axios.get(`http://localhost:3000/api/users/email/${localUser.email}`);
        
        if (response.data) {
          setUserData(response.data);
          setSettingsForm({
            emailNotifications: response.data.emailNotifications || false,
            smsNotifications: response.data.smsNotifications || false,
            showProfile: response.data.showProfile || false,
            showOnlineStatus: response.data.showOnlineStatus || false,
            language: response.data.language || 'uz',
            theme: response.data.theme || 'light',
            accountPrivacy: response.data.accountPrivacy || 'public',
            profileVisibility: response.data.profileVisibility || 'all',
            fontStyle: response.data.fontStyle || 'default'
          });
        }
      } catch (err) {
        console.error("Sozlamalarni yuklashda xatolik:", err);
        setError(err.message || "Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchUserSettings();
    
    // Apply theme from localStorage
    const currentTheme = JSON.parse(localStorage.getItem('user'))?.theme || 'light';
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSettingChange = (name, value) => {
    setSettingsForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // If theme changes, apply it immediately
    if (name === 'theme') {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSaveLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const localUser = JSON.parse(localStorage.getItem('user'));
      const response = await axios.put(`http://localhost:3000/api/users/settings/${localUser.id}`, settingsForm);

      if (response.data.success) {
        // Update local storage with new settings
        const updatedUser = { ...localUser, ...settingsForm };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        
        setMessage({
          text: "Sozlamalar muvaffaqiyatli saqlandi",
          type: 'success'
        });
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setMessage({ text: '', type: '' });
        }, 3000);
      }
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Sozlamalarni saqlashda xatolik yuz berdi",
        type: 'error'
      });
    } finally {
      setSaveLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 dark:border-blue-400"></div>
          <p className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 mb-6">
              <svg className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Xatolik yuz berdi</h3>
            <p className="text-gray-600 dark:text-gray-300">{error}</p>
            <Link 
              to="/"
              className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-6 sm:py-12 transition-colors duration-300">
      {/* Bosh sahifaga qaytish tugmasi */}
      <Link 
        to="/"
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 flex items-center px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400" />
        <span className="text-sm sm:text-base text-gray-800 dark:text-white font-medium">Bosh sahifa</span>
      </Link>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden transition-colors duration-300">
          {/* Sarlavha */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 px-4 sm:px-8 py-4 sm:py-6">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Sozlamalar</h1>
                <p className="text-sm sm:text-base text-blue-100 mt-1">Hisobingiz sozlamalarini boshqarish</p>
              </div>
            </div>
          </div>

          {/* Foydalanuvchi ma'lumotlari kartasi */}
          <div className="px-4 sm:px-8 py-4 sm:py-6 border-b dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                {userData?.name?.charAt(0) || 'U'}
              </div>
              <div className="ml-3 sm:ml-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{userData?.name || 'Foydalanuvchi'}</h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{userData?.email || 'email@example.com'}</p>
              </div>
            </div>
          </div>

          {/* Tab navigatsiyasi */}
          <div className="flex border-b dark:border-gray-700 overflow-x-auto">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center py-3 sm:py-4 px-4 sm:px-6 space-x-1 sm:space-x-2 focus:outline-none transition-colors duration-200 text-sm sm:text-base
                ${activeTab === 'general' 
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`}
            >
              <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Umumiy</span>
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center py-3 sm:py-4 px-4 sm:px-6 space-x-1 sm:space-x-2 focus:outline-none transition-colors duration-200 text-sm sm:text-base
                ${activeTab === 'notifications' 
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`}
            >
              <BellIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Bildirishnomalar</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center py-3 sm:py-4 px-4 sm:px-6 space-x-1 sm:space-x-2 focus:outline-none transition-colors duration-200 text-sm sm:text-base
                ${activeTab === 'privacy' 
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`}
            >
              <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Maxfiylik</span>
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`flex items-center py-3 sm:py-4 px-4 sm:px-6 space-x-1 sm:space-x-2 focus:outline-none transition-colors duration-200 text-sm sm:text-base
                ${activeTab === 'appearance' 
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`}
            >
              <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Ko'rinish</span>
            </button>
          </div>

          {/* Asosiy kontent */}
          <div className="p-4 sm:p-8">
            {message.text && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                message.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
                {message.text}
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-6 sm:space-y-8">
              {activeTab === 'general' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                      Asosiy sozlamalar
                    </h3>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Til
                        </label>
                        <select
                          value={settingsForm.language}
                          onChange={(e) => handleSettingChange('language', e.target.value)}
                          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        >
                          <option value="uz">O'zbek</option>
                          <option value="ru">Русский</option>
                          <option value="en">English</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Shrift uslubi
                        </label>
                        <select
                          value={settingsForm.fontStyle}
                          onChange={(e) => handleSettingChange('fontStyle', e.target.value)}
                          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        >
                          <option value="default">Standart</option>
                          <option value="modern">Zamonaviy</option>
                          <option value="classic">Klassik</option>
                          <option value="compact">Ixcham</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      Hisobni ma'lumotlari
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md">
                        <div className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                Qo'shimcha ma'lumotlar
                              </h4>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                Profilingizni to'ldiring va yangilang
                              </p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Link 
                              to="/profile" 
                              className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors duration-200 text-sm font-medium"
                            >
                              Profilni tahrirlash
                              <ArrowLeftIcon className="w-4 h-4 ml-2 rotate-180" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md">
                        <div className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <ShieldCheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                Parolni o'zgartirish
                              </h4>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                Hisobingiz xavfsizligini ta'minlang
                              </p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Link 
                              to="/profile" 
                              className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors duration-200 text-sm font-medium"
                            >
                              Parolni o'zgartirish
                              <ArrowLeftIcon className="w-4 h-4 ml-2 rotate-180" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg sm:rounded-xl space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Bildirishnoma sozlamalari</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Email bildirishnomalari</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Yangiliklar va o'zgarishlar haqida email orqali xabar olish</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settingsForm.emailNotifications}
                          onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">SMS bildirishnomalari</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Muhim xabarlarni SMS orqali olish</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settingsForm.smsNotifications}
                          onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Brauzer bildirishnomalari</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Veb-saytdan to'g'ridan-to'g'ri bildirishnomalar olish</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settingsForm.pushNotifications}
                          onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Maxfiylik sozlamalari</h3>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-white">Profilni ko'rsatish</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Profilingizni boshqa foydalanuvchilarga ko'rsatish</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settingsForm.showProfile}
                            onChange={(e) => handleSettingChange('showProfile', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-white">Online holatni ko'rsatish</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Boshqalarga online ekanligingizni ko'rsatish</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settingsForm.showOnlineStatus}
                            onChange={(e) => handleSettingChange('showOnlineStatus', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Hisobingiz maxfiyligi</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Hisobingiz kimga ko'rinsin
                      </label>
                      <select
                        value={settingsForm.accountPrivacy}
                        onChange={(e) => handleSettingChange('accountPrivacy', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      >
                        <option value="public">Barchaga (Ommaviy)</option>
                        <option value="friends">Faqat do'stlarga</option>
                        <option value="private">Hech kimga (Shaxsiy)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg sm:rounded-xl space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Ko'rinish sozlamalari</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                      Mavzu
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col items-center ${
                          settingsForm.theme === 'light' 
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                        }`}
                        onClick={() => handleSettingChange('theme', 'light')}
                      >
                        <div className="bg-white dark:bg-gray-200 shadow-md rounded-full p-3 mb-3">
                          <SunIcon className="w-8 h-8 text-yellow-500" />
                        </div>
                        <span className="font-medium text-gray-800 dark:text-white">Yorqin</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Oq fon, to'q matn</span>
                      </div>
                      
                      <div 
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col items-center ${
                          settingsForm.theme === 'dark' 
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                        }`}
                        onClick={() => handleSettingChange('theme', 'dark')}
                      >
                        <div className="bg-gray-800 dark:bg-gray-700 shadow-md rounded-full p-3 mb-3">
                          <MoonIcon className="w-8 h-8 text-blue-400" />
                        </div>
                        <span className="font-medium text-gray-800 dark:text-white">Qorong'i</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">To'q fon, och matn</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Saqlash tugmasi */}
              <div className="flex justify-end pt-4 sm:pt-6 border-t dark:border-gray-700">
                <button
                  type="submit"
                  disabled={saveLoading}
                  className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg font-medium text-white transition-all duration-200 
                    ${saveLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                    }`}
                >
                  {saveLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                      Saqlanmoqda...
                    </div>
                  ) : (
                    'Saqlash'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
import React, { useState } from 'react';
import axios from 'axios';

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',  
    fullName: '',
    codeName: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // API URL - backend manzili
  const API_URL = 'http://localhost:3000/api/users';

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setMessage({ text: '', type: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email kiritilishi shart';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email formati noto\'g\'ri';
    }
    
    if (!formData.password) {
      newErrors.password = 'Parol kiritilishi shart';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak';
    }
    
    if (activeTab === 'register') {
      if (!formData.fullName) {
        newErrors.fullName = 'To\'liq ism kiritilishi shart';
      }
      
      if (!formData.codeName) {
        newErrors.codeName = 'Kod nomi kiritilishi shart';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Parolni tasdiqlang';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Parollar mos kelmadi';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      setMessage({ text: '', type: '' });
      
      try {
        if (activeTab === 'login') {
          const response = await axios.post(`${API_URL}/login`, {
            email: formData.email.trim(),
            password: formData.password
          });

          if (response.data.success) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);

            setMessage({ 
              text: response.data.message || 'Muvaffaqiyatli kirildi!', 
              type: 'success' 
            });

            if (onLoginSuccess) {
              onLoginSuccess(response.data.user);
            }

            setTimeout(() => {
              onClose && onClose();
            }, 1500);
          }
        } else {
          const response = await axios.post(API_URL, {
            fullName: formData.fullName.trim(),
            codeName: formData.codeName.trim(),
            email: formData.email.trim(),
            password: formData.password,
            confirmPassword: formData.confirmPassword
          });

          if (response.data.success) {
            setMessage({ 
              text: response.data.message || 'Ro\'yxatdan muvaffaqiyatli o\'tildi!', 
              type: 'success' 
            });

            setTimeout(() => {
              setActiveTab('login');
              setFormData({
                ...formData,
                email: formData.email,
                password: '',
                confirmPassword: '',
                fullName: '',
                codeName: ''
              });
            }, 1500);
          }
        }
      } catch (error) {
        console.error('Authentication error:', error);
        
        const errorMessage = error.response?.data?.message || 
                           'Autentifikatsiya jarayonida xatolik yuz berdi';
        
        setMessage({ 
          text: errorMessage, 
          type: 'error' 
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSocialLogin = (provider) => {
    try {
      window.location.href = `http://localhost:3000/auth/${provider}`;
    } catch (error) {
      console.error(`${provider} login error:`, error);
      setMessage({
        text: `${provider} orqali kirishda xatolik yuz berdi`,
        type: 'error'
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-2xl max-w-md w-full mx-auto">
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'login'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabChange('login')}
            >
              Kirish
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'register'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabChange('register')}
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>

        {message.text && (
          <div className={`mb-4 p-3 rounded-lg ${
            message.type === 'error' ? 'bg-red-100 text-red-700' : 
            message.type === 'success' ? 'bg-green-100 text-green-700' : 
            'bg-blue-100 text-blue-700'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">
                  To'liq ism
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="To'liq ismingizni kiriting"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="codeName" className="block text-gray-700 text-sm font-medium mb-1">
                  Kod nomi
                </label>
                <input
                  type="text"
                  id="codeName"
                  name="codeName"
                  value={formData.codeName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.codeName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Kod nomingizni kiriting"
                />
                {errors.codeName && <p className="text-red-500 text-xs mt-1">{errors.codeName}</p>}
              </div>
            </>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
              Email manzil
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              placeholder="Email manzilingizni kiriting"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
              Parol
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                placeholder="Parolingizni kiriting"
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {activeTab === 'register' && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1">
                Parolni tasdiqlash
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Parolingizni tasdiqlang"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 focus:outline-none"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          )}

          {activeTab === 'login' && (
            <div className="mb-6 text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Parolni unutdingizmi?
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white py-2 rounded-lg transition-colors font-medium flex justify-center items-center`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Yuklanmoqda...
              </>
            ) : (
              activeTab === 'login' ? 'Kirish' : 'Ro\'yxatdan o\'tish'
            )}
          </button>
        </form>

        {/* Qo'shimcha ma'lumot */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {activeTab === 'login' ? (
            <p>
              Hisobingiz yo'qmi? 
              <button 
                type="button"
                onClick={() => handleTabChange('register')}
                className="ml-1 font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
              >
                Ro'yxatdan o'ting
              </button>
            </p>
          ) : (
            <p>
              Allaqachon hisobingiz bormi? 
              <button 
                type="button"
                onClick={() => handleTabChange('login')}
                className="ml-1 font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
              >
                Tizimga kiring
              </button>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
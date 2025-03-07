import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import axios from 'axios';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // URL dan token va userId ni olish
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const userId = params.get('userId');
    
    // Agar token va userId mavjud bo'lsa
    if (token && userId) {
      // Foydalanuvchi ma'lumotlarini olish
      fetchUserData(userId, token);
      
      // URL ni tozalash
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const checkAdminStatus = () => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        if (userData.email === 'asfan.coder@gmail.com') {
          setIsAdmin(true);
        }
      }
    };
    checkAdminStatus();
  }, []);

  const fetchUserData = async (userId, token) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.data) {
        // Foydalanuvchi ma'lumotlarini saqlash
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', token);
        
        // Foydalanuvchi ma'lumotlarini o'rnatish
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userData.token || '');
    
    // Admin tekshiruvi
    if (userData.email === 'asfan.coder@gmail.com') {
      setIsAdmin(true);
    }
    
    closeAuthModal();
    window.location.reload();
  };

  const handleLogout = () => {
    setUser(null);
    setShowLogoutDropdown(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // Sahifani yangilash
    window.location.reload();
  };

  // Function to get user display text for the avatar
  const getUserDisplayText = () => {
    if (!user || !user.fullName) return "";
    
    if (isMobile) {
      // For mobile, still use initials
      const nameParts = user.fullName.split(" ");
      if (nameParts.length >= 2) {
        return `${nameParts[0][0]}${nameParts[1][0]}`;
      }
      return nameParts[0][0];
    } else {
      // For desktop, use first name or shortened name if too long
      const firstName = user.fullName.split(" ")[0];
      return firstName.length > 8 ? firstName.substring(0, 8) + "..." : firstName;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const profileElement = document.getElementById('profile-container');
      if (showLogoutDropdown && profileElement && !profileElement.contains(event.target)) {
        setShowLogoutDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLogoutDropdown]);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <svg
                  className="h-8 w-auto sm:h-9 md:h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#4F46E5" />
                  <path
                    d="M20 8L32 32H8L20 8Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M20 18L26 32H14L20 18Z" fill="white" />
                </svg>
                <span className="ml-2 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {isMobile ? "FS" : "FullStack Platform Practice"}
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div id="profile-container" className="flex items-center relative">
                  <div 
                    className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
                               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                               hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
                               transform hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
                  >
                    {user.fullName ? (
                      <span className="text-white font-semibold text-lg">
                        {getUserDisplayText()}
                      </span>
                    ) : (
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                  {!isMobile && (
                    <span 
                      className="ml-3 font-medium text-gray-700 cursor-pointer hover:text-indigo-600 
                                 transition-colors duration-200 text-sm tracking-wide"
                      onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
                    >
                      {user.fullName}
                    </span>
                  )}
                  
                  {/* Logout dropdown */}
                  {showLogoutDropdown && (
                    <div className="absolute right-0 top-12 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 z-10 
                                    border border-gray-100 transform origin-top-right transition-all duration-200 
                                    ease-out animate-fadeIn">
                      <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
                        <p className="text-sm leading-5 text-gray-500 font-medium">Xush kelibsiz!</p>
                        <p className="text-sm font-semibold leading-5 text-gray-900 truncate">{user.email}</p>
                        {isAdmin && (
                          <span className="inline-block px-2 py-1 mt-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                            Admin
                          </span>
                        )}
                      </div>
                      
                      <Link to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 
                                   hover:text-indigo-700 transition-colors duration-150 group">
                        <div className="flex items-center">
                          <svg className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="font-medium">Profil</span>
                        </div>
                      </Link>
                      
                      <Link to="/settings" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 
                                   hover:text-indigo-700 transition-colors duration-150 group">
                        <div className="flex items-center">
                          <svg className="mr-3 h-5 w-5 text-gray-500 group-hover:text-indigo-600" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">Sozlamalar</span>
                        </div>
                      </Link>
                      
                      <div className="border-t border-gray-100 my-1"></div>
                      
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 
                                   hover:bg-red-50 transition-colors duration-150 group"
                      >
                        <div className="flex items-center">
                          <svg className="mr-3 h-5 w-5 text-red-500 group-hover:text-red-600" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span className="font-medium">Chiqish</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={openAuthModal} 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-2 px-6 rounded-lg
                            text-sm sm:text-base transition duration-300 ease-in-out shadow-md
                            hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    Kirish
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20"></div>
      
      {/* Custom AuthModal component with controlled state */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative transform transition-all duration-300 ease-out scale-100">
            <AuthModal onClose={closeAuthModal} onLoginSuccess={handleLoginSuccess} />
            <button
              onClick={closeAuthModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1 hover:bg-gray-100 transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
  
export default Header;
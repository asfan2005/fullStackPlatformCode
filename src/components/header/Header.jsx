import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

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
              <button 
                onClick={openLogin} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg
                          text-sm sm:text-base transition duration-300 ease-in-out
                          hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Kirish
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20"></div>
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onRegisterClick={openRegister}
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onLoginClick={openLogin}
      />
    </>
  );
}

export default Header;
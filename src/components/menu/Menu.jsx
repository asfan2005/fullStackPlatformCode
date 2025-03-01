import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import AuthModal from "../header/AuthModal";

const menuItems = [
  { name: "Bosh sahifa", icon: HomeIcon, id: "home", requiresAuth: false },
  { name: "Frontend", icon: CodeBracketIcon, id: "frontend", requiresAuth: true },
  { name: "Backend", icon: CommandLineIcon, id: "backend", requiresAuth: true },
  { name: "Mobile", icon: DevicePhoneMobileIcon, id: "mobile", requiresAuth: true },
  { name: "Kompyuter savodxonligi", icon: ComputerDesktopIcon, id: "computer-literacy", requiresAuth: true },
  { name: "Amaliyot", icon: BeakerIcon, id: "practice", requiresAuth: true },
  { name: "Kodlar", icon: CodeBracketIcon, id: "codes", requiresAuth: true },
];

function Menu({ setCurrentPage, currentPage, closeMenu }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!user && !!token);
  }, []);

  const handleMenuClick = (id, requiresAuth) => {
    if (requiresAuth && !isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    setCurrentPage(id);
    closeMenu();
  };

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-100 text-gray-800 h-full p-4 shadow-lg">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id, item.requiresAuth)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 
                ${currentPage === item.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"}
                ${item.requiresAuth && !isAuthenticated ? "opacity-50" : ""}`}
            >
              <item.icon
                className={`h-6 w-6 mr-[10px] ${
                  currentPage === item.id ? "text-white" : "text-gray-600"
                }`}
              />
              <span className="text-sm">
                {item.name}
                {item.requiresAuth && !isAuthenticated && " 🔒"}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative">
            <AuthModal 
              onClose={() => setIsAuthModalOpen(false)} 
              onLoginSuccess={handleLoginSuccess} 
            />
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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

export default Menu;

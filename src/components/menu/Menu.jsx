import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

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
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (user && token) {
        setIsAuthenticated(true);
        setUser(JSON.parse(user));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    // Initial check
    checkAuth();

    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    // Add custom event listener for login/logout
    window.addEventListener('auth-change', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  const handleMenuClick = (id, requiresAuth) => {
    if (requiresAuth && !isAuthenticated) {
      setCurrentPage('home');
      closeMenu();
      return;
    }
    setCurrentPage(id);
    closeMenu();
  };

  return (
    <nav className="bg-gray-100 text-gray-800 h-full p-4 shadow-lg">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item.id, item.requiresAuth)}
            className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 
              ${currentPage === item.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"}
              ${!isAuthenticated && item.requiresAuth ? "opacity-50" : ""}`}
          >
            <item.icon
              className={`h-6 w-6 mr-[10px] ${
                currentPage === item.id ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="text-sm">
              {item.name}
              {!isAuthenticated && item.requiresAuth && " 🔒"}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Menu;

import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  BookOpenIcon,
  VideoCameraIcon,
  UserPlusIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  BellIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  KeyIcon,
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

const premiumMenuItems = [
  { 
    name: "Premium kurslar", 
    icon: StarIcon, 
    id: "premium-courses", 
    requiresAuth: true, 
    isPremium: true 
  },
  { 
    name: "Shaxsiy mentor", 
    icon: UserPlusIcon, 
    id: "personal-mentor", 
    requiresAuth: true, 
    isPremium: true 
  },
  { 
    name: "Video darslar", 
    icon: VideoCameraIcon, 
    id: "video-lessons", 
    requiresAuth: true, 
    isPremium: true 
  },
  { 
    name: "Qo'shimcha materiallar", 
    icon: BookOpenIcon, 
    id: "extra-materials", 
    requiresAuth: true, 
    isPremium: true 
  },
  { 
    name: "Sertifikatlar", 
    icon: AcademicCapIcon, 
    id: "certificates", 
    requiresAuth: true, 
    isPremium: true 
  },
  { 
    name: "Premium amaliyot", 
    icon: RocketLaunchIcon, 
    id: "premium-practice", 
    requiresAuth: true, 
    isPremium: true 
  },
];

const adminMenuItems = [
  {
    name: "Foydalanuvchilar",
    icon: UserGroupIcon,
    id: "users",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Barcha foydalanuvchilar", id: "all-users" },
      { name: "Premium foydalanuvchilar", id: "premium-users" },
      { name: "Bloklangan foydalanuvchilar", id: "blocked-users" },
    ]
  },
  {
    name: "Statistika",
    icon: ChartBarIcon,
    id: "statistics",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Umumiy statistika", id: "general-stats" },
      { name: "Premium statistika", id: "premium-stats" },
      { name: "Faol foydalanuvchilar", id: "active-users" },
    ]
  },
  {
    name: "Xabarlar",
    icon: ChatBubbleLeftRightIcon,
    id: "messages",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Barcha xabarlar", id: "all-messages" },
      { name: "Yangi xabarlar", id: "new-messages" },
      { name: "Arxiv", id: "message-archive" },
    ]
  },
  {
    name: "Pullik obunalar",
    icon: CurrencyDollarIcon,
    id: "premium-subscriptions",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Aktiv obunalar", id: "active-subscriptions" },
      { name: "Obuna tarixi", id: "subscription-history" },
      { name: "To'lovlar", id: "payments" },
    ]
  },
  {
    name: "Xavfsizlik",
    icon: ShieldCheckIcon,
    id: "security",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Login tarixi", id: "login-history" },
      { name: "Bloklashlar", id: "blocking-history" },
      { name: "Xavfsizlik sozlamalari", id: "security-settings" },
    ]
  },
  {
    name: "Sozlamalar",
    icon: Cog6ToothIcon,
    id: "settings",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Umumiy sozlamalar", id: "general-settings" },
      { name: "Email sozlamalari", id: "email-settings" },
      { name: "Tizim sozlamalari", id: "system-settings" },
    ]
  },
];

function Menu({ setCurrentPage, currentPage, closeMenu }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        setIsAuthenticated(true);
        setUser(userData);
        if (userData.email === 'asfan.coder@gmail.com') {
          setIsAdmin(true);
        }
        if (userData.isPremium) {
          setIsPremium(true);
        }
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
        setIsPremium(false);
        setUser(null);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    window.addEventListener('auth-change', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  const handleMenuClick = (id, requiresAuth, isPremium) => {
    if (requiresAuth && !isAuthenticated) {
      setCurrentPage('home');
      closeMenu();
      return;
    }
    if (isPremium && !isPremium) {
      setCurrentPage('premium-subscription');
      closeMenu();
      return;
    }
    setCurrentPage(id);
    closeMenu();
  };

  const toggleSubItems = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <nav className="bg-gray-100 text-gray-800 h-full p-4 shadow-lg overflow-y-auto">
      <div className="space-y-2">
        {/* Regular menu items */}
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

        {/* Premium menu items */}
        {isAuthenticated && (
          <>
            <div className="my-4 border-t border-gray-300"></div>
            <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Premium Bo'lim
            </div>
            {premiumMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id, item.requiresAuth, item.isPremium)}
                className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 
                  ${currentPage === item.id ? "bg-yellow-500 text-white" : "hover:bg-gray-200"}
                  ${!isPremium && item.isPremium ? "opacity-50" : ""}`}
              >
                <item.icon
                  className={`h-6 w-6 mr-[10px] ${
                    currentPage === item.id ? "text-white" : "text-gray-600"
                  }`}
                />
                <span className="text-sm">
                  {item.name}
                  {!isPremium && item.isPremium && " ⭐"}
                </span>
              </button>
            ))}
          </>
        )}

        {/* Admin menu items */}
        {isAdmin && (
          <>
            <div className="my-4 border-t border-gray-300"></div>
            <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Admin Panel
            </div>
            {adminMenuItems.map((item) => (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => toggleSubItems(item.id)}
                  className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors duration-200 
                    ${currentPage === item.id ? "bg-red-500 text-white" : "hover:bg-gray-200"}`}
                >
                  <div className="flex items-center">
                    <item.icon
                      className={`h-6 w-6 mr-[10px] ${
                        currentPage === item.id ? "text-white" : "text-gray-600"
                      }`}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      expandedItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(item.id) && (
                  <div className="ml-6 space-y-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleMenuClick(subItem.id, true)}
                        className={`flex items-center w-full p-2 rounded-lg transition-colors duration-200 
                          ${currentPage === subItem.id ? "bg-red-400 text-white" : "hover:bg-gray-200"}`}
                      >
                        <span className="text-sm">{subItem.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Menu;

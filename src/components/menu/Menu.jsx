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
  BanknotesIcon,
  ReceiptRefundIcon,
  CreditCardIcon,
  WalletIcon,
  CreditCardIcon as CardIcon,
  CalculatorIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  Bars3Icon,
  XMarkIcon,
  CpuChipIcon,
  LockClosedIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  CogIcon,
  PowerIcon
} from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

const menuItems = [
  { id: "home", name: "Bosh sahifa", icon: HomeIcon, requiresAuth: false, isActive: true },
  { id: "frontend", name: "Frontend", icon: DocumentTextIcon, requiresAuth: true },
  { id: "backend", name: "Backend", icon: ComputerDesktopIcon, requiresAuth: true },
  { id: "mobile", name: "Mobile", icon: DevicePhoneMobileIcon, requiresAuth: true },
  { id: "computer-literacy", name: "Kompyuter savodxonligi", icon: CpuChipIcon, requiresAuth: true },
  { id: "practice", name: "Amaliyot", icon: BookOpenIcon, requiresAuth: true },
  { id: "codes", name: "Kodlar", icon: CodeBracketIcon, requiresAuth: true },
  { id: "ai-help", name: "AI Yordamchi", icon: ChatBubbleLeftRightIcon, requiresAuth: true },
];

// Enhanced payment menu items with detailed options
const paymentMenuItems = [
  {
    name: "To'lovlar boshqaruvi",
    icon: BanknotesIcon,
    id: "payment-management",
    requiresAuth: true,
    subItems: [
      { name: "To'lov tarixi", icon: ClockIcon, id: "payment-history" },
      { name: "Joriy to'lovlar", icon: CheckCircleIcon, id: "current-payments" },
      { name: "Kutilayotgan to'lovlar", icon: ExclamationCircleIcon, id: "pending-payments" },
      { name: "Bekor qilingan to'lovlar", icon: ArrowPathIcon, id: "cancelled-payments" },
      { name: "To'lov hisobotlari", icon: DocumentDuplicateIcon, id: "payment-reports" },
    ]
  },
  {
    name: "Kurs to'lovlari",
    icon: CreditCardIcon,
    id: "course-payments",
    requiresAuth: true,
    subItems: [
      { name: "Frontend kurslari", icon: CodeBracketIcon, id: "frontend-course-payments" },
      { name: "Backend kurslari", icon: CommandLineIcon, id: "backend-course-payments" },
      { name: "Mobile kurslari", icon: DevicePhoneMobileIcon, id: "mobile-course-payments" },
      { name: "Premium kurslari", icon: StarIcon, id: "premium-course-payments" },
    ]
  },
  {
    name: "To'lov usullari",
    icon: CreditCardIcon,
    id: "payment-methods",
    requiresAuth: true,
    subItems: [
      { name: "Bank kartasi", icon: CardIcon, id: "card-payment" },
      { name: "Click/Payme", icon: CreditCardIcon, id: "click-payment" },
      { name: "Naqd pul", icon: BanknotesIcon, id: "cash-payment" },
    ]
  },
  {
    name: "Hisobni boshqarish",
    icon: WalletIcon,
    id: "account-balance",
    requiresAuth: true,
    subItems: [
      { name: "Joriy balans", icon: CalculatorIcon, id: "current-balance" },
      { name: "Bonus ballar", icon: StarIcon, id: "bonus-points" },
      { name: "Chegirmalar", icon: BanknotesIcon, id: "discounts" },
    ]
  },
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
      { name: "Premium statistika(300)", id: "premium-stats" },
      { name: "Premium statistika(50)", id: "active-users" },
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
      { name: "Online Obuna", id: "online-subscription" },
      {name:"Kurs tolovlari(Hammasi)", id:"frontend-courses"}
    ]
  },
  {
    name: "To'lovlar boshqaruvi",
    icon: BanknotesIcon,
    id: "payment-management",
    requiresAuth: true,
    adminOnly: true,
    subItems: [
      { name: "Barcha to'lovlar", id: "all-payments" },
      { name: "Kutilayotgan to'lovlar", id: "pending-payments" },
      { name: "Muvaffaqiyatli to'lovlar", id: "successful-payments" },
      { name: "Bekor qilingan to'lovlar", id: "cancelled-payments" },
      { name: "To'lov hisobotlari", id: "payment-reports" },
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
      { name: "To'lov sozlamalari", id: "payment-settings" },
    ]
  },
];

function Menu({ setCurrentPage, currentPage, closeMenu, isMenuOpen }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Auto-expand payment section by default
  const [expandedPaymentSections, setExpandedPaymentSections] = useState([
    "payment-management",
    "course-payments",
    "payment-methods",
    "account-balance"
  ]);

  // Check authentication status on component mount and localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      try {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
        if (user) {
          const userData = JSON.parse(user);
          if (userData.email === 'asfan.coder@gmail.com') {
            setIsAdmin(true);
          }
          if (userData.isPremium) {
            setIsPremium(true);
          }
        } else {
          setIsAdmin(false);
          setIsPremium(false);
        }
      } catch (error) {
        console.error("Foydalanuvchi ma'lumotlarini tekshirishda xatolik:", error);
        setIsAuthenticated(false);
        setIsAdmin(false);
        setIsPremium(false);
      }
    };
    
    // Check auth on component mount
    checkAuth();
    
    // Listen for localStorage changes
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleMenuClick = (id, requiresAuth, isPremium) => {
    if (requiresAuth && !isAuthenticated) {
      setCurrentPage('login');
      closeMenu();
      return;
    }
    if (isPremium && !isPremium) {
      setCurrentPage('premium-subscription');
      closeMenu();
      return;
    }
    setCurrentPage(id);
    if (id !== 'home') {
      closeMenu();
    }
  };

  const toggleSubItems = (id) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const togglePaymentSection = (id) => {
    setExpandedPaymentSections(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Qulf ikonkasi komponenti
  const LockIcon = () => (
    <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  // Menu elementlarini render qilish
  const renderMenuItem = (item) => {
    const isItemActive = currentPage === item.id;
    
    // Apply base styles and conditional styles
    const menuItemClasses = getMenuItemStyles(
      item.id,
      isItemActive,
      item.requiresAuth,
      isPremiumItems.includes(item.id),
      isAdminItems.includes(item.id)
    );
    
    return (
      <div key={item.id} className="relative">
        <button
          onClick={() => item.requiresAuth && !isAuthenticated 
            ? toast.error("Bu bo'limga kirish uchun tizimga kirishingiz kerak") 
            : handleMenuClick(item.id, item.requiresAuth)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          className={menuItemClasses}
          disabled={item.requiresAuth && !isAuthenticated}
        >
          <div className="flex items-center justify-center mr-3 w-10 h-10">
            {React.createElement(item.icon, {
              className: `h-7 w-7 ${
                isItemActive ? "text-white" : "text-gray-700"
              }`
            })}
          </div>
          <span className="flex-1 font-medium text-base whitespace-normal">
            {item.name}
          </span>
          
          {/* Show lock icon for auth required items when not authenticated */}
          {item.requiresAuth && !isAuthenticated && (
            <LockClosedIcon className="h-4 w-4 text-gray-400" />
          )}
          
          {/* Show premium star for premium items */}
          {isPremiumItems.includes(item.id) && isAuthenticated && (
            <span className="ml-1">
              <StarIcon className="h-4 w-4 text-yellow-500" />
            </span>
          )}
          
          {/* Show admin shield for admin items */}
          {isAdminItems.includes(item.id) && isAuthenticated && (
            <span className="ml-1">
              <ShieldCheckIcon className="h-4 w-4 text-blue-500" />
            </span>
          )}
        </button>
      </div>
    );
  };

  // Get styles for menu items based on various states
  const getMenuItemStyles = (id, isActive, requiresAuth, isPremiumItem = false, isAdminItem = false) => {
    const baseStyles = "flex items-center w-full p-5 rounded-lg transition-all duration-200 transform mb-3";
    
    // Agar autentifikatsiya talab qilinsa va foydalanuvchi tizimga kirmagan bo'lsa
    if (requiresAuth && !isAuthenticated) {
      return `${baseStyles} opacity-50 cursor-not-allowed bg-gray-50`;
    }

    const activeStyles = isActive
      ? isAdminItem
        ? "bg-red-50 border-l-4 border-red-500 text-red-700"
        : isPremiumItem
          ? "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700"
          : "bg-blue-50 border-l-4 border-blue-500 text-blue-700"
      : "";

    const hoverStyles = hoveredItem === id && (!requiresAuth || isAuthenticated)
      ? isAdminItem
        ? "bg-red-50 scale-[1.02]"
        : isPremiumItem
          ? "bg-yellow-50 scale-[1.02]"
          : "bg-blue-50 scale-[1.02]"
      : "hover:bg-gray-50 hover:scale-[1.01]";

    return `${baseStyles} ${activeStyles} ${!isActive ? hoverStyles : ""}`;
  };

  const getPaymentMenuItemStyles = (id, isActive) => {
    const baseStyles = "flex items-center w-full p-3 rounded-lg transition-all duration-200 transform";
    const activeStyles = isActive
      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
      : "";

    const hoverStyles = hoveredItem === id
      ? "bg-green-50 scale-[1.02]"
      : "hover:bg-gray-100 hover:scale-[1.01]";

    const expandedStyles = expandedPaymentSections.includes(id) ? "bg-green-50" : "";

    return `${baseStyles} ${activeStyles} ${!isActive ? hoverStyles : ""} ${!isActive && expandedStyles}`;
  };

  const getSubMenuItemStyles = (id, isActive, isAdminItem = false, isPaymentItem = false) => {
    const baseStyles = "flex items-center w-full p-2 pl-3 rounded-lg transition-all duration-200 transform";
    let activeStyles = "";

    if (isActive) {
      if (isAdminItem) {
        activeStyles = "bg-red-400 text-white shadow-sm";
      } else if (isPaymentItem) {
        activeStyles = "bg-green-400 text-white shadow-sm";
      } else {
        activeStyles = "bg-blue-400 text-white shadow-sm";
      }
    }

    const hoverStyles = hoveredItem === id
      ? isAdminItem
        ? "bg-red-50 scale-[1.02]"
        : isPaymentItem
          ? "bg-green-50 scale-[1.02]"
          : "bg-blue-50 scale-[1.02]"
      : "hover:bg-gray-100 hover:scale-[1.01]";

    return `${baseStyles} ${activeStyles} ${!isActive ? hoverStyles : ""}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cardNumber = e.target.cardNumber.value.replace(/\s/g, '');
    
    if (!/^8600\d{12}$/.test(cardNumber)) {
      alert("Noto'g'ri karta raqami. Karta raqami 8600 bilan boshlanishi va 16 ta raqamdan iborat bo'lishi kerak");
      return;
    }
    
    // To'lovni yuborish...
  };

  // Function to handle menu item click with auth check
  const handleMenuItemClick = (item) => {
    if (item.requiresAuth && !isAuthenticated) {
      // Show login prompt or message
      toast.error("Bu bo'limga kirish uchun tizimga kirishingiz kerak");
      return;
    }
    
    setCurrentPage(item.id);
    if (window.innerWidth < 768) {
      closeMenu();
    }
  };

  return (
    <div className="relative">
      {/* Main Menu Container */}
      <div className={`fixed top-[120px] left-0 h-full z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="bg-white text-gray-800 h-full w-96 py-6 px-6 shadow-xl overflow-y-auto border-r border-gray-200 rounded-tr-2xl rounded-br-2xl">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center mb-6 px-2 pb-4 border-b border-gray-100">
            <div className="flex items-center">
              <HomeIcon className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-blue-700 uppercase tracking-wider">
                Infinity-School
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 md:hidden"
            >
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          {/* Menu section title */}
          <div className="px-2 mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Asosiy menu
          </div>

          <div className="space-y-1">
            {/* Special styling for Home menu item - Make it more visible */}
            <button
              key="home"
              onClick={() => handleMenuItemClick({ id: "home", requiresAuth: false })}
              onMouseEnter={() => setHoveredItem("home")}
              onMouseLeave={() => setHoveredItem(null)}
              className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 transform ${
                currentPage === "home" 
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md" 
                  : hoveredItem === "home" 
                    ? "bg-blue-50 scale-[1.02]" 
                    : "hover:bg-gray-100 hover:scale-[1.01] bg-blue-50"
              }`}
            >
              <div className="flex items-center justify-center mr-3 w-10 h-10">
                <HomeIcon
                  className={`h-7 w-7 ${
                    currentPage === "home" ? "text-white" : "text-blue-600"
                  }`}
                />
              </div>
              <span className="flex-1 font-medium text-base whitespace-normal">
                Bosh sahifa
              </span>
            </button>

            {/* Render other menu items except home */}
            {menuItems.slice(1).map((item) => {
              const isItemActive = currentPage === item.id;
              const menuItemClasses = getMenuItemStyles(
                item.id,
                isItemActive,
                item.requiresAuth
              );
              
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleMenuItemClick(item)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={menuItemClasses}
                    disabled={item.requiresAuth && !isAuthenticated}
                  >
                    <div className="flex items-center justify-center mr-3 w-10 h-10">
                      {React.createElement(item.icon, {
                        className: `h-7 w-7 ${
                          isItemActive ? "text-white" : "text-gray-700"
                        }`
                      })}
                    </div>
                    <span className="flex-1 font-medium text-base whitespace-normal">
                      {item.name}
                    </span>
                    
                    {/* Show lock icon for auth required items when not authenticated */}
                    {item.requiresAuth && !isAuthenticated && (
                      <LockClosedIcon className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              );
            })}

            {/* To'lovlar bo'limi - faqat autentifikatsiya qilingan foydalanuvchilar uchun */}
            {isAuthenticated ? (
              <>
                <div className="my-6 border-t border-gray-300"></div>
                <div className="py-3 px-4 bg-green-50 rounded-lg mb-3 border border-green-200">
                  <div className="flex items-center mb-2">
                    <BanknotesIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                      To'lovlar bo'limi
                    </span>
                  </div>
                  <p className="text-xs text-green-600 mb-1">
                    Barcha to'lovlar va hisobni boshqarish
                  </p>
                </div>

                {/* Payment Menu Items - Expanded by default */}
                <div className="space-y-2">
                  {paymentMenuItems.map((item) => (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => togglePaymentSection(item.id)}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={getPaymentMenuItemStyles(item.id, currentPage === item.id)}
                      >
                        <div className="flex items-center justify-center mr-3 w-8 h-8">
                          <item.icon
                            className={`h-6 w-6 ${currentPage === item.id ? "text-white" : "text-green-600"
                              }`}
                          />
                        </div>
                        <span className="flex-1 font-medium text-sm">{item.name}</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${expandedPaymentSections.includes(item.id) ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedPaymentSections.includes(item.id) && (
                        <div className="ml-8 space-y-1 py-1 pl-3 border-l-2 border-green-300 animate-fadeIn">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleMenuClick(subItem.id, true)}
                              onMouseEnter={() => setHoveredItem(subItem.id)}
                              onMouseLeave={() => setHoveredItem(null)}
                              className={getSubMenuItemStyles(subItem.id, currentPage === subItem.id, false, true)}
                            >
                              {subItem.icon && (
                                <div className="flex items-center justify-center mr-2 w-6 h-6">
                                  <subItem.icon
                                    className={`h-4 w-4 ${currentPage === subItem.id ? "text-white" : "text-green-600"
                                      }`}
                                  />
                                </div>
                              )}
                              <span className="text-sm font-medium whitespace-normal">{subItem.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="my-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 text-gray-500">
                  <LockIcon />
                  <span className="text-sm">To'lovlar bo'limi tizimga kirish talab qiladi</span>
                </div>
              </div>
            )}

            {/* Premium bo'lim - faqat autentifikatsiya qilingan foydalanuvchilar uchun */}
            {isAuthenticated ? (
              <>
                <div className="my-4 border-t border-gray-300"></div>
                <div className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 rounded-md mb-2">
                  Premium Bo'lim
                </div>
                {premiumMenuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id, item.requiresAuth, item.isPremium)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={getMenuItemStyles(item.id, currentPage === item.id, item.requiresAuth, true)}
                  >
                    <div className="flex items-center justify-center mr-3 w-8 h-8 relative">
                      <item.icon
                        className={`h-6 w-6 ${currentPage === item.id ? "text-white" : "text-gray-600"
                          }`}
                      />
                      {!isPremium && item.isPremium && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                      )}
                    </div>
                    <span className="flex-1 font-medium text-sm">
                      {item.name}
                      {!isPremium && item.isPremium && " ⭐"}
                    </span>
                  </button>
                ))}
              </>
            ) : (
              <div className="my-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 text-gray-500">
                  <LockIcon />
                  <span className="text-sm">Premium bo'lim tizimga kirish talab qiladi</span>
                </div>
              </div>
            )}

            {/* Admin panel - faqat admin foydalanuvchilar uchun */}
            {isAdmin && (
              <>
                <div className="my-4 border-t border-gray-300"></div>
                <div className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 rounded-md mb-2">
                  Admin Panel
                </div>
                {adminMenuItems.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => toggleSubItems(item.id)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={getMenuItemStyles(item.id, currentPage === item.id, true, false, true)}
                    >
                      <div className="flex items-center justify-center mr-3 w-8 h-8">
                        <item.icon
                          className={`h-6 w-6 ${currentPage === item.id ? "text-white" : "text-gray-600"
                            }`}
                        />
                      </div>
                      <span className="flex-1 font-medium text-sm">{item.name}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${expandedItems.includes(item.id) ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="ml-8 space-y-1 py-1 pl-3 border-l-2 border-red-300 animate-fadeIn">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleMenuClick(subItem.id, true)}
                            onMouseEnter={() => setHoveredItem(subItem.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={getSubMenuItemStyles(subItem.id, currentPage === subItem.id, true)}
                          >
                            <span className="text-sm font-medium ml-1 whitespace-normal">{subItem.name}</span>
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
      </div>

      {/* Overlay when menu is open on mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
}

// Add this to your CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);

export default Menu;
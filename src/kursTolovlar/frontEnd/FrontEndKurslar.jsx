import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Code, Server, Smartphone, Star, CreditCard, Calendar, Lock, Check, AlertCircle, Info, ChevronsRight, Award, Zap, BookOpen, DollarSign, CreditCard as CardIcon, Shield, X } from 'lucide-react';
import PaymentModal from './PaymentModal';
const FrontendPaymentSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [selectedCourseType, setSelectedCourseType] = useState('frontend');
  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  // Course categories
  const courseCategories = [
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'premium', name: 'Premium', icon: Star },
    { id: 'ai', name: 'AI', icon: Server },
    { id: 'cybersecurity', name: 'Kiberxavfsizlik', icon: Lock },
    { id: 'dataEngineering', name: 'Data Engineering', icon: Server },
    { id: 'blockchain', name: 'Blockchain', icon: Server },
    { id: 'uxui', name: 'UX/UI', icon: Smartphone },
    { id: 'kompyuterSavodxonligi', name: 'Kompyuter Savodxonligi', icon: Code },
    { id: 'gamedev', name: 'Game Dev', icon: Smartphone }
  ];
  
  // Course data for each category
  const coursesData = {
    frontend: [
      { id: 1, title: "HTML & CSS asoslari", price: 199000, duration: "4 hafta", popular: true, free: true },
      { id: 2, title: "JavaScript to'liq kurs", price: 299000, duration: "8 hafta", popular: true },
      { id: 3, title: "React JS to'liq kurs", price: 349000, duration: "10 hafta", popular: true },
      { id: 4, title: "Vue JS asoslari", price: 299000, duration: "8 hafta" },
      { id: 5, title: "TypeScript asoslari", price: 249000, duration: "6 hafta" },
      { id: 6, title: "Next.js frameworki", price: 329000, duration: "9 hafta", popular: true },
      { id: 7, title: "Tailwind CSS", price: 199000, duration: "4 hafta", popular: true },
      { id: 8, title: "Frontend Testing (Jest)", price: 229000, duration: "5 hafta" },
      { id: 9, title: "GraphQL frontend uchun", price: 249000, duration: "6 hafta" }
    ],
    backend: [
      { id: 10, title: "Node.js asoslari", price: 299000, duration: "8 hafta", popular: true },
      { id: 11, title: "Express JS", price: 249000, duration: "6 hafta" },
      { id: 12, title: "MongoDB", price: 199000, duration: "4 hafta" },
      { id: 13, title: "SQL asoslari", price: 229000, duration: "5 hafta" },
      { id: 14, title: "PostgreSQL to'liq kurs", price: 279000, duration: "7 hafta", popular: true },
      { id: 15, title: "NestJS frameworki", price: 329000, duration: "9 hafta", popular: true },
      { id: 16, title: "Go dasturlash tili", price: 349000, duration: "10 hafta", popular: true },
      { id: 17, title: "Rust dasturlash tili", price: 379000, duration: "11 hafta" },
      { id: 18, title: "Python backend asoslari", price: 299000, duration: "8 hafta", popular: true },
      { id: 19, title: "Docker va containerizatsiya", price: 299000, duration: "8 hafta", popular: true }
    ],
    mobile: [
      { id: 20, title: "React Native", price: 349000, duration: "10 hafta", popular: true },
      { id: 21, title: "Flutter asoslari", price: 329000, duration: "9 hafta" },
      { id: 22, title: "iOS Swift", price: 399000, duration: "12 hafta" },
      { id: 23, title: "Kotlin Android dasturlash", price: 379000, duration: "11 hafta", popular: true },
      { id: 24, title: "SwiftUI zamonaviy iOS", price: 419000, duration: "12 hafta", popular: true },
      { id: 25, title: "Cross-platform app testing", price: 279000, duration: "7 hafta" }
    ],
    premium: [
      { id: 26, title: "Full Stack Developer", price: 699000, duration: "16 hafta", popular: true },
      { id: 27, title: "MERN Stack to'liq kurs", price: 599000, duration: "14 hafta", popular: true },
      { id: 28, title: "DevOps asoslari", price: 499000, duration: "12 hafta" },
      { id: 29, title: "AWS Cloud Services", price: 549000, duration: "13 hafta", popular: true },
      { id: 30, title: "Kubernetes orqali orqestrlash", price: 499000, duration: "12 hafta", popular: true },
      { id: 31, title: "Microservices arxitekturasi", price: 599000, duration: "14 hafta" }
    ],
    ai: [
      { id: 32, title: "AI asoslari va Machine Learning", price: 449000, duration: "12 hafta", popular: true },
      { id: 33, title: "Python bilan Data Science", price: 399000, duration: "11 hafta", popular: true },
      { id: 34, title: "TensorFlow va Deep Learning", price: 499000, duration: "13 hafta", popular: true },
      { id: 35, title: "NLP (Natural Language Processing)", price: 449000, duration: "12 hafta" },
      { id: 36, title: "Computer Vision asoslari", price: 429000, duration: "12 hafta" },
      { id: 37, title: "LLM (Large Language Models) asoslari", price: 549000, duration: "14 hafta", popular: true },
      { id: 38, title: "AI loyihalarni boshqarish", price: 399000, duration: "10 hafta" },
      { id: 39, title: "PyTorch asoslari", price: 449000, duration: "12 hafta" }
    ],
    cybersecurity: [
      { id: 40, title: "Kiberxavfsizlik asoslari", price: 399000, duration: "10 hafta", popular: true },
      { id: 41, title: "Etik xakerlik", price: 499000, duration: "13 hafta", popular: true },
      { id: 42, title: "Network xavfsizligi", price: 449000, duration: "12 hafta" },
      { id: 43, title: "Web ilovalar xavfsizligi", price: 429000, duration: "11 hafta", popular: true },
      { id: 44, title: "Kriptografiya asoslari", price: 379000, duration: "10 hafta" },
      { id: 45, title: "Bulut xavfsizligi", price: 449000, duration: "12 hafta" }
    ],
    dataEngineering: [
      { id: 46, title: "Big Data asoslari", price: 399000, duration: "11 hafta", popular: true },
      { id: 47, title: "SQL va NoSQL ma'lumotlar bazalari", price: 349000, duration: "9 hafta", popular: true },
      { id: 48, title: "Data Engineering ETL", price: 429000, duration: "12 hafta" },
      { id: 49, title: "Apache Spark va Hadoop", price: 479000, duration: "13 hafta" },
      { id: 50, title: "Data vizualizatsiya asoslari", price: 349000, duration: "9 hafta", popular: true }
    ],
    blockchain: [
      { id: 51, title: "Blockchain texnologiyasi asoslari", price: 399000, duration: "10 hafta", popular: true },
      { id: 52, title: "Smart kontraktlar yaratish", price: 449000, duration: "12 hafta", popular: true },
      { id: 53, title: "Solidity dasturlash tili", price: 429000, duration: "11 hafta" },
      { id: 54, title: "Ethereum va DApps yaratish", price: 479000, duration: "13 hafta" }
    ],
    uxui: [
      { id: 55, title: "UX/UI dizayn asoslari", price: 349000, duration: "9 hafta", popular: true },
      { id: 56, title: "Figma to'liq kurs", price: 299000, duration: "8 hafta", popular: true },
      { id: 57, title: "Adobe XD bilan prototip yaratish", price: 279000, duration: "7 hafta" },
      { id: 58, title: "Mobil ilovalar dizayni", price: 349000, duration: "9 hafta", popular: true },
      { id: 59, title: "Web saytlar UI dizayni", price: 329000, duration: "8 hafta" }
    ],
    kompyuterSavodxonligi: [
      { id: 60, title: "Kompyuter asoslari", price: 149000, duration: "3 hafta", popular: true, free: true },
      { id: 61, title: "Microsoft Office paketi", price: 199000, duration: "5 hafta", popular: true, free: true },
      { id: 62, title: "Internet xavfsizligi asoslari", price: 169000, duration: "4 hafta", popular: true, free: true },
      { id: 63, title: "Google xizmatlari bilan ishlash", price: 149000, duration: "3 hafta", free: true },
      { id: 64, title: "Fayl tizimi va ma'lumotlar boshqaruvi", price: 129000, duration: "3 hafta", free: true },
      { id: 65, title: "Kompyuter qurilmalari ta'mirlash asoslari", price: 229000, duration: "6 hafta", free: true }
    ],
    gamedev: [
      { id: 66, title: "Unity bilan o'yin yaratish", price: 399000, duration: "11 hafta", popular: true },
      { id: 67, title: "Unreal Engine asoslari", price: 449000, duration: "12 hafta", popular: true },
      { id: 68, title: "C# o'yin dasturlash", price: 379000, duration: "10 hafta" },
      { id: 69, title: "3D modellashtirish asoslari", price: 349000, duration: "9 hafta" },
      { id: 70, title: "Mobil o'yinlar yaratish", price: 379000, duration: "10 hafta", popular: true }
    ]
  };
  
  // Calculate total price based on selected plan and course type with discount
  const calculateTotal = () => {
    const courses = coursesData[selectedCourseType];
    let totalPrice = courses.reduce((sum, course) => sum + (course.free ? 0 : course.price), 0);
    
    // Apply yearly discount
    if (selectedPlan === 'yearly') {
      totalPrice = Math.round(totalPrice * 0.8);
    }
    
    // Apply promo code discount if applied
    if (discountApplied) {
      totalPrice = Math.round(totalPrice * 0.9); // 10% additional discount
    }
    
    return totalPrice;
  };
  
  // Calculate savings
  const calculateSavings = () => {
    const courses = coursesData[selectedCourseType];
    const originalTotal = courses.reduce((sum, course) => sum + (course.free ? 0 : course.price), 0);
    return originalTotal - calculateTotal();
  };
  
  // Handle discount code application
  const applyDiscount = () => {
    if (discountCode.toLowerCase() === 'welcome' || discountCode.toLowerCase() === 'student') {
      setDiscountApplied(true);
      return true;
    }
    return false;
  };
  
  // Handle payment processing
  const processPayment = () => {
    setShowPaymentModal(true);
  };
  
  // Close payment modal
  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setPaymentProcessing(false);
    setPaymentComplete(false);
  };
  
  // Get current category icon component
  const getCategoryIcon = (categoryId) => {
    const category = courseCategories.find(cat => cat.id === categoryId);
    const IconComponent = category ? category.icon : Code;
    return <IconComponent size={20} className="text-green-600" />;
  };
  
    return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
      {/* Header section */}
      <div 
        className="bg-green-50 p-4 flex justify-between items-center cursor-pointer hover:bg-green-100 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="bg-green-500 p-2 rounded-md text-white shadow-sm">
            <CreditCard size={20} />
              </div>
          <h2 className="text-xl font-semibold text-gray-800">Kurs to'lovlari</h2>
            </div>
        {isExpanded ? <ChevronUp className="text-gray-600" /> : <ChevronDown className="text-gray-600" />}
              </div>
      
      {/* Content section */}
      {isExpanded && (
        <div className="p-6">
          {/* Info banner */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-md mb-6 flex items-start gap-2">
            <Info size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-700">Hozir ro'yxatdan o'tsangiz, barcha kurslarga bir hafta tekin kirish imkoniyatiga ega bo'lasiz! Chegirma kodi: <span className="font-bold">WELCOME</span></p>
            </div>
          
          {/* Plans toggle */}
          <div className="flex justify-center mb-6 bg-gray-100 p-2 rounded-lg">
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedPlan === 'monthly' ? 'bg-white shadow-md text-green-600' : 'text-gray-600 hover:bg-gray-200'}`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Oylik to'lov
            </button>
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedPlan === 'yearly' ? 'bg-white shadow-md text-green-600' : 'text-gray-600 hover:bg-gray-200'}`}
              onClick={() => setSelectedPlan('yearly')}
            >
              Yillik to'lov <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs ml-1">20% chegirma</span>
            </button>
          </div>
          
          {/* Course navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {courseCategories.slice(0, 8).map((category) => (
              <button 
                key={category.id}
                className={`p-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 ${selectedCourseType === category.id ? 'bg-green-500 text-white shadow-md scale-105' : 'bg-white border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50'}`}
                onClick={() => setSelectedCourseType(category.id)}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
        ))}
      </div>
          
          {/* Second row of course categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {courseCategories.slice(8).map((category) => (
              <button 
                key={category.id}
                className={`p-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 ${selectedCourseType === category.id ? 'bg-green-500 text-white shadow-md scale-105' : 'bg-white border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50'}`}
                onClick={() => setSelectedCourseType(category.id)}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
              </div>
          
          {/* Courses list */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
              {getCategoryIcon(selectedCourseType)}
              {courseCategories.find(cat => cat.id === selectedCourseType)?.name || selectedCourseType.charAt(0).toUpperCase() + selectedCourseType.slice(1)} kurslari paketi
            </h3>
            
            <div className="space-y-3">
              {coursesData[selectedCourseType].map(course => (
                <div key={course.id} className="bg-white p-3 rounded-lg border border-gray-200 flex justify-between items-center hover:border-green-300 hover:shadow-sm transition-all duration-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-800">{course.title}</h4>
                      {course.popular && (
                        <span className="bg-orange-100 text-orange-700 text-xs px-1.5 py-0.5 rounded">Mashhur</span>
                      )}
                      {course.free && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded">Tekin</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Calendar size={14} />
                      Davomiyligi: {course.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    {course.free ? (
                      <>
                        <p className="font-bold text-blue-600">Tekin</p>
                        <p className="text-xs text-gray-500 line-through">{course.price.toLocaleString('en-US')} so'm</p>
                      </>
                    ) : (
                      <>
                        <p className="font-bold text-green-600">
                          {selectedPlan === 'yearly' 
                            ? Math.round(course.price * 0.8).toLocaleString('en-US') 
                            : course.price.toLocaleString('en-US')} so'm
                        </p>
                        {selectedPlan === 'yearly' && (
                          <p className="text-xs text-gray-500 line-through">{course.price.toLocaleString('en-US')} so'm</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Info banner for free courses */}
            {selectedCourseType === 'kompyuterSavodxonligi' && (
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-md flex items-start gap-2">
                <Info size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-700">Kompyuter Savodxonligi kurslari hozirda TEKIN!</p>
                  <p className="text-xs text-blue-600 mt-1">Cheklanmagan vaqt davomida barcha kompyuter savodxonligi kurslarimizga tekin kirish imkoniyatiga ega bo'ling. Bu taklif cheklangan vaqtga amal qiladi.</p>
                </div>
              </div>
            )}
            
            {/* Info banner for free HTML & CSS course */}
            {selectedCourseType === 'frontend' && (
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-md flex items-start gap-2">
                <Info size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-700">HTML & CSS asoslari kursi hozirda TEKIN!</p>
                  <p className="text-xs text-blue-600 mt-1">Web dasturlashni o'rganishni boshlash uchun HTML & CSS asoslari kursimizga tekin kirish imkoniyatiga ega bo'ling. Bu taklif cheklanmagan vaqtga amal qiladi.</p>
                </div>
              </div> 
            )}
            
            {/* Discount code section */}
            <div className="mt-6">
              <button 
                className="text-green-600 text-sm font-medium flex items-center gap-1 hover:text-green-700"
                onClick={() => setShowDiscount(!showDiscount)}
              >
                {showDiscount ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                Chegirma kodi bor
              </button>
              
              {showDiscount && (
                <div className="mt-2 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Chegirma kodini kiriting"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    disabled={discountApplied}
                  />
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${discountApplied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => {
                      if (!discountApplied) {
                        const success = applyDiscount();
                        if (success) {
                          setDiscountApplied(true);
                        }
                      }
                    }}
                    disabled={discountApplied}
                  >
                    {discountApplied ? 'Qo\'llanildi' : 'Qo\'llash'}
                  </button>
                </div>
              )}
              
              {discountApplied && (
                <div className="mt-2 bg-green-100 p-2 rounded text-sm text-green-700 flex items-center gap-2">
                  <Check size={16} />
                  Chegirma muvaffaqiyatli qo'llanildi! (10% qo'shimcha chegirma)
                </div>
              )}
            </div>
            
            {/* Payment summary */}
            <div className="mt-6 bg-green-100 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Jami:</span>
                <span className="font-bold text-gray-800">
                  {calculateTotal().toLocaleString('en-US')} so'm
                </span>
              </div>
              
              {(selectedPlan === 'yearly' || discountApplied) && (
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">Tejaysiz:</span>
                  <span className="font-medium text-green-600">
                    {calculateSavings().toLocaleString('en-US')} so'm
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                <Calendar size={16} />
                <span>O'quv davomiyligi: {selectedCourseType === 'premium' ? '12' : '6'} oy</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <BookOpen size={16} />
                <span>Jami {coursesData[selectedCourseType].length} ta kurs</span>
              </div>
            </div>
            
            {/* Checkout button */}
            <button 
              className="w-full py-4 rounded-lg font-bold mt-6 flex items-center justify-center gap-2 transition-all duration-200 shadow-md bg-green-600 text-white hover:bg-green-700 hover:scale-105"
              onClick={processPayment}
            >
              <Lock size={20} />
              To'lovni amalga oshirish
            </button>
            
            {/* Benefits */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Barcha kurslarga bir martalik to'lov orqali cheksiz kirish imkoniyati</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-sm text-gray-700">24/7 mentor yordami va qo'llab-quvvatlash</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Barcha kurslar uchun sertifikatlar</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Vazifalarni tekshirish va shaxsiy fikr-mulohazalar</p>
              </div>
            </div>
            
            {/* Additional info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-green-600" />
                  <span>100% pulni qaytarish kafolati</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-green-600" />
                  <span>Darhol kirish imkoniyati</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment Modal */}
      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={closePaymentModal}
        courseData={coursesData}
        selectedCourseType={selectedCourseType}
        selectedPlan={selectedPlan}
        totalPrice={calculateTotal()}
        discountApplied={discountApplied}
        courseCategories={courseCategories}
      />
    </div>
  );
};

export default FrontendPaymentSection;
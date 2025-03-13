import React, { useState } from "react";
import Menu from "../menu/Menu";
import Section from "../section/Section";
import { ListBulletIcon, XMarkIcon } from "@heroicons/react/24/outline";
import FrontendPaymentSection from '../../kursTolovlar/frontEnd/FrontEndKurslar';

function Main() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render different content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeContent />;
      case 'frontend':
        return <FrontendContent />;
      case 'backend':
        return <BackendContent />;
      case 'mobile':
        return <MobileContent />;
      case 'computer-literacy':
        return <ComputerLiteracyContent />;
      case 'practice':
        return <PracticeContent />;
      case 'codes':
        return <CodesContent />;
      case 'payment-management':
      case 'course-payments':
      case 'payment-methods':
      case 'account-balance':
        return <PaymentContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="relative flex h-[calc(100vh-5.5rem)]">
      {/* Menu toggle icon for mobile view */}
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "90%",
          zIndex: 50, // Equivalent of z-50 in Tailwind
        }}
        className="md:hidden p-2 bg-gray-200 rounded-md"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-800" />
        ) : (
          <ListBulletIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>

      {/* Menu component with conditional rendering */}
      <div
        className={`fixed md:static w-[75%] md:w-[20%] bg-gray-100 h-full z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Menu
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          closeMenu={toggleMenu}
        />
      </div>

      {/* Section component */}
      <div className="flex-1 overflow-auto z-10">
        <Section currentPage={currentPage} />
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

// Home content
const HomeContent = () => (
  <Section title="Bosh sahifa" subtitle="O'zbekistondagi eng yaxshi dasturlash platformasiga xush kelibsiz!">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Dasturlash kurslari</h3>
        <p className="text-gray-600 mb-4">Frontend, Backend, Mobile va boshqa yo'nalishlarda professional kurslar</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Kurslarga o'tish
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Amaliy loyihalar</h3>
        <p className="text-gray-600 mb-4">Haqiqiy loyihalar ustida ishlash orqali tajriba orttiring</p>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Loyihalarga o'tish
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Jamiyat</h3>
        <p className="text-gray-600 mb-4">Dasturchilar jamoasiga qo'shiling va bilimlaringizni ulashing</p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Jamiyatga qo'shilish
        </button>
      </div>
    </div>
  </Section>
);

// Frontend content
const FrontendContent = () => (
  <Section title="Frontend dasturlash" subtitle="Web saytlar yaratish uchun frontend texnologiyalari">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Frontend kurslari</h3>
      <p className="text-gray-600 mb-4">HTML, CSS, JavaScript, React, Vue va boshqa frontend texnologiyalari bo'yicha kurslar</p>
    </div>
  </Section>
);

// Backend content
const BackendContent = () => (
  <Section title="Backend dasturlash" subtitle="Server tomonidagi dasturlash va ma'lumotlar bazasi">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Backend kurslari</h3>
      <p className="text-gray-600 mb-4">Node.js, Express, MongoDB, PostgreSQL va boshqa backend texnologiyalari bo'yicha kurslar</p>
    </div>
  </Section>
);

// Mobile content
const MobileContent = () => (
  <Section title="Mobile dasturlash" subtitle="iOS va Android uchun mobil ilovalar yaratish">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile kurslari</h3>
      <p className="text-gray-600 mb-4">React Native, Flutter, Swift, Kotlin va boshqa mobile texnologiyalari bo'yicha kurslar</p>
    </div>
  </Section>
);

// Computer literacy content
const ComputerLiteracyContent = () => (
  <Section title="Kompyuter savodxonligi" subtitle="Kompyuter va dasturlash asoslari">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Kompyuter savodxonligi kurslari</h3>
      <p className="text-gray-600 mb-4">Kompyuter asoslari, operatsion tizimlar, ofis dasturlari va boshqa asosiy bilimlar</p>
    </div>
  </Section>
);

// Practice content
const PracticeContent = () => (
  <Section title="Amaliyot" subtitle="Amaliy loyihalar va mashqlar">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Amaliy loyihalar</h3>
      <p className="text-gray-600 mb-4">Haqiqiy loyihalar ustida ishlash orqali tajriba orttiring</p>
    </div>
  </Section>
);

// Codes content
const CodesContent = () => (
  <Section title="Kodlar" subtitle="Tayyor kod namunalari va snippetlar">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Kod namunalari</h3>
      <p className="text-gray-600 mb-4">Turli dasturlash tillari va texnologiyalari uchun tayyor kod namunalari</p>
    </div>
  </Section>
);

// Payment content
const PaymentContent = () => (
  <Section title="To'lovlar" subtitle="Kurslar va xizmatlar uchun to'lovlar">
    <div>
      <FrontendPaymentSection />
    </div>
  </Section>
);

export default Main;

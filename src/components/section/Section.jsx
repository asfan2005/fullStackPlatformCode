import React from "react";
import { Home, FrontEnd, BackEnd, Mobile, Practice, Code, KomputerSavodxonlik, Foydalanuvchilar, Statistika, Message, Payments, OnlineKursObuna, FrontEndKurslar, FrontVide, KursTolovlariHammasi, PremiumKurslar, ShaxsiyMentorlik, QoshimchaMateriallar, Shertifikatlar, PremiumAmaliyot, PremiumFoyda, UmumiyStatistika, PremiumStatistika, PremiumStatistika50, AllMessages, AiHelp } from "../index";

function Section({ currentPage }) {
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="p-4">
            <Home />
          </div>
        );
      case "frontend":
        return (
          <div className="p-4">
            <FrontEnd />
          </div>
        );
      case "backend":
        return (
          <div className="p-4">
            <BackEnd />
          </div>
        );
      case "mobile":
        return (
          <div className="p-4">
            <Mobile />
          </div>
        );
      case "practice":
        return (
          <div className="p-4">
            <Practice />
          </div>
        );
      case "codes":
        return (
          <div className="p-4">
            <Code />
          </div>
        );
      case "computer-literacy":
        return (
          <div className="p-4">
            <KomputerSavodxonlik />
          </div>
        );
      case "all-users":
        return (
          <div className="p-4">
            <Foydalanuvchilar />
          </div>
        );
      case "statistics":
        return (
          <div className="p-4">
            <Statistika />
          </div>
        );
      case "messages":
        return (
          <div className="p-4">
            <Message />
          </div>
        );
      case "payments":
        return (
          <div className="p-4">
            <Payments />
          </div>
        );
      case "online-subscription":
        return (
          <div className="p-4">
            <OnlineKursObuna />
          </div>
        );
      case 'frontend-course-payments':
        return (
          <div className="p-4">
            <FrontEndKurslar />
          </div>
        );
      case 'backend-course-payments':
        return (
          <div className="p-4">
            <FrontEndKurslar />
          </div>
        );
      case 'mobile-course-payments':
        return (
          <div className="p-4">
            <FrontEndKurslar />
          </div>
        );
      case 'premium-course-payments':
        return (
          <div className="p-4">
            <FrontEndKurslar />
          </div>
        );
      case 'video-lessons':
        return (
          <div className="p-4">
            <FrontVide />
          </div>
        );
      case 'frontend-courses':
        return (
          <div className="p-4">
            <KursTolovlariHammasi />
          </div>
        );
      case 'premium-courses':
        return (
          <div className="p-4">
            <PremiumKurslar />
          </div>
        );
      case 'personal-mentor':
        return (
          <div className="p-4">
            <ShaxsiyMentorlik />
          </div>
        );
      case 'extra-materials':
        return (
          <div className="p-4">
            <QoshimchaMateriallar />
          </div>
        );
      case 'certificates':
        return (
          <div className="p-4">
            <Shertifikatlar />
          </div>
        );
      case 'premium-practice':
        return (
          <div className="p-4">
            <PremiumAmaliyot />
          </div>
        );
      case 'premium-users':
        return (
          <div className="p-4">
            <PremiumFoyda />
          </div>
        );
      case 'general-stats':
        return (
          <div className="p-4">
            <UmumiyStatistika />
          </div>
        );
      case 'premium-stats':
        return (
          <div className="p-4">
            <PremiumStatistika />
          </div>
        );
      case 'active-users':
        return (
          <div className="p-4">
            <PremiumStatistika50 />
          </div>
        );
      case 'all-messages':
        return (
          <div className="p-4">
            <AllMessages />
          </div>
        );
        case 'ai-help':
          return(
            <div className="p-4">
              <AiHelp/>
            </div>
          )
      default:
        return (
          <div  className="flex items-center justify-center min-h-[200px] p-8">
            <div className="w-full max-w-2xl bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-2xl overflow-hidden">
              <div className="relative">
                {/* Top wave decoration */}
                <div className="absolute top-0 left-0 right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-blue-500 w-full">
                    <path fill="currentColor" fillOpacity="0.1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                  </svg>
                </div>

                <div className="px-8 pt-16 pb-12 text-center relative z-10">
                  {/* Gear animations */}
                  <div className="absolute left-10 top-10 text-blue-300 opacity-60 animate-spin-slow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                      <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                      <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="absolute right-10 top-24 text-indigo-300 opacity-60 animate-spin-slow-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                      <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                      <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Construction animation */}
                  <div className="inline-block mb-6 relative">
                    <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center relative overflow-hidden">
                      <svg className="absolute animate-bounce-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3B82F6" width="64" height="64">
                        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                        <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                      </svg>
                      <div className="bg-blue-500 h-1 w-full absolute bottom-0 animate-progress"></div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">Ishlar olib borilyapti</h2>
                  <p className="text-gray-600 text-lg mb-8">Bu bo'lim ustida hozirda faol ishlar olib borilyapti va tez orada foydalanishga tayyor bo'ladi.</p>

                  {/* Progress animation */}
                  <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-progress-bar"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                    <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-lg font-bold text-blue-600">Design</span>
                      <span className="text-green-500 text-sm">Tayyor ✓</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-lg font-bold text-blue-600">Kod</span>
                      <span className="text-yellow-500 text-sm">Jarayonda ⚙️</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-lg font-bold text-blue-600">Test</span>
                      <span className="text-gray-400 text-sm">Kutilmoqda ⏱️</span>
                    </div>
                  </div>

                  <button
                    onClick={() => window.location.href = '/'}
                    className="inline-flex items-center px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-transform hover:scale-105"
                  >
                    <svg className="mr-2 -ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Bosh sahifaga qaytish
                  </button>
                </div>

                {/* Bottom wave decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-indigo-500 w-full">
                    <path fill="currentColor" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,117.3C672,85,768,43,864,48C960,53,1056,107,1152,133.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="h-full">{renderContent()}</div>;
}

export default Section;

// Add CSS animations at the end of the file
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spin-slow-reverse {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(-10%); }
    50% { transform: translateY(0); }
  }
  @keyframes progress {
    0% { width: 0; }
    50% { width: 70%; }
    100% { width: 100%; }
  }
  @keyframes progress-bar {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(-10%); }
    100% { transform: translateX(100%); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  .animate-spin-slow-reverse {
    animation: spin-slow-reverse 6s linear infinite;
  }
  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }
  .animate-progress {
    animation: progress 2s ease-in-out infinite alternate;
  }
  .animate-progress-bar {
    animation: progress-bar 2s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

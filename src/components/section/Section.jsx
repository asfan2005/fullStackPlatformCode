import React from "react";
import { Home, FrontEnd, BackEnd, Mobile, Practice, Code, KomputerSavodxonlik, Foydalanuvchilar, Statistika, Message, Payments, OnlineKursObuna, FrontEndKurslar, FrontVide, KursTolovlariHammasi } from "../index";

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
        )
      default:
        return <div className="p-4">Sahifa topilmadi</div>;
    }
  };

  return <div className="h-full">{renderContent()}</div>;
}

export default Section;

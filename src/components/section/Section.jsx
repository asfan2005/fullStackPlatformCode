import React from "react";
import { Home, FrontEnd, BackEnd, Mobile, Practice, Code,KomputerSavodxonlik } from "../index";

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
          return(
            <div className="p-4">
            <KomputerSavodxonlik/>
            </div>
          )
      default:
        return <div className="p-4">Sahifa topilmadi</div>;
    }
  };

  return <div className="h-full">{renderContent()}</div>;
}

export default Section;

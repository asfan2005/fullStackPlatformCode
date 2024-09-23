import React, { useState } from "react";
import Menu from "../menu/Menu";
import Section from "../section/Section";
import { ListBulletIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Main() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

export default Main;

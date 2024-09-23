import React, { useState } from "react";
import { HtmlMenu, HtmlSection } from "../index"; // Adjust the import path as needed
import { FaBars, FaHtml5 } from "react-icons/fa";

function Boshlangich() {
  const [currentPage, setCurrentPage] = useState("html-basics");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-blue-600 w-full py-4 px-6 flex items-center justify-between">
        <div className="text-white text-lg md:text-2xl font-bold flex gap-2 items-center">
          <FaHtml5 style={{ fontSize: "30px" }} />
          <span className="md:block hidden">HTML Asoslari</span>
          <span className="md:hidden block">HTML</span>
        </div>

        {/* Mobile Menu Icon */}
        <button className="text-white md:hidden block" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </header>

      <div className="relative w-full h-full flex">
        {/* HtmlMenu will always be visible in desktop view */}
        <div
          style={
            menuOpen
              ? { position: "absolute", zIndex: 100, width: "100%", top: 0 }
              : {}
          }
          className={`md:block ${
            menuOpen ? "block" : "hidden"
          } md:w-1/4 bg-gray-100 h-full`}
        >
          <HtmlMenu
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            closeMenu={closeMenu}
          />
        </div>

        <div className={`md:w-3/4 flex-1`}>
          <HtmlSection currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}

export default Boshlangich;

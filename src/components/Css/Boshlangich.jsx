import React, { useState } from "react";
import { CssMenu, CssSection } from "../index"; // Adjust the import path as needed
import { FaBars, FaCss3Alt } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
function Boshlangich() {
  const [currentPage, setCurrentPage] = useState("html-basics");
  const [menuOpen, setMenuOpen] = useState(false);
  const  navigate=useNavigate();
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
          <FaCss3Alt style={{ fontSize: "30px" }} />
          <span onClick={()=>navigate("/frontend/css")} className="md:block hidden">CSS Asoslari</span>
          <span onClick={()=>navigate("/frontend/css")} className="md:hidden block">CSS</span>
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
          } md:w-1/6 bg-gray-100 h-full`}
        >
          <CssMenu
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            closeMenu={closeMenu}
          />
        </div>

        <div className={`md:w-3/4 flex-1`}>
          <CssSection currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}

export default Boshlangich;

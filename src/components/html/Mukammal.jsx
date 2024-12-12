import React, { useState } from "react";
import { HtmlMenu, HtmlSection } from "../index";
import { FaBars, FaHtml5 } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "../html/html.css";

function Mukammal() {
  const [currentPage, setCurrentPage] = useState("html-basics");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 py-4 px-6 flex items-center justify-between">
        <div className="text-white text-lg md:text-2xl font-bold flex gap-2 items-center">
          <FaHtml5 style={{ fontSize: "30px" }} />
          <span onClick={() => navigate("/frontend/html")} className="md:block hidden cursor-pointer">
            HTML Asoslari
          </span>
          <span className="md:hidden block">HTML</span>
        </div>

        <button className="text-white md:hidden block" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 relative overflow-hidden">
        {/* Sidebar Menu */}
        <aside
          className={`
            ${menuOpen ? 'absolute inset-0 z-50' : 'hidden'} 
            md:relative md:block md:w-1/4 bg-gray-100
          `}
        >
          <div className="h-full overflow-y-auto">
            <HtmlMenu
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              closeMenu={closeMenu}
            />
          </div>
        </aside>

        {/* Main Section */}
        <main className={`
          flex-1 overflow-y-auto
          ${menuOpen ? 'hidden' : 'block'} 
          md:block
        `}>
          <HtmlSection currentPage={currentPage} />
        </main>
      </div>
    </div>
  );
}

export default Mukammal;

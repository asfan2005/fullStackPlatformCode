import React from "react";
import {
  HomeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Bosh sahifa", icon: HomeIcon, id: "home" },
  { name: "Frontend", icon: CodeBracketIcon, id: "frontend" },
  { name: "Backend", icon: CommandLineIcon, id: "backend" },
  { name: "Mobile", icon: DevicePhoneMobileIcon, id: "mobile" },
  { name: "Amaliyot", icon: BeakerIcon, id: "practice" },
  { name: "Kodlar", icon: CodeBracketIcon, id: "codes" },
];

function Menu({ setCurrentPage, currentPage, closeMenu }) {
  const handleMenuClick = (id) => {
    setCurrentPage(id);
    closeMenu(); // Automatically close the menu on selection (for mobile)
  };

  return (
    <nav className="bg-gray-100 text-gray-800 h-full p-4 shadow-lg">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
              currentPage === item.id
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {/* Applied margin-right of 10px */}
            <item.icon
              className={`h-6 w-6 mr-[10px] ${
                currentPage === item.id ? "text-white" : "text-gray-600"
              }`}
            />
            <span className="text-sm">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Menu;

import React from "react";
import {
  CodeBracketIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LinkIcon,
  CubeIcon,
  PhotoIcon,
  TableCellsIcon,
  ListBulletIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import "./html.css";

const htmlMenuItems = [
  { name: "HTML Basics", icon: CodeBracketIcon, id: "html-basics" },
  { name: "HTML Elements", icon: DocumentTextIcon, id: "html-elements" },
  { name: "HTML Semantics", icon: GlobeAltIcon, id: "html-semantics" },
  { name: "HTML Attributes", icon: DocumentTextIcon, id: "html-attributes" },
  { name: "HTML Links", icon: LinkIcon, id: "html-links" },
  { name: "HTML Images", icon: PhotoIcon, id: "html-images" },
  { name: "HTML Lists", icon: ListBulletIcon, id: "html-lists" },
  { name: "HTML Tables", icon: TableCellsIcon, id: "html-tables" },
  { name: "HTML Forms", icon: DocumentTextIcon, id: "html-forms" },
  { name: "HTML Input Types", icon: CubeIcon, id: "html-input-types" },
  { name: "HTML Iframes", icon: ShieldCheckIcon, id: "html-iframes" },
  { name: "HTML Audio & Video", icon: ShieldCheckIcon, id: "html-audio-video" },
  { name: "HTML Block & Inline Elements", icon: CubeIcon, id: "html-block-inline" },
  { name: "HTML Entities", icon: ArrowPathIcon, id: "html-entities" },
  { name: "HTML Meta Tags", icon: ShieldCheckIcon, id: "html-meta-tags" },
  { name: "HTML Responsive Design", icon: StarIcon, id: "html-responsive-design" },
];

function HtmlMenu({ setCurrentPage, currentPage, closeMenu }) {
  const handleMenuClick = (id) => {
    setCurrentPage(id);
    closeMenu(); // Close menu when an item is clicked
  };

  return (
    <nav id="app-containeri" className="bg-gray-100 text-gray-800 w-full h-full p-4">
      <div className="space-y-2">
        {htmlMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
              currentPage === item.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            <item.icon
              className={`h-6 w-6 mr-2 ${
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

export default HtmlMenu;

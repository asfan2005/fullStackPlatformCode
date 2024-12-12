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
  PaintBrushIcon,
  AdjustmentsHorizontalIcon,
  ArrowsPointingOutIcon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon, // Changed from ClipboardListIcon
  SwatchIcon, // Changed from ColorSwatchIcon
  HandRaisedIcon, // Changed from HandIcon
  PhoneIcon, // Changed from DeviceMobileIcon
  EyeIcon,
} from "@heroicons/react/24/solid";
import "./css.css";

const cssMenuItems = [
  { name: "CSS Basics", icon: CodeBracketIcon, id: "css-basics" },
  { name: "CSS Selectors", icon: DocumentTextIcon, id: "css-selectors" },
  { name: "CSS Box Model", icon: GlobeAltIcon, id: "css-box-model" },
  { name: "CSS Flexbox", icon: DocumentTextIcon, id: "css-flexbox" },
  { name: "CSS Grid", icon: LinkIcon, id: "css-grid" },
  { name: "CSS Positioning", icon: PhotoIcon, id: "css-positioning" },
  { name: "CSS Colors", icon: ListBulletIcon, id: "css-colors" },
  { name: "CSS Typography", icon: TableCellsIcon, id: "css-typography" },
  { name: "CSS Transitions", icon: DocumentTextIcon, id: "css-transitions" },
  { name: "CSS Animations", icon: CubeIcon, id: "css-animations" },
  { name: "CSS Media Queries", icon: ShieldCheckIcon, id: "css-media-queries" },
  { name: "CSS Pseudo-classes", icon: ShieldCheckIcon, id: "css-pseudo-classes" },
  { name: "CSS Pseudo-elements", icon: CubeIcon, id: "css-pseudo-elements" },
  { name: "CSS Variables", icon: ArrowPathIcon, id: "css-variables" },
  { name: "CSS Frameworks", icon: ShieldCheckIcon, id: "css-frameworks" },
  { name: "CSS Responsive Design", icon: StarIcon, id: "css-responsive-design" },
  { name: "CSS Backgrounds", icon: PaintBrushIcon, id: "css-backgrounds" },
  { name: "CSS Borders", icon: AdjustmentsHorizontalIcon, id: "css-borders" },
  { name: "CSS Shadows", icon: ArrowsPointingOutIcon, id: "css-shadows" },
  { name: "CSS Gradients", icon: BeakerIcon, id: "css-gradients" },
  { name: "CSS Transforms", icon: ChartBarIcon, id: "css-transforms" },
  { name: "CSS Filters", icon: ClipboardDocumentListIcon, id: "css-filters" }, // Changed from ClipboardListIcon
  { name: "CSS Units", icon: SwatchIcon, id: "css-units" }, // Changed from ColorSwatchIcon
  { name: "CSS Interactivity", icon: HandRaisedIcon, id: "css-interactivity" }, // Changed from HandIcon
  { name: "CSS Mobile Design", icon: PhoneIcon, id: "css-mobile-design" }, // Changed from DeviceMobileIcon
  { name: "CSS Visibility", icon: EyeIcon, id: "css-visibility" },
];

function CssMenu({ setCurrentPage, currentPage, closeMenu }) {
  const handleMenuClick = (id) => {
    setCurrentPage(id);
    closeMenu(); // Close menu when an item is clicked
  };

  return (
    <nav id="app-containeri" className="bg-gray-100 text-gray-800 w-full h-full p-4">
      <div className="space-y-2">
        {cssMenuItems.map((item) => (
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

export default CssMenu;
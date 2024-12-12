import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Editor from "@monaco-editor/react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { toast } from "react-toastify";

function CssPractice() {
  const [selectedTopic, setSelectedTopic] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [htmlCode, setHtmlCode] = useState(`<div class="card">
  <div class="card-image">
    <img src="https://picsum.photos/400/300" alt="Example" />
  </div>
  <div class="card-content">
    <div class="card-title">Responsive Karta</div>
    <p class="card-text">Bu karta turli ekran o'lchamlariga moslashadi.</p>
  </div>
</div>`);

  const [cssCode, setCssCode] =
    useState(`/* Kartani responsive qilish uchun CSS yozing */
.card {
  
}

.card-image img {
  
}

.card-content {
  
}

.card-title {
  
}`);

  const correctCss = `
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}

.card-image {
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .card-image img {
    width: 200px;
    height: 100%;
  }
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: #6366f1;
}

.card-text {
  margin-top: 0.5rem;
  color: #6b7280;
}`;

  const [navHtmlCode, setNavHtmlCode] = useState(`<nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <img src="https://picsum.photos/32/32" alt="Logo" class="navbar-logo">
        <span class="brand-name">BrandName</span>
      </div>
      
      <button class="mobile-menu-btn">
        <span class="menu-icon"></span>
      </button>

      <div class="navbar-menu">
        <a href="#" class="nav-link active">Bosh Sahifa</a>
        <a href="#" class="nav-link">Mahsulotlar</a>
        <a href="#" class="nav-link">Xizmatlar</a>
        <a href="#" class="nav-link">Bog'lanish</a>
        <button class="nav-button">Kirish</button>
      </div>
    </div>
  </nav>`);

  const [navCssCode, setNavCssCode] = useState(`/* Navbar uchun CSS yozing */
  .navbar {
    
  }

  .navbar-container {
    
  }

  .navbar-brand {
    
  }

  .navbar-logo {
    
  }

  .brand-name {
    
  }

  .navbar-menu {
    
  }

  .nav-link {
    
  }

  .nav-button {
    
  }

  .mobile-menu-btn {
    
  }

  @media (max-width: 768px) {
    
  }`);

  const correctNavCss = `
  .navbar {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid #e5e7eb;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.navbar-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.brand-name {
  font-weight: 700;
  font-size: 1.25rem;
  color: #2563eb;
  letter-spacing: -0.025em;
}

.navbar-menu {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link.active {
  color: #2563eb;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2563eb;
  border-radius: 2px;
}

.nav-button {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}

.mobile-menu-btn {
  display: none;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }

  .mobile-menu-btn {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    position: relative;
    z-index: 100;
  }

  .menu-icon {
    display: block;
    width: 24px;
    height: 2px;
    background: #4b5563;
    position: relative;
    transition: all 0.3s ease;
  }

  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #4b5563;
    left: 0;
    transition: all 0.3s ease;
  }

  .menu-icon::before {
    top: -8px;
  }

  .menu-icon::after {
    bottom: -8px;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: all 0.3s ease;
    padding: 2rem;
  }

  .navbar-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.125rem;
    text-align: center;
  }

  .nav-button {
    width: 100%;
    padding: 0.75rem;
  }
}
  `;

  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem("completedTopics");
    return saved ? JSON.parse(saved) : [];
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const SuccessModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] sm:max-w-sm w-full shadow-xl"
      >
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.2 }}
              className="w-6 h-6 sm:w-8 sm:h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-3 sm:mt-4">
            Ajoyib! 🎉
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Siz bu vazifani muvaffaqiyatli bajardingiz!
          </p>
          <button
            onClick={onClose}
            className="mt-4 sm:mt-6 w-full bg-green-500 text-white py-2 sm:py-3 px-4 text-sm sm:text-base rounded-md hover:bg-green-600 transition-colors"
          >
            Davom etish
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  const topics = [
    {
      id: 1,
      title: "Responsive Dizayn",
      icon: "🖥️",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Navbar Dizayn",
      icon: "🎯",
      bgColor: "bg-purple-500",
    },
    {
      id: 3,
      title: "Interaktiv Kartalar",
      icon: "🎴",
      bgColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Loader Animatsiyalar",
      icon: "🔄",
      bgColor: "bg-yellow-500",
    },
    {
      id: 5,
      title: "Formalar",
      icon: "📝",
      bgColor: "bg-red-500",
    },
    {
      id: 6,
      title: "Parallax Effekt",
      icon: "✨",
      bgColor: "bg-indigo-500",
    },
    {
      id: 7,
      title: "Dark/Light Mode",
      icon: "🌓",
      bgColor: "bg-gray-500",
    },
    {
      id: 8,
      title: "Grid Layout",
      icon: "📊",
      bgColor: "bg-pink-500",
    },
    {
      id: 9,
      title: "Scroll Animatsiya",
      icon: "📜",
      bgColor: "bg-teal-500",
    },
    {
      id: 10,
      title: "Custom Buttons",
      icon: "🎨",
      bgColor: "bg-orange-500",
    },
    {
      id: 11,
      title: "CSS Animations",
      icon: "🎬",
      bgColor: "bg-cyan-500",
    },
    {
      id: 12,
      title: "Flexbox Layout",
      icon: "📦",
      bgColor: "bg-lime-500",
    },
    {
      id: 13,
      title: "CSS Grid Advanced",
      icon: "🎯",
      bgColor: "bg-amber-500",
    },
    {
      id: 14,
      title: "3D Transforms",
      icon: "🎲",
      bgColor: "bg-violet-500",
    },
    {
      id: 15,
      title: "CSS Variables",
      icon: "🎨",
      bgColor: "bg-rose-500",
    },
    {
      id: 16,
      title: "Glassmorphism",
      icon: "🌟",
      bgColor: "bg-emerald-500",
    },
    // {
    //   id: 17,
    //   title: "Neumorphism",
    //   icon: "💫",
    //   bgColor: "bg-sky-500",
    // },
    // {
    //   id: 18,
    //   title: "CSS Filters",
    //   icon: "🖼️",
    //   bgColor: "bg-fuchsia-500",
    // },
    // {
    //   id: 19,
    //   title: "CSS Gradients",
    //   icon: "🌈",
    //   bgColor: "bg-amber-600",
    // },
    // {
    //   id: 20,
    //   title: "CSS Transitions",
    //   icon: "⚡",
    //   bgColor: "bg-lime-600",
    // },
  ].map((topic) => ({
    ...topic,
    isCompleted: completedTopics.includes(topic.id),
  }));

  const checkSolution = () => {
    let userCode = "";
    let correctCode = "";
    let isCorrect = false;

    switch (selectedTopic) {
      case 1: // Responsive Dizayn
        userCode = cssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctCss.replace(/\s+/g, "").toLowerCase().trim();

        const responsiveStyles = [
          ".card{",
          "display:flex",
          "flex-direction:",
          "@media(min-width:768px)",
          "box-shadow:",
          "border-radius:",
        ];

        isCorrect = responsiveStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 2: // Navbar Dizayn
        userCode = navCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctNavCss.replace(/\s+/g, "").toLowerCase().trim();

        const navbarStyles = [
          ".navbar{",
          "position:fixed",
          ".navbar-menu{",
          "@media(max-width:768px)",
          ".mobile-menu-btn",
        ];

        isCorrect = navbarStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 3: // Interaktiv Kartalar
        userCode = cardCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctCardCss.replace(/\s+/g, "").toLowerCase().trim();

        const cardStyles = [
          ".cards-container{",
          "grid-template-columns:",
          ".card:hover",
          "transform:",
          "transition:",
        ];

        isCorrect = cardStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 4: // Loader Animatsiyalar
        userCode = loaderCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctLoaderCss.replace(/\s+/g, "").toLowerCase().trim();

        const loaderStyles = [
          ".spinner-loader{",
          "animation:spin",
          ".pulse-loader{",
          "animation:pulse",
          ".dots-loader{",
          "@keyframes",
        ];

        isCorrect = loaderStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 5: // Formalar
        userCode = formCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctFormCss.replace(/\s+/g, "").toLowerCase().trim();

        const formStyles = [
          ".contact-form{",
          ".form-group",
          "input:focus",
          ".submit-button:hover",
          "box-shadow:",
          "transition:",
        ];

        isCorrect = formStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 6: // Parallax Effect
        userCode = parallaxCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctParallaxCss
          .replace(/\s+/g, "")
          .toLowerCase()
          .trim();

        const parallaxStyles = [
          "background-attachment:fixed",
          "background-position:center",
          "background-size:cover",
          ".parallax-section",
          "@media(max-width:768px)",
        ];

        isCorrect = parallaxStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 7: // Dark/Light Mode
        userCode = darkModeCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctDarkModeCss
          .replace(/\s+/g, "")
          .toLowerCase()
          .trim();

        const darkModeStyles = [
          ":root{",
          '[data-theme="dark"]',
          "--bg-primary:",
          "--text-primary:",
          ".theme-toggle",
          "transition:",
        ];

        isCorrect = darkModeStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 8: // Grid Layout
        userCode = gridCssCode.replace(/\s+/g, "").toLowerCase().trim();
        correctCode = correctGridCss.replace(/\s+/g, "").toLowerCase().trim();

        const gridStyles = [
          "display:grid",
          "grid-template-columns:",
          "grid-column:",
          "@media(max-width:768px)",
          "gap:",
        ];

        isCorrect = gridStyles.every((style) =>
          userCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;

      case 9:
        const userScrollCss = scrollCssCode.replace(/\s/g, "").toLowerCase();
        const correctScrollCssFormatted = correctScrollCss
          .replace(/\s/g, "")
          .toLowerCase();
        isCorrect = userScrollCss === correctScrollCssFormatted;
        break;

      case 10:
        const userButtonCss = buttonCssCode.replace(/\s/g, "").toLowerCase();
        const correctButtonCssFormatted = correctButtonCss
          .replace(/\s/g, "")
          .toLowerCase();
        isCorrect = userButtonCss === correctButtonCssFormatted;
        break;

      case 11:
        const userAnimationCss = animationCssCode
          .replace(/\s/g, "")
          .toLowerCase();
        const correctAnimationCssFormatted = correctAnimationCss
          .replace(/\s/g, "")
          .toLowerCase();
        isCorrect = userAnimationCss === correctAnimationCssFormatted;
        break;

      case 12:
        const userFlexboxCss = flexboxCssCode.replace(/\s/g, "").toLowerCase();
        const correctFlexboxCssFormatted = correctFlexboxCss
          .replace(/\s/g, "")
          .toLowerCase();
        isCorrect = userFlexboxCss === correctFlexboxCssFormatted;
        break;

      case 13:
        const userGridAdvancedCss = gridAdvancedCssCode
          .replace(/\s/g, "")
          .toLowerCase();
        const correctGridAdvancedCssFormatted = correctGridAdvancedCss
          .replace(/\s/g, "")
          .toLowerCase();
        isCorrect = userGridAdvancedCss === correctGridAdvancedCssFormatted;
        break;

      case 14:
        const userTransforms3dCss = transforms3dCssCode
          .replace(/\s/g, "")
          .toLowerCase();
        const correctTransforms3dCssFormatted = correctTransforms3dCss
          .replace(/\s/g, "")
          .toLowerCase();
        isCorrect = userTransforms3dCss === correctTransforms3dCssFormatted;
        break;

      case 15:
        const userCssVarCode = cssVarCode.replace(/\s/g, "").toLowerCase();
        const correctCssVarCodeFormatted = correctCssVarCode
          .replace(/\s/g, "")
          .toLowerCase();

        const cssVarStyles = [
          ":root{",
          "--primary-color:",
          "--secondary-color:",
          "--accent-color:",
          "var(--primary-color)",
          "var(--spacing-unit)",
          "@media(prefers-color-scheme:dark)",
        ];

        isCorrect = cssVarStyles.every((style) =>
          userCssVarCode.includes(style.replace(/\s+/g, "").toLowerCase())
        );
        break;
      case 16:
        const userGlassmorphismCode = glassmorphismCssCode
          .replace(/\s/g, "")
          .toLowerCase();
        const correctGlassmorphismCodeFormatted = correctGlassmorphismCss
          .replace(/\s/g, "")
          .toLowerCase();

        const glassmorphismStyles = [
          "background:rgba(255,255,255,0.1)",
          "backdrop-filter:blur",
          "border:1pxsolidrgba(255,255,255,0.2)",
          "box-shadow:0",
          ".glass-container{",
          ".glass-card{",
          ".glass-dashboard{",
          ".glass-nav{",
          "transition:",
          "@media(max-width:768px)",
          "hover",
          "rgba(",
          "linear-gradient",
        ];

        isCorrect = glassmorphismStyles.every((style) =>
          userGlassmorphismCode.includes(
            style.replace(/\s+/g, "").toLowerCase()
          )
        );
        break;

      default:
        return false;
    }

    if (isCorrect) {
      // Add to completed topics if not already completed
      if (!completedTopics.includes(selectedTopic)) {
        const newCompletedTopics = [...completedTopics, selectedTopic];
        setCompletedTopics(newCompletedTopics);
        localStorage.setItem(
          "completedTopics",
          JSON.stringify(newCompletedTopics)
        );
        setShowSuccessModal(true);
      }
      return true;
    } else {
      alert("Barcha zarur stillar topilmadi. Qayta urinib ko'ring 🤔");
      return false;
    }
  };

  const [cardHtmlCode, setCardHtmlCode] =
    useState(`<div class="cards-container">
    <div class="card">
      <div class="card-image">
        <img src="https://picsum.photos/id/237/400/300" alt="Card image" />
        <div class="card-overlay">
          <span class="card-category">Animals</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Cute Puppy</h3>
        <p class="card-text">This adorable puppy will make your day better!</p>
        <button class="card-button">Read More</button>
      </div>
    </div>

    <div class="card">
      <div class="card-image">
        <img src="https://picsum.photos/id/1015/400/300" alt="Card image" />
        <div class="card-overlay">
          <span class="card-category">Nature</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Mountain View</h3>
        <p class="card-text">Explore the beautiful mountains and landscapes.</p>
        <button class="card-button">Read More</button>
      </div>
    </div>

    <div class="card">
      <div class="card-image">
        <img src="https://picsum.photos/id/1016/400/300" alt="Card image" />
        <div class="card-overlay">
          <span class="card-category">Travel</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Adventure Time</h3>
        <p class="card-text">Start your journey to amazing destinations.</p>
        <button class="card-button">Read More</button>
      </div>
    </div>
  </div>`);

  const [cardCssCode, setCardCssCode] =
    useState(`/* Interactive cards uchun CSS yozing */
  .cards-container {
    
  }

  .card {
    
  }

  .card-image {
    
  }

  .card-image img {
    
  }

  .card-overlay {
    
  }

  .card-category {
    
  }

  .card-content {
    
  }

  .card-title {
    
  }

  .card-text {
    
  }

  .card-button {
    
  }

  /* Hover effektlari */
  .card:hover {
    
  }

  .card:hover img {
    
  }

  .card:hover .card-overlay {
    
  }`);

  const correctCardCss = `
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-category {
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.5);
  border-radius: 2rem;
  backdrop-filter: blur(4px);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #666;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.card-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card:hover img {
  transform: scale(1.1);
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}`;

  const [loaderHtmlCode, setLoaderHtmlCode] =
    useState(`<div class="loaders-container">
    <!-- Spinner Loader -->
    <div class="spinner-loader"></div>
    
    <!-- Pulse Loader -->
    <div class="pulse-loader"></div>
    
    <!-- Dots Loader -->
    <div class="dots-loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    
    <!-- Progress Bar -->
    <div class="progress-loader"></div>
    
    <!-- Circle Loader -->
    <div class="circle-loader">
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20"></circle>
      </svg>
    </div>
  </div>`);

  const [loaderCssCode, setLoaderCssCode] =
    useState(`/* Loader animatsiyalari uchun CSS yozing */
  .loaders-container {
    
  }

  .spinner-loader {
    
  }

  .pulse-loader {
    
  }

  .dots-loader {
    
  }

  .dot {
    
  }

  .progress-loader {
    
  }

  .circle-loader {
    
  }

  .circle-loader svg circle {
    
  }`);

  const correctLoaderCss = `
  .loaders-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .spinner-loader {
    width: 48px;
    height: 48px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .pulse-loader {
    width: 48px;
    height: 48px;
    background: #3498db;
    border-radius: 50%;
    animation: pulse 1.2s ease-in-out infinite;
  }

  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.8); opacity: 0.5; }
  }

  .dots-loader {
    display: flex;
    gap: 8px;
  }

  .dot {
    width: 16px;
    height: 16px;
    background: #3498db;
    border-radius: 50%;
    animation: bounce 0.5s ease-in-out infinite;
  }

  .dot:nth-child(2) {
    animation-delay: 0.1s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .progress-loader {
    width: 200px;
    height: 4px;
    background: #f3f3f3;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
  }

  .progress-loader::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: #3498db;
    animation: progress 1s ease-in-out infinite;
  }

  @keyframes progress {
    0% { left: -40%; }
    100% { left: 100%; }
  }

  .circle-loader {
    width: 48px;
    height: 48px;
  }

  .circle-loader svg {
    width: 100%;
    height: 100%;
    animation: rotate 2s linear infinite;
  }

  .circle-loader svg circle {
    fill: none;
    stroke: #3498db;
    stroke-width: 4;
    stroke-dasharray: 126;
    stroke-dashoffset: 126;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }

  @keyframes dash {
    0% { stroke-dashoffset: 126; }
    50% { stroke-dashoffset: 63; }
    100% { stroke-dashoffset: 126; }
  }`;

  const [showExampleModal, setShowExampleModal] = useState(false);

  const ExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Namuna Dizayn
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Namuna loader animatsiyalari */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctLoaderCss}</style>
          <div dangerouslySetInnerHTML={{ __html: loaderHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Yuqoridagi namunaga o'xshash 5 xil loader animatsiyasini
            yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Spinner Loader - aylanuvchi loader</li>
            <li>Pulse Loader - pulsatsiya effekti</li>
            <li>Dots Loader - sakrovchi nuqtalar</li>
            <li>Progress Loader - progress bar</li>
            <li>Circle Loader - aylanma progress</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  const ResponsiveExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Responsive Karta - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctCss}</style>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Responsive karta yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Mobil ko'rinishda vertikal joylashuv</li>
            <li>Desktop ko'rinishda gorizontal joylashuv</li>
            <li>Rasm va kontent qismlarini moslashuvchan qilish</li>
            <li>Chiroyli soyalar va border radius qo'shish</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  const NavbarExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Navbar Dizayn - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctNavCss}</style>
          <div dangerouslySetInnerHTML={{ __html: navHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Responsive navbar yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Desktop ko'rinishda to'liq menu</li>
            <li>Mobil ko'rinishda burger menu</li>
            <li>Animatsiyali o'tishlar</li>
            <li>Hover effektlar</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  const CardsExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Interaktiv Kartalar - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctCardCss}</style>
          <div dangerouslySetInnerHTML={{ __html: cardHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Interaktiv kartalar yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Hover effektlari</li>
            <li>Rasm transformatsiyasi</li>
            <li>Gradient overlay</li>
            <li>Responsive grid layout</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    switch (selectedTopic) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Responsive Dizayn
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[150px] sm:h-[200px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={htmlCode}
                        onChange={setHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={cssCode}
                        onChange={setCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Natija qismi */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg p-4 h-[300px] sm:h-[500px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{cssCode}</style>
                      <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <ResponsiveExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Navbar Dizayn
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={navHtmlCode}
                        onChange={setNavHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={navCssCode}
                        onChange={setNavCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Natija qismi */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg p-4 h-[500px] sm:h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{navCssCode}</style>
                      <div dangerouslySetInnerHTML={{ __html: navHtmlCode }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <NavbarExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Interaktiv Kartalar
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={cardHtmlCode}
                        onChange={setCardHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={cardCssCode}
                        onChange={setCardCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Natija qismi */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg p-4 h-[500px] sm:h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{cardCssCode}</style>
                      <div dangerouslySetInnerHTML={{ __html: cardHtmlCode }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <CardsExampleModal onClose={() => setShowExampleModal(false)} />
              )}
            </AnimatePresence>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Loader Animatsiyalar
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={loaderHtmlCode}
                        onChange={setLoaderHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={loaderCssCode}
                        onChange={setLoaderCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Natija qismi */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg p-4 h-[500px] sm:h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{loaderCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: loaderHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <ExampleModal onClose={() => setShowExampleModal(false)} />
              )}
            </AnimatePresence>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Formalar
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={formHtmlCode}
                        onChange={setFormHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={formCssCode}
                        onChange={setFormCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Natija qismi */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg p-4 h-[500px] sm:h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{formCssCode}</style>
                      <div dangerouslySetInnerHTML={{ __html: formHtmlCode }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <FormExampleModal onClose={() => setShowExampleModal(false)} />
              )}
            </AnimatePresence>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Parallax Effect
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={parallaxHtmlCode}
                        onChange={setParallaxHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={parallaxCssCode}
                        onChange={setParallaxCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[600px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{parallaxCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: parallaxHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <ParallaxExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Dark/Light Mode
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={darkModeHtmlCode}
                        onChange={setDarkModeHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={darkModeCssCode}
                        onChange={setDarkModeCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[500px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{darkModeCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: darkModeHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <DarkModeExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 8:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Grid Layout
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={gridHtmlCode}
                        onChange={setGridCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      Css
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={gridCssCode}
                        onChange={setGridCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[600px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{gridCssCode}</style>
                      <div dangerouslySetInnerHTML={{ __html: gridHtmlCode }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {showExampleModal && (
                <GridExampleModal onClose={() => setShowExampleModal(false)} />
              )}
            </AnimatePresence>
          </div>
        );

      case 9:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Scroll Animatsiya
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={scrollHtmlCode}
                        onChange={setScrollHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={scrollCssCode}
                        onChange={setScrollCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{scrollCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: scrollHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <ScrollExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 10:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Custom Buttons
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={buttonHtmlCode}
                        onChange={setButtonHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={buttonCssCode}
                        onChange={setButtonCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{buttonCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: buttonHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <ButtonExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 11:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  CSS Animations
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={animationHtmlCode}
                        onChange={setAnimationHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={animationCssCode}
                        onChange={setAnimationCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{animationCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: animationHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <AnimationExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 12:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Flexbox Layout
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={flexboxHtmlCode}
                        onChange={setFlexboxHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={flexboxCssCode}
                        onChange={setFlexboxCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{flexboxCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: flexboxHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <FlexboxExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 13:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  CSS Grid Advanced
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={gridAdvancedHtmlCode}
                        onChange={setGridAdvancedHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={gridAdvancedCssCode}
                        onChange={setGridAdvancedCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{gridAdvancedCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: gridAdvancedHtmlCode,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <GridAdvancedExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 14:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  3D Transforms
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={transforms3dHtmlCode}
                        onChange={setTransforms3dHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={transforms3dCssCode}
                        onChange={setTransforms3dCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[700px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{transforms3dCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: transforms3dHtmlCode,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <Transforms3dExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 15:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  CSS Variables
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={cssVarHtmlCode}
                        onChange={setCssVarHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={cssVarCode}
                        onChange={setCssVarCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[500px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{cssVarCode}</style>
                      <div
                        dangerouslySetInnerHTML={{ __html: cssVarHtmlCode }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <CssVarExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      case 16:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Glassmorphism
                </h2>
                <button
                  onClick={() => setShowExampleModal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MdPreview className="text-xl" />
                  Namunani ko'rish
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                {/* HTML Editor */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaHtml5
                        className="mr-2 text-[#E34F26]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      HTML
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#E34F26] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="html"
                        value={glassmorphismHtmlCode}
                        onChange={setGlassmorphismHtmlCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  {/* CSS Editor */}
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCss3Alt
                        className="mr-2 text-[#264DE4]"
                        style={{ fontSize: "1.5rem" }}
                      />
                      CSS
                    </h3>
                    <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden ring-1 ring-gray-200 hover:ring-[#264DE4] transition-all duration-300">
                      <Editor
                        height="100%"
                        defaultLanguage="css"
                        value={glassmorphismCssCode}
                        onChange={setGlassmorphismCssCode}
                        theme="vs-dark"
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          folding: true,
                          scrollBeyondLastLine: false,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={checkSolution}
                    className="w-full bg-gradient-to-r from-[#E34F26] to-[#264DE4] text-white py-3 px-4 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Tekshirish
                  </button>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 flex items-center">
                    <MdPreview
                      className="mr-2 text-green-500"
                      style={{ fontSize: "1.5rem" }}
                    />
                    Natija
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E34F26] to-[#264DE4] rounded-xl blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg h-[600px] overflow-auto shadow-sm ring-1 ring-gray-200 hover:ring-green-400 transition-all duration-300">
                      <style>{glassmorphismCssCode}</style>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: glassmorphismHtmlCode,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showExampleModal && (
                <GlassmorphismExampleModal
                  onClose={() => setShowExampleModal(false)}
                />
              )}
            </AnimatePresence>
          </div>
        );

      default:
        return <div>Mavzu tanlang</div>;
    }
  };

  const [formHtmlCode, setFormHtmlCode] = useState(`<form class="contact-form">
  <div class="form-header">
    <h2>Bog'lanish Formasi</h2>
    <p>Barcha maydonlarni to'ldiring</p>
  </div>
  
  <div class="form-group">
    <label for="name">Ism</label>
    <input type="text" id="name" placeholder="Ismingizni kiriting" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email manzilingiz" required>
  </div>
  
  <div class="form-group">
    <label for="phone">Telefon</label>
    <input type="tel" id="phone" placeholder="+998 90 123 45 67">
  </div>
  
  <div class="form-group">
    <label for="subject">Mavzu</label>
    <select id="subject">
      <option value="">Mavzuni tanlang</option>
      <option value="general">Umumiy savol</option>
      <option value="support">Texnik yordam</option>
      <option value="billing">To'lov masalasi</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Xabar</label>
    <textarea id="message" placeholder="Xabaringizni yozing" rows="5"></textarea>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="agree">
    <label for="agree">Shartlarga roziman</label>
  </div>
  
  <button type="submit" class="submit-button">
    Yuborish
  </button>
</form>`);

  const [formCssCode, setFormCssCode] = useState(`/* Form uchun CSS yozing */
.contact-form {
  
}

.form-header {
  
}

.form-group {
  
}

.form-group label {
  
}

.form-group input,
.form-group select,
.form-group textarea {
  
}

.checkbox-group {
  
}

.submit-button {
  
}

/* Hover va Focus effektlari */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  
}

.submit-button:hover {
  
}`);

  const correctFormCss = `
.contact-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h2 {
  color: #1a1a1a;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #666;
  font-size: 0.875rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #f9fafb;
  color: #1a1a1a;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-group input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border-color: #e5e7eb;
}

.checkbox-group label {
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #4b5563;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
}

@media (max-width: 640px) {
  .contact-form {
    padding: 1.5rem;
  }
  
  .form-header h2 {
    font-size: 1.25rem;
  }
  
  .submit-button {
    padding: 0.625rem;
  }
}`;

  const FormExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Forma - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctFormCss}</style>
          <div dangerouslySetInnerHTML={{ __html: formHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Responsive forma yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Input va textarea stillarini sozlash</li>
            <li>Focus holatlarini qo'shish</li>
            <li>Submit button hover effekti</li>
            <li>Responsive dizayn</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // Add these new state variables after other useState declarations
  const [parallaxHtmlCode, setParallaxHtmlCode] =
    useState(`<div class="parallax-container">
    <!-- Hero Section -->
    <section class="parallax-section hero-section">
      <div class="content">
        <h1>Parallax Effect</h1>
        <p>Scroll down to see the magic</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="content">
        <h2>Welcome to Our Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>

    <!-- Parallax Section 1 -->
    <section class="parallax-section nature-section">
      <div class="content">
        <h2>Discover Nature</h2>
        <p>Experience the beauty of natural landscapes</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="content">
        <h2>Our Mission</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>

    <!-- Parallax Section 2 -->
    <section class="parallax-section city-section">
      <div class="content">
        <h2>Urban Life</h2>
        <p>Explore the city landscapes</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="content">
        <h2>Get in Touch</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </section>
  </div>`);

  const [parallaxCssCode, setParallaxCssCode] =
    useState(`/* Parallax effect uchun CSS yozing */
.parallax-container {
  
}

.parallax-section {
  
}

.content-section {
  
}

.content {
  
}

.hero-section {
  
}

.nature-section {
  
}

.city-section {
  
}

/* Responsive styles */
@media (max-width: 768px) {
  
}`);

  const correctParallaxCss = `
  .parallax-container {
    width: 100%;
    overflow-x: hidden;
  }

  .parallax-section {
    position: relative;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }

  .content-section {
    padding: 4rem 2rem;
    background: white;
    text-align: center;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero-section {
    background-image: url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d');
  }

  .nature-section {
    background-image: url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e');
  }

  .city-section {
    background-image: url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df');
  }

  .parallax-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .parallax-section .content {
    position: relative;
    z-index: 2;
  }

  .parallax-section h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .parallax-section h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .parallax-section p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .content-section h2 {
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .content-section p {
    font-size: 1.125rem;
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .parallax-section {
      background-attachment: scroll;
      height: 60vh;
    }

    .parallax-section h1 {
      font-size: 2.5rem;
    }

    .parallax-section h2 {
      font-size: 2rem;
    }

    .parallax-section p {
      font-size: 1rem;
    }

    .content-section {
      padding: 3rem 1.5rem;
    }

    .content-section h2 {
      font-size: 1.75rem;
    }

    .content-section p {
      font-size: 1rem;
    }
  }`;

  const ParallaxExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Parallax Effect - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctParallaxCss}</style>
          <div dangerouslySetInnerHTML={{ __html: parallaxHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Parallax effektni yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Fixed background-attachment</li>
            <li>Smooth scrolling effect</li>
            <li>Responsive design</li>
            <li>Overlay effects</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // Add these new state variables after other useState declarations
  const [darkModeHtmlCode, setDarkModeHtmlCode] =
    useState(`<div class="theme-container">
  <!-- Header -->
  <header class="header">
    <h1>Dark/Light Mode</h1>
    <button class="theme-toggle">
      <span class="sun-icon">☀️</span>
      <span class="moon-icon">🌙</span>
    </button>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    <div class="card">
      <h2>Welcome to Our Website</h2>
      <p>This is a sample text to demonstrate dark/light mode functionality.</p>
      <button class="action-button">Learn More</button>
    </div>

    <div class="card">
      <h2>Features</h2>
      <ul class="feature-list">
        <li>Easy theme switching</li>
        <li>Smooth transitions</li>
        <li>Accessible design</li>
        <li>Responsive layout</li>
      </ul>
    </div>

    <div class="card">
      <h2>Contact Us</h2>
      <form class="contact-form">
        <input type="email" placeholder="Enter your email">
        <textarea placeholder="Your message"></textarea>
        <button type="submit" class="action-button">Send Message</button>
      </form>
    </div>
  </main>
</div>`);

  const [darkModeCssCode, setDarkModeCssCode] =
    useState(`/* Dark/Light Mode uchun CSS yozing */
:root {
  
}

[data-theme="dark"] {
  
}

.theme-container {
  
}

.header {
  
}

.theme-toggle {
  
}

.card {
  
}

.action-button {
  
}

/* Dark mode transitions */
.theme-container * {
  
}

/* Responsive styles */
@media (max-width: 768px) {
  
}`);

  const correctDarkModeCss = `
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f3f4f6;
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    --accent: #3b82f6;
    --border: #e5e7eb;
    --shadow: rgba(0, 0, 0, 0.1);
  }

  [data-theme="dark"] {
    --bg-primary: #1f2937;
    --bg-secondary: #111827;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --accent: #60a5fa;
    --border: #374151;
    --shadow: rgba(0, 0, 0, 0.3);
  }

  .theme-container {
    min-height: 100vh;
    background: var(--bg-primary);
    color: var(--text-primary);
    padding: 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .header h1 {
    font-size: 1.875rem;
    font-weight: 700;
  }

  .theme-toggle {
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px var(--shadow);
  }

  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid var(--border);
    box-shadow: 0 4px 6px var(--shadow);
  }

  .card h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .card p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .feature-list {
    list-style-type: none;
    padding: 0;
  }

  .feature-list li {
    color: var(--text-secondary);
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border);
  }

  .feature-list li:last-child {
    border-bottom: none;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 0.75rem;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    color: var(--text-primary);
  }

  .contact-form textarea {
    min-height: 100px;
    resize: vertical;
  }

  .action-button {
    background: var(--accent);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .action-button:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px var(--shadow);
  }

  /* Dark mode transitions */
  .theme-container * {
    transition: background-color 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .theme-container {
      padding: 1rem;
    }

    .header {
      margin-bottom: 1.5rem;
    }

    .header h1 {
      font-size: 1.5rem;
    }

    .card {
      padding: 1rem;
    }
  }`;

  const DarkModeExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Dark/Light Mode - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctDarkModeCss}</style>
          <div dangerouslySetInnerHTML={{ __html: darkModeHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Dark/Light mode yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>CSS variables for themes</li>
            <li>Smooth transitions</li>
            <li>Accessible design</li>
            <li>Responsive layout</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  const [gridHtmlCode, setGridHtmlCode] = useState(`
    <div class="grid-container">
    <!-- Header Section -->
    <header class="header">
    <h1>Grid Layout Example</h1>
    <nav class="nav-menu">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Services</a>
    <a href="#" class="nav-link">Contact</a>
    </nav>
    </header>
    
    <main class="main-content">
    <article class="featured-post">
      <h2>Featured Article</h2>
      <p>This is a featured article that spans multiple grid columns.</p>
      <button class="read-more">Read More</button>
    </article>

    <div class="card">
      <h3>Card 1</h3>
      <p>Grid item with some content.</p>
    </div>

    <div class="card">
      <h3>Card 2</h3>
      <p>Another grid item with content.</p>
    </div>

    <div class="card">
      <h3>Card 3</h3>
      <p>Yet another grid item.</p>
    </div>
  </main>

   <!-- Sidebar -->
  <aside class="sidebar">
    <div class="widget">
      <h3>Categories</h3>
      <ul>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Design</a></li>
        <li><a href="#">Development</a></li>
        <li><a href="#">Business</a></li>
      </ul>
    </div>
  </aside>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2024 Grid Layout Example</p>
  </footer>
    </div>
    `);

  const [gridCssCode, setGridCssCode] = useState(`
      .grid-container{
      }
      .header{
      }
      .nav-menu{
      }
      .main-content{
      }
      .featured-post{
      }
      .card{
      }
      .sidebar{
      }
      .footer{
      }
      @media (max-width:768px){
      }
      `);

  const correctGridCss = `
      .grid-container{
      display:grid;
      grid-template-columns: repeat(12,1fr);
      grid-template-rows:auto 1fr auto;
      gap:1.5rem;
      max-width:1200px;
      margin:0 auto;
      padding:1.5rem;
      min-height:100vh;

      .header{
      grid-column:1 / -1;
      background:#2563eb;
      color:white;
      padding:1.5rem;
      border-radius:0.5rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      box-shadow:0 4px 6px rgba(0,0,0,0.1);
      }

      .header h1{
      font-size:1.5rem;
      font-weight:600;
      }

      .nav-menu{
      display:flex;
      gap:1.5rem;
      }

      .nav-link{
      color:white;
      text-decoration:none;
      padding:0.5rem 1rem;
      border-radius:0.25rem;
      transition:background-color 0.3s ease;
      }

      .nav-link:hover{
      background-color:rgba(255,255,255,0.1);
      }

      .main-content{
      grid-column: 1 / 10;
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
      gap:1.5rem;
      }

      .featured-post{
      grid-column:1 / -1;
      background:white;
      padding:2rem;
      border-radius:0.5rem;
      box-shadow:0 4px 6px rgba(0,0,0,0.1);
      }

      .featured-post h2{
      font-size:1.5rem;
      color:#1a1a1a;
      margin-bottom:1rem;
      }
      .featured-post p{
      color:#4a5563;
      margin-bottom:1rem;
      }

      .read-more{
      background:#2563eb;
      color:white;
      padding:0.5rem 1rem;
      border:none;
      border-radius:0.25rem;
      cursor:pointer;
      transition:backround-color 0.3s ease;
      }

      .read-more:hover{
      background:#1d4ed8;
      }

      .card{
      backround:white;
      padding:1.5rem;
      border-radius:0.5rem;
      box-shadow:0 2px 4px rgba(0,0,0,0.1);
      }

      .card h3{
      font-size:1.25rem;
      color:#1a1a1a;
      margin-bottom:0.5rem;
      }

      .card p{
      color:#4a5563;
      }
      .sidebar {
  grid-column: 10 / -1;
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.widget h3 {
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.widget ul {
  list-style: none;
  padding: 0;
}

.widget li {
  margin-bottom: 0.5rem;
}

.widget a {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.3s ease;
}
  .widget a:hover {
  color: #2563eb;
}

.footer {
  grid-column: 1 / -1;
  background: #1f2937;
  color: white;
  padding: 1.5rem;
  text-align: center;
  border-radius: 0.5rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .grid-container {
    gap: 1rem;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-content {
    grid-column: 1 / -1;
  }

  .sidebar {
    grid-column: 1 / -1;
  }   
    }
      `;

  const GridExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Grid Layout - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctGridCss}</style>
          <div dangerouslySetInnerHTML={{ __html: gridHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Grid Layout yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>12 column grid system</li>
            <li>Responsive design</li>
            <li>Grid areas</li>
            <li>Nested grids</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  const [scrollHtmlCode, setScrollHtmlCode] =
    useState(`<div class="scroll-container">
  <!-- Hero Section -->
  <section class="hero">
    <h1>Welcome to Our Website</h1>
    <p>Scroll down to see animations</p>
  </section>

  <!-- Features Section -->
  <section class="features">
    <h2>Our Features</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="icon">🚀</div>
        <h3>Fast Performance</h3>
        <p>Lightning quick load times</p>
      </div>
      <div class="feature-card">
        <div class="icon">🎨</div>
        <h3>Beautiful Design</h3>
        <p>Modern and clean interface</p>
      </div>
      <div class="feature-card">
        <div class="icon">📱</div>
        <h3>Responsive</h3>
        <p>Works on all devices</p>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about">
    <div class="about-content">
      <h2>About Us</h2>
      <p>We create amazing digital experiences</p>
    </div>
    <div class="about-image">
      <img src="https://picsum.photos/500/300" alt="About Us">
    </div>
  </section>

  <!-- Stats Section -->
  <section class="stats">
    <div class="stat-item">
      <h3>500+</h3>
      <p>Projects</p>
    </div>
    <div class="stat-item">
      <h3>100+</h3>
      <p>Clients</p>
    </div>
    <div class="stat-item">
      <h3>50+</h3>
      <p>Awards</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact">
    <h2>Get in Touch</h2>
    <p>Let's work together</p>
    <button class="cta-button">Contact Us</button>
  </section>
</div>`);

  const [scrollCssCode, setScrollCssCode] =
    useState(`/* Scroll animations uchun CSS yozing */
.scroll-container {
  
}

.hero {
  
}

.features {
  
}

.feature-card {
  
}

.about {
  
}

.stats {
  
}

.contact {
  
}

/* Animations */
[data-scroll] {
  
}

/* Responsive styles */
@media (max-width: 768px) {
  
}`);

  const correctScrollCss = `
.scroll-container {
  overflow-x: hidden;
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s forwards;
}

.hero p {
  font-size: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s 0.3s forwards;
}

.features {
  padding: 6rem 2rem;
  background: #f7fafc;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.about {
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.about-content {
  opacity: 0;
  transform: translateX(-50px);
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-image {
  opacity: 0;
  transform: translateX(50px);
}

.about-image img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stats {
  padding: 6rem 2rem;
  background: #1a202c;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  opacity: 0;
  transform: translateY(30px);
}

.stat-item h3 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.contact {
  padding: 6rem 2rem;
  text-align: center;
  background: #f7fafc;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
}

.contact p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  background: #4c1d95;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.cta-button:hover {
  transform: translateY(-2px);
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[data-scroll] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

[data-scroll].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive styles */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1.25rem;
  }

  .about {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .stats {
    gap: 1rem;
  }
}`;

  const ScrollExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Scroll Animatsiya - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctScrollCss}</style>
          <div dangerouslySetInnerHTML={{ __html: scrollHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Scroll animatsiyalarini yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Fade in animatsiyasi</li>
            <li>Slide animatsiyalari</li>
            <li>Scroll trigger</li>
            <li>Responsive dizayn</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // State variables for Custom Buttons
  const [buttonHtmlCode, setButtonHtmlCode] =
    useState(`<div class="button-container">
  <!-- Gradient Button -->
  <button class="gradient-btn">
    Gradient Button
  </button>

  <!-- Neon Button -->
  <button class="neon-btn">
    Neon Button
  </button>

  <!-- 3D Button -->
  <button class="three-d-btn">
    3D Button
  </button>

  <!-- Outline Button -->
  <button class="outline-btn">
    Outline Button
  </button>

  <!-- Ripple Button -->
  <button class="ripple-btn">
    Ripple Effect
  </button>

  <!-- Icon Button -->
  <button class="icon-btn">
    <span class="icon">🚀</span>
    Icon Button
  </button>

  <!-- Hover Slide Button -->
  <button class="slide-btn">
    Hover Slide
  </button>

  <!-- Pulse Button -->
  <button class="pulse-btn">
    Pulse Effect
  </button>
</div>`);

  const [buttonCssCode, setButtonCssCode] =
    useState(`/* Custom Buttons uchun CSS yozing */
.button-container {
  
}

.gradient-btn {
  
}

.neon-btn {
  
}

.three-d-btn {
  
}

.outline-btn {
  
}

.ripple-btn {
  
}

.icon-btn {
  
}

.slide-btn {
  
}

.pulse-btn {
  
}

/* Hover Effects */


/* Animations */
@keyframes pulse {
  
}

@keyframes ripple {
  
}`);

  const correctButtonCss = `
.button-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Gradient Button */
.gradient-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.gradient-btn:hover {
  background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Neon Button */
.neon-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background: #2d3436;
  border: 2px solid #00ff00;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 5px #00ff00;
  box-shadow: 0 0 5px #00ff00,
              0 0 25px #00ff00,
              0 0 50px #00ff00,
              0 0 100px #00ff00;
  transition: all 0.3s ease;
}

.neon-btn:hover {
  background: #00ff00;
  color: #2d3436;
  text-shadow: none;
}

/* 3D Button */
.three-d-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 6px #c0392b;
  transition: all 0.1s ease;
}

.three-d-btn:hover {
  box-shadow: 0 4px #c0392b;
  transform: translateY(2px);
}

.three-d-btn:active {
  box-shadow: 0 0 #c0392b;
  transform: translateY(6px);
}

/* Outline Button */
.outline-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #3498db;
  background: transparent;
  border: 2px solid #3498db;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.outline-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #3498db;
  transition: all 0.3s ease;
  z-index: -1;
}

.outline-btn:hover {
  color: white;
}

.outline-btn:hover::before {
  width: 100%;
}

/* Ripple Button */
.ripple-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #9b59b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.ripple-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.ripple-btn:active::after {
  width: 200px;
  height: 200px;
  opacity: 0;
}

/* Icon Button */
.icon-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #2ecc71;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.icon-btn .icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.icon-btn:hover .icon {
  transform: translateX(3px);
}

/* Hover Slide Button */
.slide-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #f1c40f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.slide-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #f39c12;
  transition: all 0.3s ease;
  z-index: -1;
}

.slide-btn:hover::before {
  left: 0;
}

/* Pulse Button */
.pulse-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #e056fd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(224, 86, 253, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(224, 86, 253, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(224, 86, 253, 0);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .button-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  button {
    width: 100%;
  }
}`;

  const ButtonExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Custom Buttons - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctButtonCss}</style>
          <div dangerouslySetInnerHTML={{ __html: buttonHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Custom buttonlar yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Gradient effektlar</li>
            <li>Hover animatsiyalar</li>
            <li>3D effektlar</li>
            <li>Responsive dizayn</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // State variables for CSS Animations
  const [animationHtmlCode, setAnimationHtmlCode] =
    useState(`<div class="animations-container">
  <!-- Bounce Animation -->
  <div class="animation-box bounce-animation">
    <div class="box">Bounce</div>
  </div>

  <!-- Rotate Animation -->
  <div class="animation-box rotate-animation">
    <div class="box">Rotate</div>
  </div>

  <!-- Shake Animation -->
  <div class="animation-box shake-animation">
    <div class="box">Shake</div>
  </div>

  <!-- Fade Animation -->
  <div class="animation-box fade-animation">
    <div class="box">Fade</div>
  </div>

  <!-- Scale Animation -->
  <div class="animation-box scale-animation">
    <div class="box">Scale</div>
  </div>

  <!-- Slide Animation -->
  <div class="animation-box slide-animation">
    <div class="box">Slide</div>
  </div>

  <!-- Flip Animation -->
  <div class="animation-box flip-animation">
    <div class="box">Flip</div>
  </div>

  <!-- Swing Animation -->
  <div class="animation-box swing-animation">
    <div class="box">Swing</div>
  </div>
</div>`);

  const [animationCssCode, setAnimationCssCode] =
    useState(`/* CSS Animations uchun CSS yozing */
.animations-container {
  
}

.animation-box {
  
}

.box {
  
}

/* Bounce Animation */
@keyframes bounce {
  
}

/* Rotate Animation */
@keyframes rotate {
  
}

/* Shake Animation */
@keyframes shake {
  
}

/* Fade Animation */
@keyframes fade {
  
}

/* Scale Animation */
@keyframes scale {
  
}

/* Slide Animation */
@keyframes slide {
  
}

/* Flip Animation */
@keyframes flip {
  
}

/* Swing Animation */
@keyframes swing {
  
}`);

  const correctAnimationCss = `
.animations-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.animation-box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: #f8fafc;
  border-radius: 1rem;
  padding: 1rem;
}

.box {
  width: 100px;
  height: 100px;
  background: #3b82f6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
}

/* Bounce Animation */
.bounce-animation .box {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* Rotate Animation */
.rotate-animation .box {
  animation: rotate 3s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Shake Animation */
.shake-animation .box {
  animation: shake 0.5s infinite;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}

/* Fade Animation */
.fade-animation .box {
  animation: fade 2s infinite;
}

@keyframes fade {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Scale Animation */
.scale-animation .box {
  animation: scale 2s infinite;
}

@keyframes scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Slide Animation */
.slide-animation .box {
  animation: slide 2s infinite;
}

@keyframes slide {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }
}

/* Flip Animation */
.flip-animation .box {
  animation: flip 2s infinite;
  transform-style: preserve-3d;
}

@keyframes flip {
  0%, 100% {
    transform: perspective(400px) rotateY(0);
  }
  50% {
    transform: perspective(400px) rotateY(180deg);
  }
}

/* Swing Animation */
.swing-animation .box {
  animation: swing 2s infinite;
  transform-origin: top center;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
}

/* Hover Effects */
.box:hover {
  filter: brightness(1.1);
}

/* Responsive styles */
@media (max-width: 768px) {
  .animations-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .animation-box {
    min-height: 150px;
  }

  .box {
    width: 80px;
    height: 80px;
    font-size: 0.875rem;
  }
}`;

  const AnimationExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            CSS Animations - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctAnimationCss}</style>
          <div dangerouslySetInnerHTML={{ __html: animationHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: CSS Animatsiyalarni yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Bounce effekti</li>
            <li>Rotate animatsiyasi</li>
            <li>Shake effekti</li>
            <li>Fade animatsiyasi</li>
            <li>Scale effekti</li>
            <li>Slide animatsiyasi</li>
            <li>Flip effekti</li>
            <li>Swing animatsiyasi</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // State variables for Flexbox Layout
  const [flexboxHtmlCode, setFlexboxHtmlCode] =
    useState(`<div class="flexbox-container">
  <!-- Navigation -->
  <nav class="flex-nav">
    <div class="logo">Logo</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="flex-hero">
    <div class="hero-content">
      <h1>Welcome to Flexbox</h1>
      <p>Learn flexible box layout</p>
    </div>
    <div class="hero-image">
      <div class="image-placeholder">Image</div>
    </div>
  </section>

  <!-- Card Container -->
  <section class="flex-cards">
    <div class="card">
      <div class="card-icon">🎨</div>
      <h3>Design</h3>
      <p>Creative designs</p>
    </div>
    <div class="card">
      <div class="card-icon">💻</div>
      <h3>Development</h3>
      <p>Clean code</p>
    </div>
    <div class="card">
      <div class="card-icon">🚀</div>
      <h3>Launch</h3>
      <p>Quick delivery</p>
    </div>
  </section>

  <!-- Feature Section -->
  <section class="flex-features">
    <div class="feature-text">
      <h2>Our Features</h2>
      <p>Discover what makes us special</p>
    </div>
    <div class="feature-items">
      <div class="feature-item">
        <span class="feature-icon">✨</span>
        <div class="feature-info">
          <h4>Feature 1</h4>
          <p>Amazing feature description</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🎯</span>
        <div class="feature-info">
          <h4>Feature 2</h4>
          <p>Incredible feature details</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="flex-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>Company information</p>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Get in touch</p>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <p>Social media links</p>
      </div>
    </div>
  </footer>
</div>`);

  const [flexboxCssCode, setFlexboxCssCode] =
    useState(`/* Flexbox Layout uchun CSS yozing */
.flexbox-container {
  
}

/* Navigation */
.flex-nav {
  
}

.nav-links {
  
}

/* Hero Section */
.flex-hero {
  
}

/* Cards Section */
.flex-cards {
  
}

.card {
  
}

/* Features Section */
.flex-features {
  
}

.feature-items {
  
}

/* Footer */
.flex-footer {
  
}

/* Responsive Design */
@media (max-width: 768px) {
  
}`);

  const correctFlexboxCss = `
.flexbox-container {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

/* Navigation */
.flex-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.nav-links a:hover {
  opacity: 0.8;
}

/* Hero Section */
.flex-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;
  background: #f8fafc;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #1e293b;
}

.hero-content p {
  font-size: 1.25rem;
  color: #64748b;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: #64748b;
}

/* Cards Section */
.flex-cards {
  display: flex;
  gap: 2rem;
  padding: 4rem 2rem;
  background: white;
}

.card {
  flex: 1;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card h3 {
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card p {
  color: #64748b;
}

/* Features Section */
.flex-features {
  display: flex;
  gap: 4rem;
  padding: 4rem 2rem;
  background: #f8fafc;
}

.feature-text {
  flex: 1;
}

.feature-text h2 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.feature-text p {
  color: #64748b;
}

.feature-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateX(10px);
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-info h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.feature-info p {
  color: #64748b;
}

/* Footer */
.flex-footer {
  background: #1e293b;
  color: white;
  padding: 4rem 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.footer-section {
  flex: 1;
}

.footer-section h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.footer-section p {
  color: #94a3b8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .flex-nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }

  .flex-hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .flex-cards {
    flex-direction: column;
  }

  .flex-features {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}`;

  const FlexboxExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Flexbox Layout - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctFlexboxCss}</style>
          <div dangerouslySetInnerHTML={{ __html: flexboxHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Flexbox Layout yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Responsive navigation</li>
            <li>Hero section</li>
            <li>Card layout</li>
            <li>Feature section</li>
            <li>Footer layout</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // State variables for CSS Grid Advanced
  const [gridAdvancedHtmlCode, setGridAdvancedHtmlCode] =
    useState(`<div class="grid-container">
  <!-- Header -->
  <header class="header">
    <h1>Advanced Grid Layout</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    <!-- Featured Post -->
    <article class="featured-post">
      <img src="https://picsum.photos/800/400" alt="Featured">
      <div class="post-content">
        <h2>Featured Article</h2>
        <p>This is a featured post with a large image and detailed content.</p>
      </div>
    </article>

    <!-- Grid Gallery -->
    <section class="grid-gallery">
      <div class="gallery-item item-1">
        <img src="https://picsum.photos/300/300" alt="Gallery 1">
      </div>
      <div class="gallery-item item-2">
        <img src="https://picsum.photos/301/300" alt="Gallery 2">
      </div>
      <div class="gallery-item item-3">
        <img src="https://picsum.photos/302/300" alt="Gallery 3">
      </div>
      <div class="gallery-item item-4">
        <img src="https://picsum.photos/303/300" alt="Gallery 4">
      </div>
      <div class="gallery-item item-5">
        <img src="https://picsum.photos/304/300" alt="Gallery 5">
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid">
      <div class="service">
        <span class="icon">🎨</span>
        <h3>Design</h3>
        <p>Creative design solutions</p>
      </div>
      <div class="service">
        <span class="icon">💻</span>
        <h3>Development</h3>
        <p>Custom web development</p>
      </div>
      <div class="service">
        <span class="icon">📱</span>
        <h3>Mobile</h3>
        <p>Responsive solutions</p>
      </div>
      <div class="service">
        <span class="icon">🚀</span>
        <h3>Performance</h3>
        <p>Speed optimization</p>
      </div>
    </section>

    <!-- Dashboard Grid -->
    <section class="dashboard-grid">
      <div class="dashboard-item stats">
        <h3>Statistics</h3>
        <div class="stat-grid">
          <div class="stat">
            <h4>Users</h4>
            <p>1,234</p>
          </div>
          <div class="stat">
            <h4>Views</h4>
            <p>5,678</p>
          </div>
          <div class="stat">
            <h4>Sales</h4>
            <p>910</p>
          </div>
        </div>
      </div>
      <div class="dashboard-item chart">
        <h3>Chart</h3>
        <div class="chart-placeholder">
          📊 Chart Area
        </div>
      </div>
      <div class="dashboard-item activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>New user registered</li>
          <li>Order completed</li>
          <li>Report generated</li>
        </ul>
      </div>
    </section>
  </main>

  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="widget">
      <h3>About</h3>
      <p>Advanced CSS Grid layout example with various grid techniques.</p>
    </div>
    <div class="widget">
      <h3>Categories</h3>
      <ul>
        <li>Design</li>
        <li>Development</li>
        <li>Technology</li>
      </ul>
    </div>
  </aside>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Contact</h4>
        <p>info@example.com</p>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <p>Social Media Links</p>
      </div>
      <div class="footer-section">
        <h4>Newsletter</h4>
        <p>Subscribe for updates</p>
      </div>
    </div>
  </footer>
</div>`);

  const [gridAdvancedCssCode, setGridAdvancedCssCode] =
    useState(`/* Advanced CSS Grid Layout uchun CSS yozing */
.grid-container {
  
}

.header {
  
}

.main-content {
  
}

.featured-post {
  
}

.grid-gallery {
  
}

.services-grid {
  
}

.dashboard-grid {
  
}

.sidebar {
  
}

.footer {
  
}

/* Responsive Design */
@media (max-width: 768px) {
  
}`);

  const correctGridAdvancedCss = `
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
  grid-template-columns: 1fr 1fr 300px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  grid-area: header;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
  background: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
}

.nav {
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
  justify-self: end;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.main-content {
  grid-area: main;
  display: grid;
  gap: 2rem;
}

.featured-post {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.featured-post img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.post-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
}

.grid-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 0.5rem;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.item-1 {
  grid-column: span 2;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.service {
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s;
}

.service:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.dashboard-item {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 1rem;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.chart {
  grid-row: span 2;
}

.chart-placeholder {
  height: 300px;
  display: grid;
  place-items: center;
  background: #eef2ff;
  border-radius: 0.5rem;
  font-size: 2rem;
}

.sidebar {
  grid-area: sidebar;
  display: grid;
  gap: 1.5rem;
  align-content: start;
}

.widget {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 1rem;
}

.footer {
  grid-area: footer;
  background: #1e293b;
  color: white;
  padding: 2rem;
  border-radius: 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-areas:
      "header header"
      "main main"
      "sidebar sidebar"
      "footer footer";
    grid-template-columns: 1fr 1fr;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .chart {
    grid-row: auto;
  }
}

@media (max-width: 768px) {
  .header {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }

  .nav {
    justify-self: center;
    grid-auto-flow: row;
    gap: 1rem;
  }

  .grid-gallery {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 200px);
  }

  .item-1 {
    grid-column: auto;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}`;

  const GridAdvancedExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            CSS Grid Advanced - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-600">
            Advanced CSS Grid Layout quyidagi xususiyatlarni o'z ichiga oladi:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
            <li>Grid template areas</li>
            <li>Murakkab grid layout</li>
            <li>Responsive dizayn</li>
            <li>Gallery grid</li>
            <li>Dashboard layout</li>
            <li>Service grid</li>
            <li>Nested grids</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctGridAdvancedCss}</style>
          <div dangerouslySetInnerHTML={{ __html: gridAdvancedHtmlCode }} />
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // 3D Transforms uchun HTML va CSS state'lari
  const [transforms3dHtmlCode, setTransforms3dHtmlCode] =
    useState(`<div class="transforms-container">
  <!-- Cube -->
  <div class="cube-container">
    <div class="cube">
      <div class="face front">Front</div>
      <div class="face back">Back</div>
      <div class="face right">Right</div>
      <div class="face left">Left</div>
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
    </div>
  </div>

  <!-- Flip Card -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>Hover Me</h3>
        <p>See what's on the back</p>
      </div>
      <div class="flip-card-back">
        <h3>Hello!</h3>
        <p>This is the back side</p>
      </div>
    </div>
  </div>

  <!-- Rotating Pyramid -->
  <div class="pyramid-container">
    <div class="pyramid">
      <div class="pyramid-face front"></div>
      <div class="pyramid-face right"></div>
      <div class="pyramid-face back"></div>
      <div class="pyramid-face left"></div>
    </div>
  </div>

  <!-- 3D Button -->
  <button class="button-3d">
    3D Button
  </button>

  <!-- Carousel -->
  <div class="carousel">
    <div class="carousel-item">1</div>
    <div class="carousel-item">2</div>
    <div class="carousel-item">3</div>
    <div class="carousel-item">4</div>
  </div>
</div>`);

  const [transforms3dCssCode, setTransforms3dCssCode] =
    useState(`/* 3D Transforms uchun CSS yozing */
.transforms-container {
  
}

/* Cube */
.cube-container {
  
}

.cube {
  
}

.face {
  
}

/* Flip Card */
.flip-card {
  
}

.flip-card-inner {
  
}

/* Pyramid */
.pyramid-container {
  
}

.pyramid {
  
}

/* 3D Button */
.button-3d {
  
}

/* Carousel */
.carousel {
  
}`);

  // To'g'ri CSS yechim
  const correctTransforms3dCss = `
  .transforms-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    perspective: 1000px;
  }

  /* Cube */
  .cube-container {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    perspective: 1000px;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 10s infinite linear;
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .front { 
    background: rgba(65, 105, 225, 0.8);
    transform: translateZ(100px);
  }

  .back { 
    background: rgba(65, 105, 225, 0.8);
    transform: translateZ(-100px) rotateY(180deg);
  }

  .right {
    background: rgba(65, 105, 225, 0.8);
    transform: translateX(100px) rotateY(90deg);
  }

  .left {
    background: rgba(65, 105, 225, 0.8);
    transform: translateX(-100px) rotateY(-90deg);
  }

  .top {
    background: rgba(65, 105, 225, 0.8);
    transform: translateY(-100px) rotateX(90deg);
  }

  .bottom {
    background: rgba(65, 105, 225, 0.8);
    transform: translateY(100px) rotateX(-90deg);
  }

  @keyframes rotate {
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }

  /* Flip Card */
  .flip-card {
    width: 200px;
    height: 250px;
    margin: 0 auto;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(45deg, #2193b0, #6dd5ed);
    color: white;
  }

  .flip-card-back {
    background: linear-gradient(45deg, #ee9ca7, #ffdde1);
    color: #333;
    transform: rotateY(180deg);
  }

  /* Pyramid */
  .pyramid-container {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    perspective: 1000px;
  }

  .pyramid {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotatePyramid 8s infinite linear;
  }

  .pyramid-face {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 200px solid rgba(65, 105, 225, 0.8);
  }

  .pyramid-face.front { transform: translateZ(100px) rotateX(-30deg); }
  .pyramid-face.right { transform: rotateY(90deg) translateZ(100px) rotateX(-30deg); }
  .pyramid-face.back { transform: rotateY(180deg) translateZ(100px) rotateX(-30deg); }
  .pyramid-face.left { transform: rotateY(-90deg) translateZ(100px) rotateX(-30deg); }

  @keyframes rotatePyramid {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
  }

  /* 3D Button */
  .button-3d {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: #2193b0;
    border: none;
    border-radius: 0.5rem;
    transform-style: preserve-3d;
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.3s;
    cursor: pointer;
    position: relative;
  }

  .button-3d::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #6dd5ed;
    transform: translateZ(-20px);
    border-radius: 0.5rem;
  }

  .button-3d:hover {
    transform: perspective(1000px) translateZ(10px);
  }

  /* Carousel */
  .carousel {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    animation: rotateCarousel 10s infinite linear;
  }

  .carousel-item {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    background: rgba(65, 105, 225, 0.8);
    border-radius: 1rem;
  }

  .carousel-item:nth-child(1) { transform: rotateY(0) translateZ(200px); }
  .carousel-item:nth-child(2) { transform: rotateY(90deg) translateZ(200px); }
  .carousel-item:nth-child(3) { transform: rotateY(180deg) translateZ(200px); }
  .carousel-item:nth-child(4) { transform: rotateY(270deg) translateZ(200px); }

  @keyframes rotateCarousel {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
  }
  `;

  // 3D Transforms Example Modal komponenti
  const Transforms3dExampleModal = ({ onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              3D Transforms - Namuna
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-600">
              3D Transforms quyidagi elementlarni o'z ichiga oladi:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>3D Cube</li>
              <li>Flip Card</li>
              <li>3D Pyramid</li>
              <li>3D Button</li>
              <li>3D Carousel</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <style>{correctTransforms3dCss}</style>
            <div dangerouslySetInnerHTML={{ __html: transforms3dHtmlCode }} />
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Yopish
          </button>
        </motion.div>
      </motion.div>
    );
  };

  // Add these state variables at the top with other useState declarations
  const [cssVarHtmlCode, setCssVarHtmlCode] =
    useState(`<div class="theme-container">
  <div class="color-palette">
    <div class="color primary">Primary Color</div>
    <div class="color secondary">Secondary Color</div>
    <div class="color accent">Accent Color</div>
  </div>
  
  <div class="content-section">
    <h1>CSS Variables Demo</h1>
    <p>This is a paragraph with themed text color.</p>
    <button class="themed-button">Themed Button</button>
  </div>
  
  <div class="card-container">
    <div class="themed-card">
      <h3>Card Title</h3>
      <p>Card content with themed colors and spacing.</p>
    </div>
  </div>
</div>`);

  const [cssVarCode, setCssVarCode] =
    useState(`/* CSS Variables uchun kod yozing */
:root {
  
}

.theme-container {
  
}

.color-palette {
  
}

.color {
  
}

.content-section {
  
}

.themed-button {
  
}

.themed-card {
  
}`);

  const correctCssVarCode = `
  :root {
    --primary-color: #3b82f6;
    --secondary-color: #10b981;
    --accent-color: #8b5cf6;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --spacing-unit: 1rem;
    --border-radius: 8px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .theme-container {
    background-color: var(--bg-color);
    padding: calc(var(--spacing-unit) * 2);
    max-width: 800px;
    margin: 0 auto;
  }

  .color-palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-unit);
    margin-bottom: calc(var(--spacing-unit) * 2);
  }

  .color {
    padding: var(--spacing-unit);
    border-radius: var(--border-radius);
    color: white;
    text-align: center;
    font-weight: bold;
    box-shadow: var(--shadow);
  }

  .color.primary {
    background-color: var(--primary-color);
  }

  .color.secondary {
    background-color: var(--secondary-color);
  }

  .color.accent {
    background-color: var(--accent-color);
  }

  .content-section {
    color: var(--text-color);
    margin-bottom: calc(var(--spacing-unit) * 2);
  }

  .content-section h1 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-unit);
  }

  .themed-button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: calc(var(--spacing-unit) * 0.75) calc(var(--spacing-unit) * 1.5);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .themed-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }

  .themed-card {
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    padding: calc(var(--spacing-unit) * 1.5);
    box-shadow: var(--shadow);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .themed-card h3 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-unit);
  }

  .themed-card p {
    color: var(--text-color);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #1f2937;
      --text-color: #f3f4f6;
    }
  }`;

  // Add the CssVarExampleModal component
  const CssVarExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            CSS Variables - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctCssVarCode}</style>
          <div dangerouslySetInnerHTML={{ __html: cssVarHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: CSS Variables yordamida dinamik stillar yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Root o'zgaruvchilarini e'lon qilish</li>
            <li>Ranglar va spacing uchun o'zgaruvchilar</li>
            <li>O'zgaruvchilarni ishlatish</li>
            <li>Dark mode uchun media query</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  // Add these state variables with the other useState declarations
  const [glassmorphismHtmlCode, setGlassmorphismHtmlCode] =
    useState(`<div class="glass-container">
  <!-- Glass Card -->
  <div class="glass-card">
    <div class="glass-content">
      <h2>Glass Card</h2>
      <p>Experience the beauty of glassmorphism design</p>
      <button class="glass-button">Learn More</button>
    </div>
  </div>

  <!-- Glass Dashboard -->
  <div class="glass-dashboard">
    <div class="dashboard-header">
      <h3>Dashboard</h3>
      <div class="user-profile">
        <span class="avatar">👤</span>
        <span>John Doe</span>
      </div>
    </div>
    <div class="dashboard-stats">
      <div class="stat-card">
        <h4>Users</h4>
        <p>1,234</p>
      </div>
      <div class="stat-card">
        <h4>Revenue</h4>
        <p>$5,678</p>
      </div>
      <div class="stat-card">
        <h4>Orders</h4>
        <p>910</p>
      </div>
    </div>
  </div>

  <!-- Glass Navigation -->
  <nav class="glass-nav">
    <a href="#" class="nav-item active">
      <span class="icon">🏠</span>
      <span>Home</span>
    </a>
    <a href="#" class="nav-item">
      <span class="icon">📊</span>
      <span>Analytics</span>
    </a>
    <a href="#" class="nav-item">
      <span class="icon">⚙️</span>
      <span>Settings</span>
    </a>
  </nav>

  <!-- Glass Form -->
  <div class="glass-form">
    <h3>Contact Us</h3>
    <form>
      <div class="form-group">
        <input type="text" placeholder="Name" class="glass-input">
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email" class="glass-input">
      </div>
      <div class="form-group">
        <textarea placeholder="Message" class="glass-input"></textarea>
      </div>
      <button type="submit" class="glass-submit">Send Message</button>
    </form>
  </div>
</div>`);

  const [glassmorphismCssCode, setGlassmorphismCssCode] =
    useState(`/* Glassmorphism uchun CSS yozing */
.glass-container {
  
}

.glass-card {
  
}

.glass-dashboard {
  
}

.glass-nav {
  
}

.glass-form {
  
}`);

  const correctGlassmorphismCss = `
.glass-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  overflow: hidden;
}

.glass-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 30%);
}

/* Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
}

.glass-content {
  color: white;
}

.glass-content h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.glass-button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Glass Dashboard */
.glass-dashboard {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  color: white;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  font-size: 1.5rem;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  text-align: center;
}

.stat-card h4 {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.stat-card p {
  font-size: 1.25rem;
  font-weight: bold;
}

/* Glass Navigation */
.glass-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.nav-item .icon {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

/* Glass Form */
.glass-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  color: white;
}

.glass-form h3 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.glass-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: white;
  outline: none;
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

textarea.glass-input {
  min-height: 100px;
  resize: vertical;
}

.glass-submit {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.glass-submit:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .glass-container {
    padding: 1rem;
    gap: 1rem;
  }

  .dashboard-stats {
    grid-template-columns: 1fr;
  }

  .glass-nav {
    padding: 0.5rem;
  }

  .nav-item .icon {
    font-size: 1.25rem;
  }
}`;

  // Add the GlassmorphismExampleModal component
  const GlassmorphismExampleModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] w-full max-h-[90vh] overflow-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Glassmorphism - Namuna
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <style>{correctGlassmorphismCss}</style>
          <div dangerouslySetInnerHTML={{ __html: glassmorphismHtmlCode }} />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Vazifa: Glassmorphism effektlarini yarating:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Shaffof fon</li>
            <li>Blur effekti</li>
            <li>Border effekti</li>
            <li>Gradient fon</li>
            <li>Hover effektlari</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Yopish
        </button>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`fixed lg:relative w-64 bg-white shadow-lg h-screen z-40
              ${isMobileMenuOpen ? "block" : "hidden lg:block"}`}
          >
            <div className="p-4 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  CSS Amaliyot
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="space-y-1">
                {topics.map((topic) => (
                  <motion.button
                    key={topic.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedTopic(topic.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg 
                      transition-colors duration-200 ${
                        selectedTopic === topic.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <span className="text-xl mr-3">{topic.icon}</span>
                    <span className="text-sm font-medium">{topic.title}</span>
                    {topic.isCompleted && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 ml-auto text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </motion.svg>
                    )}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Header */}
            <div className="lg:hidden mb-6 pl-12">
              <h1 className="text-2xl font-bold text-gray-800">
                {topics.find((t) => t.id === selectedTopic)?.title ||
                  "CSS Amaliyot"}
              </h1>
            </div>

            {renderContent()}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default CssPractice;

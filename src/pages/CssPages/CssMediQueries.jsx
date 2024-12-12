import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

function CssMediQueries() {
  const [activeTab, setActiveTab] = useState('responsive-nav');

  const codeExamples = {
    'responsive-nav': {
      title: "Responsive Navigation",
      description: "Zamonaviy responsive navigatsiya",
      code: `/* Responsive Navigation */
nav {
  background: white;
  padding: 1rem;
}

/* Desktop Menu */
.nav-menu {
  display: flex;
  gap: 2rem;
}

/* Mobile Menu */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
  }

  .nav-menu.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}`,
      demo: (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-purple-600">Home</a>
              <a href="#" className="hover:text-purple-600">About</a>
              <a href="#" className="hover:text-purple-600">Services</a>
            </div>
          </nav>
        </div>
      )
    },

    'responsive-grid': {
      title: "Responsive Grid Layout",
      description: "Moslashuvchan grid sistema",
      code: `/* Responsive Grid */
.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;  /* Mobile */
}

/* Tablet */
@media (min-width: 640px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
      demo: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow">
              <div className="h-40 bg-purple-100 rounded-lg mb-4"></div>
              <h3 className="font-bold">Card {item}</h3>
            </div>
          ))}
        </div>
      )
    },

    'responsive-typography': {
      title: "Responsive Typography",
      description: "Moslashuvchan shriftlar",
      code: `/* Responsive Typography */
/* Base styles (Mobile) */
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem;    /* 32px */
  line-height: 1.2;
}

p {
  font-size: 1rem;    /* 16px */
  line-height: 1.5;
}

/* Tablet */
@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  html {
    font-size: 20px;
  }
}`,
      demo: (
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Responsive Heading
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            This is a responsive paragraph that changes size based on screen width.
          </p>
        </div>
      )
    },

    'responsive-images': {
      title: "Responsive Images",
      description: "Moslashuvchan rasmlar",
      code: `/* Responsive Images */
.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.img-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .img-container {
    padding-bottom: 75%; /* 4:3 Aspect Ratio for tablets */
  }
}`,
      demo: (
        <div className="relative w-full pt-[56.25%]">
          <img 
            src="https://source.unsplash.com/random/800x600"
            alt="Responsive"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      )
    },

    'flex-layout': {
      title: "Responsive Flex Layout",
      description: "Moslashuvchan flex layout",
      code: `/* Responsive Flex Layout */
.flex-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
  }

  .flex-item {
    flex: 1;
  }
}`,
      demo: (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-white p-4 rounded-lg shadow">Flex Item 1</div>
          <div className="flex-1 bg-white p-4 rounded-lg shadow">Flex Item 2</div>
          <div className="flex-1 bg-white p-4 rounded-lg shadow">Flex Item 3</div>
        </div>
      )
    }
  };

  const mobileExamples = {
    'mobile-nav': {
      title: "Mobil Navigatsiya",
      description: "Mobil qurilmalar uchun responsive navigatsiya",
      code: `/* Mobile Navigation */
/* Base styles */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Mobile Menu (Default) */
.nav-menu {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-menu.active {
  display: block;
}

.nav-item {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
}

.nav-toggle {
  display: block;
}

/* Desktop styles */
@media (min-width: 768px) {
  .nav-menu {
    position: static;
    display: flex;
    padding: 0;
    box-shadow: none;
  }

  .nav-item {
    padding: 0;
    border: none;
    margin-left: 2rem;
  }

  .nav-toggle {
    display: none;
  }
}`,
      demo: (
        <div className="relative">
          {/* Mobile Navigation Demo */}
          <nav className="bg-white shadow-lg rounded-lg">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold">Logo</span>
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">About</a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">Services</a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">Contact</a>
                </div>
                <div className="md:hidden">
                  <button className="text-gray-600 hover:text-purple-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    },

    'mobile-grid': {
      title: "Mobil Grid Layout",
      description: "Mobil qurilmalarga moslashgan grid sistema",
      code: `/* Mobile Grid System */
.grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

/* Mobile (default) */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Grid items */
.grid-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
      demo: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-md">
              <div className="h-32 bg-purple-100 rounded-lg mb-2"></div>
              <h3 className="font-bold">Item {item}</h3>
              <p className="text-gray-600">Description</p>
            </div>
          ))}
        </div>
      )
    },

    'mobile-typography': {
      title: "Mobil Typography",
      description: "Mobil qurilmalarga moslashgan matn o'lchamlari",
      code: `/* Mobile Typography */
/* Base (Mobile) */
html {
  font-size: 14px;
}

h1 {
  font-size: 1.75rem;
  line-height: 1.2;
}

h2 {
  font-size: 1.5rem;
  line-height: 1.3;
}

p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Tablet */
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  html {
    font-size: 18px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
}`,
      demo: (
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Responsive Heading 1
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Responsive Heading 2
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            This is a responsive paragraph that adjusts its size based on screen width.
          </p>
        </div>
      )
    },

    'mobile-images': {
      title: "Mobil Rasmlar",
      description: "Mobil qurilmalarga moslashgan rasmlar",
      code: `/* Mobile Images */
/* Responsive image */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Image container with aspect ratio */
.img-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.img-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Different aspect ratios for different screens */
@media (min-width: 768px) {
  .img-container {
    padding-bottom: 75%; /* 4:3 */
  }
}

@media (min-width: 1024px) {
  .img-container {
    padding-bottom: 56.25%; /* 16:9 */
  }
}`,
      demo: (
        <div className="space-y-4">
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
            <img 
              src="https://source.unsplash.com/random/800x600"
              alt="Responsive"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      )
    },

    'mobile-forms': {
      title: "Mobil Formalar",
      description: "Mobil qurilmalarga moslashgan formalar",
      code: `/* Mobile Forms */
.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .form-row {
    display: flex;
    gap: 1rem;
  }

  .form-group {
    flex: 1;
  }
}

/* Touch-friendly inputs on mobile */
@media (max-width: 768px) {
  .form-input {
    padding: 0.875rem;
    font-size: 1.1rem;
  }

  .form-submit {
    width: 100%;
    padding: 1rem;
  }
}`,
      demo: (
        <form className="space-y-4">
          <div className="md:flex md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input 
                type="text"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500"
                placeholder="John"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input 
                type="text"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500"
                placeholder="Doe"
              />
            </div>
          </div>
          <button className="w-full md:w-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Submit
          </button>
        </form>
      )
    }
  };

  // Add new state for practice tasks
  const [taskCode1, setTaskCode1] = useState(`/* Task 1: Create a responsive card layout */
.card-container {
  /* Your code here */
}

.card {
  /* Your code here */
}`);

  const [taskCode2, setTaskCode2] = useState(`/* Task 2: Create a responsive navigation */
.nav {
  /* Your code here */
}

.nav-menu {
  /* Your code here */
}`);

  // Add state for live preview
  const [previewStyle1, setPreviewStyle1] = useState('');
  const [previewStyle2, setPreviewStyle2] = useState('');

  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  // Update preview when code changes
  useEffect(() => {
    setPreviewStyle1(taskCode1);
    setPreviewStyle2(taskCode2);
  }, [taskCode1, taskCode2]);

  const solution1 = `/* Task 1: Responsive Card Layout Solution */
.card-container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: 1fr;  /* Mobile */
}

.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@media (min-width: 640px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);  /* Desktop */
  }
}`;

  const solution2 = `/* Task 2: Responsive Navigation Solution */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
}

.nav-menu {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
}

.nav-menu.active {
  display: block;
}

@media (min-width: 768px) {
  .nav-menu {
    position: static;
    display: flex;
    gap: 2rem;
    padding: 0;
  }
}`;

  const practiceSection = (
    <section className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Amaliy Topshiriqlar
      </h2>

      {/* Task 1 */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">
          Topshiriq 1: Responsive Card Layout
        </h3>
        <p className="mb-4 text-gray-600">
          Mobil, planshet va desktop qurilmalar uchun moslashuvchan card layout yarating.
          Mobil: 1 ustun, Planshet: 2 ustun, Desktop: 3 ustun
        </p>

        {/* Code Editor */}
        <div className="mb-6">
          <Editor
            height="200px"
            defaultLanguage="css"
            value={taskCode1}
            onChange={setTaskCode1}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>

        {/* Live Preview */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Natija:</h4>
          <style>{previewStyle1}</style>
          <div className="card-container">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card">
                <div className="h-20 bg-purple-100 rounded-lg mb-2"></div>
                <h3 className="font-bold">Card {item}</h3>
                <p className="text-gray-600">Card content here</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Button */}
        <button
          onClick={() => setShowSolution1(!showSolution1)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {showSolution1 ? "Yechimni yashirish" : "Yechimni ko'rish"}
        </button>

        {/* Solution */}
        {showSolution1 && (
          <div className="mt-4">
            <Editor
              height="300px"
              defaultLanguage="css"
              value={solution1}
              theme="vs-dark"
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
        )}
      </div>

      {/* Task 2 */}
      <div>
        <h3 className="text-xl font-bold mb-4">
          Topshiriq 2: Responsive Navigation
        </h3>
        <p className="mb-4 text-gray-600">
          Mobil qurilmalarda hamburger menyu, desktop qurilmalarda esa gorizontal menyu ko'rinishida
          ishlaydigon responsive navigatsiya yarating.
        </p>

        {/* Code Editor */}
        <div className="mb-6">
          <Editor
            height="200px"
            defaultLanguage="css"
            value={taskCode2}
            onChange={setTaskCode2}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>

        {/* Live Preview */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Natija:</h4>
          <style>{previewStyle2}</style>
          <div className="nav">
            <div className="nav-brand">Logo</div>
            <div className="nav-menu">
              <a href="#" className="nav-item">Home</a>
              <a href="#" className="nav-item">About</a>
              <a href="#" className="nav-item">Services</a>
              <a href="#" className="nav-item">Contact</a>
            </div>
            <button className="menu-toggle">☰</button>
          </div>
        </div>

        {/* Solution Button */}
        <button
          onClick={() => setShowSolution2(!showSolution2)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {showSolution2 ? "Yechimni yashirish" : "Yechimni ko'rish"}
        </button>

        {/* Solution */}
        {showSolution2 && (
          <div className="mt-4">
            <Editor
              height="300px"
              defaultLanguage="css"
              value={solution2}
              theme="vs-dark"
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Media Queries Namunalari 🎨
          </h1>
          <p className="text-gray-600 text-xl">
            Eng ko'p ishlatiladigan responsive dizayn kodlari
          </p>
        </div>

        {/* Code Examples Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(codeExamples).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors
                ${activeTab === key 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/50 hover:bg-white'}`}
            >
              {codeExamples[key].title}
            </button>
          ))}
        </div>

        {/* Active Example */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {codeExamples[activeTab].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {codeExamples[activeTab].description}
          </p>

          {/* Demo */}
          <div className="mb-8 p-4 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Demo:</h3>
            {codeExamples[activeTab].demo}
          </div>

          {/* Code */}
          <div className="bg-gray-900 rounded-xl p-4">
            <pre className="text-green-400 overflow-x-auto">
              <code>{codeExamples[activeTab].code}</code>
            </pre>
          </div>
        </div>

        {/* Tips Section */}
        <section className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Media Queries - Muhim Eslatmalar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">📱 Mobile-First</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-green-400 overflow-x-auto">
                  <code>{`/* Mobile-First Approach */
.element {
  width: 100%;    /* Mobile */
}

@media (min-width: 768px) {
  .element {
    width: 50%;   /* Tablet */
  }
}

@media (min-width: 1024px) {
  .element {
    width: 33.333%;   /* Desktop */
  }
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">🎯 Breakpoint Variables</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-green-400 overflow-x-auto">
                  <code>{`:root {
  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1024px;
  --large: 1280px;
}

@media (min-width: var(--tablet)) {
  /* Tablet styles */
}

@media (min-width: var(--desktop)) {
  /* Desktop styles */
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Add practice section before the closing div */}
      {practiceSection}
    </div>
  );
}

export default CssMediQueries;
import React, { useState } from "react";

function CssVariables() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Header - Responsive */}
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
            CSS O'zgaruvchilari
          </h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {isDarkMode ? 'Yorug' : "Qorong'u"} rejim
          </button>
        </div>
      </div>

      {/* Main Content - Responsive */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Introduction - Responsive */}
          <div className="lg:col-span-3">
            <section className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
                CSS O'zgaruvchilari Haqida
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                CSS o'zgaruvchilari (CSS Variables) - zamonaviy veb-dasturlashning muhim qismi hisoblanadi. 
                Ular yordamida siz CSS kodingizni qayta ishlatish va samarali boshqarish imkoniyatiga ega bo'lasiz.
              </p>
            </section>
          </div>

          {/* Basic Usage - Responsive */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl h-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
                O'zgaruvchilarni E'lon Qilish va Ishlatish
              </h2>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 md:mb-4">
                    Global o'zgaruvchilar:
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-3 sm:p-4 md:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #e74c3c;
  --text-color: #333333;
  --heading-font: 'Montserrat', sans-serif;
  --body-font: 'Open Sans', sans-serif;
  --spacing-unit: 8px;
  --border-radius: 4px;
}`}
                  </pre>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 md:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 md:mb-4">
                    Komponentlarda ishlatish:
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-3 sm:p-4 md:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`.card {
  background-color: var(--primary-color);
  color: var(--text-color);
  font-family: var(--body-font);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
}

.button {
  background: var(--secondary-color);
  margin: var(--spacing-unit);
  font-family: var(--heading-font);
}`}
                  </pre>
                </div>
              </div>
            </section>
          </div>

          {/* Interactive Examples - Responsive */}
          <div className="lg:col-span-3">
            <section className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
                Interaktiv Namunalar
              </h2>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Button Example - Responsive */}
                <div className="p-3 sm:p-4 md:p-6 border rounded-lg sm:rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    Tugmalar Dizayni
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                    <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-blue-500 text-white rounded-md sm:rounded-lg transition-all duration-300 hover:bg-blue-600 text-sm sm:text-base">
                      Primary Button
                    </button>
                    <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-green-500 text-white rounded-md sm:rounded-lg transition-all duration-300 hover:bg-green-600 text-sm sm:text-base">
                      Secondary Button
                    </button>
                  </div>
                </div>

                {/* Form Example - Responsive */}
                <div className="p-3 sm:p-4 md:p-6 border rounded-lg sm:rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    Forma Elementlari
                  </h3>
                  <form className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">
                        Ismingiz
                      </label>
                      <input 
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Ismingizni kiriting"
                      />
                    </div>
                    <div>
                      <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">
                        Email
                      </label>
                      <input 
                        type="email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Email manzilingiz"
                      />
                    </div>
                  </form>
                </div>

                {/* Card Example - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Card Title</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      This is a sample card with responsive design.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Card Title</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      This is another sample card with responsive design.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Animation Examples - Responsive */}
          <div className="lg:col-span-3">
            <section className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
                Animatsiya Namunalari
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-blue-500 text-white p-4 sm:p-6 rounded-lg sm:rounded-xl text-center">
                    Hover Effect 1
                  </div>
                </div>
                <div className="transform transition-all duration-300 hover:rotate-3">
                  <div className="bg-purple-500 text-white p-4 sm:p-6 rounded-lg sm:rounded-xl text-center">
                    Hover Effect 2
                  </div>
                </div>
                <div className="transform transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-green-500 text-white p-4 sm:p-6 rounded-lg sm:rounded-xl text-center">
                    Hover Effect 3
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Real Examples Section */}
          <div className="lg:col-span-3">
            <section className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
                Real Namunalar
              </h2>

              {/* Theme System Example */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    1. Mavzu Tizimi
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 sm:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`:root {
  /* Light Theme Variables */
  --background-primary: #ffffff;
  --background-secondary: #f3f4f6;
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --accent-color: #3b82f6;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  /* Dark Theme Variables */
  --background-primary: #111827;
  --background-secondary: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --accent-color: #60a5fa;
  --border-color: #374151;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
}

/* Usage */
.card {
  background: var(--background-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}`}
                  </pre>
                </div>

                {/* Responsive Design System */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    2. Responsive Dizayn Tizimi
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 sm:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`:root {
  /* Base Spacing System */
  --spacing-unit: 4px;
  --spacing-xs: calc(var(--spacing-unit) * 2);  /* 8px */
  --spacing-sm: calc(var(--spacing-unit) * 4);  /* 16px */
  --spacing-md: calc(var(--spacing-unit) * 6);  /* 24px */
  --spacing-lg: calc(var(--spacing-unit) * 8);  /* 32px */
  --spacing-xl: calc(var(--spacing-unit) * 12); /* 48px */

  /* Typography Scale */
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-base: 1rem;    /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */

  /* Container Widths */
  --container-max-width: 1280px;
  --container-padding: var(--spacing-md);
}

@media (min-width: 768px) {
  :root {
    --container-padding: var(--spacing-lg);
  }
}

/* Usage */
.container {
  max-width: var(--container-max-width);
  padding: 0 var(--container-padding);
  margin: 0 auto;
}`}
                  </pre>
                </div>

                {/* Component Design System */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    3. Komponent Dizayn Tizimi
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 sm:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`:root {
  /* Button Variables */
  --button-height: 40px;
  --button-padding: 0 16px;
  --button-radius: 6px;
  --button-font-size: var(--font-size-sm);
  --button-transition: all 0.2s ease;

  /* Input Variables */
  --input-height: 40px;
  --input-padding: 0 12px;
  --input-radius: 6px;
  --input-border: 1px solid var(--border-color);
  --input-focus-ring: 0 0 0 2px var(--accent-color);

  /* Card Variables */
  --card-padding: var(--spacing-md);
  --card-radius: 8px;
  --card-shadow: var(--shadow-md);
  --card-bg: var(--background-primary);
}

/* Button Styles */
.button {
  height: var(--button-height);
  padding: var(--button-padding);
  border-radius: var(--button-radius);
  font-size: var(--button-font-size);
  transition: var(--button-transition);
}

/* Input Styles */
.input {
  height: var(--input-height);
  padding: var(--input-padding);
  border-radius: var(--input-radius);
  border: var(--input-border);
}

.input:focus {
  box-shadow: var(--input-focus-ring);
}

/* Card Styles */
.card {
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  background: var(--card-bg);
}`}
                  </pre>
                </div>

                {/* Animation System */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    4. Animatsiya Tizimi
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 sm:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`:root {
  /* Duration Variables */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;

  /* Easing Variables */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Transform Variables */
  --scale-hover: 1.05;
  --translate-hover: -4px;
  --rotate-hover: 3deg;

  /* Animation Presets */
  --transition-base: all var(--duration-normal) var(--ease-in-out);
  --transition-transform: transform var(--duration-normal) var(--ease-out);
  --transition-opacity: opacity var(--duration-normal) var(--ease-in-out);
}

/* Hover Effects */
.hover-scale {
  transition: var(--transition-transform);
}

.hover-scale:hover {
  transform: scale(var(--scale-hover));
}

.hover-lift {
  transition: var(--transition-transform);
}

.hover-lift:hover {
  transform: translateY(var(--translate-hover));
}

/* Fade Animation */
.fade-enter {
  opacity: 0;
  transition: var(--transition-opacity);
}

.fade-enter-active {
  opacity: 1;
}`}
                  </pre>
                </div>

                {/* Grid System */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                    5. Grid Tizimi
                  </h3>
                  <pre className="bg-gray-800 text-green-400 p-4 sm:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
                    {`:root {
  /* Grid Variables */
  --grid-columns: 12;
  --grid-gap: var(--spacing-md);
  --grid-container: var(--container-max-width);

  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

.grid {
  display: grid;
  gap: var(--grid-gap);
  width: 100%;
  max-width: var(--grid-container);
  margin: 0 auto;
}

/* Responsive Grid Templates */
.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}`}
                  </pre>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssVariables;